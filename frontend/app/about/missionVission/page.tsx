"use client";

import { div } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: "⚖️",
    title: "Integrity & Ethics",
    desc: "We uphold the highest standards of honesty, fairness, and ethical conduct in all recruitment practices.",
  },
  {
    icon: "🔍",
    title: "Transparency & Accountability",
    desc: "We ensure clear communication, fair processes, and take full responsibility for commitments and service delivery.",
  },
  {
    icon: "📋",
    title: "Legal, Corporate Compliance & Governance",
    desc: "We strictly adhere to all applicable national and international laws and corporate governance standards.",
  },
  {
    icon: "🏆",
    title: "Excellence & Professionalism",
    desc: "We deliver efficient, reliable, and hassle-free one-stop recruitment solutions for clients and candidates.",
  },
  {
    icon: "🤝",
    title: "Human Dignity & Worker Welfare",
    desc: "We are committed to protecting the rights, safety, and well-being of workers while promoting ethical migration.",
  },
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
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}


const MissionVisionValuesPage = () => {
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
    <div className="bg-[#E1F1E6] text-slate-900 font-sans min-h-screen py-20 overflow-x-hidden">
      
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-2">
            Strategic Direction
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Our Mission & <span className="text-emerald-700">Vision</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto mt-4 rounded-full" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          <FadeIn delay={100} className="h-full">
            <div className="relative bg-emerald-50/70 border-2 border-emerald-600/20 rounded-3xl p-8 sm:p-10 h-full overflow-hidden shadow-sm shadow-emerald-900/5 hover:border-emerald-600/40 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-600/5 rounded-full -translate-y-6 translate-x-6 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-emerald-600/10 text-emerald-700 rounded-2xl flex items-center justify-center text-3xl mb-8 font-serif shadow-inner">
                    🔭
                  </div>
                  <h3 className="text-2xl font-black text-emerald-800 mb-4 tracking-tight">Vision</h3>
                  <p className="text-slate-800 font-medium leading-relaxed text-[15px]">
                    To be a leading global recruitment partner connecting worldwide employers with
                    Nepalese talent through reliable, ethical, and hassle-free recruitment services.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="h-full">
            <div className="relative bg-red-50/60 border-2 border-red-600/10 rounded-3xl p-8 sm:p-10 h-full overflow-hidden shadow-sm shadow-red-900/5 hover:border-red-600/30 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-red-600/5 rounded-full -translate-y-6 translate-x-6 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-red-600/10 text-red-700 rounded-2xl flex items-center justify-center text-3xl mb-8 font-serif shadow-inner">
                    🎯
                  </div>
                  <h3 className="text-2xl font-black text-red-800 mb-4 tracking-tight">Mission</h3>
                  <p className="text-slate-800 font-medium leading-relaxed text-[15px]">
                    Our mission is to connect Nepalese migrant workers with foreign employment opportunities through ethical, transparent, and professional recruitment services, ensuring full compliance with the labor laws of Nepal and destination countries delivering reliable workforce solutions to global employers and promoting dignity and welfare for workers.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-2">
            What Drives Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Our Corporate <span className="text-emerald-700">Values</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto mt-4 rounded-full" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <FadeIn key={val.title} delay={i * 80}>
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-7 h-full hover:border-emerald-600/30 hover:bg-white transition-all duration-300 group shadow-sm shadow-blue-900/5 flex flex-col justify-start">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform duration-300 border border-blue-100">
                  {val.icon}
                </div>
                <h3 className="text-slate-950 font-black text-lg mb-2 group-hover:text-emerald-700 transition-colors duration-300 tracking-tight leading-snug">
                  {val.title}
                </h3>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">{val.desc}</p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={values.length * 80}>
            <div className="bg-gradient-to-br from-emerald-700/10 to-blue-600/5 border border-emerald-600/20 rounded-2xl p-7 flex flex-col justify-center items-center text-center h-full shadow-sm">
              <div className="text-emerald-700 font-black text-4xl mb-2 animate-pulse">✦</div>
              <p className="text-emerald-800 font-black text-sm tracking-wider uppercase">
                Built on Trust
              </p>
              <p className="text-slate-700 text-xs sm:text-sm font-semibold mt-2 max-w-[200px] leading-relaxed">
                Every global partnership we form is rooted in absolute corporate integrity.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
    </div>
  );
};

export default MissionVisionValuesPage;