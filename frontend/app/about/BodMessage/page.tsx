'use client'
import { div } from 'framer-motion/client';
import React from 'react'
import { useEffect, useRef, useState } from "react";

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
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const LeadershipPage = () => {
  return (
    <div>
    <section
  className="relative overflow-hidden text-white bg-cover bg-bottom min-h-[60vh]"
  style={{ backgroundImage: "url('/images/banner/Msg.jpg')" }}
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
        Message From BOD
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
    <div className="bg-[#E1F1E6] text-slate-900 min-h-screen pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      
      

      <div className="max-w-6xl mx-auto space-y-32">
        
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-1">
            <FadeIn delay={100}>
              <div className="relative mx-auto max-w-sm lg:max-w-none group">
                <div className="absolute -inset-4 bg-white/50 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative aspect-[4/5] w-full rounded-[2rem] rounded-tl-none overflow-hidden bg-blue-50/80 border-2 border-emerald-600/20 p-3 shadow-xl shadow-blue-900/5">
                  <div className="w-full h-full rounded-[1.5rem] rounded-tl-none overflow-hidden bg-white">
                    <img 
                      src="/images/chairperson.jpeg" 
                      alt="Chairperson" 
                      className="w-full h-full object-cover  contrast-110  transition-all duration-700 ease-in-out transform hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                </div>

                {/* Floating Badge (Corporate Less Blue background with dark text) */}
                <div className="absolute -bottom-6 -right-4 bg-blue-50 border border-blue-200 px-6 py-3 rounded-2xl shadow-lg backdrop-blur-md">
                  <div className="text-emerald-700 font-black tracking-wider text-xs uppercase">CHAIRPERSON</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 order-2">
            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute -top-10 -left-6 text-[10rem] text-emerald-700/10 font-serif leading-none select-none pointer-events-none">
                  “
                </div>
                
                <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest bg-red-500/10 border border-red-600/10 px-3 py-1 rounded-md">
                  Executive Desk
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-emerald-700 mt-4 mb-6 tracking-tight">
                  Message from the <span className="text-red-600">Chairperson</span>
                </h2>

                <div className="space-y-4 text-slate-800 font-medium leading-relaxed text-[15px]">
                  <p>
                    At Electra Global Recruitment Pvt. Ltd., our vision is to build a trusted, ethical,
                    and dynamic bridge connecting Nepalese talent with global employment opportunities.
                    As a young and forward-thinking entrepreneur, I strongly believe that Nepal holds
                    immense human potential that deserves recognition on the international stage.
                  </p>
                  <p>
                    With over a decade of experience in the Middle East recruitment sector and more
                    than five years in Nepal's foreign employment industry, we have developed a strong
                    understanding of both global employer expectations and the aspirations of Nepalese
                    workers.
                  </p>
                  <p>
                    At Electra Global, we are committed to providing seamless, end-to-end recruitment
                    services that ensure dignified, fair, and lawful employment opportunities for
                    workers, while delivering reliable and high-quality human resource solutions to our
                    global partners.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-slate-950 font-black text-lg tracking-tight">Chairperson</h4>
                    <p className="text-slate-500 text-xs font-bold">Electra Global Recruitment Pvt. Ltd.</p>
                  </div>
                  <p className="text-red-600 font-bold italic text-sm border-l-2 border-red-600/20 pl-4 py-1">
                    "Together, We Connect Talent to Global Opportunity."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-blue-200/40">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute -top-10 -left-6 text-[10rem] text-red-600/10 font-serif leading-none select-none pointer-events-none">
                  “
                </div>

                <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest bg-emerald-600/10 border border-emerald-600/10 px-3 py-1 rounded-md">
                  Management Desk
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-emerald-700 mt-4 mb-6 tracking-tight">
                  Message from the <span className="text-red-600">Director</span>
                </h2>

                <div className="space-y-4 text-slate-800 font-medium leading-relaxed text-[15px]">
                  <p>
                    At Electra Global Recruitment Pvt. Ltd., our vision is to build a trusted, ethical,
                    and dynamic bridge connecting Nepalese talent with global employment opportunities.
                    As a young and forward-thinking entrepreneur, I strongly believe that Nepal holds
                    immense human potential that deserves recognition on the international stage.
                  </p>
                  <p>
                    With over a decade of experience in the Middle East recruitment sector and more
                    than five years in Nepal's foreign employment industry, we have developed a strong
                    understanding of both global employer expectations and the aspirations of Nepalese
                    workers.
                  </p>
                  <p>
                    At Electra Global, we are committed to providing seamless, end-to-end recruitment
                    services that ensure dignified, fair, and lawful employment opportunities for
                    workers, while delivering reliable and high-quality human resource solutions to our
                    global partners.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-slate-950 font-black text-lg tracking-tight">Director</h4>
                    <p className="text-slate-500 text-xs font-bold">Electra Global Recruitment Pvt. Ltd.</p>
                  </div>
                  <p className="text-emerald-700 font-bold italic text-sm border-l-2 border-emerald-600/20 pl-4 py-1">
                    "Together, We Connect Talent to Global Opportunity."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeIn delay={100}>
              <div className="relative mx-auto max-w-sm lg:max-w-none group">
                <div className="absolute -inset-4 bg-white/50 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative aspect-[4/5] w-full rounded-[2rem] rounded-tr-none lg:rounded-tl-none lg:rounded-tr-[2rem] overflow-hidden bg-blue-50/80 border-2 border-red-600/10 p-3 shadow-xl shadow-blue-900/5">
                  <div className="w-full h-full rounded-[1.5rem] rounded-tr-none lg:rounded-tl-none lg:rounded-tr-[1.5rem] overflow-hidden bg-white">
                    <img 
                      src="/images/MD.jpeg" 
                      alt="Director" 
                      className="w-full h-full object-cover  contrast-110 transition-all duration-700 ease-in-out transform hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-4 lg:left-auto lg:-right-4 bg-blue-50 border border-blue-200 px-6 py-3 rounded-2xl shadow-lg backdrop-blur-md">
                  <div className="text-emerald-700 font-black tracking-wider text-xs uppercase">Managing Director</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </div>
    </div>
  )
}

export default LeadershipPage;