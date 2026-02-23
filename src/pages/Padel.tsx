import { useEffect } from 'react';
import "./Padel.css";
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { useSEO } from '../utils/useSEO';
import premiumCourtImg from '../assets/padel images/premium court.jpg';
import coachingImg from '../assets/padel images/coach.jpg';
import equipmentImg from '../assets/padel images/equipment.jpg';

export default function PadelEvents() {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSEO({
      title: 'Padel & Events',
      description: 'Book padel courts and discover upcoming events at Kraftory Biergarten. Live jazz, tournaments, beer tastings, and social gatherings every week in Nairobi.',
      keywords: 'padel courts, events, tournaments, social, Nairobi, sports',
      canonical: 'https://kraftory.com/padel',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Kraftory Biergarten - Padel & Events',
        description: 'Professional padel courts and event venue',
        url: 'https://kraftory.com/padel',
        areaServed: 'Nairobi, Kenya'
      }
    });
  }, []);
  const events = [
    { title: 'Live Jazz Nights', date: 'Every Friday 8 PM', desc: 'Local jazz musicians performing live' },
    { title: 'Weekend Brunch', date: 'Saturdays & Sundays 10 AM', desc: 'Relaxed morning with fresh pastries & cocktails' },
    { title: 'Padel Tournaments', date: 'Monthly', desc: 'Competitive matches with prizes' },
    { title: 'Beer Tasting Event', date: 'Second Wednesday', desc: 'Explore craft beers from local breweries' },
    { title: 'Comedy Night', date: 'Last Saturday', desc: 'Stand-up comedy from local talent' },
    { title: 'Sunset Padel Socials', date: 'Thursdays 5 PM', desc: 'Play & mingles at our padel courts' },
  ];

  const features = [
    { icon: '', title: 'Modern Courts', desc: 'Latest padel facilities in Nairobi' },
    { icon: '', title: 'Community', desc: 'Connect with padel enthusiasts' },
    { icon: '', title: 'Social Hub', desc: 'Events every week • Always something happening' },
  ];

  return (
    <Layout>
      <Hero
        title="Padel & Events"
        subtitle="Play hard • Socialize freely • Make memories"
      />

      <Section title="Professional Padel Courts" subtitle="" bgType="dark">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
  {
    title: '3 Premium Courts',
    desc: 'State-of-the-art facilities',
    image: premiumCourtImg
  },
  {
    title: 'Professional Coaching',
    desc: 'Available for all skill levels',
    image: coachingImg
  },
  {
    title: 'Equipment Rental',
    desc: 'Rackets & balls included',
    image: equipmentImg
  },
  {
    title: 'Flexible Booking',
    desc: 'Book online or through app',
    image: premiumCourtImg
  },
].map((item, idx) => (
  <Card
    key={idx}
    title={item.title}
    description={item.desc}
    image={item.image}
  />
))}
        </div>
        <div className="text-align-center mt-6">
<a
  href="https://playtomic.com/clubs/kraftory-biergarten-padel"
  className="btn btn-secondary"
  target="_parent"
  rel="noopener"
>
  Book a Court →
</a>        </div>
      </Section>

      <Section title="Court Rental Pricing" subtitle="" bgType="light">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--craft-amber)', background: 'var(--charcoal)', color: 'var(--off-white)' }}>
                <th style={{ padding: '1rem', fontWeight: 'bold' }}>Time Slot</th>
                <th style={{ padding: '1rem', fontWeight: 'bold' }}>Regular</th>
                <th style={{ padding: '1rem', fontWeight: 'bold' }}>Peak Hours</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: 'Morning (6 AM - 12 PM)', regular: 'KES 4,000/hr', peak: 'KES 4,000/hr' },
                { time: 'Afternoon (12 PM - 5 PM)', regular: 'KES 4,000/hr', peak: 'KES 4,000/hr' },
                { time: 'Evening (5 PM - 10 PM)', regular: 'KES 4,000/hr', peak: 'KES 4,000/hr' },
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--craft-amber)' }}>
                  <td style={{ padding: '1rem' }}>{row.time}</td>
                  <td style={{ padding: '1rem', color: 'var(--craft-amber)', fontWeight: 'bold' }}>{row.regular}</td>
                  <td style={{ padding: '1rem', color: 'var(--craft-amber)', fontWeight: 'bold' }}>{row.peak}</td>
                </tr>
              ))}
            </tbody>
          </table>

{/* Scrolling Voucher Banner */}

<div className="voucher-ticker">
  <div className="voucher-track">

    Kraftory Biergarten and Padel is the perfect place to play, relax, and connect!
    &nbsp;&nbsp;•&nbsp;&nbsp;
    Get KSh 1,000 F&B voucher for 1-hour bookings
    &nbsp;&nbsp;•&nbsp;&nbsp;
    Get KSh 1,500 voucher for 1.5-hour bookings
    &nbsp;&nbsp;•&nbsp;&nbsp;
    Voucher redeemable at the Biergarten restaurant on food & drinks
    &nbsp;&nbsp;•&nbsp;&nbsp;

  </div>
</div>
        </div>
      </Section>

      <Section title="Upcoming Events" subtitle="" bgType="light">
        <div className="grid-3">
          {events.map((event, idx) => (
            <Card 
              key={idx} 
              title={event.title} 
              description={`${event.date} • ${event.desc}`}
            />
          ))}
        </div>
      </Section>

      <Section title="Why Choose Kraftory Padel" subtitle="" bgType="amber">
        <div className="grid-3">
          {features.map((item, idx) => (
            <div key={idx} className="text-align-center">
              <div className="icon-large">{item.icon}</div>
              <h3 className="mb-2" style={{ fontWeight: 700 }}>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
