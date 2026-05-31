'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Award, Backpack, Globe, Users } from "lucide-react";


const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
};

const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
};

// Counter Animation Hook
const useCountAnimation = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime: number | null = null;
        const startValue = 0;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuad = (t: number) => t * (2 - t);
            const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuad(progress));

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, shouldStart]);

    return count;
};

// Intersection Observer Hook - Fixed
const useInView = (options = {}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
            }
        }, { threshold: 0.2, ...options });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return [ref, isInView] as const;
};

const StatCard = ({ icon: Icon, value, suffix = "+", label, delay = 0, isInView }: StatCardProps) => {
    const count = useCountAnimation(value, 2000, isInView);

    return (
        <div
            className="flex flex-col items-center gap-3 transition-all duration-700 ease-out"
            style={{
                transitionDelay: `${delay}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)'
            }}
        >
            <div className="w-20 h-20 rounded-full bg-[#EAF6FD] flex items-center justify-center shadow-sm">
                <Icon className="w-10 h-10 text-[#2B698E]" />
            </div>
            <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">
                    {count}{suffix}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wide mt-1">
                    {label}
                </div>
            </div>
        </div>
    );
};
const BestReview = () => {
    const [statsRef, statsInView] = useInView();
    const [contentRef, contentInView] = useInView();
    return (
        <div className="overflow-hidden bg-white">
            <section className="py-20">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* LEFT CARD – Image from LEFT */}
                    <motion.div
                        variants={leftVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Card className="bg-gray-100 h-full border-0 shadow-lg">
                            <CardContent className="p-0 h-full">
                                <img
                                    src="/images/chairman.png"
                                    alt="Chairperson"
                                    className="w-full h-full object-cover rounded-lg"
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
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    >
                        <Card className="bg-gradient-to-r from-[#2B698E] to-[#7ABDE4] h-full border-0 shadow-lg">
                            <CardContent className="p-8 md:p-10 text-white">
                                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                                    Message from Chairperson
                                </h1>

                                <p className="leading-8 text-white/95">
                                    At a time when the global landscape is defined by volatility,
                                    power transitions, and urgent planetary challenges, Nepal must
                                    find its voice not only as an observer but as an active
                                    contributor to global discourse. The Innovate Research
                                    Foundation was established with this conviction.
                                </p>

                                <p className="leading-8 text-white/95">
                                    IRF represents more than a think tank, it is a platform for
                                    insight, dialogue, and impact. Our mission is to generate ideas
                                    that matter, shape policies that endure, and connect Nepal’s
                                    strategic thinking to regional and global narratives. As
                                    Chairperson, I am proud to lead a team that values intellectual
                                    independence, constructive engagement, and purpose-driven
                                    research.
                                </p>

                                <p className="leading-8 text-white/95">
                                    We invite scholars, practitioners, and institutions to join us
                                    in our journey to inform, innovate, and influence for a better
                                    tomorrow.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </section>

            {/* counter code */}
            <section>
                <div className="w-full bg-white">
                    {/* Stats Section */}
                    <div
                        ref={statsRef}
                        className="max-full mx-auto px-4 sm:px-6 lg:px-8 py-20"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                            <StatCard
                                icon={Award}
                                value={200}
                                label="Policy Experts Engaged"
                                delay={0}
                                isInView={statsInView}
                            />
                            <StatCard
                                icon={Backpack}
                                value={10}
                                label="Research Outputs Shared"
                                delay={100}
                                isInView={statsInView}
                            />
                            <StatCard
                                icon={Globe}
                                value={3}
                                label="Global Partnerships"
                                delay={200}
                                isInView={statsInView}
                            />
                            <StatCard
                                icon={Users}
                                value={50}
                                label="Young Scholars Mentored"
                                delay={300}
                                isInView={statsInView}
                            />
                        </div>
                    </div>

                </div>
            </section>
            {/* why and what section */}
            <section className="py-20 bg-gray-50">
                <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-[#1E2A3A]">
                            Why Us
                        </h2>

                        <div className="w-24 h-1 bg-[#7ABDE4] mx-auto mt-4 rounded-full" />

                        <p className="text-gray-600 max-w-3xl mx-auto mt-6">
                            We provide research-driven insights that bridge Nepal’s strategic
                            interests with regional and global developments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                            <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">
                                Geopolitics & Foreign Policy
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                IRF analyzes global and regional power shifts, offering insights
                                into Nepal’s role in the Indo-Pacific, China’s Belt and Road
                                Initiative, and multilateral diplomacy.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                            <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">
                                Geo-Economics & Economic Diplomacy
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                IRF analyzes how trade, investment, technology, and connectivity
                                shape diplomacy, supporting Nepal’s strategic economic engagement
                                regionally and globally.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                            <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">
                                Climate Diplomacy
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                IRF examines how Nepal and Himalayan countries can strengthen
                                climate resilience, shape global climate negotiations, and advance
                                environmental sustainability through regional and international
                                cooperation.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                            <h3 className="text-xl font-semibold mb-4 text-[#2B698E]">
                                Tourism Diplomacy
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                IRF explores how Nepal leverages tourism, culture, and heritage to
                                boost soft power and create economic opportunities.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default BestReview