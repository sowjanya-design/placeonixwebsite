# Prompts used

Reference material and the exact prompts used to build this site. Kept for
history/traceability — not part of the running application (nothing in
`public/`, `server.js`, or `api/` references these files).

| File | What it is |
|---|---|
| `IMPLEMENTATION_PROMPT_5_PARTS.txt` | The 5-part rebuild prompt that took the site from a single homepage to 22 real, SEO-optimized course/combo pages (wiring, missing pages, curriculum visuals, SEO/engagement polish, full regression). |
| `MOBILE_RESPONSIVE_PROMPT.txt` | The mobile-responsiveness audit-and-fix prompt (320px–1024px sweep across all pages). |
| `LOGO_FIX_PROMPT.txt` | The prompt that fixed the footer logo rendering as a white box (wrong asset for a dark background) by introducing transparent-background logo variants. |
| `Placeonix_SEO_Keywords.pdf` | Competitor and keyword research used to drive titles, meta descriptions, and content priorities across the site. |
| `Placeonix_Website_Audit.docx` | The original site audit that identified the credibility bugs (stat contradictions, missing pages, SEO gaps) fixed early in this project. |
| `course-curriculum-image-prompts.md` | The per-course AI image-generation prompts used to create `public/assets/img/curriculum/*.jpg`. |
| `curriculum-glance-pending-pages.md` | Working notes for the 7 course/combo pages that didn't exist yet at the time it was written — all 7 have since been built; kept as a historical record of that step. |
