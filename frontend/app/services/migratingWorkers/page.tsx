"use client";

import { useEffect, useRef, useState } from "react";

// ── Scroll-reveal helper ──────────────────────────────────────────────────────
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

const workerPhases = [
  {
    phase: "Pre-Employment",
    icon: "🌱",
    services: [
      { title: "Job Information & Counseling", desc: "Clear, accurate details on job title, salary, benefits, contract period, working hours, and destination-country requirements." },
      { title: "Fair Registration & Profile Development", desc: "Transparent registration collecting your qualifications, skills, and experience to match you with genuine employer demand." },
      { title: "Skill Matching & Selection Support", desc: "Screening based on employer needs, plus preparation support for interviews, trade tests, and practical assessments." },
      { title: "Contract Explanation & Informed Consent", desc: "Full explanation of employment contract, salary, duties, benefits, and conditions before any deployment formalities proceed." },
      { title: "Documentation, Medical & Visa Guidance", desc: "Step-by-step support for document verification, medical exams, visa requirements, and biometric or embassy procedures." },
      { title: "Labour Approval & Pre-Departure Formalities", desc: "Coordination of government labour approval, insurance requirements, welfare provisions, and other statutory formalities." },
      { title: "Pre-Departure Orientation", desc: "Guidance on rights, workplace behavior, occupational safety, cultural awareness, document security, and travel readiness." },
      { title: "Travel & Departure Assistance", desc: "Flight scheduling, travel document checking, departure briefing, and airport coordination support." },
    ],
  },
  {
    phase: "On-Employment",
    icon: "🌍",
    services: [
      { title: "Arrival & Settlement Follow-Up", desc: "Confirm safe arrival, reception arrangements, accommodation access, and initial onboarding status with both worker and employer." },
      { title: "Employer–Worker Communication Support", desc: "Bridge communication gaps through physical or virtual coordination, telephone follow-up, and structured dialogue." },
      { title: "Workplace Adjustment Assistance", desc: "Guidance on job role understanding, workplace rules, adaptation challenges, and contract-related clarification during the initial period." },
      { title: "Worker Welfare Follow-Up", desc: "Maintain regular follow-up to understand early employment experience, well-being, and adjustment status." },
      { title: "Grievance Communication & Support", desc: "Record, communicate, and coordinate worker concerns with the relevant employer or support mechanism for fair resolution." },
    ],
  },
  {
    phase: "Post-Employment",
    icon: "🔄",
    services: [
      { title: "Returnee Worker Follow-Up", desc: "Maintain contact with returning workers to understand their experience, key lessons, and any unresolved concerns." },
      { title: "Feedback & Service Improvement", desc: "Review returnee feedback to strengthen recruitment practices, improve counseling, and enhance ethical service delivery." },
      { title: "Future Opportunity Guidance", desc: "Guidance on updated job openings, re-migration possibilities, skill upgrading, and suitability for future recruitment." },
      { title: "Documentation & Record Clarification", desc: "Assistance with employment records, recruitment history, or documentation linked to previous deployment where needed." },
      { title: "Long-Term Worker Relationship", desc: "Maintain a respectful, long-term relationship rooted in fair treatment, transparency, dignity, and responsible migration." },
    ],
  },
];

const MigratingWorkers = () => {
  const [activeWorkerTab, setActiveWorkerTab] = useState(0);

  return (
    <div>
          <section
  className="relative overflow-hidden text-white bg-cover bg-center md:h-[60vh]"
  style={{ backgroundImage: "url('/images/servicess/migrate.jpg')" }}
>
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 xl:py-32 text-center">
    <div className="text-center">
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
        style={{
          color: "#1d4ed8",
          WebkitTextStroke: "2px white",
        }}
      >
        Services For Migrating Workers
      </h1>
     
    
    </div>
  </div>

  {/* FIXED SVG */}
  <div className="absolute bottom-[-1px] left-0 right-0">
    <svg
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full block"
    >
      <path
        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
        fill="rgb(225 241 230)"
      />
    </svg>
  </div>
</section>
    <div className="bg-[#E1F1E6] text-blue-600 font-sans pb-20 overflow-x-hidden">
      <section className="px-6 max-w-6xl mx-auto">
        
        {/* Header Block */}
        <FadeIn className="text-center mb-16">
        
          <h2 className="text-4xl sm:text-5xl font-black text-emerald-700 leading-tight tracking-tight mb-4">
            Worker <span className="text-red-600">Services</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-700 mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed text-[15px]">
            A safe, transparent, and well-managed migration journey — structured across three phases
            to ensure guidance before, during, and after your overseas employment.
          </p>
        </FadeIn>

        {/* Dynamic Navigation Tabs */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            {workerPhases.map((phase, i) => {
              const active = activeWorkerTab === i;
              return (
                <button
                  key={phase.phase}
                  onClick={() => setActiveWorkerTab(i)}
                  className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold border transition-all duration-300 shadow-sm ${
                    active
                      ? "bg-white text-emerald-700 border-emerald-600/30 scale-[1.02]"
                      : "bg-white/40 border-blue-200/60 text-blue-600 hover:bg-white/80 hover:text-slate-950"
                  }`}
                >
                  <span className="text-base">{phase.icon}</span>
                  {phase.phase} Support
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Phase Panel Grids */}
        {workerPhases.map((phase, i) => (
          <div key={phase.phase} className={activeWorkerTab === i ? "block" : "hidden"}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {phase.services.map((s, j) => (
                <FadeIn key={s.title} delay={j * 50}>
                  <div className="group bg-white/50 border border-blue-200/60 rounded-3xl p-6 h-full hover:border-emerald-600/30 hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-sm shadow-blue-900/5">
                    
                    {/* Minimalist Accent Accent Indicator */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                      <div className="h-[1px] w-6 bg-blue-200/80 group-hover:bg-emerald-600/30 transition-colors" />
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
          </div>
        ))}
        
      </section>
    </div>
    </div>
  );
};

export default MigratingWorkers;