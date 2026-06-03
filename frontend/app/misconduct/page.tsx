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
  { icon: "✉️", label: "Official Misconduct Reporting Email", desc: "Send a detailed written report to Electra's designated misconduct reporting inbox.", color: "emerald" },
  { icon: "📞", label: "Dedicated Hotline Number", desc: "Speak directly with authorized compliance personnel for urgent misconduct concerns.", color: "teal" },
  { icon: "🏢", label: "Written Submission at Office", desc: "Submit a formal written report addressed to management or the compliance team at our Kathmandu office.", color: "emerald" },
  { icon: "📬", label: "Suggestion / Reporting Box", desc: "Drop a written, confidential report in our secure reporting box available at the office.", color: "teal" },
  { icon: "🌐", label: "Website Reporting Form", desc: "Use the secure online form below to submit your report directly from this page.", color: "emerald" },
  { icon: "👤", label: "Direct Communication with Management", desc: "Contact authorized management or compliance personnel directly for sensitive matters requiring discretion.", color: "teal" },
];

const colorConfig: Record<string, { border: string; bg: string; text: string }> = {
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/5", text: "text-emerald-400" },
  teal:    { border: "border-teal-500/20",    bg: "bg-teal-500/5",    text: "text-teal-400" },
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
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("success");
  }

  return (
    <main className="bg-[#E1F1E6] text-green-700 overflow-x-hidden min-h-screen">

      <section className="relative py-8 px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

         
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-5 tracking-tight leading-tight">
            Misconduct <span className="text-red-600">Reporting</span>
          </h1>
          <p className="text-black text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Electra is committed to a recruitment environment grounded in integrity, dignity, and respect.
            We encourage anyone — workers, employees, employers, or partners — to report suspected
            misconduct through our safe and accessible reporting mechanism.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">What Can Be <span className="text-red-600">Reported</span></h2>
          <p className="text-black text-xs sm:text-sm max-w-xl mx-auto">
            Reports may relate to conduct at any stage — recruitment, documentation, deployment,
            post-employment support, office operations, or any interaction connected with Electra's services.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {misconductExamples.map((item, i) => (
            <FadeIn key={item.label} delay={i * 50}>
              <div className="bg-[#F1F6FE] border border-zinc-800 rounded-2xl p-5 flex items-start gap-3 hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 h-full shadow-md shadow-zinc-950/10">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="text-black text-xs leading-snug font-medium tracking-wide">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 py-2 bg-[#E1F1E6]  backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">Our <span className="text-red-600">Commitment</span></h2>
            <p className="text-black text-xs sm:text-sm max-w-xl mx-auto">
              Every report submitted to Electra is handled with the following principles — no exceptions.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commitments.map((c, i) => (
              <FadeIn key={c.title} delay={i * 60}>
                <div className="bg-[#F1F6FE] border border-zinc-800 rounded-2xl p-6 h-full hover:border-emerald-400/30 transition-colors duration-300 shadow-md shadow-zinc-950/20">
                  <div className="text-2xl mb-3">{c.icon}</div>
                  <h3 className="text-blue-600 font-bold text-sm mb-2 tracking-wide">{c.title}</h3>
                  <p className="text-black text-xs leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">Reporting <span className="text-red-600">Channels</span></h2>
          <p className="text-black text-xs sm:text-sm max-w-xl mx-auto">
            Use whichever channel you feel most comfortable with. All reports are treated equally.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reportingChannels.map((ch, i) => {
            const col = colorConfig[ch.color];
            return (
              <FadeIn key={ch.label} delay={i * 60}>
                <div className="border border-blue-500/30 bg-[#F1F6FE] rounded-2xl p-6 h-full shadow-md shadow-zinc-950/10">
  <div className="text-2xl mb-3">{ch.icon}</div>

  <h3 className="font-bold text-sm mb-2 tracking-wide text-blue-600">
    {ch.label}
  </h3>

  <p className="text-xs leading-relaxed text-black">
    {ch.desc}
  </p>
</div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      
    </main>
  );
}