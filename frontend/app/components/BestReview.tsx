// 'use client'
// import React, { useEffect, useRef, useState } from 'react'
// import { motion } from "framer-motion";
// import { Award, Globe, Users, Eye, Database } from "lucide-react";
// import LeaderShip from './LeaderShip';
// import { useQuery } from '@tanstack/react-query';

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// interface WhyUsItem {
//     id: number;
//     title: string;
//     description: string;
//     section: number;
// }

// interface WhyUs {
//     id: number;
//     description: string;
//     items: WhyUsItem[];
// }

// const container = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: { staggerChildren: 0.15 },
//     },
// };

// const item = {
//     hidden: { opacity: 0, y: 40, scale: 0.9 },
//     show: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: { duration: 0.6 },
//     },
// };

// const useCountAnimation = (end: number, duration = 2000, shouldStart = false) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         if (!shouldStart) return;
//         let startTime: number | null = null;
//         const animate = (time: number) => {
//             if (!startTime) startTime = time;
//             const progress = Math.min((time - startTime) / duration, 1);
//             setCount(Math.floor(end * (progress * (2 - progress))));
//             if (progress < 1) requestAnimationFrame(animate);
//         };
//         requestAnimationFrame(animate);
//     }, [end, duration, shouldStart]);

//     return count;
// };

// const useInView = () => {
//     const ref = useRef<HTMLDivElement>(null);
//     const [isInView, setIsInView] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
//             { threshold: 0.2 }
//         );
//         if (ref.current) observer.observe(ref.current);
//         return () => { if (ref.current) observer.unobserve(ref.current); };
//     }, []);

//     return [ref, isInView] as const;
// };

// const StatCard = ({
//   icon: Icon,
//   value,
//   label,
//   isInView,
// }: {
//   icon: React.ElementType;
//   value: number;
//   label: string;
//   isInView: boolean;
// }) => {
//   const count = useCountAnimation(value, 2000, isInView);

//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       className="bg-white rounded-3xl shadow-md border border-[#eef2ef]
//       py-8 px-6 flex flex-col items-center text-center h-full transition-all"
//     >
//       {/* Icon Circle */}
//       <div className="relative mb-5">
//         <div className="w-20 h-20 rounded-full border border-[#d8ebe0] flex items-center justify-center">
//           <div className="w-16 h-16 rounded-full border-2 border-[#e8f5ec] flex items-center justify-center">
//             <Icon className="w-8 h-8 text-[#1D7A52]" />
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="w-10 h-[2px] bg-red-400 mb-4"></div>

//       {/* Number */}
//       <h3 className="text-5xl font-bold text-[#0B7A4A]">
//         {count.toLocaleString()}+
//       </h3>

//       {/* Label */}
//       <p className="mt-3 text-sm md:text-base font-semibold uppercase text-[#1f2937] tracking-wide">
//         {label}
//       </p>
//     </motion.div>
//   );
// };

// const WhyUsCardSkeleton = () => (
//     <div className="bg-white p-6 rounded-2xl shadow-md animate-pulse">
//         <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
//         <div className="h-3 bg-gray-100 rounded w-full mb-2" />
//         <div className="h-3 bg-gray-100 rounded w-5/6" />
//     </div>
// );

// const BestReview = () => {
//     const [statsRef, statsInView] = useInView();

//     const { data: whyUsData, isLoading: whyUsLoading } = useQuery<WhyUs[]>({
//         queryKey: ['why-us'],
//         queryFn: async () => {
//             const res = await fetch(`${baseUrl}/api/why-us/`);
//             if (!res.ok) throw new Error("Failed to fetch Why Us");
//             return res.json();
//         },
//         refetchOnMount: false,
//         refetchOnWindowFocus: false,
//         staleTime: 5 * 60 * 1000,
//     });

//     const whyUsItems: WhyUsItem[] = (whyUsData ?? []).flatMap((w) => w.items);

//     return (
//         <div className="w-full bg-[#E1F1E6]">



//        <section
//   ref={statsRef}
//   className="relative py-24 overflow-hidden bg-[#F5FAF6]"
// >
//   {/* Decorative Corners */}
//   <div className="absolute top-0 left-0 w-52 h-52 border-[24px] border-[#6CBF79] rounded-full -translate-x-28 -translate-y-28 opacity-40"></div>

//   <div className="absolute top-0 left-0 w-56 h-56 border-[4px] border-red-500 rounded-full -translate-x-24 -translate-y-24 opacity-70"></div>

//   <div className="absolute bottom-0 right-0 w-52 h-52 border-[24px] border-[#6CBF79] rounded-full translate-x-28 translate-y-28 opacity-40"></div>

