// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
// Slides 13-26: product, architecture (developer track), dataset, roadmap, roles, limits, call to action.
import { t, S, D, EST, I, icon, slide, kick, mark, markG, lockup } from './parts.mjs';

const REPO = 'https://github.com/wonmortech/tilouz';
const MAKET = () => `<span class="chip g">${t('maket', 'mockup', 'макет')}</span>`;

// ---------- 13. VRI flow ----------
const vri = () => {
  // Screens appear one after another and stay: the sequence itself is the explanation.
  const screen = (s, _out, inner, cap) => `<figure class="screen f" data-s="${s}"><div class="phone">${inner}</div><figcaption>${cap}</figcaption></figure>`;
  const top = (txt) => `<div class="ph-top"><span>${txt}</span><span class="ph-dots"><i></i><i></i><i></i></span></div>`;
  return slide({
    id: 's-vri', steps: 4,
    title: t("Tarjimonga bir tugma", 'One tap to an interpreter', 'Одна кнопка до переводчика'),
    notes: [
      "Birinchi modul qanday ishlaydi. Kar foydalanuvchi ilovani ochadi — login shart emas. Vaziyatni tanlaydi va bitta tugmani bosadi.",
      "U navbatga tushadi. Ekranda o'rni va taxminiy kutish vaqti, har 15 soniyada yangilanadi. Bu maket — raqamlar namuna.",
      "Bo'sh tarjimon to'liq ekranli va tebranuvchi signal oladi. Xona yaratiladi, yozish o'chiq.",
      "Eshituvchi tomon — masalan shifokor — QR kodni skanerlaydi va brauzerda qo'shiladi. Uch tomonlama video; tarjimon oynasi doim mahkamlangan.",
      "Va halollik: ish vaqtidan tashqarida ilova «yopiq, ertaga 09:00» deydi va band qilishni taklif qiladi. Bo'sh va'da yo'q.",
    ],
    body: `${kick('13', t('M1 · Tarjimon (VRI)', 'M1 · Interpreter (VRI)', 'M1 · Переводчик (VRI)'))}
<h2 class="title wide">${t("Login yo'q, ikki bosish — va siz navbatdasiz: o'rningiz va kutish vaqti ochiq", 'No login, two taps — and you are in the queue, with your position and wait shown openly', 'Без входа, два нажатия — и вы в очереди: место и время ожидания видны открыто')}</h2>
<div class="vri">
  <div class="phones">
    ${screen(0, 1, `${top('tilo')}<div class="ph-body"><p class="ph-h">${t('Qayerdasiz?', 'Where are you?', 'Где вы?')}</p><div class="ph-tags"><span class="on">${t('Shifoxona', 'Hospital', 'Больница')}</span><span>${t('Bank', 'Bank', 'Банк')}</span><span>${t('Idora', 'Office', 'Учреждение')}</span><span>${t('Boshqa', 'Other', 'Другое')}</span></div><button class="ph-big" tabindex="-1">${I('video')} ${t('Tarjimon', 'Interpreter', 'Переводчик')}</button><p class="ph-s">${t('Bugun 09:00–18:00 ochiq', 'Open today 09:00–18:00', 'Сегодня открыто 09:00–18:00')}</p></div>`, t('1 · vaziyat va bitta tugma', '1 · pick a situation, one tap', '1 · ситуация и одна кнопка'))}
    ${screen(1, 2, `${top(t('Navbat', 'Queue', 'Очередь'))}<div class="ph-body"><div class="ring">${mark('ring-mk')}</div><p class="ph-h"><span class="q-pos">2</span>${t('-o\'rin', ' in line', '-е место')}</p><p class="ph-s">${t('taxminan', 'about', 'примерно')} <b class="q-eta">4</b> ${t('daqiqa · har 15 s yangilanadi', 'min · refreshes every 15 s', 'мин · обновление каждые 15 с')}</p></div>`, t('2 · navbat ochiq ko\'rinadi', '2 · the queue is visible', '2 · очередь видна'))}
    ${screen(2, 3, `${top(t('Tarjimon', 'Interpreter', 'Переводчик'))}<div class="ph-body alert-screen"><div class="pulse">${I('headset')}</div><p class="ph-h">${t("Yangi qo'ng'iroq", 'New call', 'Новый вызов')}</p><p class="ph-s">${t('Shifoxona · kutmoqda 1:10', 'Hospital · waiting 1:10', 'Больница · ждёт 1:10')}</p><div class="ph-row"><span class="ph-btn ok">${t('Qabul', 'Accept', 'Принять')}</span></div></div>`, t('3 · bo\'sh tarjimonga signal', '3 · a free interpreter is alerted', '3 · сигнал свободному переводчику'))}
    ${screen(3, 4, `${top('3 × video')}<div class="ph-body call"><div class="tile big"><span>${t('Tarjimon', 'Interpreter', 'Переводчик')}</span><i class="pin">${I('star')}</i></div><div class="tile"><span>${t('Siz', 'You', 'Вы')}</span></div><div class="tile qr"><span class="qr-c"></span><span>${t('Shifokor QR orqali', 'Doctor joins by QR', 'Врач по QR')}</span></div></div>`, t('4 · eshituvchi QR bilan qo\'shiladi', '4 · the hearing person joins by QR', '4 · слышащий подключается по QR'))}
    ${screen(4, 0, `${top('tilo')}<div class="ph-body"><div class="closed">${I('clock')}</div><p class="ph-h">${t('Hozir yopiq', 'Closed now', 'Сейчас закрыто')}</p><p class="ph-s">${t('Ertaga 09:00 da ochiladi', 'Opens tomorrow at 09:00', 'Откроется завтра в 09:00')}</p><span class="ph-btn">${t('Vaqt band qilish', 'Book a time', 'Записаться')}</span></div>`, t('5 · halol: yopiq bo\'lsa, shuni aytamiz', '5 · honest: if closed, we say so', '5 · честно: если закрыто, так и пишем'))}
  </div>
  <div class="vri-side">
    <ul class="clean sm">
      <li>${t("Ro'yxatdan o'tmagan foydalanuvchi <b>2 bosishda</b> navbatda", 'An unregistered user reaches the queue in <b>2 taps</b>', 'Незарегистрированный пользователь в очереди за <b>2 нажатия</b>')}</li>
      <li>${t("O'rin va kutish vaqti <b>har 15 soniyada</b> yangilanadi", 'Position and wait refresh <b>every 15 seconds</b>', 'Место и ожидание обновляются <b>каждые 15 секунд</b>')}</li>
      <li>${t("Tarjimon oynasi doim mahkamlangan; ikki tomon rozi bo'lmasa <b>yozish yo'q</b>", 'Interpreter tile always pinned; <b>no recording</b> unless both sides agree', 'Окно переводчика всегда закреплено; <b>без записи</b> без согласия обеих сторон')}</li>
      <li>${t("Imo-ishora 300–500 kbit/s da o'qilishi kerak", 'Signing must stay readable at 300–500 kbit/s', 'Жесты должны читаться при 300–500 кбит/с')} ${EST()}</li>
    </ul>
    <div class="srcs">${D('06a M1')}${D('06b §4')}${MAKET()}</div>
  </div>
</div>`,
  });
};

