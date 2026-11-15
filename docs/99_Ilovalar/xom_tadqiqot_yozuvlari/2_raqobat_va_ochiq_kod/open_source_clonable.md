# Open-source building blocks you could fork for an Uzbek / Uzbek Sign Language (UzSL) Deaf-hearing platform (checked 2026-11-15)

Method: I read repo metadata with the GitHub REST API (`gh api repos/<r>`: `pushed_at`, stars, SPDX license, main language, contributor count from the `contributors?per_page=1&anon=1` Link header). Model data comes from the Hugging Face API (`/api/models?search=uzbek&pipeline_tag=automatic-speech-recognition`). DPG status comes from `DPGAlliance/publicgoods-candidates`. Web search covered adoption numbers, the acquisition and licence terms. "push" below means the last push to any branch. It is not always a code commit.

## 1. Text-to-sign avatar suites (VLibras, sign.mt/Rylo, JASigning/CWASA, SignAvatars)

### Takeaway
VLibras is the only complete, government-run text-to-sign avatar suite that is actively maintained and open source. Its code is LGPL-3.0, but the 3D avatar ships as a compiled Unity WebGL binary, so another sign language cannot reuse it without the Unity source and new sign animations. sign.mt is now "Rylo Translate", and its app is CC BY-NC-SA 4.0: a non-profit may use it, but the ShareAlike and NonCommercial terms limit any mixing. Its MIT-licensed libraries (`pose`, `spoken-to-signed-translation`, `signwriting`) are the cleanest base for an Uzbek pipeline.

