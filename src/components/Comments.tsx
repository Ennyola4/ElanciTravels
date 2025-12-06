import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { comments } from "../utils/Index";

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ---- AUTO SLIDE EVERY 5 SECONDS ----
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // ---- HANDLERS ----
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % comments.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? comments.length - 1 : prev - 1
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 my-20">
      {/* ===== Header ===== */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0C2F37] tracking-tight mb-3">
          Voices From Our Community
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Hear what people are saying about their experience with{" "}
          <span className="font-semibold text-[#0C2F37]">Elanci Travels</span>.
        </p>
      </div>

      {/* ===== CAROUSEL WRAPPER ===== */}
      <div className="relative rounded-2xl p-12 overflow-hidden">

        {/* ==== SINGLE SLIDE ==== */}
        <div className="flex flex-col items-center text-center transition-all duration-700 ease-in-out">
          <div className="flex flex-col items-center">
            <img
              src={comments[currentIndex].image}
              alt={comments[currentIndex].name}
              className="h-28 w-28 object-cover rounded-full shadow-xl ring-4 ring-white/20 mb-5"
            />

            <h3 className="text-[#0C2F37] font-semibold text-xl mb-2">
              {comments[currentIndex].name}
            </h3>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-gray-400 text-base max-w-xl italic leading-relaxed">
              “{comments[currentIndex].desc}”
            </p>
          </div>
        </div>

        {/* ==== NAV BUTTONS ==== */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 -translate-y-1/2 bg-[#0C2F37] hover:bg-[#0C2F37]/50 cursor-pointer text-white p-3 rounded-full backdrop-blur-md transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 -translate-y-1/2 bg-[#0C2F37] hover:bg-[#0C2F37]/50 cursor-pointer text-white p-3 rounded-full backdrop-blur-md transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* ==== DOT INDICATORS ==== */}
        <div className="flex justify-center mt-8 gap-2">
          {comments.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full transition-all ${i === currentIndex ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
