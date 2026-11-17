// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// Tilo test app (M2 face-to-face captions, M3 situation cards, M5 video message, emergency card).
// Everything runs on the device: nothing is sent to a Tilo server. Speech recognition uses the
// browser's own engine, which may send audio to the browser vendor; the user is told before it starts.
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const toCyrl = window.tiloTranslit.toCyrl;

  // ---------- settings (per device, optional) ----------
  const KEY = 'tilo.app.v1';
  const defaults = { lang: 'uz', size: '1', theme: 'auto', addr: '', sttOk: false, hintSeen: false };
  let cfg = { ...defaults };
  try { cfg = { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch (e) { /* storage blocked */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) { /* storage blocked */ } };

  // ---------- strings ----------
  const S = {
    uz: {
      skip: 'Mazmunga o‘tish', beta: 'sinov', interp: 'Tarjimon', settings: 'Sozlamalar', homeTitle: 'Tilo sinov ilovasi',
      talk: 'Yuzma-yuz suhbat', talkSub: 'Gapni subtitr qiladi, yozganingizni o‘qib beradi',
      cards: 'Vaziyat kartalari', cardsSub: 'Shifoxona, bank, taksi, politsiya, mahalla',
      video: 'Video xabar', videoSub: 'Imo-ishora videosini yozing va yuboring',
      sos: 'Favqulodda karta', sosSub: '101, 102, 103, 112 va «Men karman» kartasi',
      privacy: 'Hammasi telefoningizda ishlaydi. Tilo serveriga hech narsa yuborilmaydi va saqlanmaydi.',
      draftNote: 'Bu sinov versiyasi. Karta matnlari qoralama: ularni kar maslahat kengashi hali tekshirmagan. Imo-ishora videolarini keyin kar imo-ishorachilar yozadi.',
      aboutLink: 'Tilo loyihasi haqida', feedbackLink: 'Fikr yoki xato haqida yozish',
      otherSide: 'Eshituvchi uchun', flip: 'Burish', hearingHint: 'Aniq va sekin gapiring, telefonga qarab turing, navbat bilan gapiring.',
      micStart: 'Gapirish', micStop: 'To‘xtatish', sttLang: 'Nutq tili', meSide: 'Siz uchun',
      asrFlag: 'Nutqni tanish xato qilishi mumkin. Qatorni bosib tuzating.', typeLabel: 'Javobingizni yozing', typePh: 'Javobingizni yozing…',
      show: 'Ko‘rsatish', ttsOn: 'Yozganimni ovoz bilan o‘qish', clear: 'Tozalash', back: 'Orqaga',
      signPending: 'Imo-ishora videosi: kar imo-ishorachi yozadi (kutilmoqda)', speak: 'Ovoz bilan o‘qish',
      camOff: 'Kamera o‘chiq', mirrorNote: 'Oldindan ko‘rish ko‘zgudek ko‘rinadi. Yozilgan videoda chap va o‘ng qo‘l to‘g‘ri ko‘rinadi.',
      camOn: 'Kamerani yoqish', rec: 'Yozish', stop: 'To‘xtatish', share: 'Yuborish', save: 'Saqlash', again: 'Qaytadan',
      sosMain: 'Men karman. Menga matn yoki imo-ishora kerak.', addrLabel: 'Manzil yoki joy (ixtiyoriy, faqat shu telefonda saqlanadi)',
      n101: 'Yong‘in', n102: 'Politsiya', n103: 'Tez yordam', n112: 'Yagona raqam',
      sosWarn: 'Bu karta favqulodda xizmat o‘rnini bosmaydi. Hozircha 112 ga matn yoki video orqali murojaat qilish imkoni topilmagan. Atrofdagi odamga kartani ko‘rsatib, qo‘ng‘iroq qilishni so‘rang.',
      interpTitle: 'Jonli tarjimon', interpBody: 'Jonli imo-ishora tarjimoniga videoqo‘ng‘iroq hali ishga tushmagan. U loyihaning keyingi bosqichida, hamkor tarjimonlar bilan, ish soatlari ochiq e’lon qilingan holda ochiladi.',
      interpNow: 'Hozircha shifoxona, sud yoki politsiyada malakali tarjimon so‘rashingiz mumkin. «Politsiya» va «Mahalla va idora» kartalari bunga yordam beradi.',
      ok: 'Tushunarli', sttTitle: 'Nutqni tanish haqida',
      sttBody: 'Nutqni matnga brauzerning o‘zi aylantiradi. Ko‘p brauzerlar buning uchun ovozni o‘z ishlab chiqaruvchisining serveriga (masalan, Google) yuboradi. Tilo serveriga ovoz ham, matn ham yuborilmaydi.',
      sttBody2: 'Rozi bo‘lmasangiz, yozish rejimidan foydalaning: eshituvchi javobini telefonga yozadi.',
      agree: 'Roziman, yoqish', cancel: 'Bekor qilish', uiLang: 'Interfeys tili', textSize: 'Matn o‘lchami',
      sizeM: 'O‘rta', sizeL: 'Katta', sizeXL: 'Juda katta', theme: 'Mavzu', themeAuto: 'Qurilmadagidek', themeLight: 'Yorug‘', themeDark: 'Qorong‘i',
      cyrlNote: 'Kirill yozuvi lotindan avtomatik o‘giriladi. Xato ko‘rsangiz, xabar bering.',
      noStt: 'Bu brauzerda nutqni tanish yo‘q. Eshituvchi javobini pastdagi maydonga yozishi mumkin. Chrome yoki Edge’da sinab ko‘ring.',
      sttLangNo: 'Bu brauzer tanlangan tilni tanimaydi. Boshqa tilni tanlang yoki yozish rejimidan foydalaning.',
      sttDenied: 'Mikrofonga ruxsat berilmadi. Brauzer sozlamalarida ruxsat bering.', sttNet: 'Nutqni tanish uchun internet kerak.',
      sttErr: 'Nutqni tanishda xato. Qaytadan urinib ko‘ring.', listening: 'Tinglayapman…',
      noVoice: 'Bu qurilmada shu til uchun ovoz yo‘q. Matnni eshituvchiga ko‘rsating.', edit: 'Tuzatish', editSave: 'Saqlash',
      camDenied: 'Kameraga ruxsat berilmadi yoki kamera topilmadi.', noRec: 'Bu brauzer video yozishni qo‘llamaydi.',
      sizeMsg: 'Video hajmi: {mb} MB, davomiyligi {s} soniya. Video faqat shu telefonda.', shareNo: 'Bu brauzer to‘g‘ridan-to‘g‘ri yuborishni qo‘llamaydi. «Saqlash»ni bosib, faylni Telegram orqali yuboring.',
      loadErr: 'Kartalar yuklanmadi. Internetni tekshirib, sahifani yangilang.', draftCard: 'Qoralama matn, kar kengash tekshiruvi kutilmoqda',
      cleared: 'Suhbat tozalandi', saved: 'Saqlandi', offlineReady: 'Ilova internetsiz ham ochiladi',
      capEmpty: 'Eshituvchi gapirganda so‘zlari shu yerda katta harflar bilan chiqadi.',
    },
    ru: {
      skip: 'Перейти к содержанию', beta: 'тест', interp: 'Переводчик', settings: 'Настройки', homeTitle: 'Тестовое приложение Tilo',
      talk: 'Разговор лицом к лицу', talkSub: 'Превращает речь в субтитры и озвучивает ваш текст',
      cards: 'Карточки ситуаций', cardsSub: 'Больница, банк, такси, полиция, махалля',
      video: 'Видеосообщение', videoSub: 'Запишите и отправьте видео на жестовом языке',
      sos: 'Экстренная карточка', sosSub: '101, 102, 103, 112 и карточка «Я глухой»',
      privacy: 'Всё работает на вашем телефоне. На сервер Tilo ничего не отправляется и не хранится.',
      draftNote: 'Это тестовая версия. Тексты карточек — черновик: совет глухих их ещё не проверил. Видео на жестовом языке позже запишут глухие носители.',
      aboutLink: 'О проекте Tilo', feedbackLink: 'Написать отзыв или об ошибке',
      otherSide: 'Для слышащего', flip: 'Повернуть', hearingHint: 'Говорите чётко и медленно, смотрите на телефон, говорите по очереди.',
      micStart: 'Говорить', micStop: 'Остановить', sttLang: 'Язык речи', meSide: 'Для вас',
      asrFlag: 'Распознавание может ошибаться. Нажмите на строку, чтобы исправить.', typeLabel: 'Напишите ответ', typePh: 'Напишите ответ…',
      show: 'Показать', ttsOn: 'Озвучивать мой текст', clear: 'Очистить', back: 'Назад',
      signPending: 'Видео на жестовом языке: запишет глухой носитель (ожидается)', speak: 'Озвучить',
      camOff: 'Камера выключена', mirrorNote: 'Предпросмотр зеркальный. В записанном видео левая и правая рука видны правильно.',
      camOn: 'Включить камеру', rec: 'Записать', stop: 'Остановить', share: 'Отправить', save: 'Сохранить', again: 'Заново',
      sosMain: 'Я глухой. Мне нужен текст или жестовый язык.', addrLabel: 'Адрес или место (необязательно, хранится только на этом телефоне)',
      n101: 'Пожарная', n102: 'Полиция', n103: 'Скорая помощь', n112: 'Единый номер',
      sosWarn: 'Эта карточка не заменяет экстренную службу. Пока не найдено возможности обратиться в 112 текстом или видео. Покажите карточку человеку рядом и попросите позвонить.',
      interpTitle: 'Живой переводчик', interpBody: 'Видеозвонок живому переводчику жестового языка ещё не запущен. Он появится на следующем этапе проекта, с переводчиками-партнёрами и открыто объявленными часами работы.',
      interpNow: 'Пока вы можете попросить квалифицированного переводчика в больнице, суде или полиции. Карточки «Полиция» и «Махалля и учреждения» помогут это сделать.',
      ok: 'Понятно', sttTitle: 'О распознавании речи',
      sttBody: 'Речь в текст превращает сам браузер. Многие браузеры для этого отправляют звук на сервер своего производителя (например, Google). На сервер Tilo не отправляется ни звук, ни текст.',
      sttBody2: 'Если не согласны, используйте режим письма: слышащий напишет ответ на телефоне.',
      agree: 'Согласен, включить', cancel: 'Отмена', uiLang: 'Язык интерфейса', textSize: 'Размер текста',
      sizeM: 'Средний', sizeL: 'Крупный', sizeXL: 'Очень крупный', theme: 'Тема', themeAuto: 'Как на устройстве', themeLight: 'Светлая', themeDark: 'Тёмная',
      cyrlNote: 'Узбекская кириллица создаётся из латиницы автоматически. Если заметите ошибку, сообщите.',
      noStt: 'В этом браузере нет распознавания речи. Слышащий может написать ответ в поле ниже. Попробуйте Chrome или Edge.',
      sttLangNo: 'Браузер не распознаёт выбранный язык. Выберите другой язык или используйте режим письма.',
      sttDenied: 'Нет доступа к микрофону. Разрешите его в настройках браузера.', sttNet: 'Для распознавания речи нужен интернет.',
      sttErr: 'Ошибка распознавания. Попробуйте ещё раз.', listening: 'Слушаю…',
      noVoice: 'На этом устройстве нет голоса для этого языка. Покажите текст слышащему.', edit: 'Исправить', editSave: 'Сохранить',
      camDenied: 'Нет доступа к камере или камера не найдена.', noRec: 'Этот браузер не поддерживает запись видео.',
      sizeMsg: 'Размер видео: {mb} МБ, длительность {s} с. Видео только на этом телефоне.', shareNo: 'Браузер не умеет отправлять напрямую. Нажмите «Сохранить» и отправьте файл в Telegram.',
      loadErr: 'Карточки не загрузились. Проверьте интернет и обновите страницу.', draftCard: 'Черновик текста, ждёт проверки советом глухих',
      cleared: 'Разговор очищен', saved: 'Сохранено', offlineReady: 'Приложение откроется и без интернета',
      capEmpty: 'Когда слышащий заговорит, его слова появятся здесь крупным шрифтом.',
    },
  };
  const langKey = () => (cfg.lang === 'ru' ? 'ru' : 'uz');
  // Placeholders ({mb}) are filled in after transliteration so they are never turned into Cyrillic.
  const t = (k, vars) => {
    const v = (S[langKey()] && S[langKey()][k]) || S.uz[k] || k;
    let out = v;
    if (cfg.lang === 'uzc') {
      const names = [];
      out = toCyrl(v.replace(/\{(\w+)\}/g, (m, n) => '\u0000' + (names.push(n) - 1) + '\u0000'))
        .replace(/\u0000(\d+)\u0000/g, (m, i) => '{' + names[+i] + '}');
    }
    if (vars) out = out.replace(/\{(\w+)\}/g, (m, n) => (n in vars ? String(vars[n]) : m));
    return out;
  };
  // Content text (cards): uz / uzc / ru
  const ct = (o) => (cfg.lang === 'ru' ? o.ru : cfg.lang === 'uzc' ? toCyrl(o.uz) : o.uz);
  const ctAlt = (o) => (cfg.lang === 'ru' ? o.uz : o.ru);

  function applyLang() {
    document.documentElement.lang = cfg.lang === 'ru' ? 'ru' : cfg.lang === 'uzc' ? 'uz-Cyrl' : 'uz';
    $$('[data-t]').forEach((el) => { el.textContent = t(el.dataset.t); });
    $$('[data-tp]').forEach((el) => { el.placeholder = t(el.dataset.tp); });
    $$('[data-ta]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.ta)); });
    $('#mic-label').textContent = t(listening ? 'micStop' : 'micStart');
    renderSets(); renderQuick(); if (openSet) renderCardList(openSet); if (shown) renderShown();
  }
  function applyLook() {
    document.documentElement.dataset.size = cfg.size;
    if (cfg.theme === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = cfg.theme;
  }

  let toastTimer = 0;
  function toast(msg) {
    const el = $('#toast'); el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 4200);
  }

  // ---------- routing ----------
  const VIEWS = ['home', 'talk', 'cards', 'show', 'video', 'sos'];
  let current = '';
  function route() {
    let v = location.hash.replace('#', '') || 'home';
    if (v === 'main') return;
    if (!VIEWS.includes(v)) v = 'home';
    if (v === 'show' && !shown) v = 'cards';
    // Coming back from a shown card keeps the open set; any other way in starts at the set list.
    if (v === 'cards' && current !== 'show') openSet = null;
    current = v;
    $$('.view').forEach((s) => { s.hidden = s.dataset.view !== v; });
    document.body.dataset.view = v;
    if (v !== 'video') stopCamera();
    if (v !== 'talk' && listening) stopListening();
    if (v === 'cards' && !openSet) { $('#sets').hidden = false; $('#cardlist').hidden = true; }
    if (v === 'talk' && !cfg.hintSeen) { cfg.hintSeen = true; save(); }
    const h = $('#v-' + v + ' h1'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    window.scrollTo(0, 0);
  }

  // ---------- TTS ----------
  let voices = [];
  const loadVoices = () => { voices = 'speechSynthesis' in window ? speechSynthesis.getVoices() : []; };
  if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.addEventListener('voiceschanged', loadVoices); }
  function speak(text, lang) {
    if (!('speechSynthesis' in window) || !text) return false;
    const want = lang.startsWith('ru') ? 'ru' : 'uz';
    const v = voices.find((x) => x.lang && x.lang.toLowerCase().startsWith(want));
    if (!v) return false;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.voice = v; u.lang = v.lang; u.rate = 0.95;
    speechSynthesis.speak(u); return true;
  }

  // ---------- M2: face-to-face ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null; let listening = false; let wantListen = false;
  const captions = $('#captions');

  function addCaption(text) {
    const li = document.createElement('li');
    const b = document.createElement('button'); b.type = 'button'; b.className = 'cap'; b.textContent = text;
    b.setAttribute('aria-label', t('edit') + ': ' + text);
    b.addEventListener('click', () => editCaption(li, b));
    li.appendChild(b); captions.appendChild(li); $('#v-talk').classList.add('has-caps');
    li.scrollIntoView({ block: 'end', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  function editCaption(li, b) {
    const f = document.createElement('form'); f.className = 'cap-edit';
    const i = document.createElement('input'); i.type = 'text'; i.value = b.textContent; i.setAttribute('aria-label', t('edit'));
    const s = document.createElement('button'); s.type = 'submit'; s.className = 'ib sm'; s.textContent = t('editSave');
    f.append(i, s); li.replaceChild(f, b); i.focus(); i.select();
    f.addEventListener('submit', (e) => { e.preventDefault(); b.textContent = i.value.trim() || b.textContent; b.setAttribute('aria-label', t('edit') + ': ' + b.textContent); li.replaceChild(b, f); b.focus(); });
  }

  function startListening() {
    if (!SR) { toast(t('noStt')); return; }
    rec = new SR();
    rec.lang = $('#stt-lang').value; rec.continuous = true; rec.interimResults = true;
    rec.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) { const txt = r[0].transcript.trim(); if (txt) addCaption(txt); } else interim += r[0].transcript;
      }
      $('#interim').textContent = interim;
    };
    rec.onerror = (e) => {
      const map = { 'not-allowed': 'sttDenied', 'service-not-allowed': 'sttDenied', 'language-not-supported': 'sttLangNo', network: 'sttNet' };
      if (e.error === 'no-speech' || e.error === 'aborted') return;
      wantListen = false; toast(t(map[e.error] || 'sttErr'));
    };
    rec.onend = () => { if (wantListen) { try { rec.start(); return; } catch (err) { /* restart failed */ } } setListening(false); };
    try { rec.start(); wantListen = true; setListening(true); } catch (err) { toast(t('sttErr')); }
  }
  function stopListening() { wantListen = false; if (rec) { try { rec.stop(); } catch (e) { /* already stopped */ } } setListening(false); }
  function setListening(on) {
    listening = on; $('#mic-btn').setAttribute('aria-pressed', String(on)); $('#mic-label').textContent = t(on ? 'micStop' : 'micStart');
    $('#interim').textContent = on ? t('listening') : '';
  }
  $('#mic-btn').addEventListener('click', () => {
    if (listening) { stopListening(); return; }
    if (!SR) { toast(t('noStt')); return; }
    if (cfg.sttOk) { startListening(); return; }
    const d = $('#dlg-stt'); d.returnValue = ''; d.showModal();
  });
  $('#dlg-stt').addEventListener('close', () => {
    if ($('#dlg-stt').returnValue === 'yes') { cfg.sttOk = true; save(); startListening(); }
  });
  $('#stt-lang').addEventListener('change', () => { if (listening) { stopListening(); startListening(); } });

  function sayToOther(text) {
    if (!text) return;
    $('#said-other').textContent = text;
    if ($('#tts-on').checked) {
      const lang = cfg.lang === 'ru' ? 'ru' : 'uz';
      const ok = speak(text, lang);
      const note = $('#tts-note'); note.hidden = ok; if (!ok) note.textContent = t('noVoice');
    }
  }
  $('#compose').addEventListener('submit', (e) => {
    e.preventDefault(); const i = $('#say-input'); const v = i.value.trim(); if (!v) return; sayToOther(v); i.value = '';
  });
  $('#clear-btn').addEventListener('click', () => { captions.textContent = ''; $('#v-talk').classList.remove('has-caps'); $('#said-other').textContent = ''; $('#interim').textContent = ''; toast(t('cleared')); });
  $('#flip-btn').addEventListener('click', () => {
    const el = $('#talk-other'); const on = !el.classList.contains('flipped');
    el.classList.toggle('flipped', on); $('#flip-btn').setAttribute('aria-pressed', String(on));
  });

  // ---------- M3: cards ----------
  let data = null; let openSet = null; let shown = null;
  async function loadCards() {
    try { const r = await fetch('/app/data/cards.json'); if (!r.ok) throw new Error(r.status); data = await r.json(); }
    catch (e) { $('#sets').textContent = t('loadErr'); return; }
    renderSets(); renderQuick();
  }
  function icon(name) { return '<svg aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }
  function renderSets() {
    if (!data) return; const box = $('#sets'); box.textContent = '';
    for (const set of data.sets) {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'set';
      b.innerHTML = icon(set.icon) + '<b></b><span></span>';
      b.querySelector('b').textContent = ct(set.title); b.querySelector('span').textContent = String(set.cards.length);
      b.addEventListener('click', () => { openSet = set; renderCardList(set); });
      box.appendChild(b);
    }
  }
  function renderCardList(set) {
    const box = $('#cardlist'); box.textContent = ''; $('#sets').hidden = true; box.hidden = false;
    const h = document.createElement('h2'); h.className = 'set-title'; h.textContent = ct(set.title); box.appendChild(h);
    const grid = document.createElement('div'); grid.className = 'cgrid';
    for (const c of set.cards) {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'card';
      b.textContent = ct(c); b.addEventListener('click', () => { shown = c; renderShown(); location.hash = '#show'; });
      grid.appendChild(b);
    }
    box.appendChild(grid);
    const n = document.createElement('p'); n.className = 'small'; n.textContent = t('draftCard'); box.appendChild(n);
  }
  function renderShown() { if (!shown) return; $('#show-text').textContent = ct(shown); $('#show-alt').textContent = ctAlt(shown); }
  $('#cards-back').addEventListener('click', (e) => { if (openSet) { e.preventDefault(); openSet = null; $('#sets').hidden = false; $('#cardlist').hidden = true; } });
  $('#show-back').addEventListener('click', () => { location.hash = '#cards'; });
  $('#show-flip').addEventListener('click', () => { const on = !$('#show-body').classList.contains('flipped'); $('#show-body').classList.toggle('flipped', on); $('#show-flip').setAttribute('aria-pressed', String(on)); });
  $('#show-speak').addEventListener('click', () => {
    if (!shown) return; const lang = cfg.lang === 'ru' ? 'ru' : 'uz';
    if (!speak(lang === 'ru' ? shown.ru : shown.uz, lang)) toast(t('noVoice'));
  });
  function renderQuick() {
    if (!data) return; const box = $('#quick'); box.textContent = '';
    const general = data.sets.find((s) => s.id === 'general'); if (!general) return;
    for (const c of general.cards.slice(0, 6)) {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'chip'; b.textContent = ct(c);
      b.addEventListener('click', () => sayToOther(ct(c))); box.appendChild(b);
    }
  }

  // ---------- M5: video message ----------
  let stream = null; let mr = null; let chunks = []; let blobUrl = ''; let recStart = 0; let tick = 0; let lastBlob = null;
  const MAX_S = 60;
  function show(id, on) { $(id).hidden = !on; }
  async function startCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { toast(t('camDenied')); return; }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 24 } }, audio: false });
    } catch (e) { toast(t('camDenied')); return; }
    const v = $('#cam-preview'); v.srcObject = stream; v.hidden = false; await v.play().catch(() => {});
    show('#cam-empty', false); show('#cam-result', false); show('#cam-on', false); show('#rec-btn', true);
    show('#share-btn', false); show('#save-link', false); show('#again-btn', false); $('#cam-size').textContent = '';
  }
  function stopCamera() {
    if (mr && mr.state === 'recording') mr.stop();
    if (stream) { stream.getTracks().forEach((tr) => tr.stop()); stream = null; }
    const v = $('#cam-preview'); v.srcObject = null;
  }
  function pickType() {
    const types = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm', 'video/mp4'];
    return types.find((x) => window.MediaRecorder && MediaRecorder.isTypeSupported(x)) || '';
  }
  function startRec() {
    if (!window.MediaRecorder) { toast(t('noRec')); return; }
    const type = pickType(); chunks = [];
    try { mr = new MediaRecorder(stream, { mimeType: type || undefined, videoBitsPerSecond: 350000 }); } catch (e) { toast(t('noRec')); return; }
    mr.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = finishRec;
    mr.start(1000); recStart = Date.now();
    show('#rec-btn', false); show('#stop-btn', true); show('#rec-badge', true);
    tick = setInterval(() => {
      const s = Math.floor((Date.now() - recStart) / 1000);
      $('#rec-time').textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
      if (s >= MAX_S) stopRec();
    }, 250);
  }
  function stopRec() { if (mr && mr.state === 'recording') mr.stop(); clearInterval(tick); }
  function finishRec() {
    clearInterval(tick); show('#rec-badge', false); show('#stop-btn', false);
    const secs = Math.max(1, Math.round((Date.now() - recStart) / 1000));
    const type = (mr && mr.mimeType) || 'video/webm';
    lastBlob = new Blob(chunks, { type });
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    blobUrl = URL.createObjectURL(lastBlob);
    stopCamera();
    const out = $('#cam-result'); out.src = blobUrl; out.hidden = false; $('#cam-preview').hidden = true;
    const ext = type.includes('mp4') ? 'mp4' : 'webm';
    const a = $('#save-link'); a.href = blobUrl; a.download = 'tilo-video.' + ext;
    show('#share-btn', true); show('#save-link', true); show('#again-btn', true);
    $('#cam-size').textContent = t('sizeMsg', { mb: (lastBlob.size / 1048576).toFixed(2), s: secs });
  }
  async function shareRec() {
    if (!lastBlob) return;
    const ext = lastBlob.type.includes('mp4') ? 'mp4' : 'webm';
    const file = new File([lastBlob], 'tilo-video.' + ext, { type: lastBlob.type });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: 'tilo' }); } catch (e) { /* user cancelled */ }
    } else toast(t('shareNo'));
  }
  $('#cam-on').addEventListener('click', startCamera);
  $('#rec-btn').addEventListener('click', startRec);
  $('#stop-btn').addEventListener('click', stopRec);
  $('#share-btn').addEventListener('click', shareRec);
  $('#again-btn').addEventListener('click', () => { $('#cam-result').hidden = true; startCamera(); });

  // ---------- emergency card ----------
  const addr = $('#sos-addr');
  const renderAddr = () => { $('#sos-addr-view').textContent = cfg.addr; };
  addr.value = cfg.addr; renderAddr();
  addr.addEventListener('input', () => { cfg.addr = addr.value.slice(0, 200); save(); renderAddr(); });

  // ---------- dialogs and settings ----------
  $('#interp-btn').addEventListener('click', () => $('#dlg-interp').showModal());
  $('#settings-btn').addEventListener('click', () => {
    $('#ui-lang').value = cfg.lang; $('#text-size').value = cfg.size; $('#theme-sel').value = cfg.theme; $('#dlg-settings').showModal();
  });
  $('#ui-lang').addEventListener('change', (e) => { cfg.lang = e.target.value; save(); applyLang(); });
  $('#text-size').addEventListener('change', (e) => { cfg.size = e.target.value; save(); applyLook(); });
  $('#theme-sel').addEventListener('change', (e) => { cfg.theme = e.target.value; save(); applyLook(); });

  // ---------- boot ----------
  applyLook(); applyLang();
  window.addEventListener('hashchange', route);
  route(); loadCards();
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('/app/sw.js', { scope: '/app/' }).catch(() => {});
  }
})();
