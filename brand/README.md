# Tilo brand

Tilo is a non-profit, open-source platform that removes the communication barrier between Deaf, hard-of-hearing and non-speaking people and hearing people: live interpreter video calls, live Uzbek and Russian captions, and a sign dictionary. Uzbekistan first, then the CIS.

This folder is the brand guide and the source of every logo, icon, colour and motion asset. The same guide, with live demos and downloads, is on the website at [`/brand`](../site/brand/index.html) (Uzbek), [`/en/brand`](../site/en/brand/index.html) and [`/ru/brand`](../site/ru/brand/index.html).

> **Qisqacha (o'zbekcha).** Tilo belgisi ikki qismdan iborat va ular bitta oila. **01 Geometrik** - asosiy belgi (simvol): ikki yarim halqa to'lqin va oltin nuqta. U ilova belgisi, avatar, favicon va harakat uchun ishlatiladi; ulanish paytida ikki yarim qo'shilib "o" halqaga aylanadi. **05 Monogram** - so'z belgisi "tilo": t harfining ustuni to'lqinning o'ng yarmiga tushib, i ustuni bo'lib ko'tariladi, nuqta esa i nuqtasi. 05 hech qachon yolg'iz ishlatilmaydi (yolg'iz turganda "ni" deb o'qiladi), u faqat so'z ichida yashaydi, shuning uchun "i" ikki marta takrorlanmaydi. Asosiy logotip = 01 simvol + 05 so'z belgisi (gorizontal). Ranglar: Tilo teal `#0B7A67`, Dengiz `#1497B8`, Tillo `#F2A81D`. Shriftlar: Onest (brend, sarlavha) va Inter (subtitr, matn), ikkalasi ham lotin va kirill (o'zbek va rus) harflarini to'liq qo'llaydi. Fayllar CC BY 4.0; Tilo nomi va belgisi esa ushbu qoidalarga muvofiq ishlatiladi.

## The logo system: 01 + 05, one family

| | **01 Geometrik: the symbol** | **05 Monogram: the wordmark** |
|---|---|---|
| What it is | Two half-rings form a wave; a gold dot sits above the right terminal. | Lowercase "tilo". The t-stem drops into the wave's right half (the cup) and rises as the i-stem; the dot is the i-dot. |
| Story | Two people, two halves of a conversation. In motion the halves join into an "o" ring: connected. | The wave becomes the "i" of the name: the conversation is written as text (live captions). |
| Used for | App icon, avatar, favicon, motion states (loading, connecting, listening), 3D, stickers. | The name everywhere: headers, documents, the main horizontal logo, partner co-branding. |
| Never | Never redrawn with other proportions. | Never shown without "t", "l" and "o". The old standalone 05 mark (wave + i) reads as "ni" / "ui" and is retired. |

Because the monogram *is* the word's "i", the "i" is never duplicated: the horizontal logo reads **[symbol] tilo**, not "~i tilo".

**Shared geometry** (see `logo/construction/tilo-construction.svg`): monoline, round outer terminals, flat joints; every curve is an exact circle arc. Wave centre radius R = 1.3 x stroke, so the counter is 1.6 x stroke (near phi). Dot diameter = 1.07 x stroke (a free circle looks smaller than a bar of equal width). Dot gap = 0.5 x stroke. The same three ratios are used in the symbol (stroke 60 on a 512 artboard) and in the wordmark (stroke 0.22 x-height).

**One gold dot per composition.** When the symbol and wordmark appear together, only the symbol's dot is gold; the i-dot takes the ink colour. The wordmark alone carries the gold i-dot.

## Contents

| Folder | What is inside |
|---|---|
| [`logo/`](logo/README.md) | Symbol, wordmark, horizontal and stacked lockups, each in 5 colourways (SVG + PNG); construction grid, clear space, minimum size, incorrect use. |
| `app/` | iOS 1024 (full bleed) and rounded 1024, Android adaptive foreground / background / monochrome (432), PWA maskable 512. |
| `favicon/` | `favicon.svg`, `favicon.ico`, PNG 16 / 32 / 48 / 192 / 512, Apple touch icon 180. |
| `social/` | Avatar 512 (circle-safe), Open Graph 1200x630 in uz / en / ru, GitHub social preview 1280x640, Telegram cover 1280x720. |
| [`colors/`](colors/README.md) | `tokens.json`, `tokens.css`, scales 50-950, semantic light / dark tokens, WCAG contrast table. |
| [`typography/`](typography/README.md) | Onest and Inter (woff2, Latin + Cyrillic, OFL licences), `fonts.css`, type scale. |
| [`motion/`](motion/README.md) | Motion spec, 7 animated SVG states, animated lockup intro, CSS + JS reference implementation with a demo page. |
| [`3d/`](3d/README.md) | `tilo-symbol.glb` (three.js ready), extrusion notes, render. |
| [`iconography/`](guidelines/iconography.md) | 8 icons on the same stroke system (call, captions, card, SOS, sign, dataset, interpreter, wave). |
| [`guidelines/`](guidelines/) | [Iconography](guidelines/iconography.md), [photography and video](guidelines/photography-video.md), [voice and tone](guidelines/voice-and-tone.md), [accessibility](guidelines/accessibility.md). |
| `src/` | The generator. Every asset above is built from `geo.py` + `palette.py`. |

## Rebuild

```sh
python brand/src/build.py    # SVG, tokens, motion, icons, social sources   (needs fontTools + brotli)
python brand/src/render.py   # PNG rasters                                   (needs Chrome + Pillow)
python brand/src/glb.py      # 3D model                                      (pure Python)
python brand/src/site.py     # /brand pages, site/brand/assets, brand kit zip
```

Never edit generated files by hand: change `src/geo.py` (shape) or `src/palette.py` (colour) and rebuild. The original five-direction exploration lives outside this repository; 01 and 05 were chosen by the founder and unified here.

## Licence and use of the brand

- **Files** in `brand/` (artwork, documents, tokens) are licensed **CC BY 4.0** ([`LICENSES/CC-BY-4.0.txt`](../LICENSES/CC-BY-4.0.txt)). Credit: "Tilo brand, Wonmor and Tilo contributors".
- **Code** (`brand/src/`, `brand/motion/reference/`) is **Apache-2.0**. **Fonts** keep their own **SIL OFL 1.1** licences.
- **The Tilo name and logo are brand assets, used per these guidelines.** The copyright licence does not grant trademark rights. You may use the logo, unmodified, to refer to Tilo (articles, partner pages, integrations, "works with Tilo"). Do not modify it, do not use it as your own product's logo, and do not suggest that Tilo endorses you unless it does. For anything else, open an issue.
