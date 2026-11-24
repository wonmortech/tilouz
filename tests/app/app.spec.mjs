// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// The test app (site/app/) under the production CSP: every view renders without console errors, the card data
// is complete, cards open and switch language, typed replies reach the hearing side, the emergency address stays
// on the device, and a video message records with Chromium's fake camera. Nothing may leave the origin.
import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const CARDS = JSON.parse(readFileSync(new URL('../../site/app/data/cards.json', import.meta.url), 'utf8'));

function watch(page) {
  const errors = [];
  const foreign = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('request', (r) => {
    const u = new URL(r.url());
    if (!['127.0.0.1', 'localhost'].includes(u.hostname) && !['data:', 'blob:'].includes(u.protocol)) foreign.push(r.url());
  });
  return { errors, foreign };
}
const view = (page, v) => page.locator(`#v-${v}`);

test.describe('card data', () => {
  test('is a draft with unique ids and both languages filled', () => {
    expect(CARDS.status).toBe('draft');
    const ids = new Set();
    for (const set of CARDS.sets) {
      expect(set.title.uz, set.id).toBeTruthy();
      expect(set.title.ru, set.id).toBeTruthy();
      expect(set.cards.length, set.id).toBeGreaterThan(0);
      for (const c of set.cards) {
        expect(ids.has(c.id), `duplicate id ${c.id}`).toBe(false);
        ids.add(c.id);
        expect(c.id.startsWith(set.id + '.'), c.id).toBe(true);
        expect(c.uz?.trim(), c.id).toBeTruthy();
        expect(c.ru?.trim(), c.id).toBeTruthy();
      }
    }
  });
});

for (const v of ['home', 'talk', 'cards', 'video', 'sos']) {
  test(`view #${v} renders`, async ({ page }) => {
    const w = watch(page);
    await page.goto('./#' + v);
    await expect(view(page, v)).toBeVisible();
    await expect(view(page, v).locator('h1')).not.toBeEmpty();
    await expect(page.locator('.view:not([hidden])')).toHaveCount(1);
    expect(w.errors).toEqual([]);
    expect(w.foreign).toEqual([]);
  });
}

test('unknown hash falls back to home', async ({ page }) => {
  await page.goto('./#no-such-view');
  await expect(view(page, 'home')).toBeVisible();
});

test('cards: every set is listed, a card opens and the language switches', async ({ page }) => {
  const w = watch(page);
  await page.goto('./#cards');
  await expect(page.locator('#sets .set')).toHaveCount(CARDS.sets.length);
  const first = CARDS.sets[0];
  await page.locator('#sets .set').first().click();
  await expect(page.locator('#cardlist .card')).toHaveCount(first.cards.length);
  await page.locator('#cardlist .card').first().click();
  await expect(view(page, 'show')).toBeVisible();
  await expect(page.locator('#show-text')).toHaveText(first.cards[0].uz);
  await expect(page.locator('#show-alt')).toHaveText(first.cards[0].ru);

  await page.click('#settings-btn');
  await page.selectOption('#ui-lang', 'ru');
  await page.locator('#dlg-settings button.big').click();
  await expect(page.locator('#show-text')).toHaveText(first.cards[0].ru);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');

  await page.click('#show-back');
  await expect(view(page, 'cards')).toBeVisible();
  await expect(page.locator('#cardlist')).toBeVisible();
  expect(w.errors).toEqual([]);
});

test('Uzbek Cyrillic is transliterated from Latin', async ({ page }) => {
  await page.goto('./#cards');
  await page.click('#settings-btn');
  await page.selectOption('#ui-lang', 'uzc');
  await page.locator('#dlg-settings button.big').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'uz-Cyrl');
  await expect(page.locator('#sets .set b').first()).toHaveText(/[Ѐ-ӿ]/);
});

test('face-to-face: a typed reply is shown to the hearing side, quick phrases too', async ({ page }) => {
  const w = watch(page);
  await page.goto('./#talk');
  await page.fill('#say-input', 'Navbatim qachon?');
  await page.press('#say-input', 'Enter');
  await expect(page.locator('#said-other')).toHaveText('Navbatim qachon?');
  await expect(page.locator('#say-input')).toHaveValue('');
  await page.locator('#quick .chip').first().click();
  await expect(page.locator('#said-other')).toHaveText(CARDS.sets.find((s) => s.id === 'general').cards[0].uz);
  // The hearing half starts rotated towards the person across the table; the button toggles it.
  await expect(page.locator('#talk-other')).toHaveClass(/flipped/);
  await page.click('#flip-btn');
  await expect(page.locator('#flip-btn')).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('#talk-other')).not.toHaveClass(/flipped/);
  expect(w.errors).toEqual([]);
});

test('emergency card: the address stays on this device after a reload', async ({ page }) => {
  await page.goto('./#sos');
  await page.fill('#sos-addr', 'Chilonzor 9, 12-uy');
  await expect(page.locator('#sos-addr-view')).toHaveText('Chilonzor 9, 12-uy');
  await page.reload();
  await expect(page.locator('#sos-addr')).toHaveValue('Chilonzor 9, 12-uy');
  await expect(page.locator('#sos-addr-view')).toHaveText('Chilonzor 9, 12-uy');
});

test('interpreter button explains that live interpreting is not open yet', async ({ page }) => {
  await page.goto('./');
  await page.click('#interp-btn');
  await expect(page.locator('#dlg-interp')).toBeVisible();
  await expect(page.locator('#dlg-interp')).toContainText('hali ishga tushmagan');
});

test('video message: record with the fake camera, then save or retake', async ({ page }) => {
  const w = watch(page);
  await page.goto('./#video');
  await page.click('#cam-on');
  await expect(page.locator('#rec-btn')).toBeVisible();
  await page.click('#rec-btn');
  await expect(page.locator('#rec-badge')).toBeVisible();
  await page.waitForTimeout(1500);
  await page.click('#stop-btn');
  await expect(page.locator('#cam-result')).toBeVisible();
  await expect(page.locator('#save-link')).toHaveAttribute('href', /^blob:/);
  await expect(page.locator('#cam-size')).toContainText('MB');
  await page.click('#again-btn');
  await expect(page.locator('#rec-btn')).toBeVisible();
  await page.goto('./#home');
  expect(w.errors).toEqual([]);
  expect(w.foreign).toEqual([]);
});

test('settings persist: text size and theme', async ({ page }) => {
  await page.goto('./');
  await page.click('#settings-btn');
  await page.selectOption('#text-size', '3');
  await page.selectOption('#theme-sel', 'dark');
  await page.locator('#dlg-settings button.big').click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-size', '3');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('every button has an accessible name', async ({ page }) => {
  await page.goto('./#talk');
  const unnamed = await page.evaluate(() => [...document.querySelectorAll('button, a[href], select, input:not([type=hidden])')]
    .filter((el) => el.offsetParent !== null)
    .filter((el) => {
      const lbl = el.getAttribute('aria-label') || el.textContent.trim() || el.getAttribute('title')
        || (el.labels && [...el.labels].map((l) => l.textContent.trim()).join(''));
      return !lbl;
    })
    .map((el) => el.outerHTML.slice(0, 120)));
  expect(unnamed).toEqual([]);
});
