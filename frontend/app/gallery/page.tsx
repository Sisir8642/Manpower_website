
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* -------------------- Intersection Hook -------------------- */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* -------------------- Fade Animation Wrapper -------------------- */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* -------------------- Dynamic Gallery Data -------------------- */
const galleryItems = [
  {
    id: 1,
    label: "Employer Consultation",
    category: "Consultation",
    date: "2025",
    image: "/gallery/consultation-1.jpg",
    aspectTall: false,
  },

];

/* -------------------- Component -------------------- */
export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const lightboxItem = galleryItems.find((g) => g.id === lightbox);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <main className="bg-[#E1F1E6] text-red-600 min-h-screen">

      {/* ---------------- HERO (UNCHANGED) ---------------- */}
      <section className="relative py-24 text-center px-6">
        <h1 className="text-5xl font-bold text-emerald-700">
          Our <span className="text-red-600">Gallery</span>
        </h1>
        <p className="text-black mt-4 max-w-xl mx-auto text-lg">
          A visual record of our programs, training, consultations, and campaigns.
        </p>
      </section>

      {/* ---------------- IMAGE GRID ONLY ---------------- */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

          {galleryItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 40} className="break-inside-avoid">
              <div
                onClick={() => setLightbox(item.id)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800"
              >
                {/* ONLY IMAGE */}
                <div className={`relative w-full ${item.aspectTall ? "h-72" : "h-56"}`}>
                  <Image
                    src={item.image}
                    alt="gallery"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </FadeIn>
          ))}

        </div>
      </section>

      {/* ---------------- LIGHTBOX (UNCHANGED FUNCTIONALITY) ---------------- */}
      {lightboxItem && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-zinc-900 rounded-2xl overflow-hidden"
          >
            <div className="relative w-full h-[450px]">
              <Image
                src={lightboxItem.image}
                alt="gallery"
                fill
                className="object-cover"
              />
            </div>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 text-white bg-zinc-800 px-3 py-2 rounded-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}