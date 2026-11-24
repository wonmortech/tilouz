# Security policy

Tilo is in an early test stage. What runs, all deployed from `main`:

- the presentation site at https://tilo.wonmor.io;
- the test app at https://tilo.wonmor.io/app/ (static PWA, no Tilo backend: settings and recordings stay on the device);
- the concept demo at https://wonmor.io/demo/tilo/ (fictional data only).

Security fixes go to `main` and are deployed. Of particular interest: anything that lets a page under `/app/` send
data to another origin, or lets a page outside `/app/` reach the camera or microphone (see
[docs/decisions/0003-per-path-csp.md](docs/decisions/0003-per-path-csp.md)).

## Reporting a vulnerability

Please **do not** open a public issue for a vulnerability.

1. Preferred: GitHub private vulnerability reporting:
   <https://github.com/wonmortech/tilouz/security/advisories/new>.
2. If you cannot use GitHub: a private message on Telegram to <https://t.me/xnosir>.

Include the affected URL or file, steps to reproduce and the impact. Never send other people's personal data.

| Step | Within |
|---|---|
| Acknowledge | 7 days |
| Assess | 14 days |
| Fix high and critical issues | 60 days |

Tilo will handle video of people's faces (biometric data) and conversations of vulnerable users, so privacy
issues are treated as security issues.
