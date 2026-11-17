// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// Offline shell for /app/ (06a M3: cards open without internet). Network first, cache as fallback,
// so a new release is picked up on the next online visit. Nothing user-made is cached here.
const CACHE = 'tilo-app-v1';
const SHELL = [
  '/app/', '/app/app.css', '/app/app.js', '/app/translit.js', '/app/data/cards.json', '/app/manifest.webmanifest',
  '/app/icons/icon-192.png', '/favicon.svg',
  '/fonts/lexend-latin-wght-normal.woff2', '/fonts/lexend-latin-ext-wght-normal.woff2',
  '/fonts/inter-cyrillic-wght-normal.woff2', '/fonts/inter-cyrillic-ext-wght-normal.woff2',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !SHELL.includes(url.pathname)) return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
