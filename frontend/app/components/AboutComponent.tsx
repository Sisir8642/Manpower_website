
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Variants } from "framer-motion";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 25 },
//   show: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut", delay: i * 0.05 },
//   }),
// };

// const scaleIn: Variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
// };

// export default function AboutSection() {
//   return (
//     <section className="w-full max-w-full mx-auto bg-white py-6 px-4 sm:px-8 lg:px-12 font-sans overflow-hidden">
//       <div className="relative w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[460px] gap-6 lg:gap-0">

//         {/* ================= LEFT CONTENT SIDE ================= */}
//         <div className="w-full lg:w-[54%] flex flex-col justify-between gap-5 z-10 pr-0 lg:pr-8">

//           {/* Main Headers */}
//           <div className="space-y-3">
//             <motion.h1
//               variants={fadeUp} initial="hidden" animate="show" custom={0}
//               className="text-4xl sm:text-[52px] font-black tracking-tight leading-[1.05] text-[#111C24]"
//             >
//               <span className="text-[#007A48]">Electra</span>{" "}
//               <span className="text-[#111C24]">Global</span>
//               <br />
//               <span className="text-[#E31E24]">Recruitment</span>
//             </motion.h1>

//             {/* Subtitle with Left Border */}
//             <motion.div
//               variants={fadeUp} initial="hidden" animate="show" custom={1}
//               className="flex items-center border-l-4 border-[#E31E24] pl-3 py-0.5"
//             >
//               <p className="text-sm sm:text-base font-bold text-[#2A3B44]">
//                 Your Ethical Recruitment Partner from Nepal
//               </p>
//             </motion.div>

//             {/* Tagline */}
//             <motion.p
//               variants={fadeUp} initial="hidden" animate="show" custom={2}
//               className="text-sm sm:text-base font-extrabold italic text-[#007A48]"
//             >
//               "We Connect Talent"
//             </motion.p>

//             {/* Description */}
//             <motion.p
//               variants={fadeUp} initial="hidden" animate="show" custom={3}
//               className="text-gray-500 font-medium text-[13.5px] leading-relaxed max-w-lg text-2xl"
//             >
//               A legally registered foreign employment agency in Nepal, connecting
//               Nepalese talent with global opportunities through ethical, transparent,
//               and fully compliant recruitment backed by 15+ years of expertise.
//             </motion.p>
//           </div>

//           {/* ── Stats Row ── */}
//           <motion.div
//             variants={fadeUp} initial="hidden" animate="show" custom={4}
//             className="flex items-center gap-8 max-w-lg"
//           >
//             {/* 15+ Years */}
//             <div className="flex items-center gap-3">
//               <div className="w-11 h-11 rounded-full  flex items-center justify-center shadow-md shrink-0">
//                 <span className="text-lg">🛡️</span>
//               </div>
//               <div>
//                 <div className="text-2xl font-black text-[#E31E24] leading-none">15+</div>
//                 <div className="text-[10.5px] font-bold text-gray-400 mt-0.5">Years Experience</div>
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="h-10 w-px bg-gray-200" />

//             {/* Global */}
//             <div className="flex items-center gap-3">
//               <div className="w-11 h-11 rounded-full  flex items-center justify-center shadow-md shrink-0">
//                 <span className="text-lg">👥</span>
//               </div>
//               <div>
//                 <div className="text-2xl font-black text-[#007A48] leading-none">Global</div>
//                 <div className="text-[10.5px] font-bold text-gray-400 mt-0.5">Employer Network</div>
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="h-10 w-px bg-gray-200" />

//             {/* 100% */}
//             <div className="flex items-center gap-3">
//               <div className="w-11 h-11 rounded-full border border-[#E31E24]/30 flex items-center justify-center shadow-sm shrink-0">
//                 <span className="text-lg">✅</span>
//               </div>
//               <div>
//                 <div className="text-2xl font-black text-[#E31E24] leading-none">100%</div>
//                 <div className="text-[10.5px] font-bold text-gray-400 mt-0.5">Legal Compliant</div>
//               </div>
//             </div>
//           </motion.div>

//           {/* ── Pillars Row ── */}
//           <motion.div
//             variants={fadeUp} initial="hidden" animate="show" custom={5}
//             className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl"
//           >
//             <div className="flex items-center gap-2 bg-white border border-gray-100 border-l-[3px] border-l-[#E31E24] rounded-lg px-2.5 py-2 shadow-sm hover:-translate-y-0.5 transition-transform">
//               <span className="text-base shrink-0">🤝</span>
//               <span className="text-[10.5px] font-extrabold text-[#111C24] leading-tight">Ethical &amp; Responsible Migration</span>
//             </div>

//             <div className="flex items-center gap-2 bg-white border border-gray-100 border-l-[3px] border-l-[#007A48] rounded-lg px-2.5 py-2 shadow-sm hover:-translate-y-0.5 transition-transform">
//               <span className="text-base shrink-0">👤</span>
//               <span className="text-[10.5px] font-extrabold text-[#111C24] leading-tight">Worker Dignity &amp; Safety First</span>
//             </div>

//             <div className="flex items-center gap-2 bg-white border border-gray-100 border-l-[3px] border-l-[#E31E24] rounded-lg px-2.5 py-2 shadow-sm hover:-translate-y-0.5 transition-transform">
//               <span className="text-base shrink-0">📜</span>
//               <span className="text-[10.5px] font-extrabold text-[#111C24] leading-tight">Licensed &amp; Trusted Agency</span>
//             </div>

