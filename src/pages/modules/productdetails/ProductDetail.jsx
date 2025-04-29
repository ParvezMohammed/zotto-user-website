import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import LoggedinNavbar from '../../../components/navbar/LoggedinNavbar';
import Footer from '../../../components/Footer';
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
      stock: 6,
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
      stock: 7,
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
      stock: 4,
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
      stock: 3,
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
      stock: 9,
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
      stock: 12,
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
      stock: 15,
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
      stock: 6,
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
      stock: 8,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: '/images/Rectangle14.png',
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <LoggedinNavbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-600">Product not found (ID: {id})</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: parseInt(quantity)
    });
  };

  const handleBuyNow = () => {
    addToCart({
      ...product,
      quantity: parseInt(quantity)
    });
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LoggedinNavbar />
      <div className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product Image */}
            <div className="lg:max-w-lg lg:self-end">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              
              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">₹{product.price.toFixed(2)}</p>
              </div>

              {/* Rating */}
              <div className="mt-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={`${
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                        } h-5 w-5 flex-shrink-0`}
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-500">
                    {product.rating} out of 5 stars
                  </p>
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-900">{product.description}</p>
              </div>

              <div className="mt-6">
                <div className="flex items-center">
                  <p className="text-base text-gray-900">Size:</p>
                  <p className="ml-2 text-base text-gray-500">{product.size}</p>
                </div>
                <div className="flex items-center mt-2">
                  <p className="text-base text-gray-900">Quantity:</p>
                  <p className="ml-2 text-base text-gray-500">{product.pads}</p>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mt-6">
                <div className="flex items-center">
                  <p className="text-base text-gray-900">{product.delivery}</p>
                  <p className="ml-2 text-base text-gray-500">{product.deliveryDate}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {product.stock} items left in stock
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mt-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  Select Quantity
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add to Cart and Buy Now buttons */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-pink-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail; 