# Uzbek and Russian speech, caption and sign technology: what a non-profit Uzbek Deaf platform can rely on vs must build (verified Nov 2026)

Method: primary docs fetched 2026-11-15 where possible (Google Cloud docs, Microsoft Learn, Apple feature-availability, Google Meet help, Google blog, Yandex AI Studio docs, aisha.group pricing, Hugging Face model card, Telegram core docs). Search-snippet-only items are marked as such. Budget limit (~25 tool calls) left several items unverified; see Gaps in each section.

## 1. Google consumer accessibility (Live Transcribe, Live Caption, Translate, SL2T, Meet)

### Takeaway
Google's only officially documented sign-language feature in Nov 2026 is ASL to English on Pixel 11 (SL2T). No Russian or Central Asian sign language is listed. Google Meet lists both Russian and Uzbek in its captions-translation language list. The Live Transcribe help page does not publish a language list (it says to check in-app), so Uzbek support in Live Transcribe could not be confirmed from primary docs.

### Cited Findings
- Live Transcribe help page does not list languages. It says languages can be downloaded for offline use on Pixel and select Android 12+ devices ("multiple languages, like English, French and more"). On Android 8-11 only English is available offline. The language list has to be checked in-app (Settings > Additional settings > Primary/Secondary language) — [Google Accessibility Help: Live Transcribe](https://support.google.com/accessibility/android/answer/9158064?hl=en)
- Pixel 11 sign-to-text is described only for "American Sign Language (ASL)". The blog calls the underlying model a "multilingual sign language-to-text (SL2T) translation model" but names no other sign language and lists no countries — [Google blog, Pixel 11 ASL sign-to-text](https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/)
- SL2T announced 2026-08-12 by DeepMind, in Gboard and Live Transcribe on Pixel 11 — [DeepMind blog](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/); [SiliconANGLE](https://siliconangle.com/2026/08/12/google-debuts-sl2t-ai-model-thats-designed-understand-sign-language/) (search snippet only)
- Secondary press (not primary) reports training on >100,000 hours covering >50 sign languages, about a quarter ASL, and that only body landmarks leave the device — search-snippet summary of [Notebookcheck](https://www.notebookcheck.net/Google-Pixel-11-turns-American-Sign-Language-into-typed-text.1367397.0.html). Not verified against DeepMind's text.
- Google Meet help lists Russian and Uzbek among caption languages, with the caveat "Some languages are in beta so translation quality may vary" and "gradually rolling out". The fetched list is in the translated-captions section, so it may be the translation target list, not the spoken-language list — [Google Meet Help: captions](https://support.google.com/meet/answer/10964115?hl=en)

### Inferences
- A sign-language recognizer for Uzbek or Russian Sign Language is not available from Google. The platform has to build or partner for it.
- Meet with Uzbek captions may help Deaf users in hearing-led meetings. Workspace availability and beta quality are unknowns.

### Gaps
- Live Transcribe and Live Caption (Android/Chrome) language lists: no primary page found. Test on a device.
- Google Translate conversation mode with Uzbek voice: not verified.
- Whether Meet's spoken-language list (as opposed to the translation list) includes Uzbek: not confirmed.

## 2. Apple (Live Captions, Live Listen, Translate)

### Takeaway
Apple Live Captions does not support Russian or Uzbek. The official list is English, French, German, Spanish, Japanese, Korean, Mandarin and Cantonese variants only. Russian and Uzbek also do not appear in Apple's Live Translation sections.

### Cited Findings
- iOS 26 feature-availability "Accessibility: Live Captions" lists: Cantonese (China mainland, Hong Kong), English (Australia, Canada, India, Singapore, UK, US), French (Canada, France), German, Japanese, Korean, Mandarin (China mainland, Taiwan), Spanish (Mexico, Spain, US) — [Apple iOS feature availability](https://www.apple.com/ios/feature-availability/)
- Russian and Uzbek are absent from "Live Translation in Messages", "Live Translations in Phone and FaceTime" and "Live Translation with AirPods" on the same page — [Apple iOS feature availability](https://www.apple.com/ios/feature-availability/)

### Inferences
- iPhone users in Uzbekistan get no system captions in their languages. A platform app has to supply captions itself.

### Gaps
- Apple Translate app Uzbek support: the relevant part of the page was truncated, so not verified.
- Live Listen is an audio amplification feature with no language dependency. Not separately verified.

## 3. Cloud STT: Microsoft, Google Cloud, Yandex, ElevenLabs, OpenAI

### Takeaway
Uzbek STT is a commodity in the big clouds: Azure has `uz-UZ` real-time and batch, Google Cloud has `uz-UZ` on Chirp, Chirp 2 and Chirp 3, and Yandex SpeechKit has `uz-UZ`. Russian is supported everywhere. Prices were not fully verified, apart from Yandex (per 15 s) and ElevenLabs ($0.40/h).

### Cited Findings
- Azure Speech STT `uz-UZ` "Uzbek (Latin, Uzbekistan)" supports real-time and batch transcription, plus monolingual post-stream refinement — [Microsoft Learn, language support](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt)
- Google Cloud STT v2 `uz-UZ` is supported on `chirp` (asia-southeast1, europe-west4), `chirp_2` (asia-southeast1, europe-west4) and `chirp_3` (eu). No `long`/`short` rows for uz-UZ in the portion read. `ru-RU` has chirp, chirp_2, chirp_3, long and short — [Google Cloud STT supported languages](https://docs.cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages) (first 100k chars read; US-region rows not read)
- Yandex SpeechKit lists `uz-UZ` "Uzbek (Latin script)". The page does not map languages to streaming/sync/async modes — [Yandex AI Studio SpeechKit models](https://aistudio.yandex.ru/docs/en/speechkit/stt/models). Uzbek was added in 2023 — [Yandex Cloud blog](https://yandex.cloud/ru/blog/posts/2023/06/speechkit-uzbek-language)
- Yandex SpeechKit recognition price (search snippet of the pricing page, without VAT): streaming $0.001333 per 15 s (about $0.32/h), async $0.001245 per 15 s (about $0.30/h). No Uzbek-specific line was found — [Yandex SpeechKit pricing](https://yandex.cloud/en-ru/docs/speechkit/pricing)
- ElevenLabs Scribe v1 Uzbek: costs "$0.40 per hour". The page says it works for audio "available upfront", and that "A low-latency, real-time version will be released soon". The page contradicts itself on accuracy: the intro claims "3.1% WER on FLEURS" and "5.5% on Common Voice", while its own table lists 15.9% WER for Scribe v1 on FLEURS — [ElevenLabs Uzbek STT](https://elevenlabs.io/speech-to-text/uzbek)

### Inferences
- For hosted, non-offline Uzbek captions, Azure (`uz-UZ` real-time) and Google Chirp 2/3 (streaming) are reliable to integrate. Yandex is the cheapest documented option, at about $0.30-0.32/h.
- Vendor WER claims are internally inconsistent (ElevenLabs), so the platform should run its own small test set.

### Gaps
- Azure STT price per hour and whether Azure has `uz-UZ` TTS voices (that part of the page was not read). Teams live-caption Uzbek: not verified.
- Google Chirp price per minute: not fetched.
- OpenAI transcription models (gpt-4o-transcribe, whisper-1) Uzbek quality: not verified.

## 4. Uzbek local providers: Aisha, Muxlisa (UZINFOCOM), UzbekVoice

### Takeaway
Aisha publishes clear pay-as-you-go prices (STT 425 UZS/min, about $2/h; TTS 1 UZS/char) and offers on-prem under its Enterprise plan. Muxlisa (UZINFOCOM) self-reports 11.39-13.42% WER and supports cloud or on-prem, but no public API pricing or docs were found.

### Cited Findings
- Aisha Starter (pay as you go): TTS 1 UZS per character, STT 425 UZS per minute, no monthly fee. Business plan: custom pricing with SLA. Enterprise: custom pricing, "on-premise deployment, custom models". Free trial via voicelab.uz/app with no stated quota. Streaming is not mentioned on the pricing page — [Aisha pricing](https://aisha.group/en/pricing)
- Aisha API documents `uz`, `en` and `ru` for both TTS and STT. Its own LLM evidence map forbids quoting accuracy numbers without a methodology, and none are published — [aisha.group llms-full.txt](https://aisha.group/llms-full.txt); API docs at [aisha.group/en/api-documentation/speech-to-text](https://aisha.group/en/api-documentation/speech-to-text) (not fetched)
- Muxlisa updated STT (April 2026), self-reported: 11.39% WER on telephony call-center audio, 13.42% on open-domain YouTube audio, available via API (muxlisa.uz) — [UZINFOCOM news 522](https://uzinfocom.uz/en/news/522) (search snippet)
- Muxlisa bundles ASR, TTS and diarization, cloud or on-premise — [Anhor.uz](https://anhor.uz/ru/texnologii/speech-tech-technologies-and-products-in-the-uzbek-market) (secondary); open APIs for developers — [Spot.uz](https://www.spot.uz/ru/2025/11/12/uzinfocom/) (secondary)

### Inferences
- At 425 UZS/min (about $2/h at roughly 12,000-13,000 UZS/USD, an assumed rate), Aisha costs about 5-6x more than Yandex or ElevenLabs per hour. It may still be better on colloquial Uzbek. A benchmark is needed.
- On-prem or offline Uzbek STT from a vendor is only available through custom enterprise contracts (Aisha, Muxlisa).

### Gaps
- Muxlisa pricing and API docs, Aisha streaming/WebSocket support, UzbekVoice: not verified.
- No independent cross-vendor WER benchmark (Aisha vs Muxlisa vs Google vs Azure) was found.

## 5. Open models and datasets (Whisper, Omnilingual, HF models, Vosk, TTS, Common Voice)

### Takeaway
Zero-shot Whisper is weak on Uzbek (about 28% CER). Open fine-tunes reach about 12% WER on Common Voice and 16-26% WER on FLEURS. The best documented one is BuzzASR/uzbek (MIT license, Whisper-large-v3 fine-tune). Fine-tuned open models are a viable self-hosted, offline path.

### Cited Findings
- BuzzASR/uzbek (Whisper-large-v3 fine-tune), MIT license. FLEURS: CER 6.6, WER 25.64. Common Voice 25: CER 2.68, WER 11.84. Combined: CER 3.86, WER 16.0. Zero-shot Whisper-large-v3 CER: 28.4 (FLEURS), 28.55 (CV), 28.45 (combined). The card claims the lowest CER among Whisper-large-v3, Omnilingual 1B/7B, MMS, Qwen3-ASR and Cohere Transcribe, but gives no numbers for those systems. Paper arXiv:2609.09554 — [HF BuzzASR/uzbek](https://huggingface.co/BuzzASR/uzbek)
- rustam1221/uzbek-asr-gigaam (CTC, non-Whisper) reports 16.1% WER on spontaneous speech vs 39.6% for whisper-large-v3-turbo-uzbek — [HF uzbek-asr-gigaam](https://huggingface.co/rustam1221/uzbek-asr-gigaam) (search snippet)
- A community whisper-medium fine-tune reports FLEURS uz 14.40%, CV17 13.37%, FeruzaSpeech 7.88% WER — [HF islomov/rubaistt_v2_medium](https://huggingface.co/islomov/rubaistt_v2_medium/blob/main/README.md) (search snippet; attribution to this exact card uncertain)

### Inferences
- Plan for fine-tuned Whisper or CTC models on Common Voice + FLEURS + domain data, self-hosted. Turbo or CTC variants are more realistic for low-latency or offline mobile use.
- Numbers come from different CV versions and normalizers, so they are not strictly comparable.

### Gaps
- Common Voice Uzbek hours and license as of 2026: the datasets page did not render. CC0 is the standard CV license, but this was not verified here.
- Meta Omnilingual ASR Uzbek CER/WER, Vosk Uzbek accuracy, Piper/Coqui/ISSAI TurkicTTS Uzbek voices and licenses: not verified.

## 6. SURDO AI (National Agency for Social Protection)

### Takeaway
SURDO AI exists, per secondary press: speech/text to sign language and back, Uzbek and Russian, a 1,000+ word sign dictionary, a learning module and a Chrome plugin. No store listing, ratings, reviews or technical description of avatar or recognition were found.

### Cited Findings
- Built by the IT Center under the National Agency for Social Protection, with teachers and pupils of special schools. It translates speech and text to sign and back in real time, has 1,000+ words with sign translations, a training module, Russian and Uzbek, and a Chrome plugin — [Podrobno.uz](https://podrobno.uz/cat/tehnp/v-uzbekistane-razrabotali-ii-platformu-dlya-perevoda-rechi-i-teksta-na-yazyk-zhestov/) (search snippet)
- No Chrome Web Store listing named "Surdo AI" was found in search. A similar extension, "Openhearted Sign Language", claims real-time translation to American or Russian sign language from tab audio and needs an access key — [chromeboard listing](https://chromeboard.com/extension/openhearted-sign-language-efhokemfgkpieibngkgbiepgmphlfoei) (search snippet)

### Inferences
- A 1,000-word dictionary means glossing or dictionary lookup, not full sign-language translation. The "back" direction (sign to text) quality is unknown.

### Gaps
- Chrome Web Store and App Store user counts, ratings and reviews; avatar technology. Search the stores directly.

## 7. Telegram Mini Apps as the platform

### Takeaway
Official Mini Apps docs define no camera, microphone or WebRTC API. A Mini App is a WebView, so live video or captions depend on standard `getUserMedia`/WebRTC working in Telegram's WebView. That is anecdotally possible, but has known Android permission bugs. Treat it as unverified until tested on target devices.

### Cited Findings
- core.telegram.org/bots/webapps documents `requestFullscreen` (Bot API 8.0+), `LocationManager`, `BiometricManager`, `DeviceStorage`/`SecureStorage`/`CloudStorage`, `Accelerometer`/`Gyroscope`/`DeviceOrientation`, `showScanQrPopup`, `downloadFile` and `shareToStory`. There is no camera, microphone, getUserMedia or WebRTC API or permission in the portion read (first 100k of 115k chars) — [Telegram Mini Apps docs](https://core.telegram.org/bots/webapps)
- A Telegram bug tracker report covers camera activation via file input failing in Telegram's in-app browser on Android — [bugs.telegram.org/c/44936](https://bugs.telegram.org/c/44936) (search snippet)
- Developer forum anecdotes say getUserMedia works on most devices, but mobile permissions are "weird" — [Latenode community](https://community.latenode.com/t/how-to-enable-camera-access-through-telegram-web-applications-for-live-streaming/23550) (unverified, low authority)

### Inferences
- Use Telegram for distribution, notifications, a dictionary and async video messages. For live video relay or live captions, plan a fallback (open in external browser, PWA or native app).

### Gaps
- The last 15k chars of the Mini Apps doc were not read. Real-device tests are needed (iOS Telegram, Android Telegram, Desktop).

---

### Decision table (synthesis of sections 1-7; each cell traces to a citation above)

| Capability | Best option for Uzbek | Cost | Offline? | License | Confidence |
|---|---|---|---|---|---|
| Live speech-to-text captions (hosted) | Azure `uz-UZ` real-time or Google Chirp 2/3 `uz-UZ`; Yandex as cheapest | Yandex about $0.30-0.32/h (verified); Azure/Google price not verified | No | Commercial SaaS | High (support), Low (price) |
| Uzbek STT tuned for local speech | Aisha (425 UZS/min) or Muxlisa (self-reported 11-13% WER) | Aisha about $2/h (FX assumed); Muxlisa unknown | On-prem by enterprise contract only | Commercial | Medium |
| Self-hosted / offline STT | Fine-tuned Whisper (BuzzASR/uzbek, MIT: CV25 WER 11.84, FLEURS 25.64) or CTC (GigaAM fine-tune) | GPU hosting only | Yes (server); mobile needs a smaller model | MIT (BuzzASR) | Medium |
| Phone system captions (iOS) | None: Apple Live Captions has no ru/uz | n/a | n/a | n/a | High |
| Phone system captions (Android) | Live Transcribe: Uzbek unconfirmed, check in-app | Free | Some languages offline on Pixel / Android 12+ | Proprietary | Low |
| Meeting captions | Google Meet (Russian and Uzbek listed, may be beta / translation list) | Workspace plan | No | Proprietary | Medium |
| Sign language to text (Uzbek/Russian SL) | Must build: Google SL2T is ASL to English only, Pixel 11 | Build cost | n/a | n/a | High (that it is absent) |
| Text/speech to sign (avatar) | SURDO AI (state, 1,000+ words) as partner; otherwise build | Unknown | Unknown | Unknown | Low |
| Uzbek TTS | Aisha TTS 1 UZS/char; open licenses unverified | about $0.08 per 1k chars (FX assumed) | On-prem enterprise only | Commercial | Medium |
| Delivery channel with live video | Telegram Mini App: no official camera/mic API; WebView getUserMedia needs device testing | Free | No | Telegram ToS | Low |
