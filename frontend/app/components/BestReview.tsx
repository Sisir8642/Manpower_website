'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { Award, Globe, Users, Eye, Database } from "lucide-react";
import LeaderShip from './LeaderShip';
import { useQuery } from '@tanstack/react-query';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface WhyUsItem {
    id: number;
    title: string;
    description: string;
    section: number;
}

interface WhyUs {
    id: number;
    description: string;
    items: WhyUsItem[];
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6 },
    },
};

const useCountAnimation = (end: number, duration = 2000, shouldStart = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;
        let startTime: number | null = null;
        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(end * (progress * (2 - progress))));
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
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    return [ref, isInView] as const;
};

const StatCard = ({ icon: Icon, value, label, isInView }: {
    icon: React.ElementType;
    value: number;
    label: string;
    isInView: boolean;
}) => {
    const count = useCountAnimation(value, 2000, isInView);

    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -6 }}
            className="relative bg-white/70 backdrop-blur-xl border border-white/40 
                       rounded-2xl p-6 text-center shadow-sm overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-transparent opacity-0 hover:opacity-100 transition" />
            <div className="flex justify-center mb-3">
                <div className="w-16 h-16 rounded-full bg-[#EAF6FD] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#2B698E]" />
                </div>
            </div>
            <div className="text-4xl font-bold text-gray-900">{count.toLocaleString()}+</div>
            <div className="text-xs text-gray-600 uppercase tracking-wider mt-2">{label}</div>
        </motion.div>
    );
};

/* ================= WHY US CARD SKELETON ================= */
const WhyUsCardSkeleton = () => (
    <div className="bg-white p-6 rounded-2xl shadow-md animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
        <div className="h-3 bg-gray-100 rounded w-full mb-2" />
        <div className="h-3 bg-gray-100 rounded w-5/6" />
    </div>
);

const BestReview = () => {
    const [statsRef, statsInView] = useInView();

    const { data: whyUsData, isLoading: whyUsLoading } = useQuery<WhyUs[]>({
        queryKey: ['why-us'],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/api/why-us/`);
            if (!res.ok) throw new Error("Failed to fetch Why Us");
            return res.json();
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
    });

    const whyUsItems: WhyUsItem[] = (whyUsData ?? []).flatMap((w) => w.items);

    return (
        <div className="w-full bg-[#E1F1E6]">

            <LeaderShip />

            <section ref={statsRef} className="py-24 flex justify-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={statsInView ? "show" : "hidden"}
                    className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl w-full px-4"
                >
                    {[
                        { icon: Award, value: 15, label: "Years of Expertise" },
                        { icon: Globe, value: 20, label: "Global Connections" },
                        { icon: Users, value: 1000, label: "Employers" },
                        { icon: Eye, value: 100, label: "Transparency" },
                        { icon: Database, value: 10000, label: "Database" },
                    ].map((stat, i) => (
                        <motion.div key={i} variants={item}>
                            <StatCard {...stat} isInView={statsInView} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className="py-24 bg-[#F2F5FD] flex justify-center">
                <div className="max-w-6xl w-full px-4">

                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-[#2a7d56] mb-4">Why <span className='text-red-600'> Us</span></h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            {whyUsData?.[0]?.description ?? "We provide research-driven insights that bridge Nepal's strategic interests."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        {whyUsLoading
                            ? Array.from({ length: 4 }).map((_, i) => <WhyUsCardSkeleton key={i} />)
                            : whyUsItems.length > 0
                                ? whyUsItems.map((whyItem: WhyUsItem) => (
                                    <motion.div
                                        key={whyItem.id}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                                    >
                                        <h3 className="text-lg font-semibold text-[#2B698E] mb-3">
                                            {whyItem.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {whyItem.description}
                                        </p>
                                    </motion.div>
                                ))
                                : (
                                    <p className="text-gray-400 col-span-4 text-center">
                                        No items found. Add some from the admin panel.
                                    </p>
                                )
                        }
                    </div>

                </div>
            </section>

        </div>
    );
};

export default BestReview;