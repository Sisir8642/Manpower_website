"use client";

import { div } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Tej Prakash Gautam",
    role: "Marketing Director",
    avatar: "👤", 
  },
  {
    name: "Sagar Bhattrai",
    role: "Marketing Executive- Japan",
    avatar: "👤",
  },
  {
    name: "Rupal Tamang",
    role: "Sr. Officer- Recruitment & Talent Acquisition",
    avatar: "👤",
  },
  {
    name: "Saugat Shrestha",
    role: "Executive- Recruitment & Talent Acquisition",
    avatar: "👤",
  },
];

const philosophyPillars = [
  {
    title: "Professional Excellence",
    desc: "Driven by professionalism, expertise, and ethical recruitment practices, our team is committed to delivering transparent, reliable, and high-quality workforce solutions for both candidates and employers.",
  },
  {
    title: "Team Spirit & Collaboration",
    desc: "Our strength lies in teamwork, mutual respect, and shared commitment. Together, we work with one vision to create trusted global employment opportunities through integrity and excellence.",
  },
  {
    title: "End-to-End Commitment",
    desc: "From pre-employment to on-employment and post-employment services, our team provides seamless support at every stage, ensuring a smooth and dependable recruitment journey for workers and employers alike.",
  },
  {
    title: "People-Centered Approach",
    desc: "Believing in empowering people, building trust, and creating lasting partnerships, our team works with care, accountability, and dedication to connect Nepalese talent with meaningful global opportunities.",
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

const TeamPage = () => {
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
        
        <FadeIn className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Meet Our <span className="text-emerald-700">Team</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-700 mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-slate-800 font-semibold max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            At Electra Global Recruitment Pvt. Ltd., our team is composed of dedicated professionals 
            with strong expertise in ethical recruitment, talent sourcing, compliance, and workforce 
            mobilization. Guided by integrity, professionalism, and a people-first approach, we deliver 
            seamless recruitment solutions that connect Nepalese talent with trusted global opportunities.
          </p>
        </FadeIn>

        <FadeIn delay={100} className="mb-20">
          <div className="bg-white/50 border border-blue-200 p-8 rounded-3xl text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
            <span className="absolute top-2 left-6 text-slate-300 font-serif text-7xl opacity-40 select-none pointer-events-none">“</span>
            <p className="text-emerald-850 font-black text-base sm:text-xl tracking-tight leading-relaxed max-w-2xl mx-auto relative z-10">
              Together, our team is committed to connecting Nepalese talent with global success responsibly, transparently, and professionally.
            </p>
            <span className="absolute bottom-2 right-6 text-slate-300 font-serif text-7xl opacity-40 select-none pointer-events-none">”</span>
          </div>
        </FadeIn>

        <div className="mb-24">
          <FadeIn className="mb-8">
            <h3 className="text-xs font-black tracking-widest text-red-600 uppercase mb-2">
              Our Operational Philosophy
            </h3>
            <p className="text-slate-800 text-sm font-medium">
              The values that dictate how our recruitment experts process talent deployments daily.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyPillars.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 80}>
                <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-6 shadow-sm hover:border-emerald-600/20 hover:bg-white transition-all duration-300 h-full flex flex-col gap-2">
                  <h4 className="text-emerald-800 font-black text-base tracking-tight flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {item.title}
                  </h4>
                  <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <FadeIn className="text-center mb-12">
            <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase mb-2">
              Team Spirit
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Our Leadership & Specialists
            </h3>
            <div className="w-8 h-0.5 bg-emerald-700 mx-auto mt-3 rounded-full" />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 80}>
                <div className="group bg-white border border-blue-200 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:border-emerald-600/30 hover:shadow-md transition-all duration-300 h-full justify-between">
                  
                  <div className="w-24 h-24 rounded-2xl bg-emerald-50 border border-emerald-600/10 flex items-center justify-center text-slate-400 text-4xl shadow-inner relative overflow-hidden group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500 mb-6">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-600/10 rounded-bl-full group-hover:bg-white/10 transition-colors" />
                    {member.avatar}
                  </div>

                  <div className="flex-grow flex flex-col justify-between w-full">
                    <div>
                      <h4 className="text-slate-950 font-black text-base tracking-tight group-hover:text-emerald-700 transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="text-red-600 font-bold text-xs mt-1.5 leading-snug tracking-tight">
                        {member.role}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-blue-50 w-full text-[11px] text-slate-400 font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Electra Executive
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={400} className="mt-24 border-t border-blue-200/60 pt-10 text-center">
          <h4 className="text-slate-900 font-black text-sm tracking-widest uppercase mb-4">Our Team Say</h4>
          <p className="text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed text-xs sm:text-sm italic">
            "We believe recruitment is more than connecting people with employment—it is about building futures, empowering individuals, and creating meaningful global opportunities through ethical and responsible practices. Driven by integrity, professionalism, and a commitment to excellence, our team delivers seamless support throughout every phase of recruitment, including pre-employment, on-employment, and post-employment services for both candidates and employers."
          </p>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-6">
            &copy; Electra Company Profile &bull; Confidential Operating Matrix
          </p>
        </FadeIn>

      </div>
    </div>
    </div>
  );
};

export default TeamPage;