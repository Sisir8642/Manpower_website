
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { Award, Backpack, Globe, Users } from "lucide-react";

/* ================= VARIANTS ================= */
const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
};

const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
};

/* ================= COUNTER ================= */
const useCountAnimation = (end: number, duration = 2000, shouldStart = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime: number | null = null;

        const animate = (time: number) => {
            if (!startTime) startTime = time;

            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(end * (progress * (2 - progress)));

            setCount(value);

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [end, duration, shouldStart]);

    return count;
};

/* ================= IN VIEW ================= */
const useInView = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsInView(true);
        }, { threshold: 0.2 });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return [ref, isInView] as const;
};

/* ================= STAT CARD ================= */
const StatCard = ({ icon: Icon, value, label, isInView }: any) => {
    const count = useCountAnimation(value, 2000, isInView);

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-[#EAF6FD] flex items-center justify-center">
                <Icon className="w-10 h-10 text-[#2B698E]" />
            </div>

            <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">
                    {count}+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide mt-1">
                    {label}
                </div>
            </div>
        </div>
    );
};

/* ================= MAIN ================= */
const BestReview = () => {

    const [statsRef, statsInView] = useInView();

    return (
        <div className="w-full bg-white">

            {/* ================= CHAIRPERSON SECTION ================= */}
<section className="py-20 w-full bg-[#E1F1E6]">
  <div className="w-full px-4 sm:px-6 lg:px-12">
    <div className="flex flex-col gap-8">
      {/* ================= CHAIRPERSON (LEFT ALIGNED) ================= */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden md:max-w-[80%] md:mr-auto hover:shadow-xl transition-shadow duration-300"
      >
        {/* IMAGE - decreased width */}
        <motion.div 
          className="md:w-[25%] w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/chairperson.png"
            alt="Chairperson"
            className="w-full md:h-[280px] h-[220px] object-cover p-0 m-0"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* CONTENT - increased width to match */}
        <motion.div 
          className="md:w-[75%] w-full bg-[#1B4595] text-white p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Chairperson
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-white/50 rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-white/90 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
       At Electra Global Recruitment Pvt. Ltd., our vision is to connect Nepalese talent with global opportunities through ethical, transparent, and reliable recruitment practices. With extensive experience in international recruitment, we understand both employer expectations and worker aspirations, enabling us to deliver efficient and compliant solutions.
            <br /><br />
           We are committed to providing end-to-end recruitment services that ensure fair, dignified, and lawful employment while supporting global partners with quality human resources. Worker welfare, trust, and compliance remain at the core of everything we do.
            <br /><br />
          Our goal is to grow as a trusted global recruitment partner, building long-term relationships and contributing to Nepal’s sustainable socio-economic development.
            <br /><br />
            <motion.span 
              className="font-semibold italic block"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              "Together, We Connect Talent to Global Opportunity."
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* ================= MANAGING DIRECTOR (RIGHT ALIGNED) ================= */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row bg-white overflow-hidden rounded-xl md:max-w-[80%] md:ml-auto hover:shadow-xl transition-shadow duration-300"
      >
        {/* CONTENT - increased width */}
        <motion.div 
          className="md:w-[75%] w-full bg-[#1B4595] text-white p-8 flex flex-col justify-center md:order-0 order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Managing Director
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-white/50 rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-white/90 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Electra Global Recruitment Pvt. Ltd. believes that foreign employment should be more than a pathway to jobs abroad; it should be a dignified, fair, ethical, responsible, and transparent journey that protects workers, supports employers, and contributes meaningfully to national development. Founded with a clear vision to build a trusted brand in Nepal's ethical recruitment industry, Electra connects capable Nepali human resources with responsible global employers through professional, compliant, and human-centered recruitment practices, with a firm commitment to ensuring fairness, ethics, responsibility, and transparency at every stage of the recruitment cycle.
            <br /><br />
            My academic background in MBA in Human Resources and MA in Sociology has played a vital role in transforming this vision into practical, people-centered, and ethical recruitment mechanisms. Alongside this, my extensive experience in the foreign employment industry from establishing the foundation of ethical recruitment practices to contributing to the development of a trusted brand has been a defining dimension of my professional journey. This experience has enabled me to integrate internationally recognized ethical recruitment principles and best practices, including ILO principles, Responsible Business Alliance (RBA) practices, and On The Level (OTL) standards, into our institutional approach. These combined academic and professional foundations have strengthened Electra's expertise and commitment to making fair, responsible, transparent, and ethical foreign employment a practical reality.
          </motion.p>
        </motion.div>

        {/* IMAGE - decreased width */}
        <motion.div 
          className="md:w-[25%] w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 md:order-1 order-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/managing-director.png"
            alt="Managing Director"
            className="w-full md:h-[280px] h-[220px] object-cover p-0 m-0"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
            


            {/* ================= COUNTERS ================= */}
            <section ref={statsRef} className="py-20 flex justify-center">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl w-full px-4">

                    <StatCard icon={Award} value={200} label="Policy Experts Engaged" isInView={statsInView} />
                    <StatCard icon={Backpack} value={10} label="Research Outputs Shared" isInView={statsInView} />
                    <StatCard icon={Globe} value={3} label="Global Partnerships" isInView={statsInView} />
                    <StatCard icon={Users} value={50} label="Young Scholars Mentored" isInView={statsInView} />

                </div>

            </section>

            {/* ================= WHY SECTION ================= */}
            <section className="py-20 bg-gray-50 flex justify-center">

                <div className="max-w-6xl w-full px-4">

                    <div className="text-center mb-14">
                        <h2 className="text-5xl font-bold text-[#2a7d56] mb-4">
                            Why Us
                        </h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto rounded-full" />
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            We provide research-driven insights that bridge Nepal’s strategic interests.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-lg font-semibold text-[#2B698E] mb-3">
                                Our Responsible Recruitment Commitment
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ethical, transparent, and worker-focused recruitment system.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-lg font-semibold text-[#2B698E] mb-3">
                                Who We Are
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Nepal-based global recruitment partner with 13+ years experience.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-lg font-semibold text-[#2B698E] mb-3">
                                Our Core Services
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                End-to-end recruitment, visa processing, and deployment support.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-lg font-semibold text-[#2B698E] mb-3">
                                Why Electra
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Trust, transparency, and long-term workforce solutions.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default BestReview;