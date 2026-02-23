import { useEffect } from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { useSEO } from '../utils/useSEO';

export default function Events() {
  useEffect(() => {
    useSEO({
      title: 'Events & Venues',
      description: 'Host your corporate events, birthday parties, and special occasions at Kraftory Biergarten. Multiple venue spaces and customizable packages available.',
      keywords: 'events, parties, corporate, birthday, venues, event venue, Nairobi',
      canonical: 'https://kraftory.com/events',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Kraftory Biergarten - Events',
        description: 'Event venue and party space in Nairobi',
        url: 'https://kraftory.com/events',
        areaServed: 'Nairobi, Kenya'
      }
    });
  }, []);
  const eventTypes = [
    { icon: '🎂', title: 'Birthday Parties', desc: 'Celebrate in style with friends at our vibrant venue' },
    { icon: '🎉', title: 'Corporate Parties', desc: 'Impress clients and teams with premium hospitality' },
    { icon: '👥', title: 'Team Building', desc: 'Strengthen bonds with padel games and activities' },
    { icon: '🤝', title: 'Networking Events', desc: 'Connect with peers over craft beer and great food' },
    { icon: '🚀', title: 'Product Launches', desc: 'Unveil your brand in an unforgettable setting' },
    { icon: '🎵', title: 'Live Music Events', desc: 'Host concerts and performances with premium sound' },
  ];

  const venueSpaces = [
    { icon: '🌿', name: 'Outdoor Garden', capacity: '60-80 guests', vibe: 'Relaxed & scenic', desc: 'Open-air garden with natural ambiance, perfect for casual gatherings' },
    { icon: '🍺', name: 'Main Biergarten', capacity: '150-200 guests', vibe: 'Vibrant & social', desc: 'The heart of Kraftory with premium seating and shared tables' },
    { icon: '👑', name: 'Private VIP Lounge', capacity: '30-50 guests', vibe: 'Exclusive & intimate', desc: 'Upscale private space with personalized service for elite events' },
    { icon: '🍸', name: 'Bar Area', capacity: '40-60 guests', vibe: 'Lively & energetic', desc: 'Premium bar counter with craft cocktails and interactive bartending' },
  ];

  const eventPackages = [
    {
      name: 'Corporate Package',
      desc: 'Perfect for team gatherings and business events',
      includes: [
        'Reserved premium space',
        'Welcome drinks & appetizers',
        'Food platters selection',
        'Drinks package (3 hours)',
        'Event coordinator',
        'Setup & decoration',
      ]
    },
    {
      name: 'Birthday Celebration',
      desc: 'Make memories with friends and family',
      includes: [
        'Dedicated birthday space',
        'Welcome champagne toast',
        'Premium food selection',
        'Drinks package (3 hours)',
        'Birthday cake arrangement',
        'DJ or live music option',
      ]
      
    },
    {
      name: 'Networking Plus',
      desc: 'Connect, collaborate, celebrate',
      includes: [
        'Flexible multi-space access',
        'Signature mocktails & beers',
        'Gourmet appetizer platters',
        'Premium WiFi & AV setup',
        'Networking facilitation',
        'Event photography',
      ]
    },
    {
      name: 'Deluxe VIP Experience',
      desc: 'Luxury event for discerning hosts',
      includes: [
        'Exclusive VIP lounge access',
        'Premium spirits & champagne',
        'Chef-curated menu',
        'Personal event manager',
        'Valet parking',
        'Professional photography & videography',
      ]
    },
  ];

  return (
    <Layout>
      <Hero
        title="Host Your Event at Kraftory 🍻"
        subtitle="Create unforgettable moments in Nairobi's premier event venue"
        buttons={[
          { label: 'Enquire Now', url: '/contact' },
        ]}
      />

      <Section title="Event Types We Host" subtitle="From intimate gatherings to grand celebrations" bgType="light">
        <div className="grid-3">
          {eventTypes.map((event, idx) => (
            <Card key={idx} icon={event.icon} title={event.title} description={event.desc} />
          ))}
        </div>
      </Section>

      <Section title="Our Venue Spaces" subtitle="Choose the perfect setting for your event" bgType="dark">
        <div className="grid-2">
          {venueSpaces.map((space, idx) => (
            <div key={idx} className="panel" style={{ textAlign: 'center' }}>
              <div className="icon-large">{space.icon}</div>
              <h3 className="text-lg" style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--charcoal)' }}>
                {space.name}
              </h3>
              <p className="text-sm text-accent" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                Capacity: {space.capacity}
              </p>
              <p className="text-sm" style={{ color: 'var(--forest-green)', fontWeight: 700, marginBottom: '1rem' }}>
                Vibe: {space.vibe}
              </p>
              <p className="muted" style={{ lineHeight: '1.6' }}>
                {space.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Event Packages" subtitle="Tailored solutions for every celebration" bgType="light">
        <div className="grid-2">
          {eventPackages.map((pkg, idx) => (
            <div key={idx} className="panel-dark">
              <h3 className="text-lg" style={{ fontWeight: 700, color: 'var(--craft-amber)', marginBottom: '0.5rem' }}>
                {pkg.name}
              </h3>
              <p className="text-sm" style={{ color: 'var(--warm-beige)', marginBottom: '1.5rem' }}>
                {pkg.desc}
              </p>
              <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                <p className="text-xs" style={{ fontWeight: 700, color: 'var(--craft-amber)', marginBottom: '0.75rem' }}>
                  INCLUDES:
                </p>
                <ul className="text-sm" style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  {pkg.includes.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--warm-beige)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-lg" style={{
                fontWeight: 'bold',
                color: 'var(--craft-amber)',
                paddingTop: '1rem',
                borderTop: '1px solid var(--craft-amber)',
              }}>
                
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Ready to Celebrate?" subtitle="Contact us today to plan your perfect event" bgType="amber">
        <div className="text-align-center">
          <p className="text-lg" style={{ marginBottom: '1.5rem', color: 'var(--charcoal)' }}>
            Our event team is ready to make your occasion unforgettable
          </p>
          <button className="btn btn-secondary">Get Event Quote</button>
        </div>
      </Section>
    </Layout>
  );
}
