'use client';
import { motion } from 'motion/react';

const certs = [
    'HIPAA Compliance',
    'AAPC Certified',
    'AHIMA Certified',
    'HBMA Member',
    'Revenue Cycle Certification',
    'Industry Compliance Standards'
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-4 md:h-[60px] bg-[#E4EBF4] flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 md:px-16 overflow-hidden">
            {certs.map((cert, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-[10px] font-[800] text-brand-navy uppercase tracking-[2px] flex items-center gap-2 whitespace-nowrap"
                >
                    <div className="w-[6px] h-[6px] bg-brand-orange rounded-full shrink-0"></div>
                    {cert}
                </motion.div>
            ))}
        </section>
    );
}

export default Certifications;
