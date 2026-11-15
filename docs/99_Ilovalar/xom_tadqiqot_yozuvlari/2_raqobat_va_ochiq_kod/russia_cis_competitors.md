# Competitor dossier: Deaf / hard-of-hearing communication products and services in Russia and the CIS (status November 2026)

Research date: 2026-11-15, about 55 tool calls (web search and fetch). This file builds on `research_notes/Karlar uchun muloqot platformasi/russia_cis_ecosystem.md`. It does not repeat that file's dataset and law findings (Slovo, Bukva, Logos, 84 hours a year, the 2026 e-certificate, K-RSL). Store data comes from page snapshots fetched on 2026-11-15 unless a date is given.

Status legend:
- **ALIVE**: updated in 2025-2026 or confirmed operating in 2025-2026.
- **UNVERIFIED**: no evidence after 2023.
- **DEAD/DORMANT**: last evidence is old and nothing current was found.

---

## 1. Russia: remote human sign-interpreting apps (video relay / VRI dispatch centres)

### Takeaway
Every Russian app that reached deaf users is a thin client over a human interpreter dispatch centre: video call, then the interpreter voices a phone call or a face-to-face conversation. "AI" (subtitles, an avatar) is a secondary feature. Store footprints are tiny. The two live apps have about 9k Android installs (Moi RZhYa) and 19 iOS ratings (Surdo-pomosh). Complaints are about reliability and wait times, not features. Paid-subscription apps with "AI sign translation" are rated very low.

### Cited Findings

