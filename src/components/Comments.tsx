import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { comments } from "../utils/Index";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // ---- AUTO SLIDE EVERY 5 SECONDS ----
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // ---- HANDLERS ----
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % comments.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? comments.length - 1 : prev - 1
    );
  };

  // ---- ANIMATION VARIANTS ----
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    }),
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const starVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-white to-gray-50/30">
      {/* ===== Header ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-1 w-12 bg-cyan-500 rounded-full" />
          <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
            Testimonials
          </span>
          <div className="h-1 w-12 bg-cyan-500 rounded-full" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5">
          Voices From Our{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
            Community
          </span>
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Hear what people are saying about their journey with{" "}
          <span className="font-semibold text-gray-900 relative">
            Elanci Travels
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-400 to-teal-400" />
          </span>
          .
        </p>
      </motion.div>

      {/* ===== CAROUSEL WRAPPER ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative max-w-6xl mx-auto"
      >
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-100/30 to-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-tr from-cyan-100/20 to-teal-100/20 rounded-full blur-3xl" />

        <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          {/* Quote Icon */}
          <Quote className="absolute top-8 right-8 w-24 h-24 text-cyan-50 stroke-[0.5]" />

          {/* ==== SLIDE CONTAINER ==== */}
          <div className="relative h-[400px] sm:h-[350px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 p-4"
              >
                {/* Avatar Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="relative"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full blur-lg opacity-40 animate-pulse" />
                    <img
                      src={comments[currentIndex].image}
                      alt={comments[currentIndex].name}
                      className="relative h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-full border-4 border-white shadow-2xl"
                    />
                    <motion.div
                      className="absolute -bottom-3 -right-3 bg-gradient-to-r from-cyan-500 to-teal-500 p-3 rounded-full shadow-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Quote className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 max-w-2xl">
                  {/* Stars */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center lg:justify-start gap-1.5 mb-6"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={starVariants}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <Star className="w-6 h-6 text-amber-400 fill-amber-400 drop-shadow-sm" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-700 text-lg sm:text-xl lg:text-2xl font-medium italic leading-relaxed mb-8"
                  >
                    "{comments[currentIndex].desc}"
                  </motion.p>

                  {/* Name & Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center lg:text-left"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {comments[currentIndex].name}
                    </h3>
                   
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ==== NAV BUTTONS ==== */}
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white p-3.5 rounded-full shadow-lg shadow-cyan-200 backdrop-blur-sm transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white p-3.5 rounded-full shadow-lg shadow-cyan-200 backdrop-blur-sm transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* ==== DOT INDICATORS ==== */}
          <div className="flex justify-center mt-10 lg:mt-12 gap-3">
            {comments.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="focus:outline-none"
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-gradient-to-r from-cyan-500 to-teal-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="mt-12 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-gradient-to-r from-cyan-400 to-teal-400"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Comments;