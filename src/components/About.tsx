import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CounterAnimation from './ui/CounterAnimation';
import { Code, Users, Award, Coffee } from 'lucide-react';

import profileImg from '../../assets/lokesh.jpg';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { icon: Code, value: 2, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 10, suffix: '+', label: 'Projects Completed' },
    { icon: Award, value: 5, suffix: '+', label: 'Certifications' },
    { icon: Coffee, value: 1000, suffix: '+', label: 'Cups of Coffee' }
  ];

  const subtleEasing = [0.25, 0.1, 0.25, 1] as const;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: subtleEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: subtleEasing }}
            className="relative group"
          >
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/50 group-hover:border-slate-700/50">
              {/* Profile Image Ring */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full border border-slate-800 bg-slate-900 p-1 transition-colors group-hover:border-cyan-500/50">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={profileImg} alt="Lokesh Shimpi" className="w-full h-full object-cover" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-4 text-slate-100 tracking-tight">
                Lokesh Shimpi
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                I am a Full-Stack Developer and Computer Science undergraduate with hands-on experience building scalable web applications and developer tools. My work focuses on React, Node.js, cloud technologies, and modern JavaScript frameworks, with practical experience developing full-stack systems, REST APIs, and real-time applications.
              </p>

              <p className="text-slate-400 leading-relaxed">
                Through internships and personal projects, I have built production-ready platforms, optimized backend performance, and developed automation tools that improve developer workflows. I enjoy exploring AI integration, cloud infrastructure, and system architecture, and I consistently work on innovative projects that push my technical boundaries while delivering meaningful user experiences.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: subtleEasing }}
                className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 hover:border-slate-700/50 group"
              >
                <div className="mb-4">
                  <stat.icon
                    size={28}
                    className="mx-auto text-slate-500 group-hover:text-cyan-500 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-3xl font-bold text-slate-100 mb-2">
                  <CounterAnimation value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;