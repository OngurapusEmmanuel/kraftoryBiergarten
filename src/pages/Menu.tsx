import { useEffect } from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import MenuItem from '../components/MenuItem';
import { useSEO } from '../utils/useSEO';

export default function Menu() {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSEO({
      title: 'Menu',
      description: 'Browse Kraftory Biergarten\'s full menu featuring craft beer, German-inspired cuisine, artisan bakery items, signature cocktails, and more.',
      keywords: 'menu, food, craft beer, cocktails, bakery, Nairobi',
      canonical: 'https://kraftory.com/menu',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Kraftory Biergarten - Menu',
        description: 'Our full menu with food, beverages, and bakery items',
        url: 'https://kraftory.com/menu'
      }
    });
  }, []);
  const featuredItems = [
    { name: 'Atlantic Salmon Steak', desc: 'Crispy-skinned salmon on creamed spinach, served with lemon beurre blanc', price: 'KES 3,500' },
    { name: 'Chicken Schnitzel', desc: 'Crispy beer-battered chicken fried golden, topped with mango aioli and bacon', price: 'KES 1,800' },
    { name: 'Classic Margherita Pizza', desc: 'Fresh mozzarella, basil leaves and zesty pomodoro sauce on crispy crust', price: 'KES 1,300' },
  ];

 

  return (
    <Layout>
      <Hero
        title="Our Menu"
        subtitle="Crafted with passion, served with flair"
      />

      <Section title="Featured Dishes" subtitle="Sample our signature creations" bgType="light">
        <div className="grid-3">
          {featuredItems.map((item, idx) => (
            <MenuItem key={idx} name={item.name} description={item.desc} price={item.price} />
          ))}
        </div>
        <div className="text-align-center mt-6">
          <a href="https://kraftory-biergarten.ubuntu.click/menu.html?menuId=d5e8eae0-cc8c-4bd2-9d0d-12fcad432180&title=Kraftory%20Food%20Menu" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Full Food Menu
          </a>
        </div>
      </Section>

    </Layout>
  );
}
