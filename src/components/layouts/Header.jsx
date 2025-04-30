import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BellIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartCount = 2;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigate]);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/zotto.jpg"
              alt="Zotto"
              className="h-8 sm:h-10 md:h-12 cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Desktop icons (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-pink-500"
              onClick={() => navigate('/cart')}
            >
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </button>

            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-pink-500"
              onClick={() => navigate('/notifications')}
            >
              <BellIcon className="h-6 w-6" />
              <span>Notifications</span>
            </button>

            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-pink-500"
              onClick={() => navigate('/profile')}
            >
              <UserIcon className="h-6 w-6" />
              <span>Account</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="w-full bg-white border-t border-gray-200 pt-4 pb-6 px-4">
          <div className="flex flex-col items-center gap-4">
            {[
              { label: 'Account', icon: <UserIcon className="h-5 w-5 text-pink-500" />, path: '/profile' },
              { label: 'Cart', icon: <ShoppingCartIcon className="h-5 w-5 text-pink-500" />, path: '/cart' },
              { label: 'Notifications', icon: <BellIcon className="h-5 w-5 text-pink-500" />, path: '/notifications' },
              { label: 'Logout', icon: <XMarkIcon className="h-5 w-5 text-pink-500" />, path: '/logout' }
            ].map((item, index) => (
              <button
                key={index}
                className="w-11/12 bg-[#F9F9F9] py-3 flex items-center justify-center gap-2 text-gray-800 rounded-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate(item.path);
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
