import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FunnelIcon } from '@heroicons/react/24/outline';
import LoggedinNavbar from './navbar/LoggedinNavbar';

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Vanessa Sanitary Pads',
      pads: '10 Pads',
      price: 300.00,
      size: 'XL',
      image: '/images/Rectangle11.png'
    },
    {
      id: 2,
      name: 'MRS Sanitary Pads (Combo of 4)',
      pads: '16 Pads',
      price: 500.00,
      size: 'XL',
      image: '/images/Rectangle12.png'
    },
    {
      id: 3,
      name: 'Bliss Sanitary Pads',
      pads: '12 Pads',
      price: 480.00,
      size: 'XL',
      image: '/images/Rectangle13.png'
    },
    {
      id: 4,
      name: 'Purly Sanitary Pads',
      pads: '40 Pads',
      price: 1600.00,
      size: 'XL',
      image: '/images/Rectangle14.png'
    },
    {
      id: 5,
      name: 'Anytime Sanitary Pads',
      pads: '10 Pads',
      price: 256.00,
      size: 'XL',
      image: '/images/ordes1.png'
    },
    {
      id: 6,
      name: 'Ladysoft Sanitary Pads',
      pads: '8 Pads',
      price: 250.00,
      size: 'XL',
      image: '/images/orders2.png'
    },
    {
      id: 7,
      name: 'Petals Sanitary Pads (Combo of 4)',
      pads: 'Each 10 Pads',
      price: 1200.00,
      size: 'XL',
      image: '/images/orders3.png'
    },
    {
      id: 8,
      name: 'StaySure Sanitary Pads',
      pads: 'Each 8 Pads',
      price: 240.00,
      size: 'XL',
      image: '/images/orders4.png'
    },
    {
      id: 9,
      name: 'Wellcare Sanitary Pads',
      pads: '10 Pads',
      price: 200.00,
      size: 'XL',
      image: '/images/Rectangle11.png'
    },
    {
      id: 10,
      name: 'Softcare Sanitary Pads',
      pads: '4 Pads',
      price: 150.00,
      size: 'XL',
      image: '/images/Rectangle12.png'
    },
    {
      id: 11,
      name: 'Fresh n Free Sanitary Pads',
      pads: '8 Pads',
      price: 230.00,
      size: 'XL',
      image: '/images/Rectangle13.png'
    },
    {
      id: 12,
      name: 'My Lady Sanitary Pads',
      pads: '16 Pads',
      price: 640.00,
      size: 'XL',
      image: '/images/Rectangle14.png'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size,
      pads: product.pads,
      quantity: 1
    });
  };

  const handleBuyNow = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size,
      pads: product.pads,
      quantity: 1
    });
    navigate('/checkout');
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <LoggedinNavbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
              <p className="mt-2 text-gray-600">
                Explore our premium range of products crafted for women, ensuring ultimate comfort and care.
              </p>
            </div>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <FunnelIcon className="h-5 w-5 mr-2" />
              Filter
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                    <span>{product.pads}</span>
                    <span>{product.size}</span>
                  </div>
                  <div className="mt-2 text-lg font-bold text-gray-900">
                    ₹{product.price.toFixed(2)}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-600 transition-colors"
                    >
                      Add To Cart
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBuyNow(product);
                      }}
                      className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-600 transition-colors"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList; 