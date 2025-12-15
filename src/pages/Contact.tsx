import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Globe,
  CheckCircle,
  Shield,
  Headphones,
  Star,
  Award,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  MailCheck,
  Calendar
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    travelDate: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        travelDate: ""
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+1 (299) 888-3989", "+1 (299) 888-3990"],
      description: "24/7 dedicated concierge line",
      color: "from-cyan-500 to-teal-400"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["travel@elanci.com", "concierge@elanci.com"],
      description: "Response within 2 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Global Headquarters",
      details: ["Toronto, Canada", "New York | London | Dubai"],
      description: "Serving clients worldwide",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 9AM-8PM EST", "Sat-Sun: 10AM-6PM EST"],
      description: "Emergency support available 24/7",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const services = [
    "Luxury Itinerary Design",
    "Private Jet Charters",
    "Villa & Yacht Rentals",
    "Exclusive Event Access",
    "Wellness Retreats",
    "Adventure Expeditions",
    "Corporate Travel",
    "Family Vacations",
    "Honeymoon Planning",
    "Custom Request"
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2135&auto=format&fit=crop')",
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
              <Headphones className="w-5 h-5 text-cyan-300" />
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">
                Personal Concierge
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Begin Your <span className="bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Extraordinary</span> Journey
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Connect with our luxury travel experts to craft your perfect escape.
              Every inquiry receives personalized attention from our dedicated concierge team.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 max-w-2xl mx-auto"
            >
              <div className="bg-linear-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <MailCheck className="w-8 h-8 text-emerald-600" />
                  <div>
                    <h3 className="text-xl font-bold text-emerald-900 mb-1">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-emerald-700">
                      Our concierge team will contact you within 2 hours. Check your email for confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-linear-to-r from-cyan-50 to-teal-50 rounded-full">
                  <div className="h-1 w-8 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full" />
                  <span className="text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                    How to Reach Us
                  </span>
                  <div className="h-1 w-8 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Direct <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-teal-600">Access</span> to Excellence
                </h2>
                <p className="text-gray-600">
                  Our dedicated team is available through multiple channels to ensure seamless communication.
                </p>
              </motion.div>

              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-cyan-200 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-linear-to-r ${item.color} rounded-xl`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-700 font-medium">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-gray-500 mt-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 mt-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Why Choose Elanci</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "24/7 dedicated concierge",
                    "Average response time: 45 min",
                    "98% client satisfaction",
                    "15+ years of experience"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-8"
              >
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-linear-to-r from-cyan-50 to-teal-50 rounded-full">
                    <div className="h-1 w-8 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full" />
                    <span className="text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                      Personal Consultation
                    </span>
                    <div className="h-1 w-8 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Schedule Your <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-teal-600">Private</span> Consultation
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our luxury travel experts will create a personalized proposal for you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          Full Name *
                        </div>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          Email Address *
                        </div>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          Phone Number
                        </div>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          Travel Date
                        </div>
                      </label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        Service Interest *
                      </div>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-gray-400" />
                        Your Travel Vision *
                      </div>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your dream vacation, special requirements, and travel preferences..."
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${isSubmitting
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-linear-to-r from-cyan-600 to-teal-500 text-white hover:shadow-xl hover:shadow-cyan-500/25'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-sm text-gray-500">
                      By submitting, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 hover:text-cyan-600 hover:bg-linear-to-r hover:from-cyan-50 hover:to-teal-50 rounded-lg border border-gray-200 transition-all duration-300"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{social.label}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-linear-to-r from-cyan-50 to-teal-50 rounded-full">
              <div className="h-1 w-8 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                Luxury Guaranteed
              </span>
              <div className="h-1 w-8 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full" />
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-2xl shadow-gray-200/50 border border-gray-100">
              <Award className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Experience the Elanci Difference
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {[
                  {
                    icon: Star,
                    title: "Personalized Service",
                    description: "Every itinerary is custom-crafted by our expert team"
                  },
                  {
                    icon: Shield,
                    title: "Risk-Free Planning",
                    description: "Comprehensive insurance and 100% satisfaction guarantee"
                  },
                  {
                    icon: Headphones,
                    title: "24/7 Concierge",
                    description: "Dedicated support throughout your entire journey"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex p-4 bg-linear-to-r from-cyan-50 to-teal-50 rounded-2xl mb-4">
                        <Icon className="w-8 h-8 text-cyan-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-linear-to-r from-cyan-600 to-teal-500 text-white font-semibold text-lg rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Schedule Virtual Tour
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-gray-700 font-semibold text-lg rounded-xl border-2 border-gray-200 hover:border-cyan-300 hover:text-cyan-600 transition-all duration-300"
                >
                  Download Brochure
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;