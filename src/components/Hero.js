import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>Discover Amazing Products</h1>
            <p>Shop the latest trends and find everything you need in one place. Quality products, unbeatable prices, and fast delivery.</p>
            <div className="hero-buttons">
              <button a href="#products" className="btn btn-primary">Shop Now</button>
              <button a href="#about" className="btn btn-secondary">Learn More</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>10K+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Products</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
