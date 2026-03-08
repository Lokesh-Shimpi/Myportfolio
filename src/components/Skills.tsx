import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Flattened skills list
const skills = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer/white' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white' },
  { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },
  { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/FFFFFF' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins/D24939' },
  { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
  { name: 'CI/CD Pipelines', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
  { name: 'Microservices', icon: 'https://cdn.simpleicons.org/apachekafka/white' },
  { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
  { name: 'npm', icon: 'https://cdn.simpleicons.org/npm/CB3837' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
];

const Tooltip = ({ text, isVisible, mousePos }: { text: string; isVisible: boolean; mousePos: { x: number, y: number } }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute z-50 pointer-events-none"
          style={{
            left: mousePos.x,
            top: mousePos.y - 45,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-slate-100 text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg shadow-black/40">
            {text}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const SkillIcon = ({ skill, index }: { skill: { name: string, icon: string }; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut"
      }}
      className="relative flex items-center justify-center p-3 sm:p-4 rounded-xl cursor-crosshair sm:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Tooltip text={skill.name} isVisible={isHovered} mousePos={mousePos} />

      <div className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 grayscale-0 opacity-100 drop-shadow-[0_10px_15px_rgba(0,212,255,0.15)]' : 'grayscale opacity-50'}`}>
        <img
          src={skill.icon}
          alt={`${skill.name} icon`}
          className="w-7 h-7 sm:w-10 sm:h-10 object-contain transition-all duration-300"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};


const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A curated selection of the tools I use to architect robust, scalable, and intuitive platforms.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillIcon key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;