'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-bebas text-5xl md:text-6xl text-brand-navy mb-4">
                        WHAT OUR CLIENTS SAY
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-white p-8 md:p-14 shadow-sm border border-brand-light relative">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-brand-light/30" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-brand-light/25 text-brand-navy flex items-center justify-center font-bold text-lg select-none border border-brand-light/60 mb-6 shadow-sm">
                                    {getInitials(testimonials[current].name)}
                                </div>
                                <p className="text-lg md:text-xl text-brand-navy font-medium italic mb-8 leading-relaxed max-w-2xl">
                                    &quot;{testimonials[current].quote}&quot;
                                </p>
                                <div>
                                    <h4 className="font-bold text-brand-navy text-lg">{testimonials[current].name}</h4>
                                    <p className="text-brand-orange font-medium">{testimonials[current].org}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button onClick={prev} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-navy shadow-md hover:bg-brand-navy hover:text-white transition-colors border-none cursor-pointer">
                            <ChevronLeft />
                        </button>
                        <button onClick={next} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-navy shadow-md hover:bg-brand-navy hover:text-white transition-colors border-none cursor-pointer">
                            <ChevronRight />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