### Cited Findings
**VLibras (Brazil)**
- GitHub org `spbgovbr-vlibras`, all checked repos LGPL-3.0: `vlibras-web-browsers` (TypeScript, 20 stars, 16 contributors, push 2026-11-12), `vlibras-translator-api` (JS, 20 stars, push 2026-11-02), `vlibras-portal` (push 2026-11-12), `vlibras-translator-text-core` (Python, v2.5.0, 12 contributors, push 2026-08-20), `vlibras-player-webjs` (push 2025-11-11), `vlibras-mobile-cross-platform` (TypeScript, push 2026-08-07). The `vlibras-dictionary-api/-repository/-video/-cache/-bundles` repos were last pushed 2024-03-11. There are also `libraske-*` repos (a karaoke/learning game; player in C#). — [GitHub org spbgovbr-vlibras](https://github.com/spbgovbr-vlibras)
- Architecture: the translator core is Python and runs on Ubuntu 22.04 with RabbitMQ. The translator API needs MongoDB 4.2 and RabbitMQ. — [vlibras-translator-text-core README](https://github.com/spbgovbr-vlibras/vlibras-translator-text-core); [vlibras-translator-api README](https://github.com/spbgovbr-vlibras/vlibras-translator-api)
- The avatar player repo contains only compiled Unity WebGL output (`src/target/UnityLoader.js`, `playerweb.data.unityweb`, `playerweb.wasm.code.unityweb`). The Unity project, the rigs and the sign animation source are not in the public org. — [vlibras-player-webjs tree](https://github.com/spbgovbr-vlibras/vlibras-player-webjs/tree/master/src/target)
- The suite uses regionalised 3D avatars ("Icaro, Hosana, Guga") to sign Portuguese content in Libras. — [vlibras-web-browsers README](https://github.com/spbgovbr-vlibras/vlibras-web-browsers)
- Adoption: a 2025 SBQS paper reports about 40 million daily VLibrasWidget accesses and about 3 million translations a month on average. The measurement period is not stated. — [SBQS 2025, "Hand-Speaking Technology… VLibrasWidget"](https://sol.sbc.org.br/index.php/sbqs/article/view/39021)
- Governance: the VLibras Suite is presented as an initiative of Brazil's management ministry (MGI) for digital accessibility. — [Agencia Gov 2024](https://agenciagov.ebc.com.br/noticias/202407/gestao-apresenta-iniciativas-de-acessibilidade-digital-na-5a-conferencia-nacional-dos-direitos-da-pessoa-com-deficiencia). It was developed with UFPB (the LAVID lab); UFPB and MGI presented the app together. — [A Uniao](https://auniao.pb.gov.br/noticias/caderno_paraiba/ufpb-e-mgi-apresentam-aplicativo)

**sign.mt / Rylo Translate**
- `sign/translate`: TypeScript, 801 stars, 4 contributors, last push 2026-08-11. The README now brands it "Rylo Translate" (rylo.com/sign/translate). — [sign/translate](https://github.com/sign/translate)
- Two-tier licence in LICENSE.md: individuals, non-profits and educational institutions use it free under CC BY-NC-SA 4.0 ("Copyright (c) 2022 Nagish Inc."). For-profit organisations need a separate commercial licence. — [sign/translate LICENSE.md](https://github.com/sign/translate/blob/master/LICENSE.md)
- Nagish (since renamed Rylo) announced the acquisition of sign.mt on 2025-10-22. Founder Dr. Amit Moryossef joined as Head of Research. — [PR Newswire](https://www.prnewswire.com/news-releases/nagish-acquires-signmt-to-drive-research-in-ai-and-sign-language-302591257.html); [Rylo blog](https://rylo.com/post/nagish-acquires-sign-mt). A June 2026 Business Wire release says Rylo raised $85M and launched "Rylo Sign". — [Business Wire 2026-06-04](https://www.businesswire.com/news/home/20260604498117/en/)
- The `sign-language-processing` org has MIT-licensed libraries that are still active: `pose` (116 stars, 14 contributors, push 2026-09-19), `spoken-to-signed-translation` (105 stars, push 2026-10-18), `signwriting` (push 2026-11-02), `segmentation`, `fluent-pose-synthesis`, `signwriting-translation`. Several repos are NOASSERTION (custom licence): `signbank-plus`, `sign-vq`, `pose-to-video`. — [sign-language-processing org](https://github.com/sign-language-processing)
- `spoken-to-signed-translation` is a text → gloss → pose → video pipeline. Glossers: `simple|spacylemma|rules|nmt`. It works from a lexicon folder (CSV plus .pose files), ships a dummy lexicon, and lexicons download with `download_lexicon --name signsuisse`. Supported pairs today are Swiss sign languages sgg/ssr/slf with de/fr/it. Language codes follow the IANA subtag registry. — [spoken-to-signed-translation README](https://github.com/sign-language-processing/spoken-to-signed-translation)

**JASigning / CWASA (UEA, SiGML/HamNoSys avatars)**
- Not on GitHub. UEA's licence statements disagree with each other: the vhg2025a release page says CC BY-NC-ND, the vhg2025/vhg2022 pages say BY-SA, and the conditions page says pages are BY-SA but the software must be used unmodified (BY-ND-like), with commercial customisation and extra avatars by arrangement. — [vhg2025a](https://vhg.cmp.uea.ac.uk/tech/jas/vhg2025a/); [Conditions](https://vh.cmp.uea.ac.uk/index.php/JASigning_Conditions); [UEA project page](https://uea.ac.uk/groups-and-centres/interactive-graphics-and-audio/projects/interactive-graphics-projects/digital-humans/cwa-signing-avatars); [UEA Express Licensing](https://expresslicensing.uea.ac.uk/product/cwa-signing-avatars)

**SignAvatars (ECCV 2024)**
- `ZhengdiYu/SignAvatars`: Python, 195 stars, last push 2025-07-17, **no licence file** (SPDX null). It is a 3D holistic sign motion dataset and benchmark, not an app. — [ZhengdiYu/SignAvatars](https://github.com/ZhengdiYu/SignAvatars)

### Inferences
- **Adapting VLibras to UzSL** means reusing the web widget, portal, API and the queue/translator service skeleton (all LGPL; you must publish your changes to those files). It also means: (a) obtaining the Unity avatar source from RNP/LAVID by agreement, or building a new avatar (Blender rig → three.js/Unity); (b) animating a starter UzSL lexicon (roughly 1,500–3,000 signs for useful coverage; my estimate, not sourced); (c) replacing the PT→Libras gloss rules with Uzbek→UzSL rules, which needs Uzbek morphology because the language is agglutinative. Rough effort, my estimate: 4–8 person-weeks for infrastructure and UI localisation. The avatar and lexicon are the main cost: 1 animator plus 1 Deaf signer, about 6–12 months for around 2,000 signs.
- sign.mt/Rylo: a non-profit may fork the app under BY-NC-SA, but the fork must stay BY-NC-SA. That blocks any future commercial partner, and the licence cannot be combined cleanly with GPL code. Prefer the MIT libraries (`pose`, `spoken-to-signed-translation`) and build your own UI.
- The cheapest MVP for UzSL text→sign is `spoken-to-signed-translation` with an Uzbek glosser (rules or lemmatiser) and a lexicon of filmed signs converted to .pose with MediaPipe, rendered as a skeleton or pose-to-video. It needs no 3D animator, only recorded video per sign.
- JASigning/CWASA: the licence is ambiguous and modification is restricted, so use it for research or prototypes only.

### Gaps
- Whether RNP/LAVID will share the VLibras Unity source and avatar assets: no public statement found. Also no confirmed count of VLibras sites or users beyond the SBQS figure.
- How much of Rylo's work will stay open after the acquisition: no statement found. `sign/translate` still received commits in Aug 2026.
- Paula (DePaul) and Simax: no public repositories found; not verified.
- Dicta-Sign (EU FP7, 2009–2012): project deliverables exist at CORDIS ([D3.3](https://cordis.europa.eu/docs/projects/cnect/5/231135/080/deliverables/001-DICTASIGNDeliverableD33Ares2012696081.pdf)); no maintained code found.
- No open three.js sign-avatar rig with an active community was found (GitHub search returned nothing useful).

## 2. Sign dictionaries and lexical databases (Signbank family, SignDict, NZSL, SignWriting)

### Takeaway
Global Signbank (BSD-3, Django, 30 contributors, active in Nov 2026) is the best base for a national UzSL lexical database. SignDict (MPL-2.0, Elixir, active) and NZSL Online (GPL-3.0, Ruby) are better public-facing crowdsourced or consumer dictionaries.

### Cited Findings
- `Signbank/Global-signbank`: Python/Django, BSD-3-Clause, 24 stars, 30 contributors, push 2026-11-13. "An online sign dictionary and sign database management system for research purposes." — [Global-signbank](https://github.com/Signbank/Global-signbank)
- `Signbank/FinSL-signbank`: BSD-3, push 2026-10-29, fork of NGT-signbank. `BSL-signbank`: BSD-3, push 2025-09-10. `Auslan-signbank`: archived, last push 2016-01-18. `Signbank/sign-app`: Dart, last push 2023-07-08. — [Signbank org](https://github.com/Signbank)
- `signdict/website`: Elixir, MPL-2.0, 87 stars, push 2026-11-14 (German crowdsourced sign dictionary). It was a DPG nominee and is now in the registry's archive folder. — [signdict/website](https://github.com/signdict/website); [DPG candidates archive/signdict.json](https://github.com/DPGAlliance/publicgoods-candidates/blob/main/archive/signdict.json)
- NZSL: `ODNZSL/nzsl-online` (Ruby, GPL-3.0, 48 stars, push 2026-11-14), `nzsl-dictionary-android` (MIT, push 2026-11-10), `nzsl-dictionary-scripts` (MIT, push 2026-11-01). — [ODNZSL/nzsl-online](https://github.com/ODNZSL/nzsl-online)
- SignWriting: `sutton-signwriting/core` (JS, MIT, push 2025-11-23) and `sign-language-processing/signwriting` (MIT, push 2026-11-02). The original SignPuddle repo (`slevinski/signpuddle`) returned 404. — [sutton-signwriting/core](https://github.com/sutton-signwriting/core)
- There are several small UzSL recognition repos but no UzSL dictionary software: `akkomron/uzslr-isolated-dynamic` (5 stars, push 2026-03-13), `bekfurr/UZ_SL_TRSANSLATOR` (Apache-2.0), `khdbeck/uzslr-sign-language-prototype` (push 2026-10-06). — GitHub search "uzbek sign language" ([akkomron/uzslr-isolated-dynamic](https://github.com/akkomron/uzslr-isolated-dynamic))

### Inferences
- Recommended split: Global Signbank as the internal source of truth for linguists (glosses, phonology, video per sign, BSD lets you relicense freely), plus a light public dictionary app built on it or on SignDict. Localisation means Django i18n (.po files) for the UI in Uzbek Latin, Uzbek Cyrillic and Russian. Estimate: 2–4 person-weeks for setup and UI translation. The content is the real cost: filming roughly 2,000–5,000 signs with Deaf signers.
- If you fork NZSL Online, your derivatives must be GPL-3.0.

### Gaps
- Spreadthesign: no open code found (it is a proprietary or project-run site). Not verified on GitHub.
- No ISO 639-3 code for Uzbek Sign Language was confirmed in this session.

## 3. Sign recognition and data-collection code (MediaPipe ISLR, PopSign, ASL Citizen)

### Takeaway
Recognition code is mostly MIT-licensed research code (Kaggle ISLR winner, ASL Citizen). PopSign's dataset is CC BY 4.0, but I could not confirm that the game's own source is open. A UzSL recogniser needs a new dataset: tens of examples per sign from many signers.

### Cited Findings
- `hoyso48/Google---Isolated-Sign-Language-Recognition-1st-place-solution`: MIT, last push 2024-03-09. It is the winning solution of the Kaggle ISLR competition, which used MediaPipe landmarks. — [repo](https://github.com/hoyso48/Google---Isolated-Sign-Language-Recognition-1st-place-solution)
- `microsoft/ASL-citizen-code`: MIT, archived, last push 2024-07-25. It holds the code and baselines for the ASL Citizen dataset, not the full collection platform. — [microsoft/ASL-citizen-code](https://github.com/microsoft/ASL-citizen-code)
- PopSign ASL v1.0 dataset: CC BY 4.0, 1.1 TB, 200,686 videos, 250 signs, 47 signers, collected Oct 2022–Mar 2023, hosted by Georgia Tech. The NeurIPS paper gives slightly different counts. — [signdata.cc.gatech.edu](https://signdata.cc.gatech.edu/view/datasets/popsign_v1_0/); [NeurIPS 2023](https://proceedings.neurips.cc/paper_files/paper/2023/hash/00dada608b8db212ea7d9d92b24c68de-Abstract.html)
- `sign-language-processing/segmentation` (MIT) and `pose` (MIT) cover sign segmentation and pose I/O. — [org](https://github.com/sign-language-processing)

### Inferences
- PopSign's numbers (about 700 examples per sign) show the scale needed for robust isolated recognition. For a 250-sign UzSL MVP: about 50–100 signers × 250 signs. Building a crowdsourced collection web app (browser recording, consent, review) on the `pose` and MediaPipe stack is an estimated 4–6 person-weeks.

### Gaps
- Whether the PopSign game source is open: only unrelated forks found (e.g. `dimitrikosmakos/PopSign`, 2021). Not confirmed.
- The ASL Citizen collection website code does not appear to be published.

## 4. Video relay / interpreter calls and real-time text (ACE, Linphone, Jitsi, BBB, LiveKit, Asterisk/FreeSWITCH, RTT)

### Takeaway
The FCC/MITRE ACE reference code is effectively dormant: ACEDirect last pushed in 2021 and has no licence file. Build the interpreter call layer on Jitsi Meet (Apache-2.0) or LiveKit (Apache-2.0); add Asterisk or FreeSWITCH only if you need to bridge to the phone network.

### Cited Findings
- `FCC/ACEDirect`: 13 stars, last push 2021-03-25, no licence detected. Other FCC repos: `ACEConnectLite` (2016), `ACE-Project` (2017), `ACEApp` (2019), `ACEServer` (2018). — [FCC/ACEDirect](https://github.com/FCC/ACEDirect)
- The FCC describes ACE Direct as a free, open-source Direct Video Calling contact-centre platform. — [fcc.gov/ace](https://fcc.gov/ace); [fcc.gov/dvc](https://www.fcc.gov/dvc). MITRE built the prototype. — [MITRE](https://www.mitre.org/news-insights/impact-story/mitre-connects-improving-telecommunications-deaf-community)
- MITRE's own account `mitrefccace`: `ace-quill` (captioned-telephone research, push 2024-06-27, no licence), `fcc-vatrp` (C#, push 2022-12-08), `ace-omni` (TypeScript, push 2024-06-03). All have 0–4 stars. — [github.com/mitrefccace](https://github.com/mitrefccace)
- `jitsi/jitsi-meet`: Apache-2.0, 30,238 stars, 797 contributors, push 2026-11-14. `jitsi/jigasi` (Apache-2.0, SIP gateway plus transcription, push 2026-11-13). `jitsi/skynet` (Apache-2.0, "AI core services", push 2026-11-12). — [jitsi-meet](https://github.com/jitsi/jitsi-meet); [jigasi](https://github.com/jitsi/jigasi); [skynet](https://github.com/jitsi/skynet)
- `livekit/livekit`: Apache-2.0, Go, 22,215 stars, 150 contributors. `livekit/agents`: Apache-2.0, 15,233 stars, push 2026-11-15. — [livekit](https://github.com/livekit/livekit); [agents](https://github.com/livekit/agents)
- `bigbluebutton/bigbluebutton`: LGPL-3.0, 9,278 stars, 352 contributors, push 2026-11-14. It was a DPG nominee and is now in the archive folder. — [BBB](https://github.com/bigbluebutton/bigbluebutton)
- Linphone: `linphone-android` (GPL-3.0, 1,339 stars, push 2026-11-14) and `linphone-desktop` (GPL-3.0, push 2026-11-13). Belledonne also sells proprietary licences. — [linphone-android](https://github.com/BelledonneCommunications/linphone-android)
- `asterisk/asterisk`: C, 3,687 stars, 444 contributors, push 2026-11-13. The GitHub API reports the licence as NOASSERTION; Asterisk is generally known to be GPL-2.0, but I did not check the file. `signalwire/freeswitch`: 5,307 stars, push 2026-11-13, NOASSERTION (generally MPL-1.1; not checked). — [asterisk](https://github.com/asterisk/asterisk); [freeswitch](https://github.com/signalwire/freeswitch)
- Real-time text (RTT, T.140): GitHub search found only tiny projects, e.g. `wkampich/pjsip-rtt-cli` (push 2026-07-23) and `gunnarhm/TotalConversation` (2015). — GitHub search "real-time text rtt"

### Inferences
- A Jitsi Meet fork gives an interpreter-booking room UI, multi-video tiles and Jigasi/Skynet hooks for live captions. Apache-2.0 allows mixing with anything. Uzbek UI: Jitsi uses i18next JSON language files, so adding `uz` is an estimated 1–2 person-weeks. Interpreter queueing, scheduling and the VRS dispatch logic must be written yourself: an estimated 6–10 person-weeks. ACE Direct is a useful design reference only.
- RTT: the simplest option is character-by-character streaming over a WebRTC data channel inside the Jitsi or LiveKit app. A full SIP T.140 stack is only needed for 112 interop.

### Gaps
- Whether Jitsi has a built-in "sign language interpreter" role: only 2020 issues found (#6906 multi-pin, #6151 language facilitation, both closed). Not confirmed.
- I did not open the Asterisk and FreeSWITCH licence files.

## 5. Captioning and Uzbek ASR/TTS

### Takeaway
The streaming servers are mature and permissively licensed (whisper.cpp MIT, faster-whisper MIT, WhisperLive MIT, WhisperLiveKit Apache-2.0, Vosk Apache-2.0). Many Uzbek ASR checkpoints on Hugging Face are Apache-2.0 or MIT, and Vosk ships a small Uzbek model. Google Live Transcribe engine is archived.

### Cited Findings
- `ggml-org/whisper.cpp`: MIT, 55,204 stars, 1,140 contributors, push 2026-11-13. `SYSTRAN/faster-whisper`: MIT, 26,761 stars. `collabora/WhisperLive`: MIT, 4,359 stars, push 2026-11-13. `QuentinFuxa/WhisperLiveKit`: Apache-2.0, 11,253 stars, push 2026-11-14. `ufal/whisper_streaming`: MIT, push 2025-11-12. — [whisper.cpp](https://github.com/ggml-org/whisper.cpp); [faster-whisper](https://github.com/SYSTRAN/faster-whisper); [WhisperLive](https://github.com/collabora/WhisperLive); [WhisperLiveKit](https://github.com/QuentinFuxa/WhisperLiveKit)
- `alphacep/vosk-api`: Apache-2.0, 15,257 stars, push 2026-10-15. The model list includes `vosk-model-small-uz-0.22`. — [vosk-api](https://github.com/alphacep/vosk-api); [Vosk models](https://alphacephei.com/vosk/models)
- `google/live-transcribe-speech-engine`: Apache-2.0, **archived**, last push 2022-07-20. It is a client for Google Cloud Speech, not an offline engine. — [repo](https://github.com/google/live-transcribe-speech-engine)
- `kaldi-asr/kaldi`: 15,515 stars, last push 2025-09-22 (slowing). — [kaldi](https://github.com/kaldi-asr/kaldi)
- Uzbek ASR on HF (downloads per HF API, 2026-11-15): `sarahai/uzbek-stt-3` Apache-2.0 (452k downloads, modified 2024-08); `navai-uz/whisper-medium-uzbek` Apache-2.0 (2026-07); `Kotib/uzbek_stt_v1` Apache-2.0; `OvozifyLabs/whisper-small-uz-v1` Apache-2.0; `hostmepanda/whisper-large-v3-turbo-uzbek-ct2` MIT (a CTranslate2 conversion ready for faster-whisper); `cstr/stt-uz-fastconformer-hybrid-ctc-large-GGUF` CC BY 4.0. — [HF search](https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&search=uzbek)
- Uzbek speech datasets: `issai/Uzbek_Speech_Corpus` (MIT tag), `murodbek/uzbek-speech-corpus` (CC BY 4.0), `DavronSherbaev/uzbekvoice-filtered` (Apache-2.0). — [HF datasets](https://huggingface.co/datasets?search=uzbek)
- Uzbek TTS: `Abduqayum/uzbek-tts-natural-speech-chatterbox` (MIT), `mrmuminov/Qwen3-TTS-12Hz-0.6B-Uzbek` (Apache-2.0), `mrmuminov/f5-tts-uzbek` (CC BY-NC 4.0). — [HF TTS](https://huggingface.co/models?pipeline_tag=text-to-speech&search=uzbek)

### Inferences
- Recommended stack: WhisperLiveKit or WhisperLive serving an Uzbek CT2 fine-tune, with Vosk small-uz as the offline mobile fallback. Effort: an estimated 2–4 person-weeks to deploy, plus a WER benchmark on Deaf-relevant speech (clinic, government office).
- HF licence tags are self-declared, and some fine-tunes inherit Common Voice data (CC0). Check each model card before production.

### Gaps
- No independent WER comparison of the Uzbek checkpoints was found.

## 6. AAC, emergency (112) and learning apps

### Takeaway
Cboard (GPL-3.0) is active and a registered Digital Public Good, a good fork for an Uzbek picture/phrase board. AsTeRICS Grid has been renamed "Asterics-AAC" (AGPL-3.0, active). Otsimo AAC is archived. CoughDrop's main repo is no longer publicly visible. DEC112 publishes NG112 libraries (AGPL/GPL/MIT), but its mobile app repo is archived.

### Cited Findings
- `cboard-org/cboard`: GPL-3.0, 768 stars, 95 contributors, push 2026-11-11. Related repos: `cboard-api` and `cboard-translate` (GPL-3.0). — [cboard](https://github.com/cboard-org/cboard). It appears under `digitalpublicgoods/cboard.json` in the DPG candidates repo, which itself was archived on 2024-08-19. — [DPG candidates](https://github.com/DPGAlliance/publicgoods-candidates/tree/main/digitalpublicgoods)
- `asterics/Asterics-AAC` (formerly AsTeRICS Grid): AGPL-3.0, 129 stars, 17 contributors, push 2026-11-14, "Free, easy-to-use AAC app with offline support". — [Asterics-AAC](https://github.com/asterics/Asterics-AAC)
- `otsimo-archive/aac`: AGPL-3.0, archived, last push 2021-09-01 (DPG nominee, archived). — [otsimo-archive/aac](https://github.com/otsimo-archive/aac)
- CoughDrop: `CoughDrop/coughdrop` returns 404. The org still has minor repos (`extra-tts` MIT 2025-09, `coughdrop-websocket` GPL-3.0 2025-08). An old AGPL fork exists at `bcarter/coughdrop` (2016). — [CoughDrop org](https://github.com/CoughDrop)
- DEC112 (Austria): `dec112/ng112-js` (AGPL-3.0, push 2026-10-09), `ng112-js-sip-adapter-jssip` (AGPL-3.0), `viewer` (GPL-3.0, control-centre client, push 2026-11-03), `pidf-lo-javascript` and `vcard-xml-javascript` (MIT). `dec112/app` (MIT) is **archived**, last push 2022-12-08. — [dec112 org](https://github.com/dec112)
- Learning: VLibras has the `libraske-*` game repos (2026 activity, no licence detected). sign-language-processing has `lessons-in-signwriting` (CC BY 4.0). — [spbgovbr-vlibras](https://github.com/spbgovbr-vlibras); [lessons-in-signwriting](https://github.com/sign-language-processing/lessons-in-signwriting)

### Inferences
- A Cboard fork needs an Uzbek UI (cboard-translate tooling), Uzbek TTS and an Uzbek symbol/phrase set. Estimate: 3–5 person-weeks. Under GPL-3.0 the forked app stays GPL.
- An emergency text/video-to-112 flow could reuse `ng112-js` (AGPL) together with `viewer`. It only makes sense if Uzbekistan's 112 dispatch partners. AGPL means the whole server-side code must be published, which suits a non-profit.

### Gaps
- No maintained open-source sign-language-learning app framework of note was found.

## 7. Proposed open-source architecture and licence compatibility

### Takeaway
Use permissive pieces as the core and isolate copyleft components as separate services or apps. Do not build on Rylo's BY-NC-SA app code.

### Cited Findings
- Licences per component, all verified on GitHub as cited above: Jitsi Meet and LiveKit Apache-2.0; whisper.cpp, faster-whisper and WhisperLive MIT; Vosk Apache-2.0; Global Signbank BSD-3; `pose` and `spoken-to-signed-translation` MIT; VLibras LGPL-3.0; Cboard GPL-3.0; Asterics-AAC AGPL-3.0; DEC112 ng112-js AGPL-3.0; sign/translate CC BY-NC-SA 4.0 for non-profits, commercial otherwise.

### Inferences
- **Fork:** (1) Jitsi Meet as the interpreter call app (Uzbek i18n, interpreter queue); (2) Global Signbank as the UzSL lexicon database; (3) Cboard as the AAC/phrase board.
- **Integrate as services:** WhisperLiveKit or WhisperLive with an Uzbek Whisper CT2 model for captions; Vosk uz for offline use; `spoken-to-signed-translation` plus `pose` for an Uzbek→UzSL text→sign MVP drawing on the Signbank lexicon videos; MediaPipe plus Kaggle-ISLR-style models for later sign→text work.
- **Optional:** the VLibras widget/portal/API skeleton if a 3D avatar route is chosen and the Unity sources can be obtained; DEC112 ng112-js for 112.
- **Licence notes:** Apache, MIT and BSD combine freely. GPL-3.0 (Cboard, Linphone) and AGPL-3.0 (Asterics, ng112-js) components should stay separate apps or services; AGPL's network clause requires publishing server source, which suits a non-profit. LGPL (VLibras) allows linking but changes to the LGPL files must be published. CC BY-NC-SA (Rylo app) is not a software licence: its ShareAlike term is incompatible with GPL and Apache combinations, and NC blocks commercial partners. Use it only as inspiration. CC BY-NC-ND (CWASA vhg2025a) forbids modification.
- **Rough total for an MVP (call app + captions + dictionary + text→pose):** an estimated 20–35 person-weeks of engineering, plus the data effort: filming about 2,000 signs and collecting the recognition dataset.

### Gaps
- No sign-language project currently registered as a DPG was confirmed. Only Cboard and Jellow (AAC) appear in the `digitalpublicgoods` folder of the archived candidates repo. SignDict, BigBlueButton and Otsimo sit in `archive/` as former nominees. The live registry at digitalpublicgoods.net was not queried (its API call failed).
- The effort numbers in this section are my estimates, not sourced.
