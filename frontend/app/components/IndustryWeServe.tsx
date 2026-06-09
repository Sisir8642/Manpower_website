
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
      quote: "Electra Global consistently understands our hiring needs and delivers exceptional talent faster than anyone else. A true extension of our HR team.",
      name: "James Carter",
      title: "HR Director",
      company: "BuildTech Solutions Ltd.",
      rating: 5,
      image: "/images/reviewers/james-carter.jpg",
    },
    {
      id: 2,
      quote: "Their professionalism, speed, and candidate quality are outstanding. We've built a long-term partnership we truly value.",
      name: "Priya Sharma",
      title: "Head of Talent Acquisition",
      company: "Nexus Infrastructure",
      rating: 5,
      image: "/images/reviewers/priya-sharma.jpg",
    },
    {
      id: 3,
      quote: "From skilled trades to senior leadership, Electra Global Recruitment delivers reliable results across every level.",
      name: "Michael O'Donnell",
      title: "Operations Director",
      company: "Summit Energy Group",
      rating: 5,
      image: "/images/reviewers/michael-odonnell.jpg",
    },
    {
      id: 4,
      quote: "They take the time to understand our culture and always bring candidates who are the perfect fit for our team.",
      name: "Sophie Laurent",
      title: "HR Manager",
      company: "Global Marine Services",
      rating: 5,
      image: "/images/reviewers/sophie-laurent.jpg",
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
    <section className="py-2 ">
      <div className="max-w-5xl mx-auto text-center py-8 bg-[#E1F1E6]">
        <h2 className="text-5xl font-extrabold text-[#2a7d56]">Services</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded-full" />
        <h3 className="text-lg md:text-2xl font-semibold text-[#eb232a] italic mb-5">
          "To become a trusted global partner in ethical and responsible recruitment."
        </h3>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Electra Global Recruitment Pvt. Ltd. is committed to connecting capable Nepali human resources
          with responsible international employers through fair, transparent, and compliance-focused recruitment.
        </p>
      </div>

      <Services />

      {/* INDUSTRY TITLE */}
      <div className="bg-[#EFF5FE] pt-8">
        <h2 className="text-5xl font-extrabold text-[#2a7d56] text-center">
          Industries <span className="text-red-600">We</span> <span className="text-black">Serve</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded-full" />

        {/* 3D CAROUSEL */}
        <Carousel3D images={images} />
      </div>

      {/* RECRUITMENT SECTION */}
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

      {/* Features Section */}
      <section className="w-full bg-white">
        <div className="max-w-9xl mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative group overflow-hidden rounded-2xl ${feature.bgColor} p-6 shadow-sm hover:shadow-xl transition-all duration-300 border ${feature.borderColor}`}
              >
                {/* Horizontal layout: Icon on left, content on right */}
                <div className="flex items-start gap-4">
                  {/* Icon Container - Left side */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>
                  </div>

                  {/* Content - Right side */}
                  <div className="flex-1 text-left">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <div className="w-20 h-1 bg-emerald-700 rounded-full mb-3" />

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Find Electra Section */}
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

      {/* TESTIMONIALS SECTION - 4 COLUMNS WITH REVIEWER IMAGES */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2a7d56] mb-3">
              What Our <span className="text-red-600">Clients</span> Say
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted recruitment solutions. Proven results.
              <br />
              Hear from the organizations we're proud to partner with.
            </p>
          </motion.div>

          {/* Testimonials Grid - 4 columns on large screens */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Reviewer Image and Name Row */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Profile Image */}
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#2a7d56] to-[#185FA5] flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  {/* Name and Title */}
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="mb-3">
                  <Quote className="w-7 h-7 text-[#2a7d56] opacity-25" />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed mb-3 text-sm flex-grow">
                  &ldquo;{testimonial.quote.length > 100 ? testimonial.quote.substring(0, 100) + "..." : testimonial.quote}&rdquo;
                </p>

                {/* Star Rating */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Company Info */}
                <div className="border-t border-gray-100 pt-3 mt-2">
                  <p className="text-xs text-gray-500 font-medium">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
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