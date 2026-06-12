
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Variants } from "framer-motion";
import {
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
  FaHandshake,
  FaUserShield,
  FaFileAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.05 },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-10 px-5 sm:px-10 lg:px-16 font-sans overflow-hidden">
      <div className="relative w-full flex flex-col lg:flex-row gap-10 items-stretch min-h-[520px]">

        {/* ================= LEFT ================= */}
        <div className="w-full lg:w-[54%] flex flex-col justify-between gap-8 z-10">

          {/* HEADINGS */}
          <div className="space-y-4">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="text-5xl sm:text-[60px] font-black leading-[1.05] tracking-tight text-[#111C24]"
            >
              <span className="text-[#007A48]">Electra</span>{" "}
              Global <br />
              <span className="text-[#E31E24]">Recruitment</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="flex items-center border-l-4 border-[#E31E24] pl-4"
            >
              <p className="text-lg font-semibold text-[#2A3B44]">
                Your Ethical Recruitment Partner from Nepal
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-[#007A48] text-lg font-bold italic"
            >
              "We Connect Talent"
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="text-gray-600 text-[16px] leading-relaxed max-w-xl"
            >
              A legally registered foreign employment agency in Nepal, connecting
              Nepalese talent with global opportunities through ethical,
              transparent, and fully compliant recruitment backed by 15+ years of
              expertise.
            </motion.p>
          </div>

          {/* ================= STATS ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex items-center gap-10"
          >
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-[#E31E24] text-2xl" />
              <div>
                <div className="text-3xl font-black text-[#E31E24]">15+</div>
                <div className="text-sm font-semibold text-gray-500">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-gray-200" />

            <div className="flex items-center gap-3">
              <FaUsers className="text-[#007A48] text-2xl" />
              <div>
                <div className="text-xl font-black text-[#007A48]">
                  Global Network
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  Employers Worldwide
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-gray-200" />

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#E31E24] text-2xl" />
              <div>
                <div className="text-3xl font-black text-[#E31E24]">
                  100%
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  Legal Compliance
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= PILLARS ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="grid grid-cols-2 sm:grid-cols-2 gap-3"
          >
            <div className="flex items-center gap-3 p-3 border-l-4 border-[#E31E24] bg-gray-50 rounded-lg">
              <FaHandshake className="text-[#E31E24]" />
              <span className="font-semibold text-sm">
                Ethical & Responsible Migration
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 border-l-4 border-[#007A48] bg-gray-50 rounded-lg">
              <FaUserShield className="text-[#007A48]" />
              <span className="font-semibold text-sm">
                Worker Safety First
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 border-l-4 border-[#E31E24] bg-gray-50 rounded-lg">
              <FaFileAlt className="text-[#E31E24]" />
              <span className="font-semibold text-sm">
                Licensed & Trusted Agency
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 border-l-4 border-[#007A48] bg-gray-50 rounded-lg">
              <FaGlobe className="text-[#007A48]" />
              <span className="font-semibold text-sm">
                Global Recruitment Solutions
              </span>
            </div>
             <div className="absolute bottom-6 left-160 bg-white/95 backdrop-blur-md rounded-xl shadow px-4 py-2 z-20">
    <p className="text-xs text-gray-500">License No.</p>
    <p className="font-bold text-[#E31E24]">1850/082/083</p>
  </div>
          </motion.div>
        </div>

        {/* ================= RIGHT ================= */}
{/* ================= RIGHT FRAME SIDE (CURVED RESTORED) ================= */}
<motion.div
  variants={scaleIn}
  initial="hidden"
  animate="show"
  className="w-full lg:w-[44%] relative min-h-[450px] flex items-stretch"
>
  {/* Curved container */}
  <div className="relative w-full h-full min-h-[450px] rounded-t-[14rem] lg:rounded-t-none lg:rounded-l-[24rem] overflow-hidden border-t-[10px] lg:border-t-0 lg:border-l-[10px] border-[#007A48] shadow-2xl">

    {/* Red inner border line */}
    <div className="absolute inset-0 z-10 border-t-[3px] lg:border-t-0 lg:border-l-[3px] border-[#E31E24] rounded-t-[14rem] lg:rounded-t-none lg:rounded-l-[24rem] pointer-events-none" />

    {/* Dot grid overlay */}
    <div className="absolute inset-0 z-10 opacity-20 mix-blend-screen bg-[radial-gradient(#007A48_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

    {/* Soft glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-400/20 blur-[90px] z-10 pointer-events-none" />

    {/* Image */}
    <Image
      src="/images/world.jpg"
      alt="Global Recruitment Visual"
      fill
      className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-1000"
      priority
    />

    {/* Bottom green wave */}
    <div
      className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#007A48] z-10"
      style={{ clipPath: "ellipse(110% 100% at 50% 100%)" }}
    />
    {/* Bottom Green Wave */}
<div
  className="absolute bottom-0 left-0 right-0 h-[100px] bg-[#007A48] z-10"
  style={{ clipPath: "ellipse(110% 100% at 50% 100%)" }}
>
  {/* Nepal Based Card */}
  <div className="absolute top-4 right-6 bg-white/95 backdrop-blur-md rounded-xl shadow p-3">
    <div className="flex items-center gap-2">
      <span className="text-[#E31E24] text-lg">📍</span>
      <div>
        <p className="font-bold text-sm">Nepal Based</p>
        <p className="text-xs text-gray-500">Global Reach</p>
      </div>
    </div>
  </div>

  {/* Trusted Agency Card */}
  <div className="absolute top-4 left-50 bg-white/95 backdrop-blur-md rounded-xl shadow p-3">
    <div className="flex items-center gap-2">
      <span className="text-[#007A48] text-lg">⭐</span>
      <div>
        <p className="font-bold text-sm">Trusted Agency</p>
        <p className="text-xs text-gray-500">Ethical • Transparent</p>
      </div>
    </div>
  </div>
</div>
  </div>




</motion.div>
      </div>
    </section>
  );
}