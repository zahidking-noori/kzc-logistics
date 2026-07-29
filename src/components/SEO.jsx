import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE, metaFor } from '@/data/seo';

const buildStructuredData = (meta, canonical, schemaType) => ({
  '@context': 'https://schema.org',
  '@type': schemaType,
  url: canonical,
  name: meta.title,
  description: meta.description,
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.domain,
    logo: {
      '@type': 'ImageObject',
      url: SITE.defaultImage,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': canonical,
  },
});

const getSchemaType = (pathname) => {
  if (pathname === '/contact') return 'ContactPage';
  if (['/about', '/our-story', '/team', '/leadership'].includes(pathname)) return 'AboutPage';
  if (pathname === '/') return 'WebSite';
  return 'WebPage';
};

/**
 * Manages document head metadata per route: title, description, canonical URL,
 * Open Graph, Twitter Card tags, and structured data. Renders nothing.
 * Mount once in the site layout; it reads the current route automatically.
 */
export default function SEO() {
  const { pathname } = useLocation();
  const meta = metaFor(pathname);
  const canonical = `${SITE.domain}${pathname === '/' ? '' : pathname}`;
  const image = meta.image || SITE.defaultImage;
  const schemaType = getSchemaType(pathname);

  useEffect(() => {
    document.title = meta.title;

    const setMeta = (attr, name, content) => {
      let el = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`);
      if (!el) { el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el); }
      el.setAttribute('href', href);
    };

    const setScript = (id, json) => {
      let el = document.head.querySelector(`script[id="${id}"]`);
      if (!el) {
        el = document.createElement('script');
        el.setAttribute('type', 'application/ld+json');
        el.setAttribute('id', id);
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(json);
    };

    setMeta('name', 'description', meta.description);

    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('property', 'og:locale', 'en_US');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', image);
    if (SITE.twitter) setMeta('name', 'twitter:site', SITE.twitter);
    if (SITE.twitter) setMeta('name', 'twitter:creator', SITE.twitter);

    setLink('canonical', canonical);
    setScript('structured-data', buildStructuredData(meta, canonical, schemaType));
  }, [meta.title, meta.description, canonical, image, schemaType]);

  return null;
}