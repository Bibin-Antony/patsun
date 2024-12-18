// src/components/ProductCard.jsx
import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom'; // Add this import

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Add this hook

  // Add these handler functions
  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-end gap-2 mb-2">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />

      <div className="text-sm text-gray-500 mb-1">SKU: {product.sku}</div>
      <h3 className="font-medium text-lg mb-2">{product.name}</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl font-bold">₹{product.price}</span>
        <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
        <span className="text-green-600 text-sm">
          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleAddToCart} // Updated onClick handler
          className="flex-1 bg-[#1e3799] text-white py-2 rounded hover:bg-[#152a6e] transition-colors"
        >
          Add to Cart
        </button>
        <button 
          onClick={handleBuyNow} // Added onClick handler
          className="flex-1 border border-[#1e3799] text-[#1e3799] py-2 rounded hover:bg-gray-50 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;