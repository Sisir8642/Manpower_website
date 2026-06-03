import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    heading: "Introduction",
    content: (
      <>
        <p>
          This Cookies Policy explains how Electra Global Recruitment Pvt. Ltd. may use cookies and
          similar technologies on its official website. Cookies help us improve website functionality,
          understand how visitors interact with our pages, enhance user experience, and support secure
          and efficient access to online information and services.
        </p>
        <p className="mt-3">
          By continuing to use our website, users may encounter cookies that are necessary for the
          website to function. Where applicable, visitors will be given choices regarding optional
          cookies — such as analytics or preference-related cookies — through the website's cookie
          consent mechanism.
        </p>
      </>
    ),
  },
  {
    heading: "What Are Cookies?",
    content: (
      <>
        <p>
          Cookies are small text files that are stored on a user's device — such as a computer, mobile
          phone, or tablet — when they visit a website. These files help websites remember certain
          information about the visit, such as preferences, navigation patterns, session activity, or
          technical settings.
        </p>
        <p className="mt-3">
          Cookies may be placed directly by Electra's website or by authorized third-party services used
          to improve website performance, analytics, communication, or embedded content.
        </p>
      </>
    ),
  },
  {
    heading: "Why Electra May Use Cookies",
    content: (
      <div className="space-y-3">
        {[
          { label: "Essential Website Functionality", desc: "To ensure that the website works properly, loads securely, maintains basic navigation, and allows users to access important pages and online forms." },
          { label: "User Preference Management", desc: "To remember selected choices, such as language preferences, consent settings, or browsing preferences, where such features are enabled." },
          { label: "Website Performance & Analytics", desc: "To understand how visitors use the website, which pages are viewed most, how users navigate through the platform, and how website performance can be improved." },
          { label: "Form & Communication Support", desc: "To support smoother use of contact forms, job inquiry forms, grievance forms, and other interactive website features, where applicable." },
          { label: "Security & Fraud Prevention", desc: "To help detect unusual website activity, prevent misuse of digital forms, and support the safety and integrity of the platform." },
        ].map((item) => (
          <div key={item.label} className="bg-[#F1F6FE] border border-slate-800 rounded-xl p-4">
            <p className="text-green-600 font-semibold text-xs mb-1">{item.label}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    heading: "Types of Cookies We May Use",
    content: (
      <div className="space-y-3">
        {[
          { label: "Strictly Necessary Cookies", desc: "Essential for the proper operation of the website. They may support page navigation, secure access, submission of forms, and basic technical functionality." },
          { label: "Preference Cookies",  desc: "May remember user choices and settings to provide a more convenient and personalized browsing experience." },
          { label: "Analytics & Performance Cookies",  desc: "May help Electra understand website traffic, visitor behavior, page performance, and areas for improvement. Activated only in accordance with user consent settings." },
          { label: "Third-Party or Embedded Content Cookies",  desc: "Some pages may include embedded maps, videos, social media links, or external tools. These third-party services may use their own cookies per their respective policies." },
        ].map((item) => (
          <div key={item.label} className={`border rounded-xl p-4 bg-[#F1F6FE]`}>
            <p className={`font-semibold text-xs mb-1 ${
              item.color === "amber" ? "text-amber-400" :
              item.color === "sky" ? "text-sky-400" :
              item.color === "emerald" ? "text-emerald-400" :
              "text-green-600"
            }`}>{item.label}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    heading: "Cookie Consent and User Choice",
    content: (
      <>
        <p>Where required, Electra will provide users with a clear cookie notice or consent banner to manage optional cookies. Users may be able to:</p>
        <ul className="list-none space-y-1.5 mt-3">
          {[
            "Accept all optional cookies",
            "Reject non-essential cookies",
            "Manage cookie preferences by category",
            "Change or withdraw consent later, where such controls are available",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-black flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Consent for non-essential cookies should be informed, specific, and based on a clear
          affirmative choice — rather than being assumed from passive browsing.
        </p>
      </>
    ),
  },
  {
    heading: "Managing Cookies Through Browser Settings",
    content: (
      <>
        <p>Users may also manage, block, or delete cookies through their browser settings. Most web browsers allow users to:</p>
        <ul className="list-none space-y-1.5 mt-3">
          {[
            "View stored cookies",
            "Delete existing cookies",
            "Block future cookies",
            "Receive alerts before cookies are stored",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-black flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Please note that disabling certain cookies may affect website functionality, including the
          performance of forms, preference settings, or other interactive features.
        </p>
      </>
    ),
  },
  {
    heading: "Cookies and Personal Information",
    content: (
      <p>
        Cookies may, in certain cases, involve the collection of technical or behavioral information
        that can be linked to website use. Electra is committed to handling such information responsibly
        and in line with applicable privacy principles. For more information about how Electra collects,
        uses, and protects personal information, visitors should review the website's{" "}
        <a href="/privacy-policy" className="text-red-600 hover:underline">Privacy Policy</a>.
      </p>
    ),
  },
  {
    heading: "Third-Party Websites and Tools",
    content: (
      <p>
        Electra's website may contain links to or integrations with external websites and digital
        services — such as social media pages, maps, embedded videos, or online communication tools.
        These third parties may set cookies independently, and their practices are governed by their
        own cookie and privacy policies. Electra encourages users to review those policies when
        interacting with external platforms.
      </p>
    ),
  },
  {
    heading: "Updates to This Cookies Policy",
    content: (
      <p>
        Electra Global Recruitment Pvt. Ltd. may revise or update this Cookies Policy from time to
        time to reflect changes in website technology, regulatory expectations, service features, or
        cookie practices. Any updated version will be published on this website and will take effect
        from the date of posting.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    content: (
      <p>
        For questions or concerns regarding this Cookies Policy or the use of cookies on Electra's
        website, visitors may contact Electra through the official contact details provided on the
        website. Email:{" "}
        <a href="mailto:contacts.electraglobal@gmail.com" className="text-red-600 hover:underline">
          contacts.electraglobal@gmail.com
        </a>
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Cookie Policy"
      subtitle="How Electra Global Recruitment Pvt. Ltd. uses cookies and similar technologies on its official website — and how you can manage your preferences."
      lastUpdated="2025"
      sections={sections}
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Contact Us", href: "/contact" },
      ]}
    />
  );
}