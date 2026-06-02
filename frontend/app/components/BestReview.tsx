
'use client'
import React, { useEffect, useRef, useState } from 'react'

import { Award, Backpack, Globe, Users } from "lucide-react";
import { motion, type Variants, easeOut } from "framer-motion";

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


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut, 
    },
  },
};;

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
        <div className="w-full bg-[#E1F1E6] ">

            {/* ================= CHAIRPERSON SECTION ================= */}
             <div className="bg-[#E1F1E6] py-16 space-y-20">
<motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-[280px_1fr]">

            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-900 flex flex-col"
            >
              <div className="h-[330px] overflow-hidden">
                <img
                  src="/images/chairperson.jpg"
                  alt="Chairperson"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-white py-6">
                <h3 className="text-2xl font-semibold">
                  Ms Shweta Chauhan
                </h3>
                <p className="italic text-lg text-blue-100">
                  Chairperson
                </p>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 md:p-14 bg-red-100"
            >
              <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium mb-8">
                Chairperson
              </span>

              <div className="flex gap-4">
                <div className="text-6xl text-gray-300 leading-none">
                  ❝
                </div>

                <div className="space-y-8 text-slate-700">
                  <p className="text-lg leading-9">
                    Electra Global Recruitment Pvt. Ltd. aims to build an
                    ethical bridge connecting Nepalese talent with global jobs.
                    The founder, a young entrepreneur with over a decade of
                    experience in Middle East recruitment and five years in
                    Nepal's foreign employment sector, believes in Nepal's
                    immense human potential. This experience enables the company
                    to deliver efficient, transparent, and compliant recruitment
                    solutions.
                  </p>

                  <p className="text-lg leading-9">
                    The company is committed to end-to-end services that ensure
                    dignified, fair, and lawful employment for workers while
                    providing reliable HR solutions to global partners. They
                    prioritize worker welfare, regulatory compliance, and
                    responsible practices.
                  </p>

                  <p className="text-lg leading-9">
                    Looking ahead, Electra Global strives to become a trusted
                    global recruitment partner, focused on long-term
                    relationships, sustainable opportunities, and contributing
                    to Nepal's socio-economic development.
                    <br />
                    <span className="italic">
                      “Together, We Connect Talent to Global Opportunity.”
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Managing Director */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-[1fr_280px]">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-14 bg-red-100"
            >
              <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium mb-8">
                Managing Director
              </span>

              <div className="flex gap-4">
                <div className="text-6xl text-gray-300 leading-none">
                  ❝
                </div>

                <div className="space-y-8 text-slate-700">
                  <p className="text-lg leading-9">
                    Electra Global Recruitment Pvt. Ltd. is committed to making
                    foreign employment a dignified, fair, ethical, and
                    transparent process that benefits workers, employers, and
                    Nepal's development. The company was founded to become a
                    trusted brand in ethical recruitment, connecting Nepali
                    talent with global employers through professional and
                    human-centered practices.
                  </p>

                  <p className="text-lg leading-9">
                    The founder’s academic background (MBA in HR and MA in
                    Sociology), combined with extensive experience in the
                    foreign employment industry, has helped integrate
                    international ethical standards including ILO principles,
                    Responsible Business Alliance (RBA) practices, and On The
                    Level (OTL) standards into the company’s operations. This
                    foundation ensures that fair, responsible, and ethical
                    foreign employment becomes a practical reality.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-blue-900 flex flex-col"
            >
              <div className="h-[330px] overflow-hidden">
                <img
                  src="/images/managing-director.jpg"
                  alt="Managing Director"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-white py-6">
                <h3 className="text-2xl font-semibold">
                  Ms Karuna Thapa
                </h3>
                <p className="italic text-lg text-blue-100">
                  Managing Director
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>
      </div>
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