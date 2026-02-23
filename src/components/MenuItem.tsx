interface MenuItemProps {

  name: string;

  description: string;

  price: string;

  image?: string;

}

import './MenuItem.css';

export default function MenuItem({

  name,

  description,

  price,

  image

}: MenuItemProps) {

  return (

    <div
      className={`menu-item ${image ? 'menu-item-image' : ''}`}
      style={
        image
          ? { backgroundImage: `url(${image})` }
          : {}
      }
    >

      {image && <div className="menu-overlay" />}

      <div className="menu-content">

        <h3>{name}</h3>

        <p>{description}</p>

        <span className="price">{price}</span>

      </div>

    </div>

  );

}