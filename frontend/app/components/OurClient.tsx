
"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

const CLIENTS = [
  { name: "AGFM", color: "#2563eb", img: "/images/client/agfm.png" },
  { name: "ARADA", color: "#f59e0b", img: "/images/client/arada.PNG" },
  { name: "armangroup", color: "#10b981", img: "/images/client/armangroup_logo.jpg" },
  { name: "CBRE Excellerate", color: "#3b82f6", img: "/images/client/CBRE-Excellerate.png" },
  { name: "Emirates", color: "#6b7280", img: "/images/client/emirates.png" },
  { name: "exclerrate", color: "#ef4444", img: "/images/client/exclerrate.PNG" },
  { name: "GCC", color: "#f97316", img: "/images/client/gcc-ginco-light-top.png" },
  { name: "High Power Signature", color: "#1a5c38", img: "/images/client/HP-Signature-Logo-01.png" },
  { name: "INVENTURE", color: "#3b82f6", img: "/images/client/inventure.png" },
  { name: "IPS", color: "#ef4444", img: "/images/client/IPS.png" },
  { name: "MARINA", color: "#1a5c38", img: "/images/client/marina-logo-NO-SHADOW.png" },
  { name: "PRESTIGE GROUP", color: "#10b981", img: "/images/client/prestiuge.png" },
  { name: "ServeU", color: "#ef4444", img: "/images/client/ServeU-Revised-Logo-13DEC-1.png" },
  { name: "SOBHA", color: "#1a1a1a", img: "/images/client/sobha.png" },
  { name: "Sodexo", color: "#f59e0b", img: "/images/client/Sodexo_Logotype_Blue.png" },
  { name: "Spark Holding", color: "#ef4444", img: "/images/client/spark-holding-footer.png" },
  { name: "tanmyah", color: "#ef4444", img: "/images/client/tanmyah.PNG" },
];

