"use client";

import { useEffect, useRef, useState } from "react";

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
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const misconductExamples = [
  { icon: "💰", label: "Bribery, Fraud or Improper Financial Demands" },
  { icon: "📋", label: "Misrepresentation of Job Information or Recruitment Conditions" },
  { icon: "🚫", label: "Harassment, Discrimination, Intimidation or Abusive Conduct" },
  { icon: "⛓️", label: "Exploitation, Coercion or Unethical Treatment of Workers" },
  { icon: "⚠️", label: "Conflict of Interest or Misuse of Authority" },
  { icon: "📄", label: "Falsification or Mishandling of Documents" },
  { icon: "🔐", label: "Breach of Confidentiality or Misuse of Personal Information" },
  { icon: "📉", label: "Violation of Ethical Recruitment Standards or Internal Policies" },
];

const commitments = [
  { icon: "🔒", title: "Confidentiality", desc: "Reports are handled with strict confidentiality. The identity of the reporting person is protected." },
  { icon: "⚖️", title: "Fair & Impartial Review", desc: "Each report is assessed objectively without bias toward any party involved." },
  { icon: "🛡️", title: "Non-Retaliation", desc: "Good-faith reporting will never result in retaliation, penalization, or adverse consequences." },
  { icon: "⏱️", title: "Timely Assessment", desc: "Reports are acknowledged promptly and escalated appropriately based on their nature and seriousness." },
  { icon: "📣", title: "Appropriate Escalation", desc: "Where necessary, matters are referred to senior management or competent authorities per applicable procedures." },
];

const reportingChannels = [
  { icon: "✉️", label: "Official Misconduct Reporting Email", desc: "Send a detailed written report to Electra's designated misconduct reporting inbox.", color: "amber" },
  { icon: "📞", label: "Dedicated Hotline Number", desc: "Speak directly with authorized compliance personnel for urgent misconduct concerns.", color: "sky" },
  { icon: "🏢", label: "Written Submission at Office", desc: "Submit a formal written report addressed to management or the compliance team at our Kathmandu office.", color: "emerald" },
  { icon: "📬", label: "Suggestion / Reporting Box", desc: "Drop a written, confidential report in our secure reporting box available at the office.", color: "violet" },
  { icon: "🌐", label: "Website Reporting Form", desc: "Use the secure online form below to submit your report directly from this page.", color: "rose" },
  { icon: "👤", label: "Direct Communication with Management", desc: "Contact authorized management or compliance personnel directly for sensitive matters requiring discretion.", color: "teal" },
];

const colorConfig: Record<string, { border: string; bg: string; text: string }> = {
  amber:  { border: "border-amber-400/25",  bg: "bg-amber-400/5",  text: "text-amber-400" },
  sky:    { border: "border-sky-400/25",    bg: "bg-sky-400/5",    text: "text-sky-400" },
  emerald:{ border: "border-emerald-400/25",bg: "bg-emerald-400/5",text: "text-emerald-400" },
  violet: { border: "border-violet-400/25", bg: "bg-violet-400/5", text: "text-violet-400" },
  rose:   { border: "border-rose-400/25",   bg: "bg-rose-400/5",   text: "text-rose-400" },
  teal:   { border: "border-teal-400/25",   bg: "bg-teal-400/5",   text: "text-teal-400" },
};

type FormStatus = "idle" | "submitting" | "success";

