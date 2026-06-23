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

const ServicesClient = () => {
  return (
    <main className="min-h-screen pt-20 bg-brand-bg">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/hero_billing.png')` }} />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Integrity RCM LLC</span>
            <h1 className="font-bebas text-5xl md:text-7xl mt-2 tracking-wide uppercase">
              Our Services
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-bebas text-4xl md:text-5xl text-brand-navy mb-4 uppercase">
            Accredited Electronic Solutions
          </h2>
          <p className="text-brand-steel text-base">
            Our electronic solutions are CMS, HIPAA, and Meaningful Use certified. They give you full control and access to your business analytics anytime, anywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc, idx) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="bg-white p-6 rounded-[8px] border border-brand-light shadow-[0_4px_12px_rgba(8,37,91,0.02)] hover:border-brand-orange hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-brand-light/30 rounded-[4px] flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-orange/10 transition-colors">
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
                Explore Solution &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Free Practice Analysis Banner */}
      <section className="bg-brand-navy text-white py-20 border-t border-brand-steel">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-bebas text-4xl md:text-5xl text-brand-orange tracking-wide uppercase">
            Get Your Free Practice Analysis
          </h3>
          <p className="text-brand-light text-base leading-relaxed">
            We have a proprietary analysis tool that can generate a detailed report, outlining solutions for virtually every aspect of your practice. Let us help you keep your business as healthy as you keep your patients.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-block bg-brand-orange hover:bg-[#a63d18] text-white py-3.5 px-8 rounded-[4px] font-semibold text-xs uppercase tracking-widest transition-colors border-none"
            >
              Get Free Analysis Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesClient;
