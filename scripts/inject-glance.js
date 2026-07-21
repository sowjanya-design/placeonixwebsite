// Injects a "Curriculum at a Glance" visual into each course page, right
// before the Introduction section. Content is derived from each page's own
// real hero badges + curriculum module titles (extracted from the files
// themselves), condensed to 4 phases + 3 outcome chips, so it never
// contradicts the detailed accordion further down the same page.
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "public", "courses");

// slug -> { duration, tools[], steps[4], outcomes[3] }
const DATA = {
  "sap-btp-training.html": {
    duration: "6–8 Weeks",
    tools: ["BTP Cockpit", "HANA Cloud", "Node.js / CDS", "Fiori / UI5", "Integration Suite"],
    steps: [
      "BTP Foundations & Account Model",
      "HANA Cloud & CAP (Node.js/CDS)",
      "SAP Fiori, UI5 & Integration Suite",
      "Security, DevOps & Capstone",
    ],
    outcomes: ["Cloud-native SAP development", "API & system integration", "Certification-ready"],
  },
  "sap-cpi-training.html": {
    duration: "6–8 Weeks",
    tools: ["Integration Suite", "Adapters", "Message Mapping", "Groovy Scripting", "API Management"],
    steps: [
      "Integration Suite Foundations",
      "Adapters, Connectivity & Mapping",
      "Security & Error Handling",
      "APIs, Monitoring & Capstone",
    ],
    outcomes: ["Enterprise integration flows", "API design & security", "Production monitoring"],
  },
  "sap-capm-training.html": {
    duration: "6–8 Weeks",
    tools: ["CAP", "CDS", "OData", "Node.js", "HANA Cloud"],
    steps: [
      "CAP & CDS Foundations",
      "Service Definitions & OData",
      "Business Logic & HANA Persistence",
      "Security, UI Integration & Capstone",
    ],
    outcomes: ["Modern SAP cloud apps", "OData service design", "Full-stack CAP delivery"],
  },
  "sap-rap-training.html": {
    duration: "6–8 Weeks",
    tools: ["ABAP Cloud", "RAP", "CDS Views", "OData v4", "Fiori Elements"],
    steps: [
      "RAP & ABAP Cloud Foundations",
      "CDS View Modeling",
      "Managed & Unmanaged Business Objects",
      "Fiori Elements, Extensibility & Capstone",
    ],
    outcomes: ["Clean-core ABAP development", "OData v4 services", "Fiori Elements apps"],
  },
  "sap-ui5-fiori-training.html": {
    duration: "6–8 Weeks",
    tools: ["SAPUI5", "MVC", "OData", "Fiori Elements", "Fiori Launchpad"],
    steps: [
      "SAPUI5 & MVC Foundations",
      "Controls, Data Binding & Fragments",
      "OData Integration & Fiori Elements",
      "Launchpad, Tooling & Capstone",
    ],
    outcomes: ["Enterprise Fiori apps", "OData-driven UIs", "Launchpad deployment"],
  },
  "sap-abap-training.html": {
    duration: "6–8 Weeks",
    tools: ["ABAP", "OOP ABAP", "CDS Views", "AMDP", "RAP"],
    steps: [
      "ABAP Fundamentals",
      "Object-Oriented ABAP",
      "Core Data Services & AMDP",
      "Intro to RAP, RICEF & Tooling",
    ],
    outcomes: ["S/4HANA ABAP development", "Modern CDS modeling", "RICEF development"],
  },
  "sap-fico-training.html": {
    duration: "6–8 Weeks",
    tools: ["General Ledger", "AP / AR", "Asset Accounting", "Controlling", "CO-PA"],
    steps: [
      "General Ledger & New GL",
      "Accounts Payable & Receivable",
      "Asset Accounting & Bank Integration",
      "Controlling, CO-PA & Month-End Close",
    ],
    outcomes: ["End-to-end finance processes", "Controlling & cost analysis", "Consultant-ready skills"],
  },
  "sap-mm-training.html": {
    duration: "6–8 Weeks",
    tools: ["Procurement", "Purchase Orders", "Inventory Mgmt", "MRP", "Pricing"],
    steps: [
      "Procurement Cycle & Org Structure",
      "Purchase Requisitions & Orders",
      "Inventory Management & MRP",
      "Pricing, Invoice Verification & S/4HANA MM",
    ],
    outcomes: ["Supply-chain process expertise", "MRP & vendor evaluation", "S/4HANA MM ready"],
  },
  "sap-sd-training.html": {
    duration: "6–8 Weeks",
    tools: ["Sales Orders", "Pricing Procedures", "Delivery Processing", "Billing", "Credit Mgmt"],
    steps: [
      "SD Org Structure & Master Data",
      "Sales Order Processing & Pricing",
      "Availability Check & Delivery",
      "Billing, Credit Mgmt & S/4HANA SD",
    ],
    outcomes: ["Order-to-cash mastery", "Pricing & billing config", "S/4HANA SD ready"],
  },
  "sap-basis-training.html": {
    duration: "6–8 Weeks",
    tools: ["System Landscape", "TMS", "User Admin", "Performance Tuning", "HANA Admin"],
    steps: [
      "Installation & Landscape Setup",
      "Client & User Administration",
      "Transport Mgmt & Monitoring",
      "Patching, Upgrades & HANA Admin",
    ],
    outcomes: ["System administration", "Landscape & transport mgmt", "HANA admin basics"],
  },
  "data-science-training.html": {
    duration: "8–10 Weeks",
    tools: ["Python", "Pandas / NumPy", "SQL", "Scikit-learn", "Power BI / Tableau"],
    steps: [
      "Python & Statistics Foundations",
      "Data Wrangling with Pandas & SQL",
      "Machine Learning with Scikit-learn",
      "Model Tuning, Real Datasets & Capstone",
    ],
    outcomes: ["End-to-end ML workflows", "Real dataset projects", "Portfolio-ready capstone"],
  },
  "cloud-computing-training.html": {
    duration: "7–9 Weeks",
    tools: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    steps: [
      "Cloud & Networking Fundamentals",
      "AWS Core Services & Azure Fundamentals",
      "Docker & Kubernetes",
      "CI/CD, IaC, Monitoring & Capstone",
    ],
    outcomes: ["Multi-cloud fundamentals", "Containers & orchestration", "CI/CD pipeline delivery"],
  },
  "full-stack-training.html": {
    duration: "9–12 Weeks",
    tools: ["HTML/CSS/JS", "React", "Node.js / Express", "MongoDB / SQL", "Git & Deployment"],
    steps: [
      "HTML, CSS & JavaScript Foundations",
      "React for the Front End",
      "Node.js, Express & Databases",
      "Auth, Deployment & Capstone Project",
    ],
    outcomes: ["Full MERN-stack delivery", "Deployed capstone project", "Job-ready portfolio"],
  },
  "cyber-security-training.html": {
    duration: "7–9 Weeks",
    tools: ["Networking Security", "Kali Linux", "OWASP", "Pen Testing", "SOC Basics"],
    steps: [
      "Networking & Security Fundamentals",
      "Ethical Hacking & Web App Security",
      "Penetration Testing & Vulnerability Assessment",
      "SOC Basics, Certification Prep & Capstone",
    ],
    outcomes: ["Hands-on lab experience", "Pen-testing methodology", "Certification-ready"],
  },
  "generative-ai-training.html": {
    duration: "6–8 Weeks",
    tools: ["LLMs", "Prompt Engineering", "RAG", "LangChain-style Agents", "Fine-Tuning"],
    steps: [
      "LLM Fundamentals & Transformers",
      "Prompt Engineering & RAG",
      "Fine-Tuning & LLM-Powered Apps",
      "AI Agents, Responsible AI & Capstone",
    ],
    outcomes: ["Real LLM API projects", "RAG application design", "Responsible AI practice"],
  },
};

