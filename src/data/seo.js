// Per-page SEO metadata for KZC Logistics & Solutions LLC.
// Titles & descriptions for Home / About / Services / Contact / Projects are
// preserved verbatim from the live site to protect existing Google rankings.
// Canonical base MUST stay the production domain.
export const SITE = {
  domain: 'https://kzc-logistics.com',
  name: 'KZC Logistics & Solutions LLC',
  defaultImage: 'https://kzc-logistics.com/images/logo.png',
  twitter: '@kzclogistics',
};

export const pages = {
  '/': {
    title: 'KZC Logistics & Solutions LLC | Global Logistics, Shipping & Maintenance Services',
    description: 'KZC Logistics & Solutions LLC provides global logistics, delivery, shipping, skilled labor supply, property maintenance, and waste removal services based in Alexandria, Virginia and serving clients worldwide.',
  },
  '/about': {
    title: 'About KZC Logistics & Solutions LLC | Logistics & Maintenance Experts',
    description: 'Learn about KZC Logistics & Solutions LLC, a trusted logistics, shipping, maintenance, labor supply, and waste removal company based in Alexandria, Virginia, serving clients across the U.S. and worldwide.',
  },
  '/our-story': {
    title: 'Our Story — KZC Logistics & Solutions LLC',
    description: 'From small delivery services in Alexandria, Virginia to a multi-service logistics partner — the KZC story of steady, intentional growth.',
  },
  '/team': {
    title: 'Our Team — KZC Logistics & Solutions LLC',
    description: 'Meet the people behind KZC Logistics & Solutions LLC — a team built on professionalism, flexibility, and consistent performance.',
  },
  '/leadership': {
    title: 'Leadership — KZC Logistics & Solutions LLC',
    description: 'The leadership setting KZC Logistics & Solutions LLC\u2019s direction, led by founder and CEO Abdul Kabir Dawoodzai.',
  },
  '/services': {
    title: 'Our Services — KZC Logistics & Solutions LLC',
    description: "Explore KZC Logistics & Solutions LLC's professional services including logistics, procurement, fleet management, labor supply, painting, and property maintenance.",
  },
  '/industries': {
    title: 'Industries We Serve — KZC Logistics & Solutions LLC',
    description: 'KZC Logistics & Solutions LLC serves commercial, residential, industrial, government, transportation, and retail sectors across the U.S. and worldwide.',
  },
  '/fleet': {
    title: 'Fleet & Equipment Management — KZC Logistics & Solutions LLC',
    description: 'Vehicle sales, leasing, maintenance, and telematics from KZC Logistics & Solutions LLC — flexible fleet solutions for government and commercial operations.',
  },
  '/projects': {
    title: 'Projects — KZC Logistics & Solutions LLC',
    description: 'Comprehensive logistics support for container handling and distribution operations at one of the busiest ports on the East Coast.',
  },
  '/testimonials': {
    title: 'Testimonials — KZC Logistics & Solutions LLC',
    description: 'What clients say about working with KZC Logistics & Solutions LLC — reliable, professional, and on-time logistics and support services.',
  },
  '/careers': {
    title: 'Careers — KZC Logistics & Solutions LLC',
    description: 'Build your career with KZC Logistics & Solutions LLC — a team committed to quality, safety, and customer satisfaction across the U.S. and beyond.',
  },
  '/gallery': {
    title: 'Gallery — KZC Logistics & Solutions LLC',
    description: 'A professional gallery showcasing KZC Logistics & Solutions LLC\u2019s full range of work — painting, maintenance, handyman, waste removal, moving, logistics, fleet, and completed project transformations.',
  },
  '/blog': {
    title: 'Blog & News — KZC Logistics & Solutions LLC',
    description: 'Insights and announcements from KZC Logistics & Solutions LLC on logistics, procurement, fleet, and operations.',
  },
  '/faq': {
    title: 'FAQ — KZC Logistics & Solutions LLC',
    description: 'Answers to common questions about working with KZC Logistics & Solutions LLC — services, coverage, quotes, and more.',
  },
  '/contact': {
    title: 'Contact KZC Logistics & Solutions LLC | Get in Touch',
    description: 'Contact KZC Logistics & Solutions LLC for logistics, maintenance, labor supply, and shipping solutions. Reach out via phone, email, or visit our office in Alexandria, VA.',
  },
  '/quote': {
    title: 'Request a Quote — KZC Logistics & Solutions LLC',
    description: 'Request a free, personalized logistics or service quote from KZC Logistics & Solutions LLC. A few quick questions — we respond within one business day.',
  },
  '/tracking': {
    title: 'Shipment Tracking — KZC Logistics & Solutions LLC',
    description: 'Track your KZC Logistics & Solutions LLC shipment in real time. The tracking portal is currently under development.',
  },
  '/privacy': {
    title: 'Privacy Policy — KZC Logistics & Solutions LLC',
    description: 'Privacy policy and terms for KZC Logistics & Solutions LLC — how we collect, use, and protect your information.',
  },
};

export function metaFor(pathname) {
  return pages[pathname] || {
    title: `${SITE.name} | Global Logistics`,
    description: 'Reliable, efficient, professional logistics, delivery, labor supply, maintenance, and fleet solutions from Alexandria, Virginia — serving the U.S. and clients worldwide.',
  };
}