# SEO Optimization Guide for Kraftory Biergarten

## Overview
This document outlines all the SEO optimizations implemented for the Kraftory Biergarten website.

## ✅ Implementations

### 1. **HTML Head Optimization** (`index.html`)
- ✅ Comprehensive meta tags
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Google Analytics snippet
- ✅ Manifest file support
- ✅ Preconnect to Google Fonts

**Key Meta Tags:**
- Meta description optimized with keywords
- Viewport meta for responsive design
- Author and robots meta tags
- Theme color for browser UI

### 2. **Search Engine Submission Files**
- ✅ **robots.txt** (`/public/robots.txt`)
  - Allows all search engines to crawl
  - Sets crawl delay to 1 second
  - References sitemap locations

- ✅ **sitemap.xml** (`/public/sitemap.xml`)
  - Lists all 9 main pages
  - Priority levels (1.0 for home → 0.6 for contact)
  - Change frequencies (daily to monthly)
  - Last modified dates

### 3. **Web App Manifest** (`/public/manifest.json`)
- ✅ PWA support for app-like experience
- ✅ App icons and shortcuts
- ✅ App categories for app stores
- ✅ Helps with mobile SEO

### 4. **Structured Data (JSON-LD)**

**Global Schema (index.html):**
- Restaurant schema with all business information
- Opening hours specification
- Cuisine types
- Social media links
- Contact information

**Page-Specific Schemas:**
- Home: WebPage schema
- Menu: WebPage schema (food & beverages)
- Bakery: LocalBusiness schema
- Beer & Drinks: WebPage schema
- Contact: ContactPage schema
- Padel & Events: LocalBusiness schema
- Gallery: WebPage schema
- About: Organization schema
- Events: LocalBusiness schema

### 5. **Dynamic Meta Tags per Page** (`src/utils/useSEO.ts`)

Each page automatically updates:
- Page title (format: "Page Name | Kraftory Biergarten")
- Meta description
- Meta keywords
- Open Graph tags (for social sharing)
- Twitter Card tags
- Canonical URL
- JSON-LD structured data

**Pages Optimized:**
1. Home
2. Menu
3. Bakery
4. Beer & Drinks
5. Contact
6. Padel & Events
7. Gallery
8. About
9. Events

## 📊 SEO Checklist

### On-Page SEO
- ✅ Title tags (40-60 characters)
- ✅ Meta descriptions (150-160 characters)
- ✅ Keywords targeting
- ✅ Semantic HTML structure
- ✅ Image alt texts (ready to add)

### Technical SEO
- ✅ Mobile responsive design
- ✅ Fast loading with Vite
- ✅ Canonical URLs
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Structured data (JSON-LD)
- ✅ Open Graph tags
- ✅ Twitter Card tags

### Off-Page SEO Foundation
- ✅ Social sharing tags
- ✅ Schema markup for search visibility
- ✅ Business information consolidation

## 🚀 Next Steps & Recommendations

### Immediate (Before Launch)
1. **Update Images**
   - Replace emoji placeholders with actual high-quality photos
   - Add descriptive alt text to all images
   - Optimize image sizes (<100KB per image)
   - Use WebP format for better compression

2. **Update GA ID**
   - Replace `GA_MEASUREMENT_ID` in `index.html` with actual Google Analytics ID
   - Set up Goals/Conversions for reservations and bookings

3. **Update Domain & Contact**
   - Replace `https://kraftory.com/` with actual domain
   - Update phone number from `+254700000000`
   - Update email from `info@kraftory.com`
   - Update address details

4. **Social Media Links**
   - Add actual social media URLs
   - Create social media profiles
   - Update Facebook/Instagram/Twitter handles

### Short Term (Week 1-2)
1. **Google Search Console**
   ```
   - Verify site ownership
   - Submit sitemap.xml
   - Monitor search performance
   - Fix any crawl errors
   ```

