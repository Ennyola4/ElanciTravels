import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    TreePine,
    Tent,
    Camera,
    Sun,
    Shield,
    Clock,

    Star,
    CornerUpLeft,
} from "lucide-react";
import { useEffect, useState } from "react";

const Wild = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [activeTab, setActiveTab] = useState("overview");


    /* ================= AMENITIES ================= */
    const amenities = [
        { icon: <Tent className="w-5 h-5" />, label: "Luxury Camps" },
        { icon: <Camera className="w-5 h-5" />, label: "Private Guides" },
        { icon: <Shield className="w-5 h-5" />, label: "Expert Rangers" },
        { icon: <Clock className="w-5 h-5" />, label: "24/7 Concierge" },
    ];

    /* ================= HERO ================= */
    return (
        <div className="min-h-screen bg-white">

            {/* ================= HERO ================= */}
            <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">

                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/safari.jpg')" }}
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 text-center px-6 max-w-5xl text-white">
                    <CornerUpLeft
                        onClick={() => {
                            navigate(-1)
                        }}
                        className="text-white cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-150 active:scale-95" />
                    <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm">
                        ✦ Wilderness Luxury Experiences
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mt-6">
                        Into The Wild
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">
                            Safari Collection
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
                        Discover untamed landscapes, extraordinary wildlife,
                        and refined comfort in Earth’s most breathtaking wild destinations.
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

            {/* ================= AMENITIES BAR ================= */}
            <div className="border-b">
                <div className="max-w-7xl mx-auto py-6 flex flex-wrap justify-center gap-10">
                    {amenities.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-600">
                            {item.icon}
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= OVERVIEW + TABS ================= */}
            <section className=" py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* ================= LEFT CONTENT ================= */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                                The Experience
                            </span>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Where Adventure Meets
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                                    {" "}Refined Luxury
                                </span>
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Step into Earth’s last great wildernesses where luxury,
                                conservation, and unforgettable encounters redefine
                                modern exploration.
                            </p>

                            {/* ================= TABS ================= */}
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
                                                layoutId="wildActiveTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* ================= TAB CONTENT ================= */}
                            <div className="min-h-[200px]">

                                {activeTab === "overview" && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                        <p className="text-gray-600">
                                            From sunrise game drives to candlelit bush dinners,
                                            every detail is curated for immersive luxury in
                                            nature’s most breathtaking landscapes.
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
                                            "Private wildlife safaris with expert trackers",
                                            "Luxury tented camps & eco lodges",
                                            "Helicopter and bush plane transfers",
                                            "Conservation-led immersive experiences",
                                            "Exclusive photographic expeditions",
                                        ].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="text-blue-600 mt-1">✦</span>
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
                                        {[
                                            {
                                                icon: <TreePine />,
                                                title: "Nature Immersion",
                                                desc: "Guided ecological journeys",
                                            },
                                            {
                                                icon: <Sun />,
                                                title: "Sunrise Expeditions",
                                                desc: "Golden-hour wildlife drives",
                                            },
                                            {
                                                icon: <Camera />,
                                                title: "Photo Safaris",
                                                desc: "Professional wildlife capture",
                                            },
                                            {
                                                icon: <Shield />,
                                                title: "Expert Rangers",
                                                desc: "Safety & conservation leadership",
                                            },
                                        ].map((item, i) => (
                                            <div key={i} className="p-4 bg-gray-50 rounded-xl">
                                                <div className="text-blue-600 mb-2">{item.icon}</div>
                                                <h4 className="font-semibold">{item.title}</h4>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
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
                                            ? "/safari.jpg"
                                            : activeTab === "highlights"
                                                ? "/wild2.jpg"
                                                : "/wild3.jpg"
                                    }
                                    className="w-full h-[400px] object-cover"
                                />

                                {/* Dynamic Overlay */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t ${activeTab === "overview"
                                        ? "from-black/60"
                                        : activeTab === "highlights"
                                            ? "from-green-900/60"
                                            : "from-amber-900/60"
                                        }`}
                                />

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white">
                                        {activeTab === "overview"
                                            ? "✧ Untamed Luxury"
                                            : activeTab === "highlights"
                                                ? "✦ Wildlife Encounters"
                                                : "★ Exclusive Services"}
                                    </span>
                                </div>

                                {/* Stats */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                    >
                                        <div className="bg-white/10  p-4 rounded-xl  shadow-lg">
                                            <div className="text-2xl font-bold">12+</div>
                                            <div className="text-sm text-gray-200">Reserves</div>
                                        </div>

                                        <div className="bg-white/10  p-4 rounded-xl  shadow-lg">
                                            <div className="text-2xl font-bold">Big 5</div>
                                            <div className="text-sm text-gray-200">Wildlife</div>
                                        </div>

                                        <div className="bg-white/10  p-4 rounded-xl  shadow-lg">
                                            <div className="text-2xl font-bold">24/7</div>
                                            <div className="text-sm text-gray-200">Concierge</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Caption */}
                            <motion.p
                                key={`wild-caption-${activeTab}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-gray-500 mt-8 text-center"
                            >
                                {activeTab === "overview"
                                    ? "Luxury safari lodges surrounded by untouched nature"
                                    : activeTab === "highlights"
                                        ? "Close encounters in protected wildlife reserves"
                                        : "Every detail curated for effortless exploration"}
                            </motion.p>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section className="bg-white py-20 px-4 md:py-24 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* ===== Heading ===== */}
                    <div className="text-center mb-20 md:mb-28">
                        <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-4">
                            Signature Expedition
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
                            The Ultimate Wild Experience
                        </h2>

                        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
                            Venture into Earth’s last great wildernesses — where raw nature,
                            conservation, and refined luxury exist in perfect harmony.
                        </p>
                    </div>

                    {/* ===== STORY SECTIONS ===== */}
                    {[
                        {
                            location: "Serengeti",
                            subtitle: "Into the Great Migration",
                            text:
                                "Witness millions of wildebeest crossing vast golden plains while staying in elegant mobile camps designed to move with nature’s rhythm.",
                            images: [
                                { src: "/safari.jpg", caption: "Sunrise Game Drive" },
                                { src: "/camp.jpg", caption: "Luxury Tented Camp" },
                                { src: "/wild4.jpg", caption: "The Great Migration" },
                            ],
                        },
                        {
                            location: "Okavango Delta",
                            subtitle: "Water & Wilderness",
                            text:
                                "Glide silently through the delta by mokoro canoe, tracking wildlife from water level before retreating to private lodges hidden among palm islands.",
                            images: [
                                { src: "/mokoro.jpg", caption: "Mokoro Safari" },
                                { src: "/safarilodge.jpg", caption: "Private Safari Lodge" },
                                { src: "/elephants.jpg", caption: "Elephants at Sunset" },
                            ],
                        },
                        {
                            location: "Namibia",
                            subtitle: "Desert Majesty",
                            text:
                                "Fly across endless dunes by helicopter, explore surreal desert landscapes, and sleep beneath star-filled skies in architectural eco-retreats.",
                            images: [
                                { src: "/dunes.jpg", caption: "Sossusvlei Dunes" },
                                { src: "/stargaze.jpg", caption: "Stargazing Experience" },
                                { src: "/chopper.jpg", caption: "Scenic Helicopter Flight" },
                            ],
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32"
                        >
                            {i % 2 === 0 ? (
                                <>
                                    {/* IMAGE LEFT */}
                                    <div className="overflow-hidden rounded-2xl">
                                        <img
                                            src={item.images[0].src}
                                            className="w-full h-64 sm:h-80 md:h-[520px] object-cover hover:scale-105 transition duration-700"
                                        />
                                    </div>

                                    {/* TEXT RIGHT */}
                                    <div className="flex flex-col justify-center mt-6 md:mt-0">
                                        <p className="text-sm tracking-[4px] text-gray-400 uppercase mb-4">
                                            {item.location}
                                        </p>

                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6">
                                            {item.subtitle}
                                        </h3>

                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {item.text}
                                        </p>

                                        {/* Gallery */}
                                        <div className="flex overflow-x-auto gap-4 pb-2 -mx-2">
                                            {item.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex-none w-56 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                                                >
                                                    <img
                                                        src={img.src}
                                                        className="w-full h-40 md:h-48 object-cover hover:scale-105 transition"
                                                    />
                                                    <p className="text-center text-gray-500 text-sm p-2">
                                                        {img.caption}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* TEXT LEFT */}
                                    <div className="flex flex-col justify-center order-last lg:order-first mt-6 md:mt-0">
                                        <p className="text-sm tracking-[4px] text-gray-400 uppercase mb-4">
                                            {item.location}
                                        </p>

                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6">
                                            {item.subtitle}
                                        </h3>

                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {item.text}
                                        </p>

                                        {/* Gallery */}
                                        <div className="flex overflow-x-auto gap-4 pb-2 -mx-2">
                                            {item.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex-none w-56 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                                                >
                                                    <img
                                                        src={img.src}
                                                        className="w-full h-40 md:h-48 object-cover hover:scale-105 transition"
                                                    />
                                                    <p className="text-center text-gray-500 text-sm p-2">
                                                        {img.caption}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* IMAGE RIGHT */}
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

                    {/* ===== Closing ===== */}
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed">
                            Every expedition is tailored — private guides, conservation access,
                            and exclusive wilderness moments crafted entirely around you.
                        </p>

                        <button className="mt-12 px-12 py-5 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition text-lg">
                            Design My Wild Journey
                        </button>
                    </div>

                </div>
            </section>
            {/* ================= TESTIMONIAL ================= */}
            <section className="py-24 text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-amber-500 fill-current" />
                        ))}
                    </div>

                    <p className="text-2xl italic text-gray-700">
                        “The most extraordinary journey we have ever taken —
                        raw nature combined with flawless luxury.”
                    </p>

                    <p className="mt-6 font-semibold">The Adeyemi Family</p>
                </div>
            </section>

        </div>
    );
};

export default Wild;
