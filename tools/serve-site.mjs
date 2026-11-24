// SPDX-FileCopyrightText: 2026 Wonmor and Tilo contributors
// SPDX-License-Identifier: Apache-2.0

// Serves site/ as it is, with the same per-path headers as deploy/Caddyfile: the looser /app/ policy
// (camera, microphone, blob: media) only under /app, the strict site policy everywhere else.
// Used by the /app/ smoke tests so they run under the production CSP. No dependencies.
//   node tools/serve-site.mjs   -> http://127.0.0.1:4178/app/
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { join, normalize, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../site/', import.meta.url));
const CADDY = readFileSync(fileURLToPath(new URL('../deploy/Caddyfile', import.meta.url)), 'utf8');

function block(name) {
  const body = (CADDY.match(new RegExp(`header @${name} \\{([^}]*)\\}`)) || [])[1];
  if (!body) throw new Error(`deploy/Caddyfile has no "header @${name}" block`);
  const pick = (h) => (body.match(new RegExp(`${h}\\s+"([^"]+)"`)) || [])[1];
  return { csp: pick('Content-Security-Policy'), perms: pick('Permissions-Policy') };
}
export const HEADERS = { app: block('app'), site: block('site') };

const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json', '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml' };

export function start(port = Number(process.env.PORT) || 4178, host = '127.0.0.1') {
  const root = ROOT.endsWith(sep) ? ROOT : ROOT + sep;
  const server = createServer(async (req, res) => {
    const path = new URL(req.url, 'http://x').pathname;
    const h = path === '/app' || path.startsWith('/app/') ? HEADERS.app : HEADERS.site;
    res.setHeader('Content-Security-Policy', h.csp);
    if (h.perms) res.setHeader('Permissions-Policy', h.perms);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (path === '/app') { res.writeHead(301, { Location: '/app/' }); res.end(); return; }
    let rel = decodeURIComponent(path.slice(1));
    if (rel === '' || rel.endsWith('/')) rel += 'index.html';
    const file = normalize(join(root, rel));
    if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
    try {
      const s = await stat(file);
      if (!s.isFile()) throw new Error('not a file');
      res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      res.end(await readFile(file));
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(await readFile(join(root, '404.html')).catch(() => 'not found'));
    }
  });
  return new Promise((ok) => server.listen(port, host, () => ok(server)));
}

if (process.argv[1] && fileURLToPath(import.meta.url) === normalize(process.argv[1])) {
  const s = await start();
  console.log(`site on http://127.0.0.1:${s.address().port}/  (test app: /app/)`);
}
