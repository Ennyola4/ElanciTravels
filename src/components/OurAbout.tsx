import { Compass, Eye, Globe2, Plane, Sparkles, Target, Users, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop",
];

const OurAbout = () => {
    const [angle, setAngle] = useState(0);
    const dragging = useRef(false);
    const startX = useRef(0);
    const startAngle = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);
    // const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    // Animation variants with proper typing
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const scaleIn: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                type: "spring" as const,
                stiffness: 100
            }
        }
    };

    // Auto rotate
    useEffect(() => {
        const interval = setInterval(() => {
            if (!dragging.current) setAngle((prev) => prev + 0.3);
        }, 16);
        return () => clearInterval(interval);
    }, []);

    // Drag handlers
    const handleDragStart = (clientX: number) => {
        dragging.current = true;
        startX.current = clientX;
        startAngle.current = angle;
    };

    const handleDragMove = (clientX: number) => {
        if (dragging.current) {
            const deltaX = clientX - startX.current;
            setAngle(startAngle.current + deltaX * 0.5);
        }
    };

    const handleDragEnd = () => {
        dragging.current = false;
    };

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
        const onMouseUp = () => handleDragEnd();
        const onTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].clientX);
        const onTouchEnd = () => handleDragEnd();

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("touchend", onTouchEnd);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    // Stats data
    const stats = [
        { value: "10k+", label: "Happy Travelers", icon: Users },
        { value: "50+", label: "Countries Covered", icon: Globe2 },
        { value: "500+", label: "Tours Organized", icon: Compass },
        { value: "98%", label: "Satisfaction Rate", icon: Award }
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-cyan-50/50 to-transparent" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-linear-to-l from-teal-100/20 to-emerald-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-linear-to-r from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl" />

            {/* Hero Section */}
            <section className="relative py-24 bg-linear-to-br from-gray-900 via-[#0C2F37] to-cyan-900 overflow-hidden">
                {/* Animated particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.sin(i) * 20, 0]
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3
                        }}
                        className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                        style={{
                            left: `${10 + i * 10}%`,
                            top: `${20 + i * 5}%`
                        }}
                    />
                ))}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        {/* Text Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="w-full lg:w-1/2"
                        >
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <Sparkles className="w-4 h-4 text-cyan-300" />
                                <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                                    Our Story
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Welcome to <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Elanci Travels</span>
                            </h1>

                            <p className="text-gray-200 text-lg leading-relaxed mb-6">
                                At Elanci Travels, we craft unforgettable travel experiences across the world.
                                From serene beach escapes to thrilling safaris and heritage tours, we turn every journey into a story worth remembering.
                            </p>

                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Our expert guides ensure that every trip is immersive and unforgettable, allowing you to explore vibrant cultures, breathtaking
                                landscapes, and hidden gems while enjoying the highest level of comfort and personalized attention.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/35 transition-all duration-300"
                            >
                                <Eye className="w-5 h-5" />
                                <span>Explore Our Story</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-4 h-4"
                                >
                                    <Eye className="w-4 h-4" />
                                </motion.div>
                            </motion.button>
                        </motion.div>

                        {/* 3D Carousel Section - Hidden on mobile/tablet, visible on desktop */}
                        <motion.div
                            ref={containerRef}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                            className="hidden lg:flex relative w-full lg:w-1/2 h-[500px] items-center justify-center"
                            onMouseDown={(e) => handleDragStart(e.clientX)}
                            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                        >
                            {/* Glowing Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[320px] h-80 rounded-full border border-cyan-500/30"
                            />
                            <div className="absolute w-[300px] h-[300px] rounded-full shadow-[0_0_80px_20px_rgba(6,182,212,0.4)]" />

                            {/* Central Element */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute w-24 h-24 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-full backdrop-blur-sm border border-white/10"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Plane className="w-10 h-10 text-white" />
                                </div>
                            </motion.div>

                            {/* 3D Images */}
                            <div
                                className="absolute inset-0 flex items-center justify-center transition-transform duration-400"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: `rotateY(${angle}deg)`,
                                }}
                            >
                                {images.map((img, i) => {
                                    const rotateY = (360 / images.length) * i;
                                    return (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`Slide ${i}`}
                                            className="absolute w-30 h-46 object-cover rounded-2xl shadow-lg cursor-pointer transition-transform duration-500 hover:scale-110"
                                            style={{
                                                transform: `rotateY(${rotateY}deg) translateZ(200px)`,
                                            }}
                                        />
                                    );
                                })}
                            </div>

                            {/* Label */}
                            <div className="absolute bottom-0 left-0 right-0 text-center">
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                    <Plane className="w-5 h-5 text-white" />
                                    <span className="text-white/80 text-sm font-medium">Interactive 3D Gallery • Drag to rotate</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                                >
                                    <div className="inline-flex p-3 bg-linear-to-r from-cyan-500/20 to-teal-500/20 rounded-xl mb-4">
                                        <Icon className="w-6 h-6 text-cyan-300" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-300">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="relative py-24 bg-linear-to-b from-white to-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-20"
                    >
                        {/* Mission Section */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
                        >
                            {/* Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden group">
                                    <motion.img
                                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop"
                                        alt="Our Mission"
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/70 via-gray-900/30 to-transparent" />

                                    {/* Overlay Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                            className="space-y-4"
                                        >
                                            <div className="inline-flex items-center gap-3">
                                                <Target className="w-8 h-8 text-cyan-300" />
                                                <h3 className="text-2xl font-bold">Explore. Dream. Discover.</h3>
                                            </div>
                                            <p className="text-gray-200 text-lg">
                                                Creating journeys that inspire and transform lives
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Floating badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-linear-to-r from-cyan-500 to-teal-400 text-white text-sm font-semibold rounded-full shadow-lg">
                                            Our Mission
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="w-full lg:w-1/2 lg:pl-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-linear-to-r from-cyan-50 to-teal-50 rounded-xl">
                                            <Compass className="w-8 h-8 text-cyan-600" />
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                            Our Mission
                                        </h2>
                                    </div>

                                    <div className="relative pl-6">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-400 to-teal-400 rounded-full" />
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            At <span className="font-bold text-cyan-600">Elanci Travels</span>, our mission is to create unforgettable travel experiences
                                            that inspire and enrich the lives of our clients. We are dedicated to providing
                                            personalized service, expert guidance, and unique itineraries that showcase the
                                            beauty and diversity of the world.
                                        </p>
                                    </div>

                                    <div className="bg-linear-to-r from-cyan-50 to-teal-50 rounded-2xl p-6 border border-cyan-100">
                                        <p className="text-gray-700 italic leading-relaxed">
                                            Through sustainable and responsible tourism practices, we aim to foster meaningful connections between travelers and the
                                            destinations they explore, ensuring every journey leaves a positive impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision Section */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16"
                        >
                            {/* Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden group">
                                    <motion.img
                                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop"
                                        alt="Our Vision"
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/70 via-gray-900/30 to-transparent" />

                                    {/* Overlay Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                            className="space-y-4"
                                        >
                                            <div className="inline-flex items-center gap-3">
                                                <Globe2 className="w-8 h-8 text-cyan-300" />
                                                <h3 className="text-2xl font-bold">Connecting the World</h3>
                                            </div>
                                            <p className="text-gray-200 text-lg">
                                                Travel with purpose. Experience with passion.
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Floating badge */}
                                    <div className="absolute top-6 right-6">
                                        <span className="px-4 py-2 bg-linear-to-r from-teal-500 to-emerald-400 text-white text-sm font-semibold rounded-full shadow-lg">
                                            Our Vision
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="w-full lg:w-1/2 lg:pr-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-linear-to-r from-teal-50 to-emerald-50 rounded-xl">
                                            <Globe2 className="w-8 h-8 text-teal-600" />
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                            Our Vision
                                        </h2>
                                    </div>

                                    <div className="relative pr-6">
                                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-linear-to-b from-teal-400 to-emerald-400 rounded-full" />
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Our vision at <span className="font-bold text-teal-600">Elanci Travels</span> is to be a leading travel agency recognized for
                                            excellence in service, innovation, and sustainability. We aspire to inspire a
                                            global community of travelers who seek authentic and transformative experiences.
                                        </p>
                                    </div>

                                    <div className="bg-linear-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
                                        <p className="text-gray-700 italic leading-relaxed">
                                            By continuously evolving and embracing new technologies, we aim to set new
                                            standards in the travel industry while promoting cultural understanding and
                                            environmental stewardship across the globe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OurAbout;