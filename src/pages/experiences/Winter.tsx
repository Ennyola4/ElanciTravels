import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    Clock,
    Wifi,
    Coffee,
    Shield,

    CornerUpLeft,
    Snowflake,
    Flame,
    SkipBack,

} from "lucide-react";
import { useEffect, useState } from "react";

const Winter = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("overview");

    /* ================= GALLERY ================= */


    /* ================= AMENITIES ================= */
    const amenities = [
        { icon: <Wifi className="w-5 h-5" />, label: "Private Transfers" },
        { icon: <Coffee className="w-5 h-5" />, label: "Après-Ski Lounges" },
        { icon: <Shield className="w-5 h-5" />, label: "VIP Ski Access" },
        { icon: <Clock className="w-5 h-5" />, label: "24/7 Concierge" },
    ];

    const journeyHighlights = [
        {
            title: "Alpine Residences",
            description: "Private chalets with spa, sauna, and panoramic terraces",
            icon: <Flame className="w-6 h-6" />,
        },
        {
            title: "Winter Adventures",
            description: "Heli-skiing, dog sledding, glacier hikes & snow safaris",
            icon: <SkipBack className="w-6 h-6" />,
        },
        {
            title: "Arctic Wonders",
            description: "Northern lights viewing & remote wilderness exploration",
            icon: <Snowflake className="w-6 h-6" />,
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
                    style={{ backgroundImage: "url('/ski.jpeg')" }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <CornerUpLeft
                        onClick={() => navigate(-1)}
                        className="text-white cursor-pointer hover:scale-125 transition mb-6"
                    />

                    <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white text-sm border border-white/20">
                        ✦ Luxury Winter Escapes
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
                        The Ultimate
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
                            Winter Experience
                        </span>
                    </h1>

                    <p className="text-gray-200 mt-6 text-xl max-w-2xl mx-auto">
                        Snow-covered landscapes, private alpine retreats, and unforgettable
                        winter adventures crafted in absolute luxury.
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
            <section className="py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* ================= LEFT CONTENT ================= */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                                The Experience
                            </span>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Where Winter Becomes
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                                    {" "}Pure Magic
                                </span>
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Discover snow-covered landscapes, alpine elegance, and unforgettable
                                winter adventures — from private chalets to glacier experiences crafted
                                for refined exploration.
                            </p>

                            {/* ===== Tabs ===== */}
                            <div className="flex gap-4 mb-8 border-b border-gray-200">
                                {["overview", "highlights", "services"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 px-2 capitalize font-medium transition relative ${activeTab === tab
                                            ? "text-blue-600"
                                            : "text-gray-500 hover:text-gray-700"
                                            }`}
                                    >
                                        {tab}

                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
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
                                            Retreat into luxury alpine lodges, enjoy private ski access,
                                            curated winter wellness, and evenings beside roaring fireplaces
                                            surrounded by breathtaking snow landscapes.
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
                                            "Private ski instructors & helicopter transfers",
                                            "Luxury alpine chalets with panoramic views",
                                            "Dog sledding & glacier exploration",
                                            "Northern Lights viewing experiences",
                                            "Après-ski fine dining & wellness spas",
                                        ].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="text-blue-600 mt-1">❄</span>
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
                                                <div className="text-blue-600 mb-2">{item.icon}</div>
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
                                            ? "/winter.jpg"
                                            : activeTab === "highlights"
                                                ? "/ski.jpeg"
                                                : "/winter2.jpg"
                                    }
                                    className="w-full h-[400px] object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${activeTab === "overview"
                                    ? "from-blue-900/60"
                                    : activeTab === "highlights"
                                        ? "from-indigo-900/60"
                                        : "from-purple-900/60"
                                    }`} />

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-md">
                                        {activeTab === "overview"
                                            ? "❄ Alpine Luxury"
                                            : activeTab === "highlights"
                                                ? "⛷ Winter Adventures"
                                                : "🔥 Fireside Dining"}
                                    </span>
                                </div>

                                {/* Stats */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                    >
                                        <div className="bg-white/10 p-4 rounded-x">
                                            <div className="text-2xl font-bold">8+</div>
                                            <div className="text-sm">Ski Resorts</div>
                                        </div>

                                        <div className="bg-white/10 p-4 rounded- ">
                                            <div className="text-2xl font-bold">100%</div>
                                            <div className="text-sm">Private Access</div>
                                        </div>

                                        <div className="bg-white/10 p-4 rounded- border ">
                                            <div className="text-2xl font-bold">24/7</div>
                                            <div className="text-sm">Concierge</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Caption */}
                            <motion.p
                                key={`caption-${activeTab}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-gray-500 mt-8 text-center"
                            >
                                {activeTab === "overview"
                                    ? "Private alpine chalet overlooking snow valleys"
                                    : activeTab === "highlights"
                                        ? "Heli-skiing across untouched terrain"
                                        : "Fireside gourmet dining after a day on the slopes"}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ================= SIGNATURE WINTER JOURNEY ================= */}
            <section className="bg-white py-20 px-4 md:py-8 md:px-6">

                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20 md:mb-28">
                        <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-4 md:mb-6">
                            Signature Journey
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-light leading-tight text-gray-900">
                            The Grand Winter Escape
                        </h2>

                        <p className="mt-4 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-lg text-gray-500 leading-relaxed">
                            A curated journey through the world’s most magical winter destinations,
                            where snowy landscapes, alpine luxury, and cozy retreats await.
                        </p>
                    </div>

                    {/* Story Sections */}
                    {[
                        {
                            city: "Zermatt",
                            subtitle: "Alpine Elegance",
                            text:
                                "Arrive beneath the Matterhorn and settle into a private chalet with ski-in access and panoramic alpine views.",
                            images: [
                                { src: "/chalet.jpg", caption: "Chalet Exterior with Matterhorn" },
                                { src: "/ski2.jpg", caption: "Ski-In Slopes" },
                                { src: "/lounge.jpg", caption: "Cozy Alpine Lounge" },
                            ],
                        },
                        {
                            city: "Lapland",
                            subtitle: "Arctic Wonder",
                            text:
                                "Experience husky safaris, Northern Lights from glass-roofed igloos, and the magical stillness of the Arctic wilderness.",
                            images: [
                                { src: "/northwinter.jpg", caption: "Northern Lights Viewing" },
                                { src: "/glass.jpg", caption: "Glass Igloo Stay" },
                                { src: "/husky.jpg", caption: "Husky Safari Adventure" },
                            ],
                        },
                        {
                            city: "St. Moritz",
                            subtitle: "A Glamorous Finale",
                            text:
                                "End your journey with frozen lake experiences, ice skating, and world-class alpine dining in a sophisticated winter resort.",
                            images: [
                                { src: "/belmond.jpeg", caption: "Luxury Winter Lodge" },
                                { src: "/ski.jpeg", caption: "Frozen Lake Activities" },
                                { src: "/rail.jpg", caption: "Gourmet Alpine Dining" },
                            ],
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32"
                        >
                            {i % 2 === 0 ? (
                                <>
                                    {/* Image Left */}
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src={item.images[0].src}
                                            className="w-full h-64 sm:h-80 md:h-[520px] object-cover hover:scale-105 transition duration-700"
                                        />
                                    </div>

                                    {/* Text Right */}
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

                                        {/* Gallery */}
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
                                    {/* Text Left */}
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

                                        {/* Gallery */}
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

                                    {/* Image Right */}
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

                    {/* Closing Statement */}
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-xl sm:text-2xl md:text-2xl font-light text-gray-800 leading-relaxed">
                            Every winter journey is fully tailored — private chalets, exclusive alpine experiences,
                            and magical snowy adventures crafted entirely for you.
                        </p>

                        <button className="mt-8 sm:mt-12 px-10 sm:px-12 py-4 sm:py-5 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition text-base sm:text-lg md:text-lg">
                            Design My Winter Journey
                        </button>
                    </div>

                </div>
            </section>


        </div>
    );
};

export default Winter;
