import React, { useState } from "react";
import { ShoppingCart, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import '../pages/Login';

const Navbar = () => {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f8f8f6] shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#607d9e]">
          <Link to="/">LuxBath</Link>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-[#607d9e]">
            Home
          </Link>

          {/* Brands Dropdown */}
          <div className="relative">
            <button
              onClick={() => setBrandsOpen(!brandsOpen)}
              className="flex items-center text-gray-800 hover:text-[#607d9e]"
            >
              Brands <ChevronDown size={16} className="ml-1" />
            </button>
            {brandsOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-10">
                <Link to="/brands/hindware" className="block px-4 py-2 hover:bg-gray-100">
                  Hindware
                </Link>
                <Link to="/brands/jaquar" className="block px-4 py-2 hover:bg-gray-100">
                  Jaquar
                </Link>
              <Link to="/brands/KIDLEN" className="block px-4 py-2 hover:bg-gray-100">
                  KIDLEN
                </Link>
                <Link to="/brands/Plumber" className="block px-4 py-2 hover:bg-gray-100">
                  Plumber
                </Link>
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center white hover:text-[#607d9e]"
            >
              Categories <ChevronDown size={16} className="ml-1" />
            </button>
            {categoriesOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-10">
                <Link to="/categories/taps" className="block px-4 py-2 hover:bg-gray-100">
                  Taps
                </Link>
                <Link to="/categories/Sinks" className="block px-4 py-2 hover:bg-gray-100">
                  Sinks
                </Link>
                <Link to="/categories/showers" className="block px-4 py-2 hover:bg-gray-100">
                  Showers
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-800 hover:text-[#607d9e]">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-[#607d9e]">
            Contact
          </Link>
        </div>

        {/* Right Section: Login & Cart */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="flex items-center space-x-1 border border-gray-300 rounded-lg px-4 py-1.5 hover:shadow-sm transition"
          >
            <User size={18} className="text-[#607d9e]" />
            <span className="text-[#607d9e] font-medium">Login</span>
          </Link>

          <Link to="/cart" className="relative flex items-center bg-[#607d9e] text-white px-4 py-1.5 rounded-lg">
            <ShoppingCart size={18} className="mr-2" />
            <span className="font-medium">Cart</span>
            <span className="absolute -top-2 -right-2 bg-[#84a4bc] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
