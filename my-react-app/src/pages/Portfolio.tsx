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
                <div className="inner flex-col! gap-7">
                    <div className="w-fll">
                        <p className="slogan">Portfolio </p>
                        <h2 className="title">See our Recent Projects</h2>
                        <p className="description"> Explore our latest achievements that showcase our commitment to quality and innovation. Our recent projects highlight our expertise across various industries and demonstrate our ability to deliver exceptional results tailored to each client’s unique needs.</p>

                    </div>
                    <div className="grid grif-cols-2 sm:grid-cols-3 md:grid-cols-5! w-full gap-5">
                        <div className="flex flex-col ">
                            <div className="border border-[#ff6637] rounded-2xl">
                                <img src="huview2.png" className="h-40 object-contain p-2 w-full" alt="" />
                            </div>
                            <div className="flex items-center ">
                                <div>
                                    <img src="" className="rounded-l-full" alt="" />
                                </div>
                                <div>
                                    <p className="headertwo">Huview</p>
                                    <p className="description">Audio Video Production </p>
                                </div>
                            </div>

                        </div>
                         <div className="flex flex-col ">
                            <div className="border border-[#ff6637] rounded-2xl">
                                <img src="huview2.png" className="h-40 object-contain p-2 w-full" alt="" />
                            </div>
                            <div className="flex items-center ">
                                <div>
                                    <img src="" className="rounded-l-full" alt="" />
                                </div>
                                <div>
                                    <p className="headertwo">Huview</p>
                                    <p className="description">Audio Video Production </p>
                                </div>
                            </div>

                        </div>
                         <div className="flex flex-col ">
                            <div className="border border-[#ff6637] rounded-2xl">
                                <img src="huview2.png" className="h-40 object-contain p-2 w-full" alt="" />
                            </div>
                            <div className="flex items-center ">
                                <div>
                                    <img src="" className="rounded-l-full" alt="" />
                                </div>
                                <div>
                                    <p className="headertwo">Huview</p>
                                    <p className="description">Audio Video Production </p>
                                </div>
                            </div>

                        </div>
                         <div className="flex flex-col ">
                            <div className="border border-[#ff6637] rounded-2xl">
                                <img src="huview2.png" className="h-40 object-contain p-2 w-full" alt="" />
                            </div>
                            <div className="flex items-center ">
                                <div>
                                    <img src="" className="rounded-l-full" alt="" />
                                </div>
                                <div>
                                    <p className="headertwo">Huview</p>
                                    <p className="description">Audio Video Production </p>
                                </div>
                            </div>

                        </div>
                         <div className="flex flex-col ">
                            <div className="border border-[#ff6637] rounded-2xl">
                                <img src="huview2.png" className="h-40 object-contain p-2 w-full" alt="" />
                            </div>
                            <div className="flex items-center ">
                                <div>
                                    <img src="" className="rounded-l-full" alt="" />
                                </div>
                                <div>
                                    <p className="headertwo">Huview</p>
                                    <p className="description">Audio Video Production </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <Services/>
             <CtaTwo/>
           

        </div>
    );
}