'use client';
import { motion } from "framer-motion";
import { Linkedin } from 'lucide-react';

export default function Team() {
  const team = [
    { 
      name: "Baha Eddine Hammou", 
      role: "CEO", 
      img: "/images/baha.jpg",
      linkedin: "https://www.linkedin.com/in/baha-eddine-hammou/"
    },
    { 
      name: "Molka Weslati", 
      role: "CTO", 
      img: "/images/molka.jpg",
      linkedin: "https://www.linkedin.com/in/molka-weslati/"
    },
    { 
      name: "Mohamed Amine Ben Hellel", 
      role: "Head of R&D", 
      img: "/images/amine.jpg",
      linkedin: "https://www.linkedin.com/in/med-amine-ben-helal/"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 mb-16">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6 group">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-emerald-100 shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <h3 className="font-bold text-lg text-black">{member.name}</h3>
              <p className="text-emerald-600 font-medium mb-3">{member.role}</p>

              {/* LinkedIn Button - Right under role */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all transform hover:scale-105 shadow-sm"
              >
                <Linkedin size={14} />
                
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}