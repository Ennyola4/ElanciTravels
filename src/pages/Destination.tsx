import { motion } from "framer-motion";
import { destinationList } from "../utils/Index";
import { useEffect, useState } from "react";
import { Globe, MapPin, Star, Users, Calendar, ChevronRight, Search, Filter, TrendingUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const Destination = () => {
    const location = useLocation();
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);




    // Filter categories
    const filterCategories = [
        { id: "all", label: "All" },
        { id: "popular", label: "Popular" },
        { id: "beach", label: "Beach" },
        { id: "cultural", label: "Cultural" },
        { id: "adventure", label: "Adventure" },
        { id: "luxury", label: "Luxury" },
        { id: "nature", label: "Nature" }
    ];

    // Filtered destinations
    const filteredDestinations = destinationList.filter(destination => {
        const matchesFilter = activeFilter === "all" ||
            (destination.category && destination.category.includes(activeFilter));
        const matchesSearch = searchQuery === "" ||
            destination.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            destination.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-linear-to-b from-white to-gray-50/50">
            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
                {/* Background Image with Parallax */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')",
                    }}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-cyan-900/30 via-transparent to-teal-900/30" />

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-64 h-64 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-linear-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center px-4 max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        >
                            <Globe className="w-4 h-4 text-cyan-300" />
                            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                                Explore The World
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
                        >
                            Discover <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Breathtaking</span> Destinations
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            From tropical paradises to cultural landmarks, discover the world's most incredible places with our curated collection.
                        </motion.p>

                    
                    </div>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-8 left-0 right-0"
                >
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { value: "50+", label: "Countries" },
                                { value: "200+", label: "Destinations" },
                                { value: "98%", label: "Satisfaction" },
                                { value: "10k+", label: "Travelers" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Destinations Section */}
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
                            Featured <span className="bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">Destinations</span>
                        </h2>
                        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                            Explore our handpicked selection of destinations, each offering unique experiences and unforgettable memories.
                        </p>
                    </motion.div>

                    {/* Search and Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                            {/* Search Bar */}
                            <div className="relative flex-1 max-w-xl">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search destinations..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                />
                            </div>

                            {/* Filter Tabs */}
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Filter className="w-4 h-4" />
                                    <span className="text-sm font-medium">Filter:</span>
                                </div>
                                {filterCategories.map((category) => (
                                    <motion.button
                                        key={category.id}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveFilter(category.id)}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeFilter === category.id
                                                ? "bg-linear-to-r from-cyan-500 to-teal-400 text-white shadow-lg shadow-cyan-500/25"
                                                : "bg-white text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50/50 hover:to-teal-50/50 border border-gray-200"
                                            }`}
                                    >
                                        {category.label}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Destinations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDestinations.map((destination, index) => (
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
                                {/* Destination Card */}
                                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <motion.img
                                            src={destination.image}
                                            alt={destination.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-gray-900/70 via-gray-900/30 to-transparent" />

                                        {/* Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 bg-linear-to-r from-cyan-500 to-teal-400 text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-lg">
                                                {destination.label}
                                            </span>
                                        </div>

                                        {/* Rating */}
                                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                            <span className="text-white font-semibold text-sm">4.8</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Title and Flag */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <img
                                                src={destination.flag}
                                                alt={destination.country || destination.title}
                                                className="w-8 h-6 rounded-md shadow border-2 border-white"
                                            />
                                            <h3 className="text-xl font-bold text-gray-900">
                                                {destination.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {destination.desc}
                                        </p>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {destination.highlights.slice(0, 3).map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-linear-to-r from-cyan-50 to-teal-50 text-cyan-700 text-xs font-medium rounded-full border border-cyan-100"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Additional Info */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="text-center">
                                                <Users className="w-5 h-5 text-cyan-500 mx-auto mb-2" />
                                                <div className="text-xs text-gray-500">Visitors</div>
                                                <div className="font-semibold text-gray-900">10k+</div>
                                            </div>
                                            <div className="text-center">
                                                <Calendar className="w-5 h-5 text-teal-500 mx-auto mb-2" />
                                                <div className="text-xs text-gray-500">Best Time</div>
                                                <div className="font-semibold text-gray-900">All Year</div>
                                            </div>
                                            <div className="text-center">
                                                <MapPin className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                                                <div className="text-xs text-gray-500">Distance</div>
                                                <div className="font-semibold text-gray-900">Nearby</div>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <motion.button
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="group w-full flex items-center justify-between px-4 py-3 bg-linear-to-r from-cyan-50 to-teal-50 text-cyan-700 font-semibold rounded-full border border-cyan-100 hover:border-cyan-300 transition-all duration-300"
                                        >
                                            <span>Explore Destination</span>
                                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </motion.button>
                                    </div>

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
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <TrendingUp className="w-6 h-6 text-cyan-500" />
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Ready for Your Next Adventure?
                                    </h3>
                                </div>
                                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                    Can't find what you're looking for? Our travel experts can help you discover hidden gems and create your perfect itinerary.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="px-8 py-3 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25"
                                    >
                                        Contact Our Experts
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-cyan-300 hover:text-cyan-600 transition-all duration-300"
                                    >
                                        View All Destinations
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

export default Destination;