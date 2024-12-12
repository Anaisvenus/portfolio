import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          
          <div className="mt-8 flex space-x-6">
            <a href="https://github.com/mxdukpe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/ana%C3%AFs-asse-akakpo-6ba00324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:anais.asse.akakpo@gmail.com" className="text-gray-400 hover:text-white">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Anaïs ASSE AKAKPO. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}