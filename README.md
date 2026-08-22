# Comet Foundry

The official website for **Comet Foundry** — a global nonprofit founder movement building the largest network of student builder communities on college campuses.

Live: [cometfoundry.com](https://www.cometfoundry.com)

---

## About

Comet Foundry establishes campus chapters — physical builder spaces that run the same Four Labs, the same Semester Arc, and the same builder standard at every university in the network.

- **Founded:** 2026 · Chapter 01 at UT Dallas
- **Structure:** Independent 501(c)(3) nonprofit — pending IRS determination
- **Footprint:** 1 active chapter (UTD) · 6 incoming (UT Austin, Texas A&M, Rice, Georgia Tech, Berkeley, MIT)

---

## Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Runtime:** Node.js on Vercel Fluid Compute
- **Styling:** Hand-written CSS in `app/globals.css` (no Tailwind, no CSS modules)
- **Fonts:** Space Grotesk (display), IBM Plex Mono (mono), Caveat (handwritten)
- **Email:** Resend API for subscriber notifications
- **Hosting:** Vercel

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` (if present) to `.env.local` and fill in:

```
RESEND_API_KEY=re_...
```

`.env*` files are gitignored and must never be committed.

---

## Project structure

```
app/
  api/subscribe/     # Newsletter signup endpoint (rate-limited, sanitized)
  chapters/          # Chapters hub + standard + start + per-chapter pages
  programs/          # Four Labs + Semester Arc + Demo Day
  demo-day/          # Standalone Demo Day page
  stash/             # Free resources: legal, guides, hackathons, tools, github, reading, funding
  careers/           # Careers hub + built-at-cf + ecosystem
  builds/            # WIP builds wall
  builders/          # Builder roster
  outcomes/          # Metrics & receipts
  press/             # Press & brand assets (permission-gated)
  leadership/        # Foundation leadership + founder's letter
  for-universities/  # University partnership page
  events/            # Events calendar
  field-notes/       # Long-form writing (was /blog)
  donate/            # Fuel It
  mission/           # Why + Doctrine
components/          # Shared React components
lib/                 # Data + shared utilities (validators, security log)
public/assets/       # Logos, team headshots, campus map SVG
```

---

## Security

The site ships with production-grade hardening:

- **Content-Security-Policy**, HSTS with preload, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, COOP, CORP, X-DNS-Prefetch-Control, X-Content-Type-Options
- **API input validation** via `lib/validate.ts` — strips `<>`, `javascript:`, `on*=` handlers, length-caps every field
- **CORS allowlist** on API routes — only cometfoundry.com origins accepted
- **In-memory rate limiter** — 5 req/min per IP on `/api/subscribe`
- **Honeypot + timing check** — submissions under 2s and populated honeypot fields are silently discarded
- **Structured security logging** via `lib/securityLog.ts` — every rate-limit hit, bot detection, XSS attempt is logged as structured JSON
- **rel="noopener noreferrer"** on every external link
- **Static build ID + `poweredByHeader: false`** — no deployment fingerprinting

Report security issues privately to **[security@cometfoundry.com](mailto:security@cometfoundry.com)**. Do not open public GitHub issues for vulnerabilities.

---

## Contact

| Purpose | Email |
| --- | --- |
| General inquiries | [info@cometfoundry.com](mailto:info@cometfoundry.com) |
| Chapter / partnership inquiries | [inquiry@cometfoundry.com](mailto:inquiry@cometfoundry.com) |
| Press & brand | [press@cometfoundry.com](mailto:press@cometfoundry.com) |
| Legal & compliance | [legal@cometfoundry.com](mailto:legal@cometfoundry.com) |
| Security | [security@cometfoundry.com](mailto:security@cometfoundry.com) |

---

## Credits

Designed, built, and maintained by **Vishva Patel** — founder of Comet Foundry.
Contact: [vishva.patel@cometfoundry.com](mailto:vishva.patel@cometfoundry.com)

No agency, no dev team, no external contractors. Every line of code, every layout decision, every piece of copy has been shipped by the founder. If something is broken or could be better, that's on him — [report a bug](https://www.cometfoundry.com/report-bug).

---

## License

© 2026 Comet Foundry Foundation. All rights reserved.

The source code in this repository is proprietary and made public only for transparency. The Comet Foundry name, logo, brand assets, and visual identity are trademarks of the Foundation — see [/press](https://www.cometfoundry.com/press) for usage guidelines. Any reproduction, redistribution, or derivative use requires prior written permission.