export default function ClientsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const pos = useRef(0);
  const [paused, setPaused] = useState(false);

  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 160 + 12;
    const totalWidth = CLIENTS.length * cardWidth;
    const animate = () => {
      if (!isDragging.current && !paused) {
        pos.current -= 0.6;
        if (Math.abs(pos.current) >= totalWidth) pos.current += totalWidth;
        track.style.transform = `translateX(${pos.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [paused]);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeft.current = pos.current;
    setPaused(true);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    pos.current = scrollLeft.current + (e.pageX - startX.current);
    if (trackRef.current) trackRef.current.style.transform = `translateX(${pos.current}px)`;
  };
  const onMouseUp = () => { isDragging.current = false; setPaused(false); };
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollLeft.current = pos.current;
    setPaused(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    pos.current = scrollLeft.current + (e.touches[0].pageX - startX.current);
    if (trackRef.current) trackRef.current.style.transform = `translateX(${pos.current}px)`;
  };
  const onTouchEnd = () => { isDragging.current = false; setPaused(false); };

  return (
    <div>
      <section className="w-full">
        <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-green-800 to-red-600 min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex items-center">
          
          {/* Background Dots Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          {/* Left Content - Mobile: column, Tablet/Desktop: row */}
          <div className="w-full lg:w-2/3 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 py-6 sm:py-8 z-10">
            
            {/* Icon - Responsive sizing */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 border border-white/40 rounded-2xl flex items-center justify-center shrink-0">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>

            {/* Text - Responsive typography */}
            <div className="flex-1">
              <div className="w-12 sm:w-16 h-1 bg-red-500 mb-2 sm:mb-3 rounded-full"></div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                Partner With Us
              </h2>
              
              <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
                Let's build a stronger workforce together.
                <br className="hidden sm:block" />
                Connect with our team to discuss your hiring needs.
              </p>
            </div>
          </div>

          {/* Right Red Section - Mobile: below, Desktop: absolute right */}
        <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full w-full lg:w-[42%] bg-red-600 lg:rounded-l-[120px] flex items-center justify-center px-4 sm:px-6 py-6 lg:py-0 mt-4 lg:mt-0">
  <Link href="/contact" className="w-full flex justify-center">
    <button className="bg-white text-red-600 font-semibold text-sm sm:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl flex items-center gap-2 sm:gap-4 shadow-lg hover:scale-105 transition-all duration-300 whitespace-normal text-center cursor-pointer">
      <span className="flex-1">Conduct Your Due Diligence for Your Supply Chain</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
    </button>
  </Link>
</div>
        </div>
      </section>

      {/* Responsive Image Section */}
<div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
  <div className="container mx-auto">
    <Image
      src="/images/supply.jpg"
      alt="Supply Chain Management"
      width={1600}
      height={900}
      className="w-full h-auto object-cover rounded-lg shadow-xl"
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1600px"
      priority
    />
  </div>
</div>
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#f0f4f8",
        paddingTop: 52,
        paddingBottom: 52,
        userSelect: "none",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* ── World map faint background ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='450' viewBox='0 0 900 450'%3E%3Ctext x='50%25' y='55%25' font-size='320' text-anchor='middle' dominant-baseline='middle' fill='%23c8d8e8' opacity='0.25' font-family='serif'%3E🌍%3C/text%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 40%",
        backgroundSize: "80%",
        opacity: 0.8,
      }} />

      {/* ── Green circuit lines top-left ── */}
      <svg style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }} width="220" height="160" viewBox="0 0 220 160" fill="none">
        <path d="M0 80 Q40 80 40 40 Q40 0 80 0" stroke="#1a5c38" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <path d="M0 110 Q60 110 60 60 Q60 20 110 20" stroke="#1a5c38" strokeWidth="1" fill="none" opacity="0.35"/>
        <circle cx="80" cy="0" r="3" fill="#1a5c38" opacity="0.6"/>
        <circle cx="110" cy="20" r="3" fill="#1a5c38" opacity="0.4"/>
        <circle cx="40" cy="40" r="3" fill="#c0392b" opacity="0.6"/>
      </svg>

      {/* ── Red/green diagonal stripes bottom-left ── */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, pointerEvents: "none" }} width="100" height="80" viewBox="0 0 100 80">
        <rect x="-10" y="50" width="140" height="14" fill="#1a5c38" transform="rotate(-30 0 80)" opacity="0.9"/>
        <rect x="-10" y="64" width="140" height="7" fill="#c0392b" transform="rotate(-30 0 80)" opacity="0.9"/>
      </svg>

      {/* ── Red diagonal stripe bottom-right ── */}
      <svg style={{ position: "absolute", bottom: 0, right: 0, pointerEvents: "none" }} width="120" height="80" viewBox="0 0 120 80">
        <rect x="-10" y="55" width="160" height="10" fill="#c0392b" transform="rotate(30 120 80)" opacity="0.9"/>
        <rect x="-10" y="67" width="160" height="5" fill="#1a5c38" transform="rotate(30 120 80)" opacity="0.6"/>
      </svg>

      {/* ── Heading block ── */}
      <div style={{ textAlign: "center", marginBottom: 36, position: "relative", zIndex: 1 }}>
        {/* Pill badge with dash lines */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 48, height: 1.5, background: "#c0392b" }} />
          <span style={{
            background: "#1a5c38", color: "#fff",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "5px 16px",
            borderRadius: 20,
          }}>Our Clients</span>
          <div style={{ width: 48, height: 1.5, background: "#c0392b" }} />
        </div>

        {/* Main headline */}
        <h2 style={{
          fontSize: 42, fontWeight: 900, margin: "0 0 6px",
          color: "#1a1a2e", lineHeight: 1.15,
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}>
          Trusted by{" "}
          <span style={{ color: "#1a5c38" }}>Leading Employers</span>
        </h2>

        {/* Red underline */}
        <div style={{ width: 60, height: 3, background: "#c0392b", borderRadius: 2, margin: "10px auto 18px" }} />

        {/* Subtitle */}
        <p style={{ color: "#000000", fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>
          We partner with responsible global employers and organizations worldwide to deliver ethical,<br />
           transparent and compliant recruitment solutions from Nepal.
        </p>
      </div>

      {/* ── Fade edges ── */}
      <div style={{
        position: "absolute", left: 0, top: 0, zIndex: 10,
        height: "100%", width: 80,
        background: "linear-gradient(to right, #f0f4f8, transparent)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, zIndex: 10,
        height: "100%", width: 80,
        background: "linear-gradient(to left, #f0f4f8, transparent)",
        pointerEvents: "none",
      }} />

      {/* ── Marquee track ── */}
      <div
        style={{ overflow: "hidden", cursor: "grab", position: "relative", zIndex: 2 }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          style={{ display: "flex", gap: 12, width: "max-content", willChange: "transform" }}
        >
          {items.map((client, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 160,
                height: 110,
                background: "#fff",
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                gap: 6,
              }}
            >
              {client.img ? (
                <>
                  <img
                    src={client.img}
                    alt={`${client.name} logo`}
                    style={{ height: 48, width: "auto", maxWidth: 130, objectFit: "contain" }}
                  />
                  <span style={{
                    color: client.color,
                    fontSize: 9.5,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}>
                    {client.name}
                  </span>
                </>
              ) : (
                <span style={{
                  color: client.color,
                  fontSize: 11,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  lineHeight: 1.4,
                }}>
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#2a7d56] mb-4">
          Recruitment <span className="text-red-600">Process</span> <span className="text-black"> Flow</span>
        </h3>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
        <img
          src="/images/industry/process.png"
          alt="Recruitment Process"
          className="w-4/3 h-auto rounded-2xl shadow-lg mb-7"
        />
        <Link
          href="/howWeWork/recruitement"
          className="mt-auto inline-block bg-[#1A55DB] text-white mt-5 px-5 py-2 rounded-lg hover:bg-blue-700 transition w-fit"
        >
          Read More →
        </Link>
      </div>
      


      </div>
  );
}