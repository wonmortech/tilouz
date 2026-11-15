# Logo

The Tilo logo has two parts from one geometry: the **symbol** (01 Geometrik) and the **wordmark** (05 Monogram). Read [the brand README](../README.md) for the roles and the story.

## Files

`<item>/tilo-<item>-<colourway>.svg` and the same name in `.png` (transparent, 1200 or 1600 px wide).

| Item | Use |
|---|---|
| `lockup-horizontal` | **The main logo.** Website header, documents, slides, partner pages. |
| `lockup-stacked` | Square-ish spaces: posters, title slides, merchandise, splash screens. |
| `wordmark` | When the symbol is already on screen (the app's own header, next to the app icon), or in running text. Carries the gold i-dot. |
| `symbol` | App icon, avatar, favicon, watermarks, loaders. On its own it must be recognisable: never add the old 05 wave-i mark. |

| Colourway | Background |
|---|---|
| `color-light` | Light backgrounds (paper `#F7F5F0`, white, neutral 50-200). |
| `color-dark` | Dark backgrounds (`#101214`, teal 900-950, photos with a dark scrim). |
| `mono-black` | One-colour print, fax, embossing, stamps on light material. |
| `mono-white` | One colour on dark or on photos (with enough contrast). |
| `brand` | One colour, Tilo teal: merchandise, single-ink print. |

## Clear space

Two dot diameters on every side (`construction/tilo-clear-space.svg`). Measure with the dot of the logo you are placing: in the horizontal lockup that is the symbol's dot. Nothing (text, edges, other logos) enters this space.

## Minimum size

| Item | Screen | Print |
|---|---|---|
| Symbol | 20 px wide (16 px only inside the favicon tile) | 6 mm |
| Wordmark | 48 px wide (x-height stays above 8 px) | 12 mm |
| Horizontal lockup | 96 px wide | 24 mm |
| Stacked lockup | 64 px wide | 18 mm |

See `construction/tilo-minimum-size.svg` (drawn at actual pixel size).

## Construction

`construction/tilo-construction.svg`: symbol on a 512 artboard with a w/4 = 15 module; three circles per half (outer, centre, inner), wave top / axis / bottom lines, the dot rule. Wordmark: baseline, x-height, t-height (1.20), ascender (1.345 = i-dot top); the cup that joins t and i is the symbol's right half.

- Symbol: stroke w 60, centre radius 78 = 1.3w, counter 96 = 1.6w, dot r 32 (diameter 1.07w), dot gap 30 = 0.5w, joint is flat (G1 tangent). The left half carries a hidden 1.5 u tab under the right half so no anti-alias seam appears in one-colour versions. The symbol is shifted 6 u left of geometric centre (the dot adds weight on the right).
- Wordmark: stroke 0.22 x-height, round caps; cup radius 1.55s; t-bar arms 1.05s left / 0.95s right of the stem; spacing straight|straight 0.30H, straight|round 0.22H; o overshoot 1.5%.
- Horizontal lockup: wordmark x-height = 0.52 x wave height, centred on the wave axis; gap = 0.5 x wave height.
- Stacked lockup: wordmark x-height = 0.60 x wave height; gap from wave bottom to ascender = 0.40 x wave height; centred.

## Do not

`misuse/` has one SVG per rule and a combined sheet `tilo-incorrect-use.svg`:

1. Do not stretch or squash.
2. Do not recolour with off-palette colours.
3. Do not rotate or tilt.
4. Do not add shadows, glows or gradients.
5. Do not outline the logo.
6. Do not move the dot or rearrange the parts.
7. Do not retype the wordmark in a font.
8. Do not place it on busy or low-contrast backgrounds.
9. Do not use the 05 wave-i on its own: it reads as "ni".
