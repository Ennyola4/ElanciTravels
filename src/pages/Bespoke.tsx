import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
    Star,
    Calendar,
    Zap,
    ChevronRight,
    
} from "lucide-react";

const Bespoke = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const testimonials = [
        {
            name: "The Rodriguez Family",
            trip: "Multigenerational European Tour",
            quote:
                "Elanci created a perfect balance of activities for our entire family, from grandparents to toddlers.",
            rating: 5,
            duration: "21 days",
        },
        {
            name: "James & Olivia",
            trip: "Santorini Dream Wedding",
            quote:
                "Every detail was perfection. From the private yacht ceremony to the island-hopping honeymoon.",
            rating: 5,
            duration: "14 days",
        },
        {
            name: "TechGlobal Executives",
            trip: "Swiss Alps Corporate Retreat",
            quote:
                "The most seamless corporate experience. Private chalets, helicopter transfers, bespoke team building.",
            rating: 5,
            duration: "7 days",
        },
    ];

    const exclusiveExperiences = [
        {
            title: "Private Louvre Tour",
            description:
                "Exclusive after-hours access to the world's most famous museum.",
            location: "Paris, France",
            capacity: "2-6 guests",
            duration: "3 hours",
            price: "€15,000+",
            image: "/ElanciLogo.jpg",
            slug: "private-louvre-tour",
        },
        {
            title: "Safari in Style",
            description:
                "Private game reserves with luxury tented camps and expert trackers.",
            location: "Serengeti, Tanzania",
            capacity: "Exclusive use",
            duration: "5-10 nights",
            price: "$50,000+",
            image: "/safari.jpg",
            slug: "safari-in-style",
        },
        {
            title: "Alpine Helicopter Dining",
            description:
                "Private helicopter to mountain peaks for gourmet dining with panoramic views.",
            location: "Swiss Alps",
            capacity: "2-8 guests",
            duration: "Evening",
            price: "€25,000+",
            image: "/ski.jpeg",
            slug: "alpine-helicopter-dining",
        },
        {
            title: "Yacht Exploration",
            description:
                "Crewed luxury yacht through hidden Mediterranean coves and islands.",
            location: "French Riviera",
            capacity: "Up to 12 guests",
            duration: "7-14 nights",
            price: "$120,000+",
            image: "/yatch.jpeg",
            slug: "yacht-exploration",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

            {/* Hero Section */}
            <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 bg-cover bg-center bg-fixed"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop')", }} />
                    <div className="absolute inset-0 bg-linear-to-b from-gray-900/90 via-gray-900/50 to-transparent" />
                </div>
                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-linear-to-r from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-linear-to-l from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center px-4 max-w-6xl">
                       
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="text-3xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tighter" >
                            Bespoke by <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Design</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10" >
                            Where every journey is a unique masterpiece, meticulously crafted around your deepest desires and wildest dreams.
                        </motion.p> </div>
                </div>
            </div>

            {/* ================= EXCLUSIVE EXPERIENCES ================= */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full">
                            <Zap className="w-5 h-5 text-amber-600" />
                            <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">
                                Signature Experiences
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Beyond{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                                Imagination
                            </span>
                        </h2>

                        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                            A glimpse into the extraordinary experiences we can create exclusively for you.
                        </p>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {exclusiveExperiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="relative rounded-3xl overflow-hidden group shadow-2xl"
                            >
                                {/* Background Image */}
                                <div
                                    className="h-[460px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${experience.image})` }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <div className="backdrop-blur-xs bg-white/10 border border-white/20 rounded-2xl p-6 text-white shadow-xl">

                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold">
                                                    {experience.title}
                                                </h3>

                                            </div>


                                        </div>

                                        <p className="text-sm text-white/90 mb-4">
                                            {experience.description}
                                        </p>

                                        <div className="flex justify-between text-sm mb-6">

                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                navigate(`/experiences/${experience.slug}`)
                                            }
                                            className="w-full py-3 bg-linear-to-r from-cyan-500 to-teal-400 text-black font-semibold rounded-xl shadow-lg hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            <span>Customize This Experience</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-full">
                            <Star className="w-5 h-5 text-cyan-600" />
                            <span className="text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                                Client Stories
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Dreams{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                                Realized
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                                    ))}
                                </div>

                                <p className="text-gray-600 text-lg italic mb-8">
                                    "{testimonial.quote}"
                                </p>

                                <div>
                                    <div className="font-bold text-gray-900">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-cyan-600 font-medium">
                                        {testimonial.trip}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                                        <Calendar className="w-4 h-4" />
                                        {testimonial.duration}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bespoke;
