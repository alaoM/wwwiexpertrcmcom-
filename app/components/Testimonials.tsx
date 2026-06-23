'use client';
import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
    {
        quote: "My billing was horribly tedious and very time consuming... when I outsourced my billing, I was able to give my headache away. With iClaim, I can track what's happening with each and every claim, online 24/7 at my convenience.",
        name: "Asli C.",
        org: "MD"
    },
    {
        quote: "In this day and age with all the complexities of medical billing, I can't imagine doing it any other way (billing in-house) at this point. A good Physician has to decide when to delegate responsibility.",
        name: "Johnny W.",
        org: "MD"
    },
    {
        quote: "Medical billing is very difficult unless you outsource... to do it in the office would take a lot more time and money. It has allowed me to get better reimbursement on my claims because I have an entire billing company behind me to check claims and follow up on them.",
        name: "Donna C.",
        org: "MD"
    },
    {
        quote: "Outsourcing my billing has allowed me to spend more time taking care of patients while not worrying about the headaches and the regulations that go along with it.",
        name: "Kevin T.",
        org: "MD"
    },
    {
        quote: "No doctor wants to deal with insurance companies or with patients who won't or can't pay. Outsourcing my billing takes me away from worrying about billing my patients and lets me concentrate on our main focus; practicing medicine.",
        name: "Keyvan K.",
        org: "MD"
    }
];

const getInitials = (name: string) => {
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
};

interface TestimonialItem {
    quote: string;
    name: string;
    org: string;
}

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, name, org }, i) => (
                <div 
                  className="bg-white p-8 rounded-[8px] border border-brand-light shadow-[0_4px_16px_rgba(8,37,91,0.015)] max-w-xs w-full flex flex-col justify-between hover:border-brand-orange hover:-translate-y-1.5 transition-all duration-300" 
                  key={i}
                >
                  <p className="text-brand-navy leading-relaxed text-[12.5px] italic mb-6">
                    &quot;{quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-light/25 text-brand-navy flex items-center justify-center font-bold text-xs shrink-0 select-none border border-brand-light/60">
                      {getInitials(name)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold text-brand-navy text-[13px] uppercase tracking-wide leading-tight">{name}</div>
                      <div className="text-[10px] text-brand-orange font-bold uppercase tracking-wider mt-0.5">{org}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
    const firstColumn = [testimonials[0], testimonials[1], testimonials[2]];
    const secondColumn = [testimonials[3], testimonials[4], testimonials[0]];
    const thirdColumn = [testimonials[1], testimonials[2], testimonials[3]];

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-bebas text-5xl md:text-6xl text-brand-navy mb-4">
                        WHAT OUR CLIENTS SAY
                    </h2>
                </div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[640px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={22} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={28} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={24} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
