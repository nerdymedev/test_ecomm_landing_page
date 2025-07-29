import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <h2>About Lekzzy Tech</h2>
            <p>Your trusted partner in cutting-edge technology</p>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <div className="about-story">
                <h3>Our Story</h3>
                <p>
                  Founded with a passion for innovation, Lekzzy Tech has been at the forefront 
                  of delivering premium technology products to customers worldwide. We believe 
                  in making cutting-edge technology accessible to everyone.
                </p>
                <p>
                  From the latest smartphones to gaming consoles, we carefully curate our 
                  product selection to ensure you get the best quality at competitive prices.
                </p>
              </div>
              
              <div className="about-mission">
                <h3>Our Mission</h3>
                <p>
                  To empower people through technology by providing authentic, high-quality 
                  products with exceptional customer service. We're committed to building 
                  lasting relationships with our customers based on trust and reliability.
                </p>
              </div>
            </div>
            
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <h4>Fast Delivery</h4>
                <p>Quick and secure shipping to your doorstep</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">✅</div>
                <h4>Authentic Products</h4>
                <p>100% genuine products with warranty</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h4>Secure Shopping</h4>
                <p>Safe and encrypted payment processing</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock customer assistance</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Products Available</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
