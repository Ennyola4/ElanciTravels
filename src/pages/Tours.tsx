import { motion } from "framer-motion"
import { tours } from "../utils/Index"
import { Clock, Notebook, Star, Users } from "lucide-react"
import { useEffect } from "react"
const Tours = () => {
     useEffect(() => {
            window.scrollTo(0, 0);
        }, [location.pathname]);
    
    return (
        <div>
            <div className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden text-white">
                {/* Animated Background */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://i.huffpost.com/gen/2006764/images/o-TOURIST-facebook.jpg')",
                    }}
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

                {/* Foreground content */}
                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-2xl md:text-5xl mt-10 font-bold mb-6 font-lora"
                    >
                        Tours  ✈️
                    </motion.h1>
                    <p className="text-white mt-4 text-sm  max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro alias quibusdam, ullam excepturi odio quidem dolorem, ex veritatis tenetur a quasi voluptatum cumque similique aperiam reiciendis dolore aliquid soluta. Sunt.
                    </p>
                </div>
            </div>
            <section className="w-full py-20  ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mt-12">
                        <h1 className="text-4xl font-bold text-[#0C2F37]">Our Tour Packages</h1>
                        <p className="text-gray-600 mt-4 text-base max-w-2xl mx-auto">
                            Explore the world with our comprehensive travel services designed
                            to make your journey unforgettable.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 m-3 sm:m-5 md:m-7 p-4 sm:p-6 md:p-8">
                    {tours.map((item, index) => (
                        <div key={index} className="p-6 sm:p-8 shadow-sm border border-gray-300 rounded-md">
                            <div className="flex items-center justify-between flex-wrap">
                                <span className="font-semibold text-xl sm:text-xl text-[#0C2F37]">
                                    {item.titel}
                                </span>
                                <span
                                    className={`${item.bgColor[0]} flex items-center text-xs px-2 py-1 rounded-full ${item.textColor[0]}`}
                                >
                                    <Star className="h-3 w-3 inline mr-2 items-center"/>
                                    {item.rating}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs mt-3">
                                {item.countries.map((country, i) => (
                                    <span
                                        key={i}
                                        className={`${item.bgColor[1]} px-3 py-1 rounded-full ${item.textColor[1]}`}
                                    >
                                        {country}
                                    </span>
                                ))}
                            </div>

                            <p className="text-xs text-gray-400 p-2 mt-3">{item.desc}</p>
                            <hr className="text-gray-300" />

                            <div className="flex justify-between flex-wrap mt-2 mb-4">
                                <div>
                                    <span className="text-xs text-gray-500 flex gap-1 items-center font-light p-2">
                                        <Clock
                                            className={`${item.textColor[1]} inline w-3 h-3`}
                                        />
                                        {item.days}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-xs mr-20 text-gray-500 flex gap-1 items-center font-light p-2">
                                        <Users
                                            className={`${item.textColor[1]} inline w-3 h-3`}
                                        />
                                        {item.numberOfPeople}
                                    </span>
                                </div>
                            </div>
                            <p className="p-2 font-light text-gray-500 text-sm">Starting from:</p>
                            <div className="flex justify-between items-center p-1">
                                <span className={`${item.textColor[1]} font-semibold text-3xl `}>
                                    {item.amount}
                                </span>
                                <button className="border shadow-sm border-[#0C2F37] text-[#0C2F37] hover:bg-[#0C2F37] cursor-pointer hover:text-white transition-all duration-500 px-4 py-2 rounded-md items-center justify-center">
                                    <Notebook className="inline w-4 h-4 items-center mr-2" />
                                    Book now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}

export default Tours
