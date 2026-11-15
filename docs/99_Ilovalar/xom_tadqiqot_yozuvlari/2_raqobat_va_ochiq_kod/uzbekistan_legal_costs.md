# Uzbekistan legal, regulatory and cost facts for a non-profit open-source Deaf communication platform (as of 2026-11-15)

Research note scope: we ran 16 searches and fetches. Primary legal text was read only for the Personal Data law, on lex.uz. Most other facts come from secondary news sources (anhor.uz, kun.uz, buxgalter.uz, it-park.uz, uza.uz). Many market-price questions (interpreter rates, tenders, studio day rates, local cloud prices) returned **no usable public data**. These are listed as Gaps, and no numbers were invented for them.

## 1. Legal form: NNT / jamoat birlashmasi / fond vs. operating under an existing NGO vs. IT Park LLC

### Takeaway
Registering an NNT costs very little in state duty, but it takes a long time: secondary sources report 7 to 10+ months on average. The NNT then faces Ministry of Justice control over foreign funding, and a 2025-2026 rule makes NNTs notify the Ministry of Justice about staff trips abroad. An IT Park resident LLC is much faster to set up and has strong tax exemptions until 2028. It cannot receive NGO-type state grants, and IT Park rules changed in 2026.

### Cited Findings
- Legal basis for NNT registration: the Law "On non-governmental non-commercial organizations", the Law "On public associations" and Cabinet of Ministers Resolution No. 57 of 10.03.2014. — [anhor.uz: why it is hard to open an NGO](https://anhor.uz/society/pochemu-v-uzbekistane-slozhno-otkrity-npo)
- State duty rates from 01.01.2020 (most recent rates found):
  - republican / inter-regional NNT: **3 BHM** (down from 4)
  - regional NNT: **1 BHM** (down from 2)
  - district or city level NNT: **0.5 BHM**
  - [anhor.uz](https://anhor.uz/news/24364-2/)
  - With BHM = 440,000 so'm (see section 5), that is about **1,320,000 / 440,000 / 220,000 so'm**. This is an inference, and the rates need checking against the current Tax Code / lex.uz.
- Average time to register an NNT: **7 to more than 10 months**. — [anhor.uz](https://anhor.uz/society/pochemu-v-uzbekistane-slozhno-otkrity-npo)
- The same reform raised fivefold the amount NNTs may receive from foreign sources (the headline is the only detail seen). — [anhor.uz](https://anhor.uz/news/24364-2/)
- A decision adopted at the end of May requires NNTs to **notify the Ministry of Justice about employees' trips abroad**, with effect from August. The year was not stated in the snippet. — [anhor.uz](https://anhor.uz/uzl/news/ozbekistondagi-nntlar-xodimlarining-chet-elga-safarlari/)
- A Code on NNTs is being drafted. — [anhor.uz](https://anhor.uz/news/v-uzbekistane-razrabotayut-kodeks-o-negosudarstvennih-nekommercheskih-organizaciyah/)
- ICNL holds English translations of Uzbekistan's NGO charter templates and laws. — [ICNL charters](https://www.icnl.org/wp-content/uploads/Uzbekistan_charters.pdf), [ICNL associations](https://www.icnl.org/wp-content/uploads/Uzbekistan_assocrus.pdf)
- IT Park residents:
  - Exempt from profit tax, VAT, social tax and turnover tax until **01.01.2028**.
  - Employee personal income tax is **7.5%** instead of 12%.
  - Sources differ on whether the exemptions (except VAT) extend to 2040 for qualifying residents, or whether 2040 applies only to the 5% dividend rate.
  - [it-park.uz](https://www.it-park.uz/uz/itpark/news/o-zbekiston-it-sohasidagi-startaplar-va-xorijiy-investorlar-uchun-soliq-imtiyozlari), [buxgalter.uz SK-2025](https://buxgalter.uz/oz/publish/doc/text205244_sk-2025_it-park_rezidentlari_uchun_imtiezlar_uzaytirildi)
- New IT Park rules under the presidential decree **PQ-388 of 26.12.2025**:
  - From 01.04.2026, benefits no longer apply to payment organizations, marketplaces and microfinance organizations.
  - A **tiered deduction to the IT Park directorate** is introduced, depending on income level and exports.
  - [it-park.uz new rules](https://it-park.uz/uz/itpark/news/it-park-uzbekistan-rezidentlari-uchun-yangi-qoidalar-joriy-etilmoqda)

### Inferences
- Fastest path to start: operate the project under an existing registered NGO (for example the Society of the Deaf or Sharoit Plyus) through a partnership or memorandum, or as a founder-owned IT Park LLC. Start registering a dedicated NNT in parallel, because 7-10 months is a realistic lead time.
- An IT Park LLC suits paying contributors (7.5% personal income tax, no social tax). It is a commercial entity, though, so it generally cannot apply to the NNT support fund (Jamoat fondi) or ngo.gov.uz grants. Most UN/EU small grants also expect a registered NGO.
- Under an existing NGO, foreign grants still go through that NGO's Ministry of Justice procedures. The project gets the NGO's grant eligibility immediately. The founder loses control over governance and the IP/data, so the open-source licence and data ownership must be fixed in a written agreement.

### Gaps
- The current (2026) state duty table for NNT / public association / foundation, the minimum number of founders, and the exact document list were not found in a primary source. Earlier law set public associations at 10 founders and allowed foundations with 1 founder; this is unverified for 2026 and needs checking on lex.uz / my.gov.uz.
- Not found: the current rules and timeline for registering or agreeing foreign grants with the Ministry of Justice (the "20-day notification / agreement" procedure), and any 2024-2025 simplification of it.
- Not found: NNT reporting obligations (annual report to the Ministry of Justice, tax reporting), or NNT tax status (exemption of grants and membership fees from profit tax) as of 2026.
- Not verified: the exact IT Park directorate deduction (historically 1% of revenue) under PQ-388.

## 2. Personal data (ZRU-547): localization, biometrics, consent, cross-border, penalties, hosting

### Takeaway
After amendments in March 2026 (ZRU-1125), **only biometric data, genetic data and telecom-subscriber data must be stored in Uzbekistan**. Other personal data can go abroad to one of 49 "adequate" countries, or under approved contractual clauses or standards. Face video of identifiable signers is very likely biometric data ("anatomical and physiological characteristics"). A sign-language video dataset and call recordings should therefore be treated as localization-bound and registered in the State Register of personal data bases.

### Cited Findings
Primary text ([lex.uz ZRU-547](https://lex.uz/docs/4396419)):
- **Art. 26:** biometric data are personal data describing a person's anatomical and physiological characteristics. Using them to identify a person requires the subject's consent.
- **Art. 21:**
  - Consent may be in any form that the controller can prove.
  - Special personal data require **written consent**, which may be an electronic document.
  - Consent for minors is given by their guardians.
  - Consent can be withdrawn in the form in which it was given.
- **Art. 27-1 (as amended by ZRU-1125 of 26.03.2026, in force 27.03.2026):**
  - Part 2: **biometric data, genetic data and telecom operators' subscriber data must be stored in Uzbekistan**.
  - Part 3: other personal data may be stored or processed abroad if at least one of these holds:
    - the destination country has equal protection,
    - the operator uses standard contractual terms or binding corporate rules approved by the authorized body,
    - the operator follows approved international standards.
- **Art. 20:**
  - Databases that must be stored in Uzbekistan must be registered in the **State Register of personal data bases**.
  - The authorized body is the State Personalization Center.
  - Changes must be reported within 10 calendar days.
- **Art. 15:** cross-border transfer is allowed to countries with equal protection. Transfer elsewhere is allowed with the subject's consent, among other grounds.
- Later amendments are also shown on the page: a constitutional law of 13.07.2026 and ZRU-1174 of 11.09.2026 (Art. 25).

Other sources:
- On **29 July 2026** the Cabinet of Ministers approved a list of **49 states and territories** that provide adequate protection. Russia is on the list. — [spot.uz 2026-08-04](https://www.spot.uz/ru/2026/08/04/personal-data-abroad/)
- The amendments were linked to launching PayPal, Apple Pay and Google Pay. — [anhor.uz](https://anhor.uz/news/v-uzbekistane-88/)
- **ZRU-1115 of 21.01.2026** introduced liability for unlawful processing of personal data using AI. — [anhor.uz](https://anhor.uz/ru/news/uzbekistan-criminalizes-illegal-ai-use-of-personal-data)
- Penalties (2022 amendments; current amounts not re-verified):
  - Criminal Code Art. 141-2: fine of **100-150 BRV**, or a ban on holding certain rights for up to 3 years, or corrective labour for up to 2 years.
  - Administrative Code Art. 46-2: up to **7 BRV** for citizens and **50 BRV** for officials.
  - [anhor.uz](https://anhor.uz/news/social-media/)
- Economic critique: Kotib AI Research estimates losses of up to $4.5bn from the localization law. This is an analyst estimate, not an official figure. — [kun.uz](https://jch.kun.uz/en/news/2025/07/16/uzbekistan-losing-up-to-45-billion-annually-due-to-data-localization-law-analysis)

### Inferences
- **Sign-dictionary and dataset videos of identifiable signers** and **video-call recordings** contain faces and bodies, which are anatomical and physiological features. The conservative reading is biometric data, so:
  - store the primary copy on a server in Uzbekistan,
  - register the database in the State Register,
  - get written or e-signed consent covering research, ML training and publication.
- Pure text data (captions, account e-mail) may live abroad. Hetzner (Germany/Finland) or AWS regions are allowed only if the country is on the 49-country list. The list was not obtained; checking it is necessary.
- **Publishing an open dataset** of signer videos is legally the riskiest part. The consent form must explicitly cover public, worldwide, irrevocable-licence distribution. The legal tension with withdrawal of consent (Art. 21) should be addressed, for example by "withdrawal removes the video from future releases".
- Preferred design: do not record calls by default, and process live captions in memory.

### Gaps
- Not determined: whether the State Personalization Center or regulators treat ordinary video (not a face template) as "biometric". No official guidance was found.
- Not obtained: the text of the 49-country list (whether Germany, Finland and the USA are included).
- Local hosting prices were not found:
  - UZCLOUD (Uztelecom), Uzinfocom, Beeline Cloud, Ucell: none found.
  - Uztelecom has VDS pages without visible prices. — [uztelecom VDS](https://uztelecom.uz/en/for-business/cloud-services/virtual-dedicated-server-8-9)
  - Private Tashkent providers exist, but no comparable so'm prices were extracted: [dicloud.uz VPS](https://dicloud.uz/en/services/cloud/vps/), [Pro-Data](https://pro-data.tech/en/virtual-server), [Serverspace Tashkent](https://serverspace.io/services/vps-server/vps-in-uzbekistnan/) (example: VPS-1 at about 438 RUB/month).
  - No GPU hosting price in Uzbekistan was found.

## 3. Telecom: operator obligations, zero-rating, 112 accessibility for deaf

### Takeaway
No source confirmed any Uzbek mobile-operator service, tariff or zero-rating offer for deaf users. 112 has been fully operational nationwide since March 2025, but no SMS or video access for deaf users was found.

### Cited Findings
- The unified 112 dispatch service has been **fully operational nationwide since 25.03.2025**. — [kun.uz](https://kun.uz/en/news/2025/03/25/uzbekistans-unified-112-emergency-system-now-fully-operational-nationwide)
- 112 integrates the Interior Ministry, the Emergencies Ministry, ambulance, social protection and Hududgaztaʼminot. — [xs.uz](https://xs.uz/en/post/112-unified-dispatch-service-now-fully-operational-across-uzbekistan)
- Precedent abroad: since 2015 Georgia's Interior Ministry has run **SMS and video calls to 112** for deaf and hard-of-hearing people, with pre-registration. — [mia.police.ge](https://mia.police.ge/en/112-gkhedavt-sms-da-video-zaris-servisi-mkholod-kru-da-smenadaqveitebuli-pirebistvis/7938?print=1)
- Operators offer profession-targeted tariffs (for example Beeline tariffs for education and health workers), but none was found for people with disabilities. — [beeline.uz packages](https://beeline.uz/en/products/packages)
- Ucell launched an "Ehtirom" tariff on 28.05.2025, but its eligibility is unclear. — [ucell.uz](https://ucell.uz/en/news/new_tariffs)
- Regional zero-rating precedent: Beeline Kyrgyzstan launched a plan with zero-rated AI apps. — [pulse.bot](https://www.pulse.bot/telecom/blogs/beeline-kyrgyzstan-launches-mobile-plan-with-zero-rated-ai-apps-e490b846-0dc7-4ba1-b036-87798c89630a)

### Inferences
- The project can offer a "112 video relay" pilot to the Emergencies Ministry / 112 as a gap-filler, citing the Georgian model.
- Zero-rating would need direct negotiation with operators (a CSR angle). No legal obligation on operators was found.

### Gaps
- Not found: zero-rating for my.gov.uz or education platforms in Uzbekistan, or any operator CSR for deaf users. Humans and Mobiuz were not searched.
- Not found: the status of accessibility for deaf users on 101-104 / 1050.

## 4. Interpreter market price

### Takeaway
**No public price data were found** for sign-language interpreter (surdotarjimon / imo-ishora tili tarjimoni) services: no tender lots on xarid.uzex.uz, no salaries on hh.uz or olx.uz, no TV interpreter pay. The figures must be collected by direct inquiry.

### Cited Findings
- Sign interpretation was introduced in Tashkent public service centres (DXM). The article mentions more than 3,000 people with hearing and speech impairments. — [anhor.uz](https://anhor.uz/news/23398-2/)
- Participation of a sign interpreter at citizen receptions and mobile receptions was made **mandatory**. Only the headline was seen. — [anhor.uz](https://anhor.uz/uzl/news/fuqarolar-qabuli-va-sayyor-qabullarni-otkazishda-surdotarjimon-ishtiroki/), [anhor.uz RU](https://anhor.uz/news/sign-language-interpreter/)
- A state centre for training sign interpreters was to be created (2022). — [kun.uz](https://kun.uz/news/2022/02/09/surdotarjimonlarni-tayyorlash-davlat-markazi-tashkil-etiladi)
- A 30.12.2025 public discussion lists building a system to train sign interpreters and tiflopedagogues. — [gov.uz PDF](https://api-portal.gov.uz/uploads/7/2026/02/03/4484029c-d89c-bd0f-6a30-0d8aca7b8ad4_media_.pdf)
- Average nominal wage in Uzbekistan is about **7.3 million so'm/month**. — [anhor.uz](https://anhor.uz/uzl/news/uzbekistonda-ortacha-ish-haqi-7-3-million)

### Inferences
- Mandatory interpreters at receptions and at DXM create a recurring **state demand** for interpreters. This is useful both as a market (B2G video interpreting) and as a source of price data. Request the DXM / Agency of Public Services contracts.
- Budget placeholder: use the average wage of about 7.3M so'm/month as a proxy for a full-time interpreter until real offers are collected. This is labelled as an assumption, not a market rate.

### Gaps
- Not found: hourly or monthly interpreter prices from xarid.uzex.uz, etender or hh.uz, TV interpreter salaries, or Society of the Deaf interpreter pay. Recommended: search xarid.uzex.uz manually for "сурдоперевод", "сурдопереводчик", "imo-ishora" in completed lots.

## 5. Dataset / dictionary recording costs; wage baseline

### Takeaway
The only hard baseline found is the 2026 statutory wage floor: **MHEKM (minimum wage) = 1,360,000 so'm/month** and **BHM (base calculation value) = 440,000 so'm**, in force by autumn 2026. No day rates were found for deaf signers, studios or videographers.

### Cited Findings
- MHEKM rose to 1,360,000 so'm and BHM to 440,000 so'm, from 1,271,000 and 412,000. A ministry notice dates the change to 01.07.2026; buxgalter.uz and goldenpages date it to 01.09.2026. — [gov.uz bv](https://gov.uz/oz/bv/news/view/182984); [buxgalter.uz](https://buxgalter.uz/oz/publish/doc/text216780_1_sentyabrdan_boshlab_mhekm_va_bhmning_uzgarishi_ish_haqini_hisoblashga_qanday_tasir_kursatadi); [goldenpages](https://www.goldenpages.uz/uz/zarplata/)
- MIX (minimum consumer expenditure) for 2026 is 715,000 so'm/month. — [buxgalter.uz](https://buxgalter.uz/oz/publish/doc/text194589_uzbekistonda_bhm_mhekm_phbm_va_mih_miqdorlari)
- From 01.06.2025 employers hiring workers with Group I or II disability can get a **subsidy of up to 50M so'm**. The subsidy may cover arranging a sign interpreter, psychologist or escort. — [anhor.uz](https://anhor.uz/uzl/news/1-iyundan-nogironligi-bo-lgan-shaxslarni-ishga-qabul-qilgan-tadbirkor/)

### Inferences
- An IT Park LLC or NNT that **employs deaf signers** (Group I/II) could recover up to 50M so'm per hire through the employer subsidy. This is a direct cost offset for dataset recording staff.
- Day-rate placeholder: about MHEKM / 22 working days ≈ 62,000 so'm/day is the legal floor only. Real day rates must be quoted from studios and agencies.

### Gaps
- Not found: day rates for deaf signer actors, studio rental in Tashkent, or videographer prices.

## 6. Accessibility law obligations creating demand

### Takeaway
The demand drivers confirmed by sources are:
- mandatory sign interpreters at citizen receptions,
- sign interpretation at public service centres,
- exam accommodations (sign interpreters) from 2027/2028,
- the employer subsidy,
- a lex.uz act on developing **Uzbek sign language and Braille**.

The text of O'RQ-641 and any web-accessibility standard (O'zDSt) were not retrieved.

### Cited Findings
- From the 2027/2028 academic year, admission and certificate exams must provide extra time, Braille, **sign interpreters** and assistants to people with disabilities. — [infoedu.uz](https://infoedu.uz/nogironligi-bolgan-shaxslarga-imtihonlarda-qoshimcha-vaqt-beriladi)
- People with disabilities get priority (no queue) at receptions by officials, under a presidential decision of 2023. — [kun.uz](https://kun.uz/news/2023/02/27/nogironlar-mansabdor-shaxslar-qabuliga-navbatsiz-kiradi-prezident-qarori)
- A lex.uz act on "additional measures to develop Uzbek sign language and Braille" exists; its date and number were not seen. — [lex.uz](https://lex.uz/mact/-6248467)

### Gaps
- Not retrieved: the articles of the Law on the rights of persons with disabilities (O'RQ-641, 2020) on interpreters and information accessibility.
- Not found: an O'zDSt web-accessibility standard, Central Bank requirements for banks serving clients with disabilities, or a 2025-2026 decree specifically on sign language.

## 7. Grants available in Uzbekistan 2026

### Takeaway
State NNT funding exists and is channelled through **ngo.gov.uz**. It includes a third 2026 state grant round (themes not disability-specific) and regional budgets (for example **4.5bn so'm in Namangan** for disability NNTs). UNDP also ran 2026 small grants, and a disability association was among the winners. No sign-language or deaf-specific call was found.

### Cited Findings
- A parliamentary commission decided to announce a **third state grant competition in 2026**. Its themes are women's and children's rights, gender equality, education and healthcare. — [uza.uz](https://uza.uz/en/posts/davlat-granti-tanlovi-goliblari-aniqlandi_883953)
- **11.6bn so'm** is directed to civil-society institution initiatives. — [uza.uz](https://uza.uz/ar/posts/fuqarolik-jamiyati-institutlari-tashabbuslarini-amalga-oshirishga-116-milliard-som-yonaltiriladi_925975)
- Namangan: **4.5bn so'm** from the regional budget for NNTs serving people with disabilities. Projects are submitted via **ngo.gov.uz**. — [uza.uz](https://uza.uz/ar/posts/namanganda-nodavlat-notijorat-tashkilotlariga-etibor-qanday_889173)
- UNDP small grants for social protection: 5 winners announced 07.07.2026, including the **Qoraqalpogʻiston Disability Association**. — [undp.org](https://www.undp.org/uz/node/593281)
- An EU delegation grant call for civil society exists, on an anti-corruption theme. — [eeas.europa.eu](https://www.eeas.europa.eu/delegations/uzbekistan/fuqarolik-jamiyati-institutlari-o%E2%80%98rtasida-korrupsiyaga-qarshi-kurashishga-doir-tashabbuslarni-amalga_uz)
- Background: the Jamoat fondi website is fundngo.uz. — [daryo.uz 2019](https://daryo.uz/2019/03/30/oliy-majlis-huzuridagi-jamoat-fondi)

### Inferences
- Realistic cadence: several state grant rounds per year through ngo.gov.uz, plus regional khokimiyat budgets for disability NNTs.
- Eligibility requires a **registered NNT**, so the 7-10 month registration lead time becomes the critical path for grant funding.

### Gaps
- Not found:
  - grant sizes per project,
  - IT Park startup and social-impact programmes ("Startup Garage"),
  - Ministry of Digital Technologies programmes,
  - Youth Affairs Agency grants,
  - local bank CSR programmes.

---

### COST SHEET (figures with sources only; everything else is TBD)

| Item | Amount (so'm) | Basis | Source |
|---|---|---|---|
| BHM 2026 | 440,000 | statutory | [gov.uz](https://gov.uz/oz/bv/news/view/182984) |
| MHEKM 2026 (wage floor) | 1,360,000 / month | statutory | [buxgalter.uz](https://buxgalter.uz/oz/publish/doc/text216780_1_sentyabrdan_boshlab_mhekm_va_bhmning_uzgarishi_ish_haqini_hisoblashga_qanday_tasir_kursatadi) |
| Average nominal wage (interpreter proxy) | ~7,300,000 / month | statistics, proxy only | [anhor.uz](https://anhor.uz/uzl/news/uzbekistonda-ortacha-ish-haqi-7-3-million) |
| NNT state duty, republican | 3 BHM ≈ 1,320,000 | 2020 rate × 2026 BHM (verify) | [anhor.uz](https://anhor.uz/news/24364-2/) |
| NNT state duty, regional | 1 BHM ≈ 440,000 | same | same |
| NNT state duty, district or city | 0.5 BHM ≈ 220,000 | same | same |
| Employer subsidy (Group I/II hire) | up to −50,000,000 per hire | offset | [anhor.uz](https://anhor.uz/uzl/news/1-iyundan-nogironligi-bo-lgan-shaxslarni-ishga-qabul-qilgan-tadbirkor/) |
| IT Park LLC payroll tax | 7.5% personal income tax, 0 social tax | until 2028 | [it-park.uz](https://www.it-park.uz/uz/itpark/news/o-zbekiston-it-sohasidagi-startaplar-va-xorijiy-investorlar-uchun-soliq-imtiyozlari) |
| PD violation (admin.) | up to 7 BRV (citizen) / 50 BRV (official) ≈ 3.1M / 22M | 2022 amounts × 2026 BHM (verify) | [anhor.uz](https://anhor.uz/news/social-media/) |
| PD violation (criminal) | 100-150 BRV ≈ 44-66M | same | same |
| Interpreter hour / month | TBD | no public data | gap |
| Signer day rate, studio, videographer | TBD | no public data | gap |
| Local VPS / GPU / storage | TBD | providers listed, prices not extracted | [dicloud.uz](https://dicloud.uz/en/services/cloud/vps/), [Pro-Data](https://pro-data.tech/en/virtual-server), [uztelecom](https://uztelecom.uz/en/for-business/cloud-services/virtual-dedicated-server-8-9) |

### LEGAL CHECKLIST

1. [ ] Choose a vehicle:
   - (a) partner agreement with an existing NGO (Society of the Deaf / Sharoit Plyus) to start now;
   - (b) IT Park LLC for paid contributors;
   - (c) file a dedicated NNT in parallel (budget 7-10 months).
2. [ ] Confirm on lex.uz / my.gov.uz: current NNT duty, founder minimum, charter template ([ICNL](https://www.icnl.org/wp-content/uploads/Uzbekistan_charters.pdf)).
3. [ ] Foreign grants: confirm the current Ministry of Justice agreement / notification procedure before signing any donor contract. Plan for the staff-travel notification rule.
4. [ ] Treat signer and call video as **biometric**: Uzbekistan-hosted primary storage (ZRU-547 Art. 27-1 p.2).
5. [ ] Register the database in the **State Register** with the State Personalization Center (Art. 20). Report changes within 10 days.
6. [ ] Written or e-document consent (Art. 21) covering capture, ML training and open publication. Guardian consent for minors. Define the withdrawal policy.
7. [ ] Non-biometric data abroad only to countries on the 29.07.2026 49-country list ([spot.uz](https://www.spot.uz/ru/2026/08/04/personal-data-abroad/)), or under approved contractual clauses.
8. [ ] AI processing of personal data: review ZRU-1115 (21.01.2026) liability ([anhor.uz](https://anhor.uz/ru/news/uzbekistan-criminalizes-illegal-ai-use-of-personal-data)).
9. [ ] Do not record calls by default; caption in memory.
10. [ ] Employing deaf staff: apply for the employer subsidy of up to 50M so'm.
11. [ ] Grants: register on ngo.gov.uz; track state grant rounds, regional disability budgets and UNDP small grants.
12. [ ] Offer the 112 / public service centre / citizen-reception video-interpreting pilot to the state, citing the mandatory-interpreter rule and the Georgian 112 precedent.