let updated = 0;
for (const [file, d] of Object.entries(DATA)) {
  const fp = path.join(DIR, file);
  if (!fs.existsSync(fp)) { console.log("SKIP (not found):", file); continue; }
  let html = fs.readFileSync(fp, "utf8");

  if (html.includes('class="glance"')) { console.log("SKIP (already has glance):", file); continue; }

  const titleMatch = html.match(/<h1>([\s\S]*?)<\/h1>/);
  const rawTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : file;
  const shortTitle = rawTitle.replace(/ in Hyderabad$/i, "");

  const tools = d.tools.map(t => `<span class="chip">${t}</span>`).join("\n            ");
  const steps = d.steps.map((s, i) => `<div class="glance-step"><span class="n">Phase ${i + 1}</span><span class="t">${s}</span></div>`).join("\n            ");
  const outcomes = d.outcomes.map(o => `<span class="out">${o}</span>`).join("\n            ");

  const block = `
<!-- CURRICULUM AT A GLANCE -->
<section class="section" style="padding-top:0;">
  <div class="inner">
    <div class="glance">
      <div class="glance-top">
        <div>
          <div class="glance-kicker">Curriculum at a Glance</div>
          <div class="glance-title">${shortTitle}</div>
        </div>
        <span class="glance-pill">⏱ ${d.duration}</span>
      </div>
      <div class="glance-tools">
            ${tools}
      </div>
      <div class="glance-path">
            ${steps}
      </div>
      <div class="glance-outcomes">
            ${outcomes}
      </div>
    </div>
  </div>
</section>

<!-- INTRODUCTION -->`;

  html = html.replace("\n<!-- INTRODUCTION -->", block);
  fs.writeFileSync(fp, html, "utf8");
  console.log("Injected:", file);
  updated++;
}
console.log(`\nDone. ${updated} pages updated.`);
