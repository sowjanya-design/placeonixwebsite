# Bugs & Errors Audit

Completed 2026-07-21 against the live local build (`node server.js`, 28 pages).

## What was checked

1. Browser console errors/warnings — every page, real headless Chrome via the browse skill.
2. Failed network requests (0-byte responses) — every page.
3. Broken internal links/assets — every `href`/`src` across all 28 pages, actually requested and status-checked (not just grepped).
4. HTML structural integrity — duplicate `id` attributes, unbalanced `<div>` tags (stack-based, not just count-based), invalid JSON-LD (actually parsed, not just regex-matched).
5. Accessibility basics — missing `alt` text on images, exactly-one-`<h1>`-per-page.
6. Functional interaction testing — mobile hamburger nav, FAQ/curriculum accordions, contact form validation, syllabus-related code paths, WhatsApp button, back-to-top button, sticky CTA overlap.
7. Debug leftovers — `console.log(`, `lorem ipsum`, stray TODOs outside the known/expected ones.

## Found and fixed

| # | Severity | Issue | Fix |
|---|---|---|---|
| 1 | Low (invalid HTML, no visible symptom) | `index.html` had 4 orphaned `</div>` closing tags with no matching opener — 3 leftover right after the hero section (residue from an earlier design iteration that was rebuilt but not fully cleaned up), 1 leftover at the end of the Programs grid. Browsers silently drop unmatched closing tags, so this never caused a visible bug, but it's invalid HTML and confusing for anyone editing the file. | Removed all 4. Verified with a stack-based parity checker (open count now exactly equals close count) and confirmed the homepage still renders all 21 program cards with zero console errors. |
| 2 | Low (UX gap, not a crash) | Homepage had no "back to top" button. Every one of the 23 course pages has one (`#toTop` / `.to-top`), but the homepage — the longest, most scroll-heavy page on the site — didn't get one when the WhatsApp button was added earlier. | Added the same `.to-top` button, CSS, and scroll-show/click-to-top JS to the homepage, matching the course-page pattern. Verified: shows after 600px scroll, scrolls smoothly to top on click, no overlap with the WhatsApp button (12px clear gap), zero console errors. |

## Found, not fixed — flagging for your decision

| # | Finding | Why I didn't just delete it |
|---|---|---|
| 3 | **~51KB of dead code in `index.html`**: the entire `courseSyllabus` JS object (all 21 courses' full week-by-week syllabus data, embedded inline) plus the syllabus-modal HTML/CSS/click-handler JS (59 references total) are now **unreachable**. Every one of the 21 program cards on the homepage is now a real `<a href>` link to its own course page (finished across earlier sessions) — none of them carry the `data-course` attribute anymore that used to trigger the modal. The modal can never open; nothing in the DOM can reach it. | This is a real, meaningful chunk of unnecessary page weight shipped to every visitor (roughly 50KB+ of inline JS parsed and held in memory for a feature with zero remaining entry point) — worth removing. But deleting ~50KB of embedded content is a bigger edit than a bug fix, and there's a legitimate reason someone might want to keep it around (e.g. re-purposing the syllabus data for a future "quick view" feature, or as a content source for building more pages later). Flagging rather than unilaterally deleting a large block of content. **Say the word and I'll remove the dead modal markup + JS + the `courseSyllabus` object in one clean pass** — everything needed to rebuild it from scratch already lives in the 21 real course pages it was superseded by, so nothing is actually lost by deleting it. |

## Confirmed clean (checked, nothing found)

- **Console errors/warnings**: zero, across all 28 pages.
- **Failed network requests**: zero, across all 28 pages.
- **Broken internal links/assets**: zero (53 unique internal URLs checked across 28 pages).
- **HTTP status**: all 28 pages return 200.
- **Duplicate HTML `id` attributes**: none.
- **Invalid JSON-LD**: none — every page's structured data actually parses.
- **Missing image `alt` text**: none.
- **Multiple/missing `<h1>`**: none — every page has exactly one.
- **Debug leftovers** (`console.log(`, `lorem ipsum`, stray TODOs): none beyond the intentional, already-documented `<!-- TODO: confirm combo pricing -->` and `[TODO — team to confirm]` markers on the 5 combo pages and 3 legal pages.
- **Mobile hamburger nav**: opens and closes cleanly, no layout shift, no errors (homepage and course-page versions both tested).
- **Contact form validation**: still correctly blocks on the first empty required field (`fullName`).
- **Sticky CTA bar vs. WhatsApp/back-to-top overlap**: no overlap (fixed in an earlier mobile-responsiveness pass, reconfirmed clean here).

## Honesty check

One real structural HTML bug (orphaned tags) and one real UX inconsistency
(missing back-to-top on homepage) were found and fixed, both verified with
before/after checks. One larger finding (dead modal code) was surfaced
rather than silently deleted, since removing ~50KB of embedded content is a
judgment call, not a bug fix. Everything else checked came back clean —
not because the audit was shallow, but because this codebase has already
been through several rounds of scrutiny in earlier sessions (SEO rebuild,
mobile responsiveness pass, contrast fixes).
