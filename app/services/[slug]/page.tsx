import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '../../data/servicesData';
import ServiceSubpageClient from './ServiceSubpageClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | Integrity RCM LLC",
    };
  }

  return {
    title: `${service.title} | HIPAA Certified Medical Billing & RCM Solution`,
    description: `${service.shortDesc} Integrity RCM LLC provides professional practice optimization, billing scrubbing, and financial support through our certified ${service.title} system.`,
    keywords: [
      service.title,
      `certified healthcare ${service.slug}`,
      `medical RCM ${service.slug}`,
      "medical billing solutions",
      "claim denial management",
      "revenue cycle management software"
    ],
  };
}

// Generate static params for all 13 services for static site pre-rendering (highly optimized for performance and SEO)
export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

const ServiceSubpage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDesc,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Integrity RCM LLC",
      "telephone": "+1-623-292-2356",
      "email": "opiea@iexpertrcm.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22424 S. Ellsworth Loop Rd. #2032",
        "addressLocality": "Queen Creek",
        "addressRegion": "AZ",
        "postalCode": "85142",
        "addressCountry": "US"
      }
    },
    "serviceType": "Medical Revenue Cycle Management",
    "areaServed": "US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceSubpageClient service={service} />
    </>
  );
};

export default ServiceSubpage;
