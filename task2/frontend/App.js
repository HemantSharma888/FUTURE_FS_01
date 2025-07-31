import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">🛒 Mini E-Commerce</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600">Cart</Link>
            <Link to="/checkout" className="text-gray-700 hover:text-blue-600">Checkout</Link>
          </nav>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
