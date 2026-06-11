'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const slides = [
    {
        image: 'https://picsum.photos/seed/healthcare1/1920/1080',
        headline: 'When Was the Last Time Your Practice Had a Checkup?',
        text: 'We specialize in practice management, revenue cycle optimization, and private practice business support throughout the U.S.',
        primaryCta: 'Get Free Practice Analysis',
        secondaryCta: 'Watch Video',
        primaryLink: '/contact',
        secondaryLink: '#video'
    },
    {
        image: 'https://picsum.photos/seed/billing1/1920/1080',
        headline: 'Focus on Patients, Not Paperwork',
        text: 'Get paid fast, access reports in real-time 24/7, and free your staff to focus on delivering exceptional clinical care.',
        primaryCta: 'Our Solutions',
        secondaryCta: 'Request Consultation',
        primaryLink: '/services',
        secondaryLink: '/contact'
    },
    {
        image: 'https://picsum.photos/seed/exec1/1920/1080',
        headline: 'Recover Lost Profit, Reduce Collection Costs',
        text: 'Reclaim the profit that is rightfully yours while preserving customer goodwill with QuickCollect.',
        primaryCta: 'Reclaim Profit',
        secondaryCta: 'Contact Us',
        primaryLink: '/services/quickcollect',
        secondaryLink: '/contact'
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

    return (
        <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-brand-navy">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    <div className="absolute inset-0 bg-brand-navy/85" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h1 className="font-bebas text-5xl md:text-[72px] text-white leading-none mb-4 max-w-[700px] uppercase">
                                {slides[current].headline}
                            </h1>
                            <p className="text-[18px] text-brand-light mb-8 max-w-[550px] font-sans leading-relaxed">
                                {slides[current].text}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={slides[current].primaryLink} className="bg-brand-orange text-white px-[24px] py-[10px] rounded-[4px] font-semibold text-[12px] uppercase hover:bg-[#a63d18] transition-colors border-none text-center inline-block">
                                    {slides[current].primaryCta}
                                </Link>
                                {slides[current].secondaryLink.startsWith('#') ? (
                                    <a href={slides[current].secondaryLink} className="bg-transparent text-white border border-white px-[24px] py-[10px] rounded-[4px] font-semibold text-[12px] uppercase hover:bg-white/10 transition-colors text-center inline-block">
                                        {slides[current].secondaryCta}
                                    </a>
                                ) : (
                                    <Link href={slides[current].secondaryLink} className="bg-transparent text-white border border-white px-[24px] py-[10px] rounded-[4px] font-semibold text-[12px] uppercase hover:bg-white/10 transition-colors text-center inline-block">
                                        {slides[current].secondaryCta}
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-10 right-10 z-20 flex gap-4 hidden md:flex">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <ChevronLeft />
                </button>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <ChevronRight />
                </button>
            </div>

            <div className="absolute bottom-8 right-16 z-20 flex gap-2.5">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === current ? 'bg-brand-orange' : 'bg-white/30 hover:bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