// ---------- 14. Face-to-face captions ----------
const face = () => slide({
  id: 's-face', steps: 2,
  title: t('Yuzma-yuz subtitr', 'Face-to-face captions', 'Субтитры лицом к лицу'),
  notes: [
    "Ikkinchi modul: telefon stol ustida, ekranning yuqori yarmi 180 gradus burilgan — qarshidagi odam uchun. Eshituvchi gapiradi, kar odam jonli subtitrni ko'radi.",
    "Kar odam yozadi yoki tayyor iborani bosadi — telefon ovoz chiqarib o'qiydi. Noto'g'ri so'zni bosib tuzatish mumkin. Va har doim ko'rinib turadigan tugma: «tarjimon chaqirish».",
    "Halol yorliq: ekranda «ASR xato qilishi mumkin» deb yozamiz. Kechikish maqsadi 1,5 soniyadan kam — bu baho.",
  ],
  body: `${kick('14', t('M2 · Yuzma-yuz subtitr', 'M2 · Face-to-face captions', 'M2 · Субтитры лицом к лицу'))}
<div class="face">
  <div class="face-l">
    <h2 class="title">${t("Telefon stolda: <span class=\"hl-w\">nutq — subtitrga</span>, yozuv — ovozga", 'Phone on the table: <span class="hl-w">speech becomes captions</span>, typing becomes voice', 'Телефон на столе: <span class="hl-w">речь — в субтитры</span>, текст — в голос')}</h2>
    <ul class="clean w">
      <li>${t("Yuqori yarim 180° burilgan — qarshidagi odam o'qiydi", 'Top half rotated 180° for the person opposite', 'Верхняя половина повёрнута на 180° — для собеседника')}</li>
      <li class="f" data-s="1">${t("So'zni bosib tuzatish; «tarjimon chaqirish» doim ko'rinadi", 'Tap a word to fix it; "call an interpreter" always visible', 'Нажмите на слово, чтобы исправить; «вызвать переводчика» всегда на виду')}</li>
      <li class="f" data-s="2">${t("Kechikish medianasi <b>&lt;1,5 s</b>; tarix 24 soat; oflayn Vosk", 'Median caption latency <b>&lt;1.5 s</b>; history 24 h; offline Vosk fallback', 'Медианная задержка <b>&lt;1,5 с</b>; история 24 ч; офлайн Vosk')} ${EST()}</li>
    </ul>
    <div class="srcs">${D('06a M2')}${MAKET()}</div>
  </div>
  <div class="table-phone" aria-hidden="true">
    <div class="tp-half flip"><div class="tp-k">${t('Shifokor ko\'radi', 'Doctor sees', 'Видит врач')}</div><p class="tp-reply f fade" data-s="1">${t("Rahmat. Soat nechada kelay?", 'Thank you. What time should I come?', 'Спасибо. Во сколько прийти?')}</p></div>
    <div class="tp-mid"><span>${I('mic')} uz · ru</span><span class="tp-call">${I('headset')} ${t('Tarjimon', 'Interpreter', 'Переводчик')}</span></div>
    <div class="tp-half"><div class="tp-k">${t('Kar bemor ko\'radi', 'Deaf patient sees', 'Видит глухая пациентка')}</div>
      <p class="tp-cap"><span class="tp-type" data-full="${t("Ertaga och qoringa qon topshiring. Laboratoriya ikkinchi qavatda.", 'Give a blood sample tomorrow before breakfast. The lab is on the second floor.', 'Завтра сдайте кровь натощак. Лаборатория на втором этаже.')}"></span><span class="caret"></span></p>
      <p class="tp-warn f" data-s="2">${I('alert')} ${t('ASR xato qilishi mumkin — so\'zni bosib tuzating', 'Speech recognition can be wrong — tap a word to fix it', 'Распознавание может ошибаться — нажмите на слово, чтобы исправить')}</p>
      <div class="tp-phr f" data-s="1"><span>${t('Tushunmadim', 'I did not understand', 'Не поняла')}</span><span>${t('Sekinroq', 'Slower, please', 'Медленнее')}</span><span>${t('Yozib bering', 'Please write it', 'Напишите, пожалуйста')}</span></div>
    </div>
  </div>
</div>`,
});

// ---------- 15. What we do not build ----------
const notBuild = () => {
  const r = [
    [t('Jonli avatar «tarjimon»', 'A live avatar "interpreter"', 'Живой аватар-«переводчик»'), t('WFD/WASLI qarshi; Surdo AI bu joyda bor', 'WFD/WASLI oppose it; Surdo AI already covers it', 'WFD/WASLI против; это направление уже у Surdo AI')],
    [t('Uzluksiz imo-ishora → matn', 'Continuous sign → text', 'Связный жест → текст'), t("O'zbek imo-ishora dataseti yo'q", 'No Uzbek Sign Language dataset exists', 'Датасета узбекского жестового нет')],
    [t('Kamera videosini GPT/Gemini ga', 'Camera clips to GPT/Gemini', 'Видео с камеры в GPT/Gemini'), t('0,1–0,4 BLEU', '0.1–0.4 BLEU', '0,1–0,4 BLEU')],
    [t("O'z lug'at sayti", 'Our own dictionary site', 'Свой сайт-словарь'), t("imo-ishora.uz ni takrorlardi", 'Would duplicate imo-ishora.uz', 'Дублировал бы imo-ishora.uz')],
    [t('«24/7» va\'dasi', 'A "24/7" promise', 'Обещание «24/7»'), t("Odamsiz 24/7 — eng yomon natija", 'Unstaffed 24/7 is the worst outcome', '24/7 без людей — худший вариант')],
    [t('«112 o\'rnini bosadi»', '"Replaces 112"', '«Заменяет 112»'), t("Avval FVV bilan kelishuv kerak", 'Needs an agreement with the emergency ministry first', 'Сначала нужно соглашение с МЧС')],
    [t("Qo'lqop va taqiladigan qurilma", 'Gloves and wearables', 'Перчатки и носимые устройства'), t("Kar jamoasi rad etgan", 'Rejected by the Deaf community', 'Отвергнуты сообществом глухих')],
    [t('Obuna va limitlar', 'Subscriptions and limits', 'Подписки и лимиты'), t("Pul — asosiy shikoyat", 'Money is the top complaint', 'Деньги — главная жалоба')],
    [t('Telegram Mini App ichida video', 'Live video in a Telegram Mini App', 'Видео внутри Telegram Mini App'), t("Rasmiy kamera/WebRTC API yo'q", 'No official camera/WebRTC API', 'Нет официального API камеры/WebRTC')],
  ];
  return slide({
    id: 's-not', steps: 1,
    title: t('Nima qilmaymiz', 'What we will not build', 'Чего мы не делаем'),
    notes: [
      "Qilmaydigan ishlarimiz ham reja qismi. Jonli avatar, uzluksiz imo-ishoradan matnga tarjima, kamera videosini umumiy LLMga yuborish — yo'q.",
      "Shuningdek, «24/7» va «112 o'rnini bosadi» degan va'dalar, obuna va limitlar, Telegram ichida jonli video yo'q. Har birining sababi yonida yozilgan.",
    ],
    body: `${kick('15', t('Ataylab qilmaymiz', 'Deliberately not', 'Сознательно не делаем'))}
<h2 class="title wide">${t("Nima <span class=\"hl-b\">qilmasligimiz</span> — rejaning yarmi", 'What we <span class="hl-b">will not</span> build is half of the plan', 'Чего мы <span class="hl-b">не делаем</span> — половина плана')}</h2>
<div class="g c3 nots">${r.map(([a, b], i) => `<div class="no f" data-s="${i < 3 ? 0 : 1}">${I('x')}<div><b>${a}</b><span>${b}</span></div></div>`).join('')}</div>
<div class="srcs">${D('06a §9')}${S('arXiv 2408.13585', 'https://arxiv.org/pdf/2408.13585')}${S('Telegram Mini Apps', 'https://core.telegram.org/bots/webapps')}</div>`,
  });
};

