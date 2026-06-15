import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iexpertrcm.com"),
  title: {
    default: "Integrity RCM LLC | Medical Billing Solutions & Practice Consulting",
    template: "%s | Integrity RCM LLC"
  },
  description: "Accredited Certified Medical Revenue Manager (CMRM). We provide expert medical billing, revenue cycle optimization, and private practice business support throughout the US.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Integrity RCM LLC | Medical Billing & RCM Consulting",
    description: "Certified Medical Revenue Manager (CMRM). We optimize revenue cycles, reduce claim rejections, and maximize collection rates for private practices.",
    url: "https://iexpertrcm.com",
    siteName: "Integrity RCM LLC",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrity RCM LLC | Medical Billing Solutions",
    description: "Maximize your private practice earning potential by outsourcing RCM, billing claims, and HIPAA compliance management."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

const globalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Integrity RCM LLC",
  "alternateName": "iExpert RCM",
  "url": "https://iexpertrcm.com",
  "logo": "https://iexpertrcm.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-623-292-2356",
    "contactType": "customer service",
    "email": "opiea@iexpertrcm.com",
    "areaServed": "US",
    "availableLanguage": "en"
  }
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${montserrat.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-bg text-brand-navy antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalOrgSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
