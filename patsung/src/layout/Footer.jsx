import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shopping Section */}
          <div>
            <h3 className="text-[#ffd32a] font-semibold text-lg mb-4">Shopping</h3>
            <ul className="space-y-2">
              <li><a href="/pressure-cooker" className="hover:text-[#ffd32a] transition-colors">Pressure Cooker</a></li>
              <li><a href="/cookware" className="hover:text-[#ffd32a] transition-colors">Cookware</a></li>
              <li><a href="/kitchen-appliances" className="hover:text-[#ffd32a] transition-colors">Kitchen Appliances</a></li>
              <li><a href="/food-preparation" className="hover:text-[#ffd32a] transition-colors">Food Preparation</a></li>
              <li><a href="/accessories" className="hover:text-[#ffd32a] transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-[#ffd32a] font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/track-order" className="hover:text-[#ffd32a] transition-colors">Track Order</a></li>
              <li><a href="/shipping-policy" className="hover:text-[#ffd32a] transition-colors">Shipping Policy</a></li>
              <li><a href="/return-policy" className="hover:text-[#ffd32a] transition-colors">Return Policy</a></li>
              <li><a href="/contact" className="hover:text-[#ffd32a] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-[#ffd32a] font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffd32a]" />
                <a href="tel:+919742334411" className="hover:text-[#ffd32a] transition-colors">+91 97423 34411</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#ffd32a]" />
                <a href="https://wa.me/919742334411" className="hover:text-[#ffd32a] transition-colors">WhatsApp: +91 97423 34411</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ffd32a]" />
                <a href="mailto:customercare@patsung.com" className="hover:text-[#ffd32a] transition-colors">customercare@patsung.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ffd32a]" />
                <span>9:30 am - 6:30 pm</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-[#ffd32a] font-semibold text-lg mb-4">Corporate Office</h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#ffd32a]" />
              <p className="text-sm">
                Nagarjuna Castle, No.1/1, & 1/2,<br />
                Wood Street, Ashok Nagar,<br />
                Richmond Town,<br />
                Bengaluru - 560025
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Patsung. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-[#ffd32a] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-[#ffd32a] transition-colors">
                Terms & Conditions
              </a>
              <a href="/shipping" className="text-sm text-gray-400 hover:text-[#ffd32a] transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;