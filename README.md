# 🍺 Kraftory Biergarten - Modern Restaurant Website

A stunning, fully-responsive restaurant website for Kraftory Biergarten, built with React, TypeScript, Vite, and Tailwind CSS.

## 🌟 Features

### Pages
- **Home** - Beautiful hero section with experience highlights and featured menu preview
- **Menu** - Comprehensive menu with tabs for Starters, Mains, Grill, Platters, and Vegetarian options
- **Bakery** - Artisan bakery showcase with fresh breads, pastries, desserts, and coffee pairings
- **Beer & Drinks** - Craft beer selection, signature cocktails, and non-alcoholic options
- **Padel & Events** - Court information, booking system, and upcoming events calendar
- **Gallery** - Filterable image gallery with food, drinks, events, and padel categories
- **About** - Brand story, mission, values, timeline, and team information
- **Contact** - Reservation form, location information, and quick contact options

### Design Features
- 🎨 **Modern Design System**
  - Color Palette: Charcoal, Craft Amber, Forest Green, Warm Beige, Off-White
  - Typography: Playfair Display for headings, Inter for body text
  - Responsive grid layouts and mobile-first design

- 📱 **Fully Responsive**
  - Desktop, tablet, and mobile optimized
  - Mobile navigation menu
  - Flexible component layouts

- ✨ **Interactive Elements**
  - Smooth hover effects and transitions
  - Tab-based filtering (Menu)
  - Category filtering (Gallery)
  - Contact form with validation

- 🚀 **Performance Optimized**
  - Built with Vite for fast builds
  - Optimized CSS with Tailwind
  - Minimal bundle size

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **@tailwindcss/postcss** - Tailwind PostCSS plugin

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with logo
│   └── Footer.tsx          # Footer with links and newsletter
├── layouts/
│   └── Layout.tsx          # Main layout wrapper
├── pages/
│   ├── Home.tsx            # Homepage
│   ├── Menu.tsx            # Menu page
│   ├── Bakery.tsx          # Bakery page
│   ├── BeerDrinks.tsx      # Beer & Drinks page
│   ├── Padel.tsx           # Padel & Events page
│   ├── Gallery.tsx         # Gallery page
│   ├── About.tsx           # About page
│   └── Contact.tsx         # Contact & Reservations page
├── App.tsx                 # Main app with routing
├── App.css                 # App-level styles
├── index.css               # Global styles & Tailwind
└── main.tsx                # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The development server runs at **http://localhost:5173/**

- Hot Module Replacement (HMR) enabled
- Fast refresh on file changes
- TypeScript checking during development

## 🎨 Customization

### Colors
Edit the color palette in tailwind.config.js:
```javascript
colors: {
  'charcoal': '#1F1F1F',
  'craft-amber': '#C47A2C',
  'forest-green': '#2F5D3A',
  'warm-beige': '#F4EDE4',
  'off-white': '#FAFAFA',
}
```

### Fonts
Update fonts in both src/index.css and tailwind.config.js:
- **Headings**: Playfair Display
- **Body**: Inter

### Content
All content is stored directly in component files and can be easily updated

## 📝 Navigation Structure

```
Home
├── Menu
├── Bakery
├── Beer & Drinks
├── Padel & Events
├── Gallery
├── About
└── Contact & Reservations
```

## 🔐 Forms & Functionality

### Reservation Form
- Located in Contact page
- Collects: Name, Email, Phone, Date, Time, Number of Guests, Special Requests
- Ready for backend integration

### Gallery Filters
- All, Food, Drinks, Events, Padel categories
- Dynamic filtering with instant updates

## 🚀 Deployment

### Build
```bash
npm run build
```
Creates optimized `dist/` folder ready for deployment.

### Deploy to
- **Vercel** (Recommended for Vite)
- **Netlify**
- **GitHub Pages**
- **Traditional hosting** (requires web server configuration)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is created for Kraftory Biergarten.

## 📞 Support & Feedback

For questions about this website, contact:
- **Phone**: +254 700 000 000
- **Email**: info@kraftory.com
- **Location**: Red Hill Road, Nairobi, Kenya

---

**Built with ❤️ for Kraftory Biergarten** 🍺
