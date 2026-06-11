import { Metadata } from 'next';
import HeroSlider from './components/HeroSlider';
import TrustIndicators from './components/TrustIndicators';
import About from './components/About';
import Services from './components/Services';
import ExplainerVideo from './components/ExplainerVideo';
import Certifications from './components/Certifications';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import TeamAndPartners from './components/TeamAndPartners';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export const metadata: Metadata = {
  title: "Integrity RCM LLC | Medical Billing, RCM & Private Practice Consulting",
  description: "Certified Medical Revenue Manager (CMRM) accredited by MRMAA. We specialize in RCM, medical billing claim denial reduction, patient collections, and HIPAA compliance solutions for private practices throughout the US.",
  keywords: [
    "medical billing consulting services",
    "revenue cycle management consulting",
    "Certified Medical Revenue Manager",
    "CMRM medical billing",
    "reduce medical claim denials",
    "practice cash flow optimization",
    "HIPAA compliant billing service",
    "accounts receivable management",
    "physician billing support",
    "medical billing Queen Creek AZ"
  ],
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Integrity RCM LLC",
  "alternateName": "Integrity Medical Revenue Management",
  "description": "Certified Medical Revenue Manager (CMRM) providing medical billing, accounts receivable recovery, HIPAA compliance, electronic health records (EHR/EMR) solutions, and private practice support.",
  "url": "https://iexpertrcm.com",
  "logo": "https://iexpertrcm.com/logo.png",
  "image": "https://iexpertrcm.com/logo.png",
  "telephone": "+1-623-292-2356",
  "email": "opiea@iexpertrcm.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "22424 S. Ellsworth Loop Rd. #2032",
    "addressLocality": "Queen Creek",
    "addressRegion": "AZ",
    "postalCode": "85142",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.2458,
    "longitude": -111.6375
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-623-292-2356",
    "contactType": "billing service",
    "email": "opiea@iexpertrcm.com",
    "areaServed": "US",
    "availableLanguage": "en"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Revenue Cycle Management (RCM) in healthcare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revenue Cycle Management (RCM) is the comprehensive healthcare financial process that tracks patient care episodes from registration and appointment scheduling to the final payment of a balance. At Integrity RCM LLC, we utilize certified electronic solutions to manage insurance eligibility verification, claim submissions, denial resolution, and patient billing, ensuring independent practices maximize reimbursements and reduce days in Accounts Receivable (A/R)."
      }
    },
    {
      "@type": "Question",
      "name": "How does outsourcing medical billing improve private practice cash flow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outsourcing your billing to a certified partner like Integrity RCM LLC reduces administrative overhead, eliminates the need for expensive software licenses, and secures faster reimbursements. Our CodeRite claim scrubbing and AuditGuard services minimize claim denial rates, achieving a first-pass resolution rate of up to 98% and increasing collections by up to 15% to 30% on average."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Certified Medical Revenue Manager (CMRM), and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Certified Medical Revenue Manager (CMRM) is an elite accreditation from the Medical Revenue Management Association of America (MRMAA). It certifies that our office possesses specialized expertise in medical practice financial auditing, billing compliance, HIPAA regulatory frameworks, and value-based care optimization (such as MACRA, MIPS, and APM tracking). This ensures your practice receives expert consulting."
      }
    },
    {
      "@type": "Question",
      "name": "Is Integrity RCM LLC fully compliant with HIPAA and security regulations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all of our electronic billing and practice management tools—including iClaim, ChoicePay, and EMRx—are fully HIPAA, HITECH, and Meaningful Use certified. Through our CompliancyGuard service, we maintain a 100% HIPAA audit guarantee and deploy end-to-end encryption to safeguard patient personal health information (PHI) and protect your practice from audit risks."
      }
    }
  ]
};

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSlider />
      <TrustIndicators />
      <About />
      <Services />
      <ExplainerVideo />
      <Certifications />
      <Process />
      <Testimonials />
      <Industries />
      <TeamAndPartners />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
