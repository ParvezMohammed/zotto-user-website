import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/24/outline';

const RemoveModal = ({ open, onClose, onConfirm }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 w-80 max-w-full flex flex-col items-center shadow-xl">
        <h2 className="text-3xl font-semibold mb-2 text-center">Remove Item?</h2>
        <p className="text-gray-400 text-center mb-8">Are you sure you want to remove this item?</p>
        <div className="flex w-full justify-between gap-4">
          <button
            className="flex-1 bg-pink-400 text-white text-xl font-medium rounded-full py-3 transition hover:bg-pink-500"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="flex-1 bg-pink-400 text-white text-xl font-medium rounded-full py-3 transition hover:bg-pink-500"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Anytime Sanitary Pads",
      price: 256.00,
      quantity: 1,
      image: "/images/ordes1.png",
      pads: "10 Pads",
      size: "XL",
      delivery: "Delivery by Tue Mar 25 | ₹40Free"
    },
    {
      id: 2,
      name: "Ladysoft Sanitary Pads",
      price: 240.00,
      quantity: 1,
      image: "/images/orders2.png",
      pads: "8 Pads",
      size: "XL",
      delivery: "Delivery by Tue Mar 25 | ₹40Free"
    },
    {
      id: 3,
      name: "Petals Sanitary Pads (Combo of 4)",
      price: 1200.00,
      quantity: 1,
      image: "/images/orders3.png",
      pads: "Each 10 Pads",
      size: "XL",
      delivery: "Delivery by Tue Mar 25 | ₹40Free"
    },
    {
      id: 4,
      name: "Wellcare Sanitary Pads",
      price: 200.00,
      quantity: 1,
      image: "/images/orders4.png",
      pads: "10 Pads",
      size: "XL",
      delivery: "Out of Stock"
    }
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [removeIndex, setRemoveIndex] = useState(null);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryCharge = 0; // Free delivery
  const total = subtotal + deliveryCharge;

  const handleRemove = (idx) => {
    setRemoveIndex(idx);
    setModalOpen(true);
  };

  const confirmRemove = () => {
    setCartItems(items => items.filter((_, i) => i !== removeIndex));
    setModalOpen(false);
    setRemoveIndex(null);
  };

  const CartItem = ({ item, idx }) => (
    <div className="flex flex-col md:flex-row py-6 border-b md:space-x-6">
      {/* Product Image and Quantity Controls */}
      <div className="w-full md:w-40 flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-auto object-contain mb-4 md:mb-4" />
        <div className="flex items-center justify-center bg-pink-100 rounded-lg px-3 py-1 max-w-xs mx-auto md:mx-0">
          <button className="text-pink-600 text-xl font-medium w-6 h-6 flex items-center justify-center">
            -
          </button>
          <span className="text-base mx-4">{item.quantity}</span>
          <button className="text-pink-600 text-xl font-medium w-6 h-6 flex items-center justify-center">
            +
          </button>
        </div>
      </div>
      {/* Product Details */}
      <div className="flex-grow flex flex-col justify-between mt-4 md:mt-0">
        <div>
          <h3 className="text-lg font-medium">{item.name}</h3>
          <div className="text-sm text-gray-600 mt-1">{item.pads} • {item.size}</div>
          <div className="text-lg font-semibold mt-2">₹{item.price.toFixed(2)}</div>
          <div className="text-sm mt-2">{item.delivery}</div>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-6">
          <button className="bg-[#DB2777] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-pink-600 transition-colors w-1/2 md:w-auto" >
            Save for Later
          </button>
          <button className="bg-[#DB2777] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-pink-600 transition-colors w-1/2 md:w-auto" onClick={() => handleRemove(idx)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LoggedinNavbar />
      {/* Delivery Address Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 mt-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Delivered to: Rosa Baumbach</span>
              <span className="text-gray-600">50850-0995</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-xs md:text-base">09755 MacGyver Neck New Lavinafurt</span>
              <button className="text-pink-600 text-sm font-medium border border-pink-400 px-4 py-1 rounded-full md:rounded-md">Change</button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Left Column - Cart Items and Place Order */}
          <div className="flex-grow flex flex-col">
            {/* Cart Items */}
            <div className="bg-white rounded-lg p-2 md:p-6 mb-4">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h1 className="text-xl md:text-2xl font-semibold">Cart({cartItems.length})</h1>
              </div>
              <div className="divide-y">
                {cartItems.map((item, idx) => (
                  <CartItem key={item.id} item={item} idx={idx} />
                ))}
              </div>
            </div>
            {/* Order Confirmation Message */}
            <div className="bg-gray-100 rounded-lg p-3 md:p-4 mb-4 text-center text-xs md:text-sm">
              Order confirmation message will be send to your registered phone number
            </div>
            {/* Place Order Button */}
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-pink-600 text-white py-3 md:py-4 rounded-lg font-medium hover:bg-pink-700 transition-colors text-base md:text-lg"
            >
              Place Order
            </button>
          </div>
          {/* Right Column - Price Details */}
          <div className="w-full md:w-96">
            <div className="bg-white rounded-lg p-4 md:p-6">
              <h2 className="text-lg font-semibold mb-4">Price Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price({cartItems.length} items)</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 border-t">
                  <span className="font-medium">Total Amount</span>
                  <span className="text-pink-600">₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            {/* Emergency Delivery Box */}
            <div className="bg-gray-100 rounded-lg p-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Emergency Delivery Charges</span>
                <span className="font-medium">₹20</span>
              </div>
            </div>
            {/* Delivery Note */}
            <div className="bg-gray-50 rounded-lg p-4 mt-4 text-center text-xs md:text-sm">
              <p>Note: Delivery on same day before ordering 12 PM</p>
            </div>
            {/* Security Note */}
            <div className="text-xs text-gray-500 text-center mt-4">
              100% Safe and Secure Payment. Easy Returns. Original Products
            </div>
          </div>
        </div>
      </div>
      <RemoveModal open={modalOpen} onClose={() => setModalOpen(false)} onConfirm={confirmRemove} />
    </div>
  );
};

export default Cart; 