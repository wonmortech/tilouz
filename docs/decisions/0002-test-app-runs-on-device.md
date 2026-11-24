# 0002. Sinov ilovasi qurilmada ishlaydi, Tilo serveri yo'q

- **Holat:** Qabul qilingan
- **Sana:** 2026-11-17
- **PR:** [#19](https://github.com/wonmortech/tilouz/pull/19)

## Kontekst

Yuz videosi biometrik ma'lumot. ZRU-547 bo'yicha shaxsiy ma'lumot O'zbekistonda saqlanishi kerak (27-1-modda), biometrik ma'lumot uchun alohida talablar bor ([lex.uz](https://lex.uz/docs/4396419); [05](../05_Huquq_moliya_va_notijorat_model.md)). Rozilik shabloni, yurist xulosasi va O'zbekistondagi server hali yo'q (Epic E0).

## Qaror

Sinov bosqichida ilova **hech qanday ma'lumotni Tilo serveriga yubormaydi**:

- sozlamalar va favqulodda manzil faqat `localStorage` da;
- video xabar faqat qurilmada yoziladi, uni foydalanuvchining o'zi Share yoki fayl orqali yuboradi;
- nutqni tanish brauzerning o'z dvigateli (Web Speech API) orqali ishlaydi. Ko'p brauzerlar ovozni o'z ishlab chiqaruvchisiga yuboradi, shuning uchun mikrofon yoqilishidan oldin foydalanuvchiga bu aytiladi va rozilik so'raladi. Rozilik bo'lmasa yozish rejimi qoladi.

CSP `connect-src 'self'` buni texnik jihatdan ham cheklaydi ([0003](0003-per-path-csp.md)). `tests/app` har ekranda tashqi so'rov yo'qligini tekshiradi.

## Muqobillar

| Variant | Nega tanlanmadi |
|---|---|
| O'z STT serveri (WhisperLive) | O'zbekistonda server va rozilik shabloni hali yo'q. Provayder tanlovi alohida o'lchanadi (Epic E2) |
| Tijorat STT API (Muxlisa, Aisha, Yandex) | Kalit brauzerda saqlanmaydi, demak backend kerak. Huquqiy asos hali tayyor emas |

## Oqibatlar

- Sinov ilovasi serverisiz, arzon va xavfsiz ishlaydi.
- Subtitr sifati brauzerga bog'liq. O'zbek tilini hamma brauzer tanimaydi, ilova bu holatda ochiq xabar beradi.
- Qayta ko'rish sharti: STT ADR (Epic E2) qabul qilinganda va O'zbekistonda server tayyor bo'lganda.
