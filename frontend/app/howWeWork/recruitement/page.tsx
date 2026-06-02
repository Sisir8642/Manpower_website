"use client";

import { div } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";

const recruitmentSteps = [
  {
    step: "01",
    title: "Due Diligence & Service Agreement",
    desc: "Electra conducts thorough due diligence of employers and formalizes service agreements to ensure transparency, legal compliance, and mutual accountability.",
    icon: "📝",
  },
  {
    step: "02",
    title: "Embassy Documentation & Demand Attestation",
    desc: "All demand letters and required documents are prepared and authenticated through relevant embassies to ensure legitimacy and regulatory compliance.",
    icon: "📂",
  },
  {
    step: "03",
    title: "Pre-Labor Approval",
    desc: "Necessary approvals are secured from the Department of Foreign Employment and relevant authorities to initiate the recruitment process lawfully.",
    icon: "🏛️",
  },
  {
    step: "04",
    title: "Job Advertisement & Candidate Selection",
    desc: "Vacancies are advertised, followed by systematic screening, skill testing, and interviews to identify and select the most qualified candidates.",
    icon: "📢",
  },
  {
    step: "05",
    title: "Medical & Visa Processing",
    desc: "Electra facilitates medical examinations and manages visa processing in accordance with host country regulations and employer requirements.",
    icon: "🏥",
  },
  {
    step: "06",
    title: "Orientation & Contract Signing",
    desc: "Pre-departure orientation is conducted to prepare candidates, along with proper briefing and signing of employment contracts.",
    icon: "👥",
  },
  {
    step: "07",
    title: "Candidate Mobilization & Placement",
    desc: "Efficient coordination of travel and deployment ensures timely mobilization and successful placement of candidates at designated job locations.",
    icon: "✈️",
  },
  {
    step: "08",
    title: "Post-Deployment Support",
    desc: "Electra provides ongoing support and follow-up services to ensure worker welfare, employer satisfaction, and long-term engagement.",
    icon: "📞",
  },
];

function useInView(threshold = 0.1) {
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

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const RecruitmentProcedure = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#223772] text-white">        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 xl:py-32 text-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-white/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              13 LOCATIONS TO SERVE YOU
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Our Locations
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find your nearest Fast n&apos; Friendly store. Proudly serving Springfield, Ozark, Bolivar and surrounding areas with quick stops, great deals, and friendly faces.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(225 241 230)"/>
          </svg>
        </div>
      </section>
    <div className="bg-[#E1F1E6] text-slate-900 font-sans min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        
        <FadeIn className="text-center mb-20">
         
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Recruitment <span className="text-emerald-700">Process</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-700 mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-slate-800 font-semibold max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
            Electra Global Recruitment Pvt. Ltd. (Electra) follows a comprehensive, end-to-end recruitment 
            process designed to connect qualified interested Nepalese talent with global employment 
            opportunities through a transparent, ethical, and compliant approach. From candidate sourcing 
            and documentation to final placement and mobilization, Electra ensures efficient, reliable, and 
            employer’s required workforce solutions.
          </p>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-600 via-blue-400 to-red-500 hidden sm:block transform md:-translate-x-1/2 opacity-40" />

          <div className="space-y-12 md:space-y-8">
            {recruitmentSteps.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <div 
                  key={s.step} 
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full border-4 border-[#c5eace] bg-emerald-700 shadow-md transform -translate-x-1/2 z-20 hidden sm:block" />

                  <div className="w-full md:w-[46%] pl-16 sm:pl-20 md:pl-0">
                    <FadeIn delay={i * 50}>
                      <div className="group bg-blue-50/70 border border-blue-200 rounded-3xl p-6 shadow-sm hover:border-emerald-600/30 hover:bg-white transition-all duration-300 relative">
                        
                        <div className="absolute -left-12 sm:-left-16 md:-left-4 top-6 md:top-1/2 md:-translate-y-1/2 transform md:translate-x-0 w-10 h-10 rounded-xl bg-white border border-blue-200 shadow-inner flex items-center justify-center font-black text-xs text-slate-950 group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-800 transition-all">
                          {s.step}
                        </div>

                        <div className="flex items-center gap-3 mb-3 pl-2 md:pl-6">
                          <span className="text-xl filter drop-shadow-sm">{s.icon}</span>
                          <h3 className="text-slate-950 font-black text-sm sm:text-base tracking-tight group-hover:text-emerald-700 transition-colors">
                            {s.title}
                          </h3>
                        </div>

                        <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed pl-2 md:pl-6">
                          {s.desc}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  <div className="hidden md:block w-[46%]" />

                </div>
              );
            })}
          </div>
        </div>

        <FadeIn delay={450}>
          <div className="mt-20 bg-white/40 border border-blue-200/50 rounded-2xl p-6 max-w-3xl mx-auto text-center shadow-sm">
            <p className="text-emerald-900 font-black text-xs sm:text-sm tracking-wider uppercase">
              System Alignment Status: Fully Verified
            </p>
            <p className="text-slate-600 font-medium text-xs mt-1.5">
              This system sequence operates in binding coordination with the Ministry of Labor, Employment and Social Security, Nepal.
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
    </div>
  );
};

export default RecruitmentProcedure;