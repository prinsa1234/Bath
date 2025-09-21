import React from 'react';

import { ShoppingCart, Plus, Trash2, ChevronLeft } from 'lucide-react';
import { useCart } from "../context/cartcontext.jsx";
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems = [], removeFromCart, increaseQuantity } = useCart() || {}; // Default cartItems to empty array
  const total = cartItems.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0); // Safe reduce call
const navigate = useNavigate();
const handleProceedToCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout'); // Navigate to Checkout if cart is not empty
    } else {
      console.log("Cart is empty - cannot proceed to checkout");
      // Optional: Show a message or toast for empty cart
    }
  };
  return (
    <div className="min-h-screen bg-[#e8ecef] text-[#607d9e] p-6">
      <Link to="/" className="text-sm mb-4 inline-block hover:underline flex items-center">
        <ChevronLeft size={16} className="mr-1" /> Back to Home
      </Link>

      {cartItems.length === 0 ? (
        <div className="max-w-4xl mx-auto text-center py-20">
          <ShoppingCart size={64} className="text-[#84a4bc] mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-[#607d9e] mb-4">Your Cart is Empty</h1>
          <p className="text-[#84a4bc] mb-6">
            Looks like you haven’t added any items to your cart yet. Start shopping to fill it up!
          </p>
          <Link to="/" className="mt-4 inline-block text-[#607d9e] hover:text-[#84a4bc] underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#607d9e] mb-6">Your Cart</h1>
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-contain mr-4 rounded-md" />
                  <div>
                    <h2 className="text-lg font-medium text-[#607d9e]">{item.name}</h2>
                    <p className="text-[#84a4bc] text-sm">₹{item.discountPrice.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-[#607d9e] text-white rounded hover:bg-[#84a4bc] transition"
                  >
                    +
                  </button>
                  <span className="text-[#607d9e] font-medium">{item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <p className="text-xl font-semibold text-[#607d9e]">
              Total: ₹{total.toLocaleString()}
            </p>
            <button
              onClick={handleProceedToCheckout}
              className="mt-4 px-6 py-3 bg-[#607d9e] text-white rounded-lg hover:bg-[#84a4bc] transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;