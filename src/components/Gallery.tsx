import { useState } from 'react';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

interface GalleryProps {
  items: GalleryItem[];
  onItemClick?: (item: { src: string; title: string }) => void;
}

export default function Gallery({ items, onItemClick }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];
  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter(item => item.category === activeFilter);

  return (
    <div>
      {/* Filter tabs */}
      <div className="tabs" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
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

      {/* Grid */}
      <div className="grid-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={{
              cursor: onItemClick ? 'pointer' : 'default',
              height: 'clamp(180px, 25vh, 280px)',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              backgroundColor: 'var(--charcoal)',
            }}
            className="gallery-item"
            onClick={() => onItemClick?.({ src: item.image, title: item.title })}
            role={onItemClick ? 'button' : undefined}
            aria-label={onItemClick ? `View ${item.title}` : undefined}
            tabIndex={onItemClick ? 0 : undefined}
            onKeyDown={(e) => e.key === 'Enter' && onItemClick?.({ src: item.image, title: item.title })}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Actual image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Hover overlay with title */}
            <div
              className="gallery-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1rem',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
                const p = e.currentTarget.querySelector('p');
                if (p) (p as HTMLElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0)';
                const p = e.currentTarget.querySelector('p');
                if (p) (p as HTMLElement).style.opacity = '0';
              }}
            >
              <p style={{
                color: 'white',
                fontWeight: 700,
                fontSize: '0.9rem',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                margin: 0,
                textShadow: '0 1px 3px rgba(0,0,0,0.8)',
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
