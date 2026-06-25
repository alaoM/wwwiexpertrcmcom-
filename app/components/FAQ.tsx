'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does outsourcing medical billing improve private practice cash flow?",
    answer: "Outsourcing your billing to a certified partner like Integrity RCM LLC reduces administrative overhead, eliminates the need for expensive software licenses, and secures faster reimbursements. Our CodeRite claim scrubbing and AuditGuard services minimize claim denial rates, achieving a first-pass resolution rate of up to 98% and increasing collections by up to 15% to 30% on average."
  },
  {
    question: "What is a Certified Medical Revenue Manager (CMRM), and why does it matter?",
    answer: "A Certified Medical Revenue Manager (CMRM) is an elite accreditation from the Medical Revenue Management Association of America (MRMAA). It certifies that our office possesses specialized expertise in medical practice financial auditing, billing compliance, HIPAA regulatory frameworks, and value-based care optimization (such as MACRA, MIPS, and APM tracking). This ensures your practice receives expert consulting."
  },
  {
    question: "Is Integrity RCM LLC fully compliant with HIPAA and security regulations?",
    answer: "Yes, all of our electronic billing and practice management tools—including iClaim, ChoicePay, and EMRx—are fully HIPAA, HITECH, and Meaningful Use certified. Through our CompliancyGuard service, we maintain a 100% HIPAA audit guarantee and deploy end-to-end encryption to safeguard patient personal health information (PHI) and protect your practice from audit risks."
  },
  {
    question: "WE ALREADY HAVE AN ELECTRONIC HEALTH RECORD (EHR) SYSTEM IN PLACE. ARE WE REQUIRED TO ADOPT YOUR ICLAIM OR EMRX SOLUTIONS IN ORDER TO BECOME A CLIENT?",
    answer: "No, adopting our iClaim or EMRx solutions is not a requirement to partner with us. Our primary objective is to optimize your revenue cycle and maximize reimbursement, and we are fully equipped to work within your existing EHR system to achieve those goals. While we do offer iClaim and EMRx as additional solutions—and strongly recommend them for their efficiency and performance benefits—they are entirely optional and can be implemented based on your organization’s needs and preferences."
  },
  {
    question: "WHAT IS THE DIFFERENCE BETWEEN MEDICAL BILLING AND RCM?",
    answer: "Medical billing is a component of RCM, focusing on claim submission and payment collection, whereas RCM covers the entire financial lifecycle, including front office tasks (such as eligibility and authorization), service coding and documentation, billing, claim processing, denial management and collections"
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-light/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Expert FAQ Advisory</span>
          <h2 className="font-bebas text-4xl md:text-5xl text-brand-navy mt-2 mb-4 uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-steel text-sm leading-relaxed">
            Get answers to common queries regarding revenue cycle management, healthcare credentialing, medical coding, and private practice billing efficiency.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-[8px] border border-brand-light/65 overflow-hidden shadow-[0_4px_12px_rgba(8,37,91,0.01)] transition-all duration-300 hover:border-brand-orange/50"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-brand-navy hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-sm md:text-base uppercase tracking-wide font-sans">
                    <HelpCircle size={18} className="text-brand-orange shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-brand-steel transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-orange' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[13px] leading-relaxed text-brand-steel border-t border-brand-light/30">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
