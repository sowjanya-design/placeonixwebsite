import type { Metadata } from "next";
import MegaNav from "@/components/layout/MegaNav";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import BackToTop from "@/components/ui/BackToTop";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Placeonix",
  description:
    "Articles on SAP career paths, data science, generative AI and placement preparation — written by the Placeonix training team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <MegaNav />
      <main>
        <section className="section">
          <div className="inner" style={{ maxWidth: 820 }}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-current="page">Blog</li>
              </ol>
            </nav>
            <div className="sec-hdr" style={{ marginTop: "1.4rem" }}>
              <span className="eyebrow">Placeonix Blog</span>
              <h1>SAP &amp; IT career insights</h1>
              <p className="sec-desc">
                Articles on SAP career paths, data science, generative AI and
                placement preparation — written by the Placeonix training team.
              </p>
            </div>
            <div className="placeholder" style={{ marginTop: "2rem" }}>
              <strong>First posts are on the way.</strong> This section is set
              up and ready — once the team publishes real articles, they&apos;ll
              appear here. We&apos;d rather launch with an honest &quot;coming
              soon&quot; than backfill this page with placeholder posts.
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat message="Hi Placeonix, I have a question." />
      <BackToTop />
    </>
  );
}
