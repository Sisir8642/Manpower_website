"use client";

import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaUsers,
  FaClipboardCheck,
  FaShieldAlt,
  FaHandsHelping,
  FaGlobe,
  FaNetworkWired,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: FaBalanceScale,
    title: "Legal & Ethical Compliance",
    desc: "Full adherence to ILO standards and labour laws.",
    colorClass: "text-red-700 bg-red-500/10 border-red-600/20",
    hoverBorder: "hover:border-red-600/40",
    lineColor: "bg-red-600",
  },
  {
    icon: FaUsers,
    title: "Fair & Transparent Sourcing",
    desc: "Open recruitment with zero deception.",
    colorClass: "text-emerald-700 bg-emerald-600/10 border-emerald-600/20",
    hoverBorder: "hover:border-emerald-600/40",
    lineColor: "bg-emerald-600",
  },
  {
    icon: FaClipboardCheck,
    title: "One-Stop Recruitment",
    desc: "End-to-end hiring to deployment.",
    colorClass: "text-red-700 bg-red-500/10 border-red-600/20",
    hoverBorder: "hover:border-red-600/40",
    lineColor: "bg-red-600",
  },
  {
    icon: FaShieldAlt,
    title: "Risk Control System",
    desc: "Strong compliance monitoring framework.",
    colorClass: "text-emerald-700 bg-emerald-600/10 border-emerald-600/20",
    hoverBorder: "hover:border-emerald-600/40",
    lineColor: "bg-emerald-600",
  },
  {
    icon: FaHandsHelping,
    title: "Worker Support System",
    desc: "Grievance & remedy mechanisms.",
    colorClass: "text-red-700 bg-red-500/10 border-red-600/20",
    hoverBorder: "hover:border-red-600/40",
    lineColor: "bg-red-600",
  },
  {
    icon: FaGlobe,
    title: "Global Expertise",
    desc: "Trusted international placements.",
    colorClass: "text-emerald-700 bg-emerald-600/10 border-emerald-600/20",
    hoverBorder: "hover:border-emerald-600/40",
    lineColor: "bg-emerald-600",
  },
  {
    icon: FaNetworkWired,
    title: "Employer Network",
    desc: "Strong global employer connections.",
    colorClass: "text-red-700 bg-red-500/10 border-red-600/20",
    hoverBorder: "hover:border-red-600/40",
    lineColor: "bg-red-600",
  },
  {
    icon: FaHeadset,
    title: "Post-Placement Support",
    desc: "24/7 ongoing assistance.",
    colorClass: "text-emerald-700 bg-emerald-600/10 border-emerald-600/20",
    hoverBorder: "hover:border-emerald-600/40",
    lineColor: "bg-emerald-600",
  },
];

export default function WhyChooseElectra() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#223772] text-white">        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 xl:py-32 text-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-white/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              13 LOCATIONS TO SERVE YOU
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Our Locations
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find your nearest Fast n&apos; Friendly store. Proudly serving Springfield, Ozark, Bolivar and surrounding areas with quick stops, great deals, and friendly faces.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(225 241 230)"/>
          </svg>
        </div>
      </section>
    <section className="py-24 px-6 bg-[#E1F1E6] text-slate-900 font-sans min-h-screen flex flex-col justify-center overflow-x-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-red-600 text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-2">
          Our Value Proposition
        </p>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Why Choose <span className="text-emerald-700">Electra</span>
          <span className="text-red-600">?</span>
        </h2>
        <div className="w-12 h-1 bg-emerald-600 mx-auto mt-4 rounded-full" />

        <p className="text-slate-800 font-semibold mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Ethical recruitment built safely on structural trust, compliance regulatory standards, and global migration management rules.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: "easeOut" }}
              className={`group relative p-6 sm:p-7 rounded-2xl bg-blue-50/70 border border-blue-200 shadow-sm shadow-blue-900/5 transition-all duration-300 hover:bg-white hover:-translate-y-1 flex flex-col items-start justify-start ${item.hoverBorder}`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 transition-transform duration-300 group-hover:scale-105 border shadow-inner ${item.colorClass}`}
              >
                <Icon className="text-xl" />
              </div>

              <h3 className="font-black text-slate-950 text-[15px] mb-2 tracking-tight group-hover:text-slate-900 transition-colors duration-300 leading-snug">
                {item.title}
              </h3>

              <p className="text-slate-700 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>

              <div className={`absolute bottom-0 left-1/2 w-0 h-[3px] rounded-b-2xl group-hover:w-full group-hover:left-0 transition-all duration-300 ${item.lineColor}`} />
            </motion.div>
          );
        })}
      </div>
      
    </section>
    </div>
  );
}