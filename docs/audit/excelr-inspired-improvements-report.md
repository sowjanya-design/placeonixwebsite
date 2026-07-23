# ExcelR-inspired improvements + live-check fixes — report

Covers both `prompts-used/EXCELR_INSPIRED_IMPROVEMENTS_PROMPT.txt` and
`prompts-used/LIVE_CHECK_UPDATE_PROMPT.txt`, executed together. All homepage
changes only (course pages weren't in scope for either prompt).

---

## LIVE_CHECK_UPDATE_PROMPT.txt

### Homepage nav "bug" — superseded by a later direct instruction, not re-broken

This prompt was written when the homepage nav showed only a hamburger at
desktop widths and asked for it to show the full horizontal mega-menu bar,
matching course pages. **Between that check being written and this prompt
being run, you separately asked directly in chat to convert the homepage nav
into a sidebar-drawer system permanently** (removing Why Us/Blog/Apply Now
from the top bar, moving everything into a slide-in sidebar) — which was
built and verified in that same conversation. That direct, more recent
instruction intentionally makes the homepage's nav behave differently from
course pages' horizontal mega-menu by design, not by drift. Not reverting
that — flagging it so it doesn't look like an ignored bug report.

### Reveal-animation flash on fast scroll — fixed

`.reveal`'s `IntersectionObserver` used `rootMargin: '0px 0px -40px 0px'`,
which only marks an element visible once it's already most of the way into
the viewport — on a fast scroll the 0.3s fade-in couldn't keep up, producing
a blank flash. Changed to `rootMargin: '0px 0px 200px 0px'` (triggers while
the element is still 200px below the viewport, so it's already faded in by
the time it's actually scrolled to) and shortened the transition from `.3s`
to `.18s`. `prefers-reduced-motion` was already handled correctly (skips the
animation entirely) — confirmed still working.

Note: grepped course pages for any `.reveal` usage — there is none; course
pages don't use this scroll-reveal system at all, so there was nothing to
fix there for this specific issue.

### Drift check (site.css vs index.html inline styles)

- Footer (`.site-footer`, `.footer-grid`, `.footer-bottom`) — confirmed
  byte-identical between the two stylesheets, no drift.
- Tools Covered section — present on all 22 course/combo pages (0 missing).
- Curriculum-at-a-glance visual — present on all 22 course/combo pages
  (0 missing).
- No other drift found in the areas checked.

---

## EXCELR_INSPIRED_IMPROVEMENTS_PROMPT.txt

### Part 1 — Hero course-finder widget ✅

Added directly under the existing Enroll Now / Explore Programs buttons: a
category dropdown (SAP, Data Science, Generative AI, Full Stack, DevOps/
Cloud, Java Backend, Cybersecurity, UI/UX, "Not sure yet") + "Find My
Course →" button, styled with the same glass-card/indigo-gradient tokens as
the rest of the hero (no visually bolted-on widget).

Routing:
- Single-course categories → navigates straight to that course's page.
- "SAP" → reveals an inline second dropdown (all 10 SAP courses) + a "Go →"
  button, since SAP needs a second-level pick.
- "Not sure yet" → smooth-scrolls to the enquiry form (`#contact`).

Verified: SAP sub-picker reveal, direct-category navigation (tested via Java
Backend → correct URL), "Not sure yet" scroll landing on the actual form, and
full-width mobile stacking at 375px.

### Part 2 — Hiring-partner logo carousel — built as placeholder, no fake logos

No confirmed hiring-partner names or logo usage permission exist anywhere in
the codebase (checked). Built the actual carousel *mechanism* — CSS
`@keyframes` marquee, duplicated tile set for a seamless loop, pauses on
hover/focus, respects `prefers-reduced-motion` — using honest dashed-border
"Partner Logo" placeholder tiles instead of any real or generic brand names.

**`<!-- TODO: real partner logos + usage permission -->` is in the code
(right above the section).** Send over the actual list of companies
Placeonix has a confirmed placement relationship with (plus permission to
display their logo) and this becomes a one-line swap.

### Part 3 — Testimonial verification signals

Checked all 3 existing testimonials (Rahul K., Priya S., Venkat M.) — no
real LinkedIn profile URLs exist in the codebase or were provided. Per the
prompt's explicit instruction, **no LinkedIn badge was added to any of
them** (a badge with no real link behind it would be worse than no badge).
Added an HTML comment above each: `<!-- TODO: confirm LinkedIn URL +
permission for [Name] before adding a verification badge -->`. Kept the
existing initials-avatars (RK / PS / VM) as-is — already the honest choice
over stock photos, per the prompt.

### Part 4 — Real Google Maps embed + no invented rating

Added a real `<iframe>` Google Maps embed (no API key needed) for the actual
address — Kapil Kavuri Hub, No. 144, 9th Floor, 152, Financial District,
Hyderabad — right under the contact-details list on the Contact section.
Verified the embed loads and shows the correct area (WaveRock SEZ / Apollo
Hospitals / Nanakramguda visible as real nearby landmarks).

No Google Business Profile rating exists or was provided, so **no star
rating is shown anywhere** — `<!-- TODO: confirm Google Business Profile +
rating -->` is in the code above the map. Only add a rating badge once a
real, live profile rating can be confirmed.

### Part 5 — Proactive WhatsApp nudge ✅

Added a dismissible chat-bubble tooltip next to the existing `.wa-float`
button: "👋 Questions about a course? Chat with us on WhatsApp." Appears once
after 5.5s using a `setTimeout`, tracked via `sessionStorage` (not
`localStorage`, per the spec) so it shows once per browser session and never
reappears once dismissed — verified by dismissing, reloading the page, and
confirming it stayed hidden. Transition respects `prefers-reduced-motion`.
Mobile-safe (full-width bubble below 480px, no overflow).

### Part 6 — Course card info density ✅ (no changes needed)

Scripted a check across all 21 homepage program cards — every single one
already shows a visible duration indicator (⏱ + weeks/months) via the
existing `.prog-meta` pattern. Nothing was missing, so nothing was added.

---

## Check-gate results

- [x] Hero course-finder widget works, routes correctly, matches existing design.
- [x] Logo carousel shows only placeholder tiles — zero fabricated logos — TODO left for real data.
- [x] No testimonial has a LinkedIn badge without a real, confirmed URL.
- [x] Map embed shows the real address; no invented star rating anywhere.
- [x] WhatsApp nudge appears once per session, is dismissible, doesn't reappear after close.
- [x] All of the above verified at 375px — no overflow on the finder widget, partner marquee, or map.
- [x] Homepage + one course page (`sap-btp.html`) smoke-tested — zero console errors, nothing else regressed.

## Outstanding TODOs (only Placeonix can supply)

1. Real Instagram and LinkedIn profile URLs (icons already in the header, currently `href="#"`).
2. Real hiring-partner company names + confirmed placement relationship + logo usage permission.
3. Real, confirmed LinkedIn profile URLs (+ permission) for Rahul K., Priya S., and Venkat M. if verification badges are wanted on their testimonials.
4. Confirmation of a live Google Business Profile + its actual rating/review count, if a rating badge is wanted near the map.
