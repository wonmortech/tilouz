# 07. Manbalar: yagona indeks

> **Qisqacha**
> - Papkadagi barcha `.md` hujjatlardan (asosiy hujjatlar, `08_Brend`, `99_Ilovalar` xom yozuvlari va oldingi hisobot) **1252 ta noyob URL** avtomatik ajratib olindi; ular **698 ta domenga** tegishli.
> - URL'lar 8 toifaga bo'lingan (davlat/qonun, ilmiy, ochiq kod, ilova do'konlari, OAV, tashkilotlar, YouTube/Telegram, boshqa); har URL yonida uni keltirgan hujjatlar kodi.
> - Toifa domen bo'yicha avtomatik belgilangan (**baho**: chegaradagi domenlar - masalan, universitet sahifasi yoki davlat kompaniyasi - boshqa toifaga tushgan bo'lishi mumkin).
> - Takrorlar: oxiridagi `/` va harf registri hisobga olinmay birlashtirilgan; ASCII bo'lmagan belgilar foiz-kodlangan.

Sana: 2026-11-15. Skript: `extract` - `io.open(utf-8)` bilan har `.md` faylni o'qiydi, `https?://` URL'larni oladi, oxiridagi tinish belgilarini olib tashlaydi, takrorlarni birlashtiradi. `.html`, `.svg`, `.py` fayllar ko'rilmagan.

---

## 1. Jami

| Ko'rsatkich | Qiymat |
|---|---|
| Ko'rilgan hujjatlar | 44 |
| Noyob URL | **1252** |
| Noyob domen | 698 |

