import { motion } from "framer-motion";
import { featuredDestination } from "../utils/Index";
import { ChevronsRight, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedDestination = () => {
    return (
        <div className="bg-linear-to-b from-[#E8F0F2] to-white py-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-16 px-4"
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                    className="text-4xl md:text-5xl font-bold text-[#0C2F37]"
                >
                    DESTINATIONS ✈️
                </motion.h1>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    From tropical paradises to cultural landmarks, discover the world's most incredible places.
                </p>
            </motion.div>

            {/* Destination Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {featuredDestination.map((destination, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.15 }}
                        whileHover={{ scale: 1.03 }}
                        className="rounded-xl overflow-hidden shadow-lg bg-white group hover:shadow-xl transition-all duration-300"
                    >
                        {/* Image with Overlay */}
                        <div className="relative">
                            <img
                                src={destination.image}
                                alt={destination.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                            {/* Title + Label inside image */}
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={destination.flag}
                                        alt=""
                                        className="w-6 h-4 rounded-sm border border-white/40"
                                    />
                                    <h2 className="text-xl font-semibold">{destination.title}</h2>
                                </div>
                                <span className="mt-2 inline-block text-xs uppercase bg-yellow-400 text-[#0C2F37] px-3 py-1 rounded-full font-semibold">
                                    {destination.label}
                                </span>
                            </div>
                        </div>

                        {/* Description and Highlights below image */}
                        <div className="p-5 text-[#0C2F37] flex flex-col justify-between h-full">
                            <p className="text-sm text-gray-700 mb-4">{destination.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {destination.highlights.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-[#0C2F37]/10 text-[#0C2F37] px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-end">
                                <Plane className="w-5 h-5 text-[#0C2F37] animate-pulse" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-14">
                <Link
                    to="/destination"
                    className="group flex items-center justify-center gap-2 cursor-pointer text-sm font-semibold tracking-wide
             border-2 border-[#0C2F37] rounded-full px-8 py-3 bg-[#0C2F37] text-white
             hover:bg-white hover:text-[#0C2F37] hover:shadow-lg transition-all duration-300"
                >
                    View All Destinations
                    <ChevronsRight
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0C2F37]"
                    />
                </Link>
            </div>
        </div>
    );
};

export default FeaturedDestination;
