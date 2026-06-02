"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "15+", label: "Years of Industry Experience" },
  { number: "3", label: "Skill Levels Served" },
  { number: "100%", label: "Regulatory Compliance" },
  { number: "∞", label: "Global Opportunities" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
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

export default function AboutPage() {
  return (
    <main className="bg-[#E1F1E6] text-slate-900 font-sans overflow-x-hidden min-h-screen">
      
      <section className="relative pt-20 pb-12 px-6 sm:px-8">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 border border-red-600/20 bg-red-500/10 text-red-700 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            Company Registration No. 1850/082/083
          </div>

          <h1 className="text-4xl sm:text-6xl font-black leading-[1.1] tracking-tight mb-4 text-slate-950">
            Electra{" "}
            <span className="bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
              Global
            </span>
            <br />
            <span className="text-slate-700 text-2xl sm:text-4xl font-light tracking-widest block mt-2">
              Recruitment
            </span>
          </h1>

          <p className="text-base sm:text-lg text-red-600 font-bold italic mb-6 tracking-wide">
            "We Connect Talent"
          </p>

          <p className="text-slate-800 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-semibold">
            Electra Global Recruitment Pvt. Ltd. is a legally registered foreign employment recruitment agency in Nepal, operating under Company Registration No. 1850/082/083. The company is established with a clear vision to connect Nepalese talent with global employment opportunities and is led by a team of highly experienced professionals with over 15 years of expertise in the foreign employment sector.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 pt-8 max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <FadeIn>
            <div className="space-y-1 mb-6">
              <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight text-slate-950">
                Who We <span className="text-emerald-700">Are</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm font-medium">
              <p>
                With strong industry experience and an expanding global network, Electra specializes in sourcing and mobilizing skilled, semi-skilled, and professional Nepalese workforce for reputable international employers. We ensure the right talent is matched with the right opportunity through a structured, transparent, and efficient recruitment process.
              </p>
              <p>
                All recruitment activities are carried out in full compliance with the labor laws and regulations of Nepal and destination countries, promoting ethical, safe, and responsible migration practices. Our approach is guided by strong values of integrity, accountability, and professionalism.
              </p>
              <p>
                Electra Global prioritizes the dignity, safety, and welfare of workers while delivering efficient, compliant, and high-quality human resource solutions to employers. Supported by a robust management system, the company is committed to maintaining the highest standards of quality, transparency, and continuous improvement.
              </p>
              <p className="text-slate-950 font-bold border-l-2 border-emerald-700 pl-3 mt-4 italic">
                We strive to build long-term global partnerships based on trust, reliability, and mutual success creating sustainable opportunities for workers and delivering value to employers worldwide.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 gap-4 bg-white/20 p-4 rounded-3xl border border-white/30 shadow-inner">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-5 hover:border-emerald-600/40 hover:bg-white transition-all duration-300 group shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-black text-emerald-700 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-800 text-[11px] sm:text-xs mt-1.5 leading-snug font-extrabold tracking-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>
      
    </main>
  );
}
