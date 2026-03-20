'use client';
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, Variants, useInView } from "framer-motion";
import { Raleway, Pacifico } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const countries = [
  {
    name: "Qatar",
    image: "/images/best.png",
    description:
      "Qatar offers excellent opportunities in construction, hospitality, and oil industries. Workers benefit from tax-free income and modern living standards.",
  },
  {
    name: "UAE",
    image: "/images/uae.png",
    description:
      "The UAE is a top destination for skilled and unskilled workers with opportunities in retail, logistics, and infrastructure development.",
  },
  {
    name: "Malaysia",
    image: "/images/best.png",
    description:
      "Malaysia provides stable employment in manufacturing and services with affordable living and diverse cultural experiences.",
  },
];

const CountrySection = () => {
  const [index, setIndex] = useState(0);
  const country = countries[index];

  // ── Animation Controls ──
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const imageVariant: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const contentVariant: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const prev = () => setIndex((prev) => (prev === 0 ? countries.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === countries.length - 1 ? 0 : prev + 1));

  return (
    <div ref={ref} className="max-w-7xl mx-auto mb-20 px-4 md:px-0">

      {/* Heading */}
      <div className="mb-10 mt-12 text-center">
        <h1 className={`${pacifico.className} text-2xl italic mb-4`}>
          Destination Countries
        </h1>
        <h4 className="font-bold text-4xl mt-4 mb-14">
          Work Opportunities Abroad
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left Image */}
        <motion.div
          className="transition-all"
          variants={imageVariant}
          initial="hidden"
          animate={controls}
        >
          <img
            src={country.image}
            alt={country.name}
            className="rounded-2xl shadow-xl w-full"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="px-6 md:px-0"
          variants={contentVariant}
          initial="hidden"
          animate={controls}
        >
          <h1 className="text-3xl font-semibold text-gray-700 mb-5">{country.name}</h1>
          <p className={`${raleway.className} text-sm text-gray-700 mb-6 leading-relaxed`}>
            {country.description}
          </p>

          {/* Arrows */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              ←
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              →
            </button>
          </div>

          {/* CTA */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-widest px-10 py-4 rounded-full transition-colors duration-200 mt-8">
            APPLY NOW
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default CountrySection;