
//تمام شعر ها 
const POEMS_DB = [
  {poet:"حافظ", text:"الا یا ایها الساقی ادر کاسا و ناولها / که عشق آسان نمود اول ولی افتاد مشکل‌ها"},
  {poet:"حافظ", text:"دوش دیدم که ملائک در میخانه زدند / گل آدم بسرشتند و به پیمانه زدند"},
  {poet:"حافظ", text:"سحر چون خسرو خاور علم بر کوهساران زد / به دست مرحمت یارم در امیدواران زد"},
  {poet:"حافظ", text:"در ازل پرتو حسنت ز تجلی دم زد / عشق پیدا شد و آتش به همه عالم زد"},
  {poet:"حافظ", text:"گفتم غم تو دارم گفتا غمت سرآید / گفتم که ماه من شو گفتا اگر برآید"},
  {poet:"حافظ", text:"صلاح کار کجا و من خراب کجا / ببین تفاوت ره از کجاست تا به کجا"},
  {poet:"حافظ", text:"بیا تا گل بر افشانیم و می در ساغر اندازیم / فلک را سقف بشکافیم و طرحی نو دراندازیم"},
  {poet:"حافظ", text:"اگر آن ترک شیرازی به دست آرد دل ما را / به خال هندویش بخشم سمرقند و بخارا را"},
  {poet:"حافظ", text:"ساقیا برخیز و درده جام را / خاک بر سر کن غم ایام را"},
  {poet:"حافظ", text:"دلم جز مهر مهرویان طریقی بر نمی‌گیرد / ز هر در می‌دهم فریاد و این در بر نمی‌گیرد"},
  {poet:"حافظ", text:"چو بشنوی سخن اهل دل مگو که خطاست / سخن‌شناس نه‌ای جانِ من خطا این‌جاست"},
  {poet:"حافظ", text:"یوسف گمگشته باز آید به کنعان غم مخور / کلبهٔ احزان شود روزی گلستان غم مخور"},
  {poet:"حافظ", text:"گر مسلمانی از این است که حافظ دارد / وای اگر از پس امروز بود فردایی"},

  {poet:"سعدی", text:"بنی آدم اعضای یکدیگرند / که در آفرینش ز یک گوهرند"},
  {poet:"سعدی", text:"به جهان خرم از آنم که جهان خرم از اوست / عاشقم بر همه عالم که همه عالم از اوست"},
  {poet:"سعدی", text:"وفا کنیم و ملامت کشیم و خوش باشیم / که در طریقت ما کافری‌ست رنجیدن"},
  {poet:"سعدی", text:"تو بر ایوان نشستی منم اندر کوی تو / جان دهم تا باز بینم روی نیکوی تو"},
  {poet:"سعدی", text:"چو دخلت نیست، خرج آهسته‌تر کن / که می‌گویند ملاحان سرودی"},


  {poet:"مولانا", text:"بشنو از نی چون حکایت می‌کند / وز جدایی‌ها شکایت می‌کند"},
  {poet:"مولانا", text:"هر کسی کو دور ماند از اصل خویش / باز جوید روزگار وصل خویش"},
  {poet:"مولانا", text:"ای قوم به حج رفته کجایید کجایید / معشوق همین جاست بیایید بیایید"},
  {poet:"مولانا", text:"چه دانستم که این سودا مرا زین سان کند مجنون / دلم را دوزخی سازد دو چشمم را کند جیحون"},
  {poet:"مولانا", text:"بی‌تو به‌سر نمی‌شود بی‌تو به‌سر نمی‌شود / داغ تو دارد این دلم جای دگر نمی‌شود"},


  {poet:"خیام", text:"ابر آمد و باز بر سر سبزه گریست / بی‌بادهٔ گلگون نتوان زیست"},
  {poet:"خیام", text:"این قافلهٔ عمر عجب می‌گذرد / دریاب دمی که با طرب می‌گذرد"},
  {poet:"خیام", text:"بر لوح نشان بودنی‌ها بوده‌است / پیداست که آنچه بودنی خواهد بود"},
  {poet:"خیام", text:"چون عاقبت کار جهان نیستی است / انگار که نیستی چو هستی خوش باش"},


  {poet:"نظامی", text:"به ناوکِ غمزه کارم ساختی / خونِ دلِ من بخوردی تاختی"},
  {poet:"نظامی", text:"در این شطرنجِ عالم شاهِ ما عشق است / که هر مهره به فرمانِ خطِ او رَست"},

  {poet:"باباطاهر", text:"به دریا بنگرم دریا ته وینم / به صحرا بنگرم صحرا ته وینم"},
  {poet:"باباطاهر", text:"ز دستم بر نمی‌خیزد که دلبر یادم آید / به یادش ناله‌ها خیزد"},

  {poet:"شهریار", text:"علی ای همای رحمت تو چه آیتی خدا را / که به ماسوا فکندی همه سایهٔ هما را"},
  {poet:"شهریار", text:"آمدی جانم به قربانت ولی حالا چرا / بی‌وفا حالا که من افتاده‌ام از پا چرا"},

  {poet:"فروغ", text:"تنها صداست که می‌ماند"},
  {poet:"فروغ", text:"کسی که مثل هیچ‌کس نیست"},

  {poet:"نیما", text:"خانه‌ام ابری‌ست اما / ابر بارانش گرفته‌ست"},
  {poet:"نیما", text:"داروگ! کوه خراب است / در راه که می‌آید؟"},
];
const hafizfal = [
  {
    title: "🌸",
    beyit: "بر سر آنم که گر ز دست برآید / دست به کاری زنم که غصه سرآید",
    tabir: "تصمیمی بزرگ در دل داری و نیتت خیر است. اگر همت کنی و پشتکار نشان دهی، مشکلاتت کم‌کم برطرف می‌شود. آینده روشن‌تر از چیزی است که فکر می‌کنی."
  },
  {
    title: "🌿 ",
    beyit: "هر که دلارام دید از دلش آرام رفت / چشم ندارد خلاص هر که در این دام رفت",
    tabir: "دلت اسیر زیبایی یا علاقه‌ای شده. این حس تو را مشغول کرده، اما در عین حال شیرینی خاصی دارد. اگر نیت عاشقانه داری، به ثبات و ادامه‌دار بودنش امیدوار باش."
  },
  {
    title: "☀️ ",
    beyit: "به حسن و خلق و وفا کس به یار ما نرسد / تو را در این سخن انکار کار ما نرسد",
    tabir: "آدم خوبی در زندگی‌ات هست یا وارد می‌شود که با صفا و باوفاست. قدر این رابطه را بدان، چون کم پیدا می‌شود. اگر هم در شغلت یا کارهایت شریک داری، او بسیار مورد اعتماد است."
  },
  {
    title: "🌙 ",
    beyit: "گر چه بر واعظ شهر این سخن آسان نشود / تا ریا ورزد و سالوس مسلمان نشود",
    tabir: "حافظ می‌گوید حقیقت مهم‌تر از ظاهر و تظاهر است. در مسیر زندگی‌ات با آدم‌هایی روبه‌رو می‌شوی که ظاهرشان با باطن‌شان فرق دارد. مراقب باش فریب ظاهر را نخوری."
  },
  {
    title: "🌹 ",
    beyit: "بی‌دلی در همه احوال خدا با او بود / او نمی‌دیدش و از دور خدایا می‌کرد",
    tabir: "گاهی احساس تنهایی می‌کنی، اما حقیقت این است که خدا همیشه همراهت است. اگر کمی آرام‌تر و امیدوارتر باشی، متوجه می‌شوی در هیچ شرایطی تنها نیستی."
  },
  {
    title: "🔥",
    beyit: "یوسف گمگشته باز آید به کنعان غم مخور / کلبهٔ احزان شود روزی گلستان غم مخور",
    tabir: "خبر خوب و شادی در راه است. غم و سختی‌ها ماندنی نیستند. اگر صبر داشته باشی، اوضاع خیلی زود تغییر می‌کند."
  },
  {
    title: "💫",
    beyit: "صلاح کار کجا و من خراب کجا / ببین تفاوت ره از کجاست تا به کجا",
    tabir: "گاهی فکر می‌کنی خیلی از هدف‌ها دوری، ولی واقعیت این است که هر کس به اندازهٔ تلاشش به مقصد نزدیک می‌شود. فقط کافی است راهت را درست ادامه بدهی."
  },
  {
    title: "🌼 ",
    beyit: "ساقیا برخیز و درده جام را / خاک بر سر کن غم ایام را",
    tabir: "زمان شادی و سبک‌کردن دل است. به جای غصه خوردن، بهتر است کمی به خودت فرصت خوشی و آرامش بدهی. حال دلت را تازه کن."
  },
  {
    title: "🍃 ",
    beyit: "ز کوی یار می‌آید نسیم باد نوروزی / از این باد ار مدد خواهی چراغ دل برافروزی",
    tabir: "نشانه‌ای از نو شدن و امیدواری است. بوی بهار و تغییر در زندگی‌ات پیداست. با انرژی و امید به استقبال این تغییر برو."
  }
];


