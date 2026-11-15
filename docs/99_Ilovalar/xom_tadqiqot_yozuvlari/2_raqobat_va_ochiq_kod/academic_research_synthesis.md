# Academic and experimental evidence (2022-2026) for a Deaf-hearing communication platform for a low-resource sign language (Uzbek SL, RSL-related), as of Nov 2026

Scope note: this file avoids repeating the companion notes in `Karlar uchun muloqot platformasi/` (open_source_tech_stack.md: SOTA BLEU, Uni-Sign, dataset licenses, ASL Citizen basics, sign.mt, pose-format; deaf_centered_product_ux.md: Desai 2024 review, WFD, EvolveCaptions, WCAG). Search was limited to about 20 tool calls, so many items come from abstracts or secondary summaries and are flagged. "Preprint" = arXiv, not peer-reviewed.

## 1. Surveys and reviews, and the low-resource / transfer-learning evidence

### Takeaway
The strongest experimental result for a low-resource language is that **multilingual pretraining beats both training from scratch and pretraining on one large language**: YouTube-SL-25 for translation, and Logos (Russian SL, Sber/SaluteDevices) for isolated recognition. Logos is RSL, so it is the closest available pretraining source for Uzbek SL. Pose-based models transfer across languages cheaply but trail RGB on accuracy. No controlled study has measured transfer into Uzbek SL.

