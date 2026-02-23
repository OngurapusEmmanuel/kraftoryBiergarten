# ⚡ Kraftory Website - Quick Reference

## 🎯 Quick Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run tsc          # Check TypeScript errors
npm install          # Install dependencies
npm update           # Update packages
```

## 🗺️ Site Navigation

| Page | Route | File |
|------|-------|------|
| Home | `/` | `src/pages/Home.tsx` |
| Menu | `/menu` | `src/pages/Menu.tsx` |
| Bakery | `/bakery` | `src/pages/Bakery.tsx` |
| Beer & Drinks | `/beer` | `src/pages/BeerDrinks.tsx` |
| Padel & Events | `/padel` | `src/pages/Padel.tsx` |
| Gallery | `/gallery` | `src/pages/Gallery.tsx` |
| About | `/about` | `src/pages/About.tsx` |
| Contact | `/contact` | `src/pages/Contact.tsx` |

## 🎨 Edit Content

### Menu Items (5 tabs)
**File:** `src/pages/Menu.tsx`
```typescript
const menuItems = {
  starters: [
    { name: 'Crispy Calamari', desc: '...', price: 'KES 850' }
  ]
}
```

### Bakery Items (4 sections)
**File:** `src/pages/Bakery.tsx`
```typescript
const bakeryItems = {
  breads: [...],
  pastries: [...],
  desserts: [...],
  coffee: [...]
}
```

### Events (6 items)
**File:** `src/pages/Padel.tsx`
```typescript
const events = [
  { title: '...', date: '...', desc: '...' }
]
```

### Gallery (16 items)
**File:** `src/pages/Gallery.tsx`
```typescript
const galleryItems = [
  { id: 1, category: 'food', title: '...', image: '🍖' }
]
```

## 🎨 Edit Colors

**File:** `tailwind.config.js`
```javascript
colors: {
  'charcoal': '#1F1F1F',
  'craft-amber': '#C47A2C',
  'forest-green': '#2F5D3A',
  'warm-beige': '#F4EDE4',
  'off-white': '#FAFAFA',
}
```

## 🔤 Edit Fonts

**File 1:** `src/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

**File 2:** `tailwind.config.js`
```javascript
fontFamily: {
  'display': ['Your Heading Font', 'serif'],
  'body': ['Your Body Font', 'sans-serif'],
}
```

## 📱 Contact Information to Update

**File:** `src/components/Header.tsx`, `Footer.tsx`, `Contact.tsx`

Find and replace:
- `+254 700 000 000` → Your phone
- `info@kraftory.com` → Your email
- `Red Hill Road, Nairobi, Kenya` → Your address

## 🖼️ Replace Images

Currently uses emoji placeholders. To add real images:

1. Store images in `public/images/`
2. Update components:
```jsx
// From:
<div className="text-7xl">🍖</div>

// To:
<img src="/images/steak.jpg" alt="Grilled Steak" />
```

## ✅ Pre-Deployment Checklist

- [ ] Update all menu prices
- [ ] Update contact information
- [ ] Replace image placeholders
- [ ] Update hours of operation
- [ ] Add team information
- [ ] Update social media links
- [ ] Test all links work
- [ ] Test on mobile
- [ ] Set up Google Analytics
- [ ] Choose hosting provider
- [ ] Get domain name

## 🚀 Deploy to Production

```bash
# Build first
npm run build

# Then choose one:

# Option 1: Vercel (Recommended)
# 1. Push to GitHub
# 2. Connect at vercel.com
# 3. Done!

# Option 2: Netlify
# 1. Push to GitHub
# 2. Connect at netlify.com
# 3. Set build: npm run build
# 4. Set publish: dist

# Option 3: Traditional Hosting
# scp -r dist/ user@server:/var/www/
```

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Port 5173 taken | `npm run dev -- --port 3000` |
| CSS not updating | Restart dev server |
| TypeScript error | Run `npm run tsc` |
| Images not showing | Check path in `public/` |
| Forms not working | Check backend endpoint |

## 📁 Important Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Routing setup |
| `src/index.css` | Global styles |
| `tailwind.config.js` | Color & font config |
| `package.json` | Dependencies |
| `README.md` | Project overview |
| `DEVELOPMENT.md` | Development guide |
| `DEPLOYMENT.md` | Deployment guide |

## 🔗 Add New Page

1. Create file: `src/pages/NewPage.tsx`
2. Import in `src/App.tsx`:
```typescript
import NewPage from './pages/NewPage';
```
3. Add route:
```typescript
<Route path="/newpage" element={<NewPage />} />
```
4. Add to navigation in `Header.tsx`

## 📊 Accessing the Site

**Development:**
```
http://localhost:5173/
```

**Keys:**
- Press `h + enter` in terminal for dev server help
- Ctrl+C to stop server

## 💾 Git Commands (Optional)

```bash
git init                          # Initialize git
git add .                        # Stage all files
git commit -m "Initial commit"   # Commit
git remote add origin <URL>      # Connect to GitHub
git push origin main             # Push to GitHub
```

## 🎓 Learn More

- Full guide: See `DEVELOPMENT.md`
- Deployment guide: See `DEPLOYMENT.md`
- Project overview: See `PROJECT_SUMMARY.md`

---

**Quick access:** This file provides shortcuts for the most common tasks!
