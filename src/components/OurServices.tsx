import { ChevronsRight } from "lucide-react";
import { services, travels } from "../utils/Index";
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import { useEffect } from "react";


const OurServices = () => {


    useEffect(() => {
        aos.init({
            duration: 800,
            once: true
        })
    }, [])
    return (
        <div>
            <section className="w-full py-20  ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mt-12">
                        <h1 className="text-4xl font-bold text-[#0C2F37]">Our Services</h1>
                        <p className="text-gray-600 mt-4 text-base max-w-2xl mx-auto">
                            Explore the world with our comprehensive travel services designed
                            to make your journey unforgettable.
                        </p>
                    </div>

                    {/* Service Cards */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-6 border text-center border-gray-200 rounded-2xl shadow-sm  bg-white" data-aos="zoom-out"
                            >
                                <h2 className="text-2xl font-semibold text-[#0C2F37] mb-3">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                <button className="mt-6 flex items-center gap-2 cursor-pointer text-[#0C2F37] text-sm font-medium border  rounded-md px-4 py-2 hover:bg-[#0C2F37] hover:text-white transition-colors duration-300 mx-auto">
                                    Explore More
                                    <ChevronsRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <p className="text-center text-gray-600 text-sm mt-10">
                        And much more to make your travel experience seamless and enjoyable!
                    </p>
                </div>
            </section>
            <div className=" p-3 bg-[#0C2F37]">
                <div className="max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-6" data-aos="fade-left">
                    <h1 className="text-3xl text-white sm:text-4xl md:text-4xl  text-start" >
                        Immersive Travel Experiences
                    </h1>
                    <h4 className="text-white mt-6 text-sm sm:text-base md:text-base text-start max-w-2xl">
                        Personalized Adventures
                    </h4>
                    <p className="text-white mt-4 text-xs sm:text-sm md:text-sm text-start max-w-3xl">
                        At Elanci, we believe that travel is not just about visiting new
                        places; it's about immersing yourself in the culture, traditions, and
                        essence of each destination. Our team of travel experts is dedicated
                        to crafting personalized adventures that go beyond the ordinary.
                        Whether you're seeking thrilling outdoor activities, cultural
                        explorations, or serene retreats, we tailor each itinerary to match
                        your unique interests and preferences. With Elanci, every journey is
                        an opportunity to create lasting memories and connect with the world
                        in meaningful ways.
                    </p>

                </div>

                <div className="max-w-7xl mx-auto px-2 mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-15">
                    {travels.map((travel, index) => (
                        <div
                            key={index}
                            className="p-4 border-gray-600 rounded-md backdrop-blur-lg shadow-2xl flex flex-col" data-aos="fade-up"
                        >

                            {/* Image */}
                            <img
                                src={travel.image}
                                alt={travel.title}
                                className="w-full h-66 object-cover shadow-2xl rounded-md"
                            />
                            {/* Title */}
                            <h3 className="text-white  text-xs font-light mt-4 text-center">
                                {travel.title}
                            </h3>


                            {/* Header */}
                            <h2 className="text-white text-2xl  font-bold mt-5 text-center">
                                {travel.header}
                            </h2>

                            {/* Description */}
                            <p className="text-white/80 text-sm italic mt-3 text-center">
                                {travel.description}
                            </p>

                            {/* Button */}

                        </div>
                    ))}
                </div>
               
            </div>
        </div>
    );
};

export default OurServices;
