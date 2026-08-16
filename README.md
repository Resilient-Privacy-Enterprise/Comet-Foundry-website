# Comet Foundry — Website

The production website for Comet Foundry, a hacker house at UT Dallas — built with [Next.js](https://nextjs.org) (App Router). This is the live codebase behind [cometfoundry.com](https://www.cometfoundry.com).

## Stack

- **Next.js 16** (App Router, Turbopack) with **React 19** and **TypeScript**
- **npm** for package management
- Deployed on **Vercel**, with the GitHub repo connected for CI builds
- **Resend** for transactional email (the "Join The Foundry" signup form)
- **Vercel Web Analytics** for privacy-respecting, cookie-free traffic insight

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` to test the subscribe form locally. Without it, `/api/subscribe` still validates input and rate-limits correctly, but the actual email send will fail — that's expected in local dev.

## Project structure

- `app/` — one route per page (App Router file-based routing), plus `app/api/subscribe/route.ts` for the email signup endpoint, and `app/robots.ts` / `app/sitemap.ts` for SEO metadata routes.
- `components/` — shared UI: nav, footer, the door intro animation, the events calendar, blog/legal page layouts, etc.
- `lib/metadata.ts` — shared helper for per-page SEO/Open Graph metadata.
- `public/assets/` — images, icons, and other static files, served directly.
- `next.config.ts` — security headers (CSP, HSTS, etc.) and asset caching rules.

## Content

Content (blog posts, team roster, event details) lives directly in the page/data files as structured TypeScript, not a database or external CMS — changes are made by editing code and committing, matching the rest of this repo's git-based workflow.

## Deployment

Connected to Vercel via its native GitHub integration — pushes to `main` build automatically. `RESEND_API_KEY` must be set in the Vercel project's Environment Variables for the subscribe form to work in production.

## Maintainers

- **Developer & Maintainer:** [Vishva Patel](https://www.linkedin.com/in/vishva-vp/)
