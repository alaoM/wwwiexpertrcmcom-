'use client';
import { motion } from 'motion/react';

const team = [
  {
    name: 'James Reynolds',
    role: 'Chief Executive Officer',
  },
  {
    name: 'Sarah Mitchell',
    role: 'VP of Operations',
  },
  {
    name: 'David Chen',
    role: 'Head of Compliance',
  },
  {
    name: 'Emily Davis',
    role: 'Lead RCM Strategist',
  },
];

const getInitials = (name: string) => {
  return name.split(' ').map(p => p[0]).join('').toUpperCase();
};

const TeamAndPartners = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl text-brand-navy mb-4">
            OUR TEAM
          </h2>
          <p className="text-brand-steel text-lg max-w-2xl mx-auto">
            Dedicated professionals working together to elevate your financial performance and ensure strict compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-bg rounded-[4px] overflow-hidden border border-brand-light group transition-all duration-300 hover:border-brand-orange hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden border-b border-brand-light/50 flex items-center justify-center bg-brand-navy/5 text-brand-navy/20 font-bebas text-7xl select-none group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-all duration-500">
                {getInitials(member.name)}
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
      </div>
    </section>
  );
};

export default TeamAndPartners;