**SURDO-POMOSH (СУРДО-ПОМОЩЬ): Laboratoriya "Sensor-Tekh" (OOO "Sensor-Tekh"), director Denis Kuleshov. ALIVE.**
- **Launch and platforms.** Presented in December 2024 with RFRIT (Russian Foundation for IT Development) as a free platform: a website plus iOS and Android apps — [hi-tech.mail.ru 12.12.2024](https://hi-tech.mail.ru/news/119310-v-rossii-sozdali-pervoe-besplatnoe-prilozhenie-dlya-obsheniya-s-gluhimi/)
- **Features.** Video calls to a sign-interpreting call centre; speech to text; a virtual assistant "Dasha" who translates sign to speech and back. Dasha was trained on 150,000 gestures using motion capture. A live specialist joins by video when needed. Intended for doctors' offices and MFCs — [hi-tech.mail.ru](https://hi-tech.mail.ru/news/119310-v-rossii-sozdali-pervoe-besplatnoe-prilozhenie-dlya-obsheniya-s-gluhimi/)
- **Targets.** Algorithms to handle over 80% of requests by 2025, at least 1 million requests a year, then expansion to the Russian-speaking CIS — [hi-tech.mail.ru](https://hi-tech.mail.ru/news/119310-v-rossii-sozdali-pervoe-besplatnoe-prilozhenie-dlya-obsheniya-s-gluhimi/)
- **AI share.** The company claims "more than half of user requests are processed by AI algorithms". It also says the gesture base grew to 150k within a year and a network recognises gestures by movement trajectory. It was a nominee in the "Sdelano v Rossii 2024" award — [snob.ru 11.10.2024](https://snob.ru/made-in-russia/surdo-pomoshch-nominatsiia-nauka-i-tekhnologiis-premiia-sdelano-v-rossii-2024/)
- **Support quote.** RFRIT CEO Aleksandr Pavlov called it "unique, fully Russian". The press release was distributed by the deafblind foundation "So-edinenie" — [www1.ru 17.12.2024](https://www1.ru/news/2024/12/17/v-rossii-razrabotali-po-dlia-sozdaniia-subtitrov-v-realnom-vremeni-servis-surdo-pomoshh.html)
- **App Store (id6445996571):**
  - free, iOS 16+, 126.9 MB, login via VK or Apple ID
  - rated 4.2 from 19 ratings (an earlier search snapshot showed 4.1 from 9)
  - version history: 1.0 on 22.05.2024, 1.0.1 on 03.10.2024, 1.0.2 on 24.09.2025, then 1.0.3 and 1.0.4 (push notifications, "19 Oct")
  - live interpreters are available only "during their working hours"; the schedule is not published
  - Source: [App Store](https://apps.apple.com/ru/app/%D1%81%D1%83%D1%80%D0%B4%D0%BE-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C/id6445996571?l=en-GB)
- **Review themes:**
  - Praise for the human interpreters: "Прекрасное приложение!) Благодарю переводчиков РЖЯ, помогают в любых ситуациях!" One reviewer used it at an MFC and in shops.
  - Avatar failure: virtual "Dasha" "just stands there" after the user taps "жесты", then switches off.
  - Outage: "нет соединения с интернетом" for a week despite a working connection.
  - Source: [App Store](https://apps.apple.com/ru/app/%D1%81%D1%83%D1%80%D0%B4%D0%BE-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C/id6445996571?l=en-GB)
- **Conflict on hours.** The App Store says working hours only. A 2023 RIA report (per a search summary) said 24/7. Treat 24/7 as unconfirmed.
- **Not found:** Google Play or RuStore install counts, the interpreter headcount, how interpreters are paid (grant vs state certificate), and open source (no GitHub found).

**"Moi RZhYa" (Мой РЖЯ, package com.interpreter_android.ru): OOO "Tsentr Kommunikatsionnykh Tekhnologiy" (TsKT). ALIVE.**
- **RuStore listing:** free, 9k+ downloads, rated 4.3 from 29 ratings. Last update v5.1.0 on 04.11.2026 ("technical update, no new features").
- **Services advertised:**
  - 24/7 access to a dispatch centre of sign-language interpreters
  - emergency-service calls
  - phone calls made on the user's behalf
  - text documents adapted into sign-language video
  - "double encryption"
  - Source: [RuStore](https://www.rustore.ru/catalog/app/com.interpreter_android.ru)
- **Reviews:** a complaint that in an emergency "Однажды я звонила 10 минут" (nobody answered); update failures ("обновить ни как"); short positives ("Да нравится") — [RuStore](https://www.rustore.ru/catalog/app/com.interpreter_android.ru)
- An earlier search snapshot showed 4.2 from 26 ratings and 7k+ downloads, so the app is growing slowly — [RuStore recommendation page](https://www.rustore.ru/catalog/app/com.interpreter_android.ru/recommendation)
- Payment model and interpreter headcount are not stated.

**Surdofon (Сурдофон / Surdophone): OOO "Surdofon", built by i20 Group, venture fund "Lomonosov Kapital". DORMANT/UNVERIFIED.**
- Four modes: speech to sign, TTS, a WebRTC video call to a dispatch centre, and 112. About 40k Google Play installs and a 4.3 rating in the 2017 case study — [ruward.ru case 2017](https://ruward.ru/cases/1024/)
- Searches in 2026 returned no store page, news or update after 2017. Its status is unknown (likely dormant).

**SurdoRu (СурдоРу, com.SurdoRu.surdoru): individual developer Vitaliy Pegov. ALIVE but poorly rated.**
- **Pitch:** converts the speech of people nearby into RSL. Android 6+, 1k+ downloads, rated 2.5 from 8 ratings, v13.0 on 03.08.2026 ("access errors fixed").
- **Pricing:** a 30-day trial, then a monthly subscription. Reviewers cite 990 to 1,000 RUB a month.
- **Reviews:** "Ужасно"; "Не работает."; a login loop; "distorted image" and poor gesture quality. Reviewers say they had to pay 990 RUB just to enter.
- The developer replied defensively to a review in June 2026 ("she never logged in").
- Source: [RuStore](https://www.rustore.ru/catalog/app/com.SurdoRu.surdoru)

**Cloud Interpreter ("Облачный переводчик"). DEAD/UNVERIFIED.**
- Russian cloud service with professional interpreters "at any moment", on web, iOS and Android. Used at Bauman MSTU for deaf students. It planned a US presentation in April 2016. The article is dated 25.03.2016 — [mel.fm](https://mel.fm/novosti/5401872-cloud)
- Cloud Interpreter estimated the remote video-interpreting market in Russia and the CIS at RUB 300-400 million a year — [Vedomosti 01.12.2017](https://www.vedomosti.ru/management/articles/2017/12/01/743808-programmist-veteran-afganets-surdoperevodchik)
- No post-2017 evidence was found.

**"Surdo-online" (Сурдо-онлайн): founders Sergey Makhashev and Aleksey Melnik. B2B remote-interpreting terminals. UNVERIFIED after 2017.**
- Started selling in autumn 2016. Revenue was about RUB 500k a month.
- **Interpreters:** 2 in Russia (from home, RUB 45k a month) and 8 in Kazakhstan (office, 100k tenge, about RUB 17.5k).
- **Pricing:** installation RUB 30-100k plus a monthly fee. A pharmacy chain paid RUB 20k a month for 5 pharmacies; the first contract (Gemotest) was RUB 600k.
- **State channel in 2017:** the state paid for 358,000 free interpreting hours a year at RUB 700 per hour (about RUB 250M a year). A government order of 09.11.2016 made VOG the sole provider of in-person interpreting. VOG regional dispatch centres used Skype.
- A competitor, Speakus, left the niche because state tenders went to VOG.
- Source: [Vedomosti 2017](https://www.vedomosti.ru/management/articles/2017/12/01/743808-programmist-veteran-afganets-surdoperevodchik)
- **Uzbekistan link:** the same "surdo-online" tablet name appears in Uzbekistan's public service centres (see section 9). This is possibly the same vendor; not verified.

**VOG regional remote interpreting (state-paid). ALIVE, but fragmented.**
- Omsk SFR: sign interpreting "can be received online, by phone video call", and those hours are paid by the Fund — [SFR Omsk 19.12.2023](https://sfr.gov.ru/branches/omsk/news~2023/12/19/258395)
- Amur SFR: the SFR refers the person to the regional VOG branch within 5 working days, up to 84 hours a year — [SFR Amur 24.09.2026](https://sfr.gov.ru/branches/amur/news/~2026/09/24/284968)
- No national 24/7 VOG video-relay centre was found. Each region runs its own (Sverdlovsk since 2019 per the prior file).
- Moscow "Moi Dokumenty" centres: staff connect a dispatch-service RSL interpreter via laptop (2020) — [mos.ru](https://www.mos.ru/news/item/81874073/) (per a search summary; the page was not fetched)
- Moscow region 112: 4 sign interpreters; deaf callers could use Skype "Help112mo" (the year is not shown) — [riamo.ru](https://riamo.ru/news/obschestvo/funktsiyu-priema-vyzovov-ot-invalidov-po-rechi-v-sisteme-112-oblasti-zapustyat-v-2016-g-xl/)
- Regional 112 SMS: the Mari El 2019 guidance says to text 112 stating "text only", using codes 01 fire, 02 police, 03 ambulance, 04 gas — [mari-el.gov.ru PDF](https://mari-el.gov.ru/upload/sovetsk/ronga/DocLib22/20191203_1.pdf)
- Moscow region: more than 190k SMS calls had reached 112 (date not verified) — [riamo.ru](https://riamo.ru/news/obschestvo/bolee-190-tys-vyzovov-po-sms-postupilo-v-sistemu-112-moskovskoj-oblasti-xl/)
- No federal SMS or video 112 for deaf people was found.

### Inferences
- The moat is not the app but the interpreter supply and who pays for it. In Russia the money flows through SFR and VOG. Private apps either live on grants (Surdo-pomosh via RFRIT), sell B2B (Surdo-online), or die (Cloud Interpreter, Surdofon).
- The highest-value features in reviews are a human interpreter who answers quickly and works in MFC or shop situations. Avatars draw the only negative feature reviews ("Dasha stands still").
- The "Moi RZhYa" emergency complaint (a 10-minute wait) shows that promising 24/7 without staffing is worse than published hours.

### Gaps
- Google Play install counts for Surdo-pomosh and Moi RZhYa: Google Play pages were not retrieved.
- Whether Moi RZhYa or Surdo-pomosh accept the 2026 SFR e-certificate.
- Surdofon's death date.
- Owners of TsKT (Moi RZhYa).

---

## 2. Russia: telecom operators, banks and Big Tech

### Takeaway
In 2024-2026 the big players shipped AI call-to-text "secretaries" (T-Bank in November 2024, MTS in March 2026) and human RSL video consultations inside banking apps (Sber, T-Bank, and Beeline via Sber). These are free and tied to the company's own customers. They have far more reach than any deaf-specific startup: MTS handled about 496k calls in 6 months, Sber over 1,000 RSL video calls a month, and Yandex Razgovor has 200k+ RuStore installs. Yandex Razgovor's Android source is on GitHub.

### Cited Findings

**MTS, "Sekretar dlya glukhikh i slaboslyshashchikh" + "Zvonok v chat". ALIVE.**
- **Launch:** 10.03.2026.
- **How it works:** the AI tells the caller the subscriber is hard of hearing. The subscriber gets a push in "Moi MTS" and a chat opens. The caller's speech is transcribed in real time, and the subscriber's typed reply is voiced by TTS.
- **Price:** free for all MTS subscribers in all regions.
- **Tech:** proprietary MTS VoiceTech inside the network.
- **Limits:** incoming calls only, as described.
- Source: [iphones.ru](https://www.iphones.ru/iNotes/teper-pozvonit-smogut-dazhe-gluhie-mts-zapustil-zapustil-sekretarya-dlya-gluhih-i-slaboslyshashchih)
- **Usage, March-August 2026:** more than 496,000 calls. Typical user: a man aged 35-44 in Moscow or a big city. Calls by region: Moscow and the region 19%, Yekaterinburg 9%, Krasnodar 7%. Top uses: relatives, banks, deliveries — [mobile-review](https://mobile-review.com/all/?p=259570)
- **Other MTS assets:** the KION online cinema offers films with sign-language interpretation (14 titles at the time of the report) — [mobile-review](https://mobile-review.com/all/?p=136951)

**T-Bank, AI phone secretary for deaf users. ALIVE.**
- Launched 08.11.2024. It answers incoming calls (including unknown numbers), transcribes them and blocks spam via T-Zashchita.
- Free across Russia on any mobile operator. Activated by typing "Секретарь для глухих" in support chat, with a video instruction in RSL.
- Built with the T-Bank AI centre, T-Mobile, and the deaf service **DEAFON**, on **Yandex AI Studio**.
- Sources: [kod.ru](https://kod.ru/ii-sekretar-dlya-glukhikh-i-slaboslyshashchikh); [Habr](https://habr.com/ru/news/857050)

**T-Bank, RSL support line. ALIVE (status checked 2025).**
- Launched 14.04.2025 and staffed only by deaf and hard-of-hearing employees who are native RSL users. The customer types "РЖЯ" in chat and gets a video-call link.
- Available in the app and on the web, Monday to Friday, 10:00-19:00 Moscow time. Before this, deaf customers could only write.
- Source: [Habr 17.04.2025](https://habr.com/ru/post/901868); search summary of [T-Bank news](https://www.tbank.ru/about/news/14042025-t-bank-launches-support-service-in-russian-sign-language) (the page itself failed to fetch: SSL error)

**Sber, RSL video consultations. ALIVE.**
- 16 staff RSL interpreters. Help is available in branches (via a staff tablet) and the contact centre — [Habr](https://habr.com/ru/post/901868)
- Free; per a search summary of Habr, launched "five years ago" (around 2020) — [Habr](https://habr.com/ru/post/901868)
- Sverdlovsk example: RSL video consultations in 180 Sber offices (2022) — [eanews](https://www.eanews.ru/ekaterinburg/20220922171400/videokonsultatsii-na-zhestovom-yazyke-teper-dostupny-v-180-ofisah-sbera-v-sverdlovskoy-oblasti)
- Sber says its RSL interpreters take over 1,000 video calls a month — [gazeta.ru 03.12.2025](https://www.gazeta.ru/business/news/2025/12/03/27328525.shtml) (via search summary)
- **Beeline + Sber (December 2025):** deaf visitors to Beeline offices nationwide get free RSL consultations from Sber interpreters. Beeline staff connect via tablet; customers use SberBank Online, search "видеозвонок", then "Продолжить на жестовом языке". Beeline gave interpreters a telecom glossary and typical-request scripts — [gazeta.ru 03.12.2025](https://www.gazeta.ru/business/news/2025/12/03/27328525.shtml) (via search summary; the body did not fetch)

**MegaFon and Tele2 (T2). Nothing current.**
- Tele2 launched a deaf tariff with the Moscow VOG in 2017: RUB 250 a month for 10 GB and 500 SMS, Moscow only — [mobile-review 2017](https://mobile-review.com/articles/2017/oper-news-07-2017.shtml)
- In 2019 Tele2 said it had social tariffs with charities, including one for deaf users — [ComNews 2019](https://www.comnews.ru/content/119429/2019-04-30/vympelkom-napolnil-socialnyy-paket)
- No MegaFon deaf service was found. No current T2 deaf tariff was found.

**VTB, chat-bot with an RSL avatar. UNVERIFIED in 2026.**
- Launched May 2023 with NSTU NETI and the company "Adaptis". It uses *prepared* (pre-rendered) translation rather than synchronous translation, for accuracy on money topics. The avatar has a 5,000+ sign dictionary (Adaptis director Maksim Nechay) — [Habr](https://habr.com/p/733914); [NSTU release 06.05.2023](https://nstu.ru/reliz_get?id=147801)
- NSTU called it the first synchronous RSL avatar in 2022, when it translated a materials-science course — search summary of the [NSTU release](https://www.nstu.ru/reliz_get?id=142801)
- NSTU also targets RSL to speech; about 5,000 signs are needed for about 90% accuracy — [rbc.ru](https://www.rbc.ru/life/news/654e03b99a794740e24f93a9)

**Yandex.**
- **Yandex Razgovor: pomoshch glukhim** (`ru.yandex.subtitles`, OOO Yandex). ALIVE.
  - Speech to text, typed reply to TTS, ready phrases, saved dialogues. Russian only, one interlocutor, quiet places — [App Store](https://apps.apple.com/my/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D1%80%D0%B0%D0%B7%D0%B3%D0%BE%D0%B2%D0%BE%D1%80-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C-%D0%B3%D0%BB%D1%83%D1%85%D0%B8%D0%BC/id6443816148?l=ms)
  - RuStore: 200k+ downloads, 44k+ in the last month, rated 4.0 from 89 ratings. v27.2 on 05.11.2026 added offline recognition, "Dialog" and "Monolog" modes, folders, and font/theme settings — [RuStore](https://www.rustore.ru/catalog/app/ru.yandex.subtitles)
  - Reviews: "Идея очень хорошая, но сырая, часто не распознает с первого раза"; repeated requests for a bigger font; "как я жил раньше без него" — [RuStore](https://www.rustore.ru/catalog/app/ru.yandex.subtitles)
  - Belarus: over 30k conversations started in a year — [myfin.by 22.05.2026](https://myfin.by/article/blogi/v-belarusi-adaptirovali-16-servisov-dla-ludej-s-osobennostami-zrenia-sluha-reci-i-mobilnosti-45731)
- **Open source:** [github.com/yandex/deaf](https://github.com/yandex/deaf), "Android App for Deaf". It is the Yandex.Talk (Razgovor) Android Studio project: 23 commits, 34 stars, 10 forks. The licence is in the LICENSE file (type not captured). It depends on the SpeechKit SDK under separate terms — [GitHub](https://github.com/yandex/deaf)
- **Yandex Go (taxi):** deaf-driver mode with a light signal instead of sound; 186 deaf drivers in Belarus in 2025 — [myfin.by](https://myfin.by/article/blogi/v-belarusi-adaptirovali-16-servisov-dla-ludej-s-osobennostami-zrenia-sluha-reci-i-mobilnosti-45731)
- **Kyrgyzstan (October 2025):** driver training translated into sign language, with text-based onboarding — [kaktus.media](https://kaktus.media/doc/532547_iandeks_go_adaptiroval_servis_taksi_dlia_glyhih_voditeley.html)
- **Kinopoisk:** 78 films with SDH subtitles (Belarus figure) — [myfin.by](https://myfin.by/article/blogi/v-belarusi-adaptirovali-16-servisov-dla-ludej-s-osobennostami-zrenia-sluha-reci-i-mobilnosti-45731)
- **No Yandex sign-language translation product was found.**

**Kontur.Tolk (SKB Kontur video conferencing).** Deaf users ran a webinar on it in May 2026 and said online transcription plus seeing the RSL interpreters is what matters — [kontur.ru](https://kontur.ru/press/news/85605-gluxie_polzovateli_proveli_vebinar_v_konturtolke)

### Inferences
- The MTS and T-Bank "call-to-chat" pattern is high-volume and cheap: about 500k calls in 6 months for one operator, with no interpreter cost. For Uzbekistan this is the fastest win, but it needs operator integration (Uzmobile, Beeline UZ, Ucell, Mobiuz) or a SIP or virtual-number approach.
- The T-Bank model, with deaf native signers as staff, earns trust and gives deaf people jobs. A non-profit can copy it: deaf operators for deaf-to-organisation tasks, hearing interpreters only for voice relay.
- Yandex Razgovor's open Android code is a reusable starting point for an Uzbek speech-to-text conversation app. The licence and SpeechKit dependency must be checked; the ASR engine would be replaced with an open Uzbek ASR.

### Gaps
- Gazeta.ru Sber/Beeline text (the fetch failed); Sber's exact 2020 launch date.
- MegaFon: no data.
- Whether VTB's avatar is still live in 2026.
- How DEAFON operates as its own service (no page found).
- The yandex/deaf licence type and last commit date.

---

## 3. Russia: AI, avatar and learning products (beyond the earlier Sber dataset findings)

### Takeaway
AI sign products in Russia remain prototypes or narrow avatar deployments. They include SignLab (Zuzex, an internal prototype), the VTB/Adaptis avatar (prepared translation), the Surdo-pomosh "Dasha" avatar (users report it freezing), and signflow.ru. signflow.ru is a *dictionary*, not a translator. Learning apps are small, single-developer or museum projects.

### Cited Findings
- **signflow.ru** (Sber + SberDevices + ANO DPO "Center for Sign Language Education and Research"):
  - a video dictionary of about 400 signs (about 660 words) for RSL learners
  - positioned as an improved replacement for spreadthesign.com, which is blocked in Russia
  - Source: [Habr Sber](https://habr.com/ru/companies/sberbank/news/846240)
  - At AI Journey, Sber showed an internal model recognising over 2,500 signs, including fingerspelling and compound signs; this is not the public model — [iXBT](https://www.ixbt.com/live/comments/3274281)
- **SignLab (Zuzex, Novosibirsk/Barnaul outsourcing company):**
  - an internal project started in 2022 that converts signing video to text
  - the company's own case study calls it a "working prototype"; claimed directions are a mobile version, a sign trainer, and text-to-avatar
  - no clients or metrics
  - Sources: [ruward case 2025](https://ruward.ru/cases/8432/); [zuzex.com](https://www.zuzex.com/projects/sign-language-interpreter)
- **RSL learning apps:**
  - "Russkiy Zhestovyy Yazyk" (Razeeman, Android): rated 4.9 from 14 ratings, 3k+ downloads on RuStore (per a search summary) — [BlueStacks mirror](https://www.bluestacks.com/campaign/com.razeeman.study.russiansignlanguage/en)
  - "Davay zhestami" (iOS): RSL video dictionary, themed courses and grammar — [mwm.ai](https://mwm.ai/apps/app/6761060993)
  - "Muzey na RZhYa: detyam" (Garage Museum): art-terms dictionary for children — [App Store](https://apps.apple.com/it/app/%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D0%BD%D0%B0-%D1%80%D0%B6%D1%8F-%D0%B4%D0%B5%D1%82%D1%8F%D0%BC/id1478126901)
  - "Repka-RZhYa": bilingual app for deaf children aged 3-7, free — [App Store](https://apps.apple.com/us/app/%D1%80%D0%B5%D0%BF%D0%BA%D0%B0-%D1%80%D0%B6%D1%8F/id1186916447)
  - No official VOG online course or app was found.
- **Not found** as products: "Zhestoved", "Govoryashchie ruki", "Yasno", "Zhest", "SignRu" (searches returned nothing relevant).
- **Deafblind ("Ladon"):** no app called "Ladon" was found. The So-edinenie foundation runs leisure centres and YouTube training videos, and describes the "pod ladon" palm fingerspelling method — [So-edinenie search results](https://www.sostav.ru/publication/fond-so-edinenie-zapustil-onlajn-proekt-o-zhizni-na-oshchup-35630.html). It also distributed the Surdo-pomosh press release — [www1.ru](https://www1.ru/news/2024/12/17/v-rossii-razrabotali-po-dlia-sozdaniia-subtitrov-v-realnom-vremeni-servis-surdo-pomoshh.html)
- **Workforce context:** about 1,000 sign interpreters in Russia vs a need of about 5,000 (from an HSE-hosted commercial presentation; weak source) — [olymp.hse.ru PDF](https://olymp.hse.ru/mirror/pubs/share/879758297.pdf). The official job title has been "perevodchik russkogo zhestovogo yazyka" since 2012 — [hh.ru](https://hh.ru/article/30955)

### Inferences
- A good open video dictionary is still missing: spreadthesign is blocked in Russia, and signflow has only about 400 signs. For Uzbek, an open, CC-licensed dictionary with a regional-variant field is a low-cost, high-trust first module.
- Avatars should use prepared translation for fixed content (bank FAQs, government forms) and not live translation. That is VTB's reasoning, and the Surdo-pomosh reviews confirm live avatars disappoint.

### Gaps
- Store numbers for most learning apps.
- Any Russian deafblind communication app (none found).
- Whether TV channels use avatars: no Russian TV avatar deployment was found (Kazakhstan has one, see section 4).

---

## 4. Kazakhstan

### Takeaway
The state funds 60 hours a year of sign-language specialist services, applied for via eGov. That is lower than Russia's 84, and a spending moratorium freezes any increase until 2029. A Komek-103 Telegram bot sends text to ambulances in 11 regions, but interpreters say nobody uses it. The TV channel Jibek Joly airs AI-avatar Kazakh Sign Language cartoons (SignBridge, ENU, May 2025). No consumer video-relay app was found.

### Cited Findings
- **60 hours a year.** The annual sign-interpreting limit is counted from the moment the interpreter leaves home, including travel and online time. An interpreter says "Нужно хотя бы на 10 часов больше". Interpreters are assigned and paid via the social services portal, and remote interpreting is by video call only — [TengriHealth 10.06.2026](https://tengrihealth.kz/article//daze-zapis-vracu-kvest-kazaxstancy-naruseniem-sluxa-4136/)
- **eGov.** Since September 2024, guardians of incapacitated adults can apply online for 8 services, including "sign language specialist services, 60 hours a year". The path is eGov.kz, then "Социальное обеспечение", then "Поддержка лиц с инвалидностью", signed with an EDS — [bizmedia.kz 25.09.2024](https://bizmedia.kz/2024-09-25-novaya-usluga-dlya-lyudej-s-ogranichennymi-sposobnostyami-poyavilas-na-egov/md/)
- **Legal basis.** 2023 Rules on sign-language specialist services under the individual habilitation/rehabilitation programme — [zakon.uchet.kz](https://zakon.uchet.kz/rus/docs/V2300032992)
- **Emergency.** About 90% of 103 calls for deaf people are made by interpreters; one interpreter has made 30+ calls in 7 years. A Telegram bot linked to "Komek-103" works in 11 regions, per the Ministry of Health, but the interpreter interviewed "never heard of it". The Damumed health app is hard to use (complex login, bureaucratic terms) — [TengriHealth](https://tengrihealth.kz/article//daze-zapis-vracu-kvest-kazaxstancy-naruseniem-sluxa-4136/)
- **Numbers:**
  - 21,103 people with hearing or speech impairment under medical supervision (Ministry of Health); NGOs say over 30k, about 5k of them children
  - 221 surdopedagogues
  - Source: [TengriHealth](https://tengrihealth.kz/article//daze-zapis-vracu-kvest-kazaxstancy-naruseniem-sluxa-4136/)
  - 4,576 children with diagnosed hearing impairment (early 2026); 185 deaf university students — [economist.kg 16.06.2026](https://economist.kg/society/2026/06/16/kazakhstan-zhestovyy-yazyk-status.md)
  - In 2017 only 3,600 of about 30k deaf people received interpreting — [Vedomosti 2017](https://www.vedomosti.ru/management/articles/2017/12/01/743808-programmist-veteran-afganets-surdoperevodchik)
- **Law.** The Mazhilis approved giving Kazakh sign language state-language status, and the Senate holds a similar position. The bill was sent to the government over funding, and the parliament term ended on 01.07.2026. PM Bektenov cited a moratorium on new social spending (resolution of 24.09.2025) until 31.12.2028, so a review of the 60 hours is pushed to 2029 at the earliest — [economist.kg](https://economist.kg/society/2026/06/16/kazakhstan-zhestovyy-yazyk-status.md)
- **TV avatar: Jibek Joly + SignBridge (ENU).**
  - Since 19.05.2025, AI 3D-avatar Kazakh Sign Language interpretation of cartoons, starting with "Fiksiki"; the pipeline is speech to text to signs in real time
  - Project lead: Dr Nurzada Amangeldy (ENU AI department)
  - Motivation: Astana has only 5-6 sign specialists covering several channels. The channel says AI is "exclusively an auxiliary tool". About 5k deaf children are the audience.
  - Source: search summaries of [inform.kz](https://www.inform.kz/ru/na-telekanale-jibek-joly-zapushen-ii-surdoperevodchik-dlya-detey-ce881b) (403 on fetch) and [tengrinews](https://tengrinews.kz/kazakhstan_news/kazahskiy-surdoperevod-pomoschi-ii-zapustili-detey-570512/); [silkwaytv](https://silkwaytv.kz/en/kazakhstan-to-air-cartoons-with-kazakh-sign-language-translation-using-ai_55102)
- **Khabar + Satbayev University** are launching AI avatars for automated sign interpreting (2026) — [economist.kg](https://economist.kg/society/2026/06/16/kazakhstan-zhestovyy-yazyk-status.md)
- **ISSAI TilSync** (Nazarbayev University, 05.09.2025): live speech-to-text with translation and an always-on-top subtitle overlay in Kazakh, Russian and English. It is aimed partly at hearing-impaired audiences. Open-source status is not stated — [ISSAI](https://issai.nu.edu.kz/?p=62139)
- **Saran (2023):** in-person sign-specialist consultations at the eGov self-service corner of the city social department — [gov.kz](https://www.gov.kz/memleket/entities/social-saran/press/article/details/121818)
- **Not found:** an app named "Saryn"; any Kazakh consumer video-relay app.

### Inferences
- Kazakhstan shows the risk of relying on state hours: the budget freeze lasts to 2029. A non-profit Uzbek platform should not depend on a state voucher to exist; it should be ready to plug into one.
- The Komek-103 bot failing to reach users is a strong warning. Distribution through the deaf community (associations, interpreters) matters more than the channel tech.

### Gaps
- SignBridge code openness and the number of signs.
- Komek-103 bot username and usage.
- Kazakh remote-interpreting providers' names.

---

## 5. Kyrgyzstan and Tajikistan

### Takeaway
Kyrgyzstan has a UNDP-backed *prototype* online platform, "Zhansoo tilinin kotormochusu" (Sign Language Interpreter), shown in June 2026. Tajikistan recognised sign language in law in December 2025 and has no product.

### Cited Findings
- **Kyrgyzstan:**
  - In June 2026, a Bishkek meeting (the Ministry of Labour, Social Security and Migration, the Kyrgyz Society of the Blind and Deaf, and UNDP) presented a prototype online platform for remote interpreting. The society's chair Kanat Zhaparov said technology must come with stronger interpreter status — [UNDP ru](https://www.undp.org/ru/node/588326); [UNDP ky](https://www.undp.org/ky/node/588326) (via search summary; 403 on fetch)
  - 2018 amendments to the disability law created legal provisions for sign interpreters; UNDP has run interpreter courses since 2016 — [UNDP](https://www.undp.org/ru/node/498191)
  - The Ombudsman's 2024 report found a shortage of interpreters with legal training slows trials — [kaktus.media](https://kaktus.media/doc/531826_v_kyrgyzstane_nehvatka_syrdoperevodchikov_s_uridicheskim_yklonom_zatiagivaet_processy_v_sydah.html)
  - Kyrgyzstan mainly uses RSL — [UNDP](https://www.undp.org/ru/node/498191)
  - The Dilgir education app is covered in the prior file. See also [UNDP mobile apps story](https://www.undp.org/kyrgyzstan/news/how-mobile-applications-have-opened-doors-children-hearing-loss)
- **Tajikistan:**
  - On 17.12.2025, language-law amendments recognised sign language as a means of communication and provided for specialist training — [WFD](https://wfdeaf.org/?p=19272)
  - Figures from 2018: more than 30k deaf people, 1,112 deaf children in boarding schools — [avesta.tj 2018](https://avesta.tj/2018/10/17/v-dushanbe-obsuzhdayut-problemy-vnedreniya-i-obucheniya-zhestovogo-yazyka)
  - No app or service was found.

### Inferences
- Kyrgyzstan's UNDP prototype is the closest peer and the most natural open-source collaboration target: same language family (RSL), donor-funded, not yet launched.

### Gaps
- Kyrgyz platform tech, URL, and whether it is open source.
- Any Tajik deaf association digital service.

---

## 6. Belarus

### Takeaway
A state-funded BelOG 24/7 dispatch centre has run in Minsk since 2016 (Skype, SMS, Viber). Interpreting is free through territorial social centres: 2,700 users in 2025 and 12,200 over 5 years. A national interpreter professional standard was drafted in December 2025. No dedicated app was found; Yandex Razgovor fills the text gap.

### Cited Findings
- **Minsk centre (September 2016):** run by the Minsk regional BelOG and funded by the Minsk city executive committee. It operates 24/7: users reach interpreter-operators by Skype video, SMS or Viber, and the operators phone services and report back. At launch it served Minsk residents only — [pravo.by 05.09.2016](https://pravo.by/novosti/obshchestvenno-politicheskie-i-v-oblasti-prava/2016/september/21065/)
- **Usage:** 2,700 people with hearing disability used sign interpreters in 2025, and 12,200 over 5 years — [pravo.by 10.12.2025](https://www.pravo.by/novosti/obshchestvenno-politicheskie-i-v-oblasti-prava/2025/december/91329/)
- **Professional standard:** public discussion of a draft "Sign language interpreter" professional standard ran 27.11-27.12.2025 — [pravo.by](https://pravo.by/novosti/obshchestvenno-politicheskie-i-v-oblasti-prava/2025/december/91506/)
- **Free provision:** territorial social service centres provide interpreting for free (2018) — [NLB digest](https://press.nlb.by/upload/iblock/64c/resp06122018.pdf)

### Inferences
- The Minsk model (one 24/7 city-funded dispatch over off-the-shelf messengers) is the minimal viable state service. It proves you can start on Viber or Telegram plus interpreters before building an app.

### Gaps
- Whether the Minsk centre became national or moved off Skype (Skype was shut down by Microsoft in May 2025; the replacement channel is unknown).

---

## 7. Ukraine

### Takeaway
Ukraine has the most mature *private* video-relay app in the region: "Perekladach ZhM" (Sign Language Interpreter). It runs 24/7 with an SOS shortcut to the State Emergency Service (DSNS), is rated 4.8 from 71 ratings on iOS, and has been updated continuously since 2021. Ukraine also has BeWarned/Connect (text and sound alerts), PrivatBank sign video consultations, and a sign-interpreter option for Diia online marriages.

### Cited Findings
- **Perekladach ZhM (Перекладач ЖМ, App Store id1303476708):**
  - App Store: developer listed as "Interactive Group FZC", free, rated 4.8 from 71 ratings, 24/7 interpreter on request
  - Features: emergency calls, calls to state and commercial organisations, face-to-face use, job interviews and study, text and video content translated to sign, events, group meetings
  - Versions run from 3.2.1 (17.09.2021) to 4.6.9 (11.06.2025) and 4.6.12 ("22 Sep")
  - Reviews: "Супер, дуже класний додаток"; "Это приложение реально помогает людям..."; "Дуже-дуже дякую!"
  - Source: [App Store UA](https://apps.apple.com/ua/app/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA-%D0%B6%D1%8F/id1303476708?l=uk)
  - dev.ua (04.12.2023): created by Vitaliy Potapchuk's "Tekhnologii dlya lyudey". The SOS section has a DSNS shortcut, and the interpreter relays to rescuers "absolutely free" — [dev.ua](https://dev.ua/news/zastosunok-perekladach-zhm-1701682817)
  - **Conflict:** the store developer (Interactive Group FZC, a UAE free-zone entity) and the dev.ua attribution (Potapchuk) differ. The App Store URL slug "perevodchik-zhya" suggests the app was originally Russian-named "Переводчик ЖЯ".
- **BeWarned / Connect (Vitaliy Potapchuk, deaf founder; co-founder Sergey Malyukov):**
  - 2013 idea, 2014 Sound Monitor prototype; 2016 platform with Sound Monitor, Connect (type to TTS, reply as text), Emergency Call and Dance (music to vibration and light)
  - 2017: Connect PRO terminal for banks, taxis and shops
  - iOS only per vikna.tv
  - Sources: [DOU](https://dou.ua/lenta/articles/dou-projector-bewarned/); [life.pravda 2017](https://life.pravda.com.ua/society/2017/06/27/224992/); [vikna.tv 2022](https://vikna.tv/styl-zhyttya/bezbaryerne-spilkuvannya-mobilni-zastosunky-yaki-dopomagayut-lyudyam-z-porushennyam-movlennya-sluhu-ta-zoru/)
- **PrivatBank (01.10.2024):** Ukrainian Sign Language video consultation in Privat24 (Komunikatsii, then Konsultatsiya zhestovoyu movoyu). Staff learned sign over about 3 months with the All-Ukrainian Association of Sign Language Interpreters. 18 clients used it in the first 2 test days. Context: about 2.1M Ukrainians with hearing impairment (WHO), about 230k primary signers — [vikna.tv](https://vikna.tv/styl-zhyttya/pryvatbank-zaprovadyv-videokonsultacziyi-zhestovoyu-movoyu-yak-skorystatys-poslugoyu/)
- **Diia:** online marriage with a free sign-language interpreter on request, built by the Ministry of Justice and the Ministry of Digital Transformation with Swiss support (via search summary) — [kyivpost](https://www.kyivpost.com/uk/post/87911)
- **Ministry of Youth and Sports (19.12.2025):** a tool to make online services accessible to hearing-impaired users, details not retrieved — [mms.gov.ua](https://mms.gov.ua/news/minmolodsport-rozshyriuie-tsyfrovu-bezbariernist-onlain-servisy-staly-dostupnishymy-dlia-liudei-z-porushenniamy-slukhu)
- **Ombudsman:** Ukrainian Sign Language still needs better legal regulation — [lb.ua](https://lb.ua/blog/dmytro_lubinets/768326_zalishiti_nikogo_bik.html)

### Inferences
- Perekladach ZhM is the best functional template in the CIS: 24/7 interpreters, an SOS shortcut to emergency services, use cases beyond calls (interviews, events, document-to-sign video), and very high ratings. Its 4.8 rating vs Moi RZhYa's 4.3 and Surdo-pomosh's 4.2 suggests staffing and response time drive ratings.
- Moi RZhYa (package `com.interpreter_android.ru`, "dispatch centre", "document adaptation to sign video") has a feature list that closely mirrors Perekladach ZhM's. **Hypothesis, unverified:** the same white-label platform serves both markets.

### Gaps
- Perekladach ZhM funding (state, donor or operator), interpreter headcount, call volumes, Google Play installs.
- The Kharkiv 2021 app named in the brief was not found.
- "Spilno" was not found.

---

## 8. Azerbaijan, Georgia, Armenia

### Takeaway
All three run state video-relay services over common messengers or video tools rather than custom apps:
- Azerbaijan: "Let Us Be Your Voice", WhatsApp or Telegram plus video, Monday-Saturday 09:00-16:00, nearly 1,000 users, cited by WHO as a best practice.
- Georgia: 112 SMS and video for deaf users, with UNDP and Swiss support.
- Armenia: Yerevan city and the Armenian Deaf Society remote interpreting centre, weekdays 09:00-18:00.
- Azerbaijani banks (Birbank) add in-app sign video calls.

### Cited Findings
- **Azerbaijan, "Let Us Be Your Voice" / "Be Our Voice"** (State Medical-Social Expertise and Rehabilitation Agency, Ministry of Labour and Social Protection):
  - the citizen contacts an operator by video call or message, and the operator-interpreter contacts the third party
  - hours: Monday-Saturday 09:00-16:00; contact by WhatsApp or Telegram on 055 213 19 97
  - usage grew across successive ministry reports: more than 30, then about 300, more than 400, more than 650, and nearly 1,000 users
  - recognised as a WHO best practice
  - Sources: [sosial.gov.az launch](https://sosial.gov.az/en/media/news/for-the-first-time-in-our-country-an-online-sign-language-interpretation-service-based-on-video-communication-has-been-launched-8300); [nearly 1000](https://sosial.gov.az/en/media/news/nearly-1000-people-have-benefited-from-the-let-us-be-your-voice-online-sign-language-interpretation-service-9584); [WHO best practice](https://sosial.gov.az/en/media/news/ministrys-online-sign-language-interpretation-service-recognised-as-best-practice-by-the-world-health-organization-8794) (search summaries; the site refused connections on fetch, so dates are not confirmed)
- **Birbank (24.09.2025):** an in-app sign-language video call, weekdays 09:00-18:00. Staff are bank employees trained in a 3-month, 72-hour sign course, not professional interpreters — [AZERTAG](https://azertag.az/en/xeber/__birbank_revolutionizes_barrier_free_banking_launching_sign_language_video_call_service-3763259)
- **Nar (mobile operator):** supports jestdili.az, an Azerbaijani Sign Language online dictionary, and the JestPlus learning app — [nar.az](https://www.nar.az/en/news/jest-dili-mobil-tetbiqi/)
- **Georgia:**
  - 112 runs a free SMS and video-call service only for deaf and hard-of-hearing citizens, built with UNDP and the Swiss government; the Deaf Union of Georgia co-designed it — [MIA](https://mia.police.ge/en/112-gkhedavt-sms-da-video-zaris-servisi-mkholod-kru-da-smenadaqveitebuli-pirebistvis/7938?print=1) (search summary; the fetch was refused)
  - Full-time sign interpreters at 112 use Skype-style video, chosen over costlier hardware. 112 won the EENA Innovative Service award in 2016. The Public Service Development Agency lets citizens apply for passports and IDs via video — [GovInsider](https://govinsider.asia/intl-en/article/exclusive-georgia-using-video-chat-sign-language-inclusive-services-emergency-service-112)
- **Armenia:**
  - Yerevan municipality runs a free video-call translation centre for people with hearing impairment, weekdays 09:00-18:00 — [yerevan.am](https://www.yerevan.am/en/news/tesazangov-t-argmanowt-yown-lsoghowt-yan-khndirner-ownets-ogh-k-aghak-ats-ineri-hamar)
  - The Armenian Deaf Society set up a remote interpreting centre for communication with public institutions, clinics, banks and social services (EU-supported story) — [EU Neighbours East](https://euneighbourseast.eu/news/stories/breaking-the-barriers-to-build-an-inclusive-society-for-the-deaf-in-armenia/) (403 on fetch; search summary)

### Inferences
- Across the CIS, the cheapest proven state model is a messenger-based dispatch: WhatsApp, Telegram, Viber or Skype plus a few interpreters with published hours. Azerbaijan went from launch to about 1,000 users without a custom app. An open-source Uzbek platform could offer this dispatch backend (queue, interpreter roster, call logging, consent, stats for the funder) as its core product.

### Gaps
- Exact launch dates and interpreter counts for Azerbaijan, Georgia and Armenia.
- Whether Georgia's 112 moved off Skype after its shutdown.

---

## 9. Telegram bots and the Uzbekistan baseline

### Takeaway
No Russian-language Telegram bot that does sign-language translation was found. Existing bots do voice-message transcription (SberDevices SmartSpeech, Silero, open aiogram projects). The only deaf-specific bot found is Kazakhstan's Komek-103 ambulance text bot. Azerbaijan uses Telegram and WhatsApp as the intake channel for human relay. Uzbekistan already has a state "surdo-online" tablet relay in public service centres.

### Cited Findings
- **SberDevices SmartSpeech Telegram bot:** free transcription of Russian voice messages and files up to 20 MB, usable in groups — [Habr SberDevices](https://habr.com/ru/articles/658575)
- **Silero bot:** free speech to text — [vc.ru](https://vc.ru/324877-telegram-bot-silero-besplatno-perevodit-rech-v-tekst)
- **Open-source aiogram voice/video-note transcription bot** — [GitVerse](https://gitverse.ru/integer/voice-to-text-telegram-recognition)
- **Yandex Cloud** tutorial for a SpeechKit recognition bot — [Yandex Cloud docs](https://yandex.cloud/en/docs/speechkit/tutorials/recognizer-bot)
- **Kazakhstan Komek-103 Telegram bot** (text to ambulance, 11 regions) — [TengriHealth](https://tengrihealth.kz/article//daze-zapis-vracu-kvest-kazaxstancy-naruseniem-sluxa-4136/)
- **Uzbekistan baseline:**
  - "surdo-online" tablets in Ministry of Justice public service centres: staff connect via tablet to a dispatcher-interpreter who interprets live
  - pilot in November 2020 in 11 Tashkent centres, now in all 14 regional units
  - Navoi region: about 1,698 hearing- or speech-impaired residents, about 1,300 of whom need public services
  - plans to extend to all public service centres and civil registry (ZAGS) offices
  - Source: [yuz.uz 25.04.2023](https://yuz.uz/ru/news/tsentr-gosuslug-otdela-yustitsii-goroda-navoi-vvel-novy-vid-servisa-dlya-lyudey-s-invalidnostyu-so-sluxom)

### Inferences
- A Telegram-first Uzbek bot is open ground in the CIS: text intake, a voice-message to text reply, and a "call me an interpreter" button that hands off to a WebRTC link. Telegram is dominant in Uzbekistan, and the Komek-103 lesson says distribution must go through the deaf associations.
- The existing Uzbek "surdo-online" state relay means the platform should integrate with or complement it, not duplicate it. The pitch to the Ministry of Justice: an open-source replacement for the dispatcher side, with stats.

### Gaps
- The operator of Uzbekistan's surdo-online relay (vendor, hours, interpreter count): not researched here.
- Any Uzbek or Russian-language deaf Telegram bot with sign content (none found).

---

## 10. Cross-market lessons: what to copy, adapt or avoid

### Takeaway
- **Copy** the human-relay core (24/7 or clearly published hours, an SOS shortcut, MFC and shop use cases), deaf native signers as staff, and AI call-to-text for phone calls.
- **Adapt** the messenger-first state dispatch (Azerbaijan, Belarus) into an open-source dispatch backend, and use the open Yandex Razgovor code as a speech-to-text starting point.
- **Avoid** paid subscriptions (SurdoRu, rated 2.5), live AI avatars as the main promise (complaints about Dasha freezing), and 24/7 promises without the staffing behind them (the Moi RZhYa 10-minute emergency wait).

### Cited Findings
- **Highest ratings and praise** go to the human-interpreter apps: Perekladach ZhM at 4.8 from 71 ratings — [App Store UA](https://apps.apple.com/ua/app/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA-%D0%B6%D1%8F/id1303476708?l=uk); Surdo-pomosh's praise is for "переводчиков РЖЯ" — [App Store](https://apps.apple.com/ru/app/%D1%81%D1%83%D1%80%D0%B4%D0%BE-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C/id6445996571?l=en-GB)
- **Lowest ratings** go to paid AI translation: SurdoRu at 2.5, RUB 990 a month — [RuStore](https://www.rustore.ru/catalog/app/com.SurdoRu.surdoru)
- **Volume** comes from AI call-to-text bundled by big carriers: MTS about 496k calls in 6 months — [mobile-review](https://mobile-review.com/all/?p=259570); Yandex Razgovor 200k+ installs — [RuStore](https://www.rustore.ru/catalog/app/ru.yandex.subtitles)
- **Private remote-interpreting businesses died or pivoted** when state money went to VOG (Speakus left; Cloud Interpreter is silent) — [Vedomosti 2017](https://www.vedomosti.ru/management/articles/2017/12/01/743808-programmist-veteran-afganets-surdoperevodchik)
- **Open source among competitors:** only Yandex Razgovor (Android) — [github.com/yandex/deaf](https://github.com/yandex/deaf). Sber publishes models and data (prior file). No relay app in the region is open source.

### Inferences
- **Positioning gap:** there is no open-source, non-profit, multi-country relay platform in the CIS. Every relay is either proprietary (Surdo-pomosh, Moi RZhYa, Perekladach ZhM) or a state service on Skype or WhatsApp. An open-source dispatch backend, Telegram and web front ends, and Uzbek and Russian ASR would be unique, and could be offered to the Kyrgyz UNDP project, Azerbaijan and Belarus.
- **Funding lesson:** in Russia, the 2026 e-certificate (prior file) creates a voucher market. In Kazakhstan, the 60-hour budget is frozen to 2029. Design the platform to log billable interpreter minutes per user, so it can bill any future Uzbek voucher or donor, but run on donor or operator money first.

### Gaps
- No store reviews were obtained from Google Play (pages not fetched). Review themes rely on App Store and RuStore only.
- Interpreter wait-time statistics were not published by any provider.
