import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Us | Certified Medical Revenue Manager & RCM Advisor",
  description: "Meet Opie Adegbesan, CMRM (Certified Medical Revenue Manager), and the experts at Integrity RCM LLC. Over 15+ years of practice optimization and medical billing excellence across 17+ specialties.",
  keywords: [
    "Certified Medical Revenue Manager",
    "CMRM medical billing",
    "Opie Adegbesan",
    "medical billing experts Queen Creek AZ",
    "private practice consulting services",
    "medical practice audit",
    "MRMAA accredited billing"
  ],
};

const AboutPage = () => {
  return <AboutClient />;
};

export default AboutPage;
