import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white text-black p-2 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={120} height={100} />
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="font-medium hover:text-yellow-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="about"
              className="font-medium hover:text-yellow-600 transition duration-300 ease-in-out"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="products"
              className="font-medium hover:text-yellow-600 transition duration-300 ease-in-out"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="contact"
              className="font-medium hover:text-yellow-600 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
