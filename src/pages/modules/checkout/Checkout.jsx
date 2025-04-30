import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/24/outline';
import ordes1 from '../../../assets/images/ordes1.png';

const Checkout = () => {
  const navigate = useNavigate();
  const [emergencyDelivery, setEmergencyDelivery] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);

  // Get cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharges = 0; // Free delivery
  const emergencyCharges = emergencyDelivery ? 20 : 0;
  const total = subtotal + deliveryCharges + emergencyCharges;

  const CartItem = ({ item }) => (
    <div className="flex flex-col py-4 border-b">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-20 h-20">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
          <div className="text-xs text-gray-600 mt-1">
            {item.pads} • {item.size}
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-sm font-semibold text-gray-900">₹{item.price.toFixed(2)}</div>
            <div className="flex items-center space-x-2">
              <button className="w-6 h-6 flex items-center justify-center bg-pink-100 text-pink-600 rounded">
                -
              </button>
              <span className="text-sm">{item.quantity}</span>
              <button className="w-6 h-6 flex items-center justify-center bg-pink-100 text-pink-600 rounded">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-3">
        <button className="text-sm text-pink-600 font-medium hover:text-pink-700">
          Save for Later
        </button>
        <button className="text-sm text-pink-600 font-medium hover:text-pink-700">
          Remove
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
     
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-xl font-semibold text-center mb-6">Order Summary</h2>

          {/* Product Summary */}
          <div className="mb-6 flex items-center justify-center">
  <div className="w-32">
    <img
      src={cartItems[0]?.image || ordes1}
      alt="Product"
      className="w-full h-auto"
    />
  </div>
</div>


          {/* Order Details */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Item(1) :</span>
              <span className="text-gray-900">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Delivery Charges</span>
              <span className="text-pink-600">Free</span>
            </div>
            <div className="flex justify-between items-center font-medium">
              <span className="text-gray-600">Order Total :</span>
              <span className="text-gray-900">₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Delivery Note */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-center text-sm">
            <p>Note: Delivery on same day before ordering 12 PM</p>
          </div>

          {/* Delivery Address */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Delivery Address Details</h3>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="font-medium">Rosa Baumbach</p>
                <p className="text-gray-600">09755 MacGyver Neck</p>
                <p className="text-gray-600">New Lavinafurt</p>
                <p className="text-gray-600">50850-0995</p>
              </div>
              <button className="text-pink-600 text-sm font-medium">
                Change
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Select Your Payment method</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-pink-600 rounded-full border-gray-300 focus:ring-pink-500"
                />
                <span className="text-gray-700">Cash on Delivery/Pay Online On Delivery</span>
              </label>
            </div>
          </div>

          {/* Emergency Delivery */}
          <div className="mb-6">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={emergencyDelivery}
                onChange={(e) => setEmergencyDelivery(e.target.checked)}
                className="form-checkbox h-5 w-5 text-pink-600 rounded-full border-gray-300 focus:ring-pink-500"
              />
              <span className="text-gray-700">₹20 Emergency Delivery Charges</span>
            </label>
          </div>

          {/* Security Note */}
          <div className="text-xs text-gray-500 text-center mb-6">
            100% Safe and Secure Payment. Easy Returns. Original Products
          </div>

          {/* Place Order Button */}
          <button
            onClick={() => navigate('/order-success')}
            className="w-full bg-pink-600 text-white py-4 rounded-lg font-medium hover:bg-pink-700 transition-colors"
          >
            Place Order
          </button>
        </div>
      </main>
    </div>
  );
};

export default Checkout; 