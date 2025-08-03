import React from 'react';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { useCart } from '../components/CartContext';

function CartPage({ setCurrentPage }) {
  const { cartState, dispatch, cartTotal } = useCart();

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (cartState.items.length === 0) {
    return (
      <div className="py-16 text-center">
        <ShoppingCart className="h-24 w-24 text-gray-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-300 mb-8">Start building your custom Suzuki mini truck!</p>
        <button 
          onClick={() => setCurrentPage('products')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Browse Vehicles
        </button>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
        
        <div className="space-y-6">
          {cartState.items.map(item => (
            <div key={item.id} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                  {item.accessories && item.accessories.length > 0 && (
                    <div className="mt-2">
                      <p className="text-gray-300 text-sm">Accessories:</p>
                      <ul className="text-gray-400 text-sm">
                        {item.accessories.map(acc => (
                          <li key={acc.id}>• {acc.name} (+₱{acc.price.toLocaleString()})</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-1 rounded"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-white w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-1 rounded"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xl font-bold text-orange-500">₱{(item.price * item.quantity).toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">₱{item.price.toLocaleString()} each</p>
                  </div>
                  
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300 p-2"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cart Summary */}
        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-white">Total:</span>
            <span className="text-3xl font-bold text-orange-500">₱{cartTotal.toLocaleString()}</span>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => setCurrentPage('products')}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg"
            >
              Continue Shopping
            </button>
            <button 
              onClick={() => setCurrentPage('checkout')}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;