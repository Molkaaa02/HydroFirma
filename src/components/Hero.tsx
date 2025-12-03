'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Floating Logo */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 z-10"
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-24 h-24 md:w-32 md:h-32"
        >
          <img
            src="/images/logo.png"
            alt="Hydrofirma Logo"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center px-6 max-w-5xl z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          HydroFirma<br />
          <span className="text-emerald-400">Intelligence in Every Drop</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90">
          Smart Hydroponics for a Climate-Resilient Future
        </p>

        {/* Scroll to Contact */}
        <button
          onClick={scrollToContact}
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          Request a Demo
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}