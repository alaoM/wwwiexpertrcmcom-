import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Electronic Solutions & Medical Billing Services | RCM Advisory",
  description: "Browse our suite of CMS, HIPAA, and Meaningful Use Certified solutions. Featuring iClaim billing, EMRx records, ChoicePay patient billing, remote care, and CodeRite coding reviews.",
  keywords: [
    "medical billing consulting services",
    "HIPAA compliant billing software",
    "electronic health records provider",
    "patient billing portal ChoicePay",
    "EMRx EHR system",
    "medical billing audit AuditGuard",
    "telehealth software VirtualCare"
  ],
};

const ServicesPage = () => {
  return <ServicesClient />;
};

export default ServicesPage;
