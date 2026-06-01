"use client";
import { useState, useEffect, useRef } from "react";

type Industry = {
  title: string;
  img: string;
};

export default function IndustriesGrid() {
  const images: Industry[] = [
    { title: "Agriculture", img: "/images/industry/Agriculture.jpg" },
    { title: "Construction", img: "/images/industry/Construction.PNG" },
    { title: "Facility Management", img: "/images/industry/Facility Management.jpeg" },
    { title: "Healthcare", img: "/images/industry/Healthcare.jpeg" },
    { title: "Hospitality", img: "/images/industry/Hospitality.jpg" },
    { title: "Manufacturing", img: "/images/industry/Manufacturing.jpg" },
    { title: "Oil & Gas", img: "/images/industry/Oil & Gas.jpg" },
    { title: "Retail", img: "/images/industry/Retail.PNG" },
    { title: "Security", img: "/images/industry/security.jfif" },
    { title: "Technical", img: "/images/industry/Technical.jpg" },
    { title: "Warehouse", img: "/images/industry/Warehouse.avif" },
  ];

  return (
    <section className="py-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center py-8">
        <h2 className="text-5xl font-extrabold text-[#2a7d56]">Services</h2>
        <div className="w-24 h-1 bg-[#eb232a] mx-auto mt-2 mb-4 rounded-full" />
        <h3 className="text-lg md:text-2xl font-semibold text-[#eb232a] italic mb-5">
          "To become a trusted global partner in ethical and responsible recruitment."
        </h3>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Electra Global Recruitment Pvt. Ltd. is committed to connecting capable Nepali human resources
          with responsible international employers through fair, transparent, and compliance-focused recruitment.
        </p>
      </div>

      {/* INDUSTRY TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-[#0E703E]">
        Industries We Serve
      </h2>

      {/* 3D CAROUSEL */}
      <Carousel3D images={images} />

      {/* RECRUITMENT SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#2a7d56] mb-4">
          Recruitment Process Flow
        </h3>
        <div className="w-24 h-1 bg-[#eb232a] mx-auto mb-8 rounded-full" />
        <img
          src="/images/industry/recruitment.png"
          alt="Recruitment Process"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      {/* FIND ELECTRA SECTION */}
      <div
  className="relative w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/industry/location.jpg')" }}
>
  {/* tri-color top bar */}
  <div className="absolute top-0 left-0 right-0 flex h-1.5 z-10">
    <div className="flex-[2] bg-[#2a7d56]" />
    <div className="flex-[2] bg-[#185FA5]" />
    <div className="flex-[1] bg-[#eb232a]" />
  </div>

  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* dot grid texture */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
    }}
  />

  {/* content */}
  <div className="relative max-w-6xl mx-auto px-4 py-20 flex justify-end">
    <div className="w-full md:w-1/2 text-center md:text-left">

      {/* glass card wrapper */}
      <div
        className="rounded-2xl p-8"
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* badge row */}
        <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
          <span className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: "rgba(42,125,86,0.25)", color: "#4ade80", border: "1px solid rgba(42,125,86,0.4)" }}>
            Nepal
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: "rgba(24,95,165,0.25)", color: "#60a5fa", border: "1px solid rgba(24,95,165,0.4)" }}>
            Middle East
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: "rgba(235,35,42,0.2)", color: "#f87171", border: "1px solid rgba(235,35,42,0.35)" }}>
            Europe
          </span>
        </div>

        {/* heading */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Find Electra
        </h3>

        {/* tri-color underline */}
        <div className="flex gap-1 mb-5 justify-center md:justify-start">
          <div className="h-1 w-8 rounded-full bg-[#2a7d56]" />
          <div className="h-1 w-8 rounded-full bg-[#185FA5]" />
          <div className="h-1 w-4 rounded-full bg-[#eb232a]" />
        </div>

        {/* your exact paragraph */}
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
          Find Electra in your recruitment market. Electra Global Recruitment Pvt. Ltd. serves employers
          and job seekers across key international labour markets, connecting capable Nepali talent with
          responsible global employment opportunities.
        </p>

        {/* buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <button
            onClick={() => (window.location.href = "/services")}
            className="px-6 py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
            style={{ background: "#2a7d56" }}
          >
            Explore Countries We Serve
          </button>

        </div>

      </div>
    </div>
  </div>
</div>

    </section>
  );
}

// ─── 3D CAROUSEL COMPONENT ─────────────────────────────────────────────────

function Carousel3D({ images }: { images: Industry[] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const total = images.length;

  const move = (dir: number) => {
    setCurrent((prev) => (prev + dir + total) % total);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => {
    let offset = index - current;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOff = Math.abs(offset);
    if (absOff > 2) return { opacity: 0, pointerEvents: "none", zIndex: 0 };

    const tx = offset * 220;
    const tz = absOff === 0 ? 0 : absOff === 1 ? -150 : -280;
    const ry = offset * -20;
    const scale = absOff === 0 ? 1 : absOff === 1 ? 0.75 : 0.55;
    const opacity = absOff === 0 ? 1 : absOff === 1 ? 0.7 : 0.4;

    return {
      transform: `translateX(calc(-50% + 50vw + ${tx}px)) translateY(-50%) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
      opacity,
      zIndex: 10 - absOff,
      pointerEvents: "auto",
    };
  };

  return (
    <div className="relative py-4">
      {/* CAROUSEL VIEWPORT */}
      <div
        className="relative h-[320px] md:h-[280px] overflow-hidden"
        style={{ perspective: "1200px" }}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) move(diff > 0 ? 1 : -1);
        }}
      >
        {images.map((item, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-0 w-[200px] md:w-[340px] h-[300px] md:h-[360px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
            style={getCardStyle(i)}
            onClick={() => setCurrent(i)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay always visible */}
            <div className="absolute inset-0 bg-black/35" />
            {/* Label at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-semibold text-sm md:text-base capitalize">
                {item.title}
              </p>
            </div>
            {/* Green accent border on active */}
            {i === current && (
              <div className="absolute inset-0 rounded-2xl ring-4 ring-[#2a7d56] ring-offset-0" />
            )}
          </div>
        ))}
      </div>

      {/* ACTIVE TITLE */}
      <p className="text-center text-[#2a7d56] font-semibold text-lg capitalize mt-2 tracking-wide transition-all duration-300">
        {images[current].title}
      </p>

      {/* ARROW BUTTONS */}
      <button
        onClick={() => move(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#2a7d56] hover:bg-[#1f5a3f] text-white w-11 h-11 rounded-full flex items-center justify-center text-xl transition shadow-lg"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        onClick={() => move(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#2a7d56] hover:bg-[#1f5a3f] text-white w-11 h-11 rounded-full flex items-center justify-center text-xl transition shadow-lg"
        aria-label="Next"
      >
        →
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-[#2a7d56]"
                : "w-2.5 h-2.5 bg-gray-300"
            }`}
            aria-label={`Go to ${images[i].title}`}
          />
        ))}
      </div>
    </div>
  );
}