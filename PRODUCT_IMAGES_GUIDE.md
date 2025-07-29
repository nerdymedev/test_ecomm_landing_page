# Custom Product Images Guide

This guide explains how to add and manage custom product images in your ecommerce landing page.

## Quick Start

1. **Add your images** to the `public/images/products/` directory
2. **Name your files** using the product name (spaces become hyphens, lowercase)
3. **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.svg`
4. **Automatic fallback**: If image is missing, an emoji placeholder will show

## Adding Images

### Method 1: Manual File Placement
1. Place your image files in `public/images/products/`
2. Name them to match your product names:
   - `iPhone 13 Promax` → `iphone-13-promax.jpg`
   - `PS5 slim` → `ps5-slim.jpg`
   - `Locked iPhone 16` → `locked-iphone-16.jpg`

### Method 2: Custom Image Paths
Edit the product data in `src/components/FeaturedProducts.js` to specify custom image paths:

```javascript
{
  id: 1,
  name: 'iPhone 13 Promax',
  price: '#630,000',
  originalPrice: '#700,000',
  image: '/images/products/my-custom-iphone-image.jpg', // Custom path
  fallbackEmoji: '📱', // Custom fallback
  rating: 4.8,
  discount: '10% OFF'
}
```

## Image Requirements

### Recommended Specifications
- **Dimensions**: 400x400px to 600x600px (square aspect ratio)
- **File Size**: Under 500KB for optimal loading
- **Format**: JPG for photos, PNG for graphics with transparency, SVG for icons
- **Quality**: High resolution but web-optimized

### File Naming Convention
- Use lowercase letters
- Replace spaces with hyphens
- Remove special characters
- Examples:
  - `iPhone 13 Pro Max` → `iphone-13-pro-max.jpg`
  - `PlayStation 5` → `playstation-5.jpg`
  - `MacBook Air 13"` → `macbook-air-13.jpg`

## Automatic Features

### Auto-Generated Image Paths
The system automatically generates image paths based on product names. For a product named "iPhone 13 Promax", it will look for:
- `iphone-13-promax.svg` (default)
- Or any other extension you specify

### Smart Fallback Emojis
If an image fails to load, the system automatically selects appropriate emoji fallbacks:
- **Phones**: 📱
- **Laptops**: 💻  
- **Headphones**: 🎧
- **Gaming**: 🎮
- **Watches**: ⌚
- **And more...**

## Directory Structure

```
public/
└── images/
    └── products/
        ├── README.md
        ├── iphone-13-pro-max.svg
        ├── iphone-16-locked.svg
        ├── ps5-slim.svg
        ├── your-product-image.jpg
        └── another-product.png
```

## Advanced Configuration

### Custom Fallback Emojis
You can specify custom fallback emojis for each product:

```javascript
{
  name: 'Custom Product',
  fallbackEmoji: '🚀', // Custom fallback
  // ... other properties
}
```

### Bulk Image Configuration
Use the utility functions in `src/utils/imageUtils.js`:

```javascript
import { configureProductImages, getProductImagePath } from '../utils/imageUtils';

// Auto-configure all products
const products = configureProductImages(rawProducts);

// Generate specific image path
const imagePath = getProductImagePath('iPhone 13 Pro Max', 'jpg');
```

## Testing Your Images

1. **Start the development server**: `npm start`
2. **Check the browser console** for any image loading errors
3. **Verify fallbacks** by temporarily renaming an image file
4. **Test different screen sizes** to ensure images look good on mobile

## Troubleshooting

### Image Not Loading
- ✅ Check file path is correct
- ✅ Ensure file is in `public/images/products/`
- ✅ Verify file extension matches
- ✅ Check browser console for 404 errors

### Image Too Large/Small
- Adjust CSS in `FeaturedProducts.css`
- Look for `.product-image-img` class
- Modify `object-fit`, `padding`, or dimensions

### Slow Loading
- Compress images using tools like TinyPNG
- Consider using WebP format
- Optimize SVGs by removing unnecessary code

## Performance Tips

1. **Optimize file sizes** before uploading
2. **Use appropriate formats**: 
   - JPG for photographs
   - PNG for graphics with transparency
   - SVG for simple icons/illustrations
   - WebP for modern browsers
3. **Consider lazy loading** for large product catalogs
4. **Use CDN** for production deployments

## Examples

### Adding a New Product with Image

1. Add product to the data array:
```javascript
{
  id: 7,
  name: 'MacBook Pro 16',
  price: '#2,500,000',
  originalPrice: '#2,800,000',
  rating: 4.9,
  discount: '11% OFF'
}
```

2. Add image file: `public/images/products/macbook-pro-16.jpg`

3. That's it! The system will automatically:
   - Generate the image path
   - Set fallback emoji to 💻 (laptop)
   - Handle loading errors gracefully

The system is designed to be flexible and user-friendly while maintaining good performance and fallback handling.
