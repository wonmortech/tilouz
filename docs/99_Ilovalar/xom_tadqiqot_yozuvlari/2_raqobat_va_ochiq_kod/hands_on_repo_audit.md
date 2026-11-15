# Hands-on audit of forkable open-source repos for an Uzbek Deaf-hearing platform (Uzbek + Russian + UzSL), checked 2026-11-15

**Method.**
- Repo metadata (licence SPDX, `pushed_at`, size in KB, default branch) comes from `gh api repos/<r>`.
- Each repo was shallow partial-cloned (`git clone --depth 1 --filter=blob:limit=400k --no-checkout`, then a sparse checkout of blobs up to 400 KB) into `%TEMP%\...\scratchpad\repo-audit\`. Every file in the tree, including large ones, was listed with its size (`git ls-tree -r -l`).
- I read source, manifests, Dockerfiles, CI files and LICENSE files only. Nothing was installed, built or run. Model metadata comes from `huggingface.co/api/models/<id>`.
- Jitsi was inspected through the GitHub contents API only: `lang/*.json`, `config.js`, `modules/API/API.js` and the transcribing feature folder.
- "Last commit" means the HEAD commit date on the audited branch. "pushed" means a push to any branch.
- **All person-week (pw) figures are my estimates, not sourced.** File:line references are against the audited HEAD.

Context reused from `open_source_clonable.md`, `region_europe.md` and `russia_cis_competitors.md`. This file checks those claims against the code and corrects them where needed.

---

## 1. SignON (github.com/signon-project): is the EU reference platform forkable?

### Takeaway
SignON is a real, documented microservice skeleton under Apache-2.0: an app, then an orchestrator, then RabbitMQ through recognition, translation and synthesis stages. It has been frozen since 2024 and its language intelligence cannot be reused for Uzbek or UzSL:
- The languages are a closed enum.
- Text-to-avatar only works by pivoting through English.
- The only avatar lexicon is about 2,200 NGT signs.
- Sign recognition reaches 30–59 % on isolated signs.
- The model checkpoints carry no licence.

Borrow the contracts and the consent/upload pattern. For the avatar, fork its living successor `upf-gti/performs` (MIT).

### Cited Findings
**Inventory.** The org has 29 repos. All audited repos carry the full Apache-2.0 text, and `NOTICE` reads "Copyright 2021-2023 FINCONS GROUP AG / Universitat Pompeu Fabra … grant 101017255". Exceptions:
- `wp4-elan-processor` is GPL-3.0.
- `wp4-text2gloss-models` and `.github` have no licence.

— [signon-project org](https://github.com/signon-project)

| Repo | Last commit | Size (KB) | Stack (from manifests) |
|---|---|---|---|
| [wp2-orchestrator](https://github.com/signon-project/wp2-orchestrator) | 2024-06-05 | 38 | Java 11, Spring Boot 2.5.3, spring-amqp, MinIO client 8.3.7 (`pom.xml`) |
| [wp2-orchestrator-openapi](https://github.com/signon-project/wp2-orchestrator-openapi) / [-asyncapi](https://github.com/signon-project/wp2-orchestrator-asyncapi) | 2024-04-26 | 22 / 467 | OpenAPI (551 lines), AsyncAPI (134 lines), Java models generated with `@asyncapi/java-spring-template@0.18.3` |
| [wp2-dispatcher-for-wp3/4/5](https://github.com/signon-project/wp2-dispatcher-for-wp4) | 2024-04-26 | 10–14 | Python 3.8, pika 1.2.1, boto3 |
| [wp2-framework-docker-compose](https://github.com/signon-project/wp2-framework-docker-compose) | 2024-08-28 | 11 | compose v3.9, RabbitMQ 3.9, MinIO 2022-03-05 |
| [wp2-mobile-app](https://github.com/signon-project/wp2-mobile-app) | 2024-01-15 | 11,187 | Ionic 6, Angular ~13.2, Capacitor 3.5, ngx-translate 14, three ^0.152 |
| [wp2-ml-app](https://github.com/signon-project/wp2-ml-app) | 2024-01-15 | 163 | empty Ionic tabs starter |
| [wp3-asr-comp](https://github.com/signon-project/wp3-asr-comp) | 2024-01-22 | 23,179 | Kaldi sample, wav2vec2 XLS-R, Whisper large-v3 scripts |
| [wp3-slr-component](https://github.com/signon-project/wp3-slr-component) / [-pipeline](https://github.com/signon-project/wp3-slr-pipeline) | 2024-01-08 / 2024-01-23 | 34 / 43 | MediaPipe 0.8.11, then PoseFormer (PyTorch Lightning 1.7.7), Flask |
| [wp3-nlp-pipeline](https://github.com/signon-project/wp3-nlp-pipeline) | 2024-04-26 | 1,948 | Flask, spaCy 3.7.2 (en/es/nl), stanza 1.3.0 (ga), Hunspell, WordNet |
| [wp4-text2gloss](https://github.com/signon-project/wp4-text2gloss) | 2024-01-17 | 1,978 | FastAPI, text→AMR (mBART), LaBSE, SQLite `glosses.db` |
| [wp4-text-gloss-mt](https://github.com/signon-project/wp4-text-gloss-mt) | 2024-04-26 | 2,580 | TF 2.4.1 mBART; weights are a 1.46 GB Git LFS object |
| [wp4-slt-component](https://github.com/signon-project/wp4-slt-component) | 2024-01-08 | 31,773 | SignJoey fork (training only) |
| [wp5-synthesis](https://github.com/signon-project/wp5-synthesis) | 2024-01-15 | 28,369 | three.js "SignON Realizer": SiGML → BML |

**Activity and quality.**
- No CI in any repo: no `.github/workflows`, no GitLab CI, no Jenkinsfile.
- Tests are only the Angular CLI default "should create" specs plus two ad-hoc Python scripts.
- Stars: 0–1 per repo. — GitHub API.
- The production orchestrator still answers. `GET https://api.signon-project.eu/orchestrator/version` returned 200 `{"Orchestrator":"13.0.0",...}` on 2026-11-15. `api.dev.signon-project.eu` returned 404. — direct curl.

**Message flow.**
- The app sends `/message` to the orchestrator. The orchestrator makes an RPC call to `signon.rpc.requests`, which goes to the WP3 dispatcher (ASR, NLU, SLR), then `signon.wp4.queue` (translation), then `signon.wp5.queue`, which replies to the caller. Uploads use MinIO pre-signed URLs through `/inference-storage-auth` and `/dataset-storage-auth`. — `wp2-framework-docker-compose/signon-orchestrator/config.yml:21-39`; [shared schemas](https://github.com/signon-project/wp2-orchestrator-api-shared-schemas)
- The envelope carries per-stage timestamps (T0App…T5) for latency tracing. — `signon-orchestrator-shared-schemas.yml:18-175`
- **WP5 does no synthesis.** It only stamps `T4WP5` and replies. The avatar is rendered on the phone. — `wp2-dispatcher-for-wp5/src/dispatcher.py:57-82`

**Language handling.**
- Closed enum, sign: `VGT, SSP, BFI, ISG, DSE`. Spoken: `ENG, GLE, NLD, SPA, DUT`. — `signon-orchestrator-shared-schemas.yml:136-150`
- The same lists are hard-coded again in `helper_ASR.py:20-38`, `helper_SLR.py:20-31`, `helper_T2G.py:20-31`, `wp3-nlp-pipeline/SignON_NLP.py:31-32` and the mobile app (`language.service.ts:10-14` whitelist `en|ga|es|nl`; `tab1.page.ts:2184-2215`).
- Text-to-avatar works only from English; other languages are machine-translated to English first. Video-to-text is forced through Dutch. — `wp2-dispatcher-for-wp4/src/dispatcher.py:71-123`
- `text2gloss` accepts only `Literal["vgt","ngt"]` and builds SQL with an f-string, which is an injection risk. — `wp4-text2gloss/api/main.py:228-245`

**Models and data.**
- Checkpoints are on a Google Drive folder (`wp2-framework-docker-compose/README.md:4`) and on HF `signon-project/*`. None of the 11 HF models declares a licence, and the cards are 2-line stubs. — [HF signon-project](https://huggingface.co/signon-project)
- The SLR outputs 192-d embeddings, not glosses. Isolated-sign validation accuracy: NGT 47.26 %, VGT 52.37 %, ISL 30.10 %, BSL 32.78 %, LSE 59.40 %. Unknown languages fall back silently to NGT. — `wp3-slr-pipeline/documentation/inference.md`; `wp3-slr-component/web_service/app.py:9-30`
- ASR calls a remote Radboud service, with username and password literals committed in `helper_ASR.py:45-46,66-67` (values not copied). The mobile app has Acapela TTS credentials committed at `tab1.page.ts:795`.

**Avatar.**
- Three.js loads `EvaHandsEyesFixed.glb` (29.3 MB, Mixamo rig, no separate licence or provenance) and plays a SiGML/BML lexicon of 2,206 NGT files. Other sign languages fall back to 10 demo MP4s on Azure, which now return 409. — `wp5-synthesis/data/`; `wp2-mobile-app/src/app/tab1/tab1.page.ts:105-120,382,626`
- The same group continues the work in [upf-gti/performs](https://github.com/upf-gti/performs): MIT, JavaScript, pushed 2026-10-16. It plays SiGML/BML and glTF/BVH on custom avatars. Siblings: [SignON-realizer](https://github.com/upf-gti/SignON-realizer) (MIT, 2024-01) and [SignON-editor](https://github.com/upf-gti/SignON-editor) (Apache-2.0, 2023-12). — GitHub API

**Broken pieces.**
- `config.yml:16` has the top-level key `4ewstdserver:` instead of `server:`.
- The compose file mounts `./signon-orchestrator-configuration/`, which does not exist.
- The WP3 framework config has no `asr:` section, so the audio path raises a KeyError.
- Images are local tags that are not on any registry.
- `minioadmin` / `guest` default credentials are committed.
- Consent-form texts are Lorem ipsum, and every sign-language video points to the same "Rickroll" YouTube ID. — `wp2-framework-docker-compose/docker-compose.yml:82-196`, `signon-orchestrator/config.yml:59-71`

### Inferences
**Changes for Uzbek, Russian and UzSL if the skeleton were kept (estimates):**

| # | Change | pw | Risk |
|---|---|---|---|
| 1 | Add Uzbek, Russian and UzSL codes to the enum and regenerate the models. There is no confirmed ISO 639-3 code for UzSL, so it needs a private-use code. | 1 | Low |
| 2 | Turn the hard-coded maps and pivots in the dispatchers into a routing table | 2 | Medium |
| 3 | Fix the compose bugs, purge credentials, publish images, upgrade Spring Boot 2.5→3 and Java 11→21 | 3–4 | Medium |
| 4 | Replace ASR with a local Uzbek/Russian streaming service (see §8) | 2–3 | Medium |
| 5 | Replace the NLU with Uzbek morphology plus Russian spaCy | 3–5 | High |
| 6 | Write new Uzbek/Russian→UzSL gloss rules | 6–10 | High |
| 7 | Rewrite the mobile app (Angular 13 / Capacitor 3 are EOL; one 2,320-line page component) | 8–12 | Medium |
| 8 | Build the data-contribution app from scratch (`wp2-ml-app` is empty) | 4–6 | Medium |

- That totals about 30–50 pw, which is close to building new components. The UzSL SiGML lexicon (1 animator + 1 Deaf signer, 6–12 months for about 2,000 signs) and UzSL recognition (very high risk) come on top.
- **Verdict: borrow, don't fork.** Worth borrowing:
  - the OpenAPI/AsyncAPI contract style;
  - the envelope with stage timestamps;
  - the consent and dataset-upload endpoints;
  - PoseFormer training code, as a reference.
- **Fork `upf-gti/performs`** for the avatar, not `wp5-synthesis`.

### Gaps
- Not cloned: `wp4-embedding2text-translator`, `wp4-text2text-translation`, `wp3-slr-dataset-processing`, `wp4-elan-processor`, `wp2-locust-testing`, `wp2-extractor`.
- No statement found on licensing of the HF checkpoints, the NGT SiGML lexicon or the Eva avatar. Who runs `api.signon-project.eu`, and for how long, is unknown.
- That spaCy, Stanza and OMW have no Uzbek support is from general knowledge; I did not re-verify it this session.

---

## 2. yandex/deaf (Yandex Razgovor Android, 2016 snapshot)

### Takeaway
The app code is Apache-2.0, but it is a 2016 snapshot that has been abandoned for about 9 years:
- It is tied to a proprietary SpeechKit `.aar` bundled in the repo.
- It builds only with dead tooling (AGP 1.3, jcenter, Fabric).
- Recognition is hard-coded to Russian/Ukrainian.

Take the UX ideas only. The RuStore app (v27.x, 2026) is a different, closed codebase.

### Cited Findings
- **Licence.** LICENSE (591 B) is the short Apache-2.0 header "Copyright 2016 YANDEX LLC". GitHub shows NOASSERTION because it is not the full text. — [LICENSE](https://github.com/yandex/deaf/blob/master/LICENSE)
- **Activity.** Last commit 2016-06-29, push 2017-10-21. 34 stars, 3 open issues, 4.5 MB. The README points to `AkmalArtikov/deaf` and to a clone URL that does not exist. — GitHub API; [README](https://github.com/yandex/deaf)
- **Stack.**
  - Android Gradle plugin 1.3.0, compileSdk 23, minSdk 16.
  - `jcenter()` and `maven.fabric.io` repositories, both shut down.
  - Retrofit 1.9, Crashlytics 2.5.2, mobmetricalib 2.21.
  - — [build.gradle](https://github.com/yandex/deaf/blob/master/build.gradle), [app/build.gradle](https://github.com/yandex/deaf/blob/master/app/build.gradle)
- **SpeechKit.**
  - The proprietary SDK is bundled as `app/repo/speechkit-2.5.0-SNAPSHOT.aar` (2.55 MB) under [Yandex SpeechKit terms](https://yandex.ru/legal/speechkit/).
  - The latest `com.yandex.android:speechkit` on Maven Central is 3.12.2, from 2018-04-09.
  - The old TTS endpoint `tts.voicetech.yandex.net` did not respond (`SpeechKitTtsCloudApi.java:25`).
- **Architecture and i18n.**
  - 160 Java files in `ru.yandex.subtitles`: `MessagingService` (recognition), `PhrasesService` (canned phrases with pre-synthesised `*_ru-RU_ermil.mp3`), content provider, UI.
  - Strings exist only in `values/` (Russian) and `values-uk/`.
  - `Preferences.java:78-87` defaults to `Recognizer.Language.RUSSIAN` and has a TODO to use the locale.
  - No tests, no CI.

### Inferences
- A port means replacing SpeechKit with Vosk `small-uz` / `small-ru` on-device or a WhisperLive stream (§8), an AGP 8/AndroidX migration, and adding `values-uz` and `values-b+uz+Cyrl`. That is 8–12 pw.
- A Kotlin/Flutter rewrite that keeps the UX costs about the same at lower risk. The UX worth keeping: canned phrases with pre-synthesised audio, large font, dialog mode, history.
- **Verdict: ideas only.**

### Gaps
- Whether Yandex would release the current Razgovor code: no statement found.

---

## 3. Global Signbank (Signbank/Global-signbank)

### Takeaway
This is the strongest fork candidate for the UzSL lexical database:
- BSD-3-Clause, Django 6.1, very active (100+ commits in the last 6 months).
- Multi-dataset and multi-language by design.
- A JSON API for gloss create/update/video upload, documented in Swagger.
- ELAN/ECV export and a large test file.

Adding Uzbek (Latin and Cyrillic) and Russian is configuration plus `.po` translation plus a modeltranslation migration. The main technical traps are language-coupled data migrations and an ops style built on SQLite and `git stash`.

### Cited Findings
- **Licence.** `LICENCE.txt` is BSD-3: "Copyright (c) 2018, Steve Cassidy …, Radboud University Nijmegen". — [LICENCE.txt](https://github.com/Signbank/Global-signbank/blob/master/LICENCE.txt)
- **Activity.** Last commit 2026-11-13. 22.6 MB. 151 open issues. The GitHub API returned 100 commits (one full page) since 2026-05-15, so there may be more. — GitHub API
- **Stack.** Django==6.1.1, django-modeltranslation 0.20.6, django-guardian, mysqlclient / mysql-connector, lxml, nltk, ffmpeg-python, pympi-ling (ELAN). — [requirements.txt](https://github.com/Signbank/Global-signbank/blob/master/requirements.txt)
  - Default DB is SQLite `database/signbank.db` (`signbank/settings/server_specific/default.py:32-37`).
  - Videos are converted by an external `ffmpeg` (`FFMPEG_OPTIONS = ["-vcodec","h264","-an"]`, `settings/base.py:227-234`).
- **Architecture.**
  - Django apps in `signbank/`: `dictionary` (models.py 217 KB, adminviews.py 393 KB, update.py 200 KB), `video`, `feedback`, `attachments`, `pages`, `registration`.
  - Core models: `Gloss`, `Lemma`, `Dataset`, `SignLanguage`, `Dialect`, `Language`, `Keyword`, `Translation`, `Sense`, `Handshape`, `FieldChoice` (`dictionary/models.py:196-752`).
  - API spec: [docs/signbank-api.json](https://github.com/Signbank/Global-signbank/blob/master/docs/signbank-api.json), with `/dictionary/api_create_gloss/{datasetid}/`, `/api_update_gloss/{glossid}/video`, `/upload_zipped_videos_archive/{datasetid}/`, `/get_gloss_data/...` and others.
- **Language handling.**
  - Interface languages are configured per server in `server_specific/*.py`. The default is English only: `LANGUAGES`, `MODELTRANSLATION_LANGUAGES`, `LANGUAGES_LANGUAGE_CODE_3CHAR` and `DEFAULT_KEYWORDS_LANGUAGE` (`default.py:69-88`). The Global instance uses `['en','nl','zh-hans','ar','he']` (`global_sb_new_aj.py:30`).
  - Shipped `.po` locales: ar, en_US, he, nl, zh_Hans (`conf/locale/`), with a few more for `registration`. There is **no `ru` or `uz`**. `nl/django.po` has 1,647 msgids.
  - `FieldChoice`, `Handshape`, `SemanticField`, `Language` and `DerivationHistory` names are translated through modeltranslation columns `name_<lang>` (`dictionary/translation.py`).
  - Data migrations hard-code languages. For example, `migrations/0093_add_entymology_to_other_media_choices.py:15-19` special-cases `name_nl` and calls `max()` over existing choices; on a fresh DB with no `OtherMediaType` rows that raises (code reading, not run). 117 migrations in total.
- **Quality.**
  - `dictionary/tests.py` is 213 KB (4,321 lines); 25 TestCase classes across the repo.
  - CI is only a self-hosted deploy workflow on runners `global` and `vgt` (`.github/workflows/deploy.yml`), plus an acceptance-environment trigger. **No test CI.**
  - In [deploy.sh](https://github.com/Signbank/Global-signbank/blob/master/deploy.sh), the unit-test step is commented out. The script does `git stash`, merge, copies the SQLite DB, then reboots the machine.
  - A 143 KB `debug.log` is committed.

### Inferences
**Changes for Uzbek, Russian and UzSL (estimates):**

| Change | pw | Risk |
|---|---|---|
| Fresh instance on MySQL/Postgres. Server-specific settings with `LANGUAGES = uz, uz-cyrl (custom), ru, en`, matching `MODELTRANSLATION_LANGUAGES` and 3-char codes (`uzb`, `rus`). New migration for the `name_uz` / `name_uz_cyrl` / `name_ru` columns. Fix language-coupled data migrations for fresh installs. | 1–2 | Medium. Django ships a `uz` (Latin) locale; Uzbek Cyrillic needs a custom locale code and `LANG_INFO` entry. |
| Translate about 1,650 UI strings (django.po) to uz-Latn and ru. Derive uz-Cyrl by a deterministic transliteration script, then review by a native speaker. Also translate FieldChoice/Handshape names. | 2–3 | Low |
| Create the `SignLanguage` "UzSL", one Dataset per region, `Dialect` rows for regional variants, the UzSL handshape inventory and phonology choice lists, with a Deaf linguist | 1–2 engineering + linguist | Medium. UzSL phonology is undocumented. |
| Keyword search that matches a Latin query to Cyrillic keywords and back (transliteration index) | 1 | Low |
| Export bridge: Signbank API → `spoken-to-signed` lexicon CSV (+ `video_to_pose` per gloss video) | 1–2 | Low |
| Ops hardening: replace `deploy.sh` with containerised deploy, run tests in CI, set up video storage backups | 1–2 | Low |

- Total: about 7–12 pw plus content.
- Content is the real cost: filming 2,000–5,000 signs with Deaf signers (see `open_source_clonable.md` §2).

### Gaps
- Not checked: whether `bin/develop.py migrate` succeeds on an empty DB. I did not run it.

---

## 4. sign-language-processing: `spoken-to-signed-translation` and `pose`

### Takeaway
Both are MIT and active, and they are the cleanest text→sign backbone. In `spoken-to-signed-translation` (s2s), languages are derived from lexicon rows, so Uzbek and Russian need only lexicon CSV rows, .pose files and a glosser. But:
- No glosser supports Uzbek: simplemma has no `uz`, and the spaCy maps are de/fr/it/en only.
- The bundled `pose_to_video` raises `NotImplementedError`.
- Fingerspelling poses come from a GCS bucket with no stated licence.

`pose` is a language-agnostic file format and toolkit. It needs no localisation, but it pins `mediapipe<0.10.30` because it uses the legacy `mp.solutions.holistic` API.

### Cited Findings
**spoken-to-signed-translation** ([repo](https://github.com/sign-language-processing/spoken-to-signed-translation), branch main)
- **Licence.** LICENSE is MIT, "Copyright (c) 2026 ZurichNLP".
- **Activity and size.** Last commit 2026-10-18, 131 MB (mostly assets), 105 stars.
- **Manifest** ([pyproject.toml](https://github.com/sign-language-processing/spoken-to-signed-translation/blob/main/pyproject.toml)):
  - Version 0.0.2, Python ≥3.9.
  - Dependencies: `pose-format>=0.15.0`, `pose_anonymization`, numpy, scipy, `simplemma>=1.0.0`.
  - Extras: `server` (FastAPI, hypercorn), `postgres`, `gpt` (openai), `spacy`, `nmt` (sockeye 3.1.10), `gcs`, `lexicon` (sign-language-datasets).
  - Dockerfile `python:3.12-slim` serves `spoken_to_signed.server:app` with hypercorn.
  - CI: lint, test (pytest under uv on 3.9), release, Docker publish (`.github/workflows/*.yaml`).
  - 21 test files, mostly ASL rules plus e2e, server and SQL lookup.
- **Modules.**
  - `text_to_gloss/{simple,spacylemma,rules,nmt,gpt,asl,senses,rewrites,wordnet}.py`
  - `gloss_to_pose/{lookup/{csv,sql,fingerspelling}_lookup.py, concatenate.py, smoothing.py, languages.py}`
  - `pose_to_video/__init__.py`: `def pose_to_video(...): raise NotImplementedError`
- **Language handling.**
  - CLI choices come from `lookup.words_index` when a lexicon is given. Without one they fall back to `["de","fr","it","en"]` / `["sgg","gsg","bfi","ase"]` (`bin.py:113-117`).
  - Lexicon index columns: `path, spoken_language, signed_language, start, end, segment_start, segment_end, words, glosses, priority` (`download_lexicon.py:16-27`). The only downloader is `--name signsuisse` (`:117`).
  - `rules.py:10-13` covers de/fr only. `spacylemma.py:4-9` covers de/fr/it/en. `asl.py` is English→ASL.
  - `simple.py` uses simplemma when the language is supported and otherwise lower-cases and splits on spaces.
  - simplemma's shipped data files include `ru`, `uk` and `tr` but **no `uz`** (and no `kk`). — [simplemma data folder](https://github.com/adbar/simplemma/tree/main/simplemma/strategies/dictionaries/data)
  - Language backup map `slf→ise, ssr→fsl` (`gloss_to_pose/languages.py`), which can be reused for something like `uzsl→rsl` fallback.
- **Models and data.**
  - The NMT glosser downloads `https://archive.cl.uzh.ch/public/archive/2022/easier/dgs_de.tar.gz` (`nmt.py:52`).
  - The GPT glosser defaults to `OPENAI_MODEL` "gpt-5.6-luna" (`gpt.py:140`).
  - Fingerspelling lexicon: 22 signed languages listed in `assets/fingerspelling_lexicon/index.csv` (e.g. `uk,ukl`, `tr,tsm`, `en,ase`). **No `rsl` (Russian SL) and no Uzbek.**
  - The fingerspelling data is pulled from the GCS bucket `sign-mt-poses` (`assets/fingerspelling_lexicon/download.py:7-11`). No licence is stated for those poses.

**pose** ([repo](https://github.com/sign-language-processing/pose), branch master)
- **Licence.** LICENSE.txt is MIT, "Copyright (c) 2021 Amit Moryossef".
- **Activity and size.** Last commit 2026-09-19, 16 MB.
- **Python package** `pose_format` v0.15.0: numpy, tqdm, simple-video-utils. Extras: `mediapipe<0.10.30`, mmpose, torch, tensorflow ([pyproject](https://github.com/sign-language-processing/pose/blob/master/src/python/pyproject.toml)).
- **JS packages** `pose-format` 1.6.2 and `pose-viewer` 1.2.0 (a Stencil web component), both MIT.
- Git submodules point to a Dart port and to `pose-pipelines`.
- **Modules.** `pose.py`, `pose_body.py`, `pose_header.py`, `pose_visualizer.py`, and `utils/{holistic,openpose,alphapose,mmposewholebody,pose_converter,normalization_3d}.py`.
- **CLI.** `video_to_pose --format mediapipe` and `visualize_pose` (README:56,224).
- `utils/holistic.py:18-23` uses `mp.solutions.holistic`, the legacy MediaPipe solution API.
- **CI.** Python 3.8–3.12 matrix running pytest (`.github/workflows/python.yaml`), plus JS and Dart workflows; Sphinx docs on ReadTheDocs.

### Inferences
**Changes for Uzbek, Russian and UzSL in s2s (estimates):**

| Change | pw | Risk |
|---|---|---|
| New `text_to_gloss/uz.py` glosser: Uzbek tokeniser with apostrophe normalisation (oʻ / gʻ / ' variants) and Cyrillic→Latin transliteration in front. Suffix-stripping lemmatiser (or an Apertium-uzb wrapper). Reorder rules for UzSL (topic/verb-final, negation, questions) authored with Deaf linguists. | 4–8 | High (no UzSL grammar description) |
| Russian glosser: `simple` with simplemma `ru` works today. Add rules (reordering, dropping prepositions and copula) for Russian→UzSL. | 1–2 | Medium |
| Lexicon: rows `spoken_language ∈ {uz, ru}`, `signed_language = <UzSL private code>`, poses made with `video_to_pose` from Signbank videos. Add a `download_lexicon --name uzsl` loader that reads the Signbank API. | 1–2 | Low (engineering) |
| Fingerspelling: create an Uzbek Latin (incl. oʻ, gʻ, sh, ch, ng) and Cyrillic fingerspelling set by filming the UzSL manual alphabet, and add it to `index.csv` | 1 + filming | Medium (UzSL alphabet must be confirmed) |
| Output rendering: either `visualize_pose` skeleton video or `pose-viewer` in the browser (both MIT), or a `performs` avatar driven by pose/BVH. The bundled `pose_to_video` is not implemented, and `pose-to-video` in the org is NOASSERTION (per `open_source_clonable.md`). | 1–3 | Medium (Deaf acceptability of skeleton/avatar output) |
| Lift the `mediapipe<0.10.30` pin by moving to the MediaPipe Tasks API (upstream contribution) | 1–2 | Medium |

- Total: about 9–18 pw plus lexicon filming.
- Relying on the `gpt` glosser would mean an external API and cost. Keep it optional.

### Gaps
- Not found: a published UzSL manual alphabet or grammar description. Also not found: the licence of the `sign-mt-poses` GCS fingerspelling data.

---

## 5. VLibras (spbgovbr-vlibras): what is actually inside

### Takeaway
GitHub is a mirror of LAViD's login-only GitLab. The four key repos are LGPL-3.0, but:
- `text-core` is only a RabbitMQ worker. The real translator is a Portuguese-only package installed from **test.pypi**, and its neural weights come from LAViD's GitLab with no licence.
- Both players ship **compiled Unity WebGL only**, fetch per-gloss AssetBundles from vlibras.gov.br, and hard-code region "BR".
- The widget is well engineered but has **no i18n layer**.

Borrow the architecture and UX; nothing language- or avatar-specific is reusable.

### Cited Findings
- **Licence.** All four LICENSE files are the verbatim GNU LGPL v3. `web-browsers/package.json` says `LGPL-3.0-or-later`.
- **Hosting and CI.** Upstream is `gitlab.lavid.ufpb.br`, which redirects to sign-in. CI runs on GitLab from a private template. — [web-browsers AGENTS.md](https://github.com/spbgovbr-vlibras/vlibras-web-browsers/blob/dev/AGENTS.md)

| Repo | Last commit | Size (KB) | Finding |
|---|---|---|---|
| [vlibras-translator-text-core](https://github.com/spbgovbr-vlibras/vlibras-translator-text-core) (dev) | 2026-08-20 | 69,588 | `src/worker.py` (~9 KB) consumes `translate.to_text` and calls `vlibras_translator.translate`, with an optional LLM "refiner" (`gpt-4o` or Ollama; `config.py:30-93`). The Dockerfile installs `vlibras-translator[neural]==1.3.3` from **test.pypi** (PyPI 404) and `pt_core_news_md`. The README names older packages, so the docs and Dockerfile disagree. |
| `vlibras-translator` 1.3.3 sdist (test.pypi, 2026-07-31, LGPL-3.0) | – | – | PT rule pipeline (lemmatise, depluralise, substitutions, number glossing), a 22,509-entry Libras gloss dictionary and a 26 MB PT lemma lookup. `translate.py:55-66` requires a Portuguese spaCy model. Neural weights are git-LFS-cloned from `gitlab.lavid.ufpb.br/vlibras-deeplearning/translator-models.git` (`model_utils.py:116-119`), with no licence stated. |
| [vlibras-translator-api](https://github.com/spbgovbr-vlibras/vlibras-translator-api) | default branch 2023-10-11 (stale); `dev` 2026-08-31 | 1,581 | `dev` is v3.1.0: Node ≥24, Postgres/Sequelize, Jest, API-key auth, rate limit, gloss refinement, Helm. The real work is on 30 branches (latest 2026-11-02). Queue-RPC `POST /translate` uses `amq.rabbitmq.reply-to` with a Redis cache. A `/review` crowd-rating loop exists. **No language parameter.** Avatars are validated against `['icaro','hozana']`. |
| [vlibras-player-webjs](https://github.com/spbgovbr-vlibras/vlibras-player-webjs) (dev) | 2025-09-22 | 528,934 | `src/target/` contains only `playerweb.data.unityweb` (10.4 MB), `.wasm.code.unityweb` and `UnityLoader.js`. **No Unity project, rig or animations.** `Player.js:42` hard-codes `region = "BR"`. Bundles are fetched from `dicionario2-dth.vlibras.gov.br/2018.3.1/WEBGL/` (`src/config.js`). The `vlibras-dictionary-bundles/-video/-cache` repos are empty. |
| [vlibras-web-browsers](https://github.com/spbgovbr-vlibras/vlibras-web-browsers) (dev) | 2026-11-12 | 473,743 | v7.12.3: Preact, Zustand, Tailwind/daisyUI, Vite. 94 Vitest test files, Playwright smoke test, Biome, commitlint, CHANGELOG. Embeds its own Unity binary (`public/unity/`, 17 MB). Unity method contract in `src/player/constants/unity.ts:1-31` (playNow, avatar change, 8 emotions, subtitles). **No i18n library**; Portuguese literals are in JSX (e.g. `about/index.tsx:27`), and `src/core/dom/index.ts:25,64` sets `root.lang="pt-BR"`. Endpoints are hard-coded in `src/core/config/index.ts:8-37`. PostHog analytics. |

### Inferences

| Change | pw | Risk |
|---|---|---|
| Add i18n to the widget (extract about 120 .tsx files' strings; uz-Latn, uz-Cyrl, ru) and point it at own endpoints | 3–4 | Low |
| translator-api: add a `lang` parameter and rebrand | 1–2 | Low |
| Replace the PT engine with an Uzbek/Russian→UzSL gloss engine (same as s2s §4; do not do it twice) | 8–14 | High |
| New avatar implementing the `unity.ts` contract (or negotiate the Unity source from RNP/LAViD) | 12–25 + animator | Very high |
| Animated UzSL bundle lexicon (1,500–3,000 signs) | 6–12 months, animator + Deaf signer | Very high |

- **Verdict: borrow ideas.** Worth borrowing: the queue-RPC API, the review loop, the emotion contract, and the browser-extension/widget UX. Forking the widget only makes sense once an avatar exists.

### Gaps
- Not determined: whether `translator-models.git` can be cloned anonymously (its `info/refs` returned 200, but it was not cloned) and the licence of the weights. No statement found on releasing the Unity source.

---

## 6. Jitsi Meet (relevant features only, via GitHub API)

### Takeaway
Jitsi Meet (Apache-2.0, very active) already covers what an interpreter call needs:
- pinning and stage view with 1–6 participants on stage;
- an endpoint text message API over the bridge for real-time text;
- a full iframe API;
- a pluggable transcription backend through Jigasi, with Whisper and Vosk services built in;
- React Native mobile SDKs.

Uzbek is missing from both the UI languages and the transcriber language list, but `customLanguages` and i18next JSON make both straightforward. Russian UI exists but is about 17 % untranslated.

### Cited Findings
- **Repo facts.** [jitsi/jitsi-meet](https://github.com/jitsi/jitsi-meet): Apache-2.0, TypeScript, pushed 2026-11-14, 30,238 stars. Latest release `stable/jitsi-meet_11248` (2026-09-14). `package.json`: react 19.2.3, react-native 0.85.2, i18next 17.0.6, node ≥24. `lib-jitsi-meet` is pulled from a GitHub release tarball. — GitHub API
- **UI languages.**
  - The `lang/` folder has 61 `main-*.json` files, including `main-ru.json` and `main-kk.json`. **There is no `main-uz.json`, and `languages.json` has no `uz` key.**
  - Coverage against `main.json` (1,670 flattened keys): ru has 1,386 keys (284 missing); kk has 1,472 (198 missing). I computed this from the fetched files.
  - i18n is wired in `react/features/base/i18n/i18next.ts`, with `LANGUAGES = Object.keys(languages.json)`.
- **Transcription.**
  - The `transcription` block in [config.js](https://github.com/jitsi/jitsi-meet/blob/master/config.js) (lines ~576-640) has `enabled`, `translationLanguages`, `useAppLanguage`, `preferredLanguage`, `autoCaptionOnTranscribe`, `disableClosedCaptions`, `diarize`, and `customLanguages` "Useful for custom transcription backends (e.g. Vosk)".
  - `react/features/transcribing/transcriber-langs.json` lists `ru-RU` but **no Uzbek**.
  - `lang/translation-languages.json` (110 entries) contains both `uz` and `ru`.
- **Jigasi transcription services.** `WhisperTranscriptionService.java`, `WhisperWebsocket.java`, `VoskTranscriptionService.java`, Google, Oracle, plus LibreTranslate/Bing/Google translation. — [jitsi/jigasi tree](https://github.com/jitsi/jigasi/tree/master/src/main/java/org/jitsi/jigasi/transcription) (Apache-2.0, pushed 2026-11-13)
- **Skynet.** [jitsi/skynet](https://github.com/jitsi/skynet) (Apache-2.0) offers "Live Transcriptions with Faster Whisper via websockets" (`ENABLED_MODULES="streaming_whisper"`, `WHISPER_MODEL_PATH`). — README
- **Layout.** `config.js` `filmstrip.stageFilmstripParticipants` "between 1 and 6" and `disableStageFilmstrip` (lines ~2034-2047).
- **iframe API commands** in [modules/API/API.js](https://github.com/jitsi/jitsi-meet/blob/master/modules/API/API.js): `pin-participant` (l.347), `set-large-video-participant` (l.452), `set-follow-me` (l.438), `send-chat-message` (l.629), `send-endpoint-text-message` (l.646), `toggle-subtitles` / `set-subtitles` (l.597/600), `answer-knocking-participant` (l.221, lobby), `toggle-lobby` (l.316), `start-recording` (l.791).
- **Mobile.** The repo contains `android/sdk`, `ios`, `react-native-sdk` and `index.android.js` / `index.ios.js`. Samples are in [jitsi-meet-sdk-samples](https://github.com/jitsi/jitsi-meet-sdk-samples) (Apache-2.0, pushed 2026-11-02).
- **No sign-language code.** A GitHub code search for `"sign language"` in jitsi-meet returned 0 results, so there is no interpreter role.

### Inferences
**Changes for Uzbek, Russian and UzSL (estimates):**

| Change | pw | Risk |
|---|---|---|
| Add `main-uz.json` (Latin) and a Cyrillic variant (e.g. `uz-Cyrl`, following the existing `zh-CN` / `es-US` style), plus `languages.json` entries; complete the 284 missing ru keys | 1–2 | Low. Check that the language detector accepts a script subtag. |
| Uzbek captions: point Jigasi's `WhisperTranscriptionService` at a WhisperLive/Skynet server running an Uzbek Whisper (§8); add `customLanguages: {'uz-UZ': "O'zbek"}` | 1–2 | Medium (Uzbek WER) |
| Interpreter features: an "interpreter" participant always pinned on stage via `set-follow-me` + `pin-participant` or a custom role; lobby/queue for interpreter dispatch; booking UI | 6–10 (new code around Jitsi) | Medium |
| Real-time text (RTT) side panel over `send-endpoint-text-message` (character streaming) | 1–2 | Low |

- The upstream pace is high: two merge rebases a year are needed, so a thin fork (config, lang files, a custom React panel) is better than deep patches.

### Gaps
- Not verified: whether Jigasi's Whisper service speaks the WhisperLive protocol or only Skynet's (protocol compatibility not checked). I also did not check `uz-Cyrl` handling in Jitsi's language detector.

---

## 7. Cboard (cboard-org/cboard, AAC)

### Takeaway
Cboard is active and well tested (GPL-3.0-only). It already has a nearly complete ru-RU locale and no Uzbek. Two things matter for Uzbek:
- A language only appears if a TTS voice exists for it.
- Voices are matched on the 2-letter prefix, so Uzbek Latin and Cyrillic need the alias trick Cboard already uses for Serbian Cyrillic.

The app has ads, PayPal and telemetry to strip. Fork it as a separate AAC app.

### Cited Findings
- **Licence.** `LICENSE.txt` is the full GPL v3 text, and `package.json` says `GPL-3.0-only`. The backend [cboard-api](https://github.com/cboard-org/cboard-api) is also GPL-3.0.
- **Activity.** Last commit 2026-11-11, release 1.42.5 (2026-09-20), 283 open issues, about 95 contributors, 247 MB. — GitHub API
- **Stack.**
  - React 17, Redux, MUI v4, react-intl v2.9, CRA/craco, Cordova (Android/iOS), PWA, Dockerfile.
  - Also bundled: `@mediapipe/tasks-vision`, Azure Speech SDK, ElevenLabs, `@ctrl/react-adsense`, PayPal, App Insights and Google Analytics.
- **Quality.** CircleCI, CodeQL, 137 Jest test files, Playwright e2e suites, BrowserStack, Crowdin.
- **i18n.**
  - `src/translations/` has 65 JSON files, about 4,016 keys each, and the keys include symbol labels.
  - `src/components/App/App.constants.js:16-70` lists 51 enabled locales, including `ru-RU`; ru-RU has 16 strings identical to English.
  - `tk-TM` is translated but not enabled. **There is no uz file.**
- **TTS gate.**
  - `src/i18n.js:72-103` filters languages by the voices available.
  - Voices are matched with `voice.lang.substring(0,2)` (around line 140).
  - The Serbian Cyrillic `sr-SP` alias is at around lines 88-89.
  - TTS providers: Azure, ElevenLabs, `speechSynthesis` (`SpeechProvider/tts.js`).
- **Symbols.** Mulberry is CC BY-SA 4.0 and bundled. **ARASAAC is CC BY-NC-SA 4.0.** Global Symbols is an API. The "Cboard Symbols" API needs a key (README:155-163; `CBOARD_SYMBOLS_INTEGRATION.md`).

### Inferences

| Change | pw | Risk |
|---|---|---|
| `uz-UZ` (Latin) and `uz-Cyrl` locales: about 4,000 strings including symbol labels, Cyrillic derived by transliteration, alias in `i18n.js` | 3–4 | Low–medium |
| Uzbek TTS: Azure uz-UZ voice or an open Uzbek TTS (see `open_source_clonable.md` §5) behind a voice adapter | 1–2 | Medium |
| Default boards for Uzbekistan contexts (clinic, government office, transport, family) | 2–3 + designer | Medium |
| New "UzSL video tile" that plays a Signbank clip | 2–4 | Medium |
| Strip ads, PayPal and telemetry; self-host cboard-api | 1–2 | Low |

### Gaps
- Not verified this session: which Azure uz-UZ voices exist and what they cost.

---

## 8. collabora/WhisperLive (streaming captions)

### Takeaway
WhisperLive is MIT, very active (100+ commits in 6 months), well tested and multi-backend (faster-whisper, TensorRT, OpenVINO). It has WebSocket bearer auth and Chrome/Firefox/iOS clients. It loads any HF Whisper checkpoint and converts it to CTranslate2 automatically, so an Uzbek Whisper fine-tune slots in directly.

Trap: the most-downloaded "Uzbek STT" model, `sarahai/uzbek-stt-3`, is **wav2vec2, not Whisper**, and cannot run in WhisperLive.

### Cited Findings
- **Licence.** LICENSE is MIT, "Copyright (c) 2023 Vineet Suryan, Collabora Ltd."
- **Activity.** Last commit 2026-11-13, 6.8 MB, 4,359 stars, 14 open issues. The API returned 100 commits (one full page) since 2026-05-15. — GitHub API
- **Stack.** [requirements/server.txt](https://github.com/collabora/WhisperLive/blob/main/requirements/server.txt): `faster-whisper==1.2.0`, websockets, onnxruntime, `openai-whisper==20250625`, `transformers[torch]<5`, OpenVINO-genai, FastAPI/uvicorn.
  - Dockerfiles: `cpu`, `gpu`, `openvino`, `rocm`, `tensorrt`.
  - CI: `.github/workflows/ci.yml` (tests, Docker builds, wheel build).
  - 17 test files, e.g. `test_server_extended.py` at 56 KB.
- **Architecture.**
  - `whisper_live/server.py` (1,283 lines): WebSocket server and OpenAI-style REST transcription with streaming.
  - `backend/{faster_whisper,trt,openvino,translation}_backend.py`, `vad.py`, `diarization.py`, `client.py`.
  - Bearer-token WebSocket auth via header, `?token=` or subprotocol (`server.py:51-87`).
  - `run_server.py` options include `--faster_whisper_custom_model_path`, `--max_clients`, `--max_connection_time`, `--no_single_model` and `--cache_path`.
- **Models.**
  - Default model `small.en` (`faster_whisper_backend.py:30`).
  - An HF model ID is fetched with `snapshot_download` and converted with `ctranslate2.converters.TransformersConverter` into a cache dir (`faster_whisper_backend.py:138-180`).
  - The VAD downloads `https://github.com/snakers4/silero-vad/raw/v5.0/files/silero_vad.onnx` (`vad.py:112`; silero-vad is MIT).
  - Optional translation uses `alirezamsh/small100` (MIT, M2M100-based), whose language list includes `uz` and `ru` (`tokenization_small100.py:59`).
  - Optional diarisation uses `pyannote/wespeaker-voxceleb-resnet34-LM` (`diarization.py:61`).
- **Language handling.**
  - The language is a per-client option (`options["language"]`, `server.py:313-374`). The translation target defaults to `"fr"` (`server.py:287`).
  - The Chrome extension popup already offers `<option value="uz">Uzbek</option>` (`Audio-Transcription-Chrome/popup.html:132`).
- **Uzbek models on HF** (API, 2026-11-15):

| Model | Licence | Architecture | Downloads | Modified |
|---|---|---|---|---|
| `navai-uz/whisper-medium-uzbek` | apache-2.0 | whisper (base `openai/whisper-medium`) | 5,526 | 2026-07-19 |
| `hostmepanda/whisper-large-v3-turbo-uzbek-ct2` | mit | CT2 conversion of `qirol4006/Whisper-3-turbo-uzbek` | 1,016 | 2026-04-08 |
| `sarahai/uzbek-stt-3` | apache-2.0 | **wav2vec2** | 452,482 | 2024-08-13 |

— [HF API](https://huggingface.co/api/models/navai-uz/whisper-medium-uzbek)

### Inferences
**Changes (estimates):**
- Deploy GPU or CPU Docker with `-fw navai-uz/whisper-medium-uzbek`, or the CT2 turbo model. Expose the bearer-auth WebSocket to Jitsi (through Jigasi or a browser-side client) and to the mobile captioning app. **1–2 pw.**
- Benchmark WER on Uzbek (Latin output) and Russian, plus Uzbek↔Russian code-switching. **1–2 pw.**
- Add Latin→Cyrillic output transliteration for users who read Cyrillic. **0.5 pw.**
- Risk: medium. The quality of community fine-tunes is unknown, and the `transformers<5` pin may lag.
- `sarahai/uzbek-stt-3` would need a separate CTC server, or Vosk as the offline fallback.

### Gaps
- No independent Uzbek WER benchmark was found. The upstream base of the `qirol4006` model and its training-data licence were not checked.

---

## 9. Recommendation: what to fork, what to borrow, module diagram and licence compatibility

### Takeaway
Fork 5 repos as the backbone: **Jitsi Meet**, **Global Signbank**, **spoken-to-signed-translation + pose** (one unit), **WhisperLive**, and **upf-gti/performs** (avatar, phase 2). Keep **Cboard** as an optional separate GPL app.

Borrow ideas only from SignON (contracts, consent and upload flow), VLibras (queue-RPC API, review loop, widget UX) and yandex/deaf (conversation UX).

Everything in the backbone is MIT, BSD or Apache, so all of it combines freely. GPL/LGPL pieces stay separate apps or services.

### Cited Findings
Licences confirmed from LICENSE files, as cited in §1–§8:

| Component | Licence |
|---|---|
| Jitsi Meet / Jigasi / Skynet | Apache-2.0 |
| Global Signbank | BSD-3 |
| s2s, pose | MIT |
| WhisperLive | MIT |
| performs | MIT (GitHub SPDX) |
| SignON | Apache-2.0 (+ NOTICE) |
| VLibras | LGPL-3.0 |
| Cboard + cboard-api | GPL-3.0-only |
| yandex/deaf | Apache-2.0 header; SpeechKit `.aar` proprietary |
| SignON HF checkpoints, VLibras neural weights, `sign-mt-poses` fingerspelling data | no licence stated |
| ARASAAC symbols | CC BY-NC-SA 4.0 |

### Inferences
**Fork as backbone:**

| # | Repo | Role | Uzbek/Russian/UzSL work (pw, estimate) | Risk |
|---|---|---|---|---|
| 1 | jitsi/jitsi-meet (+ Jigasi) | Interpreter video calls, captions overlay, RTT panel, mobile SDK | 9–16 | Medium |
| 2 | Signbank/Global-signbank | UzSL lexicon master DB (glosses, videos, dialects, uz/ru keywords) | 7–12 + filming | Medium |
| 3 | spoken-to-signed-translation + pose | Uzbek/Russian text → UzSL gloss → pose sequence; video→pose tooling | 9–18 | High (gloss rules) |
| 4 | collabora/WhisperLive | Uzbek/Russian streaming ASR for calls and the conversation app | 2.5–4.5 | Medium |
| 5 | upf-gti/performs (phase 2) | Browser avatar playing BML/pose or keyframes | 4–8 engineering + animator | Very high (Deaf acceptance; DGB warnings in `region_europe.md`) |

- **Separate optional app:** Cboard (GPL-3.0), 9–15 pw.
- **New code with nothing worth forking:**
  - the Uzbek conversation and caption mobile app (yandex/deaf UX as reference), 6–10 pw;
  - the data-contribution and consent app (SignON endpoint pattern), 4–6 pw;
  - interpreter dispatch and queue, within Jitsi's 6–10 pw.
- **Borrow only:**
  - SignON: OpenAPI/AsyncAPI envelope with stage timestamps; MinIO pre-signed upload; consent endpoints; PoseFormer training code for later UzSL recognition.
  - VLibras: queue-RPC with Redis cache; `/review` crowd-rating loop; avatar emotion contract; widget/extension UX.
  - yandex/deaf: canned phrases with pre-synthesised audio, dialog mode, large font.
- **Do not reuse:** SignON models, compose and mobile app; VLibras translator, Unity players and bundles; yandex/deaf code; sign/translate (CC BY-NC-SA, per `open_source_clonable.md`).
- **Total MVP engineering** (calls + captions + dictionary + text→pose skeleton, without the avatar): about 35–60 pw. The dominant costs are not engineering: filming 2,000+ signs with paid Deaf signers, and a Deaf linguist for gloss rules.

**Module diagram (text):**
```
                    ┌──────────────── Clients ────────────────────────────────────────┐
                    │ Web (Jitsi fork UI, uz-Latn/uz-Cyrl/ru)   Mobile: Jitsi RN SDK   │
                    │ Conversation/caption app (new; yandex/deaf UX)   Cboard fork*    │
                    │ Dictionary site (Signbank public views)   Data-contribution app  │
                    └───────┬───────────────┬──────────────────┬───────────────┬──────┘
                            │WebRTC         │WSS (bearer)      │REST           │REST (pre-signed upload)
          ┌─────────────────▼──────┐ ┌──────▼─────────────┐ ┌──▼──────────────┐ ┌──▼─────────────────┐
          │ Jitsi Meet + JVB +     │ │ WhisperLive (MIT)  │ │ Text→Sign API    │ │ Consent & upload   │
          │ Jicofo + Prosody       │ │ uz/ru Whisper CT2  │ │ s2s (MIT):       │ │ service (new;      │
          │ (Apache-2.0)           │◄┤ silero VAD         │ │ uz/ru glosser →  │ │ SignON pattern) →  │
          │  ├ Jigasi transcriber ─┼─► (or Skynet)       │ │ lexicon lookup → │ │ object storage     │
          │  ├ interpreter queue / │ └────────────────────┘ │ pose concat      │ └──────────┬─────────┘
          │  │ lobby (new)         │                        └──▲───────┬──────┘            │ raw videos
          │  └ RTT data-channel    │                           │CSV/.pose│.pose            ▼
          └────────────────────────┘     ┌─────────────────────┴──┐ ┌───▼─────────────────────────────┐
                                         │ Global Signbank (BSD-3) │ │ Renderers: pose-viewer (MIT)    │
                                         │ UzSL glosses, videos,   │ │ skeleton video (pose, MIT)      │
                                         │ uz/ru keywords, dialects│ │ performs avatar (MIT, phase 2)  │
                                         │ → export job: video_to_ │ └─────────────────────────────────┘
                                         │   pose (MediaPipe)      │
                                         └─────────────────────────┘
  * Cboard (GPL-3.0) and cboard-api run as a separate app/service; they talk to the rest only over HTTP.
  Later: UzSL sign recognition trained on contributed data (SignON PoseFormer / Kaggle-ISLR code as reference).
```

**Licence compatibility:**
- **MIT, BSD-3 and Apache-2.0 combine freely in one codebase.** Keep each project's copyright notices, and keep SignON's NOTICE if any SignON code is copied.
- **GPL-3.0 (Cboard):** Apache-2.0 code may flow into a GPL-3.0 work, but the Cboard fork and its distributed derivatives must stay GPL-3.0. Communicating over HTTP keeps the other services unaffected.
- **LGPL-3.0 (VLibras):** only relevant if the widget is forked. Modifications to the LGPL files must be published.
- **Model and data licences are the weak point.** SignON checkpoints, VLibras weights and the `sign-mt-poses` fingerspelling data are unlicensed, so treat them as unusable until clarified. Check each Uzbek ASR checkpoint card. Avoid ARASAAC (NonCommercial) if commercial partners are expected.
- **Own content** (UzSL videos, poses, gloss rules) should be released under an explicit licence such as CC BY-SA 4.0 for data, with signer consent captured per video. That needs a legal check, not done here.

### Gaps
- Not verified: Jigasi Whisper protocol compatibility with WhisperLive, whether performs can drive an avatar from `.pose` keypoints rather than only BML or keyframes, and whether a UzSL ISO 639-3 code exists. All effort figures are estimates.
