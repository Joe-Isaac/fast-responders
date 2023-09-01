import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(){
      setDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
}, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  

  return (
    <div className="w-full pt-2 flex items-centered justify-between px-4">
      {dimensions > 768 ? (
        // Logo for large screen
        <motion.div initial={{
        opacity: 0
      }}
      animate={{
        // x: 0,
        opacity: 1,
        // scale: 1,
    }}

    transition={{
        duration: 4.0,
    }}      
      className="sm:w-1/4 ml-[20%] md:ml-0">
        <Link to="/">
          <img src={logo} className="w-28 rounded-full object-contain" />
        </Link>
      </motion.div>
      )
      :
      // Logo for small screens
      <motion.div initial={{
        opacity: 0
      }}
      animate={{
        // x: 0,
        opacity: 1,
        // scale: 1,
    }}

    transition={{
        duration: 4.0,
    }}      
      className="sm:w-1/4 pt-2 ml-[2%] md:ml-0">
        <Link to="/">
          <img src={logo} className="w-20 rounded-full object-contain" />
        </Link>
      </motion.div>
      }

      {dimensions > 768 ? (
        <div className="sm:w-3/4 flex items-center font-mono text-base">
          <div className="flex justify-center md:w-2/3 items-center">
            <div className="w-3/5 flex justify-evenly items-center font-serif">
              <div className="cursor-pointer">
                <Link to="/" className="cursor-pointer">
                  Home
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link
                  to="/contact-us"
                  className="cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
              <div className="cursor-pointer">
              <Link to="/services" className="cursor-pointer">
                  Services
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:w-1/3 items-center">
            <div className="w-full flex justify-evenly items-center font-serif">
              <div className="cursor-pointer">
                <Link to="/gallery" className="cursor-pointer">
                  Gallery
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link to="/about-us" className="cursor-pointer">
                  About us
                </Link>
              </div>
              {/* <div className="cursor-pointer">
                <Link
                  to="/about-us"
                  className="cursor-pointer"
                >
                  Call Now
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="mr-8">
          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-[rgba(0,0,0,0.94)] z-50 h-screen transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="w-full flex justify-center my-2">
            <img
              src={logo}
              className="h-28 rounded-full"
              />
            </div>
            <div className="absolute top-0 right-0 p-4">
              <button
                className=" font-semibold text-2xl text-white hover:text-black"
                onClick={closeMenu}
              >
                {/* <CloseIcon/> */}
                X
              </button>
            </div>

            <div className="flex text-gray-300 flex-col justify-center h-1/2 items-center">
              
              <div className="mb-6">
                <Link
                  to="/"
                  className="block  font-serif hover:text-black font-semibold text-2xl py-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </div>
              <div className="mb-6">
                <Link
                  to="/contact-us"
                  className="block  font-serif hover:text-black  font-semibold text-2xl py-2"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </div>
              <div className="mb-6">
                <Link
                  to="/services"
                  className="block  font-serif font-semibold text-2xl hover:text-black py-2"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </div>
              <div className="mb-6">
                <Link
                  to="/gallery"
                  className="block  font-serif font-semibold text-2xl hover:text-black py-2"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
              </div>
              <div className="mb-6">
                <Link
                  to="/about-us"
                  className="block  font-serif font-semibold text-2xl hover:text-black py-2"
                  onClick={toggleMenu}
                >
                  About us
                </Link>
              </div>
              {/* <div className="mb-6">
              <Link
                  to="/shop"
                  className="block  font-serif font-semibold text-2xl hover:text-black py-2"
                  onClick={toggleMenu}
                >
                  Shop
                </Link>
              </div> */}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="flex items-center justify-center ml-2 pt-8 h-4 md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="w-6 h-px bg-[#000] transform transition-transform duration-300">
              <span
                className={`absolute top-[4px] left-0 bg-[#000] w-6 h-px transform transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
              </span>
              <span
                className={`absolute top-[9px] left-0 bg-[#000] w-6 h-px transform transition-transform duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute top-[14px] left-0 bg-[#000] w-6 h-px transform transition-transform duration-300 ${
                  isOpen ? "-rotate-45" : ""
                }`}
              ></span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;