### Cited Findings
- **YouTube-SL-25 (Tanzer and Zhang, ICLR 2025, peer-reviewed).** About 3,200 h, named for the 25 sign languages with at least 15 h each. Pretraining on the ASL subset alone beats no pretraining, but "is consistently surpassed by pretraining on the full multilingual" corpus — [arXiv 2407.11144](https://arxiv.org/html/2407.11144v1); [ICLR 2025](https://iclr.cc/virtual/2025/poster/28414)
  - Fine-tuned BLEURT reported for low-resource Swiss languages, from a secondary summary (check Table 2): Swiss French SL rose from 11.1 (ASL pretraining) to 18.8 (full multilingual), Swiss Italian SL from 20.8 to 25.2, and Swiss German SL reached 37.7 against 27.9 (ASL pretraining) and 26.2 (baseline) — [Liner review](https://liner.com/review/youtubesl25-largescale-opendomain-multilingual-sign-language-parallel-corpus)
  - Language-ID results were less clean. Langid on FLEURS-ASL got worse after ASL pretraining plus How2Sign fine-tuning, even compared with no pretraining. The authors blame train/test signer overlap in some datasets — [arXiv 2407.11144](https://arxiv.org/html/2407.11144v1)
- **Logos (Ovodov et al., SaluteDevices, EMNLP 2025, peer-reviewed).**
  - It is a Russian SL isolated-recognition dataset. The authors call it the largest RSL dataset and the largest ISLR dataset by number of signers. It explicitly labels groups of visually similar signs.
  - A model pretrained on Logos works as a universal encoder for other sign languages, including in few-shot settings.
  - **Multi-dataset co-training with language-specific classification heads helped low-resource datasets most**, more than plain pretrain-then-finetune.
  - It reports SOTA on WLASL and competitive AUTSL results with a single-stream RGB model. Code, data and models are at github.com/ai-forever/logos (license not checked in this session).
  - Sources: [arXiv 2505.10481](https://arxiv.org/html/2505.10481v2); [ACL Anthology 2025.emnlp-main.1238](https://aclanthology.org/2025.emnlp-main.1238.pdf)
- **Transfer inside one language family.** Kindiroglu, Kara, Ozdemir and Akarun (FG 2024) used AUTSL (Turkish SL, 226 signs, 43 signers) as source and BosphorusSign22k (745 signs) as target, with only 57 shared signs. They tested five supervised transfer methods on a temporal graph-conv recognizer, and specialised transfer methods beat plain fine-tuning — [arXiv 2403.14534](https://arxiv.org/html/2403.14534v2)
- **Pose vs RGB.**
  - De Coster and Holmes (2023, preprint): keypoint embeddings carry cross-lingual information and can be reused on a new sign language with only the classifier retrained, but "image-based models often still outperform keypoint-based models" — [arXiv 2306.17558](https://arxiv.org/abs/2306.17558)
  - SignBERT+ (TPAMI): pose-based methods "lag largely behind" RGB on MSASL, and hand-model-aware self-supervised pretraining narrows the gap — [arXiv 2305.04868](https://arxiv.org/pdf/2305.04868)
  - OpenHands (ACL 2022) released pose-based ISLR checkpoints for six languages and argued that pose suits real-time, camera-only use — [ACL 2022.acl-long.150](https://aclweb.org/anthology/2022.acl-long.150.pdf)
- **Multilingual SLT and negative transfer.** A 2025 workshop paper (WSLP) found that clustering sign languages into families and training a model per family reduces negative transfer while keeping the multilingual benefit — [2025.wslp-main.5](https://preview.aclanthology.org/ingest-ijcnlp-aacl/2025.wslp-main.5.pdf)
- **Low-resource survey (arXiv 2605.12096, 2026, Azerbaijani SL case study).** It argues that data quality and annotation completeness matter more than architecture, recommends MAML-style few-shot signer adaptation, and says BLEU and WER correlate poorly with communicative adequacy. The companion note already records that **v2 was withdrawn by arXiv for quality**. A summary site attributes to it a Turkish-to-Kenyan transfer gain of about 0.42 vs about 0.18 from ASL, but that figure was **not confirmed** in the paper itself — [arXiv 2605.12096](https://arxiv.org/pdf/2605.12096); [Moonlight summary](https://www.themoonlight.io/tw/review/sign-language-recognition-and-translation-for-low-resource-languages-challenges-and-pathways-forward)
- **Broader surveys.**
  - An ICCV 2023 workshop survey covers transfer learning for ISLR (Sarhan and Frintrop, Hamburg) — [PDF](https://www.inf.uni-hamburg.de/en/inst/ab/cv/media/sarhan-frintrop-amfg-iccv2023-survey.pdf)
  - A taxonomy survey from rule-based to transformer SLT — [arXiv 2408.14825](https://arxiv.org/pdf/2408.14825)
  - An MDPI Electronics 2023 SLT survey — [MDPI](https://www.mdpi.com/2079-9292/12/12/2678/html)
- **Production benchmark (SLRTP 2025 challenge, CVPR workshop).** The first text-to-pose challenge ran on PHOENIX-2014T. It drew 33 participants and 231 submissions. The winner scored BLEU-1 31.40 (back-translation) and DTW-MJE 0.0574, using retrieval plus a pretrained language model — [arXiv 2508.06951](https://arxiv.org/abs/2508.06951); [CVPR 2025](https://cvpr.thecvf.com/virtual/2025/35711)

### Inferences
- For Uzbek SL, the evidence supports this training recipe: start from a Logos-pretrained RSL encoder, then **co-train** with Slovo, Logos and UzSL data using separate heads (Logos' own best low-resource result). That is better than fine-tuning on UzSL alone.
- Family-specific multilingual training (WSLP 2025) suggests grouping UzSL with RSL and Kazakh-Russian SL (FluentSigners/K-RSL), not with Turkish SL. Uzbek SL descends from Soviet/Russian SL, and spoken-language Turkic kinship does not transfer to signing. This is an inference, untested for UzSL.
- A winning production system that relies on retrieval (SLRTP 2025) supports a phrase-library or retrieval approach for the hearing-to-Deaf direction in an MVP, rather than free generation.

### Gaps
- Exact Logos accuracy numbers and the license of the Logos data and weights were not retrieved.
- There is no controlled head-to-head few-shot cross-lingual comparison of pose vs RGB.
- No published transfer experiment targets Uzbek SL. The 0.42/0.18 Turkic transfer figure is unverified and its source survey was withdrawn.

## 2. User studies and field experiments (avatars, recognition, captioning, VRI)

### Takeaway
Deaf users consistently prefer human signers. Among avatars, **motion-capture avatars beat keyframe or synthetic ones** (n=191). Avatars can still match humans on task comprehension in narrow domains, and facial expression and non-manuals drive acceptance. Remote interpreting satisfies fewer than half of Deaf patients, mainly because of video quality and interpreter issues. For face-to-face ASR captioning, the hearing partner's behaviour and caption placement matter as much as accuracy.

### Cited Findings
- **Quandt et al. 2022 (Frontiers in Psychology, peer-reviewed).** 191 ASL users (Deaf, hard of hearing and hearing) compared a live human, a synthetic/keyframe avatar and a motion-capture avatar. The mocap avatar was rated significantly more positively than the synthetic one on all primary variables. Attitudes varied by hearing status, age of sign acquisition and avatar type — [Frontiers 10.3389/fpsyg.2022.730917](https://www.frontiersin.org/articles/10.3389/fpsyg.2022.730917); [NSF PAR](https://par.nsf.gov/biblio/10356507-attitudes-toward-signing-avatars-vary-depending-hearing-status-age-signed-language-acquisition-avatar-type)
- **Hansen et al. 2018 (cited in Quandt 2022).** Deaf young adults all preferred a human signer, but their maths performance was equal whether questions came from the human or the avatar — [Frontiers 2022](https://www.frontiersin.org/articles/10.3389/fpsyg.2022.730917)
- **Eye tracking (LREC 2018 workshop).** Native Deaf viewers fixate on the face longer when watching human signers than virtual signers — [sign-lang.uni-hamburg.de 18028](https://www.sign-lang.uni-hamburg.de/lrec/pub/18028.pdf)
- **Predictors of acceptance and comprehension (Kacorri/Huenerfauth line, TACCESS, DOI 10.1145/3046787; pre-2022 but the core method reference).** 62 and 57 deaf participants rated ASL animations from three avatar platforms. Participants from residential Deaf schools scored significantly higher on comprehension, so participant background must be controlled — [review summary](https://a11y-paradise.onrender.com/reviews/69a48d565627207a189028f8)
- **Older ASSETS work (pre-2022, foundational).**
  - Kipp et al. (ASSETS 2011) used focus groups and online studies. It is reported that facial expression, mouthing and posture mattered more to Deaf users than handshape accuracy (secondary summary) — [review](https://a11y-paradise.onrender.com/reviews/69d7295cc5280b1eb7898be7)
  - A wrong facial expression, such as angry instead of questioning, actively harms comprehension — [review](https://a11y-paradise.onrender.com/reviews/69d7e669bfbcd19d27f2318e)
- **VRI quality (Kushalnagar et al. 2019, JMIR Rehab Assist Technol, peer-reviewed).**
  - Only **41% of Deaf ASL-using VRI users were satisfied**.
  - Perceived interpreter interference with disclosing health information **tripled** dissatisfaction.
  - Problems included poor video, low bandwidth and a limited range of visual cues. Comprehension was not measured.
  - Sources: [PMC6431824](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6431824/)
- **Remote vs in-person interpreting RCT (Mastropierro et al. 2024, Am J Otolaryngology).** 52 hearing-loss patients who speak Mandarin or Cantonese (spoken-language interpreting, not sign). In-person interpreting gave higher satisfaction and better comprehension, and cost less — [record](https://katalog.lib.cas.cz/KNAV/EdsRecord/cmedm,39163815)
- **Face-to-face ASR captioning.**
  - Seita and Huenerfauth (CHI EA 2020): hearing-speaker behaviours that raise ASR accuracy can make the DHH user's experience worse — [review](https://a11y-paradise.onrender.com/reviews/69e242fa20c3fe3111584d7d)
  - Head-mounted caption studies (Toronto, Epson Moverio): latency was acceptable in conversation, and the study examined captions placed outside the centre of vision — [PDF](https://www.cs.utoronto.ca/~sliaqat/augmented_reality_glasses.pdf)
  - Jain et al. (HoloLens): captions distracted 4 participants while they were walking — [NSF PAR](https://par.nsf.gov/servlets/purl/10072841)
  - The DIS 2018 study found that a headset let users watch speakers' lips and captions together — [Springer](https://www.springerprofessional.de/doi/10.1145/3234695.3236355)
  - Kang et al. (CHI EA) with 20 hearing participants: hearing partners often fail to notice when the DHH partner misses content, so feedback to the speaker helps — [PDF](https://jennakangg.github.io/assets/pdfs/ChiCaptioning.pdf)
  - Kafle and Huenerfauth (ASSETS 2017) evaluated the usability of automatic captions for DHH users — [arXiv 1712.02033](https://arxiv.org/pdf/1712.02033)

### Inferences
- If avatars are used for hearing-to-Deaf output, use mocap-recorded UzSL phrases from real Deaf signers rather than procedurally synthesised signing, and invest in face and mouthing. The evidence ranks these above hand precision.
- Fixed-domain avatar content (medical intake, public service phrases) can work for comprehension even when it is not liked. Open-domain avatar translation has no supporting evidence.
- For live interpreting, bandwidth and video quality are a measured satisfaction driver, so they are a product requirement and not only an infrastructure concern. Low bandwidth is common in Uzbek regions.
- Captioning UI should give feedback to the hearing speaker (slow down, rephrase), not only show text to the Deaf user.

### Gaps
- No 2023-2026 field deployment of continuous sign recognition evaluated with Deaf users was found. The literature is lab studies.
- No study of AAC or communication-board effectiveness specifically for Deaf signers was retrieved in this session.
- No VRI or VRS study from the CIS region was found.

## 3. Data collection methodology, consent/privacy and annotation cost

### Takeaway
Smartphone-based, paid, consented collection from Deaf signers works at scale: PopSign has 210k clips from 47 signers, and ASL Citizen and Logos are other examples. Continuous annotation is very expensive. DGS-Korpus reports one to several hundred minutes of work per minute of signing, and lighter CSLR glossing takes 40-80x real time. **Pose skeletons are not anonymous**, because people can be re-identified from pose.

### Cited Findings
- **PopSign ASL v1.0 (Starner et al., NeurIPS 2023 Datasets and Benchmarks, peer-reviewed).**
  - More than 210,000 clips of 250 isolated signs from **47 consenting Deaf adult native signers**, recorded with Pixel 4A selfie cameras in varied settings.
  - It is the largest isolated set by example count and the first focused on one-handed smartphone signing.
  - An LSTM baseline reached 84.2% test accuracy.
  - Collection was run through DPAN, the Deaf Professional Arts Network, which shipped phones to participants. That is managed collection, not open crowdsourcing.
  - Sources: [NeurIPS 2023](https://proceedings.neurips.cc/paper_files/paper/2023/hash/00dada608b8db212ea7d9d92b24c68de-Abstract.html); [supplement](https://papers.neurips.cc/paper_files/paper/2023/file/00dada608b8db212ea7d9d92b24c68de-Supplemental-Datasets_and_Benchmarks.pdf)
- **Annotation cost.**
  - DGS Corpus Project: one minute of signing took one to several hundred minutes to transcribe — [WMT-SLT 2022 FAQ](https://sites.google.com/view/wmt-slt-v2022/faq)
  - DGS Corpus: 90.9 h annotated, with 50 h of video, annotation and translation openly available in iLex, ELAN and SRT formats — [DGS Corpus compendium](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dgscorpus.html)
  - Segmentation alone takes about 60x real time for a skilled annotator (Polish SL), and ID-glossing takes 3-4 h per minute of video — [SignLang 2022.signlang-1.31](https://aclweb.org/anthology/2022.signlang-1.31.pdf)
  - CSLR glossing at the How2Sign or PHOENIX level is estimated at about 40-80 minutes per minute (preprint estimate) — [RAIDAL arXiv 2609.06843](https://arxiv.org/pdf/2609.06843)
- **Privacy and anonymization.**
  - Pose is not anonymous. On Swiss German SL, a classifier identified persons from pose estimates alone (F1 0.31) and recognised language level (F1 0.64). The authors call for reconsidering whether pose counts as anonymization — [UZH abstract](https://iict.uzh.ch/dam/jcr:7ca446cb-8c7d-45e7-be31-76774803b91b/Abstract_Paper_Person%20Identification%20from%20Pose%20Estimates.pdf)
  - Lee, Glasser et al. (ASSETS 2021) evaluated DHH users' reactions to an anonymization prototype with and without the torso visible — [NSF PAR](https://par.nsf.gov/biblio/10335221)
  - A MediaPipe face-mesh avatar mask and a full-body silhouette filter were tested with 10 Deaf signers — [BU OpenBU](https://open.bu.edu/items/8b9d7ea6-73b0-4593-a32a-39a22a42695d)
  - DiffSLVA uses diffusion plus ControlNet (HED edges) for zero-shot anonymization of sign video. It notes that Deaf signers want anonymization that preserves linguistic content and that earlier attempts had limited success — [NSF PAR](https://par.nsf.gov/biblio/10475964-diffslva-harnessing-diffusion-models-sign-language-video-anonymization)
- **Similar-sign labeling (Logos).** Explicitly labelling groups of visually similar signs improved the pretrained model — [arXiv 2505.10481](https://arxiv.org/html/2505.10481v2)

### Inferences
- A phone-based app with paid Deaf contributors and a fixed vocabulary is the proven pattern (PopSign, ASL Citizen). Shipping or lending phones through a Deaf organisation, as DPAN did, is a validated way to reach signers who lack good devices. In Uzbekistan the analogous partner would be the national Deaf society. This is an inference, not studied for Uzbekistan.
- Budget for isolated clips, which need no segmentation, before continuous data. At 40-300x real time, even 10 hours of glossed continuous UzSL is a large annotation project, roughly 400-3,000 annotator-hours by these ratios (arithmetic inference).
- Consent forms must not promise anonymity just because data is "pose-only". Treat pose as personal data.

### Gaps
- No primary source was found for the Sign Language Wiki project, for SignStudio, or for ASL Citizen contributor pay and consent templates.
- No evidence-based rule for how many signers or repetitions per sign are needed. Datasets range from 43 to 194 signers, but no ablation was retrieved.

## 4. Evaluation methods and metrics criticism

### Takeaway
The field agrees that automatic metrics (BLEU, WER) are weak proxies. WMT-SLT 2022/2023 established the first public human-evaluation protocols and scores for sign translation, using Appraise and metric-to-human correlation scripts. Gloss-based pipelines are criticised because glosses are not a writing system Deaf people use.

### Cited Findings
- **Müller, Jiang, Moryossef, Rios and Ebling (ACL 2023 short, peer-reviewed).**
  - Gloss-translation papers rarely discuss gloss and dataset limitations, and there is no shared evaluation standard.
  - They recommend awareness of gloss limits, realistic datasets, stronger baselines and more convincing evaluation.
  - Glosses are an annotation tool that Deaf signers do not read or write in daily life.
  - Sources: [arXiv 2211.15464](https://arxiv.org/abs/2211.15464); [ACL 2023.acl-short.60](https://preview.aclanthology.org/fix_video/2023.acl-short.60.pdf)
- **WMT-SLT22 (first shared task).** It introduced new human-evaluation protocols and software, and released "the first publicly available set of system outputs and human evaluation scores" for SLT — [ACL 2022.wmt-1.71](https://aclanthology.org/2022.wmt-1.71)
- **WMT-SLT23.**
  - Tracks were DSGS-to-German, German-to-DSGS, French-to-LSF-CH and Italian-to-LIS-CH. Only four teams took part, all on DSGS-to-German.
  - It ran both automatic evaluation (BLEU, chrF++, BLEURT with bootstrap confidence intervals) and human evaluation, with rankings computed in Appraise.
  - The repository includes Pearson and Spearman correlations between the metrics and human scores.
  - Sources: [ACL 2023.wmt-1.4](https://aclanthology.org/2023.wmt-1.4); [GitHub WMT-SLT/wmt-slt23](https://github.com/WMT-SLT/wmt-slt23)
- **FLEURS-ASL (Tanzer, 2024, preprint).** Adds ASL to a massively multilingual evaluation suite, and the human baseline reaches 13.0 BLEU. **Human interpreters score only about 13 BLEU**, which shows how badly BLEU under-rates valid sign translations — [arXiv 2408.13585](https://arxiv.org/pdf/2408.13585)
- **SignGPT (2026 preprint).** The authors say their metrics are only diagnostic proxies, because the evaluator is itself a SignGPT model — [arXiv 2609.21709](https://arxiv.org/pdf/2609.21709)
- **Avatar evaluation method.** Focus groups plus online studies are the standard acceptance methods (Heloir and Kipp) — [SLTAT 2011](https://vhg.cmp.uea.ac.uk/demo/SLTAT2011Dundee/5.html). The TACCESS regression study shows that results must be stratified by participant background — [review](https://a11y-paradise.onrender.com/reviews/69a48d565627207a189028f8). A Mada Center article reviews evaluation models for signing avatars — [Nafath PDF](https://nafath.mada.org.qa/wp-content/uploads/2022/05/5-Toward-an-evaluation-model-for-signing-avatars.pdf)

### Inferences
- For UzSL, evaluation should be **Deaf-rated**: native UzSL signers score meaning adequacy on a 0-100 or Likert scale (Appraise-style), plus task-success measures such as "did the user complete the medical intake correctly". BLEU should be secondary.
- Report recognition results signer-independently. YouTube-SL-25 itself flags train/test signer overlap as a source of misleading numbers.

### Gaps
- The WMT-SLT23 human-evaluation numbers (system scores vs the human reference) could not be extracted, because the PDF text was compressed and unreadable in this session. From memory, the systems scored far below human references, but **this is unverified**; read section 7 of the paper or the repository's human-score files.
- No standardised, validated Deaf-rated questionnaire for sign MT was found.

## 5. Venues, communities and labs

### Takeaway
The main venues are the CVPR SLRTP workshop (3rd edition in 2025, with a production challenge), WMT-SLT (2022, 2023), the LREC Sign Language workshop (sign-lang.uni-hamburg.de proceedings), the ACL/EMNLP main tracks, and ASSETS, CHI and TACCESS for user studies. Labs with RSL- or Turkic-relevant output are Sber/SaluteDevices (ai-forever: Slovo, Bukva, Logos), Nazarbayev University (K-RSL, FluentSigners-50) and Boğaziçi (AUTSL transfer).

### Cited Findings
- SLRTP 2025 was the 3rd Workshop on Sign Language Recognition, Translation and Production, at CVPR on 12 June 2025 — [CVPR workshop](https://cvpr.thecvf.com/virtual/2025/workshop/32296); [open access](https://openaccess.thecvf.com/CVPR2025_workshops/SLRTP)
- WMT-SLT is organised by UZH (Müller, Ebling), Surrey (Bowden, Camgöz), DFKI (Avramidis), Google (Koller), Moryossef and others, per the author metadata of the WMT-SLT23 findings PDF — [ACL 2023.wmt-1.4](https://aclanthology.org/2023.wmt-1.4)
- Surrey (Wong, Camgöz, Bowden) produced Sign2GPT (ICLR 2024) — [ICLR](https://proceedings.iclr.cc/paper_files/paper/2024/hash/4ebba705ffdee81e0a638c99fe066ce2-Abstract-Conference.html)
- Hamburg hosts the DGS-Korpus and the LREC sign-language workshop proceedings archive — [DGS Corpus](https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dgscorpus.html)
- SaluteDevices / ai-forever (Sber) produced Logos at EMNLP 2025 — [arXiv 2505.10481](https://arxiv.org/html/2505.10481v2)
- Gallaudet's VL2 centre (Quandt) runs the avatar-attitude studies — [Gallaudet VL2](https://vl2.gallaudet.edu/center-papers/596)

### Inferences
- The most valuable collaborators for UzSL are ai-forever/Sber (RSL pretraining assets) and the Nazarbayev University K-RSL team (Sandygulova, Kimmelman: the closest Central Asian, Russian-based signing). Publishing an UzSL dataset paper at the LREC Sign Language workshop is the natural entry point.

### Gaps
- Dates for SLRTP or WMT-SLT editions in 2026 were not verified.
- No Radboud, ISSAI-specific or Gallaudet AI-lab outputs were retrieved this session.

## 6. Central Asian and Turkic sign language research

### Takeaway
Kazakh-Russian SL has peer-reviewed datasets: K-RSL at CoNLL 2020 and FluentSigners-50 in PLOS ONE 2022. Turkish SL has AUTSL and BosphorusSign22k plus a transfer study. **No peer-reviewed, publicly released Uzbek SL dataset was found.** UzSL work consists of local-journal ML papers of unclear quality.

### Cited Findings
- **FluentSigners-50 (Mukushev, ..., Kimmelman, Sandygulova; PLOS ONE 2022, peer-reviewed).** 173 sentences from 50 K-RSL signers give 43,250 videos. It is a signer-independent CSLR/CSLT benchmark, with baselines from Stochastic CSLR and TSPNet. It is on Zenodo — [PLOS ONE PDF](https://bora.uib.no/bora-xmlui/bitstream/11250/3037546/1/journal.pone.0273649.pdf); [Zenodo](https://zenodo.org/record/6043738)
- **K-RSL corpus (CoNLL 2020).** 10 signers, 28,250 continuous sentences and a 600-sign vocabulary, focused on non-manual markers that distinguish similar signs or sentences — [CoNLL 2020.conll-1.51](https://preview.aclanthology.org/moar-dois/2020.conll-1.51.pdf)
- **AUTSL.** 226 signs, 43 signers and 38,336 clips with RGB, depth and skeleton. The best signer-independent baseline at release was 62.02% — [arXiv 2008.00932](https://arxiv.org/abs/2008.00932). AUTSL to BSign22k transfer — [arXiv 2403.14534](https://arxiv.org/html/2403.14534v2)
- **Uzbek SL.**
  - Local-journal articles describe ML classifiers for UzSL images and videos and review DTW and CRF methods. Dataset size and availability are not stated — [inlibrary.uz 34006](https://inlibrary.uz/index.php/eijmrms/article/view/34006); [inlibrary.uz 25286](https://inlibrary.uz/index.php/computer-engineering/article/view/25286)
  - Kayumov and Kayumova (2023) is cited in that reference list, but its full text was not accessed — [inlibrary.uz 34006](https://inlibrary.uz/index.php/eijmrms/article/view/34006)
  - The withdrawn 2026 survey describes UzSL work as early-stage lexical documentation — [arXiv 2605.12096](https://arxiv.org/pdf/2605.12096)

### Inferences
- An open, consented UzSL isolated-sign dataset with a signer-independent split would be a first for the language and publishable. That is a credibility and partnership asset for the platform, beyond its use for training.

### Gaps
- No Kyrgyz SL, Tajik SL or Turkmen SL computational work was found.
- The licenses of FluentSigners-50 and K-RSL were not verified.

## 7. LLMs and multimodal LLMs for sign

### Takeaway
Sign-encoder-plus-LLM pipelines such as Sign2GPT help gloss-free SLT on benchmarks. **General multimodal LLMs (GPT-4o, Gemini, Claude) do not understand sign video**: FLEURS-ASL found near-zero BLEU, and 2025-2026 benchmarks show large gaps from humans. Use LLMs on the text side (fluency, simplification, gloss-to-text) and do not rely on them to read signing.

### Cited Findings
- **FLEURS-ASL (2024 preprint).** Prompted ASL-to-English, GPT-4o scored 0.1 BLEU, Claude 3 Opus 0.4 and Gemini 1.5 Pro 0.2, against 13.0 for humans. The authors conclude that none of the models "demonstrate any meaningful understanding of ASL" — [arXiv 2408.13585](https://arxiv.org/pdf/2408.13585)
- **CNSL-bench (Chinese National SL; ACL 2026 per a notes site; arXiv 2604.22367).** It tests 21 multimodal LLMs and finds a strong modality gap. GPT-5 scored about 90% on text, 67% on images and 57% on video, against about 97% for humans. GPT-4o scored about 28-31% on video. Figures come from snippets, so verify them — [arXiv 2604.22367](https://arxiv.org/pdf/2604.22367); [papernotes](https://en.papernotes.org/ACL2026/multimodal_vlm/cnsl-bench_benchmarking_the_sign_language_understanding_capabilities_of_mllms_on/)
- **Visual Iconicity Challenge (NGT, arXiv 2510.08482).** 13 VLMs were tested. The best (Gemini 2.5 Pro, GPT-5) scored about 17-18%, against 59% for a Deaf signer and 42% for hearing non-experts. Accuracy rose to about 42-44% in a 10-choice format — [Emergent Mind](https://www.emergentmind.com/papers/2510.08482)
- **"Sign Language Recognition in the Age of LLMs" (CVPR 2026).** Zero-shot WLASL300 isolated recognition reached only about 30% precision for GPT-5, even with an extra yes/no verification step (snippet-level) — [papernotes](https://en.papernotes.org/CVPR2026/human_understanding/sign_language_recognition_llms/)
- **Sign2GPT (Wong, Camgöz and Bowden; ICLR 2024).**
  - It links a pretrained vision encoder and LLM through lightweight adapters, and pretrains the sign encoder on pseudo-glosses extracted from text, so no gloss annotation is needed.
  - Aggregators list BLEU-4 of about 22.5 on PHOENIX-2014T and 15.4 on CSL-Daily (secondary source).
  - Sources: [ICLR 2024](https://proceedings.iclr.cc/paper_files/paper/2024/hash/4ebba705ffdee81e0a638c99fe066ce2-Abstract-Conference.html); [arXiv 2405.04164](https://arxiv.org/pdf/2405.04164v1.pdf)
- **SignGPT (2026 preprint).** A gloss-free sign-to-text and text-to-sign system, with a frozen LLaMA-3.2-1B-Instruct as mediator for sign-to-sign interaction. The authors caution that its metrics are only proxies — [arXiv 2609.21709](https://arxiv.org/pdf/2609.21709)
- **SLRTP 2025 production winner.** It used retrieval plus a pretrained language model — [arXiv 2508.06951](https://arxiv.org/abs/2508.06951)

### Inferences
- An app feature that sends a camera clip to GPT or Gemini and returns a translation would fail. The evidence is consistent across ASL, NGT and Chinese SL, and UzSL is far less represented in training data, so performance would likely be worse. This is an inference.
- A realistic LLM role is: a recognition model outputs UzSL sign IDs or glosses, an LLM turns them into fluent Uzbek or Russian with a confidence display, and the user confirms. Also LLM simplification of hearing-side text for low-literacy Deaf readers.

### Gaps
- SignLLM (multilingual production) design and evaluation were not retrieved.
- No study evaluated an LLM gloss-to-text step with Deaf raters.
- No 2025-2026 evaluation of Gemini or GPT on RSL or any Turkic or Central Asian sign language was found.
