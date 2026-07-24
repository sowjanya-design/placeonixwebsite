import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Placeonix",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      disclaimer="This page uses standard section headings as a starting structure. It has not been reviewed by counsel and should not be treated as Placeonix's binding privacy policy until the team fills in the real practices below and has it reviewed."
      sections={[
        {
          heading: "1. Information we collect",
          body: (
            <>
              <em>[TODO — team to confirm]</em> Typically: name, email, phone
              number and program interest submitted via the enquiry/contact
              form; usage data such as pages visited, collected automatically.
            </>
          ),
        },
        {
          heading: "2. How we use your information",
          body: (
            <>
              <em>[TODO — team to confirm]</em> Typically: to respond to
              enquiries, provide counselling calls, send programme updates, and
              improve the website.
            </>
          ),
        },
        {
          heading: "3. Sharing of information",
          body: (
            <>
              <em>[TODO — team to confirm]</em> State clearly whether data is
              shared with hiring/placement partners, and under what
              circumstances.
            </>
          ),
        },
        {
          heading: "4. Data retention",
          body: (
            <>
              <em>[TODO — team to confirm]</em> How long enquiry and student
              data is kept.
            </>
          ),
        },
        {
          heading: "5. Your rights",
          body: (
            <>
              <em>[TODO — team to confirm]</em> How a visitor can request access
              to, correction of, or deletion of their data.
            </>
          ),
        },
        {
          heading: "6. Contact",
          body: (
            <>
              Questions about this policy:{" "}
              <a href="mailto:support@placeonix.com">support@placeonix.com</a>{" "}
              or +91 99494 94020.
            </>
          ),
        },
      ]}
    />
  );
}
