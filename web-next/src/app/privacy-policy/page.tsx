import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Placeonix",
  description:
    "How Placeonix collects, uses, stores, shares and protects personal information across enquiries, enrolment, training, placement assistance and the website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="Effective Date: 27 July 2026 · Last Updated: 27 July 2026"
      sections={[
        {
          heading: "Introduction",
          body: (
            <>
              <p>
                Placeonix respects your privacy and is committed to handling
                personal information responsibly, transparently, and
                securely.
              </p>
              <p>
                This Privacy Policy explains how Placeonix collects, uses,
                stores, shares, and protects personal information when you:
              </p>
              <ul>
                <li>Visit the Placeonix website</li>
                <li>Submit an enquiry or contact form</li>
                <li>Register for a demo class</li>
                <li>Apply for or enrol in a course</li>
                <li>Make a payment</li>
                <li>Attend online or classroom training</li>
                <li>
                  Participate in assessments, internships, workshops, or
                  projects
                </li>
                <li>Request placement assistance</li>
                <li>Communicate with Placeonix</li>
                <li>Use any other Placeonix service</li>
              </ul>
              <p>
                By voluntarily providing your personal information or using
                our services, you acknowledge that your information may be
                handled as described in this Privacy Policy.
              </p>
            </>
          ),
        },
        {
          heading: "1. About Placeonix",
          body: (
            <>
              <p>
                Placeonix provides SAP and information technology training,
                workshops, internships, practical projects, career guidance,
                interview preparation, and placement-assistance services.
              </p>
              <p>For the purposes of this Privacy Policy:</p>
              <ul>
                <li>
                  &ldquo;Placeonix&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
                  and &ldquo;our&rdquo; refer to Placeonix and its authorised
                  representatives
                </li>
                <li>
                  &ldquo;You&rdquo;, &ldquo;your&rdquo;, &ldquo;student&rdquo;,
                  &ldquo;learner&rdquo;, &ldquo;visitor&rdquo;, or
                  &ldquo;user&rdquo; refer to the individual whose information
                  is collected or processed
                </li>
                <li>
                  &ldquo;Personal information&rdquo; or &ldquo;personal
                  data&rdquo; means information relating to an identifiable
                  individual
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "2. Information We Collect",
          body: (
            <>
              <p>
                The personal information collected by Placeonix depends on
                how you interact with us.
              </p>

              <h3>2.1 Information provided through enquiry forms</h3>
              <p>
                When you submit an enquiry, contact form, counselling
                request, or demo-class registration, we may collect:
              </p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Telephone or WhatsApp number</li>
                <li>City or location</li>
                <li>Course or program of interest</li>
                <li>Preferred learning mode</li>
                <li>Educational or professional background</li>
                <li>Preferred batch timing</li>
                <li>Message or enquiry details</li>
                <li>Consent or communication preferences</li>
              </ul>

              <h3>2.2 Student admission and enrolment information</h3>
              <p>When you apply for or enrol in a program, we may collect:</p>
              <ul>
                <li>Full name</li>
                <li>Date of birth</li>
                <li>
                  Gender, where voluntarily provided or operationally
                  required
                </li>
                <li>Residential or correspondence address</li>
                <li>Photograph</li>
                <li>Identity verification details</li>
                <li>Parent or guardian details for minors</li>
                <li>Emergency contact information</li>
                <li>Educational qualifications</li>
                <li>College or university information</li>
                <li>Employment history</li>
                <li>Technical skills</li>
                <li>Resume or curriculum vitae</li>
                <li>Course selection</li>
                <li>Batch and attendance information</li>
                <li>Student identification number</li>
                <li>Admission documents</li>
                <li>Signed declarations or agreements</li>
                <li>Other information required to administer the program</li>
              </ul>
              <p>
                We will not ordinarily require sensitive identity documents
                unless they are reasonably necessary for enrolment,
                certification, verification, internship, placement, or legal
                compliance.
              </p>

              <h3>2.3 Payment and transaction information</h3>
              <p>When you make a payment, we may collect or receive:</p>
              <ul>
                <li>Student or payer name</li>
                <li>Payment amount</li>
                <li>Transaction date</li>
                <li>Transaction reference number</li>
                <li>Payment status</li>
                <li>Invoice and receipt details</li>
                <li>Instalment information</li>
                <li>Billing address</li>
                <li>
                  Limited payment-method details supplied by the payment
                  provider
                </li>
              </ul>
              <p>
                Placeonix may use banks, UPI providers, payment gateways, or
                other authorised payment processors.
              </p>
              <p>
                We do not ordinarily store complete debit-card, credit-card,
                bank-password, UPI PIN, or online-banking credentials.
              </p>

              <h3>2.4 Academic and training information</h3>
              <p>
                During your participation in a course or program, we may
                collect:
              </p>
              <ul>
                <li>Attendance records</li>
                <li>Assignment submissions</li>
                <li>Assessment scores</li>
                <li>Project work</li>
                <li>Trainer feedback</li>
                <li>Class participation</li>
                <li>Learning-platform activity</li>
                <li>Technical lab activity</li>
                <li>Certification status</li>
                <li>Communication with trainers</li>
                <li>Academic progress</li>
                <li>
                  Disciplinary or conduct-related records, where applicable
                </li>
              </ul>

              <h3>2.5 Internship and project information</h3>
              <p>
                Where you participate in an internship, live project, or
                simulated project, we may collect:
              </p>
              <ul>
                <li>Skills and technical profile</li>
                <li>Project allocation</li>
                <li>Work submissions</li>
                <li>Timesheets</li>
                <li>Performance evaluations</li>
                <li>Mentor feedback</li>
                <li>Attendance</li>
                <li>Access records</li>
                <li>Confidentiality agreements</li>
                <li>Client or project eligibility details</li>
              </ul>

              <h3>2.6 Placement-assistance information</h3>
              <p>When you request placement assistance, we may collect:</p>
              <ul>
                <li>Resume or curriculum vitae</li>
                <li>Educational background</li>
                <li>Employment history</li>
                <li>Skills and certifications</li>
                <li>
                  Portfolio, GitHub, LinkedIn, or professional-profile
                  information
                </li>
                <li>Preferred job role</li>
                <li>Expected salary</li>
                <li>Preferred location</li>
                <li>Availability to join</li>
                <li>Interview history</li>
                <li>Interview feedback</li>
                <li>Job-application status</li>
                <li>Offer or employment status</li>
                <li>
                  Documents voluntarily submitted for recruiter verification
                </li>
              </ul>
              <p>
                You are responsible for ensuring that all employment,
                educational, and experience information supplied to Placeonix
                is accurate and genuine.
              </p>

              <h3>2.7 Communication information</h3>
              <p>
                When you communicate with us by phone, email, WhatsApp,
                website forms, video meetings, social media, or in person, we
                may retain:
              </p>
              <ul>
                <li>The content of your communication</li>
                <li>Contact details</li>
                <li>Date and time</li>
                <li>Call notes</li>
                <li>Counselling notes</li>
                <li>Complaint or support information</li>
                <li>Follow-up status</li>
              </ul>
              <p>
                Telephone or online counselling sessions will not ordinarily
                be recorded unless you are informed or recording is required
                for quality, security, evidence, or training purposes.
              </p>

              <h3>2.8 Photographs, videos, and recordings</h3>
              <p>
                During classes, workshops, events, internships, placement
                drives, or project demonstrations, we may collect:
              </p>
              <ul>
                <li>Photographs</li>
                <li>Video recordings</li>
                <li>Voice recordings</li>
                <li>Session recordings</li>
                <li>Testimonials</li>
                <li>Project demonstrations</li>
                <li>Event-participation material</li>
              </ul>
              <p>
                Where identifiable student content is intended for
                promotional or marketing use, Placeonix will seek appropriate
                permission where required.
              </p>

              <h3>2.9 Information collected automatically</h3>
              <p>
                When you visit the Placeonix website, certain information may
                be collected automatically, including:
              </p>
              <ul>
                <li>Internet Protocol address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>
                  Approximate location derived from technical information
                </li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referring website</li>
                <li>Date and time of access</li>
                <li>Form-interaction information</li>
                <li>Website-performance information</li>
                <li>Cookie or similar technology identifiers</li>
              </ul>
              <p>
                This information may be collected through website hosting,
                analytics, security, or performance tools.
              </p>
            </>
          ),
        },
        {
          heading: "3. How We Collect Information",
          body: (
            <>
              <p>We may collect personal information:</p>
              <ul>
                <li>Directly from you</li>
                <li>Through website forms</li>
                <li>During admission or enrolment</li>
                <li>Through telephone, email, or WhatsApp communication</li>
                <li>During counselling or demo sessions</li>
                <li>Through learning platforms</li>
                <li>During classroom or online training</li>
                <li>Through payment providers</li>
                <li>During assessments and projects</li>
                <li>Through internship or placement forms</li>
                <li>Through recruiters or placement partners</li>
                <li>Through colleges or institutional partners</li>
                <li>From publicly available professional profiles</li>
                <li>Through cookies and analytics tools</li>
                <li>Through authorised representatives acting on your behalf</li>
              </ul>
              <p>
                Where information is received from another person or
                institution, we may take reasonable steps to verify that it
                was lawfully provided.
              </p>
            </>
          ),
        },
        {
          heading: "4. Purposes for Which We Use Information",
          body: (
            <>
              <p>
                Placeonix may use personal information for the following
                purposes.
              </p>

              <h3>4.1 Enquiries and counselling</h3>
              <p>We may use your information to:</p>
              <ul>
                <li>Respond to enquiries</li>
                <li>Arrange counselling calls</li>
                <li>Recommend suitable programs</li>
                <li>Schedule demo classes</li>
                <li>Provide course information</li>
                <li>Explain fees and batch schedules</li>
                <li>Follow up regarding your interest</li>
              </ul>

              <h3>4.2 Admission and course administration</h3>
              <p>We may use your information to:</p>
              <ul>
                <li>Process applications</li>
                <li>Confirm eligibility</li>
                <li>Complete admission</li>
                <li>Allocate a batch</li>
                <li>Create student records</li>
                <li>Issue student identification</li>
                <li>Communicate schedules</li>
                <li>Provide learning access</li>
                <li>Track attendance</li>
                <li>Administer assessments</li>
                <li>Manage projects</li>
                <li>Issue certificates</li>
                <li>Provide academic support</li>
              </ul>

              <h3>4.3 Payment administration</h3>
              <p>We may use payment information to:</p>
              <ul>
                <li>Process or verify payments</li>
                <li>Issue receipts and invoices</li>
                <li>Track instalments</li>
                <li>Process approved refunds</li>
                <li>Resolve payment disputes</li>
                <li>Maintain financial records</li>
                <li>Meet accounting, taxation, and legal obligations</li>
              </ul>

              <h3>4.4 Course delivery</h3>
              <p>We may use information to:</p>
              <ul>
                <li>Conduct online and classroom sessions</li>
                <li>Provide learning materials</li>
                <li>Monitor student progress</li>
                <li>Review assignments</li>
                <li>Provide feedback</li>
                <li>Administer exams or assessments</li>
                <li>Manage learning platforms</li>
                <li>Provide software or lab access</li>
                <li>Improve teaching quality</li>
              </ul>

              <h3>4.5 Internships and projects</h3>
              <p>We may use information to:</p>
              <ul>
                <li>Evaluate internship eligibility</li>
                <li>Allocate projects</li>
                <li>Assign mentors</li>
                <li>Monitor performance</li>
                <li>Communicate project requirements</li>
                <li>Verify attendance and deliverables</li>
                <li>Protect confidential project information</li>
                <li>Issue internship or project-completion documents</li>
              </ul>

              <h3>4.6 Placement assistance</h3>
              <p>We may use relevant information to:</p>
              <ul>
                <li>Review and improve resumes</li>
                <li>Provide interview preparation</li>
                <li>Conduct mock interviews</li>
                <li>Recommend suitable roles</li>
                <li>Share job opportunities</li>
                <li>Submit profiles to recruiters</li>
                <li>Arrange interviews</li>
                <li>Track application status</li>
                <li>Obtain interview feedback</li>
                <li>Support eligible students during recruitment</li>
              </ul>
              <p>
                Placement assistance does not constitute a guarantee of
                employment.
              </p>

              <h3>4.7 Communication</h3>
              <p>We may use contact information to send:</p>
              <ul>
                <li>Admission confirmations</li>
                <li>Payment reminders</li>
                <li>Class schedules</li>
                <li>Batch updates</li>
                <li>Academic notices</li>
                <li>Assessment information</li>
                <li>Internship updates</li>
                <li>Placement opportunities</li>
                <li>Interview schedules</li>
                <li>Support responses</li>
                <li>Policy updates</li>
                <li>Other important service-related messages</li>
              </ul>

              <h3>4.8 Marketing and promotional communication</h3>
              <p>Where permitted, we may send information about:</p>
              <ul>
                <li>New courses</li>
                <li>Workshops</li>
                <li>Bootcamps</li>
                <li>Events</li>
                <li>Offers</li>
                <li>Scholarships</li>
                <li>Demo classes</li>
                <li>Career programs</li>
                <li>Related Placeonix services</li>
              </ul>
              <p>
                You may request to stop receiving non-essential promotional
                communication.
              </p>
              <p>
                Stopping promotional communication will not prevent necessary
                service-related messages concerning an active enquiry,
                enrolment, payment, class, internship, interview, or legal
                obligation.
              </p>

              <h3>4.9 Website improvement and security</h3>
              <p>We may use technical and usage information to:</p>
              <ul>
                <li>Operate the website</li>
                <li>Understand visitor behaviour</li>
                <li>Improve navigation and content</li>
                <li>Diagnose technical issues</li>
                <li>Prevent spam or fraud</li>
                <li>Protect website security</li>
                <li>Monitor website performance</li>
                <li>Improve user experience</li>
              </ul>

              <h3>4.10 Legal and operational purposes</h3>
              <p>We may process information to:</p>
              <ul>
                <li>Maintain business records</li>
                <li>Resolve complaints</li>
                <li>Enforce agreements</li>
                <li>Prevent misconduct or fraud</li>
                <li>Protect students, staff, and systems</li>
                <li>Respond to lawful requests</li>
                <li>Comply with legal obligations</li>
                <li>Establish, exercise, or defend legal claims</li>
              </ul>
            </>
          ),
        },
        {
          heading: "5. Legal Basis and Consent",
          body: (
            <>
              <p>
                Placeonix processes personal information only for lawful and
                legitimate purposes connected with its educational,
                administrative, contractual, placement, security, and legal
                activities.
              </p>
              <p>
                Depending on the circumstances, information may be processed:
              </p>
              <ul>
                <li>With your consent</li>
                <li>To provide a service requested by you</li>
                <li>To perform an agreement with you</li>
                <li>To administer your enrolment</li>
                <li>To comply with a legal obligation</li>
                <li>To protect against fraud or security threats</li>
                <li>To respond to emergencies</li>
                <li>For another purpose permitted under applicable law</li>
              </ul>
              <p>
                Where consent is required, Placeonix will seek consent
                through a clear affirmative action.
              </p>
              <p>
                You may withdraw consent for future processing where
                applicable. Withdrawal does not affect processing already
                carried out lawfully before the withdrawal and may affect our
                ability to continue services that require the information.
              </p>
            </>
          ),
        },
        {
          heading: "6. Sharing of Personal Information",
          body: (
            <>
              <p>
                Placeonix does not sell personal information to third-party
                advertisers or data brokers.
              </p>
              <p>
                We may share personal information only where reasonably
                necessary for the purposes described in this policy.
              </p>

              <h3>6.1 Trainers, employees, and authorised representatives</h3>
              <p>
                Relevant information may be shared internally with
                authorised:
              </p>
              <ul>
                <li>Trainers</li>
                <li>Counsellors</li>
                <li>Academic coordinators</li>
                <li>Placement coordinators</li>
                <li>Accounts personnel</li>
                <li>Administrators</li>
                <li>Technical-support staff</li>
                <li>Management</li>
                <li>Authorised contractors</li>
              </ul>
              <p>Access will be limited according to their responsibilities.</p>

              <h3>6.2 Recruiters and placement partners</h3>
              <p>
                Where you request or participate in placement assistance,
                Placeonix may share relevant information with:
              </p>
              <ul>
                <li>Recruiters</li>
                <li>Employers</li>
                <li>Staffing companies</li>
                <li>Placement agencies</li>
                <li>Corporate partners</li>
                <li>Interviewers</li>
                <li>Hiring platforms</li>
              </ul>
              <p>Information shared may include your:</p>
              <ul>
                <li>Name</li>
                <li>Contact details</li>
                <li>Resume</li>
                <li>Educational qualifications</li>
                <li>Skills</li>
                <li>Certifications</li>
                <li>Employment history</li>
                <li>Project experience</li>
                <li>Location preference</li>
                <li>Availability</li>
                <li>Salary expectations</li>
                <li>Interview-related information</li>
              </ul>
              <p>
                We will not knowingly share your profile for unrelated
                recruitment purposes without an appropriate basis.
              </p>
              <p>
                Recruiters and employers receiving your information may
                independently process it under their own privacy practices.
              </p>

              <h3>6.3 Internship and project partners</h3>
              <p>
                Where you participate in an internship or project, relevant
                information may be shared with:
              </p>
              <ul>
                <li>Clients</li>
                <li>Mentors</li>
                <li>Project partners</li>
                <li>Technology partners</li>
                <li>Corporate organisations</li>
                <li>Institutional partners</li>
              </ul>
              <p>
                Only information reasonably required for evaluation,
                allocation, access, supervision, verification, or
                certification will ordinarily be shared.
              </p>

              <h3>6.4 Colleges and institutional partners</h3>
              <p>
                Where a program is conducted in collaboration with a college,
                university, or institution, information may be shared for:
              </p>
              <ul>
                <li>Registration</li>
                <li>Attendance</li>
                <li>Program delivery</li>
                <li>Assessment</li>
                <li>Reporting</li>
                <li>Certification</li>
                <li>Internship coordination</li>
                <li>Placement support</li>
              </ul>

              <h3>6.5 Payment and financial service providers</h3>
              <p>
                Payment and transaction information may be shared with:
              </p>
              <ul>
                <li>Banks</li>
                <li>Payment gateways</li>
                <li>UPI providers</li>
                <li>Accountants</li>
                <li>Auditors</li>
                <li>Tax professionals</li>
                <li>Financial service providers</li>
              </ul>

              <h3>6.6 Technology and service providers</h3>
              <p>We may use third-party providers for:</p>
              <ul>
                <li>Website hosting</li>
                <li>Cloud storage</li>
                <li>Email</li>
                <li>Messaging</li>
                <li>Video conferencing</li>
                <li>Learning-management systems</li>
                <li>Customer-management tools</li>
                <li>Analytics</li>
                <li>Cybersecurity</li>
                <li>Form processing</li>
                <li>Document management</li>
                <li>Technical support</li>
              </ul>
              <p>
                These providers may process information on our behalf
                according to their contracts, instructions, and applicable
                law.
              </p>

              <h3>6.7 Legal authorities and protection of rights</h3>
              <p>We may disclose information where reasonably necessary to:</p>
              <ul>
                <li>Comply with applicable law</li>
                <li>Respond to a court order</li>
                <li>Respond to a lawful government request</li>
                <li>Investigate fraud or misconduct</li>
                <li>Protect legal rights</li>
                <li>Protect the safety of students or staff</li>
                <li>Prevent cybersecurity incidents</li>
                <li>Establish, exercise, or defend legal claims</li>
              </ul>

              <h3>6.8 Business restructuring</h3>
              <p>
                If Placeonix undergoes a merger, acquisition, reorganisation,
                transfer, or sale of all or part of its operations, relevant
                information may be transferred as part of that transaction,
                subject to applicable legal safeguards.
              </p>
            </>
          ),
        },
        {
          heading: "7. Cookies and Similar Technologies",
          body: (
            <>
              <p>The Placeonix website may use cookies and similar technologies.</p>
              <p>
                Cookies are small files or identifiers stored on or
                associated with your browser or device.
              </p>
              <p>We may use:</p>

              <h3>7.1 Essential cookies</h3>
              <p>These cookies support:</p>
              <ul>
                <li>Basic website operation</li>
                <li>Navigation</li>
                <li>Form submission</li>
                <li>Security</li>
                <li>Session management</li>
                <li>Fraud prevention</li>
              </ul>

              <h3>7.2 Analytics cookies</h3>
              <p>These cookies may help us understand:</p>
              <ul>
                <li>Number of visitors</li>
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>Traffic sources</li>
                <li>Browser or device types</li>
                <li>Website-performance issues</li>
              </ul>

              <h3>7.3 Preference cookies</h3>
              <p>These cookies may remember user choices such as:</p>
              <ul>
                <li>Language</li>
                <li>Display preferences</li>
                <li>Form information</li>
                <li>Previous website interactions</li>
              </ul>

              <h3>7.4 Marketing technologies</h3>
              <p>
                Where used and permitted, marketing technologies may help
                measure promotional campaigns or deliver relevant
                advertisements.
              </p>
              <p>
                You may control or delete cookies through your browser
                settings. Disabling essential cookies may affect website
                functionality.
              </p>
              <p>
                Where legally required, Placeonix will request consent before
                using non-essential cookies.
              </p>
            </>
          ),
        },
        {
          heading: "8. Third-Party Links and Platforms",
          body: (
            <>
              <p>
                The website or Placeonix services may contain links to or use
                third-party services, such as:
              </p>
              <ul>
                <li>Payment gateways</li>
                <li>Video-meeting platforms</li>
                <li>Cloud providers</li>
                <li>Learning platforms</li>
                <li>Social-media websites</li>
                <li>Certification portals</li>
                <li>Job portals</li>
                <li>Google services</li>
                <li>Microsoft services</li>
                <li>SAP services</li>
                <li>Recruitment platforms</li>
              </ul>
              <p>
                Third-party services operate under their own terms and
                privacy policies.
              </p>
              <p>
                Placeonix is not responsible for the privacy practices,
                security, availability, or content of independent
                third-party services.
              </p>
              <p>
                You should review the relevant third-party privacy policy
                before providing information directly to that service.
              </p>
            </>
          ),
        },
        {
          heading: "9. Data Storage and Location",
          body: (
            <>
              <p>Personal information may be stored:</p>
              <ul>
                <li>In Placeonix&rsquo;s internal records</li>
                <li>On computers and authorised devices</li>
                <li>In email systems</li>
                <li>In cloud-storage systems</li>
                <li>On learning platforms</li>
                <li>In customer-management systems</li>
                <li>With payment providers</li>
                <li>With authorised service providers</li>
              </ul>
              <p>
                Some service providers may store or process information
                outside the state or country in which you reside.
              </p>
              <p>
                Where cross-border processing occurs, Placeonix will take
                reasonable steps to use providers and arrangements permitted
                under applicable law.
              </p>
            </>
          ),
        },
        {
          heading: "10. Data Retention",
          body: (
            <>
              <p>
                Placeonix retains personal information only for as long as
                reasonably necessary for the purposes for which it was
                collected, including education, administration, placement
                assistance, accounting, dispute resolution, security, and
                legal compliance.
              </p>
              <p>Retention periods may vary according to the type of information.</p>

              <h3>10.1 Enquiry information</h3>
              <p>
                Enquiry and counselling information may ordinarily be
                retained while the enquiry remains active and for a
                reasonable follow-up period afterward.
              </p>
              <p>
                Where you do not enrol, information may be deleted,
                anonymised, or retained for legitimate record-keeping and
                marketing purposes where permitted.
              </p>

              <h3>10.2 Student records</h3>
              <p>
                Admission, attendance, academic, payment, certification, and
                course-completion information may be retained for the
                duration of the program and afterward for verification,
                support, accounting, legal, and certificate-related purposes.
              </p>

              <h3>10.3 Placement records</h3>
              <p>
                Placement information may be retained while you are receiving
                placement assistance and afterward where necessary to:
              </p>
              <ul>
                <li>Verify referrals</li>
                <li>Track outcomes</li>
                <li>Resolve disputes</li>
                <li>Maintain employer relationships</li>
                <li>Respond to verification requests</li>
                <li>Meet legal requirements</li>
              </ul>

              <h3>10.4 Financial records</h3>
              <p>
                Invoices, receipts, payment details, and refund records may be
                retained for the period required by accounting, taxation,
                audit, or other applicable requirements.
              </p>

              <h3>10.5 Recordings and media</h3>
              <p>
                Class recordings, event photographs, videos, and testimonials
                may be retained for the period required for academic,
                operational, evidentiary, or approved promotional purposes.
              </p>

              <h3>10.6 Complaints and legal records</h3>
              <p>
                Complaint, disciplinary, fraud, security, and legal records
                may be retained as long as reasonably necessary to resolve
                the matter and protect legal rights.
              </p>
              <p>
                When information is no longer required, Placeonix may delete,
                securely destroy, or anonymise it, subject to technical and
                legal limitations.
              </p>
            </>
          ),
        },
        {
          heading: "11. Data Security",
          body: (
            <>
              <p>
                Placeonix takes reasonable administrative, technical, and
                organisational measures to protect personal information.
              </p>
              <p>Measures may include:</p>
              <ul>
                <li>Access controls</li>
                <li>Password protection</li>
                <li>Role-based access</li>
                <li>Device security</li>
                <li>Secure cloud services</li>
                <li>Restricted staff access</li>
                <li>Data backups</li>
                <li>Security monitoring</li>
                <li>Confidentiality obligations</li>
                <li>Software updates</li>
                <li>Staff awareness</li>
                <li>Incident-response procedures</li>
              </ul>
              <p>
                However, no website, email system, cloud service, device, or
                internet transmission can be guaranteed to be completely
                secure.
              </p>
              <p>You are responsible for protecting:</p>
              <ul>
                <li>Your passwords</li>
                <li>Learning-platform credentials</li>
                <li>Email account</li>
                <li>Device access</li>
                <li>Verification codes</li>
                <li>Other authentication information</li>
              </ul>
              <p>
                You should promptly notify Placeonix if you suspect
                unauthorised access to your account or information.
              </p>
            </>
          ),
        },
        {
          heading: "12. Personal Data Breaches",
          body: (
            <>
              <p>
                If Placeonix becomes aware of a personal-data breach
                affecting information under its control, we will take
                reasonable steps to:
              </p>
              <ul>
                <li>Contain the incident</li>
                <li>Investigate its nature and scope</li>
                <li>Reduce possible harm</li>
                <li>Restore security</li>
                <li>Preserve relevant evidence</li>
                <li>
                  Notify affected individuals or authorities where required
                  by applicable law
                </li>
              </ul>
              <p>
                Notifications may include information about the nature of
                the breach, likely consequences, protective actions, and
                contact details for assistance.
              </p>
            </>
          ),
        },
        {
          heading: "13. Your Rights",
          body: (
            <>
              <p>
                Subject to applicable law and reasonable identity
                verification, you may request:
              </p>
              <ul>
                <li>Information about personal data being processed</li>
                <li>A summary of processing activities</li>
                <li>Correction of inaccurate information</li>
                <li>Completion of incomplete information</li>
                <li>Updating of outdated information</li>
                <li>
                  Deletion or erasure of information that is no longer
                  required
                </li>
                <li>Withdrawal of consent</li>
                <li>Cessation of certain promotional communication</li>
                <li>Grievance redressal</li>
                <li>
                  Information about relevant parties with whom data has been
                  shared, where applicable
                </li>
              </ul>
              <p>Some requests may be limited where information must be retained for:</p>
              <ul>
                <li>Legal obligations</li>
                <li>Accounting or taxation</li>
                <li>Fraud prevention</li>
                <li>Security</li>
                <li>Contractual enforcement</li>
                <li>Certificate verification</li>
                <li>Dispute resolution</li>
                <li>Legal claims</li>
                <li>Other purposes permitted by law</li>
              </ul>
              <p>
                Placeonix may request proof of identity before responding to
                protect your information from unauthorised access or
                deletion.
              </p>
            </>
          ),
        },
        {
          heading: "14. How to Exercise Your Rights",
          body: (
            <>
              <p>To submit a privacy request, contact:</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@placeonix.com">support@placeonix.com</a>
                <br />
                <strong>Phone:</strong>{" "}
                <a href="tel:+919949494020">+91 99494 94020</a>
              </p>
              <p>Your request should include:</p>
              <ul>
                <li>Full name</li>
                <li>Registered email address or telephone number</li>
                <li>Course or batch, where applicable</li>
                <li>Description of the information concerned</li>
                <li>The action requested</li>
                <li>Sufficient information to verify your identity</li>
              </ul>
              <p>
                Placeonix will review and respond within a reasonable period
                and within any legally prescribed timeframe that applies.
              </p>
              <p>
                We may contact you for additional information where necessary
                to understand or verify the request.
              </p>
            </>
          ),
        },
        {
          heading: "15. Withdrawal of Consent",
          body: (
            <>
              <p>
                Where processing is based on your consent, you may withdraw
                that consent by contacting Placeonix.
              </p>
              <p>
                Withdrawal will apply to future processing and will not make
                prior lawful processing invalid.
              </p>
              <p>
                Withdrawing consent may affect our ability to provide
                services where the relevant information is necessary for:
              </p>
              <ul>
                <li>Enrolment</li>
                <li>Course delivery</li>
                <li>Payment administration</li>
                <li>Certification</li>
                <li>Internship participation</li>
                <li>Placement assistance</li>
                <li>Legal compliance</li>
              </ul>
            </>
          ),
        },
        {
          heading: "16. Correction and Accuracy of Information",
          body: (
            <>
              <p>
                You should ensure that personal information provided to
                Placeonix is complete, current, and accurate.
              </p>
              <p>You must inform us if your:</p>
              <ul>
                <li>Name</li>
                <li>Telephone number</li>
                <li>Email address</li>
                <li>Address</li>
                <li>Educational information</li>
                <li>Employment status</li>
                <li>Resume</li>
                <li>Job preferences</li>
                <li>Other relevant information</li>
              </ul>
              <p>
                changes during an active course, internship, or
                placement-support period.
              </p>
              <p>
                Placeonix is not responsible for consequences caused by
                inaccurate, fraudulent, incomplete, or outdated information
                supplied by you.
              </p>
            </>
          ),
        },
        {
          heading: "17. Children and Minors",
          body: (
            <>
              <p>
                Placeonix services are generally intended for students and
                professionals who can lawfully provide their information.
              </p>
              <p>
                Where a participant is under 18 years of age, Placeonix may
                require:
              </p>
              <ul>
                <li>Parent or guardian consent</li>
                <li>Parent or guardian contact information</li>
                <li>Identity or age verification</li>
                <li>Parent or guardian involvement in admission or payment</li>
              </ul>
              <p>
                Placeonix does not knowingly use a minor&rsquo;s personal
                information for behavioural monitoring or targeted
                advertising.
              </p>
              <p>
                Parents or legal guardians may contact Placeonix regarding
                the personal information of a minor enrolled under their
                responsibility.
              </p>
            </>
          ),
        },
        {
          heading: "18. Student Photographs, Testimonials, and Success Stories",
          body: (
            <>
              <p>Placeonix may invite students to voluntarily provide:</p>
              <ul>
                <li>Testimonials</li>
                <li>Reviews</li>
                <li>Placement-success information</li>
                <li>Course feedback</li>
                <li>Photographs</li>
                <li>Videos</li>
                <li>Project demonstrations</li>
                <li>Event content</li>
              </ul>
              <p>
                Where required, Placeonix will obtain appropriate permission
                before using identifiable content for:
              </p>
              <ul>
                <li>Website publication</li>
                <li>Social media</li>
                <li>Brochures</li>
                <li>Advertisements</li>
                <li>Presentations</li>
                <li>Event promotion</li>
                <li>Other public marketing</li>
              </ul>
              <p>
                Participation in promotional content is voluntary and does
                not determine academic, internship, certification, or
                placement eligibility.
              </p>
              <p>
                You may request that Placeonix stop future use of your
                identifiable promotional content.
              </p>
              <p>
                We will take reasonable steps to honour the request, but
                removal may not be possible from:
              </p>
              <ul>
                <li>Materials already printed</li>
                <li>Content already lawfully distributed</li>
                <li>Archived records</li>
                <li>Third-party reposts outside our control</li>
                <li>Content required for legal evidence</li>
              </ul>
            </>
          ),
        },
        {
          heading: "19. Class and Event Recordings",
          body: (
            <>
              <p>
                Placeonix may record certain classes, webinars, meetings,
                workshops, or events for:
              </p>
              <ul>
                <li>Student revision</li>
                <li>Quality monitoring</li>
                <li>Internal training</li>
                <li>Security</li>
                <li>Academic records</li>
                <li>Evidence of program delivery</li>
              </ul>
              <p>
                Where practical, participants will be informed when a session
                is being recorded.
              </p>
              <p>A recording may contain:</p>
              <ul>
                <li>Participant names</li>
                <li>Voices</li>
                <li>Video images</li>
                <li>Chat messages</li>
                <li>Questions</li>
                <li>Screen shares</li>
                <li>Project demonstrations</li>
              </ul>
              <p>
                Students must not record, download, copy, upload, distribute,
                or publish classes or recordings without written permission.
              </p>
              <p>
                Where a recording is provided to students, access may be
                limited by time, batch, account, or platform.
              </p>
            </>
          ),
        },
        {
          heading: "20. Marketing Preferences",
          body: (
            <>
              <p>
                You may ask Placeonix to stop sending promotional
                communication by:
              </p>
              <ul>
                <li>Using an available unsubscribe option</li>
                <li>Replying with an opt-out request</li>
                <li>
                  Sending an email to{" "}
                  <a href="mailto:support@placeonix.com">
                    support@placeonix.com
                  </a>
                </li>
                <li>Contacting the Placeonix support team</li>
              </ul>
              <p>Please allow reasonable time for the request to be processed.</p>
              <p>You may still receive essential service communications about:</p>
              <ul>
                <li>Active enrolment</li>
                <li>Payment</li>
                <li>Class schedules</li>
                <li>Assessments</li>
                <li>Certificates</li>
                <li>Internship</li>
                <li>Placement interviews</li>
                <li>Complaints</li>
                <li>Security</li>
                <li>Legal updates</li>
              </ul>
            </>
          ),
        },
        {
          heading: "21. Automated Tools and Artificial Intelligence",
          body: (
            <>
              <p>
                Placeonix may use software or artificial-intelligence-assisted
                tools to support activities such as:
              </p>
              <ul>
                <li>Website enquiries</li>
                <li>Resume formatting</li>
                <li>Learning support</li>
                <li>Content recommendations</li>
                <li>Communication management</li>
                <li>Scheduling</li>
                <li>Analytics</li>
                <li>Fraud or spam detection</li>
                <li>Administrative efficiency</li>
              </ul>
              <p>
                Where such tools are used, Placeonix will take reasonable
                steps to protect personal information and avoid using solely
                automated decisions for significant student outcomes without
                appropriate human review.
              </p>
              <p>
                Students should not submit unnecessary confidential,
                financial, identity, client, employer, or third-party
                information into learning or AI tools.
              </p>
            </>
          ),
        },
        {
          heading: "22. Complaints and Grievance Redressal",
          body: (
            <>
              <p>For a privacy complaint or concern, contact:</p>
              <p>
                <strong>Placeonix Privacy and Grievance Contact</strong>
                <br />
                Email:{" "}
                <a href="mailto:support@placeonix.com">support@placeonix.com</a>
                <br />
                Phone: <a href="tel:+919949494020">+91 99494 94020</a>
              </p>
              <p>Please provide:</p>
              <ul>
                <li>Your name</li>
                <li>Registered contact information</li>
                <li>Course or batch, if applicable</li>
                <li>Description of the concern</li>
                <li>Relevant dates</li>
                <li>Supporting evidence</li>
                <li>The resolution requested</li>
              </ul>
              <p>
                Placeonix will acknowledge and review the complaint within a
                reasonable period.
              </p>
              <p>
                You should first provide Placeonix a reasonable opportunity
                to investigate and address the concern.
              </p>
              <p>
                Nothing in this policy prevents you from using remedies
                available under applicable law.
              </p>
            </>
          ),
        },
        {
          heading: "23. Contact Information",
          body: (
            <>
              <p>
                For privacy questions, requests, complaints, or withdrawal of
                consent, contact:
              </p>
              <p>
                <strong>Placeonix</strong>
                <br />
                Kapil Kavuri Hub
                <br />
                No. 144, 9th Floor, 152
                <br />
                Financial District
                <br />
                Hyderabad, Telangana &ndash; 500032
                <br />
                India
              </p>
              <p>
                Email:{" "}
                <a href="mailto:support@placeonix.com">support@placeonix.com</a>
                <br />
                Phone: <a href="tel:+919949494020">+91 99494 94020</a>
                <br />
                Website:{" "}
                <a href="https://www.placeonix.com">www.placeonix.com</a>
              </p>
            </>
          ),
        },
        {
          heading: "24. Changes to This Privacy Policy",
          body: (
            <>
              <p>Placeonix may update this Privacy Policy because of changes in:</p>
              <ul>
                <li>Legal requirements</li>
                <li>Technology</li>
                <li>Website functionality</li>
                <li>Course-delivery methods</li>
                <li>Payment systems</li>
                <li>Placement services</li>
                <li>Business operations</li>
                <li>Data-handling practices</li>
              </ul>
              <p>
                The revised policy will be published on the Placeonix website
                with an updated &ldquo;Last Updated&rdquo; date.
              </p>
              <p>
                Where appropriate, material changes may also be communicated
                through email, website notice, student portal, or another
                reasonable method.
              </p>
            </>
          ),
        },
        {
          heading: "25. Relationship with Other Policies",
          body: (
            <>
              <p>This Privacy Policy should be read together with the Placeonix:</p>
              <ul>
                <li>Terms and Conditions</li>
                <li>Refund and Cancellation Policy</li>
                <li>Student admission documents</li>
                <li>Internship or project agreements</li>
                <li>Placement-assistance conditions</li>
                <li>Cookie notice, where applicable</li>
                <li>Any specific consent or authorisation form</li>
              </ul>
              <p>
                Where a separately signed agreement contains additional
                privacy requirements, those requirements will also apply.
              </p>
            </>
          ),
        },
        {
          heading: "26. Governing Law",
          body: (
            <>
              <p>This Privacy Policy is governed by the laws of India.</p>
              <p>
                Any privacy complaint, request, or dispute will be handled in
                accordance with applicable Indian law and any mandatory
                jurisdiction or remedy available to the individual.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
