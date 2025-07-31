import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setProducts(items);
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-8 px-4 container mx-auto">
      <h3 className="text-xl font-semibold mb-4">Best of Electronics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-blue-600">₹{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
