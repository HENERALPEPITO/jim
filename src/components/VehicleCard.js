import React from 'react';
import { Check } from 'lucide-react';

function VehicleCard({ vehicle, onViewDetails }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
      <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-white">{vehicle.name}</h3>
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">{vehicle.category}</span>
        </div>
        <p className="text-gray-300 text-sm mb-4">{vehicle.description}</p>
        
        <div className="mb-4">
          <h4 className="text-white font-medium mb-2">Key Features:</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            {vehicle.specs.slice(0, 2).map((spec, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-4 w-4 text-orange-500 mr-2" />
                {spec}
              </li>
            ))}
            {vehicle.specs.length > 2 && (
              <li className="text-gray-400">+{vehicle.specs.length - 2} more features</li>
            )}
          </ul>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-500">₱{vehicle.basePrice.toLocaleString()}</span>
          <button 
            onClick={onViewDetails}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
          >
            Customize
          </button>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;