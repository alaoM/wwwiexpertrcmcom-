'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Target, ShieldCheck, Users, Activity, Coins, Cpu, MessageSquare, Award, Heart,
  Building2, Stethoscope, Microchip, Network, Cross, ChevronDown, ChevronLeft, ChevronRight
} from 'lucide-react';

const industriesWithSpecialties = [
  {
    name: "Primary Care",
    icon: Stethoscope,
    specialties: ["Family Practice", "Internal Medicine", "Primary Care", "Nurse Practitioner"]
  },
  {
    name: "Medical Specialties",
    icon: Activity,
    specialties: ["Cardiology", "Nephrology", "Neurology", "Dermatology"]
  },
  {
    name: "Surgical Specialties",
    icon: Cross,
    specialties: ["Orthopedics", "Surgery", "Ob/Gyn"]
  },
  {
    name: "Women’s Health",
    icon: Heart,
    specialties: ["Ob/Gyn", "Reproductive Medicine"]
  },
  {
    name: "Pain Management",
    icon: ShieldCheck,
    specialties: ["Pain Management"]
  },
  {
    name: "Behavioral Health",
    icon: MessageSquare,
    specialties: ["Behavioral Health"]
  },
  {
    name: "Operational / Business",
    icon: Building2,
    specialties: ["Start-Up Practices"]
  }
];

const coreValues = [
  {
    title: "Integrity in Every Action",
    icon: ShieldCheck,
    desc: "We operate with honesty, transparency, and accountability, ensuring providers always have a clear, accurate understanding of their revenue, risks, and opportunities."
  },
  {
    title: "Partnership Over Transactions",
    icon: Users,
    desc: "We build long-term, trust-centered relationships with solo providers, functioning as an extension of their practice rather than an outsourced vendor."
  },
  {
    title: "Discipline in Process",
    icon: Activity,
    desc: "We rely on structured, repeatable workflows that reduce errors, prevent revenue loss, and strengthen the financial performance of the practices we serve."
  },
  {
    title: "Stewardship of Provider Independence",
    icon: Coins,
    desc: "We treat every dollar, denial, and decision as if the practice were our own, because independence is worth protecting."
  },
  {
    title: "Technology With Purpose",
    icon: Cpu,
    desc: "We leverage automation, analytics, and modern RCM tools to strengthen financial performance, eliminate inefficiencies, and support long-term practice stability."
  },
  {
    title: "Clarity and Communication",
    icon: MessageSquare,
    desc: "We remove confusion from the revenue cycle through proactive updates, clear explanations, and education that empowers providers to make informed decisions."
  },
  {
    title: "Excellence Through Continuous Learning and Improvement",
    icon: Award,
    desc: "We commit to ongoing education, industry awareness, and proactive skill development, ensuring our expertise, processes, and technology evolve with regulatory changes, payer trends, and advancements in the RCM landscape."
  }
];

interface ValueCardProps {
  value: typeof coreValues[0];
  idx: number;
}

