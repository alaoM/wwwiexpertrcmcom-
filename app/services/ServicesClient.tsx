'use client';

import { useState, useRef } from 'react';
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
  Search
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
      transition={{ duration: 0.4, delay: idx * 0.03 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="h-full"
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

const ServicesClient = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  // ROI Calculator states
  const [billings, setBillings] = useState<number>(150000);
  const [specialtyType, setSpecialtyType] = useState<string>('Specialty Practice');

  // Determine multiplication rate based on type: Hospital = 14%, Specialty = 12%, Primary Care = 10%
  let rate = 0.12;
  if (specialtyType === 'Hospitals') rate = 0.14;
  else if (specialtyType === 'Primary Care') rate = 0.10;
  
  const estimatedAnnualSavings = Math.round(billings * rate * 12);

  const filteredServices = servicesData.filter(svc => {
    const matchesCategory = activeCategory === 'All' || getCategoryForService(svc.slug) === activeCategory;
    const matchesSearch = svc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <main className="min-h-screen pt-20 bg-brand-bg">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/hero_billing.png')` }} />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Integrity RCM LLC</span>
            <h1 className="font-bebas text-5xl md:text-7xl mt-2 tracking-wide uppercase">
              Our Services
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section 
        ref={sectionRef}
        onMouseMove={handleSectionMouseMove}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Dynamic Background Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
          style={{
            background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(125,143,171,0.08), transparent 80%)`,
          }}
        />

        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-bebas text-4xl md:text-5xl text-brand-navy mb-4 uppercase">
              Accredited Electronic Solutions
            </h2>
            <p className="text-brand-steel text-base">
              Our electronic solutions are CMS, HIPAA, and Meaningful Use certified. They give you full control and access to your business analytics anytime, anywhere.
            </p>
          </div>

          {/* Search & Filter Sticky Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-brand-light/35 pb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer ${activeCategory === cat
                      ? 'bg-brand-navy border-brand-navy text-white shadow-sm'
                      : 'bg-white border-brand-light/50 text-brand-steel hover:text-brand-navy hover:border-brand-accent'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-steel/60" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full border border-brand-light/70 bg-white text-brand-navy placeholder-brand-steel/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/60 focus:border-transparent transition-all shadow-[0_2px_8px_rgba(8,37,91,0.01)]"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1500px" }}>
            <AnimatePresence mode="popLayout">
              {filteredServices.map((svc, idx) => (
                <ServiceCard key={svc.slug} svc={svc} idx={idx} />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty Search Result State */}
          {filteredServices.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white border border-brand-light/50 rounded-lg p-8"
            >
              <p className="text-brand-steel text-sm font-medium">
                No proprietary solutions found matching your search.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-orange hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Interactive Free Practice Analysis Banner */}
      <section className="bg-brand-navy text-white py-24 border-t border-brand-steel relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Practice Optimization</span>
              <h3 className="font-bebas text-4xl md:text-5xl text-white tracking-wide uppercase">
                Get Your Free Practice Analysis
              </h3>
              <p className="text-brand-light/95 text-[15px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We have a proprietary analysis tool that can generate a detailed report, outlining solutions for virtually every aspect of your practice. Let us help you keep your business as healthy as you keep your patients.
              </p>
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-block bg-brand-orange hover:bg-[#a63d18] text-white py-3.5 px-8 rounded-[4px] font-semibold text-xs uppercase tracking-widest transition-all hover:scale-[1.02] shadow-lg shadow-brand-orange/20 border-none"
                >
                  Get Free Analysis Now
                </Link>
              </div>
            </div>

            {/* Right Interactive Calculator Column */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden border border-brand-light/40 shadow-2xl shadow-brand-navy/35">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
                <h4 className="font-bebas text-2xl text-brand-navy tracking-wide uppercase">
                  Estimate Your Revenue Potential
                </h4>
                
                <div className="space-y-4">
                  {/* Monthly Billings Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] uppercase tracking-wider text-brand-steel font-bold">
                      <span>Monthly Billings</span>
                      <span className="text-brand-orange text-xs font-extrabold bg-brand-orange/5 px-2.5 py-0.5 rounded border border-brand-orange/15">${billings.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="1000000"
                      step="10000"
                      value={billings}
                      onChange={(e) => setBillings(Number(e.target.value))}
                      className="w-full accent-brand-orange bg-brand-light/35 rounded-lg h-2 cursor-pointer appearance-none"
                    />
                  </div>

                  {/* Practice Specialty Type */}
                  <div className="space-y-2">
                    <label className="block text-[11px] uppercase tracking-wider text-brand-steel font-bold">
                      Practice Type
                    </label>
                    <select
                      value={specialtyType}
                      onChange={(e) => setSpecialtyType(e.target.value)}
                      className="w-full bg-white border border-brand-light text-xs text-brand-navy rounded px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 cursor-pointer"
                    >
                      <option value="Hospitals">Hospital / Ambulatory Center</option>
                      <option value="Specialty Practice">Specialty Practice</option>
                      <option value="Primary Care">Primary Care Clinic / GP</option>
                    </select>
                  </div>
                </div>

                {/* Calculation Output */}
                <div className="pt-5 border-t border-brand-light/50 flex flex-col items-center text-center">
                  <span className="text-[10px] uppercase tracking-widest text-brand-steel font-medium mb-1">
                    Est. Annual Revenue Recovery
                  </span>
                  <span className="font-bebas text-4xl md:text-5xl text-brand-orange tracking-wide">
                    ${estimatedAnnualSavings.toLocaleString()}
                  </span>
                  <p className="text-[10px] text-brand-steel/70 leading-relaxed mt-2 max-w-xs font-sans">
                    *Estimation based on typical 10%–14% recovery of revenue loss from automated claims scrubbing and billing audits.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesClient;
