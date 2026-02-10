import { motion } from "framer-motion";
import { featuredDestination } from "../utils/Index";
import { ChevronsRight, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedDestination = () => {
    return (
        <div className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-cyan-50/30 py-24">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-l from-teal-100/20 to-emerald-100/20 rounded-full blur-3xl" />

            {/* Animated floating elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-5 w-40 h-40 bg-cyan-400 rounded-full opacity-30"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-1/3 right-8 w-30 h-30 bg-teal-400 rounded-full opacity-30"
            />

            {/* Header */}
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 px-4"
                >
                    {/* Subtle label */}
                    <div className="inline-flex items-center gap-2 mb-4">
                        
                        <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
                            Explore The World
                        </span>
                        
                    </div>

                    {/* Main title with gradient */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                    >
                        <span className="bg-linear-to-r from-cyan-700 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                            Featured
                        </span>
                        <span className="text-gray-900 ml-4">Destinations</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed"
                    >
                        From tropical paradises to cultural landmarks, discover the world's most incredible places
                        with our curated collection of extraordinary destinations.
                    </motion.p>
                </motion.div>

                {/* Destination Grid */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredDestination.map((destination, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    y: -12,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative h-full rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 bg-white border border-gray-100 
                                              group-hover:shadow-xl group-hover:shadow-cyan-200/30 transition-all duration-500">

                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <motion.img
                                            src={destination.image}
                                            alt={destination.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

                                        {/* Flag and Location */}
                                        <div className="absolute top-4 left-4 flex items-center gap-3">
                                            <motion.div
                                                whileHover={{ rotate: 10, scale: 1.1 }}
                                                className="relative"
                                            >
                                                <img
                                                    src={destination.flag}
                                                    alt=""
                                                    className="w-8 h-6 rounded-md shadow-lg border-2 border-white"
                                                />
                                            </motion.div>
                                            <div className="flex items-center gap-1.5 text-white/90 text-sm">
                                                <MapPin className="w-4 h-4" />
                                                <span className="font-medium">{destination.country || "Destination"}</span>
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                            <span className="text-white font-semibold text-sm">4.8</span>
                                        </div>

                                        {/* Title and Label */}
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 }}
                                                className="space-y-3"
                                            >
                                                <h2 className="text-2xl font-bold text-white line-clamp-1">
                                                    {destination.title}
                                                </h2>
                                                <div className="flex items-center gap-3">
                                                    <span className="inline-block px-4 py-1.5 bg-linear-to-r from-cyan-500 to-teal-400 text-white text-xs uppercase font-bold rounded-full shadow-lg">
                                                        {destination.label}
                                                    </span>
                                                    <span className="text-white/80 text-sm">
                                                        {destination.season || "All Year"}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                                            {destination.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {destination.highlights.map((tag, i) => (
                                                <motion.span
                                                    key={i}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="text-xs font-medium px-3 py-1.5 bg-linear-to-r from-cyan-50 to-teal-50 
                                                             text-cyan-700 rounded-full border border-cyan-100 shadow-sm"
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative mt-20 px-4"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Ready for Your Next Adventure?
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover hundreds more destinations waiting to be explored
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Link to="/destination">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 rounded-full overflow-hidden shadow-lg"
                            >
                                {/* Background gradient */}
                                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-teal-500 to-emerald-500" />
                                <div className="absolute inset-0 bg-linear-to-r from-cyan-600 via-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="relative flex items-center gap-3 text-white font-semibold text-lg">
                                    <span>View All Destinations</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                    >
                                        <ChevronsRight className="w-5 h-5" />
                                    </motion.div>
                                </div>

                                {/* Animated border */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-transparent"
                                    animate={{
                                        borderColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0)']
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.button>
                        </Link>
                    </div>

                    {/* Decorative stats */}
                    <div className="flex justify-center gap-10 mt-12 text-center">
                        {[
                            { value: "50+", label: "Countries" },
                            { value: "200+", label: "Destinations" },
                            { value: "10k+", label: "Travelers" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="space-y-2"
                            >
                                <div className="text-3xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FeaturedDestination;