# Placeonix Website

SAP/IT training-institute marketing site — Next.js 16 (App Router) + TypeScript.
This directory is the entire application; see the [repo-root README](../README.md)
for how it fits into the rest of the repo, and [PROJECT_BRAIN.md](./PROJECT_BRAIN.md)
for the full design/decision history before making non-trivial changes.

## Quickstart

### 1. Prerequisites
- Node.js v18+
- npm (used by default; yarn/pnpm also work)

### 2. Install
```bash
cd web-next
npm install
```

### 3. Configure environment
The application form and lead popup send email via `nodemailer` and won't
work without SMTP credentials. Copy the template and fill in real values:
```bash
cp ../.env.example .env.local
```
`.env.local` is gitignored — never put real credentials in `.env.example`.

### 4. Run
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000). Edits hot-reload automatically.

## Project structure

```text
web-next/
├── public/                # Static assets served directly to the browser
│   └── assets/img/        # Curriculum infographics, company logos, thematic photos
│
├── src/
│   ├── app/                # Next.js App Router — one folder per route
│   │   ├── api/            # Route handlers (e.g. /api/applications for form submissions)
│   │   ├── courses/        # Dynamic course routes: /courses/[category]/[slug]
│   │   ├── globals.css     # Shared design system — colors, buttons, nav, cards, forms
│   │   ├── home.css        # Homepage-only styles, imported additionally by page.tsx
│   │   ├── layout.tsx      # Root layout: <html>/<body>, SEO metadata, MegaNav-adjacent globals
│   │   └── page.tsx        # Homepage
│   │
│   ├── components/         # Organized by scope
│   │   ├── home/           # Homepage-only (TrustStats, CourseFinder, LeadPopup, ...)
│   │   ├── layout/         # Cross-page (MegaNav, SiteFooter, RevealObserver, ...)
│   │   ├── shared/         # Reused by course pages + internships hub
│   │   └── ui/             # Generic widgets (BackToTop, WhatsAppFloat, ...)
│   │
│   ├── data/                # Content as JSON/TS — the closest thing this project has to a CMS
│   │   ├── courses.json    # Every course's full content (curriculum, FAQ, careers, etc.)
│   │   ├── home.json       # Homepage content blocks
│   │   └── nav.ts          # Shared nav link data
│   │
│   └── lib/                 # Data-access helpers + shared TypeScript types
│
├── next.config.ts
└── package.json
```

## Conventions

- **Content lives in `src/data/`, not JSX.** Course and homepage copy is JSON
  so it can be edited without touching components.
- **Components are grouped by scope** (`home/`, `layout/`, `shared/`, `ui/`) —
  the folder tells you where something belongs and whether it's safe to reuse.
- **No external animation/UI libraries.** Interactions are hand-rolled with
  native browser APIs (`IntersectionObserver`, `requestAnimationFrame`) and
  plain CSS transitions — a standing preference for this project, not a
  one-off (see `PROJECT_BRAIN.md` §5, §8).
- **`globals.css` vs `home.css`**: `globals.css` is the shared design system
  used everywhere; `home.css` holds homepage-only overrides. Check both
  before assuming a style rule only lives in one place.

## Deploying

Deployed on Vercel with `web-next/` as the project root. Set the same
`SMTP_*` + `ADMIN_EMAILS` env vars in the Vercel project settings —
`src/app/api/applications/route.ts` is the Route Handler that sends the
admin-notification and student-confirmation emails.
