const express = require("express");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

const BOT_TOKEN = process.env.BOT_TOKEN;
const TEAM_CHAT_ID = process.env.TEAM_CHAT_ID || "";
const ALLOWED = (process.env.ALLOWED_USER_IDS || "").split(",").map(s => s.trim()).filter(Boolean);
const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || path.join(__dirname, "data", "zoshyt.db");

if (!BOT_TOKEN) { console.error("Не задано BOT_TOKEN"); process.exit(1); }
if (!TEAM_CHAT_ID && !ALLOWED.length) {
  console.error("Задайте TEAM_CHAT_ID (група команди) або ALLOWED_USER_IDS (список id через кому)");
  process.exit(1);
}

fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");
db.exec(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  note TEXT NOT NULL DEFAULT '',
  due TEXT NOT NULL DEFAULT '',
  done INTEGER NOT NULL DEFAULT 0,
  by_id TEXT NOT NULL,
  by_name TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
)`);

try { db.exec("ALTER TABLE tasks ADD COLUMN prio INTEGER NOT NULL DEFAULT 0"); } catch (e) { /* колонка вже є */ }

// Перевірка підпису Telegram (initData)
function verifyInitData(initData) {
  if (!initData) return null;
  const p = new URLSearchParams(initData);
  const hash = p.get("hash");
  if (!hash) return null;
  p.delete("hash");
  const str = [...p.entries()].map(([k, v]) => k + "=" + v).sort().join("\n");
  const secret = crypto.createHmac("sha256", "WebAppData").update(BOT_TOKEN).digest();
  const calc = crypto.createHmac("sha256", secret).update(str).digest("hex");
  const a = Buffer.from(calc), b = Buffer.from(hash);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  if (Date.now() / 1000 - Number(p.get("auth_date") || 0) > 86400) return null;
  try { return JSON.parse(p.get("user")); } catch (e) { return null; }
}

// Чи входить людина до команди
const memberCache = new Map();
async function isTeamMember(userId) {
  if (ALLOWED.includes(String(userId))) return true;
  if (!TEAM_CHAT_ID) return false;
  const c = memberCache.get(userId);
  if (c && Date.now() - c.t < 5 * 60 * 1000) return c.ok;
  let ok = false;
  try {
    const r = await fetch("https://api.telegram.org/bot" + BOT_TOKEN + "/getChatMember?chat_id=" +
      encodeURIComponent(TEAM_CHAT_ID) + "&user_id=" + userId);
    const j = await r.json();
    if (j.ok) {
      const s = j.result.status;
      ok = ["creator", "administrator", "member"].includes(s) || (s === "restricted" && j.result.is_member);
    }
  } catch (e) { console.error("getChatMember:", e.message); }
  memberCache.set(userId, { ok, t: Date.now() });
  return ok;
}

async function auth(req, res, next) {
  const h = req.get("Authorization") || "";
  const user = h.startsWith("tma ") ? verifyInitData(h.slice(4)) : null;
  if (!user) return res.status(401).json({ error: "unauthorized" });
  if (!(await isTeamMember(user.id))) return res.status(403).json({ error: "forbidden" });
  req.tgUser = { id: String(user.id), name: [user.first_name, user.last_name].filter(Boolean).join(" ") || user.username || "Колега" };
  next();
}

const out = r => ({ id: r.id, t: r.title, note: r.note, due: r.due, done: !!r.done, prio: r.prio ? 1 : 0, by: r.by_name, ts: r.created_at });
const clean = (s, n) => String(s == null ? "" : s).trim().slice(0, n);
const okDate = s => s === "" || /^\d{4}-\d{2}-\d{2}$/.test(s);

const app = express();
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/tasks", auth, (req, res) => {
  res.json(db.prepare("SELECT * FROM tasks ORDER BY created_at").all().map(out));
});

app.post("/api/tasks", auth, (req, res) => {
  const title = clean(req.body.t, 160), note = clean(req.body.note, 300), due = clean(req.body.due, 10), prio = req.body.prio ? 1 : 0;
  if (!title || !okDate(due)) return res.status(400).json({ error: "bad_request" });
  const now = Date.now();
  const info = db.prepare("INSERT INTO tasks (title,note,due,done,prio,by_id,by_name,created_at,updated_at) VALUES (?,?,?,0,?,?,?,?,?)")
    .run(title, note, due, prio, req.tgUser.id, req.tgUser.name, now, now);
  res.status(201).json(out(db.prepare("SELECT * FROM tasks WHERE id=?").get(info.lastInsertRowid)));
});

app.patch("/api/tasks/:id", auth, (req, res) => {
  const row = db.prepare("SELECT * FROM tasks WHERE id=?").get(req.params.id);
  if (!row) return res.status(404).json({ error: "not_found" });
  const b = req.body, f = {};
  if (b.t !== undefined) { f.title = clean(b.t, 160); if (!f.title) return res.status(400).json({ error: "bad_request" }); }
  if (b.note !== undefined) f.note = clean(b.note, 300);
  if (b.due !== undefined) { f.due = clean(b.due, 10); if (!okDate(f.due)) return res.status(400).json({ error: "bad_request" }); }
  if (b.done !== undefined) f.done = b.done ? 1 : 0;
  if (b.prio !== undefined) f.prio = b.prio ? 1 : 0;
  const keys = Object.keys(f);
  if (keys.length) {
    db.prepare("UPDATE tasks SET " + keys.map(k => k + "=?").join(",") + ",updated_at=? WHERE id=?")
      .run(...keys.map(k => f[k]), Date.now(), row.id);
  }
  res.json(out(db.prepare("SELECT * FROM tasks WHERE id=?").get(row.id)));
});

app.delete("/api/tasks/:id", auth, (req, res) => {
  db.prepare("DELETE FROM tasks WHERE id=?").run(req.params.id);
  res.status(204).end();
});

// ---------- Нагадування в групу ----------
const TZ = process.env.TZ_NAME || "Europe/Kiev";
const APP_LINK = process.env.APP_LINK || "https://t.me/zoshyt_zavdan_bot/alewex";
db.exec("CREATE TABLE IF NOT EXISTS sent (k TEXT PRIMARY KEY, at INTEGER NOT NULL)");

// Дні тижня: 1 = пн ... 7 = нд. Час за київським часом.
const REMINDERS = [
  { id: "digest", time: "09:00", days: [1, 2, 3, 4, 5, 6], type: "digest" },
  { id: "lunch1", time: "10:30", days: [1, 2, 3, 4, 5], text: "🍽 Нагадування: обіди потрібно замовити до 12:00!" },
  { id: "lunch2", time: "11:40", days: [1, 2, 3, 4, 5], text: "⏰ Лишилось 20 хвилин! Хто ще не замовив обід, замовляйте до 12:00." }
];

function nowLocal() {
  const p = {};
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", weekday: "short", hourCycle: "h23"
  }).formatToParts(new Date());
  for (const x of parts) p[x.type] = x.value;
  const wd = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }[p.weekday];
  return { date: p.year + "-" + p.month + "-" + p.day, time: p.hour + ":" + p.minute, wd };
}
const toMin = t => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));

async function sendTG(text) {
  try {
    const r = await fetch("https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TEAM_CHAT_ID,
        text: text.slice(0, 4000),
        reply_markup: { inline_keyboard: [[{ text: "📓 Відкрити зошит", url: APP_LINK }]] }
      })
    });
    const j = await r.json();
    if (!j.ok) console.error("sendMessage:", j.description);
    return !!j.ok;
  } catch (e) { console.error("sendMessage:", e.message); return false; }
}

function digestText(today) {
  const rows = db.prepare("SELECT * FROM tasks WHERE done=0 AND due<>'' AND due<=? ORDER BY prio DESC, due, created_at").all(today);
  const noDue = db.prepare("SELECT COUNT(*) AS n FROM tasks WHERE done=0 AND due=''").get().n;
  if (!rows.length) return null;
  const line = r => (r.prio ? "🔥 " : "• ") + r.title + (r.due < today ? " (до " + r.due.slice(8, 10) + "." + r.due.slice(5, 7) + ")" : "");
  const late = rows.filter(r => r.due < today), now = rows.filter(r => r.due === today);
  let t = "☀️ Доброго ранку! Завдання на сьогодні:\n";
  if (now.length) t += "\n" + now.slice(0, 25).map(line).join("\n") + "\n";
  if (late.length) t += "\n⚠️ Прострочені:\n" + late.slice(0, 25).map(line).join("\n") + "\n";
  if (noDue) t += "\nЩе без терміну: " + noDue;
  return t.trim();
}

async function tick() {
  const n = nowLocal();
  for (const r of REMINDERS) {
    if (!r.days.includes(n.wd)) continue;
    const diff = toMin(n.time) - toMin(r.time);
    if (diff < 0 || diff > 10) continue; // не надсилати надто пізно
    const key = r.id + ":" + n.date;
    if (db.prepare("INSERT OR IGNORE INTO sent (k, at) VALUES (?, ?)").run(key, Date.now()).changes === 0) continue;
    const text = r.type === "digest" ? digestText(n.date) : r.text;
    if (!text) continue;
    if (!(await sendTG(text))) db.prepare("DELETE FROM sent WHERE k=?").run(key); // повторимо наступної хвилини
  }
}
if (TEAM_CHAT_ID) { setInterval(() => tick().catch(e => console.error("tick:", e.message)), 30 * 1000); }

app.listen(PORT, () => console.log("Зошит завдань працює на порту " + PORT));
