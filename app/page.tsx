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
    },
    {
      "@type": "Question",
      "name": "WE ALREADY HAVE AN ELECTRONIC HEALTH RECORD (EHR) SYSTEM IN PLACE. ARE WE REQUIRED TO ADOPT YOUR ICLAIM OR EMRX SOLUTIONS IN ORDER TO BECOME A CLIENT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, adopting our iClaim or EMRx solutions is not a requirement to partner with us. Our primary objective is to optimize your revenue cycle and maximize reimbursement, and we are fully equipped to work within your existing EHR system to achieve those goals. While we do offer iClaim and EMRx as additional solutions—and strongly recommend them for their efficiency and performance benefits—they are entirely optional and can be implemented based on your organization’s needs and preferences."
      }
    },
    {
      "@type": "Question",
      "name": "WHAT IS THE DIFFERENCE BETWEEN MEDICAL BILLING AND RCM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medical billing is a component of RCM, focusing on claim submission and payment collection, whereas RCM covers the entire financial lifecycle, including front office tasks (such as eligibility and authorization), service coding and documentation, billing, claim processing, denial management and collections"
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
