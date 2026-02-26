import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Preloader from './components/VideoPreloader';
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';
// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Bakery from './pages/Bakery';
import BeerDrinks from './pages/BeerDrinks';
import Padel from './pages/Padel';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import NotFound from './pages/NotFound';

export default function App() {
  const [loading, setLoading] = useState(true);

  // BUG FIX: Pass onFinish so the preloader can signal when the video ends,
  // rather than relying on a hardcoded 6-second timer.
  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/beer" element={<BeerDrinks />} />
        <Route path="/padel" element={<Padel />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
