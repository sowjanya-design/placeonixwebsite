# SEO & Performance Checklist — status

Completed 2026-07-21 against the live local build (`node server.js`,
24 pages). Each item is marked **Done** (implemented and verified in this
session), **Baseline delivered** (a real one-time deliverable was produced,
but the item is inherently a recurring service, not a one-shot task), or
**Needs external access** (requires an account/API key/subscription this
agent doesn't have and shouldn't be asked to sign up for on your behalf).

## Website Technical SEO

| Item | Status | Detail |
|---|---|---|
| Technical SEO audit | **Done** | Full audit run this session: canonical tags (24/24 correct, self-referencing, unique), meta robots (`index, follow` everywhere, zero accidental `noindex`), duplicate title check (0 collisions across 24 pages), orphan-page check (0 orphans), sitemap-vs-reality diff (exact match, 24/24), robots.txt review (not blocking anything it shouldn't). |
| Fix crawl and indexing issues | **Done** | No issues found requiring a fix — canonicals, robots meta, sitemap and robots.txt were already correct. Confirmed via the audit above rather than assumed. |
| Internal linking optimization | **Done** | Found a real gap: 8 pages (5 combo packages, Java Backend, UI/UX Design, the new SAP BTP vs ABAP comparison) had only 1–2 inbound internal links vs 22–23 for every other page, because they weren't in the shared footer link lists. Expanded the footer's "SAP Courses" and "Other Courses" columns (present on all 23 course pages) to include them. Re-verified: every page now has 22–23 inbound internal links, zero orphans. |
| Site health monitoring | **Baseline delivered** | This is a recurring service (uptime checks, crawl-error alerts over time), not a one-time fix. What exists now: `robots.txt` + `sitemap.xml` are correctly configured for Search Console to consume. **Recommend**: verify the domain in Google Search Console and (optionally) an uptime monitor like UptimeRobot — both need your account access, not code changes. |
| Broken link fixes | **Done** | Every internal `href`/`src` across all 24 pages checked programmatically (53 unique URLs). Found and fixed one real broken image (`sap-mm-training.jpg` was missing, regenerated). Zero broken links remain except the pre-scoped-out `/blog/`, `/privacy-policy.html`, `/terms.html`, `/refund-policy.html` (flagged separately, not part of this build). |
| Keyword rank tracking | **Needs external access** | Requires Google Search Console (free, needs your Google account + domain verification) or a paid tool (Ahrefs/SEMrush/etc.). Can't be done from inside the codebase — there's no rank data to track until the domain is live and indexed. Once you have Search Console access, I can help interpret the data. |
| Technical SEO reports | **Done** | This document + `docs/audit/FINAL-REPORT.md` (from the Part 5 regression) together constitute the technical SEO report deliverable for this engagement. |
| Competitor SEO benchmarking | **Baseline delivered** | See `docs/audit/COMPETITOR-BENCHMARK.md` — built from the keyword research PDF you supplied (competitor list, what their winning pages do, gaps to exploit) plus a page-by-page check of where Placeonix now stands against that pattern. Live competitor tracking over time is a recurring service requiring a paid tool. |
| Topical authority architecture | **Done** | The site already had a course-page template + nav dropdown grouping all 10 SAP courses. This session completed the picture: every course/combo page now links to every other relevant course via nav + expanded footer, forming a proper hub-and-spoke structure (homepage → category → course, and course ↔ course laterally via Related Courses + footer). The new SAP BTP vs ABAP comparison page adds a genuine "informational" content type feeding that cluster, per the keyword research's own recommendation. |

## Website Performance Optimization

| Item | Status | Detail |
|---|---|---|
| Improve Core Web Vitals | **Done** | Measured via Lighthouse (lab data, local dev server — see caveat below). CLS is excellent (0.013, well under the 0.1 "good" threshold) and TBT is 0ms on every page tested. Found and fixed a real issue: the curriculum images (added in Part 3, placed near the top of each page in Part 4) were marked `loading="lazy"` — lazy-loading an element that sits in/near the initial viewport is a known anti-pattern that delays LCP. Changed to `loading="eager" fetchpriority="high"` across all 22 course pages. |
| Website speed optimization | **Done** | Curriculum images: all 22 now under 200KB (re-compressed the last 8 that were marginally over). `logo.jpeg` optimized: 75KB (1600×586, way oversized for its ~46-160px display use) → 10.6KB (480×176, still retina-sharp). Google Fonts stylesheet switched from render-blocking to the standard non-blocking pattern (`media="print" onload`) with a `<noscript>` fallback, across all 28 pages. Homepage Lighthouse Performance moved 79→81 on repeated local runs (see LCP caveat below — local lab data is noisy). |
| Mobile optimization | **Done** | Viewport meta present on all pages. Found and fixed a real bug: homepage footer nav overflowed ~60px at 375px width (missing `flex-wrap`). Re-checked all 24 pages at 375px — zero horizontal overflow now. |
| Mobile-first optimization | **Done** | Responsive breakpoints already exist site-wide (`@media max-width: 900px/768px/560px` on the shared stylesheet, `@media max-width: 960px/600px` on the homepage). Verified functional via the mobile overflow sweep above and the existing hamburger nav / stacked grids. |
| Performance monitoring | **Baseline delivered** | Recurring service, not a one-time task — needs an ongoing tool (Search Console's Core Web Vitals report is free and uses real-user field data, which is more meaningful than one-off lab runs like this session's). This session's Lighthouse numbers are the starting baseline. |
| Monthly performance audits | **Baseline delivered** | This session's Lighthouse run (below) is the first data point. A monthly cadence needs to be a scheduled process (either your team re-running Lighthouse, or a CI job) — not something a single chat session can promise to keep doing going forward. |

### Lighthouse baseline (lab data, local dev server)

| Page | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| Homepage | 79 | 91 | 100 | 100 | — | — |
| SAP BTP course page | 84 | 94 | 100 | 100 | 3.6s | 0.013 |
| SAP Full Stack combo | 87 | 94 | 100 | 100 | — | — |

**Caveat on these numbers**: this is lab data from Lighthouse hitting a local
Node dev server on a shared machine, not a production CDN (Vercel, per
`vercel.json`). Real-world performance on Vercel's edge network will likely
score noticeably better than this local baseline — treat these as a
worst-case floor, not the true production number. For a trustworthy read,
run Lighthouse (or check Search Console's Core Web Vitals report) against
the live deployed URL after launch.
