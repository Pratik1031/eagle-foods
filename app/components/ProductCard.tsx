import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image }) => {
  return (
    <div className="product-card w-[250px] h-[286px] items-center flex flex-col justify-center border border-gray-300 rounded-lg p-2 shadow-lg hover:shadow-xl transition duration-300">
      <div className="image-container mb-3">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
    </div>
  );
};

export default ProductCard;
