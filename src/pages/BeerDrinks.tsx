import { useEffect } from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import MenuItem from '../components/MenuItem';
import { useSEO } from '../utils/useSEO';

export default function BeerDrinks() {
  useEffect(() => {
    useSEO({
      title: 'Beer & Drinks',
      description: 'Explore Kraftory\'s premium craft beer selection, signature cocktails, and non-alcoholic beverages. Enjoy happy hour specials 5-7 PM daily.',
      keywords: 'craft beer, cocktails, drinks, happy hour, Nairobi bar',
      canonical: 'https://kraftory.com/beer',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Kraftory Biergarten - Beer & Drinks',
        description: 'Craft beer and beverage menu with happy hour specials',
        url: 'https://kraftory.com/beer'
      }
    });
  }, []);
  const featuredDrinks = [
    { name: 'Tusker Lager', desc: 'Kenya\'s finest premium lager with a crisp, refreshing finish', price: 'KES 450' },
    { name: 'Cappuccino', desc: 'Rich espresso topped with velvety steamed milk foam for the perfect coffee indulgence', price: 'KES 350' },
    { name: 'Espresso Martini', desc: 'Bold coffee meets smooth vodka and kahlúa in an elegant cocktail', price: 'KES 1,100' },
  ];

  return (
    <Layout>
      <Hero
        title="🍺 Beer & Drinks"
        subtitle="Craft beverages for every palate"
      />

      <Section title="Happy Hour" subtitle="5 PM - 7 PM Daily • 30% off all beers & cocktails" bgType="green">
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            Monday - Friday exclusive deals on our premium selection.
          </p>
          <button className="btn btn-primary">Reserve Your Table</button>
        </div>
      </Section>

      <Section title="Featured Selections" subtitle="A taste of our premium beverage collection" bgType="light">
        <div className="grid-3">
          {featuredDrinks.map((item, idx) => (
            <MenuItem key={idx} name={item.name} description={item.desc} price={item.price} />
          ))}
        </div>
        <div className="text-align-center mt-6">
          <a href="https://kraftory-biergarten.ubuntu.click/menu.html?menuId=b0a494f4-7f0f-42dc-8e09-3dcee962fd6d&title=Kraftory%20Drinks%20Menu" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Full Drinks Menu
          </a>
        </div>
      </Section>
    </Layout>
  );
}
