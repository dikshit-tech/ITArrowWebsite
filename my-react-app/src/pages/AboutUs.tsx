import ExtendAboutUs from "../Component/About/ExtendAboutUs";
import CtaOne from "../Component/CTAs/CtaOne";
import CtaTwo from "../Component/CTAs/CtaTwo";
import MissonAndVission from "../Component/Mission And Vission/MissonAndVission";
import SecondHeroBanner from "../Component/secondary Hero Banner/SecondHeroBanner";
import WhyChooseUs from "../Component/Why chooseus/wcu";
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
            <ExtendAboutUs/>
            <MissonAndVission/>
            <WhyChooseUs />
            <CtaOne/>
            <CtaTwo/>
           
        </div>
        </>
    );
}