import CtaOne from "../Component/CTAs/CtaOne";
import CtaTwo from "../Component/CTAs/CtaTwo";
import SimpleStep from "../Component/Process/simplestep";
import SecondHeroBanner from "../Component/secondary Hero Banner/SecondHeroBanner";
import Services from "../Component/Services/services";

export default function Service() {
    return (
        <div>
            <SecondHeroBanner pagename="Services" desc="Our Service Offerings" />

            <Services />
            <SimpleStep/>
            <CtaOne/>
            <CtaTwo/>

        </div>
    );
}