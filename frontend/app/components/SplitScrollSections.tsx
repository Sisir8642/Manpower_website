'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const SplitScrollSections = () => {
  return (
    <div className="min-h-[400vh] w-full bg-linear-to-br from-purple-50 to-blue-50">
      {/* Section 1 */}
      <ScrollSplitSection
        id="section-1"
        leftContent={
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/images/split.png')" }}
          >
            {/* Optional overlay for better readability */}
            <div className="bg-black/30 w-full h-full absolute rounded-xl" />
          </div>
        }
        rightContent={
          <div className="flex flex-col items-center justify-center h-full text-center p-12 overflow-hidden">

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black bg-linear-to-r from-black to-red-700 bg-clip-text text-transparent mb-6"
            >
              Dog Collars
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-md leading-relaxed"
            >
              Discover our beautifully crafted dog collars designed with both comfort
              and durability in mind.
              <br />
              Each piece is made from premium materials to
              ensure long-lasting wear while keeping your furry companion safe and
              stylish on every adventure. Whether it&apos; a casual walk or a special outing,
              our collars are built to stand out.
            </motion.p>

          </div>
        }
      />

      <ScrollSplitSection
        id="section-2"
        leftContent={
          
          <div className="flex flex-col items-center justify-center h-full text-center p-12 overflow-hidden ">

            <motion.h2
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black bg-linear-to-r from-white to-red-700 bg-clip-text text-transparent mb-6"
            >
              Why Choose Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -140 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white max-w-md leading-relaxed"
            >
              Built for every adventure, our waterproof dog collars are designed to
              handle rain, mud, and splashes without compromising comfort or style.
              <br />
              Crafted with durable, water-resistant materials, they stay strong and
              reliable whether your dog is exploring the outdoors or playing by the water.
            </motion.p>

          </div>
        }

        rightContent={
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/images/values.png')" }}
          >
            {/* Optional overlay for better readability */}
            {/* <div className="bg-black/30 w-full h-full absolute rounded-xl" /> */}
          </div>
        }
      />
    </div>
  );
};

// Reusable Split Section Component
interface SplitSectionProps {
  id: string;
  leftContent: React.ReactNode;  //type =JSX, ReactNode means:any renderable content e.g div, image, component
  rightContent: React.ReactNode;
}

const ScrollSplitSection: React.FC<SplitSectionProps> = ({ id, leftContent, rightContent }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], ["-100%", "0%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

  return (
    <section
      ref={ref}
      id={id}
      className="sticky top-0 h-screen w-full flex overflow-hidden"
    >
      {/* Left */}
      <motion.div
        className="w-1/2 h-full bg-linear-to-b from-pink-400/20 to-purple-400/20 backdrop-blur-sm border-r-4 border-white/50"
        style={{ x: leftX, scale }}
      >
        {leftContent}
      </motion.div>

      {/* Right */}
      <motion.div
        className="w-1/2 h-full bg-linear-to-b from-blue-400/20 to-emerald-400/20 backdrop-blur-sm border-l-4 border-white/50"
        style={{ x: rightX, scale }}
      >
        {rightContent}
      </motion.div>
    </section>
  );
};


export default SplitScrollSections;

