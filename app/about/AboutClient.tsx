'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const specialties = [
  'Cardiology', 'Nephrology', 'Family Practice', 'Internal Medicine', 
  'Neurology', 'Nurse Practitioner', 'Ob/Gyn', 'Dermatology', 
  'Orthopedics', 'Pain Management', 'Surgery', 'Mental Behavior Health', 
  'Start up practices', 'Reproductive Medicine', 'Primary Care', 
  'Anesthesiology', 'Multi-specialists'
];

const AboutClient = () => {
  return (
    <main className="min-h-screen pt-20 bg-brand-bg">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://picsum.photos/seed/healthcare1/1920/1080')` }} />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Integrity RCM LLC</span>
            <h1 className="font-bebas text-5xl md:text-7xl mt-2 tracking-wide uppercase">
              About Our Company
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[8px] border border-brand-light shadow-[0_4px_16px_rgba(8,37,91,0.02)] space-y-6"
            >
              <h2 className="font-bebas text-4xl text-brand-navy tracking-wide border-b border-brand-light pb-4 uppercase">
                Welcome to Integrity RCM LLC
              </h2>
              
              <div className="space-y-4 text-brand-steel text-[15px] leading-relaxed">
                <p>
                  <strong>Full Service Consulting</strong> – At Integrity RCM LLC, we understand the daily challenges of managing a successful business. With over 15+ years of process improvement and optimization experience, Opie Adegbesan, the owner of Integrity RCM LLC, is accredited as a Certified Medical Revenue Manager (CMRM) by the Medical Revenue Management Association of America (MRMAA). Along with a team of experts, Integrity RCM LLC is an eager partner and your solution for revenue cycle management and cash flow optimization.
                </p>
                <p>
                  <strong>Solutions</strong> – Integrity RCM LLC provides some of the most innovative and powerful solutions in the market today: online, and in real-time. Our CMS, HIPAA, and Meaningful Use Certified Electronic Solutions provide you with control and give you and your staff complete access from any computer with Internet access. Utilizing our powerful practice analysis tool, our solutions are customized to your specific practice need streamlining and making your business more profitable.
                </p>
                <p>
                  <strong>Success</strong> – Our goal is to maximize your earning potential by reducing your expenses and increasing the net yield of your practice, allowing you to spend more time with patients and clients and less time with paperwork. Integrity RCM LLC is a member of the nation’s largest network of offices specializing in revenue cycle solutions, practice management, and private practice business support throughout the U.S.
                </p>
                <p>
                  We understand how important it is for you to save money without investing in expensive hardware, software, networks, and other technological equipment. We will provide you with the personal attention you deserve, and partner with you to ensure your business achieves maximum profitability and efficiency. Our system makes it easy to track MACRA, MIPS, and APM incentives as well.
                </p>
              </div>
            </motion.div>

            {/* Specialties Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 md:p-10 rounded-[8px] border border-brand-light shadow-[0_4px_16px_rgba(8,37,91,0.02)]"
            >
              <h3 className="font-bebas text-3xl text-brand-navy tracking-wide mb-6 uppercase">
                Our Specialties Include:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-brand-steel text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-navy text-white p-8 rounded-[8px] shadow-lg border border-brand-steel space-y-6"
            >
              <h3 className="font-bebas text-3xl text-brand-orange tracking-wide uppercase">
                Our Affiliation
              </h3>
              <p className="text-[12px] text-brand-light leading-relaxed">
                Integrity RCM LLC is a certified medical revenue manager accredited by the Medical Revenue Management Association of America.
              </p>
              <div className="bg-white/5 p-4 rounded border border-white/10 flex items-center justify-center">
                <img 
                  src="https://cascadia-consultive.s3.us-west-2.amazonaws.com/abs/img/mrmaa.png" 
                  alt="MRMAA Accreditation Logo" 
                  className="h-20 w-auto opacity-95"
                />
              </div>
              <div className="border-t border-white/10 pt-6 space-y-4">
                <h4 className="font-bold text-[12px] tracking-widest text-brand-orange uppercase">Free consultation</h4>
                <p className="text-[12px] text-brand-light leading-relaxed">
                  Get a comprehensive practice analysis and see how you can increase collections by up to 30%.
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-brand-orange hover:bg-[#a63d18] text-white py-3 px-4 rounded-[4px] font-semibold text-[11px] uppercase tracking-wider transition-colors border-none"
                >
                  Get Practice Analysis
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default AboutClient;
