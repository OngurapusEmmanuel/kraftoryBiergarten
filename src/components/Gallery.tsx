import { useState } from 'react';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...new Set(items.map(item => item.category))];
  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <div>
      <div className="tabs" style={{ justifyContent: 'center' }}>
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
            style={{ textTransform: 'capitalize' }}
          >
            {category === 'all' ? 'All' : category}
          </button>
        ))}
      </div>

      <div className="grid-4">
        {filteredItems.map((item) => (
          <div key={item.id} style={{
            cursor: 'pointer',
            height: 'clamp(180px, 25vh, 300px)',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            backgroundColor: 'var(--charcoal)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            backgroundImage: `linear-gradient(135deg, var(--craft-amber) 0%, var(--forest-green) 100%)`,
            position: 'relative',
            transition: 'all 0.3s ease',
          }}
          className="gallery-item"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(2rem, 6vw, 4rem)'
            }}>
              {item.image}
            </div>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease'
            }}
            className="gallery-overlay"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
              const p = e.currentTarget.querySelector('p');
              if (p) p.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)';
              const p = e.currentTarget.querySelector('p');
              if (p) p.style.opacity = '0';
            }}
            >
              <p style={{
                color: 'var(--off-white)',
                fontSize: '1rem',
                fontWeight: 'bold',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
