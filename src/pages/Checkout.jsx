import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartcontext.jsx'; // Adjust path based on your structure

const Checkout = () => {
  const { cartItems } = useCart() || {}; // Fetch cart items from context

  // Calculate subtotal, GST, and total
  const subtotal = cartItems.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0);
  const gst = subtotal * 0.18; // 18% GST
  const deliveryFee = 0; // Free delivery
  const total = subtotal + gst + deliveryFee;

  return (
    <div className="min-h-screen bg-[#e8ecef] text-[#607d9e] p-6">
      {/* Back to Cart Link */}
      <Link to="/cart" className="text-sm mb-4 inline-block hover:underline flex items-center">
        <span className="mr-1">&larr;</span> Back to Cart
      </Link>

      {/* Header */}
      <h1 className="text-4xl font-bold text-[#607d9e] mb-2">Checkout</h1>
      <p className="text-[#84a4bc] mb-8">
        Secure payment for your premium bathroom accessories.
      </p>

      {/* Step Indicator */}
      <div className="flex items-center justify-center space-x-8 mb-8">
        <div className="flex items-center space-x-2">
          <span className="bg-[#607d9e] text-white rounded-full px-3 py-1 text-sm">1</span>
          <span className="text-[#607d9e]">Order Review</span>
        </div>
        <span className="text-[#84a4bc]">—</span>
        <div className="flex items-center space-x-2">
          <span className="bg-[#e0e6eb] text-[#84a4bc] rounded-full px-3 py-1 text-sm">2</span>
          <span className="text-[#84a4bc]">Payment & Details</span>
        </div>
        <span className="text-[#84a4bc]">—</span>
        <div className="flex items-center space-x-2">
          <span className="bg-[#e0e6eb] text-[#84a4bc] rounded-full px-3 py-1 text-sm">3</span>
          <span className="text-[#84a4bc]">Confirmation</span>
        </div>
      </div>

      {/* Review Order and Summary Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Review Your Order */}
        <div>
          <h2 className="text-2xl font-semibold text-[#607d9e] mb-4">Review Your Order</h2>
          {cartItems.length === 0 ? (
            <p className="text-[#84a4bc]">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain mr-4 rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-[#607d9e]">{item.name}</h3>
                    <p className="text-[#84a4bc] text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-[#607d9e] font-medium">₹{(item.discountPrice * item.quantity).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-semibold text-[#607d9e] mb-4">Order Summary</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <p className="text-[#84a4bc]">Subtotal ({cartItems.length} items)</p>
              <p className="text-[#607d9e]">₹{subtotal.toLocaleString()}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-[#84a4bc]">Delivery Fee</p>
              <p className="text-[#607d9e]">FREE</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-[#84a4bc]">GST (18%)</p>
              <p className="text-[#607d9e]">₹{gst.toLocaleString()}</p>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="flex justify-between mb-4">
              <p className="text-[#607d9e] font-semibold">Total</p>
              <p className="text-[#607d9e] font-semibold">₹{total.toLocaleString()}</p>
            </div>
            <p className="text-[#84a4bc] text-sm mb-4">
              Free delivery on orders above ₹5,000
            </p>
            <button className="w-full bg-[#607d9e] text-white py-3 rounded-lg hover:bg-[#84a4bc] transition">
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;