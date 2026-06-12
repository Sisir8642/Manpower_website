'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeartHandshake, ShieldCheck, Globe2, Quote, Lightbulb, Award, Target, Shield, Handshake } from 'lucide-react';

const leaders = [
  {
    name: 'Ms Shweta Chauhan',
    role: 'Chairperson',
    image: '/images/chairperson.jpeg',
    accent: '#93c5fd',
    dotColor: '#3b82f6',
    tagColor: 'bg-blue-500',
    mainQuote: 'Together, We Connect Talent to Global Opportunity.',
    points: [
      'Visionary leadership with global perspective',
      'Deep expertise in ethical and fair recruitment',
      'Committed to connecting Nepali talent to global opportunities.',
    ],
    icons: [Lightbulb, Award, Globe2],
    quotes: [
      'Electra Global Recruitment Pvt. Ltd. aims to build an ethical bridge connecting Nepalese talent with global jobs. The founder, a young entrepreneur with over a decade of experience in Middle East recruitment and five years in Nepal\'s foreign employment sector, believes in Nepal\'s immense human potential.',
      'The company is committed to end-to-end services that ensure dignified, fair, and lawful employment for workers while providing reliable HR solutions to global partners.',
      '"Together, We Connect Talent to Global Opportunity."',
    ],
  },
  {
    name: 'Ms Karuna Thapa',
    role: 'Managing Director',
    image: '/images/MD.jpeg',
    accent: '#86efac',
    dotColor: '#22c55e',
    tagColor: 'bg-emerald-500',
    mainQuote: 'Ethical Recruitment, Global Standards, Meaningful Impact.',
    points: [
      'Extensive experience in international recruitment and workforce solution',
      'Strong advocate of ethical practices and compliance',
      'Focus on sustainable partnerships and long term value',
    ],
    icons: [Target, Shield, Handshake],
    quotes: [
      'Electra Global Recruitment Pvt. Ltd. is committed to making foreign employment a dignified, fair, ethical, and transparent process that benefits workers, employers, and Nepal\'s development.',
      'The founder\'s academic background (MBA in HR and MA in Sociology), combined with extensive experience in the foreign employment industry, has helped integrate international ethical standards including ILO principles and RBA practices.',
    ],
  },
];

const features = [
  {
    icon: HeartHandshake,
    title: 'Ethical Vision',
    description: 'We believe in people first, always.',
    bgColor: 'bg-white',
    iconColor: 'text-emerald-700',
    borderColor: 'border-white',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Leadership',
    description: 'Upholding international standards with integrity.',
    bgColor: 'bg-white',
    iconColor: 'text-red-600',
    borderColor: 'border-white',
  },
  {
    icon: Globe2,
    title: 'Global Partnership',
    description: 'Building long-term relationships across borders.',
    bgColor: 'bg-white',
    iconColor: 'text-emerald-700',
    borderColor: 'border-white',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Ripple Component
const RippleCard = ({ children, className = "", rippleColor = "rgba(255, 255, 255, 0.3)" }: any) => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();
    
    setRipples((prev) => [...prev, { id, x, y }]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  return (
    <div className={`relative overflow-hidden cursor-pointer ${className}`} onClick={handleRipple}>
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute pointer-events-none"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            left: ripple.x - 100,
            top: ripple.y - 100,
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: rippleColor,
          }}
        />
      ))}
    </div>
  );
};

// Floating particle
function Particle({ color, style }: { color: string; style: React.CSSProperties }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], opacity: [0.4, 0.9, 0.4] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: color,
        ...style,
      }}
    />
  );
}