//   <div className="absolute bottom-0 right-0 w-56 h-56 border-[4px] border-red-500 rounded-full translate-x-24 translate-y-24 opacity-70"></div>

//   <div className="max-w-7xl mx-auto px-4 relative z-10">
//     {/* Heading */}
//     <div className="text-center mb-14">
//       <div className="flex items-center justify-center gap-3 mb-4">
//         <div className="w-12 h-[2px] bg-[#2B8A5A]" />
//         <span className="uppercase text-[#2B8A5A] text-sm font-semibold tracking-widest">
//           Our Strength In Numbers
//         </span>
//         <div className="w-12 h-[2px] bg-[#2B8A5A]" />
//       </div>
//       <div className="w-24 h-1 bg-red-600 mx-auto mt-2 mb-4 rounded-full" />

//       <h2 className="text-3xl md:text-5xl font-bold text-[#111827]">
//         Why Employers Trust{" "}
//         <span className="text-[#0B7A4A]">
//           Electra Global
//         </span>
//       </h2>
//     </div>

//     {/* Cards */}
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate={statsInView ? "show" : "hidden"}
//       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
//     >
//       {[
//         {
//           icon: Award,
//           value: 15,
//           label: "Years of Expertise",
//         },
//         {
//           icon: Globe,
//           value: 20,
//           label: "Global Connections",
//         },
//         {
//           icon: Users,
//           value: 1000,
//           label: "Employers",
//         },
//         {
//           icon: Eye,
//           value: 100,
//           label: "Transparency",
//         },
//         {
//           icon: Database,
//           value: 10000,
//           label: "Candidate Database",
//         },
//       ].map((stat, i) => (
//         <motion.div key={i} variants={item}>
//           <StatCard
//             {...stat}
//             isInView={statsInView}
//           />
//         </motion.div>
//       ))}
//     </motion.div>
//   </div>
// </section>

//             <section className="py-24 bg-[#F2F5FD] flex justify-center">
//                 <div className="max-w-6xl w-full px-4">

//                     <div className="text-center mb-16">
//                         <h2 className="text-5xl font-bold text-[#2a7d56] mb-4">Why <span className='text-red-600'> Us</span></h2>
//                         <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
//                         <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
//                             {whyUsData?.[0]?.description ?? "We provide research-driven insights that bridge Nepal's strategic interests."}
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
//                         {whyUsLoading
//                             ? Array.from({ length: 4 }).map((_, i) => <WhyUsCardSkeleton key={i} />)
//                             : whyUsItems.length > 0
//                                 ? whyUsItems.map((whyItem: WhyUsItem) => (
//                                     <motion.div
//                                         key={whyItem.id}
//                                         whileHover={{ y: -8, scale: 1.02 }}
//                                         className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
//                                     >
//                                         <h3 className="text-lg font-semibold text-[#2B698E] mb-3">
//                                             {whyItem.title}
//                                         </h3>
//                                         <p className="text-gray-600 text-sm leading-relaxed">
//                                             {whyItem.description}
//                                         </p>
//                                     </motion.div>
//                                 ))
//                                 : (
//                                     <p className="text-gray-400 col-span-4 text-center">
//                                         No items found. Add some from the admin panel.
//                                     </p>
//                                 )
//                         }

//                     </div>

//                 </div>
//             </section>

// <LeaderShip/>
//         </div>
//     );
// };

// export default BestReview;


'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { Award, Globe, Users, Eye, Database, ShieldCheck, ClipboardList, Handshake, HeartHandshake, TrendingUp, Truck, Sparkles, Building2, Target, PhoneCall, Rocket } from "lucide-react";
import LeaderShip from './LeaderShip';
import { useQuery } from '@tanstack/react-query';
import Image from "next/image";

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

const iconMap = [
    HeartHandshake,
    TrendingUp,
    Truck,
    Sparkles,
];

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

const StatCard = ({
    icon: Icon,
    value,
    label,
    isInView,
}: {
    icon: React.ElementType;
    value: number;
    label: string;
    isInView: boolean;
}) => {
    const count = useCountAnimation(value, 2000, isInView);

    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl shadow-md border border-[#eef2ef] py-8 px-6 flex flex-col items-center text-center h-full transition-all"
        >
            <div className="relative mb-5">
                <div className="w-20 h-20 rounded-full border border-[#d8ebe0] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-[#e8f5ec] flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#1D7A52]" />
                    </div>
                </div>
            </div>
            <div className="w-10 h-[2px] bg-red-400 mb-4"></div>
            <h3 className="text-5xl font-bold text-[#0B7A4A]">
                {count.toLocaleString()}+
            </h3>
            <p className="mt-3 text-sm md:text-base font-semibold uppercase text-[#1f2937] tracking-wide">
                {label}
            </p>
        </motion.div>
    );
};

