
"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface NewsItem {
  id: number;
  title: string;
  keywords: string;
  description: string;
  image: string | null;
  status: number;
  created_at: string;
  updated_at: string;
}

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

function FadeIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function readTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function truncate(text: string, limit = 140) {
  return text.length <= limit ? text : text.slice(0, limit).trimEnd() + "…";
}

function NewsSkeleton() {
  return (
    <div className="bg-[#F3F5FC] border border-zinc-200 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-44 bg-gray-200" />
      <div className="p-6 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-4/5" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-3/4" />
      </div>
    </div>
  );
}

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const { data: newsData, isLoading } = useQuery<NewsItem[] | { results: NewsItem[] }>({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/news/`);
      if (!res.ok) throw new Error("Failed to fetch news");
      return res.json();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  const allNews: NewsItem[] = (Array.isArray(newsData) ? newsData : newsData?.results ?? []).filter(
    (n: NewsItem) => n.status === 1
  );

  const filtered = allNews.filter((n: NewsItem) =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.description.toLowerCase().includes(search.toLowerCase()) ||
    n.keywords.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-[#E1F1E6] text-red-600">
      <section className="relative py-4 px-6 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5 tracking-tight text-emerald-700">
            News <span className="text-black">&</span>{" "}
            <span className="text-red-600">Blogs</span>
          </h1>
          <p className="text-black max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
            Official news, announcements, and expert insights on ethical recruitment, safe migration,
            worker rights, overseas job trends, and Electra's latest activities.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 max-w-6xl mx-auto mt-10">
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <NewsSkeleton key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-zinc-600">
            <div className="text-5xl mb-4 opacity-40">📭</div>
            <p className="font-semibold text-zinc-700 mb-1">No articles found</p>
            <p className="text-sm text-zinc-500">Try a different keyword or filter.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post: NewsItem, i: number) => (
              <FadeIn key={post.id} delay={i * 60}>
                <div className="group bg-[#F3F5FC] border border-zinc-900 rounded-2xl overflow-hidden 
                                h-full flex flex-col hover:border-emerald-500/30 hover:-translate-y-1 
                                transition-all duration-300 cursor-pointer shadow-md shadow-zinc-950/20">
                  <div className="h-44 overflow-hidden bg-gray-100 relative">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-emerald-50">
                        <span className="text-4xl opacity-30">📰</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-xs text-blue-600 font-medium">
                      <span>{formatDate(post.created_at)}</span>
                      <span>·</span>
                      <span>{readTime(post.description)}</span>
                    </div>

                    {post.keywords && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.keywords.split(",").map((kw: string) => (
                          <span
                            key={kw}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                          >
                            {kw.trim()}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-black font-bold text-base leading-snug mb-3 flex-1">
                      {post.title}
                    </h3>
                    <p className="text-black text-xs leading-relaxed mb-5">
                      {truncate(post.description)}
                    </p>
                    <button 
                      onClick={() => setSelectedNews(post)}
                      className="text-red-600 text-sm hover:text-red-700 transition-colors text-left"
                    >
                      Read more →
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </section>

      {/* Modal for full news details */}
      {selectedNews && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedNews(null)}
              className="sticky top-4 right-4 float-right z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            {selectedNews.image && (
              <div className="w-full h-64 md:h-96 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Date and read time */}
              <div className="flex items-center gap-3 mb-4 text-sm text-blue-600 font-medium">
                <span>{formatDate(selectedNews.created_at)}</span>
                <span>·</span>
                <span>{readTime(selectedNews.description)}</span>
              </div>

              {/* Keywords */}
              {selectedNews.keywords && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedNews.keywords.split(",").map((kw: string) => (
                    <span
                      key={kw}
                      className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                    >
                      {kw.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {selectedNews.title}
              </h2>

              {/* Full Description */}
              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedNews.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}