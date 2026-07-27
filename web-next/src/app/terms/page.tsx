import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions | Placeonix",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      effectiveDate="Effective Date: 27 July 2026 · Last Updated: 27 July 2026"
      sections={[
        {
          heading: "Introduction",
          body: (
            <>
              <p>Welcome to Placeonix.</p>
              <p>
                These Terms and Conditions govern your access to and use of
                the Placeonix website, training programs, workshops,
                internships, career-support services, placement-assistance
                services, learning materials, events, and related services.
              </p>
              <p>
                By accessing our website, submitting an enquiry, registering
                for a demo, enrolling in a program, making a payment,
                attending a class, or using any Placeonix service, you
                confirm that you have read, understood, and agreed to these
                Terms and Conditions.
              </p>
            </>
          ),
        },
        {
          heading: "1. About Placeonix",
          body: (
            <>
              <p>
                Placeonix provides industry-focused education and
                career-development services, including:
              </p>
              <ul>
                <li>SAP and information technology training programs</li>
                <li>Classroom, online, hybrid, and recorded learning sessions</li>
                <li>Workshops, bootcamps and seminars</li>
                <li>Practical assignments and live or simulated projects</li>
                <li>Internship opportunities, where specifically offered</li>
                <li>Resume preparation and profile-building assistance</li>
                <li>Mock interviews and interview preparation</li>
                <li>Career guidance and placement assistance</li>
                <li>Other educational and professional-development services</li>
              </ul>
              <p>
                For the purposes of these Terms, &ldquo;Placeonix&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer
                to Placeonix and its authorised representatives.
                &ldquo;Student&rdquo;, &ldquo;learner&rdquo;,
                &ldquo;participant&rdquo;, &ldquo;you&rdquo; and
                &ldquo;your&rdquo; refer to the person using or purchasing
                our services.
              </p>
            </>
          ),
        },
        {
          heading: "2. Eligibility",
          body: (
            <>
              <p>
                You must provide complete and accurate information while
                submitting an enquiry, registering, enrolling or making a
                payment.
              </p>
              <p>
                If you are under 18 years of age, your parent or legal
                guardian must review and accept these Terms and complete or
                approve the enrolment and payment process.
              </p>
              <p>
                You are responsible for ensuring that you meet any
                educational, technical, professional or experience-related
                prerequisites communicated for a particular program.
              </p>
            </>
          ),
        },
        {
          heading: "3. Enrolment",
          body: (
            <>
              <p>
                Submitting an enquiry, attending a counselling session,
                registering for a demo class or completing an application
                does not by itself confirm admission.
              </p>
              <p>Enrolment is confirmed only after:</p>
              <ol>
                <li>Placeonix accepts the application</li>
                <li>The applicable registration fee or course fee is received</li>
                <li>Required documents and information are submitted</li>
                <li>The student receives an official confirmation from Placeonix</li>
              </ol>
              <p>
                Placeonix may refuse or cancel an enrolment where information
                provided by the applicant is false, misleading, incomplete or
                unverifiable.
              </p>
              <p>
                Seats may be limited and are ordinarily allocated based on
                payment and enrolment confirmation.
              </p>
            </>
          ),
        },
        {
          heading: "4. Course Information",
          body: (
            <>
              <p>
                Course descriptions, modules, durations, schedules, trainers,
                projects, tools, platforms and delivery methods displayed on
                the website or in promotional materials are intended to
                provide a general overview.
              </p>
              <p>Placeonix may reasonably update:</p>
              <ul>
                <li>The syllabus or sequence of topics</li>
                <li>Trainers or guest speakers</li>
                <li>Class timings or batch dates</li>
                <li>Learning tools, software or platforms</li>
                <li>Assignments and project requirements</li>
                <li>Classrooms or online meeting platforms</li>
                <li>The method of delivery</li>
              </ul>
              <p>
                Such changes may be made to maintain academic quality,
                respond to trainer availability, incorporate technology
                updates or address operational requirements.
              </p>
              <p>
                A change that does not materially reduce the overall
                learning objective of the program will not ordinarily
                qualify the student for a refund.
              </p>
            </>
          ),
        },
        {
          heading: "5. Batch Scheduling",
          body: (
            <>
              <p>Batch commencement dates are indicative until officially confirmed.</p>
              <p>Placeonix may postpone, combine, reschedule or cancel a batch because of:</p>
              <ul>
                <li>Insufficient enrolments</li>
                <li>Trainer unavailability</li>
                <li>Public holidays</li>
                <li>Technical or infrastructure problems</li>
                <li>Government restrictions</li>
                <li>Emergencies</li>
                <li>Force majeure events</li>
                <li>Other circumstances beyond reasonable control</li>
              </ul>
              <p>
                Where a batch is postponed, students may ordinarily continue
                in the revised batch or request transfer to another available
                batch, subject to eligibility and seat availability.
              </p>
              <p>
                Unless expressly communicated otherwise, batch sizes may be
                limited to a maximum of 30 learners.
              </p>
            </>
          ),
        },
        {
          heading: "6. Fees and Payments",
          body: (
            <>
              <p>
                The student must pay the fees specified in the official
                admission communication, invoice, fee receipt or payment
                schedule.
              </p>
              <p>Fees may vary depending on:</p>
              <ul>
                <li>Course or program</li>
                <li>Delivery method</li>
                <li>Batch type</li>
                <li>Promotional offer</li>
                <li>Scholarship or concession</li>
                <li>Additional services</li>
                <li>Payment schedule</li>
              </ul>
              <p>
                A fee quoted to one student does not automatically apply to
                another student or to a future batch.
              </p>
              <p>
                Payments must be made only through payment methods or
                accounts officially authorised by Placeonix. Placeonix is not
                responsible for payments made to unauthorised persons,
                personal accounts or third parties.
              </p>
              <p>Students must retain payment receipts and transaction records.</p>
              <p>
                Any applicable taxes, bank charges, payment-gateway charges
                or instalment-processing charges may be charged separately
                where disclosed.
              </p>
            </>
          ),
        },
        {
          heading: "7. Instalment Payments",
          body: (
            <>
              <p>
                Where Placeonix permits payment in instalments, the student
                must follow the agreed payment schedule.
              </p>
              <p>Failure to pay an instalment by the due date may result in:</p>
              <ul>
                <li>Temporary suspension of class access</li>
                <li>Restriction of learning materials or platform access</li>
                <li>Withholding of certificates</li>
                <li>Removal from the batch</li>
                <li>Recovery of outstanding amounts as permitted by law</li>
              </ul>
              <p>
                Allowing an instalment plan does not reduce the total agreed
                course fee unless expressly confirmed in writing.
              </p>
            </>
          ),
        },
        {
          heading: "8. Refunds, Transfers and Cancellations",
          body: (
            <>
              <p>
                Refunds, course transfers, batch transfers and cancellations
                are governed by the Placeonix Refund and Cancellation Policy
                and any specific written conditions provided during
                enrolment.
              </p>
              <p>The Refund and Cancellation Policy forms part of these Terms.</p>
              <p>
                Students should review the refund conditions before making a
                payment. Registration, admission, assessment, certification,
                platform or administrative charges may be non-refundable
                where clearly disclosed and legally permissible.
              </p>
              <p>
                Failure to attend classes, changes in personal circumstances,
                relocation, employment, examination schedules or inability to
                manage time do not automatically create an entitlement to a
                refund.
              </p>
              <p>
                Any approved refund will be processed through an appropriate
                payment method after applicable deductions and verification.
              </p>
            </>
          ),
        },
        {
          heading: "9. Demo Classes and Counselling",
          body: (
            <>
              <p>
                Demo classes, counselling sessions and career discussions are
                provided to help prospective students understand the
                program.
              </p>
              <p>
                Statements made during counselling are general guidance and
                must be read together with the official course description,
                fee communication, refund policy and these Terms.
              </p>
              <p>
                A demo class may not be conducted by the same trainer
                assigned to the final batch.
              </p>
            </>
          ),
        },
        {
          heading: "10. Attendance and Participation",
          body: (
            <>
              <p>
                Students are expected to attend classes regularly, arrive on
                time and complete assignments, assessments, projects and
                other academic requirements.
              </p>
              <p>Placeonix may establish minimum attendance or performance requirements for:</p>
              <ul>
                <li>Certificates</li>
                <li>Internship consideration</li>
                <li>Project participation</li>
                <li>Interview preparation</li>
                <li>Placement referrals</li>
                <li>Other benefits</li>
              </ul>
              <p>
                A student who misses classes is responsible for covering the
                missed content. Backup classes, recordings or repeat sessions
                are not guaranteed unless specifically included in the
                program.
              </p>
            </>
          ),
        },
        {
          heading: "11. Student Conduct",
          body: (
            <>
              <p>
                Students must behave respectfully and professionally when
                interacting with trainers, employees, recruiters, clients,
                partners and other students.
              </p>
              <p>Students must not:</p>
              <ul>
                <li>Harass, threaten, abuse or discriminate against others</li>
                <li>Disrupt classes or events</li>
                <li>Use offensive, obscene or inappropriate language</li>
                <li>
                  Misrepresent qualifications, attendance, experience or
                  project work
                </li>
                <li>Cheat, plagiarise or submit another person&rsquo;s work</li>
                <li>Damage Placeonix property or systems</li>
                <li>Attempt unauthorised access to accounts, platforms or data</li>
                <li>Record sessions without permission</li>
                <li>Circulate confidential information</li>
                <li>Share login credentials or paid course access</li>
                <li>Copy, sell or distribute learning materials</li>
                <li>Engage in unlawful activity through Placeonix services</li>
              </ul>
              <p>
                Placeonix may issue a warning, suspend access or terminate
                enrolment for serious or repeated misconduct.
              </p>
              <p>
                Termination for misconduct may be without refund, subject to
                applicable law and the circumstances of the case.
              </p>
            </>
          ),
        },
        {
          heading: "12. Learning Materials and Intellectual Property",
          body: (
            <>
              <p>
                Course videos, presentations, documents, notes, assignments,
                source code, designs, diagrams, assessments, templates,
                project materials, branding and other content supplied by
                Placeonix are owned by Placeonix or used under permission
                from their respective owners.
              </p>
              <p>
                Students receive a limited, personal, non-exclusive and
                non-transferable right to use the materials for their own
                learning.
              </p>
              <p>Students may not, without prior written permission:</p>
              <ul>
                <li>Copy or reproduce the materials for commercial use</li>
                <li>Upload them to public websites, drives or repositories</li>
                <li>Sell, sublicense or distribute them</li>
                <li>Share them with non-enrolled persons</li>
                <li>Remove copyright or branding notices</li>
                <li>Record or rebroadcast live classes</li>
                <li>Use the materials to conduct competing training</li>
                <li>Claim Placeonix material as their own work</li>
              </ul>
              <p>
                Unauthorised distribution may result in suspension,
                termination and appropriate legal action.
              </p>
            </>
          ),
        },
        {
          heading: "13. Recordings and Session Content",
          body: (
            <>
              <p>
                Placeonix may record certain online or classroom sessions for
                academic, quality, security or internal training purposes.
              </p>
              <p>
                Students will be informed where recording is taking place
                when reasonably required.
              </p>
              <p>
                By participating in a recorded session, students acknowledge
                that their name, voice, chat messages, screen activity or
                image may appear in the recording.
              </p>
              <p>
                Students who do not wish to appear visually should keep their
                camera switched off where permitted and inform the trainer or
                Placeonix team.
              </p>
              <p>
                Recordings, where provided, may be available only for a
                limited period and must not be downloaded, copied or shared
                unless expressly permitted.
              </p>
            </>
          ),
        },
        {
          heading: "14. Projects, Internships and Practical Experience",
          body: (
            <>
              <p>
                Placeonix may offer live projects, simulated projects,
                internships, practical assignments or industry-exposure
                opportunities.
              </p>
              <p>Availability may depend on:</p>
              <ul>
                <li>Student performance</li>
                <li>Attendance</li>
                <li>Technical skills</li>
                <li>Professional conduct</li>
                <li>Project requirements</li>
                <li>Client or partner approval</li>
                <li>Available positions</li>
                <li>Successful completion of assessments</li>
              </ul>
              <p>Unless expressly stated in a separate written agreement:</p>
              <ul>
                <li>An internship is not employment</li>
                <li>An internship may be unpaid</li>
                <li>Project participation is not guaranteed</li>
                <li>A live project may be replaced with a simulated project</li>
                <li>Students may be required to sign confidentiality agreements</li>
                <li>Project or client information must remain confidential</li>
              </ul>
              <p>
                Placeonix may remove a student from a project or internship
                for poor attendance, misconduct, confidentiality violations,
                non-performance or breach of instructions.
              </p>
            </>
          ),
        },
        {
          heading: "15. Placement Assistance",
          body: (
            <>
              <p>Placeonix may provide placement assistance through services such as:</p>
              <ul>
                <li>Resume preparation</li>
                <li>LinkedIn profile guidance</li>
                <li>Mock interviews</li>
                <li>Interview preparation</li>
                <li>Career counselling</li>
                <li>Job notifications</li>
                <li>Recruiter introductions</li>
                <li>Interview referrals</li>
                <li>Placement drives</li>
              </ul>
              <p>Placement assistance does not mean guaranteed employment.</p>
              <p>Employment outcomes depend on factors outside Placeonix&rsquo;s control, including:</p>
              <ul>
                <li>Student skills and performance</li>
                <li>Attendance and course completion</li>
                <li>Communication and interview performance</li>
                <li>Academic qualifications</li>
                <li>Background verification</li>
                <li>Employer requirements</li>
                <li>Market conditions</li>
                <li>Location and shift preferences</li>
                <li>Salary expectations</li>
                <li>Recruitment timelines</li>
                <li>Employer decisions</li>
              </ul>
              <p>
                Placeonix does not control an employer&rsquo;s hiring
                decision, salary, job role, work location, employment
                conditions, offer withdrawal or joining date.
              </p>
              <p>
                Any specific written placement-guarantee program, where
                offered, will be governed by a separate agreement containing
                its eligibility conditions and exclusions.
              </p>
            </>
          ),
        },
        {
          heading: "16. Student Responsibilities for Placement Support",
          body: (
            <>
              <p>To receive placement assistance, students may be required to:</p>
              <ul>
                <li>Complete the relevant course</li>
                <li>Maintain the required attendance</li>
                <li>Submit assignments and projects</li>
                <li>Attend mock interviews</li>
                <li>Maintain an updated resume</li>
                <li>Provide accurate qualification and experience details</li>
                <li>Apply for suitable opportunities</li>
                <li>Attend scheduled interviews</li>
                <li>Respond promptly to communications</li>
                <li>Behave professionally with recruiters</li>
              </ul>
              <p>
                Placeonix may suspend or discontinue placement assistance
                where a student repeatedly misses interviews, provides false
                information, behaves unprofessionally, rejects suitable
                opportunities without valid reason or fails to respond to
                communications.
              </p>
            </>
          ),
        },
        {
          heading: "17. No Misrepresentation",
          body: (
            <>
              <p>
                Students must not submit false or altered educational,
                employment, salary, identity or experience documents.
              </p>
              <p>
                Placeonix will not assist students in creating false
                employment records, fabricated experience, fake payslips,
                forged certificates or misleading resumes.
              </p>
              <p>
                A student may be removed from placement assistance or the
                program if fraudulent information is discovered.
              </p>
              <p>
                Placeonix may disclose verified misconduct to an affected
                recruiter, institution, authority or partner where reasonably
                necessary and legally permitted.
              </p>
            </>
          ),
        },
        {
          heading: "18. Certificates",
          body: (
            <>
              <p>Certificates may be issued only to students who satisfy the applicable requirements, which may include:</p>
              <ul>
                <li>Fee completion</li>
                <li>Minimum attendance</li>
                <li>Assignment completion</li>
                <li>Assessment performance</li>
                <li>Project submission</li>
                <li>Compliance with these Terms</li>
              </ul>
              <p>
                A certificate confirms participation or completion of the
                relevant Placeonix program. It does not represent a
                university degree, government qualification, vendor
                certification or professional licence unless expressly
                stated.
              </p>
              <p>
                Placeonix may correct, cancel or reissue a certificate
                containing an administrative error or obtained using false
                information.
              </p>
            </>
          ),
        },
        {
          heading: "19. Third-Party Certifications and Examinations",
          body: (
            <>
              <p>
                Certain courses may prepare students for examinations or
                certifications conducted by third parties.
              </p>
              <p>Unless expressly stated in writing:</p>
              <ul>
                <li>Examination or certification fees are not included in the Placeonix course fee</li>
                <li>Placeonix does not control examination dates, eligibility, syllabus or results</li>
                <li>Passing an external examination is not guaranteed</li>
                <li>Certification rules may change according to the third-party provider</li>
              </ul>
              <p>
                Students must verify current requirements directly with the
                relevant certification provider.
              </p>
            </>
          ),
        },
        {
          heading: "20. SAP and Other Third-Party Trademarks",
          body: (
            <>
              <p>
                SAP, SAP S/4HANA, SAP BTP, SAP Fiori and other product or
                company names are trademarks of their respective owners.
              </p>
              <p>
                Placeonix&rsquo;s use of third-party names is for
                identification and educational-description purposes only.
              </p>
              <p>
                Unless expressly stated otherwise, Placeonix is not claiming
                ownership of those trademarks or official affiliation,
                endorsement, authorisation or partnership with the
                respective trademark owners.
              </p>
            </>
          ),
        },
        {
          heading: "21. Technology Requirements",
          body: (
            <>
              <p>For online or technology-based programs, students are responsible for having:</p>
              <ul>
                <li>A suitable laptop or computer</li>
                <li>Stable internet access</li>
                <li>Required software and operating-system compatibility</li>
                <li>A functioning microphone or camera where necessary</li>
                <li>Access to required email, meeting and learning-platform accounts</li>
              </ul>
              <p>
                Placeonix is not responsible for interruptions caused by a
                student&rsquo;s device, connectivity, software configuration
                or third-party account restrictions.
              </p>
              <p>
                Where cloud, trial, sandbox or third-party software access is
                used, availability and limitations are controlled by the
                relevant provider.
              </p>
            </>
          ),
        },
        {
          heading: "22. Website Use",
          body: (
            <>
              <p>You may use the Placeonix website only for lawful purposes.</p>
              <p>You must not:</p>
              <ul>
                <li>Attempt to damage, disable or overload the website</li>
                <li>Introduce malware or harmful code</li>
                <li>Scrape or extract website content without permission</li>
                <li>Attempt unauthorised access</li>
                <li>Impersonate another person</li>
                <li>Submit false enquiries</li>
                <li>Use automated tools to misuse forms or services</li>
                <li>Violate another person&rsquo;s rights</li>
              </ul>
              <p>We may restrict or block access where misuse or a security threat is suspected.</p>
            </>
          ),
        },
        {
          heading: "23. Website Information",
          body: (
            <>
              <p>
                We take reasonable steps to keep website information
                accurate. However, course details, schedules, fees, trainer
                information, offers, placement statistics and other
                information may be updated.
              </p>
              <p>
                Website content should not be treated as a permanent offer or
                contractual guarantee unless it is confirmed in an official
                written admission or service communication.
              </p>
              <p>
                Images, illustrations, testimonials, salary figures, employer
                logos and career outcomes displayed on the website may be
                representative and must not be interpreted as a guarantee
                that every student will receive the same result.
              </p>
            </>
          ),
        },
        {
          heading: "24. Testimonials and Student Content",
          body: (
            <>
              <p>
                Students may voluntarily submit testimonials, reviews,
                photographs, videos, project demonstrations or success
                stories.
              </p>
              <p>
                Placeonix will obtain appropriate permission before using
                personally identifiable student content for marketing where
                required.
              </p>
              <p>The student must ensure that submitted content:</p>
              <ul>
                <li>Is truthful</li>
                <li>Does not violate confidentiality</li>
                <li>Does not infringe third-party rights</li>
                <li>Does not contain unlawful or misleading information</li>
              </ul>
              <p>
                Permission for future use may be withdrawn by contacting
                Placeonix, subject to reasonable processing time and any
                content already lawfully printed or published.
              </p>
            </>
          ),
        },
        {
          heading: "25. Personal Information and Privacy",
          body: (
            <>
              <p>
                Placeonix may collect and process information required for
                enquiries, enrolment, payments, course delivery, certificates,
                communication, placement assistance, security and legal
                compliance.
              </p>
              <p>
                Our handling of personal information is also governed by the{" "}
                <a href="/privacy-policy">Placeonix Privacy Policy</a>.
              </p>
              <p>
                Students must provide accurate information and promptly
                inform Placeonix of material changes.
              </p>
              <p>
                By voluntarily providing information about qualifications,
                employment history, skills or career preferences for
                placement assistance, the student authorises Placeonix to
                share relevant information with suitable recruiters,
                employers, project partners or service providers for that
                purpose, subject to applicable law and our Privacy Policy.
              </p>
            </>
          ),
        },
        {
          heading: "26. Communications",
          body: (
            <>
              <p>
                By submitting your contact information, you agree to receive
                service-related communications regarding:
              </p>
              <ul>
                <li>Enquiries</li>
                <li>Counselling</li>
                <li>Admissions</li>
                <li>Payments</li>
                <li>Classes</li>
                <li>Assessments</li>
                <li>Certificates</li>
                <li>Internships</li>
                <li>Interviews</li>
                <li>Placement opportunities</li>
                <li>Important account or policy updates</li>
              </ul>
              <p>
                Marketing messages will be handled according to applicable
                law and available consent or opt-out mechanisms.
              </p>
              <p>You must keep your email address and telephone number updated.</p>
            </>
          ),
        },
        {
          heading: "27. Confidentiality",
          body: (
            <>
              <p>
                Students may receive confidential information relating to
                Placeonix, other students, employers, clients, software
                systems, projects or business processes.
              </p>
              <p>
                Such information must not be copied, disclosed or used
                outside the authorised learning or project purpose.
              </p>
              <p>
                Confidentiality obligations may continue after course
                completion or termination.
              </p>
              <p>
                Separate non-disclosure agreements may apply to internships,
                live projects or client assignments.
              </p>
            </>
          ),
        },
        {
          heading: "28. Third-Party Services and Links",
          body: (
            <>
              <p>
                The website or courses may use or link to services operated
                by third parties, including payment gateways,
                video-conferencing tools, cloud services, learning platforms,
                certification providers and recruitment portals.
              </p>
              <p>
                Placeonix does not control the security, availability,
                policies or content of independent third-party services.
              </p>
              <p>
                Use of those services may be governed by separate terms and
                privacy policies.
              </p>
            </>
          ),
        },
        {
          heading: "29. Suspension and Termination",
          body: (
            <>
              <p>Placeonix may suspend or terminate access to a program or service where the student:</p>
              <ul>
                <li>Fails to pay applicable fees</li>
                <li>Engages in misconduct</li>
                <li>Violates intellectual-property rights</li>
                <li>Shares course access</li>
                <li>Submits false information</li>
                <li>Violates confidentiality</li>
                <li>Misuses systems or platforms</li>
                <li>Harasses another person</li>
                <li>Materially breaches these Terms</li>
              </ul>
              <p>
                Where appropriate, Placeonix may provide notice and an
                opportunity to correct the breach. Immediate action may be
                taken for serious misconduct, fraud, harassment, security
                threats or unlawful activity.
              </p>
            </>
          ),
        },
        {
          heading: "30. Disclaimers",
          body: (
            <>
              <p>Placeonix provides educational and career-support services and does not guarantee:</p>
              <ul>
                <li>Employment</li>
                <li>A particular salary</li>
                <li>Selection by an employer</li>
                <li>Promotion or career advancement</li>
                <li>Passing an external examination</li>
                <li>Visa approval</li>
                <li>Access to a particular employer</li>
                <li>A particular trainer throughout the program</li>
                <li>Uninterrupted access to third-party platforms</li>
                <li>Identical outcomes for all students</li>
              </ul>
              <p>
                Learning and career outcomes vary between students and depend
                substantially on individual effort, prior knowledge,
                attendance, practice, communication, market conditions and
                employer requirements.
              </p>
            </>
          ),
        },
        {
          heading: "31. Limitation of Liability",
          body: (
            <>
              <p>
                To the maximum extent permitted by applicable law, Placeonix
                will not be liable for indirect, incidental, special,
                punitive or consequential loss arising from the use of its
                website or services.
              </p>
              <p>This includes loss resulting from:</p>
              <ul>
                <li>Missed employment opportunities</li>
                <li>Employer decisions</li>
                <li>Expected salary or income</li>
                <li>Personal device failure</li>
                <li>Internet disruption</li>
                <li>Third-party platform failure</li>
                <li>Loss of unsaved work</li>
                <li>Unauthorised actions outside Placeonix&rsquo;s reasonable control</li>
              </ul>
              <p>
                Nothing in these Terms excludes liability that cannot legally
                be excluded, including liability arising from fraud, wilful
                misconduct or other non-excludable legal obligations.
              </p>
              <p>
                Where liability may lawfully be limited, Placeonix&rsquo;s
                aggregate liability in relation to a paid service will
                ordinarily not exceed the amount actually paid by the
                affected student for that specific service.
              </p>
            </>
          ),
        },
        {
          heading: "32. Indemnity",
          body: (
            <>
              <p>
                To the extent permitted by law, you agree to indemnify
                Placeonix against claims, losses or reasonable expenses
                arising from:
              </p>
              <ul>
                <li>Your unlawful use of our services</li>
                <li>Your infringement of intellectual-property rights</li>
                <li>False information or documents submitted by you</li>
                <li>Your breach of confidentiality</li>
                <li>Your misuse of third-party systems</li>
                <li>Your material violation of these Terms</li>
              </ul>
              <p>
                This provision does not apply where the claim resulted
                primarily from Placeonix&rsquo;s own unlawful conduct.
              </p>
            </>
          ),
        },
        {
          heading: "33. Force Majeure",
          body: (
            <>
              <p>
                Placeonix will not be responsible for delay or failure caused
                by circumstances beyond its reasonable control, including:
              </p>
              <ul>
                <li>Natural disasters</li>
                <li>Epidemics or pandemics</li>
                <li>Government restrictions</li>
                <li>Civil disturbances</li>
                <li>Internet or electricity outages</li>
                <li>Cyber incidents</li>
                <li>Transport disruptions</li>
                <li>Building closures</li>
                <li>Labour disputes</li>
                <li>Platform failures</li>
                <li>Other emergencies</li>
              </ul>
              <p>Placeonix will take reasonable steps to resume or reschedule affected services.</p>
            </>
          ),
        },
        {
          heading: "34. Complaints and Grievances",
          body: (
            <>
              <p>
                Students should first raise concerns with Placeonix through
                the official contact details below.
              </p>
              <p>Please include:</p>
              <ul>
                <li>Your full name</li>
                <li>Registered telephone number or email</li>
                <li>Course and batch</li>
                <li>Payment or receipt details, where relevant</li>
                <li>A clear description of the concern</li>
                <li>The resolution requested</li>
              </ul>
              <p>
                Placeonix will review the complaint and attempt to respond
                within a reasonable period.
              </p>
              <p>
                Nothing in these Terms prevents a consumer from exercising
                rights available under applicable consumer-protection law.
              </p>
            </>
          ),
        },
        {
          heading: "35. Governing Law and Jurisdiction",
          body: (
            <>
              <p>These Terms are governed by the laws of India.</p>
              <p>
                Subject to any mandatory consumer forum or statutory
                jurisdiction available under applicable law, courts of
                competent jurisdiction in Hyderabad, Telangana, will have
                jurisdiction over disputes relating to these Terms or
                Placeonix services.
              </p>
              <p>
                Before commencing formal proceedings, both parties should
                make a reasonable attempt to resolve the matter through
                written communication.
              </p>
            </>
          ),
        },
        {
          heading: "36. Changes to These Terms",
          body: (
            <>
              <p>
                Placeonix may update these Terms to reflect changes in
                services, technology, operations or legal requirements.
              </p>
              <p>
                The updated version will be published on the website with a
                revised &ldquo;Last Updated&rdquo; date.
              </p>
              <p>
                Material changes affecting an existing paid enrolment will
                not ordinarily be applied retrospectively in a manner that
                unfairly removes confirmed benefits.
              </p>
              <p>
                Continued use of the website or services after an update
                constitutes acceptance of the revised Terms, where legally
                permitted.
              </p>
            </>
          ),
        },
        {
          heading: "37. Severability",
          body: (
            <>
              <p>
                If any provision of these Terms is held to be invalid or
                unenforceable, the remaining provisions will continue to
                apply.
              </p>
              <p>
                The invalid provision will be interpreted or modified only to
                the minimum extent necessary to make it lawful and
                enforceable.
              </p>
            </>
          ),
        },
        {
          heading: "38. No Waiver",
          body: (
            <p>
              Failure by Placeonix to immediately enforce a provision does
              not waive its right to enforce that provision later.
            </p>
          ),
        },
        {
          heading: "39. Entire Agreement",
          body: (
            <>
              <p>These Terms, together with the applicable:</p>
              <ul>
                <li>Admission confirmation</li>
                <li>Fee communication</li>
                <li>Refund and Cancellation Policy</li>
                <li>Privacy Policy</li>
                <li>Internship or project agreement</li>
                <li>Placement agreement</li>
                <li>Any other officially signed document</li>
              </ul>
              <p>
                form the agreement between the student and Placeonix
                regarding the relevant service.
              </p>
              <p>
                Where a separately signed agreement expressly conflicts with
                these general Terms, the separately signed agreement will
                apply to the extent of that conflict.
              </p>
            </>
          ),
        },
        {
          heading: "40. Contact Information",
          body: (
            <>
              <p>For questions, complaints or requests relating to these Terms, contact:</p>
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
      ]}
    />
  );
}
