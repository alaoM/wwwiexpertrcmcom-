'use client';
import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Assessment',
    desc: 'Deep audit of your current RCM processes, identifying leaks and bottlenecks.',
  },
  {
    num: '02',
    title: 'Implementation',
    desc: 'Seamless onboarding and integration of our customized solutions with your existing EHR.',
  },
  {
    num: '03',
    title: 'Optimization',
    desc: 'Streamlining coding, claims submission, and denial management workflows.',
  },
  {
    num: '04',
    title: 'Monitoring',
    desc: 'Continuous real-time tracking, KPI reporting, and transparent dashboards.',
  },
  {
    num: '05',
    title: 'Growth',
    desc: 'Ongoing strategic advisory to support your financial health and practice expansion.',
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-bebas text-5xl md:text-6xl text-brand-navy mb-4">
            OUR PROVEN WORKFLOW
          </h2>
          <p className="text-brand-steel text-lg max-w-2xl mx-auto">
            A systematic, data-driven approach designed to transform your revenue cycle from day one.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-brand-light -z-10"></div>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-white border border-brand-light flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-orange transition-all duration-300">
                  <span className="font-bebas text-3xl text-brand-navy">
                    {step.num}
                  </span>
                </div>
                <h4 className="font-bold text-[14px] uppercase tracking-wide text-brand-navy mb-2">
                  {step.title}
                </h4>
                <p className="text-[12px] text-brand-steel leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
