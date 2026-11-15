// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
// Slides 1-15: the problem, the world, the answer. Every number has a source tag.
import { t, S, D, EST, I, icon, slide, kick, markG, wordmark, ARC_L, ARC_R, DOT } from './parts.mjs';

const GAZ = 'https://www.gazeta.uz/oz/2025/09/30/sign-language/';
const WIKI = 'https://en.wikipedia.org/wiki/Deafness_in_Uzbekistan';

// ---------- 1. Hook: the wall ----------
const hook = () => {
  const bricks = Array.from({ length: 8 }, (_, i) => `<rect class="brick" x="688" y="${36 + i * 50}" width="24" height="46" rx="5"/>`).join('');
  const waves = [0, 1, 2].map((i) => `<path class="wave w${i}" d="M0 -70A90 90 0 0 0 0 70"/>`).join('');
  return slide({
    id: 's-hook', steps: 2, short: 1,
    title: t('Devor', 'The wall', 'Стена'),
    notes: [
      "Tasavvur qiling: poliklinika. Shifokor gapiryapti, qarshisida kar ayol. Tovush to'lqinlari bor, lekin ular devorga urilib qoladi. Bu devor — eshitish emas, muloqot tizimining yo'qligi.",
      "Agar so'z ko'rinadigan bo'lsa-chi? Devor qulaydi, nutq subtitrga aylanadi. Bu bizning birinchi modulimiz — yuzma-yuz subtitr.",
      "Ikki yarim — kar odam va eshituvchi odam — uchrashadi. Bu Tilo belgisi: ikki qism, bitta to'lqin, ustida oltin nuqta. Tilo — notijorat, ochiq kodli platforma va biz unga ko'ngillilarni chaqiramiz.",
    ],
    body: `${kick('01', t('Tilo · notijorat · ochiq kod', 'Tilo · non-profit · open source', 'Tilo · некоммерческий · открытый код'))}
<div class="hero">
  <svg class="scene" viewBox="0 0 1400 470" role="img" aria-label="${t("Shifokor gapiradi, kar bemor eshitmaydi; nutq subtitrga aylanadi va ikki yarim uchrashadi", 'A doctor speaks, a Deaf patient cannot hear; speech turns into captions and the two halves meet', 'Врач говорит, глухая пациентка не слышит; речь становится субтитрами, и две половины встречаются')}">
    <g class="h-cap">
      <rect x="40" y="36" width="560" height="104" rx="22" class="cap-box"/>
      <text x="70" y="78" class="cap-k">${t('SUBTITR · jonli', 'CAPTIONS · live', 'СУБТИТРЫ · вживую')}</text>
      <text x="70" y="116" class="cap-t" data-full="${t("Ertaga och qoringa qon topshiring.", 'Give a blood sample tomorrow, before breakfast.', 'Завтра сдайте кровь натощак.')}"></text>
    </g>
    <g class="h-bub">
      <rect x="800" y="36" width="560" height="104" rx="22" class="bub-box"/>
      <path class="bub-tail" d="M1110 140l26 28 6-28z"/>
      <text x="830" y="78" class="cap-k">${t('SHIFOKOR', 'DOCTOR', 'ВРАЧ')}</text>
      <text x="830" y="116" class="bub-t">${t("Ertaga och qoringa qon topshiring.", 'Give a blood sample tomorrow, before breakfast.', 'Завтра сдайте кровь натощак.')}</text>
    </g>
    <g class="h-waves" transform="translate(1000 300)">${waves}</g>
    <g class="h-wall">${bricks}</g>
    <g class="h-mark" transform="translate(444 40)">
      <path class="arc-l" d="${ARC_L}"/><path class="arc-r" d="${ARC_R}"/><path class="dot" d="${DOT}"/>
    </g>
    <text class="h-lbl l" x="230" y="452">${t('Kar bemor', 'Deaf patient', 'Глухая пациентка')}</text>
    <text class="h-lbl r" x="1170" y="452">${t('Eshituvchi shifokor', 'Hearing doctor', 'Слышащий врач')}</text>
  </svg>
</div>
<div class="hero-copy">
  <div class="swap">
    <h1 class="display f fade" data-s="0" data-s-out="1">${t("Shifokor gapiryapti. <span class=\"hl-b\">U eshitmaydi.</span>", 'The doctor is talking. <span class="hl-b">She cannot hear.</span>', 'Врач говорит. <span class="hl-b">Она не слышит.</span>')}</h1>
    <h1 class="display f fade" data-s="1" data-s-out="2">${t("So'z <span class=\"hl-w\">ko'rinadigan</span> bo'lsa-chi?", 'What if words were <span class="hl-w">visible</span>?', 'А если слова <span class="hl-w">видно</span>?')}</h1>
    <div class="f fade hero-end" data-s="2">
      ${wordmark('hero-wm')}
      <h1 class="display sm">${t("Devorni birga olib tashlaymiz.", "Let's take the wall down together.", 'Уберём стену вместе.')}</h1>
    </div>
  </div>
  <p class="lead">${t("Kar, eshitishi zaif va gapira olmaydigan odamlar bilan eshituvchilar orasidagi muloqot to'sig'ini olib tashlaydigan <b>notijorat, ochiq kodli</b> platforma. Avval O'zbekiston, keyin MDH. Bu sahifa — ko'ngilli dasturchi, dizayner, ML mutaxassisi, kar jamoasi a'zolari, tarjimonlar uchun.", 'A <b>non-profit, open-source</b> platform that removes the communication barrier between Deaf, hard-of-hearing and non-speaking people and hearing people. Uzbekistan first, then the CIS. This page is for volunteer developers, designers, ML people, Deaf community members and interpreters.', '<b>Некоммерческая платформа с открытым кодом</b>, которая убирает барьер в общении между глухими, слабослышащими и неговорящими людьми и слышащими. Сначала Узбекистан, затем СНГ. Эта страница — для волонтёров: разработчиков, дизайнеров, ML-специалистов, членов сообщества глухих и переводчиков.')}</p>
</div>`,
  });
};

