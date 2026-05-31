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

// ── Placeholder gallery data — replace src with real image paths/URLs ─────────
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

// Placeholder color palette for image slots
const placeholderColors = [
  "from-amber-900/60 to-slate-800",
  "from-sky-900/60 to-slate-800",
  "from-emerald-900/60 to-slate-800",
  "from-violet-900/60 to-slate-800",
  "from-rose-900/60 to-slate-800",
  "from-teal-900/60 to-slate-800",
];

const categoryIcons: Record<string, string> = {
  Events: "🎪", Training: "🎓", Meetings: "🤝", Campaigns: "📢", Milestones: "🏆",
};

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const lightboxItem = galleryItems.find((g) => g.id === lightbox);

  return (
    <main className="bg-slate-950 text-white font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Visual Journey
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5">
            Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-slate-400 leading-relaxed">
            A visual record of Electra's official programs, employer consultations, training sessions,
            awareness campaigns, stakeholder interactions, and corporate milestones — reflecting our
            commitment to transparency, professionalism, and ethical recruitment.
          </p>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="px-6 pb-10 max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  active === cat
                    ? "bg-amber-400/10 border-amber-400/40 text-amber-400"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white"
                }`}
              >
                {cat !== "All" && <span>{categoryIcons[cat]}</span>}
                {cat}
                <span className="text-xs opacity-50">
                  {cat === "All" ? galleryItems.length : galleryItems.filter((g) => g.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── GRID ── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((item, i) => (
            <FadeIn key={item.id} delay={i * 50} className="break-inside-avoid">
              <div
                onClick={() => setLightbox(item.id)}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 cursor-pointer hover:border-amber-400/40 transition-all duration-300"
              >
                {/* Placeholder image slot */}
                <div className={`w-full bg-gradient-to-br ${placeholderColors[i % placeholderColors.length]} ${item.aspectTall ? "h-72" : "h-52"} flex flex-col items-center justify-center gap-3 relative`}>
                  {/* Replace this div with <Image> when real photos are available */}
                  <div className="text-slate-600 text-4xl opacity-50">📷</div>
                  <p className="text-slate-600 text-xs">Photo coming soon</p>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center px-4">
                      <div className="text-2xl mb-2">🔍</div>
                      <p className="text-xs font-semibold">View</p>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="bg-slate-900 px-4 py-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-white text-xs font-semibold leading-snug">{item.label}</p>
                    <span className="flex-shrink-0 text-amber-400/60 text-xs border border-amber-400/20 bg-amber-400/5 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1">{item.date}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <div className="text-5xl mb-4">🖼️</div>
            <p className="font-semibold text-white mb-1">No photos in this category yet</p>
            <p className="text-sm">Check back soon — we update the gallery regularly.</p>
          </div>
        )}

        {/* Upload CTA */}
        <FadeIn className="mt-16">
          <div className="border border-dashed border-slate-700 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-white font-bold text-lg mb-2">Gallery Updates Coming Soon</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Official photographs, event highlights, and institutional activities will be regularly
              published here. Replace the placeholder slots above with real images using{" "}
              <code className="text-amber-400 text-xs bg-slate-800 px-1.5 py-0.5 rounded">next/image</code>.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center px-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder image */}
            <div className={`w-full h-72 bg-gradient-to-br ${placeholderColors[lightboxItem.id % placeholderColors.length]} flex items-center justify-center`}>
              <div className="text-center text-slate-500">
                <div className="text-5xl mb-2">📷</div>
                <p className="text-xs">Replace with real image</p>
              </div>
            </div>
            <div className="p-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-white font-bold">{lightboxItem.label}</p>
                <p className="text-slate-400 text-sm mt-1">{lightboxItem.category} · {lightboxItem.date}</p>
              </div>
              <button onClick={() => setLightbox(null)} className="text-slate-500 hover:text-white transition-colors duration-200 flex-shrink-0 text-xl">✕</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}