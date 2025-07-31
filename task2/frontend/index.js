import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS styles
import App from './App';
import { CartProvider } from './context/CartContext'; // useContext for cart

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
