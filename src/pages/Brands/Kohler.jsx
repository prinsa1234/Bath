import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../../context/cartcontext.jsx";

const Kohler = () => {
  const { addToCart } = useCart() || {};
  const products = [
    {
      name: 'Kohler Modern Faucet',
      price: 15000,
      discountPrice: 10500,
      rating: 4.9,
      image: '/itemimg/koh1.jpeg',
    },
    {
      name: 'Kohler Rain Shower System',
      price: 35000,
      discountPrice: 22000,
      rating: 4.8,
      image: '/itemimg/koh2.jpeg',
    },
    {
      name: 'Kohler Smart Toilet',
      price: 80000,
      discountPrice: 65000,
      rating: 4.7,
      image: '/itemimg/koh3.jpeg',
    },
  ];
  return (
    <div className="min-h-screen w-screen bg-[#e8ecef] text-[#607d9e] p-6">
      {/* Back to Home Link */}
      <Link to="/" className="text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>

      {/* Brand Overview Section */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-8">
        <div className="flex-1">
          <span className="inline-block bg-[#e0e6eb] text-[#607d9e] text-sm px-3 py-1 rounded-full mb-2">
            Premium Brand
          </span>
          <h1 className="text-4xl font-bold text-[#607d9e] mb-2">Kohler</h1>
          <p className="text-[#607d9e] mb-4">
            Kohler is a globally recognized leader in kitchen and bathroom products, known for its
            innovation, craftsmanship, and luxurious designs. With more than 145 years of excellence,
            Kohler continues to set the benchmark in sanitaryware and lifestyle products.
          </p>
          <div className="space-y-2 text-sm">
            <p><span className="text-[#84a4bc]">Founded</span> 1873</p>
            <p><span className="text-[#84a4bc]">Headquarters</span> Wisconsin, USA</p>
            <p><span className="text-[#84a4bc]">Products</span> 3 Items</p>
            <p><span className="text-[#84a4bc]">Specialties</span> 4 Areas</p>
          </div>
        </div>
        <div className="w-54 h-32 bg-[#f0f4f7] flex items-center justify-center rounded-lg shadow-sm">
          {/* Kohler logo */}
          <img
            src="/images/kohler_logo.png"
            alt="Kohler Logo"
            className="w-150 h-32 object-contain"
          />
        </div>
      </div>

      {/* Specialties Section */}
      <div className="w-full mt-8">
        <h2 className="text-2xl font-semibold text-[#607d9e] mb-2">Our Specialties</h2>
        <p className="text-[#84a4bc] mb-4">Kohler specializes in these key areas, combining luxury and performance.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Luxury Faucets', 'Sanitaryware', 'Kitchen Sinks', 'Wellness Products'].map((specialty) => (
            <div
              key={specialty}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32 text-center hover:shadow-md transition"
            >
              <span className="text-[#84a4bc]">{specialty}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="w-full mt-8">
        <div className="flex items-center mb-4">
          <span className="inline-block bg-[#e0e6eb] text-[#607d9e] text-sm px-3 py-1 rounded-full mr-2">
            Premium Collection
          </span>
          <h2 className="text-2xl font-semibold text-[#607d9e]">Kohler Products</h2>
        </div>
        <p className="text-[#84a4bc] mb-4">
          Explore our premium range of Kohler products, designed to bring luxury and innovation to your spaces.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition"
            >
              <div className="w-full h-48 bg-[#f0f4f7] flex items-center justify-center rounded-lg mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>
              <p className="text-[#84a4bc] text-sm mb-1">Taps</p>
              <h3 className="text-[#607d9e] font-medium mb-1">
                {product.name}
              </h3>
              <div className="text-yellow-500 text-sm mb-1">
                ★★★★☆ {product.rating} (156)
              </div>
              <div className="text-[#607d9e] mb-2">
                <span className="line-through mr-2">{product.price}</span>
                <span className="text-[#ff4d4d] font-bold">
                  {product.discountPrice}
                </span>
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

export default Kohler;
