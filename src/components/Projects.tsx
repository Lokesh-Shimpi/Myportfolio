import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeFilter] = useState('All');
  const subtleEasing = [0.25, 0.1, 0.25, 1] as const;

  const projects = [
    {
      title: 'SiteSnap Pro',
      description: 'SiteSnap Pro is a full-stack reliability dashboard that monitors ping latency, validates SSL certificates, and detects UI regressions using automated screenshots, leveraging a microservice architecture to eliminate server memory crashes.',
      image: '/assets/sitesnap.jpg',
      tech: ['Node.js', 'Puppeteer-core', 'React', 'WebSockets'],
      github: 'https://github.com/Lokesh-Shimpi/SiteSnap-Pro',
      demo: 'https://sitesnap-pro.vercel.app/'
    },
    {
      title: 'k8s-deploy-helper',
      description: 'A tool designed to help build and deploy containerized applications into Kubernetes using GitLab CI. It supports automated secret management, canary deployments, and review apps with templated manifest files.',
      image: '/assets/k8s.png',
      tech: ['Shell', 'Docker', 'Kubernetes', 'GitLab CI'],
      github: 'https://github.com/Lokesh-Shimpi/k8s-deploy-helper',
      demo: 'https://www.npmjs.com/package/k8s-deploy-helper'
    },

    {
      title: 'Artion AI',
      description: 'An AI-powered platform that allows users to effortlessly create and deploy web applications with smart automation and intuitive design tools.',
      image: '/assets/artionai.png',
      tech: ['Node.js', 'Express', 'Gemini API', 'React'],
      github: 'https://github.com/Lokesh-Shimpi/ArtionAI',
      demo: 'https://artion-ai.vercel.app/'
    },
    {
      title: 'WorkVibe',
      description: 'Job searching and posting websites are online platforms where job seekers find openings and employers post vacancies. They offer tools like resume uploads, filters, alerts, and application tracking to streamline hiring and job hunting.',
      image: '/assets/workvibe.png',
      tech: ['Node.js', 'Express', 'Supabase', 'React'],
      github: 'https://github.com/Lokesh-Shimpi/WorkVibe',
      demo: 'https://work-vibe.vercel.app/'
    },
    {
      title: 'AI Code Reviewer',
      description: 'An AI-powered platform that reviews code, detects issues, and suggests improvements.',
      image: '/assets/coderev.png',
      tech: ['React', 'Node.js', 'Express', 'Gemini API'],
      category: '',
      github: 'https://github.com/Lokesh-Shimpi/Ai_Code_Reviewer',
      demo: 'https://ai-code-reviewer-lemon.vercel.app/'
    },
    {
      title: 'TastyExplorer',
      description: 'A recipe finder with a weekly meal planner to discover dishes and plan meals effortlessly',
      image: '/assets/teastyex.png',
      tech: ['React', 'Node.js'],
      github: 'https://github.com/Lokesh-Shimpi/Recipe-Finder',
      demo: 'http://recipe-finder-nine-ruddy.vercel.app/'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: subtleEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions and cutting-edge applications I've built
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: subtleEasing }}
                className="group flex flex-col bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 hover:border-slate-700/50"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <div className="absolute inset-0 bg-slate-900 z-0"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-20"></div>

                  {/* Overlay Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-slate-950/80 backdrop-blur-sm rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-900 border border-slate-800 transition-colors"
                      aria-label="View on GitHub"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-slate-950/80 backdrop-blur-sm rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-900 border border-slate-800 transition-colors"
                      aria-label="View Live Demo"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-slate-800/80 text-slate-300 border border-slate-700 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-slate-800/50">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 py-2.5 px-4 bg-white/5 border border-slate-700 hover:bg-white/10 rounded-lg text-center text-slate-300 transition-colors text-sm font-medium"
                      target="_blank" rel="noopener noreferrer"
                    >
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 py-2.5 px-4 bg-cyan-600 rounded-lg text-center text-slate-50 hover:brightness-110 transition-all text-sm font-medium"
                      target="_blank" rel="noopener noreferrer"
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;