| Toifa | URL soni | Ulush |
|---|---|---|
| [Davlat va qonun](#c-gov) | 122 | 9.7% |
| [Ilmiy maqolalar va repozitoriylar](#c-sci) | 109 | 8.7% |
| [GitHub, ochiq kod va modellar](#c-code) | 129 | 10.3% |
| [Ilova do'konlari](#c-store) | 40 | 3.2% |
| [OAV, bloglar va biznes nashrlari](#c-media) | 171 | 13.7% |
| [Tashkilotlar, NNT, xalqaro idoralar va universitetlar](#c-org) | 140 | 11.2% |
| [YouTube va Telegram](#c-yt) | 25 | 2.0% |
| [Boshqa (kompaniya saytlari, mahsulot sahifalari, hujjatlar)](#c-other) | 516 | 41.2% |

## 2. Hujjat kodlari va har hujjatdagi URL soni

| Kod | Hujjat | Noyob URL |
|---|---|---|
| `00` | 00_README.md | 3 |
| `01` | 01_Ijroiya_xulosasi.md | 30 |
| `02` | 02_Muammo_va_auditoriya.md | 80 |
| `03a` | 03_Raqobatchilar/03a_Ozbekiston.md | 58 |
| `03b` | 03_Raqobatchilar/03b_Rossiya_va_MDH.md | 138 |
| `03c` | 03_Raqobatchilar/03c_Yevropa.md | 208 |
| `03d` | 03_Raqobatchilar/03d_Amerika.md | 213 |
| `03e` | 03_Raqobatchilar/03e_Sharqiy_Osiyo_va_Okeaniya.md | 63 |
| `03f` | 03_Raqobatchilar/03f_Janubiy_Osiyo_Yaqin_Sharq_Afrika.md | 124 |
| `03g` | 03_Raqobatchilar/03g_Global_funksiyalar_matritsasi.md | 173 |
| `04a` | 04_Texnologiya/04a_Ilmiy_tadqiqotlar.md | 157 |
| `04b` | 04_Texnologiya/04b_Ochiq_kod_va_klon_tahlili.md | 105 |
| `04c` | 04_Texnologiya/04c_Nutq_subtitr_va_bigtech.md | 65 |
| `04d` | 04_Texnologiya/04d_Datasetlar_va_modellar.md | 116 |
| `05` | 05_Huquq_moliya_va_notijorat_model.md | 110 |
| `06a` | 06_Platforma_rejasi/06a_Mahsulot_konsepsiyasi_va_funksiyalar.md | 110 |
| `06b` | 06_Platforma_rejasi/06b_Texnik_arxitektura.md | 56 |
| `06c` | 06_Platforma_rejasi/06c_Imo_ishora_dataset_strategiyasi.md | 57 |
| `06d` | 06_Platforma_rejasi/06d_Boshqaruv_jamoa_va_hamkorlar.md | 39 |
| `06e` | 06_Platforma_rejasi/06e_Budjet_va_moliya_rejasi.md | 39 |
| `06f` | 06_Platforma_rejasi/06f_Roadmap_24_oy.md | 31 |
| `06g` | 06_Platforma_rejasi/06g_Xavflar_va_ochiq_savollar.md | 44 |
| `08` | 08_Brend/08_Brend_tadqiqoti.md | 29 |
| `TILO` | 08_Brend/tilo_logo/TILO_LOGO.md | 0 |
| `OH` | 99_Ilovalar/oldingi_hisobot/Karlar uchun muloqot platformasi.md | 125 |
| `X1:browser_youtube_google_findings` | 99_Ilovalar/xom_tadqiqot_yozuvlari/1_birinchi_tadqiqot/browser_youtube_google_findings.md | 24 |
| `X1:deaf_centered_product_ux` | 99_Ilovalar/xom_tadqiqot_yozuvlari/1_birinchi_tadqiqot/deaf_centered_product_ux.md | 82 |
| `X1:global_apps_and_business_models` | 99_Ilovalar/xom_tadqiqot_yozuvlari/1_birinchi_tadqiqot/global_apps_and_business_models.md | 79 |
| `X1:open_source_tech_stack` | 99_Ilovalar/xom_tadqiqot_yozuvlari/1_birinchi_tadqiqot/open_source_tech_stack.md | 56 |
| `X1:russia_cis_ecosystem` | 99_Ilovalar/xom_tadqiqot_yozuvlari/1_birinchi_tadqiqot/russia_cis_ecosystem.md | 54 |
| `X1:uzbekistan_landscape` | 99_Ilovalar/xom_tadqiqot_yozuvlari/1_birinchi_tadqiqot/uzbekistan_landscape.md | 73 |
| `X2:academic_research_synthesis` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/academic_research_synthesis.md | 65 |
| `X2:global_feature_matrix` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/global_feature_matrix.md | 99 |
| `X2:hands_on_repo_audit` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/hands_on_repo_audit.md | 52 |
| `X2:nonprofit_models_funding` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/nonprofit_models_funding.md | 68 |
| `X2:open_source_clonable` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/open_source_clonable.md | 64 |
| `X2:region_americas` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/region_americas.md | 86 |
| `X2:region_east_asia_oceania` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/region_east_asia_oceania.md | 58 |
| `X2:region_europe` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/region_europe.md | 118 |
| `X2:region_south_asia_mena_africa` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/region_south_asia_mena_africa.md | 106 |
| `X2:russia_cis_competitors` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/russia_cis_competitors.md | 91 |
| `X2:uzbek_speech_bigtech_support` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/uzbek_speech_bigtech_support.md | 27 |
| `X2:uzbekistan_legal_costs` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/uzbekistan_legal_costs.md | 45 |
| `X2:uzsl_linguistics_education_community` | 99_Ilovalar/xom_tadqiqot_yozuvlari/2_raqobat_va_ochiq_kod/uzsl_linguistics_education_community.md | 39 |

`X1:` = `99_Ilovalar/xom_tadqiqot_yozuvlari/1_birinchi_tadqiqot/`, `X2:` = `.../2_raqobat_va_ochiq_kod/`, `OH` = oldingi hisobot, `TILO` = `08_Brend/tilo_logo/TILO_LOGO.md`.

## 3. Eng ko'p keltirilgan 30 URL

| # | URL | Hujjatlar soni |
|---|---|---|
| 1 | https://wfdeaf.org/wp-content/uploads/WFD-and-WASLI-Statement-on-Avatar-FINAL-14032018-Updated-14042018.pdf | 12 |
| 2 | https://www.gazeta.uz/oz/2025/09/30/sign-language/ | 12 |
| 3 | https://github.com/ai-forever/logos | 11 |
| 4 | https://imo-ishora.uz/ | 10 |
| 5 | https://lex.uz/docs/4396419 | 10 |
| 6 | https://www.youtube.com/watch?v=Z6jNuB4CBVY | 10 |
| 7 | https://www.youtube.com/watch?v=zGfIHZnmmHw | 10 |
| 8 | https://github.com/sign-language-processing/spoken-to-signed-translation | 9 |
| 9 | https://sharoitplus.uz/category/loyihalar/ | 9 |
| 10 | https://www.norma.uz/oz/qonunchilikda_yangi/uzbek_imo-ishora_tili_va_brayl_alifbosini_rivojlantirish_buyicha_chora-tadbirlar_belgilandi | 9 |
| 11 | https://aisha.group/en/pricing | 8 |
| 12 | https://arxiv.org/html/2505.10481v2 | 8 |
| 13 | https://github.com/ai-forever/slovo | 8 |
| 14 | https://mobile-review.com/all/?p=259570 | 8 |
| 15 | https://muxlisa.uz/en | 8 |
| 16 | https://play.google.com/store/apps/details?id=com.ihma.surdoai | 8 |
| 17 | https://www.gazeta.uz/ru/2025/09/28/sign-language/ | 8 |
| 18 | https://www.youtube.com/playlist?list=PLkREkayoYCyIbxC-s0cOABSwdhkdbcbgz | 8 |
| 19 | https://anhor.uz/ru/news/uzbekistan-criminalizes-illegal-ai-use-of-personal-data | 7 |
| 20 | https://anhor.uz/uzl/news/1-iyundan-nogironligi-bo-lgan-shaxslarni-ishga-qabul-qilgan-tadbirkor/ | 7 |
| 21 | https://arxiv.org/html/2403.02563v1 | 7 |
| 22 | https://core.telegram.org/bots/webapps | 7 |
| 23 | https://dilmurad.me/expert/uzbek-sign-language-usl-to-be-or-not-to-be/ | 7 |
| 24 | https://eena.org/document/real-time-text-in-ireland | 7 |
| 25 | https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf | 7 |
| 26 | https://github.com/jitsi/jitsi-meet | 7 |
| 27 | https://kun.uz/en/news/2025/03/25/uzbekistans-unified-112-emergency-system-now-fully-operational-nationwide | 7 |
| 28 | https://lex.uz/acts/-5049511 | 7 |
| 29 | https://mia.police.ge/en/112-gkhedavt-sms-da-video-zaris-servisi-mkholod-kru-da-smenadaqveitebuli-pirebistvis/7938?print=1 | 7 |
| 30 | https://old.hook.report/2020/11/bizsiz-biz-haqimizda-hech-narsa/ | 7 |

## 4. Toifalar bo'yicha to'liq ro'yxat

<a id="c-gov"></a>

### 4.1 Davlat va qonun (122 URL)

Domenlar (67): fcc.gov (8), cordis.europa.eu (6), crtc.gc.ca (6), lex.uz (6), docs.fcc.gov (5), it-park.uz (4), mintic.gov.co (4), soumu.go.jp (4), bundesnetzagentur.de (3), gov.scot (3), kela.fi (3), pravo.by (3), sfr.gov.ru (3), sosial.gov.az (3), 112.ie (2), accesshub.gov.au (2), accessible-eu-centre.ec.europa.eu (2), aile.gov.tr (2), eeas.europa.eu (2), gov.uz (2), legislation.gov.au (2), vukuzenzele.gov.za (2), 110.go.kr (1), al.mt.gov.br (1), api-portal.gov.uz (1) ...

| URL | Keltirgan hujjatlar |
|---|---|
| https://fcc.gov/ace | `03d`, `04b`, `X2:open_source_clonable` |
| https://www.fcc.gov/dvc | `03d`, `04b`, `X2:open_source_clonable` |
| https://www.fcc.gov/ipcts | `03d`, `X2:region_americas` |
| https://www.fcc.gov/node/267236 | `03d`, `X2:region_americas` |
| https://www.fcc.gov/node/267653 | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://www.fcc.gov/vrs-speed-of-answer | `03d`, `X2:region_americas` |
| https://www.fcc.gov/what-you-need-know-about-text-911 | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.fcc.gov:443/hamilton-relay-certified-provide-ip-cts-using-automatic-speech-recognition | `03d`, `X2:region_americas` |
| https://cordis.europa.eu/article/id/421525-animated-figure-translates-digital-content-into-sign-language | `03c`, `X2:region_europe` |
| https://cordis.europa.eu/docs/projects/cnect/5/231135/080/deliverables/001-DICTASIGNDeliverableD33Ares2012696081.pdf | `03c`, `04b`, `X2:open_source_clonable` |
| https://cordis.europa.eu/project/id/101016982/reporting | `03c`, `04d`, `X2:region_europe` |
| https://cordis.europa.eu/project/id/101017255 | `03c`, `X2:region_europe` |
| https://cordis.europa.eu/project/id/762021 | `03c`, `04d`, `X2:region_europe` |
| https://www.cordis.europa.eu/project/id/778421 | `03c`, `X2:region_europe` |
| https://crtc.gc.ca/eng/archive/2017/2017-437.htm | `03d`, `05`, `X2:region_americas` |
| https://crtc.gc.ca/eng/archive/2024/2024-281.htm | `03d`, `X2:region_americas` |
| https://crtc.gc.ca/eng/archive/2025/2025-54.htm | `03d`, `05`, `X2:region_americas` |
| https://crtc.gc.ca/eng/archive/2026/2026-72.htm | `03d`, `X2:region_americas` |
| https://crtc.gc.ca/eng/phone/acces/rela/pllsrrela/mod.htm | `03d`, `X2:region_americas` |
| https://www.crtc.gc.ca/eng/archive/2021/2021-102.pdf | `03d`, `05`, `06e`, `X2:region_americas` |
| https://lex.uz/acts/-5049511 | `01`, `02`, `05`, `06e`, `06f`, `OH`, `X1:uzbekistan_landscape` |
| https://lex.uz/docs/-1866997 | `02`, `X1:uzbekistan_landscape` |
| https://lex.uz/docs/-2534269 | `02`, `X2:uzsl_linguistics_education_community` |
| https://lex.uz/docs/-5049511?ONDATE=09.09.2024 | `02`, `X1:uzbekistan_landscape` |
| https://lex.uz/docs/4396419 | `01`, `02`, `05`, `06a`, `06b`, `06c`, `06e`, `06f`, `06g`, `X2:uzbekistan_legal_costs` |
| https://lex.uz/mact/-6248467 | `02`, `X2:uzbekistan_legal_costs` |
| https://docs.fcc.gov/public/attachments/DA-24-1266A1_Rcd.pdf | `03d`, `X2:region_americas` |
| https://docs.fcc.gov/public/attachments/DA-25-571A1.pdf | `03d`, `03g`, `X1:global_apps_and_business_models`, `X2:region_americas` |
| https://docs.fcc.gov/public/attachments/DA-25-578A1.docx | `01`, `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://docs.fcc.gov/public/attachments/DA-26-59A1.pdf | `03c`, `03d`, `X2:region_americas` |
| https://docs.fcc.gov/public/attachments/DA-26-646A1.pdf | `03d`, `03g`, `05`, `06e`, `X1:global_apps_and_business_models`, `X2:region_americas` |
| https://it-park.uz/en/itpark/news/the-winners-of-the-voice-ai-challenge-uzbekistan-hackathon | `X1:uzbekistan_landscape` |
| https://it-park.uz/uz/itpark/news/it-park-uzbekistan-rezidentlari-uchun-yangi-qoidalar-joriy-etilmoqda | `05`, `06g`, `X2:uzbekistan_legal_costs` |
| https://www.it-park.uz/en/itpark/news/in-uzbekistan-mitc-it-park-and-undp-organize-hackathon-called-voice-ai-challenge-uzbekistan | `03a`, `04c`, `06d`, `OH`, `X1:uzbekistan_landscape` |
| https://www.it-park.uz/uz/itpark/news/o-zbekiston-it-sohasidagi-startaplar-va-xorijiy-investorlar-uchun-soliq-imtiyozlari | `01`, `05`, `06e`, `06f`, `X2:uzbekistan_legal_costs` |
| https://mintic.gov.co/micrositios/empalme-gobierno/2026/918/articles-439421_respuestas_00003.pdf | `03d`, `X2:region_americas` |
| https://mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/399452:Este-ano-el-Centro-de-Relevo-gestiono-516-523-llamadas-relevadas-para-la-pobla | `01` |
| https://mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/399452:Este-ano-el-Centro-de-Relevo-gestiono-516-523-llamadas-relevadas-para-la-poblacion-con-discapacidad-auditiva | `03d`, `05`, `X2:region_americas` |
| https://www.mintic.gov.co/portal/715/w3-article-405731.html | `03d`, `X2:region_americas` |
| https://www.soumu.go.jp/info-accessibility-portal/telecomrelay/seminar/2025/ | `03e`, `X2:region_east_asia_oceania` |
| https://www.soumu.go.jp/main_content/000509122.pdf | `03e`, `X2:region_east_asia_oceania` |
| https://www.soumu.go.jp/main_content/000843755.pdf | `03e`, `X2:region_east_asia_oceania` |
| https://www.soumu.go.jp/main_content/001038069.pdf | `03e`, `X2:region_east_asia_oceania` |
| https://bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Unternehmenspflichten/VermittlungsdienstfuerGehoerlose/start.html | `03c`, `X2:region_europe` |
| https://bundesnetzagentur.de/DE/Vportal/TK/InternetTelefon/Vermittlungsdienst/start.html | `03c`, `X2:region_europe` |
| https://www.bundesnetzagentur.de/1052216 | `03c`, `05`, `X2:region_europe` |
| https://gov.scot/publications/foi-19-01345 | `03c`, `X2:nonprofit_models_funding` |
| https://www.gov.scot/publications/foi-202500459975/ | `03c`, `06e`, `X2:nonprofit_models_funding` |
| https://www.gov.scot/Topics/People/Equality/remit/projects | `03c`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://www.kela.fi/ajankohtaista/kela-tilaa-uuden-valitysjarjestelman-vammaisten-tulkkauspalveluun-twoday-oy-lta | `03c`, `X2:region_europe` |
| https://www.kela.fi/ajankohtaista/vammaisten-tulkkauspalvelukeskuksen-etapalvelu-uudistuu-jatkossa-kirjautuminen-tapahtuu-vahvasti-tunnistautuneena | `03c`, `X2:region_europe` |
| https://www.kela.fi/ajankohtaista/vammaisten-tulkkauspalvelun-kilpailutus-siirtyy | `03c`, `X2:region_europe` |
| https://pravo.by/novosti/obshchestvenno-politicheskie-i-v-oblasti-prava/2016/september/21065/ | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://pravo.by/novosti/obshchestvenno-politicheskie-i-v-oblasti-prava/2025/december/91506/ | `03b`, `X2:russia_cis_competitors` |
| https://www.pravo.by/novosti/obshchestvenno-politicheskie-i-v-oblasti-prava/2025/december/91329/ | `03b`, `X2:russia_cis_competitors` |
| https://sfr.gov.ru/branches/amur/news/~2026/09/24/284968 | `03b`, `06a`, `OH`, `X1:russia_cis_ecosystem`, `X2:russia_cis_competitors` |
| https://sfr.gov.ru/branches/omsk/news~2023/12/19/258395 | `03b`, `X2:russia_cis_competitors` |
| https://sfr.gov.ru/branches/yaroslavl/news/~2026/09/25/285016 | `02`, `03b`, `05`, `06e`, `OH`, `X1:russia_cis_ecosystem` |
| https://sosial.gov.az/en/media/news/for-the-first-time-in-our-country-an-online-sign-language-interpretation-service-based-on-video-communication-has-been-launched-8300 | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://sosial.gov.az/en/media/news/ministrys-online-sign-language-interpretation-service-recognised-as-best-practice-by-the-world-health-organization-8794 | `03b`, `X2:russia_cis_competitors` |
| https://sosial.gov.az/en/media/news/nearly-1000-people-have-benefited-from-the-let-us-be-your-voice-online-sign-language-interpretation-service-9584 | `03b`, `06a`, `06f`, `X2:russia_cis_competitors` |
| https://112.ie/realtimetext/ | `03c`, `03g`, `06f`, `X1:global_apps_and_business_models`, `X2:global_feature_matrix` |
| https://112.ie/sending-a-text-to-112/ | `03c`, `03g`, `X2:global_feature_matrix` |
| https://www.accesshub.gov.au/sites/default/files/documents/2025-07-monthly-performance-report-july.pdf | `03e`, `05`, `06d`, `06f`, `X2:region_east_asia_oceania` |
| https://www.accesshub.gov.au/sites/default/files/documents/national-relay-service-monthly-performance-report-april-2026.pdf | `03e`, `X2:region_east_asia_oceania` |
| https://accessible-eu-centre.ec.europa.eu/estonias-remote-sign-language-interpretation-app-kaugtolke-rakendus_en | `03c`, `X2:region_europe` |
| https://accessible-eu-centre.ec.europa.eu/kontakt-online-sign-language-interpretation-service-hungary_en | `03c`, `X2:region_europe` |
| https://aile.gov.tr/haberler/bakanligin-guncel-turk-isaret-dili-sozlugune-150-ulkeden-4-milyondan-fazla-erisim-saglandi/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://aile.gov.tr/manisa/haberler/ailem-isitme-engelliler-engelsiz-iletisim-merkezi-268-bin-719-cagriya-ceviri-destegi-sagladi/ | `03c`, `X2:region_europe` |
| https://eeas.europa.eu/delegations/uzbekistan/o%CA%BBzbekistonda-karlar-jamiyati-uchun-korrupsiyaga-qarshi-kurashish-bo%CA%BByicha-inklyuziv-onlayn_uz | `05`, `X2:nonprofit_models_funding` |
| https://www.eeas.europa.eu/delegations/uzbekistan/fuqarolik-jamiyati-institutlari-o%E2%80%98rtasida-korrupsiyaga-qarshi-kurashishga-doir-tashabbuslarni-amalga_uz | `05`, `X2:uzbekistan_legal_costs` |
| https://gov.uz/oz/advice/720/document/3119 | `02`, `06d`, `OH`, `X1:uzbekistan_landscape` |
| https://gov.uz/oz/bv/news/view/182984 | `01`, `06e`, `X2:uzbekistan_legal_costs` |
| https://legislation.gov.au/F2025L00181/asmade | `03e`, `X2:region_east_asia_oceania` |
| https://www.legislation.gov.au/F2025L01137/asmade/2025-09-23/es/original/pdf | `03e`, `05`, `X2:region_east_asia_oceania` |
| https://www.vukuzenzele.gov.za/book/export/html/6883 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.vukuzenzele.gov.za/sa-launches-bilingual-dictionary-deaf-community | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.110.go.kr/consult/cam.do | `03e`, `X2:region_east_asia_oceania` |
| https://www.al.mt.gov.br/storage/webdisco/cp/20250217111013143100.pdf | `03d`, `X2:region_americas` |
| https://api-portal.gov.uz/uploads/7/2026/02/03/4484029c-d89c-bd0f-6a30-0d8aca7b8ad4_media_.pdf | `X2:uzbekistan_legal_costs` |
| https://www.arcep.fr/fileadmin/user_upload/observatoire/indicateurs-accessibilite/t4-2024/indicateurs-accessibilite-T4-2024_avril2025.pdf | `03c`, `05`, `X2:region_europe` |
| https://at.govt.nz/nzsl-app-alerts | `03e`, `X2:region_east_asia_oceania` |
| https://auniao.pb.gov.br/noticias/caderno_paraiba/ufpb-e-mgi-apresentam-aplicativo | `03d`, `04b`, `X2:open_source_clonable` |
| https://bancodeleis.alepa.pa.gov.br/arquivos/lei11185_2025_44436.pdf | `03d`, `X2:region_americas` |
| https://www.berec.europa.eu/system/files/2026-06/3.%20EUD-EFHOH.pdf | `03c`, `X2:region_europe` |
| https://www.consultant.ru/document/cons_doc_LAW_165919/b004fed0b70d0f223e4a81f8ad6cd92af90a7e3b/ | `03b`, `OH`, `X1:russia_cis_ecosystem` |
| https://divyangjan.depwd.gov.in/upload/s3wassupload/ISLRTC_New_Delhi_Annual_Report_2023_24.pdf | `03f`, `03g`, `OH`, `X1:global_apps_and_business_models`, `X2:region_south_asia_mena_africa` |
| https://www.dsca.gob.es/es/comunicacion/notas-prensa/derechos-sociales-impulsa-nuevo-servicio-personas-sordas-o-dificultades | `03c`, `X2:region_europe` |
| https://www.find-tender.service.gov.uk/Notice/058414-2025 | `03c`, `X2:nonprofit_models_funding` |
| https://frontiertech.niti.gov.in/story/innovative-isl-technology-empowers-indias-deaf-community-through-accessible-education/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://garant.ru/news/11083 | `03b`, `05`, `X1:russia_cis_ecosystem` |
| https://www.gov.kz/memleket/entities/social-saran/press/article/details/121818 | `03b`, `X2:russia_cis_competitors` |
| https://govinfo.gov/content/pkg/FR-2025-03-12/pdf/2025-03142.pdf | `03d`, `X2:region_americas` |
| https://harvester.nas.gov.ua/Record/oai:ojs2.jais.net.ua:article-101/Details?lng=en | `03b`, `X1:russia_cis_ecosystem` |
| https://ies.ed.gov/about/external-person/susan-easterbrooks | `04a`, `06a`, `06c`, `OH`, `X1:deaf_centered_product_ux` |
| https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/at-atendimento-cidadaos-surdos.aspx | `03c`, `X2:region_europe` |
| https://islrtc.nic.in/faq/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.kenyanews.go.ke/?p=184673 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/derechos-sociales-consumo-agenda-2030/Paginas/2025/060625-comunicacion-personas-sordas.aspx | `03c`, `X2:region_europe` |
| https://leg.colorado.gov/sites/default/files/images/lcs/coset_-_laab_notes.pdf | `04a`, `X1:deaf_centered_product_ux` |
| https://mari-el.gov.ru/upload/sovetsk/ronga/DocLib22/20191203_1.pdf | `03b`, `X2:russia_cis_competitors` |
| https://www.meb.gov.tr/isitme-engelli-ogrenciler-icin-dijital-egitim-platformu/haber/25652/tr | `03f`, `X2:region_south_asia_mena_africa` |
| https://mia.police.ge/en/112-gkhedavt-sms-da-video-zaris-servisi-mkholod-kru-da-smenadaqveitebuli-pirebistvis/7938?print=1 | `03a`, `03b`, `06a`, `06d`, `06f`, `X2:russia_cis_competitors`, `X2:uzbekistan_legal_costs` |
| https://mms.gov.ua/news/minmolodsport-rozshyriuie-tsyfrovu-bezbariernist-onlain-servisy-staly-dostupnishymy-dlia-liudei-z-porushenniamy-slukhu | `03b`, `X2:russia_cis_competitors` |
| https://www.msdf.gov.qa/en/media-center/news-list/he-minister-social-development-and-family-launches-avatar-bo-hamad-virtual | `03f`, `X2:region_south_asia_mena_africa` |
| https://mv.gov.cz/soubor/letak-ticha-linka.aspx | `03c`, `X2:region_europe` |
| https://nbtc.go.th/Business/commu/telecom/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3-USO/TTRS/test.aspx?lang=en-us | `03f`, `X2:region_south_asia_mena_africa` |
| https://niepelnosprawni.gov.pl/wp-content/uploads/2025/06/Projekt-z-dnia-27-marca-2025-r-o-zmianie-ustawy-o-jezyku-migowym-.-1743777718.docx | `03c`, `X2:region_europe` |
| https://www.norma.uz/oz/qonunchilikda_yangi/uzbek_imo-ishora_tili_va_brayl_alifbosini_rivojlantirish_buyicha_chora-tadbirlar_belgilandi | `01`, `02`, `05`, `06a`, `06f`, `06g`, `OH`, `X1:uzbekistan_landscape`, `X2:uzsl_linguistics_education_community` |
| https://nrm.uz/contentf?doc=578912_&products=1_vse_zakonodatelstvo_uzbekistana | `02`, `05`, `X1:uzbekistan_landscape` |
| https://odi.cwp.govt.nz/nzsl/nzsl-fund/nzsl-fund-recipient-news/online-nzsl-childrens-library/ | `03e`, `X2:region_east_asia_oceania` |
| https://olsztyn.bip.policja.gov.pl/306/zapewnienie-dostepnosci/43762,Usluga-bezplatnego-tlumacza-PJM-SJM-SKOGN.pdf | `03c`, `X2:region_europe` |
| https://ombudsman.uz/oz/news/2021/04/16/bola-huquqlari-boyicha-vakil-ixtisoslashtirilgan-maktab-internatida-239-nafar-tarbiyalanuvchi-eshitish-apparatlariga-muhtoj | `02`, `X1:uzbekistan_landscape` |
| https://orkney.gov.uk/online/web-guide/accessibility/contactscotland-bsl | `03c`, `X2:nonprofit_models_funding` |
| https://www.outsource.gov.uz/en/media/the-second-national-ai-hackathon-will-take-place-in-samarkand | `04c`, `X1:uzbekistan_landscape` |
| https://portugal.gov.pt/gc22/comunicacao/noticias/lingua-gestual-portuguesa-disponivel-para-cidadaos-surdos-atraves-do-sns24 | `03c`, `X2:region_europe` |
| https://president.uz/oz/lists/view/5117 | `02`, `X2:uzsl_linguistics_education_community` |
| https://www.sanews.gov.za/node/59532 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.sbir.gov/portfolio/2444811 | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://ted.europa.eu/en/notice/561346-2023/pdf | `03c`, `X2:region_europe` |
| https://www.uzedu.uz/uz/news/130 | `01`, `02`, `OH`, `X1:uzbekistan_landscape` |
| https://www2.gov.pt/en/noticias/112-para-cidadaos-surdos | `03c`, `X2:region_europe` |

<a id="c-sci"></a>

### 4.2 Ilmiy maqolalar va repozitoriylar (109 URL)

Domenlar (29): arxiv.org (39), aclanthology.org (10), zenodo.org (7), par.nsf.gov (6), pmc.ncbi.nlm.nih.gov (5), preview.aclanthology.org (5), sign-lang.uni-hamburg.de (4), aclweb.org (3), doaj.org (3), cvpr.thecvf.com (2), frontiersin.org (2), ieeexplore.ieee.org (2), ncbi.nlm.nih.gov (2), openaccess.thecvf.com (2), proceedings.iclr.cc (2), researchgate.net (2), cacm.acm.org (1), cyberleninka.ru (1), econfseries.com (1), eipublication.com (1), iclr.cc (1), mdpi.com (1), opendocs.ids.ac.uk (1), papers.neurips.cc (1), phoenixpublication.net (1) ...

| URL | Keltirgan hujjatlar |
|---|---|
| https://arxiv.org/abs/2008.00932 | `04a`, `X2:academic_research_synthesis` |
| https://arxiv.org/abs/2008.00932v2 | `03f`, `04d`, `X2:region_south_asia_mena_africa` |
| https://arxiv.org/abs/2105.12397v1 | `03e`, `04d`, `X2:region_east_asia_oceania` |
| https://arxiv.org/abs/2211.15464 | `04a`, `06c`, `X2:academic_research_synthesis` |
| https://arxiv.org/abs/2304.05934v2 | `04a`, `04d`, `OH`, `X1:open_source_tech_stack`, `X2:nonprofit_models_funding` |
| https://arxiv.org/abs/2305.14527 | `03b`, `04d`, `06c`, `OH`, `X1:open_source_tech_stack`, `X1:russia_cis_ecosystem` |
| https://arxiv.org/abs/2306.17558 | `04a`, `X2:academic_research_synthesis` |
| https://arxiv.org/abs/2405.07663v2 | `04a`, `06a`, `OH`, `X1:open_source_tech_stack` |
| https://arxiv.org/abs/2407.11144v1 | `04d`, `X1:open_source_tech_stack` |
| https://arxiv.org/abs/2501.15187v2 | `04a`, `X1:open_source_tech_stack` |
| https://arxiv.org/abs/2508.06951 | `04a`, `06b`, `X2:academic_research_synthesis` |
| https://arxiv.org/abs/2605.12096 | `04a`, `X1:open_source_tech_stack` |
| https://arxiv.org/html/2403.02563v1 | `04a`, `05`, `06a`, `06c`, `06g`, `OH`, `X1:deaf_centered_product_ux` |
| https://arxiv.org/html/2403.14534v2 | `04a`, `04d`, `X2:academic_research_synthesis` |
| https://arxiv.org/html/2407.11144v1 | `04a`, `06c`, `X2:academic_research_synthesis` |
| https://arxiv.org/html/2410.08675v1 | `03b`, `04d`, `OH`, `X1:russia_cis_ecosystem` |
| https://arxiv.org/html/2505.10481v2 | `03b`, `04a`, `04d`, `06a`, `06c`, `OH`, `X1:russia_cis_ecosystem`, `X2:academic_research_synthesis` |
| https://arxiv.org/html/2507.10306v1 | `04a`, `X1:open_source_tech_stack` |
| https://arxiv.org/html/2509.10266v2 | `04a`, `OH`, `X1:open_source_tech_stack` |
| https://arxiv.org/html/2510.02181v1 | `04a`, `06a`, `06b`, `OH`, `X1:deaf_centered_product_ux` |
| https://arxiv.org/html/2512.07273v1 | `04a`, `OH`, `X1:open_source_tech_stack` |
| https://arxiv.org/pdf/1712.02033 | `04a`, `X2:academic_research_synthesis` |
| https://arxiv.org/pdf/2107.14419 | `04d`, `OH`, `X1:open_source_tech_stack`, `X1:uzbekistan_landscape` |
| https://arxiv.org/pdf/2305.04868 | `04a`, `X2:academic_research_synthesis` |
| https://arxiv.org/pdf/2310.05064v1.pdf | `OH`, `X1:open_source_tech_stack` |
| https://arxiv.org/pdf/2310.09066 | `04a`, `04d`, `OH`, `X1:open_source_tech_stack` |
| https://arxiv.org/pdf/2405.04164v1.pdf | `04a`, `X2:academic_research_synthesis` |
| https://arxiv.org/pdf/2407.15806v1 | `04a`, `04d`, `X1:open_source_tech_stack` |
| https://arxiv.org/pdf/2408.13585 | `04a`, `06a`, `06c`, `X2:academic_research_synthesis` |
| https://arxiv.org/pdf/2408.14825 | `04a`, `X2:academic_research_synthesis` |
| https://arxiv.org/pdf/2410.00035 | `04d`, `X1:uzbekistan_landscape` |
| https://arxiv.org/pdf/2410.05206 | `04a`, `04d`, `OH`, `X1:open_source_tech_stack` |
| https://arxiv.org/pdf/2501.15187 | `04a`, `04d`, `OH`, `X1:open_source_tech_stack` |
| https://arxiv.org/pdf/2501.15187v2 | `03e`, `04d`, `X2:region_east_asia_oceania` |
| https://arxiv.org/pdf/2604.22367 | `04a`, `X2:academic_research_synthesis` |
| https://arxiv.org/pdf/2605.12096 | `04a`, `06a`, `06c`, `X2:academic_research_synthesis` |
| https://arxiv.org/pdf/2607.03427 | `05`, `X2:nonprofit_models_funding` |
| https://arxiv.org/pdf/2609.06843 | `04a`, `06c`, `X2:academic_research_synthesis` |
| https://arxiv.org/pdf/2609.21709 | `04a`, `X2:academic_research_synthesis` |
| https://aclanthology.org/2020.lrec-1.746 | `03b`, `04d`, `OH`, `X1:russia_cis_ecosystem` |
| https://aclanthology.org/2022.wmt-1.71 | `04a`, `X2:academic_research_synthesis` |
| https://aclanthology.org/2023.wmt-1.4 | `04a`, `06c`, `X2:academic_research_synthesis` |
| https://aclanthology.org/2024.eamt-2.25 | `03c`, `X2:region_europe` |
| https://aclanthology.org/2024.signlang-1.12.pdf | `04d`, `X2:nonprofit_models_funding` |
| https://aclanthology.org/2024.signlang-1.6.pdf | `04a`, `X1:deaf_centered_product_ux` |
| https://aclanthology.org/2025.emnlp-main.1238.pdf | `04a`, `X2:academic_research_synthesis` |
| https://aclanthology.org/2026.findings-acl.1821/ | `03e`, `04d`, `X2:region_east_asia_oceania` |
| https://aclanthology.org/2026.signlang-1.23/ | `03b`, `06c`, `OH`, `X1:russia_cis_ecosystem` |
| https://aclanthology.org/2026.unlp-1.6.pdf | `03b`, `04d`, `X1:russia_cis_ecosystem` |
| https://zenodo.org/record/14734421 | `03f`, `04d`, `X2:region_south_asia_mena_africa` |
| https://zenodo.org/record/6043738 | `04d`, `06c`, `X2:academic_research_synthesis` |
| https://zenodo.org/record/6043739 | `03b`, `04d`, `OH`, `X1:russia_cis_ecosystem` |
| https://zenodo.org/records/10093343 | `03a`, `04d`, `X1:uzbekistan_landscape` |
| https://zenodo.org/records/22840569 | `03a`, `04d`, `OH`, `X1:uzbekistan_landscape` |
| https://zenodo.org/records/24003015 | `03a`, `04d`, `OH`, `X1:uzbekistan_landscape` |
| https://zenodo.org/records/4010759 | `03f`, `04d`, `X2:region_south_asia_mena_africa` |
| https://par.nsf.gov/biblio/10335221 | `04a`, `X2:academic_research_synthesis` |
| https://par.nsf.gov/biblio/10356507-attitudes-toward-signing-avatars-vary-depending-hearing-status-age-signed-language-acquisition-avatar-type | `04a`, `X2:academic_research_synthesis` |
| https://par.nsf.gov/biblio/10475964-diffslva-harnessing-diffusion-models-sign-language-video-anonymization | `04a`, `X2:academic_research_synthesis` |
| https://par.nsf.gov/servlets/purl/10072841 | `04a`, `X2:academic_research_synthesis` |
| https://par.nsf.gov/servlets/purl/10355406 | `04a`, `06a`, `OH`, `X1:deaf_centered_product_ux` |
| https://par.nsf.gov/servlets/purl/10431246 | `04a`, `X1:deaf_centered_product_ux` |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC11124802 | `03f`, `X2:region_south_asia_mena_africa` |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC12383669 | `04a`, `X1:deaf_centered_product_ux` |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC4280560 | `04a`, `06a`, `OH`, `X1:deaf_centered_product_ux` |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC6050834 | `04a`, `X1:deaf_centered_product_ux` |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC9227653/ | `04a`, `06a`, `06f`, `06g`, `OH`, `X1:deaf_centered_product_ux` |
| https://preview.aclanthology.org/author-page-yu-wang-polytechnic/2025.findings-emnlp.997.pdf | `04a`, `OH`, `X1:open_source_tech_stack` |
| https://preview.aclanthology.org/fix_video/2023.acl-short.60.pdf | `04a`, `X2:academic_research_synthesis` |
| https://preview.aclanthology.org/fix_video/2023.ltedi-1.2.pdf | `03c`, `03g`, `X2:global_feature_matrix` |
| https://preview.aclanthology.org/ingest-ijcnlp-aacl/2025.wslp-main.5.pdf | `04a`, `06c`, `X2:academic_research_synthesis` |
| https://preview.aclanthology.org/moar-dois/2020.conll-1.51.pdf | `04a`, `04d`, `06c`, `X2:academic_research_synthesis` |
| https://www.sign-lang.uni-hamburg.de/lr/compendium/corpus/dgscorpus.html | `04a`, `04d`, `06c`, `X2:academic_research_synthesis` |
| https://www.sign-lang.uni-hamburg.de/lrec/data/autsl.html | `03f`, `04d`, `05`, `X2:region_south_asia_mena_africa` |
| https://www.sign-lang.uni-hamburg.de/lrec/pub/18028.pdf | `04a`, `X2:academic_research_synthesis` |
| https://www.sign-lang.uni-hamburg.de/lrec/pub/26040.pdf | `03b`, `X1:russia_cis_ecosystem` |
| https://aclweb.org/anthology/2022.acl-long.150.pdf | `04a`, `04d`, `X2:academic_research_synthesis` |
| https://aclweb.org/anthology/2022.signlang-1.24.pdf | `04d`, `05`, `X2:nonprofit_models_funding` |
| https://aclweb.org/anthology/2022.signlang-1.31.pdf | `04a`, `06c`, `X2:academic_research_synthesis` |
| https://doaj.org/article/05fe7269c37d488cafc9c023a2cb1c9e | `03f`, `X2:region_south_asia_mena_africa` |
| https://doaj.org/article/1227439974314eb0a8cb835035127254 | `03f`, `04d`, `X2:region_south_asia_mena_africa` |
| https://doaj.org/article/96e0e09cba3b4fb9ad29c3f8d1cc7103 | `03b`, `X1:russia_cis_ecosystem` |
| https://cvpr.thecvf.com/virtual/2025/35711 | `04a`, `X2:academic_research_synthesis` |
| https://cvpr.thecvf.com/virtual/2025/workshop/32296 | `04a`, `06c`, `X2:academic_research_synthesis` |
| https://www.frontiersin.org/articles/10.3389/fpsyg.2022.730917 | `04a`, `06a`, `X2:academic_research_synthesis` |
| https://www.frontiersin.org/journals/communication/articles/10.3389/fcomm.2023.1175461/epub | `04a`, `06a`, `OH`, `X1:deaf_centered_product_ux` |
| https://ieeexplore.ieee.org/document/10544372/ | `03a`, `04d`, `X1:uzbekistan_landscape` |
| https://ieeexplore.ieee.org/document/10956783/ | `03a`, `04d`, `OH`, `X1:uzbekistan_landscape` |
| https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6431824/ | `04a`, `06a`, `06b`, `X2:academic_research_synthesis` |
| https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9467305/ | `03b`, `04d`, `OH`, `X1:russia_cis_ecosystem`, `X1:uzbekistan_landscape` |
| https://openaccess.thecvf.com/content/CVPR2021/papers/Duarte_How2Sign_A_Large-Scale_Multimodal_Dataset_for_Continuous_American_Sign_Language_CVPR_2021_paper.pdf | `04d`, `X1:open_source_tech_stack` |
| https://openaccess.thecvf.com/CVPR2025_workshops/SLRTP | `04a`, `X2:academic_research_synthesis` |
| https://proceedings.iclr.cc/paper_files/paper/2024/hash/4ebba705ffdee81e0a638c99fe066ce2-Abstract-Conference.html | `04a`, `X2:academic_research_synthesis` |
| https://proceedings.iclr.cc/paper_files/paper/2025/hash/260a14acce2a89dad36adc8eefe7c59e-Abstract-Conference.html | `04a`, `X1:open_source_tech_stack` |
| https://www.researchgate.net/publication/390790430_An_Algorithm_of_Recognition_Uzbek_Sign_Language | `03a`, `04d`, `X1:uzbekistan_landscape` |
| https://www.researchgate.net/publication/391882672_ESHITISHIDA_NUQSONI_BO | `02`, `06c`, `X1:uzbekistan_landscape`, `X2:uzsl_linguistics_education_community` |
| https://cacm.acm.org/magazines/2018/12/232889-technology-for-the-deaf/fulltext | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://cyberleninka.ru/article/n/o-zbek-ishora-tili-harflarini-tanib-olish-algoritmi/pdf | `02`, `03a`, `04d`, `06c`, `X2:uzsl_linguistics_education_community` |
| https://econfseries.com/index.php/4/article/view/788 | `02`, `X2:uzsl_linguistics_education_community` |
| https://eipublication.com/index.php/eijmrms/article/view/1885 | `03a`, `04d`, `X1:uzbekistan_landscape` |
| https://iclr.cc/virtual/2025/poster/28414 | `04a`, `04d`, `X1:open_source_tech_stack`, `X2:academic_research_synthesis` |
| https://www.mdpi.com/2079-9292/12/12/2678/html | `04a`, `X2:academic_research_synthesis` |
| https://opendocs.ids.ac.uk/opendocs/bitstream/handle/20.500.12413/16710/CREID_Working_Paper_8.pdf | `02`, `X2:uzsl_linguistics_education_community` |
| https://papers.neurips.cc/paper_files/paper/2023/file/00dada608b8db212ea7d9d92b24c68de-Supplemental-Datasets_and_Benchmarks.pdf | `04a`, `06c`, `X2:academic_research_synthesis` |
| https://phoenixpublication.net/index.php/TANQ/article/view/4499 | `02`, `X2:uzsl_linguistics_education_community` |
| https://proceedings.neurips.cc/paper_files/paper/2023/hash/00dada608b8db212ea7d9d92b24c68de-Abstract.html | `03d`, `04a`, `04d`, `06c`, `X2:academic_research_synthesis`, `X2:open_source_clonable` |
| https://rd.springer.com/chapter/10.1007/978-3-319-20681-3_30 | `03f`, `X2:region_south_asia_mena_africa` |
| https://reandpub.uz/konferensiya/article/view/598 | `03a`, `04d`, `X1:uzbekistan_landscape` |
| https://rehab.jmir.org/2026/1/e79073 | `04a`, `X1:deaf_centered_product_ux` |

<a id="c-code"></a>

### 4.3 GitHub, ochiq kod va modellar (129 URL)

Domenlar (10): github.com (102), huggingface.co (16), friendli.ai (2), gitverse.ru (2), krslproject.github.io (2), alphacephei.com (1), jennakangg.github.io (1), kaggle.com (1), rudra496.github.io (1), ustc-slr.github.io (1)

| URL | Keltirgan hujjatlar |
|---|---|
| https://github.com/adbar/simplemma/tree/main/simplemma/strategies/dictionaries/data | `04b`, `06b`, `X2:hands_on_repo_audit` |
| https://github.com/ai-forever/bukva | `03b`, `04d`, `OH`, `X1:russia_cis_ecosystem` |
| https://github.com/ai-forever/logos | `03b`, `04a`, `04d`, `05`, `06a`, `06b`, `06c`, `06f`, `06g`, `OH`, `X1:russia_cis_ecosystem` |
| https://github.com/ai-forever/slovo | `03b`, `04d`, `05`, `06c`, `06g`, `OH`, `X1:open_source_tech_stack`, `X1:russia_cis_ecosystem` |
| https://github.com/AI4Bharat/INCLUDE | `03f`, `04d`, `X2:region_south_asia_mena_africa` |
| https://github.com/AI4Bharat/OpenHands | `03f`, `04d`, `X2:region_south_asia_mena_africa` |
| https://github.com/akkomron/uzslr-isolated-dynamic | `04b`, `04d`, `06c`, `X2:open_source_clonable` |
| https://github.com/alphacep/vosk-api | `04b`, `04c`, `X2:open_source_clonable` |
| https://github.com/asterics/Asterics-AAC | `04b`, `X2:open_source_clonable` |
| https://github.com/asterisk/asterisk | `04b`, `X2:open_source_clonable` |
| https://github.com/BelledonneCommunications/linphone-android | `04b`, `X2:open_source_clonable` |
| https://github.com/bigbluebutton/bigbluebutton | `04b`, `X2:open_source_clonable` |
| https://github.com/braindiggeruz/awesome-uzbek-ai | `03a`, `04c`, `OH`, `X1:uzbekistan_landscape` |
| https://github.com/cboard-org/cboard | `04b`, `05`, `06a`, `06b`, `06g`, `X2:open_source_clonable` |
| https://github.com/cboard-org/cboard-api | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/collabora/WhisperLive | `04b`, `04c`, `06b`, `X2:open_source_clonable` |
| https://github.com/collabora/WhisperLive/blob/main/requirements/server.txt | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/CoughDrop | `04b`, `X2:open_source_clonable` |
| https://github.com/dec112 | `03c`, `04b`, `X2:open_source_clonable` |
| https://github.com/DPGAlliance/publicgoods-candidates | `04b` |
| https://github.com/DPGAlliance/publicgoods-candidates/blob/main/archive/signdict.json | `03c`, `04b`, `X2:open_source_clonable` |
| https://github.com/DPGAlliance/publicgoods-candidates/tree/main/digitalpublicgoods | `04b`, `05`, `X2:open_source_clonable` |
| https://github.com/dxli94/WLASL | `04d`, `OH`, `X1:open_source_tech_stack` |
| https://github.com/FCC/ACEDirect | `03d`, `04b`, `06b`, `X2:open_source_clonable` |
| https://github.com/ffs333/2nd_place_GISLR | `04a`, `X1:open_source_tech_stack` |
| https://github.com/ggml-org/whisper.cpp | `04b`, `04c`, `X2:open_source_clonable` |
| https://github.com/google/live-transcribe-speech-engine | `03d`, `04b`, `04c`, `X2:open_source_clonable` |
| https://github.com/google/shuwa | `03e`, `04d`, `X2:region_east_asia_oceania` |
| https://github.com/hoyso48/Google---Isolated-Sign-Language-Recognition-1st-place-solution | `04b`, `04d`, `X2:open_source_clonable` |
| https://github.com/hukenovs/slovo | `03b`, `04d`, `06a`, `06c`, `OH`, `X1:russia_cis_ecosystem` |
| https://github.com/jitsi/jigasi | `04b`, `06b`, `X2:open_source_clonable` |
| https://github.com/jitsi/jigasi/tree/master/src/main/java/org/jitsi/jigasi/transcription | `04b`, `04c`, `X2:hands_on_repo_audit` |
| https://github.com/jitsi/jitsi-meet | `04b`, `05`, `06b`, `06d`, `06e`, `X2:hands_on_repo_audit`, `X2:open_source_clonable` |
| https://github.com/jitsi/jitsi-meet-sdk-samples | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/jitsi/jitsi-meet/blob/master/config.js | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/jitsi/jitsi-meet/blob/master/modules/API/API.js | `04b`, `06b`, `X2:hands_on_repo_audit` |
| https://github.com/jitsi/skynet | `04b`, `04c`, `06b`, `X2:hands_on_repo_audit`, `X2:open_source_clonable` |
| https://github.com/kaldi-asr/kaldi | `04b`, `04c`, `X2:open_source_clonable` |
| https://github.com/khdbeck/uzslr-sign-language-prototype | `03a`, `04d`, `OH`, `X1:uzbekistan_landscape` |
| https://github.com/livekit/agents | `04b`, `X2:open_source_clonable` |
| https://github.com/livekit/livekit | `04b`, `06b`, `X2:open_source_clonable` |
| https://github.com/microsoft/ASL-citizen-code | `03d`, `04b`, `04d`, `X2:open_source_clonable` |
| https://github.com/mitrefccace | `03d`, `04b`, `X2:open_source_clonable` |
| https://github.com/ODNZSL/nzsl-online | `04b`, `X2:open_source_clonable` |
| https://github.com/oncado86/Turkish_Sign_Language_Dictionary | `03f`, `X2:region_south_asia_mena_africa` |
| https://github.com/otsimo-archive/aac | `04b`, `X2:open_source_clonable` |
| https://github.com/QuentinFuxa/WhisperLiveKit | `04b`, `04c`, `X2:open_source_clonable` |
| https://github.com/sign-language-processing | `03d`, `04a`, `04b`, `X1:open_source_tech_stack`, `X2:open_source_clonable` |
| https://github.com/sign-language-processing/lessons-in-signwriting | `04b`, `X2:open_source_clonable` |
| https://github.com/sign-language-processing/pose | `04b`, `06b`, `X1:open_source_tech_stack`, `X2:hands_on_repo_audit` |
| https://github.com/sign-language-processing/pose/blob/master/src/python/pyproject.toml | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/sign-language-processing/spoken-to-signed-translation | `03c`, `04b`, `05`, `06b`, `06c`, `06d`, `06e`, `X2:hands_on_repo_audit`, `X2:open_source_clonable` |
| https://github.com/sign-language-processing/spoken-to-signed-translation/blob/main/pyproject.toml | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/sign/translate | `03d`, `04b`, `X2:open_source_clonable` |
| https://github.com/sign/translate/blob/master/LICENSE.md | `03d`, `04b`, `06b`, `X2:open_source_clonable` |
| https://github.com/signalwire/freeswitch | `04b`, `X2:open_source_clonable` |
| https://github.com/Signbank | `03c`, `04b`, `X2:open_source_clonable` |
| https://github.com/Signbank/Global-signbank | `03c`, `04b`, `06a`, `06b`, `06c`, `X2:open_source_clonable` |
| https://github.com/Signbank/Global-signbank/blob/master/deploy.sh | `04b`, `06b`, `X2:hands_on_repo_audit` |
| https://github.com/Signbank/Global-signbank/blob/master/docs/signbank-api.json | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/Signbank/Global-signbank/blob/master/LICENCE.txt | `04b`, `05`, `06e`, `X2:hands_on_repo_audit` |
| https://github.com/Signbank/Global-signbank/blob/master/requirements.txt | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signdict/website | `03c`, `04b`, `X2:open_source_clonable` |
| https://github.com/signon-project | `03c`, `04b`, `06b`, `06c`, `X2:hands_on_repo_audit`, `X2:region_europe` |
| https://github.com/signon-project/wp2-dispatcher-for-wp4 | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp2-framework-docker-compose | `04b`, `06b`, `06c`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp2-ml-app | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp2-mobile-app | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp2-orchestrator | `04b`, `06b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp2-orchestrator-api-shared-schemas | `04b`, `06b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp2-orchestrator-asyncapi | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp2-orchestrator-openapi | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp3-asr-comp | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp3-nlp-pipeline | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp3-slr-component | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp3-slr-pipeline | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp4-slt-component | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp4-text-gloss-mt | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp4-text2gloss | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/signon-project/wp5-synthesis | `04b`, `04d`, `X2:hands_on_repo_audit` |
| https://github.com/snakers4/silero-vad/raw/v5.0/files/silero_vad.onnx | `X2:hands_on_repo_audit` |
| https://github.com/spbgovbr-vlibras | `03d`, `04b`, `06b`, `X2:open_source_clonable` |
| https://github.com/spbgovbr-vlibras/vlibras-player-webjs | `06b`, `X2:hands_on_repo_audit` |
| https://github.com/spbgovbr-vlibras/vlibras-player-webjs/tree/master/src/target | `03d`, `04b`, `X2:open_source_clonable` |
| https://github.com/spbgovbr-vlibras/vlibras-translator-api | `03d`, `04b`, `X2:hands_on_repo_audit`, `X2:open_source_clonable` |
| https://github.com/spbgovbr-vlibras/vlibras-translator-text-core | `03d`, `04b`, `X2:hands_on_repo_audit`, `X2:open_source_clonable` |
| https://github.com/spbgovbr-vlibras/vlibras-web-browsers | `03d`, `04b`, `X2:hands_on_repo_audit`, `X2:open_source_clonable` |
| https://github.com/spbgovbr-vlibras/vlibras-web-browsers/blob/dev/AGENTS.md | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/sutton-signwriting/core | `04b`, `X2:open_source_clonable` |
| https://github.com/SYSTRAN/faster-whisper | `04b`, `04c`, `X2:open_source_clonable` |
| https://github.com/umid-weeb/uzbek-sign-language-ai | `03a`, `04d`, `OH`, `X1:uzbekistan_landscape` |
| https://github.com/upf-gti/performs | `04b`, `06b`, `X2:hands_on_repo_audit` |
| https://github.com/upf-gti/SignON-editor | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/upf-gti/SignON-realizer | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/WMT-SLT/wmt-slt23 | `04a`, `X2:academic_research_synthesis` |
| https://github.com/wonmortech/tilouz | `00`, `01` |
| https://github.com/yandex/deaf | `03b`, `04b`, `06a`, `06b`, `X2:hands_on_repo_audit`, `X2:russia_cis_competitors` |
| https://github.com/yandex/deaf/blob/master/app/build.gradle | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/yandex/deaf/blob/master/build.gradle | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/yandex/deaf/blob/master/LICENSE | `04b`, `X2:hands_on_repo_audit` |
| https://github.com/ZhengdiYu/SignAvatars | `04b`, `04d`, `X2:open_source_clonable` |
| https://www.GitHub.com/cboard-org/cboard | `OH`, `X1:deaf_centered_product_ux` |
| https://huggingface.co/api/models/navai-uz/whisper-medium-uzbek | `04b`, `04c`, `06b`, `06e`, `X2:hands_on_repo_audit` |
| https://huggingface.co/BlueRaccoon/whisper-small-uz | `04c`, `04d`, `X1:open_source_tech_stack` |
| https://huggingface.co/BuzzASR/uzbek | `04c`, `04d`, `06b`, `X1:open_source_tech_stack`, `X2:uzbek_speech_bigtech_support` |
| https://huggingface.co/datasets/ai4bharat/INCLUDE | `03f`, `04d`, `X2:region_south_asia_mena_africa` |
| https://huggingface.co/datasets?search=uzbek | `04d`, `X2:open_source_clonable` |
| https://huggingface.co/facebook/mms-tts | `04c`, `04d`, `OH`, `X1:open_source_tech_stack` |
| https://huggingface.co/facebook/mms-tts-uzb-script_cyrillic/discussions/1/files | `04c`, `X1:open_source_tech_stack` |
| https://huggingface.co/google/paligemma-3b-mix-224/discussions/7 | `04a`, `X1:open_source_tech_stack` |
| https://huggingface.co/islomov/rubaistt_v2_medium/blob/main/README.md | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&search=uzbek | `04c`, `04d`, `06b`, `X2:open_source_clonable` |
| https://huggingface.co/models?pipeline_tag=text-to-speech&search=uzbek | `04c`, `04d`, `X2:open_source_clonable` |
| https://huggingface.co/mrmuminov/f5-tts-uzbek | `04c`, `04d`, `X1:open_source_tech_stack` |
| https://huggingface.co/rustam1221/uzbek-asr-gigaam | `04c`, `04d`, `06b`, `X1:open_source_tech_stack`, `X2:uzbek_speech_bigtech_support` |
| https://huggingface.co/sign/kaggle-asl-signs-1st-place | `04a`, `04d`, `OH`, `X1:open_source_tech_stack` |
| https://huggingface.co/signon-project | `04b`, `04d`, `05`, `06b`, `X2:hands_on_repo_audit` |
| https://huggingface.co/UAzimov/Uzbek-tts-chatterbox | `04c`, `X1:open_source_tech_stack` |
| https://friendli.ai/models/Abduqayum/whisper-uzbek-medium-callcenter | `04c`, `04d`, `OH`, `X1:open_source_tech_stack` |
| https://friendli.ai/models/navai-uz/whisper-base-uzbek | `04c`, `04d`, `OH`, `X1:open_source_tech_stack` |
| https://gitverse.ru/ai-forever/slovo | `03b`, `04d`, `X1:russia_cis_ecosystem` |
| https://gitverse.ru/integer/voice-to-text-telegram-recognition | `03b`, `X2:russia_cis_competitors` |
| https://krslproject.github.io/krsl20 | `04d`, `05`, `06d`, `06e`, `06g`, `X2:nonprofit_models_funding` |
| https://krslproject.github.io/online-school | `04d`, `X2:nonprofit_models_funding` |
| https://alphacephei.com/vosk/models | `04b`, `04c`, `04d`, `06b`, `X2:open_source_clonable` |
| https://jennakangg.github.io/assets/pdfs/ChiCaptioning.pdf | `04a`, `06a`, `X1:deaf_centered_product_ux`, `X2:academic_research_synthesis` |
| https://www.kaggle.com/datasets/javokhirraimov/uzbek-language-dataset-sentence-and-audio | `03a`, `04d`, `X1:uzbekistan_landscape` |
| https://rudra496.github.io/SignLanguage-Dataset-Hub/DATASETS.html | `04d`, `X1:open_source_tech_stack` |
| https://ustc-slr.github.io/datasets/2021_csl_daily | `03e`, `04d`, `X2:region_east_asia_oceania` |

<a id="c-store"></a>

### 4.4 Ilova do'konlari (40 URL)

Domenlar (5): apps.apple.com (32), rustore.ru (4), play.google.com (2), chrome.google.com (1), chromeboard.com (1)

| URL | Keltirgan hujjatlar |
|---|---|
| https://apps.apple.com/app/id1619629318 | `03f`, `X2:region_south_asia_mena_africa` |
| https://apps.apple.com/app/id6743889220 | `08` |
| https://apps.apple.com/app/the-asl-app/id921030207 | `03d`, `X2:region_americas` |
| https://apps.apple.com/ca/app/id308368164?l=en-ca | `03d`, `03g`, `X2:global_feature_matrix` |
| https://apps.apple.com/ca/app/word2sign/id6478667698 | `03b`, `X1:russia_cis_ecosystem` |
| https://apps.apple.com/ch/app/myprocom/id6636473650 | `03c`, `X2:region_europe` |
| https://apps.apple.com/cy/app/interpreters-live/id1552367696 | `03c`, `03g`, `X2:global_feature_matrix` |
| https://apps.apple.com/de/app/issiesign/id1423489221 | `03f`, `X2:region_south_asia_mena_africa` |
| https://apps.apple.com/gb/app/rogervoice/id1033113354 | `03c`, `X2:global_feature_matrix` |
| https://apps.apple.com/it/app/%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D0%BD%D0%B0-%D1%80%D0%B6%D1%8F-%D0%B4%D0%B5%D1%82%D1%8F%D0%BC/id1478126901 | `03b`, `X2:russia_cis_competitors` |
| https://apps.apple.com/it/app/intesi/id6758286094 | `03c`, `X2:region_europe` |
| https://apps.apple.com/ke/app/kivo-crm/id6475719810 | `08` |
| https://apps.apple.com/my/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D1%80%D0%B0%D0%B7%D0%B3%D0%BE%D0%B2%D0%BE%D1%80-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C-%D0%B3%D0%BB%D1%83%D1%85%D0%B8%D0%BC/id6443816148?l=ms | `03b`, `X2:russia_cis_competitors` |
| https://apps.apple.com/ng/app/signable/id6477518760 | `03f`, `03g`, `X1:global_apps_and_business_models` |
| https://apps.apple.com/ru/app/%D1%81%D1%83%D1%80%D0%B4%D0%BE-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C/id6445996571?l=en-GB | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://apps.apple.com/th/app/signschool/id1145529881 | `03d`, `03g`, `X2:global_feature_matrix` |
| https://apps.apple.com/tr/app/sesim-elim/id1596642299?l=tr | `03f`, `X2:region_south_asia_mena_africa` |
| https://apps.apple.com/ua/app/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA-%D0%B6%D1%8F/id1303476708?l=uk | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://apps.apple.com/us/app/%D1%80%D0%B5%D0%BF%D0%BA%D0%B0-%D1%80%D0%B6%D1%8F/id1186916447 | `03b`, `X2:russia_cis_competitors` |
| https://apps.apple.com/us/app/%D1%81%D1%83%D1%80%D0%B4%D0%BE-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C/id6445996571 | `03b`, `OH`, `X1:russia_cis_ecosystem` |
| https://apps.apple.com/us/app/-/id1494002697 | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://apps.apple.com/us/app/-/id438811366 | `03c`, `03g`, `X2:global_feature_matrix` |
| https://apps.apple.com/us/app/convo-vrs/id423121946?l=fr-FR | `03d`, `03g`, `X2:global_feature_matrix` |
| https://apps.apple.com/us/app/icom/id1266139375 | `03d`, `X2:region_americas` |
| https://apps.apple.com/us/app/id1030067058 | `03d`, `03g`, `X2:global_feature_matrix` |
| https://apps.apple.com/us/app/id1437104597 | `03f`, `X2:region_south_asia_mena_africa` |
| https://apps.apple.com/us/app/id1584651862 | `03f`, `X2:region_south_asia_mena_africa` |
| https://apps.apple.com/us/app/id6757427283 | `03f`, `X2:region_south_asia_mena_africa` |
| https://apps.apple.com/us/app/id921030207 | `03d`, `03g`, `X2:global_feature_matrix` |
| https://apps.apple.com/us/app/navo/id6446790580 | `08` |
| https://apps.apple.com/us/app/rogervoice-phone-call-captions/id1033113354 | `03c`, `03g`, `X2:global_feature_matrix` |
| https://apps.apple.com/us/app/sivo/id1524340854 | `03d`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.rustore.ru/catalog/app/com.interpreter_android.ru | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://www.rustore.ru/catalog/app/com.interpreter_android.ru/recommendation | `03b`, `X1:russia_cis_ecosystem`, `X2:russia_cis_competitors` |
| https://www.rustore.ru/catalog/app/com.SurdoRu.surdoru | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://www.rustore.ru/catalog/app/ru.yandex.subtitles | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://play.google.com/store/apps/details?id=com.ihma.surdoai | `01`, `03a`, `04c`, `06a`, `06d`, `06g`, `OH`, `X1:browser_youtube_google_findings` |
| https://play.google.com/store/apps/details?id=com.tilo.app | `08` |
| https://chrome.google.com/webstore/detail/gettilo/mlolmhhkamgcegbkejcjbmblnaijffic | `08` |
| https://chromeboard.com/extension/openhearted-sign-language-efhokemfgkpieibngkgbiepgmphlfoei | `04c`, `X2:uzbek_speech_bigtech_support` |

<a id="c-media"></a>

### 4.5 OAV, bloglar va biznes nashrlari (171 URL)

Domenlar (75): anhor.uz (15), kun.uz (13), gazeta.uz (12), cbinsights.com (7), habr.com (7), hearingtracker.com (7), daryo.uz (5), techcrunch.com (5), uza.uz (5), multilingual.com (4), newswire.com (4), buxgalter.uz (3), mobile-review.com (3), producthunt.com (3), thebetterindia.com (3), uzdaily.uz (3), businesswire.com (2), comnews.ru (2), emprendedor.com (2), hearinghealthmatters.org (2), kaktus.media (2), macrumors.com (2), neohear.com (2), netzwoche.ch (2), pulse.bot (2) ...

| URL | Keltirgan hujjatlar |
|---|---|
| https://anhor.uz/news/23398-2/ | `02`, `03a`, `05`, `06d`, `X2:uzbekistan_legal_costs` |
| https://anhor.uz/news/24364-2/ | `05`, `06e`, `X2:uzbekistan_legal_costs` |
| https://anhor.uz/news/eshmirzayeva/ | `X2:uzsl_linguistics_education_community` |
| https://anhor.uz/news/sign-language-interpreter/ | `X2:uzbekistan_legal_costs` |
| https://anhor.uz/news/social-media/ | `05`, `06b`, `X2:uzbekistan_legal_costs` |
| https://anhor.uz/news/v-uzbekistane-88/ | `X2:uzbekistan_legal_costs` |
| https://anhor.uz/news/v-uzbekistane-razrabotayut-kodeks-o-negosudarstvennih-nekommercheskih-organizaciyah/ | `05`, `X2:uzbekistan_legal_costs` |
| https://anhor.uz/ru/news/fond-zamin-nachal-rabotu-po-programme-besplatnoy-kohlearnoy-implantacii-dlya-detey-s-narusheniyami-s | `02`, `X1:uzbekistan_landscape` |
| https://anhor.uz/ru/news/uzbekistan-criminalizes-illegal-ai-use-of-personal-data | `02`, `05`, `06a`, `06b`, `06c`, `06g`, `X2:uzbekistan_legal_costs` |
| https://anhor.uz/ru/texnologii/speech-tech-technologies-and-products-in-the-uzbek-market | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://anhor.uz/society/pochemu-v-uzbekistane-slozhno-otkrity-npo | `01`, `05`, `06f`, `06g`, `X2:uzbekistan_legal_costs` |
| https://anhor.uz/uzl/news/1-iyundan-nogironligi-bo-lgan-shaxslarni-ishga-qabul-qilgan-tadbirkor/ | `01`, `02`, `05`, `06a`, `06c`, `06e`, `X2:uzbekistan_legal_costs` |
| https://anhor.uz/uzl/news/fuqarolar-qabuli-va-sayyor-qabullarni-otkazishda-surdotarjimon-ishtiroki/ | `02`, `05`, `06a`, `06e`, `X2:uzbekistan_legal_costs` |
| https://anhor.uz/uzl/news/ozbekistondagi-nntlar-xodimlarining-chet-elga-safarlari/ | `05`, `X2:uzbekistan_legal_costs` |
| https://anhor.uz/uzl/news/uzbekistonda-ortacha-ish-haqi-7-3-million | `02`, `06c`, `06e`, `X2:uzbekistan_legal_costs` |
| https://kun.uz/27059463 | `02`, `OH`, `X1:uzbekistan_landscape` |
| https://kun.uz/en/news/2020/12/11/usaid-supports-visually-impaired-citizens-of-uzbekistan-presenting-a-collection-of-documents-on-their-rights | `X1:uzbekistan_landscape` |
| https://kun.uz/en/news/2024/08/26/uzbekistan-introduces-tax-benefits-and-new-platforms-for-civil-society-support | `05`, `X2:nonprofit_models_funding` |
| https://kun.uz/en/news/2025/03/11/us-to-shut-down-majority-of-usaid-programs-after-review | `05`, `06g`, `OH`, `X1:uzbekistan_landscape` |
| https://kun.uz/en/news/2025/03/25/uzbekistans-unified-112-emergency-system-now-fully-operational-nationwide | `02`, `03a`, `05`, `06a`, `06d`, `06g`, `X2:uzbekistan_legal_costs` |
| https://kun.uz/kr/news/2023/06/02/ijtimoiy-himoya-milliy-agentligi-rejalari-va-vazifalari-belgilandi | `02`, `X1:uzbekistan_landscape` |
| https://kun.uz/news/2018/10/06/uzbekistonda-kohlear-implantat-muammosiga-ecim-topadimi-2-jillik-navbatda-turgan-horazmlik-ota-ona-tasvisi | `02`, `06a`, `X2:uzsl_linguistics_education_community` |
| https://kun.uz/news/2018/12/08/soglikni-saklas-vazirligi-uzurida-tibbij-iztimoij-hizmatlar-agentligi-taskil-etilmokda | `X1:uzbekistan_landscape` |
| https://kun.uz/news/2020/12/18/zamin-fondi-dasturi-doirasida-jami-23ta-jarrohlik-amaliyoti-otkazilib-bolalarning-eshitish-qobiliyati-tiklandi | `02`, `X2:uzsl_linguistics_education_community` |
| https://kun.uz/news/2022/02/09/surdotarjimonlarni-tayyorlash-davlat-markazi-tashkil-etiladi | `02`, `X2:uzbekistan_legal_costs` |
| https://kun.uz/news/2023/02/27/nogironlar-mansabdor-shaxslar-qabuliga-navbatsiz-kiradi-prezident-qarori | `05`, `X2:uzbekistan_legal_costs` |
| https://kun.uz/news/2023/02/27/nogironlar-mansabdor-shaxslar-qabuliga-navbatsiz-kirish-prezident-qarori | `02` |
| https://kun.uz/news/2025/09/24/korrupsiyaga-qarshi-kurash-sohasidagi-nnt-loyihalariga-grant-ajratiladi | `05`, `06e`, `X2:nonprofit_models_funding` |
| https://www.gazeta.uz/oz/2020/06/30/deaf-and-dumb/ | `02`, `X1:uzbekistan_landscape` |
| https://www.gazeta.uz/oz/2020/12/19/zamin/ | `02`, `X2:uzsl_linguistics_education_community` |
| https://www.gazeta.uz/oz/2022/04/22/sign-language/ | `02`, `04d`, `06a`, `06c`, `06d`, `06g`, `X2:uzsl_linguistics_education_community` |
| https://www.gazeta.uz/oz/2025/04/15/disability/ | `02`, `OH`, `X1:uzbekistan_landscape` |
| https://www.gazeta.uz/oz/2025/09/30/sign-language/ | `01`, `02`, `03a`, `05`, `06a`, `06d`, `06e`, `06f`, `06g`, `OH`, `X1:uzbekistan_landscape`, `X2:uzsl_linguistics_education_community` |
| https://www.gazeta.uz/oz/2026/06/03/yandex-lavka-disabled/ | `02`, `03a`, `06a`, `06d`, `06e`, `X2:uzsl_linguistics_education_community` |
| https://www.gazeta.uz/oz/2026/09/29/theater-of-mimicry-and-gesture/ | `02`, `03a`, `06d`, `OH`, `X1:uzbekistan_landscape` |
| https://www.gazeta.uz/ru/2015/11/16/operations/ | `01`, `02`, `OH`, `X1:uzbekistan_landscape` |
| https://www.gazeta.uz/ru/2019/04/17/subtitles/ | `X2:uzsl_linguistics_education_community` |
| https://www.gazeta.uz/ru/2020/09/23/sign-language/ | `02`, `06c`, `X2:uzsl_linguistics_education_community` |
| https://www.gazeta.uz/ru/2025/07/15/sign-language/ | `02`, `03a`, `06a`, `X1:uzbekistan_landscape`, `X2:uzsl_linguistics_education_community` |
| https://www.gazeta.uz/ru/2025/09/28/sign-language/ | `02`, `03a`, `05`, `06a`, `06c`, `06g`, `X1:uzbekistan_landscape`, `X2:uzsl_linguistics_education_community` |
| https://www.cbinsights.com/company/convo-communications | `OH`, `X1:deaf_centered_product_ux` |
| https://www.cbinsights.com/company/kivo-1 | `08` |
| https://www.cbinsights.com/company/sign-speak/financials | `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://www.cbinsights.com/company/signall1 | `03c`, `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://www.cbinsights.com/company/slait-school | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://www.cbinsights.com/company/tilo | `08` |
| https://www.cbinsights.com/company/zuvi-1 | `08` |
| https://habr.com/p/733914 | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://habr.com/ru/amp/publications/773624 | `03b`, `X1:russia_cis_ecosystem` |
| https://habr.com/ru/articles/658575 | `03b`, `X2:russia_cis_competitors` |
| https://habr.com/ru/companies/sberbank/news/846240 | `03b`, `04d`, `X1:russia_cis_ecosystem`, `X2:russia_cis_competitors` |
| https://habr.com/ru/companies/sberdevices/articles/737018 | `03b`, `X1:russia_cis_ecosystem` |
| https://habr.com/ru/news/857050 | `03b`, `X2:russia_cis_competitors` |
| https://habr.com/ru/post/901868 | `03b`, `06a`, `06e`, `X2:russia_cis_competitors` |
| https://www.hearingtracker.com/apps/asl-bloom | `03c`, `03d`, `03e`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.hearingtracker.com/apps/ava | `03d`, `03g`, `06a`, `06b`, `X2:global_feature_matrix` |
| https://www.hearingtracker.com/apps/google-live-transcribe | `03d`, `03g`, `06a`, `06b`, `X2:global_feature_matrix` |
| https://www.hearingtracker.com/apps/phone-video | `03d`, `03f`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.hearingtracker.com/apps/rylo | `03d`, `03f`, `03g`, `X2:global_feature_matrix` |
| https://www.hearingtracker.com/apps/signschool | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.hearingtracker.com/apps/sorenson-ntouch | `03d`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://daryo.uz/2018/01/05/sharoit-yaratib-berilsa-bizdan-ham-hokimu-deputatlar-chiqadi-eshitish-qobiliyatini-yoqotgan-ozbekistonliklarni-nimalar-qiynamoqda/ | `X1:uzbekistan_landscape` |
| https://daryo.uz/2019/03/30/oliy-majlis-huzuridagi-jamoat-fondi | `X2:uzbekistan_legal_costs` |
| https://daryo.uz/2021/10/07/jamiyat-bizni-oziga-ogay-sanaydi-eshitish-va-gapirish-imkoniyati-cheklanganlar-ham-sifatli-talim-yaxshi-sharoit-izlab-toshkentga-kelishga-majbur-shifoko/ | `02`, `X1:uzbekistan_landscape` |
| https://daryo.uz/2025/07/11/ozbekistonda-aholining-necha-foizini-nogironlar-tashkil-qilishi-malum-boldi/ | `01`, `02`, `OH`, `X1:uzbekistan_landscape` |
| https://daryo.uz/en/2026/01/07/uzbekistan-sets-new-criteria-for-publicly-important-organizations-and-simplifies-financial-reporting/ | `05`, `X2:nonprofit_models_funding` |
| https://techcrunch.com/2016/11/21/ava-gives-the-hearing-impaired-a-more-present-voice-in-group-conversations | `03d`, `03g`, `X2:global_feature_matrix` |
| https://techcrunch.com/2020/12/10/ava-expands-its-ai-captioning-to-desktop-and-web-apps-and-raises-4-5m-to-scale | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://techcrunch.com/2021/04/26/slaits-real-time-sign-language-translation-promises-more-accessible-online-communication | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://techcrunch.com/2023/05/11/slait-pivots-from-translating-sign-language-to-ai-powered-interactive-lessons/amp/ | `03c`, `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://techcrunch.com/2025/05/20/the-newest-google-gemma-ai-model-can-run-on-phones | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://uza.uz/ar/posts/fuqarolik-jamiyati-institutlari-tashabbuslarini-amalga-oshirishga-116-milliard-som-yonaltiriladi_925975 | `01`, `05`, `06e`, `06g`, `X2:nonprofit_models_funding`, `X2:uzbekistan_legal_costs` |
| https://uza.uz/ar/posts/namanganda-nodavlat-notijorat-tashkilotlariga-etibor-qanday_889173 | `05`, `06e`, `X2:uzbekistan_legal_costs` |
| https://uza.uz/en/posts/davlat-granti-tanlovi-goliblari-aniqlandi_883953 | `05`, `06g`, `X2:nonprofit_models_funding`, `X2:uzbekistan_legal_costs` |
| https://uza.uz/en/posts/uzbekistans-taekwondo-athletes-completed-the-tokyo-2025-deaflympics-with-10-medals_788172 | `02`, `X2:uzsl_linguistics_education_community` |
| https://uza.uz/react/posts/uzbekistans-athletes-to-attend-tokyo-2025-deaflympics_783467 | `X2:uzsl_linguistics_education_community` |
| https://multilingual.com/?p=221809 | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://multilingual.com/coset-safe-ai-task-force-risk-framework-automated-interpreting-slxai-summit/ | `04a`, `05`, `06d`, `OH`, `X1:deaf_centered_product_ux` |
| https://multilingual.com/google-signgemma-on-device-asl-translation/ | `03d`, `03g`, `04a`, `X1:global_apps_and_business_models`, `X1:open_source_tech_stack` |
| https://multilingual.com/signaloud-gloves/ | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://www.newswire.com/news/convo-launches-platform-for-the-deaf-integrating-visual | `06a`, `X1:deaf_centered_product_ux` |
| https://www.newswire.com/news/sign-language-interpreting-leaders-chart-a-path-for-ethical-ai-in-sign-22254286 | `X1:deaf_centered_product_ux` |
| https://www.newswire.com/view/content/first-of-its-kind-ethical-ai-guidance-for-interpreting-released-by-22376003 | `04a`, `X1:deaf_centered_product_ux` |
| https://www.newswire.com/view/content/sign-language-interpreting-leaders-chart-a-path-for-ethical-ai-in-sign-22254286 | `04a`, `X1:deaf_centered_product_ux` |
| https://buxgalter.uz/oz/publish/doc/text194589_uzbekistonda_bhm_mhekm_phbm_va_mih_miqdorlari | `X2:uzbekistan_legal_costs` |
| https://buxgalter.uz/oz/publish/doc/text205244_sk-2025_it-park_rezidentlari_uchun_imtiezlar_uzaytirildi | `05`, `X2:uzbekistan_legal_costs` |
| https://buxgalter.uz/oz/publish/doc/text216780_1_sentyabrdan_boshlab_mhekm_va_bhmning_uzgarishi_ish_haqini_hisoblashga_qanday_tasir_kursatadi | `06c`, `06e`, `X2:uzbekistan_legal_costs` |
| https://mobile-review.com/all/?p=136951 | `03b`, `X2:russia_cis_competitors` |
| https://mobile-review.com/all/?p=259570 | `01`, `03b`, `04c`, `06a`, `06d`, `06e`, `06f`, `X2:russia_cis_competitors` |
| https://mobile-review.com/articles/2017/oper-news-07-2017.shtml | `03b`, `X2:russia_cis_competitors` |
| https://www.producthunt.com/products/ace-asl/makers | `03d`, `X2:region_americas` |
| https://www.producthunt.com/products/jondu-offline-budget-expense-tracker/makers | `08` |
| https://www.producthunt.com/products/sign-bridge-ai-2/launches | `03e`, `X2:region_east_asia_oceania` |
| https://thebetterindia.com/206175/apps-tech-for-deaf-start-up-pune-accessible-technology-isl-content-videos | `03f`, `03g`, `X1:global_apps_and_business_models` |
| https://thebetterindia.com/367935/signable-app-for-deaf-people-rupmani-chhetri-startup-bengaluru | `03f`, `03g`, `OH`, `X1:global_apps_and_business_models`, `X2:region_south_asia_mena_africa` |
| https://thebetterindia.com/changemakers/shraddha-agarwal-signsetu-deaf-literacy-isl-english-learning-platform-for-children-10943790 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.uzdaily.uz/ru/fond-zamin-10-operatsii-v-ramkakh-programmy-kokhlearnaia-implantatsiia-dlia-detei-shkolnogo-vozrasta/ | `02`, `OH`, `X1:uzbekistan_landscape` |
| https://www.uzdaily.uz/ru/pri-provedenii-priema-grazhdan-v-obiazatelnom-poriadke-budet-obespechivatsia-uchastie-surdoperevodchika/ | `02`, `05`, `OH`, `X1:uzbekistan_landscape` |
| https://www.uzdaily.uz/ru/provedeny-12-operatsii-v-ramkakh-programmy-fonda-zamin/ | `02`, `X1:uzbekistan_landscape` |
| https://www.businesswire.com/news/home/20210401005516/en/SignAll-Launches-Ace-ASL-App-AI-Will-Help-to-Learn-Sign-Language | `03c`, `03d`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.businesswire.com/news/home/20260604498117/en/ | `03d`, `03f`, `03g`, `04b`, `OH`, `X1:global_apps_and_business_models`, `X2:open_source_clonable` |
| https://www.comnews.ru/content/119429/2019-04-30/vympelkom-napolnil-socialnyy-paket | `03b`, `X2:russia_cis_competitors` |
| https://www.comnews.ru/digital-economy/content/238797/2025-04-14/2025-w16/1012/sber-privlechyot-lyudey-invalidnostyu-dlya-razrabotki-novykh-inklyuzivnykh-servisov-baze-ii | `03b`, `X1:russia_cis_ecosystem` |
| https://emprendedor.com/mateo-salvatto-el-nino-que-sono-cambiar-al-mundo-con-la-tecnologia-y-hoy-asiste-a-mas-de-400000-personas-con-discapacidad/ | `03d`, `X2:region_americas` |
| https://emprendedor.com/tag/tecprize/ | `03d`, `X2:region_americas` |
| https://hearinghealthmatters.org/?p=19908 | `04a`, `X1:deaf_centered_product_ux` |
| https://hearinghealthmatters.org/thisweek/2026/rylo-captions-context/ | `03f`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://kaktus.media/doc/531826_v_kyrgyzstane_nehvatka_syrdoperevodchikov_s_uridicheskim_yklonom_zatiagivaet_processy_v_sydah.html | `03b`, `X2:russia_cis_competitors` |
| https://kaktus.media/doc/532547_iandeks_go_adaptiroval_servis_taksi_dlia_glyhih_voditeley.html | `03b`, `X2:russia_cis_competitors` |
| https://macrumors.com/2026/11/10/apple-tv-sign-language-interpretation | `03d`, `X2:region_americas` |
| https://www.macrumors.com/2026/03/26/google-translate-gemini-ai/ | `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://www.neohear.com/?p=4777 | `03c`, `03g`, `X2:global_feature_matrix` |
| https://www.neohear.com/?p=6069 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.netzwoche.ch/news/2025-10-27/ki-assistent-fuer-bahnreisende-kommuniziert-in-gebaerdensprache | `03c`, `X2:region_europe` |
| https://www.netzwoche.ch/news/2026-10-16/schweiz-ermoeglicht-gehoerlosen-telefonate-rund-um-die-uhr-aber-nicht-per-video | `03c`, `X2:region_europe` |
| https://www.pulse.bot/hotels/news/mke-airport-launches-asl-interpeting-service-for-travelers-5039c2da-c12c-47f4-b6ef-eb770888db3e/ | `03d`, `X2:region_americas` |
| https://www.pulse.bot/telecom/blogs/beeline-kyrgyzstan-launches-mobile-plan-with-zero-rated-ai-apps-e490b846-0dc7-4ba1-b036-87798c89630a | `05`, `06d`, `06e`, `06f`, `X2:uzbekistan_legal_costs` |
| https://ruward.ru/cases/1024/ | `03b`, `OH`, `X1:russia_cis_ecosystem`, `X2:russia_cis_competitors` |
| https://ruward.ru/cases/8432/ | `03b`, `X2:russia_cis_competitors` |
| https://www.spot.uz/ru/2025/11/12/uzinfocom/ | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://www.spot.uz/ru/2026/08/04/personal-data-abroad/ | `05`, `06b`, `06g`, `X2:uzbekistan_legal_costs` |
| https://startupi.com.br/ame-plataforma-de-traducao-de-libras-empresas/ | `03d`, `X2:region_americas` |
| https://startupi.com.br/socialtech-capixaba-mostra-como-o-uso-de-qr-codes-em-libras-ja-viabilizou-mais-de-10-mil-atendimentos-publicos-no-estado/ | `03d`, `X2:region_americas` |
| https://yuz.uz/ru/news/inklyuzivnoe-obrazovanie-kak-obespechivaetsya-ravenstvo-prav-i-vozmojnostey-dlya-lits-s-invalidnostyu | `02`, `X1:uzbekistan_landscape` |
| https://yuz.uz/ru/news/tsentr-gosuslug-otdela-yustitsii-goroda-navoi-vvel-novy-vid-servisa-dlya-lyudey-s-invalidnostyu-so-sluxom | `02`, `03a`, `03b`, `06a`, `06d`, `06g`, `X2:russia_cis_competitors` |
| https://9to5google.com/2022/03/10/google-live-transcribe-feature-now-works-when-offline/ | `03d`, `03g`, `06b`, `X2:global_feature_matrix` |
| https://www.axios.com/2022/05/04/ava-live-caption-company-scores-10m | `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://azertag.az/en/xeber/__birbank_revolutionizes_barrier_free_banking_launching_sign_language_video_call_service-3763259 | `03b`, `06f`, `X2:russia_cis_competitors` |
| https://delfino.cr/2026/10/defensoria-advierte-barreras-para-la-atencion-de-personas-sordas-por-falta-de-interpretes-de-lesco | `03d`, `X2:region_americas` |
| https://economist.kg/society/2026/06/16/kazakhstan-zhestovyy-yazyk-status.md | `03b`, `05`, `06a`, `06f`, `X2:russia_cis_competitors` |
| https://everand.com/article/532432338/Why-Sign-Language-Gloves-Don-t-Help-Deaf-People | `03d`, `03f`, `03g`, `06a`, `OH`, `X1:global_apps_and_business_models` |
| https://www.gazeta.ru/business/news/2025/12/03/27328525.shtml | `03b`, `X1:russia_cis_ecosystem`, `X2:russia_cis_competitors` |
| https://global.techradar.com/es-es/computing/websites-apps/por-que-tu-negocio-pierde-7-por-ciento-de-ventas | `03d`, `X2:region_americas` |
| https://infoedu.uz/nogironligi-bolgan-shaxslarga-imtihonlarda-qoshimcha-vaqt-beriladi | `02`, `05`, `06e`, `06f`, `06g`, `X2:uzbekistan_legal_costs` |
| https://www.inform.kz/ru/na-telekanale-jibek-joly-zapushen-ii-surdoperevodchik-dlya-detey-ce881b | `03b`, `X2:russia_cis_competitors` |
| https://www.ixbt.com/live/comments/3274281 | `03b`, `X2:russia_cis_competitors` |
| https://jch.kun.uz/en/news/2025/07/16/uzbekistan-losing-up-to-45-billion-annually-due-to-data-localization-law-analysis | `05`, `X2:uzbekistan_legal_costs` |
| https://livingmadeeasy.org.uk/product/signly-sign-text-to-bsl | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://medium.com/hci-design-at-uw/social-app-accessibility-for-deaf-signers-9b3f84027c92 | `04a`, `06a`, `OH`, `X1:deaf_centered_product_ux` |
| https://mergr.com/transaction/teleperformance-acquires-zp-better-together | `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://www.npr.org/sections/alltechconsidered/2016/05/17/478244421/these-gloves-offer-a-modern-twist-on-sign-language | `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://nuz.uz/2026/05/16/v-uzbekistane-rasshiryayut-podgotovku-surdogidov-dlya-turistov-s-narusheniem-sluha/ | `02`, `X1:uzbekistan_landscape` |
| https://old.hook.report/2020/11/bizsiz-biz-haqimizda-hech-narsa/ | `02`, `03a`, `05`, `06d`, `06g`, `OH`, `X1:uzbekistan_landscape` |
| https://oz.sputniknews.uz/20221202/men-eshitishni-xohlayman---loyihasi-doirasida-300ga-yaqin-eshitish-apparati-tarqatildi-30455331.html | `02`, `X2:uzsl_linguistics_education_community` |
| https://pandaily.com/?p=91138 | `03e`, `X2:region_east_asia_oceania` |
| https://podrobno.uz/cat/tehnp/v-uzbekistane-razrabotali-ii-platformu-dlya-perevoda-rechi-i-teksta-na-yazyk-zhestov/ | `03a`, `04c`, `06a`, `OH`, `X1:browser_youtube_google_findings`, `X2:uzbek_speech_bigtech_support` |
| https://prachataienglish.com/node/11567 | `01`, `03e`, `03f`, `05`, `06e`, `06g`, `X2:region_south_asia_mena_africa` |
| https://qalampir.uz/uz/news/uzbekistondagi-nogironligi-bor-shakhslar-soni-ochik-landi-117480 | `02`, `X1:uzbekistan_landscape` |
| https://www.rbc.ru/life/news/654e03b99a794740e24f93a9 | `03b`, `X2:russia_cis_competitors` |
| https://runtimewire.com/article/nagish-rylo-85-million-general-catalyst | `03d`, `03f`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://www.sixthtone.com/news/1017316/The%20Promise%20and%20Pitfalls%20of%20China%E2%80%99s%20AI%20Sign%20Language%20Interpreters | `03e`, `06f`, `06g`, `X2:region_east_asia_oceania` |
| https://startupbase.uz/en/news/tilmoch-ai-an-uzbek-startup-changing-the-future-of | `03a`, `04c`, `X1:uzbekistan_landscape` |
| https://www.startupdaily.net/topic/funding/red-cross-impact-investor-humanitech-lab-backs-kara-technologies-and-airseed-with-500000-grants/ | `03e`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://surxontongi.uz/2026/08/03/surdo-ai-milliy-yechim/ | `03a`, `04c`, `X1:browser_youtube_google_findings` |
| https://www.tashkenttimes.uz/national/6528-mirziyoyev-signs-decree-banning-government-interference-into-ngos-activities | `05`, `06e`, `X2:nonprofit_models_funding` |
| https://tech.eu/2024/06/05/signapse-secures-ps2m-seed-for-ai-sign-language-tanslation/ | `03c`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://tech.slator.com/?p=102822 | `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://tech.yahoo.com/home/articles/apple-expands-accessibility-features-including-120000358.html | `03d`, `03g`, `X2:global_feature_matrix` |
| https://tengrihealth.kz/article//daze-zapis-vracu-kvest-kazaxstancy-naruseniem-sluxa-4136/ | `03b`, `05`, `06a`, `06f`, `X2:russia_cis_competitors` |
| https://tengrinews.kz/kazakhstan_news/kazahskiy-surdoperevod-pomoschi-ii-zapustili-detey-570512/ | `03b`, `X2:russia_cis_competitors` |
| https://www.thaipbsworld.com/science-technology/the-impact-of-technology-on-the-hard-of-hearing | `03f`, `05`, `06a`, `06b`, `X2:region_south_asia_mena_africa` |
| https://the-decoder.com/metas-omnilingual-asr-brings-speech-recognition-to-1600-languages/ | `04c`, `X1:open_source_tech_stack` |
| https://www.the-star.co.ke/health/2025-10-23-kenyan-creates-first-sign-language-app | `03f`, `X2:region_south_asia_mena_africa` |
| https://thediplomat.com/2025/03/usaid-cuts-devastating-to-central-asia-programs | `X1:uzbekistan_landscape` |
| https://www.trthaber.com/haber/turkiye/isaret-dilini-ogrenmek-artik-daha-kolay-435005.html | `03f`, `X2:region_south_asia_mena_africa` |
| https://uz.kursiv.media/?p=692691 | `X1:uzbekistan_landscape` |
| https://uzdaily.ru/en/president-signs-law-regulating-ngos-and-introducing-new-fines | `05`, `06g`, `X2:nonprofit_models_funding` |
| https://www.uznews.uz/ru/news/7960 | `X1:uzbekistan_landscape` |
| https://vc.ru/324877-telegram-bot-silero-besplatno-perevodit-rech-v-tekst | `03b`, `X2:russia_cis_competitors` |
| https://www.vedomosti.ru/management/articles/2017/12/01/743808-programmist-veteran-afganets-surdoperevodchik | `03b`, `X2:russia_cis_competitors` |
| https://xs.uz/en/post/112-unified-dispatch-service-now-fully-operational-across-uzbekistan | `02`, `X2:uzbekistan_legal_costs` |

<a id="c-org"></a>

### 4.6 Tashkilotlar, NNT, xalqaro idoralar va universitetlar (140 URL)

Domenlar (80): undp.org (8), eena.org (7), unicef.org (6), wfdeaf.org (6), zeroproject.org (5), icnl.org (4), 3playmedia.com (3), devedu.uz (3), dglb.de (3), gallaudet.edu (3), issai.nu.edu.kz (3), nhk-fdn.or.jp (3), nlnet.nl (3), sorenson.com (3), bda.org.uk (2), digitalpublicgoods.net (2), eprints.whiterose.ac.uk (2), irishdeafsociety.ie (2), itu.int (2), monash.edu (2), nu.edu.kz (2), nur.nu.edu.kz (2), open.bu.edu (2), sharoitplus.uz (2), vhg.cmp.uea.ac.uk (2) ...

| URL | Keltirgan hujjatlar |
|---|---|
| https://www.undp.org/ky/node/588326 | `03b`, `X2:russia_cis_competitors` |
| https://www.undp.org/kyrgyzstan/news/how-mobile-applications-have-opened-doors-children-hearing-loss | `03b`, `X2:russia_cis_competitors` |
| https://www.undp.org/node/122981 | `03b`, `OH`, `X1:russia_cis_ecosystem` |
| https://www.undp.org/ru/node/498191 | `03b`, `X2:russia_cis_competitors` |
| https://www.undp.org/ru/node/588326 | `03b`, `06a`, `06c`, `06f`, `06g`, `X2:russia_cis_competitors` |
| https://www.undp.org/uz/node/537801 | `05`, `06d`, `X2:nonprofit_models_funding` |
| https://www.undp.org/uz/node/593281 | `05`, `06e`, `X2:uzbekistan_legal_costs` |
| https://www.undp.org/uzbekistan/stories/young-people-develop-ai-solutions-uzbek-language | `04c`, `04d`, `X1:uzbekistan_landscape` |
| https://eena.org/?p=33066 | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://eena.org/document/real-time-text-in-ireland | `03c`, `03g`, `04a`, `06a`, `OH`, `X1:deaf_centered_product_ux`, `X1:global_apps_and_business_models` |
| https://eena.org/knowledge-hub/documents/strategies-for-accessible-emergency-communications | `X1:deaf_centered_product_ux` |
| https://eena.org/news/european-accessibility-act-begins-applying-across-the-eu/ | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://eena.org/news/greeces-civil-protection-plans-112-upgrade-with-accessibility-in-mind/ | `03c`, `X2:region_europe` |
| https://eena.org/wp-content/uploads/2025_04_23_Open_letter_accessibility_emergency_communications_signed_.pdf | `04a`, `OH`, `X1:deaf_centered_product_ux` |
| https://eena.org/wp-content/uploads/2026/02/Accessibility-report-card-abstract.pdf | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://www.unicef.org/eca/media/22051/file/Case%20study%201.pdf | `X1:deaf_centered_product_ux`, `X2:nonprofit_models_funding` |
| https://www.unicef.org/innovation/call-for-application-climate-and-health-2026 | `05`, `X2:nonprofit_models_funding` |
| https://www.unicef.org/innovation/equity-free-funding-blockchain-solutions | `X2:nonprofit_models_funding` |
| https://www.unicef.org/innovation/stories/giving-every-child-voice-aac-technology | `06a`, `OH`, `X1:deaf_centered_product_ux` |
| https://www.unicef.org/uzbekistan/en/press-releases/all-rights-all-children | `X1:uzbekistan_landscape` |
| https://www.unicef.org/uzbekistan/en/stories/towards-building-better-world-fit-children-disabilities | `X1:uzbekistan_landscape` |
| https://wfdeaf.org/?p=12027 | `04a`, `05`, `06d`, `06f`, `X1:deaf_centered_product_ux` |
| https://wfdeaf.org/?p=18327 | `04a`, `05`, `06a`, `06d`, `06g`, `X1:deaf_centered_product_ux` |
| https://wfdeaf.org/?p=19272 | `03b`, `06a`, `06f`, `X2:russia_cis_competitors` |
| https://wfdeaf.org/?p=56 | `04a`, `X1:deaf_centered_product_ux` |
| https://wfdeaf.org/wp-content/uploads/WFD-and-WASLI-Statement-on-Avatar-FINAL-14032018-Updated-14042018.pdf | `01`, `03e`, `03g`, `04a`, `05`, `06a`, `06d`, `06g`, `OH`, `X1:deaf_centered_product_ux`, `X1:global_apps_and_business_models`, `X2:nonprofit_models_funding` |
| https://wfdeaf.org/wp-content/uploads/WFD-and-WFDYS-input-to-the-General-Comment-on-children-rights-Final-document.pdf | `04a`, `X1:deaf_centered_product_ux` |
| https://zeroproject.org/view/project/100ff85a-f64c-f011-8779-7c1e527683f1 | `03c`, `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://zeroproject.org/view/project/7c20287f-b012-eb11-a813-0022489b3a6d | `03d`, `X2:region_americas` |
| https://zeroproject.org/view/project/903d6336-9917-eb11-a813-000d3ab9b226 | `03f`, `X2:region_south_asia_mena_africa` |
| https://zeroproject.org/view/project/ed68f3cd-30ea-4992-9530-d0a8a3f25506 | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://zeroproject.org/view/project/f652dc39-9b17-eb11-a813-0022489b3a6d | `03c`, `X2:region_europe` |
| https://www.icnl.org/resources/civic-freedom-monitor/uzbekistan | `05`, `X2:nonprofit_models_funding` |
| https://www.icnl.org/wp-content/uploads/Overview_Uzbekistan-Regulation-527-Oct-2023_FV.pdf | `05`, `06g`, `X2:nonprofit_models_funding` |
| https://www.icnl.org/wp-content/uploads/Uzbekistan_assocrus.pdf | `X2:uzbekistan_legal_costs` |
| https://www.icnl.org/wp-content/uploads/Uzbekistan_charters.pdf | `05`, `X2:uzbekistan_legal_costs` |
| https://3playmedia.com/learn/faces-behind-screen/asl-app | `03d`, `X2:region_americas` |
| https://www.3playmedia.com/access/2024-hub/deaf-safe-ai | `04a`, `06a`, `OH`, `X1:deaf_centered_product_ux` |
| https://www.3playmedia.com/wp-content/uploads/2024/05/Advocating-for-DeafSafeAI-Regulations-ACCESS-2024.pdf | `04a`, `X1:deaf_centered_product_ux` |
| https://devedu.uz/wp-content/uploads/2024/05/2-Ozbek-imo-ishora-nutqi-yangi-majmua.pdf | `02`, `X2:uzsl_linguistics_education_community` |
| https://devedu.uz/wp-content/uploads/2024/05/3-Daktilologiya-va-imo-ishora-nutqi.pdf | `02`, `06c`, `OH`, `X1:uzbekistan_landscape`, `X2:uzsl_linguistics_education_community` |
| https://devedu.uz/wp-content/uploads/2024/05/4-Daktil-va-imo-ishora-nutqiga-orgatish.pdf | `X2:uzsl_linguistics_education_community` |
| https://dglb.de/wp-content/uploads/2024/01/dgb_stellungnahme_2018_06.pdf | `03c`, `X2:region_europe` |
| https://dglb.de/wp-content/uploads/2024/02/2024_01_24_Wichtige_Informationen_zum_Einsatz_von_Gebaerdensprach.pdf | `03c`, `X2:region_europe` |
| https://dglb.de/wp-content/uploads/2024/05/01_2024-Pressemitteilung_Gebaerdensprach-Avatare.pdf | `03c`, `X2:region_europe` |
| https://gallaudet.edu/alumni-relations/alumni-in-india-make-bollywood-film-accessible-in-indian-sign-language/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://gallaudet.edu/research/artificial-intelligence-accessibility-and-sign-language-center/ | `03d`, `X2:region_americas` |
| https://gallaudet.edu/research/artificial-intelligence-accessibility-and-sign-language-center/summer-interns-find-ways-to-harness-ai-for-accessibility/ | `03d`, `X2:region_americas` |
| https://issai.nu.edu.kz/2021/08/06/issai-team-has-developed-the-uzbek-speech-corpus/ | `04d`, `X1:open_source_tech_stack` |
| https://issai.nu.edu.kz/?p=51729 | `03b`, `X1:russia_cis_ecosystem` |
| https://issai.nu.edu.kz/?p=62139 | `03b`, `06d`, `06e`, `06f`, `X2:russia_cis_competitors` |
| https://www.nhk-fdn.or.jp/es/assets/img/lab/pdf/004.pdf | `03e`, `X2:region_east_asia_oceania` |
| https://www.nhk-fdn.or.jp/es/news/archive/shuwaCG.pdf | `03e`, `X2:region_east_asia_oceania` |
| https://www.nhk-fdn.or.jp/es/view/pdf/VIEW2021_40_6_11.pdf | `03e`, `X2:region_east_asia_oceania` |
| https://nlnet.nl/news/2026/20260601-call.html | `X2:nonprofit_models_funding` |
| https://nlnet.nl/news/2026/20260612-NGIZero-stocktaking.html | `05`, `X2:nonprofit_models_funding` |
| https://www.nlnet.nl/commonsfund | `05`, `06g`, `X2:nonprofit_models_funding` |
| https://sorenson.com/blog/vrs/the-best-apps-for-deaf-people-in-2025/ | `03d`, `03g`, `X2:global_feature_matrix` |
| https://sorenson.com/newsroom/sorenson-communications-unveils-ai-sign-language-translation-ast-proofs-of-concept/ | `03d`, `X2:region_americas` |
| https://sorenson.com/wp-content/uploads/2024/08/guide-ntouch-mobile-android-userguide-v9.3.pdf | `03d`, `03g`, `X2:global_feature_matrix` |
| https://bda.org.uk/ai-bsl-discussion-paper/ | `04a`, `X1:deaf_centered_product_ux` |
| https://bda.org.uk/wp-content/uploads/2025/11/early-sign-language-benefit-evidence-review-v2.pdf | `04a`, `X1:deaf_centered_product_ux` |
| https://digitalpublicgoods.net/digital-public-goods/faqs | `X2:nonprofit_models_funding` |
| https://www.digitalpublicgoods.net/digital-public-goods | `05`, `06a`, `06b`, `X2:nonprofit_models_funding` |
| https://eprints.whiterose.ac.uk/id/eprint/240360/ | `X1:deaf_centered_product_ux` |
| https://eprints.whiterose.ac.uk/id/eprint/240360/8/s12913-026-14444-y.pdf | `04a`, `X1:deaf_centered_product_ux` |
| https://irishdeafsociety.ie/interpreters/remote-interpreting-services | `03c`, `X2:region_europe` |
| https://www.irishdeafsociety.ie/vodafone-ireland-has-launched-a-new-emergency-real-time-text-rtt-service/ | `03c`, `03g`, `06f`, `X2:global_feature_matrix` |
| https://www.itu.int/net4/wsis/stocktaking/Prizes/2025/Details/15435411781736025 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.itu.int/net4/wsis/stocktaking/Prizes/2025/Details/16098403635330447 | `03c`, `X2:region_europe` |
| https://www.monash.edu/mats/projects/co-designing-digital-mental-health-interventions | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.monash.edu/mats/projects/improving-healthcare-access | `03f`, `X2:region_south_asia_mena_africa` |
| https://nu.edu.kz/?p=3127 | `X2:nonprofit_models_funding` |
| https://nu.edu.kz/?p=6778 | `03b`, `X1:russia_cis_ecosystem` |
| https://nur.nu.edu.kz/bitstreams/9ef0b977-2c24-4605-9e54-154208bcd966/download | `03b`, `X1:russia_cis_ecosystem` |
| https://nur.nu.edu.kz/handle/123456789/9864 | `03b`, `X1:russia_cis_ecosystem` |
| https://open.bu.edu/bitstream/handle/2144/41846/CaselliHallHenner2020.pdf?sequence=3 | `04a`, `X1:deaf_centered_product_ux` |
| https://open.bu.edu/items/8b9d7ea6-73b0-4593-a32a-39a22a42695d | `04a`, `X2:academic_research_synthesis` |
| https://sharoitplus.uz/category/loyihalar/ | `01`, `03a`, `04d`, `05`, `06a`, `06c`, `06d`, `06g`, `X2:uzsl_linguistics_education_community` |
| https://sharoitplus.uz/ozbek-imo-ishora-tili-oiit-onlayn-lugati-uchun-veb-sayt-va-mobil-ilovani-ishlab-chiqish-boyicha-tender-natijalari/ | `03a`, `OH`, `X1:uzbekistan_landscape` |
| https://vhg.cmp.uea.ac.uk/demo/SLTAT2011Dundee/5.html | `04a`, `X2:academic_research_synthesis` |
| https://vhg.cmp.uea.ac.uk/tech/jas/vhg2025a/ | `03c`, `04b`, `X2:open_source_clonable` |
| https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html | `04a`, `06a`, `X1:deaf_centered_product_ux` |
| https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html | `04a`, `06a`, `OH`, `X1:deaf_centered_product_ux` |
| https://wasli.org/news/wfd-wasli-statement-use-signing-avatars/ | `03g`, `X1:deaf_centered_product_ux`, `X1:global_apps_and_business_models`, `X2:nonprofit_models_funding` |
| https://wasli.org/wp-content/uploads/2023/07/WFD-and-WASLI-Statement-on-Avatar-FINAL-14032018-Updated-14042018-1.pdf | `04a`, `OH`, `X1:deaf_centered_product_ux` |
| https://www.who.int/news-room/events/detail/2021/03/03/default-calendar/launch-of-the-world-report-on-hearing | `X1:deaf_centered_product_ux` |
| https://www.who.int/news/item/02-03-2021-who-1-in-4-people-projected-to-have-hearing-problems-by-2050 | `04a`, `X1:deaf_centered_product_ux` |
| https://admissions.tma.uz/2026/06/inson-qalbiga-yol-imo-ishora-tili-orqali-%F0%9F%91%90/ | `02`, `06d`, `06g`, `OH`, `X1:uzbekistan_landscape` |
| https://ais.southampton.ac.uk/emergency-video-relay-bsl-2022/ | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://aisana.enu.kz/en/page/our-ai-agents/signbridge | `03b`, `OH`, `X1:russia_cis_ecosystem` |
| https://aml.korea.ac.kr/research/sign-language-translation | `03e`, `04a`, `04d`, `X2:region_east_asia_oceania` |
| https://www.auckland.ac.nz/en/news/2023/01/12/kara-technologies-sign-language-avatar-seed-funding.html | `03e`, `03g`, `X1:global_apps_and_business_models`, `X2:region_east_asia_oceania` |
| https://ballardbrief.byu.edu/issue-briefs/linguistic-neglect-of-deaf-children-in-the-united-states | `04a`, `X1:deaf_centered_product_ux` |
| https://www.bu.edu/articles/2017/asl-language-acquisition | `02`, `04a`, `06a`, `OH`, `X1:deaf_centered_product_ux` |
| https://cmkl.ac.th/projects-research/deaf-ai-translator | `03f`, `X2:region_south_asia_mena_africa` |
| https://core.ac.uk/outputs/739512648 | `03f`, `04d`, `X2:region_south_asia_mena_africa` |
| https://deafcenter.bu.edu/asl-lex | `03d`, `04d`, `X2:region_americas` |
| https://dl.ucsc.cmb.ac.lk/jspui/bitstream/123456789/4957/1/20020155%2c%2020020262%2c%2020021011%20.pdf | `03f`, `X2:region_south_asia_mena_africa` |
| https://documents1.worldbank.org/curated/en/099052223112035849/pdf/P1783520faee9f09d0a46307d56768f9126.pdf | `02`, `X1:uzbekistan_landscape` |
| https://efhoh.org/wp-content/uploads/2025/12/The-European-Accessibility-Act-from-Consultation-to-Implementation-Hard-of-Hearing-Perspective-5_compressed.pdf | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://eud.eu/wp-content/uploads/2025/06/Report-on-the-implementation-of-the-European-Electronic-Communications-Code.pdf | `03c`, `06a`, `06d`, `06e`, `06f`, `06g`, `X2:region_europe` |
| https://expresslicensing.uea.ac.uk/product/cwa-signing-avatars | `03c`, `04b`, `X2:open_source_clonable` |
| https://globaldisabilityfund.org/programme/uzbekistan/ | `05`, `OH`, `X1:uzbekistan_landscape` |
| https://https-sage-cnpereading-com-443.webvpn1.xju.edu.cn/doi/10.1177/23294906241288829 | `X1:deaf_centered_product_ux` |
| https://hu.nl/onderzoek/publicaties/exploring-automatic-texttosign-translation-in-a-healthcare-setting | `03c`, `03g`, `04a`, `OH`, `X1:global_apps_and_business_models` |
| https://jointsdgfund.org/programme/un-joint-programme-strengthening-social-protection-uzbekistan | `X1:uzbekistan_landscape` |
| https://journal.astanait.edu.kz/index.php/ojs/article/view/553 | `03b`, `X1:russia_cis_ecosystem` |
| https://library.kab.ac.ug/Record/doaj-art-1101a811a36c4ab2a9a28b2e2dcdbfd6 | `03f`, `X2:region_south_asia_mena_africa` |
| https://lists.w3.org/Archives/Public/public-rqtf/2021May/0028.html | `X2:nonprofit_models_funding` |
| https://llcn.sdsu.edu/research-areas/asl-lex/ | `03d`, `04d`, `X2:region_americas` |
| https://muse.jhu.edu/article/384115/summary | `04a`, `X1:deaf_centered_product_ux` |
| https://nftrs.or.jp/news/fy2024/files/NFTRSpapers_fy2024-001.pdf | `01`, `03e`, `05`, `X2:region_east_asia_oceania` |
| https://now.tufts.edu/articles/visual-dictionary-sign-language | `03d`, `04d`, `X2:region_americas` |
| https://nsuworks.nova.edu/jadara/vol36/iss1/4 | `04a`, `X1:deaf_centered_product_ux` |
| https://nyuad.nyu.edu/en/news/latest-news/world-and-societies/2026/may/nyuad-student-co-founds-startup-to-make-sign-language-translatio.html | `03d`, `X2:region_americas` |
| https://www.ohchr.org/sites/default/files/Documents/Issues/Disability/ProvisionSupport/States/Permanent_Mission_of_Uzbekistan.doc | `02`, `OH`, `X1:uzbekistan_landscape` |
| https://ojs-teknik.usni.ac.id/index.php/jsk/article/view/763 | `03f`, `X2:region_south_asia_mena_africa` |
| https://onlinelibrary-wiley-com-443.webvpn.zafu.edu.cn/doi/10.1155/hsc/8867224 | `04a`, `X1:deaf_centered_product_ux` |
| https://orginfo.uz/en/organization/97f86baf947b/ | `03a`, `05`, `06d`, `06g`, `OH`, `X1:uzbekistan_landscape` |
| https://www.pcc.edu/instructional-support/tools/zoom/technical-guide-zoom-with-asl-interpretation/ | `03d`, `03g`, `X2:global_feature_matrix` |
| https://personalpages.surrey.ac.uk/r.bowden/publications/2024/WalshBMVA2024.pdf | `04a`, `X1:open_source_tech_stack` |
| https://pirun.ku.ac.th/~fhumalt/THSL/new_ThSL%20Digital%20Dict_23%20%20May%202007/Eng/preface.htm | `03f`, `X2:region_south_asia_mena_africa` |
| https://repository.uwc.ac.za/handle/10566/3705 | `04a`, `06a`, `OH`, `X1:deaf_centered_product_ux` |
| https://repository.wicida.ac.id/6370/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://research.nu.edu.kz/en/publications/crowdsourcing-kazakh-russian-sign-language-fluentsigners-50/ | `X2:nonprofit_models_funding` |
| https://researchportal.hw.ac.uk/en/publications/when-he-comes-into-police-custody-he-has-certain-rights-the-burde/ | `04a`, `X1:deaf_centered_product_ux` |
| https://www.rit.edu/news/rit-helps-google-develop-new-technology-converts-sign-language-text | `03d`, `X2:region_americas` |
| https://scholar.its.ac.id/en/publications/emoticons-as-self-disclosure-in-social-media-and-its-meaning-for-/ | `04a`, `X1:deaf_centered_product_ux` |
| https://signdata.cc.gatech.edu/view/datasets/popsign_v1_0/ | `03d`, `04b`, `04d`, `X2:open_source_clonable` |
| https://social.desa.un.org/sites/default/files/inline-files/8.4%20Haralsdottir%20Presentation.pdf | `X1:deaf_centered_product_ux` |
| https://software.sookmyung.ac.kr/bbs/software/722/100761/download.do | `03e`, `04d`, `X2:region_east_asia_oceania` |
| https://uea.ac.uk/groups-and-centres/interactive-graphics-and-audio/projects/interactive-graphics-projects/digital-humans/cwa-signing-avatars | `03c`, `04b`, `X2:open_source_clonable` |
| https://unprpd.org/new/wp-content/uploads/2023/12/Situation_Analysis_CountryBrief_Uzbekistan-eb2.pdf | `X1:uzbekistan_landscape` |
| https://urmcpublic-lb1.urmc.rochester.edu/MediaLibraries/URMCMedia/ncdhr/publications-presentations/documents/BarnettREALMposterNTID20070219_000.pdf | `04a`, `X1:deaf_centered_product_ux` |
| https://vh.cmp.uea.ac.uk/index.php/JASigning_Conditions | `03c`, `04b`, `X2:open_source_clonable` |
| https://vl2.gallaudet.edu/center-papers/596 | `04a`, `X2:academic_research_synthesis` |
| https://wicc2026.uai.edu.ar/posters/agentes%20y%20sistemas%20inteligentes/16460.pdf | `03d`, `X2:region_americas` |
| https://www.xjtlu.edu.cn/en/news/2025/06/breaking-barriers-with-a-sign-language-ai-project | `03e`, `X2:region_east_asia_oceania` |
| https://zerocon26.zeroproject.org/opportunities/UGFydGljaXBhdGlvbk9wcG9ydHVuaXR5OjIwMTQxNA== | `03c`, `03g`, `X2:global_feature_matrix` |

<a id="c-yt"></a>

### 4.7 YouTube va Telegram (25 URL)

Domenlar (4): youtube.com (16), t.me (7), telemetr.io (1), uz.tgstat.com (1)

| URL | Keltirgan hujjatlar |
|---|---|
| https://www.youtube.com/playlist?list=PL2T-j53zsYyPK9PciDuM0hKTlEC2yC-YY | `03a`, `06a`, `06c`, `06d`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/playlist?list=PL50GpPWEeykOmiz5AcoewaJePKI_Dmf5p | `03a`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/playlist?list=PL7i9BkmiEhFQ4IeSeZn05BL5mhIL9aTar | `03a`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/playlist?list=PLFAK0Jf-X7hWvNtW5t2oxyC6J4yDo3gzA | `X1:browser_youtube_google_findings` |
| https://www.youtube.com/playlist?list=PLJE5EgFisRhkJ51QEMZAT6L0Xj-pUoLiR | `X1:browser_youtube_google_findings` |
| https://www.youtube.com/playlist?list=PLkREkayoYCyIbxC-s0cOABSwdhkdbcbgz | `02`, `03a`, `05`, `06a`, `06c`, `06d`, `06g`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=OvzesYTuKZM | `03a`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=pcNfOQZbyZs | `03a`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=qPwahzCB6_8 | `04c`, `OH`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=tz8fFsK8SVs | `02`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=V2RWeGu9hmY | `02`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=xggsSLBX4fo | `03a`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=Xv8cx-EiuTA | `03a`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=Z0UcdGWCS8s | `02`, `06a`, `OH`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=Z6jNuB4CBVY | `01`, `02`, `03b`, `04a`, `04d`, `06a`, `06b`, `06c`, `OH`, `X1:browser_youtube_google_findings` |
| https://www.youtube.com/watch?v=zGfIHZnmmHw | `01`, `02`, `03a`, `06a`, `06c`, `06d`, `06e`, `06f`, `OH`, `X1:browser_youtube_google_findings` |
| https://t.me/NOM | `08` |
| https://t.me/s/ijtimoiyhimoya_agentligi/9540 | `03a`, `04c`, `06c`, `OH`, `X1:browser_youtube_google_findings` |
| https://t.me/s/imo_ishora_uz | `02`, `03a`, `X2:uzsl_linguistics_education_community` |
| https://t.me/s/sharoitplus | `03a`, `05`, `06d`, `OH`, `X1:uzbekistan_landscape` |
| https://t.me/s/uzsduz | `02`, `03a`, `06a`, `06c`, `X2:uzsl_linguistics_education_community` |
| https://t.me/tiloapp | `00`, `01` |
| https://t.me/uzsduz | `X2:uzsl_linguistics_education_community` |
| https://telemetr.io/en/channels/1481074705-uzsduz/posts | `02`, `03a`, `X2:uzsl_linguistics_education_community` |
| https://uz.tgstat.com/en/channel/@deaf_gluxoyy | `02`, `03a`, `X2:uzsl_linguistics_education_community` |

<a id="c-other"></a>

### 4.8 Boshqa (kompaniya saytlari, mahsulot sahifalari, hujjatlar) (516 URL)

Domenlar (428): microsoft.com (9), gsma.com (5), a11y-paradise.onrender.com (4), aisha.group (4), en.wikipedia.org (4), signapse.ai (4), apple.com (3), disabili.com (3), handtalk.me (3), markinton.com (3), rolkaloube.com (3), signvideo.co.uk (3), sites.google.com (3), yandex.cloud (3), apps.appfollow.io (2), bankofscotland.co.uk (2), blogs.nvidia.com (2), cboard.io (2), comreg.ie (2), contactscotland-bsl.org (2), convo.io (2), developers.sber.ru (2), echoboomer.pt (2), elevenlabs.io (2), en.nippon-foundation.or.jp (2) ...

| URL | Keltirgan hujjatlar |
|---|---|
| https://microsoft.com/ai-for-accessibility | `05`, `X2:nonprofit_models_funding` |
| https://microsoft.com/en-us/research/uploads/prod/2020/10/Exploring_Collection_of_Sign_Language_Datasets.pdf | `04a`, `06c`, `X1:deaf_centered_product_ux` |
| https://microsoft.com/en-us/research/uploads/prod/2021/09/3436996.pdf | `04a`, `06c`, `OH`, `X1:deaf_centered_product_ux` |
| https://www.microsoft.com/en-us/research/?p=599343 | `04a`, `X1:deaf_centered_product_ux` |
| https://www.microsoft.com/en-us/research/?p=701029 | `X1:deaf_centered_product_ux` |
| https://www.microsoft.com/en-us/research/?p=987693 | `04a`, `X1:deaf_centered_product_ux` |
| https://www.microsoft.com/en-us/research/project/asl-citizen/ | `X2:nonprofit_models_funding` |
| https://www.microsoft.com/en-us/research/project/asl-citizen/consent-form/ | `04d`, `05`, `X2:nonprofit_models_funding` |
| https://www.microsoft.com/en-us/research/project/asl-citizen/dataset-license/ | `04d`, `05`, `06g`, `OH`, `X1:open_source_tech_stack`, `X2:nonprofit_models_funding` |
| https://www.gsma.com/get-involved/gsma-foundry/wp-content/uploads/2023/11/DeafTawk-Helping-The-Deaf-To-Communicate.pdf | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.gsma.com/mobilefordevelopment/blog/making-sign-language-interpretation-accessible-for-all-through-mobile-assistive-technology/ | `03f`, `04a`, `X1:deaf_centered_product_ux`, `X2:region_south_asia_mena_africa` |
| https://www.gsma.com/mobilefordevelopment/digital-grantees-portfolio/signable-communications/ | `03f`, `05`, `X2:region_south_asia_mena_africa` |
| https://www.gsma.com/mobilefordevelopment/digital-grantees-portfolio/triac-deaftawk/ | `03f`, `05`, `X2:region_south_asia_mena_africa` |
| https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/wp-content/uploads/2026/07/GSMA_Pakistan-Market-Report%E2%80%94DeafTawk-Case-Study-final.pdf | `03f`, `X2:region_south_asia_mena_africa` |
| https://a11y-paradise.onrender.com/reviews/69a48d565627207a189028f8 | `04a`, `X2:academic_research_synthesis` |
| https://a11y-paradise.onrender.com/reviews/69d7295cc5280b1eb7898be7 | `04a`, `X2:academic_research_synthesis` |
| https://a11y-paradise.onrender.com/reviews/69d7e669bfbcd19d27f2318e | `04a`, `X2:academic_research_synthesis` |
| https://a11y-paradise.onrender.com/reviews/69e242fa20c3fe3111584d7d | `04a`, `X1:deaf_centered_product_ux`, `X2:academic_research_synthesis` |
| https://aisha.group/en/api-documentation/speech-to-text | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://aisha.group/en/pricing | `01`, `03a`, `04c`, `06b`, `06d`, `06e`, `06f`, `X2:uzbek_speech_bigtech_support` |
| https://aisha.group/en/uzbek-speech-recognition | `03a`, `04c`, `OH`, `X1:uzbekistan_landscape` |
| https://aisha.group/llms-full.txt | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://en.wikipedia.org/wiki/Deafness_in_Uzbekistan | `01`, `02`, `05`, `OH`, `X1:uzbekistan_landscape`, `X2:uzsl_linguistics_education_community` |
| https://en.wikipedia.org/wiki/Russian_Sign_Language | `02`, `04d`, `06c`, `06g`, `X2:uzsl_linguistics_education_community` |
| https://en.wikipedia.org/wiki/Uzbekistan_at_the_Deaflympics | `X2:uzsl_linguistics_education_community` |
| https://en.wikipedia.org/wiki/Uztelecom | `X1:uzbekistan_landscape` |
| https://signapse.ai/bsl | `03c`, `03g`, `X2:global_feature_matrix` |
| https://signapse.ai/new/signapse-closes-seed-funding-round | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://signapse.ai/post/introducing-asl-sign-language-translator | `03c`, `03g`, `X2:global_feature_matrix` |
| https://signapse.ai/post/pioneering-accessibility-enhancements-with-signapse-at-gerald-r-ford-international-airport | `03d`, `X2:region_americas` |
| https://apple.com/newsroom/2026/11/apple-tv-introduces-new-sign-language-interpretation-feature/ | `03d`, `X2:region_americas` |
| https://www.apple.com/government/docs/resources/No_Introduction_FY25_Whats_New_in_Apple_Accessibility.pdf | `03d`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.apple.com/ios/feature-availability/ | `04c`, `06a`, `06b`, `X2:uzbek_speech_bigtech_support` |
| https://www.disabili.com/prodotti/municipi-piu-accessibili-ai-cittadini-sordi-grazie-alla-tecnologia/ | `03c`, `X2:region_europe` |
| https://www.disabili.com/prodotti/sp-29171/ | `03c`, `X2:region_europe` |
| https://www.disabili.com/ultimora/in-abruzzo-il-tele-soccorso-per-sordi-col-sistema-ponte/ | `03c`, `X2:region_europe` |
| https://www.handtalk.me/en/ | `03d`, `X2:nonprofit_models_funding` |
| https://www.handtalk.me/en/blog/how-were-hugo-and-maya-created/ | `03d`, `03g`, `X1:deaf_centered_product_ux`, `X1:global_apps_and_business_models` |
| https://www.handtalk.me/en/blog/meet-the-hand-talk-sign-language-translator-app/ | `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://markinton.com/trademark/appteyo-99260108 | `08` |
| https://markinton.com/trademark/kivo-99445654 | `08` |
| https://markinton.com/trademark/teyo-79432001 | `08` |
| https://rolkaloube.com/programs/federal-itrs/news/fcc-releases-2025-26-trs-fund-compensation-rates-order | `03d`, `03g`, `05`, `X1:global_apps_and_business_models`, `X2:region_americas` |
| https://rolkaloube.com/programs/federal-itrs/news/fcc-releases-2025-26-trs-fund-contribution-factors-order | `03g`, `X1:global_apps_and_business_models` |
| https://rolkaloube.com/programs/federal-itrs/news/fcc-releases-2026-27-trs-fund-compensation-and-contribution-formulas-nbsp | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://signvideo.co.uk/download/ | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://signvideo.co.uk/our-story | `03c`, `X2:global_feature_matrix` |
| https://www.signvideo.co.uk/signvideo-launches-bsl-business-directory/ | `03c`, `03g`, `X2:global_feature_matrix` |
| https://sites.google.com/kent.edu/appsfordiverselearningneeds/app-reviews/roger-voice | `03c`, `03g`, `X2:global_feature_matrix` |
| https://sites.google.com/kent.edu/appsfordiverselearningneeds/app-reviews/the-asl-app | `03d`, `03g`, `X2:global_feature_matrix` |
| https://sites.google.com/view/wmt-slt-v2022/faq | `04a`, `06c`, `X2:academic_research_synthesis` |
| https://yandex.cloud/en-ru/docs/speechkit/pricing | `01`, `04c`, `06b`, `06e`, `06f`, `06g`, `X2:uzbek_speech_bigtech_support` |
| https://yandex.cloud/en/docs/speechkit/tutorials/recognizer-bot | `03b`, `X2:russia_cis_competitors` |
| https://yandex.cloud/ru/blog/posts/2023/06/speechkit-uzbek-language | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://apps.appfollow.io/ios/hand-talk-asl-sign-language/659816995?country=us | `03d`, `03g`, `X2:global_feature_matrix` |
| https://apps.appfollow.io/ios/hands-on-asl/1450898947?country=us | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.bankofscotland.co.uk/accessibility/signvideo/ | `03c`, `X2:global_feature_matrix` |
| https://www.bankofscotland.co.uk/contactus/signvideo | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://blogs.nvidia.com/blog/2023/10/23/nvidia-life-kaggle-ai-contest-sign-language-recognition/ | `04a`, `X1:open_source_tech_stack` |
| https://blogs.nvidia.com/blog/ai-sign-language | `03d`, `04d`, `X2:region_americas` |
| https://www.cboard.io/en/blog/2019-05-15-unicef-innovation-fund-graduation/ | `X2:nonprofit_models_funding` |
| https://www.cboard.io/en/blog/2020-07-05-cboard-receives-another-UNICEF-investment/ | `X2:nonprofit_models_funding` |
| https://www.comreg.ie/publication-download/text-relay-service-take-up-and-usage-statistics-january-to-december-2024 | `03c`, `X2:region_europe` |
| https://www.comreg.ie/real-time-text-rtt-service-launched-in-ireland/ | `03c`, `03g`, `X2:global_feature_matrix` |
| https://contactscotland-bsl.org/download | `03c`, `X2:global_feature_matrix` |
| https://contactscotland-bsl.org/faqs/ | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.convo.io/post/convo-call-generally-available | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.convo.io/post/convo-on-the-2026-forbes-accessibility-200 | `X1:deaf_centered_product_ux` |
| https://developers.sber.ru/portal/news/dataset_dlya_rjya-06-06-2023 | `03b`, `X1:russia_cis_ecosystem` |
| https://developers.sber.ru/portal/products/slovo | `03b`, `X1:russia_cis_ecosystem` |
| https://echoboomer.pt/?p=268106 | `03c`, `X2:region_europe` |
| https://echoboomer.pt/ctt-atendimento-lingua-gestual-portuguesa-lojas/ | `03c`, `X2:region_europe` |
| https://elevenlabs.io/hi/speech-to-text/uzbek | `04c`, `X1:open_source_tech_stack` |
| https://elevenlabs.io/speech-to-text/uzbek | `04c`, `06b`, `X1:open_source_tech_stack`, `X2:uzbek_speech_bigtech_support` |
| https://en.nippon-foundation.or.jp/news/articles/2021/20210524-58778.html | `03e`, `X2:region_east_asia_oceania` |
| https://en.nippon-foundation.or.jp/news/articles/2023/20230922-95355.html | `03e`, `X2:region_east_asia_oceania` |
| https://en.papernotes.org/ACL2026/multimodal_vlm/cnsl-bench_benchmarking_the_sign_language_understanding_capabilities_of_mllms_on/ | `04a`, `X2:academic_research_synthesis` |
| https://en.papernotes.org/CVPR2026/human_understanding/sign_language_recognition_llms/ | `04a`, `X2:academic_research_synthesis` |
| https://fugumt.com/fugumt/paper_check/2410.08675v1_enmode | `04d`, `X1:open_source_tech_stack` |
| https://fugumt.com/fugumt/paper_check/2505.02519v1_enmode | `04a`, `X1:deaf_centered_product_ux` |
| https://imo-ishora.uz/ | `01`, `02`, `03a`, `04d`, `06a`, `06c`, `06d`, `06g`, `X1:browser_youtube_google_findings`, `X2:uzsl_linguistics_education_community` |
| https://imo-ishora.uz/dictionary | `03a`, `06a`, `06c`, `OH`, `X1:browser_youtube_google_findings` |
| https://info.convo.io/uk/help/convos-focus-and-our-core-values | `X1:deaf_centered_product_ux` |
| https://info.convo.io/uk/help/history-of-signlive | `X1:deaf_centered_product_ux` |
| https://informations.handicap.fr/a-accessourd-collectif-pour-accessibilite-telephonique-31595.php | `03c`, `X2:region_europe` |
| https://informations.handicap.fr/a-centre-relais-telephonique-1-an-100000-appels-adaptes-12272.php | `03c`, `X2:region_europe` |
| https://inlibrary.uz/index.php/computer-engineering/article/view/25286 | `04a`, `04d`, `X1:open_source_tech_stack`, `X2:academic_research_synthesis` |
| https://inlibrary.uz/index.php/eijmrms/article/view/34006 | `04a`, `04d`, `06c`, `X1:open_source_tech_stack`, `X2:academic_research_synthesis` |
| https://island.is/panta-taknmalstulka-thjonustu/fjartulkun | `03c`, `X2:region_europe` |
| https://island.is/s/shh/frett/lokad-fyrir-endurgjaldslausa-tulkathjonustu-ut-mars | `03c`, `05`, `06e`, `06g`, `X2:region_europe` |
| https://justuseapp.com/en/app/1547252782/lingvano-sign-language-asl/reviews | `03c`, `03g`, `X2:global_feature_matrix` |
| https://justuseapp.com/en/app/659816995/hand-talk/reviews | `03d`, `03g`, `X2:global_feature_matrix` |
| https://mada.org.qa/mada-center-launches-the-first-qatari-virtual-3d-interpreter-for-qatari-sign-language/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://mada.org.qa/session/jumla-sign-language-the-qatari-sign-language-processing-toolkit/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://mercado.com.ar/protagonistas/nespresso-suma-hablalo | `03d`, `X2:region_americas` |
| https://mercado.com.ar/protagonistas/santander-suma-la-aplicacion-hablalo | `03d`, `X2:region_americas` |
| https://meta.wikimedia.org/wiki/SignIt | `03c`, `04d`, `X2:nonprofit_models_funding` |
| https://meta.wikimedia.org/wiki/Wikimedia_France/Groupes_de_travail/Groupes_th%C3%A9matiques/Langues/LSF | `03c`, `X2:nonprofit_models_funding` |
| https://migam.org/en/ | `03c`, `X2:region_europe` |
| https://migam.org/en/zintegrowalismy-tlumacza-migam-z-livechat/ | `03c`, `X2:region_europe` |
| https://www.mobihealthnews.com/news/apple-releases-new-tools-meet-needs-folks-mobility-hearing-and-cognitive-disabilities | `03c`, `03d`, `X2:region_americas` |
| https://www.mobihealthnews.com/news/rylo-raises-85m-expand-ai-communication-tools-deaf-and-hard-hearing-users | `03d`, `03f`, `03g`, `X1:global_apps_and_business_models` |
| https://www.mos.ru/news/item/81874073/ | `03b`, `X2:russia_cis_competitors` |
| https://www.mos.ru/otvet-zdorovie/kak-invalidu-poluchit-uslugi-po-perevodu-russkogo-zhestovogo-yazyka/ | `03b`, `X1:russia_cis_ecosystem` |
| https://mwm.ai/apps/app/6761060993 | `03b`, `X2:russia_cis_competitors` |
| https://mwm.ai/apps/oynachi/6762111876 | `08` |
| https://nafath.mada.org.qa/nafath-article/mcn-20-01/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://nafath.mada.org.qa/wp-content/uploads/2022/05/5-Toward-an-evaluation-model-for-signing-avatars.pdf | `04a`, `06c`, `X1:deaf_centered_product_ux`, `X2:academic_research_synthesis` |
| https://www.nav.no/no/nav-og-samfunn/statistikk/flere-statistikkomrader/tolking-for-dovblinde-og-horselshemmede | `03c`, `X2:region_europe` |
| https://www.nav.no/skjermtolk | `03c`, `X2:region_europe` |
| https://newtimes.co.rw/article/20507/news/health/rwanda-starts-distributing-sign-language-dictionary | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.newtimes.co.rw/article/169690/News/sign-language-dictionary-80-complete-official-says | `03f`, `X2:region_south_asia_mena_africa` |
| https://nstu.ru/reliz_get?id=147801 | `03b`, `X2:russia_cis_competitors` |
| https://www.nstu.ru/reliz_get?id=142801 | `03b`, `X2:russia_cis_competitors` |
| https://nwise.se/?p=1237 | `03f`, `X2:region_south_asia_mena_africa` |
| https://nwise.se/kpn-teletolk-continues-to-bridge-the-communication-gap-for-deaf-and-hard-of-hearing-communities/ | `03c`, `X2:region_europe` |
| https://www.oeglb.at/wp-content/uploads/2025/09/Pressemappe_OeGLB_BK25-1.pdf | `03c`, `X2:region_europe` |
| https://www.oeglb.at/wp-content/uploads/2025/12/GebaerdenSache-12_2025.pdf | `03c`, `X2:region_europe` |
| https://oliygoh.uz/oliygohlar/toshkent-davlat-pedagogika-universiteti | `02`, `X2:uzsl_linguistics_education_community` |
| https://oliygoh.uz/post/20252026-yil-bakalavriat-yonalishlari-boyicha-fanlar-majmuasi-tasdiqlandi | `02`, `X2:uzsl_linguistics_education_community` |
| https://www.remu.uz/ | `03a`, `X1:browser_youtube_google_findings` |
| https://www.remu.uz/about/ | `03a`, `OH`, `X1:browser_youtube_google_findings` |
| https://riamo.ru/news/obschestvo/bolee-190-tys-vyzovov-po-sms-postupilo-v-sistemu-112-moskovskoj-oblasti-xl/ | `03b`, `X2:russia_cis_competitors` |
| https://riamo.ru/news/obschestvo/funktsiyu-priema-vyzovov-ot-invalidov-po-rechi-v-sisteme-112-oblasti-zapustyat-v-2016-g-xl/ | `03b`, `X2:russia_cis_competitors` |
| https://rybena.com.br/en/assinatura | `03d`, `X2:region_americas` |
| https://rybena.com.br/en/sobre | `03d`, `X2:region_americas` |
| https://rylo.com/legal/accessibility | `03d`, `03f`, `03g`, `X2:global_feature_matrix` |
| https://rylo.com/post/nagish-acquires-sign-mt | `03d`, `04b`, `X2:open_source_clonable` |
| https://seenthis.kr/newspageeng/4060?page=10 | `03e`, `X2:region_east_asia_oceania` |
| https://seenthis.kr/newspageeng/4898 | `03e`, `X2:region_east_asia_oceania` |
| https://service.tib.eu/ldmservice/dataset/csl-daily | `03e`, `X2:region_east_asia_oceania` |
| https://service.tib.eu/ldmservice/dataset/phoenix-2014t | `04d`, `X1:open_source_tech_stack` |
| https://spreadthesign.com/en.au/search/?cls=1 | `03c`, `04d`, `X2:nonprofit_models_funding` |
| https://spreadthesign.com/en.us/about/ | `03c`, `03g`, `04d`, `X2:global_feature_matrix` |
| https://srvcanadavrs.ca/en/download/26118 | `03d`, `X2:region_americas` |
| https://srvcanadavrs.ca/wp-content/uploads/dlm_uploads/2026/02/CAV-Strategic-Plan-EN.pdf | `03d`, `X2:region_americas` |
| https://support.google.com/accessibility/android/answer/9158064?hl=en | `03d`, `03g`, `04c`, `06a`, `X2:global_feature_matrix`, `X2:uzbek_speech_bigtech_support` |
| https://support.google.com/meet/answer/10964115?hl=en | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://www.tamindir.com/indir/e-devlet-kapisi-engelsiz-cagri/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.tamindir.com/indir/isaret-dilim/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://tnfsa.nippon-foundation.or.jp/news/1736325 | `03e`, `X2:region_east_asia_oceania` |
| https://tnfsa.nippon-foundation.or.jp/news/531449 | `03e`, `X2:region_east_asia_oceania` |
| https://vikna.tv/styl-zhyttya/bezbaryerne-spilkuvannya-mobilni-zastosunky-yaki-dopomagayut-lyudyam-z-porushennyam-movlennya-sluhu-ta-zoru/ | `03b`, `X2:russia_cis_competitors` |
| https://vikna.tv/styl-zhyttya/pryvatbank-zaprovadyv-videokonsultacziyi-zhestovoyu-movoyu-yak-skorystatys-poslugoyu/ | `03b`, `X2:russia_cis_competitors` |
| https://www.wamda.com/en/2013/07/meet-the-jordanian-students-workin-on-a-sign-language-dictionnary-wamda-tv | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.wamda.com/en/2017/07/lost-translation-jordanian-startup-helping-deaf | `03f`, `X2:region_south_asia_mena_africa` |
| https://yourstory.com/2025/05/deepvisiontech-ai-letstalksign-accessibility-startup | `03f`, `X2:region_south_asia_mena_africa` |
| https://yourstory.com/2025/06/sign-language-gesture-tech-ditu-startup | `03f`, `X2:region_south_asia_mena_africa` |
| https://zpbettertogether.com/wp-content/uploads/2023/02/Sivo-How-To-PDF-Dec-2020.pdf | `03d`, `03g`, `X2:global_feature_matrix` |
| https://zpbettertogether.com/z5-p3/ | `03d`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://112.be/en/SMS | `03c`, `X2:region_europe` |
| https://www.1news.co.nz/2026/05/08/ai-avatars-to-deliver-real-time-nz-sign-language-translations/ | `03e`, `X2:region_east_asia_oceania` |
| https://www.aade.gr/sites/default/files/2025-06/pilot_app_deaf_hard-of-hearin_foreign-language-speaking_citizens_manual.pdf | `03c`, `X2:region_europe` |
| https://accessible.org/eaa-emergency-communications/ | `04a`, `X1:deaf_centered_product_ux` |
| https://acecentre.org.uk/language-library/cboard-aac | `X1:deaf_centered_product_ux` |
| https://acessibilidade.handtalk.me/plugin-asl | `03d`, `X2:nonprofit_models_funding` |
| https://www.aerzteblatt.de/archiv/notruf-nora-soll-hoergeschaedigten-helfen-387dd7e9-d75f-4408-b75d-65d3f757050f | `03c`, `03g`, `X2:global_feature_matrix` |
| https://www.africanews.com/2025/08/11/kenyan-startup-signvrse-pioneers-ai-powered-sign-language-translation/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.agcom.it/sites/default/files/migration/attachment/Allegato%209-9-2016.pdf | `03c`, `X2:region_europe` |
| https://agenciagov.ebc.com.br/noticias/202407/gestao-apresenta-iniciativas-de-acessibilidade-digital-na-5a-conferencia-nacional-dos-direitos-da-pessoa-com-deficiencia | `03d`, `04b`, `X2:open_source_clonable` |
| https://ai.meta.com/blog/omnilingual-asr-advancing-automatic-speech-recognition/ | `04c`, `04d`, `OH`, `X1:open_source_tech_stack` |
| https://www.aiindigo.com/tool/rogervoice | `03c`, `03g`, `X2:global_feature_matrix` |
| https://aira.io/aira-asl-on-demand-interpreting-for-the-deaf-community | `03d`, `03g`, `X2:global_feature_matrix` |
| https://aistudio.yandex.ru/docs/en/speechkit/stt/models | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://aiweekly.co/alerts/maswao-auto-builds-south-african-sign-language-corpus-from-news | `03f`, `04a`, `04d`, `X2:region_south_asia_mena_africa` |
| https://www.aixploria.com/en/?p=38909 | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://www.algemeiner.com/?p=292490 | `03f`, `X2:region_south_asia_mena_africa` |
| https://alleywatch.com/2026/07/rylo-ai-communication-accessibility-deaf-hard-of-hearing-real-time-captioning-platform-tomer-aharoni/ | `03d`, `03f`, `03g`, `X1:global_apps_and_business_models` |
| https://www.alphaxiv.org/abs/2607.27614 | `04a`, `X1:open_source_tech_stack` |
| https://alternativeto.net/software/td-snap | `03d`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.althingi.is/lagas/nuna/1990129.html | `03c`, `X2:region_europe` |
| https://www.ambito.com/ni-bill-gates-ni-elon-musk-el-emprendedor-argentino-que-se-propone-cambiar-el-mundo-n5029450 | `03d`, `X2:region_americas` |
| https://analyticsindiamag.com/ai-news-updates/google-deepmind-announces-signgemma-ai-for-sign-language | `04a`, `04c`, `X1:open_source_tech_stack` |
| https://andina.pe/ingles/noticia-defensoria-atiende-pedidos-personas-sordas-mediante-videollamadas-797762.aspx | `03d`, `X2:region_americas` |
| https://api.signon-project.eu/orchestrator/version | `04b`, `X2:hands_on_repo_audit` |
| https://app.dealroom.co/companies/kivo_7 | `08` |
| https://app.innovationinpolitics.eu/?p=48026 | `03c`, `03g`, `X2:global_feature_matrix` |
| https://app.unpkg.com/@sign-speak/react-sdk@0.7.3/files/README.md | `03d`, `03g`, `X2:global_feature_matrix` |
| https://appadvice.com/app/hands-on-asl/1450898947 | `03d`, `03g`, `X2:global_feature_matrix` |
| https://appie.or.jp/wp-content/uploads/2026/03/20260324keisansyou1-2.pdf | `03e`, `X2:region_east_asia_oceania` |
| https://apps.asha.org/EvidenceMaps/Articles/ArticleSummary/5c158713-f4a7-ed11-8143-005056834e2b | `04a`, `X1:deaf_centered_product_ux` |
| https://arabnews.com/node/2574932 | `03f`, `X2:region_south_asia_mena_africa` |
| https://archiv.taubenschlag.de/cms_pics/Procom%20Pressemitteilung%20VideoCom%20201701%20.pdf | `03c`, `X2:region_europe` |
| https://archive.cl.uzh.ch/public/archive/2022/easier/dgs_de.tar.gz | `04b`, `X2:hands_on_repo_audit` |
| https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE3009.pdf | `03c`, `X2:region_europe` |
| https://asugsvsummit.com/speakers/jon-mowl | `03d`, `X2:region_americas` |
| https://www.ava.me/blog/ava-1-0-24-7-accessibility-for-deaf-hearing-conversations | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://avazapp.freshdesk.com/support/solutions/articles/1000172730 | `03f`, `03g`, `X2:global_feature_matrix` |
| https://avesta.tj/2018/10/17/v-dushanbe-obsuzhdayut-problemy-vnedreniya-i-obucheniya-zhestovogo-yazyka | `03b`, `X2:russia_cis_competitors` |
| https://award.pluralism.ca/?p=961 | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://aws.amazon.com/blogs/startups/sign-speak-builds-with-ai-on-aws-to-create-accessible-experiences/ | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://www.bangkokbiznews.com/news/1237978 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.bangkokpost.com/tech/247700/the-new-way-to-talk | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.bbox-mag.fr/mobiles/forfaits-et-services/relais-telephonique-bouygues-telecom/46875374 | `03c`, `X2:region_europe` |
| https://beeline.uz/en/products/packages | `05`, `06a`, `X2:uzbekistan_legal_costs` |
| https://www.bemyeyes.com/?p=1003 | `06d`, `X2:nonprofit_models_funding` |
| https://www.bergen.kommune.no/hvaskjer/tema/informasjon-til-fastleger/offentlige-pasienttilbud/nav-akuttvakt-tolk | `03c`, `X2:region_europe` |
| https://www.berlin.de/lb/digitale-barrierefreiheit/anforderungen/gebaerdensprache/ | `03c`, `X2:region_europe` |
| https://www.besthub.dev/articles/ai-sign-language-digital-human-technology-challenges-and-development-by-baidu-intelligent-cloud-0aa012514cf7 | `03e`, `X2:region_east_asia_oceania` |
| https://www.bevnet.com/brands/velu/allimages | `08` |
| https://bibbase.org/network/publication/angelini-contrastingtechnologistsandactivistspositionsonsigningavatars-2023 | `04a`, `X1:deaf_centered_product_ux` |
| https://bizmedia.kz/2024-09-25-novaya-usluga-dlya-lyudej-s-ogranichennymi-sposobnostyami-poyavilas-na-egov/md/ | `03b`, `X2:russia_cis_competitors` |
| https://blackbird.vc/portfolio/ovira | `08` |
| https://blog.google/products-and-platforms/devices/pixel/american-sign-language-sign-to-text-pixel-11/ | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://blog.tensorflow.org/2023/02/a-new-kaggle-competition-to-help-parents-of-deaf-children-learn-sign-language.html?hl=ru | `04a`, `04d`, `OH`, `X1:open_source_tech_stack` |
| https://www.bluestacks.com/campaign/com.razeeman.study.russiansignlanguage/en | `03b`, `X2:russia_cis_competitors` |
| https://bora.uib.no/bora-xmlui/bitstream/11250/3037546/1/journal.pone.0273649.pdf | `04a`, `04d`, `06c`, `X2:academic_research_synthesis`, `X2:nonprofit_models_funding` |
| https://www.borger.dk/handicap/hjaelp-i-hverdagen/tolkning-for-personer-med-hoerehandicap | `03c`, `X2:region_europe` |
| https://borncity.com/news/apple-accessibility-sign-language-api-fuer-facetime-angekuendigt/ | `03d`, `X2:region_americas` |
| https://branddb.wipo.int | `08` |
| https://bridgingapps.org/bridgingapps-reviewed-app-ava-24-7-accessible-life/ | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.briter.co/companies/handtalk | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://brusselstimes.com/1502102/belgium-launches-ai-application-in-emergency-app-for-deaf-people | `03c`, `X2:region_europe` |
| https://bugs.telegram.org/c/44936 | `04c`, `06a`, `X2:uzbek_speech_bigtech_support` |
| https://buhamad.qatarcentral.cloudapp.azure.com/en/about | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.businessinfo.cz/clanky/cesky-startup-digitalizuje-znakove-tlumoceni-sluzba-pomuze-milionum-neslysicich/ | `03c`, `X2:region_europe` |
| https://buzz.avazapp.com/?p=6264 | `03f`, `03g`, `X2:global_feature_matrix` |
| https://www.cadena3.com/noticia/novedades/lanzan-una-plataforma-de-inteligencia-artificial-para-la-ensenanza-de-lsa_368830 | `03d`, `X2:region_americas` |
| https://cartt.ca/crtc-approves-30m-in-funding-for-cav-for-2022/ | `03d`, `X2:region_americas` |
| https://cdn2.nextbigideaclub.com/magazine/nir-eyal-video-messaging-app-found-unexpected-success-thanks-deaf-community/3273/ | `03d`, `03g`, `06a`, `06c`, `X2:global_feature_matrix` |
| https://ci.ufpb.br/ci/noticias/lavid-divulga-editais-para-pesquisadores-e-estudantes-do-projeto-vlibras/Edital_VLIBRAS04_2024__Estudantes.pdf | `03d`, `X2:nonprofit_models_funding` |
| https://ciie.fpce.up.pt/en/project/sign-language-for-beginners-in-europe-spread-the-sign | `03c`, `X2:nonprofit_models_funding` |
| https://www.citizen.digital/tech/kenyan-ai-app-turning-speech-into-sign-language-wins-african-award-n371770 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.citizensinformationboard.ie/downloads/cib/SLIS_Annual_Report_2021.pdf | `03c`, `X2:region_europe` |
| https://cl.uzh.ch/en/research-groups/accessibility/research-projects/past-research-projects/easier.html | `03c`, `04d`, `X2:region_europe` |
| https://comm4child.ulb.be/wp-content/uploads/2021/11/Hall-2017.pdf | `04a`, `X1:deaf_centered_product_ux` |
| https://www.commonsensemedia.org/app-reviews/proloquo2go | `03d`, `03g`, `X2:global_feature_matrix` |
| https://community.latenode.com/t/how-to-enable-camera-access-through-telegram-web-applications-for-live-streaming/23550 | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://community.zoom.com/meetings-2/pin-multiple-participants-so-deaf-interpreter-stays-visible-to-other-participants-always-46203 | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.complaintsboard.com/lingvano-b148562 | `03c`, `03g`, `X2:global_feature_matrix` |
| https://consumidormoderno.com.br/parceria-globo-icom/ | `03d`, `X2:region_americas` |
| https://core.telegram.org/bots/webapps | `03a`, `04c`, `06a`, `06b`, `06f`, `06g`, `X2:uzbek_speech_bigtech_support` |
| https://corpus.uzbekvoice.ai/en-US/yangilik/1 | `03a`, `04c`, `04d`, `X1:uzbekistan_landscape` |
| https://cs.ut.ee/en/news/development-estonias-first-sign-language-interpreter-robot-begins | `03c`, `X2:region_europe` |
| https://www.cs.utoronto.ca/~sliaqat/augmented_reality_glasses.pdf | `04a`, `X2:academic_research_synthesis` |
| https://dawnsign.com/about | `03d`, `X2:region_americas` |
| https://www.deafaustralia.org.au/news/federal-budget-2026-27---advocacy-win | `03e`, `X2:region_east_asia_oceania` |
| https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/ | `04a`, `04c`, `X2:uzbek_speech_bigtech_support` |
| https://defonline.com.ar/ciencia-tecnologia/hablalo-una-app-con-voz-propia/ | `03d`, `X2:region_americas` |
| https://www.democrata.es/en/democrata-pro/statements/svisual-and-cestel-promote-communicative-accessibility-through-video-interpretation-in-sign-language/ | `03c`, `X2:region_europe` |
| https://derecho.uchile.cl/dam/jcr:e6d473f4-af65-43d1-9961-9de6c8970d9c/CA%20284-2025.pdf | `03d`, `X2:region_americas` |
| https://www.deskmodder.de/blog/?p=214578 | `03c`, `X2:region_europe` |
| https://www.deutschebahn.com/de/ai | `03c`, `X2:region_europe` |
| https://dev.ua/news/zastosunok-perekladach-zhm-1701682817 | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://developer.apple.com/articles/lingvano | `03c`, `03d`, `03g`, `OH`, `X1:global_apps_and_business_models`, `X2:region_americas` |
| https://www.dhakatribune.com/amp/bangladesh/397898/bangladesh-launches-first-mental-health-sign | `03f`, `X2:region_south_asia_mena_africa` |
| https://dialog.lk/apps/deaftawk-app | `03f`, `X2:region_south_asia_mena_africa` |
| https://diariodopara.com.br/para/para-sanciona-lei-que-garante-atendimento-acessivel-e-personalizado-a-pessoas-surdas/ | `03d`, `X2:region_americas` |
| https://dicloud.uz/en/services/cloud/vps/ | `05`, `06b`, `X2:uzbekistan_legal_costs` |
| https://dilmurad.me/expert/uzbek-sign-language-usl-to-be-or-not-to-be/ | `01`, `02`, `03a`, `05`, `06d`, `OH`, `X1:uzbekistan_landscape` |
| https://www.disabilityscoop.com/?p=25062 | `05`, `X2:nonprofit_models_funding` |
| https://discuss.ai.google.dev/t/signgemma-release-date/113794 | `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://docs.cloud.google.com/speech-to-text/v2/docs/speech-to-text-supported-languages | `04c`, `06b`, `X2:uzbek_speech_bigtech_support` |
| https://docs.rybena.com.br/manual/geral/informacoes | `03d`, `X2:region_americas` |
| https://docs.signapse.ai/website-translations/overview | `03c`, `03g`, `X2:global_feature_matrix` |
| https://www.doof.vlaanderen/sites/default/files/imce/20200707_standpunt_dv_actie_cab_mbt_afstandstolkendienst.pdf | `03c`, `X2:region_europe` |
| https://dou.ua/lenta/articles/dou-projector-bewarned/ | `03b`, `X2:russia_cis_competitors` |
| https://doubletaponair.com/be-my-eyes-surpasses-1-million-users-and-launches-foundation-to-keep-ai-tools-free/ | `06d`, `X2:nonprofit_models_funding` |
| https://www.drweb.de/gebaerdensprach-avatar-packungsbeilage-ki/ | `03c`, `X2:region_europe` |
| https://www.eanews.ru/ekaterinburg/20220922171400/videokonsultatsii-na-zhestovom-yazyke-teper-dostupny-v-180-ofisah-sbera-v-sverdlovskoy-oblasti | `03b`, `X2:russia_cis_competitors` |
| https://www.economyup.it/startup/pedius-la-startup-che-fa-telefonare-i-sordi-nata-guardando-le-iene/ | `03c`, `X2:region_europe` |
| https://ecosistemastartup.com/?p=34140 | `03d`, `X2:region_americas` |
| https://www.edf-feph.org/publications/open-letter-on-improving-accessibility-in-emergency-communications/ | `04a`, `X1:deaf_centered_product_ux` |
| https://edge.mada.org.qa/publications/paper40/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://eerstekamer.nl/9370000/1/j4nvi0xeni9vr2l_j9vvkfvj6b325az/vmoxk0vs8pyy/f=/vmowk0liaczz.pdf | `03c`, `X2:region_europe` |
| https://www.elfinancierocr.com/tecnologia/conozca-este-servicio-en-linea-para-la-atencion-de/E6Y4GIWPMBBVXIDDA5LUJEFZHE/story/ | `03d`, `X2:region_americas` |
| https://www.elimparcial.com/tecnologia/2024/12/04/estas-son-dos-plataformas-para-aprender-y-promover-lengua-de-senas-mexicana/ | `03d`, `X2:region_americas` |
| https://www.emergentmind.com/papers/2510.08482 | `04a`, `X2:academic_research_synthesis` |
| https://en.vikaspedia.in/viewcontent/social-welfare/differently-abled-welfare/important-days/international-day-of-sign-languages | `04a`, `X1:deaf_centered_product_ux` |
| https://en.wikipedia.com/wiki/YVEL | `08` |
| https://www.eschoolnews.com/newsline/2024/10/08/sign-language-learning-app-reaches-2-5-million-learners-milestone/ | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://www.etsi.org/deliver/etsi_es/202900_202999/202975/02.01.01_60/es_202975v020101p.pdf | `03c`, `X2:region_europe` |
| https://euneighbourseast.eu/news/stories/breaking-the-barriers-to-build-an-inclusive-society-for-the-deaf-in-armenia/ | `03b`, `X2:russia_cis_competitors` |
| https://www.eweek.com/news/nvidia-signs-platform/ | `03d`, `X2:region_americas` |
| https://fashnerd.com/2019/07/is-the-development-of-a-technology-based-on-a-sign-language-still-constituted-as-cultural-appropriation/ | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://fesf.org.pk/programs/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.finance.cz/clanky/491771-neslysici-tiche-spojeni/ | `03c`, `X2:region_europe` |
| https://www.foxnews.com/tech/high-tech-glove-translate-sign-language.amp | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://fundacioncnse.org/pdf/memoria-2025.pdf | `03c`, `X2:region_europe` |
| https://futurechosun.com/archives/9642 | `03e`, `X2:region_east_asia_oceania` |
| https://futureoflearning.ihub.co.ke/?p=3166 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.g2.com/products/sign-speak/discuss | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.gadgetmatch.com/hearo-app-sign-language-translate-voice-text-apple-developer-academy/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.gazetadopovo.com.br/vida-e-cidadania/aplicativo-para-deficientes-auditivos-transforma-conteudos-da-internet-em-libras-e5ofz3d3otvw255lyiz1r272w/ | `03d`, `X2:nonprofit_models_funding` |
| https://www.gazetasp.com.br/estado/sp-expande-acessibilidade-em-libras-no-aplicativo-de-servidores/ | `03d`, `X2:region_americas` |
| https://gehoerlosenbund.de/wp-content/uploads/2025/10/Pressemitteilung-01_2025-Gut-gebruellt-Loewen.docx.pdf | `03c`, `05`, `06d`, `X2:region_europe` |
| https://gendermadad.uz/oz/document/1740 | `02`, `X2:uzsl_linguistics_education_community` |
| https://git.huazai-net.workers.dev/IS2AI/lightweight_avatar | `03b`, `X1:russia_cis_ecosystem` |
| https://github.404890603.workers.dev/ChristofHenkel/kaggle-asl-fingerspelling-1st-place-solution | `04a`, `OH`, `X1:open_source_tech_stack` |
| https://github.gg22.workers.dev/ZechengLi19/Uni-Sign | `04a`, `X1:open_source_tech_stack` |
| https://gleanmark.com/owner/zuviinc | `08` |
| https://www.goldenpages.uz/uz/zarplata/ | `X2:uzbekistan_legal_costs` |
| https://govinsider.asia/intl-en/article/exclusive-georgia-using-video-chat-sign-language-inclusive-services-emergency-service-112 | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://govlaunch.com/projects/charleroi-wht-utilizes-the-relais-signes-system-to-accommodate-deaf-people-using-city-services | `03c`, `X2:region_europe` |
| https://greennetwork.asia/news/improving-access-to-bangla-sign-language-learning-through-digital-dictionary | `03f`, `X2:region_south_asia_mena_africa` |
| https://groups.google.com/g/NIDG/c/18CccWT2FJ8 | `04a`, `X1:deaf_centered_product_ux` |
| https://www.gurufocus.com/news/1375922/cochlear-welcomes-landmark-who-report-calling-on-governments-and-societies-to-prioritize-hearing-health | `04a`, `X1:deaf_centered_product_ux` |
| https://www.haberturk.com/isitme-engelli-bireyler-engelsiz-ceviri-ile-okuduklarini-anlayacaklar-2739998 | `03f`, `X2:region_south_asia_mena_africa` |
| https://hamiltoncaptel.com/solutions/hamilton-captel-carceral-solutions/ | `03d`, `X2:region_americas` |
| https://hearingreview.com/hearing-products/amplification/amplified-caption-phones/ai-powered-transcription-app-gets-more-funding | `03d`, `03f`, `03g`, `X1:global_apps_and_business_models` |
| https://hh.ru/article/30955 | `03b`, `X2:russia_cis_competitors` |
| https://hhi.fraunhofer.de/en/departments/vit/projects/content4all.html | `03c`, `X2:region_europe` |
| https://hi-tech.mail.ru/news/119310-v-rossii-sozdali-pervoe-besplatnoe-prilozhenie-dlya-obsheniya-s-gluhimi/ | `03b`, `X1:russia_cis_ecosystem`, `X2:russia_cis_competitors` |
| https://www.hi-us.org/en/news/sign-language-app-opens-new-path-to-learning-for-deaf-children-in-nepal | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.idropnews.com/news/google-live-translate-released-iphone-70-languages/261713/ | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://idw-online.de/de/news830493 | `03c`, `X2:region_europe` |
| https://www.igeeksblog.com/accessibility-features-in-ios-26-macos-26/ | `03d`, `03g`, `X2:global_feature_matrix` |
| https://iict.uzh.ch/dam/jcr:7ca446cb-8c7d-45e7-be31-76774803b91b/Abstract_Paper_Person%20Identification%20from%20Pose%20Estimates.pdf | `04a`, `04d`, `06b`, `06c`, `X2:academic_research_synthesis` |
| https://in.marketscreener.com/news/latest/Jeenie-Modernizes-Access-to-American-Sign-Language-Communication-with-Mobile-On-Demand-Video-Interpr-29841328 | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.inf.uni-hamburg.de/en/inst/ab/cv/media/sarhan-frintrop-amfg-iccv2023-survey.pdf | `04a`, `X2:academic_research_synthesis` |
| https://www.infobae.com/salud/2023/08/12/la-nueva-era-de-la-accesibilidad-como-funciona-la-plataforma-que-facilita-la-comunicacion-de-personas-con-discapacidades/ | `03d`, `X2:region_americas` |
| https://www.infoescola.com/noticias/ministerio-do-planejamento-em-parceria-coma-ufpb-lanca-programa-que-traduz-conteudos-para-linguagem-brasileira-de-sinais/ | `03d`, `X2:nonprofit_models_funding` |
| https://investigacao.ips.pt/en/research/projects/spreadacs-vocational-accessibility-for-the-deaf-and-deafblind-with-spreadthesign | `03c`, `X2:nonprofit_models_funding` |
| https://www.iphones.ru/iNotes/teper-pozvonit-smogut-dazhe-gluhie-mts-zapustil-zapustil-sekretarya-dlya-gluhih-i-slaboslyshashchih | `03b`, `04c`, `06a`, `X2:russia_cis_competitors` |
| https://ipn.mx/assets/files/imageninstitucional/docs/comunicados/2025/08/c-42-guante-lsm-ipn.pdf | `03d`, `X2:region_americas` |
| https://ishnews.tv/videos/news/signlearn-app-a-sign-language-dictionary-for-all | `03f`, `03g`, `X1:global_apps_and_business_models`, `X2:region_south_asia_mena_africa` |
| https://isprs-archives.copernicus.org/articles/XLVIII-2-W3-2023/209/2023/isprs-archives-XLVIII-2-W3-2023-209-2023.pdf | `03b`, `04d`, `X1:russia_cis_ecosystem` |
| https://israel365news.com/?p=301948 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.istiklal.com.tr/genel/112-acil-cagri-merkezleri-bu-yil-95-milyon-cagri-yanitladi-1079528h | `03c`, `X2:region_europe` |
| https://www.it-daily.net/?p=19147 | `03c`, `X2:region_europe` |
| https://ixd.prattsi.org/2024/09/assistive-technology-proloquo2go-ios/ | `03d`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://jordantimes.com/node/353421 | `03f`, `X2:region_south_asia_mena_africa` |
| https://journals.rudn.ru/linguistics/article/view/52496/ru_RU | `03b`, `X1:russia_cis_ecosystem` |
| https://jumla.mada.org.qa/services/?lang=en | `03f`, `X2:region_south_asia_mena_africa` |
| https://kampanj2.regionorebrolan.se/siteassets/filer/konferens/2025/pts.pdf | `03c`, `X2:region_europe` |
| https://kampanj6.regionorebrolan.se/globalassets/media/dokument/halso-och-sjukvard/habilitering-och-hjalpmedel/tolkcentralen/nar-tre-behovs-for-samtal-mellan-tva.pdf | `03c`, `X2:region_europe` |
| https://katalog.lib.cas.cz/KNAV/EdsRecord/cmedm,39163815 | `04a`, `X2:academic_research_synthesis` |
| https://www.kelleydrye.com/viewpoints/blogs/commlaw-monitor/fcc-sets-new-rates-for-ip-cts-compensation-and-proposes-new-minimum-service-standards | `03d`, `X2:region_americas` |
| https://www.kith.org/words/2020/02/29/sign-language-gloves-dont-translate/ | `03g`, `X1:global_apps_and_business_models` |
| https://www.kjob.news/news/431732 | `03e`, `X2:region_east_asia_oceania` |
| https://kod.ru/ii-sekretar-dlya-glukhikh-i-slaboslyshashchikh | `03b`, `06a`, `X2:russia_cis_competitors` |
| https://kontur.ru/press/news/85605-gluxie_polzovateli_proveli_vebinar_v_konturtolke | `03b`, `X2:russia_cis_competitors` |
| https://www.koreascience.kr/article/CFKO202023758834200.pdf | `03e`, `04a`, `X2:region_east_asia_oceania` |
| https://www.koreatimes.co.kr/business/companies/20260615/kt-rolls-out-ai-store-assistant-to-break-language-barriers-for-intl-customers | `03e`, `X2:region_east_asia_oceania` |
| https://www.kpn.com/overons/nieuws/en/kpn-teletolk-will-continue-to-connect-deaf-and-hearing-impaired-people-with-society/ | `03c`, `X2:region_europe` |
| https://www.kreis-rendsburg-eckernfoerde.de/politik-verwaltung/politik-und-verwaltung-des-kreises/allris/wicket/resource/org.apache.wicket.Application/doc2096380.pdf | `03c`, `X2:region_europe` |
| https://kulturpool.at/en/content/equalizent | `03c`, `X2:region_europe` |
| https://www.kyivpost.com/uk/post/87911 | `03b`, `X2:russia_cis_competitors` |
| https://languageline.com/resources/news/teleperformance-completes-acquisition-of-zp-better-together-expanding-accessibility-solutions | `03d`, `03g`, `OH`, `X1:global_apps_and_business_models` |
| https://lb.ua/blog/dmytro_lubinets/768326_zalishiti_nikogo_bik.html | `03b`, `X2:russia_cis_competitors` |
| https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt | `04c`, `06b`, `X2:uzbek_speech_bigtech_support` |
| https://www.leggioggi.it/sconti-disabili-telefonia-2024-proroga-platea/ | `03c`, `X2:region_europe` |
| https://www.lexita.lt/en/projects/mobile-app-112-lietuva | `03c`, `X2:region_europe` |
| https://libeldoc.bsuir.by/handle/123456789/62427 | `03b`, `X1:russia_cis_ecosystem` |
| https://life.pravda.com.ua/society/2017/06/27/224992/ | `03b`, `X2:russia_cis_competitors` |
| https://limpingchicken.com/2023/03/07/ibsl-shares-open-letter-detailing-plans-for-current-learners-as-it-confirms-closure-in-next-couple-of-months/ | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://liner.com/review/youtubesl25-largescale-opendomain-multilingual-sign-language-parallel-corpus | `04a`, `X2:academic_research_synthesis` |
| https://lingualibre.org | `03c`, `04d`, `05`, `X2:nonprofit_models_funding` |
| https://listserv.linguistlist.org/pipermail/sw-l/2018-August/062147.html | `03f`, `X2:region_south_asia_mena_africa` |
| https://live.european-language-grid.eu/meta-forum-2022/project-expo/signon | `03c`, `X2:region_europe` |
| https://www.livelingo.io/guides/asl-interpreter-app | `03d`, `03g`, `X2:global_feature_matrix` |
| https://livetranscribe.app/compare/live-transcribe-vs-ava | `03d`, `03g`, `X2:global_feature_matrix` |
| https://m.korea.kr/news/policyNewsView.do?newsId=148941990 | `03e`, `X2:region_east_asia_oceania` |
| https://m.seoul.co.kr/news/economy/2026/05/27/20260527500189 | `03e`, `X2:region_east_asia_oceania` |
| https://www.maginative.com/article/microsoft-researchers-advance-sign-language-accessibility-through-community-sourced-data/ | `X1:open_source_tech_stack` |
| https://www.magzter.com/en/stories/newspaper/Bangkok-Post/COMMUNICATION-BREAKDOWN | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.maratto.africa/research/a-large-scale-multimodal-dataset-for-healthcare-domain-38871736aa | `03f`, `04d`, `X2:region_south_asia_mena_africa` |
| https://marlvel.ai/apps/com-lingvano-app | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://martel-innovate.com/?p=355142 | `03c`, `X2:region_europe` |
| https://mel.fm/novosti/5401872-cloud | `03b`, `X1:russia_cis_ecosystem`, `X2:russia_cis_competitors` |
| https://www.mitre.org/news-insights/impact-story/mitre-connects-improving-telecommunications-deaf-community | `03d`, `04b`, `X2:open_source_clonable` |
| https://www.mpf.mp.br/o-mpf/unidades/pr-sc/noticias/mpf-adota-plataforma-para-atendimento-em-libras-em-santa-catarina | `03d`, `X2:region_americas` |
| https://muxlisa.uz/en | `03a`, `04c`, `06b`, `06e`, `06f`, `06g`, `OH`, `X1:uzbekistan_landscape` |
| https://myfin.by/article/blogi/v-belarusi-adaptirovali-16-servisov-dla-ludej-s-osobennostami-zrenia-sluha-reci-i-mobilnosti-45731 | `03b`, `X2:russia_cis_competitors` |
| https://nadindia.org/article/4405/first-indian-sign-language-dictionary-of-3000-words-launched | `03f`, `X2:region_south_asia_mena_africa` |
| https://nairametrics.com/2026/03/03/unicef-opens-applications-for-100000-equity-free-funding-for-early-stage-startups/ | `05`, `X2:nonprofit_models_funding` |
| https://www.nar.az/en/news/jest-dili-mobil-tetbiqi/ | `03b`, `06f`, `X2:russia_cis_competitors` |
| https://natlawreview.com/press-releases/real-time-accessibility-signapse-launches-ai-digital-signer-german-sign | `03c`, `03g`, `X2:global_feature_matrix` |
| https://www.neilsquire.ca/?p=23094 | `03c`, `03g`, `X2:global_feature_matrix` |
| https://www.nemocnice-beroun.cz/en/news/neslysicim-pomaha-u-lekare-ticha-linka-2142 | `03c`, `X2:region_europe` |
| https://network.mobile.rakuten.co.jp/information/news/service/3314/ | `03e`, `X2:region_east_asia_oceania` |
| https://netzpolitik.org/tag/gehoerlose-menschen/ | `03c`, `03g`, `X2:global_feature_matrix` |
| https://new.psl.org.pk/resources | `03f`, `X2:region_south_asia_mena_africa` |
| https://news.lavx.hu/article/rylo-raises-85-million-targets-1-billion-in-revenue-by-2028 | `03d`, `03f`, `03g`, `X1:global_apps_and_business_models` |
| https://news.samsung.com/cl/samsung-chile-lanza-servicio-de-atencion-a-clientes-en-lengua-de-senas | `03d`, `X2:region_americas` |
| https://ngi-navigator.demo.abilian.com/product/dec112 | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.nhsgrampian.org/about-us/equality-and-diversity/nhs-grampian-british-sign-language-plan/contacting-nhs-24-for-deafbsl-user/ | `03c`, `03g`, `X2:global_feature_matrix` |
| https://nocamels.com/2022/08/life-changing-app-deaf-people/ | `03f`, `03g`, `X2:global_feature_matrix` |
| https://nojitter.com/contact-centers/call-if-you-can-text-if-you-can-t-an-update | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.nora-notruf.de/google-play-store | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.notebookcheck.net/Google-Pixel-11-turns-American-Sign-Language-into-typed-text.1367397.0.html | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://www.ntt-west.co.jp/newscms/info5/15132/oshirase20260326.pdf | `03e`, `X2:region_east_asia_oceania` |
| https://www.ntv.com.tr/egitim/meb-isitme-engelli-ogrenciler-icin-dijital-egitim-platformu-kurdu,_KbAQ0xUUkGzSt8see9j9w | `03f`, `X2:region_south_asia_mena_africa` |
| https://nzentrepreneur.co.nz/kara-technologies-pioneering-inclusive-emergency-sign-language-success-for-the-deaf/ | `03e`, `03g`, `X1:global_apps_and_business_models` |
| https://www.ocfl.net/EmergencySafety/TextTo911.aspx | `03d`, `03g`, `X2:global_feature_matrix` |
| https://officechai.com/ai/google-announces-signgemma-a-model-that-translates-sign-language/ | `04a`, `X1:open_source_tech_stack` |
| https://ojs.sadio.org.ar/index.php/JAIIO/article/download/927/759 | `03d`, `X2:region_americas` |
| https://old.oblgazeta.ru/media/newspaperpdf/2026/og/55/2026-03-19_og_55_5.pdf | `03b`, `X1:russia_cis_ecosystem` |
| https://olymp.hse.ru/mirror/pubs/share/879758297.pdf | `03b`, `X2:russia_cis_competitors` |
| https://onde.app | `08` |
| https://www.onmanorama.com/career-and-campus/top-news/2023/09/24/online-isl-course-260-new-financial-terms-signs-introduced.html | `03f`, `X2:nonprofit_models_funding`, `X2:region_south_asia_mena_africa` |
| https://www.OSCR.org.uk/british-sign-language/ | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://outilstice.com/en/spreadthesign-dictionnaire-international-des-langues-de-signes/ | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://outlookindia.com/national/from-just-3-000-to-10-000-words-now-indian-sign-language-dictionary-grows-to-help-hearing-impaired-news-322677 | `X2:nonprofit_models_funding` |
| https://paratic.com/cimer-engellerini-kaldirdi-fahrettin-altun-mujdeledi/ | `03c`, `X2:region_europe` |
| https://pestakeholder.org/reports/lost-in-interpretation-private-equitys-capture-of-a-vital-sign-language-translation-tool/ | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://petri.com/microsoft-teams-meetings-get-new-sign-language-view-and-accessibility-pane/ | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.phileweb.com/news/d-av/202405/28/60433.html | `03e`, `X2:region_east_asia_oceania` |
| https://polisen.se/om-polisen/kontakt/polisens-telefonnummer/ring-oss-med-ring-oss-med-texttelefoni-bildtelefoni-eller-teletal/ | `03c`, `X2:region_europe` |
| https://ppt.ru/amp/obzory/vstupaet-v-silu/postanovlenie-pravitelstva-rf-25-11-2025-1879 | `03b`, `05`, `OH`, `X1:russia_cis_ecosystem` |
| https://pravo.ru/news/view/79071/ | `03b`, `X1:russia_cis_ecosystem` |
| https://press.nlb.by/upload/iblock/64c/resp06122018.pdf | `03b`, `X1:russia_cis_ecosystem`, `X2:russia_cis_competitors` |
| https://www.pressreader.com/india/hindustan-times-st-noida/20210219/282140704088781 | `X2:nonprofit_models_funding` |
| https://preview.signly.co/faqs/ | `03c`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.prnewswire.com/news-releases/nagish-acquires-signmt-to-drive-research-in-ai-and-sign-language-302591257.html | `03d`, `04b`, `X2:open_source_clonable` |
| https://pro-data.tech/en/virtual-server | `05`, `06b`, `X2:uzbekistan_legal_costs` |
| https://progep.ufpb.br/ci/noticias/lavid-ufpb-abre-processo-seletivo-para-pesquisadores-e-estudantes-do-vlibras/Edital_VLIBRAS__01_2025__Pesquisadores.pdf | `03d`, `X2:nonprofit_models_funding` |
| https://pts.se/contentassets/e4f15a123c34463abb36a3baa8923d07/pts-arsredovisning-2024.pdf | `03c`, `X2:region_europe` |
| https://pubapi.registry.google/rdap/domain/NOM.app | `08` |
| https://pubs.asha.org/doi/pdf/10.1044/2022_JSLHR-22-00505?download=true | `04a`, `06a`, `X1:deaf_centered_product_ux` |
| https://rdap.publicinterestregistry.org/rdap/domain/NOM.org | `08` |
| https://rdap.verisign.com/com/v1/domain/NOM.com | `08` |
| https://regional.chinadaily.com.cn/wic/2024-05/23/c_989709_2.htm | `03e`, `X2:region_east_asia_oceania` |
| https://register.signapse.ai/website-sign-language | `03g`, `X1:global_apps_and_business_models` |
| https://rm.coe.int/accessibility-measures-as-implemented-by-avms-providers-for-persons-wi/1680afffef | `03c`, `X2:region_europe` |
| https://rnp.br/en/news/digital-accessibility-official-version-suite-vlibras-available-deaf | `03d`, `X2:nonprofit_models_funding` |
| https://rogervoice.com/wp-content/uploads/2026/06/Rogervoice-Rapport-Entreprise-a-mission-2025.pdf | `03c`, `X2:region_europe` |
| https://rondonianoar.com.br/?p=64990 | `03d`, `X2:region_americas` |
| https://www.ru.nl/en/research/research-projects/easier-intelligent-automatic-sign-language-translation | `03c`, `X2:region_europe` |
| https://ru.wikisource.org/wiki/%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD_%D0%BE%D1%82_30.12.2012_%E2%84%96_296-%D0%A4%D0%97 | `03b`, `X1:russia_cis_ecosystem` |
| https://saigoneer.com/saigon-technology/25807-what-creating-a-sign-language-app-taught-me-about-the-hardships-of-vietnam-s-deaf-community | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.saopaulo.sp.leg.br/blog/e-lei-apos-aprovacao-da-camara-legislacao-garante-atendimento-em-libras-as-pessoas-com-deficiencia-auditiva-em-reparticoes-publicas/ | `03d`, `X2:region_americas` |
| https://science.ecosyste.ms/projects/12174 | `03f`, `X2:region_south_asia_mena_africa` |
| https://securitybrief.co.nz/story/digital-nzsl-library-to-boost-access-for-deaf-new-zealanders | `03e`, `X2:region_east_asia_oceania` |
| https://www.segye.com/newsView/20230530514742 | `03e`, `X2:region_east_asia_oceania` |
| https://serverspace.io/services/vps-server/vps-in-uzbekistnan/ | `05`, `06b`, `06e`, `X2:uzbekistan_legal_costs` |
| https://sg.theasianparent.com/singapore-sign-language | `03f`, `X2:region_south_asia_mena_africa` |
| https://sigarra.up.pt/fcup/en/PROJECTOS_GERAL.MOSTRA_PROJECTO?p_id=59915 | `03c`, `X2:nonprofit_models_funding` |
| https://signhealth.org.uk/campaign/bsl-999-update-proposal-to-approve-sign-language-interactions-service/ | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://signly.co/ | `03c`, `03g`, `X2:global_feature_matrix` |
| https://siliconangle.com/2026/08/12/google-debuts-sl2t-ai-model-thats-designed-understand-sign-language/ | `04c`, `X2:uzbek_speech_bigtech_support` |
| https://silkwaytv.kz/en/kazakhstan-to-air-cartoons-with-kazakh-sign-language-translation-using-ai_55102 | `03b`, `X2:russia_cis_competitors` |
| https://simax.media/project-overview/?lang=en | `03c`, `X2:region_europe` |
| https://snob.ru/made-in-russia/surdo-pomoshch-nominatsiia-nauka-i-tekhnologiis-premiia-sdelano-v-rossii-2024/ | `03b`, `X2:russia_cis_competitors` |
| https://www.socialvalue.kr/news/view/1065600755495883?dt=m | `03e`, `X2:region_east_asia_oceania` |
| https://www.softbank.jp/corp/news/press/sbkk/2025/20250325_01/ | `03e`, `05`, `X2:region_east_asia_oceania` |
| https://sol.sbc.org.br/index.php/sbqs/article/view/39021 | `03d`, `04b`, `X2:open_source_clonable` |
| https://sonntagsblatt.de/artikel/epd/bezirk-schwaben-startet-gebaerdensprach-avatar | `03c`, `X2:region_europe` |
| https://www.sostav.ru/publication/fond-so-edinenie-zapustil-onlajn-proekt-o-zhizni-na-oshchup-35630.html | `03b`, `X2:russia_cis_competitors` |
| https://sotaverified.org/papers/theruslan-database-of-russian-sign-language | `03b`, `04d`, `X1:russia_cis_ecosystem` |
| https://splitmetrics.com/apps/hand-talk-asl-sign-language/id659816995 | `03d`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.springerprofessional.de/doi/10.1145/3234695.3236355 | `04a`, `X2:academic_research_synthesis` |
| https://startupfeed.in/pm-modi-ai-sign-language-translation-at-india-ai-summit-2026/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.startuphub.ai/startups/rylo.md | `03d`, `03f`, `03g`, `X2:global_feature_matrix` |
| https://startups.startupmission.in/startups/0eezL | `08` |
| https://www.sundhed.dk/sundhedsfaglig/information-til-praksis/syddanmark/almen-praksis/klinikadministration/bestillinger/tolkebestilling/tolkning-for-doeve-og-hoerehaemmede/ | `03c`, `X2:region_europe` |
| https://support.marcopolo.me/article/114-accessibility-friendly-features | `03d`, `03g`, `X2:global_feature_matrix` |
| https://support.microsoft.com/en-us/office/use-sign-language-view-in-microsoft-teams-c6c11f67-0747-4598-ac27-c90801b94434 | `03d`, `03g`, `06a`, `X2:global_feature_matrix` |
| https://www.svisual.org/pdf/Manual_SVIsual_Androidv5.2.pdf | `03c`, `X2:region_europe` |
| https://swisstxt.ch/en/swiss-txt/research-projects/easier | `03c`, `X2:region_europe` |
| https://szocialisportal.hu/wp-content/uploads/2025/10/Jelnyelvi-Tolmacsok-Orszagos-Nevjegyzeke.pdf | `03c`, `X2:region_europe` |
| https://www.tbank.ru/about/news/14042025-t-bank-launches-support-service-in-russian-sign-language | `03b`, `X2:russia_cis_competitors` |
| https://techcabal.com/2026/05/20/talksign-launches-ai-powered-palm-1-0-and-echo-1-0/ | `03d`, `X2:region_americas` |
| https://techcommunity.microsoft.com/blog/microsoftteamsblog/introducing-sign-language-view-for-teams-meetings/3671257 | `03d`, `03g`, `X2:global_feature_matrix` |
| https://techsoma.africa/24-year-old-kenyan-creates-ai-sign-language-app-wins-67k-engineering-prize/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://teletime.com.br/06/05/2015/tradutor-de-conteudos-digitais-para-surdos-e-lancado-pelo-governo/ | `03d`, `X2:nonprofit_models_funding` |
| https://www.tencent.com/en-us/articles/2201380.html | `03e`, `X2:region_east_asia_oceania` |
| https://theconversation.com/when-dealing-with-the-police-deaf-people-are-at-a-major-disadvantage-62027 | `04a`, `06a`, `X1:deaf_centered_product_ux` |
| https://www.thecore.in/business/can-indian-media-make-accessibility-a-business-570830 | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.thehansindia.com/tech/google-unveils-signgemma-ai-tool-to-translate-sign-language-into-text-by-year-end-974884 | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://www.thejakartapost.com/news/2015/07/15/including-people-all-abilities-digital-revolution | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.themoonlight.io/tw/review/sign-language-recognition-and-translation-for-low-resource-languages-challenges-and-pathways-forward | `04a`, `X2:academic_research_synthesis` |
| https://www.thequint.com/pti/new-ai-app-for-deaf-translates-sign-language-into-speech-in-real-time | `03c`, `03g`, `X1:global_apps_and_business_models` |
| https://www.thestar.com.my/tech/tech-news/2017/12/21/digi-launches-eddy-sign-language-mobile-app | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.thestorythailand.com/en/28/04/2021/20524/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.thurrott.com/a-i/317519/nvidia-announces-ai-to-help-teach-asl | `03d`, `04d`, `X2:region_americas` |
| https://tiflocentre.ru/documents/gost-r-57636-2024.php | `03b`, `OH`, `X1:russia_cis_ecosystem` |
| https://tilo.wonmor.io | `00`, `01` |
| https://www.timeslive.co.za/news/south-africa/2026-09-25-deaf-pupils-code-their-own-sign-language-dictionary/ | `03f`, `X2:region_south_asia_mena_africa` |
| https://www.toptenreviews.com/signschool-review | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.tovima.com/society/greece-launches-next-generation-112-emergency-system/amp/ | `03c`, `X2:region_europe` |
| https://trademark.justia.com/owners/ovira-pty-ltd-4324179 | `08` |
| https://trademarkdir.com/owner/yvel-ltd | `08` |
| https://trademarks.justia.com/903/94/kivo-90394319.html | `08` |
| https://transforma.fbb.org.br/storage/socialtecnologies/482/files/Avaliacao_Vlibras_TCU.pdf | `03d`, `06e`, `X2:nonprofit_models_funding` |
| https://www.travelawaits.com/3015964/inside-the-new-live-translation-updates-from-apple-for-airpods-users/ | `03d`, `03g`, `X1:global_apps_and_business_models` |
| https://www.trendhunter.com/trends/small-talk-asl | `03d`, `X2:region_americas` |
| https://www.tusbuenasnoticias.com/noticias/mexico/2023/01/30/17892-rafael-verdugo-el-sinaloense-que-creo-una-aplicacion-para-aprender-lenguaje-de-senas | `03d`, `X2:region_americas` |
| https://tvnz-1-news-prod.cdn.arcpublishing.com/2025/11/26/sign-language-ai-avatars-to-include-maori-concepts-signs/ | `03e`, `X2:region_east_asia_oceania` |
| https://ucell.uz/en/news/new_tariffs | `05`, `06g`, `X2:uzbekistan_legal_costs` |
| https://www.uctoday.com/?p=46645 | `03d`, `03g`, `X2:global_feature_matrix` |
| https://www.umniah.com/?p=41543 | `03f`, `X2:region_south_asia_mena_africa` |
| https://uni-kassel.de/uni/files/Studium/Kontakt-Beratung-Termine/Studium_Behinderung/Infoblatt_Telefon-Dolmetschdienst_Tess_74_.pdf | `03c`, `X2:region_europe` |
| https://www.unicefventurefund.org/story/cireha-augmentative-and-alternative-communication | `05`, `X2:nonprofit_models_funding` |
| https://www.uniservices.co.nz/news/kara-technologies-pioneering-inclusive-emergency-sign-language-success-for-the-deaf-2 | `03e`, `X2:region_east_asia_oceania` |
| https://www.unive.it/pag/fileadmin/user_upload/ateneo/internazionale/europrogettazione_didattica/schede_progetti_finanziati/EKA2-SPREADACS-Cardinaletti.pdf | `03c`, `X2:nonprofit_models_funding` |
| https://universe.roboflow.com/sign-languages/ukraine-sign-languages | `03b`, `X1:russia_cis_ecosystem` |
| https://www.unn.com.ua/en/news/kyiv-team-wins-the-national-ai-hackathon-with-an-app-for-the-hearing-impaired | `03b`, `X1:russia_cis_ecosystem` |
| https://ushl.samsung.com/pt/support/servico-lingua-gestual | `03c`, `X2:region_europe` |
| https://uz.wikipedia.org/wiki/Zamin_fondi | `02`, `03a`, `05`, `06d`, `X2:uzsl_linguistics_education_community` |
| https://uzinfocom.uz/en/news/522 | `03a`, `04c`, `06b`, `X2:uzbek_speech_bigtech_support` |
| https://uztelecom.uz/en/for-business/cloud-services/virtual-dedicated-server-8-9 | `05`, `06b`, `X2:uzbekistan_legal_costs` |
| https://vc4a.com/unicef/unicef-venture-fund/ | `05`, `X2:nonprofit_models_funding` |
| https://www.venturesquare.net/en/1125921/ | `03e`, `X2:region_east_asia_oceania` |
| https://view.asiae.co.kr/article/2020030908251195296 | `03e`, `X2:region_east_asia_oceania` |
| https://www.vlaanderen.be/organisaties/vlaams-communicatie-assistentie-bureau-voor-doven | `03c`, `X2:region_europe` |
| https://vlaio.be/en/vlaio-network/programme-innovation-procurement-pip/remote-interpreting-services | `03c`, `X2:region_europe` |
| https://www.voiceofsap.org/?p=139887 | `03f`, `X2:region_south_asia_mena_africa` |
| https://vrtinternational.com/innovation/projects/content4all | `03c`, `X2:region_europe` |
| https://warszawa19115.pl/pl/-/stoleczne-urzedy-z-usluga-tlumacza-migowego-on-line | `03c`, `X2:region_europe` |
| https://weekly.khan.co.kr/article/201812241411571 | `03e`, `X2:region_east_asia_oceania` |
| https://whoisaccessible.com/reviews/handtalk-me/ | `X1:deaf_centered_product_ux` |
| https://wikiconference.org/wiki/Submissions:2023/Sign_Languages_of_the_world_:_increase_mutual_understanding_with_Lingualibre_SignIt | `03c`, `X2:nonprofit_models_funding` |
| https://www.wikipedia.com/wiki/Mateo_Salvatto | `03d`, `X2:region_americas` |
| https://Www.wikipedia.org/wiki/Sign_language_glove | `03g`, `X1:global_apps_and_business_models` |
| https://wise-qatar.org/?p=13930 | `03f`, `05`, `X2:region_south_asia_mena_africa` |
| https://worldmetrics.org/best/aac-software/ | `03f`, `03g`, `X2:global_feature_matrix` |
| https://www-live.dfki.de/fileadmin/user_upload/import/11812_nunnari2021AT4SSL-AVASAG.pdf | `03c`, `X2:region_europe` |
| https://www1.ru/news/2024/12/17/v-rossii-razrabotali-po-dlia-sozdaniia-subtitrov-v-realnom-vremeni-servis-surdo-pomoshh.html | `03b`, `X2:russia_cis_competitors` |
| https://www.xataka.com.co/aplicaciones/centro-relevo-plataforma-que-impulsa-conectividad-barreras-para-personas-sordas-colombia | `03d`, `05`, `X2:region_americas` |
| https://yandex.ru/legal/speechkit/ | `04b`, `X2:hands_on_repo_audit` |
| https://www.yanous.com/wp-content/uploads/211201-CP-AccesSourd-n2.pdf | `03c`, `X2:region_europe` |
| https://www.yerevan.am/en/news/tesazangov-t-argmanowt-yown-lsoghowt-yan-khndirner-ownets-ogh-k-aghak-ats-ineri-hamar | `03b`, `X2:russia_cis_competitors` |
| https://zakon.uchet.kz/rus/docs/V2300032992 | `03b`, `X2:russia_cis_competitors` |
| https://www.zoominfo.com/c/navo/345952322 | `08` |
| https://www.zuzex.com/projects/sign-language-interpreter | `03b`, `X2:russia_cis_competitors` |

## Manbalar

Bu indeksning o'zi manba ro'yxati: har URL o'zini keltirgan hujjatdagi kontekst bilan o'qilsin. Kontekstsiz URL fakt sifatida ishlatilmaydi.

## Tasdiqlanmagan / bo'shliqlar

| Mavzu | Holat |
|---|---|
| Havolalarning ishlashi | Tekshirilmagan (HTTP holat o'lchanmagan); ba'zi sahifalar tadqiqot paytida ham ochilmagan (403, archive.org bloklangan) |
| Toifalash | Domen bo'yicha avtomatik; aralash domenlar (masalan, `medium.com` blog yoki `t.me` davlat kanali) qo'lda tekshirilmagan |
| Havolasiz manbalar | Ba'zi YouTube kanallari, podkastlar va qidiruv snippetlari xom yozuvda URL'siz keltirilgan - ular bu indeksda yo'q (masalan, CyberQiz, Noir Nabiev, "Quloq borki eshitish lozim") |
| Kesilgan URL'lar | Qavs ichida qavs bo'lgan URL'lar (masalan, ba'zi Wikipedia sahifalari) birinchi `)` da kesilgan bo'lishi mumkin |
| Brend URL'lari | tilo.wonmor.io, t.me/tiloapp, github.com/wonmortech/tilouz - founder ma'lumoti; tilo.uz hali sotib olinmoqda |
