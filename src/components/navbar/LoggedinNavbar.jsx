import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BellIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import AccountPopup from '../account/Account';

const LoggedInNavbar = () => {
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { getCartItemCount } = useCart();

  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAccountPopupOpen(false);
  }, [navigate]);

  const toggleAccount = () => {
    setIsAccountPopupOpen((prev) => !prev);
    setIsMenuOpen(false); // Close mobile menu when opening account popup
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsAccountPopupOpen(false); // Close account popup when opening mobile menu
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  const cartCount = getCartItemCount();

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12 sm:h-14 md:h-16 px-2 sm:px-3 md:px-4">
        {/* Logo */}
        <img 
          src="/images/zotto.jpg" 
          alt="Zotto" 
          className="h-6 sm:h-8 md:h-10 cursor-pointer" 
          onClick={() => navigate('/')}
        />

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xs lg:max-w-md mx-2 sm:mx-3 md:mx-4">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-1.5 sm:py-2 px-3 sm:px-4 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-xs sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 mt-1.5 sm:mt-2 mr-2 sm:mr-3 text-gray-500 hover:text-pink-500"
              >
                <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3 lg:gap-4">
          <div 
            className="flex items-center cursor-pointer relative group" 
            onClick={() => navigate('/cart')}
          >
            <div className="relative">
              <ShoppingCartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] sm:text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="ml-1 text-xs sm:text-sm">Cart</span>
          </div>

          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate('/notifications')}
          >
            <BellIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            <span className="ml-1 text-xs sm:text-sm text-pink-500">Notification</span>
          </div>

          <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={toggleAccount}>
              <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              <span className="ml-1 text-xs sm:text-sm">Account</span>
            </div>
            {isAccountPopupOpen && (
              <div className="absolute right-0 mt-2 z-50">
                <AccountPopup onClose={() => setIsAccountPopupOpen(false)} />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => navigate('/cart')}
            className="relative"
          >
            <ShoppingCartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] sm:text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden bg-white shadow-md absolute w-full left-0 transform transition-transform duration-200 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Search Bar - Mobile */}
        <div className="p-2 sm:p-3 border-b border-gray-200">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-1.5 sm:py-2 px-3 sm:px-4 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-xs sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 mt-1.5 sm:mt-2 mr-2 sm:mr-3 text-gray-500 hover:text-pink-500"
              >
                <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </form>
        </div>
        
        <div className="flex flex-col items-start p-2 sm:p-3 gap-3 sm:gap-4">
          <div 
            className="flex items-center gap-2 cursor-pointer w-full py-1.5 sm:py-2 hover:bg-gray-50 px-2 rounded-lg" 
            onClick={() => navigate('/notifications')}
          >
            <BellIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            <span className="text-pink-500 text-xs sm:text-sm">Notification</span>
          </div>

          <div 
            className="flex items-center gap-2 cursor-pointer w-full py-1.5 sm:py-2 hover:bg-gray-50 px-2 rounded-lg" 
            onClick={toggleAccount}
          >
            <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            <span className="text-xs sm:text-sm">Account</span>
          </div>
          {isAccountPopupOpen && (
            <div className="w-full px-2">
              <AccountPopup onClose={() => setIsAccountPopupOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;
