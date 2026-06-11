import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Request Free Practice Analysis & Contact RCM Experts",
  description: "Get in touch with Integrity RCM LLC to schedule your proprietary practice financial analysis. Partner with a CMRM to reduce medical claim denials.",
  keywords: [
    "contact Integrity RCM",
    "free practice analysis",
    "medical billing consultation",
    "RCM consulting Arizona",
    "medical billing audit",
    "Opie Adegbesan email",
    "hire RCM manager"
  ],
};

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