const WhyUsCardSkeleton = () => (
    <div className="bg-white p-6 rounded-2xl shadow-md animate-pulse">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-200" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-3" />
        <div className="h-3 bg-gray-100 rounded w-full mb-2" />
        <div className="h-3 bg-gray-100 rounded w-5/6 mx-auto" />
    </div>
);

// Skeleton for hero feature cards while API loads
const FeatureCardSkeleton = () => (
    <div className="p-5 sm:p-6 md:p-7 bg-white animate-pulse">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 rounded-full mb-4" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="w-8 h-[3px] bg-gray-200 rounded-full mb-3" />
        <div className="h-3 bg-gray-100 rounded w-full mb-1" />
        <div className="h-3 bg-gray-100 rounded w-5/6 mb-1" />
        <div className="h-3 bg-gray-100 rounded w-4/6" />
    </div>
);

const featureImageMap: Record<number, string> = {
    1: "/why-us/ethical.png",
    2: "/why-us/compliance.png",
    3: "/why-us/worker-protection.png",
    4: "/why-us/partnership.png",
};

// Icon map for feature cards — maps section number to icon
const featureIconMap: Record<number, React.ElementType> = {
    1: HeartHandshake,
    2: TrendingUp,
    3: Truck,
    4: Sparkles,
};

// Fallback static feature cards if API returns no section-1 data
const fallbackFeatureCards = [
    {
        id: 1,
        section: 1,
        title: "Our Responsible Recruitment Commitment",
        description:
            "At Electra Global Recruitment Pvt. Ltd., we believe recruitment should be fair, transparent, lawful, and respectful of human dignity. Our approach is guided by ethical foreign employment practices, worker protection, and accountability throughout the recruitment journey.",
    },
    {
        id: 2,
        section: 2,
        title: "Who We Are",
        description:
            "Electra is a Nepal-based global recruitment partner led by a team with over 13 years of experience in ethical foreign employment. We connect qualified and aspiring Nepali workers with responsible international employers through professional, transparent, and compliance-driven services.",
    },
    {
        id: 3,
        section: 3,
        title: "Our Core Services",
        description:
            "We manage recruitment from start to finish through a hassle-free and robust recruitment management system. Our services include employer consultation, due diligence support, manpower planning, candidate sourcing and screening, interview coordination, documentation, visa and deployment facilitation, and post-employment follow-up.",
    },
    {
        id: 4,
        section: 4,
        title: "Why Electra",
        description:
            "Electra brings together industry expertise, ethical commitment, practical recruitment knowledge, and a worker-centered service philosophy. We deliver dependable workforce solutions while safeguarding transparency, trust, dignity, and long-term partnership value in every engagement.",
    },
];

