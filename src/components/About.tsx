'use client';
import { motion } from "framer-motion";
import { Leaf, Globe, Zap } from 'lucide-react';

const cards = [
  { Icon: Leaf, title: "Mission", text: "Empower water-scarce regions with AI-driven hydroponics for food security.", delay: 0.2 },
  { Icon: Globe, title: "Vision", text: "A world where every community grows resilient food, climate-proof.", delay: 0.4 },
  { Icon: Zap, title: "Values", text: "Innovation · Sustainability · Accessibility", delay: 0.6 },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Floating IoT Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-20 -mx-6 md:-mx-12"
        >
          <img src="/images/iot-hydroponics.jpg" alt="Smart IoT Hydroponic System" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-8 left-8 text-white"
          >
            <h3 className="text-4xl font-bold">The Future Grows Here</h3>
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center text-emerald-800 mb-20"
        >
          Our Mission
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map(({ Icon, title, text, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group text-center bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="mb-6 inline-block p-5 bg-emerald-100 rounded-full group-hover:scale-110 transition-transform">
                <Icon className="w-16 h-16 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
