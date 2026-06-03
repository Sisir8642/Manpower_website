import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    heading: "Acceptance of Terms",
    content: (
      <p>
        By using this website, you acknowledge that you have read, understood, and agreed to these Terms
        and Conditions. If you do not agree with any part of these terms, you are advised not to use the
        website or submit information through it.
      </p>
    ),
  },
  {
    heading: "Purpose of the Website",
    content: (
      <p>
        This website is operated to provide official information about Electra Global Recruitment Pvt.
        Ltd., including its services, recruitment practices, available job notices, countries served,
        grievance support, stakeholder engagement, news, blogs, gallery updates, and contact details. The
        website is intended to support transparent communication and public access to company-related
        information.
      </p>
    ),
  },
  {
    heading: "Information on Available Jobs",
    content: (
      <>
        <p>
          Electra may publish overseas employment opportunities, demand notices, vacancy announcements, and
          recruitment-related updates through the Available Jobs section of this website. Such notices are
          shared for public information based on demands received, reviewed, and released for recruitment
          through the applicable process.
        </p>
        <p className="mt-3">
          Job seekers are encouraged to carefully review all published details — including job position,
          destination country, salary, benefits, required qualifications, application deadlines, and other
          relevant conditions — before applying. Final selection, visa issuance, labour approval, and
          deployment remain subject to employer decisions, applicable government procedures, and
          destination-country requirements.
        </p>
      </>
    ),
  },
  {
    heading: "No Guarantee of Employment",
    content: (
      <p>
        Submission of an application, CV, registration form, inquiry, or supporting document through this
        website does not guarantee job placement, interview selection, visa approval, or overseas
        deployment. Recruitment outcomes depend on factors such as employer requirements, candidate
        qualifications, interview performance, legal procedures, and approval processes.
      </p>
    ),
  },
  {
    heading: "Accuracy of Information",
    content: (
      <p>
        Electra makes reasonable efforts to ensure that the information published on this website is
        accurate, updated, and presented in good faith. However, recruitment details, job demands, legal
        procedures, timelines, destination-country requirements, and service-related information may change
        from time to time. Visitors are encouraged to verify important information through Electra's
        official communication channels before making decisions.
      </p>
    ),
  },
  {
    heading: "User Responsibility",
    content: (
      <p>
        Users of this website agree to provide true, accurate, complete, and updated information when
        submitting inquiries, application forms, complaints, or any other communication. Users must not
        submit false documents, misleading details, unauthorized content, or information belonging to
        another person without proper authority.
      </p>
    ),
  },
  {
    heading: "Ethical Use of the Website",
    content: (
      <p>
        Visitors shall not use this website for unlawful, fraudulent, abusive, defamatory, misleading, or
        disruptive activities. Any attempt to misuse application forms, grievance channels, contact tools,
        website content, or recruitment information may result in restriction of access and, where
        applicable, referral to the relevant authority.
      </p>
    ),
  },
  {
    heading: "Intellectual Property and Website Content",
    content: (
      <p>
        All texts, logos, graphics, photographs, documents, designs, service descriptions, and other
        materials displayed on this website are the property of Electra Global Recruitment Pvt. Ltd.,
        unless otherwise stated. Such content may not be copied, reproduced, republished, modified,
        distributed, or used for commercial purposes without prior written permission from Electra.
      </p>
    ),
  },
  {
    heading: "Use of Images, Gallery, News and Blogs",
    content: (
      <p>
        The Gallery, News, and Blogs sections are intended to share Electra's official activities,
        institutional updates, awareness content, educational materials, and industry-related information.
        Content posted in these sections may not be altered, misrepresented, or used in a manner that
        damages the reputation of Electra, its partners, workers, employers, or stakeholders.
      </p>
    ),
  },
  {
    heading: "Personal Information and Data Submission",
    content: (
      <p>
        When users submit personal information through contact forms, job application forms, grievance
        forms, or other website channels, Electra will use such information for legitimate communication,
        recruitment-related processing, service delivery, grievance review, or official follow-up, as
        applicable. Electra will take reasonable steps to handle personal information responsibly and with
        due regard for privacy and confidentiality.
      </p>
    ),
  },
  {
    heading: "Grievance and Complaint Submissions",
    content: (
      <p>
        Electra provides multiple grievance reporting channels for workers, employers, and stakeholders.
        Complaints submitted through the website or other official channels should be factual, respectful,
        and related to Electra's services or recruitment activities. Electra will review grievances in good
        faith and may contact the complainant for clarification, supporting information, or follow-up action.
      </p>
    ),
  },
  {
    heading: "External Links",
    content: (
      <p>
        This website may contain links or references to third-party websites, government portals, social
        media pages, or external information sources for user convenience. Electra does not control such
        external platforms and is not responsible for their content, availability, privacy practices, or
        terms of use.
      </p>
    ),
  },
  {
    heading: "Limitation of Liability",
    content: (
      <p>
        Electra shall not be held responsible for any direct or indirect loss, inconvenience, or
        consequence arising solely from reliance on general website information, temporary website
        unavailability, typographical errors, third-party links, or changes in external legal or procedural
        requirements. Users are encouraged to contact Electra directly for case-specific clarification
        before taking important recruitment-related actions.
      </p>
    ),
  },
  {
    heading: "Compliance with Applicable Laws",
    content: (
      <p>
        Electra operates with a commitment to lawful, ethical, and responsible recruitment practices. Use
        of this website and related digital communication should be consistent with applicable laws,
        regulations, and official procedures in Nepal, including those relevant to electronic
        communication, consumer interests, privacy, and foreign employment services.
      </p>
    ),
  },
  {
    heading: "Changes to Terms and Conditions",
    content: (
      <p>
        Electra reserves the right to revise, update, or modify these Terms and Conditions at any time
        without prior notice. Updated terms will be published on this website, and continued use of the
        website after such changes will be considered acceptance of the revised terms.
      </p>
    ),
  },
  {
    heading: "Contact for Clarification",
    content: (
      <p>
        For questions, clarifications, or concerns regarding these Terms and Conditions, users may contact
        Electra Global Recruitment Pvt. Ltd. through the official contact details provided on the website.
        Email:{" "}
        <a href="mailto:contacts.electraglobal@gmail.com" className="text-amber-400 hover:underline">
          contacts.electraglobal@gmail.com
        </a>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="By accessing or using the Electra Global Recruitment website, you agree to comply with and be bound by the following terms. Please read them carefully."
      lastUpdated="2025"
      sections={sections}
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Grievance Support", href: "/grievance" },
      ]}
    />
  );
}