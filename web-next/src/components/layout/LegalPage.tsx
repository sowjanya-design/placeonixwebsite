import MegaNav from "@/components/layout/MegaNav";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import CallFloat from "@/components/ui/CallFloat";
import BackToTop from "@/components/ui/BackToTop";
import Link from "next/link";

export type LegalSection = { heading: string; body: React.ReactNode };

export default function LegalPage({
  title,
  effectiveDate,
  disclaimer,
  sections,
}: {
  title: string;
  effectiveDate?: string;
  disclaimer?: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <MegaNav />
      <main>
        <section className="section">
          <div className="inner prose legal-doc" style={{ maxWidth: 820 }}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-current="page">{title}</li>
              </ol>
            </nav>
            <div className="sec-hdr" style={{ marginTop: "1.4rem" }}>
              <span className="eyebrow">Legal</span>
              <h1>{title}</h1>
              {effectiveDate && (
                <p className="legal-doc-meta">{effectiveDate}</p>
              )}
            </div>
            {disclaimer && (
              <div className="placeholder" style={{ marginBottom: "2rem" }}>
                <strong>Draft — pending legal review.</strong> {disclaimer}
              </div>
            )}
            {sections.map((s, i) => (
              <div key={i} className="legal-doc-section">
                <h2>{s.heading}</h2>
                {s.body}
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat message="Hi Placeonix, I have a question." />
      <CallFloat />
      <BackToTop />
    </>
  );
}
