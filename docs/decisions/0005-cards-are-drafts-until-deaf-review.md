# 0005. Karta matnlari kar kengash tekshiruvigacha qoralama

- **Holat:** Qabul qilingan
- **Sana:** 2026-11-17
- **PR:** [#19](https://github.com/wonmortech/tilouz/pull/19)

## Kontekst

Vaziyat kartalari (shifoxona, bank, politsiya va boshqalar) kar odam nomidan gapiradi. Matnni eshituvchi jamoa yozgan bo'lsa, u noto'g'ri, kamsituvchi yoki xavfli bo'lishi mumkin. 06a M3 talabi: kartalar kar maslahat kengashi va 2 kar ekspert tekshiruvidan o'tadi ([06a](../06_Platforma_rejasi/06a_Mahsulot_konsepsiyasi_va_funksiyalar.md)). Kengash hali tuzilmagan.

## Qaror

- [`site/app/data/cards.json`](../../site/app/data/cards.json) `"status": "draft"` bilan chiqadi va ilova har kartada "Qoralama matn, kar kengash tekshiruvi kutilmoqda" deb yozadi.
- Imo-ishora videosi o'rnida "kar imo-ishorachi yozadi (kutilmoqda)" yozuvi turadi. Hech qanday sintetik avatar yoki AI imo-ishora ishlatilmaydi.
- Statusni `reviewed` ga faqat kengash tekshiruvi o'zgartiradi. Kim va qachon tekshirgani yoziladi (sxema: Epic E1).
- `tests/app` kartalar to'plamining yaxlitligini (noyob id, uz va ru matn) va `draft` holatini tekshiradi. Status o'zgarganda test ham ataylab yangilanadi.

## Oqibatlar

- Kar jamoaga sinov uchun erta beriladi, lekin xatoni tuzatish yo'li ochiq qoladi.
- Kengashsiz kartalar soni ko'paytiriladi, lekin "tayyor" deb e'lon qilinmaydi.