// ---------- 16. Architecture (dev) ----------
const arch = () => {
  const box = (x, y, w, h, label, sub, cls = '') => `<g class="nd ${cls}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/><text x="${x + 14}" y="${y + (sub ? 26 : h / 2 + 6)}" class="nl">${label}</text>${sub ? `<text x="${x + 14}" y="${y + 47}" class="ns">${sub}</text>` : ''}</g>`;
  const grp = (x, y, w, h, label, cls = '') => `<g class="gp ${cls}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18"/><text x="${x + 16}" y="${y + 26}" class="gl">${label}</text></g>`;
  const e = (d, cls) => `<path class="e ${cls}" d="${d}"/>`;
  const clients = [
    ['PWA', 'uz-Latn · uz-Cyrl · ru', 'p1 p2'], ['Android', 'Jitsi RN SDK', 'p1'], ['Telegram bot', t('eslatma, kartalar', 'reminders, cards', 'напоминания, карточки'), 'p3'],
    [t('Tarjimon kabineti', 'Interpreter console', 'Кабинет переводчика'), t('navbat, holat', 'queue, status', 'очередь, статус'), 'p1'], ['cboard-uz', 'AAC · GPL-3.0', ''], [t('Hissa ilovasi', 'Contributor app', 'Приложение для вклада'), t('dataset, rozilik', 'dataset, consent', 'датасет, согласие'), 'p4'],
  ];
  const svg = `<svg class="arch-svg" viewBox="0 0 1400 600" role="img" aria-labelledby="arch-t"><title id="arch-t">${t('Tilo arxitekturasi', 'Tilo architecture', 'Архитектура Tilo')}</title>
  ${clients.map(([l, s, c], i) => e(`M250 ${71 + i * 86}C285 ${71 + i * 86} 280 300 310 300`, `${c}`)).join('')}
  ${e('M480 280C505 280 500 110 525 110', 'p1 p2')}${e('M480 300H525', 'p1 p3 p4')}${e('M480 320C505 320 500 480 525 480', 'p2 p3')}
  ${e('M955 300C985 300 980 300 1010 300', 'p4 p3')}${e('M955 480C985 480 980 420 1010 420', 'p3')}${e('M730 190V215', 'p1')}${e('M690 190C690 300 640 330 640 395', 'p2')}
  ${clients.map(([l, s, c], i) => box(20, 40 + i * 86, 230, 62, l, s, `cl ${c}`)).join('')}
  ${box(310, 230, 170, 140, 'API gateway', t('anonim sessiya / OTP', 'anonymous session / OTP', 'анонимная сессия / OTP'), 'p1 p2 p3 p4')}
  ${grp(525, 20, 430, 170, t('Real vaqt', 'Real time', 'Реальное время'), 'p1 p2')}
  ${box(541, 56, 200, 56, 'Jitsi Meet + JVB', 'Apache-2.0', 'p1')}${box(751, 56, 188, 56, 'Jigasi', t('subtitr oqimi', 'caption stream', 'поток субтитров'), 'p2')}${box(541, 122, 398, 52, 'TURN · lobby · JWT · ' + t('yozuvsiz', 'no recording', 'без записи'), '', 'p1')}
  ${grp(525, 205, 430, 170, t("Yadro — o'zimiz quramiz", 'Core — we build it', 'Ядро — пишем сами'), 'own p1 p3 p4')}
  ${box(541, 241, 200, 56, t('Dispetcher ★', 'Dispatch ★', 'Диспетчер ★'), t('navbat · band qilish', 'queue · booking', 'очередь · запись'), 'own p1')}${box(751, 241, 188, 56, t('Rozilik ★', 'Consent ★', 'Согласие ★'), t('yuklash · versiya', 'upload · versions', 'загрузка · версии'), 'own p4')}
  ${box(541, 307, 200, 52, t('Kartalar/kontent ★', 'Cards/content ★', 'Карточки/контент ★'), '', 'own p3')}${box(751, 307, 188, 52, t('Statistika ★', 'Stats ★', 'Статистика ★'), '', 'own')}
  ${grp(525, 390, 430, 190, t('Til servislari', 'Language services', 'Языковые сервисы'), 'p2 p3')}
  ${box(541, 426, 200, 56, t('ASR router ★', 'ASR router ★', 'ASR-роутер ★'), 'WhisperLive · STT · Vosk', 'own p2')}${box(751, 426, 188, 56, 'uz-glosser ★', 'lemmatizer', 'own p3')}
  ${box(541, 492, 200, 70, 'translit ★', 'uz-Latn ↔ uz-Cyrl', 'own p2')}${box(751, 492, 188, 70, 'text → sign', 's2s + pose · MIT', 'p3')}
  ${grp(1010, 20, 370, 470, t("O'zbekistondagi ma'lumot", 'Data in Uzbekistan', 'Данные в Узбекистане'), 'uz p4')}
  ${box(1030, 66, 330, 62, 'PostgreSQL', t('foydalanuvchi, navbat, rozilik', 'users, queue, consent', 'пользователи, очередь, согласия'), 'p4 p1')}${box(1030, 146, 330, 62, 'Global Signbank', 'BSD-3 · ' + t("leksika", 'lexicon', 'лексикон'), 'p3')}${box(1030, 226, 330, 62, t('Obyekt ombori', 'Object storage', 'Объектное хранилище'), t('video · pose', 'video · pose', 'видео · поза'), 'p4 p3')}
  <text x="1030" y="330" class="ns uzn">${t("Yuz videosi chet elga chiqmaydi", 'Face video never leaves the country', 'Видео с лицом не покидает страну')}</text><text x="1030" y="354" class="ns uzn">ZRU-547 · 27-1</text>
  ${box(1010, 510, 370, 70, t('Ochiq dataset nusxasi', 'Open dataset copy', 'Открытая копия датасета'), t('HF / Zenodo · faqat L2 rozilik', 'HF / Zenodo · only with L2 consent', 'HF / Zenodo · только с согласием L2'), 'p4 ext')}
  </svg>`;
  const legend = [
    [1, t("Qo'ng'iroq: PWA → dispetcher → Jitsi xonasi", 'Call: PWA → dispatch → Jitsi room', 'Звонок: PWA → диспетчер → комната Jitsi')],
    [2, t('Subtitr: Jigasi → ASR router → translit', 'Captions: Jigasi → ASR router → translit', 'Субтитры: Jigasi → ASR-роутер → транслит')],
    [3, t('Matn → imo-ishora: glosser → Signbank → klip/pose', 'Text → sign: glosser → Signbank → clips/pose', 'Текст → жест: глоссер → Signbank → клипы/поза')],
    [4, t("Ma'lumot: yuz videosi faqat O'zbekistonda", 'Data: face video stays in Uzbekistan', 'Данные: видео с лицом только в Узбекистане')],
  ];
  return slide({
    id: 's-arch', steps: 4, track: 'dev',
    title: t('Arxitektura', 'Architecture', 'Архитектура'),
    notes: [
      "Arxitektura. Chapda mijozlar: PWA, Android, Telegram bot, tarjimon kabineti, AAC ilovasi va dataset hissa ilovasi. O'rtada API gateway. Yulduzcha — o'zimiz yozadigan qismlar, qolgani ochiq kodli fork.",
      "Qo'ng'iroq yo'li: PWA anonim token oladi, dispetcher navbatiga tushadi, keyin Jitsi xonasi yaratiladi — lobby yoqilgan, yozish o'chiq.",
      "Subtitr yo'li: Jigasi audio oqimini ASR routerga beradi. Router WhisperLive, tijoriy STT yoki oflayn Voskni tanlaydi, keyin apostrof normalizatsiyasi va lotin-kirill.",
      "Matndan imo-ishoraga: o'zbek glosser, Global Signbank leksikasi va spoken-to-signed-translation. Faqat statik kontent uchun.",
      "Va ma'lumot: yuz videosi, Signbank, rozilik yozuvlari O'zbekistondagi ma'lumot markazida. Chet elga faqat L2 rozilik bergan ochiq dataset nusxasi chiqadi.",
    ],
    body: `${kick('16', t('Arxitektura', 'Architecture', 'Архитектура'), true)}
<h2 class="title wide">${t("Beshta ochiq kodli «umurtqa» + o'zimiz yozadigan yadro (★)", 'Five open-source backbones + a core we write ourselves (★)', 'Пять open-source «позвоночников» + ядро, которое пишем сами (★)')}</h2>
<div class="arch deck-only">${svg}</div>
<div class="arch-leg deck-only">${legend.map(([n, l]) => `<span class="lg f fade" data-s="${n}"><b>${n}</b>${l}</span>`).join('')}</div>
<div class="arch-list story-only">
  <div class="card flat"><div class="k">${t('Mijozlar', 'Clients', 'Клиенты')}</div><p>PWA (uz-Latn / uz-Cyrl / ru) · Android (Jitsi RN SDK) · Telegram bot · ${t('tarjimon kabineti', 'interpreter console', 'кабинет переводчика')} · cboard-uz (AAC) · ${t('hissa ilovasi', 'contributor app', 'приложение для вклада')}</p></div>
  <div class="card flat"><div class="k">${t('Real vaqt', 'Real time', 'Реальное время')}</div><p>Jitsi Meet + JVB · Jigasi · TURN · lobby · JWT · ${t('yozuvsiz', 'no recording', 'без записи')}</p></div>
  <div class="card flat accent"><div class="k">${t("Yadro — o'zimiz quramiz ★", 'Core — we build it ★', 'Ядро — пишем сами ★')}</div><p>${t('Dispetcher/navbat, rozilik, kartalar/kontent, statistika', 'Dispatch/queue, consent, cards/content, stats', 'Диспетчер/очередь, согласие, карточки/контент, статистика')}</p></div>
  <div class="card flat"><div class="k">${t('Til servislari', 'Language services', 'Языковые сервисы')}</div><p>ASR router ★ (WhisperLive · STT · Vosk) · uz-glosser ★ · translit ★ · text → sign (s2s + pose)</p></div>
  <div class="card flat"><div class="k">${t("O'zbekistondagi ma'lumot", 'Data in Uzbekistan', 'Данные в Узбекистане')}</div><p>PostgreSQL · Global Signbank · ${t('obyekt ombori (video, pose)', 'object storage (video, pose)', 'объектное хранилище (видео, поза)')}</p></div>
</div>
<div class="srcs">${D('06b §2–6, §10')}</div>`,
  });
};

