import type { Metadata } from 'next';
import LegalPage from '@/components/layout/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service | Placeonix',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      disclaimer="This page uses standard section headings as a starting structure. It has not been reviewed by counsel and should not be treated as Placeonix's binding terms until the team fills in the real terms below and has them reviewed."
      sections={[
        { heading: '1. Use of this website', body: <><em>[TODO — team to confirm]</em> Acceptable use of the site, intellectual property in course materials, and restrictions on copying/redistributing content.</> },
        { heading: '2. Enrolment and batches', body: <><em>[TODO — team to confirm]</em> How enrolment is confirmed, batch scheduling, minimum/maximum batch size (site states &quot;Max 30&quot; sitewide), and what happens if a batch doesn&apos;t meet minimum enrolment.</> },
        { heading: '3. Fees and payment', body: <><em>[TODO — team to confirm]</em> Fee structure, payment schedule, and accepted payment methods. See also the <a href="/refund-policy">Refund Policy</a>.</> },
        { heading: '4. Placement assistance', body: <>Placeonix provides placement assistance (resume building, mock interviews, referrals and career guidance) as described on individual course pages. <em>[TODO — team to confirm]</em> the precise scope of this assistance and that it does not constitute a guarantee of employment.</> },
        { heading: '5. Conduct', body: <><em>[TODO — team to confirm]</em> Expected classroom/online conduct and grounds for suspension from a program.</> },
        { heading: '6. Limitation of liability', body: <em>[TODO — team to confirm, with counsel]</em> },
        { heading: '7. Contact', body: <>Questions about these terms: <a href="mailto:support@placeonix.com">support@placeonix.com</a> or +91 99494 94020.</> },
      ]}
    />
  );
}