2. **Google Business Profile**
   ```
   - Claim/create listing
   - Add business hours
   - Add photos (minimum 5)
   - Add services/offerings
   ```

3. **Local SEO**
   ```
   - Add to Google My Business
   - Get citations from Yelp, TripAdvisor, Zomato
   - Build local backlinks
   - Get reviews
   ```

### Medium Term (Month 1)
1. **Link Building**
   - Get listed in restaurant directories
   - Partner with local bloggers
   - Guest posts on Nairobi lifestyle blogs

2. **Content Expansion**
   - Blog posts about craft beer
   - Recipe posts featuring menu items
   - Event coverage posts
   - Team spotlights

3. **Local Marketing**
   - Partner with local influencers
   - Sponsorships
   - Community partnerships

## 📝 Content Optimization Tips

### For Menu Pages
- Use long-tail keywords: "best craft beer in Nairobi", "artisan bakery Nairobi"
- Include price information (helps with rich snippets)
- Food photos with descriptions improve engagement

### For Event Pages
- Use event schema markup for event listings
- Include dates, times, and pricing
- Update events frequently for freshness

### Blog Opportunities
- "Guide to Craft Beer" → targets "craft beer guide" searches
- "Padel Courts in Nairobi" → local search visibility
- "Private Event Venues in Nairobi" → high-intent searches

## 🔗 Important Links for Management

### Google Tools
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **Google Business Profile**: https://business.google.com

### SEO Monitoring
- **SemRush**: https://www.semrush.com
- **Ahrefs**: https://ahrefs.com
- **Moz**: https://moz.com

## 🛠️ How to Update SEO

### Adding a New Page

1. Create the page component in `src/pages/`
2. Add the import and route in `App.tsx`
3. Add useSEO hook with:
   ```typescript
   useEffect(() => {
     useSEO({
       title: 'Page Title',
       description: 'Page description (150-160 chars)',
       keywords: 'keyword1, keyword2, keyword3',
       canonical: 'https://kraftory.com/page',
       schema: { /* JSON-LD schema */ }
     });
   }, []);
   ```

### Updating Sitemaps
- Edit `/public/sitemap.xml` when pages change
- Remember to update `lastmod` dates

### Updating Robot Restrictions
- Edit `/public/robots.txt` to disallow new paths if needed
- Example: `Disallow: /admin/`

## 📈 Performance Metrics to Monitor

- **Core Web Vitals**: LCP, FID, CLS
- **Page Speed**: Mobile and desktop scores
- **Keyword Rankings**: Track 10-15 primary keywords
- **Organic Traffic**: Sessions, users, bounce rate
- **Conversions**: Form submissions, bookings

## 🎯 Target Keywords

**Primary Keywords:**
- Craft beer Nairobi
- Restaurant Nairobi
- Padel courts Nairobi
- Event venue Nairobi
- Biergarten Nairobi

**Long-tail Keywords:**
- Best craft beer bar in Nairobi
- Padel court booking Nairobi
- Private event venue Nairobi
- Artisan bakery Nairobi
- Weekend brunch venue Nairobi

## ❓ Troubleshooting SEO Issues

### Page Not Appearing in Google
- Check robots.txt isn't blocking
- Submit to Google Search Console
- Wait 2-4 weeks for initial crawl
- Check for meta robots="noindex"

### Rankings Dropped
- Check for duplicate content
- Verify canonical URLs
- Check for broken links
- Monitor Core Web Vitals
- Ensure HTTPS is active

### Low Click-Through Rate
- Improve meta descriptions
- Update page titles
- Add schema markup for rich snippets
- Improve title/description relevance

## 📞 Support Resources

- React Helmet Async: For client-side meta management
- JSON-LD Standards: https://json-ld.org/
- Schema.org: https://schema.org/
- SEO.gov: https://www.seo.gov/ (government SEO guide)

---

**Last Updated:** February 22, 2026
**Status:** Ready for Launch
