
'use client';
import { HeartHandshake, ShieldCheck, Globe2, Star,  } from 'lucide-react';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
    <div>
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
    <section className="w-full bg-white">
        <div className="max-w-9xl mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative group overflow-hidden rounded-2xl ${feature.bgColor} p-6 shadow-sm hover:shadow-xl transition-all duration-300 border ${feature.borderColor}`}
              >
                {/* Horizontal layout: Icon on left, content on right */}
                <div className="flex items-start gap-4">
                  {/* Icon Container - Left side */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>
                  </div>

                  {/* Content - Right side */}
                  <div className="flex-1 text-left">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <div className="w-20 h-1 bg-emerald-700 rounded-full mb-3" />

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
</div>
  );
}
