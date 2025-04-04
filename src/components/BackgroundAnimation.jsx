import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 60 + 20,
        duration: Math.random() * 8 + 4,
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();
    window.addEventListener('resize', generateBubbles);
    return () => window.removeEventListener('resize', generateBubbles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm"
          style={{
            width: bubble.size,
            height: bubble.size,
            x: bubble.x,
            y: bubble.y,
          }}
          animate={{
            y: [bubble.y, bubble.y - 200, bubble.y],
            x: [bubble.x, bubble.x + (Math.random() * 100 - 50), bubble.x],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
