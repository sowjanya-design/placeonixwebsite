# Placeonix Website — Project Brain

This document exists so that any AI (or human) picking up this project cold can understand
everything about it and act consistently with how work has been done so far. Read this fully
before making changes.

## 1. What this project is

Placeonix is an SAP/IT training and placement institute in Hyderabad. This repo is their
marketing website: course catalog (SAP + Technology + Combo programs), homepage with lead
capture, legal pages, blog stub.

**Two live codebases exist in this one repo right now:**

1. **`public/` + `server.js`** (repo root) — the ORIGINAL static HTML/CSS/vanilla-JS site.
   Still present on disk, still git-tracked, but **no longer the active development target**.
   Do not add new features here.
2. **`web-next/`** — the **new Next.js 16 (App Router) + TypeScript rewrite**, built to
   fully replace the static site. **This is the active codebase. All new work happens here.**

The migration to `web-next/` was done because the user explicitly asked: *"i need this
project in next js no html no js fix that... make this perfect."* The static site was kept
in place (not deleted) rather than migrated in-place, per the user's choice when asked
(new folder in same repo, not overwrite).

## 2. Stack (web-next/)

- Next.js 16.2.11, App Router, Turbopack, React 19, TypeScript
- No CSS framework — plain CSS files copied/adapted from the static site's design system
- `nodemailer` for the application-form email API route (mirrors the old `api/applications.js`)
- No database. No auth. No external UI libraries — animations are hand-rolled with React hooks
  (`IntersectionObserver`, `requestAnimationFrame`), per explicit user instruction ("no
  external libraries — pure React hooks + inline styles" was pasted verbatim into a spec at
  one point and should be treated as a standing preference for this project, not just that
  one component).
- Dev server: `npm run dev` inside `web-next/` — **runs on port 3000** (the old static
  `server.js` was killed and Next.js was consolidated onto port 3000 to avoid confusion; see
  §6 "Known gotchas"). Do not casually run both servers at once.

## 3. Architecture — data-driven, not hand-copied pages

The static site had 28 near-identical HTML pages (course pages differ only in content, not
structure). Rather than hand-porting each into its own `.tsx` file, the content was
**extracted into JSON once, and rendered through a single dynamic route.**

- `scripts/extract-courses.js` (repo root `scripts/`, run with plain Node, uses `cheerio`) —
  parses all 22 course HTML pages under `public/courses/**/*.html` and produces
  `web-next/src/data/courses.json`. Extracts: meta tags, JSON-LD (Course/FAQPage/
  BreadcrumbList), hero fields, curriculum modules, careers table, tools, projects,
  eligibility, cert/placement cards, related links, FAQ.
- `scripts/extract-home.js` — same idea for the homepage, produces
  `web-next/src/data/home.json` (hero, features, visCards, processSteps, internship,
  testimonials, faq, contact). Note: the extracted `trustStats` values are placeholder
  "0+" strings because the real numbers (2,000 / 100 / 5) were injected by JS at runtime on
  the old site — the real values are hardcoded directly in `web-next/src/app/page.tsx` as
  `TRUST_STATS` instead of trusting the JSON.
- **If source HTML content ever needs to change**, the correct workflow is either:
  (a) edit `courses.json`/`home.json` directly, since nothing re-reads the old HTML at
  build/run time, or
  (b) edit the old HTML in `public/` and re-run the extract script — only do this if you
  specifically want to re-derive from the original source of truth.
- These extraction scripts are one-off migration tooling, not part of the Next.js build
  pipeline — they don't run automatically.

### Course pages: one template, many instances

- `web-next/src/app/courses/[category]/[slug]/page.tsx` — the core dynamic course template.
  Uses `generateStaticParams()` (built from `getAllCourseParams()` in
  `web-next/src/lib/courses.ts`) to statically generate every course page at build time.
  Also has `generateMetadata()` and reconstructs the same JSON-LD the static pages had.
