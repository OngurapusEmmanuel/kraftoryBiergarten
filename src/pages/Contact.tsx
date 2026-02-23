import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { useSEO } from '../utils/useSEO';

export default function Contact() {
  useEffect(() => {
    useSEO({
      title: 'Contact & Reservations',
      description: 'Reserve a table at Kraftory Biergarten. Contact us for event bookings, padel court reservations, and inquiries. Located on Red Hill Road, Nairobi.',
      keywords: 'contact, reservations, booking, Nairobi, padel courts',
      canonical: 'https://kraftory.com/contact',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Kraftory Biergarten - Contact',
        url: 'https://kraftory.com/contact'
      }
    });
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };
  return (
    <Layout>
      <Hero
        title="Contact & Reservations"
        subtitle="Get in touch or book your experience"
      />

      <Section title="" subtitle="" bgType="light">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 className="text-lg" style={{ fontWeight: 700, color: 'var(--craft-amber)', marginBottom: '1rem' }}>
              📍 Location
            </h3>
            <p className="lead">
              Off Redhill Road<br />
              <span className="muted"> Next to Commission of University Education, Nairobi, Kenya</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg" style={{ fontWeight: 700, color: 'var(--craft-amber)', marginBottom: '1rem' }}>
              ☎️ Contact Info
            </h3>
            <p style={{ marginBottom: '0.5rem' }}>
              <a href="tel:+254113555777" style={{ color: 'var(--craft-amber)', textDecoration: 'none' }}>
                +254 113 555 777
              </a>
            </p>
            <p>
              <a href="mailto:info@kraftorybiergarten.com" style={{ color: 'var(--craft-amber)', textDecoration: 'none' }}>
                info@kraftorybiergarten.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg" style={{ fontWeight: 700, color: 'var(--craft-amber)', marginBottom: '1rem' }}>
              🕐 Hours
            </h3>
            <div className="lead">
              <p>Mon-Sun: 6 AM - 11 PM</p>
              
            </div>
          </div>
        </div>
      </Section>

      <Section title="Send us a Message" subtitle="" bgType="dark">
        <div className="max-w-600">
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--warm-beige)' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="form-control"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--warm-beige)' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="form-control"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--warm-beige)' }}>
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 113 555 777"
                className="form-control"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--warm-beige)' }}>
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="">Select a subject</option>
                <option value="inquiry">General Inquiry</option>
                <option value="events">Events & Catering</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--warm-beige)' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={5}
                required
                className="form-control"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              Send Message
            </button>
          </form>
          <p className="text-sm" style={{ color: 'var(--warm-beige)', textAlign: 'center', marginTop: '1rem' }}>
            We'll respond to your message within 24 hours
          </p>
        </div>
      </Section>

      <Section title="📍 Find Us On The Map" subtitle="" bgType="dark">
        <div className="rounded-lg" style={{ width: '100%', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5365001510845!2d36.79517577395949!3d-1.2258177987624916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172fa40abbaf%3A0xe34087d17f1fea13!2sKraftory%20Biergarten!5e1!3m2!1sen!2ske!4v1754983508785!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 'none' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kraftory Biergarten Location"
          ></iframe>
        </div>
      </Section>

      <Section title="Make a Reservation" subtitle="" bgType="amber">
        <div className="text-align-center">
          <p className="text-lg" style={{ marginBottom: '1.5rem', color: 'var(--charcoal)' }}>
            Book your table directly with our online reservation system
          </p>
          <a 
            href="https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi?source=iframe" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button className="btn btn-secondary">Reserve Your Table</button>
          </a>
        </div>
      </Section>

      <Section title="Quick Contact" subtitle="Prefer to chat? Reach out to us on WhatsApp" bgType="amber">
        <div className="text-align-center">
          <a href="https://wa.me/254113555777" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <button className="btn btn-secondary">💬 Message on WhatsApp</button>
          </a>
        </div>
      </Section>

      <Section title="Follow Us" subtitle="" bgType="light">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {[
            { name: 'Instagram', url: 'https://www.instagram.com/kraftorybiergarten/' },
            { name: 'Twitter', url: 'https://twitter.com/kraftorybier' }
          ].map((p) => (
            <a key={p.name} href={p.url} target={p.url !== '#' ? '_blank' : undefined} rel={p.url !== '#' ? 'noopener noreferrer' : undefined} style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary btn-inline">
                {p.name}
              </button>
            </a>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
