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

const employerServices = [
  { step: "01", icon: "💬", title: "Initial Consultation & Briefing", desc: "We begin through meetings or virtual discussions to understand your workforce demand, timeline, and destination-country requirements — and brief you fully on Nepal's recruitment procedures." },
  { step: "02", icon: "🔎", title: "Employer Due Diligence & Partnership", desc: "Before partnering, we conduct a structured due diligence review of your company profile, employment conditions, benefits, and overall credibility of the opportunity." },
  { step: "03", icon: "📊", title: "Workforce Requirement Planning", desc: "We convert your manpower need into a clear recruitment-ready plan — confirming job titles, skill levels, wages, contract period, benefits, and expected deployment schedule." },
  { step: "04", icon: "👥", title: "Candidate Sourcing, Screening & Selection", desc: "We identify suitable candidates through ethical sourcing, verify credentials, and coordinate interviews, trade tests, or skill demonstrations per your preference." },
  { step: "05", icon: "📁", title: "Embassy Processing & Documentation", desc: "We handle demand letters, power of attorney, employment contracts, attestations, and embassy verification — ensuring your recruitment file is accurate and complete." },
  { step: "06", icon: "🛂", title: "Visa, Labour Approval & Deployment", desc: "We coordinate visa issuance, medical exams, pre-departure orientation, insurance, labour approval, and travel scheduling — keeping you informed at every step." },
  { step: "07", icon: "⚖️", title: "Ethical Recruitment & Compliance", desc: "We integrate ethical principles at every stage — fair communication, accurate job disclosure, worker protection, and full alignment with Nepal's foreign employment laws." },
  { step: "08", icon: "📞", title: "Post-Employment Follow-Up", desc: "After deployment we maintain contact with both employer and workers to support adjustment, onboarding concerns, and strengthen long-term employer–employee relationships." },
  { step: "09", icon: "🌐", title: "Long-Term Relationship Management", desc: "We aim to be your lasting workforce partner — reviewing past experiences, collecting performance feedback, and supporting future hiring cycles and pipeline development." },
];

const workerPhases = [
  {
    phase: "Pre-Employment",
    color: "amber",
    icon: "🌱",
    services: [
      { title: "Job Information & Counseling", desc: "Clear, accurate details on job title, salary, benefits, contract period, working hours, and destination-country requirements." },
      { title: "Fair Registration & Profile Development", desc: "Transparent registration collecting your qualifications, skills, and experience to match you with genuine employer demand." },
      { title: "Skill Matching & Selection Support", desc: "Screening based on employer needs, plus preparation support for interviews, trade tests, and practical assessments." },
      { title: "Contract Explanation & Informed Consent", desc: "Full explanation of employment contract, salary, duties, benefits, and conditions before any deployment formalities proceed." },
      { title: "Documentation, Medical & Visa Guidance", desc: "Step-by-step support for document verification, medical exams, visa requirements, and biometric or embassy procedures." },
      { title: "Labour Approval & Pre-Departure Formalities", desc: "Coordination of government labour approval, insurance requirements, welfare provisions, and other statutory formalities." },
      { title: "Pre-Departure Orientation", desc: "Guidance on rights, workplace behavior, occupational safety, cultural awareness, document security, and travel readiness." },
      { title: "Travel & Departure Assistance", desc: "Flight scheduling, travel document checking, departure briefing, and airport coordination support." },
    ],
  },
  {
    phase: "On-Employment",
    color: "sky",
    icon: "🌍",
    services: [
      { title: "Arrival & Settlement Follow-Up", desc: "Confirm safe arrival, reception arrangements, accommodation access, and initial onboarding status with both worker and employer." },
      { title: "Employer–Worker Communication Support", desc: "Bridge communication gaps through physical or virtual coordination, telephone follow-up, and structured dialogue." },
      { title: "Workplace Adjustment Assistance", desc: "Guidance on job role understanding, workplace rules, adaptation challenges, and contract-related clarification during the initial period." },
      { title: "Worker Welfare Follow-Up", desc: "Maintain regular follow-up to understand early employment experience, well-being, and adjustment status." },
      { title: "Grievance Communication & Support", desc: "Record, communicate, and coordinate worker concerns with the relevant employer or support mechanism for fair resolution." },
    ],
  },
  {
    phase: "Post-Employment",
    color: "emerald",
    icon: "🔄",
    services: [
      { title: "Returnee Worker Follow-Up", desc: "Maintain contact with returning workers to understand their experience, key lessons, and any unresolved concerns." },
      { title: "Feedback & Service Improvement", desc: "Review returnee feedback to strengthen recruitment practices, improve counseling, and enhance ethical service delivery." },
      { title: "Future Opportunity Guidance", desc: "Guidance on updated job openings, re-migration possibilities, skill upgrading, and suitability for future recruitment." },
      { title: "Documentation & Record Clarification", desc: "Assistance with employment records, recruitment history, or documentation linked to previous deployment where needed." },
      { title: "Long-Term Worker Relationship", desc: "Maintain a respectful, long-term relationship rooted in fair treatment, transparency, dignity, and responsible migration." },
    ],
  },
];

