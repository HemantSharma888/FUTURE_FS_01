export default function CategoryNav() {
  const categories = [
    "Mobiles", "Fashion", "Electronics", "Home", "Beauty", "Grocery"
  ];

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto flex space-x-6 overflow-x-auto p-4 text-sm font-medium text-gray-700">
        {categories.map(cat => (
          <span key={cat} className="hover:text-blue-600 cursor-pointer">
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}