const pagesize = 8;
const lskey = {
  THEME: "pf_theme",
  FAVORITES_POEMS: "pf_fav_poems",
  FAVORITES_FAL: "pf_fav_fal",
  CONTACT_MSGS: "pf_contact_msgs",
  LAST_FAL_INDEX: "pf_last_fal_idx"
};

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function saveLS(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function loads(key, fallback){ try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; } }

function poemid(p){ return btoa(unescape(encodeURIComponent(`${p.poet}__${p.text}`))).slice(0,24); }

function normalize(str=''){
  return String(str).toLowerCase().replace(/[\u064A\u0649]/g,'ی').replace(/ك/g,'ک').trim();
}

let STATE = {
  all: POEMS_DB,
  filtered: POEMS_DB,
  page: 1,
  showFavorites: false,
  favPoems: loads(lskey.FAVORITES_POEMS, {})
};

function applyFilters(){
  const searchEl = $('#search');
  const poetSel = $('#poetFilter');
  const query = searchEl ? normalize(searchEl.value) : '';
  const poet = poetSel ? poetSel.value : '';

  let list = POEMS_DB.filter(p => {
    const byPoet = poet ? p.poet === poet : true;
    const byQuery = query ? (normalize(p.text).includes(query) || normalize(p.poet).includes(query)) : true;
    return byPoet && byQuery;
  });

  if (STATE.showFavorites){
    list = list.filter(p => STATE.favPoems[poemid(p)]);
  }

  STATE.filtered = list;
  STATE.page = 1;
  renderPoems();
}

