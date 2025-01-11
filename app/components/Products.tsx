import { PRODUCTS } from "@/constants";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Products = () => {
  const limitedProducts = PRODUCTS.slice(0, 8);

  return (
    <div className="w-full h-auto p-8 ">
      <div className="mb-6">
        <h6 className="text-gray-700 font-semibold text-xl">PRODUCTS</h6>
        <p className="text-yellow-500 font-medium text-lg">Our Products Here</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {limitedProducts.map((prod, index) => (
          <ProductCard key={index} title={prod.name} image={prod.image} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <Link href="products">
          <button className="bg-yellow-800 text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors text-lg font-semibold">
            More...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
