// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// README screenshots from the concept demo: builds it, serves it under the production CSP, visits every
// module (with flows started and dialogs open) and writes 1440x900 JPEGs plus one phone shot to
// docs/screenshots/. Run again whenever the demo UI changes:  npm run site:screenshots
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { build } from './build-demo.mjs';
import { start, BASE } from './serve-demo.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const DIR = join(ROOT, 'docs', 'screenshots');
mkdirSync(DIR, { recursive: true });
build();
const server = await start(4175);
const url = `http://127.0.0.1:4175${BASE}`;
const browser = await chromium.launch({ executablePath: process.env.PW_CHROMIUM_PATH || undefined });

async function shot(name, hash, act, opts = {}) {
  const ctx = await browser.newContext({ viewport: opts.phone ? { width: 390, height: 844 } : { width: 1440, height: 900 }, deviceScaleFactor: opts.phone ? 2 : 1,
    colorScheme: opts.dark ? 'dark' : 'light', reducedMotion: 'no-preference' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(url + '#' + hash);
  await page.waitForSelector('html[data-ready="1"]');
  await page.waitForTimeout(200);
  if (act) await act(page);
  await page.waitForTimeout(500);
  await page.screenshot({ path: join(DIR, name + '.jpg'), type: 'jpeg', quality: 78 });
  if (errors.length) throw new Error(name + ': ' + errors.join('; '));
  console.log('shot', name);
  await ctx.close();
}

try {
  await shot('home', '/');
  await shot('interpreter-queue', '/vri', async (p) => { await p.click('#queue-join'); await p.click('#consent-ok'); await p.waitForTimeout(1700); });
  await shot('video-call', '/vri', async (p) => { await p.click('#queue-join'); await p.click('#consent-ok'); await p.click('#queue-skip'); await p.waitForSelector('#call-end'); await p.waitForTimeout(5600); });
  await shot('face-to-face', '/face', async (p) => { for (let i = 0; i < 6; i++) { await p.click('#face-mic'); await p.waitForTimeout(1300); } });
  await shot('situation-card', '/cards/hospital', async (p) => { await p.locator('.vcard').nth(1).click(); await p.waitForSelector('#modal'); });
  await shot('cards', '/cards/bank');
  await shot('office-helper', '/office/dxm/1');
  await shot('video-messages', '/messages/t1', async (p) => { await p.click('#rec-start'); await p.waitForTimeout(900); });
  await shot('aac', '/aac/Shifoxona', async (p) => { for (const n of [0, 4, 8]) await p.locator('.sym').nth(n).click(); });
  await shot('parents-lesson', '/learn/l3');
  await shot('lessons', '/learn');
  await shot('dictionary', '/dictionary/d13', async (p) => { await p.fill('#dict-q', 'шифо'); });
  await shot('organisations', '/orgs');
  await shot('sos-training', '/sos', async (p) => { await p.locator('.sos-btn').nth(2).click(); await p.click('#sos-send'); });
  await shot('interpreter-cabinet', '/interpreter', async (p) => { await p.click('#interp-login button[type=submit]'); });
  await shot('funder-stats', '/stats');
  await shot('settings-cyrillic', '/settings', async (p) => { await p.locator('.chips .chip').nth(1).click(); });
  await shot('home-dark', '/', null, { dark: true });
  await shot('phone', '/cards/hospital', null, { phone: true });
} finally {
  await browser.close();
  server.close();
}
