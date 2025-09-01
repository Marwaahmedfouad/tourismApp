import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (formData.firstName && formData.lastName && formData.email && formData.phone && formData.message) {
      // In a real application, you would send the form data to a server here
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleDiscountClick = () => {
    alert('Discount request successful! You will receive the offer details by email shortly.');
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Start your next journey with us today</p>
        </div>
        
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="contact-form-content">
              <h3>Book a Free Consultation</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="firstName"
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="lastName"
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Tell us about your dream journey..." 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  ></textarea>
                </div>
                <button type="submit" className="contact-btn">Book Now</button>
                {showSuccess && (
                  <div className="success-message">
                    Your message has been sent successfully! We will contact you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">
               <i class="fa-solid fa-phone-volume"></i>
              </div>
              <div className="info-content">
                <h4>Call Us</h4>
                <p>+966 50 123 4567</p>
                <p>+966 11 234 5678</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon email-icon">
             <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="info-content">
                <h4>Email Us</h4>
                <p>info@tourism-sites.com</p>
                <p>booking@tourism-sites.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon location-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-content">
                <h4>Visit Us</h4>
                <p>Riyadh, Saudi Arabia</p>
                <p>King Fahd Road, Al Olaya District</p>
              </div>
            </div>
            
            <div className="discount-card">
              <div className="discount-content">
                <h4>Get 15% Discount</h4>
                <p>On your first trip with us</p>
                <button className="discount-btn" onClick={handleDiscountClick}>
                  Request Discount
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;