function renderPoems(){
  const listEl = $('#poemsList');
  const noEl = $('#noResult');
  const pagEl = $('#pagination');
  if(!listEl) return;

  const total = STATE.filtered.length;
  const pages = Math.max(1, Math.ceil(total / pagesize));
  if (STATE.page > pages) STATE.page = pages;
  const start = (STATE.page - 1) * pagesize;
  const items = STATE.filtered.slice(start, start + pagesize);

  listEl.innerHTML = items.map(p => {
    const id = poemid(p);
    const faved = !!STATE.favPoems[id];
    return `
      <article class="poem-card">
        <button class="favorite-btn" data-id="${id}" title="افزودن به علاقه‌مندی">${faved ? '❤' : '♡'}</button>
        <h4>${p.poet}</h4>
        <p>${p.text}</p>
      </article>`;
  }).join('');

  if (total === 0){
    noEl && (noEl.style.display = 'block');
    pagEl && (pagEl.style.display = 'none');
  } else {
    noEl && (noEl.style.display = 'none');
    pagEl && (pagEl.style.display = 'flex');
  }

  // صفحه‌بندی
  const pageInfo = $('#pageInfo');
  if (pageInfo) pageInfo.textContent = `${STATE.page} / ${Math.max(1, Math.ceil(total / pagesize))}`;

  $$('.favorite-btn', listEl).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const poem = STATE.filtered.find(p => poemid(p) === id) || STATE.all.find(p => poemid(p) === id);
      if(!poem) return;
      if (STATE.favPoems[id]){ delete STATE.favPoems[id]; }
      else { STATE.favPoems[id] = poem; }
      saveLS(lskey.FAVORITES_POEMS, STATE.favPoems);
      renderPoems();
    });
  });
}

function nextPage(){
  const pages = Math.max(1, Math.ceil(STATE.filtered.length / pagesize));
  if (STATE.page < pages){ STATE.page++; renderPoems(); }
}
function prevPage(){
  if (STATE.page > 1){ STATE.page--; renderPoems(); }
}

//فال حافظ
let LAST_FAL_TEXT = '';
function randomFal(){
  if (!hafizfal.length) return 'بانک فال خالی است.';
  const lastIdx = loads(lskey.LAST_FAL_INDEX, -1);
  let idx = Math.floor(Math.random() * hafizfal.length);
  if (hafizfal.length > 1 && idx === lastIdx){
    idx = (idx + 1) % hafizfal.length;
  }
  saveLS(lskey.LAST_FAL_INDEX, idx);

  const f = hafizfal[idx];
  LAST_FAL_TEXT = `${f.title}\n\n${f.beyit}\n\n📖 تعبیر: ${f.tabir}`;
  return LAST_FAL_TEXT;
}
function playFal(){
  const p = $('#falText');
  if (!p) return;
  p.textContent = randomFal();  // دیگه [object Object] نمیاد
  const audio = $('#falAudio');
  try { audio && audio.play && audio.play().catch(()=>{}); } catch(e){}
}


