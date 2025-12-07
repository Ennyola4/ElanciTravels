import { useState, useEffect } from "react";
import { Menu, X, Plane, ChevronDown, Phone, Mail, MapPin, User, Search} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    {
      path: "/",
      label: "Home",
      icon: Plane
    },
    {
      path: "/destination",
      label: "Destinations",
      submenu: [
        { path: "/destination/beach", label: "Beach Getaways" },
        { path: "/destination/cultural", label: "Cultural Tours" },
        { path: "/destination/adventure", label: "Adventure Travel" },
        { path: "/destination/luxury", label: "Luxury Retreats" }
      ]
    },
    {
      path: "/tour",
      label: "Tours",
      submenu: [
        { path: "/tour/group", label: "Group Tours" },
        { path: "/tour/private", label: "Private Tours" },
        { path: "/tour/custom", label: "Custom Itineraries" }
      ]
    },
    {
      path: "/about",
      label: "About"
    },
    {
      path: "/contact",
      label: "Contact"
    },
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 (299) 888-3989", href: "tel:+12998883989" },
    { icon: Mail, text: "travel@elanci.com", href: "mailto:travel@elanci.com" },
    { icon: MapPin, text: "Toronto, Canada", href: "#" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(null);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/30"
            : "bg-linear-to-b from-[#0C2F37] to-[#0C2F37]/80 backdrop-blur-sm text-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-teal-400 rounded-full blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="relative p-2 bg-linear-to-r from-cyan-500 to-teal-400 rounded-full">
                    <Plane className="w-6 h-6 text-white transform -rotate-45" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-gray-900" : "text-white"
                    }`}>
                    Elanci
                  </span>
                  <span className={`text-xs ${isScrolled ? "text-gray-600" : "text-gray-300"
                    }`}>
                    Luxury Travel Concierge
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center space-x-1"
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                const hasSubmenu = link.submenu;

                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => hasSubmenu && handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${location.pathname === link.path
                          ? isScrolled
                            ? "text-cyan-600 bg-linear-to-r from-cyan-50 to-teal-50"
                            : "text-white bg-white/20"
                          : isScrolled
                            ? "text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/50 hover:to-teal-50/50"
                            : "text-gray-200 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {link.label}
                      {hasSubmenu && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''
                          }`} />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasSubmenu && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-gray-400/20 border border-gray-200/30 overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.submenu?.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-3 text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/50 hover:to-teal-50/50 transition-all duration-300 border-b border-gray-100/50 last:border-b-0"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search Button */}
              <button className={`p-2 rounded-full transition-all duration-300 ${isScrolled
                  ? "text-gray-600 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/50 hover:to-teal-50/50"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}>
                <Search className="w-5 h-5" />
              </button>

              {/* User Account */}
              <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isScrolled
                  ? "text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/50 hover:to-teal-50/50"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}>
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Account</span>
              </button>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/35 transition-all duration-300"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled
                  ? "text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/50 hover:to-teal-50/50"
                  : "text-white hover:bg-white/10"
                }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-linear-to-b from-white to-gray-50/95 backdrop-blur-xl border-t border-gray-200/30 shadow-xl"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const hasSubmenu = link.submenu;

                  return (
                    <div key={link.path} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.path}
                          onClick={closeMenu}
                          className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${location.pathname === link.path
                              ? "text-cyan-600 bg-linear-to-r from-cyan-50 to-teal-50"
                              : "text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/50 hover:to-teal-50/50"
                            }`}
                        >
                          {Icon && <Icon className="w-5 h-5" />}
                          {link.label}
                        </Link>

                        {hasSubmenu && (
                          <button
                            onClick={() => toggleDropdown(link.label)}
                            className="px-3 py-3 text-gray-500 hover:text-cyan-600"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''
                              }`} />
                          </button>
                        )}
                      </div>

                      {/* Mobile Submenu */}
                      {hasSubmenu && activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-8 space-y-1"
                        >
                          {link.submenu?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={closeMenu}
                              className="block px-4 py-2.5 rounded-lg text-gray-600 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/30 hover:to-teal-50/30 transition-all duration-300"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  );
                })}

                {/* Mobile CTA Buttons */}
                <div className="pt-4 px-4 space-y-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg"
                  >
                    Book Your Adventure
                  </motion.button>
                  <div className="flex justify-center gap-4 pt-2">
                    {contactInfo.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={index}
                          href={item.href}
                          className="p-2 text-gray-600 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/50 hover:to-teal-50/50 rounded-full transition-all duration-300"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-18" />
    </>
  );
};

export default Navbar;