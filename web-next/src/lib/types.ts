export type HeroFact = { label: string; value: string };
export type HeroAction = { text: string; href: string };
export type DemandCard = { icon: string; title: string; body: string };
export type CareerRow = { role: string; experience: string; salary: string };
export type CurriculumModule = {
  week: string;
  title: string;
  items: string[];
  open: boolean;
};
export type RelatedLink = { href: string; title: string; body: string };
export type FaqItem = { q: string; a: string };

export type CourseMeta = {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
};

export type Course = {
  category: "sap" | "technology" | "combo";
  slug: string;
  url: string;
  meta: CourseMeta;
  breadcrumbCategoryName: string;
  courseName: string;
  courseDescription: string;
  workload: string;
  eyebrow: string;
  h1: string;
  lead: string;
  badges: string[];
  heroFacts: HeroFact[];
  heroActions: HeroAction[];
  curriculumImage: string;
  curriculumImageAlt: string;
  intro: { heading: string; paragraphs: string[] };
  demand: { heading: string; desc: string; cards: DemandCard[] };
  careers: {
    heading: string;
    desc: string;
    rows: CareerRow[];
    footnote: string;
  } | null;
  curriculum: { heading: string; desc: string; modules: CurriculumModule[] };
  tools: { heading: string; tags: string[] };
  projects: { heading: string; items: string[] };
  eligibility: { heading: string; items: string[] };
  certPlacement: DemandCard[];
  related: RelatedLink[];
  enquire: { heading: string; whatsappHref: string };
  faq: FaqItem[];
};
