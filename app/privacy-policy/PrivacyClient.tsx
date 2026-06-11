'use client';

import { motion } from 'motion/react';

const PrivacyClient = () => {
  return (
    <main className="min-h-screen pt-20 bg-brand-bg">
      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Compliance Statement</span>
            <h1 className="font-bebas text-4xl md:text-6xl mt-2 tracking-wide uppercase">
              Privacy Policy & SMS Terms
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Policy Content Body */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-8 md:p-12 rounded-[8px] border border-brand-light shadow-[0_4px_16px_rgba(8,37,91,0.02)] space-y-8 text-brand-steel text-sm leading-relaxed"
        >
          <div className="space-y-3">
            <h2 className="font-bebas text-3xl text-brand-navy uppercase tracking-wide">1. Interpretation and Definitions</h2>
            <p><strong>Interpretation:</strong> The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            <p><strong>Definitions:</strong> For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              <li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Integrity RCM LLC.</li>
              <li><strong>Website</strong> refers to Integrity RCM LLC, accessible from https://iexpertrcm.com</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-brand-light pt-8">
            <h2 className="font-bebas text-3xl text-brand-navy uppercase tracking-wide">2. Types of Data Collected</h2>
            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Usage Data (IP address, browser type, pages visited, time spent, unique device identifiers)</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-brand-light pt-8">
            <h2 className="font-bebas text-3xl text-brand-navy uppercase tracking-wide">3. Tracking Technologies and Cookies</h2>
            <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. These include session cookies (essential to authenticate users and enable secure navigation) and persistent cookies (to save options/preferences and gather traffic analytics).</p>
          </div>

          <div className="space-y-3 border-t border-brand-light pt-8">
            <h2 className="font-bebas text-3xl text-brand-navy uppercase tracking-wide">4. Use of Your Personal Data</h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and monitor the usage of our Service.</li>
              <li>To manage Your consultation requests and schedule practice analysis meetings.</li>
              <li>To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-brand-light pt-8 bg-brand-orange/5 p-6 rounded-[6px] border border-brand-orange/20">
            <h2 className="font-bebas text-3xl text-brand-orange uppercase tracking-wide">5. SMS Terms & Conditions</h2>
            <p className="font-semibold text-brand-navy">SMS opt-in and phone numbers collected for SMS communication purposes will not be shared with any third party and affiliates for marketing purposes.</p>
            <div className="space-y-3 mt-4 text-[13px] leading-relaxed">
              <p><strong>Consent Communication:</strong> The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.</p>
              <p><strong>Types of SMS Communications:</strong> If you have consented to receive text messages from Integrity RCM LLC, you may receive messages related to appointment reminders, follow-up notifications, and scheduling support.</p>
              <p><strong>Potential Fees:</strong> Please note that standard message and data rates may apply, depending on your carrier’s pricing plan. Message frequency may vary.</p>
              <p><strong>Opt-Out:</strong> You can opt out of receiving SMS messages at any time. To do so, simply reply &quot;STOP&quot; to any SMS message you receive, or text HELP to 623-292-2356 for assistance.</p>
            </div>
          </div>

          <div className="space-y-3 border-t border-brand-light pt-8">
            <h2 className="font-bebas text-3xl text-brand-navy uppercase tracking-wide">6. Security of Your Personal Data</h2>
            <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
          </div>

          <div className="space-y-3 border-t border-brand-light pt-8">
            <h2 className="font-bebas text-3xl text-brand-navy uppercase tracking-wide">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or compliance disclosures, you can contact us directly:</p>
            <ul className="space-y-1 pl-2">
              <li>Email: <a href="mailto:opiea@iexpertrcm.com" className="text-brand-orange font-semibold hover:underline">opiea@iexpertrcm.com</a></li>
              <li>Phone: <span className="font-semibold text-brand-navy">623-292-2356</span></li>
              <li>Address: <span className="text-brand-steel">22424 S. Ellsworth Loop Rd. #2032, Queen Creek, AZ 85142</span></li>
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default PrivacyClient;
