export type InternshipCategory =
  | "sap"
  | "development"
  | "data"
  | "cloud"
  | "security";

export type InternshipStatus = "available" | "eligibility" | "limited";

export type InternshipTrack = {
  slug: string;
  name: string;
  category: InternshipCategory;
  iconTint: "violet" | "green" | "blue" | "amber";
  techTags: string[];
  description: string;
  eligibility: string;
  duration: string;
  mode: "Hybrid" | "Online" | "Offline";
  status: InternshipStatus;
  statusLabel: string;
  applyBy: string;
};

export const categoryLabels: Record<InternshipCategory, string> = {
  sap: "SAP",
  development: "Development",
  data: "Data",
  cloud: "Cloud",
  security: "Security",
};

export const statusLabels: Record<InternshipStatus, string> = {
  available: "Available for selected batches",
  eligibility: "Subject to eligibility",
  limited: "Limited Vacancies",
};

// This is the single source of truth for internship-track data — used by
// both the homepage internship section and the /internships hub page.
export const internshipTracks: InternshipTrack[] = [
  {
    slug: "frontend-developer-intern",
    name: "Frontend Developer Intern",
    category: "development",
    iconTint: "violet",
    techTags: ["React", "TypeScript", "Tailwind"],
    description:
      "Build responsive UIs and real-world features with modern frontend tools.",
    eligibility: "Final year / Graduate",
    duration: "8–12 weeks",
    mode: "Hybrid",
    status: "available",
    statusLabel: statusLabels.available,
    applyBy: "15 Aug 2026",
  },
  {
    slug: "backend-engineer-intern",
    name: "Backend Engineer Intern",
    category: "development",
    iconTint: "violet",
    techTags: ["Node.js", "Express", "PostgreSQL"],
    description: "Develop scalable APIs and backend services with clean architecture.",
    eligibility: "Final year / Graduate",
    duration: "8–12 weeks",
    mode: "Hybrid",
    status: "eligibility",
    statusLabel: statusLabels.eligibility,
    applyBy: "20 Aug 2026",
  },
  {
    slug: "data-analyst-intern",
    name: "Data Analyst Intern",
    category: "data",
    iconTint: "green",
    techTags: ["Python", "Pandas", "Power BI"],
    description: "Analyze datasets and build insightful dashboards and reports.",
    eligibility: "Final year / Graduate",
    duration: "8–12 weeks",
    mode: "Online",
    status: "available",
    statusLabel: statusLabels.available,
    applyBy: "18 Aug 2026",
  },
  {
    slug: "sap-functional-intern",
    name: "SAP Functional Intern",
    category: "sap",
    iconTint: "violet",
    techTags: ["SAP FICO", "MM", "SD"],
    description: "Work on SAP modules and real-world business process scenarios.",
    eligibility: "Final year / Graduate",
    duration: "8–12 weeks",
    mode: "Offline",
    status: "eligibility",
    statusLabel: statusLabels.eligibility,
    applyBy: "25 Aug 2026",
  },
  {
    slug: "cloud-ops-intern",
    name: "Cloud Ops Intern",
    category: "cloud",
    iconTint: "blue",
    techTags: ["AWS", "Docker", "Linux"],
    description: "Assist in cloud operations, automation and infrastructure management.",
    eligibility: "Final year / Graduate",
    duration: "8–12 weeks",
    mode: "Hybrid",
    status: "limited",
    statusLabel: statusLabels.limited,
    applyBy: "15 Aug 2026",
  },
  {
    slug: "security-testing-intern",
    name: "Security Testing Intern",
    category: "security",
    iconTint: "amber",
    techTags: ["OWASP", "Burp Suite", "Kali"],
    description: "Learn vulnerability assessment and security testing techniques.",
    eligibility: "Final year / Graduate",
    duration: "8–12 weeks",
    mode: "Online",
    status: "limited",
    statusLabel: statusLabels.limited,
    applyBy: "12 Aug 2026",
  },
];

export function getInternshipTracks() {
  return internshipTracks;
}
