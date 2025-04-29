import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import LoggedinNavbar from '../components/navbar/LoggedinNavbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [emergencyDelivery, setEmergencyDelivery] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Redirect to cart if no items
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const emergencyCharge = emergencyDelivery ? 20 : 0;
    return subtotal + emergencyCharge;
  };

  const handleContinue = async () => {
    try {
      setIsProcessing(true);
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Navigate to success page
      navigate('/order-success');
    } catch (error) {
      console.error('Error processing order:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <LoggedinNavbar />
      <div className="flex-grow container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Delivery and Payment */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Address Section */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">1. Delivery Address Details</h2>
                <div className="space-y-2">
                  <p className="font-medium">Rosa Baumbach</p>
                  <p className="text-gray-600">09755 MacGyver Neck</p>
                  <p className="text-gray-600">New Lavinafurt</p>
                  <p className="text-gray-600">50850-0995</p>
                  <button className="text-pink-500 hover:text-pink-600">
                    Change
                  </button>
                </div>
              </div>

              {/* Payment Method Section */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">2. Select Your Payment method</h2>
                
                {/* Payment Options */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                    />
                    <label htmlFor="cod" className="ml-2">
                      Cash on Delivery/Pay Online On Delivery
                    </label>
                  </div>

                  {/* Emergency Delivery Option */}
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Emergency delivery</h3>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="emergency"
                        checked={emergencyDelivery}
                        onChange={(e) => setEmergencyDelivery(e.target.checked)}
                        className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                      />
                      <label htmlFor="emergency" className="ml-2">
                        ₹20 Emergency Delivery Charges
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                disabled={isProcessing}
                className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 disabled:bg-pink-300 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Continue'}
              </button>
            </div>

            {/* Right Section - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                {/* Product Summary */}
                <div className="mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4 flex-grow">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Details */}
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Item({cartItems.length}):</span>
                    <span>₹{calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Delivery Charges</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  {emergencyDelivery && (
                    <div className="flex justify-between mb-2">
                      <span>Emergency Delivery</span>
                      <span>₹20.00</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                    <span>Order Total:</span>
                    <span className="text-pink-500">₹{calculateTotal().toFixed(2)}</span>
                  </div>
                </div>

                {/* Delivery Note */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-sm">
                  <p>Note: Delivery on same day before ordering 12 PM</p>
                </div>

                {/* Security Note */}
                <div className="mt-4 text-center text-sm text-gray-600">
                  <p>100% Safe and Secure Payment. Easy Returns. Original Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout; 