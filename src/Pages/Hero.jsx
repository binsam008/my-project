import React from "react";
import doctorImage from "../assets/Untitled design (2).png";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-12">
        {/* Left Text Section */}
        <div className="lg:w-3/5 text-center lg:text-left">
          <div className="bg-blue-100 text-blue-700 font-medium px-6 py-3 sm:px-8 sm:py-4 inline-block rounded-md">
            Welcome to your health care destination!
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-800 leading-snug sm:leading-tight">
            Your <span className="text-blue-600">Health</span>, Our Priority
            <br />
            Expert <span className="text-blue-600">Care</span> You Can Trust!
          </h1>
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
            Get the care you need with our friendly team of doctors and staff. 
            We’re here to help you feel better and stay healthy. Learn about 
            our services and reach out to us anytime!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-8 py-5 sm:px-8 sm:py-4 text-base sm:text-lg rounded-md shadow-lg hover:bg-blue-700">
              Book a Meeting
            </button>
            {/* <button className="bg-gray-200 text-gray-800 px-8 py-5 sm:px-8 sm:py-4 text-base sm:text-lg rounded-md shadow-lg hover:bg-gray-300">
              Read More
            </button> */}
          </div>
        </div>
        {/* Right Image Section */}
        <div className="flex justify-center px-4 sm:px-2">
          <img
            src={doctorImage}
            alt="Doctors"
            className="rounded-xl shadow-5xl w-full sm:w-3/4 lg:w-auto max-w-sm lg:max-w-none ps-3"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
