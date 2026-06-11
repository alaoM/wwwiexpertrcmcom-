'use client';
import { motion } from 'motion/react';

const team = [
  {
    name: 'James Reynolds',
    role: 'Chief Executive Officer',
    image: 'https://picsum.photos/seed/ceo/400/500',
  },
  {
    name: 'Sarah Mitchell',
    role: 'VP of Operations',
    image: 'https://picsum.photos/seed/vp/400/500',
  },
  {
    name: 'David Chen',
    role: 'Head of Compliance',
    image: 'https://picsum.photos/seed/head/400/500',
  },
  {
    name: 'Emily Davis',
    role: 'Lead RCM Strategist',
    image: 'https://picsum.photos/seed/lead/400/500',
  },
];

const alliances = ['AAPC', 'AHIMA', 'HBMA', 'MGMA', 'HFMA', 'HIMSS'];

const TeamAndPartners = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl text-brand-navy mb-4">
            OUR TEAM & PARTNERS
          </h2>
          <p className="text-brand-steel text-lg max-w-2xl mx-auto">
            Dedicated professionals and strategic alliances working together to elevate your financial performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-bg rounded-[4px] overflow-hidden border border-brand-light group transition-all duration-300 hover:border-brand-orange"
            >
              <div className="aspect-[4/5] overflow-hidden border-b border-brand-light/50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-[14px] text-brand-navy uppercase tracking-wide mb-1">
                  {member.name}
                </h3>
                <p className="text-[10px] text-brand-orange font-bold uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-16 border-t border-brand-light">
          <h3 className="font-bebas text-3xl text-center text-brand-navy mb-10">
            STRATEGIC ALLIANCES
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 opacity-80">
            {alliances.map((alliance, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="text-xl md:text-3xl font-bebas text-brand-steel tracking-wider flex items-center gap-2 hover:text-brand-orange transition-colors"
              >
                <div className="w-2 h-2 bg-brand-orange rounded-[2px] hidden md:block"></div>
                {alliance}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAndPartners;
