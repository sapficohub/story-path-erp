import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SITE_URL, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { canonicalUrl } from "@/components/seo";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
};

const sections: Section[] = [
  {
    title: "1. About Next-Gen ERP Solutions",
    paragraphs: [
      "Next-Gen ERP Solutions provides professional training, career guidance, certification guidance and placement-support services for freshers, working professionals and candidates returning to work after a career gap.",
      "In these Terms:",
    ],
    bullets: [
      "“Next-Gen ERP Solutions,” “Next-Gen,” “we,” “our” and “us” refer to Next-Gen ERP Solutions.",
      "“Student,” “candidate,” “user,” “you” and “your” refer to any person accessing our website or using our services.",
      "“Services” include demo sessions, counselling, training, course materials, projects, assessments, SAP server access and placement assistance.",
    ],
  },
  {
    title: "2. Eligibility",
    paragraphs: [
      "You must provide complete and accurate information when booking a demo, submitting an enquiry or enrolling in a course.",
      "Users below 18 years of age may use paid services only with the consent and supervision of a parent or legal guardian.",
      "We may reject or cancel an application where the information provided is false, incomplete, misleading or cannot be verified.",
    ],
  },
  {
    title: "3. Website Information",
    paragraphs: [
      "We make reasonable efforts to keep the information on our website accurate and updated. However, course content, duration, fees, trainers, schedules, batch timings, learning resources, software access and service features may change.",
      "Website information is provided for general guidance and does not constitute a guaranteed admission, certification, employment or salary offer.",
      "The final course details will be those communicated in writing at the time of enrolment.",
    ],
  },
  {
    title: "4. Demo Bookings and Career Counselling",
    paragraphs: [
      "Demo sessions and initial career-counselling sessions may be offered free of charge unless otherwise communicated.",
      "Submitting a demo or contact form does not create a paid service agreement or guarantee admission to a particular batch.",
      "Demo timings may be rescheduled due to trainer availability, technical issues, holidays or operational requirements. We will make reasonable efforts to inform registered participants.",
      "Career guidance is based on the information provided by the candidate. Candidates remain responsible for evaluating whether a course is suitable for their education, experience and career objectives.",
    ],
  },
  {
    title: "5. Course Enrolment",
    paragraphs: ["Enrolment is confirmed only after:"],
    numbered: [
      "The candidate has selected a course or training program;",
      "The applicable fees or agreed instalment have been received;",
      "Payment has been verified; and",
      "Enrolment confirmation has been issued by Next-Gen ERP Solutions.",
    ],
    bullets: [
      "A seat in a particular batch is not guaranteed until enrolment is confirmed.",
      "Course access is personal to the registered student and may not be transferred or shared without our written approval.",
    ],
  },
  {
    title: "6. Fees and Payments",
    paragraphs: [
      "Course fees, taxes, instalment options and payment deadlines will be communicated before enrolment.",
      "Students must use authorised payment methods and retain their payment receipt or transaction reference.",
      "Where instalments are permitted, failure to pay an instalment by the due date may result in the temporary suspension of classes, server access, course materials, assessments or placement services.",
      "We are not responsible for additional charges imposed by banks, card providers, payment gateways or other third-party payment services.",
    ],
  },
  {
    title: "7. Cancellations and Refunds",
    paragraphs: [
      "The refund policy communicated in the enrolment form, fee quotation, invoice or written course confirmation will apply to the student.",
      "Where no separate written refund policy has been provided:",
    ],
    bullets: [
      "A refund request must be submitted in writing before the scheduled batch commencement date.",
      "Registration, administrative, payment-gateway or other non-recoverable charges may be deducted.",
      "Once classes have commenced or course materials, recordings, login credentials or server access have been provided, fees will generally not be refundable.",
      "Failure to attend classes does not automatically qualify the student for a refund.",
      "If we cancel a paid course and the student does not accept an alternative batch, course credit or rescheduled program, the applicable unused course fee will be refunded.",
      "Any refund required under applicable law will be processed accordingly.",
      "Approved refunds will be returned through the original payment method or another verified method within a reasonable processing period.",
    ],
  },
  {
    title: "8. Course Schedules and Trainers",
    paragraphs: [
      "Batch schedules, trainers, class formats and session timings may change due to operational requirements, trainer availability, technical issues, public holidays or unforeseen circumstances.",
      "We may provide replacement trainers, recorded sessions, additional classes or alternative batch options where necessary.",
      "A change of trainer or reasonable schedule adjustment does not automatically qualify a student for a refund.",
      "Students must confirm the current batch schedule before making travel, accommodation, employment or other personal arrangements.",
    ],
  },
  {
    title: "9. Online Classes and Technical Requirements",
    paragraphs: ["Students attending online classes are responsible for having:"],
    bullets: [
      "A suitable computer or device;",
      "A stable internet connection;",
      "Required software and browser access;",
      "Audio and video equipment where required; and",
      "A suitable learning environment.",
      "We are not responsible for interruptions caused by a student’s device, internet connection, electricity supply, local network, software configuration or third-party platforms.",
    ],
  },
  {
    title: "10. SAP Server and Learning-Platform Access",
    paragraphs: [
      "SAP server, portal and learning-platform access is provided only for authorised educational and practice purposes.",
      "Students must not:",
    ],
    bullets: [
      "Share usernames, passwords or access credentials;",
      "Permit another person to use their account;",
      "Copy, export, delete or alter unauthorised data;",
      "Attempt to bypass security controls;",
      "Install unauthorised software;",
      "Use access for commercial, illegal or non-training purposes; or",
      "Interfere with the availability or security of the system.",
      "Access may be limited, suspended or withdrawn if these conditions are violated.",
      "Temporary server downtime may occur because of maintenance, upgrades, third-party service interruptions or technical issues. Reasonable efforts will be made to restore access, but uninterrupted availability is not guaranteed.",
    ],
  },
  {
    title: "11. Attendance, Assignments and Assessments",
    paragraphs: [
      "Students are expected to attend classes regularly, complete assignments and participate in projects, assessments, mock interviews and career-development activities.",
      "Eligibility for internal completion certificates, placement assistance or advanced sessions may depend on:",
    ],
    bullets: [
      "Minimum attendance;",
      "Fee clearance;",
      "Assignment completion;",
      "Assessment performance;",
      "Appropriate conduct; and",
      "Compliance with course requirements.",
      "A course-completion certificate does not represent an official certification issued by SAP SE unless explicitly stated in writing.",
    ],
  },
  {
    title: "12. Placement Support",
    paragraphs: [
      "Placement support may include resume preparation, career counselling, interview preparation, mock interviews, job-opening information and candidate-profile sharing.",
      "Placement support does not constitute a guaranteed job, interview, offer letter, salary, employer, location, joining date or promotion.",
      "Hiring decisions are made solely by employers and may depend on the candidate’s qualifications, skills, experience, communication, interview performance, background verification, documentation, market conditions and employer requirements.",
      "Students must provide truthful information in resumes, applications and interviews. Next-Gen ERP Solutions does not support proxy interviews, impersonation, falsified experience, forged documents, backdoor placements or any other fraudulent or unethical employment practice.",
      "We may suspend placement assistance where a candidate provides false information, behaves inappropriately, misses scheduled interviews without notice or violates employer requirements.",
    ],
  },
  {
    title: "13. Salary and Career Outcomes",
    paragraphs: [
      "Any salary figures, placement statistics, testimonials, success stories or career outcomes displayed on our website or promotional materials are examples of individual outcomes.",
      "Past results do not guarantee that every student will obtain the same employment, salary increase, promotion or career result.",
      "Individual outcomes vary based on education, prior experience, skills, attendance, effort, interview performance, job-market conditions and employer decisions.",
    ],
  },
  {
    title: "14. Intellectual Property and Course Materials",
    paragraphs: [
      "Website content, videos, class recordings, presentations, notes, assignments, projects, graphics, designs, software configurations, training methods and other materials provided by Next-Gen ERP Solutions are protected by applicable intellectual-property laws.",
      "Students receive a limited, personal, non-exclusive and non-transferable right to use authorised course materials for their own learning.",
      "Students may not, without written permission:",
    ],
    bullets: [
      "Record classes;",
      "Copy or redistribute materials;",
      "Sell, sublicense or publicly share course content;",
      "Upload materials to social-media, file-sharing or learning platforms;",
      "Conduct commercial training using our materials; or",
      "Remove copyright, branding or ownership notices.",
      "Unauthorised distribution may result in suspension of services and appropriate legal action.",
    ],
  },
  {
    title: "15. Student Conduct",
    paragraphs: [
      "Users and students must communicate respectfully with trainers, staff, employers and other students.",
      "Harassment, threats, discrimination, abusive behaviour, cheating, impersonation, unauthorised recording, disruption of classes or misuse of systems may result in suspension or termination without refund, subject to applicable law.",
    ],
  },
  {
    title: "16. Communications Consent",
    paragraphs: [
      "When you submit an enquiry, book a demo or enrol in a course, you authorise us to contact you regarding your request through telephone calls, email, SMS or WhatsApp.",
      "Operational communications may include demo confirmations, class schedules, payment information, course updates, interview information and support messages.",
      "Promotional communication will be sent in accordance with applicable consent and communication requirements. You may request that promotional messages stop by replying to the message or contacting us.",
    ],
  },
  {
    title: "17. Personal Information and Privacy",
    paragraphs: [
      "We may collect information such as your name, phone number, email address, educational qualification, employment status, course preference, payment information and communications with us.",
      "Personal information will be handled in accordance with our Privacy Policy and applicable law.",
      "Do not submit sensitive, confidential or unnecessary personal information through public website forms.",
      "Requests relating to personal information may be sent to hello@nextgenerpsolutions.com or +91 90003 33859.",
    ],
  },
  {
    title: "18. Third-Party Services and Links",
    paragraphs: [
      "Our website or services may use or link to third-party services, including payment gateways, video-conferencing platforms, messaging services, cloud services, job portals and external websites.",
      "Third-party services are governed by their own terms and privacy policies. We are not responsible for third-party content, availability, security, pricing or actions.",
      "A link to a third-party website does not necessarily constitute an endorsement.",
    ],
  },
  {
    title: "19. SAP Trademark and Affiliation Notice",
    paragraphs: [
      "SAP, SAP S/4HANA, ABAP and other SAP products and services mentioned on this website are trademarks or registered trademarks of SAP SE or its affiliates in Germany and other countries.",
      "Unless expressly stated through valid written authorisation, Next-Gen ERP Solutions is an independent training provider and is not sponsored, endorsed, certified, operated by or legally affiliated with SAP SE.",
      "References to SAP products are made solely to describe the subject matter of the training.",
    ],
  },
  {
    title: "20. Disclaimer of Warranties",
    paragraphs: [
      "Services are provided on an “as available” basis to the extent permitted by law.",
      "While we make reasonable efforts to provide high-quality training and support, we do not guarantee that:",
    ],
    bullets: [
      "The website or learning systems will always be uninterrupted or error-free;",
      "Every course will meet every student’s individual expectations;",
      "A student will pass an external examination;",
      "A student will receive an official SAP certification;",
      "A student will receive an interview or job offer; or",
      "A particular salary or career result will be achieved.",
      "Nothing in these Terms excludes rights that cannot lawfully be excluded.",
    ],
  },
  {
    title: "21. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Next-Gen ERP Solutions will not be liable for indirect, incidental, special or consequential losses arising from the use of the website or services, including loss of employment opportunity, income, business, data or anticipated benefit.",
      "Where liability cannot legally be excluded, our aggregate liability relating to a paid service will not exceed the amount paid by the affected student for that specific service, except where a different remedy is required by law.",
    ],
  },
  {
    title: "22. Suspension and Termination",
    paragraphs: ["We may suspend or terminate access to services where a user:"],
    bullets: [
      "Violates these Terms;",
      "Fails to make an agreed payment;",
      "Misuses learning systems or credentials;",
      "Infringes intellectual-property rights;",
      "Provides false or fraudulent information;",
      "Engages in unlawful or abusive conduct; or",
      "Creates a security or operational risk.",
      "Termination does not remove payment obligations already incurred or provisions intended to continue after termination.",
    ],
  },
  {
    title: "23. Events Beyond Our Control",
    paragraphs: [
      "We will not be responsible for delay or failure caused by circumstances reasonably beyond our control, including natural disasters, government restrictions, strikes, internet or power outages, epidemics, civil disturbances, cyber incidents or failures of third-party platforms.",
      "We may reschedule, modify, temporarily suspend or provide an alternative method of delivering affected services.",
    ],
  },
  {
    title: "24. Changes to These Terms",
    paragraphs: [
      "We may update these Terms to reflect changes to our services, business practices or legal requirements.",
      "The updated version will be published on the website with a revised “Last updated” date. Material changes affecting an existing paid enrolment will be communicated where reasonably necessary.",
      "Continued use of the website after an update constitutes acceptance of the updated Terms, subject to applicable law.",
    ],
  },
  {
    title: "25. Governing Law and Dispute Resolution",
    paragraphs: [
      "These Terms are governed by the laws of India.",
      "Users should first contact Next-Gen ERP Solutions and make a reasonable effort to resolve any concern directly.",
      "Subject to applicable consumer-protection rights and the jurisdiction of legally competent authorities, disputes will be subject to the courts having jurisdiction in Hyderabad, Telangana, India.",
    ],
  },
  {
    title: "26. Severability",
    paragraphs: [
      "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply.",
    ],
  },
  {
    title: "27. Contact Information",
    paragraphs: [
      "For questions, complaints or requests concerning these Terms, contact:",
      "Next-Gen ERP Solutions — Hyderabad, Telangana, India",
    ],
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    links: [{ rel: "canonical", href: canonicalUrl("/terms") }],
    meta: [
      { title: "Terms and Conditions | Next-Gen ERP Solutions" },
      {
        name: "description",
        content:
          "Read the terms for our website, SAP training, demo sessions, payments, refunds, server access and placement support at Next-Gen ERP Solutions.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Terms and Conditions | Next-Gen ERP Solutions" },
      { property: "og:url", content: `${SITE_URL}/terms` },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          url: `${SITE_URL}/terms`,
          name: "Terms and Conditions",
          description:
            "Terms governing the website, SAP training, demo sessions, payments, refunds, server access and placement support.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Terms and Conditions", url: `${SITE_URL}/terms` },
        ])}
      />
      <SiteLayout>
        <header className="bg-gradient-hero py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Legal
            </div>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">Terms and Conditions</h1>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-14">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-10">
            <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
              <p>
                Welcome to Next-Gen ERP Solutions. These Terms and Conditions govern your access to and use of our website,
                enquiry forms, demo sessions, training programs, learning resources, SAP server access, placement-support
                services and related services.
              </p>
              <p>
                By accessing our website, submitting an enquiry, booking a demo, enrolling in a course or using our services,
                you acknowledge that you have read, understood and agreed to these Terms and Conditions.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-extrabold text-foreground md:text-2xl">{section.title}</h2>
                  <div className="mt-3 space-y-3 text-[15px] leading-7 text-muted-foreground">
                    {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.numbered && (
                      <ol className="list-decimal space-y-1 pl-6">
                        {section.numbered.map((item) => <li key={item}>{item}</li>)}
                      </ol>
                    )}
                    {section.bullets && (
                      <ul className="list-disc space-y-1 pl-6">
                        {section.bullets.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                    {section.title === "27. Contact Information" && (
                      <address className="not-italic">
                        <strong className="text-foreground">Next-Gen ERP Solutions</strong><br />
                        Email: <a className="text-brand hover:underline" href="mailto:hello@nextgenerpsolutions.com">hello@nextgenerpsolutions.com</a><br />
                        Phone/WhatsApp: <a className="text-brand hover:underline" href="tel:+919000333859">+91 90003 33859</a><br />
                        Website: <a className="text-brand hover:underline" href={SITE_URL}>{SITE_URL}</a>
                      </address>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
      </SiteLayout>
    </>
  );
}
