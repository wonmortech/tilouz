# 08. Brend tadqiqoti: nom va logo (10 variant)

Sana: 2026-11-15. Holat: qoralama, asoschi va kar jamiyati bilan sinovdan oldin.
Fayllar: `brand_board.html` (jonli taxta, yorug'/qorong'i), `brand_board.png` (skrinshot), `logos/` (10 rangli + 10 bir rangli SVG).

---

## 1. Qisqacha

- 100 ga yaqin nomzod yozildi, 70 tasi avtomatik tekshirildi (domen, GitHub, Telegram), 16 tasi qo'lda (konflikt, ma'no, trademark). Yakunda 10 ta nom tanlandi.
- **Asosiy xulosa:** 3-4 harfli jarangdor nomning `.com` / `.org` / `.app` domeni deyarli doim band (ko'pi park qilingan, sotuvda). Bu odatiy hol: Linear `linear.app`, Raycast `raycast.com` ni keyinroq sotib olgan. Shuning uchun strategiya: **`.uz` + `nom.app` yoki `nomapp` handle'lar**, `.com` ni keyin sotib olish.
- **Top-3 tavsiya:** **Sezi** (63/80), **Yuvel** (63/80, mavjudlik eng yaxshi), **Tilo** (62/80, eng kuchli hikoya). "Qora ot": **Ondu** (60/80, eng toza konflikt va ma'no).
- Logolar nomdan mustaqil. Har bir logo 2-4 nomlangan geometrik qismdan (`id` bilan) iborat: animator ularni alohida siljita, aylantira, 3D da ekstrudlay oladi. Hammasi bir rangda ishlaydi va 16 px favicon'da o'qiladi (taxtada ko'rsatilgan).

---

## 2. Nomlash tadqiqoti va rubrika

### 2.1 Zamonaviy tech-brend nomlari qanday ishlaydi

| Brend | Harf / bo'g'in | Turi | Tovush xususiyati |
|---|---|---|---|
| Claude | 6 / 1 | Real ism (Claude Shannon) | Yumshoq, ochiq "o" unlisi, iliq |
| GPT | 3 / 3 harf | Qisqartma | Texnik; brend sifatida "ChatGPT" orqali jonlandi |
| OpenAI | 6 / 4 | Kompozit | Ochiq unlilar, ishonch |
| Vercel | 6 / 2 | Ixtiro (vertex + cell) | Jarangsiz "v", aniq "k" portlovchi |
| Figma | 5 / 2 | Ixtiro (figure + -ma) | Portlovchi "g", ochiq "a" bilan tugaydi |
| Notion | 6 / 2 | Real so'z | Burun tovushi "n", yumshoq |
| Stripe | 6 / 1 | Real so'z | "st" + "p": o'tkir, kiki tipidagi tovush |
| Linear | 6 / 3 | Real so'z | Silliq "l", "n" |
| Arc | 3 / 1 | Real so'z | Juda qisqa, keskin "k" |
| Raycast | 7 / 2 | Kompozit | Ritmik, ikki urg'u |
| Zed | 3 / 1 | Harf nomi | "z" tezlik va energiya |
| Supabase | 8 / 3 | Kompozit | O'ynoqi |
| Perplexity | 10 / 4 | Real so'z | Uzun, lekin noyob |
| Mistral | 7 / 2 | Real so'z (shamol) | Tabiat obrazi |
| Kling | 5 / 1 | Ixtiro / tovushga taqlid | Jaranglagan tovush |
| Runway | 6 / 2 | Real so'z | Harakat metaforasi |
| Framer | 6 / 2 | Real so'z | Asbob nomi |

### 2.2 Qonuniyatlar

1. **Uzunlik:** eng kuchlilari 4-6 harf, 1-2 bo'g'in. Aytish uchun 1 soniyadan kam vaqt ketadi.
2. **Tuzilma:** CV-CV (undosh-unli-undosh-unli: *Fi-gma, No-tion, Ki-vo*) eng oson eshitiladi va yoziladi.
3. **Unli bilan tugash** (Figma, Claude dagi "o" tovushi) nomni iliq qiladi va boshqa tillarda sklonyatsiyaga oson kiradi.
4. **Bouba/kiki effekti:** "b, l, m, o, u" yumaloq, yumshoq; "k, t, z, i" o'tkir, tez. Ijtimoiy, insoniy mahsulotga yumshoq asos va bitta o'tkir undosh eng yaxshi muvozanat (Claude, Notion, Linear).
5. **Ixtiro qilingan yoki "yarim real" so'z** trademark va domen uchun ancha xavfsiz. Real so'z esa darhol tushunarli, lekin band bo'ladi.
6. **Yashirin hikoya** (Vercel = vertex, Figma = figure) nom ma'noga ega bo'lishi shart emasligini, lekin asoschi aytib bera oladigan kichik hikoya foydali ekanini ko'rsatadi.

### 2.3 Bizga xos cheklovlar (skrining qoidalari)

- **O'zbek lotin alifbosidagi xavfli harflar:** `o'`, `g'` (apostrof URL va handle'da yo'qoladi), `sh`, `ch`, `ng` (birikma), **`x`** (o'zbekchada "kh" deb o'qiladi: "Ixelo" "Ikhelo" bo'ladi), **`q`** (ruschada yo'q), **`h`** (rus tilida "x" bo'ladi), **`c`, `w`** (o'zbek va rus tilida yo'q yoki noaniq), **`y` bilan boshlanuvchi so'z** (ruschada "Y" uch xil harfga: "i kratkoe", "yu", "ya" ga aylanib ketishi mumkin), boshidagi **`e`** (ruschada "E" yoki "E oborotnoe" ikki xil yoziladi).
- **Xavfli bo'g'inlar (bir nechta tilda haqoratli):** `am-` (o'zbek, qozoq, turk tillarida ayol jinsiy a'zosi), `sik-` (o'zbek, turk), `kot-` (o'zbekcha "ko't"), `got-` (turk), `bok` (turk), `yarak` (turk), `popa`, `zhopa` (rus), `khuy-`, `pizd-`, `eb-`, `lokh`, `chmo`, `mudak`, `suka` (rus), `jalab` (o'zbek), `kus` (qozoq "qus" qush, lekin turk tilida "qusish"). Bu bo'g'inlar bilan boshlangan yoki ularni o'z ichiga olgan nomzodlar darhol chiqarildi.
- **Siyosiy va madaniy xavf:** `mova` (ukraincha "til", rus muhitida siyosiy yuklangan), `OVIR` (sovet viza idorasi, "Ovira" shu so'zning kelishikdagi shaklidek eshitiladi).

### 2.4 Rubrika (har biri 1-10, jami 80)

| Mezon | Nimani o'lchaydi |
|---|---|
| Qisqalik | Harf va bo'g'in soni; daktilda (barmoq alifbosi) ko'rsatish osonligi |
| Jarangdorlik | Ovozda yoqimli, aniq; bouba/kiki muvozanati |
| Esda qolish | Bir marta eshitib yozib bera olish |
| Ko'p tilli talaffuz | UZ lotin, UZ kirill, rus, ingliz, qozoq, qirg'iz, tojik tillarida bir xil o'qilishi |
| Salbiy ma'no yo'q | Haqorat, sleng, kulgili, siyosiy ma'no topilmagani |
| Konflikt yo'q | Shu nomli kompaniya, ilova, trademark (ayniqsa IT, sog'liq, messenjer, accessibility) |
| Mavjudlik | .com/.org/.app/.uz, GitHub, Telegram |
| Hikoya | Asoschi aytib bera oladigan yashirin ma'no |

---

## 3. Uzun ro'yxat (100 ga yaqin nomzod)

Usullar: (A) ixtiro, CV-CV qolipi; (B) qisqartirish va qo'shish (blend); (C) o'zak faqat tovush uchun: lotin, yunon, turkiy, so'g'd/fors, yapon va boshqalar; (D) fonetik o'yin; (E) real so'z.

| Usul | Nomzodlar | Natija |
|---|---|---|
| A ixtiro | Kivo, Velu, Teyo, Ondu, Yuvo, Nivo, Ovra, Tuvo, Ulvi, Yaru, Tavo, Vimo, Rumo, Kalo, Sivo, Mivu, Ivra, Orra, Nevo, Kiyo, Aiyo, Alvo, Aveo, Ilio, Ayvo, Eyvo, Kyvo, Lyvo, Veyo, Zevo, Zuvi, Olvy, Vexo, Ixi | Asosiy manba |
| A ixtiro (5-6 harf) | Kivra, Sezio, Tilvo, Navio, Oyuna, Teyva, Kivel, Sezra, Navra, Yuvel, Ixelo, Oxelo, Tivra, Ulvio, Tilva, Ovira | Domen uchun yaxshiroq |
| B blend | Velum, Orvo, Kivu, Sezo, Ondi, Nayo | |
| C turkiy o'zak | Sezi (sezgi, sezim), Tilo (til, tillo), Ulu, Ulvi (azarb. "ulvi" yuksak), Oyna, Nomi, Ilma (ilm), Avaz (ovoz), Sona | |
| C fors/so'g'd | Navo (navo: kuy, ovoz), Avaz, Navra | |
| C lotin/yunon | Vela, Lumo, Lumi, Luma, Zeno, Orin, Ilio, Ixora, Velo, Ova, Nara | |
| C boshqa | Zuri (suahili: chiroyli), Kavi (hind: shoir), Inti (kechua: quyosh), Talo (fin: uy), Ilo (fin: quvonch), Mavi (turk: ko'k), Kova, Yora, Aya, Nuri | |
| D fonetik | Voxa, Vyra, Oxa, Tola, Nuvo, Ludo, Seva, Mova, Tilo, Ivo, Yeva | |
| E real so'z | Oyna, Nomi, Hilo, Mimo, Sado | |

**Darhol chiqarilganlar va sababi:**
- *Imo* (imo messenjeri), *Lumo* (Proton kompaniyasining AI yordamchisi, 2025), *Zeno*, *Luma* (Luma AI), *Navi*: kuchli mavjud brendlar.
- *Hilo*: ruschada "khiliy" (zaif, nimjon) ga yaqin. *Mimo*: ruschada "mimo" (yonidan o'tib ketish, tegmadi). *Sado*: "sado-mazo" assotsiatsiyasi. *Mova*: siyosiy. *Ovira*: OVIR va Avstraliyadagi Ovira (ayollar salomatligi, trademark bor). *Yaru*: yapon slengida jinsiy ma'no. *Zuvi*: AQShda ro'yxatdan o'tgan ZUVI trademark (go'zallik texnikasi).
- *Ixi, Ixora, Vexo, Voxa, Oxa, Ixelo, Oxelo*: "x" o'zbekchada "kh" bo'ladi.
- *Avaz, Ilma, Kiro, Mavi, Nara, Tola, Vexa, Yora, Vimo*: `.uz` band va kuchsizroq.
- *Am-* bilan boshlanuvchilar (Amu, Amo, Amio): o'zbek, qozoq, turk tillarida haqoratli bo'g'in.

---

## 4. Skrining metodikasi (takrorlanuvchi)

Barcha tekshiruvlar **2026-11-15** da o'tkazildi. Natija = "taxminan", kafolat emas. Hech narsa ro'yxatdan o'tkazilmadi, hech qanday forma yuborilmadi.

### 4.1 Domen (RDAP)
`rdap.org` 429 (rate limit) berdi, shuning uchun registrlarning o'z RDAP serverlari ishlatildi. `200` = band, `404` = taxminan bo'sh.

```bash
curl -s -o /dev/null -w "%{http_code}" https://rdap.verisign.com/com/v1/domain/NOM.com
curl -s -o /dev/null -w "%{http_code}" https://rdap.publicinterestregistry.org/rdap/domain/NOM.org
curl -s -o /dev/null -w "%{http_code}" https://pubapi.registry.google/rdap/domain/NOM.app
```
Nazorat: `google.com/.org/.app` -> 200, `zqxkivoq.*` -> 404.

### 4.2 `.uz` domen (whois port 43)
```bash
exec 3<>/dev/tcp/whois.cctld.uz/43; printf "NOM.uz\r\n" >&3; cat <&3
```
Band bo'lsa `Domain Name: NOM.UZ` va registrator chiqadi; bo'sh bo'lsa `Sorry, but domain: "NOM.uz", not found in database`.

### 4.3 GitHub
`gh api users/NOM` -> 200 = band, 404 = taxminan bo'sh. 4 harfli GitHub login'larining **hammasi band** chiqdi, shuning uchun `NOM-app` ham tekshirildi.

### 4.4 Telegram
`curl -s https://t.me/NOM` sahifasida `tgme_page_title` bloki bo'lsa username mavjud. **Muhim:** Telegram'da oddiy username kamida 5 belgi; 4 harflilar faqat Fragment auksionida sotiladi. Shuning uchun 4 harfli nomlar uchun `NOMapp` tekshirildi. Sahifa yo'qligi username bo'shligini kafolatlamaydi (yashirin yoki zaxiradagi bo'lishi mumkin).

### 4.5 Konflikt va trademark
- Veb-qidiruv: "NOM app", "NOM company", "NOM brand", hamda imo-ishora (sign language) ilovalari orasida.
- Trademark: **WIPO Global Brand Database** (`branddb.wipo.int`) avtomatik so'rovga CAPTCHA qaytardi, shuning uchun u **qo'lda tekshirilishi kerak** (5-bo'lim, keyingi qadamlar). USPTO yozuvlari markinton.com, trademarkdir.com, trademarks.justia.com orqali ko'rildi.

### 4.6 Ma'no va sleng
Har bir nom o'zbek, rus (sleng ham), qozoq, qirg'iz, tojik, turk va ingliz tillarida ko'rib chiqildi: o'zak lug'atlari va yuqoridagi xavfli bo'g'inlar ro'yxati asosida. **Bu ichki tekshiruv; yakuniy so'z ona tilida so'zlashuvchilarniki** (har bir tildan kamida 2 kishi, shu jumladan kar jamiyati vakillari).

### 4.7 Xom natija (avtomatik skrining, tanlangan qatorlar)
`nom | com | org | app | uz | github | github NOM-app | tg | tg NOMapp`
```
kivo |BAND|BAND|BAND|BAND |BAND|BAND |bosh?|BAND
sezi |BAND|BAND|BAND|bosh?|BAND|BAND |bosh?|bosh?
tilo |BAND|BAND|BAND|bosh?|BAND|BAND |bosh?|bosh?
oyna |BAND|BAND|BAND|BAND |BAND|bosh?|bosh?|bosh?
velu |BAND|BAND|BAND|bosh?|BAND|bosh?|bosh?|bosh?
yuvel|BAND|bosh?|bosh?|bosh?|BAND|bosh?|bosh?|bosh?
ondu |BAND|BAND|BAND|bosh?|BAND|bosh?|bosh?|bosh?
navo |BAND|BAND|BAND|BAND |BAND|BAND |BAND|BAND
ulvi |BAND|BAND|BAND|bosh?|BAND|bosh?|bosh?|bosh?
teyva|BAND|bosh?|bosh?|bosh?|BAND|bosh?|BAND|bosh?
ovira|BAND|bosh?|bosh?|bosh?|BAND|bosh?|bosh?|bosh?
sezra|BAND|bosh?|bosh?|bosh?|BAND|bosh?|bosh?|bosh?
ulvio|BAND|bosh?|bosh?|bosh?|BAND|bosh?|bosh?|bosh?
tilvo|BAND|bosh?|BAND|bosh?|BAND|bosh?|BAND|bosh?
```
(4 harfli nomlarda Telegram "bosh?" = sahifa yo'q, lekin oddiy usulda olib bo'lmaydi.)

---

## 5. 10 ta yakuniy variant

Mavjudlik belgilari: **B** = band, **b?** = taxminan bo'sh, **-** = qo'llanilmaydi.

### 5.1 Kivo

- **Talaffuz:** IPA /ˈki.vo/, o'qilishi: *ki-vo*. Kirill yozuvida harfma-harf, bir xil yoziladi. Hamma tilda bir xil.
- **Nega:** Figma tipidagi CV-CV; "k" o'tkir, "o" iliq. 4 harf, daktilda 4 harakat. Eng jarangdor nomzod.
- **Yashirin hikoya:** ruscha *kivok* (bosh irg'ash: so'zsiz "ha", eng qadimgi imo); yaponcha *kibō* (umid) ga yaqin.
- **Xavf:** Konflikt yuqori: Kivo (AQSh, life-sciences hujjat platformasi, 12.8 mln $), KIVO (Web3), Kivo CRM ilovasi; USPTO'da 9-sinfda (dasturiy apparatura) **ro'yxatdan o'tgan KIVO** (Reg. 6535451). Hamma domen band, `.uz` ham.
- **Mavjudlik:** .com B, .org B, .app B, .uz B, GitHub B / `kivo-app` B, Telegram - / `kivoapp` B.
- **Ball:** Qisqalik 9, Jarangdorlik 9, Esda qolish 9, Talaffuz 9, Salbiy yo'q 8, Konflikt 3, Mavjudlik 2, Hikoya 8 = **57/80**.
- **Logo "Ikki yarim"** (`logos/01_kivo.svg`): disk diagonal bo'ylab ikkiga bo'lingan (`#half-a`, `#half-b`), yarimlar bir-biriga qarab siljigan; burchakda `#spark` nuqta. Ikki tomon uchrashadi, tirqish esa bosh irg'ash chizig'i.
  - *Animatsiya:* idle: yarimlar nafas olgandek ochilib-yopiladi. Intro: ikki yarim ekranning ikki chetidan uchib kelib qo'shiladi, uchqun "pop" qiladi. Interaksiya: hover'da yarimlar kursor tomon burilib "bosh irg'aydi".
  - *3D:* ikki yarim silindr (qalinlik 0.25R), mat keramika, orasidagi tirqishdan orqa yorug'lik (rim light) chiqadi.
  - *Palitra:* `#FF5A36`, `#2B3BFF`, `#FFC23C`. *Shrift:* Space Grotesk 700.

### 5.2 Sezi (tavsiya, 1-o'rin)

- **Talaffuz:** IPA /se.ˈzi/, *se-zi*. Kirill yozuvida harfma-harf, bir xil yoziladi. Ingliz tilida "say-zee" tarzida o'qitish kerak (brend gid).
- **Nega:** Ikki ochiq bo'g'in, "z" energiya beradi, "i" bilan tugaydi: yengil, zamonaviy. Turkiy dunyoda tushunarli o'zak, lekin ma'noni bilmagan odam uchun ham sof ixtiro kabi eshitiladi.
- **Yashirin hikoya:** o'zbekcha *sezgi*, qozoqcha *sezim*, turkcha *sezi* = "his qilish, sezish, intuitsiya". Kar odam dunyoni ko'z va sezgi bilan "eshitadi".
- **Xavf:** Kuchli konflikt topilmadi (qidiruvda Sezi nomli ilova yo'q). Ingliz tilida "sexy" ga juda uzoq o'xshashlik (past). `.com/.org/.app` band.
- **Mavjudlik:** .com B, .org B, .app B, **.uz b?**, GitHub B / `sezi-app` B, Telegram - / **`seziapp` b?**.
- **Ball:** 9, 8, 8, 8, 8, 8, 5, 9 = **63/80**.
- **Logo "To'rt yaproq"** (`logos/02_sezi.svg`): to'rtta asimmetrik yaproq (`#petal-n/e/s/w`) parrak simmetriyasida, markazda `#core`. Asimmetriya tinch holatda ham aylanishni sezdiradi.
  - *Animatsiya:* idle: har 5 soniyada 90 gradusga "klik" bilan buriladi (ease-in-out). Intro: yaproqlar markazdan o'sib chiqadi. Interaksiya: kursor tezligiga qarab aylanadi; ilova yuklanishida spinner bo'ladi.
  - *3D:* yaproqlar egilgan shisha plastinalar (refraction), markaz yorug' sfera; OpenAI "blossom" ga o'xshab, lekin 4 bo'lak va asimmetrik.
  - *Palitra:* `#7C5CFF`, `#00C2A8`, `#FFB547`. *Shrift:* Sora 600.

### 5.3 Tilo (tavsiya, eng kuchli hikoya)

- **Talaffuz:** IPA /ti.ˈlo/, *ti-lo*. Kirill yozuvida harfma-harf, bir xil yoziladi.
- **Nega:** "t" aniq, "l" silliq, "o" iliq: Claude/Notion yumshoqligi. Hamma tilda bir xil o'qiladi va yoziladi.
- **Yashirin hikoya:** o'zbekcha *til* (til: imo-ishora tili ham til) va o'zbek/tojikcha *tillo* (oltin). "Har bir til oltinga teng." Ukraincha *tilo* = "tana" (imo-ishora tanadagi til).
- **Xavf:** O'rta: Tilo nomli bir nechta kichik ilova bor (vaqt hisobi, ish joyidagi wellness, bolalar video ilovasi), Avstriyadagi Tilo pol ishlab chiqaruvchisi. Accessibility sohasida konflikt topilmadi.
- **Mavjudlik:** .com B, .org B, .app B, **.uz b?**, GitHub B / `tilo-app` B, Telegram - / **`tiloapp` b?**.
- **Ball:** 9, 8, 8, 9, 8, 6, 5, 9 = **62/80**.
- **Logo "Subtitr shar"** (`logos/03_tilo.svg`): to'rtta yumaloq chiziq (`#line-1..4`) shar siluetini hosil qiladi; 3-qator chala, oxirida `#cursor` nuqta: jonli subtitr yozilyapti. Shar quyosh va oltin tanga ham.
  - *Animatsiya:* idle: kursor miltillaydi. Intro: chiziqlar chapdan o'ngga ketma-ket "yoziladi" (subtitr kabi). Interaksiya: gapirilganda chiziqlar ovoz balandligiga qarab cho'ziladi: logo jonli caption indikatoriga aylanadi.
  - *3D:* oltin shar to'rt diskka kesilgan (slicing), disklar alohida aylanadi; mat oltin + ko'k nuqta emissive.
  - *Palitra:* `#F5A524`, `#00A6FB`, `#FF5D73`. *Shrift:* **Lexend** 600 (o'qish qulayligi uchun ishlab chiqilgan, accessibility g'oyasiga mos).

### 5.4 Oyna

- **Talaffuz:** IPA /oj.ˈna/, *oy-na*. Kirill yozuvida harfma-harf, bir xil yoziladi. Ingliz tilida "oy" ("oy vey") va "Oy-na" deb aytiladi.
- **Nega:** Real o'zbek so'zi, juda iliq va mahalliy; qozoq va turk tillarida *oyna* = "o'yna" (o'yin), tojikcha *oina* = ko'zgu.
- **Yashirin hikoya:** imo-ishora tili ko'z bilan "eshitiladi": oyna (deraza) dunyoga ochiq, ko'zgu esa bir-birini ko'rish.
- **Xavf:** O'zbekistonda juda umumiy so'z (Oynachi ilovasi, ko'plab oyna do'konlari), qidiruvda ajralib chiqishi qiyin. `.uz` band. Global bozorda ma'no yo'qoladi.
- **Mavjudlik:** .com B, .org B, .app B, .uz B, GitHub B / **`oyna-app` b?**, Telegram - / **`oynaapp` b?**.
- **Ball:** 9, 7, 8, 7, 8, 7, 3, 9 = **58/80**.
- **Logo "Peshtoq"** (`logos/04_oyna.svg`): Samarqand peshtoqi siluetidagi ark-ramka (`#portal`), ichida ko'tarilayotgan quyosh (`#sun`), pastda zamin (`#ground`). Darvoza = ikki dunyo orasidagi ochiq eshik.
  - *Animatsiya:* idle: quyosh sekin ko'tariladi va pasayadi. Intro: ramka pastdan quriladi, keyin quyosh chiqadi. Interaksiya: kamera ark ichidan o'tadi (portal o'tishi): video qo'ng'iroqqa kirish animatsiyasi.
  - *3D:* chuqur ekstrud qilingan ark (ko'k majolika material), ichida emissive disk; ideal "portal" sahnasi.
  - *Palitra:* `#1E6FFF` (lojuvard), `#F2B33D`, `#12B5A5` (Registon firuzasi). *Shrift:* Unbounded 600.

### 5.5 Velu

- **Talaffuz:** IPA /ˈve.lu/, *ve-lu*. Kirill yozuvida harfma-harf, bir xil yoziladi.
- **Nega:** Juda yumshoq (bouba), "u" bilan tugaydi: do'stona, insoniy. Barcha tilda bir xil.
- **Yashirin hikoya:** maxsus ma'nosi yo'q; tamil tilida Velu keng tarqalgan ism, ruschada arxaik *velyu* ("buyuraman"): ikkalasi ham neytral.
- **Xavf:** Velu nomli ichimlik brendi (AQSh, bevnet), Velby (Hindiston, sog'liq ilovasi) o'xshash. IT/accessibility da kuchli konflikt topilmadi.
- **Mavjudlik:** .com B, .org B, .app B, **.uz b?**, GitHub B / **`velu-app` b?**, Telegram - / **`veluapp` b?**.
- **Ball:** 9, 8, 7, 9, 9, 7, 5, 5 = **59/80**.
- **Logo "Umumiy linza"** (`logos/05_velu.svg`): ikki qalin halqa (`#ring-a`, `#ring-b`), kesishgan joyda to'la rangli `#lens`: ikki odamning umumiy tili.
  - *Animatsiya:* halqalar uzoqlashsa linza so'nadi, yaqinlashsa yonadi (suhbat boshlanishi metaforasi). Interaksiya: tarjimon ulanganda linza yonadi.
  - *3D:* ikki shisha torus, kesishgan joyda yorug' linza (volumetric glow).
  - *Palitra:* `#E8466B`, `#5B5BF7`, `#FFD166`. *Shrift:* Manrope 700.

### 5.6 Yuvel (tavsiya, eng yaxshi mavjudlik)

- **Talaffuz:** IPA /ju.ˈvel/, *yu-vel*. Kirill yozuvida harfma-harf, bir xil yoziladi. Inglizcha "you-vel" (jewel ga yaqin).
- **Nega:** "yu" yumshoq ochilish, "vel" aniq yopilish. 5 harf, ingliz quloqqa "you" + "jewel" bo'lib tushadi: global uchun qulay.
- **Yashirin hikoya:** ruscha *yuvelir* (zargar) va inglizcha *jewel*: har bir so'z qimmatbaho, nozik ish. "You" so'zi bilan boshlanadi: markazda inson.
- **Xavf:** Isroildagi YVEL zargarlik brendi (yozilishi boshqa, lekin talaffuz yaqin, boshqa sohada). O'zbekcha *yuv-* (yuvmoq) o'zagi bor, lekin "yuvel" so'z sifatida ishlatilmaydi. GitHub login band.
- **Mavjudlik:** .com B, **.org b?**, **.app b?**, **.uz b?**, GitHub B / **`yuvel-app` b?**, **Telegram `yuvel` b?** / **`yuvelapp` b?**.
- **Ball:** 8, 8, 8, 8, 8, 7, 9, 7 = **63/80**.
- **Logo "Ochiq kristall"** (`logos/06_yuvel.svg`): uchta romb qirra (`#facet-top`, `#facet-left`, `#facet-right`) izometrik kristall; yuqori qirra qopqoqdek ko'tarilgan: quti ochilyapti.
  - *Animatsiya:* qopqoq ko'tarilib tushadi, yon qirralar sal ochiladi. Intro: uch qirra uch tomondan kelib yig'iladi. Interaksiya: muvaffaqiyatli qo'ng'iroqdan keyin ichidan yorug'lik chiqadi.
  - *3D:* tabiiy 3D shakl: haqiqiy kristall material (dispersion, IOR 2.4), ichida nur manbai.
  - *Palitra:* `#6EE7F9`, `#3B82F6`, `#1D4ED8`. *Shrift:* Syne 700.

### 5.7 Ondu ("qora ot")

- **Talaffuz:** IPA /ˈon.du/, *on-du*. Kirill yozuvida harfma-harf, bir xil yoziladi.
- **Nega:** Burun tovushi "n" va portlovchi "d", ikki dumaloq unli: ritmik, xuddi to'lqin. Barcha tilda bir xil, salbiy ma'no topilmadi.
- **Yashirin hikoya:** kannada tilida *ondu* = "bir" (birlik); fransuzcha *onde* (to'lqin) ga yaqin.
- **Xavf:** Past: aynan "Ondu" nomli startap topilmadi (Onde, Onu, Jondu o'xshash, boshqa sohada).
- **Mavjudlik:** .com B, .org B, .app B, **.uz b?**, GitHub B / **`ondu-app` b?**, Telegram - / **`onduapp` b?**.
- **Ball:** 9, 7, 7, 9, 9, 8, 5, 6 = **60/80**.
- **Logo "To'lqin"** (`logos/07_ondu.svg`): ikki yarim halqa (`#wave-a`, `#wave-b`) S-to'lqin hosil qiladi, ustida `#drop` tomchi.
  - *Animatsiya:* to'lqin chiziq bo'ylab "oqadi" (stroke-dashoffset), tomchi tebranadi. Interaksiya: ovoz kelganda to'lqin amplitudasi o'zgaradi (audio-reaktiv).
  - *3D:* ikki yarim torus (quvur), yumshoq silikon materiali, tomchi suyuq metall.
  - *Palitra:* `#00B37E`, `#00C8F0`, `#FF4D8D`. *Shrift:* Outfit 600.

### 5.8 Navo

- **Talaffuz:** IPA /na.ˈvo/, *na-vo*. Kirill yozuvida harfma-harf, bir xil yoziladi.
- **Nega:** Eng kuchli ma'no: fors/tojik/o'zbek tilida *navo* = kuy, ovoz, ohang ("Navoiy" taxallusi ham shu o'zakdan).
- **Yashirin hikoya:** "Imo-ishora ham navo: ovozsiz kuy." Alisher Navoiy bilan bog'liqlik O'zbekistonda katta hissiy kuch beradi.
- **Xavf:** **Mavjudlik eng yomon** (hamma domen, GitHub, Telegram band). Navo nomli bir nechta ilova (NAVO smart home, Navo moda ulgurji savdosi, 1 mln+ o'rnatish). Diqqat: kar jamiyatining bir qismi "ovoz" metaforasini yoqtirmasligi mumkin; sinov kerak.
- **Mavjudlik:** .com B, .org B, .app B, .uz B, GitHub B / B, Telegram B / B.
- **Ball:** 9, 8, 8, 9, 9, 5, 1, 9 = **58/80**.
- **Logo "Orbita"** (`logos/08_navo.svg`): markaziy `#planet`, uzilgan `#ring` va uzilish joyidagi `#moon` yo'ldosh.
  - *Animatsiya:* yo'ldosh halqa bilan birga aylanadi va bo'shliqni o'zi bilan olib yuradi; planet "nafas oladi". Interaksiya: qo'ng'iroq kutish holatida tezlashadi.
  - *3D:* sfera + torus + kichik sfera; Saturn uslubida, metall halqa.
  - *Palitra:* `#FF7A00`, `#7B61FF`, `#FFD60A`. *Shrift:* Bricolage Grotesque 700.

### 5.9 Ulvi

- **Talaffuz:** IPA /ulˈvi/, *ul-vi*. Kirill yozuvida harfma-harf, bir xil yoziladi (yumshoq "l"). Qirg'izcha *uluu* (ulug') ga yaqin.
- **Nega:** Ozarbayjoncha *ulvi* = "yuksak, olijanob"; turkiy quloqqa tanish, boshqalarga ixtiro kabi.
- **Yashirin hikoya:** "Yuksak" va qirg'izcha *uluu* "ulug'": har kimning qadr-qimmati.
- **Xavf:** Ozarbayjonda keng tarqalgan erkak ismi (Ülvi); brend sifatida konflikt topilmadi. "lv" birikmasi rus va ingliz tilida biroz qiyin.
- **Mavjudlik:** .com B, .org B, .app B, **.uz b?**, GitHub B / **`ulvi-app` b?**, Telegram - / **`ulviapp` b?**.
- **Ball:** 9, 7, 7, 7, 8, 8, 5, 6 = **57/80**.
- **Logo "Uch ovoz"** (`logos/09_ulvi.svg`): uchta kapsula (`#blade-1..3`) 120 gradusda: kar odam, eshituvchi odam, tarjimon.
  - *Animatsiya:* 120 gradusga qadamma-qadam aylanish (har biri navbat bilan yuqoriga chiqadi: "so'z navbati"). Intro: uch kapsula uch tomondan kelib markazda uchrashadi.
  - *3D:* uchta yumaloq kapsula (pill), turli rangdagi yarim shaffof plastik, markazda kesishish yo'q: havo bor.
  - *Palitra:* `#EF476F`, `#FFD166`, `#06D6A0`. *Shrift:* Plus Jakarta Sans 700.

### 5.10 Teyva

- **Talaffuz:** IPA /ˈtej.va/, *tey-va*. Kirill yozuvida harfma-harf, bir xil yoziladi.
- **Nega:** Mavjudlik yaxshi (.org, .app, .uz bo'sh), ikki bo'g'in, "va" bilan ochiq tugaydi.
- **Yashirin hikoya:** maxsus ma'nosi yo'q (tamilcha *deyva* "ilohiy" ga uzoq o'xshash).
- **Xavf:** **Teva** (yirik farmatsevtika kompaniyasi) ga yozilishi va talaffuzi yaqin: sog'liq sohasida trademark aralashish xavfi. "ey" birikmasi kirill yozuvida ikki xil ("e" yoki "e oborotnoe" bilan) yozilishi mumkin. Telegram `teyva` band.
- **Mavjudlik:** .com B, **.org b?**, **.app b?**, **.uz b?**, GitHub B / **`teyva-app` b?**, Telegram B / **`teyvaapp` b?**.
- **Ball:** 8, 8, 7, 7, 8, 5, 8, 5 = **56/80**.
- **Logo "Yarim yo'lda"** (`logos/10_teyva.svg`): ikki romb (`#diamonds`, evenodd) kesishadi, kesishgan joy bo'sh qoladi va unda `#meet` nuqta yonadi. Asosiy qahramon bo'shliq (negative space).
  - *Animatsiya:* rombar ikki chetdan siljib kelib uchrashadi, kesishishda nuqta "pop" qiladi.
  - *3D:* ikki qalin plastina, kesishgan joy teshik orqali yorug'lik o'tadi (light leak).
  - *Palitra:* `#14B8A6`, `#F43F5E`, `#0EA5E9`. *Shrift:* Instrument Sans 700.

### 5.11 Logo dizayn tamoyillari (hamma variant uchun)

Trend tadqiqoti: OpenAI blossom (aylanma simmetriya, bitta modul takrorlanadi), Claude spark (organik, nur), Vercel uchburchak (bitta qattiq shakl, ekstrudga tayyor), Linear (gradient yuzali qiyshiq disk), Arc (o'ralgan lenta), Framer (modul qismlar), Perplexity (geometrik chiziqlar), Raycast (diagonal qatlamlar). Umumiy qoidalar:

1. **Modullik:** 2-4 qism, har biri SVG da `id` bilan: animator va 3D rassom bir faylni bevosita ishlatadi.
2. **Aylanma yoki oyna simmetriya:** loop animatsiya o'z-o'zidan chiqadi (Sezi 90, Ulvi 120 gradus).
3. **Ekstrudga tayyor:** gradient va soya yo'q, faqat tekis shakllar; 3D da qalinlik, material va yorug'lik qo'shiladi.
4. **Bir rangda ishlash:** har logoning `_mono.svg` versiyasi `currentColor` bilan, yorug' va qorong'i fonda ishlaydi.
5. **16 px:** qalin shakllar, 24 px dan ingichka detal yo'q (taxtada 16/32 px ko'rinish bor).
6. **Klishe yo'q:** chiziqli quloq, qo'l emoji, oddiy gap pufagi ishlatilmadi.

---

## 6. Taqqoslash jadvali

| # | Nom | Qisqa | Jarang | Esda | Talaffuz | Salbiy yo'q | Konflikt yo'q | Mavjud | Hikoya | **Jami** | .uz | Eng yaxshi handle |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Sezi | 9 | 8 | 8 | 8 | 8 | 8 | 5 | 9 | **63** | b? | `seziapp` (tg) |
| 2 | Yuvel | 8 | 8 | 8 | 8 | 8 | 7 | 9 | 7 | **63** | b? | `yuvel` (tg), `yuvel-app` (gh) |
| 3 | Tilo | 9 | 8 | 8 | 9 | 8 | 6 | 5 | 9 | **62** | b? | `tiloapp` (tg) |
| 4 | Ondu | 9 | 7 | 7 | 9 | 9 | 8 | 5 | 6 | **60** | b? | `onduapp`, `ondu-app` |
| 5 | Velu | 9 | 8 | 7 | 9 | 9 | 7 | 5 | 5 | **59** | b? | `veluapp`, `velu-app` |
| 6 | Oyna | 9 | 7 | 8 | 7 | 8 | 7 | 3 | 9 | **58** | B | `oynaapp`, `oyna-app` |
| 7 | Navo | 9 | 8 | 8 | 9 | 9 | 5 | 1 | 9 | **58** | B | yo'q |
| 8 | Kivo | 9 | 9 | 9 | 9 | 8 | 3 | 2 | 8 | **57** | B | yo'q |
| 9 | Ulvi | 9 | 7 | 7 | 7 | 8 | 8 | 5 | 6 | **57** | b? | `ulviapp`, `ulvi-app` |
| 10 | Teyva | 8 | 8 | 7 | 7 | 8 | 5 | 8 | 5 | **56** | b? | `teyvaapp`, `teyva-app` |

Logo va nom alohida tanlanishi mumkin: masalan "Tilo" nomi + "Peshtoq" logo, yoki "Sezi" + "Subtitr shar".

---

## 7. Tavsiya

1. **Sezi** (+ "To'rt yaproq" yoki "Subtitr shar" logosi). Eng muvozanatli: qisqa, jarangdor, konflikt deyarli yo'q, turkiy auditoriyaga chuqur ma'no ("sezish"), qolganlarga toza ixtiro. Kamchilik: `.com/.org/.app` band, shuning uchun `sezi.uz` + `sezi.app` ni keyin sotib olish yoki `getsezi.com` kerak.
2. **Yuvel** (+ "Ochiq kristall"). Eng yaxshi mavjudlik: `.org`, `.app`, `.uz`, Telegram `yuvel`: hammasi bugun bo'sh ko'rinadi. Global bozor uchun eng tayyor ("you" + "jewel"). Kamchilik: o'zbekcha ma'nosi yo'q, YVEL zargarlik brendi bilan talaffuz yaqinligi.
3. **Tilo** (+ "Subtitr shar"). Eng kuchli hikoya: "til" va "tillo": har bir til oltin. Kamchilik: kichik Tilo ilovalari bor, qidiruvda raqobat.

Zaxira: **Ondu**: eng toza (salbiy ma'no ham, kuchli konflikt ham yo'q), lekin hikoyasi zaifroq.

Qaror qabul qilishdan oldin: kar jamiyati bilan sinov (8-bo'lim) natijasi rubrikadan muhimroq. Kar odamlar uchun nomning **daktilda ko'rsatilishi** va **imo-ishora nomi** (sign name) qanchalik chiroyli chiqishi hal qiluvchi bo'lishi mumkin.

---

## 8. Keyingi qadamlar

1. **Kar jamiyati bilan nom sinovi** (1-2 hafta): top-5 nom va top-5 logo bilan 15-20 kishi (kar, eshitishda nuqsoni bor, tarjimonlar, eshituvchi oila a'zolari). Savollar: birinchi taassurot, daktilda ko'rsatish osonligi, qanday imo-ishora nomi berardingiz, salbiy assotsiatsiya bormi. O'zbekiston kar jamiyati va hududiy bo'limlari orqali; Deaf-led boshqaruv tamoyiliga ko'ra yakuniy ovoz ularda.
2. **Ona tilidagi sleng tekshiruvi:** rus, qozoq, qirg'iz, tojik, turk tilidan 2 tadan odam (yoshlar slengi ham), yozma tasdiq.
3. **Trademark qidiruvi (qo'lda):**
   - WIPO Global Brand Database: `branddb.wipo.int` (CAPTCHA bor, qo'lda), 9, 38, 42, 44, 45 sinflar (Nitstsa tasnifi: dasturiy ta'minot, telekommunikatsiya, IT xizmatlar, tibbiy/ijtimoiy xizmatlar).
   - O'zbekiston: Intellektual mulk agentligi (IMA, `ima.uz`) reyestri.
   - Rossiya (Rospatent / FIPS), Qozog'iston (Kazpatent) reyestrlari.
4. **Trademark ro'yxatdan o'tkazish:** avval O'zbekiston IMA da milliy ariza (9, 38, 42, 45 sinflar), keyin **Madrid tizimi** (WIPO) orqali Qozog'iston, Qirg'iziston, Tojikiston, Rossiya va kerak bo'lsa EUIPO. Notijorat bo'lsa ham trademark nomni boshqalar egallab olishidan himoya qiladi.
5. **Domen va handle band qilish** (qaror qabul qilingan kuni, bir vaqtda, chunki tekshiruv izi qoldiradi): `.uz`, `.app`, `.org` (bo'sh bo'lsa), GitHub org (`nom-app` yoki `nomhq`), Telegram (`nomapp` + kanal), Instagram, YouTube, X, TikTok. `.com` uchun egasidan narx so'rash (broker orqali, notijorat ekanini aytib).
6. **Brend gid (v0):** tanlangan logoning 3D modeli (Blender), 5 soniyalik intro animatsiya, rang va shrift tokenlari, yorug'/qorong'i va kontrast (WCAG AA) tekshiruvi, daktil va imo-ishora nomini video bilan hujjatlash.

---

## 9. Manbalar

Mavjudlik tekshiruvi (2026-11-15, xom natija 4.7-bo'limda):
- RDAP: `rdap.verisign.com`, `rdap.publicinterestregistry.org`, `pubapi.registry.google`; `.uz`: `whois.cctld.uz:43`; GitHub REST `users/{login}`; `t.me/{username}`.

Konflikt va trademark:
- Kivo: https://www.cbinsights.com/company/kivo-1, https://app.dealroom.co/companies/kivo_7, https://apps.apple.com/ke/app/kivo-crm/id6475719810, https://trademarks.justia.com/903/94/kivo-90394319.html, https://markinton.com/trademark/kivo-99445654
- Tilo: https://apps.apple.com/app/id6743889220, https://chrome.google.com/webstore/detail/gettilo/mlolmhhkamgcegbkejcjbmblnaijffic, https://play.google.com/store/apps/details?id=com.tilo.app, https://www.cbinsights.com/company/tilo
- Oyna: https://mwm.ai/apps/oynachi/6762111876
- Velu: https://www.bevnet.com/brands/velu/allimages, https://startups.startupmission.in/startups/0eezL
- Yuvel / YVEL: https://en.wikipedia.com/wiki/YVEL, https://trademarkdir.com/owner/yvel-ltd
- Teyo: https://markinton.com/trademark/teyo-79432001, https://markinton.com/trademark/appteyo-99260108
- Navo: https://apps.apple.com/us/app/navo/id6446790580, https://www.zoominfo.com/c/navo/345952322
- Zuvi (chiqarildi): https://gleanmark.com/owner/zuviinc, https://www.cbinsights.com/company/zuvi-1
- Ovira (chiqarildi): https://blackbird.vc/portfolio/ovira, https://trademark.justia.com/owners/ovira-pty-ltd-4324179
- Ondu (o'xshashlar): https://onde.app, https://www.producthunt.com/products/jondu-offline-budget-expense-tracker/makers
- WIPO Global Brand Database: https://branddb.wipo.int (avtomatik so'rovga CAPTCHA, qo'lda tekshirish kerak)

Nomlash va logo nazariyasi:
- Bouba/kiki effekti: Ramachandran va Hubbard (2001), "Synaesthesia: A window into perception, thought and language".
- Brend nomlari kelib chiqishi: kompaniyalarning ochiq manbalari (Vercel = vertex/cell, Figma = figure, Claude = Claude Shannon), Telegram username qoidalari (min. 5 belgi, Fragment auksioni).
