/**
 * SEO Utility Hook
 * Manages meta tags, structured data, and SEO optimization for each page
 */

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  schema?: Record<string, any>;
  noindex?: boolean;
  canonical?: string;
}

/**
 * Hook to update page SEO
 * Usage: useSEO({ title: 'Menu', description: '...' })
 */
export function useSEO(config: SEOConfig) {
  // Update title
  if (config.title) {
    document.title = `${config.title} | Kraftory Biergarten`;
  }

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && config.description) {
    metaDescription.setAttribute('content', config.description);
  }

  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && config.keywords) {
    metaKeywords.setAttribute('content', config.keywords);
  }

  // Update Open Graph tags
  const updateOGTag = (property: string, content: string) => {
    let og = document.querySelector(`meta[property="${property}"]`);
    if (!og) {
      og = document.createElement('meta');
      og.setAttribute('property', property);
      document.head.appendChild(og);
    }
    og.setAttribute('content', content);
  };

  if (config.title) {
    updateOGTag('og:title', `${config.title} | Kraftory Biergarten`);
  }
  if (config.description) {
    updateOGTag('og:description', config.description);
  }
  if (config.image) {
    updateOGTag('og:image', config.image);
  }
  if (config.url) {
    updateOGTag('og:url', config.url);
  }

  // Update Twitter Card
  const updateTwitterTag = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  if (config.title) {
    updateTwitterTag('twitter:title', `${config.title} | Kraftory Biergarten`);
  }
  if (config.description) {
    updateTwitterTag('twitter:description', config.description);
  }
  if (config.image) {
    updateTwitterTag('twitter:image', config.image);
  }

  // Update canonical URL
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);
  }

  // Update robots meta tag for noindex
  if (config.noindex) {
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) {
      robots.setAttribute('content', 'noindex, nofollow');
    }
  }

  // Add structured data (JSON-LD)
  if (config.schema) {
    // Remove existing schema script if present
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify(config.schema);
    document.head.appendChild(schema);
  }
}

export default useSEO;
