import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, Plane, Globe2, Clock, Globe, MessageSquare } from "lucide-react";

const OurContact = () => {
    const text = "Let's Get in Touch";
    const [key, setKey] = useState(0);
   ;

    // Re-trigger animation every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prev => prev + 1);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

 
 
    return (
        <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-linear-to-br from-cyan-900 via-[#0C2F37] to-teal-900 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-linear-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />

                    {/* Animated circles */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.sin(i) * 20, 0]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.5
                            }}
                            className="absolute w-3 h-3 bg-cyan-400/30 rounded-full"
                            style={{
                                left: `${20 + i * 25}%`,
                                top: `${30 + i * 15}%`
                            }}
                        />
                    ))}
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <MessageSquare className="w-4 h-4 text-cyan-300" />
                                <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                                    Connect With Us
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-2xl lg:text-6xl font-bold text-white mb-6">
                                {text.split("").map((char, index) => (
                                    <motion.span
                                        key={`${key}-${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: index * 0.05,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="inline-block ml-4"
                                >
                                    ✈️
                                </motion.span>
                            </h1>

                            <p className="text-xl text-gray-200 leading-relaxed mb-8">
                                Planning your next adventure? We're here to make it unforgettable!
                                Reach out to our expert travel consultants for personalized assistance.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                {[
                                    { value: "24/7", label: "Support" },
                                    { value: "30min", label: "Response Time" },
                                    { value: "98%", label: "Satisfaction" },
                                    { value: "50+", label: "Experts" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                                        <div className="text-2xl font-bold text-cyan-300">{stat.value}</div>
                                        <div className="text-sm text-gray-300">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Icons */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                {[
                                    { icon: Plane, label: "Flight Booking" },
                                    { icon: Globe2, label: "Global Tours" },
                                    { icon: Clock, label: "24/7 Support" },
                                    { icon: Globe, label: "50+ Countries" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                                    >
                                        <item.icon className="w-4 h-4 text-cyan-300" />
                                        <span className="text-sm text-gray-200">{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <motion.img
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop"
                                    alt="Travel Consultation"
                                    className="relative w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "mirror"
                                    }}
                                />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-6 -right-6 w-32 h-32 border-2 border-cyan-500/30 rounded-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Multiple Ways to <span className="bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">Connect</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Choose your preferred method to get in touch with our travel experts
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Mail,
                                title: "Email Us",
                                description: "Get detailed responses within hours",
                                contact: "support@elancitravels.com",
                                bg: "from-cyan-50 to-teal-50",
                                color: "text-cyan-600",
                                buttonText: "Send Email"
                            },
                            {
                                icon: Phone,
                                title: "Call Us",
                                description: "Speak directly with our consultants",
                                contact: "+1 (416) 555-9876",
                                bg: "from-teal-50 to-emerald-50",
                                color: "text-teal-600",
                                buttonText: "Call Now"
                            },
                            {
                                icon: MapPin,
                                title: "Visit Us",
                                description: "Schedule an in-person consultation",
                                contact: "120 King Street West, Toronto",
                                bg: "from-emerald-50 to-cyan-50",
                                color: "text-emerald-600",
                                buttonText: "Get Directions"
                            }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="group"
                                >
                                    <div className={`h-full p-8 bg-linear-to-br ${item.bg} rounded-3xl border border-gray-200 shadow-lg shadow-gray-200/50`}>
                                        <div className="mb-6">
                                            <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-4">
                                                <Icon className={`w-8 h-8 ${item.color}`} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 mb-4">{item.description}</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="text-lg font-semibold text-gray-900">{item.contact}</div>
                                            <motion.button
                                                whileHover={{ scale: 1.05, x: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-full shadow-lg"
                                            >
                                                <span>{item.buttonText}</span>
                                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
         

            {/* Map Section */}
            <section className="relative h-[500px]">
                <iframe
                    title="Elanci Travels Canada Office"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3338239880956!2d-79.38429358450587!3d43.648691079121985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d4b02b4e2d%3A0xf9f6f3cddf64f11a!2s120%20King%20St%20W%2C%20Toronto%2C%20ON%20M5H%201A9%2C%20Canada!5e0!3m2!1sen!2sca!4v1709762041935!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    className="border-0"
                />

                {/* Overlay Card */}
                <div className="absolute bottom-8 left-8 right-8 lg:right-auto lg:w-96">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-lg">
                                <MapPin className="w-6 h-6 text-cyan-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Our Canada Office</h3>
                                <p className="text-sm text-gray-600">Visit us for personalized consultation</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="text-gray-700">📍 120 King Street West, Toronto</div>
                            <div className="text-gray-700">🕒 Mon–Fri: 9am – 6pm</div>
                            <div className="text-gray-700">📅 Sat: 10am – 4pm</div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg"
                        >
                            Get Directions
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OurContact;