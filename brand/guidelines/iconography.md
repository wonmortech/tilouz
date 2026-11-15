# Iconography and illustration

## Icons

Icons are drawn on the same rules as the logo, at product scale.

- 24 x 24 grid, 2 px live area padding, **2 px stroke**, round caps and round joins (the logo's round terminals).
- Curves are circle arcs; corners have a 3 px radius (3.5 px for large frames).
- One accent at most: a **dot** (the logo's dot) in gold `#F2A81D` or in the current colour. It marks the "live" part of the icon: the caption cursor, the camera lens, the data point.
- Icons are `currentColor`, so they take the text colour. On light backgrounds the stroke is ink `#15171C` or teal `#0B7A67`; never sea or gold for the stroke (contrast).
- Sizes: 16, 20, 24, 32. Below 20 px, drop the accent dot.
- An icon never stands alone for an action: pair it with a visible label or an `aria-label`.

Sample set in `../iconography/icons/`: `call` (video call), `captions` (live captions, with the cursor dot), `card` (sign dictionary card, with the wave), `sos` (emergency), `sign` (hand / sign language), `dataset`, `interpreter` (two people), `wave` (brand glyph). Sheet: `../iconography/tilo-icons-sheet.svg`.

## Illustration direction

- **Built from the logo's parts**: half-rings, the dot, the cup. Two halves meeting is the visual idea; use it for empty states and onboarding (two figures whose gestures form one wave).
- Flat colour from the palette, no gradients except a soft glow in teal 800 to 950 on dark backgrounds; no 3D clip-art.
- **Hands are drawn correctly or not at all.** Sign language is a language: a wrong handshape is a wrong word. Every illustrated sign is checked by a Deaf signer before release, otherwise use a neutral open hand.
- People in illustrations are diverse in age, gender and skin tone, and Deaf people are shown as active (signing, leading), never as patients.
