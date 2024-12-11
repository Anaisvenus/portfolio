import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="accueil" className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Anaïs ASSE AKAKPO
              <span className="block text-indigo-600">Frontend Developper/Web Designer</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Passionnée par la création d'expériences web modernes et intuitives. Spécialisée en React, Next, Tailwindcss, TypeScript et UX/UI Design.
            </p>
            <div className="mt-8 flex space-x-4 sm:justify-center lg:justify-start">
              <a href="https://github.com/mxdukpe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/ana%C3%AFs-asse-akakpo-6ba00324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:anais.asse.akakpo@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <img
              className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="../../dist/assets/portfolio_image.jpg" alt="Example Image" />
            {/* <img
              className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80"
              alt="Espace de travail développeur"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}