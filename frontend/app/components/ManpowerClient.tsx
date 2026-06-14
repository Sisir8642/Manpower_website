'use client';

import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface SliderImage {
  id: number;
  image: string;
}

interface Slider {
  id: number;
  heading: string;
  paragraph: string;
  images: SliderImage[];
}

export default function ManpowerClient() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: sliderData, isLoading } = useQuery({
    queryKey: ['slider'],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/sliders/`);
      if (!res.ok) throw new Error("Failed slider");
      return res.json();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const images = sliderData?.results
    ? sliderData.results.flatMap((slider: Slider) => slider.images)
    : (sliderData ?? []).flatMap((slider: Slider) => slider.images);

const currentSlider = sliderData?.[0];

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (isLoading) {
    return (
      <section className="relative w-full h-[92vh] overflow-hidden animate-pulse">
        <div className="absolute inset-0 bg-gray-300" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-24 px-4">
          <div className="h-14 w-[700px] max-w-full bg-gray-200 rounded mb-4" />
          <div className="h-14 w-[500px] max-w-full bg-gray-200 rounded mb-8" />
          <div className="h-12 w-40 bg-gray-200 rounded-lg" />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gray-200"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      {/* Slider Images */}
    {/* Slider Images */}
<div className="absolute inset-0 w-full h-full overflow-hidden">
  {images.map((item: SliderImage, index: number) => (
    <div
      key={index}
      className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
        index === currentIndex
          ? "translate-x-0"
          : index === (currentIndex - 1 + images.length) % images.length
          ? "-translate-x-full"
          : "translate-x-full"
      }`}
    >
      <img
        src={item.image}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Hidden on mobile */}
      
  {/* Desktop content */}
<div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-24">
  <h2 className="hidden md:block text-4xl lg:text-5xl font-bold mb-2 text-white whitespace-pre-line">
    {currentSlider?.paragraph}
  </h2>

  <div className="flex flex-wrap justify-center gap-4 mt-2">
    <Link href="/vacancy">
      <button className="bg-red-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors text-sm sm:text-base">
        Apply Now
      </button>
    </Link>
  </div>
</div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_: SliderImage, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 w-2"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}