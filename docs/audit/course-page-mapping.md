# Course page mapping — Part 1 inventory

Verified against `public/index.html` (21 `.prog-card` entries in `#programs`) and the files
actually present in `public/courses/`. "Modal" = the `courseSyllabus` JS object in
`index.html`, which has real week-by-week data for **all 21** programs already, including
the 7 marked Missing below — so Part 2 has real source content to build from, not filler.

## SAP individual courses (10) — all exist

| Program card (`data-course`) | Real page | Status |
|---|---|---|
| SAP BTP | `/courses/sap-btp-training.html` | Existing → wired to real link |
| SAP CPI | `/courses/sap-cpi-training.html` | Existing → wired to real link |
| SAP CAPM | `/courses/sap-capm-training.html` | Existing → wired to real link |
| SAP RAP | `/courses/sap-rap-training.html` | Existing → wired to real link |
| SAP UI5 / Fiori | `/courses/sap-ui5-fiori-training.html` | Existing → wired to real link |
| SAP ABAP on S/4HANA | `/courses/sap-abap-training.html` | Existing → wired to real link |
| SAP FICO | `/courses/sap-fico-training.html` | Existing → wired to real link |
| SAP MM | `/courses/sap-mm-training.html` | Existing → wired to real link |
| SAP SD | `/courses/sap-sd-training.html` | Existing → wired to real link |
| SAP BASIS | `/courses/sap-basis-training.html` | Existing → wired to real link |

## Technology courses (6)

| Program card | Real page | Status |
|---|---|---|
| Data Science & Analytics | `/courses/data-science-training.html` | Existing → wired. **Bug found:** card had no `data-course` attribute, so it did nothing on click before this fix (dead card). |
| DevOps & Cloud Engineering | `/courses/cloud-computing-training.html` | Existing → wired. Content confirmed to match (AWS/Azure/Docker/Kubernetes/CI-CD). Same dead-card bug as above — no `data-course` attribute existed. |
| Full Stack Web Development | `/courses/full-stack-training.html` | Existing → wired to real link |
| Java Backend Development | none | **Missing** — has real modal syllabus data (16 weeks). Build in Part 2. |
| Cybersecurity Fundamentals | `/courses/cyber-security-training.html` | Existing → wired to real link |
| UI/UX Design | none | **Missing** — has real modal syllabus data (16 weeks). Build in Part 2. |

## Combo packages (5)

| Program card | Real page | Status |
|---|---|---|
| SAP Integration Expert (CPI + BTP) | none | **Missing** — has real modal syllabus data (12 weeks). Build in Part 2. |
| AI + Data Science | none | **Missing** — has real modal syllabus data (24 weeks). Build in Part 2. |
| Cloud Dev Bundle (DevOps + Full Stack) | none | **Missing** — has real modal syllabus data (24 weeks). Build in Part 2. |
| SAP Functional Analyst (FICO + MM + SD) | none | **Missing** — has real modal syllabus data (24 weeks). Build in Part 2. |
| SAP Full Stack Program (BTP + CAPM + UI5/Fiori + CPI) | none | **Missing** — has real modal syllabus data (24 weeks). This is the `.sap-highlight` hero card. Build in Part 2. |

## Not a homepage card, but exists

`generative-ai-training.html` exists and is already linked from every course page's nav
dropdown ("GenAI") and footer, but there's no corresponding `.prog-card` on the homepage
`#programs` grid. Out of scope for Part 1/2 (not one of the 21), flagging for awareness —
worth a card in a later pass since it's a top-3 SEO keyword target.

## Totals

- 21 program cards confirmed on homepage (matches "21 programs" claim in the audit doc).
- 14 already have real pages and are now wired as direct links.
- 7 do not have real pages yet (Java Backend, UI/UX Design, 5 combos) — left on the modal
  per the implementation prompt, to be built in Part 2.