// ---------- 17. Stack (dev) ----------
const stack = () => {
  const rows = [
    ['jitsi/jitsi-meet', 'Apache-2.0', '30 238', t('Tarjimon video, subtitr qatlami', 'Interpreter video, caption overlay', 'Видео с переводчиком, слой субтитров'), '9–16'],
    ['Signbank/Global-signbank', 'BSD-3', '24', t("O'zbek imo-ishora leksika bazasi (Django)", 'Uzbek sign lexicon database (Django)', 'База лексики узбекского жестового (Django)'), '7–12'],
    ['spoken-to-signed-translation', 'MIT', '105', t('matn → gloss → pose', 'text → gloss → pose', 'текст → глосс → поза'), '9–18'],
    ['collabora/WhisperLive', 'MIT', '4 359', t('Jonli uz/ru ASR oqimi', 'Streaming uz/ru ASR', 'Потоковое ASR uz/ru'), '2.5–4.5'],
    ['cboard-org/cboard', 'GPL-3.0', '768', t('Alohida AAC ilova', 'Separate AAC app', 'Отдельное AAC-приложение'), '9–15'],
    ['upf-gti/performs', 'MIT', '—', t('2-bosqich: statik avatar', 'Phase 2: static avatar', 'Этап 2: статичный аватар'), '4–8'],
  ];
  const own = [
    [t('Dispetcher / navbat / band qilish', 'Dispatch / queue / booking', 'Диспетчер / очередь / запись'), '6–10'],
    [t('Yuzma-yuz ilova', 'Face-to-face app', 'Приложение «лицом к лицу»'), '6–10'],
    [t('Rozilik va yuklash servisi', 'Consent and upload service', 'Сервис согласия и загрузки'), '4–6'],
    [t("O'zbek glosser / lemmatizer", 'Uzbek glosser / lemmatizer', 'Узбекский глоссер / лемматизатор'), '4–8'],
    [t('uz-Latn ↔ uz-Cyrl translit', 'uz-Latn ↔ uz-Cyrl translit', 'Транслит uz-Latn ↔ uz-Cyrl'), '0.5–1'],
    [t('Signbank → s2s eksport', 'Signbank → s2s export', 'Экспорт Signbank → s2s'), '1–2'],
  ];
  return slide({
    id: 's-stack', steps: 1, track: 'dev',
    title: t('Stek va fork rejasi', 'Stack and fork plan', 'Стек и план форков'),
    notes: [
      "Fork qilinadigan loyihalar: litsenziya, GitHub yulduzlari va moslashtirish uchun odam-hafta bahosi. GPL faqat Cboard — u alohida ilova bo'lib qoladi va platforma bilan faqat HTTP orqali gaplashadi.",
      "O'ngda — noldan yozadiganlarimiz. Butun MVP taxminan 35–60 odam-hafta. Eng katta xarajat esa kod emas — kar imo-ishorachilar bilan video yozish.",
    ],
    body: `${kick('17', t('Stek', 'Stack', 'Стек'), true)}
<h2 class="title wide">${t("MVP ≈ <span class=\"hl\">35–60 odam-hafta</span>: ko'p qismi tayyor ochiq kod", 'MVP ≈ <span class="hl">35–60 person-weeks</span>: most of it is existing open source', 'MVP ≈ <span class="hl">35–60 человеко-недель</span>: большая часть — готовый open source')} ${EST()}</h2>
<div class="stack">
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>${t('Fork', 'Fork', 'Форк')}</th><th>${t('Litsenziya', 'Licence', 'Лицензия')}</th><th>★</th><th>${t('Nima uchun', 'Used for', 'Зачем')}</th><th>${t('odam-hafta', 'person-wk', 'чел.-нед.')}</th></tr></thead>
    <tbody>${rows.map((r) => `<tr><td class="mono">${r[0]}</td><td><span class="chip ${r[1].startsWith('GPL') ? 'g' : 'n'}">${r[1]}</span></td><td class="num">${r[2]}</td><td>${r[3]}</td><td class="num">${r[4]}</td></tr>`).join('')}</tbody>
  </table></div>
  <div class="own f" data-s="1">
    <h3>${t("★ Noldan yozamiz", '★ Built from scratch', '★ Пишем с нуля')}</h3>
    <ul class="own-l">${own.map(([a, b]) => `<li><span>${a}</span><b class="num">${b}</b></li>`).join('')}</ul>
    <p class="tiny">${t("Asosiy xarajat — kod emas, kar imo-ishorachilar bilan 2 000+ belgini yozish.", 'The main cost is not code but filming 2,000+ signs with paid Deaf signers.', 'Главная статья — не код, а запись 2 000+ жестов с оплачиваемыми глухими исполнителями.')}</p>
  </div>
</div>
<div class="srcs">${D('04b §2–7')}${D('06b §3, §8')}${S('GitHub', 'https://github.com/jitsi/jitsi-meet')}</div>`,
  });
};

// ---------- 18. Uzbek ASR (dev) ----------
const asr = () => slide({
  id: 's-asr', steps: 2, track: 'dev',
  title: t("O'zbek nutqni tanish", 'Uzbek speech recognition', 'Распознавание узбекской речи'),
  notes: [
    "O'zbek nutqni tanish. Oddiy Whisper-large-v3 o'zbek tilida CER 28 atrofida. Fine-tune qilingan ochiq modellar ancha yaxshi: masalan navai-uz macro-WER 9,7.",
    "Lekin jonli, kundalik nutqda WER 16 dan 40 foizgacha. Va mustaqil, provayderlararo o'zbek benchmarki yo'q.",
    "Shuning uchun birinchi ML vazifa: o'zimizning test to'plamimiz — shifoxona, bank, ko'cha, o'zbek-rus aralash, keksa odamlar ovozi — va natijani ochiq e'lon qilish, har chorakda qayta o'lchash.",
  ],
  body: `${kick('18', 'ASR', true)}
<h2 class="title wide">${t("Kundalik o'zbek nutqida WER <span class=\"hl-b\">16–40%</span> — va mustaqil benchmark yo'q", 'Conversational Uzbek runs at <span class="hl-b">16–40% WER</span> — and no independent benchmark exists', 'На разговорном узбекском WER <span class="hl-b">16–40%</span> — и независимого бенчмарка нет')}</h2>
<div class="asr">
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>${t('Model / provayder', 'Model / provider', 'Модель / провайдер')}</th><th>${t('Natija', 'Result', 'Результат')}</th><th>${t('Manba', 'Source', 'Источник')}</th></tr></thead>
    <tbody>
      <tr><td>Whisper-large-v3 (zero-shot)</td><td class="num">CER ≈ 28,4 (FLEURS)</td><td>${S('HF BuzzASR', 'https://huggingface.co/BuzzASR/uzbek')}</td></tr>
      <tr><td>BuzzASR/uzbek · MIT</td><td class="num">WER 11,84 (CV25) · 25,64 (FLEURS)</td><td>${S('HF', 'https://huggingface.co/BuzzASR/uzbek')}</td></tr>
      <tr><td>navai-uz/whisper-medium-uzbek · Apache-2.0</td><td class="num">macro-WER 9,73</td><td>${S('HF', 'https://huggingface.co/navai-uz/whisper-medium-uzbek')}</td></tr>
      <tr><td>Yandex SpeechKit uz-UZ</td><td class="num">≈ $0,32 / ${t('soat', 'hour', 'час')}</td><td>${S('Yandex', 'https://aistudio.yandex.ru/docs/en/speechkit/stt/models')}</td></tr>
      <tr><td>Aisha (${t('mahalliy', 'local', 'местный')})</td><td class="num">≈ $2 / ${t('soat', 'hour', 'час')}</td><td>${S('aisha.group', 'https://aisha.group/en/pricing')}</td></tr>
      <tr class="f" data-s="1"><td><b>${t('Kundalik nutq', 'Conversational speech', 'Разговорная речь')}</b></td><td class="num hl-b"><b>WER 16–40%</b></td><td>${D('04c §4.1')}</td></tr>
    </tbody>
  </table></div>
  <div class="asr-task f" data-s="2">
    <div class="k">${t('Birinchi ML vazifa', 'First ML task', 'Первая ML-задача')} · <span class="mono">asr-benchmark-uz</span></div>
    <h3>${t("O'z test to'plamimiz, ochiq natija", 'Our own test set, published results', 'Свой тестовый набор, открытые результаты')}</h3>
    <ul class="clean sm w">
      <li>${t("Shifoxona 60 daq · bank/DXM/mahalla 60 · ko'cha/taksi 30", 'Hospital 60 min · bank/public office/mahalla 60 · street/taxi 30', 'Больница 60 мин · банк/ЦГУ/махалля 60 · улица/такси 30')}</li>
      <li>${t("O'zbek-rus aralash 30 · keksa va hududiy talaffuz 30 · rus 30", 'Uzbek-Russian code-switching 30 · older and regional accents 30 · Russian 30', 'Смешанная узбекско-русская речь 30 · пожилые и региональные акценты 30 · русский 30')}</li>
      <li>${t("WER/CER, birinchi va oxirgi so'z kechikishi p50/p95, narx/soat", 'WER/CER, first- and final-word latency p50/p95, cost per hour', 'WER/CER, задержка первого и последнего слова p50/p95, цена за час')}</li>
      <li>${t("Test ma'lumoti hech qachon o'qitishga ishlatilmaydi", 'Test data is never used for training', 'Тестовые данные никогда не используются для обучения')}</li>
    </ul>
    <div class="srcs">${D('06b §9')}${EST()}</div>
  </div>
</div>`,
});

