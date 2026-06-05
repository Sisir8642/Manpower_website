"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const categories = ["All", "Workers", "Employers", "Process", "Support"];

const faqs = [
  {
    q: "What services does Electra Global Recruitment Pvt. Ltd. provide?",
    a: "Electra provides ethical, transparent, and compliance-focused foreign employment recruitment services. We support global employers, migrating workers, and relevant stakeholders throughout the recruitment cycle — from consultation and demand processing to candidate selection, deployment, grievance support, and post-employment coordination.",
    category: "All",
  },
  {
    q: "How can I apply for an overseas job through Electra?",
    a: "Interested candidates can review available vacancies published on Electra's Available Jobs section, visit our office, contact our recruitment team, or submit their details through the official application channel mentioned in the vacancy notice.",
    category: "Workers",
  },
  {
    q: "Are the job vacancies published by Electra genuine?",
    a: "Yes. Electra publishes only those employment demands that have been officially received, reviewed, and released for recruitment through the applicable process. We are committed to sharing accurate and transparent job information with candidates.",
    category: "Workers",
  },
  {
    q: "What information is provided before I apply for a job?",
    a: "Candidates are informed about the destination country, job position, employer details where applicable, salary, benefits, working hours, contract period, required qualification or experience, recruitment process, and other key terms and conditions before proceeding.",
    category: "Workers",
  },
  {
    q: "Does Electra explain the employment contract before deployment?",
    a: "Yes. Electra clearly explains the major terms of the employment contract, including job duties, salary, benefits, accommodation where applicable, working hours, leave provisions, and contract duration, so that workers can make informed decisions.",
    category: "Workers",
  },
  {
    q: "What documents are generally required for overseas employment?",
    a: "The required documents may vary by country and job type, but commonly include a valid passport, photographs, educational or skill-related documents where required, experience documents where applicable, medical reports, police or background documents if required, and other papers specified for the recruitment process.",
    category: "Process",
  },
  {
    q: "Does Electra assist with interviews and trade tests?",
    a: "Yes. Electra coordinates physical or virtual interviews, trade tests, practical assessments, and employer selection procedures as required by the job demand and employer preference.",
    category: "Process",
  },
  {
    q: "Does Electra support visa and labour approval processing?",
    a: "Yes. Electra assists selected candidates with the relevant steps related to visa documentation, medical examination coordination, orientation, Nepal Government labour approval, travel preparation, and final deployment coordination.",
    category: "Process",
  },
  {
    q: "What kind of support does Electra provide to employers?",
    a: "Electra supports employers through initial consultation, recruitment process briefing, due diligence coordination, workforce requirement planning, candidate sourcing, selection support, embassy documentation, deployment management, and post-employment follow-up.",
    category: "Employers",
  },
  {
    q: "Does Electra follow ethical recruitment practices?",
    a: "Yes. Electra is committed to fairness, transparency, worker protection, accurate job disclosure, responsible communication, and compliance with Nepal's foreign employment framework and internationally recognized ethical recruitment principles.",
    category: "All",
  },
  {
    q: "What happens after a worker reaches the destination country?",
    a: "Electra provides post-deployment follow-up and coordination through physical or virtual communication where relevant. This may include confirming safe arrival, supporting communication between employer and worker, and assisting with early-stage concerns within Electra's role.",
    category: "Workers",
  },
  {
    q: "How can I report a complaint or grievance?",
    a: "Grievances can be reported through multiple channels, including dedicated grievance email, mobile or hotline number, suggestion box at the office, in-person reporting, website grievance form, written complaint submission, or official messaging platforms.",
    category: "Support",
  },
  {
    q: "Will my grievance be kept confidential?",
    a: "Yes. Electra aims to handle grievances with confidentiality, fairness, seriousness, and non-retaliation principles. Complaints are reviewed carefully and escalated internally where necessary for appropriate action.",
    category: "Support",
  },
  {
    q: "Which countries does Electra serve?",
    a: "Electra serves employers and recruitment opportunities across regions including the Middle East/Gulf countries (UAE, Qatar, Saudi Arabia, Kuwait, Oman, Bahrain), Malaysia, Japan, Maldives, Mauritius, Cyprus, Slovenia, and other approved or emerging destinations where responsible employers require Nepali human resources.",
    category: "All",
  },
  {
    q: "How can global employers partner with Electra?",
    a: "Employers may contact Electra through official communication channels to schedule a physical or virtual consultation. Our team will explain Nepal's recruitment process, understand workforce needs, discuss due diligence and documentation requirements, and guide the next steps for partnership development.",
    category: "Employers",
  },
];

function AccordionItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 40}>
      <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-blue-400/40 bg-blue-400/5" : "border-slate-800 bg-[#EFF6FE] hover:border-slate-700"}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left focus:outline-none"
        >
          <span className={`font-semibold text-sm leading-snug transition-colors duration-200 ${open ? "text-blue-400" : "text-black"}`}>
            {faq.q}
          </span>
          <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${open ? "border-blue-400 text-blue-400 rotate-45" : "border-slate-700 text-slate-400"}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </button>
        <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
          <p className="px-6 pb-6 text-black text-sm leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((f) => {
    const matchCat = activeCategory === "All" || f.category === activeCategory;
    const matchSearch = f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="bg-[#E1F1E6]  font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-8 px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
       
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
        
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5">
           <span className="text-emerald-700"> Frequently</span> Asked <span className="bg-red-600 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-black leading-relaxed mb-10">
            Clear, practical answers to common queries from workers, employers, and stakeholders.
            Can't find what you need? Contact us directly.
          </p>

         
      
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${activeCategory === cat
                  ? "bg-[#EFF6FE] border-blue-400/40 text-blue-400 text-black"
                  : "bg-[#EFF6FE] border-slate-800 text-black hover:border-slate-600 hover:text-black"
                }`}
            >
              {cat}
              <span className="ml-2 text-xs opacity-50 font-normal">
                {cat === "All" ? faqs.length : faqs.filter((f) => f.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <AccordionItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-black">
            <div className="text-4xl mb-4">🔍</div>
            <p className="font-semibold text-black mb-1">No results found</p>
            <p className="text-sm">Try a different keyword or browse all categories.</p>
          </div>
        )}

      </section>
    </main>
  );
}