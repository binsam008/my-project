import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Take Care Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Take Care</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper.
          </p>
          <p className="text-gray-400 mt-2">
            Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-100 hover:text-primary">
              <i className="fab fa-facebook-f">
                <FaFacebook/>
              </i>
            </a>
            <a href="#" className="text-gray-100 hover:text-primary">
              <i className="fab fa-instagram">
                <FaInstagram/>
              </i>
            </a>
            <a href="x.com" className="text-gray-100 hover:text-primary">
              <i className="fab fa-twitter">
              <FaTwitter />
              </i>
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white">Home</a>
            </li>
            <li>
              <a href="#About_US" className="text-gray-400 hover:text-white">About us</a>
            </li>
            <li>
              <a href="#Services" className="text-gray-400 hover:text-white">Services</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <div className="w-full h-40 bg-gray-700 rounded-lg">
            {/*actual map embed or static image */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125746.55324547332!2d76.17585889505413!3d9.968875997115626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3b086d4dbd45ada1%3A0xde99a1b7b21579d1!2sTaj%20Malabar%20Resort%20%26%20Spa%2C%20Cochin%2C%20Willingdon%20Island%2C%20Kochi%2C%20Kerala%20682009!3m2!1d9.968886099999999!2d76.2582608!5e0!3m2!1sen!2sin!4v1735452666943!5m2!1sen!2sin"
              className="w-full h-full rounded-lg"
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        © 2024 All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
