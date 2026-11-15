# Europe: Deaf-communication technology landscape, country by country (status Nov 2026)

Scope note: this file only adds facts that are NOT already in `global_feature_matrix.md` / `open_source_clonable.md` (UK SignVideo, Contact Scotland, Signapse, Signly, Lingvano, nora, DEC112, Spreadthesign, Signbank, SignDict, RogerVoice app pricing, Ireland 112 RTT are covered there). Research date: 2026-11-15.

## 1. EU legal framework: what each state must provide (EECC, EAA, Delegated Reg. 2023/444, Digital Networks Act)

### Takeaway
EU law requires states to make relay services, Total Conversation (TC) and Real-Time Text (RTT) "available and affordable". Relay calls should cost the user no more than an average voice call. But the law has **no explicit 24/7 obligation and no common quality standard** for relay. The result is a patchwork, and the Deaf lobby (EUD/EFHOH) is now pushing for a binding 24/7 rule in the upcoming Digital Networks Act (DNA).

### Cited Findings
- **EECC Art. 85(4):**
  - States must make terminal equipment, specific equipment and specific services that "enhance equivalent access" (TC, relay services) available and affordable.
  - **Recital 226:** the cost of relay services to disabled users must equal the average cost of voice calls.
  - **Recital 227** defines RTT and relay services ("conversion between modes … normally by a human operator").
  - Source: [EUD EECC implementation report, Jun 2025](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **EAA deadlines:**
  - RTT alongside voice, and TC where video is offered, had to be operational by **28 June 2025** (EAA Art. 4.3, 31.2).
  - **112 must accept RTT, and TC where video is provided, by 28 June 2027** (Art. 4.8, 31.3).
  - **Weakness:** the TC obligation applies only "where video is provided", which makes it weaker than the RTT obligation.
  - Source: [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **Delegated Regulation (EU) 2023/444: functional equivalence for 112.** Applied to Deaf users, emergency access must be:
  - two-way and interactive;
  - available without pre-registration, including while roaming;
  - free;
  - routed without delay to the right PSAP (emergency call-answering point);
  - given equal location accuracy;
  - publicised.
  - It covers only 112, not national numbers. Mobile apps are allowed as an interoperability means (Recital 16).
  - Source: [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **EAA Recital 45:** a third-party relay provider may sit between the Deaf caller and the PSAP, but only *temporarily*, until PSAPs can answer RTT and TC natively — [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **RTT in 112, progress so far:**
  - EENA names Austria, France, Germany, the Netherlands, Romania, Spain and Sweden as good-practice countries for text/RTT access to 112.
  - The Commission's 112 report, COM(2024) 575, lists states committing to RTT-capable PSAPs between 2025 and 2027: AT, BE, BG, CZ, DK, EE, EL, FI, HR, IE, LT, MT (in-app), NL (in-app), PL, PT, RO, SE, SI.
  - Source: [EUD report citing COM(2024)575](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **Total Conversation in emergencies:**
  - BEREC (2022) found 9 Member States reporting TC services.
  - EENA's 2023 review found **no country offering direct TC calls to 112** of the kind defined by the REACH112 project (2009–2012).
  - Source: [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **Relay quality standards:**
  - Only **6 Member States** set quality-of-service requirements for relay (answer time, statistics reporting) — [EUD report citing BEREC BoR (22) 172](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
  - The reference standard is ETSI ES 202 975 (human-factors requirements for relay services) — [ETSI](https://www.etsi.org/deliver/etsi_es/202900_202999/202975/02.01.01_60/es_202975v020101p.pdf)
- **Universal-service obligations on broadband:**
  - Only 10 of 29 states have imposed universal-service obligations for broadband.
  - Good practice: free or discounted broadband for disabled people (CY, EL, HU, SI, PT) and a video-quality requirement (FI).
  - **Slovakia:** operators sell a fixed-price all-inclusive data plan for Deaf users (€23/month) with no EU roaming limits.
  - Source: [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **116xxx social numbers:**
  - EECC Art. 96 requires accessible missing-children hotlines (116000).
  - Almost no state offers 116000 in sign language. In Spain the hotline is reached only via video relay (VRS).
  - Source: [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **Cross-border emergency access:**
  - Thanks to PEMEA, some national emergency apps interoperate.
  - EN 303 919, the harmonised standard for emergency-app interoperability, is still in development.
  - EUD's example: a Croatian Deaf visitor in France has no sign-language route to 112. Croatia has no VRS, and the French PSAP works only in French Sign Language (LSF).
  - Source: [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **Next legislative step:** EUD and EFHOH want 24/7 relay, free and unlimited calls, and reliable emergency access written as binding standards into the planned **Digital Networks Act** — [netzwoche, Oct 2026](https://www.netzwoche.ch/news/2026-10-16/schweiz-ermoeglicht-gehoerlosen-telefonate-rund-um-die-uhr-aber-nicht-per-video); [EUD/EFHOH at BEREC, 9 Jun 2026](https://www.berec.europa.eu/system/files/2026-06/3.%20EUD-EFHOH.pdf)

### Inferences
- For an Uzbek platform, the EU's "functional equivalence" six-point list (2023/444) is a ready-made **design spec for an SOS feature**, and also a ready advocacy text for the Uzbek regulator: no pre-registration, free, location, routing, two-way, awareness.
- Europe's own verdict is that "app + RTT" is not equivalence for signers: EUD insists on TC/video in sign language. Build sign-video first and text second.

### Gaps
- BEREC published no 2024–2026 country-by-country update of BoR (22) 172 that I could find. The 2022 report is the latest systematic NRA survey.
- The status of the Digital Networks Act proposal (dates, articles) was not verified.

---

## 2. Pan-European snapshot of relay services (EUD/EFHOH survey 2026; EUD 2025 consultation)

### Takeaway
Video relay exists in 25 of the 30 surveyed countries but is 24/7 in only 8. Text relay is confirmed in 12 countries (7 of them 24/7). Most services are free, but call-time caps, queues, no cross-border use and poor 112 access are the norm.

### Cited Findings
- **The "Mapping Relay Services in Europe" survey:**
  - EUD and EFHOH ran it from 8 Apr to 22 May 2026: 51 responses from 30 countries.
  - **Video relay (VRS):** in 25 countries, only 8 of them 24/7.
  - **Text relay (TRS):** confirmed in 12 countries, 7 of them 24/7 (Switzerland included).
  - Source: [netzwoche, 16 Oct 2026](https://www.netzwoche.ch/news/2026-10-16/schweiz-ermoeglicht-gehoerlosen-telefonate-rund-um-die-uhr-aber-nicht-per-video)
- **Preliminary conclusions (BEREC workshop, 9 Jun 2026):**
  - VRS is more widespread than TRS, and most of both are not 24/7.
  - Both are predominantly free to users.
  - Call-time caps are more common in VRS. The caps seen were 15 min, 20–30 min, or limited hours per month.
  - Waiting queues are widespread (1–4 min, and some over 5 min).
  - Interoperability is "very limited", cross-border access is "nearly absent", and 112 via relay is "limited and inconsistent".
  - TRS funding models seen: public, telecom-funded, NGO-funded.
  - A detailed report is due later in 2026.
  - Source: [EUD-EFHOH slides](https://www.berec.europa.eu/system/files/2026-06/3.%20EUD-EFHOH.pdf)
- **EUD's May 2025 consultation:**
  - Most VRS run only 4–10 hours a day on weekdays, e.g. Slovakia, Belgium, Iceland.
  - Only Spain, France, Germany and Sweden have "more comprehensive coverage".
  - **Croatia and Romania have no VRS at all.**
  - Only a minority of relay services offer RTT or TC (e.g. France, the Netherlands).
  - Many services do not meet ETSI requirements.
  - Source: [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **Scale:** EUD represents national Deaf associations in 31 countries and cites about **1 million sign-language users** in the EU/EEA — [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)

### Inferences
- Even rich EU states cannot staff 24/7 sign interpreting. Uzbekistan should plan a **tiered model**: daytime human VRS, 24/7 text/RTT and AI-captioning fallback, and an emergency-only night duty. This matches what Czechia's Tichá linka already does (Section 3).

### Gaps
- The per-country survey maps are images in the slides; country-level values were not extractable. Wait for the full EUD/EFHOH report.

---

## 3. Country catalog

### Takeaway
Three operating models dominate:
- **(a) A regulator-tendered relay operator paid by telecom operators:** Germany (Tess), France (FFT + Rogervoice), the Netherlands (KPN Teletolk), Switzerland (procom via Swisscom's universal service).
- **(b) A state social-welfare interpreter service:** Norway (NAV), Finland (Kela), Sweden (PTS-procured Bildtelefoni.net), Iceland (SHH).
- **(c) A Deaf-NGO-run service funded by ministries:** Spain (CNSE/SVIsual), Austria (ÖGLB), Czechia (Tichý svět).

Commercial B2B video-interpreting firms (Migam PL, Serviin PT, VEASYT IT, Deafcom CZ, Pedius IT) fill the gaps for banks and offices.

### Cited Findings

#### Germany
- **Tess – Sign & Script – Relay-Dienste GmbH (regulator-tendered, operator-funded):**
  - **Award:** On 28 Feb 2025 the Bundesnetzagentur re-awarded the relay service to Tess after an EU-wide tender, for 4 years (until end of March 2029).
  - **Services:** DGS (German Sign Language) or written text ↔ spoken German, in both directions, plus Schriftdolmetschen (written-text interpreting) on request.
  - **History:** the service has been usable since 2009.
  - **Funding:** telephone service providers share the cost in proportion to their market share.
  - Sources: [BNetzA press](https://www.bundesnetzagentur.de/1052216); [BNetzA Vermittlungsdienst](https://bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Unternehmenspflichten/VermittlungsdienstfuerGehoerlose/start.html)
- **Tess free minutes and prices:**
  - **30 free private minutes per month in 2025, rising stepwise to 60 by 2028** — [BNetzA (via search snippet)](https://bundesnetzagentur.de/DE/Vportal/TK/InternetTelefon/Vermittlungsdienst/start.html)
  - After the free minutes, an older info sheet gives €0.14/min for private calls; hearing callers pay 14 ct/min from fixed lines and up to 42 ct/min from mobile — [Uni Kassel info sheet (undated)](https://uni-kassel.de/uni/files/Studium/Kontakt-Beratung-Termine/Studium_Behinderung/Infoblatt_Telefon-Dolmetschdienst_Tess_74_.pdf)
  - A 2018 Deaf-association statement criticised a €5 monthly base fee plus €0.14–0.28/min — [DGB Stellungnahme 2018](https://dglb.de/wp-content/uploads/2024/01/dgb_stellungnahme_2018_06.pdf)
  - **Current tariff not verified;** see Gaps.
- **Volume reporting:** BNetzA collects connection minutes, with 2025 as the reference year for 2027 funding — [BNetzA (snippet)](https://bundesnetzagentur.de/DE/Vportal/TK/InternetTelefon/Vermittlungsdienst/start.html)
- **AVASAG (DGS avatar for travel information):**
  - **Funding:** BMBF project led by **Charamel GmbH** with 6 partners; budget **€1.98M, 74% BMBF-funded**.
  - **Scope:** initially limited to travel information.
  - **Testing:** about 70 Deaf people tested it; a TH Köln study reported the avatar was perceived as "engaging, authentic, respectful and natural".
  - **Follow-on product:** Charamel now sells a "Kommunaler Gebärdensprach-Avatar-Baukasten" (a municipal avatar toolkit), recommended in Kreis Rendsburg-Eckernförde.
  - Sources: [it-daily](https://www.it-daily.net/?p=19147); [idw](https://idw-online.de/de/news830493); [Kreis RD-ECK doc](https://www.kreis-rendsburg-eckernfoerde.de/politik-verwaltung/politik-und-verwaltung-des-kreises/allris/wicket/resource/org.apache.wicket.Application/doc2096380.pdf); [DFKI paper](https://www-live.dfki.de/fileadmin/user_upload/import/11812_nunnari2021AT4SSL-AVASAG.pdf)
- **Deutsche Bahn:**
  - No confirmed DB rollout of a sign avatar in DB Navigator or at stations was found.
  - DB's AI and passenger-information pages (a €50M information push to 2027) do not mention sign language.
  - Sources: [DB AI](https://www.deutschebahn.com/de/ai); [deskmodder](https://www.deskmodder.de/blog/?p=214578)
  - A netzwoche article (27 Oct 2025) headlined "KI-Assistent für Bahnreisende kommuniziert in Gebärdensprache" (an AI assistant for rail passengers that signs) appears to concern Etihad Rail/Abu Dhabi, not DB — [netzwoche](https://www.netzwoche.ch/news/2025-10-27/ki-assistent-fuer-bahnreisende-kommuniziert-in-gebaerdensprache)
- **Deaf community pushback on avatars:**
  - **Feb 2024 (DGB press release 01/2024):** the Deutscher Gehörlosen-Bund (DGB) and other umbrella bodies "urgently advise against" deploying sign-language avatars at present. They see them as no substitute for interpreters — [DGB PM 01/2024](https://dglb.de/wp-content/uploads/2024/05/01_2024-Pressemitteilung_Gebaerdensprach-Avatare.pdf); [position paper Jan 2024](https://dglb.de/wp-content/uploads/2024/02/2024_01_24_Wichtige_Informationen_zum_Einsatz_von_Gebaerdensprach.pdf)
  - **2025 (DGB release 01/2025):** criticises the startup **alangu**. Its avatars are "only partially understandable", and its training data came from the Deaf community, often without fair pay. The DGB demands that Deaf people be equal partners, not advertising figures — [DGB PM 01/2025](https://gehoerlosenbund.de/wp-content/uploads/2025/10/Pressemitteilung-01_2025-Gut-gebruellt-Loewen.docx.pdf)
  - **Berlin's accessibility office:** legally mandated information **must not** be produced with sign avatars — [berlin.de](https://www.berlin.de/lb/digitale-barrierefreiheit/anforderungen/gebaerdensprache/)
  - **Commercial niche use:** Boehringer Ingelheim has used an AI sign avatar for selected package leaflets since 2021 — [drweb](https://www.drweb.de/gebaerdensprach-avatar-packungsbeilage-ki/)

#### Austria
- **Relay Service (ÖGLB, NGO):**
  - Runs under **ÖGS.barrierefrei**, the offering of the Austrian Deaf Association (ÖGLB), which also includes the Gebärdenwelt.tv news portal.
  - **Hours:** closed weekends and public holidays; Fridays 08:00–12:00.
  - The ÖGLB Dec 2025 newsletter campaigns against state budget cuts.
  - About 11,000 Deaf people and 450,000 people with hearing loss in Austria.
  - Sources: [ÖGLB GebärdenSache 12/2025](https://www.oeglb.at/wp-content/uploads/2025/12/GebaerdenSache-12_2025.pdf); [ÖGLB press kit 2025](https://www.oeglb.at/wp-content/uploads/2025/09/Pressemappe_OeGLB_BK25-1.pdf)
- **SiMAX (SignTime GmbH, Vienna):**
  - **Funding:** H2020 SME Instrument, about €1.09M EU contribution (plus €50k for phase 1).
  - **Method:** semi-automatic avatar output, corrected by a signer who may be Deaf.
  - **Lexicon:** 3,000+ signs animated by 2020.
  - **Deployment:** Wiener Linien (Vienna public transport) loudspeaker announcements shown in ÖGS (Austrian Sign Language) in the WienMobil app, in test operation since Apr 2022.
  - **Status:** no 2024+ news found, so treat as dormant or unknown.
  - Sources: [CORDIS 778421](https://www.cordis.europa.eu/project/id/778421); [CORDIS article](https://cordis.europa.eu/article/id/421525-animated-figure-translates-digital-content-into-sign-language); [simax.media](https://simax.media/project-overview/?lang=en)
- **HandsUp library:** 1,600+ ÖGS signs as avatar videos, freely reusable — [kulturpool](https://kulturpool.at/en/content/equalizent)

#### Switzerland
- **procom foundation (Olten):** runs relay as part of the telecom universal service, for which Swisscom is the concessionaire.
  - **Text relay (myPROCOM app):** 24/7 in German, French and Italian, including emergency calls; not available to residents abroad.
  - **Video relay (VideoCom):**
    - German-speaking region: weekdays 08–19, weekends 10–16.
    - Romandie: closed Sundays.
    - Ticino: closed all weekend, 5 hours per weekday.
    - **Calls capped at 30 min.**
  - **Deaf association demand:** the Swiss Deaf association (SGB-FSS) wants 24/7 VRS in all 3 Swiss sign languages ("equal communication must not depend on the time of day").
  - Sources: [netzwoche](https://www.netzwoche.ch/news/2026-10-16/schweiz-ermoeglicht-gehoerlosen-telefonate-rund-um-die-uhr-aber-nicht-per-video); [myPROCOM App Store](https://apps.apple.com/ch/app/myprocom/id6636473650)
- **How VideoCom came about:** procom piloted VideoCom first, and the government then mandated sign-language relay in the ordinance — [procom PR 2017](https://archiv.taubenschlag.de/cms_pics/Procom%20Pressemitteilung%20VideoCom%20201701%20.pdf)
- **Related research:** SWISS TXT (the SRG subsidiary) was an EASIER partner (Section 5) — [swisstxt](https://swisstxt.ch/en/swiss-txt/research-projects/easier)

#### France
- **Legal basis:**
  - Article 105 of the Loi République numérique (2016) and CPCE L.33-1 I p) oblige operators to offer accessible calling for deaf, hard-of-hearing, deafblind and aphasic users. **In force since 8 Oct 2018.**
  - **Minimum hours:** Mon–Fri 08:30–21:00 and Sat 08:30–13:00 since Oct 2021.
  - **"Reasonable use" cap:** 3 hours per month.
  - **24/7 from 1 Oct 2026.**
  - Source: [ARCEP indicators Q4 2024](https://www.arcep.fr/fileadmin/user_upload/observatoire/indicateurs-accessibilite/t4-2024/indicateurs-accessibilite-T4-2024_avril2025.pdf)
  - Bouygues raised its reasonable-use cap to 5 h/month alongside the 24/7 switch — [bbox-mag](https://www.bbox-mag.fr/mobiles/forfaits-et-services/relais-telephonique-bouygues-telecom/46875374)
- **ARCEP Q4 2024 usage (monthly averages):**
  - **Unique users:** LSF 3,906 (+16.5% year on year); automated text transcription (TTA) 1,468 (+50.6%); human text transcription (TTH) 159; cued speech (LPC) 9.
  - **Conversations per month:** LSF 29,882; TTA 26,403; TTH 1,071.
  - **Average LSF call:** 4 min 22 s; about 33.5 min per LSF user per month.
  - **LSF answered within 3 min:** rose from 24% (Q4 2023) to **71%** (Q4 2024); within 30 s, 50%.
  - **Trend:** human text transcription is collapsing (−32% conversations) while automatic transcription grows (+59%).
  - **Reporting operators:** Bouygues, Orange, SFR, Free, La Poste Mobile and the overseas operators.
  - Source: [ARCEP PDF](https://www.arcep.fr/fileadmin/user_upload/observatoire/indicateurs-accessibilite/t4-2024/indicateurs-accessibilite-T4-2024_avril2025.pdf)
- **Rogervoice:**
  - The FFT shared relay (Bouygues, Euro-Information, La Poste Mobile, Orange, SFR) launched on 8 Oct 2018 **with Rogervoice as provider** — [Assemblée nationale QE](https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE3009.pdf); [handicap.fr](https://informations.handicap.fr/a-centre-relais-telephonique-1-an-100000-appels-adaptes-12272.php)
  - **Rogervoice 2025 mission report** (it is a legally registered "entreprise à mission"):
    - about 35,000 people made a call; 7,572 monthly active users;
    - **2,880,228 calls / 5.76M minutes** made accessible;
    - 65 public and private organisations integrated it;
    - transcription accuracy 94%;
    - human relay ("copilot": LSF, LfPC, TTH) pickup within 3 min: 71%; average wait under 2 min;
    - average call rating 4.62/5;
    - external accessibility audit and impact study planned for 2026.
  - Source: [Rogervoice mission report 2025](https://rogervoice.com/wp-content/uploads/2026/06/Rogervoice-Rapport-Entreprise-a-mission-2025.pdf)
- **Competing B2B providers:**
  - **Acceo, Deafi, Elioz and Sourdline** formed the **AccesSourd** collective (Oct 2021). They called the operators' shared relay "not at all up to" the expected quality.
  - Bouygues' customer-service relay uses Acceo.
  - Sources: [handicap.fr AccesSourd](https://informations.handicap.fr/a-accessourd-collectif-pour-accessibilite-telephonique-31595.php); [AccesSourd PR](https://www.yanous.com/wp-content/uploads/211201-CP-AccesSourd-n2.pdf); [bbox-mag](https://www.bbox-mag.fr/mobiles/forfaits-et-services/relais-telephonique-bouygues-telecom/46875374)

#### Belgium
- **Flanders interpreter agency (CAB):** the Vlaams Communicatie-Assistentie-Bureau voor Doven (government-linked non-profit) coordinates Flemish Sign Language (VGT) interpreters, including free workplace interpreting.
  - Flanders ran an **innovation-procurement project for a remote-interpreting service**; the project page says technical and organisational upgrades are still needed before anytime/anywhere use.
  - The Flemish Deaf association (Doof Vlaanderen) published a 2020 position on CAB's remote-interpreting service.
  - Sources: [vlaanderen.be CAB](https://www.vlaanderen.be/organisaties/vlaams-communicatie-assistentie-bureau-voor-doven); [VLAIO PIP](https://vlaio.be/en/vlaio-network/programme-innovation-procurement-pip/remote-interpreting-services); [Doof Vlaanderen 2020](https://www.doof.vlaanderen/sites/default/files/imce/20200707_standpunt_dv_actie_cab_mbt_afstandstolkendienst.pdf)
- **Emergency (112 BE app):**
  - The app and the 112 SMS service work only inside Belgium.
  - The Interior Minister announced an **AI feature in the 112 BE app** for Deaf users.
  - Sources: [112.be](https://112.be/en/SMS); [Brussels Times](https://brusselstimes.com/1502102/belgium-launches-ai-application-in-emergency-app-for-deaf-people)
- **Charleroi "Relais-Signes":** remote interpreting for calls and short counter conversations — [Govlaunch](https://govlaunch.com/projects/charleroi-wht-utilizes-the-relais-signes-system-to-accommodate-deaf-people-using-city-services)
- **Coverage gap:** EUD lists Belgium among countries whose VRS runs limited weekday hours only — [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)

#### Netherlands
- **KPN Teletolk:**
  - KPN was designated as the relay provider ("bemiddelingsdienst") in 2023 and runs it via the **Tolkcontact** app.
  - **Emergency routes in the app:** text relay, sign-interpreter relay, and a **direct 112 button**, which most users choose.
  - Source: [Dutch Minister of Economic Affairs letter, Jun 2025](https://eerstekamer.nl/9370000/1/j4nvi0xeni9vr2l_j9vvkfvj6b325az/vmoxk0vs8pyy/f=/vmowk0liaczz.pdf)
  - **Contract:** the economy ministry (EZK) re-appointed **KPN + Berengroep + nWise** until **Oct 2028**.
  - **Terms and volume:** the service became free, hours were extended to 07:00–22:00, and it handles about **20,000 minutes per month**.
  - Sources: [KPN press](https://www.kpn.com/overons/nieuws/en/kpn-teletolk-will-continue-to-connect-deaf-and-hearing-impaired-people-with-society/); [nWise](https://nwise.se/kpn-teletolk-continues-to-bridge-the-communication-gap-for-deaf-and-hard-of-hearing-communities/)
- **Technology:** nWise (Sweden) is the Total Conversation tech vendor. The Netherlands and France are among the few relays offering RTT/TC — [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)

#### Nordics
- **Norway, NAV tolketjenesten (state welfare), 2025 figures:**
  - about 2,700 users;
  - **307,000 interpreting hours** (163,000 Norwegian Sign Language; 127,000 interpreting with guiding for deafblind users; 17,000 written-text interpreting);
  - 53,000 assignments covered with 73,000 interpreter resources; 7,600 assignments uncovered; coverage rate 85–86%;
  - about 250 staff interpreters, 50 dispatchers and about 390 freelancers;
  - 12 regional services; Oslo accounts for 34% of orders.
  - **Bildetolk (spontaneous video relay):** **28,000 calls** in 2025 (about 9 min average), plateaued just under 30,000 per year since 2021, service started in 2008.
  - Source: [NAV statistics](https://www.nav.no/no/nav-og-samfunn/statistikk/flere-statistikkomrader/tolking-for-dovblinde-og-horselshemmede)
  - **Hours:** Mon–Fri 08–20, reduced on holidays. A separate 24/7 "Akuttvakt" emergency interpreter line exists; sources conflict on its number.
  - **Technology:** test addresses at t-meeting.se (an nWise/Tolkdirekt SIP platform).
  - Sources: [nav.no/skjermtolk](https://www.nav.no/skjermtolk); [Bergen kommune](https://www.bergen.kommune.no/hvaskjer/tema/informasjon-til-fastleger/offentlige-pasienttilbud/nav-akuttvakt-tolk)
- **Sweden, Bildtelefoni.net (state, PTS-procured):**
  - PTS has a government appropriation line of **SEK 106.3M for 2025** for electronic communication services for disabled users.
  - A new **Bildtelefoni.net procurement was under way in 2025**, shaped by the EAA.
  - Sources: [PTS Örebro conference 2025](https://kampanj2.regionorebrolan.se/siteassets/filer/konferens/2025/pts.pdf); [PTS annual report 2024](https://pts.se/contentassets/e4f15a123c34463abb36a3baa8923d07/pts-arsredovisning-2024.pdf)
  - **Hours conflict:** an undated regional PDF lists 06:00–24:00 daily; free of charge; SIP address bildtelefontolk@tolk.sip.nu.
  - Sources: [Region Örebro](https://kampanj6.regionorebrolan.se/globalassets/media/dokument/halso-och-sjukvard/habilitering-och-hjalpmedel/tolkcentralen/nar-tre-behovs-for-samtal-mellan-tva.pdf); [Polisen](https://polisen.se/om-polisen/kontakt/polisens-telefonnummer/ring-oss-med-ring-oss-med-texttelefoni-bildtelefoni-eller-teletal/)
  - A sister text-relay service, Texttelefoni.se, was tendered on TED in 2023 — [TED 561346-2023](https://ted.europa.eu/en/notice/561346-2023/pdf)
- **Finland, Kela "Vammaisten tulkkauspalvelu" (disability interpreting service, state):**
  - Remote interpreting can be used for most situations, including emergencies.
  - **27 Jan 2025:** new remote-service software with strong-ID login and chat-based start.
  - **May 2025:** Kela picked **twoday oy** to build a new interpreter-dispatch system, live from early 2027.
  - Kela is using the 2027 option year of current contracts; a market dialogue ran Aug 2025 – Mar 2026.
  - Sources: [Kela etäpalvelu](https://www.kela.fi/ajankohtaista/vammaisten-tulkkauspalvelukeskuksen-etapalvelu-uudistuu-jatkossa-kirjautuminen-tapahtuu-vahvasti-tunnistautuneena); [Kela twoday](https://www.kela.fi/ajankohtaista/kela-tilaa-uuden-valitysjarjestelman-vammaisten-tulkkauspalveluun-twoday-oy-lta); [Kela kilpailutus](https://www.kela.fi/ajankohtaista/vammaisten-tulkkauspalvelun-kilpailutus-siirtyy)
  - Finland requires a sufficient video quality for Deaf users in its broadband universal service — [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **Denmark:**
  - Den Nationale Tolkemyndighed (DNTM, under Socialstyrelsen) grants interpreting.
  - Central Denmark Region covers only **ViTolker** bookings from 1 Jun 2026.
  - No Danish 24/7 VRS was confirmed.
  - Sources: [borger.dk](https://www.borger.dk/handicap/hjaelp-i-hverdagen/tolkning-for-personer-med-hoerehandicap); [sundhed.dk](https://www.sundhed.dk/sundhedsfaglig/information-til-praksis/syddanmark/almen-praksis/klinikadministration/bestillinger/tolkebestilling/tolkning-for-doeve-og-hoerehaemmede/)
- **Iceland, SHH (state centre):**
  - Provides on-site, remote ("fjartúlkun", bookable via Ísland.is) and video-relay interpreting ("myndsímatúlkun").
  - **The everyday free-interpreting budget ran out in Q1 2025, so video relay was closed 24–31 March 2025.**
  - The SHH law was amended by L. 31/2025 and L. 15/2026.
  - Sources: [island.is fjartúlkun](https://island.is/panta-taknmalstulka-thjonustu/fjartulkun); [SHH closure notice](https://island.is/s/shh/frett/lokad-fyrir-endurgjaldslausa-tulkathjonustu-ut-mars); [Althingi law](https://www.althingi.is/lagas/nuna/1990129.html)

#### Spain
- **SVIsual (Fundación CNSE, a Deaf NGO):**
  - **Volume:** 148,226 calls received in 2025 (to the end of November), **111,600 answered (75%)**; more than 1.2M calls since 2009.
  - **Modes:** LSE (Spanish Sign Language) video interpreters plus chat.
  - **Registration** is required.
  - Sources: [Fundación CNSE memoria 2025](https://fundacioncnse.org/pdf/memoria-2025.pdf); [SVIsual manual](https://www.svisual.org/pdf/Manual_SVIsual_Androidv5.2.pdf)
  - **Jun 2025:** the Ministry of Social Rights and CNSE launched a **24/7/365 free SVIsual channel** — [La Moncloa](https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/derechos-sociales-consumo-agenda-2030/Paginas/2025/060625-comunicacion-personas-sordas.aspx); [dsca.gob.es](https://www.dsca.gob.es/es/comunicacion/notas-prensa/derechos-sociales-impulsa-nuevo-servicio-personas-sordas-o-dificultades)
  - **Call cap:** an older manual sets a 25-min cap per call.
- **B2B arm:** **Ley 10/2025 on customer-service obligations** (accessible, free channels) is driving companies to adopt SVIsual via **Cestel** — [democrata.es](https://www.democrata.es/en/democrata-pro/statements/svisual-and-cestel-promote-communicative-accessibility-through-video-interpretation-in-sign-language/)

#### Portugal
- **Serviin (commercial LGP, Portuguese Sign Language, video interpreting):**
  - Used by the tax authority (AT).
  - Used in all CTT post shops (Apr 2025).
  - Used by Samsung PT support (weekdays 9–20).
  - **Millennium bcp** branches offer LGP interpreting (Sept 2025); provider not named in the source.
  - Sources: [Portal das Finanças](https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/at-atendimento-cidadaos-surdos.aspx); [echoboomer CTT](https://echoboomer.pt/ctt-atendimento-lingua-gestual-portuguesa-lojas/); [Samsung PT](https://ushl.samsung.com/pt/support/servico-lingua-gestual); [echoboomer bcp](https://echoboomer.pt/?p=268106)
- **SNS24 (national health line):** an LGP video option with 6 interpreters, 24/7 — [portugal.gov.pt](https://portugal.gov.pt/gc22/comunicacao/noticias/lingua-gestual-portuguesa-disponivel-para-cidadaos-surdos-atraves-do-sns24)
- **Portugal's broadband support:** free or discounted broadband for disabled people — [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **No VLibras-like state avatar was found.**

#### Italy
- **No national state VRS was found.**
- **Telefono Ponte (relay):** the CESB in Florence runs a text "telefono ponte" relay (DTS text-telephone devices).
  - Hours: Mon–Fri 9–15 and 17:30–21:30, Sat 9–15, Sun 13–19.
  - Sponsors include the Prime Minister's Office.
  - Abruzzo runs a regional emergency relay (DTS, video chat, SMS).
  - Sources: [disabili.com](https://www.disabili.com/prodotti/sp-29171/); [Abruzzo](https://www.disabili.com/ultimora/in-abruzzo-il-tele-soccorso-per-sordi-col-sistema-ponte/)
- **Telecom regulator (AGCOM):**
  - Mandates subscription exemptions and discounted mobile offers (50 free SMS a day in 2016; extended by decision 251/23/CONS).
  - Set accessibility requirements for call centres in 2009.
  - Sources: [AGCOM 2016](https://www.agcom.it/sites/default/files/migration/attachment/Allegato%209-9-2016.pdf); [leggioggi](https://www.leggioggi.it/sconti-disabili-telefonia-2024-proroga-platea/)
- **Pedius (startup):**
  - ASR/TTS calling app, deployed with AXA Assistance Italia and BNL.
  - About 8,000 users in 9 countries (undated, likely old).
  - Partners with TIM and VEASYT (ITU WSIS Prize 2025 entry).
  - Sources: [economyup](https://www.economyup.it/startup/pedius-la-startup-che-fa-telefonare-i-sordi-nata-guardando-le-iene/); [ITU WSIS 2025](https://www.itu.int/net4/wsis/stocktaking/Prizes/2025/Details/16098403635330447); [Zero Project](https://zeroproject.org/view/project/f652dc39-9b17-eb11-a813-0022489b3a6d)
- **VEASYT Live!:** LIS (Italian Sign Language) plus 15 spoken languages, used by Veneto municipalities, with an interpreter in under 3 min. It is now rebranded or extended as the **INTESI** app (2026): an LIS interpreter "in 1 minute", transcription, and bookable sessions.
  - Sources: [disabili.com](https://www.disabili.com/prodotti/municipi-piu-accessibili-ai-cittadini-sordi-grazie-alla-tecnologia/); [App Store INTESI](https://apps.apple.com/it/app/intesi/id6758286094)

#### Poland
- **Migam (commercial):**
  - Video interpreting in PJM (Polish Sign Language) by its own certified interpreters, browser-based with no install.
  - Claims 2,000+ client organisations.
  - Integrated with LiveChat.
  - Used by Warsaw's 19115 contact centre and city offices, and by Bank BPS.
  - Sources: [migam.org](https://migam.org/en/); [Warszawa 19115](https://warszawa19115.pl/pl/-/stoleczne-urzedy-z-usluga-tlumacza-migowego-on-line); [Migam LiveChat](https://migam.org/en/zintegrowalismy-tlumacza-migam-z-livechat/)
- **Legal framework:**
  - Under the Sign Language Act, offices provide a free interpreter on **3 working days' notice**.
  - The police offer a free online PJM/SJM/SKOGN interpreter.
  - A government **draft amendment dated 27 Mar 2025** exists; whether it was enacted is unverified.
  - Sources: [policja.gov.pl](https://olsztyn.bip.policja.gov.pl/306/zapewnienie-dostepnosci/43762,Usluga-bezplatnego-tlumacza-PJM-SJM-SKOGN.pdf); [draft amendment](https://niepelnosprawni.gov.pl/wp-content/uploads/2025/06/Projekt-z-dnia-27-marca-2025-r-o-zmianie-ustawy-o-jezyku-migowym-.-1743777718.docx)

#### Czechia
- **Tichá linka (Tichý svět, NGO):**
  - Online interpreting and call transcription, free.
  - **24/7, but 22:00–07:00 emergency calls only.**
  - **20-min call cap.**
  - Promoted by the Interior Ministry.
  - Sources: [MV ČR leaflet](https://mv.gov.cz/soubor/letak-ticha-linka.aspx); [nemocnice Beroun](https://www.nemocnice-beroun.cz/en/news/neslysicim-pomaha-u-lekare-ticha-linka-2142)
- **Deafcom (startup):** software for mediating online interpreting and transcription.
  - The general availability it quotes is workdays 9–17.
  - It claimed a goal of 1M users by end 2025 (unverified).
  - Source: [businessinfo.cz](https://www.businessinfo.cz/clanky/cesky-startup-digitalizuje-znakove-tlumoceni-sluzba-pomuze-milionum-neslysicich/)
- **Česká spořitelna "Tiché spojení":** a bank interpreting and transcription line — [finance.cz](https://www.finance.cz/clanky/491771-neslysici-tiche-spojeni/)

#### Hungary
- **"KONTAKT":** an online sign-language interpretation service listed by the EU's AccessibleEU centre; operator not confirmed — [AccessibleEU](https://accessible-eu-centre.ec.europa.eu/kontakt-online-sign-language-interpretation-service-hungary_en)
- **Interpreter register:** the national register (JTON) was last updated 17 Oct 2025 — [szocialisportal](https://szocialisportal.hu/wp-content/uploads/2025/10/Jelnyelvi-Tolmacsok-Orszagos-Nevjegyzeke.pdf)
- **Broadband support:** Hungary offers discounted broadband for disabled people — [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)

#### Greece
- **Tax authority (IAPR/AADE) pilot app, Jun 2025:** built on the **Evenly** platform. It offers video calls with a Greek Sign Language interpreter and/or subtitles; calls are recorded — [AADE manual](https://www.aade.gr/sites/default/files/2025-06/pilot_app_deaf_hard-of-hearin_foreign-language-speaking_citizens_manual.pdf)
- **Emergency access:**
  - Historically fax was the only Deaf emergency route.
  - Civil Protection is building municipal disability registers and a next-generation 112.
  - Sources: [EENA](https://eena.org/news/greeces-civil-protection-plans-112-upgrade-with-accessibility-in-mind/); [tovima](https://www.tovima.com/society/greece-launches-next-generation-112-emergency-system/amp/)

#### Ireland (additions only)
- **IRIS (Irish Remote Interpreting Service):** run by the Sign Language Interpreting Service (SLIS), an Irish Sign Language remote-interpreting service that includes "remote relay" phone calls.
  - Volume: 7,159 assignments in 2020; 5,614 in H1 2021.
  - Hours conflict: Mon–Fri 08:30–20:00 on one page vs reduced 10–16 days on another.
  - Sources: [SLIS annual report 2021](https://www.citizensinformationboard.ie/downloads/cib/SLIS_Annual_Report_2021.pdf); [Irish Deaf Society](https://irishdeafsociety.ie/interpreters/remote-interpreting-services)
- **Irish Text Relay Service (ITRS):** small volumes — 3,013 text-to-voice and 60 voice-to-text calls in 2024; 1,423 and 29 in H1 2025 — [ComReg](https://www.comreg.ie/publication-download/text-relay-service-take-up-and-usage-statistics-january-to-december-2024)

#### Baltics
- **Estonia:** the **"Kaugtõlke rakendus"** remote sign-interpreting app launched Nov 2024 (video calls with professional interpreters) — [AccessibleEU](https://accessible-eu-centre.ec.europa.eu/estonias-remote-sign-language-interpretation-app-kaugtolke-rakendus_en)
  - The University of Tartu started an Estonian Sign Language avatar/"robot" prototype — [UT](https://cs.ut.ee/en/news/development-estonias-first-sign-language-interpreter-robot-begins)
- **Lithuania:** an information-accessibility system was due by end 2024 (launch not confirmed) — [CoE report](https://rm.coe.int/accessibility-measures-as-implemented-by-avms-providers-for-persons-wi/1680afffef)
  - "112 Lietuva" app — [Lexita](https://www.lexita.lt/en/projects/mobile-app-112-lietuva)
- **Latvia:** nothing found (see Gaps).

#### Turkey (brief)
- **Engelsiz 112:** an Interior Ministry app for **video calls to sign-literate 112 operators**, centralised in Ankara with national reach. It is also used to file complaints with CİMER, the presidential communication centre.
  - For scale, 112 handled 95M calls in 2025 overall.
  - Sources: [Paratic](https://paratic.com/cimer-engellerini-kaldirdi-fahrettin-altun-mujdeledi/); [istiklal](https://www.istiklal.com.tr/genel/112-acil-cagri-merkezleri-bu-yil-95-milyon-cagri-yanitladi-1079528h)
- **AİLEM (Family Ministry):** its "Engelsiz İletişim Merkezi" (barrier-free communication centre) gave Turkish Sign Language translation support on **268,719 calls over 3 years** (Mar 2026) — [aile.gov.tr](https://aile.gov.tr/manisa/haberler/ailem-isitme-engelliler-engelsiz-iletisim-merkezi-268-bin-719-cagriya-ceviri-destegi-sagladi/)

### Inferences
- **Volumes give a realistic sizing benchmark for Uzbekistan** (about 37M people):
  - Norway: about 28k relay calls per year for 5.5M people.
  - Netherlands: about 240k minutes per year.
  - Spain: about 120–150k calls per year for 48M people.
  - France: about 30k LSF conversations per month for 68M people.
  - A national UzSL relay could expect very roughly 50–150k calls per year once mature, and needs perhaps 15–30 interpreter FTE for daytime coverage. *This is an estimate extrapolated from the figures above.*
- **France's trend matters:** automated transcription users grew +50% while human text relay shrank. AI captions (Uzbek ASR) can absorb the text-relay demand cheaply, while scarce human interpreters are reserved for sign-language calls.
- **Copyable mechanics:**
  - free-minute allowances (Germany 30→60 min, France 3→5 h per month);
  - call caps of 20–30 min to protect queues (CH, CZ, ES);
  - an emergency-only night tier (CZ);
  - a "112 button" inside the relay app (NL);
  - mandatory public quarterly KPIs (France's ARCEP: users, calls, answer within 30 s / 3 min). The last is a strong transparency model for a non-profit.
- **Funding lesson:** relays financed by **a telecom-operator levy** (DE, FR, NL, CH) are stable and growing. Budget-line services (Iceland 2025 closure, Austrian cuts) run out of money. An Uzbek platform should push for a telecom universal-service levy rather than rely on grants.
- **B2B as a sustainability engine:** Spain's Ley 10/2025, Rogervoice's 65 organisations and Migam's 2,000+ organisations show that legally required customer-service accessibility creates paying clients.

### Gaps
- **Tess:** current 2025–26 price per minute and annual minute volume not retrieved; tess-relay-dienste.de/kosten was not fetched.
- **Bildtelefoni.net (Sweden):** call volume and new contract winner not found.
- **Danish VRS:** no Danish VRS provider confirmed.
- **Latvia, Lithuania, Hungary (KONTAKT operator), Slovakia, Slovenia, Croatia, Romania, Bulgaria, Luxembourg, Malta, Cyprus:** not researched or nothing found (EUD says Croatia and Romania have no VRS).
- **Germany avatars:** a "Bezirk Schwaben" avatar launch appeared only as a search-result title ([sonntagsblatt](https://sonntagsblatt.de/artikel/epd/bezirk-schwaben-startet-gebaerdensprach-avatar)), not read. A DB avatar deployment was not confirmed.
- **Pedius:** 2025 status and user numbers unknown.
- **Portugal:** the "112 para cidadãos surdos" service ([gov.pt](https://www2.gov.pt/en/noticias/112-para-cidadaos-surdos)) not read.
- **CNSE apps beyond SVIsual** (e.g. dictionaries, "Alertcops"-style emergency apps) not researched.
- **Telefónica Spain** accessibility products not researched.

---

## 4. EU-funded research projects: outcomes, open code, what failed

### Takeaway
The EU spent tens of millions on sign-language MT in 2017–2024 (Content4All, EASIER, SignON, plus SiMAX and Dicta-Sign earlier). The output was papers, datasets, prototypes and **one usable open codebase, SignON's 29 Apache-2.0 repos**, frozen since 2024. None became a deployed public service. No new Horizon Europe sign-language project of comparable scale was found for 2024–2026.

### Cited Findings
- **SignON (H2020, grant 101017255, Jan 2021 – Dec 2023, about €5.6M):**
  - **Consortium:** 17 partners, 60+ members.
  - **Languages:** Irish, British, Dutch, Flemish and Spanish sign languages; English, Irish, Dutch and Spanish spoken.
  - **Architecture:** a cloud framework plus mobile apps, co-created with Deaf users.
  - Sources: [CORDIS](https://cordis.europa.eu/project/id/101017255); [EAMT 2024 end-of-project](https://aclanthology.org/2024.eamt-2.25); [ELG expo](https://live.european-language-grid.eu/meta-forum-2022/project-expo/signon)
  - **Code:** the GitHub org **`signon-project` holds 29 repos**, almost all **Apache-2.0** (one GPL-3.0 `wp4-elan-processor`). They include:
    - `wp2-mobile-app`, `wp2-ml-app`, `wp2-orchestrator` (+ OpenAPI/AsyncAPI specs), `wp2-framework-docker-compose`;
    - `wp3-asr-comp`, `wp3-slr-component` / `wp3-slr-pipeline` (sign recognition);
    - `wp4-text2gloss`, `wp4-text-gloss-mt`, `wp4-slt-component`;
    - `wp5-synthesis` (avatar output).
    - Last pushes were Jan–Aug 2024 and the repos have 0–1 stars, so the code is effectively abandoned.
    - Source: GitHub API search `org:signon-project` (run 2026-11-15) — [github.com/signon-project](https://github.com/signon-project)
- **EASIER (H2020, grant 101016982, 2021 – Dec 2023; formally closed 29 Feb 2024):**
  - **Scope:** sign↔spoken translation in three directions, multilingual low-resource MT, sign recognition from phonetic representations, and 2D→3D lifting.
  - **Avatar:** an improved "Paula" avatar with emotions.
  - **Evaluation:** 152 Deaf and hearing participants across 7 language communities.
  - **Data and guidelines:** added European sign languages to the **Open Multilingual Wordnet** and published sign-language data best practices.
  - **Partners included:** UZH, Uni Hamburg, Radboud, SWISS TXT, Martel (EU Innovation Radar recognition).
  - Sources: [CORDIS reporting](https://cordis.europa.eu/project/id/101016982/reporting); [UZH](https://cl.uzh.ch/en/research-groups/accessibility/research-projects/past-research-projects/easier.html); [Radboud](https://www.ru.nl/en/research/research-projects/easier-intelligent-automatic-sign-language-translation); [Martel](https://martel-innovate.com/?p=355142)
- **Content4All (H2020, grant 762021, Sep 2017 – Aug 2020):**
  - **Signer:** a photorealistic 3D virtual signer driven by a remote human interpreter, captured in Fraunhofer HHI's volumetric studio.
  - **Studio:** a low-cost "Remote Studio" for capturing a signer.
  - **Data:** **200 h of broadcast content with 20 h annotated**.
  - **Automation:** automatic sign production only reached a lab proof of concept.
  - **No evidence of a live broadcast deployment.**
  - Sources: [CORDIS](https://cordis.europa.eu/project/id/762021); [Fraunhofer HHI](https://hhi.fraunhofer.de/en/departments/vit/projects/content4all.html); [VRT](https://vrtinternational.com/innovation/projects/content4all)
- **SiMAX (H2020 SME Instrument, about €1.09M):** reached a Wiener Linien test deployment (2022) and then went quiet (Section 3, Austria) — [CORDIS 778421](https://www.cordis.europa.eu/project/id/778421)
- **AVASAG (national BMBF, €1.98M):** became a commercial Charamel product, not open source (Section 3, Germany) — [it-daily](https://www.it-daily.net/?p=19147)
- **REACH112 (2009–2012):** the blueprint for IP-based Total Conversation to 112. More than a decade later, EENA found no country offering direct TC to 112 — [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **NEXES (H2020):** cited by EUD as advancing next-generation emergency access, but gaps remain — [EUD report](https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf)
- **Deaf assessment of the avatar push:**
  - German Deaf bodies (2024–2025) call current avatars largely insufficient.
  - They object to unpaid community training data.
  - Sources: [DGB 01/2024](https://dglb.de/wp-content/uploads/2024/05/01_2024-Pressemitteilung_Gebaerdensprach-Avatare.pdf); [DGB 01/2025](https://gehoerlosenbund.de/wp-content/uploads/2025/10/Pressemitteilung-01_2025-Gut-gebruellt-Loewen.docx.pdf)

### Inferences
- **What failed:** three-year consortium projects end when funding ends. No organisation owned operations, Deaf-led governance stopped at "co-creation", and the deliverable was a demo, not a service.
- **Fork option:** the SignON Apache-2.0 microservice architecture is reusable as a skeleton. It provides an orchestrator with OpenAPI/AsyncAPI contracts, dispatchers, and ASR / sign recognition / text2gloss / synthesis components in docker-compose. Its models are for Irish, British, Dutch, Flemish and Spanish sign languages, so UzSL needs new data.
- **Lesson for the Uzbek project:**
  - Budget for operations after year 3.
  - Pay Deaf data contributors.
  - Ship a narrow, useful service first, such as interpreter calls and captions (the model of Tess, SVIsual and NAV), before avatar or MT research.
  - Avatars are acceptable only for fixed, pre-scripted content (transit announcements, Wiener Linien style) with Deaf review (the SiMAX semi-automatic model).

### Gaps
- No Horizon Europe (2021–2027) sign-language project starting in 2024–2026 was found in the searches. A CORDIS keyword query is recommended.
- The SignON final deliverables (user-evaluation scores, lessons-learned PDF) were not read; only the abstract was retrieved.
- EASIER: no GitHub org or dataset licences were confirmed.
- "iCompass" and "AI4Gov" from the brief: no sign-language-related EU project under these names was found or researched.
