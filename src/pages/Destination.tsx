import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {  MapPin, Star, ChevronRight, Search, Filter, TrendingUp, ChevronLeft, ChevronDown, Grid, List } from "lucide-react";
import { useLocation } from "react-router-dom";

const Destination = () => {
    const location = useLocation();
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const itemsPerPage = 12;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Destinations List
    const allDestinations = [
        "Canada", "Mexico", "Bahamas", "United States", "St Kitts and Nevis", "Aruba",
        "Dominican Republic", "Barbados", "Brazil", "Peru", "Chile", "Cuba", "Colombia",
        "Costa Rica", "French Polynesia", "Hawaii", "Jamaica", "Panama", "St Barthes",
        "St Lucia", "Turks and Caicos", "United Kingdom", "Turkey", "Switzerland",
        "France", "Germany", "Portugal", "Italy", "Spain", "Belgium", "Greece", "Austria",
        "Australia", "Sweden", "Iceland", "Malta", "Netherlands", "Hungary", "Ireland",
        "Finland", "Bolivia", "British Virgin Islands", "China", "Singapore", "Vietnam",
        "Laos", "Cambodia", "Philippines", "Thailand", "Japan", "Hong Kong", "Indonesia",
        "Malaysia", "Maldives", "Seychelles", "Morocco", "Oman", "Qatar", "UAE",
        "Saudi Arabia", "Jordan", "Egypt", "Mauritius", "Mozambique", "Madagascar",
        "Namibia", "Zimbabwe", "South Africa", "Tanzania", "Kenya", "Ethiopia",
        "Côte d'Ivoire", "Senegal", "Cape Verde", "Congo Brazzaville", "Ghana", "Nigeria"
    ];

    // Assign categories to destinations
    const getDestinationCategory = (destination: string) => {
        const categories = {
            beach: ["Bahamas", "Aruba", "Barbados", "French Polynesia", "Hawaii", "Maldives", "Seychelles", "Turks and Caicos", "St Lucia"],
            cultural: ["Italy", "France", "Japan", "Greece", "Egypt", "Turkey", "Mexico", "Peru", "Thailand", "India"],
            adventure: ["New Zealand", "Costa Rica", "Chile", "Nepal", "South Africa", "Norway", "Canada", "Iceland"],
            luxury: ["Monaco", "Switzerland", "Dubai", "Singapore", "Maldives", "French Polynesia", "St Barthes"],
            nature: ["Costa Rica", "Canada", "Norway", "New Zealand", "Iceland", "Brazil", "Australia", "Kenya"]
        };

        for (const [category, destinations] of Object.entries(categories)) {
            if (destinations.includes(destination)) {
                return category;
            }
        }
        return "cultural";
    };

    // Get region for each destination
    const getDestinationRegion = (destination: string) => {
        const regions = {
            "North America": ["Canada", "United States", "Mexico"],
            "Caribbean": ["Bahamas", "St Kitts and Nevis", "Aruba", "Dominican Republic", "Barbados", "Cuba", "St Barthes", "St Lucia", "Turks and Caicos", "Jamaica"],
            "South America": ["Brazil", "Peru", "Chile", "Colombia"],
            "Central America": ["Costa Rica", "Panama"],
            "Europe": ["United Kingdom", "Turkey", "Switzerland", "France", "Germany", "Portugal", "Italy", "Spain", "Belgium", "Greece", "Austria", "Sweden", "Iceland", "Malta", "Netherlands", "Hungary", "Ireland", "Finland"],
            "Asia Pacific": ["Australia", "China", "Singapore", "Vietnam", "Laos", "Cambodia", "Philippines", "Thailand", "Japan", "Hong Kong", "Indonesia", "Malaysia"],
            "Middle East": ["Morocco", "Oman", "Qatar", "UAE", "Saudi Arabia", "Jordan"],
            "Africa": ["Egypt", "Mauritius", "Mozambique", "Madagascar", "Namibia", "Zimbabwe", "South Africa", "Tanzania", "Kenya", "Ethiopia", "Côte d'Ivoire", "Senegal", "Cape Verde", "Congo Brazzaville", "Ghana", "Nigeria"],
            "Oceania": ["French Polynesia", "Hawaii"]
        };

        for (const [region, destinations] of Object.entries(regions)) {
            if (destinations.includes(destination)) {
                return region;
            }
        }
        return "Global";
    };

    // Get image URL for destination
    const getDestinationImage = (destination: string) => {
        const imageMap: Record<string, string> = {
            "France": "https://images.unsplash.com/photo-1502602898525-3fd1f034b8e6?q=80&w=1970&auto=format&fit=crop",
            "Italy": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2070&auto=format&fit=crop",
            "Japan": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
            "Greece": "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?q=80&w=2069&auto=format&fit=crop",
            "Maldives": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop",
            "Switzerland": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
            "Australia": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1930&auto=format&fit=crop",
            "Canada": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop",
            "Brazil": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
            "Thailand": "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop",
            "Spain": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=2070&auto=format&fit=crop",
            "United Arab Emirates": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
            "South Africa": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
            "New Zealand": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2071&auto=format&fit=crop",
            "Iceland": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2069&auto=format&fit=crop"
        };

        return imageMap[destination] || `https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&w=400&h-300&crop=entropy&fit=crop`;
    };

    const destinations = allDestinations.map(destination => ({
        title: destination,
        category: getDestinationCategory(destination),
        region: getDestinationRegion(destination),
        image: getDestinationImage(destination),
        rating: (Math.random() * 0.5 + 4.5).toFixed(1),
        visitors: Math.floor(Math.random() * 50000) + 10000,
        description: `Experience the unique culture and beauty of ${destination}. A destination that offers unforgettable memories and breathtaking landscapes.`,
        highlights: ["Cultural", "Scenic", "Adventure", "Luxury", "Culinary"].slice(0, Math.floor(Math.random() * 3) + 2)
    }));

    // Filter categories
    const filterCategories = [
        { id: "all", label: "All Destinations" },
        { id: "beach", label: "Beach Getaways" },
        { id: "cultural", label: "Cultural Hubs" },
        { id: "adventure", label: "Adventure" },
        { id: "luxury", label: "Luxury Retreats" },
        { id: "nature", label: "Nature & Wildlife" }
    ];

    // Filtered destinations
    const filteredDestinations = destinations.filter(destination => {
        const matchesFilter = activeFilter === "all" || destination.category === activeFilter;
        const matchesSearch = searchQuery === "" ||
            destination.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            destination.region.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Pagination
    const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDestinations = filteredDestinations.slice(indexOfFirstItem, indexOfLastItem);


    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 600, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative h-[55vh] min-h-[50px] w-full overflow-hidden">
                {/* Background Image with Gradient */}
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.8 }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('https://img.freepik.com/free-photo/travel-items-table_23-2147732586.jpg?semt=ais_user_personalization&w=740&q=80')",
                        }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-gray-900/90 via-gray-900/50 to-gray-900/20" />
                </div>

                {/* Animated Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-l from-teal-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center px-4 max-w-6xl">

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Explore <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">La</span> Vie
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
                        >
                            Every destination in our unparalleled portfolio is chosen with care, intention, and a sense of refined taste.
                            We highlight not entire countries, but the cities within them that truly embody luxury, culture, and atmosphere.
                        </motion.p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >

                    <ChevronDown className="w-6 h-6 text-white/60 animate-bounce" />
                </motion.div>
            </div>

            {/* Destinations Section */}
            <section className="relative py-20 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Search and Controls */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                            {/* Search Bar */}
                            <div className="relative flex-1 max-w-2xl">
                                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search destinations by name or region..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl border border-gray-200 shadow-lg focus:outline-none focus:ring-3 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300"
                                />
                            </div>

                            {/* View Toggle and Filter */}
                            <div className="flex items-center gap-4">
                                {/* View Toggle */}
                                <div className="flex bg-gray-100 rounded-xl p-1">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-3 rounded-lg transition-all duration-300 ${viewMode === "grid"
                                            ? "bg-white text-cyan-600 shadow-md"
                                            : "text-gray-500 hover:text-gray-700"}`}
                                    >
                                        <Grid className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-3 rounded-lg transition-all duration-300 ${viewMode === "list"
                                            ? "bg-white text-cyan-600 shadow-md"
                                            : "text-gray-500 hover:text-gray-700"}`}
                                    >
                                        <List className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Filter Dropdown */}
                                <div className="relative">
                                    <select
                                        value={activeFilter}
                                        onChange={(e) => setActiveFilter(e.target.value)}
                                        className="appearance-none pl-6 pr-12 py-3 bg-white rounded-xl border border-gray-200 shadow-lg focus:outline-none focus:ring-3 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300"
                                    >
                                        {filterCategories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.label}
                                            </option>
                                        ))}
                                    </select>
                                    <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Active Filters */}
                        <div className="mt-6 flex flex-wrap gap-2 justify-center">
                            {filterCategories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${activeFilter === category.id
                                        ? "bg-linear-to-r from-cyan-600 to-teal-500 text-white shadow-xl shadow-cyan-500/25"
                                        : "bg-white text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50 hover:to-teal-50 border border-gray-200"
                                        }`}
                                >
                                    {category.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Results Count */}
                    <div className="mb-8 text-center">
                        <p className="text-gray-600">
                            Showing <span className="font-bold text-cyan-600">{currentDestinations.length}</span> of{" "}
                            <span className="font-bold text-gray-900">{filteredDestinations.length}</span> destinations
                        </p>
                    </div>

                    {/* Destinations Grid/List */}
                    {viewMode === "grid" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                            {currentDestinations.map((destination, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                    }}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative"
                                >
                                    {/* Destination Card */}
                                    <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-cyan-200 transition-all duration-500">
                                        {/* Image Container */}
                                        <div className="relative h-48 overflow-hidden">
                                            <motion.img
                                                src={destination.image}
                                                alt={destination.title}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-gray-900/20 to-transparent" />

                                            {/* Region Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full">
                                                    {destination.region}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">
                                                    {destination.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="text-sm">{destination.region}</span>
                                                </div>
                                            </div>

                                            {/* Category Tags */}
                                            <div className="mb-5">
                                                <span className="inline-block px-3 py-1.5 bg-linear-to-r from-cyan-50 to-teal-50 text-cyan-700 text-xs font-semibold rounded-full border border-cyan-100">
                                                    {destination.category.toUpperCase()}
                                                </span>
                                            </div>

                                            {/* Stats */}
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <span className="font-semibold text-gray-900">{destination.visitors.toLocaleString()}</span>
                                                    <span>travelers</span>
                                                </div>
                                                <div className="text-gray-400">|</div>
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                    <span className="font-semibold text-gray-900">{destination.rating}</span>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        // List View
                        <div className="space-y-4">
                            {currentDestinations.map((destination, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.03 }}
                                    whileHover={{ x: 4 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/30 border border-gray-100 hover:border-cyan-200 transition-all duration-300">
                                        <div className="flex items-center gap-6">
                                            {/* Image */}
                                            <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
                                                <img
                                                    src={destination.image}
                                                    alt={destination.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                                                            {destination.title}
                                                        </h3>
                                                        <div className="flex items-center gap-3 mt-2">
                                                            <div className="flex items-center gap-1 text-gray-600">
                                                                <MapPin className="w-4 h-4" />
                                                                <span className="text-sm">{destination.region}</span>
                                                            </div>
                                                            <span className="text-gray-300">•</span>
                                                            <span className="px-3 py-1 bg-linear-to-r from-cyan-50 to-teal-50 text-cyan-700 text-xs font-semibold rounded-full">
                                                                {destination.category}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-right">
                                                            <div className="text-2xl font-bold text-gray-900">${Math.floor(Math.random() * 2000) + 800}</div>
                                                            <div className="text-sm text-gray-500">starting from</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-gray-600 mb-4 line-clamp-2">
                                                    Discover the wonders of {destination.title}. Experience unique culture, breathtaking landscapes, and unforgettable memories in this extraordinary destination.
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-6">
                                                        <div className="flex items-center gap-2">
                                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                            <span className="font-semibold text-gray-900">{destination.rating}</span>
                                                            <span className="text-gray-500 text-sm">rating</span>
                                                        </div>
                                                        <div className="text-gray-500">•</div>
                                                        <div className="text-gray-600 text-sm">
                                                            <span className="font-semibold text-gray-900">{destination.visitors.toLocaleString()}</span> travelers
                                                        </div>
                                                    </div>
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="px-6 py-2.5 bg-linear-to-r from-cyan-600 to-teal-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
                                                    >
                                                        View Details
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 flex flex-col items-center"
                        >
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === 1
                                        ? "border-gray-200 text-gray-400 cursor-not-allowed"
                                        : "border-gray-300 text-gray-700 hover:bg-linear-to-r hover:from-cyan-50 hover:to-teal-50 hover:border-cyan-300 hover:text-cyan-600"
                                        }`}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    let pageNumber;
                                    if (totalPages <= 5) {
                                        pageNumber = i + 1;
                                    } else if (currentPage <= 3) {
                                        pageNumber = i + 1;
                                    } else if (currentPage >= totalPages - 2) {
                                        pageNumber = totalPages - 4 + i;
                                    } else {
                                        pageNumber = currentPage - 2 + i;
                                    }

                                    return (
                                        <button
                                            key={i}
                                            onClick={() => handlePageChange(pageNumber)}
                                            className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${currentPage === pageNumber
                                                ? "bg-linear-to-r from-cyan-600 to-teal-500 text-white shadow-lg shadow-cyan-500/25"
                                                : "text-gray-700 hover:bg-linear-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-600 border border-gray-200"
                                                }`}
                                        >
                                            {pageNumber}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === totalPages
                                        ? "border-gray-200 text-gray-400 cursor-not-allowed"
                                        : "border-gray-300 text-gray-700 hover:bg-linear-to-r hover:from-cyan-50 hover:to-teal-50 hover:border-cyan-300 hover:text-cyan-600"
                                        }`}
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="mt-4 text-sm text-gray-600">
                                Page {currentPage} of {totalPages}
                            </div>
                        </motion.div>
                    )}

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-20"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-900 to-gray-800">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2135&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
                            <div className="relative z-10 px-8 py-12 text-center">
                                <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Ready to Begin Your Journey?
                                </h3>
                                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                    Our travel concierges are ready to craft your perfect itinerary. Experience the world like never before with our exclusive access and insider knowledge.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3.5 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                                    >
                                        Schedule Consultation
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                    >
                                        Download Brochure
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