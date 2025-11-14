import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Plane, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative text-gray-300 py-12 px-6 sm:px-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/aeroplane-pictures-n2k6ba71eizhgdb1.jpg')", 
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-[#0C2F37]/60"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10">
        {/* ====== Brand Section ====== */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <Plane className="text-white w-7 h-7" />
            <h2 className="text-2xl font-bold text-white">Elanci Travels</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Experience the world like never before — with personalized trips,
            cultural adventures, and unforgettable moments.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* ====== Quick Links ====== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-500 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
          </ul>
        </div>

        {/* ====== Our Services ====== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-500 pb-2">
            Our Services
          </h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">Flight Booking</a></li>
            <li><a href="#" className="hover:text-white transition">Hotel Reservations</a></li>
            <li><a href="#" className="hover:text-white transition">Tour Packages</a></li>
            <li><a href="#" className="hover:text-white transition">Travel Insurance</a></li>
          </ul>
        </div>

        {/* ====== Contact Info ====== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-500 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>support@elancitravels.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>299-888-3989</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 mt-1" />
              <span>120 King Street West, Toronto</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ====== Bottom Section ====== */}
      <div className="relative border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm z-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Elanci Travels</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
