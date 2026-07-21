# Curriculum-at-a-Glance — ready-to-use content for the 7 pages not yet built

These 7 programs are listed on the homepage but don't have a `public/courses/*.html`
page yet (confirmed by the Part 1 inventory: Java Backend Development, UI/UX
Design, and the 5 combo packages). When Part 2 of the implementation prompt
builds these pages using the existing template, use this researched curriculum
data — for the `.glance` visual block AND for the detailed `#curriculum`
accordion, so both stay consistent with each other.

Add each entry to the `DATA` object in `scripts/inject-glance.js` (keyed by the
new file's name) and re-run the script, or paste the HTML pattern from an
existing page (e.g. `sap-btp-training.html`) manually.

---

## java-backend-training.html — Java Backend Development
- Duration: 10–12 Weeks
- Tools: `Java`, `Spring Boot`, `REST APIs`, `SQL / Hibernate`, `Microservices`
- Phases:
  1. Core Java & OOP Foundations
  2. Spring Boot & REST API Development
  3. Databases — SQL, JPA & Hibernate
  4. Microservices, Testing & Capstone Project
- Outcomes: `Production-grade Java APIs`, `Spring Boot expertise`, `Deployed backend capstone`

## ui-ux-design-training.html — UI/UX Design
- Duration: 8–10 Weeks
- Tools: `Figma`, `User Research`, `Wireframing`, `Prototyping`, `Design Systems`
- Phases:
  1. Design Fundamentals & User Research
  2. Wireframing & Information Architecture
  3. Figma Prototyping & Visual Design Systems
  4. Usability Testing, Portfolio & Capstone
- Outcomes: `Portfolio-ready case studies`, `End-to-end design process`, `Figma proficiency`

## sap-integration-expert.html — SAP Integration Expert (Combo: SAP CPI + SAP BTP)
- Duration: 10–12 Weeks (combined)
- Tools: `Integration Suite`, `BTP Cockpit`, `HANA Cloud`, `API Management`, `Adapters`
- Phases:
  1. SAP BTP Foundations & Account Model
  2. Integration Suite — Adapters & Message Mapping
  3. APIs, Security & Error Handling
  4. HANA Cloud, Monitoring & Combined Capstone
- Outcomes: `End-to-end SAP integration`, `Cloud platform + integration skills`, `Two certifications' worth of coverage`
- Note: state clearly this bundles the SAP CPI and SAP BTP curricula; link to both individual course pages. Do not state a rupee saving without a confirmed base price for each course — mark `<!-- TODO: confirm combo pricing -->` if not provided.

## ai-data-science-combo.html — AI + Data Science (Combo: Generative AI + Data Science)
- Duration: 12–14 Weeks (combined)
- Tools: `Python`, `Pandas / Scikit-learn`, `LLMs`, `Prompt Engineering`, `RAG`
- Phases:
  1. Python, Statistics & Data Wrangling
  2. Machine Learning with Scikit-learn
  3. LLM Fundamentals & Prompt Engineering
  4. RAG, AI Agents & Combined Capstone
- Outcomes: `Classical ML + GenAI skillset`, `Real dataset + LLM projects`, `Broadest AI career coverage on offer`
- Note: bundles the Data Science and Generative AI curricula; link to both individual pages. Mark pricing TODO if not confirmed.

## cloud-dev-bundle.html — Cloud Dev Bundle (Combo: DevOps & Cloud Engineering + Full Stack Web Development)
- Duration: 14–16 Weeks (combined)
- Tools: `AWS / Azure`, `Docker / Kubernetes`, `React`, `Node.js`, `CI/CD`
- Phases:
  1. Cloud & Networking Fundamentals (AWS/Azure)
  2. Docker, Kubernetes & CI/CD
  3. Full-Stack Development — React, Node.js, Databases
  4. Deployment, DevOps Practices & Combined Capstone
- Outcomes: `Build AND ship applications end-to-end`, `Cloud + full-stack hybrid profile`, `DevOps-minded developer`
- Note: bundles Cloud Computing and Full Stack curricula; link to both individual pages. Mark pricing TODO if not confirmed.

## sap-functional-analyst.html — SAP Functional Analyst (Combo: SAP FICO + SAP MM + SAP SD)
- Duration: 14–16 Weeks (combined)
- Tools: `Finance (FICO)`, `Procurement (MM)`, `Sales & Distribution (SD)`, `Controlling`, `S/4HANA`
- Phases:
  1. Finance — GL, AP/AR & Asset Accounting (FICO)
  2. Procurement & Inventory Management (MM)
  3. Order-to-Cash & Pricing (SD)
  4. Cross-Module Integration, Controlling & Capstone
- Outcomes: `Cross-functional SAP consultant profile`, `3 core modules in one program`, `Broadest functional-consultant coverage`
- Note: bundles FICO, MM and SD curricula; link to all three individual pages. Mark pricing TODO if not confirmed.

## sap-full-stack-program.html — SAP Full Stack Program (Flagship, 5 modules: SAP BTP + SAP CAPM + SAP UI5/Fiori + SAP CPI)
- Duration: 16–20 Weeks (combined, flagship)
- Tools: `BTP Cockpit`, `CAP / CDS`, `SAPUI5 / Fiori`, `Integration Suite`, `HANA Cloud`
- Phases:
  1. SAP BTP Foundations & HANA Cloud
  2. CAP / CDS — Modern SAP Cloud Application Development
  3. SAPUI5 & Fiori — Enterprise UI Development
  4. Integration Suite, End-to-End Project & Capstone
- Outcomes: `Full SAP Cloud + Modern Dev Stack`, `Most comprehensive program offered`, `Placement Support included`
- Note: this is the flagship "Highest Demand — 5 Modules" card on the homepage; bundles BTP, CAPM, UI5/Fiori and CPI. Link to all four individual course pages clearly so a visitor can see exactly what's included.

---

### How to wire these in once the pages exist
1. Build each `.html` page using an existing course page (e.g. `sap-btp-training.html`) as the structural template — same head tags, hero, industry-demand section, salary table, and `#curriculum` accordion — filled in with the phases above expanded into real module detail (bullet points per phase, matching the depth of the existing 15 pages).
2. Add a matching entry to `DATA` in `scripts/inject-glance.js` using the duration/tools/steps/outcomes above, then run `node scripts/inject-glance.js` again — it will inject the `.glance` visual automatically and skip pages that already have one.
3. Update `public/sitemap.xml` and the homepage program card links for these 7 programs to point at the new pages.
