# Deaf-communication technology in the Americas (USA, Canada, Latin America) — status November 2026

Scope note: these notes only add items and facts that are not already in `global_feature_matrix.md`, `open_source_clonable.md` or `global_apps_and_business_models.md`. Already covered there and not repeated: Hand Talk, VLibras, Ava, Rylo/Nagish (incl. $85M round, sign.mt), Convo, Sorenson VRS basics, ZP/Purple acquisition by Teleperformance, Sign-Speak, SignAll, ASL Citizen, PopSign dataset, Signapse funding and ASL launch, InnoCaption/CaptionCall/ClearCaptions app ratings, US Text-to-911 basics, TRS Fund 2025-26 rates for TRS/STS/CTS, SignGemma "not released".
Research budget: about 35 tool calls. Several primary documents (CRTC decisions, CAV strategic plan PDF) returned HTTP 403, so some Canadian figures come from search snippets and are marked as such.

## Q1. USA: relay, captioning and AI sign-language companies (new facts 2024-2026)

### Takeaway
The US market is still driven by FCC per-minute money, and that money is now explicitly pricing AI below humans: the ASR-only IP CTS rate drops to $0.95/min in 2026-27, against $1.45 for human-assisted captions. The big relay incumbents (Sorenson) are now building AI sign translation themselves, so AI sign tools in the US are arriving through the relay companies, not replacing them.

