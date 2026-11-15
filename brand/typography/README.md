# Typography

| Role | Typeface | Why |
|---|---|---|
| **Brand**: headings, UI, logo-adjacent text | **Onest** (variable, 100-900) | Geometric-humanist grotesque drawn for Latin and Cyrillic together, so Uzbek Latin, Uzbek Cyrillic and Russian look like one voice. Open apertures and round, friendly forms sit well next to the monoline wordmark. |
| **Text**: live captions, long reading, data | **Inter** (variable, 100-900) | Built for screens; large x-height, clear shapes at small sizes, tabular figures, and optional disambiguated forms (`font-feature-settings: "cv05", "ss02"` for l / I / 1) that matter in captions. |
| Mono: code, hex values | system `ui-monospace` | No extra download. |

The wordmark is **drawn, not typed**: never set "tilo" in Onest or any other font as a logo.

## Script coverage (checked glyph by glyph)

Both families cover everything Tilo writes:

- Uzbek Latin: `o' g'` with U+02BB (oʻ gʻ), the apostrophe U+02BC (ʼ), U+2018 / U+2019.
- Uzbek Cyrillic: short u, qa, ghe with stroke, ha with descender (U+045E, U+049B, U+0493, U+04B3) and the rest of the Cyrillic block.
- Russian: the full Cyrillic block incl. Yo (U+0401 / U+0451).

The live specimen with real Cyrillic text is on the website (`/brand`, typography section).

The lookalikes we tested and rejected: Lexend (no Cyrillic), Manrope (no Uzbek Cyrillic, no U+02BB), Unbounded (no Uzbek Cyrillic), Golos and Geologica (no U+02BB).

## Files

`fonts/` holds woff2 subsets (latin, latin-ext, cyrillic, cyrillic-ext) of both families and their licences (`Onest-OFL.txt`, `Inter-OFL.txt`, SIL Open Font License 1.1). `fonts.css` declares them with `unicode-range`, so a page only downloads the subsets it uses. Self-host them: never load fonts from a third-party CDN (privacy, and our CSP forbids it).

## Scale

| Token | Size | Line height | Weight | Tracking | Family |
|---|---|---|---|---|---|
| display | clamp(2.75rem, 1.6rem + 4.6vw, 5.5rem) | 1.02 | 600 | -0.035em | Onest |
| h1 | clamp(2.1rem, 1.5rem + 2.4vw, 3.4rem) | 1.08 | 600 | -0.025em | Onest |
| h2 | clamp(1.6rem, 1.3rem + 1.2vw, 2.25rem) | 1.15 | 600 | -0.02em | Onest |
| h3 | 1.25rem | 1.3 | 600 | -0.01em | Onest |
| body-lg | 1.125rem | 1.6 | 400 | 0 | Inter |
| body | 1rem | 1.6 | 400 | 0 | Inter |
| caption-live | clamp(1.25rem, 1rem + 1vw, 1.75rem) | 1.35 | 500 | 0 | Inter |
| small | 0.875rem | 1.5 | 400 | 0.005em | Inter |
| label | 0.75rem | 1.3 | 600 | 0.08em, uppercase | Onest |

Rules: body text never below 16 px; live captions never below 20 px and always on a solid bar (white on `#101214`, 18.77:1); line length 45-75 characters; left-aligned, never justified; no all-caps for sentences (labels only).
