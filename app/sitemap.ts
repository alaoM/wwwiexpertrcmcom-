import { MetadataRoute } from 'next';
import { servicesData } from './data/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iexpertrcm.com';

  // Static website routes
  const staticRoutes = ['', '/about', '/services', '/contact', '/privacy-policy'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic services routes
  const dynamicServiceRoutes = servicesData.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicServiceRoutes];
}
