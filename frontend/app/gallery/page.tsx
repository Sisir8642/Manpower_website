"use client";

import { useEffect, useRef, useState } from "react";

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

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const categories = ["All", "Events", "Training", "Meetings", "Campaigns", "Milestones"];

const galleryItems = [
  { id: 1, category: "Events",     label: "Recruitment Drive — Kathmandu",       date: "2025",  aspectTall: false },
  { id: 2, category: "Training",   label: "Pre-Departure Orientation Session",    date: "2025",  aspectTall: true  },
  { id: 3, category: "Meetings",   label: "Employer Consultation — UAE Partner",  date: "2025",  aspectTall: false },
  { id: 4, category: "Campaigns",  label: "Safe Migration Awareness Program",     date: "2025",  aspectTall: false },
  { id: 5, category: "Milestones", label: "Company Registration Ceremony",        date: "2024",  aspectTall: true  },
  { id: 6, category: "Events",     label: "Job Fair — Pokhara",                   date: "2025",  aspectTall: false },
  { id: 7, category: "Training",   label: "Skills Verification — Trade Test",     date: "2025",  aspectTall: false },
  { id: 8, category: "Meetings",   label: "Team Coordination Meeting",            date: "2025",  aspectTall: true  },
  { id: 9, category: "Campaigns",  label: "Ethical Recruitment Workshop",         date: "2025",  aspectTall: false },
  { id: 10, category: "Milestones", label: "First Worker Deployment Milestone",   date: "2024",  aspectTall: false },
  { id: 11, category: "Events",    label: "Stakeholder Engagement Forum",         date: "2025",  aspectTall: false },
  { id: 12, category: "Training",  label: "Cultural Orientation — Japan Bound",   date: "2025",  aspectTall: true  },
];

const placeholderColors = [
  "from-emerald-950/60 to-zinc-900",
  "from-teal-950/60 to-zinc-900",
  "from-cyan-950/60 to-zinc-900",
  "from-green-950/60 to-zinc-900",
  "from-slate-900 to-zinc-950",
  "from-zinc-900 to-slate-950",
];

const categoryIcons: Record<string, string> = {
  Events: "🎪", Training: "🎓", Meetings: "🤝", Campaigns: "📢", Milestones: "🏆",
};

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const lightboxItem = galleryItems.find((g) => g.id === lightbox);

  return (
    <main className="bg-zinc-950 text-white font-sans overflow-x-hidden">

      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Visual Journey
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5 tracking-tight">
            Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
            A visual record of Electra's official programs, employer consultations, training sessions,
            awareness campaigns, stakeholder interactions, and corporate milestones — reflecting our
            commitment to transparency, professionalism, and ethical recruitment.
          </p>
        </div>
      </section>

      <section className="px-6 pb-10 max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  active === cat
                    ? "bg-emerald-400/10 border-emerald-400/40 text-emerald-400 shadow-md shadow-emerald-950/20"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {cat !== "All" && <span>{categoryIcons[cat]}</span>}
                {cat}
                <span className="text-xs opacity-50 ml-0.5">
                  {cat === "All" ? galleryItems.length : galleryItems.filter((g) => g.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((item, i) => (
            <FadeIn key={item.id} delay={i * 50} className="break-inside-avoid">
              <div
                onClick={() => setLightbox(item.id)}
                className="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/40 cursor-pointer hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className={`w-full bg-gradient-to-br ${placeholderColors[i % placeholderColors.length]} ${item.aspectTall ? "h-72" : "h-52"} flex flex-col items-center justify-center gap-2 relative`}>
                  <div className="text-zinc-700 text-3xl opacity-40">📷</div>
                  <p className="text-zinc-600 text-xs tracking-wide">Photo coming soon</p>

                  <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center px-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xl mb-1 text-emerald-400">🔍</div>
                      <p className="text-xs font-medium tracking-wide text-zinc-300">Expand View</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/90 p-4 border-t border-zinc-900">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-zinc-100 text-sm font-medium leading-snug">{item.label}</p>
                    <span className="flex-shrink-0 text-emerald-400 text-xs border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-0.5 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-xs mt-1.5 font-medium">{item.date}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            <div className="text-5xl mb-4 opacity-40">🖼️</div>
            <p className="font-semibold text-zinc-200 mb-1">No photos inside this section</p>
            <p className="text-sm text-zinc-500">Check back soon — we refresh this panel regularly.</p>
          </div>
        )}

        <FadeIn className="mt-16">
          <div className="border border-dashed border-zinc-800 bg-zinc-900/10 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4 opacity-70">📸</div>
            <h3 className="text-zinc-200 font-bold text-lg mb-2">Gallery Logs In Production</h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
              Official deployment records, validation workflows, and compliance highlights will populate here. 
              Swap out container properties inside your project tree with dynamic layout utilities.
            </p>
          </div>
        </FadeIn>
      </section>

      {lightbox !== null && lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`w-full h-80 bg-gradient-to-br ${placeholderColors[lightboxItem.id % placeholderColors.length]} flex items-center justify-center`}>
              <div className="text-center text-zinc-500">
                <div className="text-5xl mb-2 opacity-30">📷</div>
                <p className="text-xs tracking-wider">Mount active Next.js assets here</p>
              </div>
            </div>
            <div className="p-6 flex items-start justify-between gap-4 bg-zinc-950">
              <div>
                <p className="text-white font-bold text-lg">{lightboxItem.label}</p>
                <p className="text-zinc-400 text-sm mt-1 font-medium">
                  Category: <span className="text-emerald-400">{lightboxItem.category}</span> · Year: {lightboxItem.date}
                </p>
              </div>
              <button 
                onClick={() => setLightbox(null)} 
                className="text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 p-2 rounded-xl transition-all duration-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}