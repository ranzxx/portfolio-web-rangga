import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-15 flex items-center justify-between md:justify-around">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <a
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent"
          >
            ranz
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="md:flex hidden space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative text-gray-800 hover:blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 group"
                href={`#${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="md:hidden flex items-center"
        >
          <motion.button
            whileTap={{ scale: 0.7 }}
            className="text-gray-800"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "42vh" : 0 }}
        transition={{
          duration: 0.3,
        }}
        onClick={toggleMenu}
        className="md:hidden backdrop-blur-sm shadow-lg px-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              className="text-gray-800 font-medium py-2"
              key={item}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
