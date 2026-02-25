import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
// import Layout from "./components/Layout";
import Preloader from './components/VideoPreloader';
import { useState, useEffect } from 'react';
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

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

// export default App
