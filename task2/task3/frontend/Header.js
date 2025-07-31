import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-blue-600">Flipkart</h1>

        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="w-1/2 px-4 py-2 border rounded-full focus:outline-none"
        />

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-blue-600 flex items-center">
            <User className="w-5 h-5 mr-1" />
            Login
          </button>
          <button className="text-gray-700 hover:text-blue-600 flex items-center">
            <ShoppingCart className="w-5 h-5 mr-1" />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
