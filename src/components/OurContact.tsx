import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
    Mail,
    Phone,
    MapPin,
    Send,
    Plane,
    Globe2,
    Clock,
    Globe
} from "lucide-react";
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
const OurContact = () => {

    const text = "Let’s Get in Touch ✈️";
    const [key, setKey] = useState(0);

    // Re-trigger animation every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prev => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // delay between letters
            },
        },
    }

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        <div className="bg-[#0C2F37] overflow-hidden">
            {/* ===== Hero Section ===== */}
            <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-10 py-20 gap-10">
                {/* Left Text */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <motion.h1
                        key={key} // re-triggers animation every 5 seconds
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl md:text-5xl font-bold text-white mb-4 "
                    >
                        {letters.map((char, index) => (
                            <motion.span key={index} variants={child}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                        Planning your next adventure? We’d love to help make it unforgettable!
                        Reach out to our friendly team for inquiries, bookings, or partnership opportunities.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="p-3 bg-green-100/80 rounded-full"
                        >
                            <Plane className="text-green-900 w-6 h-6" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="p-3 bg-green-100/80 rounded-full"
                        >
                            <Globe2 className="text-green-900 w-6 h-6" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="p-3 bg-green-100/80 rounded-full"
                        >
                            <Clock className="text-green-900 w-6 h-6" />
                        </motion.div>
                         <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="p-3 bg-green-100/80 rounded-full"
                        >
                            <Globe className="text-green-900 w-6 h-6" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Animated Image */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative md:w-1/2 flex justify-center"

                >
                    <motion.img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
                        alt="Travel World"
                        className="rounded-3xl shadow-2xl w-full md:w-4/5 object-cover"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    />
                    <div className="absolute -bottom-10 -left-10 bg-blue-200/30 w-40 h-40 rounded-full blur-3xl"></div>
                    <div className="absolute top-10 -right-10 bg-pink-200/30 w-40 h-40 rounded-full blur-3xl"></div>
                </motion.div>
            </section>

            {/* ===== Contact Info Cards ===== */}
            <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Mail className="w-7 h-7 text-blue-600" />,
                        title: "Email Us",
                        text: "support@elancitravels.com",
                    },
                    {
                        icon: <Phone className="w-7 h-7 text-green-600" />,
                        title: "Call Us",
                        text: "+1 (416) 555-9876",
                    },
                    {
                        icon: <MapPin className="w-7 h-7 text-pink-600" />,
                        title: "Visit Us",
                        text: "120 King Street West, Toronto, Canada",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="bg-white shadow-sm rounded-md p-8 flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="font-semibold text-lg text-[#0C2F37] mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.text}</p>
                    </motion.div>
                ))}
            </section>

            {/* ===== Contact Form ===== */}
            <section className="max-w-5xl mx-auto bg-white shadow-sm mt-16 mb-20 p-10">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-[#0C2F37] text-center mb-8"
                >
                    Send Us a Message
                </motion.h2>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-gray-700 mb-2">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Write your message..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        ></textarea>
                    </div>

                    <div className="sm:col-span-2 text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#0C2F37] cursor-pointer text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 mx-auto hover:bg-blue-900 transition"
                        >
                            <Send className="w-5 h-5" /> Send Message
                        </motion.button>
                    </div>
                </form>
            </section>

            {/* ===== Google Map (Canada) ===== */}
            <section className="relative h-[450px] mt-10">
                <iframe
                    title="Elanci Travels Canada Office"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3338239880956!2d-79.38429358450587!3d43.648691079121985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d4b02b4e2d%3A0xf9f6f3cddf64f11a!2s120%20King%20St%20W%2C%20Toronto%2C%20ON%20M5H%201A9%2C%20Canada!5e0!3m2!1sen!2sca!4v1709762041935!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    className="border-0 absolute inset-0 w-full h-full rounded-none"
                ></iframe>

                {/* Glassy Overlay */}
                <div className="absolute inset-0 bg-[#0C2F37]/20 backdrop-blur-xs flex items-center justify-center">
                    <div className="bg-white/80 rounded-2xl px-10 py-6 shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-[#0C2F37] mb-2">Our Canada Office</h3>
                        <p className="text-gray-600 mb-2">120 King Street West, Toronto</p>
                        <p className="text-gray-600">Open: Mon–Fri, 9am – 5pm</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurContact;
