import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Star,
    MapPin,
    Calendar,
    Users,
    Heart,
    Shield,
    CheckCircle,
    Zap,
    ChevronRight,
    Globe,
    Award,
    Headphones,
    Wallet,
    Lock,
    Moon,
    Sun,
    Camera,
    ChefHat,
    Wine,
    Music,
    Palette,
    BookOpen,
    Target,
    Compass
} from 'lucide-react';

const Bespoke = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedInterest, setSelectedInterest] = useState<string[]>([]);


    const processSteps = [
        {
            step: 1,
            title: "Discovery Call",
            description: "Share your travel dreams, preferences, and aspirations with our expert concierge.",
            icon: Headphones,
            duration: "60 min",
            color: "from-cyan-500 to-teal-400"
        },
        {
            step: 2,
            title: "Vision Mapping",
            description: "We analyze your desires to create a personalized travel blueprint.",
            icon: Compass,
            duration: "3-5 days",
            color: "from-purple-500 to-pink-500"
        },
        {
            step: 3,
            title: "Curated Proposal",
            description: "Receive a bespoke itinerary with exclusive experiences and accommodations.",
            icon: BookOpen,
            duration: "7-10 days",
            color: "from-amber-500 to-orange-500"
        },
        {
            step: 4,
            title: "Final Refinement",
            description: "We fine-tune every detail until it perfectly matches your vision.",
            icon: Target,
            duration: "2-3 days",
            color: "from-emerald-500 to-green-500"
        },
        {
            step: 5,
            title: "Journey Execution",
            description: "Your dedicated concierge manages everything from start to finish.",
            icon: Sparkles,
            duration: "Ongoing",
            color: "from-violet-500 to-blue-500"
        }
    ];

    const interests = [
        { icon: Wine, label: "Wine & Dining", category: "culinary" },
        { icon: ChefHat, label: "Michelin Experiences", category: "culinary" },
        { icon: Camera, label: "Photography Tours", category: "culture" },
        { icon: Palette, label: "Art & Architecture", category: "culture" },
        { icon: Music, label: "Music & Festivals", category: "entertainment" },
        { icon: Moon, label: "Wellness & Spa", category: "wellness" },
        { icon: Sun, label: "Adventure Sports", category: "adventure" },
        { icon: Globe, label: "Cultural Immersion", category: "culture" },
        { icon: Star, label: "Luxury Shopping", category: "luxury" },
        { icon: Users, label: "Family Activities", category: "family" },
        { icon: Heart, label: "Romantic Getaways", category: "romance" },
        { icon: Shield, label: "Private Security", category: "safety" }
    ];

    const testimonials = [
        {
            name: "The Rodriguez Family",
            trip: "Multigenerational European Tour",
            quote: "Elanci created a perfect balance of activities for our entire family, from grandparents to toddlers.",
            rating: 5,
            duration: "21 days"
        },
        {
            name: "James & Olivia",
            trip: "Santorini Dream Wedding",
            quote: "Every detail was perfection. From the private yacht ceremony to the island-hopping honeymoon.",
            rating: 5,
            duration: "14 days"
        },
        {
            name: "TechGlobal Executives",
            trip: "Swiss Alps Corporate Retreat",
            quote: "The most seamless corporate experience. Private chalets, helicopter transfers, bespoke team building.",
            rating: 5,
            duration: "7 days"
        }
    ];

    const exclusiveExperiences = [
        {
            title: "Private Louvre Tour",
            description: "Exclusive after-hours access to the world's most famous museum.",
            location: "Paris, France",
            capacity: "2-6 guests",
            duration: "3 hours",
            price: "€15,000+"
        },
        {
            title: "Safari in Style",
            description: "Private game reserves with luxury tented camps and expert trackers.",
            location: "Serengeti, Tanzania",
            capacity: "Exclusive use",
            duration: "5-10 nights",
            price: "$50,000+"
        },
        {
            title: "Alpine Helicopter Dining",
            description: "Private helicopter to mountain peaks for gourmet dining with panoramic views.",
            location: "Swiss Alps",
            capacity: "2-8 guests",
            duration: "Evening",
            price: "€25,000+"
        },
        {
            title: "Yacht Exploration",
            description: "Crewed luxury yacht through hidden Mediterranean coves and islands.",
            location: "French Riviera",
            capacity: "Up to 12 guests",
            duration: "7-14 nights",
            price: "$120,000+"
        }
    ];

    const toggleInterest = (interest: string) => {
        if (selectedInterest.includes(interest)) {
            setSelectedInterest(selectedInterest.filter(i => i !== interest));
        } else {
            setSelectedInterest([...selectedInterest, interest]);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative h-[85vh] min-h-[700px] overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 bg-cover bg-center bg-fixed"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop')",
                        }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-gray-900/90 via-gray-900/50 to-transparent" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-linear-to-r from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-linear-to-l from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center px-4 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                        >
                            <Sparkles className="w-5 h-5 text-cyan-300" />
                            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">
                                Ultimate Personalization
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tighter"
                        >
                            Bespoke by <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Design</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10"
                        >
                            Where every journey is a unique masterpiece, meticulously crafted around your deepest desires and wildest dreams.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
                        >
                            {[
                                { value: "100%", label: "Custom Itineraries" },
                                { value: "24/7", label: "Dedicated Concierge" },
                                { value: "0", label: "Cookie-Cutter Trips" },
                                { value: "∞", label: "Possibilities" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-300 tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* The Process Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-linear-to-r from-cyan-50 to-teal-50 rounded-full">
                            <div className="h-1 w-8 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full" />
                            <span className="text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                                Our Exclusive Process
                            </span>
                            <div className="h-1 w-8 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Crafting Your <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-teal-600">Perfect</span> Journey
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                            A meticulous, collaborative process designed to transform your travel aspirations into reality.
                        </p>
                    </motion.div>

                    {/* Process Steps */}
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-linear-to-r from-cyan-500 via-teal-500 to-amber-500 -translate-y-1/2" />

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {processSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        onClick={() => setActiveStep(step.step - 1)}
                                        className="relative"
                                    >
                                        <div className={`relative group cursor-pointer ${activeStep === step.step - 1 ? 'scale-105' : ''}`}>
                                            {/* Step Number */}
                                            <div className="absolute -top-4 -left-4 z-10">
                                                <div className={`w-12 h-12 rounded-full bg-linear-to-r ${step.color} text-white flex items-center justify-center text-lg font-bold shadow-lg`}>
                                                    {step.step}
                                                </div>
                                            </div>

                                            {/* Card */}
                                            <div className={`bg-white rounded-3xl p-6 pt-10 shadow-xl border-2 transition-all duration-300 ${activeStep === step.step - 1 ? 'border-cyan-300 shadow-2xl shadow-cyan-500/25' : 'border-gray-100 shadow-gray-200/50'}`}>
                                                <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${step.color} mb-4`}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>

                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-4">
                                                    {step.description}
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium text-gray-500">
                                                        {step.duration}
                                                    </span>
                                                    {activeStep === step.step - 1 && (
                                                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Active Step Details */}
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-12"
                    >
                        <div className="bg-linear-to-r from-cyan-50 to-teal-50 rounded-3xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl bg-linear-to-r ${processSteps[activeStep].color}`}>
                                    {React.createElement(processSteps[activeStep].icon, { className: "w-6 h-6 text-white" })}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
                                        Step {processSteps[activeStep].step}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {processSteps[activeStep].title}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                {processSteps[activeStep].description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    "Personal consultation with lead travel designer",
                                    "Detailed questionnaire about preferences and expectations",
                                    "Initial destination and experience recommendations",
                                    "Preliminary timeline and budget discussion",
                                    "Introduction to your dedicated concierge team"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interest Selector */}
            <section className="py-20 bg-linear-to-b from-white to-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-linear-to-r from-purple-50 to-pink-50 rounded-full">
                            <Heart className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-semibold text-purple-700 uppercase tracking-widest">
                                Your Interests
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            What <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">Inspires</span> You?
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Select your passions to help us craft experiences that truly resonate with you.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
                        {interests.map((interest, index) => {
                            const Icon = interest.icon;
                            const isSelected = selectedInterest.includes(interest.label);
                            return (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => toggleInterest(interest.label)}
                                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                        ? 'bg-linear-to-r from-purple-50 to-pink-50 border-purple-300 shadow-lg shadow-purple-500/25'
                                        : 'bg-white border-gray-200 hover:border-purple-200'
                                        }`}
                                >
                                    <div className={`p-3 rounded-xl mb-3 ${isSelected
                                        ? 'bg-linear-to-r from-purple-500 to-pink-500'
                                        : 'bg-gray-100'
                                        }`}>
                                        <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                                    </div>
                                    <span className={`text-sm font-medium ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {interest.label}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>

                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                        >
                            Continue with {selectedInterest.length} interests selected
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Exclusive Experiences */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-linear-to-r from-amber-50 to-orange-50 rounded-full">
                            <Zap className="w-5 h-5 text-amber-600" />
                            <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">
                                Signature Experiences
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Beyond <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">Imagination</span>
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                            A glimpse into the extraordinary experiences we can create exclusively for you.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {exclusiveExperiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
                                    <div className="p-8">
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                    {experience.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="text-sm">{experience.location}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-amber-600">{experience.price}</div>
                                                <div className="text-sm text-gray-500">Starting from</div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {experience.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                                                <Users className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                                                <div className="text-sm text-gray-500">Capacity</div>
                                                <div className="font-semibold text-gray-900">{experience.capacity}</div>
                                            </div>
                                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                                                <Calendar className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                                                <div className="text-sm text-gray-500">Duration</div>
                                                <div className="font-semibold text-gray-900">{experience.duration}</div>
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="w-full py-3 bg-linear-to-r from-amber-50 to-orange-50 text-amber-700 font-semibold rounded-xl border border-amber-200 hover:border-amber-300 transition-all duration-300 flex items-center justify-center gap-2"
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

            {/* Testimonials */}
            <section className="py-20 bg-linear-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-linear-to-r from-cyan-50 to-teal-50 rounded-full">
                            <Star className="w-5 h-5 text-cyan-600" />
                            <span className="text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                                Client Stories
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Dreams <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-teal-600">Realized</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-600 text-lg italic mb-8 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author & Details */}
                                <div className="space-y-4">
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                                        <div className="text-cyan-600 font-medium">{testimonial.trip}</div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{testimonial.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                                            <span>Completed</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-4xl bg-linear-to-br from-gray-900 to-gray-800"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 px-8 py-16 text-center">
                            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
                            <h3 className="text-4xl font-bold text-white mb-6">
                                Ready to Begin Your Bespoke Journey?
                            </h3>
                            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                                Your dream vacation deserves more than a template. Let's create something extraordinary together.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold text-lg rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-3"
                                >
                                    <Headphones className="w-5 h-5" />
                                    Schedule Discovery Call
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                                >
                                    <Lock className="w-5 h-5" />
                                    View Sample Itineraries
                                </motion.button>
                            </div>

                            {/* Guarantee */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                                <div className="text-center">
                                    <div className="inline-flex p-3 bg-white/10 rounded-xl mb-4">
                                        <Shield className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="text-white font-semibold mb-2">Fully Customized</div>
                                    <div className="text-gray-400 text-sm">No template journeys</div>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex p-3 bg-white/10 rounded-xl mb-4">
                                        <Wallet className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="text-white font-semibold mb-2">Transparent Pricing</div>
                                    <div className="text-gray-400 text-sm">No hidden fees</div>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex p-3 bg-white/10 rounded-xl mb-4">
                                        <CheckCircle className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="text-white font-semibold mb-2">100% Satisfaction</div>
                                    <div className="text-gray-400 text-sm">Or your money back</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Bespoke;