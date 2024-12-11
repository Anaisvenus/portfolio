import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Landingpage Vitejs',
    description: 'Application e-commerce complète avec panier, paiement et gestion des commandes.',
    image: '../../dist/assets/landingpage_cipa.png',
    tech: ['Vite.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/Anaisvenus/landingpage_cipa',
    demo: 'https://landingpage-cipa-a2yx.vercel.app'
  },
  {
    title: 'E-commerce HTML/CSS',
    description: 'Tableau de bord interactif pour la visualisation de données en temps réel.',
    image: '../../dist/assets/e_commerce_cipa.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/Anaisvenus/Website-E_Commerce-CIPA',
    demo: '../../e_commerce/src/index.html'
  },
  // {
  //   title: 'Application Météo',
  //   description: 'Application météo avec géolocalisation et prévisions sur 7 jours.',
  //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80',
  //   tech: ['React', 'Redux', 'OpenWeather API', 'SCSS'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com'
  // }
];

export function Projects() {
  return (
    <section id="projets" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Mes Projets</h2>
          <p className="mt-4 text-xl text-gray-600">Une sélection de mes réalisations récentes</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-indigo-600 bg-indigo-50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Démo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}