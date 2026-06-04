
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const leaders = [
  {
    name: 'Ms Shweta Chauhan',
    role: 'Chairperson',
    image: '/images/chairperson.jpeg',
        
    accent: '#93c5fd',
    dotColor: '#3b82f6',
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
         // green
    accent: '#86efac',
    dotColor: '#22c55e',
    quotes: [
      'Electra Global Recruitment Pvt. Ltd. is committed to making foreign employment a dignified, fair, ethical, and transparent process that benefits workers, employers, and Nepal\'s development.',
      'The founder\'s academic background (MBA in HR and MA in Sociology), combined with extensive experience in the foreign employment industry, has helped integrate international ethical standards including ILO principles and RBA practices.',
    ],
  },
];

// Floating particle
function Particle({ color, style }: { color: string; style: React.CSSProperties }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], opacity: [0.4, 0.9, 0.4] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        width: 6, height: 6,
        borderRadius: '50%',
        background: color,
        ...style,
      }}
    />
  );
}

// Card for each leader
function LeaderCard({ leader, index }: { leader: typeof leaders[0]; index: number }) {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={ref} className="relative flex items-start gap-0 w-full">

      {/* ── LEFT side ── */}
      <div className={`flex-1 ${isLeft ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}`}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Photo card */}
            <div className="relative rounded-3xl overflow-hidden "
              style={{ background: leader.accent }}>
              <div className="relative h-72 md:h-96 overflow-hidden">
                <motion.img
                  src={leader.image}
                  alt={leader.name}
                  style={{ y }}
                  className="w-full h-full object-cover object-top scale-110"
                />
               
              </div>
              <div className="px-6 py- text-white">
                <h3 className="text-2xl text-black font-bold tracking-tight">{leader.name}</h3>
                <p className="text-sm mt-1 opacity-70  uppercase tracking-widest text-black font-bold tracking-tight">{leader.role}</p>
              </div>

              {/* Floating particles on card */}
              <Particle color={leader.accent} style={{ top: '15%', right: '8%' }} />
              <Particle color="#fff" style={{ top: '30%', right: '20%' }} />
            </div>

            {/* Red accent strip */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl opacity-20"
              style={{ background: '#ef4444', zIndex: -1 }} />
          </motion.div>
        ) : (
          // Quote side on left for even items
          <QuoteContent leader={leader} direction="right" />
        )}
      </div>

      <div className="flex-none flex flex-col items-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Pulse ring */}
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

      {/* ── RIGHT side ── */}
      <div className={`flex-1 ${isLeft ? 'pl-8 md:pl-16' : 'pr-8 md:pr-16'}`}>
        {isLeft ? (
          <QuoteContent leader={leader} direction="left" />
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden "
              style={{ background: leader.accent}}>
              <div className="relative h-72 md:h-96 overflow-hidden">
                <motion.img
                  src={leader.image}
                  alt={leader.name}
                  style={{ y }}
                  className="w-full h-full object-cover object-top scale-110"
                />
                
              </div>
              <div className="px-6 py-1 text-black">
                <h3 className="text-2xl font-bold tracking-tight">{leader.name}</h3>
                <p className="text-sm mt-1 opacity-70 font-medium uppercase tracking-widest">{leader.role}</p>
              </div>
              <Particle color={leader.accent} style={{ top: '15%', left: '8%' }} />
              <Particle color="#fff" style={{ top: '30%', left: '20%' }} />
            </div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 rounded-2xl opacity-20"
              style={{ background: '#ef4444', zIndex: -1 }} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function QuoteContent({ leader, direction }: { leader: typeof leaders[0]; direction: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="pt-4"
    >
      {/* Big decorative quote mark */}
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

      {/* Role badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-sm font-semibold text-white"
        style={{ background: leader.accent}}
      >
       
      </motion.div>
    </motion.div>
  );
}

export default function LeadershipTimeline() {
  return (
    <section className="relative py-14 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #fff1f2 100%)' }}>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
       

        {/* Floating particles background */}
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
              background: ['#3b82f6','#22c55e','#ef4444'][i % 3],
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-4 text-black"
          >
            Our Leadership
          </motion.span>
          
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, #3b82f6, #22c55e, #ef4444)' }}>
            {/* Animated glow on line */}
            <motion.div
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-1 h-20 -left-px rounded-full"
              style={{ background: 'linear-gradient(to bottom, transparent, #fff, transparent)', opacity: 0.6 }}
            />
          </div>

          {/* Leader cards */}
          <div className="space-y-24">
            {leaders.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        </div>

        {/* Red accent bottom tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-20"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
