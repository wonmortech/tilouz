// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// Assembles the concept demo (demo/) into a static folder that works under any sub-path, by default
// dist/demo/tilo/ (served at /demo/tilo/). site/ is not touched: the demo copies the logo, icons and the Onest
// font from the brand kit next to its own files. Icons are recoloured so they read on light and dark.
//   node tools/build-demo.mjs                 -> dist/demo/tilo/
//   DEMO_OUT=/some/dir node tools/build-demo.mjs
import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const OUT = process.env.DEMO_OUT || join(ROOT, 'dist', 'demo', 'tilo');
const BRAND = join(ROOT, 'site/brand/assets');
const ICON_COLOUR = '#0BA085';
// Same rules as tools/check-site.mjs: no addresses, contacts or secrets in anything published.
const FORBIDDEN = [/(?<![\d.])\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?![\d.])/, /\+998[\s-]?\d{2}/, /\b[\w.+-]+@(gmail|mail|yandex|inbox)\.(com|ru)\b/i,
  /\b(ghp|gho|github_pat)_[A-Za-z0-9_]{20,}/, /-----BEGIN [A-Z ]*PRIVATE KEY-----/];

export function build(out = OUT) {
  rmSync(out, { recursive: true, force: true });
  for (const d of ['icons', 'fonts']) mkdirSync(join(out, d), { recursive: true });
  for (const f of readdirSync(join(ROOT, 'demo'))) if (f !== 'icons') cpSync(join(ROOT, 'demo', f), join(out, f));
  const icon = (src, name) => writeFileSync(join(out, 'icons', name), readFileSync(src, 'utf8').replace(/currentColor/g, ICON_COLOUR));
  for (const f of readdirSync(join(ROOT, 'demo/icons'))) icon(join(ROOT, 'demo/icons', f), f);
  for (const n of ['call', 'captions', 'card', 'interpreter', 'sign', 'sos', 'wave']) icon(join(BRAND, `iconography/icons/tilo-icon-${n}.svg`), n + '.svg');
  cpSync(join(BRAND, 'logo/lockup-horizontal/tilo-lockup-horizontal-color-light.svg'), join(out, 'logo.svg'));
  cpSync(join(BRAND, 'logo/lockup-horizontal/tilo-lockup-horizontal-color-dark.svg'), join(out, 'logo-dark.svg'));
  cpSync(join(ROOT, 'site/favicon.svg'), join(out, 'favicon.svg'));
  for (const f of readdirSync(join(BRAND, 'fonts')).filter((n) => n.startsWith('onest-') || n === 'Onest-OFL.txt')) cpSync(join(BRAND, 'fonts', f), join(out, 'fonts', f));

  let bytes = 0;
  const errors = [];
  (function walk(d) {
    for (const n of readdirSync(d)) {
      const p = join(d, n);
      const st = statSync(p);
      if (st.isDirectory()) { walk(p); continue; }
      bytes += st.size;
      if (['.html', '.js', '.css', '.svg'].includes(extname(p))) {
        const src = readFileSync(p, 'utf8').replace(/\s(d|points|viewBox|transform)="[^"]*"/g, '');
        for (const re of FORBIDDEN) { const m = src.match(re); if (m) errors.push(`${p}: forbidden text "${m[0]}"`); }
      }
    }
  })(out);
  if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
  return { out, bytes };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === normalize(process.argv[1])) {
  const r = build();
  console.log(`demo built: ${r.out} (${(r.bytes / 1024).toFixed(0)} KB)`);
}
