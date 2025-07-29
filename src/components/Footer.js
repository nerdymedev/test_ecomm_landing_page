import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Lekzzy Tech</h3>
              <p>Your trusted partner in cutting-edge technology. Shop with confidence and enjoy fast, reliable delivery for premium tech products.</p>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1AtVSCbtw8/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
              <a href="https://www.instagram.com/lekzzy_tech/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#sale">Sale</a></li>
            </ul>
          </div>


          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#size-guide">Size Guide</a></li>
              <li><a href="#track-order">Track Order</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on new products and exclusive offers!</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </div>
            <div className="contact-info">
              <p>📞 +234-903-896-5452</p>
              <p>✉️ support@lekzzicon@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Lekzzy Tech. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
