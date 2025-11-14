import { useEffect } from "react"
import Comments from "../components/Comments"
import HomeCarousel from "../components/HomeCarousel"
import Intro from "../components/Intro"
import OurAbout from "../components/OurAbout"
import OurContact from "../components/OurContact"
import OurServices from "../components/OurServices"
import FeaturedDestination from "../components/FeaturedDestination"
import WhyChooseElanci from "../components/WhyChooseElanci"

const Home = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <div>
            <HomeCarousel />
            <Intro/>
            <OurServices/>
            <FeaturedDestination/>
            <OurAbout/>
            <WhyChooseElanci/>
            <OurContact/>
            <Comments/>
        </div>
    )
}

export default Home
