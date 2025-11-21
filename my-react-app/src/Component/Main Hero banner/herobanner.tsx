import CallButton from "../../small component/CallButton";
import DiscoverButton from "../../small component/Discoverbutton";

export default function Herobanner() {
    return (
        <div className="flex justify-center items-center w-full bg-hero bg-blend-overlay bg-gray-800 bg-opacity-50 bg-cover bg-center ">
            <div className="w-[1160px] flex justify-between items-center  ">
                <div className="w-[60%] flex flex-col gap-4 ">
                    <h1 className="heroheading">Best Website Design and SEO Company in USA</h1>
                    <p className="herosubheading">We are one of the best Website Design and SEO Company in USA.</p>
                    <div className="flex gap-5">
                       <DiscoverButton /> <CallButton />
                    </div>
                    
                </div>
                <div className="w-[40%] flex flex-col gap-4 bg- ">
                    
                </div>

            </div>

        </div>
    );
}