### Cited Findings
**FCC IP CTS (captioned phone) — AI vs human pricing**
- The July 2024 five-year IP CTS compensation plan set a glide path for ASR-only ("automatic speech technology only") captioning: $1.17/min in year 1, $1.05 in year 2, and $0.95 for years 3-5. It runs to 30 June 2029, and the human-assisted (CA) rate is adjusted for inflation each year — [Kelley Drye](https://www.kelleydrye.com/viewpoints/blogs/commlaw-monitor/fcc-sets-new-rates-for-ip-cts-compensation-and-proposes-new-minimum-service-standards); [FCC IP CTS page](https://www.fcc.gov/ipcts)
- Fund year 2025-26 (DA 25-571): $1.05 for ASR-only, $1.40 for CA-assisted, plus a $0.22/min supplemental CA rate — [FCC DA 25-571](https://docs.fcc.gov/public/attachments/DA-25-571A1.pdf)
- Fund year 2026-27 (DA 26-646): $0.95 for ASR-only, $1.45 for CA-assisted, $0.23 supplemental. Taken from a search summary; I did not open the PDF — [FCC DA 26-646](https://docs.fcc.gov/public/attachments/DA-26-646A1.pdf)
- The FCC first allowed and paid for fully automatic (ASR) IP CTS captions in a 2018 Declaratory Ruling — [FCC IP CTS](https://www.fcc.gov/ipcts)
- **Hamilton Relay** (CapTel brand) received full IP CTS certification on 17 Dec 2024 and is also certified for ASR-based IP CTS, alongside its CA-based service. Hamilton also sells "Hamilton CapTel Carceral Solutions" for prisons — [FCC: Hamilton ASR certification](https://www.fcc.gov:443/hamilton-relay-certified-provide-ip-cts-using-automatic-speech-recognition); [Hamilton CapTel carceral](https://hamiltoncaptel.com/solutions/hamilton-captel-carceral-solutions/)
- The FCC extended conditional IP CTS certifications for **Global Caption** and **Nagish** to 18 June 2026. It extended **Rogervoice** (IP CTS) and **Tive** (VRS, a new VRS entrant) to 16 July 2026. I found no later status — [FCC DA 26-59](https://docs.fcc.gov/public/attachments/DA-26-59A1.pdf); [FCC node 267236](https://www.fcc.gov/node/267236)
- Prior certifications for the incumbents: ClearCaptions (DA 23-291) and CaptionCall ASR (DA 21-1080) — [FCC IP CTS](https://www.fcc.gov/ipcts)

**VRS, direct video and 911**
- The 2025 VRS funding requirement is about $660.7M — [Rolka Loube 2025-26 rates order](https://rolkaloube.com/programs/federal-itrs/news/fcc-releases-2025-26-trs-fund-compensation-rates-order)
- In Dec 2024 the FCC issued a public notice urging businesses and agencies to use **Direct Video Calling (DVC)**: ASL users call a call centre and reach a signing agent directly, with no relay interpreter in the middle — [FCC DA 24-1266](https://docs.fcc.gov/public/attachments/DA-24-1266A1_Rcd.pdf)
- On 31 Mar 2025 the FCC adopted a further notice of proposed rulemaking (FCC 25-21) on accessibility of Next Generation 911. It is a proposal, not a final rule; I found no adopted rule for direct ASL video to 911 — [Federal Register 2025-03142](https://govinfo.gov/content/pkg/FR-2025-03-12/pdf/2025-03142.pdf)
- The FCC runs its own ASL Consumer Support Line, (844) 432-2275, a DVC example — [FCC VRS page](https://www.fcc.gov/vrs-speed-of-answer)

**AI sign translation from incumbents and startups**
- **Sorenson AST (16 Apr 2026):** two proofs of concept. (1) Pre-recorded video or text converted to an ASL avatar. (2) Real-time ASL recognition to English text for short two-way exchanges (retail counters, restaurants, airports). It is a gated proof-of-concept programme with no price, timeline or accuracy figures. Sorenson says it "enables hundreds of millions of conversations" a year across all its services — [Sorenson newsroom](https://sorenson.com/newsroom/sorenson-communications-unveils-ai-sign-language-translation-ast-proofs-of-concept/)
- **NVIDIA Signs (Feb 2025):** a free web platform for learning ASL, built with the American Society for Deaf Children (ASDC) and the agency Hello Monday/DEPT. A 3D avatar demonstrates each sign and webcam AI gives feedback. The goal is to grow from 100 to 1,000 validated signs by crowdsourcing 400,000 video clips, validated by fluent signers and interpreters, and to release the dataset publicly — [NVIDIA blog](https://blogs.nvidia.com/blog/ai-sign-language); [eWeek](https://www.eweek.com/news/nvidia-signs-platform/)
- NVIDIA Signs dataset: I found no confirmation that it has been released (as of Nov 2026). Access appears to be through a request form — [Thurrott](https://www.thurrott.com/a-i/317519/nvidia-announces-ai-to-help-teach-asl) (gap)
- **Signapse in US airports:** Gerald R. Ford International Airport (Grand Rapids, MI) piloted Signapse AI ASL screens in Nov 2023, showing real-time ASL plus captions for delays and gate changes. After the pilot it installed static Signapse ASL messages (with Art of Context) and says it is "working towards" making them permanent. I found no 2026 US airport rollout — [Signapse post](https://signapse.ai/post/pioneering-accessibility-enhancements-with-signapse-at-gerald-r-ford-international-airport)
- Milwaukee airport (MKE) launched an on-demand ASL interpreting service through Aira — [pulse.bot summary](https://www.pulse.bot/hotels/news/mke-airport-launches-asl-interpeting-service-for-travelers-5039c2da-c12c-47f4-b6ef-eb770888db3e/)
- **Talksign** (Nigeria/UK, founded Nov 2025, ASL-focused): recognises 250 ASL signs with a reported 84.7% single-sign accuracy. In May 2026 it launched the "Palm 1.0" and "Echo 1.0" models for ASL to/from text and speech — [TechCabal](https://techcabal.com/2026/05/20/talksign-launches-ai-powered-palm-1-0-and-echo-1-0/)
- **ChatSign** (NYU Abu Dhabi student startup, May 2026): two-way sign-to-speech with an avatar driven by an in-house model. Not US-based, but competing in ASL — [NYUAD](https://nyuad.nyu.edu/en/news/latest-news/world-and-societies/2026/may/nyuad-student-co-founds-startup-to-make-sign-language-translatio.html)

**Deaf-owned and Deaf-led ASL apps**
- **The ASL App** (developer DeafDigits Inc): "made by Deaf people". Free with in-app purchases; the full pack costs $9.99 — [App Store](https://apps.apple.com/app/the-asl-app/id921030207); [3Play interview](https://3playmedia.com/learn/faces-behind-screen/asl-app)
- **DawnSign Press:** a Deaf-owned ASL publisher, "trusted for 47 years", "made by us, for us" — [DawnSign](https://dawnsign.com/about)
- **Play With ASL:** a gamified ASL platform; founder Jon Mowl is described as a fourth-generation Deaf entrepreneur — [ASU+GSV](https://asugsvsummit.com/speakers/jon-mowl)
- **Ace ASL:** an AI app giving live feedback on signs, "guided by a Deaf native ASL speaker" — [Product Hunt](https://www.producthunt.com/products/ace-asl/makers)
- **Small Talk ASL:** a free app by animator Josh Staub, built with Deaf and hard-of-hearing artists and consultants (Deaf-involved, not Deaf-owned) — [TrendHunter](https://www.trendhunter.com/trends/small-talk-asl)
- **Lingvano** (Austrian, ASL course): featured by Apple on how it reaches the ASL community — [Apple Developer](https://developer.apple.com/articles/lingvano)

### Inferences
- The FCC rate design gives a ready policy template: pay for AI-only service, but at about two-thirds of the human rate, and keep the human option funded. An Uzbek programme (for example funded by a telecom levy or the state) could copy the "AI tier plus human tier" split.
- When the relay incumbents (Sorenson, and Rylo with Rylo Sign) build AI sign tools, the moat is distribution and the funded user base, not the model. A non-profit cannot compete on models, but can own the UzSL data and the community trust.
- DVC (calling an organisation and reaching a signing agent directly) needs no interpreter pool. It is a cheap first step for Uzbek banks and government call centres.

### Gaps
- **GoSign.AI:** no search results. I could not confirm that it exists.
- **"Deaf AI" / "SignPal":** not searched separately; no evidence found.
- **Purple, Global VRS, Convo 2026 changes and InnoCaption funding:** not verified beyond the earlier notes.
- The current FCC list of certified providers (fcc.gov/node/25849), and whether Nagish/Global Caption/Tive moved to full certification after mid-2026, are not confirmed.
- Text-to-911 coverage statistics for 2026: not found.

## Q2. USA: university labs, big tech and open data

### Takeaway
The biggest 2026 event in the region is Google's **Sign Language-to-Text (SL2T)**, shipped as a standard feature on Pixel 11 (Aug 2026). It was co-tested by RIT/NTID and claims more than 50 sign languages. Apple, by contrast, has chosen human interpreters (Apple TV sign interpretation, a FaceTime interpreter API). Academic labs (Gallaudet, RIT, BU/SDSU/Tufts) mainly supply data, evaluation and Deaf governance.

### Cited Findings
**Google**
- **SL2T (Sign Language-to-Text):** a standard feature on Google Pixel 11 (released Aug 2026). It converts signing to text in real time with the phone camera, reads hand shapes plus face and body, needs only one free hand, and lets the user edit the text before sending. Google says it was trained on more than 100,000 hours of data and "more than 50 international sign languages", with about a quarter of training time on ASL. The article does not say whether processing is on-device — [RIT news, 15 Sep 2026](https://www.rit.edu/news/rit-helps-google-develop-new-technology-converts-sign-language-text)
- The NTID **Center on Access Technology** (director Gary Behm, who is Deaf) helped test SL2T before release. Behm called it "a breakthrough" but said it should not replace qualified interpreters in medical, legal, educational or other high-stakes settings — [RIT news](https://www.rit.edu/news/rit-helps-google-develop-new-technology-converts-sign-language-text)
- Sam Sepah (RIT/NTID alumnus, Google's lead AI accessibility research programme manager) founded **Google DeepMind's AI Sign Language Advisory Committee** — [RIT news](https://www.rit.edu/news/rit-helps-google-develop-new-technology-converts-sign-language-text)
- The RIT article does not mention SignGemma. Whether SL2T uses SignGemma, and whether SignGemma's open weights are out, remains unconfirmed (see earlier notes).

**Apple**
- Nov 2026: the Apple TV app added on-screen sign language interpretation (ASL and BSL), starting with *Being Heumann* (13 Nov) and *F1*. It needs iOS/tvOS/macOS/visionOS 27.2 or later. Apple deliberately uses **human interpreters** (working with Directors of Artistic Sign Language), **not AI signers**. There is a "Movies & Shows with ASL" collection and "with ASL" search — [Apple Newsroom](https://apple.com/newsroom/2026/11/apple-tv-introduces-new-sign-language-interpretation-feature/); [MacRumors](https://macrumors.com/2026/11/10/apple-tv-sign-language-interpretation)
- May 2026 (Global Accessibility Awareness Day): Apple previewed an API that lets sign-language interpreting apps add a human interpreter to an active FaceTime call — [BornCity](https://borncity.com/news/apple-accessibility-sign-language-api-fuer-facetime-angekuendigt/)
- SignTime (existing): ASL in the US, BSL in the UK and LSF in France, for AppleCare and retail support — [MobiHealthNews](https://www.mobihealthnews.com/news/apple-releases-new-tools-meet-needs-folks-mobility-hearing-and-cognitive-disabilities)

**Meta, Amazon, OpenAI:** my searches found no sign-language product announcement (gap, not evidence of absence).

**University labs**
- **Gallaudet AI, Accessibility and Sign Language Center** (contact: Raja Kushalnagar). It runs an NSF-funded AICT REU summer programme (PI Kushalnagar, co-PI Christian Vogler) with students from Gallaudet, RIT and Cornell. Projects included improving ASL sign-recognition models and testing MediaPipe for detecting when ASL is present in video: it worked on high-quality video but poorly on archival footage — [Gallaudet center](https://gallaudet.edu/research/artificial-intelligence-accessibility-and-sign-language-center/); [Gallaudet interns story](https://gallaudet.edu/research/artificial-intelligence-accessibility-and-sign-language-center/summer-interns-find-ways-to-harness-ai-for-accessibility/)
- **ASL-LEX** (Boston University, San Diego State University and Tufts): a lexical database with frequency and iconicity ratings and phonological properties. Version 2.0 took six years. A second NSF grant has started work on 3.0. Its visualisation won the NSF/Popular Science Vizzies award, and the code is open source on GitHub. A 2025 PNAS paper (Campbell et al., 122(16)) came out of it on iconicity in the lexicon — [BU Deaf Center](https://deafcenter.bu.edu/asl-lex); [SDSU LLCN](https://llcn.sdsu.edu/research-areas/asl-lex/); [Tufts Now](https://now.tufts.edu/articles/visual-dictionary-sign-language)

### Inferences
- With SL2T on Pixel, "basic sign-to-text on a phone" is becoming a platform feature in the US, as Live Transcribe did for captions. If SL2T really covers 50+ languages, check whether UzSL or Russian Sign Language (RSL) is among them before building recognition from scratch. If RSL is supported, Uzbek Deaf users of Russian-influenced signing may already get partial value.
- The Apple stance (human interpreters, no AI signers for content) matches the WFD position already noted. That supports the plan of using AI only for templated or static content and keeping humans for conversation.
- An ASL-LEX-style lexical database (open, with linguistic properties) is a cheap, high-value academic deliverable for UzSL, and fits university partnerships.

### Gaps
- SL2T list of languages and on-device vs cloud processing: not found.
- PopSign game source licence, the Georgia Tech CopyCat status, and the CMU, UW and Microsoft Research sign projects for 2025-26: not researched in this pass.
- Gallaudet Motion Light Lab 2025-26 output: not found.

## Q3. Canada: SRV Canada VRS and the CAV model

### Takeaway
Canada runs VRS as a single non-profit administrator, the **Canadian Administrator of VRS (CAV)**, under the brand SRV Canada VRS. It is funded by all telecom providers through the CRTC's National Contribution Fund and offers ASL and LSQ. It is a compact, governable model (about $27-30M CAD a year, roughly 10k registered users) that is closer in size to what Uzbekistan could build than the US system.

### Cited Findings
- Funding comes from the **National Contribution Fund (NCF)**: the CRTC requires telecom service providers to pay for VRS — [CRTC 2024-281](https://crtc.gc.ca/eng/archive/2024/2024-281.htm) (page returned 403 to my fetch; the fact is from the search summary); [Cartt.ca](https://cartt.ca/crtc-approves-30m-in-funding-for-cav-for-2022/)
- Approved funding: $27,251,477 (2021) and $30M (2022) — [CRTC 2021-102](https://www.crtc.gc.ca/eng/archive/2021/2021-102.pdf); [Cartt.ca](https://cartt.ca/crtc-approves-30m-in-funding-for-cav-for-2022/)
- Early usage (2017): an average of 32 min/month per customer against 100 forecast, which produced a surplus. Registered users were expected to grow from 4,400 (June 2017) to about 6,000 by the end of 2018 — [CRTC 2017-437](https://crtc.gc.ca/eng/archive/2017/2017-437.htm)
- A CAV study of 2023 usage (Jan 2024) surveyed **9,651 registered individuals** — [SRV Canada VRS download](https://srvcanadavrs.ca/en/download/26118) (search snippet)
- **Telecom Regulatory Policy CRTC 2025-54** confirmed VRS as a basic telecommunications service that must remain available, with ASL and LSQ as the primary languages. **Decisions 2026-72 and 2026-73** rejected applications to review and vary it. The DHH Coalition had argued the 2025 policy limits VRS development and expansion — [CRTC 2025-54](https://crtc.gc.ca/eng/archive/2025/2025-54.htm); [CRTC 2026-72](https://crtc.gc.ca/eng/archive/2026/2026-72.htm); [CRTC ASL summary](https://crtc.gc.ca/eng/phone/acces/rela/pllsrrela/mod.htm)
- CAV published a new Strategic Plan in Feb 2026 — [CAV Strategic Plan PDF](https://srvcanadavrs.ca/wp-content/uploads/dlm_uploads/2026/02/CAV-Strategic-Plan-EN.pdf) (403 on fetch; contents not read)

### Inferences
- CAV is the best structural analogue for an Uzbek non-profit: one non-profit administrator, a telecom levy, two sign languages (compare UzSL and Russian-influenced signing), and a regulator-defined "basic service". Starting usage was low (32 min/month), so early budgets should be sized on actual rather than forecast minutes.
- The 2025-2026 fight between the DHH Coalition and the CRTC shows the risk of the model: once VRS is fixed as a regulated basic service, expanding scope (new features, AI, hours) needs regulatory approval. An Uzbek design should write expansion rules into the charter from the start.

### Gaps
- 2025/2026 funding amount, minutes, current registered users, hours and the ASL/LSQ split: CRTC pages and the CAV PDF were blocked (403).
- Quebec-specific LSQ tools and Canadian AI/sign research labs: not researched in this pass.

## Q4. Latin America: Colombia, Brazil, Argentina, Mexico, Chile, Peru, Costa Rica

### Takeaway
**Colombia's Centro de Relevo** (MinTIC with FENASCOL) is the strongest state model in the region: free relay calls and on-site video interpreting (SIEL), 516,523 relayed calls in 2024, and copied by Ecuador, Peru, Chile and Paraguay. But it is re-tendered every year to an operator, so continuity is fragile. Brazil's growth is now driven by state laws and city/state contracts for video-interpreter centres (ICOM by the non-profit AME). Argentina's **Háblalo** shows that a free app can scale through corporate sponsors. Mexico, Chile, Peru and Costa Rica have mostly prototypes and interpreter shortages.

### Cited Findings
**Colombia — Centro de Relevo (MinTIC + FENASCOL)**
- It is a MinTIC programme run in alliance with FENASCOL (the national Deaf federation). Services: (1) **Relevo de llamadas**, two-way relay by video between Deaf and hearing people through an online Colombian Sign Language (LSC) interpreter; (2) **SIEL** (Servicio de Interpretación en Línea), a virtual interpreter for Deaf and hearing people in the same room. Channels: web calls, video calls, chat and WhatsApp video messages. **All services are free** — [Xataka Colombia, 27 Sep 2025](https://www.xataka.com.co/aplicaciones/centro-relevo-plataforma-que-impulsa-conectividad-barreras-para-personas-sordas-colombia)
- 2024: **516,523 relayed calls** (data to 15 Dec), against a target of 550,000. **4,500 people benefited** that year. The four-year target is more than 2.1M relayed calls. The service for the following year "depends on selecting an operator through a contracting process". It won the Zero Project award in 2020 and served as a model for Ecuador, Peru, Chile and Paraguay — [MinTIC, 19 Dec 2024](https://mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/399452:Este-ano-el-Centro-de-Relevo-gestiono-516-523-llamadas-relevadas-para-la-poblacion-con-discapacidad-auditiva)
- Hours: daily from 6:00 to midnight (search summary of a MinTIC source; not directly verified) — [MinTIC w3-article-405731](https://www.mintic.gov.co/portal/715/w3-article-405731.html)
- A 2026 MinTIC handover (empalme) document gives relayed-communication totals of 4,231,846 and 3,224,568 without saying clearly what each column covers (probably cumulative totals for different periods). Use with caution — [MinTIC empalme 2026](https://mintic.gov.co/micrositios/empalme-gobierno/2026/918/articles-439421_respuestas_00003.pdf)
- **Telecom tie-in:** 30 Claro stores in six cities offer LSC interpretation through the "Servir" tool, and Claro mobile plans keep Centro Relevo usable after data runs out (zero-rating). Example prices: COP 7,000 prepaid; COP 50,900 (85 GB) and COP 59,900 (100 GB) postpaid — [Xataka Colombia](https://www.xataka.com.co/aplicaciones/centro-relevo-plataforma-que-impulsa-conectividad-barreras-para-personas-sordas-colombia)
- Zero Project listing: "Free relay service with sign language interpreters, also on phone and WhatsApp" — [Zero Project](https://zeroproject.org/view/project/7c20287f-b012-eb11-a813-0022489b3a6d)

**Brazil — beyond Hand Talk and VLibras**
- **ICOM** (non-profit AME, Associação Amigos Metroviários dos Excepcionais, founded 1990, through its R&D unit AME Lab, founded 2019). ICOM is a 24-hour video intermediation service between Deaf customers and companies, staffed by Libras interpreters. As of Nov 2023 it had **140 partners**, including LATAM Airlines. It is a partner of Bradesco's inovabra hub, and the AME-run CIL service won Zero Project recognition in 2022 — [Startupi](https://startupi.com.br/ame-plataforma-de-traducao-de-libras-empresas/); [App Store: ICOM](https://apps.apple.com/us/app/icom/id1266139375)
- **CIL-ES** (Espírito Santo state, using ICOM via QR codes in public offices): more than 10,000 public-service interactions — [Startupi](https://startupi.com.br/socialtech-capixaba-mostra-como-o-uso-de-qr-codes-em-libras-ja-viabilizou-mais-de-10-mil-atendimentos-publicos-no-estado/)
- Public-sector buyers of ICOM: the Rondônia state government (free app for citizens) and the Federal Prosecution Service (MPF) in Santa Catarina for its citizen-service rooms. It also has a partnership with Globo — [Rondônia ao Vivo](https://rondonianoar.com.br/?p=64990); [MPF-SC](https://www.mpf.mp.br/o-mpf/unidades/pr-sc/noticias/mpf-adota-plataforma-para-atendimento-em-libras-em-santa-catarina); [Consumidor Moderno](https://consumidormoderno.com.br/parceria-globo-icom/)
- **Rybená** (founded 2019): a website script that renders Portuguese as 3D-avatar Libras plus text-to-speech, sold by subscription. It claims to reach about 83 million Brazilians (company claim) — [Rybená](https://rybena.com.br/en/sobre); [Rybená docs](https://docs.rybena.com.br/manual/geral/informacoes); [Rybená subscription](https://rybena.com.br/en/assinatura)
- **State laws:** Pará Lei 11.185 (26 Sep 2025) sets an accessible-service policy for Deaf people. Where an in-person interpreter is unavailable, the state must provide another form, including **automatic speech transcription**. Tocantins Lei 4.792/2025 ("Setembro Azul"). Bills in Mato Grosso (video-call interpreter in public and private services, Feb 2025) and Santa Catarina (a state "Central de Videochamada em Libras"). The São Paulo city council passed a law on Libras service in public offices. São Paulo state's SOU.SP.GOV.BR app added Libras service for about 1,300 Deaf civil servants, and a Libras centre already serves police stations — [Pará law PDF](https://bancodeleis.alepa.pa.gov.br/arquivos/lei11185_2025_44436.pdf); [Diário do Pará](https://diariodopara.com.br/para/para-sanciona-lei-que-garante-atendimento-acessivel-e-personalizado-a-pessoas-surdas/); [AL-MT bill](https://www.al.mt.gov.br/storage/webdisco/cp/20250217111013143100.pdf); [CMSP](https://www.saopaulo.sp.leg.br/blog/e-lei-apos-aprovacao-da-camara-legislacao-garante-atendimento-em-libras-as-pessoas-com-deficiencia-auditiva-em-reparticoes-publicas/); [Gazeta SP](https://www.gazetasp.com.br/estado/sp-expande-acessibilidade-em-libras-no-aplicativo-de-servidores/)

**Argentina**
- **Háblalo** (Asteroid Technologies, founder Mateo Salvatto, created 2017): a free AAC/communication app for Deaf, hard-of-hearing, ALS, cerebral palsy, autism and aphasia users. Features: speech-to-text, text-to-speech, translation, pictograms, offline mode, an "explain the app" button, and police/fire call shortcuts — [Defonline](https://defonline.com.ar/ciencia-tecnologia/hablalo-una-app-con-voz-propia/); [Wikipedia](https://www.wikipedia.com/wiki/Mateo_Salvatto); [TechRadar sponsored (Iberia)](https://global.techradar.com/es-es/computing/websites-apps/por-que-tu-negocio-pierde-7-por-ciento-de-ventas)
- Háblalo scale over time: 60,000 users worldwide (2019) — [Ámbito](https://www.ambito.com/ni-bill-gates-ni-elon-musk-el-emprendedor-argentino-que-se-propone-cambiar-el-mundo-n5029450); more than 350,000 people in 65 countries (2023) — [Infobae](https://www.infobae.com/salud/2023/08/12/la-nueva-era-de-la-accesibilidad-como-funciona-la-plataforma-que-facilita-la-comunicacion-de-personas-con-discapacidades/); more than 400,000 (2024) — [Emprendedor](https://emprendedor.com/mateo-salvatto-el-nino-que-sono-cambiar-al-mundo-con-la-tecnologia-y-hoy-asiste-a-mas-de-400000-personas-con-discapacidad/)
- Business model: free to users, paid by corporate/B2B deployments in stores and service desks. Deployments include Santander Argentina (the first Argentine bank), Nespresso boutiques, Farmacity and Iberia (custom version) — [Mercado: Santander](https://mercado.com.ar/protagonistas/santander-suma-la-aplicacion-hablalo); [Mercado: Nespresso](https://mercado.com.ar/protagonistas/nespresso-suma-hablalo); [Ecosistema Startup](https://ecosistemastartup.com/?p=34140)
- **Open source?** No evidence that Háblalo is open source; it appears to be a proprietary product of Asteroid Technologies (no public repository found).
- Research: UNSJ (WICC 2026 poster) on generative-AI translation rules between Spanish and LSA gloss (30 Spanish→gloss rules and 25 in reverse; next steps are validation with interpreters and 3D animation) — [WICC 2026](https://wicc2026.uai.edu.ar/posters/agentes%20y%20sistemas%20inteligentes/16460.pdf); a UNC CNN translator from the Argentine fingerspelling alphabet to subtitles (it cites about 750,000 people with hearing loss in Argentina) — [SADIO JAIIO](https://ojs.sadio.org.ar/index.php/JAIIO/article/download/927/759); UBA's ELDES LSA AI teaching platform (2023) — [Cadena 3](https://www.cadena3.com/noticia/novedades/lanzan-una-plataforma-de-inteligencia-artificial-para-la-ensenanza-de-lsa_368830)

**Mexico (LSM)**
- Mostly prototypes. Incluedu, an "AI-based sign-language instructor", was a TecPrize 2025 finalist — [Emprendedor (TecPrize tag)](https://emprendedor.com/tag/tecprize/). Daktilos, an interactive LSM fingerspelling-alphabet platform, and Sordbo appeared in Dec 2024 — [El Imparcial](https://www.elimparcial.com/tecnologia/2024/12/04/estas-son-dos-plataformas-para-aprender-y-promover-lengua-de-senas-mexicana/). The IPN (Instituto Politécnico Nacional) has an LSM translation glove project (Aug 2025 communiqué) — [IPN](https://ipn.mx/assets/files/imageninstitucional/docs/comunicados/2025/08/c-42-guante-lsm-ipn.pdf). LSM Esencial is a 2023 employment-oriented LSM app by Rafael Verdugo — [Tus Buenas Noticias](https://www.tusbuenasnoticias.com/noticias/mexico/2023/01/30/17892-rafael-verdugo-el-sinaloense-que-creo-una-aplicacion-para-aprender-lenguaje-de-senas)

**Chile, Peru, Costa Rica**
- Chile: Chilean Sign Language (LSCh) is recognised under Ley 20.422 (2010). A 2025 court case concerned a Calama hospital that denied a Deaf patient an interpreter. The courts contract online sign interpreters through a platform, and Samsung Chile has offered LSCh customer service since 2021. I found no national relay service — [U. Chile CA 284-2025](https://derecho.uchile.cl/dam/jcr:e6d473f4-af65-43d1-9961-9de6c8970d9c/CA%20284-2025.pdf); [Samsung Chile](https://news.samsung.com/cl/samsung-chile-lanza-servicio-de-atencion-a-clientes-en-lengua-de-senas)
- Peru: during COVID the Defensoría del Pueblo ran three-way WhatsApp video calls (Deaf person, Defensoría staff, interpreter). Current status unknown — [Andina](https://andina.pe/ingles/noticia-defensoria-atiende-pedidos-personas-sordas-mediante-videollamadas-797762.aspx)
- Costa Rica: Ley 9822 (2020) requires institutions and companies to provide interpreters for Costa Rican Sign Language (LESCO). In Oct 2026 the Defensoría de los Habitantes warned that the shortage of LESCO interpreters still blocks care, especially in health. Grupo Mutual offers a private tablet video-interpreter service — [Delfino](https://delfino.cr/2026/10/defensoria-advierte-barreras-para-la-atencion-de-personas-sordas-por-falta-de-interpretes-de-lesco); [El Financiero CR](https://www.elfinancierocr.com/tecnologia/conozca-este-servicio-en-linea-para-la-atencion-de/E6Y4GIWPMBBVXIDDA5LUJEFZHE/story/)

### Inferences
- **Colombia is the closest template for Uzbekistan:** a ministry of digital development pays, the national Deaf association (FENASCOL; in Uzbekistan the Deaf society) co-runs it, it is free to users, it works over web and WhatsApp, and SIEL handles in-person situations. Its two weaknesses are annual re-tendering (a continuity risk) and no published open code. An Uzbek non-profit can offer the open-source software layer that a ministry contracts to operate, so a change of operator does not mean a change of platform.
- The Claro zero-rating deal is a cheap, high-impact ask for Uzbek mobile operators (Ucell, Beeline, Uzmobile): keep the relay app usable even when the user has no data balance.
- Brazil shows the "law pushes procurement" pattern: state laws (such as Pará's) explicitly allow remote interpreting and automatic transcription, and that creates paying public buyers (states, prosecutors' offices) for a non-profit operator like AME/ICOM. A non-profit (AME) running a 24/7 interpreter centre and selling it to companies and governments is a proven model.
- Háblalo shows that a free, non-sign (text/voice/pictogram) AAC app can reach hundreds of thousands of users when businesses sponsor it as an accessibility measure. That is an MVP that needs no sign-recognition AI.
- Mexico and Argentina AI-LSM/LSA projects are mostly student prototypes with no datasets released: the same gap Uzbekistan has. University research is not a substitute for a funded data-collection programme.

### Gaps
- **Giulia app (Brazil):** not researched; status unknown.
- Centro de Relevo budget (COP), operator for 2025/2026, SIEL session counts and whether any code is open: not found.
- ICOM prices and interpreter count: not public in the sources found.
- Ecuador, Peru and Chile relay programmes "inspired by Colombia": named by MinTIC but no current pages found.
- Mexico "Señas" app: not found.

## Q5. Lessons for an Uzbek non-profit open-source platform (synthesis)

### Takeaway
The Americas offer three transferable models: (1) Canada's single non-profit administrator funded by a telecom levy; (2) Colombia's ministry-funded, Deaf-federation-co-run free relay with WhatsApp channels and telecom zero-rating; (3) Argentina/Brazil's corporate-sponsored free apps and interpreter centres. On AI, the 2026 signal is that big platforms (Google SL2T) and relay incumbents (Sorenson AST, Rylo Sign) are commoditising sign-to-text for major languages. A small Uzbek effort should therefore concentrate on UzSL data, human-interpreter relay and community governance rather than competing on model building.

### Cited Findings
- AI captions are priced at about 65% of human-assisted captions under FCC rules ($0.95 vs $1.45 per minute in 2026-27) — [FCC DA 26-646](https://docs.fcc.gov/public/attachments/DA-26-646A1.pdf)
- Canada's non-profit VRS costs roughly $27-30M CAD a year and serves on the order of 10k registered users — [CRTC 2021-102](https://www.crtc.gc.ca/eng/archive/2021/2021-102.pdf); [SRV Canada VRS](https://srvcanadavrs.ca/en/download/26118)
- Colombia: 516,523 calls for 4,500 people in 2024 (about 115 calls per beneficiary a year); free; web plus WhatsApp; re-tendered yearly — [MinTIC](https://mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/399452:Este-ano-el-Centro-de-Relevo-gestiono-516-523-llamadas-relevadas-para-la-poblacion-con-discapacidad-auditiva)
- Google SL2T claims more than 50 sign languages; Deaf testers warn against high-stakes use — [RIT](https://www.rit.edu/news/rit-helps-google-develop-new-technology-converts-sign-language-text)
- Apple uses human interpreters, not AI, for sign content — [Apple Newsroom](https://apple.com/newsroom/2026/11/apple-tv-introduces-new-sign-language-interpretation-feature/)

### Inferences
- **Priority order for Uzbekistan:** (a) a free video relay plus on-site interpreter (SIEL-type) service over web, Telegram and WhatsApp, with an open-source stack, run with the Deaf society; (b) direct video calling (signing agents) for banks and government call centres; (c) a text/voice/pictogram AAC app (Háblalo-type) as a no-AI MVP; (d) a crowdsourced UzSL dataset with ASL-LEX-style lexical data (NVIDIA Signs and PopSign show the method); (e) AI signers only for templated announcements.
- **Funding path:** lobby for a CAV-style levy or a MinTIC-style ministry line item. Meanwhile, get corporate sponsors (banks and retail, as Santander and Nespresso did for Háblalo) and operator zero-rating (as Claro did).
- **Governance:** CAV's DHH Coalition dispute shows the scope of the service must be flexible in the founding rules, and Colombia shows that yearly tenders risk service gaps. Owning the open-source platform in the non-profit lets operators change without the service stopping.
- **Measure early:** CAV's first usage was a third of forecast. Budget on real usage and grow it.

### Gaps
- No Americas source gave a cost per relayed minute for Colombia or Brazil, which is needed to estimate an Uzbek budget.
- Whether SL2T or any big-tech sign feature covers Russian Sign Language or UzSL: not verified.
