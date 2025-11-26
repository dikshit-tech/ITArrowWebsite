import About from "../Component/About/About";
import Blog from "../Component/Blog/blog";
import Client from "../Component/Clients/Client";
import Herobanner from "../Component/Main Hero banner/herobanner";
import Services from "../Component/Services/services";
import Testimonials from "../Component/testimonials/testimonials";
import WhyChooseUs from "../Component/Why chooseus/wcu";

export default function Homepage() {
    return (
        <div>
            <Herobanner />
            <About />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <Blog />
            <Client/>
        </div>
    );
}