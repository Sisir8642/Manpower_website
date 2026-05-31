import Link from "next/link";
import { ReactNode } from "react";

interface Section {
  heading: string;
  content: ReactNode;
}

interface LegalPageProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
  relatedLinks: { label: string; href: string }[];
}

export default function LegalPageLayout({
  badge,
  title,
  subtitle,
  lastUpdated,
  sections,
  relatedLinks,
}: LegalPageProps) {
  return (
    <main className="bg-slate-950 text-white font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-24 px-6 text-center border-b border-slate-800/60">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            {badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xl mx-auto">{subtitle}</p>
          <p className="text-slate-600 text-xs">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">

        {/* Main content */}
        <article className="flex-1 min-w-0">
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <div key={i} id={`section-${i + 1}`} className="scroll-mt-8">
                <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-amber-400 font-black text-sm w-7 h-7 rounded-full border border-amber-400/30 bg-amber-400/5 flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {sec.heading}
                </h2>
                <div className="pl-10 text-slate-400 text-sm leading-relaxed space-y-3">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-8 space-y-6">

            {/* Table of contents */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-white font-bold text-xs uppercase tracking-widest mb-4">Contents</p>
              <ol className="space-y-2">
                {sections.map((sec, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i + 1}`}
                      className="text-slate-400 hover:text-amber-400 text-xs transition-colors duration-200 flex gap-2"
                    >
                      <span className="text-amber-400/50 flex-shrink-0">{i + 1}.</span>
                      {sec.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Related links */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-white font-bold text-xs uppercase tracking-widest mb-4">Related</p>
              <ul className="space-y-2">
                {relatedLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-slate-400 hover:text-amber-400 text-xs transition-colors duration-200 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-400/40" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact box */}
            <div className="bg-amber-400/5 border border-amber-400/20 rounded-2xl p-5 text-center">
              <p className="text-amber-400 font-bold text-xs mb-2">Questions?</p>
              <p className="text-slate-400 text-xs mb-4 leading-relaxed">Contact us through official channels for any clarifications.</p>
              <Link href="/contact" className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition-colors duration-200">
                Contact Us
              </Link>
            </div>

          </div>
        </aside>
      </div>
    </main>
  );
}