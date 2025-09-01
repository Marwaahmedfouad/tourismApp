import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogin = () => {
    alert('Login functionality would redirect to login page');
  };

  const handleSignUp = () => {
    alert('Sign up functionality would redirect to registration page');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
         <Link to="/" className="home">
          WanderLust
        </Link> 
        
        <ul className="nav-menu">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        <div className="nav-buttons">
          <button className="btn btn--outline " onClick={handleLogin}>Login</button>
          <button className="btn btn--primary " onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;