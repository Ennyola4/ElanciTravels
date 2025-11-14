import { whyChooseUs } from "../utils/Index"
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import { useEffect } from "react";


const WhyChooseElanci = () => {

    useEffect(() => {
        aos.init({
            duration: 800,
            once: true
        })
    }, [])
    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-[1800px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center" >
                    {whyChooseUs.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                                data-aos="zoom-out">
                                <div className={`p-5 rounded-full ${item.bgColor}`}>
                                    <Icon className={`w-8 h-8 ${item.textColor}`} />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-[#0C2F37]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed max-w-xs">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WhyChooseElanci
