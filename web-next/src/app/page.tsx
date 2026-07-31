import type { Metadata } from "next";
import Link from "next/link";
import homeData from "@/data/home.json";
import SideNav from "@/components/home/SideNav";
import SiteFooter from "@/components/layout/SiteFooter";
import CourseFinder from "@/components/home/CourseFinder";
import TrustStats from "@/components/home/TrustStats";
import InternshipTracks from "@/components/home/InternshipTracks";
import CertificateShowcase from "@/components/home/CertificateShowcase";
import ApplicationForm from "@/components/home/ApplicationForm";
import WaNudgeFloat from "@/components/home/WaNudgeFloat";
import BackToTop from "@/components/ui/BackToTop";
import "./home.css";

export const metadata: Metadata = {
  title: "SAP Training in Hyderabad with Placement | Placeonix",
  description:
    "Placeonix is an industry-focused SAP & IT training and placement institute in Hyderabad. Industry-focused programs in SAP, Cloud, Data Science and Full Stack — built to grow in-demand skills and launch your IT career with real placement support.",
  alternates: { canonical: "/" },
};

const TRUST_STATS = [
  { num: "2,000+", label: "Learners" },
  { num: "100+", label: "Corporate Clients" },
  { num: "5+", label: "Years of Industry Experience" },
];

const partnerLogos = [
  { name: "Microsoft", file: "microsoft" },
  { name: "Amazon", file: "amazon" },
  { name: "Google", file: "google" },
  { name: "TCS", file: "tcs" },
  { name: "Infosys", file: "infosys" },
  { name: "Accenture", file: "accenture" },
  { name: "Cognizant", file: "cognizant" },
  { name: "IBM", file: "ibm" },
  { name: "Capgemini", file: "capgemini" },
  { name: "Wipro", file: "wipro" },
];

