'use client';
import { motion } from "framer-motion";

const years = ["2026", "2030", "2035", "2046"];
const goals = [
  "Deploy our first units and train early farmers.",
  "Expand across North Africa and connect smart farms.",
  "Launch near-autonomous hydroponic systems.",
  "Become a global reference in sustainable smart agriculture.",
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-20">20-Year Vision</h2>

        {/* Desktop: 4-column grid, Mobile: 2-column then 1-column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {years.map((year, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
 time               className="flex flex-col items-center text-center"
            >
              {/* Circle */}
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-4 text-xl font-bold shadow-lg">
                {year}
              </div>

              {/* Goal text – constrained width for long lines */}
              <p className="max-w-[180px] text-sm md:text-base font-medium leading-tight">
                {goals[i]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}