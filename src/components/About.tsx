'use client';
import { motion } from "framer-motion";
import { Leaf, Globe, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* IoT Image - Above Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 -mx-6 md:mx-0"
        >
          <img
            src="/images/iot-hydroponics.jpg"
            alt="Smart IoT Hydroponic System"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
      
          </div>
        </motion.div>

        {/* Mission Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 mb-16">
          Our Mission
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <Leaf className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-emerald-800 mb-3">Mission</h3>
            <p className="text-gray-700">Empower water-scarce regions with AI-driven hydroponics for food security.</p>
          </div>
          <div className="text-center">
            <Globe className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-emerald-800 mb-3">Vision</h3>
            <p className="text-black">A world where every community grows resilient food, climate-proof.</p>
          </div>
          <div className="text-center">
            <Zap className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-emerald-800 mb-3">Values</h3>
            <p className="text-gray-700">Innovation · Sustainability · Accessibility</p>
          </div>
        </div>
      </div>
    </section>
  );
}