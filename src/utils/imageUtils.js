// Utility functions for handling product images

/**
 * Get the image path for a product
 * @param {string} productName - Name of the product
 * @param {string} extension - Image file extension (default: 'jpg')
 * @returns {string} - Path to the product image
 */
export const getProductImagePath = (productName, extension = 'jpg') => {
  // Convert product name to URL-friendly format with dashes preserved
  const imageName = productName
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/[^a-z0-9\-]/g, '')    // Remove special characters but keep hyphens
    .replace(/-+/g, '-')            // Replace multiple hyphens with single
    .replace(/^-|-$/g, '');         // Remove leading/trailing hyphens
  
  return `/images/products/${imageName}.${extension}`;
};

/**
 * Common fallback emojis for different product categories
 */
export const FALLBACK_EMOJIS = {
  phone: '📱',
  laptop: '💻',
  headphones: '🎧',
  watch: '⌚',
  shoes: '👟',
  coffee: '☕',
  bag: '🎒',
  gaming: '🎮',
  mouse: '🖱️',
  keyboard: '⌨️',
  camera: '📷',
  speaker: '🔊',
  default: '📦'
};

/**
 * Auto-detect fallback emoji based on product name
 * @param {string} productName - Name of the product
 * @returns {string} - Appropriate fallback emoji
 */
export const getAutoFallbackEmoji = (productName) => {
  const name = productName.toLowerCase();
  
  if (name.includes('iphone') || name.includes('phone')) return FALLBACK_EMOJIS.phone;
  if (name.includes('laptop') || name.includes('macbook')) return FALLBACK_EMOJIS.laptop;
  if (name.includes('headphone') || name.includes('airpods')) return FALLBACK_EMOJIS.headphones;
  if (name.includes('watch')) return FALLBACK_EMOJIS.watch;
  if (name.includes('shoe') || name.includes('sneaker')) return FALLBACK_EMOJIS.shoes;
  if (name.includes('coffee') || name.includes('mug')) return FALLBACK_EMOJIS.coffee;
  if (name.includes('bag') || name.includes('backpack')) return FALLBACK_EMOJIS.bag;
  if (name.includes('ps5') || name.includes('playstation') || name.includes('xbox') || name.includes('gaming')) return FALLBACK_EMOJIS.gaming;
  if (name.includes('mouse')) return FALLBACK_EMOJIS.mouse;
  if (name.includes('keyboard')) return FALLBACK_EMOJIS.keyboard;
  if (name.includes('camera')) return FALLBACK_EMOJIS.camera;
  if (name.includes('speaker')) return FALLBACK_EMOJIS.speaker;
  
  return FALLBACK_EMOJIS.default;
};

/**
 * Product image configuration with auto-generated paths and fallbacks
 * @param {Array} products - Array of product objects
 * @returns {Array} - Products with image paths and fallback emojis
 */
export const configureProductImages = (products) => {
  return products.map(product => ({
    ...product,
    image: product.image || getProductImagePath(product.name, 'jpg'),
    fallbackEmoji: product.fallbackEmoji || getAutoFallbackEmoji(product.name)
  }));
};
