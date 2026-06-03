"use client";

import { useEffect, useRef, useState } from "react";

// ── Scroll-reveal helper ──────────────────────────────────────────────────────
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

// ── Data ─────────────────────────────────────────────────────────────────────

const overviewServices = [
  { icon: "🔍", label: "Candidate Sourcing & Screening" },
  { icon: "⚖️", label: "Transparent & Ethical Recruitment" },
  { icon: "🏛️", label: "Embassy Documentation & Consultation" },
  { icon: "🛠️", label: "Skill Testing & Trade Verification" },
  { icon: "🏥", label: "Medical, Documentation & Visa Processing" },
  { icon: "🎓", label: "Pre-Departure Orientation" },
  { icon: "✈️", label: "Mobilization & Deployment" },
  { icon: "🤝", label: "Customer-Centric Recruitment Approach" },
  { icon: "🏆", label: "Hassle-Free End-to-End Solutions" },
];


// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [activeWorkerTab, setActiveWorkerTab] = useState(0);

  return (
    <main className="bg-zinc-950 text-white font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] flex items-center justify-center px-6 py-28 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            End-to-End Recruitment Solutions
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive, ethical, and fully compliant recruitment and workforce solutions — connecting
            global employers with skilled Nepalese talent across every stage of the journey.
          </p>
        </div>
      </section>

      {/* ── SERVICE OVERVIEW PILLS ── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-wrap gap-3 justify-center">
            {overviewServices.map((s) => (
              <div 
                key={s.label} 
                className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2.5 text-sm text-zinc-300 hover:border-emerald-500/40 hover:text-white shadow-md shadow-zinc-950/40 transition-all duration-200 cursor-default"
              >
                <span>{s.icon}</span>
                <span className="font-medium tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

    </main>
  );
}