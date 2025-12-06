import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <div className="relative w-full h-[900px] md:h-[900px] overflow-hidden">
      <Slider {...settings}>
        {carouselData.map((slide) => (
          <div key={slide.id} className="relative h-[800px] md:h-[820px]">
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
