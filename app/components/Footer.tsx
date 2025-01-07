import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Company Info Section */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-yellow-400">
              Eagle Foods And Seasonings
            </h2>
            <p className="mt-2 text-sm">
              Cooking made easy , Flavours made memorable.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="flex flex-col">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul>
                <li>
                  <Link href="/" className="hover:text-yellow-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="about" className="hover:text-yellow-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="products" className="hover:text-yellow-400">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="contact" className="hover:text-yellow-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col">
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:Info@eaglefoods.co.in"
                    className="hover:text-yellow-400"
                  >
                    Info@eaglefoods.co.in
                  </a>
                </li>
                <li>Phone: 7774998980,7775998980</li>
                <li>
                  Address: Plot No.41 Noor Nagar, Umred Road,Dighori,
                  Nagpur 440034
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-white hover:text-yellow-400">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" className="text-white hover:text-yellow-400">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="text-white hover:text-yellow-400">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" className="text-white hover:text-yellow-400">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; 2025 Eagle Foods And Seasonings All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
