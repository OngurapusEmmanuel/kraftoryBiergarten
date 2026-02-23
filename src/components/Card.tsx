interface CardProps {
  icon?: string;
  title: string;
  description: string;
  image?: string; // ✅ NEW
  children?: React.ReactNode;
}

import './Card.css';

export default function Card({
  icon,
  title,
  description,
  image,
  children
}: CardProps) {

  return (

    <div
      className={`card ${image ? 'card-with-image' : ''}`}
      style={
        image
          ? { backgroundImage: `url(${image})` }
          : {}
      }
    >

      {/* Overlay only if image exists */}

      {image && <div className="card-overlay" />}

      <div className="card-content">

        {!image && icon && (
          <div className="icon-large">
            {icon}
          </div>
        )}

        <h3>{title}</h3>

        <p>{description}</p>

        {children}

      </div>

    </div>

  );

}