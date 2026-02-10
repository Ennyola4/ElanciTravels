import { whyChooseUs } from "../utils/Index";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WhyChooseElanci = () => {
    const navigate = useNavigate();
    // Animation variants with proper typing
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 40, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const iconVariants: Variants = {
        hidden: { rotate: -180, scale: 0 },
        visible: {
            rotate: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    return (
        <div className="relative w-full py-24 bg-linear-to-b from-white to-gray-50/50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-cyan-50/30 to-transparent" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-teal-100/20 to-emerald-100/20 rounded-full blur-3xl" />
            
            {/* Floating particles */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.sin(i) * 10, 0]
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                    className="absolute w-3 h-3 bg-linear-to-r from-cyan-400/30 to-teal-400/30 rounded-full"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-linear-to-r from-cyan-50 to-teal-50 rounded-full border border-cyan-100">
                        <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-6">
                        The <span className="bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">Elanci</span> Difference
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
                        Experience travel like never before with our commitment to excellence, personalized service, and unforgettable adventures.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {whyChooseUs.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -12,
                                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)",
                                }}
                                transition={{ duration: 0.3 }}
                                className="group relative"
                            >
                                {/* Feature Card */}
                                <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-lg shadow-gray-100/50 overflow-hidden">
                                    {/* Background gradient on hover */}
                                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-teal-500/0 to-emerald-500/0 group-hover:from-cyan-500/5 group-hover:via-teal-500/5 group-hover:to-emerald-500/5 transition-all duration-500" />
                                    
                                    {/* Icon Container */}
                                    <motion.div
                                        variants={iconVariants}
                                        className="relative mb-6"
                                    >
                                        <div className="relative">
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-teal-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                                            
                                            {/* Icon background */}
                                            <div className="relative inline-flex p-4 bg-linear-to-br from-cyan-50 to-teal-50 rounded-2xl shadow-sm">
                                                <Icon className="w-8 h-8 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        
                                        {/* Decorative corner */}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-300 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {item.desc}
                                    </p>

                                    {/* Learn more link */}
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-2 text-cyan-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    >
                                        <span>Learn more</span>
                                        <svg 
                                            className="w-4 h-4" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.div>

                                    {/* Decorative bottom border */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-linear-to-r from-cyan-400 to-teal-400 rounded-full group-hover:w-4/5 transition-all duration-500" />
                                </div>

                                {/* Floating number */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-linear-to-r from-cyan-500 to-teal-400 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                                    {index + 1}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block p-1 bg-linear-to-r from-cyan-500/20 via-teal-500/20 to-emerald-500/20 rounded-2xl">
                        <div className="px-8 py-6 bg-white rounded-xl border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Ready to Experience the Difference?
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Join thousands of satisfied travelers who have discovered the world with Elanci.
                            </p>
                            <motion.button
                                onClick={()=>{
                                    navigate("/contact")
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="px-8 py-3 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/35 transition-all duration-300"
                            >
                                Start Your Journey
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "99%", label: "Client Satisfaction" },
                            { value: "24/7", label: "Support Available" },
                            { value: "150+", label: "Destinations" },
                            { value: "10k+", label: "Happy Travelers" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="text-3xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WhyChooseElanci;