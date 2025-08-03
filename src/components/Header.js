import React from 'react';
import { ShoppingCart, Truck, Menu, X } from 'lucide-react';
import { useCart } from './CartContext';

function Header({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) {
  const { cartItemCount } = useCart();

  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Truck className="h-8 w-8 text-orange-500 mr-3" />
            <h1 className="text-xl font-bold text-white">Suzuki Customs</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 text-sm font-medium ${currentPage === 'home' ? 'text-orange-500' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('products')}
              className={`px-3 py-2 text-sm font-medium ${currentPage === 'products' ? 'text-orange-500' : 'text-gray-300 hover:text-white'}`}
            >
              Vehicles
            </button>
          </nav>
          
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('cart')}
              className="relative p-2 text-gray-300 hover:text-white"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-4 p-2 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage('products'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              >
                Vehicles
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;