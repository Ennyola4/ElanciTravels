import { motion } from "framer-motion";
import { destinationList, destinations } from "../utils/Index";
import { useEffect } from "react";
import { Globe, Plane } from "lucide-react";

const Destination = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <div>
            <div className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden text-white">
                {/* Animated Background */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
                    }}
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

                {/* Foreground content */}
                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-2xl md:text-5xl mt-10 font-bold mb-6 font-lora"
                    >
                        Explore Breathtaking Destinations ✈️
                    </motion.h1>

                    {/* Animated Destination Tags */}
                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        {destinations.map((place, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                className="px-4 py-1 border border-white/40 rounded-full text-sm md:text-lg font-medium backdrop-blur-sm"
                            >
                                <Globe className="inline w-4 h-4 items-center mr-2" />
                                {place}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-linear-to-b from-[#E8F0F2] to-white py-20">
                

                
                <div className="bg-linear-to-b from-[#E8F0F2] to-white py-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-12"
                    >
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                            className="text-4xl md:text-5xl font-bold text-[#0C2F37]"
                        >
                            DESTINATIONS ✈️
                        </motion.h1>
                        <p className="text-lg text-gray-600 mt-3">
                            From tropical paradises to cultural landmarks, discover the world's most incredible places
                        </p>
                    </motion.div>

                    {/* Destination Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
                        {destinationList.map((destination, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                whileHover={{ scale: 1.03 }}
                                className="rounded-xl overflow-hidden shadow-lg bg-white"
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
                                            <img src={destination.flag} alt="" className="w-6 h-4 rounded-sm" />
                                            <h2 className="text-2xl font-semibold">{destination.title}</h2>
                                        </div>
                                        <span className="mt-2 inline-block text-xs uppercase bg-yellow-500 text-[#0C2F37] px-3 py-1 rounded-full font-semibold">
                                            {destination.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Description and Highlights below image */}
                                <div className="p-5 text-[#0C2F37]">
                                    <p className="text-sm text-gray-700 mb-3">{destination.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-3">
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
                </div>
            </div>
        </div>
    );
};

export default Destination;
