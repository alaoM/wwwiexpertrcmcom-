'use client';

import Contact from '../components/Contact';
import { motion } from 'motion/react';

const ContactClient = () => {
  return (
    <main className="min-h-screen pt-20 bg-brand-bg">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/hero_consulting.png')` }} />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Get In Touch</span>
            <h1 className="font-bebas text-5xl md:text-7xl mt-2 tracking-wide uppercase">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default ContactClient;
