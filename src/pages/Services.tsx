import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Globe,
    Plane,
    Shield,
    Users,
    Clock,
    Star,
    MapPin,
    Heart,
    Sparkles,
    ShieldCheck,
    CheckCircle,
    Award,
    Zap,
    Calendar,
    Briefcase,
    Compass,
    Headphones,
    Wallet,
    Lock,
    Home
} from "lucide-react";

const Services = () => {
    const [activeTab, setActiveTab] = useState("all");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    // Remove explicit variants and use inline animations instead
    const services = [
        {
            id: 1,
            title: "Luxury Itinerary Design",
            description: "Completely bespoke travel planning with exclusive access to private villas, yachts, and experiences unavailable to the public.",
            icon: Compass,
            category: "planning",
            price: "Starting at $5,000",
            time: "3-6 weeks planning",
            features: [
                "Personal travel concierge",
                "24/7 support",
                "VIP airport services",
                "Private transfers"
            ],
            highlight: true
        },
        {
            id: 2,
            title: "Private Jet & Yacht Charters",
            description: "Access to global private aviation and luxury yacht fleets with full crew, gourmet catering, and bespoke routing.",
            icon: Plane,
            category: "transport",
            price: "Custom quote",
            time: "48h confirmation",
            features: [
                "Global fleet access",
                "Custom catering",
                "In-flight concierge",
                "Flexible scheduling"
            ],
            highlight: true
        },
        {
            id: 3,
            title: "Exclusive Event Access",
            description: "Priority tickets to sold-out events, private concerts, fashion weeks, and cultural festivals worldwide.",
            icon: Calendar,
            category: "experiences",
            price: "From $2,500",
            time: "Advance booking required",
            features: [
                "Met Gala tickets",
                "Grand Prix VIP",
                "Cannes Film Festival",
                "Private gallery tours"
            ]
        },
        {
            id: 4,
            title: "Culinary Journeys",
            description: "Private chef experiences, Michelin star restaurant reservations, and exclusive culinary tours with world-renowned chefs.",
            icon: Star,
            category: "dining",
            price: "From $1,500",
            time: "Personalized scheduling",
            features: [
                "Private chef hire",
                "Michelin experiences",
                "Wine pairing tours",
                "Cooking masterclasses"
            ]
        },
        {
            id: 5,
            title: "Wellness Retreats",
            description: "Tailored wellness programs at world-class spas, meditation retreats, and holistic healing centers.",
            icon: Heart,
            category: "wellness",
            price: "From $3,000",
            time: "5-14 day programs",
            features: [
                "Medical spa access",
                "Yoga & meditation",
                "Nutrition planning",
                "Holistic therapies"
            ]
        },
        {
            id: 6,
            title: "Adventure Expeditions",
            description: "Curated adventure travel including private safaris, mountain expeditions, and underwater explorations.",
            icon: MapPin,
            category: "adventure",
            price: "Starting at $4,500",
            time: "Custom duration",
            features: [
                "Private safari lodges",
                "Arctic expeditions",
                "Scuba diving tours",
                "Helicopter adventures"
            ]
        },
        {
            id: 7,
            title: "Corporate Travel Management",
            description: "End-to-end corporate travel solutions for executives, including team retreats and incentive travel programs.",
            icon: Briefcase,
            category: "corporate",
            price: "Custom packages",
            time: "Ongoing management",
            features: [
                "Executive travel",
                "Team building retreats",
                "Incentive programs",
                "Event planning"
            ]
        },
        {
            id: 8,
            title: "Family & Multigenerational Travel",
            description: "Bespoke family vacations that cater to all ages, with activities, accommodations, and dining for everyone.",
            icon: Users,
            category: "family",
            price: "From $8,000",
            time: "Tailored to family needs",
            features: [
                "Kid-friendly activities",
                "Separate teen programs",
                "Elderly accommodations",
                "Family photography"
            ]
        },
        {
            id: 9,
            title: "Wedding & Honeymoon Planning",
            description: "Destination wedding coordination and romantic honeymoon planning in the world's most beautiful locations.",
            icon: Heart,
            category: "romance",
            price: "Starting at $10,000",
            time: "6-12 months planning",
            features: [
                "Venue sourcing",
                "Vendor coordination",
                "Legal assistance",
                "Honeymoon suites"
            ]
        },
        {
            id: 10,
            title: "Real Estate & Villa Rentals",
            description: "Access to exclusive private villas, chateaus, and luxury residences worldwide for short or long stays.",
            icon: Home,
            category: "accommodation",
            price: "From $15,000/week",
            time: "Flexible booking",
            features: [
                "Private islands",
                "Alpine chalets",
                "Beachfront villas",
                "Staffed properties"
            ]
        },
        {
            id: 11,
            title: "Security & Risk Management",
            description: "Comprehensive security services including executive protection, risk assessment, and emergency evacuation.",
            icon: ShieldCheck,
            category: "security",
            price: "Custom quote",
            time: "24/7 availability",
            features: [
                "Executive protection",
                "Risk assessment",
                "Medical evacuation",
                "Crisis management"
            ]
        },
        {
            id: 12,
            title: "Travel Insurance Premium",
            description: "Ultimate travel protection with medical evacuation, trip interruption, and high-value item coverage.",
            icon: Shield,
            category: "insurance",
            price: "From $500",
            time: "Immediate coverage",
            features: [
                "Medical evacuation",
                "Trip cancellation",
                "Luggage protection",
                "24/7 assistance"
            ]
        }
    ];

    const categories = [
        { id: "all", label: "All Services", icon: Globe },
        { id: "planning", label: "Planning", icon: Compass },
        { id: "transport", label: "Transport", icon: Plane },
        { id: "experiences", label: "Experiences", icon: Star },
        { id: "wellness", label: "Wellness", icon: Heart },
        { id: "corporate", label: "Corporate", icon: Briefcase }
    ];

    const testimonials = [
        {
            name: "Alexander Chen",
            role: "CEO, TechGlobal Inc.",
            text: "Elanci's private jet service transformed our corporate retreat. The attention to detail was extraordinary.",
            rating: 5
        },
        {
            name: "Sophia Rodriguez",
            role: "Lifestyle Influencer",
            text: "Their exclusive event access got me into fashion week shows I never thought possible. Truly elite service.",
            rating: 5
        },
        {
            name: "James & Olivia Wilson",
            role: "Honeymoon Travelers",
            text: "Our dream wedding in Santorini was flawlessly executed. Every detail was perfect beyond imagination.",
            rating: 5
        }
    ];

    const filteredServices = activeTab === "all"
        ? services
        : services.filter(service => service.category === activeTab);

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
                {/* Background with Parallax */}
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop')",
                        }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/50 to-transparent" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-64 h-64 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-linear-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />

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
                                Exclusive Services
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Beyond <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Extraordinary</span> Experiences
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10"
                        >
                            We don't just plan trips—we craft once-in-a-lifetime experiences with exclusive access,
                            unparalleled service, and attention to every detail.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
                        >
                            {[
                                { value: "98%", label: "Client Satisfaction" },
                                { value: "24/7", label: "Concierge Support" },
                                { value: "50+", label: "Countries Served" },
                                { value: "15+", label: "Years Experience" }
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

            {/* Services Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-linear-to-r from-cyan-50 to-teal-50 rounded-full">
                            <div className="h-1 w-8 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full" />
                            <span className="text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                                Our Expertise
                            </span>
                            <div className="h-1 w-8 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Curated <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-teal-600">Luxury</span> Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Each service is meticulously designed to provide unparalleled experiences,
                            exclusive access, and flawless execution for the most discerning travelers.
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <motion.button
                                    key={category.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === category.id
                                        ? "bg-linear-to-r from-cyan-600 to-teal-500 text-white shadow-xl shadow-cyan-500/25"
                                        : "bg-white text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50 hover:to-teal-50 border border-gray-200"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {category.label}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className={`group relative ${service.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
                                >
                                    <div className={`relative h-full bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-cyan-200 transition-all duration-500 ${service.highlight ? 'border-2 border-cyan-300' : ''}`}>
                                        {/* Highlight Badge */}
                                        {service.highlight && (
                                            <div className="absolute top-4 right-4 z-10">
                                                <div className="flex items-center gap-1 px-3 py-1.5 bg-linear-to-r from-cyan-500 to-teal-400 text-white text-xs font-semibold rounded-full">
                                                    <Zap className="w-3 h-3" />
                                                    <span>Most Popular</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Service Icon */}
                                        <div className="p-8 pb-0">
                                            <div className={`inline-flex p-4 rounded-2xl ${service.highlight
                                                ? 'bg-linear-to-r from-cyan-500/10 to-teal-500/10'
                                                : 'bg-linear-to-r from-gray-50 to-gray-100'
                                                }`}>
                                                <Icon className={`w-8 h-8 ${service.highlight ? 'text-cyan-600' : 'text-gray-700'}`} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 pt-6">
                                            <h3 className={`text-2xl font-bold mb-3 ${service.highlight ? 'text-gray-900' : 'text-gray-900'}`}>
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-3 mb-8">
                                                {service.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-3">
                                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                                        <span className="text-sm text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Price & Time */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div>
                                                    <div className="text-sm text-gray-500">Starting from</div>
                                                    <div className="text-xl font-bold text-gray-900">{service.price}</div>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="text-sm">{service.time}</span>
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                                className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${service.highlight
                                                    ? 'bg-linear-to-r from-cyan-600 to-teal-500 text-white hover:shadow-xl hover:shadow-cyan-500/25'
                                                    : 'bg-linear-to-r from-gray-50 to-gray-100 text-gray-800 hover:bg-linear-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-700 border border-gray-200'
                                                    }`}
                                            >
                                                Enquire Now
                                            </motion.button>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl ${service.highlight
                                            ? 'from-cyan-500/5 to-teal-500/5'
                                            : 'from-gray-900/5 to-gray-900/5'
                                            }`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-linear-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-linear-to-r from-cyan-50 to-teal-50 rounded-full">
                            <div className="h-1 w-8 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full" />
                            <span className="text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                                Client Stories
                            </span>
                            <div className="h-1 w-8 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Trusted by <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-teal-600">Elite</span> Travelers
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-600 text-lg italic mb-8 leading-relaxed">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-teal-400 rounded-full" />
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-4xl bg-linear-to-br from-gray-900 to-gray-800"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 px-8 py-16 text-center">
                            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
                            <h3 className="text-4xl font-bold text-white mb-6">
                                Ready to Experience True Luxury Travel?
                            </h3>
                            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                                Our dedicated concierge team is ready to craft your perfect journey.
                                Schedule a private consultation to discuss your travel aspirations.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold text-lg rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-3"
                                >
                                    <Headphones className="w-5 h-5" />
                                    Schedule Consultation
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                                >
                                    <Lock className="w-5 h-5" />
                                    View Our Portfolio
                                </motion.button>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-12 flex flex-wrap justify-center gap-8">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                    <span className="text-sm">Fully Insured & Licensed</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Wallet className="w-5 h-5 text-cyan-400" />
                                    <span className="text-sm">Price Match Guarantee</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-teal-400" />
                                    <span className="text-sm">100% Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;