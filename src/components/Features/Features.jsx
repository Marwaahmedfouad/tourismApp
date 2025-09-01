import React from 'react';
import { featuresData } from '../../data/features';
import './Features.css';

const Features = () => {
  return (
    <section className="features section">
      <h2 className="section-title">Why Choose WanderLust</h2>
      <div className="features-grid">
        {featuresData.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;