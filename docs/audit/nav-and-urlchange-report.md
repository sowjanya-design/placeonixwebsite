# Nav restructure + URL migration + course-page polish — report

Executed from `prompts-used/NAV_RESTRUCTURE_AND_COURSE_PAGE_PROMPT.txt`. All 4
parts completed and verified. Sitewide regression (55 unique internal links,
console-error sweep across 8 representative pages including homepage) is
clean — see verification notes at the end of each part below.

**Note on the prompt's premise**: the prompt assumed one shared nav block
across `index.html` and every course page. In the actual codebase, the
homepage has always used its own separate nav markup/CSS (`.nav-links`, plain
list, no dropdowns) — structurally different from course pages'
`.site-nav`/`.dropdown` system. Rather than skip the homepage, the same
3-dropdown mega-menu was rebuilt using the homepage's own class names and
visual language, so behavior (hover, mobile static list, `:focus-within`) is
identical everywhere even though the two navs are separate CSS blocks.

---

## Part 1 — Nav regrouped into 3 category dropdowns

- **SAP Courses** (10), **Technology Courses** (7), **Combo Programs** (5) —
  every one of the 22 course/combo pages is now reachable from the nav on
  every page, not just the old single "SAP Courses" dropdown.
- Applied identically across all 23 files that had the nav block (22 course
  pages + the SAP BTP vs ABAP comparison page) via a single scripted
  replacement — confirmed byte-identical nav block across all files before
  the edit, so there was no risk of drift.
- Homepage nav rebuilt to match structurally (same 3 dropdowns + Alumni/
  Blog/Contact/Apply Now), in its own visual style.
- Dropdown transition refined: `.18s ease` → `.2s cubic-bezier(.2,.8,.2,1)`
  with an 8px slide, applied to both the course-page (`site.css`) and
  homepage (`index.html` inline) dropdown implementations.
- Mobile (<768px): dropdowns collapse to a static in-menu list on both nav
  systems — verified at 375px on both a course page and the homepage.
- Keyboard: `:focus-within` opens the dropdown — verified via `.focus()` +
  computed `visibility`.

**Verified**: hover-open on desktop (screenshot), mobile hamburger expands
correctly (screenshot, both nav systems), keyboard focus opens dropdown, zero
console errors.

## Part 2 — URL restructure to category folders

All 22 course pages moved from flat `/courses/*.html` into category folders.
The BTP-vs-ABAP comparison page was deliberately **not** moved (it's a
cross-category comparison, not a course, and never had "Hyderabad" in its H1
to begin with).

| Old URL | New URL |
|---|---|
| /courses/sap-btp-training.html | /courses/sap/sap-btp.html |
| /courses/sap-cpi-training.html | /courses/sap/sap-cpi.html |
| /courses/sap-capm-training.html | /courses/sap/sap-capm.html |
| /courses/sap-rap-training.html | /courses/sap/sap-rap.html |
| /courses/sap-ui5-fiori-training.html | /courses/sap/sap-ui5-fiori.html |
| /courses/sap-abap-training.html | /courses/sap/sap-abap.html |
| /courses/sap-fico-training.html | /courses/sap/sap-fico.html |
| /courses/sap-mm-training.html | /courses/sap/sap-mm.html |
| /courses/sap-sd-training.html | /courses/sap/sap-sd.html |
| /courses/sap-basis-training.html | /courses/sap/sap-basis.html |
| /courses/data-science-training.html | /courses/technology/data-science.html |
| /courses/generative-ai-training.html | /courses/technology/generative-ai.html |
| /courses/cloud-computing-training.html | /courses/technology/cloud-computing.html |
| /courses/full-stack-training.html | /courses/technology/full-stack.html |
| /courses/java-backend-training.html | /courses/technology/java-backend.html |
| /courses/cyber-security-training.html | /courses/technology/cyber-security.html |
| /courses/ui-ux-design-training.html | /courses/technology/ui-ux-design.html |
| /courses/sap-integration-expert-combo.html | /courses/combo/sap-integration-expert.html |
| /courses/ai-data-science-combo.html | /courses/combo/ai-data-science.html |
| /courses/cloud-dev-bundle-combo.html | /courses/combo/cloud-dev-bundle.html |
| /courses/sap-functional-analyst-combo.html | /courses/combo/sap-functional-analyst.html |
| /courses/sap-full-stack-program-combo.html | /courses/combo/sap-full-stack-program.html |

- Moved via `git mv` (history preserved).
- **301 redirects** added in both places so any host works: `vercel.json`
  `redirects` array (production) and a matching in-memory map in `server.js`
  (local dev / any non-Vercel Node host) — checked 5 old URLs directly, all
  return `301` to the correct new URL.
- Every internal reference updated in one scripted pass: nav (both systems),
  homepage program cards, every course page's own canonical/OG url,
  breadcrumb JSON-LD `item` fields, Related Programs blocks, `sitemap.xml`.
  `robots.txt` had no page-specific paths, nothing to change there.