// ---------- 19. Repos and how to run (dev) ----------
const repos = () => {
  const r = [
    ['platform', 'Apache-2.0', t('monorepo: pwa, android, interpreter-console, dispatch, consent, asr-router, translit', 'monorepo: pwa, android, interpreter-console, dispatch, consent, asr-router, translit', 'монорепо: pwa, android, interpreter-console, dispatch, consent, asr-router, translit')],
    ['jitsi-meet', 'Apache-2.0', t('yupqa fork: main-uz.json, uz-Cyrl, tarjimon paneli', 'thin fork: main-uz.json, uz-Cyrl, interpreter panel', 'тонкий форк: main-uz.json, uz-Cyrl, панель переводчика')],
    ['uz-glosser', 'MIT', t("o'zbek lemmatizer, s2s plagini", 'Uzbek lemmatizer, s2s plugin', 'узбекский лемматизатор, плагин s2s')],
    ['asr-benchmark-uz', 'Apache-2.0 · CC BY 4.0', t("ASR test to'plami va hisobot", 'ASR test set and report', 'ASR тестовый набор и отчёт')],
    ['cboard-uz', 'GPL-3.0', t('AAC fork, ~4 000 qator tarjima', 'AAC fork, ~4,000 strings to localise', 'AAC-форк, ~4 000 строк перевода')],
    ['cards-content', 'CC BY-SA 4.0', t('vaziyat kartalari matni va video', 'situation card text and video', 'тексты и видео карточек')],
    ['uzsl-dataset-tools', 'Apache-2.0', t('yozish, QA, eksport', 'recording, QA, export', 'запись, QA, экспорт')],
  ];
  return slide({
    id: 's-repos', steps: 1, track: 'dev',
    title: t('Repolar va ishga tushirish', 'Repos and how to run', 'Репозитории и запуск'),
    notes: [
      "Rejalashtirilgan repolar va litsenziyalari. Har repoda LICENSE, CODE_OF_CONDUCT, o'zbek va rus tilidagi CONTRIBUTING va kontent repolarida kar kengashi reviewer.",
      "Halol holat: bugun platforma kodi hali yozilmagan. Bugun bor narsa — tadqiqot hujjatlari, reja va shu sayt. Shuning uchun hozir qo'shilgan odam arxitekturani birinchi bo'lib shakllantiradi.",
    ],
    body: `${kick('19', t('Repolar', 'Repositories', 'Репозитории'), true)}
<h2 class="title wide">${t("Platforma kodi <span class=\"hl-b\">hali yozilmagan</span> — siz uni birinchi bo'lib shakllantirasiz", 'The platform code <span class="hl-b">is not written yet</span> — you get to shape it first', 'Кода платформы <span class="hl-b">ещё нет</span> — вы формируете его первыми')}</h2>
<div class="repos">
  <div class="repo-l">${r.map(([n, l, d]) => `<div class="repo"><span class="mono rn">${n}</span><span class="chip ${l.startsWith('GPL') ? 'g' : l.startsWith('CC') ? 'w' : 'n'}">${l}</span><span class="rd">${d}</span></div>`).join('')}<p class="tiny">${t('Reja · nomlar o\'zgarishi mumkin', 'Plan · names may change', 'План · названия могут измениться')} · ${D('06b §15')}</p></div>
  <div class="term f" data-s="1">
    <div class="term-h"><i></i><i></i><i></i><span>${t('bugun ishlaydi', 'works today', 'работает сегодня')}</span></div>
<pre><code><span class="c"># ${t('repo: sayt + hujjatlar + reja', 'repo: site + docs + plan', 'репо: сайт + документы + план')}</span>
git clone ${REPO}
cd tilouz
<span class="c"># ${t('sayt build talab qilmaydi', 'the site needs no build', 'сайту не нужна сборка')}</span>
npx http-server site -p 8099
node tools/check-site.mjs
<span class="c"># ${t('har commit: DCO imzosi', 'every commit: DCO sign-off', 'каждый коммит: подпись DCO')}</span>
git commit -s -m "docs: ..."</code></pre>
  </div>
</div>`,
  });
};

// ---------- 20. Dataset ----------
const dataset = () => {
  const ph = [
    ['D0', '50', t('belgi × 10 imo-ishorachi', 'signs × 10 signers', 'жестов × 10 исполнителей'), '≈ 1 500', t('1–2 oy · protokol, rozilik', '1–2 months · protocol, consent', '1–2 мес. · протокол, согласие'), 0.025],
    ['D1', '300', t('belgi × 30–50 imo-ishorachi', 'signs × 30–50 signers', 'жестов × 30–50 исполнителей'), '18 000–45 000', t('3–4 oy · 1-reliz', '3–4 months · release N1', '3–4 мес. · релиз N1'), 0.15],
    ['D2', '2 000', t('belgi × 20+ imo-ishorachi', 'signs × 20+ signers', 'жестов × 20+ исполнителей'), '80 000+', t('6–9 oy · baseline model', '6–9 months · baseline model', '6–9 мес. · базовая модель'), 1],
  ];
  const L = [
    ['L0', t("Majburiy shartlar: ishtirok, haq, O'zbekistonda saqlash", 'Mandatory terms: participation, pay, storage in Uzbekistan', 'Обязательные условия: участие, оплата, хранение в Узбекистане')],
    ['L1', t("Lug'at va ilovada ko'rsatish", 'Shown in the dictionary and app', 'Показ в словаре и приложении')],
    ['L2', t("Ochiq jahon dataseti (CC BY-SA / CC BY)", 'Open worldwide dataset (CC BY-SA / CC BY)', 'Открытый мировой датасет (CC BY-SA / CC BY)')],
    ['L3', t("Ichki ML o'qitish", 'Internal ML training', 'Внутреннее обучение ML')],
    ['L4', t("Nomlangan tadqiqot hamkorlari", 'Named research partners', 'Названные партнёры-исследователи')],
  ];
  return slide({
    id: 's-data', steps: 3, short: 1,
    title: t('Ochiq dataset', 'Open dataset', 'Открытый датасет'),
    notes: [
      "Hozir O'zbek imo-ishora tili uchun ochiq, litsenziyalangan dataset yo'q. Biz birinchisini qurmoqchimiz. Boshlanish — D0: 50 belgi, 10 imo-ishorachi, protokolni sinash.",
      "D1: 300 belgi, 30–50 imo-ishorachi — birinchi ochiq reliz.",
      "D2: 2000 belgi va baseline model. Bu raqamlar baho, Sber tajribasiga tayanadi.",
      "Qoidalar: faqat kar imo-ishorachilar, ularga doim haq to'lanadi, ko'ngilli emas. Rozilik besh qatlamli, har birini alohida qaytarib olish mumkin. Litsenziya CC BY-SA yoki CC BY, hech qachon NC emas.",
    ],
    body: `${kick('20', t('Dataset', 'Dataset', 'Датасет'))}
<h2 class="title wide">${t("O'zbek imo-ishora tilining <span class=\"hl\">birinchi ochiq dataseti</span>: 300 → 2 000 belgi", 'The <span class="hl">first open dataset</span> of Uzbek Sign Language: 300 → 2,000 signs', '<span class="hl">Первый открытый датасет</span> узбекского жестового языка: 300 → 2 000 жестов')} ${EST()}</h2>
<div class="data">
  <div class="phases">${ph.map(([id, n, u, clips, d, w], i) => `<div class="phs f" data-s="${i}"><div class="phs-h"><span class="phs-id">${id}</span><span class="phs-n num">${n}</span><span class="phs-u">${u}</span></div><div class="phs-track"><i style="--w:${w}"></i></div><div class="phs-f"><span><b class="num">${clips}</b> ${t('klip', 'clips', 'клипов')}</span><span>${d}</span></div></div>`).join('')}
    <div class="srcs">${D('06c §3')}${S(t('Sber retsepti: 300 → 2 000 lemma', 'Sber recipe: 300 → 2,000 lemmas', 'Рецепт Сбера: 300 → 2 000 лемм'), 'https://www.youtube.com/watch?v=Z6jNuB4CBVY')}</div>
  </div>
  <div class="consent f" data-s="3">
    <h3>${I('shield')} ${t('Qatlamli rozilik', 'Layered consent', 'Многоуровневое согласие')}</h3>
    <div class="layers">${L.map(([k, v]) => `<div class="ly"><b>${k}</b><span>${v}</span></div>`).join('')}</div>
    <ul class="clean sm">
      <li>${t("Faqat <b>kar</b> imo-ishorachilar, har doim <b>haq to'lanadi</b>", 'Only <b>Deaf</b> signers, always <b>paid</b>', 'Только <b>глухие</b> исполнители, всегда <b>с оплатой</b>')}</li>
      <li>${t("Pose «anonim» deb va'da qilinmaydi (F1 0,31 bilan tanib olingan)", 'Pose is never called "anonymous" (people were identified at F1 0.31)', 'Позу не называем «анонимной» (людей узнавали с F1 0,31)')}</li>
      <li>${t("Litsenziya CC BY-SA 4.0 yoki CC BY 4.0, <b>NC emas</b>", 'Licence CC BY-SA 4.0 or CC BY 4.0, <b>never NC</b>', 'Лицензия CC BY-SA 4.0 или CC BY 4.0, <b>не NC</b>')}</li>
    </ul>
    <div class="srcs">${D('06c §5–9')}</div>
  </div>
</div>`,
  });
};

