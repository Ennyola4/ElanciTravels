import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Plane, Linkedin, Globe, Shield, Heart, Send } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const quickLinks = [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Destinations", href: "#" },
        { name: "Tour Packages", href: "#" },
        { name: "Contact", href: "#" }
    ];

    const services = [
        { name: "Flight Booking", href: "#" },
        { name: "Hotel Reservations", href: "#" },
        { name: "Tour Packages", href: "#" },
        { name: "Travel Insurance", href: "#" },
        { name: "Visa Assistance", href: "#" }
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", color: "hover:text-blue-500" },
        { icon: Twitter, href: "#", color: "hover:text-sky-400" },
        { icon: Instagram, href: "#", color: "hover:text-pink-500" },
        { icon: Linkedin, href: "#", color: "hover:text-blue-600" }
    ];

    return (
        <footer className="relative overflow-hidden bg-linear-to-br from-gray-900 via-[#0C2F37] to-cyan-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.sin(i) * 15, 0]
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                    className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
                    style={{
                        left: `${10 + i * 15}%`,
                        top: `${10 + i * 10}%`
                    }}
                />
            ))}

            {/* Main content */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                    {/* Newsletter Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 lg:mb-20"
                    >
                        <div className="bg-linear-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                                <div className="lg:w-1/2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Send className="w-6 h-6 text-cyan-300" />
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                            Stay Updated with Travel Insights
                                        </h3>
                                    </div>
                                    <p className="text-gray-300">
                                        Subscribe to our newsletter for exclusive offers, travel tips, and destination guides.
                                    </p>
                                </div>
                                <div className="lg:w-1/2">
                                    <form className="flex flex-col sm:flex-row gap-4">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-4 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25"
                                        >
                                            Subscribe
                                        </motion.button>
                                    </form>
                                    <p className="text-gray-400 text-sm mt-4">
                                        By subscribing, you agree to our Privacy Policy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
                    >
                        {/* Brand Section */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-teal-400 rounded-full blur-lg opacity-50" />
                                    <Plane className="relative w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Elanci Travels</h2>
                                    <p className="text-sm text-cyan-300 font-medium">Journey Beyond Boundaries</p>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Experience the world like never before — with personalized trips,
                                cultural adventures, and unforgettable moments crafted just for you.
                            </p>
                            
                            {/* Trust badges */}
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Shield className="w-4 h-4 text-cyan-300" />
                                    <span>Secure Booking</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Globe className="w-4 h-4 text-cyan-300" />
                                    <span>50+ Countries</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/10">
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            className="flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors duration-300 group"
                                        >
                                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/10">
                                Our Services
                            </h3>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a 
                                            href={service.href}
                                            className="flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors duration-300 group"
                                        >
                                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span>{service.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-xl font-bold text-white pb-3 border-b border-white/10">
                                Contact Us
                            </h3>
                            <div className="space-y-4">
                                <a 
                                    href="mailto:support@elancitravels.com"
                                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-300 transition-colors duration-300 group"
                                >
                                    <div className="p-2 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-lg group-hover:from-cyan-500/20 group-hover:to-teal-500/20 transition-all">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Email</div>
                                        <div>support@elancitravels.com</div>
                                    </div>
                                </a>
                                
                                <a 
                                    href="tel:2998883989"
                                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-300 transition-colors duration-300 group"
                                >
                                    <div className="p-2 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-lg group-hover:from-cyan-500/20 group-hover:to-teal-500/20 transition-all">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Phone</div>
                                        <div>(299) 888-3989</div>
                                    </div>
                                </a>
                                
                                <div className="flex items-start gap-4 text-gray-300">
                                    <div className="p-2 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-lg">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Location</div>
                                        <div>120 King Street West, Toronto, ON</div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-4">
                                <h4 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                whileHover={{ y: -3 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 ${social.color} transition-all duration-300`}
                                            >
                                                <Icon className="w-5 h-5 text-white" />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <div className="my-12 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400">
                                © {currentYear} <span className="text-white font-semibold">Elanci Travels</span>. All Rights Reserved.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-sm text-gray-500">
                                <a href="#" className="hover:text-cyan-300 transition">Privacy Policy</a>
                                <span>•</span>
                                <a href="#" className="hover:text-cyan-300 transition">Terms of Service</a>
                                <span>•</span>
                                <a href="#" className="hover:text-cyan-300 transition">Cookie Policy</a>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                            <span>Made with passion for travelers worldwide</span>
                        </div>
                    </div>

                    {/* Back to top button */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ y: -5 }}
                        className="fixed bottom-8 right-8 cursor-pointer p-3 bg-linear-to-r from-cyan-500 to-teal-400 text-white rounded-full shadow-lg shadow-cyan-500/25 z-50"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;