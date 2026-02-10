import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, Plane, Globe2, Clock, Globe, MessageSquare, User, Calendar } from "lucide-react";

const OurContact = () => {
    const text = "Let's Get in Touch";
    const [key, setKey] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
        travelType: ""
    });

    // Re-trigger animation every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prev => prev + 1);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const travelTypes = [
        "Beach Vacation",
        "Cultural Tour",
        "Adventure Trip",
        "Luxury Retreat",
        "Family Holiday",
        "Business Travel",
        "Honeymoon",
        "Other"
    ];

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
            <section className="relative py-20 bg-linear-to-b from-white to-gray-50/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                      
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Send Us a <span className="bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">Message</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Fill out the form below and our travel experts will get back to you with customized options
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
                    >
                        <form onSubmit={handleSubmit} className="p-8 lg:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
                                        <User className="w-4 h-4" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
                                        <Mail className="w-4 h-4" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
                                        <Phone className="w-4 h-4" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
                                        <Calendar className="w-4 h-4" />
                                        Preferred Travel Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-gray-700 font-medium mb-3">
                                    Type of Travel Experience
                                </label>
                                <select
                                    name="travelType"
                                    value={formData.travelType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                >
                                    <option value="">Select a travel type</option>
                                    {travelTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-8">
                                <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
                                    <MessageSquare className="w-4 h-4" />
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    placeholder="Tell us about your dream vacation..."
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                                    required
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/35 transition-all duration-300"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-4 h-4"
                                >
                                    <Plane className="w-4 h-4 transform rotate-45" />
                                </motion.div>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>

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