// ---------- 2. One sentence ----------
const oneLine = () => slide({
  id: 's-one', steps: 1, short: 1,
  title: t('Bir jumlada', 'In one sentence', 'Одной фразой'),
  notes: [
    "Butun loyiha bir jumlada: kar odamni jonli tarjimonga tezroq ulash va yuzma-yuz suhbatni subtitr hamda tayyor iboralar bilan osonlashtirish.",
    "Va eng muhim qoida: biz tarjimonni almashtirmaymiz. AI tarjimon va'da qilmaymiz. Biz odamni odamga tezroq ulaymiz.",
  ],
  body: `${kick('02', t('Bir jumlada', 'In one sentence', 'Одной фразой'))}
<div class="one">
  <p class="one-q">${t("Tilo kar odamni <span class=\"hl\">jonli tarjimonga tezroq</span> ulaydi va yuzma-yuz suhbatni <span class=\"hl-w\">subtitr</span> hamda tayyor iboralar bilan osonlashtiradi.", 'Tilo connects a Deaf person to a <span class="hl">live interpreter faster</span>, and makes face-to-face talk easier with <span class="hl-w">captions</span> and ready-made phrases.', 'Tilo быстрее соединяет глухого человека с <span class="hl">живым переводчиком</span> и облегчает разговор лицом к лицу с помощью <span class="hl-w">субтитров</span> и готовых фраз.')}</p>
  <div class="one-motto f" data-s="1">
    <div class="m-no">${I('x')}<span>${t("«Tarjimonni almashtiramiz»", '"We replace the interpreter"', '«Мы заменим переводчика»')}</span></div>
    <div class="m-yes">${I('check')}<span>${t("«Sizni tarjimonga tezroq ulaymiz»", '"We connect you to a human interpreter faster"', '«Мы быстрее соединим вас с живым переводчиком»')}</span></div>
    <div class="srcs">${D(t('06a · Missiya', '06a · Mission', '06a · Миссия'))}</div>
  </div>
</div>`,
});

// ---------- 3. How many people ----------
const count = () => {
  const rows = [
    { v: 21212, w: 21212, lab: t("Karlar jamiyatida ro'yxatda, 2019", 'Registered with the Society of the Deaf, 2019', 'Состоят в Обществе глухих, 2019'), src: S('Wikipedia', WIKI) },
    { v: 22178, w: 22178, lab: t("Hukumat javobi BMTga: 18 303 kar + 3 875 eshitishi zaif", 'Government reply to the UN: 18,303 deaf + 3,875 hard of hearing', 'Ответ правительства ООН: 18 303 глухих + 3 875 слабослышащих'), src: S('OHCHR') },
    { v: 22000, w: 22000, lab: t("Jamiyat a'zolari, «22 mingdan ortiq», 2025", 'Society members, "over 22,000", 2025', 'Членов общества, «более 22 тысяч», 2025'), src: S('Gazeta.uz 2025', GAZ), plus: true },
    { v: 30000, w: 30000, lab: t("Jamiyatning o'z videosida, 2025", "In the Society's own video, 2025", 'В собственном видео общества, 2025'), src: S('YouTube 2025', 'https://www.youtube.com/watch?v=zGfIHZnmmHw'), approx: true },
  ];
  const bars = rows.map((r) => `<div class="hb">
    <div class="hb-v num">${r.approx ? '~' : ''}<span class="cnt" data-to="${r.v}">0</span>${r.plus ? '+' : ''}</div>
    <div class="hb-track"><i class="hb-fill" style="--w:${(r.w / 30000).toFixed(3)}"></i></div>
    <div class="hb-l">${r.lab} ${r.src}</div></div>`).join('');
  return slide({
    id: 's-count', steps: 2, short: 1,
    title: t("Rasmiy sanoq yo'q", 'No official count', 'Официального подсчёта нет'),
    notes: [
      "Birinchi halol fakt: O'zbekistonda eshitish nogironligi bo'yicha rasmiy sanoq yo'q. Ijtimoiy himoya agentligi nogironlikni faqat guruh bo'yicha hisoblaydi.",
      "Shuning uchun manbalar 21 mingdan 30 minggacha aytadi. Biz bitta raqamni tanlab olmaymiz — hammasini manbasi bilan ko'rsatamiz.",
      "Kontekst: mamlakatda nogironligi bor odamlar bir milliondan ortiq. Jamiyat ro'yxatida qariyb 8 ming bola. Lekin bu raqamlar ham nashrlarda turlicha talqin qilinadi.",
    ],
    body: `${kick('03', t('Muammo · odamlar', 'The problem · people', 'Проблема · люди'))}
<h2 class="title wide">${t("Eshitish nogironligi bo'yicha <span class=\"hl-b\">rasmiy sanoq yo'q</span>: manbalar 21 mingdan 30 minggacha aytadi", 'There is <span class="hl-b">no official count</span> of people with hearing loss: sources say 21,000 to 30,000', '<span class="hl-b">Официального подсчёта нет</span>: источники называют от 21 до 30 тысяч человек с нарушением слуха')}</h2>
<p class="body">${t("Ijtimoiy himoya agentligi nogironlikni faqat I/II/III guruh bo'yicha hisoblaydi, turi bo'yicha emas.", 'The National Agency for Social Protection counts disability only by group (I/II/III), not by type.', 'Агентство соцзащиты учитывает инвалидность только по группам (I/II/III), а не по видам.')} ${S('Gazeta.uz 2025', GAZ)}</p>
<div class="hbars f" data-s="1">${bars}</div>
<div class="g c3 f" data-s="2">
  <div class="card flat"><div class="stat"><div class="v num"><span class="cnt" data-to="1055770">0</span></div><div class="l">${t("nogironligi bor odam, barcha turlar (2025-08)", 'people with any disability (Aug 2025)', 'людей с любой инвалидностью (авг. 2025)')}</div></div><div class="foot">${S('Qalampir 2025')}</div></div>
  <div class="card flat"><div class="stat"><div class="v num">~<span class="cnt" data-to="8000">0</span></div><div class="l">${t("eshitish nogironligi bor bola — Jamiyat ro'yxatida", 'children with hearing loss on the Society registry', 'детей с нарушением слуха в реестре общества')}</div></div><div class="foot">${S('Gazeta.uz 2025', GAZ)}<span class="tiny">${t("ruscha nashrda: «Toshkent viloyatida»", 'Russian edition: "in Tashkent region"', 'в русской версии: «в Ташкентской области»')}</span></div></div>
  <div class="card flat"><div class="stat"><div class="v num"><span class="cnt" data-to="300">0</span>–350</div><div class="l">${t("chaqaloqqa yiliga koxlear implant kerak", 'newborns a year need a cochlear implant', 'новорождённым в год нужен кохлеарный имплант')}</div></div><div class="foot">${S('Gazeta.uz 2015')}</div></div>
</div>`,
  });
};