const ValueCard = ({ value, idx }: ValueCardProps) => {
  const IconComp = value.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 300 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 300 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const cardStyles = "bg-white text-brand-navy border-brand-light/65 shadow-[0_4px_16px_rgba(8,37,91,0.015)] hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(8,37,91,0.08)] hover:border-brand-orange/60";

  const iconContainerStyles = "bg-brand-light/30 text-brand-navy group-hover:bg-brand-orange group-hover:text-white shadow-sm group-hover:shadow-md";

  const descStyles = "text-brand-steel";

  const badgeStyles = "bg-brand-light/20 text-brand-steel group-hover:bg-brand-orange/10 group-hover:text-brand-orange";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        className={`group block p-8 rounded-[12px] border transition-all duration-300 flex flex-col justify-between h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 relative overflow-hidden cursor-default ${cardStyles}`}
      >
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="flex flex-col h-full space-y-6">
          <div className="flex justify-between items-start">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${iconContainerStyles}`}>
              <div className="group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300">
                <IconComp size={24} />
              </div>
            </div>
            <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded transition-colors ${badgeStyles}`}>
              Value 0{idx + 1}
            </span>
          </div>
          <h3 className="font-bold text-[25px] tracking-wide uppercase transition-colors">
            {value.title}
          </h3>
          <p className={`text-[14px] leading-relaxed transition-colors ${descStyles}`}>
            {value.desc}
          </p>
        </div>

        {/* Animated bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
};

const AboutClient = () => {
  const [expandedIndustry, setExpandedIndustry] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <main className="min-h-screen pt-20 bg-brand-bg">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/hero_checkup.png')` }} />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Integrity RCM LLC</span>
            <h1 className="font-bebas text-5xl md:text-7xl mt-2 tracking-wide uppercase">
              About Our Company
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Text Content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[8px] border border-brand-light shadow-[0_4px_16px_rgba(8,37,91,0.02)] space-y-6"
            >
              <h2 className="font-bebas text-4xl text-brand-navy tracking-wide border-b border-brand-light pb-4 uppercase">
                Welcome to Integrity RCM LLC
              </h2>

              <div className="space-y-4 text-brand-steel text-[15px] leading-relaxed">
                <p>
                  <strong>Full Service Consulting</strong> – At Integrity RCM LLC, we understand the daily challenges of managing a successful business. With over 15+ years of process improvement and optimization experience, Opie Adegbesan, the owner of Integrity RCM LLC, is accredited as a Certified Medical Revenue Manager (CMRM) by the Medical Revenue Management Association of America (MRMAA). Along with a team of experts, Integrity RCM LLC is an eager partner and your solution for revenue cycle management and cash flow optimization.
                </p>
                <p>
                  <strong>Solutions</strong> – Integrity RCM LLC provides some of the most innovative and powerful solutions in the market today: online, and in real-time. Our CMS, HIPAA, and Meaningful Use Certified Electronic Solutions provide you with control and give you and your staff complete access from any computer with Internet access. Utilizing our powerful practice analysis tool, our solutions are customized to your specific practice need streamlining and making your business more profitable.
                </p>
                <p>
                  <strong>Success</strong> – Our goal is to maximize your earning potential by reducing your expenses and increasing the net yield of your practice, allowing you to spend more time with patients and clients and less time with paperwork. Integrity RCM LLC is a member of the nation’s largest network of offices specializing in revenue cycle solutions, practice management, and private practice business support throughout the U.S.
                </p>
                <p>
                  We understand how important it is for you to save money without investing in expensive hardware, software, networks, and other technological equipment. We will provide you with the personal attention you deserve, and partner with you to ensure your business achieves maximum profitability and efficiency. Our system makes it easy to track MACRA, MIPS, and APM incentives as well.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-navy text-white p-8 rounded-[8px] shadow-lg border border-brand-steel space-y-6"
            >
              <h3 className="font-bebas text-3xl text-brand-orange tracking-wide uppercase">
                Our Affiliation
              </h3>
              <p className="text-[12px] text-brand-light leading-relaxed">
                Integrity RCM LLC is a certified medical revenue manager accredited by the Medical Revenue Management Association of America.
              </p>
              <div className="bg-white/5 p-4 rounded border border-white/10 flex items-center justify-center">
                <Image
                  src="/mrmaa.png"
                  alt="MRMAA Accreditation Logo"
                  width={160}
                  height={80}
                  className="h-20 w-auto opacity-95"
                  style={{ width: 'auto' }}
                />
              </div>
              <div className="border-t border-white/10 pt-6 space-y-4">
                <h4 className="font-bold text-[12px] tracking-widest text-brand-orange uppercase">Free consultation</h4>
                <p className="text-[12px] text-brand-light leading-relaxed">
                  Get a comprehensive practice analysis and see how you can increase collections by up to 30%.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-brand-orange hover:bg-[#a63d18] text-white py-3 px-4 rounded-[4px] font-semibold text-[11px] uppercase tracking-wider transition-colors border-none"
                >
                  Get Practice Analysis
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Industries We Serve Section (Interactive Specialties) */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Expertise Areas</span>
            <h2 className="font-bebas text-5xl md:text-6xl mb-4 tracking-wide">
              SPECIALTIES WE SERVE
            </h2>
            <p className="text-brand-light text-base max-w-2xl mx-auto">
              Select a specialty category below to dynamically explore our specialized RCM and medical billing service specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesWithSpecialties.map((ind, idx) => {
              const Icon = ind.icon;
              const isExpanded = expandedIndustry === idx;
              return (
                <motion.div
                  layout
                  key={ind.name}
                  onClick={() => setExpandedIndustry(isExpanded ? null : idx)}
                  className={`bg-white/5 border rounded-[8px] p-6 hover:border-brand-orange hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${isExpanded ? 'border-brand-orange bg-white/10 shadow-lg' : 'border-white/10'
                    }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-10 h-10 bg-white/10 rounded-[4px] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5 text-brand-orange" />
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-brand-light transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-orange' : ''}`}
                      />
                    </div>
                    <h4 className="font-bebas text-2xl tracking-wide uppercase mb-1">{ind.name}</h4>
                    <p className="text-[11px] text-brand-light/70 uppercase tracking-widest">
                      {isExpanded ? 'Click to collapse' : 'Click to view specialties'}
                    </p>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="specialties-list"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-5 pt-4 border-t border-white/10 overflow-hidden"
                        >
                          <ul className="grid grid-cols-1 gap-2.5">
                            {ind.specialties.map((spec) => (
                              <li key={spec} className="flex items-center gap-2.5 text-[13px] text-brand-light/95 leading-relaxed font-sans">
                                <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision, Mission & Brand Promise Section */}
      <section className="py-20 bg-white border-t border-b border-brand-light/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Our Purpose</span>
            <h2 className="font-bebas text-4xl md:text-5xl text-brand-navy mt-2 uppercase tracking-wide">
              Mission Statement
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-brand-bg p-8 rounded-[8px] border border-brand-light/60 shadow-sm flex gap-5"
            >
              <div className="w-12 h-12 bg-brand-light/30 text-brand-navy flex items-center justify-center rounded-[4px] shrink-0">
                <Target size={24} className="text-brand-orange" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bebas text-2xl text-brand-navy uppercase tracking-wide">Our Mission</h3>
                <p className="text-[14px] text-brand-steel leading-relaxed font-medium">
                  “Our mission is to partner closely with solo healthcare providers, delivering transparent, process-driven RCM solutions that protect their revenue, preserve their independence, and build long-term trust.”
                </p>
              </div>
            </motion.div>
          </div>

          {/* Brand Promise Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-brand-navy text-white p-8 rounded-[8px] border border-brand-steel relative overflow-hidden flex flex-col md:flex-row items-center gap-6"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
            <div className="w-14 h-14 bg-white/5 border border-white/10 text-brand-orange flex items-center justify-center rounded-full shrink-0">
              <Heart size={28} className="fill-brand-orange" />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px]">Brand Promise</span>
              <p className="font-bebas text-3xl md:text-4xl tracking-wide uppercase">
                “We show up as partners, not vendors; protecting your revenue as if it were our own.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        ref={sectionRef}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div className="text-left max-w-2xl">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Our Principles</span>
              <h2 className="font-bebas text-4xl md:text-5xl text-brand-navy mt-2 uppercase tracking-wide">
                Our Core Values
              </h2>
              <p className="text-brand-steel text-sm leading-relaxed mt-2">
                The foundational pillars that guide how we audit, optimize, and support independent private practices.
              </p>
            </div>
            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-brand-light/80 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange"
                aria-label="Previous core value"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-brand-light/80 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange"
                aria-label="Next core value"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 select-none no-scrollbar"
            style={{ perspective: "1500px" }}
          >
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-full md:w-[calc((100%-48px)/3)] flex flex-col"
              >
                <ValueCard value={value} idx={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutClient;
