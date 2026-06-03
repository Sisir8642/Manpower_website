
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Variants, easeOut } from "framer-motion";
import { Award, Backpack, Globe, Users } from "lucide-react";
import LeaderShip from './LeaderShip';
/* ================= VARIANTS ================= */
const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
};

const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
};

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
    },
  },
};

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
   <LeaderShip />
            <section ref={statsRef} className="py-20 flex justify-center">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl w-full px-4">

                    <StatCard icon={Award} value={200} label="Policy Experts Engaged" isInView={statsInView} />
                    <StatCard icon={Backpack} value={10} label="Research Outputs Shared" isInView={statsInView} />
                    <StatCard icon={Globe} value={3} label="Global Partnerships" isInView={statsInView} />
                    <StatCard icon={Users} value={50} label="Young Scholars Mentored" isInView={statsInView} />

                </div>

            </section>

<<<<<<< HEAD
            {/* ================= WHY SECTION ================= */}
            <section className="py-20 bg-[#F2F5FD] flex justify-center">
=======
            <section className="py-20 bg-gray-50 flex justify-center">
>>>>>>> 20b1f1b3b087ec414990b055e966b7c7afc50a87

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