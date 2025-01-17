import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          <p className="mt-4 text-xl text-gray-600">N'hésitez pas à me contacter pour discuter de vos projets</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                ></textarea>
              </div>
              <a href="mailto:anais.asse.akakpo@gmail.com" target='_blank'>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Envoyer
              </button></a>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-emerald-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">anais.asse.akakpo@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-emerald-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                <p className="mt-1 text-gray-600">+229 015 095 4612 / +229 019 520 6085</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-emerald-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Localisation</h3>
                <p className="mt-1 text-gray-600">Cotonou, Bénin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}