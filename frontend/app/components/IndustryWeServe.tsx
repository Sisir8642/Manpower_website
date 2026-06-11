
"use client";

import { useState, useEffect, useRef } from "react";
import Services from "./Services";
import { motion } from 'framer-motion';
import { HeartHandshake, ShieldCheck, Globe2, Star, Quote } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

type Industry = {
  title: string;
  img: string;
};

export default function IndustriesGrid() {
  const images: Industry[] = [
    { title: "Manufacturing", img: "/images/industry/Manufacturing.jpg" },
    { title: "Agriculture", img: "/images/industry/Agriculture.jpg" },
    { title: "Construction", img: "/images/industry/Construction.PNG" },
    { title: "Facility Management", img: "/images/industry/Facility Management.jpeg" },
    { title: "Healthcare", img: "/images/industry/Healthcare.jpeg" },
    { title: "Hospitality", img: "/images/industry/Hospitality.jpg" },
    { title: "Oil & Gas", img: "/images/industry/Oil & Gas.jpg" },
    { title: "Retail", img: "/images/industry/Retail.PNG" },
    { title: "Security", img: "/images/industry/security.jfif" },
    { title: "Technical", img: "/images/industry/Technical.jpg" },
    { title: "Warehouse", img: "/images/industry/Warehouse.avif" },
  ];

  const features = [
    {
      icon: HeartHandshake,
      title: 'Ethical Vision',
      description: 'We believe in people first, always.',
      bgColor: 'bg-white',
      iconColor: 'text-emerald-700',
      borderColor: 'border-white',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance Leadership',
      description: 'Upholding international standards with integrity.',
      bgColor: 'bg-white',
      iconColor: 'text-red-600',
      borderColor: 'border-white',
    },
    {
      icon: Globe2,
      title: 'Global Partnership',
      description: 'Building long-term relationships across borders.',
      bgColor: 'bg-white',
      iconColor: 'text-emerald-700',
      borderColor: 'border-white',
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Electra Global Recruitment Pvt Ltd is the most reliable recruitment partner we have worked with in Nepal. Their understanding of the Nepalese labor market is unmatched. They managed the entire process flawlessly—from sourcing skilled, disciplined candidates to handling all Nepal Department of Foreign Employment (DoFE) paperwork quickly. The deployment was on time, and the worker retention rate has been exceptional. Their commitment to ethical recruitment and candidate vetting makes them stand out from other agencies in Nepal. Highly recommended!",
      name: "Sarath Sasi",
      title: "Director of Marketing & Operation",
      company: "Electra Labor Recruitment Services L.L.C.",
      rating: 5,
      image: "/images/testimonial/sarath.jpg",
    },
    {
      id: 2,
      quote: "Electra Global Recruitment Pvt. Ltd. is a committed and vision-oriented recruitment organization with a clear focus on achieving excellence in its business goals. The company demonstrates strong professionalism, dedication, and a responsible approach toward delivering reliable recruitment services.We appreciate Electra Global’s commitment to ethical recruitment, quality service, and long-term business growth. We sincerely wish Electra Global Recruitment Pvt. Ltd. continued success, progress, and prosperity in all its future endeavors.",
      name: "RENGARAJAN",
      title: "Group HR Manager",
      company: "JUST GROUP LLC",
      rating: 5,
      image: "/images/testimonial/rengarajan.jpg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
     <div
        className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/industry/location.jpg')",
        }}
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

              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                Find Electra in your recruitment market. Electra Global Recruitment Pvt. Ltd. serves employers
                and job seekers across key international labour markets, connecting capable Nepali talent with
                responsible global employment opportunities.
              </p>

              {/* buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <button
                  onClick={() => (window.location.href = "/services/serveCountries")}
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
   <section className="py-2">
  <div className="relative overflow-hidden" style={{ background: "#0f2d1f" }}>
 
    {/* Top gradient bar */}
    <div className="absolute top-0 left-0 right-0 h-1 z-10"
      style={{ background: "linear-gradient(90deg, #c0392b, #1a5c38, #c0392b)" }} />
 
    {/* Radial glow */}
    <div className="absolute pointer-events-none"
      style={{
        top: "-60px", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 360,
        background: "radial-gradient(ellipse, rgba(26,92,56,0.55) 0%, transparent 70%)",
      }} />
 
    {/* Faint grid */}
    <div className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: "56px 56px",
      }} />
 
    {/* Large faint watermark */}
    <div className="absolute pointer-events-none select-none"
      style={{
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        fontSize: 480, fontWeight: 900, lineHeight: 1,
        color: "rgba(255,255,255,0.025)", fontFamily: "Georgia, serif",
      }}>S</div>
 
    {/* Corner lines top-left */}
    <svg className="absolute top-0 left-0 pointer-events-none" width="200" height="160" viewBox="0 0 200 160" fill="none">
      <path d="M0 80 Q40 80 40 40 Q40 0 80 0" stroke="#1a5c38" strokeWidth="1.5" opacity="0.4"/>
      <path d="M0 110 Q60 110 60 60 Q60 20 110 20" stroke="#1a5c38" strokeWidth="1" opacity="0.25"/>
      <circle cx="80" cy="0" r="3" fill="#1a5c38" opacity="0.5"/>
      <circle cx="40" cy="40" r="3" fill="#c0392b" opacity="0.5"/>
    </svg>
 
    {/* Corner lines top-right */}
    <svg className="absolute top-0 right-0 pointer-events-none" style={{ transform: "scaleX(-1)" }} width="200" height="160" viewBox="0 0 200 160" fill="none">
      <path d="M0 80 Q40 80 40 40 Q40 0 80 0" stroke="#c0392b" strokeWidth="1.5" opacity="0.3"/>
      <circle cx="80" cy="0" r="3" fill="#c0392b" opacity="0.4"/>
      <circle cx="40" cy="40" r="2.5" fill="#1a5c38" opacity="0.35"/>
    </svg>
 
    {/* Content */}
    <div className="max-w-3xl mx-auto text-center py-16 px-6 relative z-10">
 
      {/* Eyebrow badge */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="h-0.5 w-11 rounded-full" style={{ background: "#c0392b" }} />
        <span className="text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
          style={{ background: "#1a5c38" }}>What We Offer</span>
        <div className="h-0.5 w-11 rounded-full" style={{ background: "#c0392b" }} />
      </div>
 
      {/* Heading */}
      <h2 className="font-extrabold text-white mb-3"
        style={{ fontSize: 52, fontFamily: "'Georgia', serif", lineHeight: 1.1 }}>
        Our <span style={{ color: "#4ade80" }}>Services</span>
      </h2>
 
      {/* Red underline */}
      <div className="mx-auto rounded-full mb-5" style={{ width: 56, height: 3, background: "#c0392b" }} />
 
      {/* Vision quote */}
      <h3 className="text-lg md:text-xl font-semibold italic mb-5" style={{ color: "#fca5a5" }}>
        "To become a trusted global partner in ethical and responsible recruitment."
      </h3>
 
      {/* Body */}
      <p className="leading-relaxed text-base md:text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
        Electra Global Recruitment Pvt. Ltd. is committed to connecting capable Nepali human resources
        with responsible international employers through fair, transparent, and compliance-focused recruitment.
      </p>
    </div>
  </div>
   <Services />

      {/* INDUSTRY TITLE */}
<div className="bg-[#EFF5FE] pt-8 relative overflow-hidden">

  {/* Decorative SVG background */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.4" opacity="0.15" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    {/* Blobs */}
    <circle cx="5%" cy="15%" r="80" fill="#2a7d56" opacity="0.07" />
    <circle cx="92%" cy="12%" r="60" fill="#3b82f6" opacity="0.08" />
    <circle cx="88%" cy="85%" r="100" fill="#2a7d56" opacity="0.06" />
    <circle cx="8%" cy="80%" r="70" fill="#dc2626" opacity="0.06" />
    <circle cx="50%" cy="95%" r="50" fill="#3b82f6" opacity="0.05" />
    {/* Triangles */}
    <polygon points="650,30 680,80 620,80" fill="#2a7d56" opacity="0.06" />
    <polygon points="40,160 70,100 10,100" fill="#3b82f6" opacity="0.07" />
    {/* Rotated rectangles */}
    <rect x="58%" y="8" width="60" height="60" rx="12" fill="none" stroke="#2a7d56" strokeWidth="1.2" opacity="0.12" transform="rotate(20,400,38)" />
    <rect x="5%" y="55%" width="45" height="45" rx="8" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.12" transform="rotate(-15,60,220)" />
    {/* Diagonal lines */}
    <line x1="0" y1="100%" x2="100%" y2="0" stroke="#3b82f6" strokeWidth="0.5" opacity="0.06" />
    <line x1="0" y1="80%" x2="80%" y2="0" stroke="#2a7d56" strokeWidth="0.5" opacity="0.05" />
    {/* Dot accents */}
    <circle cx="30%" cy="5%" r="6" fill="#dc2626" opacity="0.18" />
    <circle cx="70%" cy="92%" r="8" fill="#3b82f6" opacity="0.15" />
    <circle cx="95%" cy="50%" r="5" fill="#2a7d56" opacity="0.2" />
    <circle cx="3%" cy="50%" r="4" fill="#2a7d56" opacity="0.18" />
  </svg>

  {/* Content */}
  <div className="relative z-10 text-center px-4">
    <h2 className="text-5xl font-extrabold text-[#2a7d56] text-center">
      Industries <span className="text-red-600">We</span>{" "}
      <span className="text-black">Serve</span>
    </h2>
    <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded-full" />

    {/* 3D CAROUSEL */}
    <Carousel3D images={images} />
  </div>

  {/* Bottom gradient bar */}
  <div
    className="absolute bottom-0 left-0 right-0 h-1"
    style={{ background: "linear-gradient(90deg, #2a7d56, #3b82f6, #dc2626, #3b82f6, #2a7d56)" }}
  />
</div>

  
     

      {/* TESTIMONIALS SECTION - 4 COLUMNS WITH REVIEWER IMAGES */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden" style={{ background: "#0f2d1f" }}>

  {/* ── Large faint quote mark watermark center ── */}
  <div style={{
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 600, lineHeight: 1, fontFamily: "Georgia, serif",
    color: "rgba(255,255,255,0.03)", pointerEvents: "none",
    userSelect: "none", whiteSpace: "nowrap", zIndex: 0,
  }}>"</div>

  {/* ── Radial glow top-center (warm light source) ── */}
  <div style={{
    position: "absolute", top: "-80px", left: "50%",
    transform: "translateX(-50%)",
    width: 700, height: 400,
    background: "radial-gradient(ellipse, rgba(26,92,56,0.45) 0%, transparent 70%)",
    pointerEvents: "none", zIndex: 0,
  }} />

  {/* ── Radial glow bottom-right accent ── */}
  <div style={{
    position: "absolute", bottom: "-60px", right: "-60px",
    width: 400, height: 400,
    background: "radial-gradient(ellipse, rgba(192,57,43,0.18) 0%, transparent 70%)",
    pointerEvents: "none", zIndex: 0,
  }} />

  {/* ── Subtle grid lines ── */}
  <div style={{
    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }} />

  {/* ── Floating star particles ── */}
  {[
    { top: "8%",  left: "7%",  size: 18, opacity: 0.12 },
    { top: "14%", left: "88%", size: 14, opacity: 0.1  },
    { top: "55%", left: "3%",  size: 12, opacity: 0.08 },
    { top: "70%", left: "93%", size: 16, opacity: 0.1  },
    { top: "30%", left: "95%", size: 10, opacity: 0.07 },
    { top: "80%", left: "15%", size: 12, opacity: 0.08 },
    { top: "42%", left: "50%", size: 8,  opacity: 0.05 },
  ].map((s, i) => (
    <svg key={i} style={{
      position: "absolute", top: s.top, left: s.left,
      pointerEvents: "none", zIndex: 0, opacity: s.opacity,
    }} width={s.size} height={s.size} viewBox="0 0 24 24">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="#f59e0b" />
    </svg>
  ))}

  {/* ── Top-left small quote accent ── */}
  <div style={{
    position: "absolute", top: 24, left: 32,
    fontSize: 120, lineHeight: 1, fontFamily: "Georgia, serif",
    color: "rgba(26,92,56,0.25)", pointerEvents: "none", zIndex: 0,
  }}>"</div>

  {/* ── Bottom-right small quote accent ── */}
  <div style={{
    position: "absolute", bottom: 16, right: 36,
    fontSize: 120, lineHeight: 1, fontFamily: "Georgia, serif",
    color: "rgba(192,57,43,0.18)", pointerEvents: "none", zIndex: 0,
  }}>"</div>

  {/* ── Thin green top border accent ── */}
  <div style={{
    position: "absolute", top: 0, left: 0, right: 0,
    height: 4,
    background: "linear-gradient(90deg, #c0392b, #1a5c38, #c0392b)",
    zIndex: 1,
  }} />

  {/* ── Content ── */}
  <div className="max-w-7xl mx-auto relative" style={{ zIndex: 2 }}>

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      {/* Eyebrow label */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div style={{ width: 40, height: 1.5, background: "#c0392b" }} />
        <span style={{
          color: "#f59e0b", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase",
        }}>Client Testimonials</span>
        <div style={{ width: 40, height: 1.5, background: "#c0392b" }} />
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-3"
        style={{ color: "#ffffff", fontFamily: "'Georgia', serif", lineHeight: 1.15 }}>
        What Our <span style={{ color: "#4ade80" }}>Clients</span> Say
      </h2>
      <div style={{ width: 56, height: 3, background: "#c0392b", borderRadius: 2, margin: "12px auto 18px" }} />
      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15.5, lineHeight: 1.7, margin: 0 }}>
        Trusted recruitment solutions. Proven results.<br />
        Hear from the organizations we're proud to partner with.
      </p>
    </motion.div>

    {/* Testimonials Grid */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: 20,
            backdropFilter: "blur(8px)",
            display: "flex", flexDirection: "column", height: "100%",
            transition: "all 0.3s",
          }}
          className="hover:border-emerald-500/40 hover:bg-white/10"
        >
          {/* Reviewer row */}
          <div className="flex items-center gap-3 mb-4">
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              overflow: "hidden", background: "#1a3d2a", flexShrink: 0,
              border: "2px solid rgba(74,222,128,0.3)",
            }}>
              {testimonial.image ? (
                <Image src={testimonial.image} alt={testimonial.name}
                  width={48} height={48} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-lg"
                  style={{ color: "#4ade80" }}>
                  {testimonial.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: 13, margin: 0 }}>{testimonial.name}</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", margin: 0 }}>{testimonial.title}</p>
            </div>
          </div>

          {/* Quote icon */}
          <div className="mb-3">
            <Quote className="w-7 h-7" style={{ color: "#4ade80", opacity: 0.4 }} />
          </div>

          {/* Quote text */}
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.65, fontSize: 13.5, flexGrow: 1, marginBottom: 12 }}>
            &ldquo;{testimonial.quote.length > 100 ? testimonial.quote.substring(0, 600) + "..." : testimonial.quote}&rdquo;
          </p>

          {/* Stars */}
          <div className="flex items-center gap-0.5 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Company */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 12, marginTop: 4 }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 600, margin: 0 }}>
              {testimonial.company}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
</section>
</div>
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