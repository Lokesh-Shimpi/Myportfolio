import React, { useState, useEffect } from 'react';

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  value, 
  suffix = '', 
  duration = 2000, 
  inView 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * value);

      setCount(currentValue);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [value, duration, inView]);

  return <span>{count}{suffix}</span>;
};

export default CounterAnimation;