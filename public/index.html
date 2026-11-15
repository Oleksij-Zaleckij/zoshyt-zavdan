<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no">
<title>Зошит завдань</title>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap">
<style>
:root{--bg:#f4f5fa;--card:#fff;--ink:#1f2433;--mute:#7a8094;--line:#e6e8f0;--acc:#4f46e5;--accfg:#fff;--late:#e11d48;--sh:0 1px 2px rgba(25,25,60,.06),0 6px 16px rgba(25,25,60,.05)}
@media (prefers-color-scheme:dark){:root:not([data-theme]){--bg:#12141c;--card:#1b1e2a;--ink:#eceef6;--mute:#8d93aa;--line:#2b2f40;--acc:#8b93ff;--accfg:#12141c;--late:#fb7185;--sh:none}}
:root[data-theme=light]{--bg:#f4f5fa;--card:#fff;--ink:#1f2433;--mute:#7a8094;--line:#e6e8f0;--acc:#4f46e5;--accfg:#fff}
:root[data-theme=dark]{--bg:#12141c;--card:#1b1e2a;--ink:#eceef6;--mute:#8d93aa;--line:#2b2f40;--acc:#8b93ff;--accfg:#12141c;--late:#fb7185;--sh:none}
:root[data-theme=ocean]{--bg:#e9f3f8;--card:#fff;--ink:#0f2a3a;--mute:#5f8294;--line:#d3e6ee;--acc:#0284c7;--accfg:#fff}
:root[data-theme=forest]{--bg:#edf4ee;--card:#fff;--ink:#172a1e;--mute:#6a8571;--line:#d8e6da;--acc:#15803d;--accfg:#fff}
:root[data-theme=sunset]{--bg:#fdf0e8;--card:#fff;--ink:#3a1f14;--mute:#94705f;--line:#f3dccf;--acc:#ea580c;--accfg:#fff}
:root[data-theme=lavender]{--bg:#f2edfb;--card:#fff;--ink:#2a1c42;--mute:#8573a3;--line:#e3d9f3;--acc:#7c3aed;--accfg:#fff}
:root[data-theme=graphite]{--bg:#0c0c0f;--card:#17171c;--ink:#f2f2f5;--mute:#8a8a96;--line:#26262e;--acc:#f59e0b;--accfg:#1a1200;--late:#fb7185;--sh:none}
*{box-sizing:border-box}
html,body{height:100%;margin:0}
body{background:var(--bg);color:var(--ink);font:400 14.5px/1.45 Manrope,-apple-system,system-ui,"Segoe UI",Roboto,sans-serif;-webkit-tap-highlight-color:transparent;overscroll-behavior:none}
#bgimg,#bgdim{position:fixed;inset:0;z-index:0;pointer-events:none;background-size:cover;background-position:center;display:none}
#bgdim{background:var(--bg)}
.app{position:relative;z-index:1;display:flex;flex-direction:column;height:100vh;height:100dvh;max-width:720px;margin:0 auto}
button,input,select,textarea{font:inherit;color:inherit}
button{cursor:pointer;border:1px solid var(--line);background:var(--card);border-radius:11px;padding:7px 11px;font-size:13px;font-weight:600}
input,textarea{background:var(--card);border:1px solid var(--line);border-radius:11px;padding:9px 11px;font-size:14px;min-width:0}
::placeholder{color:var(--mute);opacity:.8}
:focus-visible{outline:2px solid var(--acc);outline-offset:2px}
.pri{background:var(--acc);color:var(--accfg);border-color:var(--acc)}
.top{flex:none;display:flex;align-items:center;gap:11px;padding:12px 16px 4px}
.ring{position:relative;width:46px;height:46px;flex:none;color:var(--acc)}
.ring svg{width:100%;height:100%;transform:rotate(-90deg)}
.ring circle{fill:none;stroke-width:8;stroke-linecap:round}
.ring .bg{stroke:var(--line)}
.ring .fg{stroke:currentColor;stroke-dasharray:226;stroke-dashoffset:226;transition:stroke-dashoffset .5s}
.ring b{position:absolute;inset:0;display:grid;place-items:center;font-size:11.5px;font-weight:800}
.ttl{flex:1;min-width:0}
.ttl h1{font-size:17px;line-height:1.2;margin:0;font-weight:800;letter-spacing:-.01em}
.sub{color:var(--mute);font-size:12px;margin-top:1px}
.ib{width:36px;height:36px;padding:0;display:grid;place-items:center;font-size:16px;border-radius:50%}
.tools{flex:none;padding:8px 16px 4px}
.tabs{display:flex;gap:6px;margin-bottom:8px}
.chip{border-radius:20px;padding:5px 13px;font-size:12.5px}
.chip.on{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.tools input{width:100%;background:var(--card)}
#list{flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:0 16px 16px}
.day{position:sticky;top:0;z-index:2;display:flex;justify-content:space-between;align-items:center;background:var(--bg);padding:12px 2px 6px;font-weight:800;font-size:12.5px;letter-spacing:.01em}
.day span:last-child{color:var(--mute);font-weight:600;font-size:12px;background:var(--card);border-radius:10px;padding:1px 8px}
.day.late{color:var(--late)}
.has-bg .day{background:var(--bg);background:color-mix(in srgb,var(--bg) 78%,transparent);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border-radius:10px;padding-left:10px;padding-right:10px;margin-top:2px}
.has-bg .add{background:var(--bg);background:color-mix(in srgb,var(--bg) 82%,transparent);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:9px 11px;margin-bottom:7px;box-shadow:var(--sh)}
.card.late{box-shadow:inset 3px 0 0 var(--late),var(--sh)}
.card.today{box-shadow:inset 3px 0 0 var(--acc),var(--sh)}
.card.done .tt{text-decoration:line-through;opacity:.45}
.row{display:flex;align-items:center;gap:10px}
.ck{appearance:none;-webkit-appearance:none;width:22px;height:22px;border-radius:50%;border:2px solid var(--line);padding:0;flex:none;cursor:pointer;display:grid;place-items:center;background:var(--card)}
.ck:checked{background:var(--acc);border-color:var(--acc)}
.ck:checked::after{content:"✓";color:var(--accfg);font-weight:800;font-size:13px}
.tt{flex:1;font-weight:600;font-size:14.5px;word-break:break-word;cursor:pointer}
.x{border:0;background:none;color:var(--mute);padding:2px 6px;font-size:17px}
.nt{margin:5px 0 0 32px;color:var(--mute);font-size:13px;white-space:pre-wrap;word-break:break-word}
.by{margin:3px 0 0 32px;font-size:11.5px;color:var(--mute)}
.edit{margin-top:10px;display:grid;gap:8px}
.edit textarea{min-height:66px;resize:vertical}
.edit .r{display:flex;gap:8px;flex-wrap:wrap}
.danger{color:var(--late)}
.empty,.deny{padding:44px 16px;text-align:center;color:var(--mute);font-size:14px}
.empty big{display:block;font-size:36px;margin-bottom:6px}
.add{flex:none;padding:8px 12px calc(10px + env(safe-area-inset-bottom,0px));background:var(--bg);border-top:1px solid var(--line)}
.add .r{display:flex;gap:8px}
.add .r+.r{margin-top:7px}
.add #txt{flex:1}
.add #due{flex:0 0 auto;width:142px}
.add #nt{flex:1}
.toast{position:fixed;left:50%;top:14px;transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:9px 15px;border-radius:12px;font-size:13px;opacity:0;pointer-events:none;transition:opacity .2s;z-index:30}
.toast.on{opacity:1}
.sheet{position:fixed;inset:0;z-index:20;display:flex;align-items:flex-end}
.sheet[hidden]{display:none}
.sheet-bg{position:absolute;inset:0;background:rgba(10,10,25,.45)}
.sheet-body{position:relative;width:100%;max-width:720px;margin:0 auto;max-height:88vh;max-height:88dvh;overflow-y:auto;background:var(--card);border-radius:22px 22px 0 0;padding:16px 16px calc(18px + env(safe-area-inset-bottom,0px));animation:up .22s ease-out}
@keyframes up{from{transform:translateY(30px);opacity:0}to{transform:none;opacity:1}}
@media (prefers-reduced-motion:reduce){.sheet-body{animation:none}}
.sheet-h{font-weight:800;font-size:15px;margin-bottom:12px}
.sec{font-weight:800;font-size:12.5px;margin:16px 0 8px;color:var(--mute)}
.sw{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.swb{display:flex;flex-direction:column;align-items:center;gap:5px;border:0;background:none;padding:4px 0;font-size:11.5px;font-weight:600;color:var(--ink)}
.swb i{width:44px;height:44px;border-radius:50%;border:2px solid var(--line);display:grid;place-items:center}
.swb i b{width:16px;height:16px;border-radius:50%}
.swb.on i{border-color:var(--acc);box-shadow:0 0 0 3px color-mix(in srgb,var(--acc) 30%,transparent)}
.seg{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.dots{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.dot{width:30px;height:30px;border-radius:50%;border:2px solid var(--line);padding:0}
.dot.on{box-shadow:0 0 0 3px color-mix(in srgb,var(--ink) 35%,transparent)}
#accIn{width:40px;height:34px;padding:0;border-radius:10px;cursor:pointer}
input[type=range]{width:100%;border:0;background:none;padding:0;accent-color:var(--acc)}
.hint{font-size:12px;color:var(--mute);margin-top:6px}
</style>
</head>
<body>
<div id="bgimg"></div><div id="bgdim"></div>
<div class="app">
 <div class="top">
  <div class="ring"><svg viewBox="0 0 84 84"><circle class="bg" cx="42" cy="42" r="36"/><circle class="fg" id="arc" cx="42" cy="42" r="36"/></svg><b id="pct">0%</b></div>
  <div class="ttl"><h1>Зошит завдань</h1><div class="sub" id="sub"></div></div>
  <button class="ib" id="themeBtn" aria-label="Тема оформлення">🎨</button>
  <button class="ib" id="share" aria-label="Поділитися">↗</button>
 </div>
 <div class="tools">
  <div class="tabs" id="tabs"></div>
  <input id="q" type="search" placeholder="Пошук по завданнях…" aria-label="Пошук">
 </div>
 <div id="list"></div>
 <div class="add">
  <div class="r"><input type="text" id="txt" placeholder="Нове завдання…" maxlength="160" aria-label="Нове завдання"><button class="pri" id="addbtn">Додати</button></div>
  <div class="r"><input type="date" id="due" aria-label="Термін виконання"><input type="text" id="nt" placeholder="Коментар (необов’язково)" maxlength="300" aria-label="Коментар"></div>
 </div>
</div>
<div class="sheet" id="sheet" hidden>
 <div class="sheet-bg" data-close="1"></div>
 <div class="sheet-body" id="sbody"></div>
</div>
<input type="file" id="file" accept="image/*" hidden>
<div class="toast" id="toast"></div>
<script>
var tg=window.Telegram&&window.Telegram.WebApp,all=[],filter="open",editing=null,query="",state="loading";
var SK="zoshyt-settings",BK="zoshyt-bg";
var S={theme:"auto",base:"light",accent:"#4f46e5",dim:55},bgImg=null;
var THEMES=[
 ["auto","Авто",null],
 ["light","Світла",["#f4f5fa","#4f46e5"]],
 ["dark","Темна",["#12141c","#8b93ff"]],
 ["ocean","Океан",["#e9f3f8","#0284c7"]],
 ["forest","Ліс",["#edf4ee","#15803d"]],
 ["sunset","Захід",["#fdf0e8","#ea580c"]],
 ["lavender","Лаванда",["#f2edfb","#7c3aed"]],
 ["graphite","Графіт",["#0c0c0f","#f59e0b"]],
 ["custom","Своя",null]
];
var ACCENTS=["#4f46e5","#0284c7","#15803d","#ea580c","#db2777","#7c3aed","#f59e0b","#e11d48"];
function $(id){return document.getElementById(id)}
function hasTheme(n){return THEMES.some(function(t){return t[0]===n})}
function tgTheme(){
 var p=(tg&&tg.themeParams)||{},r=document.documentElement.style;
 if(p.secondary_bg_color)r.setProperty("--bg",p.secondary_bg_color);
 if(p.bg_color)r.setProperty("--card",p.bg_color);
 if(p.text_color)r.setProperty("--ink",p.text_color);
 if(p.hint_color)r.setProperty("--mute",p.hint_color);
 if(p.button_color)r.setProperty("--acc",p.button_color);
 if(p.button_text_color)r.setProperty("--accfg",p.button_text_color);
 r.setProperty("--line","color-mix(in srgb, "+(p.text_color||"#888888")+" 16%, transparent)");
}
function fgFor(hex){
 var h=String(hex||"").replace("#","");if(h.length!==6)return"#ffffff";
 var r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16);
 return(0.299*r+0.587*g+0.114*b)>150?"#1a1a1a":"#ffffff";
}
function applyBg(){
 var i=$("bgimg"),d=$("bgdim");
 if(bgImg){i.style.display="block";i.style.backgroundImage='url("'+bgImg+'")';d.style.display="block";d.style.opacity=String(S.dim/100)}
 else{i.style.display="none";i.style.backgroundImage="none";d.style.display="none"}
 document.documentElement.classList.toggle("has-bg",!!bgImg);
}
function applyTheme(){
 var n=hasTheme(S.theme)?S.theme:"auto",root=document.documentElement;
 root.removeAttribute("style");
 if(n==="auto"){root.removeAttribute("data-theme");if(tg)tgTheme()}
 else if(n==="custom"){
  root.setAttribute("data-theme",S.base==="dark"?"dark":"light");
  root.style.setProperty("--acc",S.accent);root.style.setProperty("--accfg",fgFor(S.accent));
 }else root.setAttribute("data-theme",n);
 applyBg();
 try{
  var bg=getComputedStyle(root).getPropertyValue("--bg").trim();
  if(tg&&bg){tg.setHeaderColor(bg);tg.setBackgroundColor(bg)}
 }catch(e){}
}
function saveSettings(){
 var j=JSON.stringify(S);
 try{localStorage.setItem(SK,j)}catch(e){}
 try{if(tg&&tg.CloudStorage)tg.CloudStorage.setItem(SK,j)}catch(e){}
}
function initSettings(){
 try{
  var j=JSON.parse(localStorage.getItem(SK)||"null");
  if(j&&typeof j==="object")Object.assign(S,j);
  else{var o=localStorage.getItem("zoshyt-theme");if(o&&hasTheme(o))S.theme=o}
 }catch(e){}
 try{bgImg=localStorage.getItem(BK)||null}catch(e){}
 applyTheme();
 try{
  if(tg&&tg.CloudStorage)tg.CloudStorage.getItem(SK,function(err,v){
   if(err||!v)return;
   try{
    var j=JSON.parse(v);
    if(j&&JSON.stringify(j)!==JSON.stringify(S)){Object.assign(S,j);applyTheme();try{localStorage.setItem(SK,JSON.stringify(S))}catch(e){}}
   }catch(e){}
  });
 }catch(e){}
}
if(tg){tg.ready();tg.expand();tg.onEvent("themeChanged",function(){if(S.theme==="auto")applyTheme()});try{tg.disableVerticalSwipes()}catch(e){}}
initSettings();
function renderSheet(){
 var h='<div class="sheet-h">Тема оформлення</div><div class="sw">';
 THEMES.forEach(function(t){
  var sw;
  if(t[0]==="auto")sw='<i style="background:linear-gradient(135deg,#ffffff 50%,#1b1e2a 50%)"><b style="background:#4f46e5"></b></i>';
  else if(t[0]==="custom")sw='<i style="background:conic-gradient(#f43f5e,#f59e0b,#22c55e,#0ea5e9,#8b5cf6,#f43f5e)"><b style="background:'+esc(S.accent)+';border:2px solid #fff"></b></i>';
  else sw='<i style="background:'+t[2][0]+'"><b style="background:'+t[2][1]+'"></b></i>';
  h+='<button class="swb'+(S.theme===t[0]?" on":"")+'" data-th="'+t[0]+'">'+sw+'<span>'+t[1]+'</span></button>';
 });
 h+='</div>';
 if(S.theme==="custom"){
  h+='<div class="sec">Основа</div><div class="seg"><button class="chip'+(S.base!=="dark"?" on":"")+'" data-base="light">Світла</button><button class="chip'+(S.base==="dark"?" on":"")+'" data-base="dark">Темна</button></div>';
  h+='<div class="sec">Колір акценту</div><div class="dots">';
  ACCENTS.forEach(function(c){h+='<button class="dot'+(S.accent.toLowerCase()===c?" on":"")+'" style="background:'+c+'" data-acc="'+c+'" aria-label="Колір '+c+'"></button>'});
  h+='<input type="color" id="accIn" value="'+esc(S.accent)+'" aria-label="Свій колір"></div>';
 }
 h+='<div class="sec">Фонова картинка</div><div class="seg"><button data-pick="1">'+(bgImg?"Замінити":"Обрати з галереї")+'</button>'+(bgImg?'<button data-rmbg="1">Прибрати</button>':"")+'</div>';
 if(bgImg)h+='<div class="sec">Затемнення фону</div><input type="range" id="dim" min="0" max="90" value="'+S.dim+'" aria-label="Затемнення">';
 h+='<div class="hint">Тема й колір зберігаються на вашому акаунті Telegram. Картинка зберігається лише на цьому пристрої.</div>';
 $("sbody").innerHTML=h;
}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function iso(d){var m=d.getMonth()+1,x=d.getDate();return d.getFullYear()+"-"+(m<10?"0":"")+m+"-"+(x<10?"0":"")+x}
function pd(s){var p=s.split("-");return new Date(+p[0],+p[1]-1,+p[2])}
function fmt(s){return pd(s).toLocaleDateString("uk-UA",{day:"numeric",month:"short"})}
function fmtLong(s){var t=pd(s).toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long"});return t.charAt(0).toUpperCase()+t.slice(1)}
function toast(m){var t=$("toast");t.textContent=m;t.className="toast on";setTimeout(function(){t.className="toast"},2400)}
function api(method,url,body){
 return fetch(url,{method:method,headers:{"Content-Type":"application/json","Authorization":"tma "+(tg?tg.initData:"")},body:body?JSON.stringify(body):undefined})
 .then(function(r){if(!r.ok){var e=new Error(r.status);e.status=r.status;throw e}return r.status===204?null:r.json()});
}
function load(){
 return api("GET","/api/tasks").then(function(d){all=d;state="ok";render()}).catch(function(e){
  if(e.status===401||e.status===403){state="denied";render()}else if(state==="loading"){state="error";render()}
 });
}
function byTs(a,b){if(a.done!==b.done)return a.done?1:-1;return a.ts-b.ts}
function render(){
 var box=$("list"),keep=box.scrollTop;
 if(state==="denied"){box.innerHTML='<div class="deny">Немає доступу.<br>Відкрийте застосунок з Telegram і переконайтеся, що ви в групі команди.</div>';return}
 if(state==="error"){box.innerHTML='<div class="deny">Не вдалося завантажити завдання. Спробуйте ще раз пізніше.</div>';return}
 var now=new Date(),today=iso(now),tm=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1),tomorrow=iso(tm);
 var total=all.length,done=all.filter(function(t){return t.done}).length,pc=total?Math.round(done/total*100):0;
 $("pct").textContent=pc+"%";$("arc").style.strokeDashoffset=226-226*pc/100;
 $("sub").textContent=total?"Зроблено "+done+" із "+total:"Поки що порожньо";
 var tabs=[["open","Не зроблені"],["done","Зроблені"],["all","Усі"]];
 $("tabs").innerHTML=tabs.map(function(t){return'<button class="chip'+(filter===t[0]?" on":"")+'" data-f="'+t[0]+'">'+t[1]+'</button>'}).join("");
 var q=query.toLowerCase();
 var arr=all.filter(function(t){
  if(filter==="open"&&t.done)return false;
  if(filter==="done"&&!t.done)return false;
  return!q||((t.t||"")+" "+(t.note||"")).toLowerCase().indexOf(q)>=0;
 });
 var groups={};
 arr.forEach(function(t){
  var k=t.due?(!t.done&&t.due<today?"overdue":t.due):"none";
  (groups[k]=groups[k]||[]).push(t);
 });
 var dates=Object.keys(groups).filter(function(k){return k!=="overdue"&&k!=="none"}).sort();
 var order=[];if(groups.overdue)order.push("overdue");
 order=order.concat(dates);if(groups.none)order.push("none");
 var h="";
 order.forEach(function(k){
  var g=groups[k].sort(function(a,b){
   if(k==="overdue"&&a.due!==b.due)return a.due<b.due?-1:1;
   return byTs(a,b);
  });
  var label=k==="overdue"?"Прострочені":k==="none"?"Без терміну":k===today?"Сьогодні · "+fmtLong(k):k===tomorrow?"Завтра · "+fmtLong(k):fmtLong(k);
  var cls=k==="overdue"?" late":k===today?" today":"";
  h+='<div class="day'+(k==="overdue"?" late":"")+'"><span>'+esc(label)+'</span><span>'+g.length+'</span></div>';
  g.forEach(function(t){
   var dl=(k==="overdue")?'<span class="by" style="margin:0">'+fmt(t.due)+'</span>':"";
   h+='<div class="card'+(t.done?" done":"")+cls+'"><div class="row"><input type="checkbox" class="ck" data-k="'+t.id+'"'+(t.done?" checked":"")+' aria-label="Зроблено"><span class="tt" data-e="'+t.id+'">'+esc(t.t)+'</span>'+dl+'<button class="x" data-e="'+t.id+'" aria-label="Редагувати">✎</button></div>';
   if(t.note&&editing!==t.id)h+='<div class="nt">'+esc(t.note)+'</div>';
   if(editing===t.id){
    h+='<div class="edit"><input type="text" id="e_t" value="'+esc(t.t)+'" maxlength="160" aria-label="Назва"><div class="r"><input type="date" id="e_d" value="'+esc(t.due||"")+'" aria-label="Термін"></div><textarea id="e_n" maxlength="300" placeholder="Коментар" aria-label="Коментар">'+esc(t.note||"")+'</textarea><div class="r"><button class="pri" data-save="'+t.id+'">Зберегти</button><button data-cancel="1">Скасувати</button><button class="danger" data-del="'+t.id+'">Видалити</button></div></div>';
   }
   h+='<div class="by">додав(ла): '+esc(t.by)+'</div></div>';
  });
 });
 box.innerHTML=h||'<div class="empty"><big>📓</big>'+(total?"Нічого не знайдено.":"У зошиті ще немає завдань.<br>Додайте перше знизу.")+'</div>';
 box.scrollTop=keep;
}
function fail(){toast("Не вдалося зберегти. Спробуйте ще раз.");load()}
function find(id){return all.filter(function(t){return String(t.id)===String(id)})[0]}
function patch(id,o){var t=find(id);if(t)Object.assign(t,o);render();api("PATCH","/api/tasks/"+id,o).then(load).catch(fail)}
function add(){
 var v=$("txt").value.trim();if(!v){$("txt").focus();return}
 var body={t:v,due:$("due").value,note:$("nt").value.trim()};
 $("txt").value="";$("due").value="";$("nt").value="";
 api("POST","/api/tasks",body).then(load).catch(fail);
}
$("addbtn").onclick=add;
$("txt").onkeydown=function(e){if(e.key==="Enter")add()};
$("q").oninput=function(){query=this.value;render()};
$("themeBtn").onclick=function(){renderSheet();$("sheet").hidden=false};
$("file").onchange=function(){
 var f=this.files&&this.files[0];this.value="";if(!f)return;
 var rd=new FileReader();
 rd.onload=function(){
  var im=new Image();
  im.onload=function(){
   var sc=Math.min(1,1280/Math.max(im.width,im.height)),c=document.createElement("canvas");
   c.width=Math.max(1,Math.round(im.width*sc));c.height=Math.max(1,Math.round(im.height*sc));
   c.getContext("2d").drawImage(im,0,0,c.width,c.height);
   var url=c.toDataURL("image/jpeg",0.72);
   try{localStorage.setItem(BK,url);bgImg=url;applyTheme();renderSheet()}
   catch(e){toast("Не вдалося зберегти картинку")}
  };
  im.onerror=function(){toast("Не вдалося відкрити картинку")};
  im.src=rd.result;
 };
 rd.readAsDataURL(f);
};
document.addEventListener("input",function(e){
 if(e.target.id==="dim"){S.dim=+e.target.value;applyBg()}
 else if(e.target.id==="accIn"){S.accent=e.target.value;applyTheme()}
});
document.addEventListener("change",function(e){
 if(e.target.id==="dim"||e.target.id==="accIn"){saveSettings();if(e.target.id==="accIn")renderSheet();return}
 var k=e.target.dataset&&e.target.dataset.k;if(k)patch(k,{done:e.target.checked});
});
document.addEventListener("click",function(e){
 var th=e.target.closest("[data-th]");
 if(th){S.theme=th.dataset.th;applyTheme();saveSettings();renderSheet();return}
 var bs=e.target.closest("[data-base]");
 if(bs){S.base=bs.dataset.base;applyTheme();saveSettings();renderSheet();return}
 var ac=e.target.closest("[data-acc]");
 if(ac){S.accent=ac.dataset.acc;applyTheme();saveSettings();renderSheet();return}
 if(e.target.closest("[data-pick]")){$("file").click();return}
 if(e.target.closest("[data-rmbg]")){try{localStorage.removeItem(BK)}catch(x){}bgImg=null;applyTheme();renderSheet();return}
 if(e.target.closest("[data-close]")){$("sheet").hidden=true;return}
 var f=e.target.closest("[data-f]");if(f){filter=f.dataset.f;$("list").scrollTop=0;render();return}
 var ed=e.target.closest("[data-e]");if(ed){editing=String(editing)===ed.dataset.e?null:+ed.dataset.e;render();return}
 var sv=e.target.closest("[data-save]");
 if(sv){var v=$("e_t").value.trim();if(!v){toast("Назва не може бути порожньою");return}
  var id=sv.dataset.save;editing=null;patch(id,{t:v,due:$("e_d").value,note:$("e_n").value.trim()});return}
 if(e.target.closest("[data-cancel]")){editing=null;render();return}
 var d=e.target.closest("[data-del]");
 if(d){var id2=d.dataset.del;editing=null;all=all.filter(function(t){return String(t.id)!==id2});render();api("DELETE","/api/tasks/"+id2).then(load).catch(fail)}
});
$("share").onclick=function(){
 var act=all.filter(function(t){return!t.done}).sort(function(a,b){var x=a.due||"9999",y=b.due||"9999";return x<y?-1:x>y?1:a.ts-b.ts});
 if(!act.length){toast("Немає активних завдань");return}
 var out="📓 Зошит завдань\n\n";
 act.forEach(function(t){out+="⬜ "+t.t+(t.due?" (до "+fmt(t.due)+")":"")+(t.note?"\n    "+t.note:"")+"\n"});
 if(tg&&tg.openTelegramLink){tg.openTelegramLink("https://t.me/share/url?url="+encodeURIComponent(location.origin)+"&text="+encodeURIComponent(out))}
 else if(navigator.clipboard){navigator.clipboard.writeText(out).then(function(){toast("Скопійовано")})}
};
render();load();
setInterval(function(){if(!document.hidden&&editing===null&&state==="ok")load()},10000);
</script>
</body>
</html>
