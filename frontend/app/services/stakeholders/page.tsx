"use client";

import { useEffect, useRef, useState } from "react";

const stakeholderServices = [
  { icon: "🏛️", title: "Government & Regulatory Coordination", desc: "Professional coordination with Nepal Government bodies, foreign employment authorities, and regulatory agencies." },
  { icon: "🏴", title: "Embassy & Diplomatic Liaison", desc: "Support communication with embassies, consulates, labour missions, and destination-country representatives for lawful deployment." },
  { icon: "📢", title: "Ethical Recruitment Advocacy", desc: "Actively promoting ethical recruitment, fair hiring, transparency, and worker protection through sector engagement." },
  { icon: "🤲", title: "Civil Society & NGO Partnership", desc: "Collaboration with organizations working on migrant welfare, safe migration, access to information, and rights-based awareness." },
  { icon: "📣", title: "Awareness & Promotional Campaigns", desc: "Organizing orientation programs, workshops, and campaigns on ethical recruitment, safe migration, and worker rights prevention of misinformation." },
  { icon: "⚡", title: "Grievance Resolution Support", desc: "Supporting timely communication, escalation, and documentation of issues for responsible resolution within our institutional role." },
  { icon: "🌱", title: "Safe Migration Initiatives", desc: "Open to joint initiatives promoting safe migration, fair recruitment, skills development, and stronger labour mobility between Nepal and destination countries." },
];

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

const Stakeholder = () => {
  return (
    <div>
          <section
  className="relative overflow-hidden text-white bg-cover bg-center md:h-[60vh]"
  style={{ backgroundImage: "url('/images/servicess/stakeholders.jpg')" }}
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
        Services For Stakeholders
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
            Stakeholder <span className="text-red-600">Collaboration</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed text-[15px]">
            Ethical recruitment requires meaningful collaboration with government agencies, embassies,
            civil society, and international partners — building transparent, accountable, and
            mutually supportive relationships.
          </p>
        </FadeIn>

        {/* Collaboration Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stakeholderServices.map((s, i) => (
            <FadeIn key={s.title} delay={i * 70}>
              <div className="group bg-white/50 border border-blue-200/60 rounded-3xl p-6 h-full hover:border-emerald-600/30 hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-sm shadow-blue-900/5">
                
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
                  {s.icon}
                </div>

                <h3 className="text-slate-950 font-extrabold text-base mb-2 group-hover:text-emerald-700 transition-colors duration-300 leading-snug">
                  {s.title}
                </h3>
                
                <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed">
                  {s.desc}
                </p>
                
              </div>
            </FadeIn>
          ))}
        </div>
        
      </section>
    </div>
    </div>
  );
};

export default Stakeholder;