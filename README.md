# Placeonix — website

Static SAP/IT training-institute website: a homepage plus 23 course/combo
landing pages, built plain HTML/CSS/JS (no framework, no build step), with a
small Express backend for the enquiry form's email delivery.

## Structure

```
public/                  Everything served to the browser
  index.html              Homepage
  courses/                22 course + combo landing pages, grouped into
                           sap/, technology/, combo/ subfolders, plus the
                           SAP BTP vs SAP ABAP comparison page (flat, not a
                           course). Old flat URLs 301-redirect to the new
                           nested ones — see docs/audit/nav-and-urlchange-report.md
  assets/css/site.css     Shared stylesheet used by every page in courses/
  assets/img/curriculum/  Per-course "curriculum at a glance" visuals
  assets/img/             Logo variants (transparent / white, for light
                           vs dark backgrounds)
  blog/, privacy-policy.html, terms.html, refund-policy.html
                           Utility pages (blog is an empty "coming soon"
                           state; the 3 legal pages are marked draft,
                           pending real legal review)
  sitemap.xml, robots.txt, llms.txt
                           SEO / AI-crawler discovery files

server.js                 Express server for local dev / non-Vercel hosting
api/applications.js       Same enquiry-form handler, as a Vercel serverless
                           function (used instead of server.js on Vercel)
scripts/inject-glance.js  One-off script that generated the .glance
                           "Combo Advantage" banners on the combo pages

docs/audit/                Every audit/report produced while building this
                            site (SEO, mobile, bugs, competitor benchmark,
                            final regression report) — read these for the
                            full history of what was checked and fixed

prompts-used/               The actual prompts and reference docs (SEO
                            keyword research, original site audit) used to
                            build this site — see prompts-used/README.md

design-assets/              Original/source logo files, kept for reference
                            only — not used by the running site
```

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill in real SMTP credentials (the
   enquiry form can't send email without these — see `docs/audit/FINAL-REPORT.md`
   for the exact error this produces if skipped).
3. `npm start` (or `npm run dev` for auto-restart on change)
4. Open `http://localhost:3000`

**Do not commit `.env`** — it's already gitignored. It contains a real email
password/app password.

## Deploying

- **Vercel**: `api/applications.js` handles the form submit; `vercel.json`
  sets security headers and cache rules. Set the same `SMTP_*` env vars (plus
  `ADMIN_EMAILS`) in the Vercel project settings.
- **Any Node host**: `server.js` serves `public/` and handles the form via
  `/api/applications` directly — same env vars, via `.env`.

## Where to look first

- Something looks broken → `docs/audit/bugs-and-errors-audit.md`
- Wondering why a page/section exists → `docs/audit/FINAL-REPORT.md` and
  `prompts-used/` (the prompts that drove each build phase)
- Mobile layout issue → `docs/audit/mobile-report.md`
- SEO/schema question → `docs/audit/SEO-PERFORMANCE-CHECKLIST.md` and
  `docs/audit/COMPETITOR-BENCHMARK.md`
