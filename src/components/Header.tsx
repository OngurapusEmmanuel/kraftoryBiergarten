import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './navBar.css';
import logo from '../assets/logo1.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuDropOpen, setMenuDropOpen] = useState(false);
  const { pathname } = useLocation();

  // BUG FIX: Close mobile nav when any link is clicked.
  const handleLinkClick = () => {
    setMenuOpen(false);
    setMenuDropOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header>
      <div className="container">
        <nav className="header-row">
          {/* Logo */}
          <Link to="/" className="logo-link" onClick={handleLinkClick}>
            <img src={logo} alt="Kraftory Biergarten logo" className="logo-img" />
            <div>
              <h1 className="site-title">Kraftory</h1>
              <p className="site-sub">Biergarten</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-expanded={menuOpen}>
            <Link
              to="/"
              onClick={handleLinkClick}
              className={isActive('/') ? 'nav-active' : ''}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className={isActive('/about') ? 'nav-active' : ''}
            >
              About
            </Link>

            {/* Menu dropdown — toggle on click for touch compatibility */}
            <div className={`nav-item dropdown ${menuDropOpen ? 'drop-open' : ''}`}>
              <span
                className="dropdown-title"
                onClick={() => setMenuDropOpen(o => !o)}
                role="button"
                aria-expanded={menuDropOpen}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setMenuDropOpen(o => !o)}
              >
                Menu ▾
              </span>
              <div className="dropdown-content">
                <Link to="/menu" onClick={handleLinkClick}>Food Menu</Link>
                {/* <Link to="/bakery" onClick={handleLinkClick}>Bakery</Link> */}
                <Link to="/beer" onClick={handleLinkClick}>Beer &amp; Drinks</Link>
              </div>
            </div>

            <Link
              to="/padel"
              onClick={handleLinkClick}
              className={isActive('/padel') ? 'nav-active' : ''}
            >
              Padel &amp; Sports
            </Link>
            <Link
              to="/events"
              onClick={handleLinkClick}
              className={isActive('/events') ? 'nav-active' : ''}
            >
              Events &amp; Venue
            </Link>
            {/* <Link
              to="/gallery"
              onClick={handleLinkClick}
              className={isActive('/gallery') ? 'nav-active' : ''}
            >
              Gallery
            </Link> */}
            <Link to="/contact" className="nav-button" onClick={handleLinkClick}>
              Contact & Reservations
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </div>
    </header>
  );
}