// ---------- 21. Roadmap ----------
const road = () => {
  const ph = [
    [0, 1, t('0 · Tayyorgarlik', '0 · Preparation', '0 · Подготовка'), t("NNT bilan MoU, 15+ intervyu imo-ishora videosida, rozilik shabloni, ochiq repo", 'MoU with an NGO, 15+ interviews in sign video, consent template, public repo', 'MoU с НКО, 15+ интервью на жестовом видео, шаблон согласия, открытый репо'), t('15+ intervyu (≥50% kar)', '15+ interviews (≥50% Deaf)', '15+ интервью (≥50% глухих)')],
    [1, 3, t('1 · Muloqot yadrosi', '1 · Communication core', '1 · Ядро общения'), t("PWA subtitr, 50 karta, video xabar, Telegram bot", 'PWA captions, 50 cards, video message, Telegram bot', 'PWA-субтитры, 50 карточек, видеосообщение, Telegram-бот'), t('WER ≤15% · SUS ≥70 · kechikish <2 s', 'WER ≤15% · SUS ≥70 · latency <2 s', 'WER ≤15% · SUS ≥70 · задержка <2 с')],
    [3, 6, t('2 · VRI pilot', '2 · VRI pilot', '2 · Пилот VRI'), t("Jitsi/LiveKit VRI, halol soatlar, idora yordamchisi, AAC, Android", 'Jitsi/LiveKit VRI, honest hours, office helper, AAC, Android', 'VRI на Jitsi/LiveKit, честные часы, помощник, AAC, Android'), t("80%+ qo'ng'iroq ≤60 s · 200+ VRI", '80%+ calls answered ≤60 s · 200+ VRI calls', '80%+ звонков ≤60 с · 200+ VRI')],
    [6, 12, t('3 · Hududlar va NNT', '3 · Regions and NGO', '3 · Регионы и НКО'), t("2–4 hudud pilot, B2G shartnoma, ota-onalar moduli, 300–500 belgi", '2–4 regional pilots, a B2G contract, parents\' module, 300–500 signs', '2–4 региональных пилота, B2G-контракт, модуль для родителей, 300–500 жестов'), t("1 000+ foydalanuvchi · kar ko'pchilik kengash", '1,000+ users · Deaf-majority board', '1 000+ пользователей · совет с большинством глухих')],
    [12, 24, t('4 · Milliy miqyos', '4 · National scale', '4 · Национальный масштаб'), t("Milliy VRI smenalari, SOS pilot (FVV/112 bilan), operator, iOS, MDH pilot", 'National VRI shifts, SOS pilot (with the emergency ministry/112), an operator, iOS, a CIS pilot', 'Национальные смены VRI, пилот SOS (с МЧС/112), оператор, iOS, пилот в СНГ'), t('5 000+ VRI daq/oy · 1 000–2 000 belgi', '5,000+ VRI min/month · 1,000–2,000 signs', '5 000+ мин VRI/мес · 1 000–2 000 жестов')],
  ];
  const months = [0, 3, 6, 12, 18, 24];
  return slide({
    id: 's-road', steps: 5, short: 1,
    title: t('24 oylik yo\'l xaritasi', '24-month roadmap', 'Дорожная карта на 24 месяца'),
    notes: [
      "24 oylik yo'l xaritasi. Har bosqich kar foydalanuvchilar baholaydigan «davom etish yoki to'xtash» darvozasi bilan tugaydi.",
      "Nol bosqich — bir oy tayyorgarlik: hamkor NNT bilan kelishuv, kamida 15 intervyu imo-ishora videosida.",
      "Birinchi bosqich, 1–3 oy: subtitr, 50 karta, video xabar, bot. KPI: WER 15 foizdan past, kechikish 2 soniyadan kam.",
      "Ikkinchi bosqich, 3–6 oy: VRI pilot. KPI: e'lon qilingan soatlarda 80 foizdan ko'p qo'ng'iroqqa 60 soniyada javob.",
      "Uchinchi bosqich, 6–12 oy: hududlar, davlat bilan shartnoma, o'z NNTimiz.",
      "To'rtinchi bosqich, 12–24 oy: milliy miqyos, SOS pilot faqat 112 bilan rasmiy hamkorlikda, MDH. Barcha KPI — maqsad, kafolat emas.",
    ],
    body: `${kick('21', t("Yo'l xaritasi", 'Roadmap', 'Дорожная карта'))}
<h2 class="title wide">${t("24 oy, 5 bosqich — har biri <span class=\"hl\">kar foydalanuvchilar bahosi</span> bilan tugaydi", '24 months, 5 phases — each ends with a <span class="hl">Deaf user review</span>', '24 месяца, 5 этапов — каждый заканчивается <span class="hl">оценкой глухих пользователей</span>')} ${EST()}</h2>
<div class="gantt">
  <div class="g-axis">${months.map((m) => `<span style="--x:${m / 24}">${m}</span>`).join('')}<em>${t('oy', 'months', 'мес.')}</em></div>
  ${ph.map(([a, b, n, d, k], i) => `<div class="g-row f" data-s="${i + 1}">
    <div class="g-name"><b>${n}</b><span>${a}–${b} ${t('oy', 'mo', 'мес.')}</span></div>
    <div class="g-lane"><i class="g-bar p${i}" style="--a:${a / 24};--b:${b / 24}"></i></div>
    <div class="g-txt"><span>${d}</span><b class="g-kpi">${k}</b></div>
  </div>`).join('')}
</div>
<div class="srcs">${D('06f')}${S('NRS: 93,88% ≤30 s', 'https://www.accesshub.gov.au/sites/default/files/documents/2025-07-monthly-performance-report-july.pdf')}</div>`,
  });
};

// ---------- 22. Money ----------
const money = () => slide({
  id: 's-money', steps: 1,
  title: t('Pul — ochiq', 'Money, openly', 'Деньги — открыто'),
  notes: [
    "Pul haqida ochiq. 12 oylik grantli stsenariy taxminan 28 dan 103 ming dollargacha. 24 oylik milliy VRI — 355 mingdan 990 ming dollargacha.",
    "Eng katta qator — kod emas, tarjimon soatlari. Qoidalar: foydalanuvchi hech qachon to'lamaydi, bitta manba 50 foizdan oshmaydi, 3–6 oylik zaxira. Tarjimon soati narxi hali aniqlanmagan.",
  ],
  body: `${kick('22', t('Moliya', 'Funding', 'Финансы'))}
<h2 class="title wide">${t("Eng katta xarajat — kod emas, <span class=\"hl\">tarjimon soatlari</span>", 'The biggest cost is not code — it is <span class="hl">interpreter hours</span>', 'Главная статья расходов — не код, а <span class="hl">часы переводчиков</span>')} ${EST()}</h2>
<div class="g c2 money">
  <div class="card"><div class="k">${t('B · 12 oy, grantlar bilan', 'B · 12 months with grants', 'B · 12 месяцев с грантами')}</div><div class="stat"><div class="v num">$28k–103k</div><div class="l">${t('MVP + pilotlar', 'MVP + pilots', 'MVP + пилоты')}</div></div>
    <p class="tiny">${t("Muhandislik $15–40k · tarjimon $2,5–30k (500–1 500 soat) · dataset/kartalar $3–10k · kar hamraisi $3–9k", 'Engineering $15–40k · interpreters $2.5–30k (500–1,500 h) · dataset/cards $3–10k · Deaf co-chair $3–9k', 'Разработка $15–40k · переводчики $2,5–30k (500–1 500 ч) · датасет/карточки $3–10k · глухой сопредседатель $3–9k')}</p></div>
  <div class="card"><div class="k">${t('C · 24 oy, milliy VRI', 'C · 24 months, national VRI', 'C · 24 месяца, национальный VRI')}</div><div class="stat"><div class="v num">$355k–990k</div><div class="l">${t('15–30 tarjimon FTE', '15–30 interpreter FTE', '15–30 ставок переводчиков')}</div></div>
    <p class="tiny">${t("Tarjimon soatlari $170–460k · muhandislik $100–300k · dataset $30–80k · hosting $10–40k", 'Interpreter hours $170–460k · engineering $100–300k · dataset $30–80k · hosting $10–40k', 'Часы переводчиков $170–460k · разработка $100–300k · датасет $30–80k · хостинг $10–40k')}</p></div>
</div>
<div class="g c3 f" data-s="1">
  <div class="pr">${icon('heart')}<div><h3>${t("Foydalanuvchi to'lamaydi", 'Users never pay', 'Пользователи не платят')}</h3><p>${t('Hech qachon, hech qanday limit.', 'Never, no limits.', 'Никогда, без лимитов.')}</p></div></div>
  <div class="pr">${icon('scale', 'w')}<div><h3>${t('Bitta manba ≤50%', 'No source above 50%', 'Ни один источник >50%')}</h3><p>${t('Islandiya saboqi. 3–6 oylik zaxira.', 'The Iceland lesson. A 3–6 month reserve.', 'Урок Исландии. Резерв на 3–6 месяцев.')}</p></div></div>
  <div class="pr">${icon('coin', 'g')}<div><h3>${t('Tarjimon soati: TBD', 'Interpreter hour: TBD', 'Час переводчика: TBD')}</h3><p>${t('Karlar jamiyati va Sharoit Plyus bilan belgilanadi.', 'To be set with the Society of the Deaf and Sharoit Plyus.', 'Определим с Обществом глухих и Sharoit Plyus.')}</p></div></div>
</div>
<div class="srcs">${D('06e §2')}</div>`,
});

