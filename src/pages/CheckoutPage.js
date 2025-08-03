import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../components/CartContext';

function CheckoutPage() {
  const { cartState, dispatch, cartTotal } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'cash'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order processing
    setOrderComplete(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  if (orderComplete) {
    return (
      <div className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h1>
          <p className="text-gray-300 text-lg mb-8">
            Thank you for your order. We'll contact you within 24 hours to discuss your custom build timeline and schedule installation.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">What's Next?</h3>
            <ul className="text-gray-300 space-y-2 text-left">
              <li>• You'll receive a confirmation email shortly</li>
              <li>• Our team will contact you to discuss customization details</li>
              <li>• We'll provide a detailed timeline for your build</li>
              <li>• Regular updates throughout the customization process</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-4">Delivery Address</h2>
                
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Address</label>
                  <input 
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">City</label>
                    <input 
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">ZIP Code</label>
                    <input 
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-4">Payment Method</h2>
                
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-gray-300">Cash on Delivery</span>
                  </label>
                  
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio"
                      name="paymentMethod"
                      value="installment"
                      checked={formData.paymentMethod === 'installment'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-gray-300">Installment Plan</span>
                  </label>
                  
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-gray-300">Bank Transfer</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold"
              >
                Complete Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-800 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartState.items.map(item => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                      {item.accessories && item.accessories.length > 0 && (
                        <p className="text-gray-400 text-sm">
                          +{item.accessories.length} accessories
                        </p>
                      )}
                    </div>
                    <span className="text-orange-500 font-medium">
                      ₱{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-600 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Subtotal:</span>
                  <span className="text-white">₱{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Installation:</span>
                  <span className="text-white">Included</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-orange-500">₱{cartTotal.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <h3 className="text-white font-medium mb-2">What's Included:</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Professional installation</li>
                  <li>• Quality guarantee</li>
                  <li>• Post-installation support</li>
                  <li>• Free consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;