const stakeholderServices = [
  { icon: "🏛️", title: "Government & Regulatory Coordination", desc: "Professional coordination with Nepal Government bodies, foreign employment authorities, and regulatory agencies." },
  { icon: "🏴", title: "Embassy & Diplomatic Liaison", desc: "Support communication with embassies, consulates, labour missions, and destination-country representatives for lawful deployment." },
  { icon: "📢", title: "Ethical Recruitment Advocacy", desc: "Actively promoting ethical recruitment, fair hiring, transparency, and worker protection through sector engagement." },
  { icon: "🤲", title: "Civil Society & NGO Partnership", desc: "Collaboration with organizations working on migrant welfare, safe migration, access to information, and rights-based awareness." },
  { icon: "📣", title: "Awareness & Promotional Campaigns", desc: "Organizing orientation programs, workshops, and campaigns on ethical recruitment, safe migration, and worker rights prevention of misinformation." },
  { icon: "⚡", title: "Grievance Resolution Support", desc: "Supporting timely communication, escalation, and documentation of issues for responsible resolution within our institutional role." },
  { icon: "🌱", title: "Safe Migration Initiatives", desc: "Open to joint initiatives promoting safe migration, fair recruitment, skills development, and stronger labour mobility between Nepal and destination countries." },
];

const countries = [
  {
    region: "Middle East / Gulf Region",
    flag: "🌙",
    color: "amber",
    nations: ["United Arab Emirates", "Qatar", "Saudi Arabia", "Kuwait", "Oman", "Bahrain"],
    sectors: "Construction, Hospitality, Logistics, Facility Management, Security, Retail",
    desc: "The most important destination for Nepali migrant workers — structured, legally compliant, and ethically aligned recruitment with post-placement coordination.",
  },
  {
    region: "Southeast Asia",
    flag: "🌴",
    color: "sky",
    nations: ["Malaysia"],
    sectors: "Manufacturing, Plantation, Security, Hospitality, Cleaning, Logistics",
    desc: "A long-standing destination for Nepali workers with emphasis on transparent recruitment, documentation accuracy, and worker preparedness.",
  },
  {
    region: "East Asia",
    flag: "🗼",
    color: "rose",
    nations: ["Japan"],
    sectors: "Skilled & Semi-Skilled Trades, Technical Roles",
    desc: "A growing, highly structured labour market. Electra focuses on work readiness, procedural accuracy, and discipline-aligned candidate preparation.",
  },
  {
    region: "South Asia & Indian Ocean",
    flag: "🏝️",
    color: "teal",
    nations: ["Maldives", "Mauritius"],
    sectors: "Tourism, Hospitality, Construction, Marine Services, Food Production",
    desc: "Tourism-driven economies with strong demand for skilled Nepali talent in service and hospitality sectors.",
  },
  {
    region: "Europe",
    flag: "🏛️",
    color: "violet",
    nations: ["Cyprus", "Slovenia"],
    sectors: "Hospitality, Agriculture, Manufacturing, Caregiving, Construction, Food Processing",
    desc: "Emerging European opportunities approached with strong due diligence, ethical documentation, and clear communication of employment terms.",
  },
];

