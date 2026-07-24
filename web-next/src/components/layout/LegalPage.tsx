import MegaNav from "@/components/layout/MegaNav";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import BackToTop from "@/components/ui/BackToTop";
import Link from "next/link";

export type LegalSection = { heading: string; body: React.ReactNode };

export default function LegalPage({
  title,
  disclaimer,
  sections,
}: {
  title: string;
  disclaimer: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <MegaNav />
      <main>
        <section className="section">
          <div className="inner prose" style={{ maxWidth: 820 }}>
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
            </div>
            <div className="placeholder" style={{ marginBottom: "2rem" }}>
              <strong>Draft — pending legal review.</strong> {disclaimer}
            </div>
            {sections.map((s, i) => (
              <div key={i}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat message="Hi Placeonix, I have a question." />
      <BackToTop />
    </>
  );
}
