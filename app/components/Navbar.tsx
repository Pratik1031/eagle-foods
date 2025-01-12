"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 z-50 bg-white bg-transparent text-black p-2 lg:p-2 shadow-xl"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="lg:w-32 lg:h-32 w-24 h-20"
          />
        </Link>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`lg:flex space-x-6 lg:space-x-6 ${
            isMenuOpen
              ? "block absolute top-full left-0 w-full bg-white shadow-lg lg:static lg:block lg:bg-transparent lg:shadow-none lg:w-auto"
              : "hidden"
          } lg:block lg:flex-row lg:items-center`}
        >
          <li>
            <Link
              href="/"
              className="font-medium hover:text-yellow-600 transition duration-300 ease-in-out block ml-8 p-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-medium hover:text-yellow-600 transition duration-300 ease-in-out block p-2"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="font-medium hover:text-yellow-600 transition duration-300 ease-in-out block p-2"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-medium hover:text-yellow-600 transition duration-300 ease-in-out block p-2"
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
