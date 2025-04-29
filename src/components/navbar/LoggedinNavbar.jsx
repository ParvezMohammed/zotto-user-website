import React, { useState } from 'react';
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

  const toggleAccount = () => {
    setIsAccountPopupOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  const cartCount = getCartItemCount();

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <img 
          src="/images/zotto.jpg" 
          alt="Zotto" 
          className="h-10 cursor-pointer" 
          onClick={() => navigate('/')}
        />

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 hover:text-pink-500"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          <div 
            className="flex items-center cursor-pointer relative group" 
            onClick={() => navigate('/cart')}
          >
            <div className="relative">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="ml-1">Cart</span>
          </div>

          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate('/notifications')}
          >
            <BellIcon className="h-6 w-6 text-gray-700" />
            <span className="ml-1 text-pink-500">Notification</span>
          </div>

          <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={toggleAccount}>
              <UserIcon className="h-6 w-6 text-gray-700" />
              <span className="ml-1">Account</span>
            </div>
            {isAccountPopupOpen && (
              <div className="absolute right-0 mt-2 z-50">
                <AccountPopup onClose={() => setIsAccountPopupOpen(false)} />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {/* Search Bar - Mobile */}
          <div className="p-4 border-b border-gray-200">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 hover:text-pink-500"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col items-start p-4 gap-4">
            <div 
              className="flex items-center gap-2 cursor-pointer relative" 
              onClick={() => navigate('/cart')}
            >
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </div>

            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => navigate('/notifications')}
            >
              <BellIcon className="h-6 w-6 text-gray-700" />
              <span className="text-pink-500">Notification</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleAccount}>
              <UserIcon className="h-6 w-6 text-gray-700" />
              <span>Account</span>
            </div>
            {isAccountPopupOpen && (
              <div className="absolute right-0 mt-2 z-50">
                <AccountPopup onClose={() => setIsAccountPopupOpen(false)} />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default LoggedInNavbar;
