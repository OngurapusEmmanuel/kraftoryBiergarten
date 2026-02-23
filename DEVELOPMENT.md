# 🛠️ Kraftory Website - Development Guide

Complete guide for developing and customizing the Kraftory Biergarten website.

## 📋 Quick Reference

### Running the Project

```bash
# Start development server (runs at localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Check for TypeScript errors
npm run tsc
```

## 📁 Project Organization

### Component Structure

**Header Component** (`src/components/Header.tsx`)
- Navigation menu with links to all pages
- Logo section with branding
- Mobile menu button (placeholder for mobile nav implementation)

**Footer Component** (`src/components/Footer.tsx`)
- Company information and contact details
- Quick navigation links
- Social media links
- Newsletter subscription form

**Layout Component** (`src/layouts/Layout.tsx`)
- Wrapper component that includes Header and Footer
- Ensures consistent layout across all pages
- Flex layout for proper spacing

### Pages

Each page follows a consistent structure:
1. Hero/Header section with background
2. Main content sections
3. Call-to-action areas
4. Footer (included via Layout)

**Home Page** (`src/pages/Home.tsx`)
- Hero section with main CTA buttons
- Experience highlights (3 cards)
- Featured menu preview
- Events banner

**Menu Page** (`src/pages/Menu.tsx`)
- Tabbed interface: Starters, Mains, Grill, Platters, Vegetarian
- Menu items with descriptions and prices
- Call to action for reservations

**Bakery Page** (`src/pages/Bakery.tsx`)
- Fresh Breads section
- Pastries section
- Desserts section
- Coffee Pairings section
- Pre-order CTA

**Beer & Drinks Page** (`src/pages/BeerDrinks.tsx`)
- Craft Beer selection with ABV and descriptions
- Signature Cocktails with base spirits
- Non-Alcoholic Options
- Happy Hour banner

**Padel & Events Page** (`src/pages/Padel.tsx`)
- Court information and features
- Pricing table
- Events calendar with 6 upcoming events
- Features banner

**Gallery Page** (`src/pages/Gallery.tsx`)
- Filterable grid (All, Food, Drinks, Events, Padel)
- Hover effects on gallery items
- Social media follow CTA

**About Page** (`src/pages/About.tsx`)
- Brand story and mission
- Timeline of key milestones
- Team information
- Values and mission statement

**Contact Page** (`src/pages/Contact.tsx`)
- Location information with hours
- Contact details (phone, email)
- Reservation form with fields for:
  - Name, Email, Phone
  - Date, Time, Number of Guests
  - Special Requests
- Map placeholder
- WhatsApp quick contact button

## 🎨 Customization Guide

### Updating Content

#### Menu Items
Edit `src/pages/Menu.tsx`:
```typescript
const menuItems = {
  starters: [
    { name: 'Item Name', desc: 'Description', price: 'KES X,XXX' },
    // Add more items...
  ],
  // Update other categories...
};
```

#### Bakery Items
Edit `src/pages/Bakery.tsx` to update:
- `bakeryItems.breads`
- `bakeryItems.pastries`
- `bakeryItems.desserts`
- `bakeryItems.coffee`

#### Events
Edit `src/pages/Padel.tsx`:
```typescript
const events = [
  { title: 'Event Name', date: 'Date & Time', desc: 'Description' },
  // Add more events...
];
```

#### Gallery Items
Edit `src/pages/Gallery.tsx` to add/remove gallery items:
```typescript
const galleryItems = [
  { id: 1, category: 'food', title: 'Item Title', image: '🍖' },
  // Add more items...
];
```

### Styling Customization

#### Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'charcoal': '#1F1F1F',      // Primary dark
      'craft-amber': '#C47A2C',   // Accent color
      'forest-green': '#2F5D3A',  // Secondary dark
      'warm-beige': '#F4EDE4',    // Light background
      'off-white': '#FAFAFA',     // Text background
    },
  },
}
```

#### Fonts

Update in both `src/index.css` and `tailwind.config.js`:

```css
/* In src/index.css, update the Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=NewFont:wght@400;700&display=swap');
```

```javascript
// In tailwind.config.js
fontFamily: {
  'display': ['New Heading Font', 'serif'],
  'body': ['New Body Font', 'sans-serif'],
}
```

### Spacing & Layout

All layouts use Tailwind's utility classes:
- `max-w-7xl` for max width container
- `mx-auto` for centering
- `px-4 py-12` for padding
- `grid grid-cols-1 md:grid-cols-2` for responsive grids

Adjust Tailwind defaults in `tailwind.config.js` if needed.

## 🔗 Routing

Routes are defined in `src/App.tsx`:

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/bakery" element={<Bakery />} />
  <Route path="/beer" element={<BeerDrinks />} />
  <Route path="/padel" element={<Padel />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

To add a new page:
1. Create new file in `src/pages/NewPage.tsx`
2. Import it in `src/App.tsx`
3. Add route: `<Route path="/newpage" element={<NewPage />} />`
4. Update navigation in `Header.tsx`

## 📱 Responsive Design

The site uses Tailwind's responsive prefixes:
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🎯 Interactive Components

### Tabs (Menu Page)
```typescript
const [activeTab, setActiveTab] = useState('starters');

// Toggle tab with button
<button onClick={() => setActiveTab('mains')}>Main</button>

// Display content for active tab
{menuItems[activeTab].map(...)}
```

### Filters (Gallery Page)
Similar pattern using state to manage active filter.

### Forms (Contact Page)
```typescript
const [formData, setFormData] = useState({...});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Send form data to backend
};
```

## 🚀 Optimization Tips

### Images
Currently using emoji placeholders. When adding real images:
```jsx
<img src="/path/to/image.jpg" alt="Description" className="w-full h-auto" />
```

### Performance
- Lazy load images with `loading="lazy"`
- Use Tailwind's `group-hover` for efficient hover states
- Minimize custom CSS (rely on Tailwind utilities)

### SEO
Add meta tags in `index.html`:
```html
<meta name="description" content="Kraftory Biergarten - Restaurant & Social Hub">
<meta name="keywords" content="beer, food, padel, nairobi">
```

## 🔄 Integration Points

### Backend Forms
The Contact page form is ready for backend integration:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Send formData to your backend API
  const response = await fetch('/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
};
```

### Analytics
Add tracking code in `src/main.tsx` or create a separate hook.

### Payment Gateway
For online ordering, integrate payment provider (Stripe, PayPal, etc.) in relevant components.

## 📦 Dependencies

### Core
- `react` - UI framework
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `typescript` - Type safety

### Build & Dev
- `vite` - Build tool
- `tailwindcss` - Styling
- `@tailwindcss/postcss` - Tailwind PostCSS plugin
- `eslint` - Code linting

## 🐛 Troubleshooting

**Port 5173 already in use**
```bash
# Use a different port
npm run dev -- --port 3000
```

**TypeScript errors**
```bash
npm run tsc  # Check for errors
```

**CSS not updating**
- Clear `.vite` cache
- Restart dev server
- Check `tailwind.config.js` patterns match your files

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🚀 Deployment Checklist

- [ ] Update all contact information and links
- [ ] Replace image placeholders with real images
- [ ] Test all forms and integrations
- [ ] Update SEO meta tags
- [ ] Configure analytics
- [ ] Set up error logging
- [ ] Test on multiple devices/browsers
- [ ] Optimize images and assets
- [ ] Set up redirects for old URLs (if migrating)
- [ ] Configure email notifications for form submissions

---

**Last Updated:** January 2026
