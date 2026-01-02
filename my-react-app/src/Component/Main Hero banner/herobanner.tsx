import CallButton from "../../small component/CallButton";
import DiscoverButton from "../../small component/Discoverbutton";
import { TypeAnimation } from 'react-type-animation'

export default function Herobanner() {
    return (
        <div className="flex justify-center items-center w-full bg-hero bg-blend-overlay bg-[#2e3133] bg-cover bg-center ">
            <div className="md:w-[1160px] flex  justify-between items-center p-5  ">
                <div className="flex flex-col  justify-between gap-4 w-full md:w-[40%]">
                    <div className=" w-full" >
                        
                        <h1 className="text-5xl  text-white  md:text-8xl font-bold">
                            Best<TypeAnimation sequence={[' Website Design', 1000, ' SEO ', 1000,' Advertisements',1000]} repeat={Infinity} wrapper="span"
                                speed={40} style={{color:'#ff6637'}} /> 
                        </h1>
                        <h1>Company In USA</h1>
                    </div>
                    <p className="text-white text-2xl hero_p md:w-[80%] ">We are one of the best Website Design and SEO Company in USA.</p>
                    <div className="flex hero_button gap-5   ">
                        <DiscoverButton /> <CallButton />
                    </div>

                </div>
                <div className=" md:w-[60%]">
                    

                </div>

            </div>

        </div>


    );
}