const BestReview = () => {
    const [statsRef, statsInView] = useInView();

    // ── Why Us data (used for both hero feature cards and the Why Us section) ──
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

    // All WhyUsItems flattened (for the Why Us cards section)
    const whyUsItems: WhyUsItem[] = (whyUsData ?? []).flatMap((w) => w.items ?? []);

    // Hero feature cards: use items whose section is 1–4, fall back to static data
    const featureItems: WhyUsItem[] =
        whyUsItems.length > 0
            ? whyUsItems.filter((i) => i.section >= 1 && i.section <= 4)
            : fallbackFeatureCards;

    return (
        <div className="w-full bg-[#E1F1E6]">
            {/* Stats Section */}
            <section ref={statsRef} className="relative py-24 overflow-hidden bg-[#F5FAF6]">
                <div className="absolute top-0 left-0 w-52 h-52 border-[24px] border-[#6CBF79] rounded-full -translate-x-28 -translate-y-28 opacity-40" />
                <div className="absolute top-0 left-0 w-56 h-56 border-[4px] border-red-500 rounded-full -translate-x-24 -translate-y-24 opacity-70" />
                <div className="absolute bottom-0 right-0 w-52 h-52 border-[24px] border-[#6CBF79] rounded-full translate-x-28 translate-y-28 opacity-40" />
                <div className="absolute bottom-0 right-0 w-56 h-56 border-[4px] border-red-500 rounded-full translate-x-24 translate-y-24 opacity-70" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-[#2B8A5A]" />
                            <span className="uppercase text-[#2B8A5A] text-sm font-semibold tracking-widest">
                                Our Strength In Numbers
                            </span>
                            <div className="w-12 h-[2px] bg-[#2B8A5A]" />
                        </div>
                        <div className="w-24 h-1 bg-red-600 mx-auto mt-2 mb-4 rounded-full" />
                        <h2 className="text-3xl md:text-5xl font-bold text-[#111827]">
                            Why Employers Trust{" "}
                            <span className="text-[#0B7A4A]">Electra Global</span>
                        </h2>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={statsInView ? "show" : "hidden"}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                    >
                        {[
                            { icon: Award, value: 15, label: "Years of Expertise" },
                            { icon: Building2, value: 20, label: "Global Connections" },
                            { icon: Users, value: 1000, label: "Employers" },
                            { icon: Target, value: 100, label: "Transparency" },
                            { icon: Database, value: 10000, label: "Candidate Database" },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={item}>
                                <StatCard
                                    icon={stat.icon}
                                    value={stat.value}
                                    label={stat.label}
                                    isInView={statsInView}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── HERO SECTION ── */}
            <section className="relative px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 md:pt-10 bg-white">
                {/* Brand bar */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6 md:mb-7">
                    <span className="text-[#1D7A52] text-xs font-semibold tracking-[3px] uppercase">
                        Electra Global
                    </span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* Headline + CTA card */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
                    <div className="w-full lg:w-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-extrabold leading-tight text-gray-900">
                            Responsible, Ethical &<br />
                            <span className="text-red-600">Compliance-Driven</span><br />
                            <span className='text-green-800'>

                                Recruitment from Nepal
                            </span>
                        </h1>
                        <div className="w-16 h-1 bg-red-600 rounded-full mt-4 mb-5" />
                        <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
                            We connect qualified Nepali workers with responsible international
                            employers through fair, transparent, and worker-centered recruitment solutions.
                        </p>
                    </div>

                    {/* CTA card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center gap-4 w-full lg:w-auto min-w-[260px] flex-shrink-0">
                        <div className="w-12 h-12 bg-[#1D7A52] rounded-full flex items-center justify-center p-3 flex-shrink-0">
                            <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 mb-1">Tailored for Responsible Employers</p>
                            <a href="/contact" className="text-sm font-semibold text-[#1D7A52] flex items-center gap-1 hover:underline">
                                Partner With Electra →
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featureItems.map((card, i) => {
                        return (
                            <div
                                key={card.id}
                                className="
                                    bg-white
                                    border border-gray-200
                                    rounded-2xl
                                    p-6 sm:p-7
                                    shadow-md
                                    hover:shadow-xl
                                    hover:-translate-y-1
                                    transition-all duration-300
                                    flex flex-col
                                    min-h-[240px]
                                    "
                            >
                                {/* ICON / IMAGE BOX */}
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f0f9f4] border border-green-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                                    <Image
                                        src={featureImageMap[i + 1] || "/why-us/ethical.png"}
                                        alt={card.title}
                                        width={60}
                                        height={48}
                                        className="object-contain "
                                    />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-lg font-bold text-[#1D7A52] mb-2 leading-snug">
                                    {card.title}
                                </h3>

                                {/* RED LINE */}
                                <div className="w-8 h-[3px] bg-red-500 rounded-full mb-3" />

                                {/* DESCRIPTION */}
                                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                                    {card.description}
                                </p>

                            </div>

                        );
                    })}

                </div>
                <div className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none overflow-hidden">

<svg
  viewBox="0 0 500 120"
  preserveAspectRatio="none"
  className="absolute left-0 bottom-0 w-[45%] h-full"
>
  <path
    d="
      M0,80
      L200,120
      L500,120
      L0,120
      Z
    "
    fill="#0b7a4a"
  />
</svg>
    
</div>
            </section>

            {/* ── WHY US SECTION ── */}

            {/* ── STATS BANNER ── */}
            <div className="relative bg-[#0d2e1c] px-6 sm:px-8 md:px-12 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-center gap-4 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #6ee7b7 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                    }}
                />
                <svg className="absolute bottom-0 right-0 w-28 h-20" viewBox="0 0 110 80" fill="none">
                    <path d="M110 0 C70 0, 20 40, 0 80 L110 80 Z" fill="#dc2626" opacity="0.7" />
                    <path d="M110 20 C80 20, 40 55, 10 80 L110 80 Z" fill="#1D7A52" opacity="0.5" />
                </svg>
                <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#2d6a47] rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                </div>
                <p className="relative z-10 text-sm sm:text-base text-green-50 leading-relaxed text-center sm:text-left">
                    Ethical recruitment solutions{" "}
                    <span className="text-red-500 font-semibold">connecting</span>
                    <br className="hidden sm:block" />
                    skilled Nepali talent with responsible{" "}
                    <span className="text-red-500 font-semibold">global employers.</span>
                </p>
            </div>

            <LeaderShip />
        </div>
    );
};

export default BestReview;