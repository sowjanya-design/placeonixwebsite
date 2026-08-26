import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import MegaNav from "@/components/layout/MegaNav";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import CallFloat from "@/components/ui/CallFloat";
import BackToTop from "@/components/ui/BackToTop";
import CourseFaq from "@/components/shared/CourseFaq";
import InternshipsBrowser from "@/components/internships/InternshipsBrowser";

export const metadata: Metadata = {
  title: "Internships | Placeonix",
  description:
    "Explore current internship opportunities at Placeonix — eligibility details, learning outcomes, batch availability and how to apply.",
  alternates: { canonical: "/internships" },
};

const EXPECT = [
  "Mentor guidance from industry professionals",
  "Practical assignments and real-world project exposure",
  "Interview preparation and career support",
  "Certificate on successful completion",
];

const WHO_CAN_APPLY = [
  "Final-year students pursuing any degree",
  "Recent graduates from relevant streams",
  "Learners with strong interest in the selected track and a willingness to learn",
];

const PROCESS_STEPS = [
  {
    title: "Explore tracks",
    body: "Browse internships by domain and skills",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Check eligibility",
    body: "Review criteria and batch availability",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Apply",
    body: "Submit your application online",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m3 3 18 9-18 9 4-9-4-9Z" />
      </svg>
    ),
  },
  {
    title: "Screening & onboarding",
    body: "Shortlisting, interview and onboarding",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
        <path d="M17 11a3 3 0 1 0 0-6" />
        <path d="M22 20c0-2.5-2-4-5-4.5" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "Is every internship paid?",
    a: "Not all internships are paid. Where a stipend is offered, it is clearly stated for that specific track and depends on current openings and documented partner requirements — an internship is not employment and is not guaranteed.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes — an internship or project-completion document is issued on successful completion, subject to attendance, deliverables and conduct requirements for that track.",
  },
  {
    q: "How often are openings updated?",
    a: "We review and update openings regularly based on partner requirements and batch availability. Statuses shown on this page reflect the latest review, but can change — always check back before applying.",
  },
];

export default function InternshipsPage() {
  return (
    <>
      <MegaNav />
      <main>
        <section className="section-tight">
          <div className="inner">
            <div className="internships-hero">
              <div>
                <div className="eyebrow">Internships</div>
                <h1>Explore Internships</h1>
                <p className="sec-desc">
                  Discover current internship opportunities, eligibility
                  details, learning outcomes and application guidance.
                </p>
                <div className="internships-hero-actions">
                  <Link href="/#contact" className="btn btn-primary btn-lg">
                    Apply Now →
                  </Link>
                  <a href="tel:+919949494020" className="btn btn-outline btn-lg">
                    Talk to Us
                  </a>
                </div>
              </div>
              <div className="internships-callout">
                <div className="ico">
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </div>
                <p>
                  Internship availability, stipend, project exposure and
                  full-time conversion depend on current openings and
                  documented partner requirements.
                </p>
              </div>
            </div>

            <div className="internships-layout">
              <div>
                <InternshipsBrowser />
              </div>

              <div className="expect-panel">
                <h3>
                  <span className="ico">
                    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m12 2 2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17l-5.8 3 1.1-6.5-4.8-4.6 6.6-.9L12 2Z" />
                    </svg>
                  </span>
                  What to expect
                </h3>
                {EXPECT.map((e) => (
                  <div className="expect-row" key={e}>
                    <span className="dot" />
                    <span>{e}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="intern-bottom-grid">
              <div className="intern-bottom-panel">
                <h3>
                  <span className="ico">
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" />
                      <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                    </svg>
                  </span>
                  Who can apply?
                </h3>
                <ul className="who-check-list">
                  {WHO_CAN_APPLY.map((w) => (
                    <li key={w}>
                      <span className="tick">✓</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="intern-bottom-panel">
                <h3>
                  <span className="ico">
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  How the process works
                </h3>
                <div className="process-flow">
                  {PROCESS_STEPS.map((s, i) => (
                    <Fragment key={s.title}>
                      <div className="process-step">
                        <div className="ico">{s.icon}</div>
                        <h4>{s.title}</h4>
                        <p>{s.body}</p>
                      </div>
                      {i < PROCESS_STEPS.length - 1 && (
                        <div className="process-arrow">→</div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>

              <div className="intern-bottom-panel">
                <h3>
                  <span className="ico">
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 2-3 4" />
                      <path d="M12 17h.01" />
                    </svg>
                  </span>
                  FAQs
                </h3>
                <CourseFaq items={FAQ} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat message="Hi Placeonix, I'd like to know more about internships." />
      <CallFloat />
      <BackToTop />
    </>
  );
}
