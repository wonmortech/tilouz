# Changelog

Barcha sezilarli o'zgarishlar shu yerda. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Loyihada hali versiyalangan reliz yo'q: `main` = jonli sayt.

## [Unreleased]

### Added
- `/app/` sinov ilovasi uchun smoke e2e testlar (`tests/app/`, `npm run test:app`, CI qadami). Ular prod `/app` CSP ostida, soxta kamera bilan ishlaydi va tashqi so'rov yo'qligini tekshiradi.
- `tools/serve-site.mjs`: `site/` ni `deploy/Caddyfile` dagi yo'lga bog'liq headerlar bilan xizmat qiladi.
- `ROADMAP.md`, `CHANGELOG.md` va `docs/decisions/` (ADR 0001-0005).
- [GitHub Project · Tilo Roadmap & Backlog](https://github.com/orgs/wonmortech/projects/1): 8 epic, 55 mayda task (sub-issue), 5 milestone (M0-M4), bosqich, soha va owner-task label'lari, 10 view.

### Changed
- README, CONTRIBUTING va SECURITY loyihaning hozirgi holatiga moslandi (sinov ilovasi jonli).

## 2026-11-17
### Added
- Konsept demo: to'qima ma'lumot, smoke testlar va README skrinshotlari ([#21](https://github.com/wonmortech/tilouz/pull/21)).
- Birinchi sinov ilovasi `/app/`: yuzma-yuz subtitr, kartalar, video xabar, favqulodda karta ([#19](https://github.com/wonmortech/tilouz/pull/19)).

### Fixed
- Ilova tugmasi yuqori panelda, desktopda ham ko'rinadi ([#20](https://github.com/wonmortech/tilouz/pull/20)).

## 2026-11-15
### Added
- Tadqiqot hujjatlari, brend kitobi va ko'ngillilar uchun sayt-prezentatsiya.
- Telegram kanal uchun rejali postlar.
- REUSE muvofiqligi ([#2](https://github.com/wonmortech/tilouz/pull/2)) va `.gitattributes` ([#1](https://github.com/wonmortech/tilouz/pull/1)).
