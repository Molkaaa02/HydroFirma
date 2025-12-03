'use client';
import { motion } from "framer-motion";

export default function BusinessModel() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center text-emerald-800 mb-20"
        >
          Business Model
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            { title: "Hardware", subtitle: "One-time purchase", plans: ["Starter: 270$", "Pro: Custom", "Enterprise: Custom"] },
            { title: "Subscription", subtitle: "AI + Updates", plans: ["Basic Monitoring Tier: $10/mo", "Advanced Tier: $20/mo", "HydroFirma Kit: $270"] },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-10 rounded-3xl shadow-2xl border border-emerald-100"
            >
              <h3 className="text-3xl font-bold text-emerald-800 mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-8">{card.subtitle}</p>
              <ul className="space-y-4 text-lg">
                {card.plans.map((plan, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="font-medium text-black"
                  >
                    {plan}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
