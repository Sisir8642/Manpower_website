"use client";

import { div } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";

const executiveManagement = {
  tier: "Board of Directors & Executive Management",
  roles: [
    "Board of Directors",
    "Chairperson",
    "Managing Director",
    "Recruitment & Operations Director",
    "Marketing Director",
  ],
};

const advisorsUnit = {
  tier: "Advisors",
  roles: ["Legal Advisor", "IT Advisor", "Finance Advisor"],
};

const coreDepartments = [
  {
    name: "Global Marketing & Client Relationship Dept.",
    details: "International positioning & corporate partnerships",
  },
  {
    name: "Recruitment & Talent Acquisition Dept.",
    details: "End-to-end sourcing, screening & vetting mechanics",
  },
  {
    name: "Human Resource Department & Compliance",
    details: "Ethical alignment, regulations & welfare validation",
  },
  {
    name: "Finance & Administration Dept.",
    details: "Corporate governance, processing operations & auditing",
  },
];

const hierarchicalFlow = ["Manager", "Executive", "Officer", "Office Assistant"];

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

const OrganizationalStructure = () => {
  return (
    <div>
         <section
  className="relative overflow-hidden text-white bg-cover bg-center md:h-[60vh]"
  style={{ backgroundImage: "url('/images/banner/org.jpg')" }}
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
        Organizational Structure
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
    <div className="bg-[#E1F1E6] text-slate-900 font-sans min-h-screen pb-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        
        <FadeIn className="text-center mb-20">
          <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-2">
            Operational Blueprint
          </p>
          
          <p className="text-slate-800 font-semibold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            A clear, professional, and accountable framework that ensures efficient management, 
            smooth coordination, and high-quality recruitment services across every department.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          <div className="lg:col-span-8">
            <FadeIn delay={100} className="h-full">
              <div className="bg-emerald-50/70 border-2 border-emerald-600/20 p-6 sm:p-8 rounded-3xl h-full shadow-sm shadow-emerald-900/5">
                <p className="text-emerald-800 text-xs font-extrabold tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  {executiveManagement.tier}
                </p>
                <div className="flex flex-col gap-3">
                  {executiveManagement.roles.map((role, idx) => (
                    <div
                      key={role}
                      className={`px-5 py-4 rounded-xl border font-black text-sm tracking-tight transition-all duration-300 ${
                        idx === 0
                          ? "bg-emerald-700 text-white border-emerald-800 text-center text-base shadow-sm"
                          : "bg-white text-slate-950 border-emerald-600/10 hover:border-emerald-600/30 pl-8 relative before:absolute before:left-4 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-emerald-600 before:rounded-full"
                      }`}
                    >
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4">
            <FadeIn delay={200} className="h-full">
              <div className="bg-red-50/60 border-2 border-red-600/10 p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between shadow-sm shadow-red-900/5">
                <div>
                  <p className="text-red-700 text-xs font-extrabold tracking-widest uppercase mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    {advisorsUnit.tier}
                  </p>
                  <div className="space-y-3">
                    {advisorsUnit.roles.map((role) => (
                      <div
                        key={role}
                        className="bg-white border border-red-600/10 hover:border-red-600/30 transition-colors px-5 py-4 rounded-xl text-slate-950 font-bold text-sm tracking-tight shadow-sm"
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-500/5 rounded-xl border border-red-600/10 text-xs text-red-700 font-medium leading-relaxed">
                  Provides strategic legal framework, financial accountability, and secure IT governance backing across all operations.
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        <FadeIn delay={300} className="mb-16">
          <div className="bg-blue-50/60 border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-sm shadow-blue-900/5">
            <p className="text-slate-500 font-extrabold uppercase tracking-wider text-[11px] mb-6 px-1">
              Core Operating Divisions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreDepartments.map((dept) => (
                <div
                  key={dept.name}
                  className="bg-white border border-blue-100 hover:border-emerald-600/30 rounded-2xl p-5 shadow-sm transition-all duration-300 group hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <h4 className="text-slate-950 font-black text-sm tracking-tight leading-snug mb-3 group-hover:text-emerald-700 transition-colors">
                    {dept.name}
                  </h4>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed">
                    {dept.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="bg-white/40 border border-blue-200/50 rounded-2xl p-6 max-w-4xl mx-auto shadow-sm">
            <p className="text-center text-emerald-800 text-xs font-extrabold tracking-widest uppercase mb-6">
              Hierarchical Staff Flow
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              {hierarchicalFlow.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="bg-white border border-blue-200 px-6 py-3 rounded-xl shadow-inner font-black text-slate-950 text-xs sm:text-sm tracking-wide min-w-[140px] text-center">
                    {step.toUpperCase()}
                  </div>
                  {idx < hierarchicalFlow.length - 1 && (
                    <div className="text-emerald-700 font-bold text-lg rotate-90 sm:rotate-0 transform transition-transform">
                      ➔
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={450}>
          <p className="text-center text-slate-600 font-medium text-xs mt-10">
            * Detailed systemic operations flow-chart matrices are available upon statutory request.
          </p>
        </FadeIn>

      </div>
    </div>
    </div>
  );
};

export default OrganizationalStructure;