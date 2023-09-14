import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LandingNavBar() {
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
    <div className="w-full pt-0 flex justify-between px-0 text-white font-sans font-bold">
      {dimensions > 768 ? (
        // Logo for large screen
        <div   
      className="sm:w-1/4 bg-[rgba(0,0,0,0.8)] md:ml-0">
        <Link to="/">
          <div className="flex items-center justify-center py-4">
            <img src={logo} className="w-28 h-28 mx-4 rounded-full object-contain" />
            </div>
        </Link>
      </div>
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
        <>
        <div className="sm:w-1/2 flex items-center text-base bg-[rgba(0,0,0,0.8)]">
          <div className="flex justify-center md:w-2/3 items-center">
            <div className="w-4/5 flex justify-between items-center ">
              
              <div className="cursor-pointer">
                <Link to="/" className="cursor-pointer">
                  Home
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link
                  to="/"
                  className="cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
              <div className="cursor-pointer">
              <Link to="/" className="cursor-pointer">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:w-1/4 items-center bg-[rgba(0,0,0,0.8)]">
        <div className="w-full flex justify-evenly items-center font-serif">
          
          <div className="cursor-pointer">
            
          </div>
          <div className="cursor-pointer">
            <Link to="/sign-in" className="cursor-pointer">
              <button className="py-1 px-8 rounded-2xl text-blue-500 font-sans font-bold bg-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
        </>

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
                  to="/"
                  className="block  font-serif font-semibold text-2xl hover:text-black py-2"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </div>
              <div className="mb-6">
                
              </div>
              <div className="mb-6">
                <Link
                  to="/"
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

export default LandingNavBar;