'use client';
import { motion } from 'motion/react';
import { Play, CheckCircle2 } from 'lucide-react';

const benefits = [
    'Improved cash flow and accelerated revenue',
    'Drastically reduced claim denials and rejections',
    'Faster, more accurate reimbursements',
    'Strict adherence to compliance and regulations',
    'Dedicated, specialized account management'
];

const ExplainerVideo = () => {
    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-video bg-gray-900 rounded-[4px] overflow-hidden relative group cursor-pointer border border-brand-steel">
                            <img
                                src="https://picsum.photos/seed/video/1280/720"
                                alt="Video Placeholder"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[60px] h-[60px] bg-brand-orange text-white flex items-center justify-center rounded-[4px] group-hover:bg-[#a63d18] transition-colors duration-300">
                                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="font-bebas text-5xl md:text-6xl text-white mb-6 leading-tight">
                            WHY HEALTHCARE PROVIDERS CHOOSE INTEGRITY RCM
                        </h2>
                        <p className="text-brand-light text-lg mb-8 max-w-lg">
                            We act as an extension of your team, providing the specialized focus and technological edge needed to maximize your financial returns.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                                    <span className="text-white font-medium text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-white text-brand-navy px-[24px] py-[10px] rounded-[4px] font-semibold text-[12px] uppercase tracking-wide hover:bg-gray-100 transition-colors border-none">
                            Watch Full Presentation
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ExplainerVideo;
