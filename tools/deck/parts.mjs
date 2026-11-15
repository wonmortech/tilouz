// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
// Shared building blocks for the deck generator: language picker, icons, the Tilo marks, source tags.

export const ctx = { lang: 'uz' };

// Uzbek strings are typed with ASCII apostrophes; print them with the proper Uzbek marks.
const uzMarks = (s) => s.replace(/([oOgG])'/g, '$1‘').replace(/'/g, '’');
export const t = (uz, en, ru) => (ctx.lang === 'uz' ? uzMarks(uz) : ctx.lang === 'en' ? en : ru);

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const strip = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// Source tag: every number carries one. A URL makes it a link; a doc tag points at the research notes.
export const S = (label, url) => url
  ? `<a class="src" href="${url}" target="_blank" rel="noopener">${label}</a>`
  : `<span class="src">${label}</span>`;
export const D = (label) => `<a class="src doc" href="https://github.com/wonmortech/tilouz/tree/main/docs" target="_blank" rel="noopener" title="${t('Tadqiqot hujjatlari', 'Research notes', 'Исследовательские заметки')}">${label}</a>`;
export const EST = () => `<span class="est">${t('baho', 'estimate', 'оценка')}</span>`;

const P = {
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/>',
  cc: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10.5 10.2a2.2 2.2 0 1 0 0 3.6M16.5 10.2a2.2 2.2 0 1 0 0 3.6"/>',
  cards: '<rect x="4" y="3" width="12" height="16" rx="2"/><path d="M8 21h10a2 2 0 0 0 2-2V7"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  msg: '<path d="M4 5h16v11H9l-5 4z"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
  send: '<path d="M21 4L3 11l6 2 2 6 3-4 5 4z"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  hand: '<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7-2.5 0-4-1-5.5-3L3 13a1.5 1.5 0 0 1 2.5-1.5L8 14"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5 5 0 0 1 6 5"/>',
  code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  data: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
  star: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.3L12 17.5 6.5 20.4l1-6.3L3 9.7l6.2-.9z"/>',
  git: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 7v10M18 10c0 4-6 3-12 7"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  heart: '<path d="M12 20s-7-4.5-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.5-9 9-9 9z"/>',
  school: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
  sos: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  tv: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M8 21h8M9 3l3 3 3-3"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  lang: '<path d="M4 5h8M8 3v2M10 5c0 4-3 7-6 8M6 9c1 2 3 3.5 5 4"/><path d="M13 21l4-10 4 10M14.5 17.5h5"/>',
  palette: '<circle cx="12" cy="12" r="9"/><circle cx="8" cy="10" r="1.2"/><circle cx="12" cy="7.5" r="1.2"/><circle cx="16" cy="10" r="1.2"/><path d="M12 21a3 3 0 0 1 0-6h2"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  scale: '<path d="M12 3v18M5 7h14M5 7l-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0zM8 21h8"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9a3 3 0 0 0-2.5-1c-1.7 0-3 .9-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2a3 3 0 0 1-2.7-1.3M12 6v2M12 16v2"/>',
  map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  play: '<path d="M7 4l13 8-13 8z"/>',
  tg: '<path d="M21 4L3 11l6 2 2 6 3-4 5 4z"/>',
};
export const I = (name, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name]}</svg>`;
export const icon = (name, tone = '') => `<span class="icon ${tone}">${I(name)}</span>`;

// Tilo 01 "Geometrik" mark: two half rings (Deaf person, hearing person) and the gold dot.
export const ARC_L = 'M24 264A108 108 0 0 1 240 264L240 265.5L180 265.5L180 264A48 48 0 0 0 84 264A30 30 0 0 1 24 264Z';
export const ARC_R = 'M396 264A108 108 0 0 1 180 264L240 264A48 48 0 0 0 336 264A30 30 0 0 1 396 264Z';
export const DOT = 'M412 172A32 32 0 0 1 476 172A32 32 0 0 1 412 172Z';
export const markG = (cls = '') => `<g class="mk ${cls}"><path class="arc-l" d="${ARC_L}"/><path class="arc-r" d="${ARC_R}"/><path class="dot" d="${DOT}"/></g>`;
export const mark = (cls = '', vb = '0 120 500 270') => `<svg class="mark ${cls}" viewBox="${vb}" aria-hidden="true">${markG()}</svg>`;

// Lockup in the 05 "Monogram" style (right half rises into the i stem, two-tone "o"), coloured with the 01 palette.
export const WORD = `<g class="wm" transform="translate(517.50 353.18) scale(1.0088)" fill="none" stroke-width="21.50" stroke-linecap="round" stroke-linejoin="round"><path class="wm-t" d="M10.75 -119.25L10.75 -34.75A24 24 0 0 0 34.75 -10.75L42.75 -10.75M-9.25 -89.25L44.75 -89.25"/><path class="wm-i" d="M92.25 -89.25L92.25 -10.75"/><circle class="wm-idot" cx="92.25" cy="-126.66" r="13.33" stroke="none"/><path class="wm-l" d="M143.75 -129.25L143.75 -10.75"/><path class="wm-ot" d="M189.25 -50A41.25 41.25 0 0 1 271.75 -50" stroke-linecap="butt"/><path class="wm-ob" d="M271.75 -50A41.25 41.25 0 0 1 189.25 -50" stroke-linecap="butt"/></g>`;
export const lockup = (cls = '', title = 'tilo') => `<svg class="lockup ${cls}" viewBox="72 100 742 262" role="img" aria-label="${title}"><g class="mk"><path class="arc-l" d="M83.5 302.74A97 97 0 0 1 277.5 302.74L277.5 304.24L223.5 304.24L223.5 302.74A43 43 0 0 0 137.5 302.74A27 27 0 0 1 83.5 302.74Z"/><path class="arc-r" d="M223.5 302.74A97 97 0 0 0 417.5 302.74L417.5 232.74A27 27 0 0 0 363.5 232.74L363.5 302.74A43 43 0 0 1 277.5 302.74Z"/><path class="dot" d="M360.5 142.26A30 30 0 0 1 420.5 142.26A30 30 0 0 1 360.5 142.26Z"/></g>${WORD}</svg>`;
// Wordmark alone (no symbol), used under the animated 01 symbol.
export const wordmark = (cls = '') => `<svg class="wordmark ${cls}" viewBox="505 210 300 150" role="img" aria-label="tilo">${WORD}</svg>`;

export const slide = ({ id, title, steps = 0, track, short, cls = '', notes = [], body }) => {
  const nt = notes.map((n, i) => `<p data-n="${i}">${uzMarks(n)}</p>`).join('');
  return `<section class="slide ${cls}" id="${id}" data-steps="${steps}" data-title="${esc(strip(title))}"${track ? ` data-track="${track}"` : ''}${short ? ' data-short="1"' : ''} aria-label="${esc(strip(title))}">
${body}
<aside class="notes" hidden>${nt}</aside>
</section>`;
};
export const kick = (n, txt, dev) => `<div class="kicker"><span class="kn">${n}</span><span>${txt}</span>${dev ? `<span class="dev-chip">${t('dasturchi', 'developer', 'разработчик')}</span>` : ''}</div>`;
