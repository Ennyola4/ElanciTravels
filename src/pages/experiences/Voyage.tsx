import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    Clock,
    Wifi,
    Coffee,
    Shield,
    CornerUpLeft,
    Globe,
    Compass,
    Ship,
} from "lucide-react";
import { useEffect, useState } from "react";

const Voyage = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("overview");

    /* ================= AMENITIES ================= */
    const amenities = [
        { icon: <Wifi className="w-5 h-5" />, label: "Private Transfers" },
        { icon: <Coffee className="w-5 h-5" />, label: "Onboard Dining" },
        { icon: <Shield className="w-5 h-5" />, label: "VIP Excursions" },
        { icon: <Clock className="w-5 h-5" />, label: "24/7 Concierge" },
    ];

    const journeyHighlights = [
        {
            title: "Luxury Cabins",
            description: "Ocean-view suites with private balconies and personalized service",
            icon: <Ship className="w-6 h-6" />,
        },
        {
            title: "Exotic Destinations",
            description: "Private excursions, cultural tours & hidden gems around the globe",
            icon: <Globe className="w-6 h-6" />,
        },
        {
            title: "Onboard Experiences",
            description: "Spa, fine dining, wellness, and curated entertainment at sea",
            icon: <Compass className="w-6 h-6" />,
        },
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* ================= HERO ================= */}
            <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/voyage2.jpg')" }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <CornerUpLeft
                        onClick={() => navigate(-1)}
                        className="text-white cursor-pointer hover:scale-125 transition mb-6"
                    />

                    <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white text-sm border border-white/20">
                        ✦ Luxury Voyage Escapes
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
                        The Ultimate
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-300">
                            Voyage Experience
                        </span>
                    </h1>

                    <p className="text-gray-200 mt-6 text-xl max-w-2xl mx-auto">
                        Cruise the world in style, enjoy private excursions, and indulge in
                        luxurious onboard experiences curated for ultimate relaxation and discovery.
                    </p>
                </div>
                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-white rounded-full mt-2" />
                    </div>
                </motion.div>
            </div>

            {/* ================= AMENITIES ================= */}
            <div className="border-b">
                <div className="max-w-7xl mx-auto py-4 flex flex-wrap justify-center gap-8">
                    {amenities.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-600">
                            {item.icon}
                            <span className="text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= OVERVIEW SECTION ================= */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* ================= LEFT CONTENT ================= */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                                The Experience
                            </span>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Where Luxury at Sea
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                                    {" "}Meets Adventure
                                </span>
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Discover exotic destinations, elegant oceanfront suites, and unforgettable
                                onboard experiences — all tailored for a refined voyage of discovery.
                            </p>

                            {/* ===== Tabs ===== */}
                            <div className="flex gap-4 mb-8 border-b border-gray-200">
                                {["overview", "highlights", "services"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 px-2 capitalize font-medium transition relative ${activeTab === tab
                                            ? "text-teal-600"
                                            : "text-gray-500 hover:text-gray-700"
                                            }`}
                                    >
                                        {tab}

                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* ===== Tab Content ===== */}
                            <div className="min-h-[200px]">

                                {activeTab === "overview" && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                        <p className="text-gray-600">
                                            Retreat into luxury cruise suites, enjoy curated excursions,
                                            fine dining experiences, and evenings on deck under starry skies.
                                        </p>
                                    </motion.div>
                                )}

                                {activeTab === "highlights" && (
                                    <motion.ul
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="space-y-3"
                                    >
                                        {[
                                            "Private yacht excursions & transfers",
                                            "Luxury cabins with ocean views",
                                            "Cultural tours & hidden gems at each port",
                                            "Spa, wellness & entertainment onboard",
                                            "Gourmet dining & curated experiences",
                                        ].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="text-teal-600 mt-1">⛵</span>
                                                <span className="text-gray-700">{item}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                )}

                                {activeTab === "services" && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="grid grid-cols-2 gap-4"
                                    >
                                        {journeyHighlights.map((item, i) => (
                                            <div key={i} className="p-4 bg-gray-50 rounded-xl">
                                                <div className="text-teal-600 mb-2">{item.icon}</div>
                                                <h4 className="font-semibold mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        {/* ================= RIGHT IMAGE ================= */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={
                                        activeTab === "overview"
                                            ? "/sea.jpeg"
                                            : activeTab === "highlights"
                                                ? "/voyage2.jpg"
                                                : "/oceanview.jpg"
                                    }
                                    className="w-full h-[400px] object-cover"
                                />

                                <div className={`absolute inset-0 bg-gradient-to-t ${activeTab === "overview"
                                    ? "from-teal-900/60"
                                    : activeTab === "highlights"
                                        ? "from-indigo-900/60"
                                        : "from-purple-900/60"
                                    }`} />

                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-md">
                                        {activeTab === "overview"
                                            ? "⛴ Luxury Cabins"
                                            : activeTab === "highlights"
                                                ? "🌴 Exotic Destinations"
                                                : "🛳 Onboard Experiences"}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                    >
                                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                                            <div className="text-2xl font-bold">5+</div>
                                            <div className="text-sm">Destinations</div>
                                        </div>

                                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                                            <div className="text-2xl font-bold">100%</div>
                                            <div className="text-sm">Private Access</div>
                                        </div>

                                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
                                            <div className="text-2xl font-bold">24/7</div>
                                            <div className="text-sm">Concierge</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            <motion.p
                                key={`caption-${activeTab}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-gray-500 mt-8 text-center"
                            >
                                {activeTab === "overview"
                                    ? "Ocean-view suites with private balconies"
                                    : activeTab === "highlights"
                                        ? "Exotic ports and hidden gems at each stop"
                                        : "Luxury onboard dining and entertainment"}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= SIGNATURE VOYAGE JOURNEY ================= */}
            <section className="bg-white py-20 px-4 md:py-8 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20 md:mb-28">
                        <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-4 md:mb-6">
                            Signature Journey
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-light leading-tight text-gray-900">
                            The Grand Voyage Escape
                        </h2>

                        <p className="mt-4 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-lg text-gray-500 leading-relaxed">
                            A curated journey across the world’s most luxurious voyage destinations,
                            where elegance, discovery, and relaxation meet on the open sea.
                        </p>
                    </div>

                    {[{
                        city: "Mediterranean",
                        subtitle: "Classic Elegance",
                        text: "Sail along the Amalfi Coast, stopping at private ports and exploring historic towns.",
                        images: [
                            { src: "/coastal.jpeg", caption: "Coastal Towns" },
                            { src: "/yatchdeck.jpg", caption: "Luxury Yacht Deck" },
                            { src: "/cabin.jpg", caption: "Private Cabin" },
                        ],
                    }, {
                        city: "Caribbean",
                        subtitle: "Tropical Escape",
                        text: "Island-hop in style, enjoying secluded beaches and vibrant local cultures.",
                        images: [
                            { src: "/beach.jpg", caption: "Pristine Beaches" },
                            { src: "/pool.jpg", caption: "Onboard Pool" },
                            { src: "/oceanview.jpg", caption: "Ocean-view Cabin" },
                        ],
                    }, {
                        city: "Nordic Fjords",
                        subtitle: "Scenic Adventure",
                        text: "Explore fjords, glaciers, and northern lights from the comfort of your private suite.",
                        images: [
                            { src: "/landscape.jpg", caption: "Fjord Landscapes" },
                            { src: "/deckview.jpg", caption: "Deck Viewing Area" },
                            { src: "/panosuite.jpg", caption: "Panoramic Suite" },
                        ],
                    }].map((item, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32"
                        >
                            {i % 2 === 0 ? (
                                <>
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src={item.images[0].src}
                                            className="w-full h-64 sm:h-80 md:h-[520px] object-cover hover:scale-105 transition duration-700"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center mt-6 md:mt-0">
                                        <p className="text-sm tracking-[4px] text-gray-400 uppercase mb-2 md:mb-4">
                                            {item.city}
                                        </p>

                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 md:mb-6">
                                            {item.subtitle}
                                        </h3>

                                        <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed mb-4 md:mb-8">
                                            {item.text}
                                        </p>

                                        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-2 -mx-2">
                                            {item.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex-none w-52 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                                                >
                                                    <img
                                                        src={img.src}
                                                        className="w-full h-40 sm:h-48 md:h-48 object-cover transition-transform duration-500 hover:scale-105"
                                                        alt={img.caption}
                                                    />
                                                    <p className="text-center text-gray-500 text-xs sm:text-sm md:text-sm p-2">
                                                        {img.caption}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col justify-center order-last md:order-first mt-6 md:mt-0">
                                        <p className="text-sm tracking-[4px] text-gray-400 uppercase mb-2 md:mb-4">
                                            {item.city}
                                        </p>

                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 md:mb-6">
                                            {item.subtitle}
                                        </h3>

                                        <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed mb-4 md:mb-8">
                                            {item.text}
                                        </p>

                                        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-2 -mx-2">
                                            {item.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex-none w-52 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                                                >
                                                    <img
                                                        src={img.src}
                                                        className="w-full h-40 sm:h-48 md:h-48 object-cover transition-transform duration-500 hover:scale-105"
                                                        alt={img.caption}
                                                    />
                                                    <p className="text-center text-gray-500 text-xs sm:text-sm md:text-sm p-2">
                                                        {img.caption}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src={item.images[0].src}
                                            className="w-full h-64 sm:h-80 md:h-[520px] object-cover hover:scale-105 transition duration-700"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}

                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-xl sm:text-2xl md:text-2xl font-light text-gray-800 leading-relaxed">
                            Every voyage is fully tailored — private cabins, exclusive excursions,
                            and curated onboard experiences crafted entirely for you.
                        </p>

                        <button className="mt-8 sm:mt-12 px-10 sm:px-12 py-4 sm:py-5 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition text-base sm:text-lg md:text-lg">
                            Design My Voyage Journey
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Voyage;
