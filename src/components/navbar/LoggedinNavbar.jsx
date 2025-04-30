import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BellIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import AccountPopup from '../account/Account';

const LoggedInNavbar = () => {
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAccountPopupOpen(false);
    setIsSearchOpen(false);
  }, [navigate]);

  const toggleAccount = () => {
    setIsAccountPopupOpen((prev) => !prev);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsAccountPopupOpen(false);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setIsMenuOpen(false);
    setIsAccountPopupOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };

  const cartCount = 2;

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

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
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

          {/* Desktop Navigation */}
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

            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-500"
                onClick={toggleAccount}
              >
                <UserIcon className="h-6 w-6" />
                <span>Account</span>
              </button>
              {isAccountPopupOpen && (
                <div className="absolute right-0 mt-2 w-48">
                  <AccountPopup onClose={() => setIsAccountPopupOpen(false)} />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              className="text-gray-700"
              onClick={toggleSearch}
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
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

      {/* Mobile Search Bar */}
      <div 
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isSearchOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="p-4">
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
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="p-4 space-y-4">
          <button 
            className="flex items-center space-x-2 w-full py-2 px-4 text-left hover:bg-gray-50 rounded-lg"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="ml-auto bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            className="flex items-center space-x-2 w-full py-2 px-4 text-left hover:bg-gray-50 rounded-lg"
            onClick={() => navigate('/notifications')}
          >
            <BellIcon className="h-6 w-6 text-gray-700" />
            <span>Notifications</span>
          </button>

          <button 
            className="flex items-center space-x-2 w-full py-2 px-4 text-left hover:bg-gray-50 rounded-lg"
            onClick={toggleAccount}
          >
            <UserIcon className="h-6 w-6 text-gray-700" />
            <span>Account</span>
          </button>

          {isAccountPopupOpen && (
            <div className="mt-2 px-4">
              <AccountPopup onClose={() => setIsAccountPopupOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;
