# 🚀 Kraftory Website - Deployment Guide

Complete guide for deploying the Kraftory Biergarten website to production.

## 🔄 Build Process

### Local Build
```bash
npm run build
```

This creates a `dist/` folder with optimized production files:
- Minified JavaScript and CSS
- Optimized assets
- Source maps for debugging

### Preview Production Build
```bash
npm run preview
```

View the production build locally before deploying.

## 📤 Deployment Options

### 1. Vercel (Recommended)

**Easiest deployment for Vite projects**

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial Kraftory website"
git push origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New..." → "Project"
4. Select your Kraftory repository
5. Click "Deploy"
6. Done! Your site is live

**Environment Variables:** None needed for static site

**Custom Domain:**
1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., kraftory.com)
3. Update DNS records with Vercel's nameservers

---

### 2. Netlify

#### Step 1: Connect Repository
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your Kraftory repository

#### Step 2: Configure
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Click "Deploy site"

**Custom Domain:**
1. Site settings → Domain management
2. Add custom domain

---

### 3. GitHub Pages

#### Step 1: Update vite.config.ts
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/kraftory/', // Only if deploying to subdirectory
})
```

#### Step 2: Update package.json scripts
```json
"deploy": "npm run build && npm run preview",
"build:github": "npm run build && echo 'dist/.nojekyll' >> dist/.nojekyll"
```

#### Step 3: Deploy
```bash
npm run build

# If using gh-pages package
npm install -D gh-pages
npm run deploy
```

---

### 4. Traditional Web Hosting

#### Requirements
- Node.js host (recommended: DigitalOcean, Linode, AWS)
- Access to server via SSH
- PM2 or similar process manager

#### Deployment Steps

**Step 1: Build locally**
```bash
npm run build
```

**Step 2: Upload dist to server**
```bash
scp -r dist/ user@yourdomain.com:/var/www/kraftory
```

**Step 3: Configure Web Server**

**For Nginx:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/kraftory;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    location ~* \.(?:js|css|png|jpg|svg|woff2)$ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }
}
```

**For Apache:**
```apache
<Directory /var/www/kraftory>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</Directory>
```

**Step 4: Enable HTTPS**
```bash
# Using Let's Encrypt
sudo certbot certonly --webroot -w /var/www/kraftory -d yourdomain.com
```

---

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production` (if needed later):
```
VITE_API_URL=https://api.yourdomain.com
VITE_ANALYTICS_ID=your_analytics_id
```

Update TypeScript in `src/App.tsx` to use:
```typescript
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

---

## ✅ Pre-Deployment Checklist

### Content Updates
- [ ] Update all contact information
  - [ ] Phone number
  - [ ] Email address
  - [ ] Physical address
  - [ ] Whatsapp number
- [ ] Update restaurant hours
- [ ] Update menu prices and items
- [ ] Update team information
- [ ] Verify all external links work

### Functionality
- [ ] Test contact form (or configure backend)
- [ ] Test all navigation links
- [ ] Test responsive design on mobile
- [ ] Test hover effects and animations
- [ ] Test form validation

### Performance & SEO
- [ ] Replace placeholder images with real ones
- [ ] Optimize images (compress, WebP format)
- [ ] Add meta descriptions
- [ ] Update page titles
- [ ] Add favicon
- [ ] Create robots.txt
- [ ] Create sitemap.xml (can auto-generate)
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics

### Security
- [ ] Update content security policy headers
- [ ] Enable HTTPS (production requirement)
- [ ] Set up SSL certificate
- [ ] Configure CORS headers if needed
- [ ] Remove any console.log statements
- [ ] Check for hardcoded secrets

### Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile (iPhone, Android)
- [ ] Test on tablet
- [ ] Test slow network (3G)
- [ ] Lighthouse audit (target: 90+)
- [ ] Test all pages load correctly

---

## 📊 Adding Analytics

### Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property for your domain
3. Get measurement ID (G-XXXXXXXXXX)
4. Install google-analytics tag:

```bash
npm install react-ga4
```

5. In `src/main.tsx`:
```typescript
import ReactGA from "react-ga4";

ReactGA.initialize("G-XXXXXXXXXX");
ReactGA.send("pageview");
```

### Alternative: Fathom Analytics
More privacy-focused, GDPR compliant:
```html
<!-- In index.html -->
<script src="https://cdn.usefathom.com/script.js" data-site="XXXXX" defer></script>
```

---

## 📧 Form Submissions

### Option 1: Formspree (Simple)
```typescript
// In Contact.tsx form
<form action="https://formspree.io/f/your-form-id" method="POST">
  {/* form fields */}
</form>
```

### Option 2: Backend API
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

### Option 3: Firebase
```bash
npm install firebase
```

Configure in your app and integrate form submission.

---

## 🚨 Monitoring & Maintenance

### Uptime Monitoring
- Set up monitoring with UptimeRobot (free) or Pingdom
- Get alerts if site goes down

### Error Tracking
- Sentry.io for error tracking
- LogRocket for session replay

### Regular Backups
- Enable automatic backups with hosting provider
- Keep local copy of code

### Updates
- Regularly update dependencies:
```bash
npm outdated
npm update
```

### Performance Monitoring
- Use Lighthouse CI
- Monitor Core Web Vitals
- Check with WebPageTest

---

## 🔄 CI/CD Pipeline (Optional)

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod --dir=dist
```

---

## 📞 Support & Troubleshooting

### 404 Errors on Refresh
**Problem:** Direct navigation to routes shows 404 in production

**Solution:** 
- Configure web server to redirect all requests to index.html
- Use `try_files` in Nginx or `.htaccess` rewrite rules

### Images Not Loading
- Verify image paths are relative or absolute
- Check file permissions on server
- Use `public/` folder for static assets

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is loading (DevTools → Network)
- Verify Tailwind config matches build

### Form Not Working
- Check backend API endpoint is correct
- Verify CORS headers if needed
- Check browser console for errors
- Test form locally first

---

## 📈 Post-Launch

### First Week
- Monitor analytics and errors
- Collect user feedback
- Fix any critical issues
- Monitor for security vulnerabilities

### Month 1
- Optimize based on analytics
- Improve homepage conversion
- Refine content based on user behavior
- Update social media links with your site

### Ongoing
- Update menu/prices regularly
- Post new gallery images
- Announce events
- Maintain content freshness for SEO
- Keep dependencies updated

---

## 🎯 Domain Setup

### Register Domain
- GoDaddy, Namecheap, Google Domains, etc.
- Cost: ~$10-15/year

### Update DNS Records
**For Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: Your Netlify IP (provided in dashboard)
```

### Google Workspace (Optional)
Set up business email: info@yourdomain.com

---

**Your site is now live! 🎉**

For questions: Contact your hosting provider's support.

---

**Last Updated:** January 2026
