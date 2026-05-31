"use client";

import { useEffect, useRef, useState } from "react";

// ── Scroll-reveal helper ──────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
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

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    number: "01",
    icon: "⚖️",
    title: "Legal Compliance & Governance",
    desc: "Fully registered and licensed under Nepal's foreign employment laws — every operation meets national and international regulatory standards.",
  },
  {
    number: "02",
    icon: "🤝",
    title: "Ethical & Responsible Recruitment",
    desc: "We uphold fair, transparent, and worker-centric recruitment practices that protect the dignity and rights of every candidate.",
  },
  {
    number: "03",
    icon: "🌟",
    title: "Quality Human Resource Supply",
    desc: "Skilled screening, verification, and training pipelines ensure employers receive capable, work-ready talent every time.",
  },
  {
    number: "04",
    icon: "🛡️",
    title: "Worker Welfare & Protection",
    desc: "From pre-departure to destination, we actively safeguard the safety, welfare, and legal protections of every worker we mobilize.",
  },
  {
    number: "05",
    icon: "🌐",
    title: "Global Employer Partnership",
    desc: "We build lasting, trust-based relationships with international employers delivering reliable, long-term workforce solutions worldwide.",
  },
];

const orgLevels = [
  {
    tier: "Strategic Leadership",
    color: "amber",
    roles: ["Chairperson", "Managing Director"],
  },
  {
    tier: "Operations & Compliance",
    color: "sky",
    roles: [
      "Recruitment Manager",
      "Employer Relations",
      "Compliance & Legal",
      "Documentation",
    ],
  },
  {
    tier: "Worker Support & Admin",
    color: "emerald",
    roles: [
      "Worker Welfare",
      "Training Unit",
      "Finance & Admin",
      "Communications",
    ],
  },
];

// Recruitment procedure — replace placeholder steps with real content
const recruitmentSteps = [
  {
    step: "01",
    title: "Employer Requirement",
    desc: "Receive and verify the job order, demand letter, and employment contract from the international employer.",
    icon: "📋",
  },
  {
    step: "02",
    title: "Government Approval",
    desc: "Obtain necessary approvals from Nepal's Department of Foreign Employment (DoFE) and relevant authorities.",
    icon: "🏛️",
  },
  {
    step: "03",
    title: "Candidate Sourcing",
    desc: "Advertise vacancies and source qualified candidates through our extensive network and database.",
    icon: "🔍",
  },
  {
    step: "04",
    title: "Screening & Selection",
    desc: "Conduct thorough screening, trade tests, interviews, and background verification of shortlisted candidates.",
    icon: "✅",
  },
  {
    step: "05",
    title: "Medical & Documentation",
    desc: "Facilitate medical fitness tests, visa processing, insurance, and all required pre-departure documentation.",
    icon: "🏥",
  },
  {
    step: "06",
    title: "Pre-Departure Training",
    desc: "Provide mandatory orientation and skills training to prepare workers for life and work abroad.",
    icon: "🎓",
  },
  {
    step: "07",
    title: "Mobilization",
    desc: "Coordinate travel, final approvals, and ensure workers depart safely and on schedule.",
    icon: "✈️",
  },
  {
    step: "08",
    title: "Post-Placement Support",
    desc: "Monitor worker welfare, liaise with employers, and provide ongoing support throughout the employment period.",
    icon: "📞",
  },
];

// Required documents — placeholder list; update as needed
const requiredDocs = [
  { for: "Employer", docs: ["Demand Letter", "Power of Attorney", "Employment Contract", "Company Registration", "Ministry Approval"] },
  { for: "Worker", docs: ["Valid Passport", "Educational Certificates", "Experience Documents", "Medical Certificate", "Citizenship / NID"] },
];

