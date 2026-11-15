// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0
//
// Posts the scheduled item from content/telegram/posts.json to the Telegram channel.
// Stateless: two slots a day (morning, evening) counted from START; post N goes out in slot N,
// so no state is committed back.
//   node tools/telegram-post.mjs            post today's item (nothing if today is not a slot)
//   node tools/telegram-post.mjs --id 03-x  post a specific item
//   node tools/telegram-post.mjs --plan     print the schedule, post nothing
// Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT (default @tiloapp).

import { readFileSync } from 'node:fs';

const START = '2026-11-16'; // first day with posts
const SLOTS = ['09:00', '19:00']; // Tashkent time, must match the cron in .github/workflows/telegram.yml
const TZ_OFFSET_H = 5; // Asia/Tashkent

const posts = JSON.parse(readFileSync(new URL('../content/telegram/posts.json', import.meta.url), 'utf8'));
const args = process.argv.slice(2);

// Current slot key: "YYYY-MM-DD 09:00" before Tashkent noon, "YYYY-MM-DD 19:00" after.
// Actions cron can start late, so the slot is picked by half-day, not by the exact minute.
function currentSlot(d = new Date()) {
  const t = new Date(d.getTime() + TZ_OFFSET_H * 3600e3);
  return t.toISOString().slice(0, 10) + ' ' + SLOTS[t.getUTCHours() < 12 ? 0 : 1];
}

function slots(count) {
  const out = [];
  const d = new Date(START + 'T00:00:00Z');
  while (out.length < count) {
    for (const s of SLOTS) if (out.length < count) out.push(d.toISOString().slice(0, 10) + ' ' + s);
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return out;
}

const plan = slots(posts.length);

if (args.includes('--plan')) {
  plan.forEach((day, i) => console.log(day, posts[i].id));
  process.exit(0);
}

let post;
const idArg = args.indexOf('--id');
if (idArg >= 0) {
  post = posts.find((p) => p.id === args[idArg + 1]);
  if (!post) throw new Error('No post with id ' + args[idArg + 1]);
} else {
  const now = currentSlot();
  const i = plan.indexOf(now);
  if (i < 0) {
    console.log('No post scheduled for', now);
    process.exit(0);
  }
  post = posts[i];
}

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) throw new Error('TELEGRAM_BOT_TOKEN is not set');
const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    chat_id: process.env.TELEGRAM_CHAT || '@tiloapp',
    text: post.html,
    parse_mode: 'HTML',
    link_preview_options: { is_disabled: true },
  }),
});
const body = await res.json();
if (!body.ok) throw new Error('Telegram: ' + body.description);
console.log('Posted', post.id, 'message', body.result.message_id);
