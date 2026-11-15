// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
//
// Generates the public presentation site into site/: one page per language (uz, en, ru) from the same
// slide sources, plus 404.html, robots.txt, sitemap.xml and favicon.svg.
//   node tools/deck/build.mjs
// site/ itself needs no build to be served; this script only regenerates the HTML after content edits.
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { ctx, t, esc, I, mark, lockup, ARC_L, ARC_R, DOT } from './parts.mjs';
import { slidesA } from './slides-a.mjs';
import { slidesB } from './slides-b.mjs';

const SITE = fileURLToPath(new URL('../../site/', import.meta.url));
const ORIGIN = 'https://tilo.wonmor.io';
const REPO = 'https://github.com/wonmortech/tilouz';
const LANGS = [
  { code: 'uz', path: '/', hreflang: 'uz', og: 'uz_UZ', name: "O'zbekcha", short: 'UZ' },
  { code: 'ru', path: '/ru/', hreflang: 'ru', og: 'ru_RU', name: 'Русский', short: 'RU' },
  { code: 'en', path: '/en/', hreflang: 'en', og: 'en_US', name: 'English', short: 'EN' },
];

const ui = () => ({
  track_all: t('Hamma uchun', 'Everyone', 'Для всех'),
  track_dev: t('Dasturchi', 'Developer', 'Разработчик'),
  track_short: t('5 daqiqa', '5 minutes', '5 минут'),
  trackBtn: t("Yo'l", 'Track', 'Трек'),
  toLight: t("Yorug' mavzu", 'Light theme', 'Светлая тема'),
  toDark: t("Qorong'i mavzu", 'Dark theme', 'Тёмная тема'),
  toPage: t('Sahifa', 'Page', 'Страница'),
  toDeck: t('Slaydlar', 'Slides', 'Слайды'),
  noNotes: t("Bu qadam uchun matn yo'q", 'No notes for this step', 'Нет заметок для этого шага'),
});

