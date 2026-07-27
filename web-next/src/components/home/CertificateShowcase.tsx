import Image from "next/image";

const FEATURES = [
  {
    title: "Certificate Number",
    body: "A unique, sequential certificate ID assigned to every graduating student.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
        <path d="M10 17h4M10 13h1" />
      </svg>
    ),
  },
  {
    title: "Verified Seal",
    body: "An official Placeonix verification seal confirming program completion.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m9 12 2 2 4-4" />
        <path d="M12 2a5 5 0 0 0 5 3 5 5 0 0 1 2.5 4.33A5 5 0 0 1 22 14a5 5 0 0 1-2.5 4.33A5 5 0 0 1 17 22a5 5 0 0 1-5-3 5 5 0 0 1-5 3 5 5 0 0 1-2.5-3.67A5 5 0 0 1 2 14a5 5 0 0 1 2.5-4.67A5 5 0 0 1 7 5a5 5 0 0 0 5-3Z" />
      </svg>
    ),
  },
  {
    title: "Issue Date",
    body: "The exact date your certificate was issued upon successful completion.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Authorised Signature",
    body: "Signed off by an authorised Placeonix representative.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 17s2-1 4-1 3 2 5 2 3-2 5-2 4 1 4 1" />
        <path d="m9 13 6-9 3 2-6 9-4 1 1-3Z" />
      </svg>
    ),
  },
];

export default function CertificateShowcase() {
  return (
    <section className="cert-showcase bg-soft" id="certificate">
      <div className="inner cert-showcase-grid">
        <div>
          <div className="eyebrow reveal">Certification</div>
          <h2 className="reveal">The Certificate You&apos;ll Earn</h2>
          <p className="sec-desc reveal">
            A verifiable certificate of completion, awarded at the end of
            every program — with a unique certificate number tied to your
            course and batch.
          </p>
          <div className="cert-showcase-features reveal">
            {FEATURES.map((f) => (
              <div className="cert-feature" key={f.title}>
                <div className="ico">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <div className="cert-showcase-frame">
            <Image
              src="/assets/img/certificates/sap-fico-sample-certificate.jpg"
              alt="Sample Placeonix certificate of completion"
              width={1447}
              height={1087}
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </div>
          <p className="cert-showcase-caption">
            Sample certificate — shown for illustration. Your certificate is
            issued with your own name, program and a unique certificate
            number once you complete the course.
          </p>
        </div>
      </div>
    </section>
  );
}
