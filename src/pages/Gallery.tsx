import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import GalleryComponent from '../components/Gallery';
import { useSEO } from '../utils/useSEO';

// BUG FIX: Gallery was using emoji characters as images — replaced with actual asset images.
import taps from '../assets/TAPS.jpg';
import beer from '../assets/beer.avif';
import salmon from '../assets/salmon.jpg';
import tiramisu from '../assets/tiramisu.jpg';
import conference from '../assets/conference.jpg';
import padel1 from '../assets/padel images/DSC03405.jpg';
import padel2 from '../assets/padel images/DSC03538.jpg';
import padel3 from '../assets/padel images/IMG-20251003-WA0036.jpg';
import padel4 from '../assets/padel images/IMG-20251003-WA0042.jpg';
import courts from '../assets/padel images/courts.jpg';
import coach from '../assets/padel images/coach.jpg';
import equipment from '../assets/padel images/equipment.jpg';
import padelMain from '../assets/padel images/padel.jpg';
import premiumCourt from '../assets/padel images/premium court.jpg';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    useSEO({
      title: 'Gallery',
      description: 'Browse photos of Kraftory Biergarten — our craft beer taps, gourmet food, padel courts, conference spaces, and community events in Nairobi.',
      keywords: 'Kraftory gallery, photos Nairobi biergarten, padel courts photos, craft beer bar photos',
      path: '/gallery',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: 'Kraftory Biergarten — Gallery',
        description: 'Photo gallery of our venue, food, events, and padel courts',
        url: 'https://kraftorybiergarten.com/gallery',
      },
    });

    // Close lightbox on Escape key
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const galleryItems = [
    { id: 1, category: 'drinks', title: 'Craft Beer on Tap', image: taps },
    { id: 2, category: 'drinks', title: 'Premium Beer Selection', image: beer },
    { id: 3, category: 'food', title: 'Atlantic Salmon Steak', image: salmon },
    { id: 4, category: 'food', title: 'Classic Italian Tiramisu', image: tiramisu },
    { id: 5, category: 'events', title: 'Conference & Events', image: conference },
    { id: 6, category: 'padel', title: 'Padel Courts', image: padel1 },
    { id: 7, category: 'padel', title: 'Match in Action', image: padel2 },
    { id: 8, category: 'padel', title: 'Community Play', image: padel3 },
    { id: 9, category: 'padel', title: 'Evening Session', image: padel4 },
    { id: 10, category: 'padel', title: 'Court Overview', image: courts },
    { id: 11, category: 'padel', title: 'Professional Coaching', image: coach },
    { id: 12, category: 'padel', title: 'Equipment Hire', image: equipment },
    { id: 13, category: 'padel', title: 'Padel at Kraftory', image: padelMain },
    { id: 14, category: 'padel', title: 'Premium Court', image: premiumCourt },
  ];

  return (
    <Layout>
      <Hero title="Gallery" subtitle="Moments from Kraftory" />

      <Section title="" subtitle="" bgType="light">
        <GalleryComponent items={galleryItems} onItemClick={setLightbox} />

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ marginBottom: '1rem', color: 'var(--gray-600)' }}>
            Tag us in your Kraftory moments{' '}
            <strong>#KraftoryBiergarten</strong>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/kraftorybiergarten/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Instagram
            </a>
            <a href="https://twitter.com/kraftorybier" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              𝕏 Twitter
            </a>
          </div>
        </div>
      </Section>

      {/* Lightbox modal */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }} onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              style={{ maxWidth: '100%', maxHeight: '85vh', borderRadius: '0.5rem', objectFit: 'contain' }}
            />
            <p style={{ color: 'var(--warm-beige)', textAlign: 'center', marginTop: '0.75rem', fontWeight: 600 }}>
              {lightbox.title}
            </p>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '-2.5rem', right: 0,
                background: 'none', border: 'none', color: 'white',
                fontSize: '1.75rem', cursor: 'pointer', lineHeight: 1,
              }}
              aria-label="Close image"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
