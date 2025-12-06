
// const IntroLinks = [
//     {
//         icon: LuggageIcon,
//         title: "Exciting Activities",
//         description:
//             "Discover thrilling adventures and activities tailored for every traveler.",
//     },
//     {
//         icon: TentTree,
//         title: "Cultural Experiences",
//         description:
//             "Immerse yourself in local traditions and cultures around the world.",
//     },
// ];

const Intro = () => {
    return (
        <div className="relative w-full">
            <div
                className="
                absolute left-1/2 -translate-x-1/2 
                -top-52 md:-top-10 lg:-top-18
                z-50 w-[90%] md:w-[80%] lg:w-[70%]
                flex flex-col md:flex-row gap-10
                items-stretch
            "
            >
                {/* Box 1 */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="bg-[#0C2F37] rounded-md shadow-lg p-8 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start justify-center">
                        {IntroLinks.map((link, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center sm:items-start text-center sm:text-left"
                            >
                                <link.icon className="w-10 h-10 mb-3 bg-white rounded-full p-1 text-[#0C2F37]" />
                                <h3 className="text-sm font-semibold mb-1 text-white">
                                    {link.title}
                                </h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed">
                                    {link.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div> */}


                {/* Box 2 */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="bg-[#0C2F37] rounded-md  shadow-lg p-8 flex-1 flex flex-col justify-center">
                    <h1 className="font-bold text-md mb-3 text-white">
                        Welcome to Elanci — Your Gateway to Unforgettable Journeys!
                    </h1>
                    <p className="text-gray-300 text-[11px] leading-relaxed">
                        At Our Travel Agency, we believe travel is more than just visiting
                        new places — it's about creating memories that last a lifetime.
                        Whether you're seeking adventure, relaxation, cultural immersion,
                        or a mix of everything, we make your travel dreams come true.
                    </p>
                </motion.div> */}


            </div>

            {/* Spacer below to maintain layout flow */}
            {/* <div className="h-72 md:h-80 lg:h-35" /> */}
        </div>
    );
};

export default Intro;
