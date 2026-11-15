# Global (non-CIS) feature matrix: apps and platforms for Deaf, hard-of-hearing and non-speaking people (status Nov 2026)

Research date: 2026-11-15. About 30 search and fetch calls. These notes build on, and avoid repeating, `Karlar uchun muloqot platformasi/global_apps_and_business_models.md` (funding, business models, VRS economics) and `deaf_centered_product_ux.md` (needs, ethics, UX principles). Read those first for money and ethics. This file covers **features, user feedback and copyable patterns**.

How reliable the sources are:
- **HearingTracker's app directory** (pages checked 8-10 Nov 2026) is the best structured source for ratings and review themes. It summarises sampled App Store and Google Play reviews but says it has **not tested the apps hands-on**.
- **No r/deaf or r/asl threads came back** in any search. The Reddit-specific evidence asked for is therefore **missing**; see the Gaps in each section.
- Quotes are short excerpts from store reviews as shown in aggregator snippets. Treat them as illustrative, not representative.
- Ratings are dated snapshots and differ by region.

---

## 1. Conversation and captioning apps (in-person speech-to-text and captioned phone calls)

### Takeaway
Free platform tools have commoditised face-to-face captioning: Google Live Transcribe (Android, offline) and Apple Live Captions (on-device, now on Apple Watch). Paid or reimbursed apps win on four things: **phone-call captioning** (Rylo, InnoCaption, RogerVoice), **group and speaker-labelled captioning** (Ava), **human-edited accuracy** (Ava Scribe, InnoCaption stenographers) and **transcript saving**. Across every app the complaints are the same: missed words, lag or flicker, lost transcripts, and subscription or billing friction.

### Cited Findings

