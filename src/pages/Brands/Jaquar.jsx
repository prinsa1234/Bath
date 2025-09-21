import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartcontext.jsx";

const Jaquar = () => {
  const { addToCart } = useCart() || {};

  const products = [
    {
      name: "Jaquar Premium Basin Mixer",
      price: 7500,
      discountPrice: 4500,
      rating: 4.9,
      image: "/itemimg/jaq1.jpeg",
    },
    {
      name: "Jaquar Rain Shower",
      price: 14000,
      discountPrice: 9000,
      rating: 4.8,
      image: "/itemimg/jaq2.jpeg",
    },
    {
      name: "Jaquar Wall Hung Toilet",
      price: 18000,
      discountPrice: 12000,
      rating: 4.7,
      image: "/itemimg/jaq3.jpeg",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#e8ecef] text-[#607d9e] p-6">
      <Link to="/" className="text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
      <div className="w-full flex flex-col lg:flex-row items-start gap-8">
        <div className="flex-1">
          <span className="inline-block bg-[#e0e6eb] text-[#607d9e] text-sm px-3 py-1 rounded-full mb-2">
            Premium Brand
          </span>
          <h1 className="text-4xl font-bold text-[#607d9e] mb-2">Jaquar</h1>
          <p className="text-[#607d9e] mb-4">
            Jaquar is a globally renowned brand offering innovative bathroom solutions with superior craftsmanship.
          </p>
          <div className="space-y-2 text-sm">
            <p><span className="text-[#84a4bc]">Founded</span> 1960</p>
            <p><span className="text-[#84a4bc]">Headquarters</span> India</p>
            <p><span className="text-[#84a4bc]">Products</span> 3 Items</p>
            <p><span className="text-[#84a4bc]">Specialties</span> 4 Areas</p>
          </div>
        </div>
        <div className="w-54 h-32 bg-[#f0f4f7] flex items-center justify-center rounded-lg shadow-sm">
          <img src="/images/jaguar_logo.png" alt="Jaquar Logo" className="w-150 h-32 object-contain" />
        </div>
      </div>
      <div className="w-full mt-8">
        <h2 className="text-2xl font-semibold text-[#607d9e] mb-2">Our Specialties</h2>
        <p className="text-[#84a4bc] mb-4">Jaquar excels in delivering luxury and innovation.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Taps", "Showers", "Sanitaryware", "Accessories"].map((specialty) => (
            <div
              key={specialty}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32 text-center hover:shadow-md transition"
            >
              <span className="text-[#84a4bc]">{specialty}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="flex items-center mb-4">
          <span className="inline-block bg-[#e0e6eb] text-[#607d9e] text-sm px-3 py-1 rounded-full mr-2">
            Premium Collection
          </span>
          <h2 className="text-2xl font-semibold text-[#607d9e]">Jaquar Products</h2>
        </div>
        <p className="text-[#84a4bc] mb-4">Explore Jaquar’s premium bathroom fittings.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition"
            >
              <div className="w-full h-48 bg-[#f0f4f7] flex items-center justify-center rounded-lg mb-2">
                <img src={product.image} alt={product.name} className="h-full object-contain" />
              </div>
              <p className="text-[#84a4bc] text-sm mb-1">Taps</p>
              <h3 className="text-[#607d9e] font-medium mb-1">{product.name}</h3>
              <div className="text-yellow-500 text-sm mb-1">★★★★☆ {product.rating} (156)</div>
              <div className="text-[#607d9e] mb-2">
                <span className="line-through mr-2">₹{product.price.toLocaleString()}</span>
                <span className="text-[#ff4d4d] font-bold">₹{product.discountPrice.toLocaleString()}</span>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-[#607d9e] text-white py-2 rounded-lg hover:bg-[#84a4bc] transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jaquar;