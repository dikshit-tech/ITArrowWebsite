import { Link } from "react-router-dom";
import CallButton from "../small component/CallButton";

export default function Header() {
    return (
        <>
            <div className=" w-full flex flex-col  p-1">

                <div className="w-full flex justify-center items-center flex-row p-2  bg-[#323537] text-white">
                    <div className="flex justify-between w-[1190px]">
                        <ul className="flex flex-row gap-4">
                           <span className="flex items-center gap-2"> <i className="fas fa-map-marker-alt text-[#ff6637]"></i> <Link to={"https://www.bing.com/maps/search?FORM=HDRSC6&q=30N+Gould+St+Ste+Sheridan+Wyoming+82801&cp=44.803445%7E-106.975269&lvl=16.3&style=r"}>30N Gould St Ste Sheridan Wyoming 82801</Link></span>
                            <span className="flex items-center gap-2"> <i className="fas fa-envelope text-[#ff6637]"></i> <Link to={"mailto:info@itarrow.us"}>info@itarrow.us</Link></span>
                        </ul>

                        <ul className="flex gap-2 text-[20px]">
                            <Link to={"https://www.facebook.com/itarrow/"}>
                                <i className="fab fa-facebook text-[#ff6637]"></i>
                            </Link>
                            <Link to={"https://www.instagram.com/itarrowofficial/"}>
                                <i className="fab fa-instagram text-[#ff6637]"></i>
                            </Link>
                            <Link to={"https://np.linkedin.com/company/itarrow?trk=public_jobs_topcard_logo"}>
                                <i className="fab fa-linkedin text-[#ff6637]"></i>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className=" w-full flex justify-center items-center p-2">
                    <div className="flex w-[1190px] justify-between align-middle items-center">
                        <div>
                            <Link to="/"><img className="h-20" src="./logo.webp" alt="" /></Link>
                        </div>
                        <div>
                            <ul className="flex gap-5 text-xl font-500  items-center ">
                                <Link to="/">Home</Link>
                                <Link to="/about-us">About Us</Link>
                                <Link to="/service">Services</Link>
                                <Link to="/portfolio">Portfolio</Link>
                                <Link to="https://buy.stripe.com/bIY7tPbWxcvS1Es000">Make a Payment</Link>
                                <Link to="/contact-us">Contact Us</Link>
                                <li ><CallButton /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}