**Google Live Transcribe & Sound Notifications (Android, free)**
- **Ratings:** Google Play 3.8 from 276,431 ratings (US, 10 Nov 2026). It needs Android 12 or later — [HearingTracker](https://www.hearingtracker.com/apps/google-live-transcribe)
- **Features:**
  - Live captions with adjustable text size.
  - Typed replies that can be spoken aloud.
  - Custom vocabulary and a caption pause.
  - Device or external microphone input.
  - Dual Screen on foldables, with captions on the outer screen for the other person.
  - Optional history: up to 3 days when enabled, otherwise 24 hours, with search and export. No audio is recorded.
  - Source: [HearingTracker](https://www.hearingtracker.com/apps/google-live-transcribe)
- **Offline use:** You can download languages. Offline can be forced on, or the app switches automatically by network quality — [Google Support](https://support.google.com/accessibility/android/answer/9158064?hl=en); [9to5Google 2022](https://9to5google.com/2022/03/10/google-live-transcribe-feature-now-works-when-offline/)
- **Dual Screen** for foldables needs Android 14 or later — [Google Support](https://support.google.com/accessibility/android/answer/9158064?hl=en)
- **Sound Notifications** alert you to alarms, sirens, baby crying and similar sounds. It needs notification access — [Google Support](https://support.google.com/accessibility/android/answer/9158064?hl=en)
- **Praise:** Following conversations, appointments and meetings. Fast recognition. Useful sound descriptions — [HearingTracker](https://www.hearingtracker.com/apps/google-live-transcribe)
- **Complaints:**
  - Missed or incorrect words, shifting punctuation, flickering captions.
  - Accuracy got worse after an update.
  - Accidental activation during calls; unwanted preinstallation.
  - Requests for easier editing and export, more languages, and speaker identification.
  - Source: [HearingTracker](https://www.hearingtracker.com/apps/google-live-transcribe)
- **Open source:** The Live Transcribe speech-engine client library has been published by Google on GitHub. *This was not re-verified in this pass; see Gaps.*

**Apple Live Captions, Live Listen and Sound Recognition (iOS, iPadOS, macOS, watchOS; built in)**
- **Live Captions:** Real-time captions for phone calls, FaceTime, web and in-person speech, processed on device. The 2025 update brought Live Captions and Live Listen controls to Apple Watch — [Apple FY25 accessibility PDF](https://www.apple.com/government/docs/resources/No_Introduction_FY25_Whats_New_in_Apple_Accessibility.pdf); [iGeeksBlog](https://www.igeeksblog.com/accessibility-features-in-ios-26-macos-26/)
- **Live Listen:** The iPhone works as a remote microphone streaming to AirPods or MFi hearing aids — same sources.
- **Sound Recognition:** Detects about 15 sounds on device. "Name Recognition" was added in 2025 and alerts the user when their name is called. CarPlay alerts cover horns, sirens and a crying baby — [Apple FY25 PDF](https://www.apple.com/government/docs/resources/No_Introduction_FY25_Whats_New_in_Apple_Accessibility.pdf); [Yahoo Tech](https://tech.yahoo.com/home/articles/apple-expands-accessibility-features-including-120000358.html)
- **Music Haptics:** Lets users feel music as vibration — [Apple FY25 PDF](https://www.apple.com/government/docs/resources/No_Introduction_FY25_Whats_New_in_Apple_Accessibility.pdf)
- **Version caveat:** Attribution to the iOS 26 release comes from secondary sources. Apple's own document says "FY25".

**Ava (iOS, Android, Mac, Windows, web; freemium)**
- **Ratings:** App Store 4.4 from about 4.2K ratings; Google Play 4.3 from 761 ratings (US, 10 Nov 2026) — [HearingTracker](https://www.hearingtracker.com/apps/ava)
- **Pricing:**
  - Free tier: basic captions, sessions capped at 40 minutes.
  - Paid tiers: Premium captions, translation, non-default languages.
  - "Scribe" human captioning is booked separately.
  - Smart Recaps: 5 free.
  - Source: [HearingTracker](https://www.hearingtracker.com/apps/ava)
  - An older listing gives $14.99 a month — [BridgingApps](https://bridgingapps.org/bridgingapps-reviewed-app-ava-24-7-accessible-life/)
- **Features:**
  - Speaker labels and named speakers.
  - **Shared group captions**: guests join by link or QR code without an account.
  - Editable transcripts; profanity filter.
  - Floating caption window on desktop.
  - Meeting bot for Zoom, Meet and Teams.
  - About 50 languages.
  - Text size, contrast, placement and dark mode.
  - Mobile offline mode in the default language only.
  - Source: [HearingTracker](https://www.hearingtracker.com/apps/ava)
- **Privacy:** Audio is processed in the cloud (AWS and GCP) and transcripts are stored on servers. Consumer data may be used for model training: the help article states it, while the privacy policy says "if you consent" — [HearingTracker](https://www.hearingtracker.com/apps/ava)
- **Praise:** Conversations with family, colleagues and medical staff. Readable captions. Saved transcripts. Caption overlay — [HearingTracker](https://www.hearingtracker.com/apps/ava)
- **Complaints:**
  - Missing words, lag, captions stopping, noise pickup, crashes.
  - Lost transcripts.
  - Complicated group setup; reconnection loops.
  - Subscription and cancellation confusion.
  - Source: [HearingTracker](https://www.hearingtracker.com/apps/ava)
  - One App Store user could not find the subscription to cancel it; another paid yearly and notes stopped saving — [Ava App Store listing (via search snippet)](https://apps.apple.com/us/app/id1030067058)
- **Design origin:** Ava's founding pitch was giving DHH users "a more present voice in group conversations" — [TechCrunch 2016](https://techcrunch.com/2016/11/21/ava-gives-the-hearing-impaired-a-more-present-voice-in-group-conversations)

**Rylo, formerly Nagish (iOS, Android; free to eligible US users through FCC IP CTS)**
- **Ratings:** App Store 4.6 from 4.6K ratings; Google Play 4.6 from 2.9K ratings — [HearingTracker phone/video list](https://www.hearingtracker.com/apps/phone-video)
- **Features:**
  - Captioned incoming and outgoing calls.
  - A **separate in-person live-transcription mode**.
  - Hearing-aid compatibility (ASHA, LE Audio).
  - Source: [Rylo accessibility statement](https://rylo.com/legal/accessibility); [HearingTracker](https://www.hearingtracker.com/apps/rylo)
- **Languages and storage:** About 50+ languages, with transcripts stored locally (aggregator claim) — [startuphub](https://www.startuphub.ai/startups/rylo.md)
- **Complaints:** Unwanted calls, and dislike of account-information requirements (FCC registration) — [HearingTracker](https://www.hearingtracker.com/apps/rylo)
- **Ownership:** It acquired sign.mt, an open-source sign translation project, in 2025. See the earlier notes for this.

**RogerVoice (France; iOS, Android; freemium)**
- **Calling:** Calls between app users are free. Calls to landlines and mobiles need a plan. Voicemail is transcribed — [Neil Squire](https://www.neilsquire.ca/?p=23094); [App Store](https://apps.apple.com/us/app/rogervoice-phone-call-captions/id1033113354)
- **In-app prices (US store):** Freedom $5.99, Premium $29.99, top-up credit $10.99. Languages: English, French, German, Italian, Portuguese, Spanish — [App Store](https://apps.apple.com/us/app/rogervoice-phone-call-captions/id1033113354)
- **Accessibility:** Large text option and microphone mute — [Kent State app review](https://sites.google.com/kent.edu/appsfordiverselearningneeds/app-reviews/roger-voice)
- **Complaints:** Billing and access problems ("It's no use for me now"). Ratings conflict: 4.4 from 9.5K reviews versus 4.8 from 1.3K — [App Store snippets](https://apps.apple.com/gb/app/rogervoice/id1033113354); [aiindigo](https://www.aiindigo.com/tool/rogervoice)

**Other US captioned-call apps, for comparison**
- **InnoCaption:** App Store 4.7 from 12.6K ratings; Google Play 4.4 from 7.5K. Choice of **AI or live-stenographer** mode; human captioning is English only — [HearingTracker](https://www.hearingtracker.com/apps/phone-video)
- **CaptionCall (Sorenson):** App Store 4.8 from 3.7K ratings — [HearingTracker](https://www.hearingtracker.com/apps/phone-video)
- **ClearCaptions:** App Store 4.4 from 2.1K ratings — [HearingTracker](https://www.hearingtracker.com/apps/phone-video)

**Otter (meetings)**
- Free tier of 300 minutes a month; positioned for meetings and shared transcripts rather than Deaf daily life — [livetranscribe.app comparison (vendor-run, biased)](https://livetranscribe.app/compare/live-transcribe-vs-ava). No Deaf-specific feedback was found.

### Inferences
- **Must-copy patterns:**
  - Split or **dual-screen view** for the other person (Live Transcribe on foldables). On ordinary phones, use a 180°-rotated top half.
  - **Typed reply spoken by TTS.**
  - **Guest joins by QR code, no account** (Ava).
  - **Speaker labels.**
  - **Offline language packs.**
  - **On-device processing as the default** (Apple), for privacy.
  - Short-lived local history that the user controls (Live Transcribe's 3 days).
- **Avoid:**
  - Hard session caps such as 40 minutes (Ava).
  - Paywalled languages.
  - Opaque cancellation.
  - Using transcripts for training without opt-in. Ava's mismatch between its help article and privacy policy shows what not to do.
- For Uzbekistan, the real differentiator is Uzbek and Russian ASR quality, plus correctable captions. Flicker and "accuracy got worse after update" are the top complaints about Google's tool.

### Gaps
- No r/deaf or r/asl threads were retrieved, so community sentiment comes only from store-review aggregates.
- Uzbek-language support in Live Transcribe and Apple Live Captions was not confirmed.
- Whether Google's Live Transcribe client library is still open source on GitHub was not re-verified.
- Otter: no Deaf-user feedback was found.

---

## 2. Relay and interpreter services (VRS/VRI) and on-demand interpreting

### Takeaway
VRS apps are judged almost entirely on **call reliability** (missed or failed incoming calls, black camera screen, interpreter waits). Feature richness matters little. The UK model (SignVideo, Contact Scotland BSL) adds a **directory of organisations you can call in BSL** and free institution-paid access. That is the most copyable pattern for a non-profit. No true "Be My Eyes for Deaf people" (a volunteer sign-interpreter network) was found, and the closest analogues are paid.

### Cited Findings

**Sorenson ntouch (US VRS)**
- **Ratings:** App Store 4.1 from 510 ratings; Google Play 4.3 from 6.5K. A registered Sorenson VRS account is required — [HearingTracker](https://www.hearingtracker.com/apps/phone-video)
- **Complaints:**
  - Missed or failed calls, unavailable interpreters, a black camera screen.
  - On Google Play: call alerts, video stability, incoming calls, account access.
  - Source: [HearingTracker ntouch](https://www.hearingtracker.com/apps/sorenson-ntouch)
- **Documentation:** User guides for iOS and Android v9 are published — [Sorenson Android guide](https://sorenson.com/wp-content/uploads/2024/08/guide-ntouch-mobile-android-userguide-v9.3.pdf)

**Convo (Deaf-owned, US/UK/AU)**
- **App change:** **Convo Call** is now the default app. The legacy **Convo VRS and Convo Link were discontinued on 4 May 2026** (dead) — [Convo](https://www.convo.io/post/convo-call-generally-available)
- **Legacy app reviews:** About 4.1 from 280 ratings. One user called the revamped app "quite uncooperative" (it could not answer calls on LTE). Another praised Convo as the only VRS meeting their needs as a **DeafBlind** user — [App Store](https://apps.apple.com/us/app/convo-vrs/id423121946?l=fr-FR)

**ZP / ZVRS / Purple: the Sivo app**
- Free. Hearing and Deaf parties can **see each other** during a relay call (three-way video). Works with some other providers' apps. Runs on PC and Mac. Registration is by phone number plus a verification code — [App Store](https://apps.apple.com/us/app/sivo/id1524340854); [ZP how-to PDF](https://zpbettertogether.com/wp-content/uploads/2023/02/Sivo-How-To-PDF-Dec-2020.pdf)
- ZP's Z5/P3 devices list **call back directly from a video mail**, point-to-point calls and VCO Plus — [ZP](https://zpbettertogether.com/z5-p3/)
- Sivo has only 18 App Store ratings (4.5) — [App Store](https://apps.apple.com/us/app/sivo/id1524340854)

**SignVideo (UK, now part of the Sorenson family)**
- **How it works:** The app opens on a **SignDirectory of 150+ services** (banks, councils, health, utilities). The user taps one and a BSL interpreter appears and connects the call — [SignVideo](https://signvideo.co.uk/download/); [Bank of Scotland](https://www.bankofscotland.co.uk/accessibility/signvideo/)
- **Cost and hours:** Free to Deaf users when the organisation subscribes. 7 days a week, 8am-6pm — [Bank of Scotland](https://www.bankofscotland.co.uk/contactus/signvideo)
- **Free BSL business directory** for Deaf entrepreneurs (2019) — [SignVideo](https://www.signvideo.co.uk/signvideo-launches-bsl-business-directory/)
- **Platforms:** iOS, Android, macOS, Windows and web — [SignVideo](https://signvideo.co.uk/download/)
- **Ownership:** Joined the Sorenson family — [SignVideo our story](https://signvideo.co.uk/our-story)

**Contact Scotland BSL (government-funded)**
- 24/7 BSL relay for any call. Apps on iOS, Android, Windows, macOS and web. The FAQ says **you do not need to log in to make a call**. How-to videos are in BSL — [Contact Scotland FAQ](https://contactscotland-bsl.org/faqs/); [download page](https://contactscotland-bsl.org/download)
- **Provider conflict:** NHS Grampian says the service has been provided by **Sign Solutions since 1 Dec 2025** — [NHS Grampian](https://www.nhsgrampian.org/about-us/equality-and-diversity/nhs-grampian-british-sign-language-plan/contacting-nhs-24-for-deafbsl-user/). The earlier notes said SLI. **The sources conflict.**

**India**
- **ISLRTC** (government) runs a free video relay (since July 2023) and the SignLearn dictionary. **SignAble** is a private on-demand ISL VRI app: Deaf user on video, hearing user on audio. See the earlier notes for sources.

**On-demand interpreting and "Be My Eyes for Deaf" analogues**
- **Aira ASL:** On-demand ASL interpreting with professional, not volunteer, interpreters — [Aira](https://aira.io/aira-asl-on-demand-interpreting-for-the-deaf-community)
- **Jeenie:** A marketplace with an ASL option — [MarketScreener](https://in.marketscreener.com/news/latest/Jeenie-Modernizes-Access-to-American-Sign-Language-Communication-with-Mobile-On-Demand-Video-Interpr-29841328)
- **Sign Now (Israel, 2022):** Free real-time and scheduled interpretation — [NoCamels](https://nocamels.com/2022/08/life-changing-app-deaf-people/)
- **InterpretersLive! (UK):** Free where an organisation is registered — [App Store](https://apps.apple.com/cy/app/interpreters-live/id1552367696)
- **No volunteer-based Deaf equivalent of Be My Eyes was found** in these results.

### Inferences
- **Copy:**
  - The **"directory of organisations you can call in sign"** home screen (SignVideo).
  - **Call without logging in** (Contact Scotland), the lowest possible friction.
  - Three-way video so the hearing party sees the Deaf person (Sivo).
  - Video mail with call-back.
  - How-to videos in sign language.
- **Reliability first:** Every VRS complaint is about incoming-call alerts and video stability. A non-profit platform should invest in push and call-kit reliability, low-bandwidth video and interpreter queue transparency (expected wait time) before adding features.
- **Volunteers:** A volunteer interpreter network is an open gap. For high-stakes calls it conflicts with the professional-quality concerns in the WFD and interpreter-body statements (earlier notes). A hybrid is safer: volunteers or Deaf peers for low-stakes "what does this letter say" help, certified interpreters for medical, legal and emergency use.

### Gaps
- No GlobalVRS features or reviews were found.
- No Convo Call (new app) reviews were found.
- ISLRTC relay usage statistics and SignAble ratings were not refreshed in this pass.
- Contact Scotland's provider (Sign Solutions vs SLI) is unresolved.

---

## 3. Sign-language output: avatars, AI signers, website sign overlays; and sign recognition

### Takeaway
On the output side, the proven product shapes are (a) **pre-recorded human sign video attached to fixed web content** (Signly), (b) **AI photorealistic signers for templated content** (Signapse: transport, websites, video) and (c) **3D avatar translator apps and plugins** (Hand Talk). On the recognition side, only API-stage products exist (Sign-Speak), and Ace ASL limits recognition to fingerspelling practice. Hand Talk's store ratings (~3.8-3.9) are much lower than learning or captioning apps, which suggests avatar output disappoints users.

### Cited Findings

**Hand Talk (Brazil; Hugo and Maya avatars; Libras and ASL)**
- App Store about 3.8-3.9 stars from about 498 ratings — [SplitMetrics](https://splitmetrics.com/apps/hand-talk-asl-sign-language/id659816995); [AppFollow US](https://apps.appfollow.io/ios/hand-talk-asl-sign-language/659816995?country=us)
- Review-sentiment estimate: 61.8% positive, 38.2% negative; some reviewers complain the app was only in Portuguese — [JustUseApp](https://justuseapp.com/en/app/659816995/hand-talk/reviews)
- Guides rate it moderate accuracy, for learning and basic communication, not high-stakes use — [LiveLingo](https://www.livelingo.io/guides/asl-interpreter-app)
- An earlier anecdotal review says its ASL looks like Signed Exact English (see earlier notes).

**Signly (UK)**
- **Pre-recorded BSL by qualified human translators**, shown in sync on subscribed websites through a browser extension. The site owner pays — [neohear](https://www.neohear.com/?p=4777); [Signly FAQ](https://preview.signly.co/faqs/)
- **Print mode:** The app points at Signly-enabled printed text or barcodes and plays the BSL video — [Living Made Easy](https://livingmadeeasy.org.uk/product/signly-sign-text-to-bsl)
- Lloyds Bank is a named customer — [Signly](https://signly.co/)
- **Limit:** Not real-time, and limited to registered sites — [ACL LTEDI 2023](https://preview.aclanthology.org/fix_video/2023.ltedi-1.2.pdf)
- It explicitly says it is "not replacing BSL interpreters" — [Signly FAQ](https://preview.signly.co/faqs/)

**Signapse (UK)**
- **Products:** SignStudio, SignStream, Transport and Website Plugin. BSL is established; **ASL launched March 2026**; DGS (German Sign Language) was announced for September 2026 — [Signapse ASL](https://signapse.ai/post/introducing-asl-sign-language-translator); [NatLawReview](https://natlawreview.com/press-releases/real-time-accessibility-signapse-launches-ai-digital-signer-german-sign)
- Claims "95%+ understandability" for BSL (company claim) — [Signapse BSL](https://signapse.ai/bsl)
- Zero Project Award 2026 — [Zero Project](https://zerocon26.zeroproject.org/opportunities/UGFydGljaXBhdGlvbk9wcG9ydHVuaXR5OjIwMTQxNA==)
- **Website product docs:** [Signapse docs](https://docs.signapse.ai/website-translations/overview)

**Sign-Speak (US, Deaf-led)**
- The React SDK lists ASL Recognition (video to English), ASL Production (English text to avatar video) and speech tools — [unpkg README @sign-speak/react-sdk](https://app.unpkg.com/@sign-speak/react-sdk@0.7.3/files/README.md)
- The API was in limited availability, with general availability targeted for Q1 2024. Current status is unclear — [search summary of conference talk; G2](https://www.g2.com/products/sign-speak/discuss)

**SignAll / Ace ASL (Hungary/US)**
- **Ace ASL** launched on iOS on 1 April 2021. The camera recognises **fingerspelled letters and digits** with real-time feedback and quizzes, and all signs are taught by a culturally Deaf native signer. The base app is free; full fingerspelling content is premium — [BusinessWire](https://www.businesswire.com/news/home/20210401005516/en/SignAll-Launches-Ace-ASL-App-AI-Will-Help-to-Learn-Sign-Language)
- No recent SignAll activity was found (see earlier notes). **Status: likely dormant.**

**Others:** GnoSys has no independent accuracy evidence, and Kara Technologies (NZ, emergency avatar messages) is covered in the earlier notes. Neither was re-verified here.

### Inferences
- **Copy:**
  - The Signly pattern: **human-recorded sign video bound to static content** (FAQ pages, forms, public-service instructions), plus a **QR or print-to-sign** link. It is cheap, uncontroversial, WFD-compatible and fits a non-profit with Deaf signers on staff.
  - The Ace ASL pattern: **recognition only for fingerspelling or isolated-sign practice**, where errors are low-stakes.
- **Avoid:** Marketing a general-purpose avatar "translator app" to Deaf users. Hand Talk's ratings and the Signed-Exact-English critique both point to dissatisfaction.

### Gaps
- No verbatim Hand Talk reviews from Deaf users about accuracy were found.
- No pricing for Signly or Signapse.
- Sign-Speak's 2025-26 availability is unclear.
- Microsoft Teams, Zoom and Meet have no automatic sign translation (see section 7). Google SignGemma is still unreleased (earlier notes).

---

## 4. Sign-language learning apps

### Takeaway
ASL Bloom (4.9★, ~38K ratings) and Lingvano (3M+ users) lead. Users praise **short video lessons, slow-motion playback, repetition and a dictionary**. The top complaint everywhere is the **paywall**: aggressive limits on free lessons, expensive subscriptions and billing disputes. Then come video bugs, wrong-looking signs and AI-generated illustrations. Deaf-led teaching is a stated differentiator (Lingvano, The ASL App, Ace ASL). The non-profit Spreadthesign shows a free, multi-language dictionary model at scale.

### Cited Findings

**ASL Bloom**
- **Ratings:** App Store 4.9 from about 38K ratings; Google Play 4.8 from 18.1K — [HearingTracker](https://www.hearingtracker.com/apps/asl-bloom)
- **Pricing:** 2 free lessons a day; Premium plan.
- **Features:** Dictionary, lessons, quizzes, fingerspelling, slow-play video. iOS, Android and web — same source.
- **Praise:** Approachable, engaging lessons; slow playback; repetition; dictionary — same source.
- **Complaints:**
  - Free tier too limited; expensive.
  - Want to test out of basics; quizzes on untaught signs.
  - Missing, black or frozen videos; crashes; lost progress (Google Play 2026).
  - Three reviewers object to **AI-generated illustrations**.
  - Source: [HearingTracker](https://www.hearingtracker.com/apps/asl-bloom)

**Lingvano (Austria)**
- **Complaints:** An aggressive paywall after 2 chapters, billing problems and inconsistent sign demonstrations (AI-generated audit, low reliability) — [marlvel](https://marlvel.ai/apps/com-lingvano-app)
- Sentiment estimate: about 61% positive / 39% negative — [JustUseApp](https://justuseapp.com/en/app/1547252782/lingvano-sign-language-asl/reviews)
- ComplaintsBoard: 3.7★ from 19 reviews and 22 complaints — [ComplaintsBoard](https://www.complaintsboard.com/lingvano-b148562)
- Its differentiator is said to be a Deaf-led teaching approach — [marlvel](https://marlvel.ai/apps/com-lingvano-app)
- User numbers: see the earlier notes.

**SignSchool**
- A free ASL learning platform with video lessons, games and a dictionary. An older review said it might charge fees in future — [App Store](https://apps.apple.com/th/app/signschool/id1145529881); [TopTenReviews](https://www.toptenreviews.com/signschool-review); [HearingTracker](https://www.hearingtracker.com/apps/signschool)

**Hands On ASL**
- Fingerspelling only. **3D hand models you can zoom and rotate**, plus speed-variable quizzes. About 4.0 from ~74-90 ratings. Hand colour is an in-app purchase. Update dates of 2019/2021 suggest the app is **stale** — [AppFollow](https://apps.appfollow.io/ios/hands-on-asl/1450898947?country=us); [AppAdvice](https://appadvice.com/app/hands-on-asl/1450898947)

**The ASL App (Ink & Salt, now DeafDigits)**
- Made by a **Deaf-owned company**. 2,500+ signs and phrases, slow motion, search, favourites. Free bundles plus a one-time $9.99 pack that also removes ads — [Kent State review](https://sites.google.com/kent.edu/appsfordiverselearningneeds/app-reviews/the-asl-app); [App Store](https://apps.apple.com/us/app/id921030207)

**Spreadthesign (European Sign Language Centre, non-profit)**
- **Size:** 600,000+ sign videos per the app listing; about 23 sign languages in the app, or 36 languages and 700K translations per a 2024 post. **Figures conflict.**
- **Features:**
  - Compare the same word across sign languages.
  - Example sentences.
  - Slow motion.
  - Offline saving.
  - Hand alphabets.
- **Cost:** The website is free; the apps have in-app purchases and a PRO version.
- Sources: [Spreadthesign about](https://spreadthesign.com/en.us/about/); [App Store](https://apps.apple.com/us/app/-/id438811366); [outilstice](https://outilstice.com/en/spreadthesign-dictionnaire-international-des-langues-de-signes/)

**Others**
- **Ace ASL:** see section 3.
- **SLAIT School:** AI tutor (earlier notes).
- **iBSL:** dead in 2023 (earlier notes).
- **National dictionaries:** Sign BSL and NZSL Online — [HearingTracker](https://www.hearingtracker.com/apps/asl-bloom)

### Inferences
- **Must-have:** Slow-motion and loop video, mirror view, a searchable dictionary, offline saving, short daily lessons and Deaf native signers in every video.
- **Non-profit advantage:** Removing the paywall turns the number-one complaint into a selling point.
- **Avoid:** AI-generated illustrations, and quizzes on signs that have not been taught.
- **Strategic:** Spreadthesign's cross-language compare and its NGO model are a template for an Uzbek Sign Language dictionary. Check whether Uzbek or Russian Sign Language is already in Spreadthesign before duplicating work.

### Gaps
- No Reddit r/asl threads were retrieved; Deaf teachers' critiques of specific apps (e.g. sign accuracy in Bloom) are unsourced.
- Not checked: whether Spreadthesign includes Uzbek or Russian Sign Language.

---

## 5. Emergency access (112/911 text apps, RTT)

### Takeaway
Three patterns exist:
1. **Native RTT or SMS to 112**, with no app (Ireland, 2025).
2. **Official national emergency apps** with pictogram flows, location and a **silent emergency** mode (nora in Germany, DEC112 in Austria). These need pre-registration, which EENA and Ireland criticise as non-equivalent access.
3. **US Text-to-911**: patchy coverage, no automatic location, SMS only.

Copyable features: pictogram emergency-type selection, automatic location, silent mode, a training/test mode, and sign-language video instructions.

### Cited Findings

**nora (Germany, official app of the federal states)**
- Aimed at people with hearing and speech impairments. Simple symbols and clear text, so an emergency message can be sent without speaking.
- **"Stiller Notruf"** (silent emergency call) for threatening situations.
- **Registration is required in advance.**
- Video instructions in German Sign Language are on nora-notruf.de.
- Sources: [nora Google Play page](https://www.nora-notruf.de/google-play-store); [Ärzteblatt](https://www.aerzteblatt.de/archiv/notruf-nora-soll-hoergeschaedigten-helfen-387dd7e9-d75f-4408-b75d-65d3f757050f)
- **Praise (one Play review):** "Includes your location, seems faster than calling" — [nora Google Play page](https://www.nora-notruf.de/google-play-store)
- **Critique:** A netzpolitik.org headline says the app does not meet its target users' needs — [netzpolitik](https://netzpolitik.org/tag/gehoerlose-menschen/). The full argument was not retrieved.

**DEC112 (Austria, since 2019)**
- Text-based emergency chat covering fire (122), police (133), ambulance (144), mountain rescue (140) and 112, plus a silent police emergency (added 2022) and a **training mode** — [App Store DEC112 2.0](https://apps.apple.com/us/app/-/id1494002697); [Innovation in Politics](https://app.innovationinpolitics.eu/?p=48026); [NGI Navigator](https://ngi-navigator.demo.abilian.com/product/dec112)

**112 Ireland**
- Vodafone Ireland's RTT pilot (January 2025) needs **no pre-registration and no app**. It is enabled in the phone's accessibility settings and works directly with the emergency call-answering service (ECAS). RTT is more immediate than SMS — [Irish Deaf Society](https://www.irishdeafsociety.ie/vodafone-ireland-has-launched-a-new-emergency-real-time-text-rtt-service/); [ComReg](https://www.comreg.ie/real-time-text-rtt-service-launched-in-ireland/); [112.ie RTT](https://112.ie/realtimetext/)
- Emergency SMS goes to 112 only and does not work from an Irish phone while roaming — [112.ie](https://112.ie/sending-a-text-to-112/)

**US Text-to-911**
- The guidance is "call if you can, text if you can't".
- Coverage depends on the local call centre (PSAP); where it is missing, texts get a bounce-back.
- **No automatic location.**
- SMS only: no photos or video. Not available when roaming.
- Sources: [FCC (archived)](https://www.fcc.gov/what-you-need-know-about-text-911); [Orange County FL](https://www.ocfl.net/EmergencySafety/TextTo911.aspx); [No Jitter](https://nojitter.com/contact-centers/call-if-you-can-text-if-you-can-t-an-update)

**UK 999 BSL:** Video relay to emergency services (earlier notes).

### Inferences
- **Copy into the Uzbek platform:**
  - A one-tap SOS with **pictogram choice** of service (101/102/103/112).
  - **Automatic GPS** plus the saved profile ("I am Deaf, text/sign only").
  - **Silent mode.**
  - **Training mode**, so users rehearse without triggering real dispatch.
  - Sign-video onboarding.
- **Be honest:** An app alone is not equivalent access (Ireland and EENA). The platform should push for native SMS/RTT to Uzbek call centres and treat the app as interim.
- **Avoid:** Making pre-registration a blocker at the moment of emergency. Let users register gradually and still send a basic location SOS.

### Gaps
- No ratings or download counts for nora or DEC112. DEC112's open-source status (it was EU NGI-funded) was not verified.
- No Deaf-user evaluation of nora was retrieved.

---

## 6. AAC for non-speaking people

### Takeaway
The commercial leaders are Proloquo2Go (~$249.99 one-time, iOS), TD Snap (Tobii Dynavox: touch, eye-gaze or switch; speech output by subscription after a trial) and Avaz (~$149.99 one-time or a subscription; Indian origin). The open-source option is Cboard (GPL-3.0, web/PWA, offline, ~44 languages; earlier notes). The main complaint is price, followed by complex navigation and hidden features.

### Cited Findings

**Proloquo2Go**
- About $249.99 one-time; some regional listings differ, e.g. $349.99, plus a $199.99 Gateway vocabulary purchase — [Pratt IXD 2024](https://ixd.prattsi.org/2024/09/assistive-technology-proloquo2go-ios/); [App Store CA](https://apps.apple.com/ca/app/id308368164?l=en-ca)
- **Features:** Highly customisable vocabulary and layout, progressive language, bilingual use, voices included at no extra cost — [Common Sense Media](https://www.commonsensemedia.org/app-reviews/proloquo2go)
- **Complaints:** The price limits access for parents. The interface can overwhelm without tutorials, features are hidden and folder navigation is cumbersome — [Pratt IXD](https://ixd.prattsi.org/2024/09/assistive-technology-proloquo2go-ios/)

**TD Snap**
- Ready-made page sets. Access by touch, eye gaze or switch. **Speech output needs a monthly subscription after a 1-month trial** — [AlternativeTo](https://alternativeto.net/software/td-snap)

**Avaz**
- **Pricing (sources conflict):** $9.99 a month or $99.99 a year, with $199.99 lifetime on an older listing; later raised to $149.99. A 2-week trial; a free Lite version claimed — [Avaz support](https://avazapp.freshdesk.com/support/solutions/articles/1000172730); [Avaz blog](https://buzz.avazapp.com/?p=6264)
- Less suited to users who need custom switch scanning — [WorldMetrics (low reliability)](https://worldmetrics.org/best/aac-software/)

**Cboard**
- Free, GPL-3.0, offline PWA, about 44 languages, UNICEF-funded (sources in the earlier notes).

### Inferences
- **Fork or localise Cboard:** It is the only open-source, offline, multi-language base. Add Uzbek symbols, Uzbek TTS, and Deaf phrase cards on the same board engine. One engine can serve both AAC users and Deaf "phrase card" users.
- **Copy from the commercial apps:**
  - Motor-plan-stable grids, where buttons never move.
  - Progressive vocabulary reveal.
  - Switch and eye-gaze access.
- **Avoid** paywalling speech output (TD Snap's model).

### Gaps
- No independent outcome studies for these apps were found.
- Current Cboard activity (commits in 2026) was not re-verified.

---

## 7. Video messaging, meetings, community and other categories

### Takeaway
Deaf signers adopted async video messaging (Glide, Marco Polo) because it lets them sign without scheduling a call. The decisive UX fix was **un-mirroring the camera so signs read correctly**. Meeting platforms now offer interpreter-pinning: Teams has a personal "Sign Language View" and Zoom a host-assigned "sign language interpretation view" for up to 20 interpreters. Google Meet's equivalent was not confirmed. No platform offers automatic sign translation.

### Cited Findings

**Glide**
- Not designed for Deaf users but adopted by hundreds of thousands of Deaf users for ASL video messaging. Its community manager learned ASL to understand requests — [Next Big Idea Club (Nir Eyal)](https://cdn2.nextbigideaclub.com/magazine/nir-eyal-video-messaging-app-found-unexpected-success-thanks-deaf-community/3273/)

**Marco Polo**
- Async video. The team changed the camera after Deaf users reported **mirrored, backwards signing**. Supports VoiceOver, Voice Control and Reduce Motion, with higher contrast — [Next Big Idea Club](https://cdn2.nextbigideaclub.com/magazine/nir-eyal-video-messaging-app-found-unexpected-success-thanks-deaf-community/3273/); [Marco Polo support](https://support.marcopolo.me/article/114-accessibility-friendly-features)
- Recommended in Sorenson's "best apps for Deaf people 2025" — [Sorenson](https://sorenson.com/blog/vrs/the-best-apps-for-deaf-people-in-2025/)

**Microsoft Teams Sign Language View**
- A per-user setting. Designated signers stay on centre stage while their video is on, without changing other participants' view.
- Priority signers can be pre-assigned if they are in the same organisation; external interpreters are added during the meeting.
- Can be on by default in Settings > Accessibility. Use spotlight for everyone.
- Source: [Microsoft Support](https://support.microsoft.com/en-us/office/use-sign-language-view-in-microsoft-teams-c6c11f67-0747-4598-ac27-c90801b94434)
- Up to 2 signers per launch coverage; the signer video stays high quality during screen share — [Microsoft Tech Community](https://techcommunity.microsoft.com/blog/microsoftteamsblog/introducing-sign-language-view-for-teams-meetings/3671257); [Petri](https://petri.com/microsoft-teams-meetings-get-new-sign-language-view-and-accessibility-pane/)

**Zoom sign language interpretation view**
- Enabled by an admin. The host assigns up to 20 interpreters, shown in dedicated pinned and spotlighted channels. An option records the interpreter — [UC Today](https://www.uctoday.com/?p=46645); [PCC guide](https://www.pcc.edu/instructional-support/tools/zoom/technical-guide-zoom-with-asl-interpretation/)
- Users ask to pin multiple participants so a Deaf interpreter stays visible to everyone — [Zoom Community](https://community.zoom.com/meetings-2/pin-multiple-participants-so-deaf-interpreter-stays-visible-to-other-participants-always-46203)

**Google Meet**
- Live captions free; translated captions on paid plans; each participant turns captions on themselves — [HearingTracker](https://www.hearingtracker.com/apps/phone-video). No sign-interpreter view was confirmed.

### Inferences
- **Must-have for the video stack:**
  - **Un-mirrored outgoing video** (show the selfie preview mirrored if you like, but send true orientation).
  - **Async sign video messages.**
  - A **pinned interpreter tile that survives screen share.**
  - Interpreter recording only with consent.
- **Integration over a new social network:** Deaf people already use mainstream video messengers (and Telegram/WhatsApp, per earlier notes).

### Gaps
- **Sign-language keyboards** (ASL keyboard apps showing handshape glyphs) were not researched. No sources.
- **Google Meet** sign-interpreter features: not confirmed.
- **Volunteer "Be My Ears"-type service:** none found.

---

## 8. Product-by-product summary matrix

Legend: ✔ = has the feature (sourced above). — = not found or not applicable. OSS = any part is open source.

| Product | Category | Platforms | Ratings snapshot | Price model | Killer feature | Top complaint | OSS | Status 2026 |
|---|---|---|---|---|---|---|---|---|
| Google Live Transcribe & Sound Notif. | Captions + sound alerts | Android 12+ | Play 3.8 (276K) | Free | Offline packs, dual screen on foldables, sound alerts | Flicker / missed words | Library on GitHub (unverified) | Active |
| Apple Live Captions / Live Listen / Sound Recognition | Built-in OS | iOS, iPadOS, macOS, watchOS | n/a | Free | On-device; Watch captions; name recognition | — (no review data) | No | Active |
| Ava | Group captions | iOS, Android, Mac, Win, web | iOS 4.4 (4.2K), Play 4.3 (761) | Freemium, 40-min cap; human Scribe | QR guest join, speaker labels, meeting bot | Lost transcripts, billing | No | Active |
| Rylo (ex-Nagish) | Call captions + in-person | iOS, Android | iOS 4.6 (4.6K), Play 4.6 (2.9K) | Free (FCC IP CTS, US) | Free AI call captions | Account requirements, spam calls | Owns sign.mt (OSS) | Active, rebranded Jun 2026 |
| InnoCaption | Call captions | iOS, Android | iOS 4.7 (12.6K) | Free (US) | AI or human stenographer toggle | — | No | Active |
| RogerVoice | Call captions | iOS, Android | 4.4-4.8 (conflicting) | Freemium plans | Free app-to-app captioned calls, 6 languages | Billing / access | No | Active |
| Otter | Meeting transcription | Multi | — | Freemium 300 min/mo | Shared transcripts | — (no Deaf data) | No | Active |
| Sorenson ntouch | VRS | iOS, Android, desktop | iOS 4.1 (510), Play 4.3 (6.5K) | Free (US TRS) | Largest interpreter pool | Missed calls, black video | No | Active |
| Convo Call | VRS (Deaf-owned) | Multi | legacy 4.1 (280) | Free (TRS) | Deaf-owned; DeafBlind praise | Unreliable answering (legacy) | No | Convo VRS / Link **dead 4 May 2026** |
| ZP Sivo | VRS | iOS, PC, Mac | 4.5 (18) | Free (TRS) | Three-way video; video mail call-back | — | No | Active (Teleperformance) |
| GlobalVRS | VRS | — | — | — | — | — | — | Not researched |
| SignVideo (UK) | VRI/VRS | iOS, Android, Mac, Win, web | — | Org pays, free to user | SignDirectory of 150+ services | — | No | Active (Sorenson) |
| Contact Scotland BSL | Gov relay | Multi + web | — | Gov-funded, free | 24/7, no login needed | — | No | Active; provider conflict |
| ISLRTC relay / SignAble | Gov relay / private VRI (India) | Web / iOS | — | Free / paid | Deaf video + hearing audio | — | No | Active (earlier notes) |
| Hand Talk | Avatar translator + plugin | iOS, Android, web | iOS ~3.8-3.9 (~498) | Free app; B2B plugin | 3D avatars Hugo / Maya | Accuracy, language | No | Active |
| Signapse | AI signer B2B | Web, transport | — | B2B | Photorealistic BSL/ASL; DGS planned | — | No | Active |
| Signly | Human BSL on websites | Browser ext, app | — | Site owner pays | Human video bound to web/print text | Not real-time | No | Active |
| Sign-Speak | Recognition API | SDK | — | B2B | ASL recognition + production API | — | SDK on npm (licence unverified) | Unclear |
| SignAll / Ace ASL | Fingerspelling AI tutor | iOS | — | Freemium | Camera feedback on fingerspelling | — | No | Likely dormant |
| GnoSys, Kara | Recognition / avatar | — | — | — | — | — | — | See earlier notes |
| Lingvano | Learning | iOS, Android, web | — | Subscription | Deaf-led lessons | Paywall after 2 chapters | No | Active |
| ASL Bloom | Learning | iOS, Android, web | iOS 4.9 (38K), Play 4.8 (18K) | 2 free lessons/day + Premium | Slow-mo, gamified | Paywall, video bugs, AI art | No | Active |
| SignSchool | Learning | iOS, web | — | Free | Free full platform | — | No | Active |
| Hands On ASL | Fingerspelling | iOS | ~4.0 (~80) | Free + IAP | Rotatable 3D hands | IAP for hand colour | No | Stale (2019-21) |
| The ASL App | Dictionary / phrases | iOS, Android | — | Free + $9.99 | Deaf-owned, 2,500 signs | — | No | Active |
| Spreadthesign | Multi-lingual dictionary | Web, iOS, Android | — | Free web; app IAP | Cross-language compare, offline | — | No (NGO) | Active |
| Proloquo2Go | AAC | iOS, Mac | — | ~$249.99 one-time | Progressive language | Price, complexity | No | Active |
| TD Snap | AAC | iOS, Win | — | Subscription for speech | Eye-gaze / switch | Speech paywall | No | Active |
| Avaz | AAC | iOS, Android | — | ~$149.99 or subscription | Affordable, Indian origin | — | No | Active |
| Cboard | AAC | Web PWA | — | Free | Offline, 44 languages | — | **GPL-3.0** | Active (earlier notes) |
| nora | Emergency DE | iOS, Android | — | Free (state) | Pictograms + silent SOS | Pre-registration; critique | No | Active |
| DEC112 | Emergency AT | iOS, Android | — | Free | Text chat + training mode | — | Unverified | Active |
| 112 Ireland RTT | Emergency | Native OS | — | Free | No app, no pre-registration | Operator-limited | n/a | Active 2025 |
| Text-to-911 | Emergency US | SMS | — | Free | — | No location, patchy | n/a | Active |
| Glide / Marco Polo | Async video | iOS, Android | — | Free / freemium | Async signing | Mirroring (fixed by MP) | No | Active |
| Teams / Zoom / Meet | Meetings | Multi | Play 4.7 / 4.1 / 4.4 | Free captions | Interpreter pin view (Teams, Zoom) | Pin limits | No | Active |

---

## 9. Master feature list (42 features) with verdicts

### Takeaway
A non-profit, open-source Uzbek platform should combine:
- **Conversation**: split-screen captions, typed TTS reply, phrase cards, offline, correctable captions.
- **Relay**: directory-first human VRI, no-login calling, reliable call alerts.
- **Learning**: free, Deaf-led dictionary with slow motion and offline saving.
- **Emergency**: pictogram SOS, location, silent and training modes.
- **AAC**: a Cboard-based board engine.
- **Community**: async un-mirrored sign video.

Avoid general avatar translators for live content, paywalls on core access, and opaque data reuse.

### Cited Findings (feature → products that have it → verdict and evidence)

**A. Conversation (in-person)**
1. **Live speech-to-text captions** — Live Transcribe, Apple Live Captions, Ava, Rylo. **MUST.** Users praise following appointments and meetings — [HearingTracker LT](https://www.hearingtracker.com/apps/google-live-transcribe)
2. **Typed reply spoken by TTS** — Live Transcribe. **MUST** (non-speaking and Deaf users) — same source.
3. **Dual or split screen facing the other person** — Live Transcribe (foldables). **MUST**, done as a 180° split on normal phones — [Google Support](https://support.google.com/accessibility/android/answer/9158064?hl=en)
4. **Adjustable text size, contrast and dark mode** — LT, Ava, RogerVoice. **MUST** — [HearingTracker Ava](https://www.hearingtracker.com/apps/ava)
5. **Offline language packs** — LT; Ava (default language only). **MUST** (cost and coverage in Uzbekistan) — [9to5Google](https://9to5google.com/2022/03/10/google-live-transcribe-feature-now-works-when-offline/)
6. **Speaker labels / identification** — Ava. **NICE** (LT users request it) — [HearingTracker LT](https://www.hearingtracker.com/apps/google-live-transcribe)
7. **Guest joins a caption session by QR, no account** — Ava. **MUST** for groups — [HearingTracker Ava](https://www.hearingtracker.com/apps/ava)
8. **Custom vocabulary** — LT. **NICE** (names, Uzbek terms) — same source.
9. **Saved, searchable, exportable transcripts under user control** — LT (3 days), Ava. **MUST**; lost transcripts are a top Ava complaint — [HearingTracker Ava](https://www.hearingtracker.com/apps/ava)
10. **On-device processing by default** — Apple. **MUST** for privacy — [Apple FY25](https://www.apple.com/government/docs/resources/No_Introduction_FY25_Whats_New_in_Apple_Accessibility.pdf)
11. **Hard session caps or paywalled languages** — Ava. **AVOID**; billing is a top complaint — [HearingTracker Ava](https://www.hearingtracker.com/apps/ava)
12. **Correctable captions** (tap to fix; hearing partner corrects) — research prototype EvolveCaptions (earlier notes). **NICE → differentiator.** It answers the "missed words / flicker" complaints.
13. **Situational phrase cards** (icon, text, sign video) — no single global product found; nora uses pictograms. **MUST** (low literacy; earlier notes).

**B. Phone calls and relay**
14. **Captioned phone calls (AI)** — Rylo, InnoCaption, RogerVoice, CaptionCall. **NICE**; it depends on a telecom or funding partner — [HearingTracker list](https://www.hearingtracker.com/apps/phone-video)
15. **Human-captioner fallback** — InnoCaption, Ava Scribe. **NICE** — same source.
16. **On-demand human VRI / VRS** — ntouch, Convo, Sivo, SignVideo, Contact Scotland, SignAble. **MUST** (the community-endorsed core).
17. **Directory of organisations callable in sign** — SignVideo (150+). **MUST**; it gives B2G/B2B partners visibility — [SignVideo](https://signvideo.co.uk/download/)
18. **Call without login** — Contact Scotland. **MUST** for emergencies and first use — [FAQ](https://contactscotland-bsl.org/faqs/)
19. **Three-way video** (hearing party sees the Deaf person) — Sivo. **NICE** — [App Store](https://apps.apple.com/us/app/sivo/id1524340854)
20. **Video mail with call-back** — ZP. **NICE** — [ZP](https://zpbettertogether.com/z5-p3/)
21. **Reliable incoming-call alerts** (vibration, flash, full screen) — the main ntouch failure. **MUST** — [HearingTracker ntouch](https://www.hearingtracker.com/apps/sorenson-ntouch)
22. **Interpreter wait-time transparency** — not found in any product; "interpreter unavailable" is a complaint. **NICE → differentiator.**
23. **DeafBlind-friendly mode** — praised for Convo. **NICE** — [App Store](https://apps.apple.com/us/app/convo-vrs/id423121946?l=fr-FR)

**C. Sign-language output and recognition**
24. **Human-recorded sign video on static content plus QR / print-to-sign** — Signly. **MUST** (cheap, WFD-compatible) — [Living Made Easy](https://livingmadeeasy.org.uk/product/signly-sign-text-to-bsl)
25. **AI or avatar signer for templated announcements** — Signapse, Kara. **NICE / later**, only for static content (WFD; earlier notes).
26. **General avatar "translator" for live conversation** — Hand Talk. **AVOID** for Deaf-facing use; ratings ~3.8 and an accuracy critique — [SplitMetrics](https://splitmetrics.com/apps/hand-talk-asl-sign-language/id659816995)
27. **Sign recognition for open conversation** — Sign-Speak API, GnoSys. **AVOID for MVP** (data-bound; earlier notes).
28. **Fingerspelling / isolated-sign recognition for practice** — Ace ASL. **NICE** — [BusinessWire](https://www.businesswire.com/news/home/20210401005516/en/SignAll-Launches-Ace-ASL-App-AI-Will-Help-to-Learn-Sign-Language)
29. **Smart gloves / wearables** — **AVOID** (earlier notes).

**D. Learning**
30. **Searchable sign dictionary with slow-motion and loop** — Bloom, The ASL App, Spreadthesign. **MUST** — [HearingTracker Bloom](https://www.hearingtracker.com/apps/asl-bloom)
31. **Offline saving of signs** — Spreadthesign. **MUST** — [App Store](https://apps.apple.com/us/app/-/id438811366)
32. **Short structured daily lessons and quizzes** — Bloom, Lingvano, SignSchool. **MUST**, but only quiz what has been taught — [HearingTracker Bloom](https://www.hearingtracker.com/apps/asl-bloom)
33. **Deaf native signers in all videos** — Lingvano, Ace ASL, The ASL App. **MUST.**
34. **Cross-language compare** (e.g. UzSL vs RSL) — Spreadthesign. **NICE** — [outilstice](https://outilstice.com/en/spreadthesign-dictionnaire-international-des-langues-de-signes/)
35. **3D rotatable hand models** — Hands On ASL. **NICE** for handshape clarity — [AppAdvice](https://appadvice.com/app/hands-on-asl/1450898947)
36. **Aggressive paywall / AI-generated illustrations** — Lingvano, Bloom. **AVOID** — [HearingTracker Bloom](https://www.hearingtracker.com/apps/asl-bloom); [marlvel](https://marlvel.ai/apps/com-lingvano-app)

**E. Emergency**
37. **One-tap SOS with pictogram service choice and automatic location** — nora, DEC112. **MUST** — [nora](https://www.nora-notruf.de/google-play-store)
38. **Silent emergency mode** — nora, DEC112. **MUST** — [DEC112](https://app.innovationinpolitics.eu/?p=48026)
39. **Training / test mode** — DEC112. **MUST** (reduces fear and false dispatch) — [NGI Navigator](https://ngi-navigator.demo.abilian.com/product/dec112)
40. **Mandatory pre-registration before an SOS can be sent** — nora. **AVOID as a blocker** (Ireland and EENA; earlier notes).

**F. Media accessibility and alerts**
41. **Sound recognition alerts** (doorbell, alarm, baby, own name) — Google Sound Notifications, Apple Sound Recognition. **NICE**; the OS already provides it, so link to it rather than rebuild — [Apple FY25](https://www.apple.com/government/docs/resources/No_Introduction_FY25_Whats_New_in_Apple_Accessibility.pdf)
42. **Pinned interpreter tile in meetings, kept during screen share** — Teams, Zoom. **MUST** in the platform's own video calls — [Microsoft Support](https://support.microsoft.com/en-us/office/use-sign-language-view-in-microsoft-teams-c6c11f67-0747-4598-ac27-c90801b94434)

**G. AAC and community**
43. **Symbol board AAC with TTS, offline, customisable** — Cboard (OSS), Proloquo2Go, TD Snap, Avaz. **MUST** as a separate mode; fork Cboard.
44. **Switch / eye-gaze access** — TD Snap. **NICE** — [AlternativeTo](https://alternativeto.net/software/td-snap)
45. **Paywalled speech output** — TD Snap. **AVOID.**
46. **Async sign video messages, un-mirrored** — Glide, Marco Polo. **MUST** — [Next Big Idea Club](https://cdn2.nextbigideaclub.com/magazine/nir-eyal-video-messaging-app-found-unexpected-success-thanks-deaf-community/3273/)
47. **How-to and help videos in sign language** — Contact Scotland, nora. **MUST** — [Contact Scotland](https://contactscotland-bsl.org/faqs/)
48. **Deaf business directory** — SignVideo. **NICE** (community and economic) — [SignVideo](https://www.signvideo.co.uk/signvideo-launches-bsl-business-directory/)

### Inferences
- **The MVP core is a "Swiss-army" mobile app with five tabs:**
  1. **Gaplash** (conversation): split-screen STT, TTS, phrase cards, offline.
  2. **Tarjimon** (interpreter): directory-first human VRI, no-login call.
  3. **SOS**: pictograms, GPS, silent and training modes.
  4. **Lug'at** (dictionary): Deaf-recorded UzSL, slow motion, offline.
  5. **Video xabar** (video message): async, un-mirrored.
- **AAC** is a sixth mode on the Cboard engine.
- The **website sign overlay** (Signly-style human video plus QR) is the B2G/B2B revenue and partnership product.
- **Open source is a real gap.** In this matrix, only Cboard is clearly OSS (plus sign.mt, now Rylo-owned). An OSS, non-profit Deaf platform would be close to unique globally, but each component's licence must be checked.
- **Free can be the differentiator.** The most consistent complaint class across captions, learning and AAC is **money**: paywalls, caps, billing confusion and price. A free non-profit removes it.

### Gaps
- No r/deaf or r/asl evidence; verdicts rest on store-review aggregates, vendor docs and the earlier academic notes.
- No data on sign-language keyboards, a volunteer "Be My Ears" model, or GlobalVRS.
- Download counts are mostly missing; only rating counts are available.
- Not verified for these products: Google's Live Transcribe library, DEC112 and Sign-Speak's SDK licence.