export default function MisconductPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", role: "", anonymous: false,
    category: "", subject: "", description: "", evidence: "", consent: false,
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: Replace with actual API / email service integration
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("success");
  }

  return (
    <main className="bg-slate-950 text-white font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-rose-500/7 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Integrity & Accountability
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5">
            Misconduct <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Reporting</span>
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Electra is committed to a recruitment environment grounded in integrity, dignity, and respect.
            We encourage anyone — workers, employees, employers, or partners — to report suspected
            misconduct through our safe and accessible reporting mechanism.
          </p>
        </div>
      </section>

      {/* ── WHAT TO REPORT ── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">What Can Be <span className="text-amber-400">Reported</span></h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Reports may relate to conduct at any stage — recruitment, documentation, deployment,
            post-employment support, office operations, or any interaction connected with Electra's services.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {misconductExamples.map((item, i) => (
            <FadeIn key={item.label} delay={i * 50}>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-3 hover:border-rose-400/30 hover:-translate-y-0.5 transition-all duration-300 h-full">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="text-slate-300 text-xs leading-snug font-medium">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── OUR COMMITMENT ── */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Our <span className="text-amber-400">Commitment</span></h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Every report submitted to Electra is handled with the following principles — no exceptions.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commitments.map((c, i) => (
              <FadeIn key={c.title} delay={i * 60}>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 h-full hover:border-amber-400/30 transition-colors duration-300">
                  <div className="text-2xl mb-3">{c.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{c.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPORTING CHANNELS ── */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">Reporting <span className="text-amber-400">Channels</span></h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Use whichever channel you feel most comfortable with. All reports are treated equally.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reportingChannels.map((ch, i) => {
            const col = colorConfig[ch.color];
            return (
              <FadeIn key={ch.label} delay={i * 60}>
                <div className={`border ${col.border} ${col.bg} rounded-2xl p-6 h-full`}>
                  <div className="text-2xl mb-3">{ch.icon}</div>
                  <h3 className={`font-bold text-sm mb-2 ${col.text}`}>{ch.label}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{ch.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── REPORT FORM ── */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Submit a <span className="text-amber-400">Report</span></h2>
            <p className="text-slate-400 text-sm">You may report anonymously. Fields marked * are required for non-anonymous submissions.</p>
          </FadeIn>

          {status === "success" ? (
            <FadeIn>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-emerald-400 font-bold text-xl mb-2">Report Received</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Your report has been submitted securely. Electra will review it with full confidentiality
                  and take appropriate internal action based on its nature and seriousness.
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-5">

                {/* Anonymous toggle */}
                <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-5 py-3.5">
                  <div>
                    <p className="text-white text-sm font-semibold">Report Anonymously</p>
                    <p className="text-slate-500 text-xs">Your personal details will not be required or recorded.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, anonymous: !p.anonymous }))}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${form.anonymous ? "bg-amber-400" : "bg-slate-700"}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200 ${form.anonymous ? "left-6" : "left-1"}`} />
                  </button>
                </div>

                {/* Personal details (hidden if anonymous) */}
                {!form.anonymous && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                        <input required={!form.anonymous} name="name" value={form.name} onChange={handleChange} placeholder="Your full name"
                          className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors duration-200" />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Email Address *</label>
                        <input required={!form.anonymous} type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
                          className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors duration-200" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+977 XXXXXXXXXX"
                          className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors duration-200" />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">I am a *</label>
                        <select required={!form.anonymous} name="role" value={form.role} onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400/50 outline-none rounded-xl px-4 py-3 text-sm text-white transition-colors duration-200">
                          <option value="" disabled>Select…</option>
                          <option>Worker / Job Seeker</option>
                          <option>Electra Employee</option>
                          <option>Employer / Partner</option>
                          <option>Family Member</option>
                          <option>Witness / Other</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Misconduct category */}
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Category of Misconduct *</label>
                  <select required name="category" value={form.category} onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400/50 outline-none rounded-xl px-4 py-3 text-sm text-white transition-colors duration-200">
                    <option value="" disabled>Select a category…</option>
                    <option>Bribery / Fraud / Financial Misconduct</option>
                    <option>Misrepresentation of Job / Recruitment Information</option>
                    <option>Harassment / Discrimination / Abusive Conduct</option>
                    <option>Exploitation or Coercion of Workers</option>
                    <option>Document Falsification / Mishandling</option>
                    <option>Breach of Confidentiality</option>
                    <option>Policy or Ethical Standard Violation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Subject *</label>
                  <input required name="subject" value={form.subject} onChange={handleChange} placeholder="Brief subject of the misconduct report"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors duration-200" />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Detailed Description *</label>
                  <textarea required name="description" value={form.description} onChange={handleChange} rows={5}
                    placeholder="Describe the misconduct in as much detail as possible — including what happened, who was involved, when, and where…"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors duration-200 resize-none" />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Supporting Evidence (Optional)</label>
                  <textarea name="evidence" value={form.evidence} onChange={handleChange} rows={2}
                    placeholder="Describe any evidence you have (documents, screenshots, witnesses, dates, etc.)"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors duration-200 resize-none" />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required
                    className="mt-1 accent-amber-400 w-4 h-4 flex-shrink-0" />
                  <label className="text-slate-400 text-xs leading-relaxed">
                    I confirm that this report is submitted in good faith and to the best of my knowledge. I understand that
                    Electra will handle this report with confidentiality and take appropriate action based on the findings.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-slate-950 font-bold py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01]"
                >
                  {status === "submitting" ? "Submitting Report…" : "Submit Misconduct Report"}
                </button>
              </form>
            </FadeIn>
          )}
        </div>
      </section>

    </main>
  );
}