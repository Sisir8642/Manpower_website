"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};
const fadeIn: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.3 } },
};
const pillars = [
  { icon: "🛡️", text: "Ethical & responsible migration", color: "bg-red-900 text-red-900 border-red-100" },
  { icon: "👥", text: "Worker dignity & safety first", color: "bg-blue-900 text-blue-900 border-blue-100" },
  { icon: "📜", text: "Licensed & trusted agency", color: "bg-green-900 text-green-900 border-green-100" },
  { icon: "🌍", text: "End-to-end global solutions", color: "bg-blue-900 text-blue-900 border-blue-100" },
];

const stats = [
  { num: "15+", label: "Years Experience", color: "text-red-600" },
  { num: "Global", label: "Employer Network", color: "text-blue-700" },
  { num: "100%", label: "Legal Compliant", color: "text-green-700" },
];

export default function AboutSection({ imageSrc }: { imageSrc?: string }) {
      return (
    <section className="py-4 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl font-extrabold leading-tight mb-3 text-gray-900"
          >
            <span className="text-green-700">Electra</span> Global{" "}
            <span className="text-red-500">Recruitment</span>
          </motion.h2>

          {/* Tagline */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={1.5}
            className="flex items-center gap-3 text-blue-700 font-semibold italic text-xl mb-5"
          >
            <span className="w-7 h-0.5 bg-red-500 rounded-full inline-block" />
            &quot;We Connect Talent&quot;
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-gray-500 text-base leading-relaxed mb-6"
          >
            A legally registered foreign employment agency in Nepal, connecting
            Nepalese talent with global opportunities through ethical,
            transparent, and fully compliant recruitment backed by 15+ years
            of expertise.
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={2.5}
            className="grid grid-cols-3 gap-3 mb-6"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-xl p-3 text-center hover:-translate-y-1 transition-transform duration-200 shadow-sm"
              >
                <div className={`text-2xl font-extrabold ${s.color} leading-none mb-1`}>
                  {s.num}
                </div>
                <div className="text-xs text-gray-400 font-medium leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pillars */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="grid grid-cols-2 gap-2"
          >
            {pillars.map((p) => (
              <div
                key={p.text}
                className={`flex items-center gap-3 border rounded-xl px-3 py-2.5 hover:shadow-sm transition-shadow duration-200 bg-white ${p.color}`}
              >
                <span className="text-lg">{p.icon}</span>
                <span className="text-sm font-medium leading-snug text-gray-600">
                  {p.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn} initial="hidden" animate="show"
          className="relative hidden md:block"
        >
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-700 to-green-700">
            {imageSrc ? (
              <Image
                src={imageSrc}
                width={400} height={500}
                alt="Electra Global Recruitment team"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white/60 gap-3">
              </div>
            )}
          </div>

          {/* Floating badge bottom-left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 bg-white border border-gray-100 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md"
          >
            <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-lg">
              🏆
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">License No.</div>
              <div className="text-xs text-gray-800">1850/082/083</div>
            </div>
          </motion.div>

          {/* Floating badge top-right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.15, duration: 0.5 }}
            className="absolute top-5 -right-4 bg-white border border-gray-100 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md"
          >
            <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-lg">
              📍
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">Nepal Based</div>
              <div className="text-xs text-gray-400">Global Reach</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}