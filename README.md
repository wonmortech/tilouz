<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="brand/logo/lockup-horizontal/tilo-lockup-horizontal-color-dark.svg">
    <img alt="tilo" src="brand/logo/lockup-horizontal/tilo-lockup-horizontal-color-light.svg" width="280">
  </picture>
</p>

# tilo

**Kar, zaif eshituvchi va gapira olmaydigan odamlar bilan eshituvchilar orasidagi devorni olib tashlaydigan ochiq kodli, notijorat platforma.** Avval O'zbekiston, keyin MDH.

[Sayt va prezentatsiya](https://tilo.wonmor.io) · [Telegram kanal](https://t.me/tiloapp) · [Tadqiqot hujjatlari](docs/) · [Hissa qo'shish](CONTRIBUTING.md) · [English](#english)

> **Holat: rejalashtirish bosqichi.** Repozitoriyada hozircha tadqiqot va reja hujjatlari ([docs/](docs/)) hamda sayt-prezentatsiya ([site/](site/)) bor. Ilova kodi hali yozilmagan, birinchi ishlar issue'larda.

## Nima uchun

Kar odam shifoxona, bank yoki idoraga borsa, uni ko'pincha hech kim tushunmaydi, u ham eshituvchining gapini tushunmaydi. Malakali surdotarjimon kam, imo-ishora lug'ati va ochiq ma'lumot yo'q, favqulodda xizmatga yozma yoki video kanal yo'q. Tafsilotlar va manbalar: [docs/01_Ijroiya_xulosasi.md](docs/01_Ijroiya_xulosasi.md), [docs/02_Muammo_va_auditoriya.md](docs/02_Muammo_va_auditoriya.md).

## Nima quramiz (MVP)

| Modul | Nima qiladi |
|---|---|
| Jonli tarjimon | Bir tugma bilan inson surdotarjimonga videoqo'ng'iroq (VRI), ish soatlari ochiq e'lon qilinadi |
| Yuzma-yuz suhbat | O'zbek va rus nutqini jonli subtitrga aylantirish, javobni yozish |
| Vaziyat kartalari | Shifoxona, bank, taksi, politsiya, mahalla uchun kar imo-ishorachi yozgan videolar |
| Idora yordamchisi | Murojaat va hujjatlarni tushunarli tilda tayyorlash |
| Video xabar | Imo-ishora videosini yozish va yuborish |
| AAC | Gapira olmaydiganlar uchun belgi-kartalar orqali nutq |
| Ota-onalar moduli | Kar bolaning eshituvchi ota-onasi uchun imo-ishora o'rganish |

Bundan keyin: SOS kanali, ochiq o'zbek imo-ishora tili dataseti, statik kontent uchun avatar, MDH tillari. Batafsil: [docs/06_Platforma_rejasi/](docs/06_Platforma_rejasi/).

## Tamoyillar

- **Kar odamlar boshqaradi.** "Biz haqimizda bizsiz hech narsa".
- **Bepul va ochiq.** Kod Apache-2.0, hujjatlar CC BY 4.0.
- **Maxfiylik.** Yuz videosi biometrik ma'lumot: O'zbekistondagi serverda, qatlamli rozilik bilan.
- **Halollik.** Reja reja deb yoziladi, har raqamning manbasi bor.
- **Mavjudlar bilan hamkorlik.** Surdo AI, imo-ishora.uz, Karlar jamiyati bilan raqobat emas, integratsiya.

## Qanday qo'shilish mumkin

Dasturchi, dizayner, ML/ma'lumot mutaxassisi, surdotarjimon, lingvist yoki kar jamoa a'zosi bo'lsangiz, sizga joy bor. [CONTRIBUTING.md](CONTRIBUTING.md) ni o'qing va [`good first issue`](https://github.com/wonmortech/tilouz/labels/good%20first%20issue) dan boshlang.

## Repozitoriya tuzilishi

| Papka | Nima |
|---|---|
| `brand/` | Brend kitobi: logo (01 belgi + 05 monogram), ranglar, shrift, motion, 3D, ikonkalar, social rasmlar. Sahifa: [tilo.wonmor.io/brand](https://tilo.wonmor.io/brand/) |
| `docs/` | Tadqiqot va reja: raqobatchilar (300+ mahsulot), texnologiya, huquq, budjet, 24 oylik roadmap, brend |
| `site/` | tilo.wonmor.io sayt-prezentatsiyasi (statik, build yo'q) |
| `deploy/` | Server tomoni: Caddy, atomik reliz almashtirish |
| `tools/` | Sayt tekshiruvi (havolalar, CSP, taqiqlangan matn) |

## Litsenziya

Kod: [Apache-2.0](LICENSE). Hujjatlar (`docs/`): [CC BY 4.0](LICENSES/CC-BY-4.0.txt). Shriftlar: OFL-1.1. Tafsilot: [REUSE.toml](REUSE.toml).

---

## English

**Tilo is an open-source, non-profit platform that removes the communication barrier between Deaf, hard-of-hearing and non-speaking people and hearing people.** Uzbekistan first, then Central Asia and the CIS.

**Status: planning.** The repository holds the research and plan ([docs/](docs/), in Uzbek) and the presentation site ([site/](site/), in Uzbek, Russian and English). No application code yet; first tasks are in the issues.

The MVP: one-tap video calls to human sign-language interpreters, live Uzbek/Russian captions for face-to-face conversations, situation cards signed by Deaf signers, an office/petition helper, video messages, AAC for non-speaking people and a learning module for hearing parents. Later: an SOS channel, the first open consented Uzbek Sign Language dataset, avatars for static content only, and more CIS languages.

Principles: Deaf-led, free, open (Apache-2.0 code, CC BY 4.0 docs), privacy first, honest about what is planned. We cooperate with existing services rather than compete.

Want to help? Read [CONTRIBUTING.md](CONTRIBUTING.md), pick a [`good first issue`](https://github.com/wonmortech/tilouz/labels/good%20first%20issue), and join the [Telegram channel](https://t.me/tiloapp).