// Enhanced Leader Card with both designs
function EnhancedLeaderCard({ leader, index }: any) {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-start gap-12 md:gap-0 w-full">
      {/* LEFT side */}
      <div className={`flex-1 ${isLeft ? 'pr-8 md:pr-16 order-1 md:order-1' : 'pl-8 md:pl-16 order-2 md:order-1'}`}>
        {isLeft ? (
          <RippleCard rippleColor="rgba(59, 130, 246, 0.2)">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden" style={{ background: leader.accent }}>
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <motion.img
                    src={leader.image}
                    alt={leader.name}
                    style={{ y }}
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
                <div className="px-6 py-4 text-black">
                  <h3 className="text-2xl font-bold tracking-tight">{leader.name}</h3>
                  <p className="text-sm mt-1 opacity-70 uppercase tracking-widest font-bold">{leader.role}</p>
                </div>
                <Particle color={leader.accent} style={{ top: '15%', right: '8%' }} />
                <Particle color="#fff" style={{ top: '30%', right: '20%' }} />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl opacity-20"
                style={{ background: '#ef4444', zIndex: -1 }} />
            </motion.div>
          </RippleCard>
        ) : (
          <QuoteContent leader={leader} direction="right" />
        )}
      </div>

      {/* Center Dot */}
      <div className="flex-none flex flex-col items-center z-10 hidden md:flex order-2 md:order-2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute w-10 h-10 rounded-full"
            style={{ background: leader.dotColor }}
          />
          <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
            style={{ background: leader.dotColor }} />
        </motion.div>
      </div>

      {/* RIGHT side */}
      <div className={`flex-1 ${isLeft ? 'pl-8 md:pl-16 order-2 md:order-3' : 'pr-8 md:pr-16 order-1 md:order-3'}`}>
        {isLeft ? (
          <QuoteContent leader={leader} direction="left" />
        ) : (
          <RippleCard rippleColor="rgba(34, 197, 94, 0.2)">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden" style={{ background: leader.accent }}>
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <motion.img
                    src={leader.image}
                    alt={leader.name}
                    style={{ y }}
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
                <div className="px-6 py-4 text-black">
                  <h3 className="text-2xl font-bold tracking-tight">{leader.name}</h3>
                  <p className="text-sm mt-1 opacity-70 font-medium uppercase tracking-widest">{leader.role}</p>
                </div>
                <Particle color={leader.accent} style={{ top: '15%', left: '8%' }} />
                <Particle color="#fff" style={{ top: '30%', left: '20%' }} />
              </div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 rounded-2xl opacity-20"
                style={{ background: '#ef4444', zIndex: -1 }} />
            </motion.div>
          </RippleCard>
        )}
      </div>
    </div>
  );
}

function QuoteContent({ leader, direction }: { leader: typeof leaders[0]; direction: 'left' | 'right' }) {
  return (
    <RippleCard rippleColor={leader.dotColor === '#3b82f6' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(34, 197, 94, 0.15)'}>
      <motion.div
        initial={{ opacity: 0, x: direction === 'left' ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pt-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-8xl leading-none font-serif mb-2"
          style={{ color: leader.dotColor, opacity: 0.25 }}
        >
          ❝
        </motion.div>

        <div className="space-y-5">
          {leader.quotes.map((q, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`leading-8 text-slate-700 ${
                q.startsWith('"') ? 'italic font-semibold text-lg' : 'text-base'
              }`}
            >
              {q}
            </motion.p>
          ))}
        </div>

        {/* Points with Icons */}
        <div className="space-y-3 mt-6">
          {leader.points.map((point: string, i: number) => {
            const IconComponent = leader.icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className={`${leader.tagColor} rounded-full p-1 flex-shrink-0 mt-0.5`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </RippleCard>
  );
}

// Simple Feature Card Component
function FeatureCard({ feature, index }: any) {
  return (
    <RippleCard 
      rippleColor={feature.iconColor === 'text-emerald-700' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(220, 38, 38, 0.15)'}
      className="cursor-pointer"
    >
      <motion.div
        variants={item}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className={`relative group overflow-hidden rounded-2xl ${feature.bgColor} p-6 shadow-sm hover:shadow-xl transition-all duration-300 border ${feature.borderColor}`}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
            </div>
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <div className="w-20 h-1 bg-emerald-700 rounded-full mb-3" />
            <p className="text-gray-600 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </RippleCard>
  );
}

export default function LeadershipTimeline() {
  return (
    <div>
      {/* Leadership Section with Timeline */}
      <section className="relative py-14 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #fff1f2 100%)' }}>
        
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div key={i}
              animate={{ y: [0, -24, 0], x: [0, i % 2 === 0 ? 8 : -8, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              className="absolute rounded-full"
              style={{
                width: 4 + (i % 4) * 3,
                height: 4 + (i % 4) * 3,
                left: `${8 + i * 8}%`,
                top: `${10 + (i * 13) % 80}%`,
                background: ['#3b82f6', '#22c55e', '#ef4444'][i % 3],
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2
              className="mb-8 text-center text-5xl font-extrabold tracking-tight"
              style={{ color: "#2a7d56", fontFamily: "'Georgia', serif" }}
            >
              Our <span className="text-red-600">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
              style={{ background: 'linear-gradient(to bottom, #3b82f6, #22c55e, #ef4444)' }}>
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-1 h-20 -left-px rounded-full"
                style={{ background: 'linear-gradient(to bottom, transparent, #fff, transparent)', opacity: 0.6 }}
              />
            </div>

            {/* Enhanced Leader Cards */}
            <div className="space-y-24">
              {leaders.map((leader, i) => (
                <EnhancedLeaderCard key={leader.name} leader={leader} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white  ">
        <div className="max-w-9xl mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}