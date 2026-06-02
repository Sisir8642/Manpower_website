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

const channels = [
  {
    icon: "✉️",
    title: "Grievance Email",
    value: "grievance.electraglobal@gmail.com",
    desc: "Send a detailed written complaint to our dedicated grievance inbox.",
    action: { label: "Send Email", href: "mailto:grievance.electraglobal@gmail.com" },
    color: "emerald",
  },
  {
    icon: "📞",
    title: "Mobile / Hotline",
    value: "To be updated",
    desc: "Speak directly with our team for urgent concerns or immediate support.",
    action: { label: "Call Now", href: "tel:+" },
    color: "teal",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "Official Messaging Channel",
    desc: "Quick and accessible communication for registering concerns informally.",
    action: { label: "Message Us", href: "https://wa.me/" },
    color: "emerald",
  },
  {
    icon: "📝",
    title: "Website Grievance Form",
    value: "Submit Online",
    desc: "Use the secure form below to submit your grievance directly from this page.",
    action: { label: "Use Form Below", href: "#form" },
    color: "teal",
  },
  {
    icon: "🏢",
    title: "In-Person Reporting",
    value: "Sinamangal-9, Airport, Kathmandu",
    desc: "Visit our office directly to register a complaint with our team in person.",
    action: { label: "Get Directions", href: "https://maps.google.com/?q=Sinamangal-9,Kathmandu,Nepal" },
    color: "emerald",
  },
  {
    icon: "📬",
    title: "Written Complaint / Suggestion Box",
    value: "Available at our office",
    desc: "Submit a formal written complaint letter or drop it in our confidential suggestion box.",
    action: null,
    color: "teal",
  },
];

const principles = [
  { icon: "🔒", title: "Confidentiality", desc: "All grievances are handled with strict confidentiality. Your identity is protected throughout the process." },
  { icon: "⚖️", title: "Fairness & Impartiality", desc: "Every complaint is reviewed objectively without bias, ensuring a fair and balanced assessment." },
  { icon: "🛡️", title: "Non-Retaliation", desc: "Reporting a grievance in good faith will never result in any form of retaliation or negative consequence." },
  { icon: "⏱️", title: "Timely Review", desc: "We commit to acknowledging and reviewing all grievances promptly and keeping you informed of progress." },
];

const colorConfig: Record<string, { border: string; bg: string; text: string }> = {
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/5", text: "text-emerald-400" },
  teal:    { border: "border-teal-500/20",    bg: "bg-teal-500/5",    text: "text-teal-400" },
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function GrievancePage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", subject: "", message: "", consent: false });
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  }

  return (
    <main className="bg-zinc-950 text-white font-sans overflow-x-hidden min-h-screen">

      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Worker & Stakeholder Support
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-5 tracking-tight leading-tight">
            Grievance <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Support</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Electra is committed to a safe, transparent, and accountable recruitment environment.
            If you have a concern — at any stage of your recruitment or employment journey —
            we are here to listen, review, and act responsibly.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">How We Handle <span className="text-emerald-400">Grievances</span></h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">Every concern submitted through Electra's channels is treated with the following principles:</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 70}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center h-full hover:border-emerald-400/30 transition-all duration-300 shadow-md shadow-zinc-950/20">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2 tracking-wide">{p.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-zinc-900/30 border-y border-zinc-900 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">Reporting <span className="text-emerald-400">Channels</span></h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
              Choose the channel that is most accessible and comfortable for you. All channels are monitored regularly.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map((ch, i) => {
              const col = colorConfig[ch.color];
              return (
                <FadeIn key={ch.title} delay={i * 60}>
                  <div className={`border ${col.border} ${col.bg} rounded-2xl p-6 h-full flex flex-col shadow-md shadow-zinc-950/10`}>
                    <div className="text-2xl mb-3">{ch.icon}</div>
                    <h3 className={`font-bold text-sm mb-1 tracking-wide ${col.text}`}>{ch.title}</h3>
                    <p className="text-white text-xs font-semibold mb-2">{ch.value}</p>
                    <p className="text-zinc-400 text-xs leading-relaxed flex-1 mb-5">{ch.desc}</p>
                    {ch.action && (
                      <a
                        href={ch.action.href}
                        className={`inline-block text-xs font-bold px-4 py-2 rounded-lg border ${col.border} ${col.text} hover:bg-zinc-900/50 transition-colors duration-200 text-center`}
                      >
                        {ch.action.label} →
                      </a>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="form" className="px-6 py-20 max-w-2xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">Submit a <span className="text-emerald-400">Grievance</span></h2>
          <p className="text-zinc-400 text-xs sm:text-sm">Fill in the form below and our team will review your concern as soon as possible.</p>
        </FadeIn>

        {status === "success" ? (
          <FadeIn>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-10 text-center shadow-lg shadow-emerald-950/10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-emerald-400 font-bold text-xl mb-2 tracking-wide">Grievance Submitted</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Thank you for reaching out. We have received your complaint and will review it with full confidentiality.
                Our team will follow up through the contact details you provided.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl shadow-zinc-950/30">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors duration-200" />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors duration-200" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+977 XXXXXXXXXX"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors duration-200" />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">I am a *</label>
                  <select required name="type" value={form.type} onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 outline-none rounded-xl px-4 py-3 text-sm text-white transition-colors duration-200">
                    <option value="" disabled>Select…</option>
                    <option>Migrating Worker</option>
                    <option>Returnee Worker</option>
                    <option>Employer</option>
                    <option>Family Member</option>
                    <option>Stakeholder / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Subject *</label>
                <input required name="subject" value={form.subject} onChange={handleChange} placeholder="Brief subject of your concern"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors duration-200" />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Your Grievance *</label>
                <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Please describe your concern in detail…"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors duration-200 resize-none" />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required
                  className="mt-1 accent-emerald-500 w-4 h-4 flex-shrink-0 rounded border-zinc-800 bg-zinc-950 focus:ring-emerald-500/30" />
                <label className="text-zinc-400 text-xs leading-relaxed select-none cursor-pointer">
                  I confirm that the information provided is truthful and submitted in good faith. I understand that this grievance will be handled confidentially and reviewed by Electra's authorized personnel.
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:opacity-60 text-zinc-950 font-bold py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-emerald-950/20 mt-4"
              >
                {status === "submitting" ? "Submitting…" : "Submit Grievance"}
              </button>
            </form>
          </FadeIn>
        )}
      </section>
    </main>
  );
}