//             <div className="flex items-center gap-2 bg-white border border-gray-100 border-l-[3px] border-l-[#007A48] rounded-lg px-2.5 py-2 shadow-sm hover:-translate-y-0.5 transition-transform">
//               <span className="text-base shrink-0">🌍</span>
//               <span className="text-[10.5px] font-extrabold text-[#111C24] leading-tight">End-to-End Global Solutions</span>
//             </div>
//           </motion.div>
//         </div>

//         {/* ================= RIGHT FRAME SIDE ================= */}
//         <motion.div
//           variants={scaleIn} initial="hidden" animate="show"
//           className="w-full lg:w-[44%] relative min-h-[400px] lg:min-h-full flex items-stretch"
//         >
//           {/* Curved container — rounded left on desktop, rounded top on mobile */}
//           <div className="relative w-full h-full min-h-[400px] rounded-t-[14rem] lg:rounded-t-none lg:rounded-l-[24rem] overflow-hidden border-t-[10px] lg:border-t-0 lg:border-l-[10px] border-[#007A48] shadow-2xl">

//             {/* Red accent inner line */}
//             <div className="absolute inset-0 z-10 border-t-[3px] lg:border-t-0 lg:border-l-[3px] border-[#E31E24] rounded-t-[14rem] lg:rounded-t-none lg:rounded-l-[24rem] pointer-events-none" />

//             {/* Dot-grid overlay */}
//             <div className="absolute inset-0 z-10 opacity-25 mix-blend-screen bg-[radial-gradient(#007A48_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

//             {/* Ambient glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-400/20 blur-[90px] z-10 pointer-events-none mix-blend-screen" />

//             {/* Main image */}
//             <Image
//               src="/images/world.jpg"
//               alt="Global Recruitment Visual"
//               fill
//               className="object-cover object-center scale-105 transition-transform duration-1000 hover:scale-110"
//               priority
//             />

//             {/* Green wave bottom */}
//             <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-[#007A48] z-10 pointer-events-none"
//               style={{ clipPath: "ellipse(110% 100% at 50% 100%)" }} />
//           </div>

//           {/* Left profile bubbles */}
//           <div className="absolute left-4 lg:left-8 top-1/4 flex flex-col gap-3 z-20 pointer-events-none hidden sm:flex">
//             {[1, 2, 3].map((num) => (
//               <div key={num} className="w-9 h-9 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-100 relative">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-[#007A48]/30 to-transparent" />
//                 <span className="text-[11px] flex items-center justify-center h-full font-bold text-gray-500">👤</span>
//               </div>
//             ))}
//           </div>

//           {/* Floating Card — Nepal Based */}
//           <div className="absolute top-8 right-3 lg:right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-white/70 p-2.5 flex items-center gap-2.5 w-40 z-20 hover:bg-white transition-colors">
//             <span className="text-lg bg-red-50 p-1.5 rounded-xl shadow-inner shrink-0">📍</span>
//             <div className="flex flex-col">
//               <span className="text-[11.5px] font-black text-[#111C24] leading-tight">Nepal Based</span>
//               <span className="text-[9px] font-bold text-gray-400 mt-1">Global Reach</span>
//             </div>
//           </div>

//           {/* Floating Card — Trusted Solutions */}
//           <div className="absolute top-[calc(50%-20px)] right-3 lg:right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-white/70 p-2.5 flex items-center gap-2.5 w-52 z-20 hover:bg-white transition-colors">
//             <span className="text-lg bg-green-50 p-1.5 rounded-xl shadow-inner shrink-0">⭐</span>
//             <div className="flex flex-col">
//               <span className="text-[11.5px] font-black text-[#111C24] leading-tight">Trusted Recruitment Solutions</span>
//               <span className="text-[9px] font-bold text-gray-400 mt-1 leading-tight">Ethical. Transparent. Compliant.</span>
//             </div>
//           </div>

//           {/* License block — bottom of right panel */}
//           <div className="absolute bottom-5 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-white/70 px-4 py-2.5 flex items-center gap-3 z-20 whitespace-nowrap">
//             <div className="w-6 h-6 rounded-full bg-[#007A48] flex items-center justify-center shrink-0">
//               <span className="text-white text-[10px] font-extrabold">✓</span>
//             </div>
//             <div>
//               <div className="text-[9.5px] font-bold text-gray-400 leading-none">License No.</div>
//               <div className="text-[15px] font-black text-[#E31E24] leading-tight mt-0.5">1850/082/083</div>
//             </div>
//           </div>

//           {/* Three color dots */}
//           <div className="absolute bottom-5 right-8 flex items-center gap-1.5 z-20">
//             <span className="w-2 h-2 rounded-full bg-[#E31E24]" />
//             <span className="w-2 h-2 rounded-full bg-[#007A48]" />
//             <span className="w-2 h-2 rounded-full bg-[#111C24]" />
//           </div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }
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
  </div>

  {/* Floating cards (kept same clean style) */}

  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-xl shadow p-3 z-20">
    <div className="flex items-center gap-2">
      <span className="text-[#E31E24] text-lg">📍</span>
      <div>
        <p className="font-bold text-sm">Nepal Based</p>
        <p className="text-xs text-gray-500">Global Reach</p>
      </div>
    </div>
  </div>

  <div className="absolute top-1/2 right-6 bg-white/95 backdrop-blur-md rounded-xl shadow p-3 z-20">
    <div className="flex items-center gap-2">
      <span className="text-[#007A48] text-lg">⭐</span>
      <div>
        <p className="font-bold text-sm">Trusted Agency</p>
        <p className="text-xs text-gray-500">Ethical • Transparent</p>
      </div>
    </div>
  </div>

  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl shadow px-4 py-2 z-20">
    <p className="text-xs text-gray-500">License No.</p>
    <p className="font-bold text-[#E31E24]">1850/082/083</p>
  </div>
</motion.div>
      </div>
    </section>
  );
}