// ---------- 4. One interpreter per 800 ----------
const ratio = () => slide({
  id: 's-ratio', steps: 2, short: 1,
  title: t('800 kishiga bitta tarjimon', 'One interpreter per 800 people', 'Один переводчик на 800 человек'),
  notes: [
    "Har nuqta — bir kar odam. Bu yerda 800 ta nuqta.",
    "Ulardan bittasi yonadi — bu malakali imo-ishora tarjimoni. Poytaxtda 10 dan kam malakali tarjimon bor: taxminan 800 kishiga bitta.",
    "Va tizim ham yo'q: surdotarjimon rasmiy kasb sifatida yo'q, bepul soat kafolati yo'q. Birinchi bakalavrlar faqat 2026 yilda bitiradi. Taqqoslash uchun, Rossiyada yiliga 84 soat bepul tarjima bor.",
  ],
  body: `${kick('04', t('Muammo · tarjimonlar', 'The problem · interpreters', 'Проблема · переводчики'))}
<h2 class="title wide">${t("Poytaxtda 10 dan kam malakali tarjimon — <span class=\"hl-b\">800 kishiga bitta</span>", 'Fewer than 10 qualified interpreters in the capital — <span class="hl-b">one per 800 people</span>', 'Меньше 10 квалифицированных переводчиков в столице — <span class="hl-b">один на 800 человек</span>')}</h2>
<div class="ratio">
  <div class="ratio-fig">
    <svg class="dots" viewBox="0 0 640 322" role="img" aria-label="${t('800 nuqta, bittasi ajratilgan', '800 dots, one highlighted', '800 точек, одна выделена')}"></svg>
    <div class="ratio-cap f" data-s="1"><span class="pip"></span>${t('= 1 malakali tarjimon', '= 1 qualified interpreter', '= 1 квалифицированный переводчик')} ${S('Gazeta.uz 2025', GAZ)}</div>
  </div>
  <div class="ratio-side f" data-s="2">
    <ul class="clean x">
      <li>${t("Jamiyatdagi tarjimonlardan <b>faqat bittasida oliy ma'lumot</b> bor", 'Of the Society\'s interpreters, <b>only one has higher education</b>', 'Из переводчиков общества <b>высшее образование лишь у одного</b>')} ${S('yuz.uz')}</li>
      <li>${t("«Surdotarjimon» <b>rasmiy kasb emas</b>, xizmat standarti va bepul soat kafolati yo'q", '"Sign language interpreter" is <b>not an official profession</b>; no service standard, no guaranteed free hours', '«Сурдопереводчик» — <b>не официальная профессия</b>; нет стандарта услуги и гарантированных бесплатных часов')} ${S('Gazeta.uz 2025', GAZ)}</li>
      <li>${t("Birinchi bakalavr tarjimonlar <b>2026 yilda</b> bitiradi", 'The first bachelor-trained interpreters graduate <b>in 2026</b>', 'Первые переводчики-бакалавры выпускаются <b>в 2026 году</b>')} ${S('Gazeta.uz 2025', GAZ)}</li>
      <li class="cmp">${t("Taqqoslash: Rossiyada yiliga <b>84 soat</b> bepul, Qozog'istonda <b>60 soat</b>", 'Compare: Russia guarantees <b>84 hours</b> a year, Kazakhstan <b>60</b>', 'Для сравнения: в России <b>84 часа</b> в год бесплатно, в Казахстане <b>60</b>')} ${S('SFR 2026', 'https://sfr.gov.ru/branches/yaroslavl/news/~2026/09/25/285016')}</li>
    </ul>
  </div>
</div>`,
});

// ---------- 5. Everyday barriers ----------
const life = () => slide({
  id: 's-life', steps: 3,
  title: t("Kundalik to'siqlar", 'Everyday barriers', 'Барьеры каждый день'),
  notes: [
    "To'siq maktabdan boshlanadi. Internat maktablarda ko'p o'qituvchilar imo-ishorani bilmaydi, lab o'qishga urg'u beriladi va bolalar bir yil kech bitiradi.",
    "Favqulodda holat: 112 2025 yil martdan butun mamlakatda ishlaydi, lekin kar odamlar uchun SMS yoki video kirish topilmadi. 2019 yildagi alohida xizmat JusTalk ilovasi orqali — foydalanuvchilar uni tez-tez ishlamaydi deydi.",
    "Televizor: qonun haftalik efirning kamida 5 foizini talab qiladi, amalda kuniga 15-20 daqiqa imo-ishorali yangiliklar.",
    "Va natija: so'rovda 56 foiz tez-tez qiynalishini aytgan, qariyb 90 foiz — muntazam yoki ba'zan. Ular yagona tarjimonlar bazasi va onlayn xizmat so'ragan. Tilo aynan shu so'rovga javob.",
  ],
  body: `${kick('05', t('Muammo · kundalik hayot', 'The problem · daily life', 'Проблема · повседневная жизнь'))}
<h2 class="title wide">${t("To'siq maktabda boshlanadi va 112 gacha yetadi", 'The barrier starts at school and reaches all the way to 112', 'Барьер начинается в школе и доходит до 112')}</h2>
<div class="g c4 life">
  <div class="card f" data-s="0">${icon('school')}<h3>${t('Maktab', 'School', 'Школа')}</h3>
    <p><b>19</b> ${t("internat maktab. Ko'p o'qituvchilar imo-ishorani bilmaydi, lab o'qishga urg'u; bolalar <b>1 yil kech</b> bitiradi.", 'boarding schools. Many teachers do not sign; the focus is lip-reading; pupils graduate <b>a year later</b>.', 'школ-интернатов. Многие учителя не знают жестового языка, упор на чтение с губ; выпуск <b>на год позже</b>.')}</p>
    <div class="foot">${S('ResearchGate ~2025')}${S('Wikipedia', WIKI)}</div></div>
  <div class="card f" data-s="1">${icon('sos', 'b')}<h3>112</h3>
    <p>${t("2025-03-25 dan butun mamlakatda. Kar odam uchun <b>SMS yoki video kirish topilmadi</b>. 2019 yilgi alohida xizmat JusTalk orqali — «tez-tez ishlamaydi».", 'Nationwide since 25 Mar 2025. <b>No SMS or video access</b> for Deaf callers was found. A 2019 separate service runs over JusTalk, which users say "often fails".', 'По всей стране с 25.03.2025. <b>SMS или видеодоступ</b> для глухих не найден. Отдельная служба 2019 года работает через JusTalk — «часто не работает».')}</p>
    <div class="foot">${S('kun.uz 2025')}${D(t('tadqiqot', 'research', 'исследование'))}</div></div>
  <div class="card f" data-s="2">${icon('tv', 'w')}<h3>${t('Televizor', 'TV', 'Телевидение')}</h3>
    <p>${t("Qonun: haftalik efirning <b>≥5%</b> qulay bo'lsin. Amalda «O'zbekiston 24»da kuniga <b>15–20 daqiqa</b> imo-ishorali yangilik.", 'The law: <b>≥5%</b> of weekly airtime accessible. In practice: <b>15–20 minutes</b> a day of signed news on "O\'zbekiston 24".', 'Закон: <b>≥5%</b> эфира в неделю доступно. На практике: <b>15–20 минут</b> в день новостей с жестовым языком на «O\'zbekiston 24».')}</p>
    <div class="foot">${S('PQ-407')}${S('Gazeta.uz 2025', GAZ)}</div></div>
  <div class="card accent f" data-s="3">${icon('chart', 'g')}<h3>${t("So'rov, n=102", 'Survey, n=102', 'Опрос, n=102')}</h3>
    <p><b class="big-n num">56%</b> ${t("tez-tez qiynaladi, ~<b>90%</b> muntazam yoki ba'zan. So'ralgan narsa: <b>yagona tarjimonlar bazasi va onlayn xizmat</b>.", 'often face difficulties, ~<b>90%</b> regularly or sometimes. What they asked for: <b>one interpreter database and an online service</b>.', 'часто сталкиваются с трудностями, ~<b>90%</b> регулярно или иногда. Просили: <b>единую базу переводчиков и онлайн-сервис</b>.')}</p>
    <div class="foot">${S('Yuksalish 2024 · Gazeta.uz', GAZ)}</div></div>
</div>`,
});

