"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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

// ── Placeholder data — replace with real CMS / API data ──────────────────────
const categories = ["All", "News", "Blog", "Announcement", "Awareness"];

const posts = [
  {
    id: 1,
    type: "News",
    tag: "Company News",
    title: "Electra Global Officially Launches Recruitment Operations in Nepal",
    excerpt: "Electra Global Recruitment Pvt. Ltd. receives its Foreign Employment License and begins full-scale ethical recruitment operations, connecting Nepali talent with global employers.",
    date: "March 2025",
    readTime: "3 min read",
    featured: true,
    color: "amber",
  },
  {
    id: 2,
    type: "Blog",
    tag: "Safe Migration",
    title: "10 Things Every Nepali Worker Should Know Before Going Abroad",
    excerpt: "From understanding your contract to knowing your rights at the destination — a practical guide for first-time migrant workers from Nepal.",
    date: "April 2025",
    readTime: "6 min read",
    featured: true,
    color: "sky",
  },
  {
    id: 3,
    type: "Awareness",
    tag: "Worker Rights",
    title: "Understanding Your Employment Contract: A Worker's Guide",
    excerpt: "Breaking down the key clauses in a standard overseas employment contract — salary, overtime, leave, accommodation, and what to watch out for.",
    date: "April 2025",
    readTime: "5 min read",
    featured: false,
    color: "emerald",
  },
  {
    id: 4,
    type: "News",
    tag: "Partnership",
    title: "Electra Expands Employer Network Across the Gulf Region",
    excerpt: "New employer partnerships established in the UAE, Qatar, and Oman — opening fresh opportunities for skilled Nepali workers in hospitality, construction, and facility management.",
    date: "May 2025",
    readTime: "4 min read",
    featured: false,
    color: "violet",
  },
  {
    id: 5,
    type: "Blog",
    tag: "Ethical Recruitment",
    title: "What Ethical Recruitment Actually Means — And Why It Matters",
    excerpt: "A deep dive into the principles of responsible recruitment: transparency, fair hiring, worker protection, and how Electra integrates these into every step.",
    date: "May 2025",
    readTime: "7 min read",
    featured: false,
    color: "rose",
  },
  {
    id: 6,
    type: "Announcement",
    tag: "Notice",
    title: "Pre-Departure Orientation Schedule — June 2025",
    excerpt: "Electra announces the upcoming pre-departure orientation batch for workers deploying to Malaysia and the Middle East. Attendance is mandatory for all selected candidates.",
    date: "June 2025",
    readTime: "2 min read",
    featured: false,
    color: "teal",
  },
  {
    id: 7,
    type: "Blog",
    tag: "Employer Guide",
    title: "Why Nepal is a Smart Source Country for Global Employers",
    excerpt: "Skilled, adaptable, and hardworking — Nepali workers bring a unique combination of qualities to international workplaces. Here's what global employers are saying.",
    date: "June 2025",
    readTime: "5 min read",
    featured: false,
    color: "amber",
  },
  {
    id: 8,
    type: "Awareness",
    tag: "Anti-Fraud",
    title: "Warning: Fake Recruitment Agents and How to Spot Them",
    excerpt: "A growing concern in Nepal's foreign employment sector — how to verify if a recruitment agency is legitimate and what red flags to watch out for.",
    date: "June 2025",
    readTime: "4 min read",
    featured: false,
    color: "sky",
  },
];

const colorConfig: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  amber:  { border: "border-amber-400/25",  bg: "bg-amber-400/5",  text: "text-amber-400",  badge: "bg-amber-400/10 text-amber-300 border-amber-400/20" },
  sky:    { border: "border-sky-400/25",    bg: "bg-sky-400/5",    text: "text-sky-400",    badge: "bg-sky-400/10 text-sky-300 border-sky-400/20" },
  emerald:{ border: "border-emerald-400/25",bg: "bg-emerald-400/5",text: "text-emerald-400",badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20" },
  violet: { border: "border-violet-400/25", bg: "bg-violet-400/5", text: "text-violet-400", badge: "bg-violet-400/10 text-violet-300 border-violet-400/20" },
  rose:   { border: "border-rose-400/25",   bg: "bg-rose-400/5",   text: "text-rose-400",   badge: "bg-rose-400/10 text-rose-300 border-rose-400/20" },
  teal:   { border: "border-teal-400/25",   bg: "bg-teal-400/5",   text: "text-teal-400",   badge: "bg-teal-400/10 text-teal-300 border-teal-400/20" },
};

