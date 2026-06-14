
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "15+", label: "Years of Expertise" },
  { number: "20+", label: "Global Connection" },
  { number: "1000+", label: "Employers" },
  { number: "100", label: "Transparency" },
  { number: "10000+", label: "Database" }
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
    <div className="bg-[#E1F1E6]">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner/aboutt.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 text-center">
          <div className="text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight"
              style={{
                color: "#1d4ed8",
                WebkitTextStroke: "1px sm:2px white",
              }}
            >
              About Electra
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed px-4">
              Electra Global Recruitment Pvt. Ltd. is a legally registered foreign employment recruitment agency in Nepal, operating under Company Registration No. 1850/082/083.
            </p>
          </div>
        </div>

        {/* SVG Wave - Responsive */}
        <div className="absolute bottom-[-1px] left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(225 241 230)"
            />
          </svg>
        </div>
      </section>

      <main className="bg-[#E1F1E6] text-slate-900 font-sans overflow-x-hidden min-h-screen">
        {/* Introduction Section */}
        <section className="relative pb-8 sm:pb-12 px-4 sm:px-6 md:px-8">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4 text-emerald-700">
              Electra{" "}
              <span className="bg-red-600 bg-clip-text text-transparent">
                Global
              </span>
              <span className="text-blue-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-widest block mt-2">
                Recruitment
              </span>
            </h1>

            <p className="text-base sm:text-lg text-red-600 font-bold italic mb-4 sm:mb-6 tracking-wide">
              "We Connect Talent"
            </p>

            <p className="text-slate-800 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-semibold px-4">
              Electra Global Recruitment Pvt. Ltd. is a legally registered foreign employment recruitment agency in Nepal, operating under Company Registration No. 1850/082/083. The company is established with a clear vision to connect Nepalese talent with global employment opportunities and is led by a team of highly experienced professionals with over 15 years of expertise in the foreign employment sector.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-26 pb-12 sm:pb-16 md:pb-20 pt-6 sm:pt-8 w-full mx-auto relative bg-[#5563cd]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
              
              <FadeIn>
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-black">
                   Who We Are
                  </h2>
                </div>
                
                <div className="space-y-3 sm:space-y-4 text-white leading-relaxed text-xs sm:text-sm md:text-base font-medium">
                  <p>
                    With strong industry experience and an expanding global network, Electra specializes in sourcing and mobilizing skilled, semi-skilled, and professional Nepalese workforce for reputable international employers. We ensure the right talent is matched with the right opportunity through a structured, transparent, and efficient recruitment process.
                  </p>
                  <p>
                    All recruitment activities are carried out in full compliance with the labor laws and regulations of Nepal and destination countries, promoting ethical, safe, and responsible migration practices. Our approach is guided by strong values of integrity, accountability, and professionalism.
                  </p>
                  <p>
                    Electra Global prioritizes the dignity, safety, and welfare of workers while delivering efficient, compliant, and high-quality human resource solutions to employers. Supported by a robust management system, the company is committed to maintaining the highest standards of quality, transparency, and continuous improvement.
                  </p>
                  <p className="text-red-600 font-bold border-l-2 border-emerald-700 pl-3 mt-4 italic">
                    We strive to build long-term global partnerships based on trust, reliability, and mutual success creating sustainable opportunities for workers and delivering value to employers worldwide.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-white/20 p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-white/30 shadow-inner">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-blue-50/80 border border-blue-200/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 hover:border-emerald-600/40 hover:bg-white transition-all duration-300 group shadow-sm"
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-700 group-hover:scale-105 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-slate-800 text-[10px] sm:text-[11px] md:text-xs mt-1 sm:mt-1.5 leading-snug font-extrabold tracking-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}