// ---------- 6. What exists ----------
const exists = () => {
  const items = [
    ['Surdo AI', t("Davlat ilovasi: kamera → matn, matn → 3D avatar; 1 000+ so'z; 1K+ o'rnatish", 'State app: camera → text, text → 3D avatar; 1,000+ words; 1K+ installs', 'Госприложение: камера → текст, текст → 3D-аватар; 1 000+ слов; 1K+ установок'), S('Google Play 2026', 'https://play.google.com/store/apps/details?id=com.ihma.surdoai'), 'hand'],
    ['imo-ishora.uz', t("Sharoit Plyus: 2 000+ so'zli video lug'at, 20 mavzu, kurslar", 'Sharoit Plyus: 2,000+ word video dictionary, 20 topics, courses', 'Sharoit Plyus: видеословарь на 2 000+ слов, 20 тем, курсы'), S('imo-ishora.uz', 'https://imo-ishora.uz'), 'book'],
    ['Surdo-online', t("DXMlardagi masofaviy tarjima planshetlari (2020-11 dan); ba'zilari ulanmaydi", 'Remote-interpreting tablets in public service centres (since Nov 2020); some do not connect', 'Планшеты удалённого перевода в ЦГУ (с ноября 2020); некоторые не подключаются'), S('Gazeta.uz 2025', GAZ), 'video'],
    [t('Karlar jamiyati', 'Society of the Deaf', 'Общество глухих'), t("A'zolarga notarius, sud, politsiya, shifoxonada bepul tarjimon", 'Free interpreters for members at notaries, courts, police, hospitals', 'Бесплатный переводчик для членов: нотариус, суд, полиция, больница'), S('YouTube 2025', 'https://www.youtube.com/watch?v=zGfIHZnmmHw'), 'users'],
    ['HuquqPlus', t("Sharoit Plyus: imo-ishora tarjimali yuridik video-qo'ng'iroq markazi", 'Sharoit Plyus: legal video-call centre with sign interpreting', 'Sharoit Plyus: юридический видеоцентр с сурдопереводом'), S('sharoitplus.uz', 'https://sharoitplus.uz'), 'scale'],
  ];
  return slide({
    id: 's-exist', steps: 1,
    title: t('Nima bor', 'What already exists', 'Что уже есть'),
    notes: [
      "Biz bo'sh joyda boshlamayapmiz. Davlat ilovasi Surdo AI, Sharoit Plyusning imo-ishora.uz lug'ati, DXMlardagi planshetlar, Karlar jamiyatining bepul tarjimonlari, HuquqPlus markazi.",
      "Lekin ular bir-biriga ulanmagan, va eng tor joy — tarjimonni odamga yetkazish. Biz raqobat qilmaymiz: lug'at qilmaymiz, avatar qilmaymiz — ularga havola beramiz va jonli tarjimonga yo'lni qisqartiramiz.",
      "",
    ],
    body: `${kick('06', t('Bugun nima bor', 'What exists today', 'Что есть сегодня'))}
<h2 class="title wide">${t("Yechimlar bor — lekin <span class=\"hl-b\">tarjimonga yo'l</span> hali ham uzun", 'Solutions exist — but <span class="hl-b">the path to an interpreter</span> is still long', 'Решения есть — но <span class="hl-b">путь к переводчику</span> всё ещё долгий')}</h2>
<div class="g c5 exist">${items.map(([n, d, s, ic], i) => `<div class="card f" data-s="0" style="--d:${i}">${icon(ic, i % 2 ? 'w' : '')}<h3>${n}</h3><p>${d}</p><div class="foot">${s}</div></div>`).join('')}</div>
<div class="gap f" data-s="1">
  <div class="gap-l">${I('alert')}<p>${t("Bo'shliq texnologiyada emas — <b>tarjimonni kerakli joyga va vaqtga yetkazadigan tizimda</b>. Qonun davlat organlarini tarjimon yollashga majbur qiladi, lekin ishlaydigan yetkazib berish tizimi yo'q.", 'The gap is not technology — it is <b>the system that gets an interpreter to the right place at the right time</b>. The law already obliges state bodies to hire interpreters, but no working delivery system exists.', 'Пробел не в технологиях, а <b>в системе, которая доставляет переводчика в нужное место и время</b>. Закон уже обязывает госорганы нанимать переводчиков, но работающей системы доставки нет.')} ${S("O'RQ-641", 'https://lex.uz')}</p></div>
  <div class="gap-r">${I('heart')}<p>${t("<b>Raqobat emas — hamkorlik.</b> Lug'at va avatarni takrorlamaymiz: ularga havola beramiz.", '<b>Partners, not competitors.</b> We do not duplicate the dictionary or the avatar — we link to them.', '<b>Партнёрство, не конкуренция.</b> Не дублируем словарь и аватар — ссылаемся на них.')} ${D('06a §2')}</p></div>
</div>`,
  });
};

