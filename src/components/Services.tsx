import React from 'react';
import { Home, Building2, Factory, Check } from 'lucide-react';

const services = [
  {
    title: 'Residential Cleaning',
    icon: Home,
    description: 'Comprehensive home cleaning services tailored to your needs.',
    features: ['Deep cleaning', 'Regular maintenance', 'Window cleaning', 'Carpet cleaning']
  },
  {
    title: 'Commercial Cleaning',
    icon: Building2,
    description: 'Professional cleaning solutions for offices and commercial spaces.',
    features: ['Office cleaning', 'Floor maintenance', 'Restroom sanitation', 'Break room cleaning']
  },
  {
    title: 'Industrial Cleaning',
    icon: Factory,
    description: 'Specialized cleaning services for industrial facilities.',
    features: ['Factory cleaning', 'Warehouse maintenance', 'Equipment cleaning', 'Safety compliance']
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive cleaning solutions for every need</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}