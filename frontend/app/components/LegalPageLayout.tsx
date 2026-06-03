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
    <main className="bg-[#E1F1E6] text-black font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-4 px-6 text-center ">
      
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight text-red-600">
            {title}
          </h1>
          <p className="text-black text-sm leading-relaxed mb-6 max-w-xl mx-auto">{subtitle}</p>
          <p className="text-black text-xs">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row gap-2">

        {/* Main content */}
        <article className="flex-1 min-w-0">
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <div key={i} id={`section-${i + 1}`} className="scroll-mt-8">
                <h2 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-3">
                  <span className="text-black font-black text-sm w-7 h-7 rounded-full border border-black bg-[#E1F1E6] flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {sec.heading}
                </h2>
                <div className="pl-10 text-black text-sm leading-relaxed space-y-3">
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
            <div className="bg-[#F1F6FE] border border-black rounded-2xl p-5">
              <p className="text-black font-bold text-xs uppercase tracking-widest mb-4">Contents</p>
              <ol className="space-y-2">
                {sections.map((sec, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i + 1}`}
                      className="text-black hover:text-red-400 text-xs transition-colors duration-200 flex gap-2"
                    >
                      <span className="text-black flex-shrink-0">{i + 1}.</span>
                      {sec.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Related links */}
            <div className="bg-[#F1F6FE] border border-slate-800 rounded-2xl p-5">
              <p className="text-black font-bold text-xs uppercase tracking-widest mb-4">Related</p>
              <ul className="space-y-2">
                {relatedLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-black hover:text-red-400 text-xs transition-colors duration-200 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-black" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact box */}
            <div className="bg-[#F1F6FE] border border-black rounded-2xl p-5 text-center">
              <p className="text-black font-bold text-xs mb-2">Questions?</p>
              <p className="text-black text-xs mb-4 leading-relaxed">Contact us through official channels for any clarifications.</p>
              <Link href="/contact" className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors duration-200">
                Contact Us
              </Link>
            </div>

          </div>
        </aside>
      </div>
    </main>
  );
}