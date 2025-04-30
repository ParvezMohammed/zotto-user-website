import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';
import confetti from 'canvas-confetti';
import LoggedinNavbar from '../../../components/navbar/LoggedinNavbar';

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any cart data from localStorage if needed
    localStorage.removeItem('cart');

    // Trigger confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleContinueShopping = () => {
    // Force a page reload while navigating to ensure fresh state
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LoggedinNavbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl w-full space-y-8 text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-100 mb-8">
            <CheckIcon className="h-12 w-12 text-pink-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Thank you for Ordering!</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. In viverra mus molestie metus curabitur
            semper nec accumsan tincidunt. Congue vel ultricies posuere proin non sit nunc
            sagittis. Ut suspendisse eget libero erat scelerisque nisl. Amet suspendisse purus sed
            volutpat sit enim tellus. Aenean eget aliquam turpis diam.
          </p>
          <div className="mt-8">
            <button
              onClick={handleContinueShopping}
              className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess; 