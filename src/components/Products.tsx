'use client';
import { motion } from "framer-motion";
import { Droplets, Brain, Sun, WifiOff } from 'lucide-react';

const items = [
  { Icon: Droplets, title: "IoT Sensors", desc: "pH, EC, temp, humidity" },
  { Icon: Brain, title: "AI Pest Detection", desc: "Early threat ID" },
  { Icon: Sun, title: "Solar-Powered", desc: "Off-grid ready" },
  { Icon: WifiOff, title: "Offline Mode", desc: "Sync when online" },
];

export default function Products() {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-bold text-center text-emerald-800 mb-20"
        >
          Integrated System
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: -180 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -15, rotate: 5 }}
              className="group perspective-1000"
            >
              <div className="relative p-8 bg-emerald-50 rounded-3xl shadow-xl h-full transform-gpu preserve-3d group-hover:rotate-y-12 transition-all duration-500">
                <item.Icon className="w-16 h-16 text-emerald-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl mb-3 text-center text-black">{item.title}</h3>
                <p className="text-center text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
