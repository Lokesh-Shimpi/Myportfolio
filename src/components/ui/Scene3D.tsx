import { motion } from 'framer-motion';
import { Code, Cpu, Zap } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { icon: Code, color: 'text-cyan-400', delay: 0, x: 20, y: -20 },
    { icon: Cpu, color: 'text-purple-400', delay: 0.5, x: -30, y: 30 },
    { icon: Zap, color: 'text-yellow-400', delay: 1, x: 40, y: 40 }
  ];

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color}`}
          style={{
            left: `${50 + element.x}%`,
            top: `${50 + element.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <element.icon size={32} />
        </motion.div>
      ))}
    </>
  );
};
const Scene3D = () => {
  return (
    <div className="w-full h-full relative">
      {/* Main 3D-like laptop mockup */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotateY: [0, 5, 0, -5, 0],
          y: [0, -10, 0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ perspective: '1000px' }}
      >
        <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
          {/* Laptop Base */}
          <div className="w-64 h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-2xl transform rotateX-75" />

          {/* Laptop Screen */}
          <div className="w-60 h-40 bg-gradient-to-br from-gray-900 to-black rounded-t-lg border-4 border-gray-700 transform -translate-y-2 rotateX-15 shadow-2xl">
            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg p-4 flex items-center justify-center">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cyan-400 text-2xl font-mono"
              >
                {'</>'}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <FloatingElements />
    </div>
  );
};

export default Scene3D;