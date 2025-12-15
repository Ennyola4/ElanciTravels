import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  Users,
  Globe,
  Heart,
  Shield,
  Star,
  Target,
  TrendingUp,
  Clock,
  MapPin,
  ChevronRight,
  CheckCircle,
  Zap,
  BookOpen,
  Camera
} from "lucide-react";
import { useEffect } from "react";

const TheBrand = () => {
  const fadeInUp = {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every journey is crafted with meticulous attention to detail and unwavering commitment to perfection.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "Building lasting relationships through transparency, honesty, and reliability in every interaction.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Leveraging worldwide connections and local insights to create authentic, immersive experiences.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Personal Connection",
      description: "Understanding individual desires to create deeply personal and meaningful travel experiences.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const team = [
    {
      name: "Alexander Sterling",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      expertise: ["Luxury Hospitality", "Global Networks", "Experience Design"]
    },
    {
      name: "Isabelle Moreau",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      expertise: ["Cultural Immersion", "Art Curation", "Wellness Integration"]
    },
    {
      name: "Marcus Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      expertise: ["Logistics Mastery", "Risk Management", "VIP Services"]
    },
    {
      name: "Sophia Rossi",
      role: "Client Relations Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1974&auto=format&fit=crop",
      expertise: ["Personal Concierge", "Crisis Resolution", "Luxury Retail"]
    }
  ];

  const awards = [
    { year: "2023", title: "World's Best Luxury Travel Company", organization: "Travel + Leisure" },
    { year: "2022", title: "Excellence in Sustainable Tourism", organization: "Global Travel Awards" },
    { year: "2021", title: "Most Innovative Travel Service", organization: "Luxury Lifestyle Awards" },
    { year: "2020", title: "Best Customer Service", organization: "Conde Nast Traveler" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[700px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-gray-900/90 via-gray-900/60 to-transparent" />
        </div>

        {/* Animated Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-l from-amber-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

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
                The Story Behind
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Elanci
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-2xl text-gray-200 mb-6 leading-relaxed">
                Where <span className="text-cyan-300 font-semibold">dreams</span> meet{" "}
                <span className="text-teal-300 font-semibold">destination</span>, and every journey becomes a{" "}
                <span className="text-amber-300 font-semibold">masterpiece</span>.
              </p>
              <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-teal-500 mx-auto rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
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
                Our Philosophy
              </span>
              <div className="h-1 w-8 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Beyond <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-teal-600">Travel</span>, Beyond{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">Expectation</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              At Elanci, we believe travel is not merely about destinations, but about transformation.
              Each journey is an opportunity to rediscover, reinvent, and reconnect with what matters most.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-cyan-200 transition-all duration-500">
                    <div className={`inline-flex p-4 bg-linear-to-r ${value.color} rounded-2xl mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-linear-to-br from-cyan-50 to-teal-50 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-cyan-600" />
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To redefine luxury travel by creating deeply personal, transformative experiences that exceed expectations and create lifelong memories.
              </p>
              <ul className="space-y-3">
                {[
                  "Craft journeys that inspire personal growth",
                  "Foster meaningful connections across cultures",
                  "Set new standards in sustainable luxury travel",
                  "Deliver unparalleled service at every touchpoint"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-cyan-400" />
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To be the world's most trusted curator of extraordinary experiences, where every journey becomes a chapter in life's greatest story.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2030", label: "Global Presence" },
                  { value: "100+", label: "Countries" },
                  { value: "10k+", label: "Elite Members" },
                  { value: "∞", label: "Possibilities" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

 

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-linear-to-r from-purple-50 to-violet-50 rounded-full">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700 uppercase tracking-widest">
                  The Minds Behind
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A team of passionate experts dedicated to redefining luxury travel through innovation, insight, and impeccable service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-cyan-600 font-medium mb-4">{member.role}</p>

                      <div className="space-y-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-amber-500 fill-current" />
                            <span className="text-sm text-gray-600">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards & Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-linear-to-r from-amber-50 to-yellow-50 rounded-full">
                <Award className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-700 uppercase tracking-widest">
                  Recognition
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Awards & Accolades</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-linear-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-amber-600 mb-1">{award.year}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h4>
                      <p className="text-gray-600">{award.organization}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-gray-900 to-gray-800">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 px-8 py-16 text-center">
                <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
                <h3 className="text-4xl font-bold text-white mb-6">
                  Become Part of Our Story
                </h3>
                <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join the discerning travelers who trust Elanci to transform their travel dreams into reality.
                  Your extraordinary journey begins here.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-linear-to-r from-cyan-500 to-teal-400 text-white font-semibold text-lg rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-3"
                  >
                    Begin Your Journey
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                  >
                    <Camera className="w-5 h-5" />
                    View Our Portfolio
                  </motion.button>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                  {[
                    { value: "15+", label: "Years Excellence", icon: Clock },
                    { value: "80+", label: "Destinations", icon: MapPin },
                    { value: "98%", label: "Satisfaction", icon: Star },
                    { value: "5k+", label: "Journeys Crafted", icon: TrendingUp }
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="flex items-center justify-center gap-2 text-gray-300">
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">{stat.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TheBrand;