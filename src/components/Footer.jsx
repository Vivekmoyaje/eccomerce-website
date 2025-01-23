import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-3xl font-bold text-white mb-2 flex items-center">
              <img
                src="src/assets/logo.jpg"
                className="rounded-full mr-3"
                width="60px"
                alt="Logo"
              />
              <p>E-Shop</p>
            </div>
            <p className="text-gray-400">
              Your one-stop shop for the best online shopping experience.
              High-quality products at unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:underline">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe & Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                className="w-full px-4 py-2 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <NavLink
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i class="bi bi-facebook"></i>
              </NavLink>
              <NavLink
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i class="bi bi-twitter"></i>
              </NavLink>
              <NavLink
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i class="bi bi-instagram"></i>
              </NavLink>
              <NavLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i class="bi bi-linkedin"></i>
              </NavLink>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} E-Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