const colorMap: Record<string, string> = {
  amber: "border-amber-400/30 bg-amber-400/5 text-amber-400",
  sky: "border-sky-400/30 bg-sky-400/5 text-sky-400",
  emerald: "border-emerald-400/30 bg-emerald-400/5 text-emerald-400",
};
const dotMap: Record<string, string> = {
  amber: "bg-amber-400",
  sky: "bg-sky-400",
  emerald: "bg-emerald-400",
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HowWeWorkPage() {
  return (
    <main className="bg-slate-950 text-white font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-24 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-amber-500/8 blur-3xl" />
          <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-sky-500/8 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Our Process & Structure
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            How We <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            A transparent, structured, and fully compliant recruitment process — built to protect
            workers and deliver reliable talent to global employers.
          </p>
        </div>
      </section>

      {/* ── LEGAL COMPLIANCE ── */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Section 01</p>
            <h2 className="text-4xl font-extrabold mb-6">
              Legal Compliance &<br />
              <span className="text-amber-400">Accreditation</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-[15px]">
              <p>
                Electra Global Recruitment Pvt. Ltd. is duly registered with the Government of Nepal
                and legally authorized to operate as a foreign employment recruitment agency in
                accordance with Nepal's prevailing company, labour, and foreign employment laws.
              </p>
              <p>
                We conduct all operations in line with the legal and regulatory framework of Nepal,
                including requirements related to responsible recruitment, worker protection,
                documentation, transparency, and accountability.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="space-y-4">
              {[
                { label: "Company Registration No.", value: "386754/82/83" },
                { label: "Foreign Employment License No.", value: "1850/082/083" },
                { label: "Issuing Authority", value: "Government of Nepal" },
                { label: "Regulatory Framework", value: "Nepal Labour & Foreign Employment Laws" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-4 bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 hover:border-amber-400/30 transition-colors duration-300"
                >
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className="text-amber-400 font-bold text-sm text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ORG STRUCTURE ── */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Section 02</p>
            <h2 className="text-4xl font-extrabold mb-4">
              Organizational <span className="text-amber-400">Structure</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A clear, professional, and accountable framework that ensures efficient management,
              smooth coordination, and high-quality recruitment services across every department.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {orgLevels.map((level, i) => (
              <FadeIn key={level.tier} delay={i * 100}>
                <div className={`border rounded-2xl p-6 ${colorMap[level.color]}`}>
                  <p className="text-xs font-bold tracking-widest uppercase mb-4 opacity-70">
                    {level.tier}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {level.roles.map((role) => (
                      <span
                        key={role}
                        className="bg-slate-950/60 border border-slate-700 text-slate-200 text-sm font-medium px-4 py-2 rounded-lg"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                {i < orgLevels.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className={`w-px h-6 ${dotMap[level.color]} opacity-40`} />
                  </div>
                )}
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={350}>
            <p className="text-center text-slate-500 text-xs mt-8">
              * Detailed org chart available upon request
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 5 PILLARS ── */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Section 03</p>
          <h2 className="text-4xl font-extrabold mb-4">
            Our 5-Pillar <span className="text-amber-400">Commitments</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            At Electra Global, we are committed to delivering ethical, transparent, and fully
            compliant recruitment solutions that prioritize worker welfare and employer satisfaction.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <FadeIn key={p.number} delay={i * 80}>
              <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 h-full hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-amber-400/30 font-black text-3xl group-hover:text-amber-400/60 transition-colors duration-300">
                    {p.number}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
          {/* Decorative sixth card */}
          <FadeIn delay={pillars.length * 80}>
            <div className="bg-gradient-to-br from-amber-400/10 to-orange-500/5 border border-amber-400/20 rounded-2xl p-7 flex flex-col justify-center items-center text-center h-full">
              <div className="text-4xl mb-3">🏅</div>
              <p className="text-amber-400 font-bold text-sm tracking-wide uppercase">One-Stop Partner</p>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                End-to-end recruitment — from sourcing to post-placement — under one roof.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── RECRUITMENT PROCEDURE ── */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Section 04</p>
            <h2 className="text-4xl font-extrabold mb-4">
              Recruitment <span className="text-amber-400">Procedure</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Our structured 8-step process ensures every placement is legal, ethical, and
              seamless — from receiving the job order to post-placement support.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/40 via-amber-400/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {recruitmentSteps.map((s, i) => (
                <FadeIn key={s.step} delay={i * 60}>
                  <div className="flex gap-6 items-start group">
                    {/* Step circle */}
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-slate-900 border-2 border-amber-400/30 group-hover:border-amber-400 transition-colors duration-300 flex flex-col items-center justify-center">
                      <span className="text-amber-400 text-xs font-black">{s.step}</span>
                    </div>
                    {/* Card */}
                    <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 group-hover:border-amber-400/30 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">{s.icon}</span>
                        <h3 className="text-white font-bold text-base">{s.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUIRED DOCUMENTS ── */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Section 05</p>
          <h2 className="text-4xl font-extrabold mb-4">
            Required <span className="text-amber-400">Documents</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            The following documents are required to initiate and complete the recruitment process.
            All submissions must be authentic and verified.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8">
          {requiredDocs.map((group, i) => (
            <FadeIn key={group.for} delay={i * 120}>
              <div className={`rounded-2xl border p-8 h-full ${i === 0 ? "border-amber-400/20 bg-amber-400/5" : "border-sky-400/20 bg-sky-400/5"}`}>
                <div className={`text-xs font-bold tracking-[0.2em] uppercase mb-6 ${i === 0 ? "text-amber-400" : "text-sky-400"}`}>
                  {group.for} Documents
                </div>
                <ul className="space-y-3">
                  {group.docs.map((doc) => (
                    <li key={doc} className="flex items-center gap-3 text-slate-300 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? "bg-amber-400" : "bg-sky-400"}`} />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 text-xs mt-6 italic">
                  * Additional documents may be required based on destination country requirements.
                  Please update this list from the official profile.
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── OUR TEAM PLACEHOLDER ── */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Section 06</p>
            <h2 className="text-4xl font-extrabold mb-4">
              Our <span className="text-amber-400">Team</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
              Meet the experienced professionals driving Electra Global's mission forward.
            </p>
          </FadeIn>

          {/* Placeholder cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Chairperson", "Managing Director", "Recruitment Manager", "Compliance Officer"].map(
              (role, i) => (
                <FadeIn key={role} delay={i * 80}>
                  <div className="bg-slate-900 border border-slate-800 border-dashed rounded-2xl p-7 flex flex-col items-center gap-4 hover:border-amber-400/30 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 text-2xl">
                      👤
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs italic">Name — from profile</p>
                      <p className="text-slate-400 text-sm font-semibold mt-1">{role}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            )}
          </div>
          <p className="text-slate-600 text-xs mt-6 italic">* Team details to be filled from the official company profile.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-amber-500/7 rounded-full blur-3xl" />
        </div>
        <FadeIn className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">
            Start the <span className="text-amber-400">Process</span>
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Ready to hire skilled Nepalese talent or looking for overseas work? Let's begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="border border-slate-700 hover:border-amber-400/50 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              About Electra
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}