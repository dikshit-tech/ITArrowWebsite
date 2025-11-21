import About from "../Component/About/About";
import Blog from "../Component/Blog/blog";
import SecondHeroBanner from "../Component/secondary Hero Banner/SecondHeroBanner";
import Testimonials from "../Component/testimonials/testimonials";
import WhyChooseUs from "../Component/Why chooseus/wcu";
import Services from "./Service";
import { Helmet } from "react-helmet";

export default function AboutUs() {
    return (
        <>
         <Helmet>
        <title>About Us | ITArrow Technologies</title>
        <link rel="canonical" href={"http://localhost:5173/about-us"} />
      </Helmet>
        <div>
            <SecondHeroBanner pagename="About Us" desc="About Our Company" />
            <About />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <Blog />
        </div>
        </>
    );
}