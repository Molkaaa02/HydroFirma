'use client';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const stats = [
  { value: 2.4, suffix: "B", label: "People facing water scarcity by 2050 (UN)" },
  { value: 15, suffix: "T", label: "Agriculture 4.0 market by 2030" },
  { value: 30, suffix: "%", label: "Increase in resilient farms needed" },
];

export default function Impact() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center text-emerald-800 mb-20"
        >
          Market Impact
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <Counter key={i} {...stat} delay={i * 0.3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => `${latest.toFixed(1)}${suffix}`);

  useEffect(() => {
    const controls = animate(count, value, { delay, duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="space-y-4"
    >
      <motion.div className="text-6xl md:text-7xl font-bold text-emerald-600">
        {rounded}
      </motion.div>
      <p className="text-gray-700 text-lg">{label}</p>
    </motion.div>
  );
}
