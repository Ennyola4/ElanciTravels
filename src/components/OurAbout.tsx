import { Compass, Eye, Globe2, Plane } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const images = [
    "https://cdn.theatlantic.com/thumbor/UH-kFHV60wWFEU3JiLr9XtLyCA8=/502x0:3502x2250/1200x900/media/img/mt/2024/07/GS316489/original.jpg",
    "https://media.istockphoto.com/id/163031116/photo/air-stewardess.jpg?s=612x612&w=0&k=20&c=7WZ-DsSMLmzXneLT-0FFFOHRK9DyZvLYvC2vrcc5saU=",
    "https://compote.slate.com/images/3ed7895d-452b-4872-a530-ae5f2d92f0ca.jpg",
    "https://media.sciencephoto.com/image/t6100377/800wm/T6100377.jpg",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
];

const OurAbout = () => {
    const [angle, setAngle] = useState(0);
    const dragging = useRef(false);
    const startX = useRef(0);
    const startAngle = useRef(0);

    useEffect(() => {
        aos.init({
            duration: 800,
            once: true
        })
    }, [])

    // Auto rotate
    useEffect(() => {
        const interval = setInterval(() => {
            if (!dragging.current) setAngle((prev) => prev + 0.5);
        }, 16); // ~60fps
        return () => clearInterval(interval);
    }, []);

    // Drag handlers
    const handleDragStart = (clientX: number) => {
        dragging.current = true;
        startX.current = clientX;
        startAngle.current = angle;
    };
    const handleDragMove = (clientX: number) => {
        if (dragging.current) {
            const deltaX = clientX - startX.current;
            setAngle(startAngle.current + deltaX * 0.5);
        }
    };
    const handleDragEnd = () => {
        dragging.current = false;
    };

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
        const onMouseUp = () => handleDragEnd();
        const onTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].clientX);
        const onTouchEnd = () => handleDragEnd();

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("touchend", onTouchEnd);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    return (
        <div>
            <div className="flex bg-[#0C2F37] flex-col lg:flex-row items-center justify-between md:gap-10 my-10 px-4 md:px-10">
                {/* ===== Text Section ===== */}
                <div className="w-full lg:w-1/2 lg:text-left mb-10 p-4 m-4 lg:mb-0">
                    <h1 className="text-5xl sm:text-5xl  font-semibold text-white mb-6">About Us</h1>
                    <p className="text-gray-50 text-base sm:text-lg leading-relaxed mb-4" data-aos="fade-left">
                        At <span className="font-semibold text-yellow-500">Elanci Travels</span>, we craft unforgettable travel experiences across the world.
                    </p>
                    <p className="text-gray-50 text-base sm:text-lg leading-relaxed" data-aos="fade-left">
                        From serene beach escapes to thrilling safaris and heritage tours, Elanci Travels turns every journey into a story worth remembering.
                        Our expert guides ensure that every trip is immersive and unforgettable, allowing you to explore vibrant cultures, breathtaking
                        landscapes, and hidden gems while enjoying the highest level of comfort and personalized attention.
                    </p>
                    <button className="mt-6 px-10 text-sm py-3 border rounded-md text-white hover:bg-white cursor-pointer hover:text-[#0C2F37] transition-colors duration-500">
                        <Eye className="w-4 h-4 inline-block mr-2" />
                        Read More
                    </button>
                </div>

                {/* ===== 3D Carousel Section (Desktop Only) ===== */}
                <div
                    className="hidden lg:flex relative w-full lg:w-1/2 h-[400px] perspective cursor-grab items-center justify-center"
                    onMouseDown={(e) => handleDragStart(e.clientX)}
                    onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                >
                    {/* Glowing Ring */}
                    <div className="absolute w-[300px] h-[300px] rounded-full shadow-[0_0_80px_15px_rgba(59,130,246,0.3)] animate-spin-slow" />

                    {/* 3D Images */}
                    <div
                        className="absolute inset-0 flex items-center justify-center transition-transform duration-400"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: `rotateY(${angle}deg)`,
                        }}
                    >
                        {images.map((img, i) => {
                            const rotateY = (360 / images.length) * i;
                            return (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`Slide ${i}`}
                                    className="absolute w-30 h-46 object-cover rounded-2xl shadow-lg cursor-pointer transition-transform duration-500 hover:scale-110"
                                    style={{
                                        transform: `rotateY(${rotateY}deg) translateZ(200px)`,
                                    }}
                                />
                            );
                        })}
                    </div>

                    <h1 className="text-white/30 text-center w-full text-3xl font-bold px-4">
                        <Plane className="w-6 h-6 inline-block mr-2" />
                        Elanci Travels ...
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
                <div className="space-y-16 sm:space-y-20">

                    {/* ===== Mission Section ===== */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
                        {/* Image */}
                        <div
                            className="relative w-full lg:w-3/5 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl" 
                            data-aos="fade-right"
                        >
                            <img
                                src="https://www.shutterstock.com/image-photo/woman-airport-service-agent-passport-600nw-2263208253.jpg"
                                alt="Our Mission"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-in-out"
                            />
                            {/* Overlay Text */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-3 sm:px-6">
                                <Plane className="w-8 sm:w-10 h-8 sm:h-10 mb-2 text-[#FFB703]" />
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                                    Explore. Dream. Discover.
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base italic mt-1">
                                    Creating journeys that inspire.
                                </p>
                            </div>
                        </div>

                        {/* Text */}
                        <div
                            className="lg:w-2/5 lg:border-l-2 border-[#0C2F37] rounded-2xl p-4 sm:p-6 lg:pl-8"
                            data-aos="fade-left"
                        >
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0C2F37] mb-3 flex items-center gap-2">
                                <Compass className="w-5 sm:w-6 h-5 sm:h-6 text-[#0C2F37]" />
                                Our Mission
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed italic">
                                "At <span className="text-blue-800 text-lg font-bold">Elanci Travels,</span> our mission is to create unforgettable travel experiences
                                that inspire and enrich the lives of our clients. We are dedicated to providing
                                personalized service, expert guidance, and unique itineraries that showcase the
                                beauty and diversity of the world. Through sustainable and responsible tourism
                                practices, we aim to foster meaningful connections between travelers and the
                                destinations they explore."
                            </p>
                        </div>
                    </div>

                    {/* ===== Vision Section ===== */}
                    <div className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch gap-8">
                        {/* Image */}
                        <div
                            className="relative w-full lg:w-3/5 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
                            data-aos="fade-left"
                        >
                            <img
                                src="https://media.istockphoto.com/id/546174996/photo/business-man-in-check-in-counter-with-boarding-pass.jpg?s=612x612&w=0&k=20&c=woIxJBmh-nz0WMhULNZhS2AdpnKRB2DYIaDm83b_AUQ="
                                alt="Our Vision"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-in-out"
                            />
                            {/* Overlay Text */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-3 sm:px-6">
                                <Globe2 className="w-8 sm:w-10 h-8 sm:h-10 mb-2 text-[#FFB703]" />
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                                    Connecting the World
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base italic mt-1">
                                    Travel with purpose. Experience with passion.
                                </p>
                            </div>
                        </div>

                        {/* Text */}
                        <div
                            className="lg:w-2/5 lg:border-r-2 border-[#0C2F37] rounded-2xl p-4 sm:p-6 lg:pr-8 text-left lg:text-right"
                            data-aos="fade-right"
                        >
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0C2F37] mb-3 flex items-center gap-2 justify-start lg:justify-end">
                                <Globe2 className="w-5 sm:w-6 h-5 sm:h-6 text-[#0C2F37]" />
                                Our Vision
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed italic">
                                "Our vision at <span className="text-blue-800 text-lg font-bold">Elanci Travels,</span> is to be a leading travel agency recognized for
                                excellence in service, innovation, and sustainability. We aspire to inspire a
                                global community of travelers who seek authentic and transformative experiences.
                                By continuously evolving and embracing new technologies, we aim to set new
                                standards in the travel industry while promoting cultural understanding and
                                environmental stewardship."
                            </p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default OurAbout;