function saveFalFavorite(){
  if (!LAST_FAL_TEXT) return;
  const fav = loads(lskey.FAVORITES_FAL, []);
  if (!fav.includes(LAST_FAL_TEXT)) fav.push(LAST_FAL_TEXT);
  saveLS(lskey.FAVORITES_FAL, fav);
  alert('فال در علاقه‌مندی‌ها ذخیره شد.');
}
//شب و روز 
function applyTheme(theme){
  if (theme === 'dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');
  saveLS(lskey.THEME, theme);
}
function toggleTheme(){
  const dark = document.body.classList.contains('dark');
  applyTheme(dark ? 'light' : 'dark');
}
function wireNav(toggleId, menuId){
  const t = document.getElementById(toggleId);
  const m = document.getElementById(menuId);
  if (!t || !m) return;
  t.addEventListener('click', ()=> m.classList.toggle('show'));
  $('#'+menuId+' a') && $$('#'+menuId+' a').forEach(a=> a.addEventListener('click', ()=> m.classList.remove('show')));
}
//گالری
function wireGallery(){
  const items = $$('.gallery-item');
  const lb = $('#lightbox');
  if (!items.length || !lb) return;
  const lbImg = $('#lbImg');
  const lbCap = $('#lbCaption');
  const lbClose = $('#lbClose');

  items.forEach(img => {
    img.addEventListener('click', ()=>{
      lbImg.src = img.src; lbCap.textContent = img.alt || '';
      lb.style.display = 'flex';
    });
  });
  lbClose && lbClose.addEventListener('click', ()=> lb.style.display = 'none');
  lb.addEventListener('click', (e)=>{ if(e.target===lb) lb.style.display = 'none'; });
}

function wireContact(){
  const form = $('#contactForm');
  const list = $('#messagesList');
  if (!form || !list) return;

  function render(){
    const data = loads(lskey.CONTACT_MSGS, []);
    if (!data.length){ list.innerHTML = '<p style="color:var(--muted)">پیامی ثبت نشده است.</p>'; return; }
    list.innerHTML = data.map(m=>`
      <div class="card" style="text-align:right">
        <strong>${m.name}</strong> – <small>${new Date(m.ts).toLocaleString('fa-IR')}</small>
        <div style="color:var(--muted)">${m.email}</div>
        <p style="margin-top:6px">${m.message}</p>
      </div>
    `).join('');
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = $('#cname').value.trim();
    const email = $('#cemail').value.trim();
    const message = $('#cmessage').value.trim();
    if (!name || !email || !message) return;
    const data = loads(lskey.CONTACT_MSGS, []);
    data.unshift({name,email,message,ts:Date.now()});
    saveLS(lskey.CONTACT_MSGS, data);
    form.reset();
    alert('پیام شما ثبت شد.');
    render();
  });

  render();
}
//شروع
document.addEventListener('DOMContentLoaded', () => {
  // تم 
  const savedTheme = loads(lskey.THEME, 'light');
  applyTheme(savedTheme);

  // کلیدهای تم
  ['themeToggle','themeToggle2','themeToggle3','themeToggle4','themeToggle5','quickTheme']
    .forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener('click', toggleTheme); });

  // ناوبارها
  wireNav('navToggle','navbar');
  wireNav('navToggle2','navbar2');
  wireNav('navToggle3','navbar3');
  wireNav('navToggle4','navbar4');
  wireNav('navToggle5','navbar5');

const homeFal = $('#homeFal');
if (homeFal) { 
  const f = hafizfal[Math.floor(Math.random() * hafizfal.length)];
  homeFal.textContent = `${f.title}\n\n${f.beyit}\n\n📖 تعبیر: ${f.tabir}`;
}

  // صفحه شعر ها
  if ($('#poemsList')){

    const search = $('#search');
    const poetFilter = $('#poetFilter');
    const clearBtn = $('#clearFilters');
    const showFav = $('#showFavorites');
    const prev = $('#prevPage');
    const next = $('#nextPage');

    let debounce;
    if (search) search.addEventListener('input', ()=>{ clearTimeout(debounce); debounce = setTimeout(applyFilters, 200); });
    if (poetFilter) poetFilter.addEventListener('change', applyFilters);
    if (clearBtn) clearBtn.addEventListener('click', ()=>{ if(search) search.value=''; if(poetFilter) poetFilter.value=''; STATE.showFavorites=false; applyFilters(); });
    if (showFav) showFav.addEventListener('click', ()=>{ STATE.showFavorites = !STATE.showFavorites; showFav.classList.toggle('ghost', !STATE.showFavorites); applyFilters(); });
    if (prev) prev.addEventListener('click', prevPage);
    if (next) next.addEventListener('click', nextPage);

    // فال
    const playBtn = $('#playFal');
    const saveFalBtn = $('#saveFalFavorite');
    if (playBtn) playBtn.addEventListener('click', playFal);
    if (saveFalBtn) saveFalBtn.addEventListener('click', saveFalFavorite);

    applyFilters();
  }
  // گالری
  wireGallery();
  wireContact();
});
