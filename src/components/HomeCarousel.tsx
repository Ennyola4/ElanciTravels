import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight} from "lucide-react";
import type { Variants } from "framer-motion";

const carouselData = [
  {
    id: 1,
    image: 'https://png.pngtree.com/background/20230626/original/pngtree-globe-model-earth-landscape-planet-photo-picture-image_4060363.jpg',
    title: 'City Adventures',
    subtitle: 'Discover urban wonders',
    description: 'Explore vibrant cityscapes and iconic landmarks with expert-guided tours.',
    duration: '5-7 Days',
    season: 'Year Round',
    travelers: '2-12 People'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    title: 'Beach Paradise',
    subtitle: 'Experience tropical getaways',
    description: 'Relax on pristine beaches and enjoy luxury resorts with ocean views.',
    duration: '7-10 Days',
    season: 'All Seasons',
    travelers: '1-8 People'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop',
    title: 'Wilderness Exploration',
    subtitle: 'Discover untouched nature',
    description: 'Embark on thrilling adventures through breathtaking natural landscapes.',
    duration: '3-5 Days',
    season: 'Spring & Fall',
    travelers: '4-15 People'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931&auto=format&fit=crop',
    title: 'Cultural Immersion',
    subtitle: 'Experience local traditions',
    description: 'Immerse yourself in rich cultural heritage and authentic local experiences.',
    duration: '8-12 Days',
    season: 'Year Round',
    travelers: '2-10 People'
  },
];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // // Auto play functionality
  // useEffect(() => {
  //   if (!isPlaying) return;

  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  //   }, 15000);

  //   return () => clearInterval(interval);
  // }, [isPlaying]);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const promises = carouselData.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = item.image;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(promises);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  // Animation variants with proper typing
  // const fadeVariants: Variants = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   exit: { opacity: 0 }
  // };

  const slideVariants: Variants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    },
    exit: {
      scale: 1.1,
      opacity: 0,
      transition: { duration: 0.8 }
    }
  };

  // const textVariants: Variants = {
  //   hidden: { y: 50, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.8,
  //       ease: "easeOut"
  //     }
  //   }
  // };

  // set loading overlay to 3 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: { duration: 0.6 }
    }
  };

  const currentSlide = carouselData[currentIndex];

  return (
    <div className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Loading overlay  */}
      {isLoading && (
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-cyan-900 z-50 flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-semibold">Loading</span>
            </div>
          </div>
        </div>
      )}

      {/* Background images with transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/50 to-transparent"
      />
      <div className="absolute inset-0 bg-linear-to-r from-gray-900/60 via-transparent to-gray-900/60" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-linear-to-l from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center lg:items-start text-white px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide.id}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-2 lg:space-y-3 max-w-3xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                  Featured Destination
                </span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight"
              >
                {currentSlide.title}
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium text-cyan-300">
                  {currentSlide.subtitle}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed"
              >
                {currentSlide.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-18 left-0 right-0 flex items-center justify-center gap-6 z-20">
        {/* Slide Indicators */}
        <div className="flex gap-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative focus:outline-none"
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-linear-to-r from-cyan-400 to-teal-400 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
                }`} />
              {index === currentIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 w-3 h-3 rounded-full border-2 border-cyan-400"
                  initial={false}
                />
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        {/* <div className="hidden lg:block w-32 h-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 15, ease: "linear" }}
            className="h-full bg-linear-to-r from-cyan-400 to-teal-400"
          />
        </div> */}

        {/* Play/Pause Button */}
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          transition={{ type: "spring", stiffness: 400 }}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </motion.button> */}
      </div>

      {/* Navigation Arrows */}
      <div className="hidden lg:block">
        <motion.button
          whileHover={{ x: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          transition={{ type: "spring", stiffness: 400 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-4  backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/20 transition-colors z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ x: 5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          transition={{ type: "spring", stiffness: 400 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-4  backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/20 transition-colors z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  );
};

export default HomeCarousel;