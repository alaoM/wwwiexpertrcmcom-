'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Eye, Target, ShieldCheck, Users, Activity, Coins, Cpu, MessageSquare, Award, Heart } from 'lucide-react';

const specialties = [
  'Cardiology', 'Nephrology', 'Family Practice', 'Internal Medicine', 
  'Neurology', 'Nurse Practitioner', 'Ob/Gyn', 'Dermatology', 
  'Orthopedics', 'Pain Management', 'Surgery', 'Mental Behavior Health', 
  'Start up practices', 'Reproductive Medicine', 'Primary Care', 
  'Anesthesiology', 'Multi-specialists'
];

const coreValues = [
  {
    title: "Integrity in Every Action",
    icon: ShieldCheck,
    desc: "We operate with honesty, transparency, and accountability, ensuring providers always have a clear, accurate understanding of their revenue, risks, and opportunities."
  },
  {
    title: "Partnership Over Transactions",
    icon: Users,
    desc: "We build long-term, trust-centered relationships with solo providers, functioning as an extension of their practice rather than an outsourced vendor."
  },
  {
    title: "Discipline in Process",
    icon: Activity,
    desc: "We rely on structured, repeatable workflows that reduce errors, prevent revenue loss, and strengthen the financial performance of the practices we serve."
  },
  {
    title: "Stewardship of Provider Independence",
    icon: Coins,
    desc: "We treat every dollar, denial, and decision as if the practice were our own, because independence is worth protecting."
  },
  {
    title: "Technology With Purpose",
    icon: Cpu,
    desc: "We leverage automation, analytics, and modern RCM tools to strengthen financial performance, eliminate inefficiencies, and support long-term practice stability."
  },
  {
    title: "Clarity and Communication",
    icon: MessageSquare,
    desc: "We remove confusion from the revenue cycle through proactive updates, clear explanations, and education that empowers providers to make informed decisions."
  },
  {
    title: "Excellence Through Continuous Learning and Improvement",
    icon: Award,
    desc: "We commit to ongoing education, industry awareness, and proactive skill development, ensuring our expertise, processes, and technology evolve with regulatory changes, payer trends, and advancements in the RCM landscape."
  }
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

      {/* Vision, Mission & Brand Promise Section */}
      <section className="py-20 bg-white border-t border-b border-brand-light/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Our Purpose</span>
            <h2 className="font-bebas text-4xl md:text-5xl text-brand-navy mt-2 uppercase tracking-wide">
              Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-brand-bg p-8 rounded-[8px] border border-brand-light/60 shadow-sm flex gap-5"
            >
              <div className="w-12 h-12 bg-brand-light/30 text-brand-navy flex items-center justify-center rounded-[4px] shrink-0">
                <Eye size={24} className="text-brand-orange" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bebas text-2xl text-brand-navy uppercase tracking-wide">Our Vision</h3>
                <p className="text-[13px] text-brand-steel leading-relaxed font-medium">
                  “To build a nationwide RCM organization that protects the independence of solo healthcare providers through trusted partnerships, disciplined processes, and technology that prevents financial loss and practice closure.”
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-brand-bg p-8 rounded-[8px] border border-brand-light/60 shadow-sm flex gap-5"
            >
              <div className="w-12 h-12 bg-brand-light/30 text-brand-navy flex items-center justify-center rounded-[4px] shrink-0">
                <Target size={24} className="text-brand-orange" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bebas text-2xl text-brand-navy uppercase tracking-wide">Our Mission Statement</h3>
                <p className="text-[13px] text-brand-steel leading-relaxed font-medium">
                  “Our mission is to partner closely with solo healthcare providers, delivering transparent, process-driven RCM solutions that protect their revenue, preserve their independence, and build long-term trust.”
                </p>
              </div>
            </motion.div>
          </div>

          {/* Brand Promise Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-brand-navy text-white p-8 rounded-[8px] border border-brand-steel relative overflow-hidden flex flex-col md:flex-row items-center gap-6"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
            <div className="w-14 h-14 bg-white/5 border border-white/10 text-brand-orange flex items-center justify-center rounded-full shrink-0">
              <Heart size={28} className="fill-brand-orange" />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px]">Brand Promise</span>
              <p className="font-bebas text-3xl md:text-4xl tracking-wide uppercase">
                “We show up as partners, not vendors; protecting your revenue as if it were our own.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Our Principles</span>
            <h2 className="font-bebas text-4xl md:text-5xl text-brand-navy mt-2 uppercase tracking-wide">
              Our Core Values
            </h2>
            <p className="text-brand-steel text-sm leading-relaxed mt-2">
              The foundational pillars that guide how we audit, optimize, and support independent private practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {coreValues.map((value, idx) => {
              const IconComp = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white p-8 rounded-[8px] border border-brand-light/80 shadow-[0_4px_12px_rgba(8,37,91,0.01)] hover:border-brand-orange hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 bg-brand-light/35 text-brand-navy flex items-center justify-center rounded-[4px] group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                        <IconComp size={24} />
                      </div>
                      <span className="font-bebas text-3xl text-brand-light/60 group-hover:text-brand-orange/40 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-bold font-sans uppercase text-brand-navy text-[14px] tracking-wider group-hover:text-brand-orange transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed text-brand-steel">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutClient;
