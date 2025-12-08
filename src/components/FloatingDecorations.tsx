'use client';
import { motion } from "framer-motion";

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Cherry Tomato */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`tomato-${i}`}
          className="absolute text-5xl"
          initial={{ y: "110vh", x: `${Math.random() * 100}vw` }}
          animate={{ y: "-20vh", x: `${Math.random() * 100}vw` }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear",
          }}
        >
          Cherry Tomato
        </motion.div>
      ))}

      {/* Water Drop */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={`drop-${i}`}
          className="absolute text-6xl"
          initial={{ y: "110vh", x: `${Math.random() * 100}vw` }}
          animate={{ y: "-20vh", x: `${Math.random() * 100}vw` }}
          transition={{
            duration: 18 + i * 4,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "linear",
          }}
        >
          Water Drop
        </motion.div>
      ))}

      {/* Plant Leaf */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute text-6xl"
          initial={{ y: "110vh", x: `${Math.random() * 100}vw` }}
          animate={{ y: "-20vh", x: `${Math.random() * 100}vw` }}
          transition={{
            duration: 22 + i * 5,
            repeat: Infinity,
            delay: i * 4,
            ease: "linear",
          }}
        >
          Plant Leaf
        </motion.div>
      ))}
    </div>
  );
}
