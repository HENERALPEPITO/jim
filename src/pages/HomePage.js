import React from 'react';
import { ArrowRight, Settings, Star, Truck } from 'lucide-react';
import { vehicles } from '../data/vehicles';

function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Custom Suzuki Mini Trucks
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your Suzuki DA16, DA17, DA63, DA64V, DA64W, and Scrum into the ultimate custom vehicle. 
              Professional modifications, premium quality, unmatched performance.
            </p>
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-flex items-center"
            >
              Browse Vehicles <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Suzuki Customs?</h2>
            <p className="text-gray-300 text-lg">Professional customization with attention to detail</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Customization</h3>
              <p className="text-gray-300">Professional modifications tailored to your specific needs and preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-300">Only the finest materials and components for lasting durability and performance.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Versatile Options</h3>
              <p className="text-gray-300">From family haulers to off-road beasts, we have configurations for every need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Builds</h2>
            <p className="text-gray-300 text-lg">Our most popular custom configurations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.slice(0, 3).map(vehicle => (
              <div key={vehicle.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{vehicle.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-500">₱{vehicle.basePrice.toLocaleString()}</span>
                    <button 
                      onClick={() => setCurrentPage('products')}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;