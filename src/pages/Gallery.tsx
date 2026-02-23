import { useEffect } from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import GalleryComponent from '../components/Gallery';
import { useSEO } from '../utils/useSEO';

export default function Gallery() {
  useEffect(() => {
    useSEO({
      title: 'Gallery',
      description: 'View stunning photos of Kraftory Biergarten featuring craft beer, gourmet food, events, and professional padel courts. Follow our community moments.',
      keywords: 'gallery, photos, events, food, beer, padel, Nairobi',
      canonical: 'https://kraftory.com/gallery',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Kraftory Biergarten - Gallery',
        description: 'Photo gallery of our venue, food, events, and padel courts',
        url: 'https://kraftory.com/gallery'
      }
    });
  }, []);
  const galleryItems = [
    { id: 1, category: 'food', title: 'Grilled Steak Platter', image: '🍖' },
    { id: 2, category: 'food', title: 'Seafood Medley', image: '🦞' },
    { id: 3, category: 'food', title: 'Gourmet Burger', image: '🍔' },
    { id: 4, category: 'food', title: 'Fresh Pasta', image: '🍝' },
    { id: 5, category: 'drinks', title: 'Craft Beer Flight', image: '🍺' },
    { id: 6, category: 'drinks', title: 'Signature Cocktail', image: '🍹' },
    { id: 7, category: 'drinks', title: 'Fresh Lemonade', image: '🥤' },
    { id: 8, category: 'drinks', title: 'Coffee Art', image: '☕' },
    { id: 9, category: 'events', title: 'Live Jazz Performance', image: '🎺' },
    { id: 10, category: 'events', title: 'Weekend Brunch', image: '🥐' },
    { id: 11, category: 'events', title: 'Comedy Night', image: '🎭' },
    { id: 12, category: 'events', title: 'Padel Tournament', image: '🏆' },
    { id: 13, category: 'padel', title: 'Padel Doubles Match', image: '🎾' },
    { id: 14, category: 'padel', title: 'Evening Play Session', image: '🌅' },
    { id: 15, category: 'padel', title: 'Court Community', image: '👥' },
    { id: 16, category: 'padel', title: 'Professional Training', image: '🏅' },
  ];

  return (
    <Layout>
      <Hero
        title="Gallery"
        subtitle="Moments from Kraftory"
      />

      <Section title="" subtitle="" bgType="light">
        <GalleryComponent items={galleryItems} />

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ marginBottom: '1rem', color: 'var(--gray-600)' }}>
            Tag us in your Kraftory moments #KraftoryBiergarten
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#" className="btn btn-secondary">Facebook</a>
            <a href="#" className="btn btn-secondary">Instagram</a>
            <a href="#" className="btn btn-secondary">Twitter</a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
