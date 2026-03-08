import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const subtleEasing = [0.25, 0.1, 0.25, 1] as const;

  const experiences = [
    {
      role: 'Software Developer',
      company: 'Infosys Springboard',
      location: 'Remote',
      period: 'Sept 2025 - Nov 2025',
      type: 'Internship',
      description: 'Software Developer Intern working on an automated task reminder and tracking platform with focus on Docker-based deployment.',
      achievements: [
        'Created and managed Docker containers for project services.',
        'Built custom Docker images to streamline development workflow.',
        'Contributed to deployment setup and environment configuration.'
      ],
      technologies: ['React', 'Spring Boot', 'Docker', 'MySQL']
    },
    {
      role: 'Web Developer',
      company: 'Gao TEK Inc.',
      location: 'Remote',
      period: 'Dec 2024 - March 2025',
      type: 'Internship',
      description: 'Web Developer Intern contributing to frontend development, design, and e-commerce features using React, WordPress, and CSS.',
      achievements: [
        'Built search bar, product pages, and interactive animations.',
        'Worked on React and WordPress for dynamic website development.',
        'Designed and styled responsive layouts with CSS.'
      ],
      technologies: ['React', 'CSS', 'Wordpress']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: subtleEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My journey through different roles and companies, building expertise and delivering results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:transform md:-translate-x-px"></div>

          {experiences.map((exp, index) => (
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
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 mb-1 tracking-tight">{exp.role}</h3>
                      <div className="flex items-center text-cyan-500 mb-2">
                        <Building size={16} className="mr-2" />
                        <span className="font-medium text-slate-300">{exp.company}</span>
                      </div>
                    </div>
                    <span className="self-start px-3 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded-full text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>

                  {/* Location and Period */}
                  <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-5">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1.5" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1.5" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-5 leading-relaxed">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Achievements</h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-300 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-cyan-500/60 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-slate-800 text-slate-300 border border-slate-700 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;