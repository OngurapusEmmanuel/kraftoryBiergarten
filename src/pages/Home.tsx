import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import MenuItem from '../components/MenuItem';
import { useSEO, restaurantSchema } from '../utils/useSEO';
import taps from '../assets/TAPS.jpg';
import padel from '../assets/padel images/padel.jpg';
import conference from '../assets/conference.jpg';
import salmon from '../assets/salmon.jpg';
import beer from '../assets/beer.avif';
import tiramisu from '../assets/tiramisu.jpg';
import bakery from '../assets/bakery.webp'

export default function Home() {
  useEffect(() => {
    // useSEO is a regular function, not a React Hook. eslint still thinks
    // it looks like a hook due to the name, so disable the rule for this
    // specific call.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSEO({
      title: 'Home',
      description: 'Kraftory Biergarten — Nairobi\'s finest craft beer bar, artisan restaurant, padel courts, and event venue. Located on Red Hill Road, open daily 6 AM–11 PM.',
      keywords: 'biergarten Nairobi, craft beer Kenya, padel courts Nairobi, restaurant Red Hill Road, events venue Nairobi',
      path: '/',
      // SEO FIX: Use FoodEstablishment + full LocalBusiness schema instead of bare WebPage
      schema: restaurantSchema,
    });
  }, []);

  const features = [
    { title: 'Craft Beer', desc: 'Curated selection of local and international craft beers', image: taps },
    { title: 'Artisan Bakery', desc: 'Fresh-baked goods daily, from breads to pastries', image: bakery },
    { title: 'Padel & Social', desc: 'Professional padel courts and communal spaces', image: padel },
    { title: 'Conference Spaces', desc: 'Modern meeting rooms perfect for business gatherings & events', image: conference },
  ];

  const menuPreview = [
    { name: 'Atlantic Salmon Steak', desc: 'Crispy-skinned salmon on creamed spinach with lemon beurre blanc', price: 'KES 3,500', image: salmon },
    { name: 'Kraftory Love Story', desc: 'Captain Morgan, Malibu, orange & pineapple juice — tropical heartbeats', price: 'KES 1,200', image: beer },
    { name: 'Classic Italian Tiramisu', desc: 'Silky mascarpone with espresso-soaked ladyfingers & cocoa', price: 'KES 1,000', image: tiramisu },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Craft Beer • Great Food • Good Times"
        subtitle="Experience the vibrant pulse of Nairobi's finest biergarten"
        buttons={[
          { label: 'View Menu', url: 'https://kraftory-biergarten.ubuntu.click/', primary: true },
          { label: 'Reserve Now', url: 'https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi' },
        ]}
      />

      {/* Brand Introduction */}
      <Section title="Our Philosophy" subtitle="" bgType="light">
        <div className="text-align-center">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', maxWidth: '700px', margin: '0 auto' }}>
            Kraftory Biergarten is where refined leisure finds its home. Designed for the cultured, our space blends the art of dining and drinking with the elegance of sport.
          </p>
        </div>
      </Section>

      {/* Experience Highlights */}
      <Section title="Why Choose Kraftory" subtitle="" bgType="light">
        <div className="grid-4">
          {features.map((feature, idx) => (
            <Card key={idx} title={feature.title} description={feature.desc} image={feature.image} />
          ))}
        </div>
      </Section>

      {/* Featured Menu Preview */}
      <Section title="Featured Dishes" subtitle="Taste our signature creations crafted with premium ingredients" bgType="dark">
        <div className="grid-3">
          {menuPreview.map((item, idx) => (
            <MenuItem key={idx} name={item.name} description={item.desc} price={item.price} image={item.image} />
          ))}
        </div>
        <div className="text-align-center mt-6">
          <a href="https://kraftory-biergarten.ubuntu.click/" className="btn btn-primary">
            Explore Full Menu
          </a>
        </div>
      </Section>

      {/* Events Banner */}
      <Section title="Coming This Month" subtitle="🎵 Live Music Nights • 🥐 Weekend Brunch • 🎾 Padel Tournaments" bgType="amber">
        <div className="text-align-center">
          <Link to="/padel" className="btn btn-secondary">
            View Events &amp; Details
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
