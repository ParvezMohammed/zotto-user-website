import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BellIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon,MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Notifications from '../notification/Notification';
import AccountPopup from '../account/Account';

const LoggedInNavbar = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNotifications = () => {
    setIsNotificationsOpen((prev) => !prev);
  };

  const toggleAccount = () => {
    setIsAccountPopupOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <img src="/images/zotto.jpg" alt="Zotto" className="" />
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
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center cursor-pointer">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            <span className="ml-1">Cart</span>
          </div>

          <div className="flex items-center cursor-pointer" onClick={toggleNotifications}>
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
          <div className="flex flex-col items-start p-4 gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/cart')}>
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              <span>Cart</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={toggleNotifications}>
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

      {/* Notifications Modal */}
      {isNotificationsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <button
              onClick={toggleNotifications}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <Notifications onClose={toggleNotifications} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default LoggedInNavbar;