// ---------- 7. What the world does ----------
const world = () => {
  const c = (flag, name, v, unit, txt, src, tone = '') => `<div class="card ${tone}"><div class="k">${flag} · ${name}</div><div class="stat"><div class="v num">${v}</div><div class="l">${unit}</div></div><p>${txt}</p><div class="foot">${src}</div></div>`;
  return slide({
    id: 's-world', steps: 1,
    title: t('Dunyo tajribasi', 'What the world does', 'Мировой опыт'),
    notes: [
      "Dunyo bu muammoni hal qilgan: relay xizmatlari. Kolumbiyada davlat va kar federatsiyasi birga 2024 yilda yarim milliondan ortiq qo'ng'iroqni tarjima qilgan — veb va WhatsApp orqali. Fransiyada 3 daqiqada javob berilgan imo-ishora qo'ng'iroqlari ulushi bir yilda 24 dan 71 foizga chiqdi. Yaponiyada oyiga 30 mingga yaqin qo'ng'iroq.",
      "Ikki saboq. AQSh VRSga yiliga 660 million dollar sarflaydi — odam tarjimoni ishlaydigan tizimga. Islandiyada esa byudjet tugagach xizmat yopildi. Demak: odam tarjimon, ochiq KPI va bir nechta moliya manbasi.",
      "",
    ],
    body: `${kick('07', t('Dunyo tajribasi', 'What the world does', 'Мировой опыт'))}
<h2 class="title wide">${t("Ishlaydigan model: <span class=\"hl\">odam tarjimon</span> + ochiq KPI + barqaror moliya", 'The model that works: <span class="hl">human interpreters</span> + public KPIs + stable funding', 'Модель, которая работает: <span class="hl">живые переводчики</span> + открытые KPI + стабильное финансирование')}</h2>
<div class="g c3 world f" data-s="0">
  ${c('CO', 'Centro de Relevo', '<span class="cnt" data-to="516523">0</span>', t("tarjima qilingan qo'ng'iroq, 2024", 'relayed calls in 2024', 'переведённых звонков, 2024'), t("4 500 kishi; veb va WhatsApp; data operator tomonidan bepul.", '4,500 people; web and WhatsApp; data zero-rated by the operator.', '4 500 человек; веб и WhatsApp; трафик бесплатный у оператора.'), S('MinTIC 2024', 'https://mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/399452:Este-ano-el-Centro-de-Relevo-gestiono-516-523-llamadas-relevadas-para-la-poblacion-con-discapacidad-auditiva'))}
  ${c('FR', t('Fransiya', 'France', 'Франция'), '24% → <span class="cnt" data-to="71">0</span>%', t("imo-ishora qo'ng'irog'iga ≤3 daqiqada javob", 'sign-language calls answered within 3 minutes', 'звонков на жестовом языке с ответом ≤3 минут'), t("Q4 2023 → Q4 2024. Har chorakda ochiq hisobot.", 'Q4 2023 → Q4 2024. Public report every quarter.', 'IV кв. 2023 → IV кв. 2024. Открытый отчёт каждый квартал.'), S('ARCEP Q4 2024', 'https://www.arcep.fr/fileadmin/user_upload/observatoire/indicateurs-accessibilite/t4-2024/indicateurs-accessibilite-T4-2024_avril2025.pdf'))}
  ${c('JP', t('Yaponiya', 'Japan', 'Япония'), '~<span class="cnt" data-to="30000">0</span>', t("qo'ng'iroq oyiga", 'calls a month', 'звонков в месяц'), t("14 000+ foydalanuvchi, 210 000+ daqiqa/oy. 2021 dan qonun bilan, raqam yig'imi orqali.", '14,000+ users, 210,000+ minutes a month. By law since 2021, funded by a per-number levy.', '14 000+ пользователей, 210 000+ минут в месяц. По закону с 2021, сбор с каждого номера.'), S('NFTRS FY2024', 'https://nftrs.or.jp/news/fy2024/files/NFTRSpapers_fy2024-001.pdf'))}
</div>
<div class="g c3 world f" data-s="1">
  ${c('AU', 'NRS', '<span class="cnt" data-to="93.88" data-dec="2">0</span>%', t("qo'ng'iroqqa 30 soniyada javob", 'of calls answered within 30 seconds', 'звонков с ответом за 30 секунд'), t("Iyul 2025. Har oy ochiq KPI hisoboti — biz ham shunday qilamiz.", 'July 2025. A public KPI report every month — we will do the same.', 'Июль 2025. Открытый отчёт KPI каждый месяц — мы будем делать так же.'), S('NRS 2025-07', 'https://www.accesshub.gov.au/sites/default/files/documents/2025-07-monthly-performance-report-july.pdf'), 'accent')}
  ${c('US', 'VRS', '$<span class="cnt" data-to="661">0</span>M', t("yiliga, 2025-26 — foydalanuvchiga bepul", 'a year, 2025-26 — free to users', 'в год, 2025-26 — бесплатно для пользователей'), t("Telekom yig'imidan har daqiqa uchun to'lanadi. Odam tarjimonli relay — barqaror model.", 'Paid per minute from a telecom levy. Human relay is what lasts.', 'Оплата поминутно из телеком-сбора. Устойчива именно модель с живыми переводчиками.'), S('FCC DA 25-578', 'https://docs.fcc.gov/public/attachments/DA-25-578A1.docx'))}
  ${c('IS', t('Islandiya', 'Iceland', 'Исландия'), '0', t("xizmat, 2025-03 oxirida", 'service at the end of March 2025', 'услуг в конце марта 2025'), t("Byudjet tugagach video relay yopildi. Saboq: bitta moliya manbasiga tayanmaslik.", 'Video relay shut down when the budget line ran out. Lesson: never rely on one funder.', 'Видеорелей закрылся, когда закончился бюджет. Урок: не зависеть от одного источника.'), S('SHH 2025', 'https://island.is/s/shh/frett/lokad-fyrir-endurgjaldslausa-tulkathjonustu-ut-mars'), 'warn')}
</div>`,
  });
};

