import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom'; // Add this import

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate(); // Add this hook

  const categories = [
    'Pressure Cookers',
    'Cookware',
    'Kitchen Tools',
    'Electrical Appliances',
    'Food Preparation',
    'Combo Sets',
    'Accessories',
    'New Arrivals'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add this handler for cart click
  const handleCartClick = () => {
    navigate('/checkout');
  };

  return (
    <div className={`w-full fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      {/* Top Navigation Bar */}
      <div className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left - Menu and Logo */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden hover:bg-gray-100 rounded-full p-1">
              <Menu className="w-6 h-6" />
            </button>
            <a href="/" className="flex items-center">
              <div className="text-[#1e3799] font-bold text-2xl">Patsung</div>
            </a>
          </div>

          {/* Middle - Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search On Patsung"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3799]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-[#1e3799] transition-colors">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Right - Cart - Updated with onClick handler */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handleCartClick}
              className="relative hover:bg-gray-100 rounded-full p-2 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-[#ffd32a] text-[#1e3799] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="w-full bg-[#1e3799] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto hide-scrollbar">
            {categories.map((category) => (
              <a 
                key={category}
                href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
                className="px-4 py-3 whitespace-nowrap hover:bg-[#152a6e] transition-colors hover:text-[#ffd32a]"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Search (visible only on mobile) */}
      <div className="md:hidden p-4 bg-white border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search On Patsung"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3799]"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <Search className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;