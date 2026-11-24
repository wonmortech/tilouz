# 0001. Sinov ilovasi PWA, Telegram Mini App emas

- **Holat:** Qabul qilingan
- **Sana:** 2026-11-17
- **PR:** [#19](https://github.com/wonmortech/tilouz/pull/19)

## Kontekst

O'zbekistonda Telegram asosiy aloqa kanali, shuning uchun ilovani Mini App sifatida chiqarish tabiiy tuyuladi. Lekin Tilo'ning asosiy funksiyalari kamera va mikrofonga tayanadi: video xabar, keyin VRI. Telegram Mini App kamera API bermaydi ([Telegram Web Apps](https://core.telegram.org/bots/webapps); [06f](../06_Platforma_rejasi/06f_Roadmap_24_oy.md), 1-bosqich eslatmasi).

## Qaror

Sinov ilovasi `/app/` ostida statik PWA bo'ladi: build yo'q, service worker bilan oflayn ochiladi, telefonga o'rnatiladi. Telegram yordamchi kanal sifatida qoladi: kanal [@tiloapp](https://t.me/tiloapp) va keyin kartalar uchun bot (Epic E3).

## Muqobillar

| Variant | Afzallik | Kamchilik | Nega tanlanmadi |
|---|---|---|---|
| Telegram Mini App | Auditoriya allaqachon Telegramda | Kamera API yo'q, Telegram'ga bog'liqlik | Video xabar va VRI ishlamaydi |
| Native Android | To'liq API | Uzoq build, do'kon tekshiruvi, sinov sekin | 0-1 bosqich uchun ortiqcha. Android keyin TWA sifatida chiqadi (2-bosqich) |
| PWA | Kamera/mikrofon, oflayn, bitta kod | iOS'da cheklovlar | **Tanlandi** |

## Oqibatlar

- Bitta kod bazasi saytda, keyin TWA orqali Android'da ishlaydi.
- iOS Safari'da nutqni tanish va o'rnatish cheklangan. Bu README va ilova ichida ochiq aytiladi.
- Qayta ko'rish sharti: Telegram Mini App kamera API qo'shsa yoki sinovchilarning ko'pchiligi PWA o'rnatishda qiynalsa.
