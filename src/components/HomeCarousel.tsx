import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Facebook,
  Instagram,
  Linkedin,
  Search,
  Twitter
} from 'lucide-react';
import { motion } from 'framer-motion';

const carouselData = [
  {
    id: 1,
    image:
      'https://www.traveldailymedia.com/assets/2021/09/shutterstock_1199649778-scaled.jpg',
    title: 'City Adventures',
    subtitle: 'Discover urban wonders',
  },
  {
    id: 2,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/556339125.jpg?k=609f6be8c141b101930711ac738a7a8fc63895f920af37398ca61ac7ed3f8cab&o=',
    title: 'Beach Paradise',
    subtitle: 'Experience tropical getaways',
  },
  {
    id: 3,
    image:
      'https://balule.krugerpark.co.za/images/balule-game-reserve-safari-786x416.jpg',
    title: 'Discover Nature',
    subtitle: 'Explore the most beautiful landscapes',
  },
  {
    id: 4,
    image: 'https://www.nationalgeographic.com/content/dam/expeditions/landing-pages/Interests/Hero-interest-people.jpg',
    title: 'Cultural Tours',
    subtitle: 'Immerse in local traditions',
  },
];

const HomeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="relative w-full h-[600px] md:h-[600px] overflow-hidden">
      <Slider {...settings}>
        {carouselData.map((slide) => (
          <div key={slide.id} className="relative h-[500px] md:h-[600px]">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" /> {/* subtle overlay */}
            </div>


            {/* Content */}
            <div
              className="
    relative h-full flex flex-col justify-center 
    text-white px-6 md:px-16
  "
            >
              <div className="flex items-center justify-between w-full">
                {/* Social Icons (Left) */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                  className="hidden md:flex flex-col gap-8 p-2 rounded-full ">
                  {[
                    {
                      icon: <Facebook className="w-5 h-5" />,
                      label: "Facebook",
                      color: "bg-blue-600",
                    },
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      label: "Instagram",
                      color: "bg-orange-500",
                    },
                    {
                      icon: <Twitter className="w-5 h-5" />,
                      label: "Twitter",
                      color: "bg-sky-400",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                      color: "bg-sky-400",
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative group flex items-center">
                      {/* Icon */}
                      <span className="text-white cursor-pointer transition-all duration-300 group-hover:scale-125 group-hover:text-blue-400">
                        {item.icon}
                      </span>


                      {/* Tooltip */}
                      <span
                        className={`
          absolute left-8 top-1/2 -translate-y-1/2
          ${item.color} text-white text-[12px] font-semibold
          px-2 py-1 rounded-md shadow-md
          opacity-0 group-hover:opacity-100
          translate-x-2 group-hover:translate-x-0
          transition-all duration-500
          whitespace-nowrap
        `}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </motion.div>


                {/* Title + Description (Right) */}
                <div className="max-w-2xl text-center md:text-right flex flex-col items-center justify-center md:items-end">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl mb-6 animate-fade-up text-blue-300">
                    {slide.subtitle}
                  </p>
                  <button className="px-10 py-2 cursor-pointer hover:bg-[#0C2F37] rounded-md border transition-all duration-500 text-white font-semibold hover:shadow-lg animate-fade-up-delay">
                    <Search className="inline w-5 h-5 mr-2 mb-1" />
                    Explore Now
                  </button>
                </div>

              </div>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom animations and slick overrides
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }

  .animate-fade-up {
    animation: fadeUp 1s ease-out;
  }

  .animate-fade-up-delay {
    animation: fadeUp 1s ease-out 0.3s;
    animation-fill-mode: backwards;
  }

  /* Slick dot styles */
  .slick-dots {
    bottom: 25px;
  }
  .slick-dots li button:before {
    color: white;
    font-size: 12px;
    opacity: 0.7;
  }
  .slick-dots li.slick-active button:before {
    color: white;
    opacity: 1;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);


export default HomeCarousel;
