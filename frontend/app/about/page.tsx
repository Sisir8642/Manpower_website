"use client";

import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";


const values = [
  {
    icon: "⚖️",
    title: "Integrity & Ethics",
    desc: "We uphold the highest standards of honesty, fairness, and ethical conduct in all recruitment practices.",
  },
  {
    icon: "🔍",
    title: "Transparency & Accountability",
    desc: "We ensure clear communication, fair processes, and take full responsibility for commitments and service delivery.",
  },
  {
    icon: "📋",
    title: "	Legal, Corporate Compliance & Governance",
    desc: "We strictly adhere to all applicable national and international laws and corporate governance standards.",
  },
  {
    icon: "🏆",
    title: "Excellence & Professionalism",
    desc: "We deliver efficient, reliable, and hassle-free one-stop recruitment solutions for clients and candidates.",
  },
  {
    icon: "🤝",
    title: "Human Dignity & Worker Welfare",
    desc: "We are committed to protecting the rights, safety, and well-being of workers while promoting ethical migration.",
  },
];

const certifications = [
  {
    title: "EIQ",
    description:
      "Training programs focused on ethical recruitment practices and worker welfare.",
    certificates: [
      "/certificates/ethical-1.jpg",
      "/certificates/ethical-2.jpg",
      "/certificates/ethical-3.jpg",
    ],
  },
  {
    title: "Forced Labour Eradication",
    description:
      "Professional certifications related to overseas workforce mobilization.",
    certificates: [
      "/certificates/employment-1.jpg",
      "/certificates/employment-2.jpg",
    ],
  },
  {
    title: "IOM-IRIS",
    description:
      "Training focused on HR management and workforce planning.",
    certificates: [
      "/certificates/hr-1.jpg",
      "/certificates/hr-2.jpg",
      "/certificates/hr-3.jpg",
    ],
  },
  {
    title: "OTL & SEDEX",
    description:
      "Training focused on HR management and workforce planning.",
    certificates: [
      "/certificates/hr-1.jpg",
      "/certificates/hr-2.jpg",
      "/certificates/hr-3.jpg",
    ],
  },
  {
    title: "RBA Related Trainings",
    description:
      "Training focused on HR management and workforce planning.",
    certificates: [
      "/certificates/hr-1.jpg",
      "/certificates/hr-2.jpg",
      "/certificates/hr-3.jpg",
    ],
  },
];

