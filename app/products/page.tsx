"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: string[] = [
    "All",
    "Seasonings",
    "Gravy Mix",
    "RTC Gravy Paste",
    "Instant Mixes",
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Turmeric",
      category: "Spices",
      image: "/turmeric.jpg",
      description: "Pure and fresh turmeric powder.",
    },
    {
      id: 2,
      name: "Cumin",
      category: "Spices",
      image: "/cumin.jpg",
      description: "Aromatic cumin seeds.",
    },
    {
      id: 3,
      name: "Garam Masala",
      category: "Blends",
      image: "/garam-masala.jpg",
      description: "A blend of flavorful spices.",
    },
    {
      id: 4,
      name: "Oregano",
      category: "Herbs",
      image: "/oregano.jpg",
      description: "Fresh dried oregano leaves.",
    },
    {
      id: 5,
      name: "Barbecue Seasoning",
      category: "Seasonings",
      image: "/bbq-seasoning.jpg",
      description: "Perfect for grilling and barbecue.",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full max-w-7xl text-center py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our Products
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Discover our wide range of spices, blends, herbs, and seasonings to
          elevate your culinary creations.
        </p>
      </div>

      {/* Categories Section */}
      <div className="w-full max-w-7xl flex justify-center flex-wrap gap-4 py-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md ${
              activeCategory === category
                ? "bg-yellow-800 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          </div>
        ))}
      </div>

      {/* No Products Found Message */}
      {filteredProducts.length === 0 && (
        <div className="w-full max-w-7xl text-center py-8">
          <p className="text-gray-600 text-sm sm:text-base">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