const typeIcons: Record<string, string> = {
  News: "📰", Blog: "✍️", Announcement: "📣", Awareness: "💡",
};

export default function NewsPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const featured = posts.filter((p) => p.featured);
  const filtered = posts.filter((p) => {
    const matchCat = active === "All" || p.type === active;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
            Updates & Insights
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5">
            News &{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Blogs
            </span>
          </h1>
          <p className="text-slate-400 leading-relaxed mb-10">
            Official news, announcements, and expert insights on ethical recruitment, safe migration,
            worker rights, overseas job trends, and Electra's latest activities.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400/50 outline-none rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-slate-500 transition-colors duration-200"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      {active === "All" && search === "" && (
        <section className="px-6 pb-16 max-w-6xl mx-auto">
          <FadeIn className="mb-8">
            <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Featured</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((post, i) => {
              const col = colorConfig[post.color];
              return (
                <FadeIn key={post.id} delay={i * 100}>
                  <div className={`border ${col.border} ${col.bg} rounded-2xl p-7 h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300 cursor-pointer`}>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className={`text-xs font-bold border px-3 py-1 rounded-full ${col.badge}`}>
                        {typeIcons[post.type]} {post.tag}
                      </span>
                      <span className="text-slate-500 text-xs">{post.date}</span>
                    </div>
                    <h2 className={`text-xl font-extrabold leading-snug mb-3 group-hover:${col.text} transition-colors duration-200`}>
                      {post.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs">{post.readTime}</span>
                      <span className={`text-xs font-bold ${col.text}`}>Read more →</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>
      )}

      {/* ── FILTERS ── */}
      <section className="px-6 pb-8 max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-wrap gap-2">
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
                {cat !== "All" && typeIcons[cat]}
                {cat}
                <span className="text-xs opacity-50">
                  {cat === "All" ? posts.length : posts.filter((p) => p.type === cat).length}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── ALL POSTS GRID ── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => {
              const col = colorConfig[post.color];
              return (
                <FadeIn key={post.id} delay={i * 60}>
                  <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden h-full flex flex-col hover:border-amber-400/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    {/* Placeholder image area */}
                    <div className={`h-44 bg-gradient-to-br ${col.bg} border-b border-slate-800 flex items-center justify-center relative`}>
                      <div className="text-center text-slate-600">
                        <div className="text-4xl mb-1 opacity-40">{typeIcons[post.type]}</div>
                        <p className="text-xs opacity-40">Cover image</p>
                      </div>
                      <span className={`absolute top-4 left-4 text-xs font-bold border px-3 py-1 rounded-full ${col.badge}`}>
                        {post.tag}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-amber-400 transition-colors duration-200 flex-1">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-5">{post.excerpt}</p>
                      <span className={`text-xs font-bold ${col.text}`}>Read more →</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            <div className="text-5xl mb-4">📭</div>
            <p className="font-semibold text-white mb-1">No articles found</p>
            <p className="text-sm">Try a different keyword or category.</p>
          </div>
        )}

        {/* Coming soon notice */}
        <FadeIn className="mt-16">
          <div className="border border-dashed border-slate-700 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-white font-bold text-lg mb-2">More Articles Coming Soon</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Electra regularly publishes news, recruitment insights, safe migration guides, and
              industry updates. Connect the posts above to your CMS or replace them with real
              content as your publishing cycle begins.
            </p>
          </div>
        </FadeIn>
      </section>

      
      
    </main>
  );
}