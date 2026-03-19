'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const SplitScrollSections = () => {
  return (
    <div className="min-h-[400vh] w-full bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Section 1 */}
      <ScrollSplitSection 
        id="section-1"
        leftContent={
          <div className="flex flex-col items-center justify-center h-full text-center p-12">
            <div className="w-48 h-48 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl shadow-2xl mb-8" />
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Dog Collars
            </h2>
            <p className="text-xl text-gray-600 max-w-md">
              Premium quality collars for your furry friends
            </p>
          </div>
        }
        rightContent={
          <div className="flex flex-col items-center justify-center h-full text-center p-12">
            <Image 
              src="/images/image.png" 
              alt="Dog wearing collar" 
              width={300} 
              height={300}
              className="w-64 h-64 object-contain rounded-2xl shadow-2xl"
            />
          </div>
        }
      />

      {/* Section 2 */}
      <ScrollSplitSection 
        id="section-2"
        leftContent={
          <div className="flex flex-col items-center justify-center h-full text-center p-12">
            <Image 
              src="/images/image.png" 
              alt="Leather collar closeup" 
              width={300} 
              height={300}
              className="w-64 h-64 object-contain rounded-2xl shadow-2xl mb-8"
            />
          </div>
        }
        rightContent={
          <div className="flex flex-col items-center justify-center h-full text-center p-12">
            <div className="w-48 h-48 bg-gradient-to-r from-blue-400 to-emerald-500 rounded-3xl shadow-2xl mb-8" />
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Waterproof
            </h2>
            <p className="text-xl text-gray-600 max-w-md">
              Adventure-ready collars that withstand any weather
            </p>
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
        className="w-1/2 h-full bg-gradient-to-b from-pink-400/20 to-purple-400/20 backdrop-blur-sm border-r-4 border-white/50"
        style={{ x: leftX, scale }}
      >
        {leftContent}
      </motion.div>

      {/* Right */}
      <motion.div
        className="w-1/2 h-full bg-gradient-to-b from-blue-400/20 to-emerald-400/20 backdrop-blur-sm border-l-4 border-white/50"
        style={{ x: rightX, scale }}
      >
        {rightContent}
      </motion.div>
    </section>
  );
};


export default SplitScrollSections;


// 'use client';

// import React from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import Image from 'next/image';

// interface SplitSectionProps {
//   id: string;
//   leftContent: React.ReactNode;
//   rightContent: React.ReactNode;
// }

// const SplitScrollSection: React.FC<SplitSectionProps> = ({ id, leftContent, rightContent }) => {
//   const ref = React.useRef<HTMLDivElement | null>(null);

//   // Track scroll progress for this section
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   // Smooth spring animations
//   const leftX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], ["-120%", "0%", "0%"]), { damping: 20, stiffness: 120 });
//   const rightX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], ["120%", "0%", "0%"]), { damping: 20, stiffness: 120 });
//   const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]), { damping: 25, stiffness: 120 });

//   // Parallax depth for inner content (optional subtle offset)
//   const leftParallax = useSpring(useTransform(scrollYProgress, [0, 1], [-30, 30]), { damping: 20, stiffness: 100 });
//   const rightParallax = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), { damping: 20, stiffness: 100 });

//   // Fade in/out text
//   const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
//   const textY = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [50, 0, -50]);

//   return (
//     <section
//       ref={ref}
//       id={id}
//       className="relative h-screen w-full flex overflow-hidden sticky top-0"
//     >
//       {/* Left Panel */}
//       <motion.div
//         className="w-1/2 h-full bg-gradient-to-b from-pink-400/20 to-purple-400/20 flex items-center justify-center"
//         style={{ x: leftX, scale }}
//       >
//         <motion.div style={{ y: leftParallax, opacity, y: textY }}>
//           {leftContent}
//         </motion.div>
//       </motion.div>

//       {/* Right Panel */}
//       <motion.div
//         className="w-1/2 h-full bg-gradient-to-b from-blue-400/20 to-emerald-400/20 flex items-center justify-center"
//         style={{ x: rightX, scale }}
//       >
//         <motion.div style={{ y: rightParallax, opacity, y: textY }}>
//           {rightContent}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// const PremiumSplitScroll: React.FC = () => {
//   const sections = [
//     {
//       id: "section-1",
//       leftContent: (
//         <div className="text-center max-w-md p-8">
//           <div className="w-48 h-48 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl shadow-2xl mb-6" />
//           <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
//             Dog Collars
//           </h2>
//           <p className="text-lg text-gray-600">
//             Premium quality collars for your furry friends
//           </p>
//         </div>
//       ),
//       rightContent: (
//         <Image
//           src="/images/image.png"
//           alt="Dog wearing collar"
//           width={300}
//           height={300}
//           className="rounded-2xl shadow-2xl object-contain"
//         />
//       )
//     },
//     {
//       id: "section-2",
//       leftContent: (
//         <Image
//           src="/images/image.png"
//           alt="Leather collar closeup"
//           width={300}
//           height={300}
//           className="rounded-2xl shadow-2xl object-contain"
//         />
//       ),
//       rightContent: (
//         <div className="text-center max-w-md p-8">
//           <div className="w-48 h-48 bg-gradient-to-r from-blue-400 to-emerald-500 rounded-3xl shadow-2xl mb-6" />
//           <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
//             Waterproof
//           </h2>
//           <p className="text-lg text-gray-600">
//             Adventure-ready collars that withstand any weather
//           </p>
//         </div>
//       )
//     }
//   ];

//   return (
//     <div className="w-full">
//       {sections.map((sec) => (
//         <div key={sec.id} className="h-[200vh]">
//           <SplitScrollSection
//             id={sec.id}
//             leftContent={sec.leftContent}
//             rightContent={sec.rightContent}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PremiumSplitScroll;
