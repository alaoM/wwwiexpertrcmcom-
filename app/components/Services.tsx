'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  FileSignature, 
  Laptop, 
  Activity, 
  CreditCard, 
  Send, 
  Coins, 
  FileSearch, 
  Calculator, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  MessageSquare, 
  TrendingDown 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap: { [key: string]: React.ReactNode } = {
  FileSignature: <FileSignature className="w-8 h-8 text-brand-navy" />,
  Laptop: <Laptop className="w-8 h-8 text-brand-navy" />,
  Activity: <Activity className="w-8 h-8 text-brand-navy" />,
  CreditCard: <CreditCard className="w-8 h-8 text-brand-navy" />,
  Send: <Send className="w-8 h-8 text-brand-navy" />,
  Coins: <Coins className="w-8 h-8 text-brand-navy" />,
  FileSearch: <FileSearch className="w-8 h-8 text-brand-navy" />,
  Calculator: <Calculator className="w-8 h-8 text-brand-navy" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-brand-navy" />,
  Sparkles: <Sparkles className="w-8 h-8 text-brand-navy" />,
  Award: <Award className="w-8 h-8 text-brand-navy" />,
  MessageSquare: <MessageSquare className="w-8 h-8 text-brand-navy" />,
  TrendingDown: <TrendingDown className="w-8 h-8 text-brand-navy" />,
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-brand-orange"></div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Our Solutions</span>
            <div className="h-1 w-12 bg-brand-orange"></div>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-brand-navy mb-6">
            PROPRIETARY BUSINESS SOLUTIONS
          </h2>
          <p className="text-lg text-brand-steel">
            We provide a full suite of revenue cycle management, technology, and support solutions designed to maximize practice efficiency and profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-8">
          {servicesData.map((svc, idx) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white p-6 rounded-[8px] border border-brand-light shadow-[0_4px_12px_rgba(8,37,91,0.03)] hover:border-brand-orange hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-brand-light/35 rounded-[4px] flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-orange/10 transition-colors">
                  {iconMap[svc.iconName] || <Activity className="w-8 h-8 text-brand-navy" />}
                </div>
                <h3 className="text-[15px] font-bold text-brand-navy uppercase mb-3 tracking-wide">
                  {svc.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-brand-steel mb-6">
                  {svc.shortDesc}
                </p>
              </div>
              <Link
                href={`/services/${svc.slug}`}
                className="text-[11px] font-bold text-brand-orange group-hover:text-[#a63d18] uppercase tracking-wider flex items-center gap-1.5 mt-auto hover:underline"
              >
                Learn More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
