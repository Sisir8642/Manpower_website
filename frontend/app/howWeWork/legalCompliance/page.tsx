"use client";

import { div } from "framer-motion/client";
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
    <div className="bg-[#E1F1E6] text-slate-900 font-sans py-16 overflow-x-hidden">
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
    </div>
  );
};

export default LegalCompliance;