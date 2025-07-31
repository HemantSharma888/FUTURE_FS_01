import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'cod',
  });

  const [error, setError] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!form.name || !form.email || !form.address) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate order submission
    alert(`Order placed successfully!\nTotal: ₹${total.toFixed(2)}\nThank you, ${form.name}!`);

    // Redirect to home or clear cart (optional)
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-2 rounded"
        />

        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Shipping Address"
          className="w-full border p-2 rounded"
        ></textarea>

        <select
          name="payment"
          value={form.payment}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="cod">Cash on Delivery</option>
          <option value="card">Card (Simulated)</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