// ---------- 23. Roles ----------
const roles = () => {
  const r = [
    ['code', t('Frontend / PWA', 'Frontend / PWA', 'Frontend / PWA'), t("Yuzma-yuz subtitr prototipi: bo'lingan ekran, so'zni bosib tuzatish", 'Face-to-face caption prototype: split screen, tap-to-correct', 'Прототип субтитров «лицом к лицу»: разделённый экран, исправление по нажатию'), 'TS · React · a11y'],
    ['video', t('WebRTC / backend', 'WebRTC / backend', 'WebRTC / backend'), t("Jitsi yupqa fork, tarjimon roli va pin, dispetcher navbati", 'Thin Jitsi fork, interpreter role and pin, dispatch queue', 'Тонкий форк Jitsi, роль и закрепление переводчика, очередь диспетчера'), 'Jitsi · LiveKit · Node/Python'],
    ['mic', t('ML / ASR', 'ML / ASR', 'ML / ASR'), t("2–3 soatlik uz/ru test to'plami, 3–4 provayder WER o'lchovi", '2–3 h uz/ru test set, WER for 3–4 providers', 'Тестовый набор uz/ru на 2–3 ч, WER для 3–4 провайдеров'), 'Python · Whisper · CT2'],
    ['lang', t('NLP / i18n', 'NLP / i18n', 'NLP / i18n'), t("uz-Latn ↔ uz-Cyrl translit kutubxonasi, Jitsi main-uz.json, Cboard ~4 000 qator", 'uz-Latn ↔ uz-Cyrl translit library, Jitsi main-uz.json, Cboard ~4,000 strings', 'Библиотека транслита uz-Latn ↔ uz-Cyrl, main-uz.json для Jitsi, ~4 000 строк Cboard'), t("o'zbek · rus", 'Uzbek · Russian', 'узбекский · русский')],
    ['data', t('Data tooling', 'Data tooling', 'Инструменты данных'), t("Rozilik servisi, hissa ilovasi, Signbank → s2s eksport", 'Consent service, contributor app, Signbank → s2s export', 'Сервис согласия, приложение для вклада, экспорт Signbank → s2s'), 'Django · Python'],
    ['palette', t('Dizayn / qulaylik', 'Design / accessibility', 'Дизайн / доступность'), t("WCAG 2.2 AA, past savodli UX, vizual va tebranish signallari", 'WCAG 2.2 AA, low-literacy UX, visual and vibration alerts', 'WCAG 2.2 AA, UX для низкой грамотности, визуальные и вибросигналы'), 'Figma · axe-core'],
    ['server', 'DevOps', t("O'zbekistonda hosting (JVB, TURN, GPU), imzolangan image, REUSE tekshiruvi", 'Hosting in Uzbekistan (JVB, TURN, GPU), signed images, REUSE checks', 'Хостинг в Узбекистане (JVB, TURN, GPU), подписанные образы, проверка REUSE'), 'Docker · Caddy · CI'],
    ['doc', t('Hujjatlar', 'Docs', 'Документация'), t("O'zbek va rus tilida CONTRIBUTING, qo'llanmalar", 'CONTRIBUTING and guides in Uzbek and Russian', 'CONTRIBUTING и руководства на узбекском и русском'), 'Markdown'],
  ];
  const h = [
    ['hand', t('Kar testerlar', 'Deaf testers', 'Глухие тестировщики'), t("UX sessiyalari — haq to'lanadi", 'UX sessions — paid', 'UX-сессии — оплачиваются')],
    ['video', t('Kar imo-ishorachilar', 'Deaf signers', 'Глухие исполнители'), t("Karta va dataset videosi — doim haq to'lanadi", 'Card and dataset video — always paid', 'Видео для карточек и датасета — всегда с оплатой')],
    ['headset', t('Tarjimonlar', 'Interpreters', 'Переводчики'), t("VRI smenalari — faqat malakali, haq to'lanadi", 'VRI shifts — qualified only, paid', 'Смены VRI — только квалифицированные, с оплатой')],
    ['book', t('Tilshunoslar', 'Linguists', 'Лингвисты'), t("Gloss, variant, o'xshash belgilar", 'Glosses, variants, similar-sign groups', 'Глоссы, варианты, похожие жесты')],
  ];
  return slide({
    id: 's-roles', steps: 2, short: 1,
    title: t('Siz qayerda', 'Where you fit', 'Где ваше место'),
    notes: [
      "Endi eng muhimi — siz qayerda. Har rol uchun aniq birinchi vazifa bor. Frontend — subtitr prototipi. WebRTC — Jitsi fork va dispetcher. ML — o'zbek ASR benchmarki. i18n — translit kutubxonasi.",
      "Data tooling, dizayn, DevOps, hujjatlar. Kod hissasi ko'ngilli; grant bo'lsa — bounty. Hajmni o'zingiz tanlaysiz: bitta PR ham hissa.",
      "Va kod bo'lmagan rollar: kar testerlar, kar imo-ishorachilar, tarjimonlar, tilshunoslar. Ularga doim haq to'lanadi — bu tamoyil.",
    ],
    body: `${kick('23', t('Sizning o\'rningiz', 'Your place', 'Ваше место'))}
<h2 class="title wide">${t("Har rol uchun <span class=\"hl\">aniq birinchi vazifa</span> bor", 'Every role has <span class="hl">a concrete first task</span>', 'У каждой роли есть <span class="hl">конкретная первая задача</span>')}</h2>
<div class="g c4 roles">${r.map(([ic, n, task, sk], i) => `<div class="card role f" data-s="${i < 4 ? 0 : 1}"><div class="row-h">${icon(ic, i % 2 ? 'w' : '')}<h3>${n}</h3></div><p>${task}</p><div class="foot"><span class="chip n">${sk}</span></div></div>`).join('')}</div>
<div class="humans f" data-s="2">${h.map(([ic, n, d]) => `<div class="hu">${icon(ic, 'g')}<div><b>${n}</b><span>${d}</span></div></div>`).join('')}</div>
<p class="tiny commit">${t("Hajm: bitta PR · haftada bir necha soat · modul egasi — o'zingiz tanlaysiz. Kod — ko'ngilli (grant bo'lsa, bounty); imo-ishora videosi va UX sinovi — doim haq to'lanadi.", 'Commitment: one PR · a few hours a week · module owner — your choice. Code is volunteer (bounties if funded); sign video and UX testing are always paid.', 'Объём: один PR · несколько часов в неделю · владелец модуля — выбор за вами. Код — волонтёрски (баунти при гранте); жестовое видео и UX-тесты — всегда с оплатой.')} ${D('06d §3')}${D('06f §3')}</p>`,
  });
};

// ---------- 24. How we work ----------
const how = () => {
  const items = [
    ['code', 'Apache-2.0', t("Hamma kod. GPL faqat alohida servis sifatida (cboard-uz).", 'All code. GPL only as a separate service (cboard-uz).', 'Весь код. GPL — только отдельным сервисом (cboard-uz).')],
    ['data', 'CC BY-SA / CC BY', t("Video va ma'lumot, qatlamli rozilik bilan. Hech qachon NC.", 'Video and data, with layered consent. Never NC.', 'Видео и данные, с многоуровневым согласием. Никогда NC.')],
    ['pen', 'DCO', t('Har commit «Signed-off-by» bilan: git commit -s', 'Every commit carries "Signed-off-by": git commit -s', 'Каждый коммит с «Signed-off-by»: git commit -s')],
    ['heart', t('Xulq kodeksi', 'Code of conduct', 'Кодекс поведения'), t("Har repoda. «Kar-soqov» so'zi ishlatilmaydi.", 'In every repo. Offensive labels for Deaf people are banned.', 'В каждом репо. Оскорбительные ярлыки запрещены.')],
    ['users', t('Kar boshqaruvi', 'Deaf governance', 'Управление глухих'), t("Kuzatuv kengashi 5–7, kamida 4 kishi kar; til kontentiga veto.", 'Supervisory board of 5–7, at least 4 Deaf; veto over language content.', 'Наблюдательный совет 5–7, минимум 4 глухих; вето на языковой контент.')],
    ['chart', t('Shaffoflik', 'Transparency', 'Прозрачность'), t("Soatlar, kutish va statistika har oy ochiq (NRS modeli).", 'Hours, waits and stats published monthly (NRS model).', 'Часы, ожидание и статистика публикуются ежемесячно (модель NRS).')],
  ];
  return slide({
    id: 's-how', steps: 1,
    title: t('Qanday ishlaymiz', 'How we work', 'Как мы работаем'),
    notes: [
      "Qanday ishlaymiz. Kod Apache-2.0, ma'lumot CC BY-SA yoki CC BY. Har commit DCO imzosi bilan. Har repoda xulq kodeksi.",
      "Boshqaruv: kuzatuv kengashida kamida to'rt kishi kar, til kontentiga kar hamraisning veto huquqi. Va har oy soatlar, kutish va statistikani ochiq e'lon qilamiz.",
    ],
    body: `${kick('24', t('Qanday ishlaymiz', 'How we work', 'Как мы работаем'))}
<h2 class="title wide">${t("Ochiq kod, ochiq ma'lumot, <span class=\"hl\">kar jamoasi qarori</span>", 'Open code, open data, <span class="hl">Deaf community decisions</span>', 'Открытый код, открытые данные, <span class="hl">решения сообщества глухих</span>')}</h2>
<div class="g c3 how">${items.map(([ic, h, d], i) => `<div class="pr f" data-s="${i < 3 ? 0 : 1}">${icon(ic, ['', 'w', 'g'][i % 3])}<div><h3>${h}</h3><p>${d}</p></div></div>`).join('')}</div>
<div class="srcs">${D('06d §1, §3')}${D('06b §15–16')}${S('GOVERNANCE.md', REPO + '/blob/main/GOVERNANCE.md')}${S('CODE_OF_CONDUCT.md', REPO + '/blob/main/CODE_OF_CONDUCT.md')}</div>`,
  });
};