- Asset references (`/assets/...`) were already absolute, so moving pages one
  folder deeper didn't break any image/CSS paths.

**Verified**: all 22 new URLs return 200; 5 spot-checked old URLs 301 to the
right destination; grepped the whole `public/` tree for every old flat
filename pattern — zero remaining references outside the redirect maps
themselves; full link-check script (55 unique internal links, every href/src
across every page) — all 200; `sitemap.xml` contains only new URLs.

## Part 3 — "in Hyderabad" removed from visible H1s

- All 22 course-page H1s changed from `"X Training in Hyderabad"` to just
  `"X Training"` (script-matched the consistent
  `<h1>...Training in <span class="grad-text">Hyderabad</span></h1>` pattern
  — 22/22 matched; the comparison page never had this pattern, nothing to
  change).
- Hyderabad kept in: `<title>`, meta description, JSON-LD (unaffected by the
  scoped regex), and added to the hero eyebrow line (e.g. `"SAP Cloud · Very
  High Demand"` → `"SAP Cloud · Very High Demand · Hyderabad"`) so the local
  ranking signal isn't lost, just decluttered from the big headline.
- Homepage H1 ("Where Talent Meets Opportunity") never contained "in
  Hyderabad" — no change needed there.

**Verified**: grepped for the old H1 pattern sitewide — zero remaining;
spot-checked 3 pages' `<title>` still contains "Hyderabad" (all do); visual
screenshot confirms clean headline + small eyebrow signal.

## Part 4 — Course-page polish

1. **In-page mini-nav**: sticky pill-chip row ("Jump to: Curriculum · Careers
   & Salary · FAQ") added to all 22 course pages, right below the hero,
   sticking under the main nav as the user scrolls. Added `#careers` and
   `#faq` ids to the template (the `#curriculum` id already existed).
2. **Sticky Course Snapshot card**: desktop-only (`min-width:901px`), the
   hero-card (duration/mode/level/CTA) now stays in view while scrolling
   through the intro/hero text. Confirmed `position:static` below 901px (not
   sticky on mobile, as required).
   - **Scope note**: the card is sticky *within the hero section's row*
     (bounded by the `.course-hero-grid` container), not for the entire page
     length down to the FAQ. Making it float through the whole page would
     require restructuring the grid so the card's containing block spans the
     full content column — a bigger layout change than this pass covers.
     Flagging this as a deliberate scope limit, not an oversight.
3. **Breadcrumbs**: normalized to match the new nav categories exactly
   (`SAP Courses` / `Technology Courses` / `Combo Programs`) in both the
   visible breadcrumb and the JSON-LD `BreadcrumbList` — this fixed a
   pre-existing inconsistency where several pages said generic "Courses" or
   "Programs", and 3 combo pages incorrectly said "SAP Courses".
4. **Curriculum-at-a-glance / Related Programs / FAQ**: confirmed present on
   all 22 course pages (0 missing) — nothing needed adding, this was already
   complete from earlier work.
5. **WhatsApp float / sticky mobile CTA vs mini-nav**: no overlap — mini-nav
   is pinned top, WhatsApp button and the Call/Book Free Demo bar are pinned
   bottom, confirmed via mobile screenshot.
6. **Mobile spot-check (375px)**: 3 pages checked (one SAP, one Technology,
   one Combo) after all changes — clean layout, zero console errors.

### Bug found and fixed along the way (not explicitly requested, but blocking Part 4.2)

The site nav's `position: sticky` was applied directly to `<nav class="site-nav">`,
whose only parent is `<header>` — and `<header>` has no height of its own
beyond the nav. A sticky element can only stay pinned within the bounds of
its containing block, so with header's height == nav's height there was zero
room for it to work: **the main course-page nav has never actually stayed
visible while scrolling, on any course page, throughout this whole
project** — it just scrolled away like a normal static element after ~76px.
Fixed by moving `position:sticky` to `header` itself (a direct child of
`body`, which has the full page height to stick within) and leaving `.site-nav`
as normal in-flow content inside it. Verified via bounding-rect checks before
and after (`top` went from `-1398px` at 1500px scroll to `0px`, correctly
pinned) and confirmed visually.

A second, smaller issue was fixed on the way to diagnosing that: `body` had
only `overflow-x: hidden` set (from the earlier mobile-responsiveness pass),
which per the CSS spec silently computes `overflow-y` to `auto` on that
element — turning `body` into its own scroll container instead of the
viewport. Moved the horizontal-scroll guard from `body` to `html` to avoid
that quirk sitewide.

---

## What's NOT done / flagged for tracking

- No course pages are currently missing — all 22 that the nav references
  exist and load. Nothing to track here.
- The Course Snapshot sticky-card scope limitation (see Part 4.2 above).
- The comparison page (`sap-btp-vs-sap-abap.html`) was intentionally left at
  its flat URL and without a mini-nav/careers section — it isn't a course
  page, and Part 4's checklist items are course-page-specific.
