'use client';

import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { ServiceInfo } from '../../data/servicesData';

interface ServiceSubpageClientProps {
  service: ServiceInfo;
}

const ServiceSubpageClient = ({ service }: ServiceSubpageClientProps) => {
  return (
    <main className="min-h-screen pt-20 bg-brand-bg">
      {/* Hero Header Banner */}
      <section className="bg-brand-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/hero_billing.png')` }} />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link 
              href="/services" 
              className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand-light hover:text-brand-orange transition-colors"
            >
              <ArrowLeft size={12} /> Back to Services
            </Link>
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide uppercase">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Columns */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bullet list of features */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-[8px] border border-brand-light shadow-[0_4px_16px_rgba(8,37,91,0.02)] space-y-6"
            >
              <h3 className="font-bebas text-2xl text-brand-navy border-b border-brand-light pb-3 tracking-wide uppercase">
                Solution Highlights
              </h3>
              <ul className="space-y-3">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-brand-steel font-medium text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Detailed description paragraphs */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[8px] border border-brand-light shadow-[0_4px_16px_rgba(8,37,91,0.02)] space-y-8"
            >
              <h2 className="font-bebas text-4xl text-brand-navy tracking-wide uppercase">
                {service.sectionTitle}
              </h2>
              
              <div className="space-y-5 text-brand-steel text-[15px] leading-relaxed">
                {service.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="border-t border-brand-light pt-8 flex flex-col sm:flex-row gap-4 items-center">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto text-center bg-brand-orange hover:bg-[#a63d18] text-white py-3.5 px-8 rounded-[4px] font-semibold text-xs uppercase tracking-widest transition-colors border-none"
                >
                  Request Practice Analysis
                </Link>
                <Link 
                  href="/services" 
                  className="w-full sm:w-auto text-center bg-brand-bg hover:bg-brand-light/20 text-brand-navy border border-brand-light py-3.5 px-8 rounded-[4px] font-semibold text-xs uppercase tracking-widest transition-colors"
                >
                  View Other Solutions
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ServiceSubpageClient;
