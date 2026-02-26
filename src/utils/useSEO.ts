/**
 * SEO Utility
 * Updates meta tags, Open Graph, Twitter Card, structured data, and canonical URLs.
 *
 * NOTE: This is a plain function, NOT a React Hook — call it anywhere
 * (inside or outside useEffect). The eslint-disable comments on callers
 * were incorrect and have been removed.
 */

const SITE_NAME = 'Kraftory Biergarten';
// CANONICAL: Using one consistent domain across all pages.
// BUG FIX: Pages were split between 'kraftory.com' and 'kraftorybiergarten.com'.
export const CANONICAL_BASE = 'https://kraftorybiergarten.com';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  /** Relative path, e.g. '/about' or '/'. Canonical is built from CANONICAL_BASE + path. */
  path?: string;
  image?: string;
  schema?: Record<string, unknown>;
  noindex?: boolean;
}

function setMeta(selector: string, attr: string, value: string, attrName = 'name') {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attr);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function useSEO(config: SEOConfig) {
  const fullTitle = config.title ? `${config.title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = CANONICAL_BASE + (config.path ?? '/');

  // Page title
  document.title = fullTitle;

  // Basic meta
  if (config.description) setMeta('meta[name="description"]', 'description', config.description);
  if (config.keywords) setMeta('meta[name="keywords"]', 'keywords', config.keywords);

  // Canonical link
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);

  // Open Graph
  setMeta('meta[property="og:title"]', 'og:title', fullTitle, 'property');
  setMeta('meta[property="og:site_name"]', 'og:site_name', SITE_NAME, 'property');
  setMeta('meta[property="og:type"]', 'og:type', 'website', 'property');  // SEO FIX: was missing
  setMeta('meta[property="og:url"]', 'og:url', canonicalUrl, 'property');
  if (config.description) setMeta('meta[property="og:description"]', 'og:description', config.description, 'property');
  if (config.image) setMeta('meta[property="og:image"]', 'og:image', config.image, 'property');

  // Twitter Card  — SEO FIX: twitter:card was never set
  setMeta('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
  setMeta('meta[name="twitter:site"]', 'twitter:site', '@kraftorybier');
  setMeta('meta[name="twitter:title"]', 'twitter:title', fullTitle);
  if (config.description) setMeta('meta[name="twitter:description"]', 'twitter:description', config.description);
  if (config.image) setMeta('meta[name="twitter:image"]', 'twitter:image', config.image);

  // Robots
  if (config.noindex) {
    setMeta('meta[name="robots"]', 'robots', 'noindex, nofollow');
  }

  // JSON-LD structured data
  if (config.schema) {
    const existing = document.querySelector('script[data-seo="true"]');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'true');
    script.textContent = JSON.stringify(config.schema);
    document.head.appendChild(script);
  }
}

/**
 * Shared LocalBusiness / FoodEstablishment schema for the whole site.
 * Used on the Home page and as a base for other pages.
 */
export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': ['FoodEstablishment', 'SportsActivityLocation'],
  name: SITE_NAME,
  description: 'Nairobi\'s premier biergarten featuring craft beer, artisan food, padel courts, and event spaces.',
  url: CANONICAL_BASE,
  telephone: '+254113555777',
  email: 'info@kraftorybiergarten.com',
  image: `${CANONICAL_BASE}/og-image.jpg`,
  servesCuisine: ['International', 'German', 'Kenyan'],
  priceRange: 'KES 200 – KES 3,500',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Off Red Hill Road',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -1.2258177987624916,
    longitude: 36.79517577395949,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '23:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/kraftorybiergarten/',
    'https://twitter.com/kraftorybier',
  ],
};

export default useSEO;
