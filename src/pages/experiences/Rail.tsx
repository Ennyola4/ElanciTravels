import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Sparkles,
  Mountain,
  Utensils,
  Clock,
  Wifi,
  Coffee,
  Shield,
  X,
  
  
  CornerUpLeft
} from "lucide-react";
import { useEffect, useState } from "react";

const Rail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate()

  const gallery = [
    {
      image: "/rail.jpg",
      title: "Panoramic Alpine Views",
      description:
        "Floor-to-ceiling windows reveal breathtaking alpine landscapes as your train glides effortlessly through Switzerland.",
      category: "Scenery"
    },
    {
      image: "/rail.jpg",
      title: "Private Sleeper Suites",
      description:
        "Elegant cabins designed for comfort, privacy, and uninterrupted relaxation throughout your journey.",
      category: "Accommodation"
    },
    {
      image: "/rail.jpg",
      title: "Fine Dining Onboard",
      description:
        "Michelin-inspired cuisine served with curated wines while the scenery transforms outside your window.",
      category: "Dining"
    },
    {
      image: "/rail.jpg",
      title: "Arrival in Iconic Cities",
      description:
        "Step directly into Europe's most legendary destinations with seamless luxury transfers.",
      category: "Destinations"
    },
  ];

  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, label: "High-Speed WiFi" },
    { icon: <Coffee className="w-5 h-5" />, label: "Gourmet Dining" },
    { icon: <Shield className="w-5 h-5" />, label: "Private Security" },
    { icon: <Clock className="w-5 h-5" />, label: "24/7 Concierge" },
  ];

  const journeyHighlights = [
    {
      title: "Luxury Accommodations",
      description: "Spacious private suites with en-suite bathrooms and premium amenities",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Culinary Excellence",
      description: "Multi-course meals prepared by award-winning chefs",
      icon: <Utensils className="w-6 h-6" />
    },
    {
      title: "Scenic Routes",
      description: "Carefully curated paths through Europe's most beautiful landscapes",
      icon: <Mountain className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ================= MODERN HERO WITH PARALLAX ================= */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/rail.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                delay: i * 1,
                repeat: Infinity
              }}
              className="absolute w-64 h-64 bg-white/5 rounded-full blur-3xl"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
            />
          ))}
        </div>
       

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <CornerUpLeft
             onClick={()=>{
              navigate(-1)
             }}
              className="text-white cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-150 active:scale-95"/>
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-6 border border-white/20">
              ✦ Luxury Rail Travel Redefined
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Grand Continental
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Rail Journey
            </span>
          </motion.h1>
          

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto mb-8"
          >
            A timeless voyage through breathtaking landscapes, where elegance,
            comfort, and discovery travel hand in hand.
          </motion.p>

        
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      {/* ================= AMENITIES BAR ================= */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-8">
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-gray-600"
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MODERN OVERVIEW WITH TABS ================= */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                The Experience
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Where the Journey Becomes
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"> the Destination</span>
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Experience slow luxury at its finest. Our bespoke rail journeys
                transport you through Europe's most iconic cities and hidden
                landscapes in unmatched comfort.
              </p>

              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-gray-200">
                {["overview", "highlights", "services"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 capitalize font-medium transition relative ${activeTab === tab
                      ? "text-cyan-600"
                      : "text-gray-500 hover:text-gray-700"
                      }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="min-h-[200px]">
                {activeTab === "overview" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-600">
                      Private cabins, curated dining, and seamless concierge service
                      redefine what it means to travel in style. Each journey is
                      meticulously crafted to exceed expectations.
                    </p>
                  </motion.div>
                )}

                {activeTab === "highlights" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <ul className="space-y-3">
                      {[
                        "Private luxury sleeper cabins with en-suite bathrooms",
                        "Michelin-inspired onboard dining with wine pairings",
                        "Scenic alpine and countryside routes",
                        "VIP station transfers and luggage handling",
                        "Dedicated 24/7 travel concierge"
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-cyan-600 mt-1">✦</span>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === "services" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {journeyHighlights.map((item, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-xl">
                        <div className="text-cyan-600 mb-2">{item.icon}</div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              key={activeTab} // Add key to trigger animation on tab change
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={
                    activeTab === "overview"
                      ? "/rail.jpg"
                      : activeTab === "highlights"
                        ? "/sea.jpeg"
                        : "/ski.jpeg"
                  }
                  alt={
                    activeTab === "overview"
                      ? "Luxury train interior with private cabins"
                      : activeTab === "highlights"
                        ? "Scenic mountain views from train windows"
                        : "Elegant dining experience onboard"
                  }
                  className="w-full h-[400px] object-cover"
                />

                {/* Gradient overlay that changes with tab */}
                <div className={`absolute inset-0 bg-gradient-to-t ${activeTab === "overview"
                  ? "from-black/60 via-transparent to-transparent"
                  : activeTab === "highlights"
                    ? "from-cyan-900/60 via-transparent to-transparent"
                    : "from-amber-900/60 via-transparent to-transparent"
                  }`} />

                {/* Dynamic badge based on active tab */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${activeTab === "overview"
                    ? "bg-blue-500/20 text-blue-200 border border-blue-400/30"
                    : activeTab === "highlights"
                      ? "bg-cyan-500/20 text-cyan-200 border border-cyan-400/30"
                      : "bg-amber-500/20 text-amber-200 border border-amber-400/30"
                    } backdrop-blur-md`}>
                    {activeTab === "overview" ? "✧ Premium Comfort" :
                      activeTab === "highlights" ? "✦ Scenic Excellence" :
                        "★ Culinary Arts"}
                  </span>
                </div>

                {/* Stats overlay with dynamic content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {activeTab === "overview" && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                      <div className="bg-white/10 border border-white/20 p-6 text-white shadow-xl  rounded-2xl">
                        <div className="text-2xl font-bold">15+</div>
                        <div className="text-sm text-gray-200">Destinations</div>
                      </div>
                      <div className="bg-white/10 border border-white/20 p-6 text-white shadow-xl  rounded-2xl">
                        <div className="text-2xl font-bold">10</div>
                        <div className="text-sm text-gray-200">Luxury Trains</div>
                      </div>
                      <div className="bg-white/10 border border-white/20 p-6 text-white shadow-xl rounded-2xl">
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm text-gray-200">Concierge</div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "highlights" && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                      <div className="bg-white/10 border border-white/20 p-6 text-white shadow-xl rounded-2xl">
                        <div className="text-2xl font-bold">5</div>
                        <div className="text-sm text-gray-200">Scenic Routes</div>
                      </div>
                      <div className="bg-white/10 border border-white/20 p-6 text-white shadow-xl rounded-2xl">
                        <div className="text-2xl font-bold">300°</div>
                        <div className="text-sm text-gray-200">Panoramic Views</div>
                      </div>
                      <div className="bg-white/10 border border-white/20 p-6 text-white shadow-xl rounded-2xl">
                        <div className="text-2xl font-bold">4</div>
                        <div className="text-sm text-gray-200">Countries</div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "services" && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                      <div className="bg-white/10  p-6 text-white shadow-xl  rounded-2xl">
                        <div className="text-2xl font-bold">⭐️</div>
                        <div className="text-sm text-gray-200">Michelin-Star</div>
                      </div>
                      <div className=" bg-white/10  p-6 text-white shadow-xl  rounded-2xl">
                        <div className="text-2xl font-bold">50+</div>
                        <div className="text-sm text-gray-200">Wine Labels</div>
                      </div>
                      <div className="bg-white/10  p-6 text-white shadow-xl  rounded-2xl">
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm text-gray-200">Room Service</div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Caption that changes with tab */}
              <motion.p
                key={`caption-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-500 mt-8 text-center"
              >
                {activeTab === "overview"
                  ? "Elegant private suites with panoramic windows"
                  : activeTab === "highlights"
                    ? "The Swiss Alps route - our most scenic journey"
                    : "Award-winning dining experiences onboard"}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ELANCI SIGNATURE RAIL EXPERIENCE WITH GALLERY ================= */}
      <section className="bg-white py-20 px-4 md:py-8 md:px-6">

        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20 md:mb-28">
            <p className="uppercase tracking-[5px] text-gray-400 text-sm mb-4 md:mb-6">
              Signature Journey
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-light leading-tight text-gray-900">
              The Grand European Rail
            </h2>

            <p className="mt-4 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-lg text-gray-500 leading-relaxed">
              A slow journey across Europe’s most refined destinations — where the journey itself becomes the destination.
            </p>
          </div>

          {/* Story Sections */}
          {[
            {
              city: "Paris",
              subtitle: "Arrival in Elegance",
              text:
                "Your journey begins at the legendary Ritz Paris. Champagne welcomes, private museum viewings, and twilight cruises along the Seine set the tone for an extraordinary voyage.",
              images: [
                { src: "/yatch.jpeg", caption: "Ritz Paris Exterior" },
                { src: "/rail.jpg", caption: "Private Seine Cruise" },
                { src: "/rail.jpg", caption: "Louvre After Hours" },
              ],
            },
            {
              city: "Swiss Alps",
              subtitle: "Through Alpine Majesty",
              text:
                "Glass-domed carriages reveal dramatic alpine scenery as you glide through Switzerland’s most breathtaking landscapes toward a secluded mountain retreat.",
              images: [
                { src: "/rail.jpg", caption: "Panoramic Train Carriage" },
                { src: "/belmond.jpeg", caption: "Mountain Lodge Retreat" },
                { src: "/safari.jpg", caption: "Glacier Walks" },
              ],
            },
            {
              city: "Venice",
              subtitle: "A Timeless Finale",
              text:
                "Arrive in Venice by rail before drifting through hidden canals by private gondola — a quiet farewell to a journey defined by elegance.",
              images: [
                { src: "/sea.jpeg", caption: "Venice Canals" },
                { src: "/rail.jpg", caption: "Private Gondola Ride" },
                { src: "/ski.jpeg", caption: "Hotel Cipriani Suite" },
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32"
            >
              {i % 2 === 0 ? (
                <>
                  {/* Image Left */}
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={item.images[0].src}
                      className="w-full h-64 sm:h-80 md:h-[520px] object-cover hover:scale-105 transition duration-700"
                    />
                  </div>

                  {/* Text Right */}
                  <div className="flex flex-col justify-center mt-6 md:mt-0">
                    <p className="text-sm tracking-[4px] text-gray-400 uppercase mb-2 md:mb-4">
                      {item.city}
                    </p>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 md:mb-6">
                      {item.subtitle}
                    </h3>

                    <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed mb-4 md:mb-8">
                      {item.text}
                    </p>

                    {/* Gallery */}
                    <div className="flex overflow-x-auto gap-4 md:gap-6 pb-2 -mx-2">
                      {item.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="flex-none w-52 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                        >
                          <img
                            src={img.src}
                            className="w-full h-40 sm:h-48 md:h-48 object-cover transition-transform duration-500 hover:scale-105"
                            alt={img.caption}
                          />
                          <p className="text-center text-gray-500 text-xs sm:text-sm md:text-sm p-2">{img.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Left */}
                  <div className="flex flex-col justify-center order-last md:order-first mt-6 md:mt-0">
                    <p className="text-sm tracking-[4px] text-gray-400 uppercase mb-2 md:mb-4">
                      {item.city}
                    </p>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 md:mb-6">
                      {item.subtitle}
                    </h3>

                    <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed mb-4 md:mb-8">
                      {item.text}
                    </p>

                    {/* Gallery */}
                    <div className="flex overflow-x-auto gap-4 md:gap-6 pb-2 -mx-2">
                      {item.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="flex-none w-52 sm:w-64 md:w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                        >
                          <img
                            src={img.src}
                            className="w-full h-40 sm:h-48 md:h-48 object-cover transition-transform duration-500 hover:scale-105"
                            alt={img.caption}
                          />
                          <p className="text-center text-gray-500 text-xs sm:text-sm md:text-sm p-2">{img.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Right */}
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={item.images[0].src}
                      className="w-full h-64 sm:h-80 md:h-[520px] object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Closing Statement */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-2xl font-light text-gray-800 leading-relaxed">
              Every journey is fully tailored — extended stays, private experiences, or entirely new destinations can be woven into your story.
            </p>

            <button className="mt-8 sm:mt-12 px-10 sm:px-12 py-4 sm:py-5 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition text-base sm:text-lg md:text-lg">
              Design My Rail Journey
            </button>
          </div>
        </div>
      </section>



      {/* ================= MODERN TESTIMONIAL ================= */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 text-8xl text-gray-200 font-serif">
              "
            </div>

            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-amber-500 fill-current" />
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl italic text-gray-700 mb-8 leading-relaxed"
              >
                "An unforgettable experience. The landscapes, the service, the
                attention to detail — perfection at every turn."
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <p className="font-semibold text-gray-900">The Montgomery Family</p>
                <p className="text-sm text-gray-500">Traveled September 2024</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MODERN GALLERY ================= */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Journey Through The Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every moment onboard is designed to inspire wonder,
              elegance, and unforgettable memories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs border border-white/30">
                    {item.category}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl"
            />

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <h3 className="text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200 text-lg">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Rail;