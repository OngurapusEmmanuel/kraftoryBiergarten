import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { useSEO, CANONICAL_BASE } from '../utils/useSEO';
import './About.css';

export default function About() {
  useEffect(() => {
    useSEO({
      title: 'About Us',
      description: 'Learn about Kraftory Biergarten — Nairobi\'s premier social destination. Discover our story, values, mission, and the team behind the magic.',
      keywords: 'about Kraftory, history, mission, team, Nairobi biergarten',
      path: '/about',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Kraftory Biergarten',
        description: 'Premium craft beer bar and social destination in Nairobi',
        url: CANONICAL_BASE,
        foundingDate: '2025',
        areaServed: 'Nairobi, Kenya',
        telephone: '+254113555777',
        email: 'info@kraftorybiergarten.com',
      },
    });
  }, []);

  const team = [
    {
      name: 'Sarah Kipchoge',
      role: 'Founder & CEO',
      icon: '👩‍💼',
      message:
        '"Kraftory was built on a dream — that Nairobi deserves a place where great people meet great beer. Every day I wake up grateful to see that dream alive. Welcome to our home."',
    },
    {
      name: 'James Mwangi',
      role: 'Head Chef',
      icon: '👨‍🍳',
      message:
        '"Food is my love language. I pour every bit of craft into every plate — from the sourdough we bake at dawn to the salmon we plate at sunset. Come hungry, leave happy."',
    },
    {
      name: 'Grace Omondi',
      role: 'Community Manager',
      icon: '👩‍💼',
      message:
        '"My job is to make sure you feel at home the moment you walk through our gates. The energy here is real — built by incredible people who keep coming back. You\'re one of us now."',
    },
  ];

  return (
    <Layout>
      <Hero
        title="About Kraftory"
        subtitle="Where community, craft, and culture converge"
      />

      <Section title="Our Story" subtitle="" bgType="light">
        <div className="about-story">
          <p className="text-lg lead" style={{ marginBottom: '1rem' }}>
            Kraftory Biergarten was born from a simple vision: to create a space where Nairobi's
            community gathers around great food, craft beer, and good company. Founded in 2025,
            we've grown into the heartbeat of Red Hill Road's vibrant social scene.
          </p>
          <p className="text-lg lead" style={{ marginBottom: '1rem' }}>
            Our founders believed that a biergarten should be more than just a restaurant — it
            should be a destination where memories are made, friendships deepen, and new
            connections flourish. From our artisan bakery to professional padel courts, every
            corner of Kraftory is designed to delight.
          </p>
          <p className="text-lg lead">
            Today, Kraftory stands as a testament to the power of combining authentic hospitality
            with community engagement. We're proud to be Nairobi's gathering place.
          </p>
        </div>
      </Section>

      <Section title="Our Values" subtitle="" bgType="dark">
        <div className="grid-3 values-grid">
          <Card
            title="Our Mission"
            description="To be Nairobi's premier social destination, celebrating craft, community, and cultural moments with the highest quality of hospitality."
          />
          <Card
            title="Quality First"
            description="Everything we serve — from craft beers to artisan pastries — is selected and crafted with meticulous attention to quality and detail."
          />
          <Card
            title="Community Driven"
            description="We believe in the power of bringing people together and creating spaces where everyone feels at home."
          />
        </div>
      </Section>

      <Section title="Our Journey" subtitle="" bgType="light">
        <div className="timeline">
          {[
            { year: '2025', event: 'Kraftory Opens', desc: 'Founded as a craft beer & food haven on Red Hill Road' },
            { year: '2025', event: 'Bakery Addition', desc: 'Opened our artisan bakery with fresh daily bakes' },
            { year: '2025', event: 'Padel Courts Launch', desc: 'Added professional padel courts for the community' },
            { year: '2026', event: 'Event Hub Status', desc: 'Became known for hosting major community events & corporate gatherings' },
          ].map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-bubble">{item.year.slice(-2)}</div>
              <div className="timeline-content">
                <h3 className="text-lg" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                  {item.event}
                </h3>
                <p style={{ margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FLIP CARD TEAM SECTION ── */}
      <Section title="Meet Our Team" subtitle="Hover to hear from each of us" bgType="dark">
        <div className="grid-3 team-grid">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flip-card"
              role="button"
              tabIndex={0}
              aria-label={`${member.name}, ${member.role}`}
            >
              <div className="flip-card-inner">

                {/* FRONT */}
                <div className="flip-card-front">
                  <div className="flip-card-icon">{member.icon}</div>
                  <h3>{member.name}</h3>
                  <p className="flip-card-role">{member.role}</p>
                  <span className="flip-hint">Hover to meet me →</span>
                </div>

                {/* BACK */}
                <div className="flip-card-back">
                  <div className="flip-card-icon">{member.icon}</div>
                  <p className="flip-card-message">{member.message}</p>
                  <p className="flip-card-sig">— {member.name}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Join Our Community"
        subtitle="Become part of Nairobi's most vibrant social destination"
        bgType="amber"
      >
        <div className="cta-section">
          <Link to="/contact" className="btn btn-secondary">
            Reserve Your Experience
          </Link>
        </div>
      </Section>
    </Layout>
  );
}