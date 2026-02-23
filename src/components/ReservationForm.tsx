import { useState } from 'react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
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
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div style={{
      backgroundColor: 'var(--charcoal)',
      color: 'var(--off-white)',
      padding: '2rem',
      borderRadius: '0.5rem'
    }}>
      <h2 style={{ color: 'var(--craft-amber)', marginBottom: '1.5rem' }}>Book a Table</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="form-label">Name</label>
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

        {/* Email */}
        <div>
          <label className="form-label">Email</label>
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

        {/* Phone */}
        <div>
          <label className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
              placeholder="+254 113 555 777"
            required
            className="form-control"
          />
        </div>

        {/* Date */}
        <div>
          <label className="form-label">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        {/* Time & Guests Row */}
        <div className="form-row cols-2">
          <div>
            <label className="form-label">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="form-control"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="form-label">Special Requests</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any special requests or preferences?"
            className="form-control"
            style={{ resize: 'vertical' }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
          Confirm Reservation
        </button>
      </form>

      <p className="text-xs" style={{ color: 'var(--warm-beige)', textAlign: 'center', marginTop: '1rem' }}>
        We'll confirm your reservation via email and phone within 2 hours
      </p>
    </div>
  );
}
