import React from 'react';
import { Truck } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-orange-500 mr-2" />
              <span className="text-white font-bold">Suzuki Customs</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional customization of Suzuki mini trucks and vans. 
              Transform your vehicle into the perfect machine for your needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Custom Body Kits</li>
              <li>Off-road Modifications</li>
              <li>Interior Upgrades</li>
              <li>Performance Tuning</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Models</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>DA64V Series</li>
              <li>DA63T Series</li>
              <li>DA64W Every Wagon</li>
              <li>Scrum Series</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Phone: +63 912 345 6789</li>
              <li>Email: info@suzukicustoms.ph</li>
              <li>Address: Cebu City, Philippines</li>
              <li>Hours: Mon-Sat 8AM-6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Suzuki Customs. All rights reserved. Professional vehicle customization services.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;