// ---------- 8. LLMs cannot read sign video ----------
const ai = () => {
  const bars = [
    ['GPT-4o', 0.1], ['Gemini 1.5 Pro', 0.2], ['Claude 3 Opus', 0.4],
  ];
  return slide({
    id: 's-ai', steps: 2, short: 1,
    title: t("AI imo-ishorani o'qiy olmaydi", 'AI cannot read sign language yet', 'ИИ пока не читает жестовый язык'),
    notes: [
      "Ko'pchilik so'raydi: ChatGPT'ga videoni bersak bo'lmaydimi? Ochiq benchmark FLEURS-ASL'da GPT-4o 0.1 BLEU oldi, Gemini 0.2, Claude 3 Opus 0.4.",
      "Odam tarjimon esa 13. Farqni ko'ring — bu yuz baravardan ham ko'p. Yorliq: bu 2024 yilgi o'lchov, lekin uzluksiz tarjima hali ham ilmiy bosqichda.",
      "Xulosa: tibbiyot, sud, politsiya, favqulodda holatda faqat odam tarjimon. AI — faqat yordamchi: masalan, top-3 taklif, kar foydalanuvchi o'zi tasdiqlaydi.",
    ],
    body: `${kick('08', t("AI chegarasi", 'The limit of AI', 'Предел ИИ'))}
<h2 class="title wide">${t("GPT-4o imo-ishora videosini <span class=\"hl-b\">0,1 BLEU</span> bilan o'qiydi. Odam tarjimon — <span class=\"hl\">13</span>.", 'GPT-4o reads sign language video at <span class="hl-b">0.1 BLEU</span>. A human interpreter scores <span class="hl">13</span>.', 'GPT-4o «читает» видео на жестовом языке на <span class="hl-b">0,1 BLEU</span>. Живой переводчик — <span class="hl">13</span>.')}</h2>
<div class="aibars">
  ${bars.map(([n, v]) => `<div class="ab"><div class="ab-n">${n}</div><div class="ab-track"><i class="ab-fill bad" style="--w:${(v / 13).toFixed(4)}"></i></div><div class="ab-v num">${String(v).replace('.', t(',', '.', ','))}</div></div>`).join('')}
  <div class="ab f" data-s="1"><div class="ab-n"><b>${t('Odam tarjimon', 'Human interpreter', 'Живой переводчик')}</b></div><div class="ab-track"><i class="ab-fill" style="--w:1"></i></div><div class="ab-v num"><b>13</b></div></div>
  <div class="ab-src">${t('FLEURS-ASL, ASL → ingliz, BLEU', 'FLEURS-ASL, ASL → English, BLEU', 'FLEURS-ASL, ASL → английский, BLEU')} ${S('arXiv 2408.13585 (2024)', 'https://arxiv.org/pdf/2408.13585')}</div>
</div>
<div class="g c2 f" data-s="2">
  <div class="card accent"><h3>${I('shield')} ${t("Yuqori xavfli holatda — faqat odam", 'High-stakes settings — humans only', 'В ситуациях высокого риска — только человек')}</h3><p>${t("Tibbiyot, sud, politsiya, favqulodda holat: AI ishlatilmaydi. Ochiq va'da.", 'Medicine, court, police, emergencies: no AI. A public pledge.', 'Медицина, суд, полиция, экстренные случаи: без ИИ. Публичное обязательство.')}</p><div class="foot">${D('06a T9')}${S('WFD/WASLI 2018', 'https://wfdeaf.org/wp-content/uploads/WFD-and-WASLI-Statement-on-Avatar-FINAL-14032018-Updated-14042018.pdf')}</div></div>
  <div class="card"><h3>${I('eye')} ${t("98% model gapda ishlamaydi", 'A 98% model fails on sentences', 'Модель с 98% не работает на фразах')}</h3><p>${t("Alohida belgilarni 98% taniydigan model uzluksiz nutqda ishlamaydi: belgilar bir-biriga qo'shilib ketadi. AI — faqat top-3 taklif, tasdiqni kar odam beradi.", 'A model that recognises isolated signs at 98% does not work on continuous signing: signs run together. AI may only suggest a top 3; the Deaf user confirms.', 'Модель с 98% на отдельных жестах не работает на связной речи: жесты сливаются. ИИ — только подсказка из трёх вариантов, подтверждает глухой пользователь.')}</p><div class="foot">${S('Data Fest 2025', 'https://www.youtube.com/watch?v=Z6jNuB4CBVY')}${D('06a M16')}</div></div>
</div>`,
  });
};

// ---------- 9. Avatars ----------
const avatar = () => slide({
  id: 's-avatar', steps: 1,
  title: t('Avatar va odam', 'Avatars and humans', 'Аватар и человек'),
  notes: [
    "Avatar haqida kar jamoasi aniq gapirgan. Jahon kar federatsiyasi va tarjimonlar assotsiatsiyasi: avatar jonli va muhim ma'lumot uchun emas, faqat oldindan tayyorlangan statik matn uchun. Germaniya kar ittifoqi 2024 yilda hozircha joriy qilmaslikni maslahat bergan.",
    "Lekin video tarjima ham ideal emas: AQShdagi tadqiqotda kar foydalanuvchilarning atigi 41 foizi VRI dan mamnun. Shuning uchun biz ishonchlilikni har reliz oldidan o'lchaymiz.",
  ],
  body: `${kick('09', t('Kar jamoasi nima deydi', 'What the Deaf community says', 'Что говорит сообщество глухих'))}
<h2 class="title wide">${t("Avatar — faqat <span class=\"hl-w\">statik matn</span> uchun. Jonli suhbatda — <span class=\"hl\">odam</span>.", 'Avatars only for <span class="hl-w">static text</span>. Live conversation needs <span class="hl">a person</span>.', 'Аватар — только для <span class="hl-w">статичного текста</span>. Живой разговор — <span class="hl">человек</span>.')}</h2>
<div class="g c3">
  <div class="card"><div class="k">WFD + WASLI · 2018</div><p>${t("Avatar odam imo-ishorachini almashtirmasligi kerak. Jonli, murakkab, muhim ma'lumot — eng katta xavotir. Oldindan yozilgan statik ma'lumot uchun qabul qilinishi mumkin.", 'Avatars must not replace human signers. Live, complex, critical information is the biggest concern. Pre-recorded static information may be acceptable.', 'Аватар не должен заменять живого исполнителя. Главная опасность — живая, сложная, критичная информация. Для заранее записанной статичной информации допустим.')}</p><div class="foot">${S('WFD PDF', 'https://wfdeaf.org/wp-content/uploads/WFD-and-WASLI-Statement-on-Avatar-FINAL-14032018-Updated-14042018.pdf')}</div></div>
  <div class="card"><div class="k">DGB · ${t('Germaniya', 'Germany', 'Германия')} · 2024</div><p>${t("Germaniya kar ittifoqi imo-ishorali avatarlarni hozircha joriy qilmaslikni «qat'iy maslahat beradi»: ular tarjimonni almashtirmaydi.", 'The German Deaf Association "strongly advises" against introducing signing avatars for now: they do not replace interpreters.', 'Немецкий союз глухих «настоятельно не рекомендует» пока вводить жестовые аватары: они не заменяют переводчиков.')}</p><div class="foot">${S('DGB PM 01/2024', 'https://dglb.de/wp-content/uploads/2024/05/01_2024-Pressemitteilung_Gebaerdensprach-Avatare.pdf')}</div></div>
  <div class="card warn f" data-s="1"><div class="k">${t('VRI ham ideal emas', 'VRI is not perfect either', 'VRI тоже не идеален')}</div><div class="stat"><div class="v num"><span class="cnt" data-to="41">0</span>%</div><div class="l">${t("kar foydalanuvchi VRI dan mamnun (n=228)", 'of Deaf VRI users satisfied (n=228)', 'глухих пользователей VRI довольны (n=228)')}</div></div><p>${t("Shuning uchun video barqarorligi va navbat shaffofligi har relizdan oldin o'lchanadi.", 'So call stability and queue transparency are measured before every release.', 'Поэтому стабильность видео и прозрачность очереди измеряются перед каждым релизом.')}</p><div class="foot">${S('PMC6431824', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6431824/')}${D('06a T7')}</div></div>
</div>`,
});

