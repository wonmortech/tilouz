# Contributing to Tilo

Thank you for wanting to help. Tilo removes the communication barrier between Deaf, hard-of-hearing and
non-speaking people and hearing people. It is in the planning stage: the repository holds the research and plan
([docs/](docs/), in Uzbek) and the presentation site ([site/](site/)). Application code starts with the first issues.

O'zbekcha qisqacha: issue oching yoki `good first issue` belgili vazifani oling, har commit `git commit -s` bilan,
har o'zgarish pull request orqali. Savollar uchun [Telegram kanal](https://t.me/tiloapp).

## Ways to contribute

| You are | You can |
|---|---|
| Developer (web, WebRTC, backend, mobile) | Pick an issue labelled `good first issue` or `help wanted` |
| ML / speech / data engineer | Uzbek ASR evaluation, sign-language data tooling, see [docs/04_Texnologiya/](docs/04_Texnologiya/) |
| Designer / accessibility expert | Video-first, low-literacy UX, see [docs/06_Platforma_rejasi/](docs/06_Platforma_rejasi/) |
| Deaf community member, interpreter, linguist | Testing, sign content, review of the dataset plan; open an issue with the **Idea** template |
| Translator | Uzbek (Latin and Cyrillic), Russian, Karakalpak, Kazakh, Kyrgyz, Tajik |
| Researcher | Correct a source, add a missing product or study; link the primary source |

Report a vulnerability privately, never in a public issue: see [SECURITY.md](SECURITY.md).

## Development

Requirements: Node.js 24 and Git. There is no build step: `site/` is served as it is.

```sh
node tools/check-site.mjs               # links, CSP rules, forbidden text
npx http-server site -p 8080            # or any static server
pipx run reuse lint                     # SPDX header or REUSE.toml entry for every file
```

## Rules for a change

- **The CSP.** The site is served with `default-src 'self'`: no inline `<script>`, no inline event handlers,
  no third-party origins. `tools/check-site.mjs` enforces this.
- **Accessibility first.** WCAG 2.2 AA at minimum: contrast, keyboard, focus, captions for every video,
  `prefers-reduced-motion`. This project is for people with disabilities; an inaccessible change is a bug.
- **Privacy.** Never commit personal data, real sign videos without written consent, or secrets.
- **Honesty.** Plans are labelled as plans. A claim or a number needs a source someone else can check.
- **Languages.** Keep `/`, `/en/` and `/ru/` in sync.
- **One topic per pull request**, Conventional Commits style (`feat:`, `fix:`, `docs:`).

## Developer Certificate of Origin (DCO)

Every commit must be signed off ([developercertificate.org](https://developercertificate.org/)):

```sh
git commit -s -m "fix: ..."
```

The `dco` check fails a pull request with an unsigned commit; fix it with `git rebase --signoff origin/main`.

## Review and merge

Every change goes through a pull request with green CI and an approving review from a maintainer other than
the author ([GOVERNANCE.md](GOVERNANCE.md)). We squash-merge and delete the branch.

## Licence and conduct

Code: [Apache License 2.0](LICENSE). Documentation in `docs/`: [CC BY 4.0](LICENSES/CC-BY-4.0.txt).
No CLA is required. Everyone follows the [Code of Conduct](CODE_OF_CONDUCT.md).
