import React from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
}