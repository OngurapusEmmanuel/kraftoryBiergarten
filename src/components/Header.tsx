import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navBar.css';
import logo from '../assets/logo.jpg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="header-row">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <img src={logo} alt="Kraftory Logo" className="logo-img" />
            <div>
              <h1 className="site-title">Kraftory</h1>
              <p className="site-sub">Biergarten</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-expanded={menuOpen}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div className="nav-item dropdown">
              <span className="dropdown-title">Menu ▾</span>

              <div className="dropdown-content">
                <Link to="/menu">Food Menu</Link>
                
                <Link to="/bakery">Bakery</Link>
                <Link to="/beer">Beer & Drinks</Link>
              </div>
            </div>
            <Link to="/padel">Padel & Sports</Link>
            <Link to="/events">Events & Venue</Link>
            
            <Link to="/contact" className="nav-button">Book</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </div>
    </header>
  );
}
