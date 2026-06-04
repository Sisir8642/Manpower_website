import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    heading: "General Information Only",
    content: (
      <p>
        The website content — including service descriptions, country coverage, job notices, FAQs, blogs,
        news, and guidance materials — is intended to provide a general understanding of Electra's
        activities and foreign employment-related processes. It should not be treated as a substitute for
        official government notices, legal advice, embassy instructions, or case-specific professional
        guidance. Official foreign employment information and job-related verification may also be
        available through the Department of Foreign Employment's public platforms.
      </p>
    ),
  },
  {
    heading: "Job Vacancy and Demand Information",
    content: (
      <>
        <p>
          Electra may publish available overseas job demands and recruitment notices through its website.
          While every effort will be made to share information responsibly, job availability, worker
          numbers, interview dates, salary packages, benefits, selection criteria, and processing timelines
          may be revised, extended, suspended, or closed depending on employer decisions, official
          approvals, regulatory requirements, and destination-country procedures.
        </p>
        <div className="mt-4 bg-[#F1F6FE] border-black rounded-xl p-4">
          <p className="text-red-600 font-semibold text-xs mb-1">Important Notice</p>
          <p>
            Publication of a vacancy on the website does not automatically guarantee selection, visa
            issuance, labour approval, or overseas deployment.
          </p>
        </div>
      </>
    ),
  },
  {
    heading: "No Guarantee of Employment or Selection",
    content: (
      <p>
        Submission of an application, CV, personal details, inquiry, or supporting documents through the
        website does not create any automatic right to employment, interview participation, visa approval,
        or deployment. Final recruitment outcomes depend on the employer's selection decision, candidate
        eligibility, documentation status, medical fitness, government approval, and applicable legal
        procedures.
      </p>
    ),
  },
  {
    heading: "Accuracy and Updates",
    content: (
      <p>
        Electra works to keep website information clear and current. However, there may occasionally be
        typographical errors, delayed updates, technical inaccuracies, or changes occurring after
        publication. Visitors are encouraged to contact Electra directly through official communication
        channels for confirmation before making important employment, travel, documentation, or financial
        decisions.
      </p>
    ),
  },
  {
    heading: "External Links and Third-Party Content",
    content: (
      <p>
        This website may include links or references to government portals, embassies, social media pages,
        external publications, or third-party platforms for user convenience. Electra does not control and
        is not responsible for the accuracy, availability, policies, or content of external websites.
      </p>
    ),
  },
  {
    heading: "Personal Information and User Submissions",
    content: (
      <p>
        Users are responsible for ensuring that any information or documents submitted through the website
        are true, accurate, complete, and lawfully provided. Electra will handle personal information
        submitted through its official channels in connection with legitimate recruitment, communication,
        grievance review, or service-related purposes, with due regard for privacy and confidentiality
        under applicable principles.
      </p>
    ),
  },
  {
    heading: "Grievance and Communication Disclaimer",
    content: (
      <p>
        Electra welcomes complaints, suggestions, and grievances through its designated reporting
        channels. While every grievance will be reviewed in good faith, submission of a complaint does
        not by itself guarantee a specific outcome. Resolution may depend on available evidence, the
        nature of the issue, employer involvement, regulatory procedures, and Electra's scope of
        responsibility.
      </p>
    ),
  },
  {
    heading: "Limitation of Liability",
    content: (
      <p>
        Electra Global Recruitment Pvt. Ltd. shall not be held liable for any direct or indirect loss,
        inconvenience, misunderstanding, or decision made solely on the basis of general information
        published on this website — especially where the user has not sought direct confirmation from
        Electra or relevant official authorities.
      </p>
    ),
  },
  {
    heading: "Right to Modify Website Content",
    content: (
      <p>
        Electra reserves the right to update, revise, remove, or modify any website content, notice,
        service description, vacancy announcement, or policy statement at any time without prior notice,
        as required by business needs, regulatory changes, or operational updates.
      </p>
    ),
  },
  {
    heading: "Contact for Verification",
    content: (
      <p>
        Website visitors are encouraged to use the information provided as an initial reference and to
        contact Electra directly for verified, case-specific clarification wherever necessary.
        Email:{" "}
        <a href="mailto:contacts.electraglobal@gmail.com" className="text-black hover:underline">
          contacts.electraglobal@gmail.com
        </a>
        . Office: Sinamangal-9, Airport, Kathmandu, Nepal. Working Hours: Sunday–Friday, 9:30 AM–5:30 PM.
      </p>
    ),
  },
];

export default function DisclaimerPage() {
  return (
<<<<<<< HEAD
  <LegalPageLayout
=======
    <LegalPageLayout
>>>>>>> e0539123faa2b71c65fc0cd51e21d714a4433c33
  badge="Legal"
  title="Disclaimer"
  subtitle="Important information about the scope, accuracy, and limitations of content published on the Electra Global Recruitment official website."
  lastUpdated="2025"
  sections={sections}
  relatedLinks={[
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Contact Us", href: "/contact" },
  ]}
/>
  );
}