const stats = [
  { number: "15+", label: "Years of Industry Experience" },
  { number: "3", label: "Skill Levels Served" },
  { number: "100%", label: "Regulatory Compliance" },
  { number: "∞", label: "Global Opportunities" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  const [open, setOpen] = useState(false);
const [index, setIndex] = useState(0);

const allCertificates = certifications.flatMap((category) =>
  category.certificates.map((image) => ({
    src: image,
  }))
);
  return (
    <main className="bg-slate-950 text-white font-sans overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80%] bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Company Registration No. 1850/082/083
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Electra </span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Global
            </span>
            <br />
            <span className="text-slate-300 text-4xl sm:text-5xl font-light tracking-widest">
              Recruitment
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-amber-400 font-medium italic mb-8 tracking-wide">
            "We Connect Talent"
          </p>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
         Electra Global Recruitment Pvt. Ltd. is a legally registered foreign employment recruitment agency in Nepal, operating under Company Registration No. 1850/082/083. The company is established with a clear vision to connect Nepalese talent with global employment opportunities and is led by a team of highly experienced professionals with over 15 years of expertise in the foreign employment sector.
          </p>

        -
        </div>
      </section>

      {/* ── ABOUT ELECTRA ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-2 mb-8">
              <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase">About Us</p>
              <h2 className="text-4xl font-extrabold leading-tight">
                Who We <span className="text-amber-400">Are</span>
              </h2>
            </div>
            <div className="space-y-5 text-slate-400 leading-relaxed text-[15px]">
              <p>
                With strong industry experience and an expanding global network, Electra specializes in sourcing and mobilizing skilled, semi-skilled, and professional Nepalese workforce for reputable international employers. We ensure the right talent is matched with the right opportunity through a structured, transparent, and efficient recruitment process.
              </p>
              <p>
                All recruitment activities are carried out in full compliance with the labor laws and regulations of Nepal and destination countries, promoting ethical, safe, and responsible migration practices. Our approach is guided by strong values of integrity, accountability, and professionalism
              </p>
              <p>
             Electra Global prioritizes the dignity, safety, and welfare of workers while delivering efficient, compliant, and high-quality human resource solutions to employers. Supported by a robust management system, the company is committed to maintaining the highest standards of quality, transparency, and continuous improvement.
              </p>
              <p>We strive to build long-term global partnerships based on trust, reliability, and mutual success creating sustainable opportunities for workers and delivering value to employers worldwide.</p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-400/40 hover:bg-slate-800/60 transition-all duration-300 group"
                >
                  <div className="text-3xl font-black text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm mt-2 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className="px-6 py-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">
              Direction
            </p>
            <h2 className="text-4xl font-extrabold">
              Mission & <span className="text-amber-400">Vision</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={100}>
              <div className="relative bg-gradient-to-br from-amber-400/10 to-orange-500/5 border border-amber-400/20 rounded-3xl p-10 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full -translate-y-8 translate-x-8" />
                <div className="relative z-10">
                  <div className="text-4xl mb-6">🔭</div>
                  <h3 className="text-2xl font-bold text-amber-400 mb-4">Vision</h3>
                  <p className="text-slate-300 leading-relaxed">
                    To be a leading global recruitment partner connecting worldwide employers with
                    Nepalese talent through reliable, ethical, and hassle-free recruitment services.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative bg-gradient-to-br from-sky-500/10 to-blue-600/5 border border-sky-500/20 rounded-3xl p-10 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/5 rounded-full -translate-y-8 translate-x-8" />
                <div className="relative z-10">
                  <div className="text-4xl mb-6">🎯</div>
                  <h3 className="text-2xl font-bold text-sky-400 mb-4">Mission</h3>
                  <p className="text-slate-300 leading-relaxed">
                   Our mission is to connect Nepalese migrant workers with foreign employment opportunities through ethical, transparent, and professional recruitment services, ensuring full compliance with the labor laws of Nepal and destination countries delivering reliable workforce solutions to global employers and promoting dignity and welfare for workers
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="px-6 py-14 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">
            What Drives Us
          </p>
          <h2 className="text-4xl font-extrabold">
            Core <span className="text-amber-400">Values</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <FadeIn key={val.title} delay={i * 80}>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 h-full hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            </FadeIn>
          ))}

          {/* Filler decorative card */}
          <FadeIn delay={values.length * 80}>
            <div className="bg-gradient-to-br from-amber-400/10 to-orange-500/5 border border-amber-400/20 rounded-2xl p-7 flex flex-col justify-center items-center text-center h-full">
              <div className="text-amber-400 font-black text-5xl mb-3">✦</div>
              <p className="text-amber-400 font-semibold text-sm tracking-wide uppercase">
                Built on Trust
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Every partnership we form is rooted in integrity and shared purpose.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CHAIRPERSON MESSAGE ── */}
      <section className="px-6 py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">
              Leadership
            </p>
            <h2 className="text-4xl font-extrabold">
              Message from the <span className="text-amber-400">Chairperson</span>
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-14">
              {/* Quote mark */}
              <div className="absolute top-8 left-10 text-8xl text-amber-400/10 font-serif leading-none select-none">
                "
              </div>

              <div className="relative z-10 space-y-5 text-slate-300 leading-relaxed text-[15px]">
                <p>
                  At Electra Global Recruitment Pvt. Ltd., our vision is to build a trusted, ethical,
                  and dynamic bridge connecting Nepalese talent with global employment opportunities.
                  As a young and forward-thinking entrepreneur, I strongly believe that Nepal holds
                  immense human potential that deserves recognition on the international stage.
                </p>
                <p>
                  With over a decade of experience in the Middle East recruitment sector and more
                  than five years in Nepal's foreign employment industry, we have developed a strong
                  understanding of both global employer expectations and the aspirations of Nepalese
                  workers.
                </p>
                <p>
                  At Electra Global, we are committed to providing seamless, end-to-end recruitment
                  services that ensure dignified, fair, and lawful employment opportunities for
                  workers, while delivering reliable and high-quality human resource solutions to our
                  global partners.
                </p>
                <p className="text-amber-400 font-semibold italic text-base">
                  "Together, We Connect Talent to Global Opportunity."
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-slate-800 pt-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black text-lg">
                  C
                </div>
                <div>
                  <div className="text-white font-bold">Chairperson</div>
                  <div className="text-slate-400 text-sm">Electra Global Recruitment Pvt. Ltd.</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
     <section className="px-6 py-24 max-w-6xl mx-auto">
  <div className="text-center mb-16">
    <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">
      Training & Certifications
    </p>

    <h2 className="text-4xl font-extrabold">
      Our <span className="text-amber-400">Credentials</span>
    </h2>
  </div>

  <div className="space-y-16">
    {certifications.map((category) => (
      <div key={category.title}>
        <h3 className="text-2xl font-bold text-white mb-6">
          {category.title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.certificates.map((image) => {
            const imageIndex = allCertificates.findIndex(
              (img) => img.src === image
            );

            return (
              <div
                key={image}
                onClick={() => {
                  setIndex(imageIndex);
                  setOpen(true);
                }}
                className="cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 group"
              >
                <img
                  src={image}
                  alt="Certificate"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ── CTA ── */}
      <section className="px-6 py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/8 rounded-full blur-3xl" />
        </div>
        <FadeIn className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to <span className="text-amber-400">Connect</span>?
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Whether you are an employer seeking reliable talent or a professional seeking a global
            opportunity — Electra Global is your trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20"
            >
              Get in Touch
            </a>
            <a
              href="/services"
              className="border border-slate-700 hover:border-amber-400/50 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Our Services
            </a>
          </div>
        </FadeIn>
      </section>
      <Lightbox
  open={open}
  close={() => setOpen(false)}
  index={index}
  slides={allCertificates}
/>
    </main>
  );
}