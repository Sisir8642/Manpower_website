"use client";

import React, { useEffect, useRef, useState } from "react";

// Structured data mapping the exact .docx files provided by the client into logical legal categories
const documentCategories = {
  standard: {
    title: "Standard Global Requirements",
    subtitle: "Checklist of Required Documents (General Destinations)",
    description: "Standard statutory declarations and demand templates mandated by the Department of Foreign Employment, Government of Nepal.",
    groups: [
      {
        categoryName: "Principal Mandates",
        docs: [
          { name: "Demand Letter", file: "Demand Letter.docx", desc: "Official breakdown of vacancies, salary structures, and food/accommodation provisions." },
          { name: "Power of Attorney", file: "Power of attorney.docx", desc: "Legally authorizing Electra Global Recruitment to manage personnel selection & processing." },
          { name: "Demand Application Letter", file: "Demand Application Letter.docx", desc: "Formal request submitted to the embassy/ministry for deployment initialization." },
          { name: "Employment Contract", file: "Employment Contract.docx", desc: "The definitive tripartite operational agreement detailing worker protections and codes." },
        ]
      },
      {
        categoryName: "Compliance Agreements",
        docs: [
          { name: "Agency Agreement", file: "Agency Agreement.docx", desc: "Commercial terms, service guarantees, and procedural codes between employer and agency." },
          { name: "Letter of Undertaking", file: "Letter of Undertaking.docx", desc: "Corporate statement swearing absolute compliance with local labor parameters and welfare codes." },
          { name: "Assurance Note", file: "Assurance Note.docx", desc: "Formal guarantee confirming worker safety regulations, non-discrimination, and legal protection." },
        ]
      }
    ]
  },
  malaysia: {
    title: "Malaysia Special Protocol",
    subtitle: "Checklist of Required Documents - Malaysia",
    description: "Specific regulatory instruments adjusted to meet the rigorous zero-cost hiring mandates and structural auditing systems for Malaysia.",
    groups: [
      {
        categoryName: "Principal Mandates",
        docs: [
          { name: "Demand Letter (Malaysia Format)", file: "Demand Letter.docx", desc: "Tailored to KDN/Ministry variations with explicit sector details." },
          { name: "Power of Attorney (Attested)", file: "Power of attorney.docx", desc: "Formally verified by the Embassy of Nepal in Kuala Lumpur." },
          { name: "Demand Application Letter", file: "Demand Application Letter.docx", desc: "Standard statutory request formatted for Malaysian digital portals." },
          { name: "Employment Contract (Standard My)", file: "Employment Contract.docx", desc: "Compliant with Malaysia Employment Act and bilateral human rights protocols." },
        ]
      },
      {
        categoryName: "Compliance & Welfare Notes",
        docs: [
          { name: "Agency Agreement", file: "Agency Agreement.docx", desc: "Outlining recruitment processing fee frameworks under zero-cost standards." },
          { name: "Letter of Undertaking (Strict)", file: "Letter of Undertaking.docx", desc: "Binding corporate commitment to eradicate forced labor markers within supply chains." },
          { name: "Assurance Note (Welfare Guarantee)", file: "Assurance Note.docx", desc: "Explicit declaration tracking hostel standards, transportation, and medical insurance." },
        ]
      }
    ]
  }
};

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

const RequiredDocuments = () => {
  const [activeProtocol, setActiveProtocol] = useState<"standard" | "malaysia">("standard");
  const currentData = documentCategories[activeProtocol];

  return (
    <div className="bg-[#c5eace] text-slate-900 font-sans min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        
        <FadeIn className="text-center mb-16">
       
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Required Verification <span className="text-emerald-700">Documents</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-700 mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-slate-800 font-semibold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            To initiate and complete international recruitment pipelines smoothly, employers must furnish 
            the following authenticated templates. All items align with state licensing laws.
          </p>
        </FadeIn>

        <FadeIn delay={100} className="flex justify-center mb-12">
          <div className="bg-blue-50/70 border border-blue-200 p-1.5 rounded-2xl shadow-sm flex items-center gap-2 max-w-xl w-full">
            <button
              onClick={() => setActiveProtocol("standard")}
              className={`flex-1 text-center py-3 px-4 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 ${
                activeProtocol === "standard"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "bg-transparent text-slate-700 hover:text-emerald-700 hover:bg-white/50"
              }`}
            >
              Standard Checklist
            </button>
            <button
              onClick={() => setActiveProtocol("malaysia")}
              className={`flex-1 text-center py-3 px-4 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 ${
                activeProtocol === "malaysia"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "bg-transparent text-slate-700 hover:text-emerald-700 hover:bg-white/50"
              }`}
            >
              Malaysia Protocol Checklist
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 bg-white/50 border border-blue-200 rounded-3xl p-6 shadow-sm">
            <span className="text-[10px] font-black tracking-widest text-red-700 uppercase bg-red-500/10 border border-red-600/10 px-2.5 py-1 rounded">
              Active Folder Target
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-emerald-800 mt-4 mb-2 tracking-tight leading-tight">
              {currentData.title}
            </h3>
            <p className="text-slate-500 font-bold text-xs mb-4 italic">
              {currentData.subtitle}
            </p>
            <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed border-t border-blue-100 pt-4">
              {currentData.description}
            </p>
            
            <div className="mt-8 p-4 bg-blue-50/70 border border-blue-200 rounded-2xl text-[11px] text-slate-600 font-medium leading-relaxed">
              <strong>Processing Note:</strong> All original files must be printed on the corporate letterhead of the hiring enterprise, signed by executive directors, and stamped prior to dispatch.
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {currentData.groups.map((group, groupIdx) => (
              <FadeIn key={group.categoryName} delay={groupIdx * 100}>
                <div className="bg-blue-50/60 border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                  <h4 className="text-slate-900 font-black text-sm tracking-wider uppercase mb-5 border-b border-blue-100 pb-2">
                    {group.categoryName}
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {group.docs.map((doc) => (
                      <div
                        key={doc.name}
                        className="bg-white border border-blue-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-emerald-600/20 shadow-sm transition-all duration-300 group"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-base">📄</span>
                            <span className="text-slate-950 font-black text-sm sm:text-base tracking-tight group-hover:text-emerald-700 transition-colors">
                              {doc.name}
                            </span>
                          </div>
                          <p className="text-slate-600 text-xs font-medium max-w-xl leading-relaxed pl-6">
                            {doc.desc}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-1.5 self-start sm:self-center flex-shrink-0 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-xl font-mono text-[10px] text-slate-500 font-bold group-hover:bg-emerald-50 group-hover:text-emerald-800 group-hover:border-emerald-200 transition-all">
                          <span>DOCX</span>
                          <span className="opacity-45">&bull; Ready</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

        <FadeIn delay={300}>
          <div className="mt-16 text-center max-w-3xl mx-auto border-t border-blue-200/50 pt-10">
            <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed italic">
              * Legal templates for items like the <strong>Employment Contract.docx</strong> and <strong>Power of attorney.docx</strong> can be acquired directly via our communications unit or processed directly during drafting workshops. Additional embassy attestation procedures might apply based on modern ministry amendments.
            </p>
            <p className="text-slate-400 font-bold text-[10px] tracking-widest uppercase mt-6">
              Electra Global Recruitment &bull; Statutory Verification System v2.6
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default RequiredDocuments;