const head = (L) => {
  const title = t('tilo — kar va eshituvchi odamlar orasidagi devorni olib tashlaymiz', 'tilo — taking down the wall between Deaf and hearing people', 'tilo — убираем стену между глухими и слышащими');
  const desc = t("Tilo — kar, eshitishi zaif va gapira olmaydigan odamlar uchun notijorat, ochiq kodli muloqot platformasi. Ko'ngilli dasturchilar, dizaynerlar va kar jamoasi a'zolarini chaqiramiz.", 'Tilo is a non-profit, open-source communication platform for Deaf, hard-of-hearing and non-speaking people in Uzbekistan. We are recruiting volunteer developers, designers and Deaf community members.', 'Tilo — некоммерческая платформа общения с открытым кодом для глухих, слабослышащих и неговорящих людей в Узбекистане. Приглашаем волонтёров: разработчиков, дизайнеров и членов сообщества глухих.');
  const alts = LANGS.map((l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${ORIGIN}${l.path}">`).join('\n');
  return `<!doctype html>
<html lang="${L.code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#F7F5F0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#101214" media="(prefers-color-scheme: dark)">
<link rel="canonical" href="${ORIGIN}${L.path}">
${alts}
<link rel="alternate" hreflang="x-default" href="${ORIGIN}/">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="tilo">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${ORIGIN}${L.path}">
<meta property="og:image" content="${ORIGIN}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${L.og}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="/fonts/lexend-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/site.css">
<link rel="stylesheet" href="/css/slides.css">
<script type="application/json" id="i18n">${JSON.stringify(ui())}</script>
</head>`;
};

const langLinks = (L) => LANGS.map((l) => `<a href="${l.path}" hreflang="${l.hreflang}" lang="${l.code}" data-lang="${l.code}"${l.code === L.code ? ' aria-current="true"' : ''}>${l.short}</a>`).join('');
const brandHref = (L) => (L.code === 'uz' ? '/brand/' : `/${L.code}/brand/`);

const chrome = (L) => {
  const btn = (act, icon, label, extra = '') => `<button type="button" data-act="${act}" aria-label="${esc(label)}" title="${esc(label)}"${extra}>${I(icon)}</button>`;
  return {
    top: `<a class="skip" href="#stage">${t("Mazmunga o'tish", 'Skip to content', 'Перейти к содержанию')}</a>
<div class="progress" aria-hidden="true"><i id="prog"></i></div>
<a class="corner" href="${L.path}" aria-label="tilo"><svg id="corner-mark" viewBox="0 120 500 270" aria-hidden="true"><g class="mk"><path class="arc-l" d="${ARC_L}"/><path class="arc-r" d="${ARC_R}"/><path class="dot" d="${DOT}"/></g></svg></a>
<div class="top-right"><nav class="langs" aria-label="${t('Til', 'Language', 'Язык')}">${langLinks(L)}</nav></div>
<header class="top">
  <a class="brand" href="${L.path}">${lockup('top-lockup')}</a>
  <div class="acts">
    <nav class="langs" aria-label="${t('Til', 'Language', 'Язык')}">${langLinks(L)}</nav>
    <button type="button" class="tb" data-act="theme" aria-label="${t('Mavzu', 'Theme', 'Тема')}">${I('eye')}</button>
    <button type="button" class="tb" data-act="view"><span class="lbl opt">${t('Slaydlar', 'Slides', 'Слайды')}</span>${I('play')}</button>
  </div>
</header>
<div class="trackbar" role="group" aria-label="${t("Yo'l", 'Track', 'Трек')}">
  <button type="button" data-track-opt="all">${t('Hamma uchun', 'Everyone', 'Для всех')}</button>
  <button type="button" data-track-opt="dev">${t('Dasturchi', 'Developer', 'Разработчик')}</button>
  <button type="button" data-track-opt="short">${t('5 daqiqa', '5 minutes', '5 минут')}</button>
</div>`,
    bottom: `<nav class="bar" id="bar" aria-label="${t('Boshqaruv', 'Controls', 'Управление')}">
  ${btn('prev', 'arrow', t('Orqaga (←)', 'Back (←)', 'Назад (←)'), ' class="flip-x"')}
  <span class="counter" id="counter" aria-live="polite">1 / 1</span>
  ${btn('next', 'arrow', t('Oldinga (→)', 'Next (→)', 'Вперёд (→)'))}
  <span class="sep"></span>
  <button type="button" data-act="track" title="B">${I('users')}<span class="lbl">${t('Hamma uchun', 'Everyone', 'Для всех')}</span></button>
  ${btn('overview', 'grid', t("Slaydlar ro'yxati (O)", 'Overview (O)', 'Обзор слайдов (O)'))}
  ${btn('notes', 'msg', t("Ma'ruzachi matni (N)", 'Speaker notes (N)', 'Заметки докладчика (N)'))}
  ${btn('theme', 'eye', t('Mavzu (T)', 'Theme (T)', 'Тема (T)'))}
  ${btn('full', 'tv', t("To'liq ekran (F)", 'Fullscreen (F)', 'Полный экран (F)'))}
  <button type="button" data-act="view" title="${t('Oddiy sahifa', 'Scrolling page', 'Обычная страница')}">${I('doc')}<span class="lbl">${t('Sahifa', 'Page', 'Страница')}</span></button>
  ${btn('help', 'alert', t('Klavishlar (?)', 'Keys (?)', 'Клавиши (?)'))}
  <span class="sep"></span>
  <nav class="langs" aria-label="${t('Til', 'Language', 'Язык')}">${langLinks(L)}</nav>
</nav>
<div class="deck-foot"><a href="${brandHref(L)}">${t('Brend', 'Brand', 'Бренд')}</a><a href="${REPO}" target="_blank" rel="noopener">GitHub</a></div>
<div class="notes-box" id="notes" hidden role="region" aria-label="${t("Ma'ruzachi matni", 'Speaker notes', 'Заметки докладчика')}"><div class="nh" id="notes-head"></div><div class="nb" id="notes-body"></div></div>
<div class="ov" id="overview" hidden role="dialog" aria-label="${t("Slaydlar ro'yxati", 'Slide overview', 'Обзор слайдов')}"><h2>${t('Slaydlar', 'Slides', 'Слайды')} <button type="button" class="x-btn" data-act="close">Esc</button></h2><div class="ov-grid" id="ov-grid"></div></div>
<div class="help" id="help" hidden role="dialog" aria-label="${t('Klavishlar', 'Keys', 'Клавиши')}"><div class="box"><h2>${t('Klavishlar', 'Keyboard', 'Клавиши')}</h2><dl>
  <dt>← → ␣</dt><dd>${t('qadam', 'step', 'шаг')}</dd><dt>O</dt><dd>${t("slaydlar ro'yxati", 'overview', 'обзор слайдов')}</dd><dt>B</dt><dd>${t("yo'l: Hamma uchun / Dasturchi / 5 daqiqa", 'track: Everyone / Developer / 5 minutes', 'трек: Для всех / Разработчик / 5 минут')}</dd>
  <dt>N</dt><dd>${t("ma'ruzachi matni (o'zbekcha)", 'speaker notes (in Uzbek)', 'заметки докладчика (на узбекском)')}</dd><dt>T</dt><dd>${t("yorug' / qorong'i", 'light / dark', 'светлая / тёмная')}</dd><dt>F</dt><dd>${t("to'liq ekran", 'fullscreen', 'полный экран')}</dd><dt>Esc</dt><dd>${t('yopish', 'close', 'закрыть')}</dd>
</dl><p class="tiny">URL: #${t('slayd', 'slide', 'слайд')}.${t('qadam', 'step', 'шаг')} · ?track=all|dev|short · ?theme=dark · ?view=page</p><button type="button" class="x-btn" data-act="close">${t('Yopish', 'Close', 'Закрыть')}</button></div></div>
<div class="toast" id="toast" role="status"></div>
<footer class="foot-site"><span>tilo · ${t('notijorat, ochiq kod', 'non-profit, open source', 'некоммерческий, открытый код')} · Apache-2.0</span><nav><a href="${REPO}" target="_blank" rel="noopener">GitHub</a><a href="https://t.me/tiloapp" target="_blank" rel="noopener">Telegram</a><a href="${brandHref(L)}">${t('Brend', 'Brand', 'Бренд')}</a></nav></footer>`,
  };
};

const page = (L) => {
  ctx.lang = L.code;
  const slides = [...slidesA(), ...slidesB()];
  const c = chrome(L);
  return `${head(L)}
<body>
${c.top}
<main class="stage" id="stage">
${slides.join('\n')}
</main>
${c.bottom}
<script src="/js/vendor/gsap.min.js" defer></script>
<script src="/js/deck.js" defer></script>
<script src="/js/anim.js" defer></script>
</body>
</html>
`;
};

const notFound = () => {
  const block = (code) => { ctx.lang = code; return `<div class="nf-l" lang="${code}"><h1>${t('Bu sahifa topilmadi', 'This page was not found', 'Страница не найдена')}</h1><p><a href="${LANGS.find((l) => l.code === code).path}">${t("Bosh sahifaga qaytish", 'Back to the home page', 'Вернуться на главную')}</a></p></div>`; };
  ctx.lang = 'uz';
  return `<!doctype html>
<html lang="uz">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>404 · tilo</title>
<meta name="robots" content="noindex">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/css/site.css">
<link rel="stylesheet" href="/css/slides.css">
</head>
<body class="nf">
<main class="nf-main">
  <svg class="nf-mark" viewBox="0 120 500 270" aria-hidden="true"><g class="mk"><path class="arc-l" d="${ARC_L}"/><path class="arc-r" d="${ARC_R}"/><path class="dot" d="${DOT}"/></g></svg>
  <p class="nf-code">404</p>
  ${block('uz')}${block('ru')}${block('en')}
</main>
</body>
</html>
`;
};

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><title>tilo</title><rect width="64" height="64" rx="12.8" fill="#0F1B1A"/><g transform="translate(3.68 3.00) scale(0.1133)"><path d="${ARC_L}" fill="#34C9A8"/><path d="${ARC_R}" fill="#4FD3F0"/><path d="${DOT}" fill="#F6B93B"/></g></svg>
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map((l) => `  <url>
    <loc>${ORIGIN}${l.path}</loc>
${LANGS.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${ORIGIN}${a.path}"/>`).join('\n')}
  </url>`).join('\n')}
</urlset>
`;

mkdirSync(SITE + 'en', { recursive: true });
mkdirSync(SITE + 'ru', { recursive: true });
for (const L of LANGS) writeFileSync(SITE + (L.code === 'uz' ? 'index.html' : `${L.code}/index.html`), page(L));
writeFileSync(SITE + '404.html', notFound());
writeFileSync(SITE + 'favicon.svg', favicon);
writeFileSync(SITE + 'robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
writeFileSync(SITE + 'sitemap.xml', sitemap);

// Guard: the Uzbek page must not leak Cyrillic (the Russian page obviously uses it).
ctx.lang = 'uz';
const uz = page(LANGS[0]);
const cyr = uz.match(/[Ѐ-ӿ][^<]{0,30}/g);
if (cyr) { console.error('Cyrillic in the Uzbek page:', cyr.slice(0, 8)); process.exit(1); }
const n = (uz.match(/<section class="slide/g) || []).length;
console.log(`built ${LANGS.length} pages, ${n} slides each`);
