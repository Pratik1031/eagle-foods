import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center-50 p-4 lg:p-0">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
        <Image
          src="/image 2.png"
          alt="spices"
          width={540}
          height={480}
          className="max-w-full h-auto"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full lg:w-2/3 p-6 mt-10 text-center">
        <h2 className="font-medium text-lg sm:text-xl text-gray-800 mb-4">
          ABOUT US
        </h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          <span className="font-bold text-yellow-400">
            Eagle Foods And Seasonings.
          </span>
          has its manufacturing unit at Nagpur (Maharashtra) with production
          capabilities for finished products in ambient conditions. The
          state-of-the-art unit is automated to produce the highest quality
          seasonings, instant mixes, blended spices, ready mixes, and other
          innovative and customized foods. The unit can produce five metric tons
          of various products per day. Owing to our strength in production
          capacity, we are successful in developing new customized products, as
          per our customers' requirements. We also carry out smooth production
          operations and are always ready to meet extensive demands from our
          SAVOURY FOOD INDUSTRIES and HORECA INDUSTRIES customers.
        </p>
        <div className="flex justify-center">
          <a
            href="/Spices.pdf"
            download
            className="bg-yellow-800 text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
