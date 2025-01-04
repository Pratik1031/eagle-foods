import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[486px] relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/heroBg.png" alt="bg" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col md:justify-between items-center space-y-8 md:space-y-0">
          {/* First Foreground Image */}
          <Image
            src="/Group 2.png"
            alt="spice1"
            className="z-10 md:ml-[380px] md:mt-10 mt-8"
            width={352}
            height={60}
          />

          {/* Second Foreground Image */}
          <Image
            src="/Group 3.png"
            alt="spice2"
            className="z-20 md:ml-[46rem] ml-0"
            width={352}
            height={60}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 p-8 md:p-20 text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome to Eagle Foods
        </h1>
        <p className="mt-4 text-lg md:text-xl md:w-[25rem] text-gray-800">
          Discover the finest quality spices and ingredients from around the
          world.
          <br />
          <span className="text-yellow-500 font-bold">Taste</span>{" "}
          <span className="font-bold">Trust</span>{" "}
          <span className="text-yellow-500 font-bold">Tradition</span>
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition duration-300 ease-in-out"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
};

export default Hero;
