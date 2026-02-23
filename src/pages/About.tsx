import { useEffect } from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { useSEO } from '../utils/useSEO';
import './About.css';

export default function About() {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSEO({
      title: 'About Us',
      description: 'Learn about Kraftory Biergarten - Nairobi\'s premier social destination. Discover our story, values, mission, and the team behind the magic since 2020.',
      keywords: 'about, history, mission, team, Nairobi, biergarten',
      canonical: 'https://kraftorybiergarten.com/about',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Kraftory Biergarten',
        description: 'Premium craft beer bar and social destination in Nairobi',
        url: 'https://kraftorybiergarten.com/about',
        foundingDate: '2020',
        areaServed: 'Nairobi, Kenya'
      }
    });
  }, []);
  return (
    <Layout>
      <Hero
        title="About Kraftory"
        subtitle="Where community, craft, and culture converge"
      />

      <Section title="Our Story" subtitle="" bgType="light">
        <div className="about-story" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <p className="text-lg lead" style={{ marginBottom: '1rem' }}>
            Kraftory Biergarten was born from a simple vision: to create a space where Nairobi's community gathers around great food, craft beer, and good company. Founded in 2025, we've grown into the heartbeat of Red Hill Road's vibrant social scene.
          </p>
          <p className="text-lg lead" style={{ marginBottom: '1rem' }}>
            Our founders believed that a biergarten should be more than just a restaurant—it should be a destination where memories are made, friendships deepen, and new connections flourish. From our humble beginnings, we've expanded to include everything from an artisan bakery to professional padel courts.
          </p>
          <p className="text-lg lead">
            Today, Kraftory stands as a testament to the power of combining authentic hospitality with community engagement. We're proud to be Nairobi's gathering place.
          </p>
        </div>
      </Section>

      <Section title="Our Values" subtitle="" bgType="dark">
        <div className="grid-3">
          <Card 
            title="Our Mission" 
            description="To be Nairobi's premier social destination, celebrating craft, community, and cultural moments with the highest quality of hospitality."
          />
          <Card 
            title="Quality First" 
            description="Everything we serve—from craft beers to artisan pastries—is selected and crafted with meticulous attention to quality and detail."
          />
          <Card 
            title="Community Driven" 
            description="We believe in the power of bringing people together and creating spaces where everyone feels at home."
          />
        </div>
      </Section>

      <Section title="Our Journey" subtitle="" bgType="light">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {[
            { year: '2020', event: 'Kraftory Opens', desc: 'Founded as a craft beer haven in Red Hill Road' },
            { year: '2021', event: 'Bakery Addition', desc: 'Opened our artisan bakery with fresh daily bakes' },
            { year: '2022', event: 'Padel Courts Launch', desc: 'Added professional padel courts for the community' },
            { year: '2023', event: 'Event Hub Status', desc: 'Became known for hosting major community events' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6" style={{ alignItems: 'flex-start' }}>
              <div className="timeline-bubble">{item.year.slice(-2)}</div>
              <div>
                <h3 className="text-lg" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                  {item.event}
                </h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Meet Our Team Leadership" subtitle="" bgType="dark">
        <div className="grid-3">
          {[
            { name: 'Sarah Kipchoge', role: 'Founder & CEO', icon: '👩‍💼' },
            { name: 'James Mwangi', role: 'Head Chef', icon: '👨‍🍳' },
            { name: 'Grace Omondi', role: 'Community Manager', icon: '👩‍💼' },
          ].map((member, idx) => (
            <Card key={idx} title={member.name} description={member.role} />
          ))}
        </div>
      </Section>

      <Section title="Join Our Community" subtitle="Become part of Nairobi's most vibrant social destination" bgType="amber">
        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-secondary">Reserve Your Experience</button>
        </div>
      </Section>
    </Layout>
  );
}
