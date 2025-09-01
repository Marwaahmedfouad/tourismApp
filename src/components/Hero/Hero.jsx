// import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  // const [searchData, setSearchData] = useState({
  //   destination: '',
  //   checkin: '',
  //   checkout: '',
  //   guests: '1'
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setSearchData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (!searchData.destination || !searchData.checkin || !searchData.checkout) {
  //     alert('Please fill in all required fields');
  //     return;
  //   }
  //   console.log('Search data:', searchData);
  //   alert(`Searching for ${searchData.destination} from ${searchData.checkin} to ${searchData.checkout} for ${searchData.guests} guest(s)`);
  // };

  const handleStartJourney = () => {
    alert('Start Your Journey - This would redirect to trip planning page');
  };

  const handleWatchVideo = () => {
    alert('Watch Video - This would open a promotional video modal');
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Discover Your Next Adventure</h1>
        <p>Explore breathtaking destinations around the world with our curated travel experiences</p>
        
        <div className="hero-buttons">
          <button className="btn-hero-primary" onClick={handleStartJourney}>Start Your Journey</button>
          <button className="btn-hero-secondary" onClick={handleWatchVideo}>Watch Video</button>
        </div>
{/*         
        <div className="search-form">
          <form onSubmit={handleSearch} className="search-grid">
            <div className="search-field">
              <label htmlFor="destination">Destination</label>
              <input
                id="destination"
                type="text"
                name="destination"
                placeholder="Where are you going?"
                value={searchData.destination}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="search-field">
              <label htmlFor="checkin">Check-in Date</label>
              <input
                id="checkin"
                type="date"
                name="checkin"
                min={today}
                value={searchData.checkin}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="search-field">
              <label htmlFor="checkout">Check-out Date</label>
              <input
                id="checkout"
                type="date"
                name="checkout"
                min={searchData.checkin || today}
                value={searchData.checkout}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="search-field">
              <label htmlFor="guests">Guests</label>
              <select
                id="guests"
                name="guests"
                value={searchData.guests}
                onChange={handleInputChange}
                required
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>
            
            <button type="submit" className="search-btn">Search</button>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;