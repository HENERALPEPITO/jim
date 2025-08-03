import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../components/CartContext';
import { accessories } from '../data/accessories';

function ProductDetailPage({ vehicle }) {
  const { dispatch } = useCart();
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [vehicleInCart, setVehicleInCart] = useState(false);

  const totalAccessoryPrice = selectedAccessories.reduce((total, accessory) => total + accessory.price, 0);
  const totalPrice = vehicle.basePrice + totalAccessoryPrice;

  const handleAccessoryToggle = (accessory) => {
    setSelectedAccessories(prev => {
      const exists = prev.find(a => a.id === accessory.id);
      if (exists) {
        return prev.filter(a => a.id !== accessory.id);
      } else {
        return [...prev, accessory];
      }
    });
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: `${vehicle.id}-${Date.now()}`,
      name: vehicle.name,
      price: totalPrice,
      basePrice: vehicle.basePrice,
      accessories: selectedAccessories,
      image: vehicle.image,
      type: 'vehicle'
    };
    
    dispatch({ type: 'ADD_ITEM', payload: cartItem });
    setVehicleInCart(true);
    
    setTimeout(() => setVehicleInCart(false), 2000);
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vehicle Image */}
          <div>
            <img src={vehicle.image} alt={vehicle.name} className="w-full rounded-lg" />
          </div>
          
          {/* Vehicle Details */}
          <div>
            <div className="mb-6">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded mb-2 inline-block">{vehicle.category}</span>
              <h1 className="text-3xl font-bold text-white mb-4">{vehicle.name}</h1>
              <p className="text-gray-300 text-lg">{vehicle.description}</p>
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Standard Features</h3>
              <ul className="space-y-2">
                {vehicle.specs.map((spec, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-orange-500 mr-3" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Calculator */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Price Calculator</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Base Price:</span>
                  <span className="text-white">₱{vehicle.basePrice.toLocaleString()}</span>
                </div>
                {totalAccessoryPrice > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">Accessories:</span>
                    <span className="text-white">₱{totalAccessoryPrice.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t border-gray-600 pt-2">
                  <div className="flex justify-between">
                    <span className="text-xl font-semibold text-white">Total:</span>
                    <span className="text-2xl font-bold text-orange-500">₱{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  vehicleInCart 
                    ? 'bg-green-600 text-white' 
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {vehicleInCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>

        {/* Accessories Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Optional Accessories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {accessories.map(accessory => (
              <div key={accessory.id} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-medium">{accessory.name}</h4>
                  <span className="text-orange-500 text-sm">{accessory.category}</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">₱{accessory.price.toLocaleString()}</p>
                
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={selectedAccessories.some(a => a.id === accessory.id)}
                    onChange={() => handleAccessoryToggle(accessory)}
                    className="mr-2 rounded"
                  />
                  <span className="text-gray-300 text-sm">Add to build</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;