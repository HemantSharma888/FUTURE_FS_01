import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

function HomePage() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error('Failed to load products:', err.message);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    const filteredList = products.filter(
      p =>
        p.name.toLowerCase().includes(keyword) ||
        p.category.toLowerCase().includes(keyword)
    );
    setFiltered(filteredList);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={handleSearch}
        className="mb-4 p-2 border w-full rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(product => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.image_url} alt={product.name} className="h-40 w-full object-contain mb-2" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="font-bold text-blue-600 mt-1">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
