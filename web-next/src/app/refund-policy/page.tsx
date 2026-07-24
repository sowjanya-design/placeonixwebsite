import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | Placeonix",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      disclaimer="This page uses standard section headings as a starting structure. It has not been reviewed by counsel or finance and should not be treated as Placeonix's binding refund policy until the team fills in real terms below and has them reviewed. Refund terms are financially sensitive — we deliberately did not invent numbers."
      sections={[
        {
          heading: "1. Cancellation before batch start",
          body: (
            <>
              <em>[TODO — team to confirm]</em> Refund eligibility and any
              processing fee for cancelling before a batch begins.
            </>
          ),
        },
        {
          heading: "2. Withdrawal after batch start",
          body: (
            <>
              <em>[TODO — team to confirm]</em> Whether partial refunds are
              available after classes begin, and how they&apos;re calculated
              (e.g. pro-rated by sessions attended).
            </>
          ),
        },
        {
          heading: "3. Batch not meeting minimum enrolment",
          body: (
            <>
              <em>[TODO — team to confirm]</em> What happens to fees already
              paid if a batch is cancelled or rescheduled by Placeonix.
            </>
          ),
        },
        {
          heading: "4. Combo packages",
          body: (
            <>
              Combo package pricing itself is still pending confirmation from
              the Placeonix team (see individual combo course pages) — refund
              terms for combos should be finalized alongside that pricing, not
              before.
            </>
          ),
        },
        {
          heading: "5. How to request a refund",
          body: (
            <>
              Email{" "}
              <a href="mailto:support@placeonix.com">support@placeonix.com</a>{" "}
              or call +91 99494 94020 / +91 91217 59191 with your enrolment
              details. <em>[TODO — team to confirm]</em> processing timeline.
            </>
          ),
        },
      ]}
    />
  );
}
