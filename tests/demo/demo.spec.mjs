// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// Every module of the concept demo renders real content, shows the demo note and logs no errors;
// the main flows (call, captions, cards, AAC, dictionary, messages, SOS drill, interpreter cabinet) work in memory.
import { test, expect } from '@playwright/test';

const ROUTES = ['/', '/vri', '/face', '/cards', '/cards/hospital', '/cards/bank', '/office', '/office/dxm/1', '/messages', '/messages/t1',
  '/aac', '/aac/Shifoxona', '/learn', '/learn/l3', '/dictionary', '/dictionary/d13', '/orgs', '/sos', '/interpreter', '/stats', '/settings'];

function watch(page) {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  return errors;
}
async function open(page, route) {
  await page.goto('./#' + route);
  await expect(page.locator('html[data-ready="1"]')).toHaveCount(1);
}

for (const route of ROUTES) {
  test(`renders ${route}`, async ({ page }) => {
    const errors = watch(page);
    await open(page, route);
    await expect(page.locator('main :is(h1, h2)').first()).not.toBeEmpty();
    await expect(page.locator('main')).not.toContainText('Sahifa topilmadi');
    await expect(page.locator('main')).not.toContainText(/\bnull\b|undefined|NaN/);
    await expect(page.locator('.demo-pill')).toContainText('qayta yuklanganda tiklanadi');
    await expect(page.locator('.concept')).toContainText('Konsept demo');
    expect(errors).toEqual([]);
  });
}

test('unknown route explains itself', async ({ page }) => {
  await open(page, '/no-such-page');
  await expect(page.locator('main')).toContainText('Sahifa topilmadi');
});

test('interpreter call: consent, queue, call, end', async ({ page }) => {
  const errors = watch(page);
  await open(page, '/vri');
  await page.click('#queue-join');
  await page.click('#consent-ok');
  await expect(page.locator('.queue-box')).toBeVisible();
  await page.click('#queue-skip');
  await expect(page.locator('#call-end')).toBeVisible({ timeout: 10_000 });
  await page.click('#call-end');
  expect(errors).toEqual([]);
});

test('face to face captions grow', async ({ page }) => {
  await open(page, '/face');
  for (let i = 0; i < 3; i++) { await page.click('#face-mic'); await page.waitForTimeout(1300); }
  expect(await page.locator('.hear').count()).toBeGreaterThan(0);
});

test('situation card opens a modal', async ({ page }) => {
  await open(page, '/cards/hospital');
  await page.locator('.vcard').first().click();
  await expect(page.locator('#modal')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#modal')).toHaveCount(0);
});

test('AAC builds a sentence', async ({ page }) => {
  await open(page, '/aac/Shifoxona');
  for (const n of [0, 4]) await page.locator('.sym').nth(n).click();
  await expect(page.locator('.strip .chip.on')).toHaveCount(2);
});

test('dictionary finds Latin words from a Cyrillic query', async ({ page }) => {
  await open(page, '/dictionary');
  await page.fill('#dict-q', 'шифо');
  await expect(page.locator('.dword')).not.toHaveCount(0);
  await page.fill('#dict-q', 'zzzz');
  await expect(page.locator('main')).toContainText('Belgi topilmadi');
});

test('video message recording starts', async ({ page }) => {
  await open(page, '/messages/t1');
  await page.click('#rec-start');
  await expect(page.locator('#rec-start')).toHaveCount(0);
});

test('SOS drill sends a training alert', async ({ page }) => {
  const errors = watch(page);
  await open(page, '/sos');
  await page.locator('.sos-btn').nth(2).click();
  await page.click('#sos-send');
  await expect(page.locator('main')).toContainText(/mashq/i);
  expect(errors).toEqual([]);
});

test('interpreter cabinet signs in with demo credentials', async ({ page }) => {
  await open(page, '/interpreter');
  await page.click('#interp-login button[type=submit]');
  await expect(page.locator('main')).toContainText('Navbat');
});

test('settings switch the script to Cyrillic', async ({ page }) => {
  await open(page, '/settings');
  await page.locator('.chips .chip').nth(1).click();
  await open(page, '/cards/hospital');
  await expect(page.locator('main')).toContainText(/[А-Яа-яЎўҚқҒғҲҳ]/);
});