// ---------- 25. Honest limitations ----------
const limits = () => {
  const l = [
    [t('Platforma kodi hali yo\'q', 'No platform code yet', 'Кода платформы пока нет'), t("Bugun: tadqiqot, reja, shu sayt.", 'Today: research, plan, this site.', 'Сегодня: исследование, план, этот сайт.')],
    [t('Moliya kafolatlanmagan', 'Funding not secured', 'Финансирование не обеспечено'), t("Grantlar miqdori noma'lum; xalqaro donorlar yopilmoqda.", 'Grant sizes unknown; international donors are closing.', 'Размеры грантов неизвестны; международные доноры закрываются.')],
    [t('Tarjimon soati narxi: TBD', 'Interpreter hour price: TBD', 'Цена часа переводчика: TBD'), t("Ochiq narx ma'lumoti yo'q.", 'No public price data.', 'Открытых данных о ценах нет.')],
    [t("Imo-ishora dataseti yo'q", 'No sign language dataset', 'Нет жестового датасета'), t("Rasmiy lotin daktil alifbosi ham, ISO kodi ham tasdiqlanmagan.", 'Neither an official Latin fingerspelling alphabet nor an ISO code is confirmed.', 'Не подтверждены ни латинская дактильная азбука, ни код ISO.')],
    [t('Telegram ichida kamera yo\'q', 'No camera in Telegram', 'Нет камеры в Telegram'), t("Mini App'da kamera/WebRTC API yo'q; video — PWA'da.", 'Mini Apps have no camera/WebRTC API; video lives in the PWA.', 'В Mini App нет API камеры/WebRTC; видео — в PWA.')],
    [t("ASR sifati noma'lum", 'ASR quality unknown', 'Качество ASR неизвестно'), t("Kundalik nutqda 16–40% WER; mustaqil benchmark yo'q.", '16–40% WER on conversation; no independent benchmark.', '16–40% WER на разговорной речи; независимого бенчмарка нет.')],
    [t('NNT ro\'yxati 7–10+ oy', 'NGO registration 7–10+ months', 'Регистрация НКО 7–10+ мес.'), t("O'z NNTimiz hali ro'yxatdan o'tmagan.", 'Our own NGO is not registered yet.', 'Своя НКО ещё не зарегистрирована.')],
    [t('Raqamlar ziddiyatli', 'Figures conflict', 'Цифры противоречат'), t("Kar odamlar soni 21–30 ming orasida aytiladi.", 'Deaf population cited between 21,000 and 30,000.', 'Число глухих называют от 21 до 30 тысяч.')],
    [t('Rozilik matni tekshirilmagan', 'Consent text not reviewed', 'Текст согласия не проверен'), t("Yurist hali ko'rmagan; video «biometrik»mi — noaniq.", 'No lawyer review yet; whether plain video is "biometric" is unclear.', 'Юрист ещё не смотрел; является ли видео «биометрией» — неясно.')],
    [t('Texnik noaniqlik', 'Technical unknowns', 'Технические неизвестные'), t("Jigasi ↔ WhisperLive, Jitsi uz-Cyrl, E2E — sinalmagan.", 'Jigasi ↔ WhisperLive, Jitsi uz-Cyrl, E2E — untested.', 'Jigasi ↔ WhisperLive, Jitsi uz-Cyrl, E2E — не проверены.')],
  ];
  return slide({
    id: 's-limits', steps: 1, short: 1,
    title: t('Halol cheklovlar', 'Honest limitations', 'Честные ограничения'),
    notes: [
      "Halol cheklovlar. Eng birinchisi: platforma kodi hali yo'q. Moliya kafolatlanmagan. Tarjimon soati narxi aniqlanmagan. Imo-ishora dataseti yo'q.",
      "Telegram ichida kamera yo'q, o'zbek ASR sifati mustaqil o'lchanmagan, NNT ro'yxati 7–10 oydan ko'p, rozilik matnini yurist hali ko'rmagan. Bularni yashirmaymiz — aynan shu yerda yordamingiz kerak.",
    ],
    body: `${kick('25', t('Halol cheklovlar', 'Honest limitations', 'Честные ограничения'))}
<h2 class="title wide">${t("Nimani <span class=\"hl-b\">bilmaymiz</span> va nima <span class=\"hl-b\">hali yo'q</span>", 'What we <span class="hl-b">do not know</span> and what <span class="hl-b">does not exist yet</span>', 'Чего мы <span class="hl-b">не знаем</span> и чего <span class="hl-b">ещё нет</span>')}</h2>
<div class="g c5 lims">${l.map(([a, b], i) => `<div class="lim f" data-s="${i < 5 ? 0 : 1}"><b>${a}</b><span>${b}</span></div>`).join('')}</div>
<div class="srcs">${D('06g')}${D('06b · gaps')}${D('06c · gaps')}<span class="tiny">${t('Raqamlar: ochiq manbalar bo\'yicha stol tadqiqoti, 2026-11', 'Figures: desk research from public sources, Nov 2026', 'Цифры: кабинетное исследование открытых источников, ноябрь 2026')}</span></div>`,
  });
};

// ---------- 26. Call to action ----------
const cta = () => slide({
  id: 's-cta', steps: 1, short: 1, cls: 'cta-slide',
  title: t("Qo'shiling", 'Join us', 'Присоединяйтесь'),
  notes: [
    "Ikki yarim uchrashdi — endi navbat sizda. GitHub'da yulduzcha qo'ying, CONTRIBUTING'ni o'qing va good first issue tanlang.",
    "Telegram kanaliga qo'shiling, tadqiqot hujjatlari repodagi docs papkasida. Rahmat.",
  ],
  body: `${kick('26', t("Qo'shiling", 'Join us', 'Присоединяйтесь'))}
<div class="cta">
  <div class="cta-mark"><svg class="cta-svg" viewBox="0 100 500 300" aria-hidden="true">${markG('cta-mk')}</svg></div>
  <h2 class="display cta-h">${t("Devorni <span class=\"hl\">birga</span> olib tashlaymiz.", 'Let\'s take the wall down <span class="hl">together</span>.', 'Уберём стену <span class="hl">вместе</span>.')}</h2>
  <div class="cta-acts f" data-s="1">
    <a class="btn pri" href="${REPO}" target="_blank" rel="noopener">${I('star')}<span><b>GitHub</b><small>wonmortech/tilouz · Star</small></span></a>
    <a class="btn" href="${REPO}/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">${I('doc')}<span><b>CONTRIBUTING</b><small>${t('qanday hissa qo\'shish', 'how to contribute', 'как внести вклад')}</small></span></a>
    <a class="btn" href="${REPO}/issues?q=is%3Aopen+label%3A%22good+first+issue%22" target="_blank" rel="noopener">${I('git')}<span><b>good first issue</b><small>${t('birinchi vazifa', 'your first task', 'первая задача')}</small></span></a>
    <a class="btn" href="https://t.me/tiloapp" target="_blank" rel="noopener">${I('tg')}<span><b>Telegram</b><small>t.me/tiloapp</small></span></a>
    <a class="btn" href="${REPO}/tree/main/docs" target="_blank" rel="noopener">${I('book')}<span><b>${t('Tadqiqot', 'Research', 'Исследование')}</b><small>/docs</small></span></a>
  </div>
</div>`,
});

export const slidesB = () => [vri(), face(), notBuild(), arch(), stack(), asr(), repos(), dataset(), road(), money(), roles(), how(), limits(), cta()];
