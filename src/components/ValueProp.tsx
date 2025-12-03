'use client';
import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Zap, GlobeHemisphereWest, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: "90 % Less Water",
    desc: "Hydroponics uses a closed-loop system — perfect for arid regions.",
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    desc: "Real-time plant health monitoring and automated alerts.",
  },
  {
    icon: Sun,
    title: "100 % Solar Powered",
    desc: "Runs completely off-grid — no electricity bill.",
  },
  {
    icon: GlobeHemisphereWest,
    title: "Designed for Africa & MENA",
    desc: "Built with local climate, connectivity, and budget in mind.",
  },
  {
    icon: CheckCircle2,
    title: "Fully Offline-Capable",
    desc: "Works without internet and syncs when connection returns.",
  },
  {
    icon: CheckCircle2,
    title: "Affordable & Scalable",
    desc: "From a single home unit to entire community farms.",
  },
];

export default function ValueProp() {
  return (
    <section className="py-32 bg-emerald-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Big heading with subtle glow animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-20 bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent"
        >
          Why HydroFirma?
        </motion.h2>

        {/* Staggered cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all duration-500"
            >
              {/* Icon with pulse on hover */}
              <div className="mb-6 inline-flex p-4 bg-emerald-500/20 rounded-2xl group-hover:bg-emerald-400 group-hover:scale-110 transition-all">
                <reason.icon className="w-12 h-12 text-emerald-300" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-emerald-100 leading-relaxed">{reason.desc}</p>

              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
