'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import Link from 'next/link';
import {
  FileSignature,
  Laptop,
  Activity,
  CreditCard,
  Send,
  Coins,
  FileSearch,
  Calculator,
  ShieldCheck,
  Sparkles,
  Award,
  MessageSquare,
  TrendingDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap: { [key: string]: React.ReactNode } = {
  FileSignature: <FileSignature className="w-6 h-6" />,
  Laptop: <Laptop className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  Send: <Send className="w-6 h-6" />,
  Coins: <Coins className="w-6 h-6" />,
  FileSearch: <FileSearch className="w-6 h-6" />,
  Calculator: <Calculator className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  TrendingDown: <TrendingDown className="w-6 h-6" />,
};

const categories = ['All', 'RCM & Financial', 'Technology & EHR', 'Practice Support'];

const getCategoryForService = (slug: string) => {
  if (['iclaim', 'choicepay', 'quickcollect', 'coderite', 'auditguard'].includes(slug)) {
    return 'RCM & Financial';
  }
  if (['virtualcare', 'emrx', 'dentimax', 'doctible'].includes(slug)) {
    return 'Technology & EHR';
  }
  return 'Practice Support';
};

interface ServiceCardProps {
  svc: typeof servicesData[0];
  idx: number;
}

const ServiceCard = ({ svc, idx }: ServiceCardProps) => {
  const isFeatured = svc.slug === 'iclaim';
  const svcCat = getCategoryForService(svc.slug);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 300 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 300 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardStyles = isFeatured
    ? "bg-white text-brand-navy border-brand-orange/30 shadow-[0_6px_20px_rgba(197,76,33,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(8,37,91,0.08)] hover:border-brand-orange/60"
    : "bg-white text-brand-navy border-brand-light/65 shadow-[0_4px_16px_rgba(8,37,91,0.015)] hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(8,37,91,0.08)] hover:border-brand-orange/60";

  const iconContainerStyles = "bg-brand-light/30 text-brand-navy group-hover:bg-brand-orange group-hover:text-white shadow-sm group-hover:shadow-md";

  const descStyles = "text-brand-steel";

  const ctaStyles = "text-brand-orange group-hover:text-[#a63d18]";

  const badgeStyles = "bg-brand-light/20 text-brand-steel group-hover:bg-brand-orange/10 group-hover:text-brand-orange";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="snap-center shrink-0 w-full md:w-[calc((100%-48px)/3)] flex flex-col h-full"
    >
      <Link
        href={`/services/${svc.slug}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group block p-8 rounded-[12px] border transition-all duration-300 flex flex-col justify-between h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 relative overflow-hidden ${cardStyles}`}
      >
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="flex flex-col h-full">
          {/* Header: Icon & Category Badge */}
          <div className="flex justify-between items-start mb-6">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${iconContainerStyles}`}>
              <div className="group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300">
                {iconMap[svc.iconName] || <Activity className="w-6 h-6" />}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              {isFeatured && (
                <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                  Flagship
                </span>
              )}
              <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded transition-colors ${badgeStyles}`}>
                {svcCat}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold uppercase mb-3 tracking-wide transition-colors">
            {svc.title}
          </h3>

          {/* Description */}
          <p className={`text-[12px] leading-relaxed mb-8 transition-colors ${descStyles}`}>
            {svc.shortDesc}
          </p>
        </div>

        {/* CTA */}
        <span className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 mt-auto transition-colors ${ctaStyles}`} style={{ transform: "translateZ(20px)" }}>
          Explore Solution &rarr;
        </span>

        {/* Animated bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredServices = servicesData.filter(svc =>
    activeCategory === 'All' || getCategoryForService(svc.slug) === activeCategory
  );

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.querySelector('.snap-center')?.clientWidth || 320;
    container.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.querySelector('.snap-center')?.clientWidth || 320;
    container.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  // Reset scroll to 0 when active category changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  // Autoscroll interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const container = carouselRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const cardWidth = container.querySelector('.snap-center')?.clientWidth || 320;
        container.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="services"
      onMouseMove={handleSectionMouseMove}
      className="py-24 bg-brand-bg relative overflow-hidden"
    >
      {/* Dynamic Background Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(125,143,171,0.08), transparent 80%)`,
        }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-brand-orange"></div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Proprietary Solutions</span>
            <div className="h-1 w-12 bg-brand-orange"></div>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-brand-navy mb-6 tracking-wide">
            PROPRIETARY BUSINESS SOLUTIONS
          </h2>
          <p className="text-brand-steel text-base leading-relaxed max-w-2xl mx-auto">
            A comprehensive suite of revenue cycle management, technology, and support solutions designed to maximize private practice efficiency and profitability.
          </p>
        </div>

        {/* Filter Navigation and Carousel Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-14">
          <div className="w-12 h-12 hidden md:block pointer-events-none" /> {/* Desktop layout balance spacer */}
          
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer ${activeCategory === cat
                    ? 'bg-brand-navy border-brand-navy text-white shadow-md'
                    : 'bg-white border-brand-light/50 text-brand-steel hover:text-brand-navy hover:border-brand-accent'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-brand-light/80 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-label="Previous solution"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-brand-light/80 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-label="Next solution"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dynamic Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 select-none no-scrollbar"
          style={{ perspective: "1500px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((svc, idx) => (
              <ServiceCard key={svc.slug} svc={svc} idx={idx} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;

