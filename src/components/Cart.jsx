import React from 'react';
import { useCart } from '../context/CartContext';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import LoggedinNavbar from './navbar/LoggedinNavbar';
import Footer from './Footer';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <LoggedinNavbar />
        <div className="flex-grow container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6">
            <div className="text-center py-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600">Add items to your cart to continue shopping</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <LoggedinNavbar />
      <div className="flex-grow container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Delivery Address */}
          <div className="bg-white p-4 rounded-lg mb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Delivered to:</span>
                </div>
                <div className="ml-2">
                  <p className="font-medium">Rosa Baumbach</p>
                  <p className="text-gray-600">09755 MacGyver Neck New Lavinafurt</p>
                  <p className="text-gray-600">50850-0995</p>
                </div>
              </div>
              <button className="text-pink-500 hover:text-pink-600">
                Change
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg flex items-start gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.pads} • {item.size}
                  </div>
                  <div className="mt-2 text-lg">₹{item.price.toFixed(2)}</div>
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center border rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-pink-500 hover:text-pink-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <div>Delivery by Tue Mar 25</div>
                  <div className="text-green-600">₹40 Free</div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Details */}
          <div className="bg-white p-4 rounded-lg mt-4">
            <h3 className="text-lg font-medium mb-4">Price Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Price ({cart.length} items)</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-medium">
                <span>Total Amount</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Emergency Delivery */}
          <div className="bg-white p-4 rounded-lg mt-4 flex justify-between items-center">
            <span>Emergency Delivery Charges</span>
            <span>₹20</span>
          </div>

          {/* Note */}
          <div className="text-center mt-4 text-gray-600">
            Note: Delivery on same day before ordering 12 PM
          </div>

          {/* Safe Payment Note */}
          <div className="text-center mt-2 text-sm text-gray-600">
            100% Safe and Secure Payment. Easy Returns. Original Products
          </div>

          {/* Order confirmation message */}
          <div className="bg-gray-100 p-4 rounded-lg mt-4 text-center text-sm">
            Order confirmation message will be send to your registered phone number
          </div>

          {/* Place Order Button */}
          <div className="mt-6 mb-8">
            <button 
              onClick={handlePlaceOrder}
              className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart; 