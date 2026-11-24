# 0004. Konsept demo to'qima ma'lumot bilan, aniq yorliq ostida

- **Holat:** Qabul qilingan
- **Sana:** 2026-11-17
- **PR:** [#21](https://github.com/wonmortech/tilouz/pull/21)

## Kontekst

Hamkorlar, grant beruvchilar va kar jamoa rejalashtirilgan to'liq ilovani (VRI, darslar, lug'at, tarjimon kabineti, statistika) ko'rib, unga baho berishi kerak. Bu modullar hali qurilmagan, imo-ishora videolari esa faqat rozilik bilan va pullik kar imo-ishorachilar orqali yoziladi.

## Qaror

[`demo/`](../../demo/) haqiqiy UI'ga ega konsept demo bo'ladi:

- barcha ma'lumot to'qima (`demo/data.js`), imo-ishora videolari o'rnida namuna animatsiya;
- har ekranda "Konsept demo" belgisi turadi, holat qayta yuklanganda tiklanadi;
- demo prod CSP ostida build qilinadi va `tests/demo` bilan sinaladi;
- demo [wonmor.io/demo/tilo](https://wonmor.io/demo/tilo/) da, sinov ilovasidan (`/app/`) alohida turadi.

## Oqibatlar

- Halollik tamoyili saqlanadi: reja reja deb ko'rsatiladi, real foydalanuvchi ma'lumoti yo'q.
- README skrinshotlari demodan olinadi (`npm run site:screenshots`), shuning uchun ularning ostida "konsept" deb yoziladi.
- Demodagi raqamlar (navbat, daqiqa, statistika) KPI emas. Ular hujjatlarda dalil sifatida ishlatilmaydi.
