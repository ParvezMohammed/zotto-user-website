import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const LoginNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/images/zotto.jpg" 
                alt="Zotto" 
                className="h-8 sm:h-10 md:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/login"
              className="px-6 py-2.5 border-2 border-pink-500 text-pink-500 font-medium rounded-full hover:bg-pink-50 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2.5 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="p-4 space-y-4">
          <Link
            to="/login"
            className="block w-full text-center px-6 py-2.5 border-2 border-pink-500 text-pink-500 font-medium rounded-full hover:bg-pink-50 transition-colors"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block w-full text-center px-6 py-2.5 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-colors"
            onClick={toggleMenu}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;
