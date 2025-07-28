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
              <button className="btn btn-primary">Shop Now</button>
              <button className="btn btn-secondary">Learn More</button>
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
          <div className="hero-image">
            <div className="hero-placeholder">
              <div className="product-showcase">
                <div className="product-card">
                  <div className="product-img">📱</div>
                  <h4>Electronics</h4>
                </div>
                <div className="product-card">
                  <div className="product-img">👕</div>
                  <h4>Fashion</h4>
                </div>
                <div className="product-card">
                  <div className="product-img">🏠</div>
                  <h4>Home & Garden</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
