import { ChevronsRight, Sparkles, Globe, Shield, Headphones, Calendar } from "lucide-react";
import { services, travels } from "../utils/Index";
import { motion } from "framer-motion";
import { useEffect } from "react";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // Initialize any additional animations if needed
    }, []);

    // Icon mapping for services
    const serviceIcons = [Globe, Shield, Headphones, Calendar];

    // Animation variants with proper typing
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] // cubic-bezier equivalent of easeOut
            }
        }
    };

    const cardHoverVariants: Variants = {
        hover: {
            y: -10,
            boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const fadeInUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <div className="relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-cyan-50/50 to-transparent" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-teal-100/20 to-emerald-100/20 rounded-full blur-3xl" />

            {/* Services Section */}
            <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUpVariants}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-linear-to-r from-cyan-50 to-teal-50 rounded-full border border-cyan-100">
                            <Sparkles className="w-4 h-4 text-cyan-600" />
                            <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
                                What We Offer
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Our <span className="bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">Services</span>
                        </h1>
                        <p className="text-gray-500 text-xl sm:text-xl max-w-3xl mx-auto leading-relaxed">
                            Explore the world with our comprehensive travel services designed
                            to make your journey unforgettable.
                        </p>
                    </motion.div>

                    {/* Service Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                    >
                        {services.map((service, index) => {
                            const Icon = serviceIcons[index] || Globe;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover="hover"
                                    custom={cardHoverVariants}
                                    className="group relative"
                                >
                                    {/* Card */}
                                    <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-lg shadow-gray-100/50 overflow-hidden">
                                        {/* Background accent */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500 to-teal-400" />

                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: 15, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="mb-6 inline-flex p-4 bg-linear-to-br from-cyan-50 to-teal-50 rounded-xl"
                                        >
                                            <Icon className="w-8 h-8 text-cyan-600" />
                                        </motion.div>

                                        {/* Content */}
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Button */}
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="group flex items-center gap-2 text-cyan-600 font-semibold text-sm"
                                        >
                                            <span>Explore More</span>
                                            <ChevronsRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </motion.button>

                                        {/* Hover effect */}
                                        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Footer Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-gray-500 text-sm mt-12 px-4 py-3 bg-linear-to-r from-cyan-50/50 to-teal-50/50 rounded-xl border border-cyan-100"
                    >
                        And much more to make your travel experience seamless and enjoyable!
                    </motion.p>
                </div>
            </section>

            {/* Travel Experiences Section */}
            <section className="relative py-24 bg-linear-to-br from-gray-900 via-[#0C2F37] to-cyan-900 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />

                {/* Animated stars */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5 }}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + i * 10}%`
                        }}
                    />
                ))}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUpVariants}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-1 w-12 bg-linear-to-r from-cyan-400 to-teal-400 rounded-full" />
                            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                                Tailored Experiences
                            </span>
                            <div className="h-1 w-12 bg-linear-to-r from-teal-400 to-emerald-400 rounded-full" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Immersive <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Travel Experiences</span>
                        </h1>
                        <h4 className="text-xl text-cyan-100 mb-4">
                            Personalized Adventures
                        </h4>
                        <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
                            At Elanci, we believe that travel is not just about visiting new
                            places; it's about immersing yourself in the culture, traditions, and
                            essence of each destination. Our team of travel experts is dedicated
                            to crafting personalized adventures that go beyond the ordinary.
                        </p>
                    </motion.div>

                    {/* Travel Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {travels.map((travel, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="group"
                            >
                                {/* Card */}
                                <div className="relative h-full rounded-2xl overflow-hidden bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-300">
                                    {/* Image container */}
                                    <div className="relative h-72 overflow-hidden">
                                        <motion.img
                                            src={travel.image}
                                            alt={travel.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                                        {/* Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-1.5 bg-linear-to-r from-cyan-500 to-teal-400 text-white text-xs font-semibold uppercase tracking-wide rounded-full shadow-lg">
                                                {travel.title}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h2 className="text-2xl font-bold text-white mb-4">
                                            {travel.header}
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {travel.description}
                                        </p>

                                        {/* Read more indicator */}
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="flex items-center gap-2 text-cyan-300 font-medium text-sm cursor-pointer group"
                                        >
                                            <span>Discover Experience</span>
                                            <ChevronsRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </motion.div>
                                    </div>

                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-20 text-center"
                    >
                        <div className="inline-block p-1 bg-linear-to-r from-cyan-500/20 via-teal-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm">
                            <div className="px-8 py-6 bg-gray-900/50 rounded-xl border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Ready for Your Personalized Adventure?
                                </h3>
                                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                    Let us craft the perfect journey that matches your dreams and preferences.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                    onClick={()=>{
                                        navigate("/contact");
                                    }}
                                    className="px-8 py-3 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25"
                                >
                                    Start Planning
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OurServices;