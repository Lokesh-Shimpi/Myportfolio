import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const subtleEasing = [0.25, 0.1, 0.25, 1] as const;

  const educationData = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'SSBT College of Engineering & Technology, Bambhori',
      year: '2022 - 2026',
      gpa: '7.84/10',
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: subtleEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Academic journey and continuous learning in technology and computer science
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:transform md:-translate-x-px"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: subtleEasing }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } group`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-slate-950 md:transform md:-translate-x-2 z-10 transition-colors duration-300 ${index === 0 ? 'bg-cyan-500' : 'bg-slate-600 group-hover:bg-cyan-500/50'
                  }`}
              ></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/50 group-hover:border-slate-700/50">
                  {/* Institution and Year */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700">
                      <GraduationCap size={16} className="text-slate-300 mr-2" />
                      <span className="text-slate-200 text-xs font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-slate-400 text-sm whitespace-nowrap self-start sm:self-center">
                      <Calendar size={14} className="mr-1.5" />
                      {edu.year}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-4 tracking-tight">{edu.degree}</h3>

                  {/* GPA */}
                  <div className="flex items-center">
                    <Award size={18} className="text-cyan-500 mr-2" strokeWidth={2} />
                    <span className="text-slate-300 font-medium">CGPA: {edu.gpa}</span>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;