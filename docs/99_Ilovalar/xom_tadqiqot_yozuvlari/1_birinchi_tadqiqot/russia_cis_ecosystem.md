# Sign-language technology, services and datasets in Russia and the CIS (status 2024-2026)

Research date: 2026-11-15. About 20 tool calls (web search + fetch). Uzbekistan is out of scope except where CIS projects include Uzbek data; none found.

## RSL datasets and models (Slovo, Bukva, Logos, TheRuSLan, K-RSL / FluentSigners-50, others) and their licenses

### Takeaway
SberDevices / SaluteDevices (ai-forever GitHub) is the main source of reusable RSL data and weights. Slovo (1,000 signs) and Bukva (fingerspelling alphabet) are openly downloadable under a *modified* CC BY-SA 4.0 licence. Logos (about 200k clips, 2,863 glosses, the largest RSL set) is released for academic research only, on request, although its code repo is Apache-2.0. Academic corpora (TheRuSLan, FluentSigners-50 / K-RSL) are small or restricted. Commercial use of any of them needs a licence check or a direct agreement with Sber.

### Cited Findings
**Slovo (SberDevices, 2023)**
- 20,400 RGB videos, 1,000 gesture classes, 20 samples per class, 194 signers. Split by signer: 15,300 train and 5,100 test, about 9.2 hours. Downloads: trimmed about 16 GB, originals about 105 GB, 360p about 13 GB, MediaPipe landmarks about 1.2 GB — [hukenovs/slovo GitHub](https://github.com/hukenovs/slovo)
- Licence: "a variant of Creative Commons Attribution-ShareAlike 4.0 International License". The exact terms are in `license/en_us.pdf` in the repo. The repo page does not say whether commercial use is allowed — [hukenovs/slovo](https://github.com/hukenovs/slovo); [ai-forever/slovo](https://github.com/ai-forever/slovo)
- The arXiv paper (2305.14527) is CC BY-SA 4.0 and states that the "proposed data and pre-trained models are publicly available" — [arXiv 2305.14527](https://arxiv.org/abs/2305.14527)
- Released models (ONNX and TorchScript):
  - MViTv2-small, best 64.09 at 32 frames
  - Swin-large, 55.66
  - ResNet-i3d, 43.91
  - SignFlow-A: 63.3 top-1 on WLASL-2000, 36M parameters
  - SignFlow-R: pre-trained on about 50k samples, 267 classes, 37M parameters, "tested with GigaChat"
  - Source: [hukenovs/slovo](https://github.com/hukenovs/slovo)
- Also mirrored on GitVerse (Russian GitHub alternative) — [gitverse.ru/ai-forever/slovo](https://gitverse.ru/ai-forever/slovo)
- Sber developer portal product page for Slovo. Announced June 2023 as "the largest RSL recognition dataset". SignFlow was billed as the first in Russia to translate isolated signs to words in real time. A GigaChat prototype was claimed as the "first in the world" for talking to an AI in RSL — [developers.sber.ru/portal/products/slovo](https://developers.sber.ru/portal/products/slovo); [Sber news 06.06.2023](https://developers.sber.ru/portal/news/dataset_dlya_rjya-06-06-2023); [Habr SberDevices](https://habr.com/ru/companies/sberdevices/articles/737018)

**Bukva (SberDevices, 2024): RSL fingerspelling alphabet**
- 3,757 RGB videos, more than 101 samples per alphabet sign (including dynamic letters), about 4 hours, about 27 GB. Split by user_id: 3,097 train and 660 test — [ai-forever/bukva](https://github.com/ai-forever/bukva)
- The paper reports 155 RSL signers — [arXiv 2410.08675](https://arxiv.org/html/2410.08675v1)
- Licence: the same "variant of CC BY-SA 4.0" (license/en_us.pdf). Direct public download from the SberCloud OBS bucket. Baseline MobileNetV2_TSM (9.1 MB, metric 83.6, ONNX) — [ai-forever/bukva](https://github.com/ai-forever/bukva)

**Logos (SaluteDevices, 2025)**
- 199,668 videos, 221.4 hours (104.7 hours of signing), at least 720p, 30 fps. 2,863 glosses grouped into 2,004 visually-similar-sign (VSSign) classes, 381 signers — [ai-forever/logos](https://github.com/ai-forever/logos); [arXiv 2505.10481](https://arxiv.org/html/2505.10481v2)
- Repo licence Apache-2.0, but the dataset is "released to universities and research institutes for academic research purposes only". Access by email to vision_rnd_ml@sberbank.ru — [ai-forever/logos](https://github.com/ai-forever/logos)
- Weights are public and directly downloadable: `logos_autsl_wlasl_model.pth` and `logos_stage1_model.pth`. Top-1 accuracy: Logos 0.9792, AUTSL 0.9781, WLASL 0.6682 — [ai-forever/logos](https://github.com/ai-forever/logos)
- The paper describes Logos as the largest RSL dataset and the most extensive ISLR dataset by number of signers. It positions Logos as a cross-language pre-train for other sign languages — [arXiv 2505.10481](https://arxiv.org/html/2505.10481v2)

**TheRuSLan (SPIIRAS / SPC RAS, St. Petersburg; Karpov, Kagirov, Ivanko, Ryumin, Axyonov), LREC 2020**
- RSL lexical units from one domain only: "food products at the supermarket". Recorded with Kinect 2.0 (Full HD plus depth). Billed as the first database of its kind for RSL — [LREC 2020 paper](https://aclanthology.org/2020.lrec-1.746)
- A 2022 follow-up reports 91.14% recognition accuracy on TheRuSLan. A 2023 ISPRS paper combines it with Turkish AUTSL for transfer learning — [sotaverified summary](https://sotaverified.org/papers/theruslan-database-of-russian-sign-language); [ISPRS 2023](https://isprs-archives.copernicus.org/articles/XLVIII-2-W3-2023/209/2023/isprs-archives-XLVIII-2-W3-2023-209-2023.pdf)
- No public download location or licence was found in search results.

**FluentSigners-50 (Kazakh-Russian Sign Language, K-RSL; Nazarbayev University / krslproject)**
- PLOS ONE 2022 paper: "A signer independent benchmark dataset for sign language processing". The article is CC BY — [PMC9467305](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9467305/); [NU repository](https://nur.nu.edu.kz/handle/123456789/9864)
- The Zenodo record (v1, 11 Feb 2022) is labelled "Dataset Restricted": files are only available to users granted access — [Zenodo 6043739](https://zenodo.org/record/6043739)
- The paper points to a project page at krslproject.github.io/FluentSigners-50. I could not verify its licence terms. The PMC page returned a bot check.

**Other RSL work**
- NGTU NETI (Novosibirsk) built a system that recognizes RSL signs and converts them to sound (Habr news) — [Habr](https://habr.com/ru/amp/publications/773624)
- RUDN journal article on AI-based RSL recognition and translation-system architecture — [journals.rudn.ru](https://journals.rudn.ru/linguistics/article/view/52496/ru_RU)
- Sber and an educational partner launched signflow.ru, a video dictionary of about 400 RSL signs meant as a learning resource (per search summary of Sber/Habr material) — [Habr Sber](https://habr.com/ru/companies/sberbank/news/846240)

### Inferences
- For an Uzbek startup, the most reusable assets are:
  - Slovo and Bukva data plus all released weights (Slovo MViT/SignFlow ONNX, Bukva TSM, Logos .pth). They can serve as pre-training or feature backbones, then be fine-tuned on Uzbek signs.
  - The Logos paper explicitly frames the model as a pre-train for other sign languages.
- Commercial-use risk:
  - The "variant" CC BY-SA licence on Slovo and Bukva must be read in full, because Sber modified the standard text. Treat it as unverified until the PDF is reviewed.
  - ShareAlike, even if the variant permits commercial use, would push derivative datasets to the same licence.
  - Logos data is academic-only. Weights are downloadable, but their licence status is ambiguous (repo Apache-2.0 vs. dataset academic-only).
- Fingerspelling (Bukva) is directly relevant because Uzbek deaf fingerspelling is Cyrillic-based. This is an assumption; verify with the Uzbek researcher.
- K-RSL (Kazakhstan) is linguistically close to RSL and is the closest CIS analog to the Uzbek situation. Its data is restricted, so access would require a partnership with NU.

### Gaps
- Exact text of the Slovo/Bukva "variant CC BY-SA" PDF (commercial clause) was not read.
- Licence of the released Logos weights is not stated separately.
- FluentSigners-50 size (videos, signers, hours) and the licence on its project page were not retrieved.
- No information found on an RSL corpus in Novosibirsk (the Burkova/Kimmelman RSL Corpus), Spreadthesign RSL licensing, or a dataset named "RuSLan" separate from TheRuSLan.
- No CIS dataset found that contains Uzbek sign data.

## Russian products and services (apps, relay/video interpreting, telecom, Big Tech, Gosuslugi, TV avatars)

### Takeaway
The Russian market is a mix of:
- small apps that combine human video interpreters with speech-to-text and "virtual interpreter" features (Surdo-pomosh, Surdofon, Cloud Interpreter);
- Sber's research and prototypes (SignFlow with GigaChat, a sign dictionary, and a 2025 deal giving Beeline deaf customers sign-language consultations);
- state-funded human interpreting through the Social Fund and VOG regional branches.

I found no evidence of a mass-market AI RSL translator in production as of 2026.

### Cited Findings
- **Surdo-pomosh** (LABORATORY SENSOR-TECH / OOO "Sensor-Tekh", iOS):
  - described as "the first Russian unified platform" for hard-of-hearing users;
  - features: video call with a live sign interpreter, speech-to-text, and an AI-based "virtual sign interpreter" that "knows RSL";
  - login via VK or Apple ID.
  - Sources: [App Store](https://apps.apple.com/us/app/%D1%81%D1%83%D1%80%D0%B4%D0%BE-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C/id6445996571). Mail.ru Hi-Tech calls it the first free app for communicating with deaf people: [hi-tech.mail.ru](https://hi-tech.mail.ru/news/119310-v-rossii-sozdali-pervoe-besplatnoe-prilozhenie-dlya-obsheniya-s-gluhimi/)
- **Surdofon** (OOO "Surdofon", manager Andrei Starkov, built by the i20 Group agency with the venture fund "Lomonosov Kapital"):
  - four modes: speech to sign language, text-to-speech, video call to the "Surdofon" interpreter dispatch center (WebRTC), and emergency 112;
  - about 40k Google Play downloads, rating 4.3;
  - the case study is dated 14 Feb 2017. No pricing was found, and I could not confirm the service is still active in 2024-2026.
  - Source: [ruward.ru case](https://ruward.ru/cases/1024/)
- **Cloud Interpreter**: a Russian cloud service where users call professional sign interpreters for simultaneous interpreting. Reportedly used at Bauman Moscow State Technical University for deaf students. The article date is unknown — [mel.fm](https://mel.fm/novosti/5401872-cloud)
- **Sber / Beeline**: Gazeta.ru reported on 03 Dec 2025 that deaf Beeline customers got access to sign-language consultations from Sber. The article body could not be fetched, so the format (human interpreter or AI) is unknown — [gazeta.ru 03.12.2025](https://www.gazeta.ru/business/news/2025/12/03/27328525.shtml)
- **Sber inclusion programme**: in April 2025 Sber said it would involve people with disabilities in developing AI-based inclusive services. No sign-language link is confirmed — [ComNews 14.04.2025](https://www.comnews.ru/digital-economy/content/238797/2025-04-14/2025-w16/1012/sber-privlechyot-lyudey-invalidnostyu-dlya-razrabotki-novykh-inklyuzivnykh-servisov-baze-ii)
- **Regional state services**:
  - Yaroslavl SFR branch gives deaf residents smartphones with video calling for sign-language communication — [SFR Yaroslavl 25.09.2026](https://sfr.gov.ru/branches/yaroslavl/news/~2026/09/25/285016)
  - Sverdlovsk VOG has offered online consultation with a sign interpreter over video since 2019 (from a historical newspaper note) — [Oblastnaya Gazeta 19.03.2026 PDF](https://old.oblgazeta.ru/media/newspaperpdf/2026/og/55/2026-03-19_og_55_5.pdf)
- **RuStore**: an app "Moi RZhYa" is listed. The developer and country were not identified — [RuStore](https://www.rustore.ru/catalog/app/com.interpreter_android.ru/recommendation)

### Inferences
- The proven model in Russia is a hybrid: a human video-interpreter dispatch center paid through state certificates, plus "AI" features as marketing add-ons. A Uzbek startup could copy this architecture: WebRTC to an interpreter pool, emergency 112, and speech-to-text.
- Sber is the only Russian player with real open AI assets and an LLM tie-in (GigaChat). It is the obvious partnership target. Contact channels: vision_rnd_ml@sberbank.ru and developers.sber.ru.

### Gaps
- Not found or not verified:
  - "ZhestLab" and "Zhestoved"
  - Yandex sign-language features
  - MTS and Tele2 deaf services (beyond the Beeline/Sber item)
  - Gosuslugi sign-language accessibility (other than applying for services through Gosuslugi)
  - sign avatars on Russian TV
  - "Govoryashchie ruki" and Signum
- Pricing for Surdo-pomosh, Cloud Interpreter and Surdofon was not found.
- Whether VOG runs a national remote-interpreting center as of 2026 is unconfirmed; only regional examples were found.

## Russian law and funding (2012 recognition, annual interpreter hours, certificates, remote interpreting)

### Takeaway
- **2012 law**: Federal Law 296-FZ of 30.12.2012 amended Article 14 of 181-FZ "On social protection of disabled persons" to cover RSL interpreting services and RSL development. It did not make RSL an official state language.
- **Hours**: as of 2026 the state funds up to 84 hours a year of sign interpreting (240 hours for deafblind people), based on the person's individual rehabilitation programme (IPRA). The often-cited 40 hours is outdated.
- **Certificate**: since January 2026 people can also get an electronic certificate, usable anywhere in Russia, to buy interpreting on the market.

### Cited Findings
- 296-FZ of 30.12.2012 amends Articles 14 and 19 of 181-FZ (Duma 18.12.2012, Federation Council 26.12.2012) — [Wikisource 296-FZ](https://ru.wikisource.org/wiki/%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD_%D0%BE%D1%82_30.12.2012_%E2%84%96_296-%D0%A4%D0%97); [pravo.ru news](https://pravo.ru/news/view/79071/)
- Article 14 as amended:
  - the Government sets the procedure for RSL interpreting services (surdo- and tiflosurdo-perevod);
  - the state ensures training of RSL teachers and interpreters and "development of RSL";
  - Source: [Consultant.ru 181-FZ art.14](https://www.consultant.ru/document/cons_doc_LAW_165919/b004fed0b70d0f223e4a81f8ad6cd92af90a7e3b/)
  - One academic source claims RSL became "one of the official languages". This conflicts with the law text, which only gives RSL the status of a language for interpreting services and development.
- Hours: up to 84 hours of sign interpreting, or 240 hours of tiflosurdo interpreting (deafblind), per 12 months from the application. The service must be listed in the IPRA. Unused hours are not paid out in cash — [SFR Yaroslavl 25.09.2026](https://sfr.gov.ru/branches/yaroslavl/news/~2026/09/25/285016); [SFR Amur 24.09.2026](https://sfr.gov.ru/branches/amur/news/~2026/09/24/284968)
- The 40-hour figure appears only in an old garant.ru item on earlier rehabilitation programmes — [garant.ru](https://garant.ru/news/11083)
- Decree of 25.11.2025 No. 1879 (in force 04.12.2025) amends the RSL interpreting Rules: disabled persons may pay for surdo- and tiflosurdo-perevod with an electronic certificate — [ppt.ru](https://ppt.ru/amp/obzory/vstupaet-v-silu/postanovlenie-pravitelstva-rf-25-11-2025-1879)
- Electronic certificate (SFR Yaroslavl):
  - available since January 2026;
  - issued in 5 working days, valid 12 months, usable anywhere in Russia;
  - previously, services came only through a regional SFR state contract with a specialised organisation.
  - 2026 Yaroslavl figures to date: 103 certificates issued; 248 people received payments for 302 hours, over RUB 1.5 million (about RUB 5,000 per hour, my calculation).
  - Source: [SFR Yaroslavl](https://sfr.gov.ru/branches/yaroslavl/news/~2026/09/25/285016)
- Application route: SFR client office, Gosuslugi, MFC or post. The SFR issues a referral to the authorised organisation, the regional VOG branch, within 5 working days. Contact center 8-800-100-00-01 — [SFR Amur](https://sfr.gov.ru/branches/amur/news/~2026/09/24/284968)
- Service standard: GOST R 57636-2024 "Uslugi po perevodu russkogo zhestovogo yazyka. Osnovnye polozheniya" ("RSL interpreting services: basic provisions") — [tiflocentre.ru](https://tiflocentre.ru/documents/gost-r-57636-2024.php)
- The Moscow city portal explains how a disabled person obtains RSL interpreting services — [mos.ru](https://www.mos.ru/otvet-zdorovie/kak-invalidu-poluchit-uslugi-po-perevodu-russkogo-zhestovogo-yazyka/)

### Inferences
- The 2026 certificate reform turns state funding into a voucher market. That opens Russian state money to private remote-interpreting platforms. It is a model Uzbekistan could lobby for, with fixed-hour vouchers redeemable at any licensed provider.
- Remote interpreting is not singled out in what I read, but nothing restricts the certificate to in-person services. This needs checking in the decree text.

### Gaps
- Full text of Decree 1879: whether it covers remote or video interpreting, and the per-hour certificate value.
- The decree that set the 84-hour figure, and when it replaced 40 hours (not traced).
- Whether VOG gets a federal subsidy for a national video-relay center (not found).

## Kazakhstan, Kyrgyzstan, Tajikistan, Belarus, Ukraine

### Takeaway
- **Kazakhstan** is the most active neighbour: Nazarbayev University runs K-RSL datasets and a multi-year signing-avatar project, and ENU has SignBridge, a 3D avatar for text to Kazakh Sign Language.
- **Ukraine** has a growing academic corpus (UkrSL-Annot, 2026).
- **Kyrgyzstan** has an educational app for deaf first-graders (UNDP).
- **Belarus**: state-provided interpreting, but no tech was found.
- **Tajikistan**: nothing was found.

### Cited Findings
- **Kazakhstan**
  - Imashev and Alizadeh (2026 sign-language workshop): iterative development of a Kazakh-Russian Sign Language interpreting avatar (four major versions over about 6 years, two research grants, deaf-user evaluations), plus an evaluation instrument for deaf signers that does not rely on written text. Code openness is not stated — [ACL Anthology 2026.signlang-1.23](https://aclanthology.org/2026.signlang-1.23/); [LREC PDF](https://www.sign-lang.uni-hamburg.de/lrec/pub/26040.pdf)
  - SignBridge (Eurasian National University AI agents): text to Kazakh Sign Language through a 3D avatar — [aisana.enu.kz](https://aisana.enu.kz/en/page/our-ai-agents/signbridge)
  - June 2024 Astana IT University paper: a database, analysis algorithm and prototype 3D avatar for text-to-sign translation — [DOAJ](https://doaj.org/article/96e0e09cba3b4fb9ad29c3f8d1cc7103); [journal](https://journal.astanait.edu.kz/index.php/ojs/article/view/553)
  - Word2Sign iPad app (text to sign avatar) by an individual developer; no ISSAI link confirmed — [App Store](https://apps.apple.com/ca/app/word2sign/id6478667698)
  - AI-YM project: AI gesture recognition for teaching K-RSL (per a search summary of an NU repository document) — [nur.nu.edu.kz](https://nur.nu.edu.kz/bitstreams/9ef0b977-2c24-4605-9e54-154208bcd966/download)
  - ISSAI's public products found are speech tools (Dauys TTS, Feb 2024; Soyle, Nov 2024; Umay avatar for spoken Kazakh). No 2025 ISSAI sign-language product was found — [ISSAI](https://issai.nu.edu.kz/?p=51729); [NU news](https://nu.edu.kz/?p=6778)
  - ISSAI GitHub has a `lightweight_avatar` repo (purpose not verified) — [IS2AI/lightweight_avatar mirror](https://git.huazai-net.workers.dev/IS2AI/lightweight_avatar)
- **Kyrgyzstan**: "Dilgir", an app supplementing the Dilgir-1 textbook for deaf first-graders (words, pictures, fingerspelling images, sound). Built with the Technoland Public Foundation and the special boarding school for deaf children, with UNDP. Not AI — [UNDP](https://www.undp.org/node/122981)
- **Ukraine**
  - UkrSL-Annot: annotated continuous Ukrainian Sign Language dataset, 1,456 clips, being expanded (UNLP 2026) — [ACL 2026.unlp-1.6](https://aclanthology.org/2026.unlp-1.6.pdf)
  - 2023 Ukrainian fingerspelling recognition study with a reusable dataset — [NAS Ukraine](https://harvester.nas.gov.ua/Record/oai:ojs2.jais.net.ua:article-101/Details?lng=en)
  - Roboflow "ukraine sign languages" set — [Roboflow](https://universe.roboflow.com/sign-languages/ukraine-sign-languages)
  - ConnectAbility (Kyiv team, Teens in AI hackathon winner): an AI app for learning sign language — [UNN](https://www.unn.com.ua/en/news/kyiv-team-wins-the-national-ai-hackathon-with-an-app-for-the-hearing-impaired)
- **Belarus**: per the Labour Ministry in 2018, territorial social-service centres provide free sign-language interpreting, with a goal of coverage in every settlement. No app or AI project was found — [NLB press digest 2018](https://press.nlb.by/upload/iblock/64c/resp06122018.pdf)
  - BSUIR (Minsk) has a sign-language-related publication; contents not verified — [libeldoc.bsuir.by](https://libeldoc.bsuir.by/handle/123456789/62427)

### Inferences
- The Kazakhstan K-RSL ecosystem is the best partnership analog for Uzbekistan: a Russian-derived sign language, a bilingual state, and a university-led avatar and dataset. NU (Imashev, the krslproject team) and ENU (SignBridge) are concrete contacts.
- The avatar evaluation methodology (deaf signers judging without written text) is directly reusable for Uzbek avatar user testing.
- Ukrainian Sign Language is related but politically and linguistically diverging. Its data is less useful than RSL or K-RSL for Uzbek.

### Gaps
- Not found:
  - Tajikistan: any project
  - Belarus: current (2024-2026) apps or a Belarusian Society of the Deaf (BelOG) video service
  - Kazakhstan: government e-services with sign-language support
  - Kyrgyzstan: AI or avatar work
- ISSAI's own sign-language datasets and models are unconfirmed. The search tool showed no ISSAI-branded sign product, and K-RSL work appears under NU / krslproject rather than ISSAI.

## Reusability for an Uzbekistan startup

### Takeaway
Open weights and code from Sber (Slovo, Bukva and Logos models) can be used now for prototyping and transfer learning. Commercial use of the datasets is uncertain: Slovo and Bukva use a modified CC BY-SA, and Logos is academic-only. A production product should rely on its own Uzbek data plus a licence or partnership with Sber, and on an academic partnership with Nazarbayev University for K-RSL.

### Cited Findings
- Directly downloadable (no request): Slovo data and ONNX/TorchScript weights, Bukva data and ONNX weights, Logos `.pth` weights — [hukenovs/slovo](https://github.com/hukenovs/slovo); [ai-forever/bukva](https://github.com/ai-forever/bukva); [ai-forever/logos](https://github.com/ai-forever/logos)
- On request, academic only: the Logos dataset (vision_rnd_ml@sberbank.ru) — [ai-forever/logos](https://github.com/ai-forever/logos)
- Restricted: the FluentSigners-50 Zenodo files — [Zenodo](https://zenodo.org/record/6043739)
- Business model reference: the Russian voucher system (84 hours/year, e-certificate since 2026, about RUB 5,000 per hour in Yaroslavl) and the dispatch-center apps (Surdofon, Surdo-pomosh) — [SFR Yaroslavl](https://sfr.gov.ru/branches/yaroslavl/news/~2026/09/25/285016); [ruward Surdofon](https://ruward.ru/cases/1024/)

### Inferences
- Suggested stack:
  - MediaPipe landmarks (Slovo ships them) and a Logos-pretrained backbone, fine-tuned on a small Uzbek sign set;
  - a Bukva-style fingerspelling model;
  - a hybrid human interpreter video center for reliability.
- Partnerships to pursue:
  - Sber AI / SaluteDevices: a commercial licence, plus a possible GigaChat-style LLM integration;
  - Nazarbayev University: K-RSL avatar and evaluation;
  - VOG: interpreter-training curricula and GOST R 57636-2024 as a service-quality template.

### Gaps
- No legal review of the Sber licence PDFs was done. Commercial rights must be confirmed before shipping.
- Sanctions and export issues with Sber (a sanctioned entity) for a Uzbek company were not researched. This may affect any formal partnership with Sber.
