import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleSocialClick = (platform) => {
    alert(`This would open ${platform} in a new tab`);
  };

  const handleLinkClick = (section) => {
    alert(`This would navigate to the ${section} page`);
  };

  return (
    <>
      {/* Add FontAwesome CDN in the component */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        crossOrigin="anonymous"
      />
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>WanderLust</h4>
            <p>
              Discover amazing places around the world with our expert travel
              guides and personalized experiences.
            </p>
            <div className="social-icons">
              <a 
                href="#" 
                className="social-icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick("Facebook");
                }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="social-icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick("Twitter");
                }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="social-icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick("Instagram");
                }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="social-icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick("LinkedIn");
                }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("About Us");
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Destinations");
                  }}
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Tours");
                  }}
                >
                  Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Contact");
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Terms & Conditions");
                  }}
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Help Center");
                  }}
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Safety");
                  }}
                >
                  Safety
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Cancellation Options");
                  }}
                >
                  Cancellation Options
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("Community");
                  }}
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get special offers and travel updates</p>
            
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 WanderLust. All rights reserved. | Made with <i className="fas fa-heart heart-icon"></i> for travelers
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;