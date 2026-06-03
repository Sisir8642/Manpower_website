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
    color: "emerald",
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
    color: "teal",
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
    color: "cyan",
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
    color: "mint",
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
    color: "emerald",
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
    color: "zinc",
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
    color: "cyan",
  },
];

const colorConfig: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/5", text: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" },
  teal:    { border: "border-teal-500/20",    bg: "bg-teal-500/5",    text: "text-teal-400",    badge: "bg-teal-500/10 text-teal-300 border-teal-500/20" },
  cyan:    { border: "border-cyan-500/20",    bg: "bg-cyan-500/5",    text: "text-cyan-400",    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
  mint:    { border: "border-green-500/20",   bg: "bg-green-500/5",   text: "text-green-400",   badge: "bg-green-500/10 text-green-300 border-green-500/20" },
  zinc:    { border: "border-zinc-700/50",    bg: "bg-zinc-800/10",   text: "text-zinc-300",    badge: "bg-zinc-800/40 text-zinc-300 border-zinc-700/50" },
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
    <main className="bg-[#E1F1E6] text-red-600 ">

      <section className="relative py-4 px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="  bg-[#E1F1E6]  " />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5 tracking-tight text-emerald-700">
            News <span className="text-black"> &</span> {" "}
            <span className=" text-red-600">
              Blogs
            </span>
          </h1>
          <p className="text-black max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-10">
            Official news, announcements, and expert insights on ethical recruitment, safe migration,
            worker rights, overseas job trends, and Electra's latest activities.
          </p>

     
        </div>
      </section>

  

      <section className="px-6 pb-24 max-w-6xl mx-auto">
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => {
              const col = colorConfig[post.color];
              return (
                <FadeIn key={post.id} delay={i * 60}>
                  <div className="group bg-[#F3F5FC] border border-zinc-900 rounded-2xl overflow-hidden h-full flex flex-col hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-md shadow-zinc-950/20">
                    {/* Visual Container */}
                    <div className={`h-44 bg-gradient-to-br ${col.bg} border-b border-zinc-900 flex items-center justify-center relative`}>
                      <div className="text-center text-zinc-600">
                        <div className="text-4xl mb-1 opacity-30">{typeIcons[post.type]}</div>
                        <p className="text-xs opacity-30 tracking-wide font-medium">Cover image slot</p>
                      </div>
                   
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3 text-xs text-blue-600 font-medium">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-black font-bold text-base leading-snug mb-3 flex-1">
                        {post.title}
                      </h3>
                      <p className="text-black text-xs leading-relaxed mb-5">{post.excerpt}</p>
                      <span className="text-red-600">Read more →</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-600">
            <div className="text-5xl mb-4 opacity-40">📭</div>
            <p className="font-semibold text-zinc-300 mb-1">No articles found</p>
            <p className="text-sm text-zinc-500">Try a different keyword or filter criteria.</p>
          </div>
        )}

      
      </section>

    </main>
  );
}