import React from 'react';
import { Code, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DevFolio</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-indigo-600">Accueil</a>
            <a href="#projets" className="text-gray-700 hover:text-indigo-600">Projets</a>
            <a href="#competences" className="text-gray-700 hover:text-indigo-600">Compétences</a>
            <a href="#experience" className="text-gray-700 hover:text-indigo-600">Expérience</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#accueil" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Accueil</a>
              <a href="#projets" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Projets</a>
              <a href="#competences" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Compétences</a>
              <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Expérience</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}