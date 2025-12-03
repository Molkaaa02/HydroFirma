'use client';
import { motion } from "framer-motion";

const feats = [
  "90% Water Reduction",
  "AI Health Monitoring",
  "100% Solar Powered",
  "Real-Time Dashboard",
  "Offline First",
  "Year-Round Harvest"
];

export default function Features() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center text-emerald-800 mb-20"
        >
          Built for the Future
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {feats.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className="bg-white p-10 rounded-3xl shadow-lg text-center cursor-default group"
            >
              <div className="mb-4 inline-block p-4 bg-emerald-100 rounded-full group-hover:bg-emerald-600 transition-colors">
                <div className="w-12 h-12 bg-emerald-600 rounded-full group-hover:bg-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700">{f}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
