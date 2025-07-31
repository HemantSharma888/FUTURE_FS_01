const products = [
  {
    id: 1,
    name: "ASUS Monitor",
    price: "₹14,999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Noise Smartwatch",
    price: "₹1,099",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Fastrack Watch",
    price: "₹1,399",
    image: "https://via.placeholder.com/150"
  },
];

export default function ProductSection() {
  return (
    <section className="py-8 px-4 container mx-auto">
      <h3 className="text-xl font-semibold mb-4">Best of Electronics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-blue-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
