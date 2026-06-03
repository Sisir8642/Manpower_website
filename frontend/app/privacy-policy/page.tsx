import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    heading: "Introduction",
    content: (
      <>
        <p>
          Electra Global Recruitment Pvt. Ltd. respects the privacy of all website visitors, job seekers,
          migrating workers, employers, partners, and stakeholders who interact with us through our official
          digital platforms.
        </p>
        <p>
          This Privacy Policy explains how Electra may collect, use, store, share, and protect personal
          information submitted through its website, online forms, official email, grievance channels, and
          other digital communication tools.
        </p>
        <p>
          Electra is committed to handling personal information responsibly, transparently, and only for
          legitimate business, recruitment, communication, and service-related purposes, with due regard
          to applicable privacy principles under Nepal's legal framework.
        </p>
      </>
    ),
  },
  {
    heading: "Information We May Collect",
    content: (
      <>
        <p className="font-semibold text-green-800 text-xs mb-2">From Job Seekers & Migrating Workers:</p>
        <ul className="list-none space-y-1.5 mb-4">
          {[
            "Full name, date of birth, gender, nationality, and contact details",
            "Address and permanent residence details",
            "Passport and identity-related information",
            "Educational background, training, work experience, and skills",
            "Preferred job category and destination country",
            "CV, photographs, certificates, and supporting documents",
            "Medical, visa, labour approval, and deployment-related information",
            "Grievances, feedback, or service-related communications",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-red-400/50 flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-green-800 text-xs mb-2">From Employers & Business Partners:</p>
        <ul className="list-none space-y-1.5 mb-4">
          {[
            "Company name and business profile",
            "Contact person's name, designation, email, and phone number",
            "Workforce demand details",
            "Recruitment-related documentation and correspondence",
            "Employer inquiries, service requests, and partnership communications",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-sky-400/50 flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-green-800 text-xs mb-2">From Website Visitors & Stakeholders:</p>
        <ul className="list-none space-y-1.5">
          {[
            "Name, email address, phone number, and inquiry details via contact forms",
            "Feedback, complaints, or grievance submissions",
            "Information submitted for events or stakeholder engagement",
            "Basic technical website usage information through cookies or analytics tools",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-emerald-400/50 flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    heading: "How We Collect Information",
    content: (
      <ul className="list-none space-y-1.5">
        {[
          "Website contact forms",
          "Job application or candidate registration forms",
          "Available Jobs application channels",
          "Grievance or complaint forms",
          "Email communication",
          "Telephone, WhatsApp, or other official messaging channels",
          "Physical or virtual consultations and meetings",
          "Documents submitted during recruitment or partnership processes",
          "Cookies or similar website technologies, where applicable",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-red-400/50 flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    heading: "Purpose of Collecting and Using Information",
    content: (
      <div className="space-y-4">
        {[
          { label: "Recruitment & Candidate Processing", desc: "To register candidates, assess job suitability, match workers with employer demands, coordinate interviews or trade tests, process required documentation, and support deployment procedures." },
          { label: "Employer Services & Partnership Management", desc: "To communicate with international employers, understand workforce requirements, conduct recruitment-related coordination, support due diligence, and manage ongoing business relationships." },
          { label: "Documentation, Compliance & Official Procedures", desc: "To support recruitment documentation, visa processing, labour approval, embassy-related requirements, government procedures, and other formal processes necessary for foreign employment services." },
          { label: "Communication & Service Support", desc: "To respond to inquiries, provide service updates, share requested information, address questions, and maintain communication with workers, employers, and stakeholders." },
          { label: "Grievance Handling & Resolution", desc: "To receive, review, investigate, communicate, and follow up on complaints, concerns, or grievances submitted through Electra's official channels." },
          { label: "Website Improvement & Security", desc: "To maintain website functionality, improve user experience, monitor technical performance, prevent misuse, and enhance the reliability of digital services." },
        ].map((item) => (
          <div key={item.label} className=" border border-blue-800 rounded-xl p-4 bg-[#F1F6FE]">
            <p className="text-green-800 font-semibold text-xs mb-1">{item.label}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    heading: "Sharing of Information",
    content: (
      <>
        <p>
          Electra will not sell personal information to third parties. However, information may be shared
          where necessary and appropriate for legitimate recruitment, compliance, service delivery, or legal
          purposes, including with:
        </p>
        <ul className="list-none space-y-1.5 mt-3">
          {[
            "Prospective or confirmed employers, where relevant to job application and recruitment processing",
            "Government authorities and foreign employment-related regulatory bodies",
            "Embassies, consulates, or destination-country authorities where required by procedure",
            "Medical, orientation, insurance, travel, or authorized service providers involved in deployment processing",
            "Legal, compliance, or professional advisors where reasonably necessary",
            "Relevant parties involved in grievance review and responsible resolution",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-red-400/50 flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Electra will seek to share only the information reasonably necessary for the relevant purpose and
          will handle such sharing with due care and confidentiality.
        </p>
      </>
    ),
  },
  {
    heading: "Consent and Accuracy of Information",
    content: (
      <p>
        By voluntarily submitting personal information through Electra's website or official communication
        channels, users acknowledge that the information may be used for the purpose for which it was
        provided. Users are responsible for ensuring that the information and documents they submit are
        true, accurate, complete, and updated.
      </p>
    ),
  },
  {
    heading: "Data Protection and Confidentiality",
    content: (
      <p>
        Electra takes reasonable organizational and operational measures to protect personal information
        from unauthorized access, misuse, loss, alteration, or disclosure. Access to sensitive or
        recruitment-related information is limited to authorized personnel and relevant processing
        requirements. While Electra works to safeguard submitted information, users should also take care
        when transmitting documents online and ensure that they use official Electra communication channels only.
      </p>
    ),
  },
  {
    heading: "Retention of Information",
    content: (
      <>
        <p>Electra may retain personal information for as long as reasonably necessary to:</p>
        <ul className="list-none space-y-1.5 mt-3">
          {[
            "Process recruitment-related services",
            "Maintain official records",
            "Respond to inquiries or grievances",
            "Meet legal, regulatory, audit, or compliance requirements",
            "Support future communication where appropriate and permitted",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-red-400/50 flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    heading: "Rights and Requests of Individuals",
    content: (
      <p>
        Individuals may contact Electra through its official channels to request clarification regarding
        information they have submitted, request correction of inaccurate details, or raise concerns about
        the handling of their personal information. Requests will be reviewed in good faith and addressed
        in line with Electra's operational capacity, legal responsibilities, and applicable procedures.
      </p>
    ),
  },
  {
    heading: "Cookies and Website Tracking",
    content: (
      <p>
        Electra's website may use cookies or similar technologies to support website functionality,
        understand visitor interaction, improve user experience, and manage technical performance. Details
        regarding cookie use, user choices, and related practices are explained separately in Electra's{" "}
        <a href="/cookie-policy" className="text-red-400 hover:underline">Cookies Policy</a>.
      </p>
    ),
  },
  {
    heading: "External Links",
    content: (
      <p>
        Electra's website may include links to government portals, embassies, social media pages, employer
        references, or other third-party websites. Electra is not responsible for the privacy practices,
        content, or security of external websites. Visitors are encouraged to review the privacy policies
        of such third-party platforms before sharing personal information with them.
      </p>
    ),
  },
  {
    heading: "Privacy of Grievance Submissions",
    content: (
      <p>
        Grievances, complaints, and concerns submitted through Electra's designated channels will be
        handled with seriousness, confidentiality, and fairness. Information provided in a grievance may
        be shared only with relevant persons or institutions where necessary to review, verify, escalate,
        or resolve the matter responsibly.
      </p>
    ),
  },
  {
    heading: "Children's Information",
    content: (
      <p>
        Electra's recruitment services are intended for individuals legally eligible for employment-related
        processes. The website is not designed to knowingly collect personal information from children for
        recruitment purposes. Where any such information is identified as improperly submitted, Electra
        may remove or disregard it as appropriate.
      </p>
    ),
  },
  {
    heading: "Updates to This Privacy Policy",
    content: (
      <p>
        Electra Global Recruitment Pvt. Ltd. may update or revise this Privacy Policy from time to time to
        reflect changes in legal requirements, recruitment practices, website functionality, or internal
        procedures. Any updated version will be published on the official website and will take effect from
        the date of posting.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    content: (
      <p>
        For questions, concerns, or requests related to this Privacy Policy or the handling of personal
        information, users may contact Electra Global Recruitment Pvt. Ltd. through the official contact
        details provided on the website or visit our office at Sinamangal-9, Airport, Kathmandu, Nepal.
        Email: <a href="mailto:contacts.electraglobal@gmail.com" className="text-red-400 hover:underline">contacts.electraglobal@gmail.com</a>
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How Electra Global Recruitment Pvt. Ltd. collects, uses, stores, and protects your personal information across all official digital platforms."
      lastUpdated="2025"
      sections={sections}
      relatedLinks={[
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Grievance Support", href: "/grievance" },
      ]}
    />
  );
}