import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCoursesByCategory, categoryLabels } from "@/lib/courses";
import MegaNav from "@/components/layout/MegaNav";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import CallFloat from "@/components/ui/CallFloat";
import BackToTop from "@/components/ui/BackToTop";
import ProgramCard from "@/components/shared/ProgramCard";
import type { Course } from "@/lib/types";

export const dynamicParams = false;

const CATEGORIES: Course["category"][] = ["sap", "technology", "combo"];

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

const COPY: Record<
  Course["category"],
  { title: string; description: string; h1: string; lead: string; wa: string }
> = {
  sap: {
    title:
      "All SAP Courses in Hyderabad | SAP BTP, CPI, ABAP, FICO & More – Placeonix",
    description:
      "Browse all 10 SAP training programs at Placeonix, Hyderabad — SAP BTP, CPI, CAPM, RAP, UI5/Fiori, ABAP on S/4HANA, FICO, MM, SD and BASIS. Instructor-led, hands-on, with placement assistance.",
    h1: "All SAP Courses",
    lead: "10 instructor-led SAP programs — cloud, functional and core modules for every SAP career path. Hands-on training on a real SAP environment with placement assistance.",
    wa: "your SAP training programs",
  },
  technology: {
    title:
      "All Technology Courses in Hyderabad | Data Science, Cloud, Full Stack & More – Placeonix",
    description:
      "Browse all 6 technology training programs at Placeonix, Hyderabad — Data Science, DevOps & Cloud, Full Stack, Java Backend, Cybersecurity and UI/UX Design. Instructor-led with placement assistance.",
    h1: "All Technology Courses",
    lead: "6 instructor-led technology programs — Data Science, Cloud/DevOps, Full Stack, Java Backend, Cybersecurity and UI/UX Design. Hands-on training with placement assistance.",
    wa: "your technology training programs",
  },
  combo: {
    title:
      "Combo Programs in Hyderabad | Bundled SAP & Tech Training – Placeonix",
    description:
      "Browse all 5 combo training packages at Placeonix, Hyderabad — SAP Integration Expert, AI + Data Science, Cloud Dev Bundle, SAP Functional Analyst and the SAP Full Stack Program. Save more, learn more.",
    h1: "Combo Programs",
    lead: "Bundled SAP and technology training packages — save more, learn more. Combine complementary skills into one structured program with placement assistance.",
    wa: "your combo training programs",
  },
};

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Course["category"])) return {};
  const c = COPY[category as Course["category"]];
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `/courses/${category}` },
  };
}

export default async function CategoryHubPage({ params }: Props) {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Course["category"])) notFound();
  const cat = category as Course["category"];
  const courses = getCoursesByCategory(cat);
  const c = COPY[cat];

  return (
    <>
      <MegaNav />
      <main style={{ background: "#f8fafc" }}>
        <section className="category-banner">
          <Link
            href="/courses"
            className="category-banner-close"
            aria-label="Close"
          >
            ✕
          </Link>
          <div className="category-banner-pill">
            {cat === "sap"
              ? "SAP COURSES - 10 COURSES"
              : cat === "technology"
                ? "TECHNOLOGY - 6 COURSES"
                : "COMBO - 5 PROGRAMS"}
          </div>
          <h1>{c.h1}</h1>
          <p>{c.description}</p>
        </section>

        <section
          className="section"
          style={{
            paddingTop: "2.5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <div
            className="inner"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            <div
              className={`prog-grid prog-grid-cat${cat === "combo" ? " prog-grid-cat-combo" : ""}`}
            >
              {courses.map((course) => (
                <ProgramCard course={course} key={course.slug} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat message={`Hi Placeonix, I'm interested in ${c.wa}.`} />
      <CallFloat />
      <BackToTop />
    </>
  );
}
