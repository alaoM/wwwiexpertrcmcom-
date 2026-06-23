'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';


const About = () => {
    return (
        <section id="about" className="py-24 bg-brand-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-[4px] overflow-hidden relative border border-brand-light">
                            <Image
                                src="/hero_billing.png"
                                alt="Healthcare operations"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-brand-navy/5"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-1 w-12 bg-brand-orange"></div>
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">About Integrity RCM</span>
                        </div>
                        <h2 className="font-bebas text-5xl md:text-6xl text-brand-navy mb-6">
                            Empowering Healthcare Through Financial Clarity
                        </h2>
                        <div className="space-y-4 text-brand-steel mb-8 text-lg">
                            <p>
                                At Integrity RCM LLC, we understand the daily challenges of managing a successful business. With over 15+ years of process improvement and optimization experience, Opie Adegbesan, the owner of Integrity RCM LLC, is accredited as a Certified Medical Revenue Manager (CMRM) by the Medical Revenue Management Association of America (MRMAA).
                            </p>
                            <p>
                                Along with a team of experts, Integrity RCM LLC is an eager partner and your solution for revenue cycle management, practice management, and private practice business support throughout the U.S.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-brand-orange shadow-sm mb-8">
                            <h3 className="font-semibold text-brand-navy mb-2">Accredited and Certified</h3>
                            <p className="text-sm text-brand-steel italic">
                                &quot;To deliver uncompromising financial optimization and operational excellence, enabling healthcare providers to thrive in a complex regulatory landscape without ever losing sight of their patients.&quot;
                            </p>
                        </div>

                        <Link href="/about" className="inline-block bg-brand-navy text-white px-[24px] py-[10px] rounded-[4px] font-semibold text-[12px] uppercase tracking-wide hover:bg-brand-steel transition-colors border-none text-center">
                            Learn More About Our Approach
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
