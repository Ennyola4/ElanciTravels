import { motion } from "framer-motion";
import { tours } from "../utils/Index";
import { Clock, Star, Users, MapPin, Calendar, ChevronRight, Plane, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Tours = () => {
    const location = useLocation();
    const [filter, setFilter] = useState<string>("all");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Filter tours based on category
    const filteredTours = filter === "all"
        ? tours
        : tours.filter(tour => tour.category === filter);

 

    // Filter categories
    const filterCategories = [
        { id: "all", label: "All Tours" },
        { id: "popular", label: "Popular" },
        { id: "adventure", label: "Adventure" },
        { id: "cultural", label: "Cultural" },
        { id: "luxury", label: "Luxury" },
        { id: "family", label: "Family" }
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-white to-gray-50/50">
            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
                {/* Background Image with Animation */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-cyan-900/20 via-transparent to-teal-900/20" />

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-64 h-64 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-linear-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center px-4 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-300" />
                            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                                Exclusive Journeys
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-3xl sm:text-3xl lg:text-7xl font-bold text-white mb-6"
                        >
                            Top <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Tour Experiences</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
                        >
                            Discover handcrafted journeys that blend luxury, adventure, and authentic cultural experiences. Each tour is designed to create unforgettable memories.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-8"
                        >
                            <div className="inline-flex items-center gap-2 text-white/80">
                                <Plane className="w-5 h-5 animate-pulse" />
                                <span>50+ Destinations • 98% Satisfaction • Expert Guides</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="text-white text-sm">Scroll to explore</div>
                </motion.div>
            </div>

            {/* Tours Section */}
            <section className="relative py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">Tour Packages</span>
                        </h2>
                        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                            Experience the world through our carefully curated tours, each designed to offer unique perspectives and unforgettable moments.
                        </p>
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap justify-center gap-3">
                            {filterCategories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setFilter(category.id)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.id
                                            ? "bg-linear-to-r from-cyan-500 to-teal-400 text-white shadow-lg shadow-cyan-500/25"
                                            : "bg-white text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/50 hover:to-teal-50/50 border border-gray-200"
                                        }`}
                                >
                                    {category.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tour Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredTours.map((tour, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut" as const
                                }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)",
                                }}
                                className="group relative"
                            >
                                {/* Tour Card */}
                                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100">
                                    {/* Tour Header */}
                                    <div className="p-6 border-b border-gray-100">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                    {tour.titel}
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>Multiple Destinations</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 bg-linear-to-r from-amber-50 to-amber-100 px-3 py-1.5 rounded-full">
                                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                                <span className="font-semibold text-amber-700">{tour.rating}</span>
                                            </div>
                                        </div>

                                        {/* Countries Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {tour.countries.map((country, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-linear-to-r from-cyan-50 to-teal-50 text-cyan-700 text-xs font-medium rounded-full border border-cyan-100"
                                                >
                                                    {country}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                            {tour.desc}
                                        </p>
                                    </div>

                                    {/* Tour Details */}
                                    <div className="p-6">
                                        {/* Info Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
                                            <div className="text-center p-3 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl">
                                                <Clock className="w-5 h-5 text-cyan-500 mx-auto mb-2" />
                                                <div className="text-sm text-gray-500">Duration</div>
                                                <div className="font-bold text-gray-900">{tour.days}</div>
                                            </div>
                                            <div className="text-center p-3 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl">
                                                <Users className="w-5 h-5 text-teal-500 mx-auto mb-2" />
                                                <div className="text-sm text-gray-500">Group Size</div>
                                                <div className="font-bold text-gray-900">{tour.numberOfPeople}</div>
                                            </div>
                                            <div className="text-center p-3 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl">
                                                <Calendar className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                                                <div className="text-sm text-gray-500">Season</div>
                                                <div className="font-bold text-gray-900">Year Round</div>
                                            </div>
                                        </div>

                                        {/* Price & CTA */}
                                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                            <div>
                                                <div className="text-sm text-gray-500">Starting from</div>
                                                <div className="text-3xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                                                    {tour.amount}
                                                </div>
                                                <div className="text-xs text-gray-400">Per person</div>
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.05, x: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                                className="group flex items-center gap-2 px-6 py-3 cursor-pointer bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/35 transition-all duration-300"
                                            >
                                                <span>Book Now</span>
                                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Popular Badge */}
                                    {tour.popular && (
                                        <div className="absolute top-4 right-4">
                                            {/* <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-400 text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-lg">
                                                Popular
                                            </span> */}
                                        </div>
                                    )}

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 text-center"
                    >
                        <div className="inline-block p-1 bg-linear-to-r from-cyan-500/20 via-teal-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm">
                            <div className="px-8 py-8 bg-white rounded-xl border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Need a Custom Tour?
                                </h3>
                                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                    Our travel experts can create a personalized itinerary tailored to your preferences and interests.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="px-8 py-3 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25"
                                    >
                                        Customize Your Tour
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-cyan-300 hover:text-cyan-600 transition-all duration-300"
                                    >
                                        Contact Our Experts
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Tours;