"use client";

import { useEffect, useRef, useState } from "react";

const countries = [
  {
    region: "Middle East / Gulf Region",
    flag: "🌙",
    color: "emerald", // Green Theme Accent
    nations: ["United Arab Emirates", "Qatar", "Saudi Arabia", "Kuwait", "Oman", "Bahrain"],
    sectors: "Construction, Hospitality, Logistics, Facility Management, Security, Retail",
    desc: "The most important destination for Nepali migrant workers — structured, legally compliant, and ethically aligned recruitment with post-placement coordination.",
  },
  {
    region: "Southeast Asia",
    flag: "🌴",
    color: "blue", // Blue Theme Accent
    nations: ["Malaysia"],
    sectors: "Manufacturing, Plantation, Security, Hospitality, Cleaning, Logistics",
    desc: "A long-standing destination for Nepali workers with emphasis on transparent recruitment, documentation accuracy, and worker preparedness.",
  },
  {
    region: "East Asia",
    flag: "🗼",
    color: "rose", // Red Theme Accent
    nations: ["Japan"],
    sectors: "Skilled & Semi-Skilled Trades, Technical Roles",
    desc: "A growing, highly structured labour market. Electra focuses on work readiness, procedural accuracy, and discipline-aligned candidate preparation.",
  },
  {
    region: "South Asia & Indian Ocean",
    flag: "🏝️",
    color: "blue",
    nations: ["Maldives", "Mauritius"],
    sectors: "Tourism, Hospitality, Construction, Marine Services, Food Production",
    desc: "Tourism-driven economies with strong demand for skilled Nepali talent in service and hospitality sectors.",
  },
  {
    region: "Europe",
    flag: "🏛️",
    color: "emerald",
    nations: ["Cyprus", "Slovenia"],
    sectors: "Hospitality, Agriculture, Manufacturing, Caregiving, Construction, Food Processing",
    desc: "Emerging European opportunities approached with strong due diligence, ethical documentation, and clear communication of employment terms.",
  },
];

const colorConfig: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  emerald: { border: "border-emerald-600/30", bg: "bg-white/50", text: "text-emerald-700", badge: "bg-emerald-50 border-emerald-200/60 text-emerald-800" },
  rose:    { border: "border-rose-600/30",    bg: "bg-white/50", text: "text-rose-700",    badge: "bg-rose-50 border-rose-200/60 text-rose-800" },
  blue:    { border: "border-blue-600/30",    bg: "bg-white/50", text: "text-blue-700",    badge: "bg-blue-50 border-blue-200/60 text-blue-800" },
};

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

const CountriesWeServe = () => {
  return (
    <div>
          <section
  className="relative overflow-hidden text-white bg-cover bg-center md:h-[60vh]"
  style={{ backgroundImage: "url('/images/servicess/countries.jpg')" }}
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
        Countries We Serve
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
    <div className="bg-[#E1F1E6] text-slate-900 font-sans pb-20 overflow-x-hidden">
      <section className="px-6 max-w-6xl mx-auto">
        
        {/* Header Block */}
        <FadeIn className="text-center mb-14">
      
          <h2 className="text-4xl sm:text-5xl font-black text-emerald-700 leading-tight tracking-tight mb-4">
            Countries We <span className="text-red-600">Serve</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed text-[15px]">
            Connecting skilled, semi-skilled, and general Nepali workers with responsible employers
            across major international labour markets — ethically, transparently, and sustainably.
          </p>
        </FadeIn>

        {/* Content Section */}
        <div className="space-y-6">
          {countries.map((c, i) => {
            const col = colorConfig[c.color];
            return (
              <FadeIn key={c.region} delay={i * 80}>
                <div className={`border border-blue-200/60 hover:${col.border} ${col.bg} rounded-3xl p-6 md:p-8 transition-all duration-300 shadow-sm shadow-blue-900/5 hover:-translate-y-0.5`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    
                    {/* Left Block */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{c.flag}</span>
                        <h3 className={`font-black text-lg sm:text-xl ${col.text}`}>
                          {c.region}
                        </h3>
                      </div>
                      
                      <p className="text-slate-700 font-medium text-sm leading-relaxed mb-5">
                        {c.desc}
                      </p>
                      
                      <div>
                        <p className="text-slate-400 font-extrabold text-[11px] uppercase tracking-wider mb-2">
                          Key Sectors
                        </p>
                        <p className="text-slate-800 font-bold text-xs sm:text-sm">
                          {c.sectors}
                        </p>
                      </div>
                    </div>

                    {/* Right Block - Nation Badges */}
                    <div className="flex flex-wrap gap-2 md:max-w-xs justify-start md:justify-end self-start">
                      {c.nations.map((n) => (
                        <span key={n} className={`border text-xs font-black px-3 py-2 rounded-xl shadow-sm tracking-tight transition-transform duration-200 hover:scale-[1.03] ${col.badge}`}>
                          {n}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <FadeIn delay={200}>
          <div className="mt-10 border border-dashed border-emerald-600/40 bg-emerald-50/30 rounded-3xl p-6 sm:p-8 text-center">
            <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              <span className="text-emerald-800 font-black">Expanding globally.</span> Wherever responsible employers
              require reliable Nepali talent, Electra is prepared to explore and serve those destinations through
              legal, ethical, and compliance-focused recruitment practices.
            </p>
          </div>
        </FadeIn>
        
      </section>
    </div>
    </div>
  );
};

export default CountriesWeServe;