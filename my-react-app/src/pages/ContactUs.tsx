import About from "../Component/About/About";
import SecondHeroBanner from "../Component/secondary Hero Banner/SecondHeroBanner";
import Services from "../Component/Services/services";
import WhyChooseUs from "../Component/Why chooseus/wcu";

export default function ContactUs() {
    return (
        <div>
            <SecondHeroBanner pagename="Contact Us" desc="Get in Touch with Us" />
            <About />
            <Services />
            <WhyChooseUs />


        </div>
    );
}