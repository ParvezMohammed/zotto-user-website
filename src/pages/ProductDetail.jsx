import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import LoggedinNavbar from '../components/navbar/LoggedinNavbar';
import Footer from '../components/Footer';
import { StarIcon } from '@heroicons/react/20/solid';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Mock product data (in a real app, this would come from an API)
  const products = [
    {
      id: 1,
      name: 'Vanessa Sanitary Pads',
      pads: '10 Pads',
      price: 300.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 5,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/Rectangle11.png',
    },
    {
      id: 2,
      name: 'MRS Sanitary Pads (Combo of 4)',
      pads: '16 Pads',
      price: 500.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 8,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/Rectangle12.png',
    },
    {
      id: 3,
      name: 'Bliss Sanitary Pads',
      pads: '12 Pads',
      price: 480.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 3,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/Rectangle13.png',
    },
    {
      id: 4,
      name: 'Purly Sanitary Pads',
      pads: '40 Pads',
      price: 1600.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 10,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/Rectangle14.png',
    },
    {
      id: 5,
      name: 'Anytime Sanitary Pads',
      pads: '10 Pads',
      price: 256.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 2,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/ordes1.png',
    },
    {
      id: 6,
      name: 'Ladysoft Sanitary Pads',
      pads: '8 Pads',
      price: 250.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 7,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/orders2.png',
    },
    {
      id: 7,
      name: 'Petals Sanitary Pads (Combo of 4)',
      pads: 'Each 10 Pads',
      price: 1200.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 4,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/orders3.png',
    },
    {
      id: 8,
      name: 'StaySure Sanitary Pads',
      pads: 'Each 8 Pads',
      price: 240.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 6,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/orders4.png',
    },
    {
      id: 9,
      name: 'Wellcare Sanitary Pads',
      pads: '10 Pads',
      price: 200.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 9,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/Rectangle11.png',
    },
    {
      id: 10,
      name: 'Softcare Sanitary Pads',
      pads: '4 Pads',
      price: 150.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 12,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/Rectangle12.png',
    },
    {
      id: 11,
      name: 'Fresh n Free Sanitary Pads',
      pads: '8 Pads',
      price: 230.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 5,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/Rectangle13.png',
    },
    {
      id: 12,
      name: 'My Lady Sanitary Pads',
      pads: '16 Pads',
      price: 640.00,
      size: 'XL',
      rating: 4.5,
      delivery: 'Free Delivery Monday,',
      deliveryDate: '24 March 2025',
      stock: 7,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/Rectangle14.png',
    }
  ];

  // Buy It With products
  const buyWithProducts = [
    {
      name: 'Wellcare Sanitary Pads',
      pads: '10 Pads',
      price: 200.00,
      size: 'XL',
      image: '/images/Rectangle11.png'
    },
    {
      name: 'Softcare Sanitary Pads',
      pads: '4 Pads',
      price: 150.00,
      size: 'XL',
      image: '/images/Rectangle12.png'
    },
    {
      name: 'Fresh n Free Sanitary Pads',
      pads: '8 Pads',
      price: 230.00,
      size: 'XL',
      image: '/images/Rectangle13.png'
    },
    {
      name: 'My Lady Sanitary Pads',
      pads: '16 Pads',
      price: 640.00,
      size: 'XL',
      image: '/images/Rectangle14.png'
    }
  ];

  // Related products
  const relatedProducts = [
    {
      name: 'Vanessa Sanitary Pads',
      pads: '10 Pads',
      price: 300.00,
      size: 'XL',
      image: '/images/Rectangle11.png'
    },
    {
      name: 'MRS Sanitary Pads (Combo of 4)',
      pads: '16 Pads',
      price: 500.00,
      size: 'XL',
      image: '/images/Rectangle12.png'
    },
    {
      name: 'Bliss Sanitary Pads',
      pads: '12 Pads',
      price: 480.00,
      size: 'XL',
      image: '/images/Rectangle13.png'
    },
    {
      name: 'Purly Sanitary Pads',
      pads: '40 Pads',
      price: 1600.00,
      size: 'XL',
      image: '/images/Rectangle14.png'
    }
  ];

  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <LoggedinNavbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-lg text-gray-600">
            Product not found (ID: {id})
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating)
            ? 'text-yellow-400'
            : index < rating
            ? 'text-yellow-200'
            : 'text-gray-200'
        }`}
      />
    ));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1
    });
  };

  const handleBuyNow = () => {
    addToCart({
      ...product,
      quantity: 1
    });
    navigate('/checkout');
  };

  const handleBuyWithProduct = (product) => {
    addToCart({
      ...product,
      quantity: 1
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LoggedinNavbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-20">
        {/* Main Product Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-600">{product.rating}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-lg">{product.pads}</span>
              <span className="text-lg">{product.size}</span>
            </div>

            <div className="text-2xl font-bold">₹{product.price.toFixed(2)}</div>

            <div className="text-green-600">
              {product.delivery} {product.deliveryDate}
            </div>

            <div className="text-red-500">
              Only {product.stock} left in stock.
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors"
              >
                Add To Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors"
              >
                Buy Now
              </button>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">About This Item</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Buy It With Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Buy It With</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyWithProducts.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                  <span>{item.pads}</span>
                  <span>{item.size}</span>
                </div>
                <div className="mt-2 text-lg font-bold text-gray-900">
                  ₹{item.price.toFixed(2)}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleBuyWithProduct(item)}
                    className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-600 transition-colors"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={() => {
                      handleBuyWithProduct(item);
                      navigate('/checkout');
                    }}
                    className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-600 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                  <span>{item.pads}</span>
                  <span>{item.size}</span>
                </div>
                <div className="mt-2 text-lg font-bold text-gray-900">
                  ₹{item.price.toFixed(2)}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleBuyWithProduct(item)}
                    className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-600 transition-colors"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={() => {
                      handleBuyWithProduct(item);
                      navigate('/checkout');
                    }}
                    className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-600 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail; 