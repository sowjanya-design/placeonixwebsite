import Link from 'next/link';
import Image from 'next/image';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="footer-grid">
          <div>
            <Image src="/assets/img/logo-white.png" className="foot-logo" alt="Placeonix" width={180} height={66} />
            <p className="muted">SAP &amp; IT training and placement institute in Hyderabad. Training · Placement · Future.</p>
            <p className="muted" style={{ marginTop: '.8rem' }}>Kapil Kavuri Hub, No. 144, 9th Floor, 152, Financial District, Hyderabad, Telangana-500032</p>
            <p className="muted" style={{ marginTop: '.5rem' }}>
              <a href="tel:+919949494020">+91 99494 94020</a> · <a href="mailto:support@placeonix.com">support@placeonix.com</a>
            </p>
          </div>
          <div>
            <h4>SAP Courses</h4>
            <ul>
              <li><Link href="/courses/sap/sap-btp">SAP BTP</Link></li>
              <li><Link href="/courses/sap/sap-cpi">SAP CPI</Link></li>
              <li><Link href="/courses/sap/sap-abap">SAP ABAP</Link></li>
              <li><Link href="/courses/sap/sap-fico">SAP FICO</Link></li>
              <li><Link href="/courses/sap/sap-ui5-fiori">SAP UI5 / Fiori</Link></li>
              <li><Link href="/courses/combo/sap-full-stack-program">SAP Full Stack Program</Link></li>
              <li><Link href="/courses/combo/sap-integration-expert">SAP Integration Expert</Link></li>
              <li><Link href="/courses/combo/sap-functional-analyst">SAP Functional Analyst</Link></li>
              <li><Link href="/courses/sap-btp-vs-sap-abap">SAP BTP vs ABAP</Link></li>
            </ul>
          </div>
          <div>
            <h4>Other Courses</h4>
            <ul>
              <li><Link href="/courses/technology/data-science">Data Science</Link></li>
              <li><Link href="/courses/technology/generative-ai">Generative AI</Link></li>
              <li><Link href="/courses/technology/cloud-computing">Cloud Computing</Link></li>
              <li><Link href="/courses/technology/cyber-security">Cyber Security</Link></li>
              <li><Link href="/courses/technology/full-stack">Full Stack</Link></li>
              <li><Link href="/courses/technology/java-backend">Java Backend</Link></li>
              <li><Link href="/courses/technology/ui-ux-design">UI/UX Design</Link></li>
              <li><Link href="/courses/combo/ai-data-science">AI + Data Science</Link></li>
              <li><Link href="/courses/combo/cloud-dev-bundle">Cloud Dev Bundle</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/#features">Why Placeonix</Link></li>
              <li><Link href="/#internship">Placements</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Placeonix. All rights reserved.</span>
          <span>
            <Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/terms">Terms</Link> · <Link href="/refund-policy">Refund Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
