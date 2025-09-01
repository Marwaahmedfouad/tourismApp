import React from 'react';
import { destinationsData } from '../../data/destinations';
import './Destinations.css';

const Destinations = () => {
  const handleExplore = (destination) => {
    console.log('Exploring:', destination.name);
    alert(`Exploring ${destination.name}, ${destination.country}! This would redirect to the destination details page.`);
  };

  const handleImageError = (e) => {
    e.target.style.backgroundColor = '#f0f0f0';
    e.target.style.display = 'flex';
    e.target.style.alignItems = 'center';
    e.target.style.justifyContent = 'center';
    e.target.innerHTML = '<span style="color: #666;">Image Loading...</span>';
  };

  return (
    <section className="section" id="destinations">
      <h2 className="section-title">Popular Destinations</h2>
      <div className="destinations-grid">
        {destinationsData.map(destination => (
          <div key={destination.id} className="destination-card">
        <div class="destination-layer">
             <img 
              src={destination.image} 
              alt={`${destination.name}, ${destination.country}`}
              className="destination-image"
              loading="lazy"
              onError={handleImageError}
            />
            </div>
            <div className="destination-info">
              <div className="destination-header">
                <div>
                  <h3 className="destination-name">{destination.name}</h3>
                  <p className="destination-country">{destination.country}</p>
                </div>
                <div className="destination-price">
                  From ${destination.price}
                </div>
              </div>
              <p className="destination-description">
                {destination.description}
              </p>
              <button 
                className="destination-button"
                onClick={() => handleExplore(destination)}
                type="button"
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;