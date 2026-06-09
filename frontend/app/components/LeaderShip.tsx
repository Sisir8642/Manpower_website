
'use client';

import { motion } from 'framer-motion';
import { Quote, CheckCircle, Lightbulb, Award, Globe, Target, Shield, Handshake } from 'lucide-react';

const leaders = [
  {
    name: 'Ms Shweta Chauhan',
    role: 'Chairperson',
    image: '/images/chairperson.jpeg',
    color: 'blue',
    tagColor: 'bg-blue-500',
    quoteIcon: 'text-black',
    mainQuote: 'Together, We Connect Talent to Global Opportunity.',
    points: [
      'Visionary leadership with global perspective',
      'Deep expertise in ethical and fair recruitment',
      'Committed to connecting Nepali talent to global opportunities.',
    ],
    icons: [Lightbulb, Award, Globe],
  },
  {
    name: 'Ms Karuna Thapa',
    role: 'Managing Director',
    image: '/images/MD.jpeg',
    color: 'emerald',
    tagColor: 'bg-emerald-500',
    quoteIcon: 'text-black',
    mainQuote: 'Ethical Recruitment, Global Standards, Meaningful Impact.',
    points: [
      ' Extensive experience in international recruitment and workforce solution',
      'Strong advocate of ethical practices and compliance',
      'Focus on sustainable partnerships and long term value',

    ],
    icons: [Target, Shield, Handshake],
  },
];

function LeaderCard({ leader, index }: any) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}>
        {/* Photo Card */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-5/12 flex-shrink-0"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="relative h-64 md:h-80">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Name Tag */}
            <div className={`absolute bottom-4 left-4 ${leader.tagColor} text-white px-4 py-2 rounded-lg shadow-md`}>
              <h3 className="font-bold text-lg">{leader.name}</h3>
              <p className="text-xs uppercase tracking-wide opacity-90">{leader.role}</p>
            </div>
          </div>
        </motion.div>

        {/* Quote & Points Card */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-7/12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 relative">
            {/* Quote Icon */}
            <div className="absolute -top-3 left-6">
              <div className={`${leader.tagColor} rounded-full p-2 shadow-md`}>
                <Quote className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Main Quote */}
            <div className="mt-4 mb-6">
              <p className={`text-lg font-semibold ${leader.quoteIcon} italic leading-relaxed`}>
                "{leader.mainQuote}"
              </p>
            </div>

            {/* Points with Checkmarks */}
            <div className="space-y-3">
              {leader.points.map((point: string, i: number) => {
                const IconComponent = leader.icons[i];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`${leader.tagColor} rounded-full p-1 flex-shrink-0 mt-0.5`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function LeadershipTimeline() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-emerald-50/30">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">
            Our <span className='text-red-600' >Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* CARDS */}
        <div className="space-y-12">
          {leaders.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