- `web-next/src/app/courses/[category]/page.tsx` — category hub (e.g. `/courses/sap`).
- `web-next/src/app/courses/page.tsx` — all-courses hub.
- `web-next/src/lib/courses.ts` — data access layer: `getAllCourses()`,
  `getCoursesByCategory()`, `getCourse()`, `getAllCourseParams()`, `categoryLabels` map.
- `web-next/src/lib/types.ts` — TypeScript types (`Course`, `HeroFact`,
  `CurriculumModule`, `FaqItem`, etc.) matching the shape of `courses.json`.
- **URL structure has NO `.html` extension** anywhere (explicit user requirement: "no html
  no js"). Categories are `sap`, `technology`, `combo`. Example routes:
  `/courses/sap/sap-btp`, `/courses/technology/data-science`, `/courses/combo/ai-data-science`.
  This matches the reorganized `public/courses/{sap,technology,combo}/*.html` folder
  structure that was already in progress on the static site (see git status renames at the
  start of this branch).

### Course categories/slugs (as of extraction)

- **SAP** (10): sap-abap, sap-basis, sap-btp, sap-capm, sap-cpi, sap-fico, sap-mm, sap-rap,
  sap-sd, sap-ui5-fiori
- **Technology** (6): cloud-computing, cyber-security, data-science, full-stack,
  generative-ai, java-backend, ui-ux-design (check exact count/slugs in `courses.json` if
  precision matters — don't assume this list is exhaustive without checking)
- **Combo** (5): ai-data-science, cloud-dev-bundle, sap-full-stack-program,
  sap-functional-analyst, sap-integration-expert

### Known gap

- **SAP BTP vs SAP ABAP comparison page** (`public/courses/sap-btp-vs-sap-abap.html`) is a
  unique one-off ~368-line layout that does NOT fit the repeating course template. It was
  explicitly flagged to the user as NOT YET migrated to `web-next/`. The user has not yet
  responded to the offer to build it. **Do not assume this is done — check
  `web-next/src/app/` for a `sap-btp-vs-sap-abap` route before claiming it exists.**

## 4. Shared components (web-next/src/components/)

- `MegaNav.tsx` — client component, the nav bar used on all course/hub pages, with
  mega-menu dropdowns for SAP/Technology/Combo. **Important fixed bug**: dropdown parent
  `<Link>` labels ("SAP Courses", "Technology Courses", "Combo Programs") now route to
  `/courses/sap`, `/courses/technology`, `/courses/combo` respectively — NOT to `/#programs`
  as they incorrectly did before. Each dropdown also has a "View All ___" link. If you ever
  touch nav routing, preserve this behavior — it was an explicit bug report from the user.
- `SiteFooter.tsx` — identical footer on every page.
- `WhatsAppFloat.tsx` — floating WhatsApp CTA button, used on course/hub/legal pages (accepts
  a `message` prop for prefilled text).
- `BackToTop.tsx`, `MiniNav.tsx`, `CurriculumAccordion.tsx`, `CourseFaq.tsx`,
  `ProgramCard.tsx`, `LegalPage.tsx` (generic wrapper for privacy/refund/terms pages, takes
  `title`, `disclaimer`, `sections` props).
- `web-next/src/data/nav.ts` — shared nav link arrays (`sapLinks`, `technologyLinks`,
  `comboLinks`), routes without `.html`.

### Homepage-only components (web-next/src/components/home/)

- `SideNav.tsx` — homepage's own nav variant (different from `MegaNav`, which is used on
  course pages only).
- `LeadPopup.tsx` — the lead-capture modal. **Fixed bug**: the popup `<form>` element itself
  needs class `"lead-popup show"` to become visible (CSS gates on `.lead-popup.show`) — it
  had previously only been set on the overlay div, leaving the form invisible. If this
  component is ever touched again, verify both the overlay AND the form element carry the
  `show` class together.
- `CourseFinder.tsx`, `ApplicationForm.tsx`, `WaNudgeFloat.tsx`, `RevealObserver.tsx`
  (scroll-reveal IntersectionObserver wrapper, applies `.reveal`→visible transitions site-wide).
- `TrustStats.tsx` — the "Trusted Nationwide" stats band. See §5, this went through 4 rounds
  of design iteration and is the most design-sensitive component in the app.

## 5. TrustStats — design history (read before touching this component again)

This component had the most back-and-forth of anything in the project. Current state is the
FINAL agreed design; do not regress to earlier iterations.

**Evolution, in order:**
1. Original static-site version: flat purple box, unstyled.
2. User: "remove the background car [sic, likely 'bar'] in purple and keep only map... make
   it look coolest possible" → rebuilt with dark indigo box + world map mask + glow orbs.
3. User pasted a full design spec (verbatim): deep indigo bg, 3 stats with vertical
   separators, SVG/PNG dot map as a background texture, 3 blurred glow orbs, staggered
   `IntersectionObserver` entrance animation, cubic ease-out count-up over 1.8s, a glowing
   underline bar that animates 0→~55px width only AFTER the number finishes landing, label
   fade-in at the 900ms mark, huge bold numbers (clamp-based responsive size, ~-3% letter
   spacing, purple `drop-shadow` glow), smaller bold "+" suffix, explicitly "no external
   libraries — pure React hooks + inline styles", "'use client' directive". → implemented
   essentially verbatim in `TrustStats.tsx` (see full code, it's short, just read the file).
4. User: "remove the back picture of maps" → map removed, kept solid indigo box.
5. User: "remove that box of violet and only keep the map with the count in purple color" →
   **final state**: no solid background box at all. `.trust-stats::before` uses a
   `mask-image` compositing trick (radial-gradient mask ∩ the `world-dots-white.png` bitmap
   mask, `mask-composite: intersect`) to render just a soft indigo-tinted world-map texture
   directly on the page's white background — no boxed panel. Stat numbers are purple
   (`#4f46e5`) with a soft glow `drop-shadow`, not white-on-dark anymore.

**Do not** reintroduce a solid-color background box behind the stats — that was explicitly
rejected twice. **Do not** remove the map texture — it was explicitly requested to stay
(only the box was rejected, not the map).

CSS lives in `web-next/src/app/home.css` under the `.trust-stats*` rules. Logic/animation
lives in `TrustStats.tsx` (`CountUpStat` sub-component: parses `"2,000+"` style strings via
regex into prefix/target-number/suffix, drives the count-up via `requestAnimationFrame`).

### The world-map asset

`web-next/public/assets/img/world-dots-white.png` — this file was originally a broken asset
(a solid grey ellipse, not an actual world map) inherited from the static site. It was
regenerated earlier in this engagement using Higgsfield AI image generation + local `ffmpeg`
background removal to produce a real dot-textured world map silhouette. This fixed file is
what both the static site and `web-next/` now use. If this file ever looks wrong again, that
history is why — it's not something to "restore from git," the current version IS the fix.

## 6. Known gotchas / traps for future sessions

- **Two dev servers, one port.** The old static site (`server.js`, repo root) used to run on
  port 3000. The Next.js app was initially run on 3001, causing a real incident: the user
  looked at `localhost:3000` (old site), saw no changes, and reported a bug that didn't
  exist in the new code. Resolution: killed whatever was on port 3000 and moved the Next.js
  dev server there instead (`npm run dev -- -p 3000` from inside `web-next/`). **When
  testing web-next changes, always confirm which port you're actually serving from and which
  one the user is looking at.** If both servers might be running, check with
  `Get-NetTCPConnection -LocalPort 3000` (PowerShell) before assuming.
- **`next/image` aspect-ratio warning**: two nav-logo `<Image>` instances (in `MegaNav`/
  `SideNav`) throw a harmless dev-only console warning about width/height mismatch. Partially
  mitigated with inline `style={{width:'auto', height:'46px'}}` (54px variant in SideNav) but
  not fully eliminated. This is known, accepted, and not worth further effort per prior
  session's explicit conclusion — don't rabbit-hole on it again unless the user raises it.
- **`viewport`/`themeColor` split**: Next.js 16 deprecated `themeColor` inside the `metadata`
  export. It now lives in a separate `export const viewport: Viewport = { themeColor:
  '#4f46e5' }` in `web-next/src/app/layout.tsx`. If you add `themeColor` anywhere, use the
  `viewport` export, not `metadata`.
- **Async `params` in Next 16**: dynamic route handlers/pages must `await params` — it's
  typed as `Promise<{...}>`, not a plain object. Already handled correctly in
  `courses/[category]/[slug]/page.tsx`; keep this pattern for any new dynamic route.
  wt
- **Company logos**: `web-next/public/assets/img/company-logos/*.png` — 10 real files exist
  (accenture, amazon, capgemini, cognizant, google, ibm, infosys, microsoft, tcs, wipro).
  "Tech Mahindra" appears in some older content/copy but has NO logo file — don't reintroduce
  it in the partner marquee without sourcing an actual logo asset first. The marquee in
  `page.tsx` (`partnerLogos` array + `.partner-tile img`) renders these as real `<img>` tags,
  duplicated (`[...partnerLogos, ...partnerLogos]`) for a seamless CSS scroll loop, with
  `aria-hidden` on the second copy.
- **`turbopack.root`**: `web-next/next.config.ts` sets `turbopack: { root: __dirname }` to
  silence a multi-lockfile monorepo-root warning (there's a lockfile at repo root too, from
  the old static site's `npm` usage, plus one in `web-next/`).
- **Assets were bulk-copied** from `public/assets/*` → `web-next/public/assets/*`, plus a
  couple of root-level strays (`background.jpeg`, `logo.jpeg`) that needed a manual `cp`
  because they lived outside `public/assets/`. Default Next.js placeholder SVGs
  (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) were deleted from
  `web-next/public/` as unused cruft from `create-next-app` scaffolding.

## 7. Environment / secrets

- `.env.example` at repo root documents SMTP env vars used by the application-form email
  (`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`) and `ADMIN_EMAILS`
  (comma-separated notification recipients). The old `server.js`/`api/applications.js`
  hardcoded `enquiry@placeonix.com,support@placeonix.com` as a fallback; the same behavior
  was carried over into `web-next/src/app/api/applications/route.ts` (a Next.js Route
  Handler exporting `POST`, using `NextRequest`/`NextResponse`, same email templates as the
  old handler). **`web-next/` needs its own `.env.local`** with these same vars — check it
  exists before assuming the contact form works end-to-end in a fresh checkout.
- No other secrets/integrations in this project (no analytics keys, no CMS, no database).

## 8. Standing user preferences (apply beyond just this feature)

- **No inline scattered `.html`/legacy patterns** — clean route paths, TypeScript, App Router
  idioms. The user cares about this being "done right," not just visually matching.
- **No external animation/UI libraries** — hand-roll with native browser APIs
  (`IntersectionObserver`, `requestAnimationFrame`) and plain CSS transitions. This was
  explicit in the TrustStats spec and should be treated as a general project convention, not
  a one-off.
- **User gives feedback iteratively via screenshots** — often terse ("remove that box",
  "the logos are not there"). Always cross-check against an actual browser screenshot at
  both desktop and mobile widths before declaring a visual task done; don't just trust that
  the code change should look right in principle. The port-confusion incident (§6) happened
  specifically because a screenshot claim wasn't reconciled with which server was running.
- User is non-technical-leaning in phrasing but has a clear, exacting visual bar — verify
  visually, don't just ship code that "should" match the spec.

## 9. What's explicitly NOT done yet

- SAP BTP vs SAP ABAP comparison page (unique layout, not part of the course template) — not
  ported to `web-next/`. Offered to the user, not yet confirmed/started.
- Blog page (`web-next/src/app/blog/page.tsx`) is intentionally a "coming soon" placeholder —
  this is correct/final per design decision to not backfill with fake posts, not an
  unfinished task.
- Refund/privacy/terms legal pages (`web-next/src/app/{refund-policy,privacy-policy,terms}/
  page.tsx`) contain `[TODO — team to confirm]` placeholders for real legal/financial terms
  — intentionally left as-is because inventing refund percentages, etc. would be
  irresponsible. Do not fill these in with invented numbers; flag to the user that legal/
  finance needs to supply real terms.
- No automated tests exist for `web-next/`. No CI config specific to it has been set up in
  this engagement.

## 10. Quick orientation checklist for a new session

1. `cd web-next && npm run dev` (or check if already running before starting a second one —
   see port gotcha in §6).
2. If asked to change course content: edit `web-next/src/data/courses.json` directly (don't
   hand-edit `public/` HTML expecting it to propagate — nothing re-reads it automatically).
3. If asked to change homepage content: edit `web-next/src/data/home.json` for
   data-driven sections, or `web-next/src/app/page.tsx` directly for hardcoded ones
   (`TRUST_STATS`, `partnerLogos`, JOURNEY_ICONS SVGs).
4. If asked about nav/routing: check `web-next/src/data/nav.ts` and `MegaNav.tsx`/
   `SideNav.tsx` — remember the `.html`-free routing requirement and the fixed
   dropdown-label-routes-to-category-page bug (don't reintroduce `/#programs` links).
5. Styling: `web-next/src/app/globals.css` (shared design system, course/hub/legal pages) vs
   `web-next/src/app/home.css` (homepage-only, imported directly in `page.tsx`).
6. Always verify visual changes with an actual screenshot at ~1780px and ~390px viewports
   before reporting a design task complete.

## 11. Recent Major Refactors & Cleanups (July 2026)

This project recently underwent a massive pre-launch cleanup and premium UI overhaul to prepare for production. If you are picking this up, here is what was just accomplished:

### 🧹 The "Great Purge" (Zero Legacy Code)
- **Root Directory Eradicated**: The repository previously had a massive amount of tech debt tracked in Git at the root level (e.g. `legacy-site/`, a redundant `public/` folder, old Express `api/` routes, `scripts/`, `prompts-used/`, `docs/`, `design-assets/`, and outdated root configs like `server.js`, `package.json`, and `vercel.json`).
- **Pristine State**: We ran a strict `git rm -rf` on over 105 legacy files and 22,000+ lines of old code. The remote Git repository is now **100% clean**. It strictly contains only the `web-next/` directory and basic repo documentation (`README.md`, `.gitignore`).

### 🎨 Premium UI/UX Polish
- **Global Lead-Capture Popup**: The `LeadPopup` was decoupled from the homepage and moved to global layout. It now triggers on a strict **30-second timer globally across all pages** to maximize lead generation, tracking dismissals via `sessionStorage`.
- **Photography Upgrade**: We stripped out abstract purple gradients in the "Your Journey Starts Here" cards and replaced them with highly contextual, premium photography (trainers teaching, students coding, corporate handshakes).
- **Navigation Call-To-Action**: The main button in the `MegaNav` was updated from "Apply Now" to **"Book a Demo Class"** per user strategy.
- **Terminology Update**: Across the site, we standardized the terminology from "Domains" to "Courses" for clarity.

### 📚 Curriculum Infographics Migration
- **High-Res Images**: The user uploaded 22 brand new, highly detailed infographic images for every single course page (mostly converting from `.jpg` to `.png`).
- **JSON Automation**: These were migrated into `web-next/public/assets/img/curriculum/`, and `src/data/courses.json` was programmatically updated via PowerShell regex to point to the precise file extensions (`.png` / `.jpg`).

### 🚀 Local Port Sharing Protocol
- **No IDE Tunnels**: The user's local Antigravity IDE `code-tunnel.exe` is broken/missing (`ENOENT`).
- **Solution**: To share the localhost preview with stakeholders, we actively use `npx tunnelmole 3000` (Localtunnel/Pinggy are historically blocked or flaky). The permanent, recommended solution for stakeholder review is pushing to `main` and relying on the automatic Vercel deployment.
