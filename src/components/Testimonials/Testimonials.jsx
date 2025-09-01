import React from 'react';
import { testimonialsData } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
;

  return (
    <section className="testimonials section">
      <h2 className="section-title">What Our Travelers Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="testimonial-image"
              loading="lazy"
            />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author">{testimonial.name}</div>
            <div className="testimonial-location">{testimonial.location}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;