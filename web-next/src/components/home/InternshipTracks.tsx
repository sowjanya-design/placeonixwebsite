import Link from "next/link";
import { internshipTracks } from "@/lib/internships";
import InternIcon from "@/components/shared/InternIcon";

type CopyBlock = {
  eyebrow: string;
  heading: string;
  desc: string;
  checklist: string[];
};

export default function InternshipTracks({ copy }: { copy: CopyBlock }) {
  return (
    <section className="int-bg" id="internship">
      <div className="inner">
        <div className="int-grid">
          <div className="reveal">
            <div className="sec-eyebrow">{copy.eyebrow}</div>
            <h2>{copy.heading}</h2>
            <p className="sec-desc">{copy.desc}</p>
            <ul className="check-list">
              {copy.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: "1rem" }}>
              Specific benefits such as live project exposure, stipend, or
              full-time conversion are offered only when documented and
              currently available.
            </p>
            <Link href="/internships" className="btn btn-primary btn-lg" style={{ marginTop: "1.6rem" }}>
              Explore Internships →
            </Link>
          </div>

          <div className="reveal">
            <div className="intern-panel">
              <div className="intern-panel-head">
                <div className="intern-panel-head-left">
                  <div className="ico">
                    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <h3>Internship Tracks</h3>
                    <p>Explore tracks, details, eligibility and current availability.</p>
                  </div>
                </div>
                <Link href="/internships" className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.82rem" }}>
                  View all tracks →
                </Link>
              </div>

              {internshipTracks.map((t) => (
                <div className="intern-row" key={t.slug}>
                  <div className={`intern-badge intern-badge-${t.iconTint}`}>
                    <InternIcon category={t.category} />
                  </div>
                  <div className="intern-row-main">
                    <h4>{t.name}</h4>
                    <div className="sub">{t.techTags.join(" · ")}</div>
                  </div>
                  <div className="intern-row-status">
                    <span className={`status-pill status-${t.status}`}>
                      {t.statusLabel}
                    </span>
                    <span className="intern-apply-by">Apply by {t.applyBy}</span>
                  </div>
                </div>
              ))}

              <div className="intern-footer-note">
                Availability changes frequently. Please check the internship
                page for the latest updates.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
