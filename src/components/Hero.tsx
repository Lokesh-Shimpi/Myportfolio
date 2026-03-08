import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import Scene3D from './ui/Scene3D';
import { Typewriter } from 'react-simple-typewriter';

const resumePdf = new URL('../../assets/Lokesh_R_Shimpi_Resume.pdf', import.meta.url).href;

const Hero = () => {
  const skills = [
    "Full Stack Developer",
    "DevOps & Automation Enthusiast",
    "AI Agent Developer",
    "Problem Solver"
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Lokesh-Shimpi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lokesh-shimpi-83a0a02b2', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:luckyshimpi2004@gmail.com', label: 'Email' }
  ];

  const customEasing = [0.25, 0.1, 0.25, 1] as const;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: customEasing }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: customEasing }}
              className="text-cyan-500 text-lg font-medium tracking-wide"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: customEasing }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent leading-tight"
            >
              Lokesh Shimpi
            </motion.h1>

            {/* Typing Effect */}
            <div className="flex items-center justify-center lg:justify-start h-8 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: customEasing }}
                className="text-xl md:text-2xl font-medium text-cyan-400"
              >
                <Typewriter
                  words={skills}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: customEasing }}
              className="text-slate-400 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Full-Stack Developer focused on building scalable web applications and intelligent digital products. Experienced in React, Node.js, and modern cloud-native technologies, with a strong interest in AI-driven solutions and developer tools. Passionate about transforming complex ideas into reliable, high performance digital experiences.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: customEasing }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: customEasing }}
              className="px-8 py-3.5 bg-cyan-600 rounded-lg font-medium text-slate-50 transition-all hover:brightness-110 flex items-center justify-center gap-2 shadow-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail size={18} strokeWidth={2.5} />
              Hire Me
            </motion.button>


            <motion.a
              href={resumePdf}
              download="Lokesh_R_Shimpi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: customEasing }}
              className="px-8 py-3.5 border border-slate-700 bg-white/5 hover:bg-white/10 rounded-lg font-medium text-slate-200 backdrop-blur-sm transition-colors flex items-center justify-center gap-2"
            >
              <Download size={18} strokeWidth={2.5} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: customEasing }}
            className="flex gap-5 justify-center lg:justify-start pt-2"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: customEasing }}
                className="p-3 rounded-full bg-slate-800/50 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: customEasing }}
          className="relative h-96 lg:h-[500px] order-first lg:order-last w-full"
        >
          <Scene3D />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
