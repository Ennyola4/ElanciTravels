import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HomeCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);

  const backgroundImage =
    "https://img.freepik.com/free-photo/travel-elements-composition-with-letters_23-2147981828.jpg?semt=ais_wordcount_boost&w=740&q=80";

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setTimeout(() => setIsLoading(false), 2000);
    };
  }, []);

  return (
    <div className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-cyan-900 z-50 flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-semibold">Loading</span>
            </div>
          </div>
        </div>
      )}

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-gray-900/60" />

      {/* Decorative Blur Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
        <div className="max-w-3xl space-y-6">

          {/* Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
             ÉLANCI TRAVEL
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-200 leading-relaxed mx-auto"
          >
           Curated, Refined, Elanci.
          </motion.p>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
};

export default HomeCarousel;