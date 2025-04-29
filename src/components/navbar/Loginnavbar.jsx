import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const LoginNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
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

        {/* Desktop View */}
        <div className="hidden md:flex gap-6">
          <Link
            to="/login"
            className="px-6 py-3 border border-[#FF6584] text-[#FF6584] bg-white rounded-full"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-[#FF6584] text-white rounded-full"
          >
            Register
          </Link>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center gap-6 p-4">
            <Link
              to="/login"
              className="w-full text-center px-6 py-3 border border-[#FF6584] text-[#FF6584] bg-white rounded-full"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="w-full text-center px-6 py-3 bg-[#FF6584] text-white rounded-full"
              onClick={toggleMenu}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LoginNavbar;