// ---------- 10. Mission ----------
const mission = () => slide({
  id: 's-mission', steps: 1, short: 1,
  title: t('Missiya', 'Mission', 'Миссия'),
  notes: [
    "Tiloning missiyasi: kar jamoasi boshqaradigan, bepul, ochiq kodli platforma.",
    "U uchta ishni qiladi: jonli tarjimonga yo'lni qisqartiradi, yuzma-yuz suhbatni osonlashtiradi va o'zbek imo-ishora tili uchun birinchi ochiq, rozilikka asoslangan datasetni yaratadi.",
  ],
  body: `${kick('10', t('Tilo nima', 'What Tilo is', 'Что такое Tilo'))}
<div class="mission">
  <div class="mission-l">
    <h2 class="title">${t("Kar jamoasi boshqaradigan, <span class=\"hl\">bepul</span> va <span class=\"hl-w\">ochiq kodli</span> platforma", 'A <span class="hl">free</span>, <span class="hl-w">open-source</span> platform run by the Deaf community', '<span class="hl">Бесплатная</span> платформа с <span class="hl-w">открытым кодом</span>, которой управляет сообщество глухих')}</h2>
    <p class="lead">${t("Maqsad: O'zbekistondagi, keyin MDHdagi kar, eshitishi zaif va gapira olmaydigan odamlar o'z tilida, istalgan joyda va vaqtda tushunishi va tushunilishi.", 'Vision: Deaf, hard-of-hearing and non-speaking people in Uzbekistan, then the CIS, understand and are understood in their own language, anywhere, any time.', 'Цель: глухие, слабослышащие и неговорящие люди в Узбекистане, а затем в СНГ, понимают и понятны на своём языке — где угодно и когда угодно.')} ${D('06a §1')}</p>
  </div>
  <ol class="three f" data-s="1">
    <li>${icon('headset')}<div><h3>${t("Jonli tarjimonga yo'l", 'A shorter path to a live interpreter', 'Короткий путь к живому переводчику')}</h3><p>${t("Bir tugma, login yo'q, ochiq soat va kutish vaqti.", 'One tap, no login, honest hours and wait time.', 'Одна кнопка, без входа, честные часы и время ожидания.')}</p></div></li>
    <li>${icon('cc', 'w')}<div><h3>${t('Yuzma-yuz suhbat', 'Face-to-face talk', 'Разговор лицом к лицу')}</h3><p>${t("Jonli o'zbek/rus subtitr, tayyor iboralar, vaziyat kartalari.", 'Live Uzbek/Russian captions, ready phrases, situation cards.', 'Живые узбекские/русские субтитры, готовые фразы, карточки ситуаций.')}</p></div></li>
    <li>${icon('data', 'g')}<div><h3>${t('Birinchi ochiq dataset', 'The first open dataset', 'Первый открытый датасет')}</h3><p>${t("O'zbek imo-ishora tili: kar imo-ishorachilar, qatlamli rozilik, haq to'lanadi.", 'Uzbek Sign Language: Deaf signers, layered consent, paid work.', 'Узбекский жестовый язык: глухие исполнители, многоуровневое согласие, оплачиваемая работа.')}</p></div></li>
  </ol>
</div>`,
});

// ---------- 11. Principles ----------
const principles = () => {
  const p = [
    ['users', t('Kar jamoasi boshqaradi', 'Deaf-led', 'Под руководством глухих'), t("Kengashda kar ko'pchilik; har AI funksiyasiga veto.", 'Deaf majority on the board; veto over every AI feature.', 'Большинство глухих в совете; вето на каждую ИИ-функцию.')],
    ['heart', t('Bepul', 'Free', 'Бесплатно'), t("Kar foydalanuvchidan hech qachon pul olinmaydi. Limit yo'q.", 'Deaf users never pay. No session limits.', 'Глухие пользователи никогда не платят. Без лимитов.')],
    ['code', t('Ochiq', 'Open', 'Открыто'), t('Kod Apache-2.0, ma\'lumot CC BY-SA / CC BY.', 'Code Apache-2.0, data CC BY-SA / CC BY.', 'Код Apache-2.0, данные CC BY-SA / CC BY.')],
    ['shield', t('Maxfiylik', 'Privacy', 'Приватность'), t("Qo'ng'iroq yozilmaydi; yuz videosi O'zbekistonda.", 'Calls are not recorded; face video stays in Uzbekistan.', 'Звонки не записываются; видео с лицом хранится в Узбекистане.')],
    ['clock', t('Halol soatlar', 'Honest hours', 'Честные часы'), t("Ish soati va kutish ochiq. «24/7» faqat odam bo'lsa.", 'Hours and wait shown openly. "24/7" only when staffed.', 'Часы и ожидание открыто. «24/7» — только если есть люди.')],
    ['video', t('Avval video', 'Video first', 'Сначала видео'), t('Video, keyin oddiy matn, ikonka bilan.', 'Video, then plain text, with icons.', 'Видео, затем простой текст и иконки.')],
    ['check', t('Avval ishonchlilik', 'Reliability first', 'Сначала надёжность'), t("Qo'ng'iroq signali va video har relizda o'lchanadi.", 'Call alerts and video stability measured every release.', 'Сигнал вызова и видео измеряются в каждом релизе.')],
    ['globe', t('Integratsiya', 'Integrate', 'Интеграция'), t("Yangi ijtimoiy tarmoq emas: Telegram, WhatsApp orqali kirish.", 'No new social network: entry via Telegram and WhatsApp.', 'Не новая соцсеть: вход через Telegram и WhatsApp.')],
    ['alert', t("Xavfli joyda AI yo'q", 'No AI where it is risky', 'Без ИИ в рискованных ситуациях'), t('Tibbiyot, sud, politsiya, favqulodda — faqat odam.', 'Medicine, court, police, emergencies — humans only.', 'Медицина, суд, полиция, экстренные — только люди.')],
  ];
  return slide({
    id: 's-princ', steps: 1,
    title: t('Tamoyillar', 'Principles', 'Принципы'),
    notes: [
      "To'qqizta tamoyil. Eng muhimi birinchisi: «Biz haqimizda — bizsiz hech narsa». Kar jamoasi kengashda ko'pchilik va har AI funksiyasiga veto huquqiga ega.",
      "Qolganlari amaliy: bepul, ochiq, maxfiy, halol soatlar. Masalan, «24/7» deb faqat haqiqatan odam navbatchi bo'lsa yozamiz.",
    ],
    body: `${kick('11', t('Tamoyillar', 'Principles', 'Принципы'))}
<h2 class="title wide">${t("«Biz haqimizda — bizsiz hech narsa»: to'qqiz qoida", '"Nothing about us without us": nine rules', '«Ничего о нас без нас»: девять правил')}</h2>
<div class="g c3 princ">${p.map(([ic, h, d], i) => `<div class="pr f" data-s="${i < 3 ? 0 : 1}">${icon(ic, ['', 'w', 'g'][i % 3])}<div><h3>${h}</h3><p>${d}</p></div></div>`).join('')}</div>
<div class="srcs">${D('06a §3 · T1–T9')}</div>`,
  });
};

