import { useEffect } from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import MenuItem from '../components/MenuItem';
import { useSEO } from '../utils/useSEO';

export default function Bakery() {
  useEffect(() => {
    useSEO({
      title: 'Artisan Bakery',
      description: 'Discover Kraftory\'s artisan bakery featuring fresh-baked breads, pastries, desserts, and premium coffee pairings crafted daily in Nairobi.',
      keywords: 'artisan bakery Nairobi, fresh bread, pastries, desserts, coffee, Kraftory',
      path: '/bakery',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Bakery',
        name: 'Kraftory Biergarten — Artisan Bakery',
        description: 'Fresh-baked breads, pastries, desserts, and coffee daily',
        url: 'https://kraftorybiergarten.com/bakery',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Off Red Hill Road',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
        },
      },
    });
  }, []);

  const bakeryItems = {
    breads: [
      { name: 'Rustic Sourdough', desc: 'Artisan hand-crafted daily', price: 'KES 350' },
      { name: 'Multigrain & Seeds', desc: 'Whole wheat with sunflower seeds', price: 'KES 320' },
      { name: 'Focaccia Olive', desc: 'Italian-style with rosemary', price: 'KES 280' },
      { name: 'Ciabatta', desc: 'Light & airy Italian bread', price: 'KES 250' },
    ],
    pastries: [
      { name: 'Croissants', desc: 'Buttery & flaky French pastries', price: 'KES 200' },
      { name: 'Danish Swirls', desc: 'Cinnamon, chocolate & berry', price: 'KES 180' },
      { name: 'Almond Croissants', desc: 'Topped with sliced almonds', price: 'KES 250' },
      { name: 'Pain au Chocolat', desc: 'Dark chocolate filled delight', price: 'KES 220' },
    ],
    desserts: [
      { name: 'Chocolate Cake Slice', desc: 'Rich & decadent dark chocolate', price: 'KES 350' },
      { name: 'Carrot Cake', desc: 'Moist with cream cheese frosting', price: 'KES 320' },
      { name: 'Lemon Tart', desc: 'Crispy pastry with tangy filling', price: 'KES 300' },
      { name: 'Tiramisu', desc: 'Classic Italian dessert', price: 'KES 400' },
    ],
    coffee: [
      { name: 'Espresso', desc: 'Strong & bold Italian style', price: 'KES 150' },
      { name: 'Cappuccino', desc: 'Creamy with perfect foam', price: 'KES 250' },
      { name: 'Latte', desc: 'Smooth espresso with steamed milk', price: 'KES 280' },
      { name: 'Cold Brew', desc: 'Refreshing & smooth', price: 'KES 200' },
    ],
  };

  return (
    <Layout>
      <Hero
        title="🥐 Artisan Bakery"
        subtitle="Baked fresh daily • Crafted with passion"
      />

      {/* BUG FIX: Previously all 4 sections were bgType="light", creating a monotonous page.
          Now alternating light/dark for visual rhythm. */}
      <Section title="Fresh Breads" subtitle="" bgType="light">
        <div className="grid-2">
          {bakeryItems.breads.map((item, idx) => (
            <MenuItem key={idx} name={item.name} description={item.desc} price={item.price} />
          ))}
        </div>
      </Section>

      <Section title="Pastries" subtitle="" bgType="dark">
        <div className="grid-2">
          {bakeryItems.pastries.map((item, idx) => (
            <MenuItem key={idx} name={item.name} description={item.desc} price={item.price} />
          ))}
        </div>
      </Section>

      <Section title="Desserts" subtitle="" bgType="light">
        <div className="grid-2">
          {bakeryItems.desserts.map((item, idx) => (
            <MenuItem key={idx} name={item.name} description={item.desc} price={item.price} />
          ))}
        </div>
      </Section>

      <Section title="☕ Coffee Pairings" subtitle="" bgType="dark">
        <div className="grid-2">
          {bakeryItems.coffee.map((item, idx) => (
            <MenuItem key={idx} name={item.name} description={item.desc} price={item.price} />
          ))}
        </div>
      </Section>

      {/* BUG FIX: Was a dead <button>. Now links to WhatsApp for pre-orders. */}
      <Section title="Order Fresh-Baked Goods" subtitle="Order ahead and pick up warm from the oven" bgType="amber">
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://wa.me/254113555777?text=Hi%2C%20I'd%20like%20to%20pre-order%20from%20the%20Kraftory%20Bakery%20🥐"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Pre-Order via WhatsApp
          </a>
        </div>
      </Section>
    </Layout>
  );
}
