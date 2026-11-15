# Open-Source Technology Stack for Sign Language AI and Supporting Speech Tech (2024-2026), Deaf-hearing app for Uzbekistan

Research note: about 20 tool calls (web search plus fetch), run 2026-11-15. Many figures come from search snippets of primary papers or model cards. Where only a secondary source was found, that is flagged. Facts known from background knowledge but not re-verified in this session are listed under Gaps, not as findings.

## 1. Sign language recognition (ISLR) and continuous translation (SLT): state of the art 2024-2026

### Takeaway
Continuous sign-to-text translation is still research-grade. The best gloss-free systems score about 24-27 BLEU-4 on curated benchmarks (PHOENIX-2014T, CSL-Daily) and about 15 BLEU-4 on open-domain ASL (How2Sign). Scores drop sharply for signers not seen in training. Isolated sign recognition over a fixed vocabulary is the realistic production target, and it already runs on phones (Kaggle competition models were TFLite). Google's SignGemma was announced as an open, on-device ASL-to-English model, but whether it has been released, and under what license, could not be confirmed.

### Cited Findings
- **Uni-Sign (Li et al., ICLR 2025, peer-reviewed).** It treats all downstream sign tasks (ISLR, CSLR, SLT) as one translation task during fine-tuning. It pre-trains on a large Chinese corpus (CSL-News) — [arXiv 2501.15187](https://arxiv.org/abs/2501.15187v2); [ICLR proceedings](https://proceedings.iclr.cc/paper_files/paper/2025/hash/260a14acce2a89dad36adc8eefe7c59e-Abstract-Conference.html)
  - CSL-Daily SLT: test BLEU-4 about 26.36, about 55 BLEU-1 (pose plus RGB). It claims +14.02 BLEU-4 on dev and +4.75 on test over the previous best gloss-free method (C²RL) — [arXiv 2501.15187](https://arxiv.org/pdf/2501.15187)
  - How2Sign SLT: test BLEU-4 about 14.5 (pose-only) and 14.9 (pose plus RGB). That still trails SSVP-SLT (about 15.5) in the same table — [arXiv 2501.15187](https://arxiv.org/pdf/2501.15187)
  - CSL-Daily continuous recognition is reported at about 26 WER. The paper also gives ISLR results on MS-ASL and WLASL — [arXiv 2501.15187](https://arxiv.org/pdf/2501.15187)
  - The official GitHub notes that How2Sign and OpenASL pose-only checkpoints were released in December 2025 (seen via a GitHub mirror) — [Uni-Sign repo mirror](https://github.gg22.workers.dev/ZechengLi19/Uni-Sign)
- **PHOENIX-2014T gloss-free SOTA, 2025.** SignMouth reports BLEU-4 24.71, beating the previous SOTA SpaMo at 24.32 — [SignMouth arXiv 2509.10266](https://arxiv.org/html/2509.10266v2)
- Several 2025-2026 papers each claim "best gloss-free BLEU-4" on PHOENIX-2014T or CSL-Daily: dual visual encoders (Sincan and Bowden, SLTAT 2025), DualAnchor (2026), and RVLF (+2.7 BLEU-4 over C²RL with SFT, a further +2.4 with GRPO). Treat each "SOTA" claim as relative to that paper's own comparison set — [Sincan and Bowden arXiv 2507.10306](https://arxiv.org/html/2507.10306v1); [DualAnchor](https://www.alphaxiv.org/abs/2607.27614); [RVLF arXiv 2512.07273](https://arxiv.org/html/2512.07273v1)
- GFSLT-VLP is described as one of the first gloss-free SLT methods to use contrastive visual-language pretraining, and it is now a standard baseline — [Sincan and Bowden arXiv 2507.10306](https://arxiv.org/html/2507.10306v1)
- **Signer-independent evaluation.** An EMNLP 2025 Findings paper reports that SLT performance "drops sharply" under signer-independent splits, with PHOENIX14T and GFSLT-VLP as its example. Default-split leaderboard numbers therefore overstate real-world accuracy — [EMNLP 2025 Findings](https://preview.aclanthology.org/author-page-yu-wang-polytechnic/2025.findings-emnlp.997.pdf)
- **SignGemma (Google DeepMind).** Announced at Google I/O in May 2025 as "most capable sign-language-to-text model", to join the Gemma family "later this year". It is optimised for ASL to English, with more sign languages promised without a timeline — [Analytics India Mag](https://analyticsindiamag.com/ai-news-updates/google-deepmind-announces-signgemma-ai-for-sign-language); [OfficeChai](https://officechai.com/ai/google-announces-signgemma-a-model-that-translates-sign-language/)
  - Only one trade outlet claims a preview was available via Google's AI Developer portal, with a broader release in Q4 2025, on-device or offline use, and a Gemini Nano basis. This is unverified marketing or press coverage — [MultiLingual](https://multilingual.com/google-signgemma-on-device-asl-translation/)
  - No official Hugging Face model card or license for SignGemma was found in this session — [search result set](https://huggingface.co/google/paligemma-3b-mix-224/discussions/7) (only unrelated Gemma repositories appeared)

### Inferences
- The gap between isolated and continuous recognition is large. Isolated recognition on a closed vocabulary is a classification problem that works on-device with landmark models. Open-domain continuous translation scores about 15 BLEU on ASL even with the largest models, which is not usable as a trustworthy interpreter.
- For Uzbek or Russian-based signing, no pretrained SLT model exists. The SOTA approaches (Uni-Sign-style pretrain plus fine-tune) would need thousands of hours of parallel RSL or UzSL video with text. The practical MVP is isolated sign recognition plus fingerspelling, with SLT as a long-term R&D track.
- The SignGemma recipe (pose or ViT encoder feeding an LLM decoder) is the template to follow. However, it is ASL-only, so it would at best serve as a pretrained backbone for transfer, and only if its license allows that.

### Gaps
- Exact current BLEU numbers for MSKA, Sign2GPT, GFSLT-VLP and SignLLM on PHOENIX-2014T were not retrieved in this session. Check their arXiv tables or Papers with Code before quoting them.
- SignGemma's actual release status, weights availability and license as of November 2026 could not be confirmed. Check developers.google.com/signgemma and huggingface.co/google directly.
- WMT-SLT shared task (2022-2023) results were not retrieved.

## 2. Pose and landmark tooling, on-device inference, and Kaggle baselines

### Takeaway
The standard, proven on-device pipeline is MediaPipe landmarks (hands, pose, face) feeding a small transformer or 1D-CNN classifier, exported to TFLite or ONNX. This is exactly how the Google Kaggle ISLR and Fingerspelling winners worked, and their code is public. The sign-language-processing ecosystem (pose-format) is a useful MIT-licensed tool, but the sign.mt app itself is non-commercial.

### Cited Findings
- **Google Isolated Sign Language Recognition (Kaggle, Feb-May 2023, $100k).** Entrants had to submit a TensorFlow Lite model that classifies isolated ASL signs from MediaPipe landmarks — [TensorFlow blog](https://blog.tensorflow.org/2023/02/a-new-kaggle-competition-to-help-parents-of-deaf-children-learn-sign-language.html?hl=ru)
  - The 1st-place solution (hoyso48) and its model files are mirrored on Hugging Face under the sign-language-processing org — [HF sign/kaggle-asl-signs-1st-place](https://huggingface.co/sign/kaggle-asl-signs-1st-place)
  - The 2nd-place write-up claims EfficientNet with ONNX ran about 5 times faster than TFLite (single source, speed only) — [2nd place GISLR repo](https://github.com/ffs333/2nd_place_GISLR)
- **Google ASL Fingerspelling (Kaggle, 2023, $50k).** Won by Christof Henkel (NVIDIA) with one encoder-decoder: a modified Squeezeformer encoder adapted from speech recognition to MediaPipe landmarks, plus a small transformer decoder and a confidence head for corrupted samples. The key augmentations were CutMix, FingerDropout, TimeStretch and decoder input masking — [1st place repo](https://github.404890603.workers.dev/ChristofHenkel/kaggle-asl-fingerspelling-1st-place-solution); [NVIDIA blog](https://blogs.nvidia.com/blog/2023/10/23/nvidia-life-kaggle-ai-contest-sign-language-recognition/)
  - Google's FSboard fingerspelling dataset paper reports a baseline of 11.1% CER on unseen phrases and signers — [arXiv 2407.15806](https://arxiv.org/pdf/2407.15806v1)
- **pose-format library.** It defines a .pose file format with Python and JS readers and writers, and the paper says it is released under MIT. The sign-language-processing org also hosts pose-anonymization, pose-to-video and segmentation repos — [pose-format arXiv 2310.09066](https://arxiv.org/pdf/2310.09066); [GitHub pose](https://github.com/sign-language-processing/pose); [org](https://github.com/sign-language-processing)
- **sign.mt** (the demo translation app) is licensed CC BY-NC-SA 4.0, so it is non-commercial and share-alike — [sign.mt paper arXiv 2310.05064](https://arxiv.org/pdf/2310.05064v1.pdf)
- A 2026 low-resource SL survey recommends lightweight MediaPipe-based architectures, offline-first deployment and pose-based representations for privacy. That paper's v2 was later withdrawn by arXiv admins for quality, so treat it as weak — [arXiv 2605.12096](https://arxiv.org/abs/2605.12096)

### Inferences
- The fastest MVP baseline is to fork the Kaggle ISLR 1st-place pipeline (MediaPipe landmarks feeding a transformer or 1D-CNN, about 250 classes in the competition) and retrain it on UzSL or RSL data. It is proven to fit the TFLite and phone budget because the competition required it.
- The Fingerspelling Squeezeformer pipeline is the template for Russian dactyl (fingerspelling) recognition with Bukva.
- Use pose-format (MIT) internally. Do not ship sign.mt code in a commercial product without a separate license.

### Gaps
- Verified 1st-place accuracy for ISLR (leaderboard score) was not retrieved. Check kaggle.com/competitions/asl-signs.
- These were not verified this session: the MediaPipe Holistic vs. Tasks API (Hand, Pose and Face Landmarker) status in 2026, and the Apache-2.0 licenses of MediaPipe and of RTMPose/MMPose. MediaPipe and MMPose are generally Apache-2.0, but this is background knowledge and must be confirmed.
- No measured phone latency numbers for MediaPipe Holistic plus a classifier were found.

## 3. Datasets and licenses (commercial-use restrictions)

### Takeaway
Almost every major sign dataset is research or non-commercial only: WLASL is C-UDA with no commercial use, ASL Citizen is under Microsoft Research terms (non-commercial), and How2Sign is CC BY-NC. Slovo and Bukva (Russian Sign Language, ai-forever) are CC BY-SA 4.0 variants, which are the most commercially usable and linguistically closest to Uzbek signing. They are the key asset, but read the custom license PDF. YouTube-SL-25 only licenses video IDs, not the videos.

### Cited Findings
| Dataset | Content | License (as found) | Source |
|---|---|---|---|
| WLASL | ASL isolated, subsets of top-100/300/1000/2000 glosses | **C-UDA 1.0, "No commercial usage is allowed."** A community catalog wrongly lists it as CC BY 4.0, so trust the repo | [WLASL GitHub](https://github.com/dxli94/WLASL); conflicting: [catalog](https://rudra496.github.io/SignLanguage-Dataset-Hub/DATASETS.html) |
| ASL Citizen (Microsoft) | 83,399 videos, 2,731 signs, 52 signers; the first crowdsourced ISLR dataset, collected with consent via a community web platform where contributors recorded at home | Microsoft Research Licensing Terms, described as non-commercial; commercial use through ASL_Citizen@microsoft.com | [arXiv 2304.05934](https://arxiv.org/abs/2304.05934v2); [license page](https://www.microsoft.com/en-us/research/project/asl-citizen/dataset-license/); [bias study arXiv 2410.05206](https://arxiv.org/pdf/2410.05206); [Maginative](https://www.maginative.com/article/microsoft-researchers-advance-sign-language-accessibility-through-community-sourced-data/) |
| How2Sign | Continuous ASL, multimodal | CC BY-NC 4.0 (from a secondary catalog) | [catalog](https://rudra496.github.io/SignLanguage-Dataset-Hub/DATASETS.html); [CVPR 2021 paper](https://openaccess.thecvf.com/content/CVPR2021/papers/Duarte_How2Sign_A_Large-Scale_Multimodal_Dataset_for_Continuous_American_Sign_Language_CVPR_2021_paper.pdf) |
| RWTH-PHOENIX-2014 / 2014T | German SL, weather forecasts | Research use with registration (catalog); 2014T terms not confirmed | [catalog](https://rudra496.github.io/SignLanguage-Dataset-Hub/DATASETS.html); [TIB](https://service.tib.eu/ldmservice/dataset/phoenix-2014t) |
| YouTube-SL-25 (Google) | 3,207 h, more than 25 sign languages, more than 3,000 signers | **CC BY 4.0 covers only the video IDs and language codes**; each YouTube video keeps its own terms | [arXiv 2407.11144](https://arxiv.org/abs/2407.11144v1); [ICLR 2025](https://iclr.cc/virtual/2025/poster/28414) |
| Slovo (ai-forever, RSL) | 20,400 RGB videos, 1,000 signs, 194 signers, about 16 GB | "Variant of" CC BY-SA 4.0, with custom terms in license/en_us.pdf | [GitHub ai-forever/slovo](https://github.com/ai-forever/slovo); [arXiv 2305.14527](https://arxiv.org/abs/2305.14527) |
| Bukva (RSL alphabet / dactyl) | Described as the first open-source RSL dactyl video dataset | CC BY-SA 4.0 per a third-party index (not confirmed on the official repo) | [paper index 2410.08675](https://fugumt.com/fugumt/paper_check/2410.08675v1_enmode) |

- **Uzbek Sign Language (UzSL).** No dedicated, citable public dataset was found. Local papers (inlibrary.uz) describe CNN/RNN UzSL classifiers trained on unnamed image and video sets, and an ML review calls UzSL "relatively understudied" — [inlibrary 34006](https://inlibrary.uz/index.php/eijmrms/article/view/34006); [inlibrary 25286](https://inlibrary.uz/index.php/computer-engineering/article/view/25286)

### Inferences
- Commercial-safe pretraining data is scarce. Slovo and Bukva (CC BY-SA variants) plus self-collected UzSL data are the viable foundation. ShareAlike may oblige releasing derived datasets (not necessarily model weights) under the same terms, so get a legal read of the Slovo PDF.
- Models trained on WLASL, ASL Citizen or How2Sign are fine for internal experiments and benchmarks, but they create IP risk if shipped.
- Because Uzbek deaf signing is RSL-based, Slovo's 1,000-sign vocabulary likely overlaps heavily with UzSL everyday vocabulary. This is an assumption to validate with Deaf consultants and the Uzbekistan Society of the Deaf.

### Gaps
- These were not retrieved or verified this session: licenses for MS-ASL, CSL-Daily, OpenASL, BOBSL (BBC; known to be research-only, unverified) and FluentSigners-50 (Kazakh-Russian SL from ISSAI; license unverified). FluentSigners-50 is especially relevant because of its Russian-based signing and Central Asian signers, so it should be checked.
- The exact Slovo license PDF terms were not read.

## 4. Sign generation and avatars

### Takeaway
For hearing-to-Deaf output, the most credible near-term approach is dictionary-based "sign stitching" of recorded isolated signs, optionally rendered photorealistically. Fully generative text-to-sign remains research-grade.

### Cited Findings
- **Sign Stitching** (Walsh, Saunders and Bowden, University of Surrey; BMVC 2024, peer-reviewed). It reuses isolated dictionary signs plus a learned facial-expression codebook, and stitches them in 7 steps: canonical pose normalization, rest-pose cropping, duration resampling, interpolation, low-pass filtering and so on. It then renders with SignGAN for a photorealistic signer. The authors report SOTA and a user study preferring it over baselines — [arXiv 2405.07663](https://arxiv.org/abs/2405.07663v2); [Surrey PDF](https://personalpages.surrey.ac.uk/r.bowden/publications/2024/WalshBMVA2024.pdf)
- The sign-language-processing org hosts a pose-to-video repo (open neural rendering from poses) — [org](https://github.com/sign-language-processing)

### Inferences
- MVP approach: record a vetted UzSL lexicon video library with paid Deaf signers. Use it both as ISLR training data and as the source for stitched output (text, then LLM to gloss, then retrieve clips or poses, then stitch). Playing back real-signer clips gives better Deaf acceptance than synthetic avatars at the start.

### Gaps
- These were not researched this session: SignAvatars (dataset and license), SiGML / JASigning / HamNoSys tooling licenses, Signapse's (commercial) technology claims, and published Deaf acceptance studies of avatars. There is no evidence here on Deaf acceptance beyond the Sign Stitching user study.

## 5. Data collection for a low-resource sign language

### Takeaway
ASL Citizen is the reference model: a consented, community web or app platform where Deaf signers record themselves at home. It reached 83k videos of 2.7k signs from only 52 signers. For UzSL, a similar app with paid Deaf contributors, built on a Slovo-derived seed vocabulary, is the realistic path.

### Cited Findings
- ASL Citizen collected 83,399 videos of 2,731 signs from 52 signers via a "community-focused web platform" for distributed, secure, consented home recording — [arXiv 2304.05934](https://arxiv.org/abs/2304.05934v2)
- Slovo collected 20,400 videos of 1,000 signs from 194 signers, about 20 videos per sign — [ai-forever/slovo](https://github.com/ai-forever/slovo)
- A 2026 survey (later withdrawn by arXiv for quality) recommends community co-design, capturing dialects, community-validated annotation, pose-based privacy and signer-adaptive systems. It suggests Turkic-region sign languages (Kazakh, Turkish, Azerbaijani) for transfer learning — [arXiv 2605.12096](https://arxiv.org/abs/2605.12096)
- Bias in ASL Citizen-trained models was studied separately (signer demographics), which argues for signer diversity — [arXiv 2410.05206](https://arxiv.org/pdf/2410.05206)

### Inferences
- Rough sizing from the two reference datasets (an inference, not a published rule): 500-2,000 signs at about 20-30 clips per sign from 50 or more signers gives 10k-60k clips. At 2-3 seconds each, that is only about 10-50 hours of raw video, which is achievable with a paid-contributor app.
- Store landmarks instead of raw video where possible, to reduce privacy risk, though raw video is needed for future RGB models and for stitched output. Consent forms should cover commercial model training explicitly, which avoids the non-commercial trap of public datasets.

### Gaps
- No peer-reviewed rule for the samples per sign needed for X% accuracy was found.
- Contributor pay rates and consent templates (e.g., from ASL Citizen) were not retrieved.

## 6. Uzbek and Russian speech recognition and TTS (captioning side)

### Takeaway
Uzbek ASR is workable but needs fine-tuning. Fine-tuned Whisper-medium reaches about 10-14% WER on read speech (FLEURS, Common Voice), but conversational Uzbek is much harder (about 16-40% WER). USC (105 hours, CC BY 4.0, commercial use OK with attribution) is the key open training corpus. Meta's Omnilingual ASR (Apache-2.0, 1,600+ languages) is a new strong open option. Beware that Meta MMS-TTS for Uzbek is CC-BY-NC, so it is not usable commercially.

### Cited Findings
- **USC (ISSAI and TUIT):** 958 speakers, 105 hours (96.4 train, 4.0 dev, 4.5 test). It is CC BY 4.0 for academic and commercial use with attribution. It is designed for ASR, kept noisy utterances, and includes aligned audiobook excerpts. Recipes and models are at IS2AI/Uzbek_ASR — [arXiv 2107.14419](https://arxiv.org/pdf/2107.14419); [ISSAI](https://issai.nu.edu.kz/2021/08/06/issai-team-has-developed-the-uzbek-speech-corpus/)
- **Fine-tuned Whisper, Uzbek:**
  - NavAI's whisper-medium fine-tune scores 9.73 macro-WER across FLEURS, Common Voice, USC and FeruzaSpeech (greedy decoding) — [navai-uz/whisper-base-uzbek page](https://friendli.ai/models/navai-uz/whisper-base-uzbek)
  - A medium call-center fine-tune scores 7.88% WER on FeruzaSpeech, 13.37% on CV17 uz and 14.40% on FLEURS uz — [Abduqayum/whisper-uzbek-medium-callcenter](https://friendli.ai/models/Abduqayum/whisper-uzbek-medium-callcenter)
  - BuzzASR's large-v3 fine-tune scores 25.64 WER on FLEURS and 11.84 on CV25 — [HF BuzzASR/uzbek](https://huggingface.co/BuzzASR/uzbek)
  - An older whisper-small fine-tune scored 23.65 WER on CV11 and 47.15 on FLEURS — [HF BlueRaccoon/whisper-small-uz](https://huggingface.co/BlueRaccoon/whisper-small-uz)
  - On 311 conversational clips, the best public Uzbek Whisper fine-tune scored 39.6% WER against 16.1% for a custom model, so read-speech benchmarks overstate quality (source not clearly identified in the snippet; treat as unverified)
  - Vendor claim: ElevenLabs lists zero-shot Whisper large-v3 at 96.7% WER for Uzbek, and its own Scribe figures differ across locale pages (3.1% vs. 15.9% FLEURS). This is marketing, so do not rely on it — [ElevenLabs](https://elevenlabs.io/speech-to-text/uzbek); [ElevenLabs hi](https://elevenlabs.io/hi/speech-to-text/uzbek)
- An Uzbek GigaAM fine-tune exists on Hugging Face (GigaAM is Sber's Russian-centric ASR) — [rustam1221/uzbek-asr-gigaam](https://huggingface.co/rustam1221/uzbek-asr-gigaam)
- **Meta Omnilingual ASR (November 2025).** Covers 1,600+ languages. The 7B LLM-ASR scores CER below 10 on 78% of languages, and 95% of languages with at least 10 hours of training data reach that level. Code and models are Apache 2.0, and the corpus is CC-BY-4.0. No Uzbek-specific CER was found — [Meta AI blog](https://ai.meta.com/blog/omnilingual-asr-advancing-automatic-speech-recognition/); [The Decoder](https://the-decoder.com/metas-omnilingual-asr-brings-speech-recognition-to-1600-languages/)
- **Uzbek TTS:**
  - Meta MMS-TTS Uzbek (Cyrillic, and presumably Latin) is CC-BY-NC 4.0, so it is non-commercial — [HF mms-tts-uzb-script_cyrillic](https://huggingface.co/facebook/mms-tts-uzb-script_cyrillic/discussions/1/files); [HF mms-tts](https://huggingface.co/facebook/mms-tts)
  - Community Uzbek TTS models exist: an F5-TTS Uzbek fine-tune and a Chatterbox Uzbek fine-tune. Their licenses are not checked — [mrmuminov/f5-tts-uzbek](https://huggingface.co/mrmuminov/f5-tts-uzbek); [UAzimov/Uzbek-tts-chatterbox](https://huggingface.co/UAzimov/Uzbek-tts-chatterbox)

### Inferences
- Captioning stack: a server-side fine-tuned Whisper (medium or large-v3-turbo) or Omnilingual ASR for Uzbek, and stock Whisper for Russian (a high-resource language). For on-device, a whisper.cpp-quantized fine-tuned small or medium model. Fine-tune on USC plus Common Voice plus in-domain conversational data, because conversational WER is the real risk.
- For commercial TTS, avoid MMS-TTS and train or fine-tune on a properly licensed corpus (Piper/VITS or F5), or use a commercial API.

### Gaps
- These were not verified this session: the Common Voice uz size and license (CV is generally CC0), FLEURS (CC BY 4.0), the Google USM/Chirp Uzbek WER, Vosk Uzbek model availability and WER, Piper Uzbek voices, ISSAI Uzbek TTS releases, and whisper-large-v3-turbo Uzbek numbers.
- Omnilingual ASR's per-language Uzbek CER needs the paper's tables.

## 7. LLM role: gloss to fluent Uzbek, and simplified language

### Takeaway
LLMs are now the decoder half of the SOTA SLT systems (SignGemma's design and LLM-based gloss-free methods such as RVLF). For an MVP, an LLM can turn recognised gloss sequences into fluent Uzbek or Russian sentences, and rewrite hearing-side text into simplified, sign-friendly gloss order. No Uzbek-specific evaluation of this was found.

### Cited Findings
- RVLF frames gloss-free SLT as a vision-language model task with SFT, then GRPO reinforcement, gaining +2.4 BLEU-4 from RL — [arXiv 2512.07273](https://arxiv.org/html/2512.07273v1)
- DualAnchor targets "preserving language priors" of the LLM decoder in gloss-free SLT, pointing to the LLM as the fluency component — [DualAnchor](https://www.alphaxiv.org/abs/2607.27614)
- SignGemma is reportedly a vision transformer encoder with a Gemma-family language decoder (press-level detail) — [Analytics India Mag](https://analyticsindiamag.com/ai-news-updates/google-deepmind-announces-signgemma-ai-for-sign-language)

### Inferences
- Practical pipeline: ISLR top-k glosses, then an LLM constrained decode or rerank into an Uzbek sentence, with a confirmation UI shown to the Deaf user. The reverse direction is text, then LLM simplified gloss sequence, then stitched clips. This keeps the hard ML (SLT) out of the MVP.

### Gaps
- No benchmark for LLM gloss-to-Uzbek translation quality exists. One would need to be built with Deaf and hearing bilingual annotators.
- No peer-reviewed data was found on Deaf acceptance of LLM-generated simplified text.
