"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
// ─── Counter Hook ─────────────────────────────
function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

// ─── Stat Card ────────────────────────────────
interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}

function StatCard({ value, suffix, label, started }: StatCardProps) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="flex flex-col items-center text-white px-4">
      <span className="text-4xl md:text-5xl font-extrabold leading-none">
        {count}
        <span className="text-orange-400">{suffix}</span>
      </span>
      <span className="text-sm md:text-base font-medium mt-2 text-blue-100 text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

// ─── Variants ────────────────────────────────
const containerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
};

// Variants for the LEFT image card
const leftVariant: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Variants for the RIGHT text card
const rightVariant: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.2,  // stagger the inner elements
      staggerChildren: 0.15
    }
  }
};

// Optional: Animate inner text paragraphs
const paragraphVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};


const cards = [
  {
    title: "Mission",
    description:
      "Our mission is to generate ideas that matter, shape policies that endure, and connect Nepal’s strategic thinking to regional and global narratives.",
    img: "/images/logo.png",
  },
  {
    title: "Vision",
    description:
      "Our vision is to create a platform for insight, dialogue, and impact, empowering Nepal to actively contribute to global discourse.",
    img: "/imags/logo.png",
  },
  {
    title: "Goal",
    description:
      "Our goal is to inspire scholars, practitioners, and institutions to innovate and influence for a better tomorrow.",
    img: "/images/logo.png",
  },
];


// ─── Combined Page Component ──────────────────
const AboutPage = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [flipped, setFlipped] = useState<boolean[]>(Array(cards.length).fill(false));

  const handleFlip = (index: number) => {
    setFlipped((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };



  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const stats = [
    { value: 21, suffix: "+", label: "Years of Experience" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 25, suffix: "K", label: "Deployed Candidates" },
    { value: 100, suffix: "+", label: "Satisfied Employers" },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-50"
          style={{ backgroundImage: "url('/images/image.png')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl w-full px-6 text-center flex flex-col items-center">
          <motion.h1
            className="text-white text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          >
            About Us
          </motion.h1>
          <motion.div
            className="w-full h-px bg-white/70"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            style={{ originX: 0 }}
          />
        </div>
      </div>

      {/* About Section */}
      <section ref={ref} className="bg-gray-50 py-20 px-4 md:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={containerVariant}
        >
          {/* Section Header */}
          <motion.div className="mb-12" variants={fadeUpVariant}>
            <p className="text-[#097509] font-semibold text-sm tracking-widest uppercase mb-1">
              Founded in the 2004
            </p>
            <div className="flex items-center gap-4">
              <h2
                className="text-5xl md:text-6xl font-black text-transparent leading-none"
                style={{
                  WebkitTextStroke: "2px #ff0000",
                  fontFamily: "'Georgia', serif",
                  letterSpacing: "-0.01em",
                }}
              >
                ABOUT US
              </h2>
              <div className="flex-1 h-[3px] bg-gradient-to-r from-green-500 to-transparent rounded-full" />
            </div>
          </motion.div>

          {/* Card Row */}
          <motion.div className="flex flex-col lg:flex-row gap-0 shadow-xl rounded-2xl overflow-hidden" variants={containerVariant}>
            {/* Left – Text Card */}
            <motion.div className="bg-white flex-1 p-8 md:p-10 flex flex-col justify-between" variants={fadeUpVariant}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-snug">
                  &ldquo;Go the extra mile with us&rdquo;...
                </h3>
                <p className="text-gray-600 leading-relaxed text-base text-justify">
                  Manpower Service Pvt. Ltd. is a leading ISO 9001:2015
                  certified overseas recruitment agency, approved by Government of
                  Nepal. With a strong commitment to excellence, integrity, and
                  professionalism, we specialize in sourcing, selecting, and
                  mobilizing skilled, semi-skilled, and unskilled workforce from
                  Nepal to various countries across the globe.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#c9620e" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-8 self-start bg-red-500 text-white font-semibold px-7 py-3 rounded-full text-sm cursor-pointer"
              >
                Read More
              </motion.button>
            </motion.div>

            {/* Right – Stats Card */}
            <motion.div className="bg-[#1a5611] flex-1 flex items-center justify-center px-6 py-12 md:py-16" variants={containerVariant}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-6">
                {stats.map((stat, i) => (
                  <motion.div key={stat.label} variants={fadeUpVariant}>
                    <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} started={isInView} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* MESSAGE SECTION */}
      <section className="py-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-6 p-6 ">

          {/* LEFT CARD – Image from LEFT */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="bg-gray-100 h-full">
              <CardContent className="h-full flex items-center justify-center">
                <img
                  src="/images/chairman.png"
                  alt="about sec"
                  className="max-w-full h-auto"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* RIGHT CARD – Text from RIGHT */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            <Card className="bg-gradient-to-r from-[#2B698E] to-[#7ABDE4] h-full">
              <CardContent className="h-full pl-2 text-white space-y-4">
                <motion.h1 variants={paragraphVariant} className="text-2xl font-semibold">
                  Message from Chairperson
                </motion.h1>

                <motion.p variants={paragraphVariant} className="text-lg">
                  At a time when the global landscape is defined by volatility,
                  power transitions, and urgent planetary challenges, Nepal must
                  find its voice not only as an observer but as an active
                  contributor to global discourse. The Innovate Research
                  Foundation was established with this conviction.                </motion.p>

                <motion.p variants={paragraphVariant} className="text-lg">
                  This represents more than a think tank, it is a platform for
                  insight, dialogue, and impact. Our mission is to generate ideas
                  that matter, shape policies that endure, and connect Nepal’s
                  strategic thinking to regional and global narratives. As
                  Chairperson, I am proud to lead a team that values intellectual
                  independence, constructive engagement, and purpose-driven
                  research.
                </motion.p>
                <motion.p variants={paragraphVariant} className="text-lg">
                  We invite scholars, practitioners, and institutions to join us
                  in our journey to inform, innovate, and influence for a better
                  tomorrow.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <style>{`
    .perspective { perspective: 1000px; }
    .preserve-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
  `}</style>

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {cards.map((card, index) => (
      <div
        key={index}
        className="relative w-full h-80 perspective cursor-pointer"
      >
        <motion.div
          className="absolute w-full h-full preserve-3d"
          whileHover={{ rotateY: 180 }} // flip on hover
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* FRONT */}
          <div
            className="absolute w-full h-full rounded-xl shadow-lg backface-hidden bg-cover bg-center flex items-end p-6"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="absolute inset-0 rounded-xl bg-black/40" />
            <h2 className="relative text-white text-2xl font-bold">{card.title}</h2>
          </div>

          {/* BACK */}
          <div
            className="absolute w-full h-full rounded-xl shadow-lg backface-hidden rotate-y-180 bg-cover bg-center flex items-center justify-center p-6"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="absolute inset-0 rounded-xl bg-black/60" />
            <p className="relative text-white text-center leading-relaxed">{card.description}</p>
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default AboutPage;