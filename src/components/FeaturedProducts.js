import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$99.99',
      originalPrice: '$149.99',
      image: '🎧',
      rating: 4.8,
      discount: '33% OFF'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$199.99',
      originalPrice: '$299.99',
      image: '⌚',
      rating: 4.6,
      discount: '33% OFF'
    },
    {
      id: 3,
      name: 'Premium Sneakers',
      price: '$79.99',
      originalPrice: '$120.00',
      image: '👟',
      rating: 4.9,
      discount: '33% OFF'
    },
    {
      id: 4,
      name: 'Coffee Maker',
      price: '$129.99',
      originalPrice: '$180.00',
      image: '☕',
      rating: 4.7,
      discount: '28% OFF'
    },
    {
      id: 5,
      name: 'Laptop Backpack',
      price: '$49.99',
      originalPrice: '$75.00',
      image: '🎒',
      rating: 4.5,
      discount: '33% OFF'
    },
    {
      id: 6,
      name: 'Gaming Mouse',
      price: '$59.99',
      originalPrice: '$89.99',
      image: '🖱️',
      rating: 4.8,
      discount: '33% OFF'
    }
  ];

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
                <span className="product-emoji">{product.image}</span>
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
