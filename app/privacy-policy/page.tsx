import { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: "Privacy Policy & SMS Terms | Integrity RCM LLC Compliance",
  description: "Understand our data policies and SMS compliance standards. Integrity RCM LLC guarantees adherence to HIPAA, HITECH, and secure data handling guidelines.",
  keywords: [
    "privacy policy",
    "SMS terms and conditions",
    "HIPAA compliance statement",
    "secure medical billing records",
    "patient data protection"
  ],
};

const PrivacyPolicyPage = () => {
  return <PrivacyClient />;
};

export default PrivacyPolicyPage;