const colorConfig: Record<string, { border: string; bg: string; text: string; dot: string; badge: string }> = {
  amber:  { border: "border-amber-400/25",  bg: "bg-amber-400/5",  text: "text-amber-400",  dot: "bg-amber-400",  badge: "bg-amber-400/10 text-amber-300 border-amber-400/20" },
  sky:    { border: "border-sky-400/25",    bg: "bg-sky-400/5",    text: "text-sky-400",    dot: "bg-sky-400",    badge: "bg-sky-400/10 text-sky-300 border-sky-400/20" },
  emerald:{ border: "border-emerald-400/25",bg: "bg-emerald-400/5",text: "text-emerald-400",dot: "bg-emerald-400",badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20" },
  rose:   { border: "border-rose-400/25",   bg: "bg-rose-400/5",   text: "text-rose-400",   dot: "bg-rose-400",   badge: "bg-rose-400/10 text-rose-300 border-rose-400/20" },
  teal:   { border: "border-teal-400/25",   bg: "bg-teal-400/5",   text: "text-teal-400",   dot: "bg-teal-400",   badge: "bg-teal-400/10 text-teal-300 border-teal-400/20" },
  violet: { border: "border-violet-400/25", bg: "bg-violet-400/5", text: "text-violet-400", dot: "bg-violet-400", badge: "bg-violet-400/10 text-violet-300 border-violet-400/20" },
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [activeWorkerTab, setActiveWorkerTab] = useState(0);

  return (
    <main className="bg-slate-950 text-white font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] flex items-center justify-center px-6 py-28 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-amber-500/8 blur-3xl" />
          <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] rounded-full bg-sky-500/8 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            End-to-End Recruitment Solutions
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
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
              <div key={s.label} className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-5 py-2.5 text-sm text-slate-300 hover:border-amber-400/40 hover:text-white transition-all duration-200">
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── SERVICES FOR EMPLOYERS ── */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">For Global Employers</p>
            <h2 className="text-4xl font-extrabold mb-4">
              Employer <span className="text-amber-400">Services</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              End-to-end, ethical, and compliance-focused recruitment support — designed to build trust,
              ensure transparency, and facilitate a smooth recruitment journey from initial consultation
              to post-employment coordination.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {employerServices.map((s, i) => (
              <FadeIn key={s.step} delay={i * 60}>
                <div className="group bg-slate-950 border border-slate-800 rounded-2xl p-6 h-full hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{s.icon}</span>
                    <span className="text-amber-400/25 font-black text-2xl group-hover:text-amber-400/50 transition-colors duration-300">{s.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-amber-400 transition-colors duration-300 leading-snug">{s.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES FOR WORKERS ── */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">For Migrating Workers</p>
          <h2 className="text-4xl font-extrabold mb-4">
            Worker <span className="text-amber-400">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A safe, transparent, and well-managed migration journey — structured across three phases
            to ensure guidance before, during, and after your overseas employment.
          </p>
        </FadeIn>

        {/* Phase tabs */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            {workerPhases.map((phase, i) => {
              const c = colorConfig[phase.color];
              const active = activeWorkerTab === i;
              return (
                <button
                  key={phase.phase}
                  onClick={() => setActiveWorkerTab(i)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                    active
                      ? `${c.bg} ${c.border} ${c.text}`
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                  }`}
                >
                  <span>{phase.icon}</span>
                  {phase.phase} Support
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Phase content */}
        {workerPhases.map((phase, i) => {
          const c = colorConfig[phase.color];
          return (
            <div key={phase.phase} className={activeWorkerTab === i ? "block" : "hidden"}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {phase.services.map((s, j) => (
                  <FadeIn key={s.title} delay={j * 50}>
                    <div className={`border ${c.border} ${c.bg} rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300`}>
                      <div className={`w-2 h-2 rounded-full ${c.dot} mb-4`} />
                      <h3 className={`font-bold text-sm mb-2 ${c.text}`}>{s.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ── SERVICES FOR STAKEHOLDERS ── */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">For Stakeholders</p>
            <h2 className="text-4xl font-extrabold mb-4">
              Stakeholder <span className="text-amber-400">Collaboration</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Ethical recruitment requires meaningful collaboration with government agencies, embassies,
              civil society, and international partners — building transparent, accountable, and
              mutually supportive relationships.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {stakeholderServices.map((s, i) => (
              <FadeIn key={s.title} delay={i * 70}>
                <div className="group bg-slate-950 border border-slate-800 rounded-2xl p-6 h-full hover:border-emerald-400/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl mb-4">{s.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-emerald-400 transition-colors duration-300">{s.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRIES WE SERVE ── */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Global Reach</p>
          <h2 className="text-4xl font-extrabold mb-4">
            Countries We <span className="text-amber-400">Serve</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Connecting skilled, semi-skilled, and general Nepali workers with responsible employers
            across major international labour markets — ethically, transparently, and sustainably.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {countries.map((c, i) => {
            const col = colorConfig[c.color];
            return (
              <FadeIn key={c.region} delay={i * 80}>
                <div className={`border ${col.border} ${col.bg} rounded-2xl p-7 md:p-8`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Left */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{c.flag}</span>
                        <h3 className={`font-extrabold text-lg ${col.text}`}>{c.region}</h3>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">{c.desc}</p>
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Key Sectors</p>
                        <p className="text-slate-400 text-xs">{c.sectors}</p>
                      </div>
                    </div>
                    {/* Right — nation badges */}
                    <div className="flex flex-wrap gap-2 md:max-w-xs">
                      {c.nations.map((n) => (
                        <span key={n} className={`border text-xs font-semibold px-3 py-1.5 rounded-lg ${col.badge}`}>
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={200}>
          <div className="mt-8 border border-dashed border-slate-700 rounded-2xl p-8 text-center">
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              <span className="text-white font-semibold">Expanding globally.</span> Wherever responsible employers
              require reliable Nepali talent, Electra is prepared to explore and serve those destinations through
              legal, ethical, and compliance-focused recruitment practices.
            </p>
          </div>
        </FadeIn>
      </section>

      

    </main>
  );
}