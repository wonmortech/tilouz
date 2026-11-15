# Accessibility rules

Tilo exists for accessibility, so the brand holds itself to it first. Target: **WCAG 2.2 AA everywhere, AAA for live captions.**

## Contrast

- Text 4.5:1, large text (24 px+, or 18.66 px bold) and UI graphics 3:1. The full table is in [`../colors/README.md`](../colors/README.md).
- On light backgrounds: text in ink `#15171C` (16.46:1) or teal `#0B7A67` (4.83:1). Sea `#1497B8` (3.13:1) is for icons and large text only; use `#006175` for accent text. Gold `#F2A81D` (1.85:1) is decorative: the dot, highlights, never text.
- On dark backgrounds (`#101214`) every brand colour passes AAA.
- Live captions: white on `#101214` (18.77:1).

## Captions and sign language

- Every video, livestream and event has captions (Uzbek and Russian) and, where there is speech, a sign-language interpreter.
- Captions are user-adjustable: size (at least 3 steps), background opacity, position.
- Never put text or logos over the interpreter.

## Motion

- `prefers-reduced-motion: reduce` turns every animation off and shows the final static state (the reference CSS does it).
- No flashing more than 3 times per second; no auto-playing motion longer than 5 seconds without a pause control.
- Motion never carries meaning alone: "connecting" also says "Ulanmoqda..." / "Connecting..." in text.

## Colour is never the only signal

- Status uses colour + icon + word: ok (check), warn (triangle), bad (cross), info (i).
- Links in text are underlined. Focus is a 2 px sea outline with 2 px offset, always visible.
- Charts use labels or patterns, not just colour.

## Interaction and content

- Touch targets at least 44 x 44 px; spacing between targets at least 8 px.
- Plain language: short sentences, common words; easy to translate into sign language (many Deaf readers read Uzbek or Russian as a second language).
- Every page has `lang`, a meaningful title and headings in order; images have alt text; icons have labels.
- No CAPTCHA that depends on audio; no phone-call-only support: every support channel works in text or video sign language.
- Visual alerts and vibration replace sounds in the app.
