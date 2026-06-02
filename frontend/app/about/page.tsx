"use client";

import { useEffect, useRef, useState } from "react";

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
        transform: inView ? "translateY(0)" : "translateY(24px)", 
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#E1F1E6] text-slate-900 font-sans overflow-x-hidden min-h-screen">
      
      <section className="relative pt-20 pb-12 px-6 sm:px-8">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 border border-red-600/20 bg-red-500/10 text-red-700 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            Company Registration No. 1850/082/083
          </div>

          <h1 className="text-4xl sm:text-6xl font-black leading-[1.1] tracking-tight mb-4 text-slate-950">
            Electra{" "}
            <span className="bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
              Global
            </span>
            <br />
            <span className="text-slate-700 text-2xl sm:text-4xl font-light tracking-widest block mt-2">
              Recruitment
            </span>
          </h1>

          <p className="text-base sm:text-lg text-red-600 font-bold italic mb-6 tracking-wide">
            "We Connect Talent"
          </p>

          <p className="text-slate-800 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-semibold">
            Electra Global Recruitment Pvt. Ltd. is a legally registered foreign employment recruitment agency in Nepal, operating under Company Registration No. 1850/082/083. The company is established with a clear vision to connect Nepalese talent with global employment opportunities and is led by a team of highly experienced professionals with over 15 years of expertise in the foreign employment sector.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 pt-8 max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <FadeIn>
            <div className="space-y-1 mb-6">
              <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight text-slate-950">
                Who We <span className="text-emerald-700">Are</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm font-medium">
              <p>
                With strong industry experience and an expanding global network, Electra specializes in sourcing and mobilizing skilled, semi-skilled, and professional Nepalese workforce for reputable international employers. We ensure the right talent is matched with the right opportunity through a structured, transparent, and efficient recruitment process.
              </p>
              <p>
                All recruitment activities are carried out in full compliance with the labor laws and regulations of Nepal and destination countries, promoting ethical, safe, and responsible migration practices. Our approach is guided by strong values of integrity, accountability, and professionalism.
              </p>
              <p>
                Electra Global prioritizes the dignity, safety, and welfare of workers while delivering efficient, compliant, and high-quality human resource solutions to employers. Supported by a robust management system, the company is committed to maintaining the highest standards of quality, transparency, and continuous improvement.
              </p>
              <p className="text-slate-950 font-bold border-l-2 border-emerald-700 pl-3 mt-4 italic">
                We strive to build long-term global partnerships based on trust, reliability, and mutual success creating sustainable opportunities for workers and delivering value to employers worldwide.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 gap-4 bg-white/20 p-4 rounded-3xl border border-white/30 shadow-inner">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-5 hover:border-emerald-600/40 hover:bg-white transition-all duration-300 group shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-black text-emerald-700 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-800 text-[11px] sm:text-xs mt-1.5 leading-snug font-extrabold tracking-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>
<<<<<<< HEAD

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

      
      <Lightbox
  open={open}
  close={() => setOpen(false)}
  index={index}
  slides={allCertificates}
/>
=======
      
>>>>>>> 73586147af476cfcf73d593f4776e4f359028c4c
    </main>
  );
}
