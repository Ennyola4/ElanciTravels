import { Star } from "lucide-react";
import { comments } from "../utils/Index";

const Comments = () => {
   return (
    <div className="px-4 sm:px-6 lg:px-8 my-20">
      {/* ===== Section Header ===== */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0C2F37] mb-4">
          What Our Clients Say
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover how travelers around the world experienced their journeys with{" "}
          <span className="font-semibold text-[#0C2F37]">Elanci Travels</span>.
        </p>
      </div>

      {/* ===== Comments Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#0C2F37] p-8 ">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-300 ease-in-out"
          >
            {/* Profile Image */}
            <img
              src={comment.image}
              alt={comment.name}
              className="h-20 w-20 object-cover rounded-full shadow-md mb-4"
            />
            

            {/* Name */}
            <h3 className="text-white font-semibold text-lg mb-2">
              {comment.name}
            </h3>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm italic leading-relaxed">
              “{comment.desc}”
            </p>
            
          </div>
          
        ))}
      </div>
    </div>
  );
};


export default Comments;
