import React, { useState } from 'react';
import { ShoppingCart, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from "../context/cartcontext.jsx";
import About from '../pages/About';

const Navbar = () => {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const { cartItems } = useCart() || {}; // Added fallback to handle undefined
  const cartItemCount = cartItems ? cartItems.length : 0; // Safely calculate length

  return (
    <nav className="w-full bg-[#f8f8f6] shadow-sm border-b border-gray-200" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#607d9e]">
          <Link to="/" aria-label="Go to Home">LuxBath</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-[#607d9e] transition" aria-label="Go to Home">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => setBrandsOpen(!brandsOpen)}
              className="flex items-center text-gray-800 hover:text-[#607d9e] transition"
              aria-label="Toggle brands menu"
              aria-expanded={brandsOpen}
              aria-controls="brands-menu"
            >
              Brands <ChevronDown size={16} className="ml-1" />
            </button>
            {brandsOpen && (
              <div id="brands-menu" className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-10" role="menu">
                <Link to="/brands/Hindware" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition" role="menuitem">Hindware</Link>
                <Link to="/brands/Jaquar" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition" role="menuitem">Jaquar</Link>
                <Link to="/brands/KIDLEN" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition" role="menuitem">KIDLEN</Link>
                <Link to="/brands/Kohler" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition" role="menuitem">Kohler</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center text-gray-800 hover:text-[#607d9e] transition"
              aria-label="Toggle categories menu"
              aria-expanded={categoriesOpen}
              aria-controls="categories-menu"
            >
              Categories <ChevronDown size={16} className="ml-1" />
            </button>
            {categoriesOpen && (
              <div id="categories-menu" className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-10" role="menu">
                <Link to="/categories/Taps" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition" role="menuitem">Taps</Link>
                <Link to="/categories/Sinks" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition" role="menuitem">Sinks</Link>
                <Link to="/categories/Showers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition" role="menuitem">Showers</Link>
              </div>
            )}
          </div>
          <Link to="/about" className="text-gray-800 hover:text-[#607d9e] transition" aria-label="Go to About Us">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-[#607d9e] transition" aria-label="Go to Contact">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="flex items-center space-x-1 border border-gray-300 rounded-lg px-4 py-1.5 hover:shadow-sm transition" aria-label="Go to Login">
            <User size={18} className="text-[#607d9e]" />
            <span className="text-[#607d9e] font-medium">Login</span>
          </Link>
          <Link to="/cart" className="relative flex items-center bg-[#607d9e] text-white px-4 py-1.5 rounded-lg hover:bg-[#84a4bc] transition" aria-label="Go to Cart">
            <ShoppingCart size={18} className="mr-2" />
            <span className="font-medium">Cart</span>
            <span className="absolute -top-2 -right-2 bg-[#84a4bc] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItemCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;