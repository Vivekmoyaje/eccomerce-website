import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800 flex items-center">
          <img
            src="src/assets/logo.jpg"
            className="rounded-full mr-3"
            width="75"
            alt="Logo"
          />
          <p>E-Shop</p>
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            className="w-96 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search"
          />
          <button className="absolute top-0 right-0 mt-2 mr-3 text-gray-500 hover:text-gray-800">
            <i className="bi bi-search"></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="text-gray-900 hover:text-blue-600">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-gray-900 hover:text-blue-600">
            Shop
          </NavLink>
          <NavLink to="/about" className="text-gray-900 hover:text-blue-600">
            About
          </NavLink>
          <NavLink to="/contact" className="text-gray-900 hover:text-blue-600">
            Contact
          </NavLink>

          {/* Cart Icon */}
          <NavLink
            to="/cart"
            className="text-gray-900 hover:text-blue-600 flex items-center text-3xl ps-5"
          >
            <i className="bi bi-cart4"></i>
          </NavLink>

          {/* Login Button */}
          <NavLink
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-5 shadow-lg flex flex-col justify-center items-center w-96 mx-auto">
          <NavLink
            to="/"
            className="block px-6 py-3 text-gray-900 hover:text-blue-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="block px-6 py-3 text-gray-900 hover:text-blue-600"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="block px-6 py-3 text-gray-900 hover:text-blue-600"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-6 py-3 text-gray-900 hover:text-blue-600"
          >
            Contact
          </NavLink>
          <div className="px-6 py-3">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <NavLink
            to="/cart"
            className="block px-6 py-3 text-gray-900 hover:text-white flex items-center"
          >
            <i className="bi bi-cart4"></i>
            Cart
          </NavLink>
          <NavLink
            to="/login"
            className="block px-6 py-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600"
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
