
import React from 'react';
import { BellIcon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img src="/images/zotto.jpg" alt="Zotto" className="h-16 w-auto" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="flex items-center bg-purple-50 rounded-md">
                <input
                  type="text"
                  className="w-full py-2 px-4 bg-transparent outline-none"
                  placeholder="Search..."
                />
                <button className="p-2">
                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <div className="relative flex items-center">
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  4
                </span>
              </div>
              <span className="text-sm text-gray-700 ml-1">Cart</span>
            </div>

            {/* Notification */}
            <div className="flex items-center">
              <BellIcon className="h-6 w-6 text-gray-700" />
              <span className="text-sm text-pink-500 ml-1">Notification</span>
            </div>

            {/* Account */}
            <div className="flex items-center">
              <UserIcon className="h-6 w-6 text-gray-700" />
              <span className="text-sm text-gray-700 ml-1">Account</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;