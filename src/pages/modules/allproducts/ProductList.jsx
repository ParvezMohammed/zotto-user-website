import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunnelIcon } from '@heroicons/react/24/outline';

const priceOptions = [
  { label: 'Max', value: 'max' },
  { label: 'Min', value: 'min' },
];
const sizeOptions = [
  { label: 'XXL', value: 'xxl' },
  { label: 'XL', value: 'xl' },
  { label: 'L', value: 'l' },
  { label: 'M', value: 'm' },
  { label: 'S', value: 's' },
];
const brandOptions = [
  { label: 'Vanessa Sanitary Pads', value: 'vanessa' },
  { label: 'Wellcare Sanitary Pads', value: 'wellcare' },
  { label: 'Softcare Sanitary Pads', value: 'softcare' },
  { label: 'My Lady Sanitary Pads', value: 'mylady' },
  { label: 'Purly Sanitary Pads', value: 'purly' },
  { label: 'Bliss Sanitary Pads', value: 'bliss' },
  { label: 'Fresh n Free Sanitary Pads', value: 'freshnfree' },
];

const ProductList = () => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null); // 'price' | 'size' | 'brand' | null
  const [selectedPrice, setSelectedPrice] = useState('max');
  const [selectedSizes, setSelectedSizes] = useState(['xxl']);
  const [selectedBrands, setSelectedBrands] = useState(['vanessa']);
  const filterRef = useRef();
  const overlayRef = useRef();

  const products = [
    {
      id: 1,
      name: 'Anytime Sanitary Pads',
      pads: '10 Pads',
      price: 256.00,
      image: '/images/ordes1.png'
    },
    {
      id: 2,
      name: 'Ladysoft Sanitary Pads',
      pads: '8 Pads',
      price: 250.00,
      image: '/images/orders2.png'
    },
    {
      id: 3,
      name: 'Bliss Sanitary Pads',
      pads: '12 Pads',
      price: 480.00,
      image: '/images/Rectangle13.png'
    },
    {
      id: 4,
      name: 'Purly Sanitary Pads',
      pads: '40 Pads',
      price: 1600.00,
      image: '/images/Rectangle14.png'
    },
    {
      id: 5,
      name: 'Vanessa Sanitary Pads',
      pads: '10 Pads',
      price: 300.00,
      image: '/images/Rectangle11.png'
    },
    {
      id: 6,
      name: 'MRS Sanitary Pads (Combo of 4)',
      pads: '16 Pads',
      price: 500.00,
      image: '/images/Rectangle12.png'
    },
    {
      id: 7,
      name: 'Petals Sanitary Pads (Combo of 4)',
      pads: 'Each 10 Pads',
      price: 1200.00,
      image: '/images/orders3.png'
    },
    {
      id: 8,
      name: 'StaySure Sanitary Pads',
      pads: 'Each 8 Pads',
      price: 240.00,
      image: '/images/orders4.png'
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
    // TODO: Implement cart functionality
  };

  const handleBuyNow = (product) => {
    console.log('Buy now:', product);
    navigate('/checkout');
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);

  // Close overlays on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target) &&
        filterRef.current &&
        !filterRef.current.contains(event.target)
      ) {
        setActiveOverlay(null);
        setIsFilterOpen(false);
      }
    }
    if (isFilterOpen || activeOverlay) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen, activeOverlay]);

  // Checkbox logic
  const handlePriceChange = (value) => setSelectedPrice(value);
  const handleSizeChange = (value) => {
    setSelectedSizes((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };
  const handleBrandChange = (value) => {
    setSelectedBrands((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  // Overlay component (dropdown style)
  const FilterOverlay = ({ title, options, selected, onChange, multi }) => (
    <div
      ref={overlayRef}
      className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl z-50 overflow-hidden border"
      style={{ minWidth: 260 }}
    >
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4 capitalize text-gray-700">{title}</h2>
        <div className="space-y-4">
          {options.map((opt) => (
            <label key={opt.value} className="flex items-center space-x-3 cursor-pointer">
              <input
                type={multi ? 'checkbox' : 'radio'}
                className="accent-purple-600 w-6 h-6 border-2 border-gray-500 rounded focus:ring-2 focus:ring-purple-400"
                checked={multi ? selected.includes(opt.value) : selected === opt.value}
                onChange={() => onChange(opt.value)}
              />
              <span className="text-xl font-bold text-gray-800">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
     
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 relative">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">All Products</h1>
            <p className="mt-1 text-base text-gray-600">
              Explore our premium range of products crafted for women, ensuring ultimate comfort and care.
            </p>
          </div>
          <div className="relative" ref={filterRef}>
            <button
              className="flex items-center justify-center w-10 h-10 text-gray-600"
              onClick={toggleFilter}
            >
              <FunnelIcon className="h-6 w-6" />
            </button>
            {isFilterOpen && !activeOverlay && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 overflow-hidden border">
                {/* Price Option */}
                <button
                  className="w-full flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors border-b"
                  onClick={() => setActiveOverlay('price')}
                >
                  <div className="bg-gray-200 p-2 rounded-lg">
                    <span className="text-pink-500 text-xl">₹</span>
                  </div>
                  <span className="text-gray-700 font-medium">Price</span>
                </button>
                {/* Size Option */}
                <button
                  className="w-full flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors border-b"
                  onClick={() => setActiveOverlay('size')}
                >
                  <div className="bg-gray-200 p-2 rounded-lg">
                    <svg className="h-5 w-5 text-pink-500" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16v16H4V4z M8 8h8v8H8V8z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Size</span>
                </button>
                {/* Brand Option */}
                <button
                  className="w-full flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveOverlay('brand')}
                >
                  <div className="bg-gray-200 p-2 rounded-lg">
                    <svg className="h-5 w-5 text-pink-500" viewBox="0 0 24 24" fill="none">
                      <path d="M4 20h16L12 4 4 20z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Brand</span>
                </button>
              </div>
            )}
            {/* Filter Overlays as dropdowns */}
            {activeOverlay === 'price' && (
              <FilterOverlay
                title="Price"
                options={priceOptions}
                selected={selectedPrice}
                onChange={handlePriceChange}
                multi={false}
              />
            )}
            {activeOverlay === 'size' && (
              <FilterOverlay
                title="Size"
                options={sizeOptions}
                selected={selectedSizes}
                onChange={handleSizeChange}
                multi={true}
              />
            )}
            {activeOverlay === 'brand' && (
              <FilterOverlay
                title="Brand"
                options={brandOptions}
                selected={selectedBrands}
                onChange={handleBrandChange}
                multi={true}
              />
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-2 sm:p-4">
                <div 
                  className="cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-lg mb-2 sm:mb-4"
                  />
                  <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
                  <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                    {product.pads}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">
                    ₹{product.price.toFixed(2)}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1 sm:gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="bg-pink-100 text-pink-600 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-pink-200 transition-colors"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNow(product);
                    }}
                    className="bg-pink-600 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-pink-700 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList; 