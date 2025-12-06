import { useState, useEffect } from "react";
import { Menu, X} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/destination", label: "Destination" },
    { path: "/tour", label : "Tours"},
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-60 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-[#0C2F37]/95 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar (Desktop Only) */}
      {/* <div className="hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-start px-6 py-2 transition-all duration-500">
          <div className="flex gap-8 text-white text-xs">
            <div className="flex items-center gap-1">
              <MapPin className={`${isScrolled ? "text-red-500" : "text-white"} w-4 h-4 `} />
              <span>120 King Street West, Toronto</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className={`${isScrolled ? "text-green-500" : "text-white"} w-4 h-4 `} />
              <span>+1 292-555-0198 , +1 299-888-3989</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className={`${isScrolled ? "text-blue-500" : "text-white"} w-4 h-4 `} />
              <span>ennyola89@gmail.com</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <span
                className={`text-2xl sm:text-xl font-lora font-semibold ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Elanci
              </span>
              <p className="text-[10px] text-gray-300">Luxury Travel Concierge</p>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link)=> (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-300 font-medium text-sm ${
                  location.pathname === link.path
                    ? "text-[#FFB703] border-b-2 border-[#FFB703] pb-1"
                    : isScrolled
                    ? "text-white hover:text-[#FFB703]"
                    : "text-white hover:text-[#FFB703]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${
                isScrolled ? "text-white" : "text-white"
              } focus:outline-none`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 rounded-b-xl shadow-lg"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block text-center py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-[#0C2F37] bg-[#FFB703]/20"
                      : "text-[#0C2F37] hover:bg-[#FFB703]/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
