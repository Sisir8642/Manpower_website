
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
    color: "blue",
  },
  {
    icon: "📞",
    title: "Mobile / Hotline",
    value: "To be updated",
    desc: "Speak directly with our team for urgent concerns or immediate support.",
    action: { label: "Call Now", href: "tel:+" },
    color: "blue",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "Official Messaging Channel",
    desc: "Quick and accessible communication for registering concerns informally.",
    action: { label: "Message Us", href: "https://wa.me/" },
    color: "blue",
  },
  {
    icon: "📝",
    title: "Website Grievance Form",
    value: "Submit Online",
    desc: "Use the secure form below to submit your grievance directly from this page.",
    action: { label: "Use Form Below", href: "#form" },
    color: "blue",
  },
  {
    icon: "🏢",
    title: "In-Person Reporting",
    value: "Sinamangal-9, Airport, Kathmandu",
    desc: "Visit our office directly to register a complaint with our team in person.",
    action: { label: "Get Directions", href: "https://maps.google.com/?q=Sinamangal-9,Kathmandu,Nepal" },
    color: "blue",
  },
  {
    icon: "📬",
    title: "Written Complaint / Suggestion Box",
    value: "Available at our office",
    desc: "Submit a formal written complaint letter or drop it in our confidential suggestion box.",
    action: null,
    color: "blue",
  },
];

const principles = [
  { icon: "🔒", title: "Confidentiality", desc: "All grievances are handled with strict confidentiality. Your identity is protected throughout the process." },
  { icon: "⚖️", title: "Fairness & Impartiality", desc: "Every complaint is reviewed objectively without bias, ensuring a fair and balanced assessment." },
  { icon: "🛡️", title: "Non-Retaliation", desc: "Reporting a grievance in good faith will never result in any form of retaliation or negative consequence." },
  { icon: "⏱️", title: "Timely Review", desc: "We commit to acknowledging and reviewing all grievances promptly and keeping you informed of progress." },
];

const colorConfig: Record<string, { border: string; bg: string; text: string }> = {
  blue:   { border: "border-blue-400/25",  bg: "bg-blue-400/5",  text: "text-blue-600" },
  green:  { border: "border-green-400/25",  bg: "bg-green-400/5",  text: "text-green-600" },
  sky:    { border: "border-sky-400/25",    bg: "bg-sky-400/5",    text: "text-sky-600" },
  emerald:{ border: "border-emerald-400/25",bg: "bg-emerald-400/5",text: "text-emerald-600" },
  violet: { border: "border-violet-400/25", bg: "bg-violet-400/5", text: "text-violet-600" },
  rose:   { border: "border-rose-400/25",   bg: "bg-rose-400/5",   text: "text-rose-600" },
  teal:   { border: "border-teal-400/25",   bg: "bg-teal-400/5",   text: "text-teal-600" },
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
    <main className="font-sans overflow-x-hidden bg-[#E1F1E6]">

      {/* ── HERO ── */}
      <section className="relative py-8 px-6 text-center bg-[#E1F1E6]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5 text-emerald-700">
            Grievance <span className="bg-red-600 bg-clip-text text-transparent">Support</span>
          </h1>
          <p className="text-black text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Electra is committed to a safe, transparent, and accountable recruitment environment.
            If you have a concern — at any stage of your recruitment or employment journey —
            we are here to listen, review, and act responsibly.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-5xl mx-auto bg-[#E1F1E6]">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">How We Handle <span className="text-emerald-700">Grievances</span></h2>
          <p className="text-black text-sm max-w-xl mx-auto">Every concern submitted through Electra's channels is treated with the following principles:</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 70}>
              <div className="bg-[#EFF7FE] border border-slate-800 rounded-2xl p-6 text-center h-full">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-black font-bold text-sm mb-2">{p.title}</h3>
                <p className="text-black text-xs leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 py-2 bg-[#E1F1E6] backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3 text-emerald-700">Reporting <span className="text-red-600">Channels</span></h2>
            <p className="text-black text-sm max-w-xl mx-auto">
              Choose the channel that is most accessible and comfortable for you. All channels are monitored regularly.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map((ch, i) => {
              const col = colorConfig[ch.color];
              return (
                <FadeIn key={ch.title} delay={i * 60}>
                  <div className={`border-[#858F9D] bg-[#EFF7FE] rounded-2xl p-6 h-full text-black flex flex-col shadow-md shadow-zinc-950/10`}>
                    <div className="text-2xl mb-3">{ch.icon}</div>
                    <h3 className={`font-bold text-sm mb-1 ${col.text}`}>{ch.title}</h3>
                    <p className="text-black text-xs font-semibold mb-2">{ch.value}</p>
                    <p className="text-black text-xs leading-relaxed flex-1 mb-4">{ch.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GRIEVANCE FORM ── */}
    
    </main>
  );
}