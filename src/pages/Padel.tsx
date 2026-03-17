import { useEffect } from 'react';
import './Padel.css'
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { useSEO } from '../utils/useSEO';
import premiumCourtImg from '../assets/padel images/premium court.jpg';
import coachingImg from '../assets/padel images/coach.jpg';
import equipmentImg from '../assets/padel images/equipment.jpg';
import courtsImg from '../assets/padel images/courts.jpg';

// Back-face images for flipped cards
import courtBackImg from '../assets/padel images/DSC03405.jpg';
import coachingBackImg from '../assets/padel images/IMG-20251003-WA0042.jpg';
import equipmentBackImg from '../assets/padel images/DSC03538.jpg';
import bookingBackImg from '../assets/padel images/padel.jpg';

export default function PadelEvents() {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSEO({
      title: 'Padel & Sports',
      description: 'Book padel courts at Kraftory Biergarten Nairobi. 3 premium courts, professional coaching, equipment hire, and KES 1,000 F&B vouchers with every booking.',
      keywords: 'padel courts Nairobi, padel booking Kenya, padel Red Hill Road, sports Nairobi',
      path: '/padel',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SportsActivityLocation',
        name: 'Kraftory Biergarten — Padel Courts',
        description: '3 professional padel courts with coaching and equipment hire',
        url: 'https://kraftorybiergarten.com/padel',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Off Red Hill Road',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
        },
        telephone: '+254113555777',
        priceRange: 'KES 4,000/hr',
      },
    });
  }, []);

  const events = [
    { title: 'Live Jazz Nights', date: 'Every Friday 8 PM', desc: 'Local jazz musicians performing live' },
    { title: 'Weekend Brunch', date: 'Saturdays & Sundays 10 AM', desc: 'Relaxed morning with fresh pastries & cocktails' },
    { title: 'Padel Tournaments', date: 'Monthly', desc: 'Competitive matches with prizes' },
    { title: 'Beer Tasting Event', date: 'Second Wednesday', desc: 'Explore craft beers from local breweries' },
    { title: 'Comedy Night', date: 'Last Saturday', desc: 'Stand-up comedy from local talent' },
    { title: 'Sunset Padel Socials', date: 'Thursdays 5 PM', desc: 'Play & mingle at our padel courts' },
  ];

  return (
    <Layout>
      <Hero
        title="Padel & Events"
        subtitle="Play hard • Socialize freely • Make memories"
      />

      <Section title="Professional Padel Courts" subtitle="" bgType="dark">
        <div className="grid-4">
          {[
            {
              title: '3 Premium Courts',
              desc: 'State-of-the-art facilities',
              image: premiumCourtImg,
              backImage: courtBackImg,
              backContent: (
                <>
                  <h4 className="mb-2">Court Rental Pricing</h4>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <tbody>
                      {[
                        { time: 'Morning (6 AM – 12 PM)', rate: 'KES 2,000/hr', voucher: 'N/A' },
                        { time: 'Afternoon (12 PM – 5 PM)', rate: 'KES 4,000/hr', voucher: 'KES 1,000 (1 hr) / KES 1,500 (1.5 hr)' },
                        { time: 'Evening (5 PM – 10 PM)', rate: 'KES 4,000/hr', voucher: 'KES 1,000 (1 hr) / KES 1,500 (1.5 hr)' },
                      ].map((row, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid var(--craft-amber)' }}>
                          <td style={{ padding: '0.4rem 0.25rem', textAlign: 'left' }}>{row.time}</td>
                          <td style={{ padding: '0.4rem 0.25rem', fontWeight: 700 }}>{row.rate}</td>
                          <td style={{ padding: '0.4rem 0.25rem', color: 'var(--forest-green)', fontWeight: 700 }}>{row.voucher}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
                    Book via Playtomic for real-time availability — and earn a F&B voucher with every court booking.
                  </p>
                </>
              ),
            },
            {
              title: 'Professional Coaching',
              desc: 'Available for all skill levels',
              image: coachingImg,
              backImage: coachingBackImg,
              backContent: <p>Our certified coaches offer one-on-one and group lessons—perfect for beginners and tournament prep.</p>,
            },
            {
              title: 'Equipment Rental',
              desc: 'Rackets & balls included',
              image: equipmentImg,
              backImage: equipmentBackImg,
              backContent: <p>High-quality rackets and extra balls are supplied; bring your own gear if you prefer.</p>,
            },
            {
              title: 'Flexible Booking',
              desc: 'Book online via Playtomic',
              image: courtsImg,
              backImage: bookingBackImg,
              backContent: <p>Choose hourly slots or recurring reservations; cancellations are free up to 12 hours before play.</p>,
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              title={item.title}
              description={item.desc}
              image={item.image}
              backImage={item.backImage}
              backContent={item.backContent}
            />
          ))}
        </div>
        <div className="text-align-center mt-6">
          {/* BUG FIX: target was "_parent" which opens in parent frame — should be "_blank". */}
          <a
            href="https://playtomic.com/clubs/kraftory-biergarten-padel"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Court →
          </a>
        </div>
        {/* Scrolling Voucher Banner */}
          <div className="voucher-ticker">
            <div className="voucher-track">
              Kraftory Biergarten and Padel is the perfect place to play, relax, and connect!
              &nbsp;&nbsp;•&nbsp;&nbsp;
              Get KSh 1,000 F&amp;B voucher for 1-hour bookings
              &nbsp;&nbsp;•&nbsp;&nbsp;
              Get KSh 1,500 voucher for 1.5-hour bookings
              &nbsp;&nbsp;•&nbsp;&nbsp;
              Voucher redeemable at the Biergarten restaurant on food &amp; drinks
              &nbsp;&nbsp;•&nbsp;&nbsp;
            </div>
          </div>
      </Section>

      <Section title="Upcoming Events" subtitle="" bgType="dark">
        <div className="grid-2" id='eventscard'>
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
          {[
            { icon: '🏟️', title: 'Modern Courts', desc: 'Latest padel facilities in Nairobi' },
            { icon: '🤝', title: 'Community', desc: 'Connect with padel enthusiasts of all levels' },
            { icon: '🎉', title: 'Social Hub', desc: 'Events every week — always something happening' },
          ].map((item, idx) => (
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
