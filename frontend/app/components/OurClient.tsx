"use client";
import { useRef, useEffect, useState } from "react";

const CLIENTS = [
  { name: "Benchmark Electronics", color: "#2563eb" },
  { name: "Inventec Appliances", color: "#f59e0b" },
  { name: "Kaifa Technology", color: "#10b981" },
  { name: "Kobelco Precision", color: "#3b82f6" },
  { name: "CGH Industry", color: "#6b7280" },
  { name: "Micron Memory", color: "#ef4444" },
  { name: "Molex", color: "#f97316" },
  { name: "NXP Semiconductors", color: "#84cc16" },
  { name: "Flex Ltd", color: "#8b5cf6" },
  { name: "Jabil Circuit", color: "#06b6d4" },
  { name: "Celestica", color: "#ec4899" },
  { name: "Sanmina Corp", color: "#14b8a6" },
  { name: "Plexus Corp", color: "#f43f5e" },
  { name: "TTM Technologies", color: "#0ea5e9" },
  { name: "Fabrinet", color: "#a855f7" },
  { name: "Viavi Solutions", color: "#22c55e" },
  { name: "TE Connectivity", color: "#f59e0b" },
  { name: "Amphenol Corp", color: "#3b82f6" },
  { name: "Mouser Electronics", color: "#ef4444" },
  { name: "Arrow Electronics", color: "#10b981" },
  { name: "Avnet Inc", color: "#8b5cf6" },
  { name: "Vishay Intertechnology", color: "#f97316" },
  { name: "Sensata Technologies", color: "#06b6d4" },
  { name: "Knowles Corp", color: "#84cc16" },
  { name: "CTS Corporation", color: "#ec4899" },
];

export default function ClientsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const speed = useRef(0.6);
  const pos = useRef(0);
  const [paused, setPaused] = useState(false);

  // Duplicated list for seamless loop
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = 180 + 16; // card width + gap
    const totalWidth = CLIENTS.length * cardWidth;

    const animate = () => {
      if (!isDragging.current && !paused) {
        pos.current -= speed.current;
        if (Math.abs(pos.current) >= totalWidth) {
          pos.current += totalWidth;
        }
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
    const dx = e.pageX - startX.current;
    pos.current = scrollLeft.current + dx;
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(${pos.current}px)`;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    setPaused(false);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollLeft.current = pos.current;
    setPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].pageX - startX.current;
    pos.current = scrollLeft.current + dx;
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(${pos.current}px)`;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    setPaused(false);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#e8eef4] py-20 select-none">
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.25,
        }}
      />

      {/* Accent dots */}
      {[
        { top: "12%", left: "8%", bg: "#f97316" },
        { top: "70%", left: "5%", bg: "#3b82f6" },
        { top: "20%", left: "90%", bg: "#f97316" },
        { top: "75%", left: "85%", bg: "#3b82f6" },
        { top: "45%", left: "50%", bg: "#f97316" },
        { top: "85%", left: "60%", bg: "#3b82f6" },
      ].map((d, i) => (
        <span
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            top: d.top,
            left: d.left,
            width: 8,
            height: 8,
            background: d.bg,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Heading */}
      <h2
        className="mb-12 text-center text-5xl font-extrabold tracking-tight"
        style={{ color: "#ff0000", fontFamily: "'Georgia', serif" }}
      >
        Our Clients
      </h2>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#e8eef4] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#e8eef4] to-transparent" />

      {/* Marquee track */}
      <div
        className="cursor-grab active:cursor-grabbing overflow-hidden"
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
          className="flex gap-4 will-change-transform"
          style={{ width: "max-content" }}
        >
          {items.map((client, i) => (
            <div
              key={i}
              className="flex h-20 w-44 flex-shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/80 px-4 shadow-md backdrop-blur-sm transition-shadow hover:shadow-lg"
            >
              <span
                className="text-center text-xs font-bold uppercase tracking-wider leading-tight"
                style={{ color: client.color }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}