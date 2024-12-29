import React from "react";
import image from "../assets/s.jpg"
const About = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center p-6 md:p-16 gap-6 bg-gray-100">
      {/* Image Section */}
      <div className="relative w-full  rounded-xl md:w-1/2">
        <img
          src={image}
          alt="About"
          className="w-full h-auto rounded-lg md:rounded-none md:shadow-lg transition-all duration-300 ease-in-out"
        />
        {/* Glassmorphism overlay for mobile */}
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-white/30 backdrop-blur-lg md:hidden flex flex-col items-center justify-center text-center p-4">
          <h3 className="text-lg font-bold text-blue-500">We Care for You</h3>
          <p className="text-sm text-blue-950 font-semibold">
            Providing top-notch medical care with a team of experts.
          </p>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-5"><span>About </span><span className="text-blue-600">Us</span></h2>
        <p className="text-lg font-semibold text-gray-900 mt-3">
            We are a team of medical professionals dedicated to providing the best possible care for our patients. Our
            team is comprised of experienced doctors, nurses, and other healthcare specialists who are passionate about
            delivering exceptional patient care.
        </p>
        <a
          href="#"
          className="inline-block mt-4 text-blue-600 hover:underline items-center"
        >
          Learn More <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default About;
