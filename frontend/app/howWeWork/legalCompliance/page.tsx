"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const LegalCompliance = () => {
  return (
    <div className="bg-[#c5eace] text-slate-900 font-sans py-16 overflow-x-hidden">
      <section className="px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 space-y-6">
            <FadeIn>
              
              <h2 className="text-4xl sm:text-5xl font-black text-slate-950 leading-[1.1] tracking-tight">
                Legal Compliance &<br />
                <span className="text-emerald-700">Accreditation</span>
              </h2>
              <div className="w-12 h-1 bg-emerald-700 mt-4 mb-6 rounded-full" />
            </FadeIn>

            <FadeIn delay={100}>
              <div className="space-y-4 text-slate-800 font-medium leading-relaxed text-[15px]">
                <p>
                  Electra Global Recruitment Pvt. Ltd. is duly registered with the Government of Nepal
                  and legally authorized to operate as a foreign employment recruitment agency in
                  accordance with Nepal's prevailing company, labour, and foreign employment laws.
                </p>
                <p>
                  We conduct all operations in line with the legal and regulatory framework of Nepal,
                  including requirements related to responsible recruitment, worker protection,
                  documentation, transparency, and accountability.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5 w-full">
            <FadeIn delay={200}>
              <div className="bg-white/40 border border-blue-200/60 p-4 sm:p-6 rounded-3xl shadow-sm shadow-blue-900/5 space-y-3">
                <p className="text-slate-500 font-extrabold uppercase tracking-wider text-[11px] px-2 mb-1">
                  Official Registry Data
                </p>
                {[
                  { label: "Company Registration No.", value: "386754/82/83" },
                  { label: "Foreign Employment License No.", value: "1850/082/083" },
                  { label: "Issuing Authority", value: "Government of Nepal" },
                  { label: "Regulatory Framework", value: "Nepal Labour & Foreign Employment Laws" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 bg-blue-50/70 border border-blue-200/70 rounded-2xl px-5 py-4 hover:border-emerald-600/30 hover:bg-white transition-all duration-350 shadow-sm group"
                  >
                    <span className="text-slate-700 text-xs sm:text-sm font-bold tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-emerald-700 font-black text-xs sm:text-sm text-left sm:text-right group-hover:text-emerald-800 transition-colors">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
};

export default LegalCompliance;