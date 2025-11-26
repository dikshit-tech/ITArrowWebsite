import CtaOne from "../Component/CTAs/CtaOne";
import CtaTwo from "../Component/CTAs/CtaTwo";
import SecondHeroBanner from "../Component/secondary Hero Banner/SecondHeroBanner";
import Services from "../Component/Services/services";
import { ClientSlider } from "../small component/Clientslider";
export default function Portfolio() {
    return (
        <div>
            <SecondHeroBanner pagename="Portfolio" desc="Our Portfolio" />
            <div className="outer">
                <div className="inner flex-col!">
                    <div className="w-fll">
                        <p className="slogan">Portfolio </p>
                        <h2 className="title">See our Recent Projects</h2>
                        <p className="description"> Explore our latest achievements that showcase our commitment to quality and innovation. Our recent projects highlight our expertise across various industries and demonstrate our ability to deliver exceptional results tailored to each client’s unique needs.</p>

                    </div>
                    <div>
                        <ClientSlider/>
                    </div>
                </div>

            </div>
            <Services/>
             <CtaTwo/>
           

        </div>
    );
}