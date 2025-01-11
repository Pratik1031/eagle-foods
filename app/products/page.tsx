"use client";
import React, { useState } from "react";
import { PRODUCTS } from "@/constants/index";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: string[] = ["All", "Seasonings", "Gravy Mix"];

  // Filter products based on the active category
  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter(
          (product: Product) => product.category === activeCategory
        );

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

      {/* Product Names List Section */}
      <div className="w-full max-w-7xl py-8">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600 text-sm sm:text-base">
            No products found in this category.
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product: Product) => (
              <li
                key={product.id}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
              >
                {/* Icon */}
                <FaCheckCircle className="text-yellow-500" size={20} />

                {/* Product Name */}
                <span className="text-xl font-semibold text-gray-800 hover:text-yellow-800 transition-colors">
                  {product.name}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* View More Button */}
      {/* <div className="flex justify-center mt-6">
        <button className="bg-yellow-800 text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors text-lg font-semibold">
          View More...
        </button>
      </div> */}
    </div>
  );
};

export default Products;
