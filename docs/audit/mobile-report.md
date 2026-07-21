# Mobile Responsiveness Pass — Report

Completed 2026-07-21 per `MOBILE_RESPONSIVE_PROMPT.txt`, against the live
local build (`node server.js`, 28 pages: homepage, `/blog/`, 3 legal pages,
23 course/combo pages).

**Confirmed the prompt's two-stylesheet premise in code first**: `public/index.html`
has its own ~1,900-line inline `<style>` (homepage only); `public/assets/css/site.css`
is the shared stylesheet for all 23 course pages + the 4 new utility pages.
Fixes were applied to the correct file for each issue — no fix assumed to
"just apply" to the other system.

## Part 1 — Audit findings

Programmatic overflow sweep: `document.documentElement.scrollWidth >
clientWidth` at all 6 required widths (320/375/390/414/768/1024px) across
all 28 pages = **168 checks**.

| ID | Page | Width | Element | Issue | Fix needed |
|---|---|---|---|---|---|
| M1 | Homepage (`/`) | 320px | `#applicationForm` → `<select name="program">` | Contact form's `<select>` had no explicit `width` rule. Its longest `<option>` text ("DevOps & Cloud Engineering" etc.) set an intrinsic min-content width the grid/flex layout couldn't shrink below, pushing the form (and page) 23px past the 320px viewport. | Add `width: 100%; min-width: 0;` to `input, select, textarea` in `index.html`'s inline stylesheet. |
| M2 | All course pages | 768px (mobile nav) | `.dropdown a` (SAP Courses submenu links, inside open hamburger menu) | Touch targets measured 41px tall — just under the 44px minimum. | Bumped to `min-height: 44px` with flex-centered padding, in `site.css`'s existing 768px breakpoint. |
| M3 | All course pages | 768px (mobile nav) | `.sticky-cta` (bottom bar) vs `.wa-float` (WhatsApp button) | The two fixed-position elements structurally overlapped by ~3px at rest — `.wa-float`'s `bottom: 74px` offset was set assuming a shorter sticky bar than its actual rendered height (76.7px). Also found `.to-top` (back-to-top button) had no offset at all and would sit fully underneath the sticky bar, unreachable. | Increased `.wa-float` and added `.to-top` to `bottom: 92px` in the same breakpoint, giving a real clearance margin instead of a near-exact (and wrong) calculation. |
| — | 5 combo pages using `.glance` (Combo Advantage banner) | all widths | `.glance`, `.glance-top`, `.glance-tools` | No issue found — passed the full 168-check sweep at every width on all 5 pages that use it. | None. |
| — | (all pages) | all widths | Everything else in the checklist (grids, salary table, footer grid, images, forms after M1 fix, nav toggle, spacing) | No overflow, no broken layout found. | None. |

**Note on `.glance-path` / `.glance-outcomes`**: the prompt's context section
described a "4-step roadmap" and arrow-connector inside this component. In the
actual code, those CSS classes exist in `site.css` but are never used by any
page's HTML — only the simpler `.glance-top` + `.glance-tools` banner (a
"Combo Advantage" summary) is live, on 5 combo pages. Verified this
directly rather than assuming the prompt's description was current. No
mobile risk from dead CSS.

**Small list, no pause needed** — proceeded directly to Part 2 per the
prompt's own instruction ("otherwise proceed directly to Part 2 for small,
obvious fixes").

## Part 2 — Fixes applied

- **`public/index.html`** (homepage-only inline stylesheet): `input, select, textarea { width: 100%; min-width: 0; }` — fixes M1.
- **`public/assets/css/site.css`** (shared, all course pages): added `.dropdown a { padding: .75rem .7rem; min-height: 44px; display: flex; align-items: center; }` and changed `.wa-float { bottom: 74px; }` → `92px` + added `.to-top { bottom: 92px; }`, all inside the existing `@media (max-width: 768px)` block — no new breakpoints introduced, per the prompt's preference.
- **`prefers-reduced-motion` for `.reveal`**: already fixed in an earlier session (Part 4 of the SEO/rebuild work) — confirmed still in place, not re-done.
- Re-checked after each fix at all 6 widths before moving to the next issue; no regressions introduced.

## Part 3 — Verification

- **Full 168-check overflow sweep re-run twice** (once right after the M1 fix, once after all fixes) — zero overflow, zero regressions, on every page at every width.
- **Touch interaction, not just visual**: hamburger menu opens/closes cleanly on the homepage (`#mobileMenuButton` → `.nav-links.open`, confirmed via click); course-page nav toggle confirmed working; the SAP Courses dropdown submenu on mobile doesn't rely on hover at all — `site.css`'s 768px breakpoint already sets it `position: static; display: block`, i.e. always expanded inline in the open mobile menu, which is more touch-reliable than a tap-toggle pattern.
- **Contact form at 375px**: screenshot-verified — First/Last Name correctly stack to single column, all fields full-width and tappable, `<select>` no longer overflows (M1 fix confirmed visually, not just by the scrollWidth check).
- **Curriculum images / logo**: confirmed no distortion or overflow at 320px (curriculum image renders at 282px inside its container with `height: auto`; logo at 125×46, correct aspect ratio).
- **Lighthouse — mobile emulation** (`--form-factor=mobile --screenEmulation.mobile`):

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Homepage | 51 | 91 | 100 | 100 |
| SAP BTP course page | 51 | 94 | 100 | 100 |

Accessibility/Best Practices/SEO hold steady from the desktop pass. Mobile
Performance (51) is meaningfully lower than desktop (79-87 from the earlier
pass) — this is Lighthouse's standard mobile preset applying heavy CPU/network
throttling (simulating a mid-tier phone on a slow connection), on top of this
already being a local dev server rather than a CDN. This is a lab-data
performance signal, not a broken-layout signal — the 168-check overflow sweep
and touch-interaction checks are what answer "does mobile actually work,"
and those are clean. Real-world mobile performance on production hosting
should be re-measured after deploy, same caveat as the desktop Lighthouse
numbers from the earlier SEO pass.

## Honesty check

Everything in the prompt's audit checklist was checked and is either
confirmed working or was found-and-fixed. Nothing was left "mostly working"
or partially resolved — the one real overflow bug (M1) and the two touch/
spacing issues (M2, M3) were fixed and re-verified clean across the full
168-combination sweep, twice. The mobile Lighthouse Performance score is
lower than desktop, which is expected throttling behavior, not a layout
defect — flagging it plainly rather than omitting it.
