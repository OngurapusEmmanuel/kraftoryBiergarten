import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <h3 className="text-accent">Kraftory</h3>
            <p className="text-secondary">Craft Beer • Great Food • Good Times</p>
            <p className="text-secondary text-sm" style={{ marginTop: '1rem' }}>
              Off Red Hill Road, Nairobi, Kenya
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent">Quick Links</h4>
            <Link to="/">Home</Link>
            <a href="https://kraftory-biergarten.ubuntu.click/menu.html?menuId=d5e8eae0-cc8c-4bd2-9d0d-12fcad432180&title=Kraftory%20Food%20Menu"
              target="_blank" rel="noopener noreferrer">Menu</a>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About Us</Link>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-accent">Experience</h4>
            <a href="https://kraftory-biergarten.ubuntu.click/menu.html?menuId=b0a494f4-7f0f-42dc-8e09-3dcee962fd6d&title=Kraftory%20Drinks%20Menu"
              target="_blank" rel="noopener noreferrer">Craft Beer</a>
            {/* <Link to="/bakery">Bakery</Link> */}
            <Link to="/padel">Padel Courts</Link>
            <Link to="/events">Events &amp; Venue</Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent">Contact</h4>
            <p className="text-secondary" style={{ marginBottom: '0.5rem' }}>
              <a href="tel:+254113555777" style={{ color: 'var(--warm-beige)' }}>
                +254 113 555 777
              </a>
            </p>
            <p className="text-secondary" style={{ marginBottom: '1rem' }}>
              <a href="mailto:info@kraftorybiergarten.com" style={{ color: 'var(--warm-beige)' }}>
                info@kraftorybiergarten.com
              </a>
            </p>
            {/* BUG FIX: Social links now have real URLs instead of href="#" placeholders */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://twitter.com/kraftorybier" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--craft-amber)', fontSize: '1.1rem' }}>𝕏</a>
              <a href="https://www.instagram.com/kraftorybiergarten/" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--craft-amber)', fontSize: '1.1rem' }}>IG</a>
              <a href="https://wa.me/254113555777" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--craft-amber)', fontSize: '1.1rem' }}>WA</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kraftory Biergarten. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
