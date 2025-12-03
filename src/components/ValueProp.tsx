'use client';
import { motion } from "framer-motion";

const items = [
  "Affordable & Customizable",
  "AI-Powered Insights",
  "Fully Offline-Capable",
  "Designed for Africa & Middle East"
];

export default function ValueProp() {
  return (
    <section className="py-32 bg-emerald-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16"
        >
          Why Hydrofirma?
        </motion.h2>

        <div className="space-y-8 text-xl md:text-2xl">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="flex items-center justify-center gap-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.2 + 0.4, type: "spring", stiffness: 200 }}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 font-bold text-2xl"
              >
                ✓
              </motion.div>
              <span className="font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
