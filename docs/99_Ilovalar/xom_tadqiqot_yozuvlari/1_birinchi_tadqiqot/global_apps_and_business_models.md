# Global landscape: Deaf / hard-of-hearing communication apps, platforms and business models (outside Russia/CIS), 2024-2026

Research date: 2026-11-15. About 20 search/fetch calls. Many company figures (users, revenue) are self-reported. Items I could not verify are in the Gaps sections. Some well-known facts from training knowledge (e.g. SignAll product details, Apple/Microsoft feature specifics) are NOT listed as findings because I did not re-verify them.

## 1. Sign-language-to-text/speech (recognition) products

### Takeaway
No commercially proven, general-purpose sign-to-text product exists as of late 2026. Google's SignGemma was announced in May 2025 and is still not openly released. SLAIT gave up on translation for lack of data and pivoted to teaching. The startups that survive (Sign-Speak, SignAll) are small and live on grants. The most significant consolidation is Rylo (ex-Nagish) acquiring sign.mt in 2025, and Sorenson buying two AI sign-language startups.

### Cited Findings
- **Google SignGemma:** Google DeepMind announced it at Google I/O in May 2025 as an open model that translates sign language (ASL first) into spoken-language text. The first public demo came via X on 27 May 2025, and a broader release was expected in Q4 2025 — [Hans India](https://www.thehansindia.com/tech/google-unveils-signgemma-ai-tool-to-translate-sign-language-into-text-by-year-end-974884); [TechCrunch](https://techcrunch.com/2025/05/20/the-newest-google-gemma-ai-model-can-run-on-phones); [MultiLingual](https://multilingual.com/google-signgemma-on-device-asl-translation/)
- **SignGemma status:** On Google's developer forum, staff said "We don't have a specific timeline to share right now" — [Google AI forum](https://discuss.ai.google.dev/t/signgemma-release-date/113794). An aggregator page updated 11 Aug 2026 says the open-weights release is still pending and an interest form is the only way in — [aixploria](https://www.aixploria.com/en/?p=38909) (low-quality source; treat as indicative).
- **SLAIT (Spain/Germany):** It started from Aachen University of Applied Sciences research on real-time ASL translation — [TechCrunch 2021](https://techcrunch.com/2021/04/26/slaits-real-time-sign-language-translation-promises-more-accessible-online-communication). In 2023 it pivoted from translation to AI-powered interactive ASL lessons ("SLAIT School"). Its CEO said there was not enough data for full translation — [TechCrunch 2023](https://techcrunch.com/2023/05/11/slait-pivots-from-translating-sign-language-to-ai-powered-interactive-lessons/amp/). Total raised is about $120K — [CB Insights](https://www.cbinsights.com/company/slait-school). **Status: translation product dead, pivoted.**
- **Sign-Speak (US):** Founded in 2020 by Yami Payano, Nikolas Kelly and Nicholas Wilkins, and an AWS-supported startup — [AWS Startups](https://aws.amazon.com/blogs/startups/sign-speak-builds-with-ai-on-aws-to-create-accessible-experiences/). CB Insights reports $1.22M total over 10 rounds, with NSF among the investors (grant-funded) — [CB Insights](https://www.cbinsights.com/company/sign-speak/financials). An SBIR record shows a Phase I award of $256K and a Phase II award of $1.25M for a "real-time bidirectional ASL communication system", but I could not confirm the recipient — [SBIR](https://www.sbir.gov/portfolio/2444811).
- **SignAll (Hungary/US):** Founded in 2016 with $3.6M raised in total — [CB Insights](https://www.cbinsights.com/company/signall1). It partnered on an "ASL Alphabet Lens" (Snapchat) — same source. I found no news of a shutdown or acquisition, and no evidence of recent activity.
- **GnoSys (Evalk, Netherlands):** Indian press (PTI) describes it as a Netherlands-based app that uses neural networks and computer vision to turn signing video into speech, and claims it works with any sign language. No test data was given — [The Quint/PTI](https://www.thequint.com/pti/new-ai-app-for-deaf-translates-sign-language-into-speech-in-real-time). **No independent accuracy evidence found.**
- **Rylo (ex-Nagish) acquired sign.mt in 2025** and now covers phone captions, live in-person transcription and sign-language AI — [runtimewire](https://runtimewire.com/article/nagish-rylo-85-million-general-catalyst); [hearinghealthmatters](https://hearinghealthmatters.org/thisweek/2026/rylo-captions-context/)
- **Sorenson acquired two AI sign-language interpreting startups** after Teleperformance bought ZP. Terms were not disclosed — [Slator](https://tech.slator.com/?p=102822) (the page returned 403 on fetch, so I have only the headline).

### Inferences
- Recognition is data-bound (SLAIT's explicit lesson). For Uzbek Sign Language, a low-resource language, full sign-to-text is not a realistic MVP. Isolated-sign or fingerspelling recognition, or a human-in-the-loop design, is more realistic.
- Big players (Google, Sorenson, Rylo) are absorbing the space. Small standalone recognition startups have not reached commercial scale.

### Gaps
- Accuracy claims for any product (SignAll, Sign-Speak, GnoSys, SignGemma) — no independent benchmarks found.
- Microsoft and Apple sign-recognition efforts: not researched/verified in this pass.
- Names of the two startups Sorenson acquired (Slator blocked).

## 2. Text/speech-to-sign avatar products and Deaf reception

### Takeaway
Avatar and synthetic-signer vendors with real traction are B2G/B2B. Signapse (UK rail, US airports), Kara (NZ/Australia emergency messaging) and Hand Talk (Brazil, app plus website plugin) all sell one-way, mostly pre-scripted content. The WFD/WASLI position is accepted for static, pre-recorded information but opposed as a replacement for human interpreters in live, complex or important content.

### Cited Findings
- **Signapse (UK):** A £2M seed in June 2024 (≈£1.5M investors, led by Soulmates Ventures and the Irish Deeptech Seed Fund, plus £500K from the UK government/Innovate UK) — [tech.eu](https://tech.eu/2024/06/05/signapse-secures-ps2m-seed-for-ai-sign-language-tanslation/); [Signapse](https://signapse.ai/new/signapse-closes-seed-funding-round). It produces photorealistic AI-generated BSL/ASL video. Zero Project reports BSL real-time travel information across the UK rail network since 2025, and use at about 2,500 UK stations and major US airports by mid-2025 — [Zero Project](https://zeroproject.org/view/project/100ff85a-f64c-f011-8779-7c1e527683f1). It also sells a "website sign language" product — [Signapse](https://register.signapse.ai/website-sign-language). No 2025/2026 round found.
- **Kara Technologies (NZ):** A University of Auckland spin-out (2017) that raised a NZ$1.3M seed in January 2023 — [University of Auckland](https://www.auckland.ac.nz/en/news/2023/01/12/kara-technologies-sign-language-avatar-seed-funding.html). It received a grant from the Red Cross Humanitech Lab for emergency sign-language messaging — [Startup Daily](https://www.startupdaily.net/topic/funding/red-cross-impact-investor-humanitech-lab-backs-kara-technologies-and-airseed-with-500000-grants/). A pilot translating NZSL children's books was funded by the NZSL Board and Ko Taku Reo — [NZ Entrepreneur](https://nzentrepreneur.co.nz/kara-technologies-pioneering-inclusive-emergency-sign-language-success-for-the-deaf/). It positions itself as co-designing with the Deaf community — same source.
- **Hand Talk (Brazil):** Its 3D avatar Hugo was born with the company in 2012, and Maya was added later — [Hand Talk blog](https://www.handtalk.me/en/blog/how-were-hugo-and-maya-created/). It got a $750K Google grant in May 2019 — [Briter](https://www.briter.co/companies/handtalk). User numbers conflict: the company claims 3M+ users and 4M+ downloads, an awards listing says 1M+ — [Hand Talk](https://www.handtalk.me/en/blog/meet-the-hand-talk-sign-language-translator-app/); [Pluralism award](https://award.pluralism.ca/?p=961).
- **WFD + WASLI joint statement on signing avatars (14 March 2018, updated April 2018):** They caution against using avatars as a replacement for human signers because of the difference in linguistic quality. They are most concerned about live, complex or important information (e.g. news). Avatars may be acceptable for pre-recorded, static customer information. Avatars only work one way, spoken to sign — [WFD statement PDF](https://wfdeaf.org/wp-content/uploads/WFD-and-WASLI-Statement-on-Avatar-FINAL-14032018-Updated-14042018.pdf); [WASLI](https://wasli.org/news/wfd-wasli-statement-use-signing-avatars/)
- **Academic evidence (Netherlands, healthcare):** In a text-to-sign avatar study, individual avatar signs were recognised almost as often as human ones, but sentence comprehension and clarity were substantially lower — [HU Utrecht](https://hu.nl/onderzoek/publicaties/exploring-automatic-texttosign-translation-in-a-healthcare-setting)

### Inferences
- A viable avatar niche is fixed or templated messages: transport announcements, bank or government notices, emergency alerts, website plugins. This matches the WFD's "static information" carve-out and makes B2G/B2B sales defensible.
- Pitching avatars as a replacement for interpreters invites Deaf-community opposition. Co-design (the Kara pattern) and Deaf staff are reputational necessities.

### Gaps
- Simax (EU), MindRove, Signly and sign.mt standalone details were not verified in this pass.
- Hand Talk pricing and revenue: not found.
- Signapse pricing: not found.

## 3. Captioning / transcription apps used by Deaf people

### Takeaway
Captioning is where the money is. Rylo (ex-Nagish) raised $85M in June 2026 at a reported ~$500M valuation, on a model that is free to users and paid by the FCC TRS Fund per minute (IP CTS). Ava is subscription/B2B with human-edited tiers. Google and Apple give away basic live captions, which commoditises consumer-only apps.

### Cited Findings
- **Rylo (ex-Nagish), Israel/US:** Announced $85M and the rebrand on 9 June 2026. The round was led by General Catalyst's Customer Value Fund, with Canaan, Vertex Ventures and Contour. The reported valuation is about $500M and total funding over $100M — [BusinessWire](https://www.businesswire.com/news/home/20260604498117/en/); [MobiHealthNews](https://www.mobihealthnews.com/news/rylo-raises-85m-expand-ai-communication-tools-deaf-and-hard-hearing-users); [runtimewire](https://runtimewire.com/article/nagish-rylo-85-million-general-catalyst)
- **Rylo's model:** FCC-certified AI phone captioning that is free to users. Revenue is federal reimbursement of $1 to $8 per minute of eligible conversation, with rates set in multi-year cycles. Regulators can adjust rates and audit providers — [runtimewire](https://runtimewire.com/article/nagish-rylo-85-million-general-catalyst). Reported targets are $100M ARR by end-2026 and $1B by 2028, and the company is reportedly profitable (company/press claims) — [lavx](https://news.lavx.hu/article/rylo-raises-85-million-targets-1-billion-in-revenue-by-2028); [AlleyWatch](https://alleywatch.com/2026/07/rylo-ai-communication-accessibility-deaf-hard-of-hearing-real-time-captioning-platform-tomer-aharoni/)
- **Earlier Nagish funding:** $5M seed plus an $11M Series A led by Canaan ($16M total) — [Hearing Review](https://hearingreview.com/hearing-products/amplification/amplified-caption-phones/ai-powered-transcription-app-gets-more-funding)
- **Ava (US/France):** A $4.5M round in December 2020 alongside the desktop/web expansion — [TechCrunch](https://techcrunch.com/2020/12/10/ava-expands-its-ai-captioning-to-desktop-and-web-apps-and-raises-4-5m-to-scale). A $10M Series A in May 2022 brought the total to $16.5M — [Axios](https://www.axios.com/2022/05/04/ava-live-caption-company-scores-10m). Products include the Ava App, Ava CC and Ava Scribe (AI plus human editing) — [Ava blog](https://www.ava.me/blog/ava-1-0-24-7-accessibility-for-deaf-hearing-conversations)
- **Big-tech free captions:** Google Live Translate (in the Translate app) supports 70+ languages and reached iOS in March 2026 — [MacRumors](https://www.macrumors.com/2026/03/26/google-translate-gemini-ai/); [iDropNews](https://www.idropnews.com/news/google-live-translate-released-iphone-70-languages/261713/). Apple's Live Translation (iOS 26, AirPods) launched with about 9 languages — [TravelAwaits](https://www.travelawaits.com/3015964/inside-the-new-live-translation-updates-from-apple-for-airpods-users/) (translation, not captioning; included as an indicator of big-tech language coverage).

### Inferences
- Rylo's economics show the most scalable Deaf-tech business is *government-reimbursed per-minute service*, not consumer subscriptions. Without a TRS-like fund, Uzbekistan would need a B2G contract or a telecom levy to replicate it.
- Uzbek-language ASR quality in free big-tech tools is the key competitive variable. A local platform could win on Uzbek/Karakalpak/Russian-mixed speech ASR.

### Gaps
- Current Ava pricing tiers (not in sources; check ava.me).
- Google Live Transcribe and Apple Live Captions language counts, including whether Uzbek is supported — not found in this pass.
- RogerVoice (France) and Otter: not researched in this pass.

## 4. VRS / VRI models and who pays

### Takeaway
The US is the reference model. VRS is free to users and paid per minute from the FCC TRS Fund, which comes from a levy on telecom revenue. The fund requirement for VRS in 2025-26 is about $661M, and the market is a near-duopoly of private-equity-owned providers (Sorenson; ZP, now owned by Teleperformance/LanguageLine). The UK uses government funding (Scotland's Contact Scotland BSL) plus Ofcom-mandated emergency BSL relay. India's government ISLRTC launched a free online video relay in 2023, and private on-demand apps (SignAble) also exist.

### Cited Findings
- **US TRS Fund 2025-26:** The order (DA 25-571, 1 July 2025) covers traditional TRS, STS, CTS, IP Relay, VRS and IP CTS. Per-minute rates are $7.3512 for traditional TRS, $8.4822 for STS and $3.1893 for CTS — [FCC DA 25-571](https://docs.fcc.gov/public/attachments/DA-25-571A1.pdf); [Rolka Loube](https://rolkaloube.com/programs/federal-itrs/news/fcc-releases-2025-26-trs-fund-compensation-rates-order). The overall 2025-26 VRS funding requirement is $660,660,436 — [FCC DA 25-578](https://docs.fcc.gov/public/attachments/DA-25-578A1.docx); [Rolka Loube contribution order](https://rolkaloube.com/programs/federal-itrs/news/fcc-releases-2025-26-trs-fund-contribution-factors-order)
- **US 2026-27 (DA 26-646):** $9.1713 per minute for interstate traditional TRS, STS and CTS, and $2.2710 per minute for IP Relay — [FCC DA 26-646](https://docs.fcc.gov/public/attachments/DA-26-646A1.pdf); [Rolka Loube](https://rolkaloube.com/programs/federal-itrs/news/fcc-releases-2026-27-trs-fund-compensation-and-contribution-formulas-nbsp)
- **Market structure:** Sorenson and ZP Better Together are two of only three VRS companies and together hold almost the entire market. Both are private-equity owned (advocacy source) — [PESP](https://pestakeholder.org/reports/lost-in-interpretation-private-equitys-capture-of-a-vital-sign-language-translation-tool/)
- **ZP acquisition:** Teleperformance (parent of LanguageLine) acquired ZP Better Together (ZVRS + Purple) from Kinderhook on 26 November 2024. The reported price is $490M, and ZP's 2024 revenue was expected above $230M — [Mergr](https://mergr.com/transaction/teleperformance-acquires-zp-better-together); [LanguageLine](https://languageline.com/resources/news/teleperformance-completes-acquisition-of-zp-better-together-expanding-accessibility-solutions); [MultiLingual](https://multilingual.com/?p=221809). The FCC granted ZP a two-year conditional certification under the new ownership — [FCC](https://www.fcc.gov/node/267653)
- **UK, Scotland:** Contact Scotland BSL is funded by the Scottish Government and delivered by Sign Language Interactions (SLI, owner of SignVideo and InterpreterNow). A new service and app launched on 1 December 2025 — [gov.scot](https://www.gov.scot/Topics/People/Equality/remit/projects); [OSCR](https://www.OSCR.org.uk/british-sign-language/)
- **UK emergency (999 BSL):** Ofcom approved SLI as the emergency BSL video relay provider from 17 June 2022 — [Southampton AIS](https://ais.southampton.ac.uk/emergency-video-relay-bsl-2022/); [SignHealth](https://signhealth.org.uk/campaign/bsl-999-update-proposal-to-approve-sign-language-interactions-service/)
- **India:** ISLRTC (a government body) started a free online video relay service on 18 July 2023 — [ISLRTC Annual Report 2023-24](https://divyangjan.depwd.gov.in/upload/s3wassupload/ISLRTC_New_Delhi_Annual_Report_2023_24.pdf). SignAble (Bengaluru) runs a private on-demand ISL video interpreting app, with the deaf user on video and the hearing user on audio — [The Better India](https://thebetterindia.com/367935/signable-app-for-deaf-people-rupmani-chhetri-startup-bengaluru); [App Store](https://apps.apple.com/ng/app/signable/id6477518760). India has about 18M deaf people, about 4.5M of them ISL users, and an estimated 350 to 1,000 certified interpreters (sources conflict) — same sources. ISLRTC also publishes the free SignLearn ISL dictionary app — [ishnews](https://ishnews.tv/videos/news/signlearn-app-a-sign-language-dictionary-for-all)

### Inferences
- Interpreter scarcity, not technology, is the binding constraint everywhere (India's 350 to 1,000 interpreters for about 4.5M signers). For Uzbekistan, VRI with a pooled interpreter network plus B2G financing is the proven pattern.
- US-style per-minute public reimbursement creates large, profitable markets (ZP: >$230M revenue, $490M exit). It also creates consolidation and private-equity capture risk.

### Gaps
- US VRS per-minute tier rates for 2025-26 and 2026-27 (the FCC PDF text was not extractable).
- EU national VRS models (e.g. Germany Tess, Nordic state-funded schemes): not researched in this pass.
- Sorenson revenue and share figures.

## 5. Emergency text-to-112/911 and relay

### Takeaway
The EU's European Accessibility Act (applied from 28 June 2025) requires real-time text (RTT) access to 112, with an option to delay to 28 June 2027. Implementation is slow: Ireland was the first with native RTT in 2025, and the Netherlands has a long-standing RTT requirement. The UK uses a dedicated BSL emergency video relay (999 BSL).

### Cited Findings
- **EAA:** Applies from 28 June 2025. Member States may extend the deadline for RTT and Total Conversation to 28 June 2027. Total Conversation (video) is mandatory for emergency services only where video calls are already offered — [EENA](https://eena.org/news/european-accessibility-act-begins-applying-across-the-eu/); [EENA RTT status](https://eena.org/?p=33066)
- **Ireland:** First EU country with native RTT to 112 (2025) — [112.ie](https://112.ie/realtimetext/); [EENA Ireland](https://eena.org/document/real-time-text-in-ireland)
- **EFHOH:** Reports limited change in the accessibility of 112 — [EFHOH report](https://efhoh.org/wp-content/uploads/2025/12/The-European-Accessibility-Act-from-Consultation-to-Implementation-Hard-of-Hearing-Perspective-5_compressed.pdf). EENA publishes an accessibility report card (Feb 2026) — [EENA](https://eena.org/wp-content/uploads/2026/02/Accessibility-report-card-abstract.pdf)
- **UK 999 BSL:** See section 4 (SLI, Ofcom approval, June 2022).

### Inferences
- An emergency module (text or video to 112, 101/102/103 in Uzbekistan) is the highest-value B2G component and is benchmarked by EU law. It could be a strong entry point with the Ministry of Emergency Situations.

### Gaps
- US Text-to-911 coverage statistics; national 112 SMS apps (e.g. Spain, Germany "nora" app): not verified in this pass.
- Sources conflict on whether the 2027 RTT date is a hard deadline or an option (EENA pages differ).

## 6. Sign-language learning apps

### Takeaway
Lingvano (Austria) is the breakout learning app, with 3M+ users claimed by 2025, 85% of them in the US/Canada. Learning apps are freemium subscription businesses aimed at hearing learners. Pivots into learning (SLAIT School) show it is the safer business compared with translation.

### Cited Findings
- **Lingvano:** An Austrian startup founded in 2018 — [Zero Project](https://zeroproject.org/view/project/ed68f3cd-30ea-4992-9530-d0a8a3f25506). It went from 500K learners (2022) to 2.5M (October 2024) — [eSchool News](https://www.eschoolnews.com/newsline/2024/10/08/sign-language-learning-app-reaches-2-5-million-learners-milestone/). Apple's case study says it added 2M users from summer 2023 to March 2025 and has 3M+ users, 85% in the US/Canada — [Apple Developer](https://developer.apple.com/articles/lingvano)
- **SLAIT School:** An AI ASL tutor (the pivot from translation) — [TechCrunch](https://techcrunch.com/2023/05/11/slait-pivots-from-translating-sign-language-to-ai-powered-interactive-lessons/amp/)
- **iBSL (UK):** An online BSL learning provider that confirmed closure in 2023 — [Limping Chicken](https://limpingchicken.com/2023/03/07/ibsl-shares-open-letter-detailing-plans-for-current-learners-as-it-confirms-closure-in-next-couple-of-months/). **Dead.**
- **India:** Free government SignLearn dictionary (ISLRTC) — [ishnews](https://ishnews.tv/videos/news/signlearn-app-a-sign-language-dictionary-for-all). The private BleeTV library has 1,000+ ISL videos and reports 12K+ users — [The Better India](https://thebetterindia.com/206175/apps-tech-for-deaf-start-up-pune-accessible-technology-isl-content-videos)

### Inferences
- A learning module (Uzbek Sign Language dictionary plus lessons for families and service staff) generates content and a video dataset that later feeds recognition or avatar work. It is also a low-controversy consumer entry.

### Gaps
- Lingvano pricing and funding; traction for SignSchool, Hands On ASL and The ASL App — not verified in this pass.

## 7. Smart gloves / wearables and Deaf criticism

### Takeaway
Gloves are a recurring hype cycle (SignAloud and many university demos claiming "99% accuracy") that Deaf communities and linguists reject. Most gloves recognise only fingerspelling, cannot capture facial grammar, work in one direction, and put the burden on Deaf people to accommodate hearing people.

### Cited Findings
- Michael Erard, "Why Sign-Language Gloves Don't Help Deaf People" (The Atlantic, November 2017): glove efforts are "rooted in the preoccupations of the hearing world, not the needs of Deaf signers". Thirty years of gloves mostly recognise only the 26 fingerspelled letters — [Everand reprint](https://everand.com/article/532432338/Why-Sign-Language-Gloves-Don-t-Help-Deaf-People); [kith.org summary](https://www.kith.org/words/2020/02/29/sign-language-gloves-dont-translate/)
- SignAloud (UW students, Lemelson-MIT $10K prize) drew Deaf-community criticism for missing the nuances of sign language. NPR noted the "bridge" goes only one way — [NPR 2016](https://www.npr.org/sections/alltechconsidered/2016/05/17/478244421/these-gloves-offer-a-modern-twist-on-sign-language); [MultiLingual](https://multilingual.com/signaloud-gloves/)
- Gloves miss facial expression and body grammar, and critics say they "put the communication burden on deaf people" — [FashNerd](https://fashnerd.com/2019/07/is-the-development-of-a-technology-based-on-a-sign-language-still-constituted-as-cultural-appropriation/); [Wikipedia: Sign language glove](https://Www.wikipedia.org/wiki/Sign_language_glove)
- Popular press repeats "99% accuracy" claims — [Fox News](https://www.foxnews.com/tech/high-tech-glove-translate-sign-language.amp) — an example of the hype pattern.
- Technology for the Deaf (CACM, December 2018) is an additional critical overview — [CACM](https://cacm.acm.org/magazines/2018/12/232889-technology-for-the-deaf/fulltext)

### Inferences
- Any Uzbek platform should avoid wearables entirely and publicly involve Deaf organisations (e.g. the national deaf society) to avoid "glove-style" backlash.

### Gaps
- Bragg et al. 2019 (ASSETS, "Sign Language Recognition, Generation, and Translation: An Interdisciplinary Perspective") was not fetched in this pass. Its core recommendations (Deaf involvement, data scarcity, need for Deaf-led evaluation) are well known but unverified here.

## 8. Business models and unit economics (synthesis)

### Takeaway
Four models are proven. (1) Government per-minute reimbursement funded by a telecom levy (US TRS: VRS ≈ $661M/yr, IP CTS — Rylo, Sorenson, ZP). (2) Direct government contracts (Scotland's Contact Scotland BSL, UK 999 BSL, India ISLRTC). (3) B2B/B2G content licensing for avatars and synthetic signers (Signapse for rail and airports, Kara for emergency messaging, Hand Talk's website plugin). (4) Consumer freemium subscriptions for learning (Lingvano) and captioning (Ava). Grants and seed capital (NSF/SBIR, Innovate UK, Google.org, Red Cross Humanitech) fund the R&D-heavy translation startups, which rarely reach scale.

### Cited Findings
- Per-minute public reimbursement: Rylo earns $1 to $8 per minute and is free to users — [runtimewire](https://runtimewire.com/article/nagish-rylo-85-million-general-catalyst). The VRS fund requirement for 2025-26 is $660.66M — [FCC DA 25-578](https://docs.fcc.gov/public/attachments/DA-25-578A1.docx)
- Exit values: ZP sold for about $490M on more than $230M revenue — [LanguageLine](https://languageline.com/resources/news/teleperformance-completes-acquisition-of-zp-better-together-expanding-accessibility-solutions); [MultiLingual](https://multilingual.com/?p=221809). Rylo is valued at about $500M — [runtimewire](https://runtimewire.com/article/nagish-rylo-85-million-general-catalyst)
- Government-direct: Scottish Government funds Contact Scotland BSL — [gov.scot](https://www.gov.scot/Topics/People/Equality/remit/projects)
- Grants and small seed rounds: Signapse £2M (£500K government) — [tech.eu](https://tech.eu/2024/06/05/signapse-secures-ps2m-seed-for-ai-sign-language-tanslation/). Kara NZ$1.3M plus a Humanitech grant — [UoA](https://www.auckland.ac.nz/en/news/2023/01/12/kara-technologies-sign-language-avatar-seed-funding.html). Sign-Speak $1.22M — [CB Insights](https://www.cbinsights.com/company/sign-speak/financials). Hand Talk $750K Google grant — [Briter](https://www.briter.co/companies/handtalk). SLAIT $120K — [CB Insights](https://www.cbinsights.com/company/slait-school)

### Inferences
- The funding gap is striking: service businesses backed by public reimbursement (captioning/VRS) reach $100M+ scale, while AI sign-translation startups stay at $0.1M to $4M. For Uzbekistan, the revenue core should be an interpreter-service and captioning layer financed by the state (or a telecom levy, or bank/telecom/airport B2B contracts), with AI sign tech as a long-term R&D track.
- Banks, airports, rail and telecom are the proven B2B buyers for templated sign content (Signapse). Legal mandates (EAA, ADA/FCC, Ofcom) are what make them buy. An Uzbek equivalent regulation or a government procurement anchor is likely required.

### Gaps
- Unit economics per interpreter-hour (interpreter wages, utilisation) for VRS/VRI — not found.
- Pricing for B2B avatar licenses (Signapse, Hand Talk plugin) — not public in the sources found.
- Microsoft (Teams captions, Seeing AI) and Apple (Live Captions, Sound Recognition) feature specifics — not verified in this pass.
