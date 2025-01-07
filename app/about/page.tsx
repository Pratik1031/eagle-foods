import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Header Section */}
      <div className="w-full max-w-7xl text-center py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          EAGLE FOODS AND SEASONINGS has its manufacturing unit at Nagpur
          (Maharashtra) with production capabilities for finished product in
          ambient conditions. The state of art unit has automation to produce
          the highest quality of seasonings, instant mixes, blended spices,
          ready mixes and all types innovative and customize foods. The unit can
          produce metric ton of various products per day. Owing to our strength
          in production capacity we are successful in developing new customize
          products, as per our customers requirement and carrying out smooth
          production operations and are always ready to meet extensive demands
          and requirements by our SAVOURY FOOD INDUSTRIES AND HORECA INDUSTRIE'S
          customers.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="/about-image.jpg"
            alt="About Us"
            className="w-full max-w-md h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-start px-4 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            At Eagle Foods and Seasonings, we pride ourselves on offering an
            extensive range of premium seasonings that stand out from the
            competition. From classic spice blends like BBQ and Italian herbs to
            innovative global flavors and custom crafted mixes, our seasonings
            are designed to elevate every dish with unparalleled taste and
            aroma. What sets us apart is our commitment to quality—sourcing only
            the finest ingredients, meticulously blending them, and ensuring
            every product meets the highest standards of flavor consistency. Our
            seasonings don’t just add taste; they transform meals, providing a
            depth and authenticity that ordinary blends can’t match. Experience
            the difference with Eagle Foods and Seasonings, where flavor meets
            perfection
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Join us on our journey to make the world a better place through our
            dedication and passion for quality.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-7xl text-center py-8">
        <a
          href="/contact"
          className="bg-yellow-800 text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