export default function HomePage() {
  const {
    hero,
    features,
    visCards,
    processSteps,
    internship,
    testimonials,
    faq,
    contact,
  } = homeData;

  return (
    <>
      <div id="home-scope">
        <SideNav />

        <section className="clean-launch">
          <div className="clean-hero">
            <div className="clean-left">
              <div className="clean-eyebrow">
                <span></span> {hero.eyebrowTag}
              </div>
              <h1 dangerouslySetInnerHTML={{ __html: hero.h1 }} />
              <p
                className="clean-subhead"
                style={{
                  fontWeight: 700,
                  color: "#1f2937",
                  fontSize: "1.08rem",
                  marginBottom: ".7rem",
                  lineHeight: 1.5,
                }}
              >
                {hero.subhead}
              </p>
              <p>{hero.body}</p>
              <div className="clean-actions">
                <a href="#contact" className="clean-btn-primary">
                  Enroll Now!
                </a>
                <Link href="/courses" className="clean-btn-secondary">
                  Explore Programs
                </Link>
              </div>
              <CourseFinder />
            </div>
            <div className="clean-stats-card">
              <div className="clean-stat-grid">
                {hero.stats.map((s) => (
                  <div className="clean-stat" key={s.label}>
                    <div className="clean-stat-icon">{s.icon}</div>
                    <div>
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="clean-assist">
                <div>
                  <strong>{hero.assist.title}</strong>
                  <span>{hero.assist.body}</span>
                </div>
                <a href={hero.assist.ctaHref}>{hero.assist.ctaText}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="feat-bg" id="features">
          <div className="inner">
            <div className="feat-grid reveal">
              {features.map((f) => (
                <div className="feat-item" key={f.title}>
                  <div className="feat-ico">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="prog-bg" id="programs">
          <div className="inner">
            <div className="sec-hdr reveal">
              <div className="sec-eyebrow">Training Programs</div>
              <h2>Flagship Premium Programs</h2>
              <p className="sec-desc">
                SAP, technology programs and combo packages — pick your track
                and see the full curriculum.
              </p>
            </div>
            <div className="prog-grid category-grid">
              <Link className="prog-card reveal" href="/courses/sap">
                <span className="prog-tag pt-slate">Very High Demand</span>
                <h3>SAP Courses</h3>
                <p>
                  10 SAP programs — BTP, CPI, FICO, ABAP, MM, SD, BASIS and
                  more. Cloud, functional and core modules for every SAP career
                  path.
                </p>
                <div className="prog-meta">
                  <span>⏱ 6 weeks – 3 months</span>
                  <span>🏢 10 Programs</span>
                </div>
              </Link>
              <Link className="prog-card reveal" href="/courses/technology">
                <span className="prog-tag pt-slate">Technology</span>
                <h3>Technology Courses</h3>
                <p>
                  6 technology programs — Data Science, DevOps &amp; Cloud, Full
                  Stack, Java Backend, Cybersecurity and UI/UX Design.
                </p>
                <div className="prog-meta">
                  <span>⏱ 2–3 months</span>
                  <span>💻 6 Programs</span>
                </div>
              </Link>
              <Link
                className="prog-card combo-card combo-featured reveal"
                href="/courses/combo"
              >
                <span className="prog-tag">Combo Package</span>
                <h3>
                  <span className="combo-icon">🎁</span>Combo Programs
                </h3>
                <p>
                  5 bundled packages — save more, learn more. Combine
                  complementary SAP and technology skills into one program.
                </p>
                <div className="prog-meta">
                  <span>⏱ 2–6 months</span>
                  <span>🎁 5 Programs</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="proc-bg">
          <div className="inner">
            <div className="sec-hdr reveal" style={{ textAlign: "center" }}>
              <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
                How It Works
              </div>
              <h2>Enrollment to Employment</h2>
              <p className="sec-desc" style={{ margin: "0 auto" }}>
                A clear, structured path from your first class to your offer
                letter.
              </p>
            </div>
            <div className="proc-grid reveal">
              {processSteps.map((s) => (
                <div className="proc-step" key={s.n}>
                  <div className="proc-n">{s.n}</div>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vis-bg">
          <div className="inner">
            <div className="journey-header reveal">
              <span className="journey-tag">Why Choose Placeonix</span>
              <h2>Your Journey Starts Here</h2>
              <p>
                B.Tech / B.E. / BCA / MCA passout? We bridge the gap between
                your degree and your first IT job.
              </p>
            </div>
            <div className="vis-grid reveal">
              {visCards.map((c, i) => (
                <div className="vis-card" key={c.title}>
                  <div className="journey-img-wrap">
                    <img
                      src={
                        i === 0
                          ? "/assets/img/journey-1.jpg"
                          : i === 1
                            ? "/assets/img/journey-2.png"
                            : "/assets/img/journey-3.jpg"
                      }
                      alt={c.title}
                      className="journey-img"
                    />
                  </div>
                  <div className="vis-content">
                    <div className="vis-pill">{c.pill}</div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InternshipTracks
          copy={{
            eyebrow: internship.eyebrow,
            heading: internship.heading,
            desc: internship.desc,
            checklist: internship.checklist,
          }}
        />

        <CertificateShowcase />

        <section className="partners-bg" aria-label="Experienced Trainers">
          <div className="inner">
            <h2
              style={{
                textAlign: "center",
                color: "#1e293b",
                marginBottom: "1.2rem",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              Experienced Trainers From Top Companies
            </h2>
            <p
              className="partners-note"
              style={{
                maxWidth: "800px",
                margin: "0 auto 2.5rem",
                textAlign: "center",
                lineHeight: 1.6,
                fontSize: "1.15rem",
              }}
            >
              Gain real-world skills from our trainers, who bring extensive
              experience from top multinational corporations. Their expertise
              ensures you receive industry-relevant training.
            </p>
            <div className="partners-track-wrap">
              <div className="partners-track">
                {[...partnerLogos, ...partnerLogos].map((p, i) => (
                  <div
                    className="partner-tile"
                    key={i}
                    aria-hidden={i >= partnerLogos.length}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/assets/img/company-logos/${p.file}.png`}
                      alt={p.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="testi-bg" id="testimonials">
          <div className="inner">
            <div className="sec-hdr reveal" style={{ textAlign: "center" }}>
              <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
                Alumni Stories
              </div>
              <h2>Heard From Our Graduates</h2>
              <p className="sec-desc" style={{ margin: "0 auto" }}>
                Real results from real students.
              </p>
            </div>
            <div className="testi-grid">
              {testimonials.map((t) => (
                <div className="testi-card reveal" key={t.name}>
                  <div className="testi-stars">★★★★★</div>
                  <blockquote>{t.quote}</blockquote>
                  <div className="testi-author">
                    <div className={t.avatarClass}>{t.initials}</div>
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustStats stats={TRUST_STATS} />

        <section className="contact-bg" id="contact">
          <div className="inner contact-grid">
            <div>
              <div className="sec-eyebrow reveal">Admissions</div>
              <h2 className="reveal">{contact.heading}</h2>
              <p className="sec-desc reveal">{contact.desc}</p>
              <div className="c-items reveal">
                <div className="c-item">
                  <div className="c-ico">📍</div>
                  <a href={contact.addressHref} target="_blank" rel="noopener">
                    {contact.address}
                  </a>
                </div>
                <div className="c-item">
                  <div className="c-ico">📞</div>
                  <span>
                    <a href="tel:+919949494020">+91 99494 94020</a>,{" "}
                    <a href="tel:+919121759191">+91 91217 59191</a>
                  </span>
                </div>
                <div className="c-item">
                  <div className="c-ico">✉️</div>
                  <a href="mailto:support@placeonix.com">
                    support@placeonix.com
                  </a>
                </div>
                <div className="c-item">
                  <div className="c-ico">🕐</div>
                  <span>{contact.hours}</span>
                </div>
              </div>
              <div className="contact-map reveal">
                <iframe
                  src="https://www.google.com/maps?q=Kapil+Kavuri+Hub,+No.+144,+9th+Floor,+152,+Financial+District,+Hyderabad,+Telangana+500032&output=embed"
                  width="100%"
                  height={260}
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Placeonix location — Kapil Kavuri Hub, Financial District, Hyderabad"
                />
              </div>
            </div>
            <ApplicationForm />
          </div>
        </section>

        <section className="faq-bg" id="faq">
          <div className="inner">
            <div className="sec-hdr reveal" style={{ textAlign: "center" }}>
              <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
                FAQs
              </div>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              {faq.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
        <WaNudgeFloat />
        <BackToTop />
      </div>
    </>
  );
}
