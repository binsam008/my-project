import React from "react";
import image from "../assets/REG.jpg";
const RegisterServices = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="Healthcare"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Register Our <span className="text-blue-500">Services</span></h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
            <input
              type="text"
              id="surname"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Surname"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Message"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterServices;
