import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold text-gray-600">Your cart is empty.</h2>
        <Link to="/" className="text-blue-600 underline">Go shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 shadow rounded">
            <div className="flex items-center gap-4">
              <img src={item.image_url} alt={item.name} className="w-20 h-20 object-contain" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 border rounded p-1 text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Total: ₹{total.toFixed(2)}</p>
        <Link
          to="/checkout"
          className="inline-block mt-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
