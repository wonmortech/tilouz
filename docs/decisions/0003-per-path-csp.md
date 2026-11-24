# 0003. Kamera va mikrofon faqat `/app/` ostida (yo'lga bog'liq CSP)

- **Holat:** Qabul qilingan
- **Sana:** 2026-11-17
- **PR:** [#19](https://github.com/wonmortech/tilouz/pull/19)

## Kontekst

Sayt va sinov ilovasi bitta originda (`tilo.wonmor.io`) joylashgan. Sayt prezentatsiya, unga kamera ham, `blob:` media ham kerak emas. Ilovaga esa ikkalasi kerak.

## Qaror

[`deploy/Caddyfile`](../../deploy/Caddyfile) ikki xil header beradi:

| Yo'l | CSP farqi | Permissions-Policy |
|---|---|---|
| `/app`, `/app/*` | `img-src`/`media-src` da `blob:`, `worker-src 'self'`, `manifest-src 'self'` | `camera=(self), microphone=(self)` |
| qolgan hammasi | qat'iy: `default-src 'self'`, `blob:` yo'q | `camera=(), microphone=()` |

Ikkala holatda ham inline skript yo'q va uchinchi tomon originlari yo'q. `tools/check-site.mjs` buni har PR'da tekshiradi.

Testlar shu headerlar ostida yuradi: `tools/serve-demo.mjs` sayt siyosatini, `tools/serve-site.mjs` esa ikkala blokni to'g'ridan-to'g'ri Caddyfile'dan o'qiydi. Shuning uchun test va prod siyosati ajralib ketolmaydi.

## Oqibatlar

- Saytdagi XSS yoki vendored kutubxona kamera va mikrofonga yeta olmaydi.
- Caddyfile'dagi blok nomlari (`@app`, `@site`) test infratuzilmasining bir qismi: nomini o'zgartirsangiz `tools/serve-site.mjs` aniq xato beradi.
