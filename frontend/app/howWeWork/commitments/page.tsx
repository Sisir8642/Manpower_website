"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    number: "01",
    icon: "⚖️",
    title: "Legal Compliance & Good Governance",
    desc: "Fully registered and licensed under Nepal's foreign employment laws — every workflow meets stringent national and international regulatory standards.",
  },
  {
    number: "02",
    icon: "🤝",
    title: "Ethical & Responsible Recruitment",
    desc: "We uphold fair, transparent, and worker-centric recruitment practices that systematically protect the dignity and rights of every candidate.",
  },
  {
    number: "03",
    icon: "👥",
    title: "Ethical Sourcing & Placement",
    desc: "Skilled screening, complete verification, and training pipelines ensure international employers receive capable, work-ready talent every time.",
  },
  {
    number: "04",
    icon: "❤️",
    title: "Worker Welfare, Protection & Grievance Support",
    desc: "From pre-departure orientation to destination tracking, we actively safeguard the safety, welfare, and operational dispute protection of every worker.",
  },
  {
    number: "05",
    icon: "🌐",
    title: "Global Employer Partnership & Sustainable Mobility",
    desc: "We build lasting, trust-based relationships with international employers, delivering reliable, long-term human resource workforce solutions worldwide.",
  },
];

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
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const Commitments = () => {
  return (
    <div>
         <section
    className="relative overflow-hidden text-white bg-cover bg-center md:h-[60vh]"
    style={{ backgroundImage: "url('/images/banner/Commitment.jpg')" }}
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
          Our Commitments
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
    <div className="bg-[#E1F1E6] text-slate-900 font-sans min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <section className="max-w-6xl mx-auto">
        
        <FadeIn className="text-center mb-16">
    
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Our Five-Pillar <span className="text-emerald-700">Commitments</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-700 mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-slate-800 font-semibold max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            At Electra Global Recruitment Pvt. Ltd., we are committed to delivering ethical, 
            transparent, and fully compliant recruitment solutions that prioritize worker welfare 
            and employer satisfaction. As a hassle-free, one-stop recruitment partner, we ensure 
            the supply of quality talent through responsible practices and reliable global workforce solutions.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {pillars.map((p, i) => (
            <FadeIn key={p.number} delay={i * 80}>
              <div className="group bg-blue-50/70 border border-blue-200 rounded-3xl p-6 sm:p-7 h-full hover:border-emerald-600/30 hover:bg-white transition-all duration-300 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-white border border-blue-100 rounded-xl flex items-center justify-center text-xl shadow-inner group-hover:bg-emerald-50 transition-colors">
                      {p.icon}
                    </div>
                    <span className="text-slate-400 font-black text-2xl tracking-tighter group-hover:text-emerald-700/40 transition-colors">
                      {p.number}
                    </span>
                  </div>
                  <h3 className="text-slate-950 font-black text-base sm:text-lg mb-3 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed mt-2">
                  {p.desc}
                </p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={pillars.length * 80}>
            <div className="bg-emerald-700 border border-emerald-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-center items-center text-center h-full shadow-md text-white group relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 text-9xl text-emerald-600/20 font-black pointer-events-none select-none">
                ★
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner">
                🏅
              </div>
              <p className="text-emerald-300 font-black text-xs tracking-widest uppercase">
                One-Stop Partner
              </p>
              <h4 className="text-white font-black text-lg mt-1 mb-2 tracking-tight">
                Committed to Responsible Recruitment
              </h4>
              <p className="text-emerald-50/90 font-medium text-xs sm:text-sm leading-relaxed">
                Seamless end-to-end personnel mobilization pipelines delivering lawful and hassle-free global deployment under a single deployment structure.
              </p>
            </div>
          </FadeIn>
        </div>

      </section>
    </div>
    </div>
  );
};

export default Commitments;