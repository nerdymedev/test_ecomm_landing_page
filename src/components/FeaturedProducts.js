import React, { useState } from 'react';
import './FeaturedProducts.css';
import { configureProductImages } from '../utils/imageUtils';

const FeaturedProducts = () => {
  // Component to handle image loading with fallback
  const ProductImage = ({ src, alt, fallbackEmoji = '📱' }) => {
    const [imageError, setImageError] = useState(false);
    
    if (imageError) {
      return <span className="product-emoji">{fallbackEmoji}</span>;
    }
    
    return (
      <img 
        src={src} 
        alt={alt} 
        className="product-image-img"
        onError={() => setImageError(true)}
        onLoad={() => setImageError(false)}
      />
    );
  };

  // Product data with explicit image paths using dashes
  const rawProducts = [
    {
      id: 1,
      name: 'iPhone 13 Promax',
      price: '#630,000',
      originalPrice: '#700,000',
      image: '/images/products/iphone-13-promax.jpg',
      fallbackEmoji: '📱',
      rating: 4.8,
      discount: '10% OFF'
    },
    {
      id: 2,
      name: 'Locked iPhone 16',
      price: '#810,000',
      originalPrice: '#900,000',
      image: '/images/products/locked-iphone-16.jpg',
      fallbackEmoji: '📱',
      rating: 4.6,
      discount: '10% OFF'
    },
    {
      id: 4,
      name: 'iPhone 12',
      price: '#351,000',
      originalPrice: '#390,000',
      image: '/images/products/iphone-12.jpg',
      fallbackEmoji: '📱',
      rating: 4.7,
      discount: '10% OFF'
    },
    {
      id: 5,
      name: 'iPhone 11',
      price: '#324,000',
      originalPrice: '#360,000',
      image: '/images/products/iphone-11.jpg',
      fallbackEmoji: '📱',
      rating: 4.5,
      discount: '10% OFF'
    },
    {
      id: 6,
      name: 'PS5 slim',
      price: '#770,000',
      originalPrice: '1,100,000',
      image: '/images/products/ps5-slim.jpg',
      fallbackEmoji: '🎮',
      rating: 4.8,
      discount: '30% OFF'
    }
  ];

  // Configure products with images and fallback emojis
  const products = configureProductImages(rawProducts);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  return (
    <section className="featured-products" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Discover our most popular items with amazing deals</p>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-badge">{product.discount}</div>
              <div className="product-image">
                <ProductImage 
                  src={product.image} 
                  alt={product.name}
                  fallbackEmoji={product.fallbackEmoji}
                />
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="rating-text">({product.rating})</span>
                </div>
                <div className="product-price">
                  <span className="current-price">{product.price}</span>
                  <span className="original-price">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-section">
          <button className="btn btn-secondary">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
