import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center bg-gray-50">
      <Image src="/image 2.png" alt="spices" width={540} height={480} />

      <div className="w-[90%] sm:w-[528px] bg-white p-6 text-center">
        <h2 className="font-medium text-lg text-gray-800 mb-4">ABOUT US</h2>
        <p className="text-gray-700 mb-6">
          <span className="font-bold text-yellow-400">
            {" "}
            Eagle Foods Pvt. Ltd.{" "}
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
          <Link href="about">
            <button className="bg-yellow-800 text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
