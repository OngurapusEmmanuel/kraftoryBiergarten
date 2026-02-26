import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { useEffect } from 'react';
import { useSEO } from '../utils/useSEO';

export default function NotFound() {
  useEffect(() => {
    useSEO({
      title: '404 — Page Not Found',
      description: 'The page you\'re looking for doesn\'t exist. Return to Kraftory Biergarten.',
      noindex: true,
    });
  }, []);

  return (
    <Layout>
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1rem',
      }}>
        <div>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🍺</div>
          <h1 style={{ color: 'var(--craft-amber)', marginBottom: '1rem' }}>404</h1>
          <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
          <p style={{ color: 'var(--gray-600)', marginBottom: '2rem', maxWidth: '420px', margin: '0 auto 2rem' }}>
            Looks like this page went to the bar and never came back. Let's get you somewhere good.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
