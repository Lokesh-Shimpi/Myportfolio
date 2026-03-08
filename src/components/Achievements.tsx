import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, Code } from 'lucide-react';

const Achievements = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const subtleEasing = [0.25, 0.1, 0.25, 1] as const;

  const achievements = [
    {
      icon: Award,
      title: 'OCI Developer Professional',
      organization: 'Oracle',
      date: 'Oct 2025'
    },
    {
      icon: Award,
      title: 'OCI Architect Associate',
      organization: 'Oracle',
      date: 'Oct 2025'
    },
    {
      icon: Award,
      title: 'OCI Foundation Associate',
      organization: 'Oracle',
      date: 'Sept 2025'
    },
    {
      icon: Star,
      title: 'Postman Student Expert',
      organization: 'Postman',
      date: 'Sept 2025'
    },
    {
      icon: Code,
      title: 'Fundamentals of Java',
      organization: 'Coursera',
      date: '2024'
    },
    {
      icon: Code,
      title: 'Young Python Professional',
      organization: 'Infosys Springboard',
      date: '2024'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: subtleEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Recognition and certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: subtleEasing
                }}
                className="group relative h-full"
              >
                <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 hover:border-slate-700/50 flex flex-col h-full">

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-5 group-hover:border-cyan-500/50 transition-colors">
                    <Icon size={24} className="text-cyan-500" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">
                      {achievement.title}
                    </h3>

                    <div className="flex items-center justify-between mt-auto pt-4">
                      <span className="text-sm font-medium text-slate-300">
                        {achievement.organization}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 px-2.5 py-1 bg-slate-800/80 rounded-md border border-slate-700">
                        {achievement.date}
                      </span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;