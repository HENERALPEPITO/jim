import React, { useState } from 'react';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        
        <main className="min-h-screen">
          {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
          {currentPage === 'products' && <ProductsPage setSelectedVehicle={setSelectedVehicle} setCurrentPage={setCurrentPage} />}
          {currentPage === 'product-detail' && selectedVehicle && <ProductDetailPage vehicle={selectedVehicle} />}
          {currentPage === 'cart' && <CartPage setCurrentPage={setCurrentPage} />}
          {currentPage === 'checkout' && <CheckoutPage />}
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;