import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import MenuItem from '../components/MenuItem';
import { useSEO } from '../utils/useSEO';
import taps from '../assets/TAPS.jpg';
import bakery from '../assets/logo bw.jpeg';
import padel from '../assets/padel images/padel.jpg';
import conference from '../assets/conference.jpg';
import salmon from '../assets/salmon.jpg';
import beer from '../assets/beer.avif';
import tiramisu from '../assets/tiramisu.jpg';

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSEO({
      title: 'Home',
      description: 'Discover Kraftory Biergarten - Your ultimate destination for craft beer, authentic German-inspired cuisine, fresh artisan bakery, padel court reservations, and unforgettable events in Nairobi, Kenya.',
      keywords: 'biergarten, craft beer, restaurant, padel courts, events, Nairobi',
      canonical: 'https://kraftory.com/',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Kraftory Biergarten',
        description: 'Premium craft beer bar, restaurant, and padel court venue',
        url: 'https://kraftory.com/',
        publisher: {
          '@type': 'Organization',
          name: 'Kraftory Biergarten',
          url: 'https://kraftory.com/'
        }
      }
    });
  }, []);
  const features = [
  {
    title: 'Craft Beer',
    desc: 'Curated selection of local and international craft beers',
    image: taps
  },
  {
    title: 'Artisan Bakery',
    desc: 'Fresh-baked goods daily, from breads to pastries',
    image: bakery
  },
  {
    title: 'Padel & Social',
    desc: 'Professional padel courts and communal spaces',
    image: padel
  },
  {
    title: 'Conference Spaces',
    desc: 'Modern meeting rooms perfect for business gatherings & events',
    image: conference
  },
];

  const menuPreview = [
  {
    name: 'Atlantic Salmon Steak',
    desc: 'Crispy-skinned salmon on creamed spinach with lemon beurre blanc',
    price: 'KES 3,500',
    image: salmon
  },
  {
    name: 'Kraftory Love Story',
    desc: 'Captain Morgan, Malibu, orange & pineapple juice - tropical heartbeats',
    price: 'KES 1,200',
    image: beer
  },
  {
    name: 'Classic Italian Tiramisu',
    desc: 'Silky mascarpone with espresso-soaked ladyfingers & cocoa',
    price: 'KES 1,000',
    image: tiramisu
  },
];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Craft Beer • Great Food • Good Times"
        subtitle="Experience the vibrant pulse of Nairobi's finest biergarten"
        buttons={[
  { label: 'View Menu', url: 'https://kraftory-biergarten.ubuntu.click/', primary: true },
  {
    label: 'Reserve Now',
    url: 'https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi'
  },
]}
      />

      {/* Experience Highlights */}
      <Section title="Why Choose Kraftory" subtitle="" bgType="light">
        <div className="grid-4">
          {features.map((feature, idx) => (
<Card
  key={idx}
  title={feature.title}
  description={feature.desc}
  image={feature.image}
/>          ))}
        </div>
      </Section>

      {/* Featured Menu Preview */}
      <Section title="Featured Dishes" subtitle="Taste our signature creations crafted with premium ingredients" bgType="dark">
        <div className="grid-3">
          {menuPreview.map((item, idx) => (
<MenuItem
  key={idx}
  name={item.name}
  description={item.desc}
  price={item.price}
  image={item.image}
/>          ))}
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
            View Events & Details
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
