import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Développeuse Frontend',
    company: 'Direction Générale CIPA JESSOUGNON',
    period: 'Octobre 2024 - Janvier 2025',
    description: 'Développement d\'applications web avec React et TypeScript.',
    technologies: ['React', 'TypeScript', 'Next.js', 'PHP', 'JavaScript', 'Figma']
  },
  {
    title: 'Community Manager',
    company: 'Direction Générale CIPA JESSOUGNON',
    period: 'Octobre 2024 - Janvier 2025',
    description: "Gestion de réseaux sociaux et mise à jour du site vitrine de l'entreprise",
    technologies: ['Capcut', 'Canva', 'Figma']
  },
  {
    title: 'Développeuse Frontend',
    company: 'IMPACT PLUS CONSULTING',
    period: 'Février 2024 - Juin 2024',
    description: 'Création d\'un site web de gestion de documents et de commandes des clients',
    technologies: ['Figma', 'React.js', 'Tailwind CSS']
  },
  {
    title: 'Community Manager',
    company: 'IMPACT PLUS CONSULTING',
    period: 'Février 2024 - Juin 2024',
    description: 'Gestion de réseaux sociaux et mise à jour du site vitrine de l\'entreprise',
    technologies: ['Capcut', 'Canva', 'Figma']
  },
  {
    title: ' Designer UI/UX',
    company: 'Diretion Générale Moov Africa Bénin',
    period: 'Septembre 2024 - Décembre 2024',
    description: 'Création de maquettes d’application à l’aide de figma et suivi du développements de ces applications avec le support de développeurs.',
    technologies: ['Figma', 'Canva', 'Powerpoint', 'Excel']
  },
  {
    title: 'Développeur Web Junior',
    company: 'Diretion Générale Moov Africa Bénin',
    period: 'Août 2022 - Décembre 2022',
    description: 'Implémentation d’une application de gestion de documents avec REACT JS et NEST JS. Cette application web contient une authentification, une gestion des utilisateurs, des requêtes et suivi de celles-ci',
    technologies: ['JavaScript', 'React', 'Tailwind CSS', 'Nest']
  },
  {
    title: 'Community Manager',
    company: 'EPITECH Bénin',
    period: '2018 - 2019',
    description: 'Membre d’une association de robotique appelée TEKBOT, j’ai été appelée à gérer les réseaux de cette association (WhatsApp, Instagram, LinkedIn)',
    technologies: ['JavaScript', 'React', 'CSS3', 'Git']
  },
  {
    title: 'Community Manager',
    company: 'Moh_crea',
    period: 'Juin 2024-en cours(télétravail)',
    description: 'Gestion des réseaux sociaux(Instagram, Facebook, ) de l’entreprise MOH_CREA, entreprise de design graphique.',
    technologies: []
  },
  {
    title: 'Community Manager',
    company: 'SIN NUNU',
    period: 'Septembre 2024/ en cours(télétravail)',
    description: 'Gestion des réseaux sociaux(Instagram et Tiktok, ) de l’Entreprise SIN NUNU',
    technologies: ['JavaScript', 'React', 'CSS3', 'Git']
  },
  {
    title: 'Community Manager',
    company: 'Fresh Nachos',
    period: 'Septembre 2024/ en cours(télétravail)',
    description: 'Gestion des réseaux sociaux(Instagram et Tiktok, ) du restaurant Fresh Nachos',
    technologies: ['JavaScript', 'React', 'CSS3', 'Git']
  },
  {
    title: 'Community Manager',
    company: 'Restaurant Le Complex',
    period: 'Septembre 2024/ en cours(télétravail)',
    description: 'Gestion des réseaux sociaux(Instagram et Tiktok, ) du restaurant le Complex',
    technologies: ['JavaScript', 'React', 'CSS3', 'Git']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Expériences Professionnelles</h2>
          <p className="mt-4 text-xl text-gray-600">Mon parcours professionnel</p>
        </div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <div className="mt-1 flex items-center text-gray-500">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm text-emerald-600 bg-emerald-50 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}