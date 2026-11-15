# Tilo - belgi (logo) tizimi: 5 yo'nalish

Sana: 2026-11-15. Nom: **Tilo** (tilo.io, Telegram @tiloapp). Belgi asosi: Ondu uchun chizilgan "To'lqin" (`../logos/07_ondu.svg`): ikki yarim halqa S-to'lqin hosil qiladi, ustida nuqta. To'lqin = harakat, suhbat, imo-ishora ritmi; ikki yarim = ikki alohida qism, harakatda ajraladi va qayta qo'shiladi.

Fayllar:

- `tilo_logo_board.html` - bitta lokal sahifa: 5 variant, animatsiya tugmalari (Intro / Idle / Tinglash / O'tish), lockup, qurilish, mono, telefon ekranida ilova belgisi, favicon 16/32 (haqiqiy piksel), palitra + WCAG, yorug'/qorong'i almashtirgich. Tashqi resurs faqat Google Fonts (Lexend).
- `tilo_logo_board.png`, `tilo_logo_board_dark.png` - headless Chrome skrinshotlari (1440 px).
- `svg/NN_nom_mark.svg`, `_mono.svg` (currentColor), `_icon.svg` (1024, yumaloq kvadrat, fon bilan), `_favicon.svg` (64, belgi kattaroq), `_lockup_light.svg`, `_lockup_dark.svg`. Jami 30 fayl.
- `src/geo.py` (geometriya), `src/build.py` (hamma narsani qayta yaratadi: `python src/build.py`).

## Umumiy qoidalar (5 variantga ham tegishli)

- **Qurilish:** hamma egri chiziq aniq aylana yoyi (SVG `A` buyrug'i), Bezier taxmini yo'q. Har qism tashqi kontur sifatida yozilgan (stroke emas), shuning uchun 3D ga to'g'ridan-to'g'ri ekstrud qilinadi.
- **Qismlar:** har faylda `#tilo-mark` ichida `#arc-left`, `#arc-right`, `#dot` (03 da qo'shimcha `#knot`). Animator ularni alohida siljitadi, 3D rassom alohida ekstrud qiladi.
- **Joint (birikma):** ikki yarim o'rtada vertikal urinma bilan uchrashadi (G1 uzluksizlik), chegara gorizontal to'g'ri chiziq. Bir rangli ko'rinishda anti-alias "chok" chizig'i chiqmasligi uchun chap yarimga keyingi qism ostida yashirin 1.5 birlik til (tab) qo'shilgan.
- **Uchlar:** tashqi uchlar yumaloq (01, 02, 03, 05) yoki to'g'ri kesim (04); joint uchlari doim tekis, shuning uchun ikki rangli birikmada bo'rtiq yo'q.
- **Nuqta:** erkin aylana bir xil qalinlikdagi chiziqdan optik kichik ko'rinadi, shuning uchun nuqta diametri chiziq qalinligidan ~7% katta (01: r32 vs w60).
- **Markazlash:** belgi 512 maydonda geometrik markazlangan, keyin nuqta og'irligini muvozanatlash uchun 4-8 birlik chapga siljitilgan (optik markaz).
- **So'z belgisi "tilo":** shrift emas, maxsus chizilgan monoline kichik harflar: x-balandlik H, `t` 1.30H, `l` 1.40H, `o` 2% overshoot, uchlar yumaloq (belgi bilan bir mantiq). Harflar oralig'i optik: t-i 0.26H, i-l 0.30H, l-o 0.24H. Chiziq qalinligi variantga qarab 0.17H-0.235H. Lockup'da x-balandlik to'lqin balandligining 0.52 qismi, markazi to'lqin o'qida; belgi va so'z orasida 0.5 x to'lqin balandligi.
- **UI matni shrifti:** Lexend (Google Fonts, bepul). Sabab: o'qish qulayligi uchun ilmiy asosda ishlab chiqilgan (Lexend loyihasi), kirill va lotinni qo'llaydi, monoline so'z belgisi bilan uyg'un.
- **Kontrast:** palitrada har rang uchun "qog'oz" foniga nisbat hisoblangan. 4.5:1 dan yuqori = matn uchun AA; 3:1 dan yuqori = katta matn va grafika (WCAG 1.4.11); undan past = faqat bezak (masalan oltin nuqta). Hisob: WCAG 2.x nisbiy yorqinlik formulasi, `src/build.py` dagi `cr()` funksiyasi.
- **Harakat tokenlari:** expo `cubic-bezier(.16,1,.3,1)`, spring `cubic-bezier(.34,1.56,.64,1)`, in-out `cubic-bezier(.65,0,.35,1)`, sine `cubic-bezier(.37,0,.63,1)`. `prefers-reduced-motion` bo'lsa faqat intro holatining oxiri ko'rsatiladi.

---

## 01 Geometrik - asl g'oyaning toza qurilishi

**G'oya.** Ondu belgisining o'zi, lekin har o'lcham qoida bilan tanlangan. Eng tinch va eng universal variant.

**Qurilish.** Markaz chiziq radiusi R = 78, qalinlik w = 60. Ichki teshik diametri 2R - w = 96 = 1.6w (oltin nisbat ~1.618 ga yaqin): bo'shliq va chiziq "oltin" munosabatda. Ikki aylana markazi orasi 2R = 156. Nuqta r = 32, tashqi uch bilan oraliq = w/2. To'lqin balandligi 2R + w = 216, eni 4R + w = 372. Qurilish chizmasi taxtada ("qurilish" panel): markazlar, uchta aylana (tashqi, markaz, ichki), to'lqin tepasi/o'qi/tubi chiziqlari, nuqta o'qi.

**Palitra.**

| Rol | Hex | Qog'ozga (#F7F5F0) | Daraja |
|---|---|---|---|
| Primary (Tilo teal) | `#0B7A67` | 4.83:1 | AA matn |
| Accent 1 (Suv) | `#1497B8` | 3.13:1 | grafika / katta matn |
| Accent 2 (Tillo) | `#F2A81D` | 1.85:1 | faqat bezak (nuqta) |
| Neutral (Siyoh) | `#15171C` | 16.46:1 | AA matn |

Qorong'i rejim: `#34C9A8` / `#4FD3F0` / `#F6B93B` fon `#101214` ustida (primary 9.00:1).

**Harakat.** Intro 1100 ms: yarimlar o'z aylanasi markazi atrofida 180 gradus aylanib, ikki tomondan 70 px kirib uchrashadi (760 ms, expo), nuqta 560 ms dan keyin tushadi (520 ms, spring). Idle 4.8 s: yarimlar 5 px ajralib-qo'shiladi, nuqta 6 px suzadi. Tinglash: har yarim vertikal amplituda 0.78-1.08 (audio daraja kabi, 150 ms faza siljishi), nuqta 1.3x puls, 900 ms sikl. O'tish 1800 ms: o'ng yarim 2R chapga siljib chap yarim bilan to'liq "o" halqa bo'ladi, halqa 360 gradus aylanadi (yuklanish/ulanish holati), keyin to'lqinga qaytadi.

**3D.** Har qism alohida ekstrud: chuqurlik 0.35w, bevel 0.08w (3 segment). Mat-silk plastik (roughness 0.45), nuqta oltin metall (metalness 1, roughness 0.25). Softbox yuqori-chapdan + orqadan rim. Joint'da 0.5 birlik oraliq qoldiring (z-fighting).

**Kuchli tomoni:** eng aniq, eng ko'p joyda ishlaydi (16 px favicon, matbaa, animatsiya). "O" halqaga aylanish - tayyor yuklanish indikatori. **Zaif tomoni:** eng kam "xarakter", boshqa to'lqinli belgilarga o'xshash bo'lishi mumkin; ikki rang chegarasi kichik o'lchamda sezilmaydi.

## 02 Qo'l izi - kalligrafik, o'zgaruvchan qalinlik

**G'oya.** Chiziq qo'l harakati kabi ingichkadan qalinga, yana ingichkaga o'tadi: imo-ishora tilida harakatning "bosimi". Nuqta - "tegish nuqtasi", qo'l harakati tugaydigan joy.

**Qurilish.** Har yarim - ikki aylana orasidagi o'roq: tashqi aylana R 106, ichki aylana r 62 va uning markazi 26 birlik chapga siljigan. Natijada qalinlik 18 (uch) > 44 (tepa) > 70 (joint) > 44 > 18. O'ng yarim chap yarimning joint markazi atrofida 180 gradus aylantirilgani (nuqtaviy simmetriya), shuning uchun egri chiziq joint'da uzluksiz. Hamma kontur faqat aylana yoylari.

**Palitra.**

| Rol | Hex | Qog'ozga (#FAF6EE) | Daraja |
|---|---|---|---|
| Primary (Siyoh-indigo) | `#1F2A6B` | 12.16:1 | AA matn |
| Accent 1 (Tegish) | `#E04A2F` | 3.75:1 | grafika / katta matn |
| Accent 2 (Qum) | `#E9B949` | 1.69:1 | faqat bezak |
| Neutral (Qog'oz) | `#FAF6EE` | fon | - |

Qorong'i: belgi `#D6DAFF`, nuqta `#FF7A5C`, fon `#12131C` (13.50:1).

**Harakat.** Intro 1500 ms: iz markaz chizig'i bo'ylab "chiziladi" (mask, 1100 ms, in-out), keyin nuqta paydo bo'ladi va undan to'lqin halqa tarqaladi (700 ms). Idle 3.2 s: nuqtadan sekin halqa. Tinglash 1.1 s: halqalar tez-tez + nuqta 1.18x puls. O'tish 1600 ms: iz o'chadi va qayta chiziladi.

**3D.** Ekstrud emas, sweep: markaz chizig'i bo'ylab o'zgaruvchan radiusli quvur (taper 18 > 70 > 18). Lak bosilgan siyoh (clearcoat 1, roughness 0.15), nuqta yumshoq emissive.

**Kuchli tomoni:** eng insoniy va eng "premium" ko'rinish, qo'l/harakat hikoyasi to'g'ridan-to'g'ri. Bir rangli - matbaa va muhr uchun arzon. **Zaif tomoni:** 18 birlik uchlar 16 px da yo'qoladi (favicon'da to'lqin "vergul" kabi ko'rinadi); sweep 3D ekstruddan murakkab.

## 03 Uchrashuv - ikki odam, ikki rang, bitta tegish

**G'oya.** Ikki yarim - ikki odam (kar va eshituvchi). Ular bir-biriga qarab siljigan, yumaloq uchlari bir-birining ichiga kiradi. Kesishgan joy uchinchi rang: "tushunish" - ikkalasining aralashmasi.

**Qurilish.** R 78, w 52. Markazlar orasi 2R - 0.85w = 111.8 (oddiy to'lqinda 2R). To'rtta uch ham yumaloq. Kesishma `#knot` - o'ng yarim chap yarim shakli bilan kesilgan (clipPath), rangi multiply natijasi: `#6A4CF4 x #FF7A3D = #6A243A`. Taxtadagi jonli versiyada esa haqiqiy `mix-blend-mode: multiply` (izolyatsiyalangan guruhda), shuning uchun yarimlar siljiganda kesishma ham jonli o'zgaradi. Mono versiyada kesishma o'rniga 14 birlik oq chiziq (mask) - ustma-ust tushish ko'rinadi.

**Palitra.**

| Rol | Hex | Qog'ozga (#F6F4FF) | Daraja |
|---|---|---|---|
| Primary (Kar odam) | `#6A4CF4` | 4.88:1 | AA matn |
| Accent 1 (Eshituvchi) | `#FF7A3D` | 2.38:1 | faqat bezak / katta grafika emas |
| Accent 2 (Tegish) | `#6A243A` | 10.02:1 | AA matn |
| Neutral (Tun) | `#16132B` | 16.61:1 | AA matn |

Qorong'i: `#8B74FF` / `#FF8D57`, nuqta `#FFC9A8`, fon `#110E1F` (primary 5.46:1). Diqqat: to'q sariq oq fonda 3:1 dan past - u faqat belgi ichida, matn yoki tugma rangi sifatida ishlatilmaydi.

**Harakat.** Intro 1200 ms: ikki odam ±120 px dan yaqinlashadi (spring), tegishda multiply rang paydo bo'ladi, nuqta oxirida. Idle 5.2 s: navbat bilan gapirish - avval chap, keyin o'ng yarim 4 gradus egiladi. Tinglash 1.4 s: navbatma-navbat 1.06x ko'tariladi ("kim gapiryapti" indikatori, video qo'ng'iroqda juda foydali). O'tish 1300 ms: 46 px ajralib qayta uchrashadi.

**3D.** Yarimlarni Z bo'yicha 0 va +6 birlikda ekstrud qiling, kesishmani shisha (transmission 0.9, IOR 1.45) bilan almashtiring - tegish joyi nur o'tkazadi.

**Kuchli tomoni:** hikoya eng aniq (ikki odam, uchrashuv), "kim gapiryapti" holati uchun tabiiy animatsiya. **Zaif tomoni:** 3 rang + nuqta = eng murakkab; 16 px da kesishma loyqalanadi; to'q sariq kontrasti past.

## 04 Lenta - to'liq siluet, kesilgan lenta

**G'oya.** To'lqin og'ir, to'liq lenta: hamma uchlar to'g'ri kesim, ikki yarim o'rtada ingichka kesim bilan ajralgan (ikki qism - ajralib qo'shiladi). Eng kuchli siluet: ilova belgisi, stiker, 3D.

**Qurilish.** R 76, w 84 (= 1.1R), ichki teshik r 34. Uchlar va joint gorizontal to'g'ri kesim (kesim chizig'i va aylananing aniq kesishmasi hisoblangan). Joint kesim oralig'i 10 birlik: chap yarim 5 birlik yuqorida, o'ng yarim 5 birlik pastda. O'ng yarim bir tus to'q - lenta burilgandagi soya. Nuqta r 46 (eng katta, lenta og'irligiga mos).

**Palitra.**

| Rol | Hex | Qog'ozga (#F3F6F4) | Daraja |
|---|---|---|---|
| Primary (Zumrad) | `#007A5A` | 4.91:1 | AA matn |
| Accent 1 (Burma soya) | `#00573F` | 7.93:1 | AA matn |
| Accent 2 (Tillo) | `#F4B000` | 1.75:1 | faqat bezak (nuqta) |
| Neutral (Qora-yashil) | `#0C1411` | 17.17:1 | AA matn |

Qorong'i: `#1FC28F` / `#139A70`, fon `#0B1310` (8.23:1). Ilova belgisi: zumrad fon, oq + och-yashil lenta, oltin nuqta.

**Harakat.** Intro 1000 ms: yarimlar yuqori/pastdan kirib kesim bo'ylab yopiladi (spring), nuqta 1.4x dan joyiga tushadi. Idle 3 s: yarimlar kesim bo'ylab ±6 px qarama-qarshi siljiydi. Tinglash 600 ms: nuqta ekvalayzer kabi 18 px sakraydi. O'tish 1200 ms: 40 px ajralib, spring bilan "click".

**3D.** Eng yaxshi ekstrud shakli: chuqurlik 0.6w, bevel 10 birlik faqat tashqi qirrada, kesim yuzalari tekis. Zumrad keramika yoki silikon, nuqta oltin. Ilova uchun 30 gradus izometrik render.

**Kuchli tomoni:** 16 px da eng o'qiladigan, telefon ekranida eng ko'zga tashlanadi, 3D da eng "og'ir" va ishonchli. **Zaif tomoni:** chiziqli belgining nafisligi yo'qoladi; kichik ichki teshik matbaada to'lishi mumkin (minimal o'lcham 24 px).

## 05 Monogram - to'lqin "i" ga aylanadi

**G'oya.** O'ng yarim yuqoriga ko'tarilib "i" ustuniga aylanadi, nuqta - "i" ning nuqtasi. Belgi o'zi "~i" (tIlo dagi i). So'z belgisida "i" nuqtasi ham shu pushti rangda, "o" esa ikki yarimdan (ko'k + yashil) yig'ilgan: to'lqin yarimlari qo'shilsa "o" bo'ladi.

**Qurilish.** R 70, w 54. Ustun tepasi (yumaloq uchi bilan) to'lqin tepasi chizig'iga teng. Nuqta r 30, ustundan 0.62w oraliqda (so'z belgisidagi i-nuqta bilan bir xil nisbat).

**Palitra.**

| Rol | Hex | Qog'ozga (#F6F7FB) | Daraja |
|---|---|---|---|
| Primary (Ko'k) | `#2450F0` | 5.64:1 | AA matn |
| Accent 1 (Yashil) | `#0E9F73` | 3.15:1 | grafika / katta matn |
| Accent 2 (Nuqta) | `#E83E6C` | 3.68:1 | grafika / katta matn |
| Neutral (Siyoh) | `#0F1222` | 17.36:1 | AA matn |

Qorong'i: `#7290FF` / `#2BD9A0` / `#FF6F96`, fon `#0C0F1C` (6.49:1).

**Harakat.** Intro 1400 ms: harflar 60 ms oraliq bilan pastdan ko'tariladi, to'lqin yig'iladi, ikkala nuqta oxirida sakrab tushadi. Idle 2.4 s: nuqta kursor kabi 10 px sakraydi. Tinglash 1 s: nuqta subtitr kursori kabi miltillaydi (steps), to'lqin tebranadi - "jonli subtitr yozilyapti". O'tish 1800 ms: "o" yarimlari ajralib to'lqin shakliga o'tadi va qaytadi.

**3D.** Belgi va so'z bir tekislikda, 0.3w ekstrud; nuqta 1.2x chuqurroq va emissive.

**Kuchli tomoni:** nom va belgi orasida eng kuchli bog'lanish; subtitr kursori metaforasi mahsulotga (jonli captions) to'g'ri tushadi. **Zaif tomoni:** lockup'da "i" ikki marta ko'rinadi (belgida va so'zda), ikki rangli "o" kichik o'lchamda chalg'itadi; belgi yolg'iz tursa "ni" yoki "ui" deb o'qilishi mumkin.

---

## Tavsiya

**Asosiy belgi: 01 Geometrik. Ilova belgisi va 3D uchun sherik: 04 Lenta.**

Sabablar:

1. **O'qilishi.** 01 va 04 favicon'da (16 px) eng toza qoldi (taxtadagi piksel kattalashtirishlari). 02 ning ingichka uchlari va 03 ning kesishmasi 16 px da yo'qoladi.
2. **Tizim.** 01 va 04 bitta geometriyadan (ikki yarim halqa, bir xil joint mantiq) - 04 shunchaki "og'ir vazn". Bu bitta oilada ikki vazn: sayt/hujjat/animatsiya uchun 01, ilova ikonkasi/stiker/3D uchun 04.
3. **Harakat.** 01 ning "to'lqin > o halqa > to'lqin" o'tishi tayyor yuklanish va qo'ng'iroq ulanish holati; boshqa variantlarda bunday tabiiy holat yo'q.
4. **Kontrast.** 01 primary `#0B7A67` qog'ozda 4.83:1 (AA), qorong'ida 9.00:1; oltin faqat nuqta (bezak), matnga ishlatilmaydi.
5. **Hikoya.** Ondu DNK si to'liq saqlangan: ikki qism, harakat, nuqta. Tilo nomidagi "tillo" (oltin) nuqta rangiga ko'chdi.

Ikkinchi o'rin: **02 Qo'l izi** - agar brend ko'proq "insoniy, nafis" bo'lishi kerak bo'lsa (masalan, jamg'arma/xayriya taqdimotlari). 03 va 05 ning g'oyalari animatsiyada ishlatilsin: 03 dagi "navbat bilan gapirish" - video qo'ng'iroqdagi kim gapirayotgani indikatori, 05 dagi miltillovchi nuqta - jonli subtitr kursori.

Keyingi qadamlar: kar jamoasi vakillari bilan 01/02/04 ni ko'rsatib qisqa sinov; tanlangan variant uchun Figma komponentlari va Lottie eksporti; 3D render (Blender) 04 asosida.

## Tekshiruv

- Kirill harflari yo'qligi (Unicode U+0400 dan U+04FF gacha): `python -c "import re;t=open('TILO_LOGO.md',encoding='utf-8').read();print(len(re.findall(chr(91)+chr(0x400)+'-'+chr(0x4FF)+chr(93),t)))"` -> 0.
- Skrinshotlar: `chrome --headless=new --virtual-time-budget=6000 --window-size=1440,7200 --screenshot=... tilo_logo_board.html#light` (va `#dark`), keyin pastki bo'sh qism kesilgan.
- Ikki iteratsiyada tuzatilgan narsalar: 03 dagi uzun "zanjir" dumlari olib tashlandi (o'qilmas edi), 04 dagi qiya kesimlar to'g'ri kesimga almashtirildi (ichki teshikni buzayotgan edi), lockup'da so'z kichraytirildi (0.60 > 0.52) va belgidan uzoqlashtirildi (nuqta "t" ga yopishayotgan edi), bir rangli birikmalardagi anti-alias chok yashirin til bilan yo'qotildi, 05 so'z qalinligi oshirildi.
