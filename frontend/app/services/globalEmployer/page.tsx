"use client";

import { useEffect, useRef, useState } from "react";

const employerServices = [
  { step: "01", icon: "💬", title: "Initial Consultation & Briefing", desc: "We begin through meetings or virtual discussions to understand your workforce demand, timeline, and destination-country requirements — and brief you fully on Nepal's recruitment procedures." },
  { step: "02", icon: "🔎", title: "Employer Due Diligence & Partnership", desc: "Before partnering, we conduct a structured due diligence review of your company profile, employment conditions, benefits, and overall credibility of the opportunity." },
  { step: "03", icon: "📊", title: "Workforce Requirement Planning", desc: "We convert your manpower need into a clear recruitment-ready plan — confirming job titles, skill levels, wages, contract period, benefits, and expected deployment schedule." },
  { step: "04", icon: "👥", title: "Candidate Sourcing, Screening & Selection", desc: "We identify suitable candidates through ethical sourcing, verify credentials, and coordinate interviews, trade tests, or skill demonstrations per your preference." },
  { step: "05", icon: "📁", title: "Embassy Processing & Documentation", desc: "We handle demand letters, power of attorney, employment contracts, attestations, and embassy verification — ensuring your recruitment file is accurate and complete." },
  { step: "06", icon: "🛂", title: "Visa, Labour Approval & Deployment", desc: "We coordinate visa issuance, medical exams, pre-departure orientation, insurance, labour approval, and travel scheduling — keeping you informed at every step." },
  { step: "07", icon: "⚖️", title: "Ethical Recruitment & Compliance", desc: "We integrate ethical principles at every stage — fair communication, accurate job disclosure, worker protection, and full alignment with Nepal's foreign employment laws." },
  { step: "08", icon: "📞", title: "Post-Employment Follow-Up", desc: "After deployment we maintain contact with both employer and workers to support adjustment, onboarding concerns, and strengthen long-term employer–employee relationships." },
  { step: "09", icon: "🌐", title: "Long-Term Relationship Management", desc: "We aim to be your lasting workforce partner — reviewing past experiences, collecting performance feedback, and supporting future hiring cycles and pipeline development." },
];

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
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const GlobalEmployer = () => {
  return (
    <div className="bg-[#E1F1E6] text-slate-900 font-sans py-20 overflow-x-hidden">
      <section className="px-6 max-w-6xl mx-auto">
        
        {/* Header Block */}
        <FadeIn className="text-center mb-16">
          <p className="text-blue-600 text-xs sm:text-sm font-black tracking-[0.2em] uppercase mb-3">
            For Global Employers
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-green-600 leading-tight tracking-tight mb-4">
            Employer <span className="text-red-600">Services</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-700 mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed text-[15px]">
            End-to-end, ethical, and compliance-focused recruitment support — designed to build trust,
            ensure transparency, and facilitate a smooth recruitment journey from initial consultation
            to post-employment coordination.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employerServices.map((s, i) => (
            <FadeIn key={s.step} delay={i * 60}>
              <div className="group bg-white/50 border border-blue-200/60 rounded-3xl p-6 h-full hover:border-emerald-600/30 hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-sm shadow-blue-900/5">
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
                    {s.icon}
                  </div>
                  <span className="text-slate-400 font-black text-xl group-hover:text-blue-600/60 transition-colors duration-300">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-blue-600 font-extrabold text-base mb-2 group-hover:text-emerald-700 transition-colors duration-300 leading-snug">
                  {s.title}
                </h3>
                
                <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed">
                  {s.desc}
                </p>
                
              </div>
            </FadeIn>
          ))}
        </div>

      </section>
    </div>
  );
};

export default GlobalEmployer;