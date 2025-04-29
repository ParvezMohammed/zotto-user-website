import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import LoggedinNavbar from './navbar/LoggedinNavbar';
import Footer from './Footer';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // This would typically come from an API, using static data for demo
  const product = {
    id: parseInt(productId),
    name: 'Vanessa Sanitary Pads',
    description: 'Premium quality sanitary pads designed for maximum comfort and protection. Made with soft, breathable materials and featuring advanced absorption technology.',
    pads: '10 Pads',
    price: 300.00,
    size: 'XL',
    image: '/images/Rectangle11.png',
    features: [
      'Ultra-thin design for comfort',
      'Advanced absorption technology',
      'Breathable materials',
      'Dermatologically tested',
      'Leak protection guarantee'
    ],
    specifications: {
      'Material': 'Cotton blend with moisture-wicking technology',
      'Size': 'XL (280mm)',
      'Quantity': '10 pads per pack',
      'Type': 'Wings',
      'Absorbency': 'Heavy flow'
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    });
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <LoggedinNavbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* Product Image */}
              <div className="flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-md rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
                
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
                  <span className="text-gray-600">{product.pads}</span>
                  <span className="text-gray-600">{product.size}</span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Quantity:</span>
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="px-3 py-1 border-r hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="px-3 py-1 border-l hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="bg-pink-500 text-white px-6 py-3 rounded-md text-sm hover:bg-pink-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      handleAddToCart();
                      // Navigate to checkout
                    }}
                    className="bg-pink-500 text-white px-6 py-3 rounded-md text-sm hover:bg-pink-600 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Product Features and Specifications */}
            <div className="border-t p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex">
                      <span className="font-medium text-gray-900 w-32">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail; 