import React, { useState } from 'react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';

function ProductsPage({ setSelectedVehicle, setCurrentPage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(vehicles.map(v => v.category))];
  const filteredVehicles = selectedCategory === 'All' 
    ? vehicles 
    : vehicles.filter(v => v.category === selectedCategory);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Custom Vehicles</h1>
          <p className="text-gray-300">Choose from our range of professionally customized Suzuki mini trucks</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map(vehicle => (
            <VehicleCard 
              key={vehicle.id} 
              vehicle={vehicle} 
              onViewDetails={() => {
                setSelectedVehicle(vehicle);
                setCurrentPage('product-detail');
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;