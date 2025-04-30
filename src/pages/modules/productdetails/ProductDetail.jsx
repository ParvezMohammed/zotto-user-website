import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import LoggedinNavbar from '../../../components/navbar/LoggedinNavbar';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  // Get Buy It With products (4 products)
  const buyItWithProducts = [
    products.find(p => p.name === 'Wellcare Sanitary Pads'),
    products.find(p => p.name === 'Softcare Sanitary Pads'),
    products.find(p => p.name === 'Fresh n Free Sanitary Pads'),
    products.find(p => p.name === 'My Lady Sanitary Pads')
  ].filter(Boolean);

  // Get Related Products (4 different products)
  const relatedProducts = [
    products.find(p => p.name === 'Vanessa Sanitary Pads'),
    products.find(p => p.name === 'MRS Sanitary Pads (Combo of 4)'),
    products.find(p => p.name === 'Bliss Sanitary Pads'),
    products.find(p => p.name === 'Purly Sanitary Pads')
  ].filter(Boolean);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <LoggedinNavbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-600">Product not found (ID: {id})</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = (selectedProduct = product, selectedQuantity = quantity) => {
    console.log('Add to cart:', {
      ...selectedProduct,
      quantity: parseInt(selectedQuantity)
    });
    // TODO: Implement cart functionality
  };

  const handleBuyNow = (selectedProduct = product, selectedQuantity = quantity) => {
    // Create a cart item from the product
    const cartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      size: selectedProduct.size,
      pads: selectedProduct.pads,
      quantity: parseInt(selectedQuantity)
    };

    // Save to localStorage as a single-item cart
    localStorage.setItem('cart', JSON.stringify([cartItem]));
    
    // Navigate to checkout
    navigate('/checkout');
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-3">
        <div className="cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover rounded-lg mb-3"
          />
          <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs text-gray-600">{product.pads}</span>
            {product.size && <span className="text-xs text-gray-600">{product.size}</span>}
          </div>
          <div className="text-sm font-semibold text-gray-900 mb-3">
            ₹{product.price.toFixed(2)}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product, 1);
            }}
            className="bg-pink-100 text-pink-600 px-2 py-1.5 rounded-md text-xs font-medium hover:bg-pink-200 transition-colors"
          >
            Add To Cart
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleBuyNow(product, 1);
            }}
            className="bg-pink-600 text-white px-2 py-1.5 rounded-md text-xs font-medium hover:bg-pink-700 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LoggedinNavbar />
      <main className="flex-grow pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-6">
          {/* Product Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-900 mr-1">{product.rating}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : i < product.rating
                            ? 'text-yellow-400 opacity-50'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-600">{product.pads}</span>
                <span className="text-sm text-gray-600">{product.size}</span>
              </div>

              <div className="text-2xl font-bold text-gray-900">
                ₹{product.price.toFixed(2)}
              </div>

              <div className="space-y-2">
                <div className="text-gray-600">
                  {product.delivery}
                </div>
                <div className="text-gray-900">
                  {product.deliveryDate}
                </div>
                {product.stock <= 5 && (
                  <div className="text-red-500">
                    Only {product.stock} left in stock.
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  onClick={() => handleAddToCart()}
                  className="bg-pink-100 text-pink-600 px-6 py-3 rounded-md text-sm font-medium hover:bg-pink-200 transition-colors"
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => handleBuyNow()}
                  className="bg-pink-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-pink-700 transition-colors"
                >
                  Buy Now
                </button>
              </div>

              {/* About This Item */}
              <div className="pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">About This Item</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Buy It With Section */}
          <section className="mt-12 border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Buy It With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {buyItWithProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Related Products Section */}
          <section className="mt-12 border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail; 