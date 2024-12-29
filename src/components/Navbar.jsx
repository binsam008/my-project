import React, { useEffect } from "react";
import { NavbarMenu } from "../mockDATA/Data";
import { IoMenu } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* LOGO */}
          <div className="text-2xl flex items-center gap-2 uppercase font-bold">
            <FaHandHoldingHeart className="text-primary" />
            <p>Take</p>
            <p className="text-primary">Care</p>
          </div>

          {/* MENU */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-700">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-2 px-4 hover:text-primary font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <IoMenu className="text-3xl text-gray-700" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/70 z-20"
          >
            <div className="bg-white text-gray-900 rounded-b-lg shadow-md p-8">
              <ul className="flex flex-col justify-center items-center gap-6">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="text-lg font-medium hover:text-primary"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
