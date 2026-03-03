import { useState } from 'react';
import './Card.css';

interface CardProps {
  icon?: string;
  title: string;
  description: string;
  image?: string; // ✅ NEW
  backContent?: React.ReactNode; // extra info for flip side
  children?: React.ReactNode;
}

export default function Card({
  icon,
  title,
  description,
  image,
  backContent,
  children
}: CardProps) {
  const [flipped, setFlipped] = useState(false);

  // click toggles flip (touch + persistent state)
  const handleClick = () => {
    if (backContent) setFlipped(f => !f);
  };

  const hasBack = Boolean(backContent);

  return (
    <div
      className={
        `card ${image ? 'card-with-image' : ''}` +
        (hasBack ? ' card-flippable' : '') +
        (flipped ? ' flipped' : '')
      }
      style={image ? { backgroundImage: `url(${image})` } : {}}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          {/* Overlay only if image exists */}
          {image && <div className="card-overlay" />}

          <div className="card-content">
            {!image && icon && (
              <div className="icon-large">{icon}</div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
            {children}
          </div>
        </div>

        {hasBack && (
          <div className="card-back">
            <div className="card-content">
              {backContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}