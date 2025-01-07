"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* H1 Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Contact Us
      </h1>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Get in Touch Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Dramatically maintain clicks-and-mortar solutions without solutions.
            Completely synergize resource taxing relationships via premier niche
            markets.
          </p>

          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-yellow-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a4 4 0 004.22 0L21 8m-9 13V5m0 0L3.6 12.4M12 5l8.4 7.4"
                />
              </svg>
            </div>
            <p className="ml-4 text-gray-800">+91 7774998980, +91 7775998980</p>
          </div>

          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-yellow-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.25 9.75L21 5m0 0l-4.75 4.75m4.75-4.75v6.5a8.375 8.375 0 01-8.375 8.375A8.375 8.375 0 014.25 11.5H5"
                />
              </svg>
            </div>
            <p className="ml-4 text-gray-800">Info@eaglefoods.co.in</p>
          </div>

          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-yellow-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c2.21 0 4 1.79 4 4v1H8v-1c0-2.21 1.79-4 4-4zm0 0V8"
                />
              </svg>
            </div>
            <p className="ml-4 text-gray-800">
              Plot No.41 Noor Nagar, Umred Road,Dighori, Nagpur 440034
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  placeholder="Enter First Name"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter Email Address"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                rows={5}
                placeholder="Type Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