// ---------- 12. Modules ----------
const modules = () => {
  const m = [
    ['headset', 'M1', t('Tarjimon (VRI)', 'Interpreter (VRI)', 'Переводчик (VRI)'), t("Bir tugma — jonli tarjimon bilan video. Eshituvchi QR orqali brauzerda qo'shiladi.", 'One tap to a live interpreter on video. The hearing person joins from a browser via QR.', 'Одна кнопка — видеозвонок с переводчиком. Слышащий подключается по QR из браузера.'), 'Contact Scotland, ZP Sivo, Teams'],
    ['cc', 'M2', t('Yuzma-yuz subtitr', 'Face-to-face captions', 'Субтитры лицом к лицу'), t("Telefon stolda, yarmi 180° burilgan: nutq → jonli uz/ru subtitr, yozganingiz → ovoz.", 'Phone on the table, half rotated 180°: speech → live uz/ru captions, your typing → voice.', 'Телефон на столе, половина повёрнута на 180°: речь → живые субтитры uz/ru, текст → голос.'), 'Live Transcribe, Ava'],
    ['cards', 'M3', t('Vaziyat kartalari', 'Situation cards', 'Карточки ситуаций'), t("Shifoxona, bank, taksi, politsiya: ikonka + oddiy matn + kar imo-ishorachi videosi. Oflayn.", 'Hospital, bank, taxi, police: icon + plain text + video by a Deaf signer. Offline.', 'Больница, банк, такси, полиция: иконка + простой текст + видео глухого исполнителя. Офлайн.'), 'Yandex Razgovor, nora'],
    ['doc', 'M4', t('Idora yordamchisi', 'Office helper', 'Помощник для учреждений'), t("DXM, mahalla, soliq: qanday hujjat kerak — video va oddiy matn; ariza shablonlari.", 'Public services, mahalla, tax: which documents — signed video and plain text; petition templates.', 'ЦГУ, махалля, налоги: какие документы — видео и простой текст; шаблоны заявлений.'), t("Moi RZhYa, HuquqPlus", 'Moi RZhYa, HuquqPlus', 'Мой РЖЯ, HuquqPlus')],
    ['msg', 'M5', t('Video xabar', 'Video message', 'Видеосообщение'), t("Past tezlikda imo-ishorali video. Yuborilgan video oynadagidek teskari emas.", 'Signed video at low bitrate. The sent video is not mirrored.', 'Видео на жестовом языке при низкой скорости. Отправленное видео не зеркальное.'), 'Glide, Marco Polo'],
    ['grid', 'M6', 'AAC', t("Gapira olmaydiganlar uchun: Cboard fork, o'zbek lotin/kirill doskalari, o'zbek TTS.", 'For non-speaking people: a Cboard fork, Uzbek Latin/Cyrillic boards, Uzbek TTS.', 'Для неговорящих: форк Cboard, доски на узбекской латинице/кириллице, узбекский TTS.'), 'Cboard (UNICEF)'],
    ['book', 'M7', t("Ota-onalar o'rganadi", 'Parents learn', 'Родители учатся'), t("Kuniga 5 daqiqa, kar o'qituvchi bilan. To'lov devori yo'q, oflayn.", 'Five minutes a day with a Deaf teacher. No paywall, offline.', '5 минут в день с глухим преподавателем. Без пейволла, офлайн.'), 'ASL Bloom'],
    ['tg', 'M11', 'Telegram bot', t("Eslatma, band qilish, kartalar. Telegram ichida jonli video yo'q.", 'Reminders, booking, cards. No live video inside Telegram.', 'Напоминания, запись, карточки. Без живого видео внутри Telegram.'), t('Ozarbayjon relay', 'Azerbaijan relay', 'Релей Азербайджана')],
    ['users', 'M17', t('Tarjimon kabineti', 'Interpreter console', 'Кабинет переводчика'), t("Holat, navbat, band qilish, daqiqalar, adolatli haq, charchoq limiti.", 'Status, queue, booking, minutes, fair pay, fatigue limits.', 'Статус, очередь, запись, минуты, честная оплата, лимит усталости.'), t('Minsk BelOG markazi', 'Minsk BelOG centre', 'Минский центр БелОГ')],
  ];
  return slide({
    id: 's-mod', steps: 2, short: 1,
    title: t('MVP modullari', 'MVP modules', 'Модули MVP'),
    notes: [
      "MVPda nima quriladi. Uchta asosiy modul: tarjimon bilan video qo'ng'iroq, yuzma-yuz subtitr va vaziyat kartalari.",
      "Keyin idora yordamchisi, video xabar, AAC — gapira olmaydiganlar uchun, ota-onalar darslari, Telegram bot va tarjimon kabineti.",
      "Har modul ostida ilhom manbasi bor: biz ishlaydigan dunyo mahsulotlaridan o'rganamiz, g'ildirakni qayta ixtiro qilmaymiz.",
    ],
    body: `${kick('12', t('Nima quramiz', 'What we build', 'Что мы строим'))}
<h2 class="title wide">${t("MVP: to'qqiz modul, har biri dunyoda ishlagan g'oyadan", 'MVP: nine modules, each from an idea proven elsewhere', 'MVP: девять модулей, каждый — из проверенной в мире идеи')}</h2>
<div class="g c3 mods">${m.map(([ic, id, h, d, insp], i) => `<div class="card mod f" data-s="${i < 3 ? 0 : i < 6 ? 1 : 2}">${icon(ic, i < 3 ? '' : i < 6 ? 'w' : 'g')}<div class="mod-b"><div class="mod-h"><span class="mod-id">${id}</span><h3>${h}</h3></div><p>${d}</p><div class="insp">${t('Ilhom', 'Inspired by', 'Вдохновлено')}: ${insp}</div></div></div>`).join('')}</div>
<div class="srcs">${D('06a §6–8')}</div>`,
  });
};

export const slidesA = () => [hook(), oneLine(), count(), ratio(), life(), exists(), world(), ai(), avatar(), mission(), principles(), modules()];
