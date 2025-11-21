import CallButton from "../small component/CallButton";

export default function Header() {
    return (
        <>
            <div className=" w-full flex flex-col  p-1">

                <div className="w-full flex justify-center items-center flex-row p-2  bg-[#323537] text-white">
                    <div className="flex justify-between w-[1190px]">
                        <ul className="flex flex-row gap-4">
                           <span className="flex items-center gap-2"> <i className="fas fa-map-marker-alt text-[#ff6637]"></i> <li>30N Gould St Ste Sheridan Wyoming 82801</li></span>
                            <span className="flex items-center gap-2"> <i className="fas fa-envelope text-[#ff6637]"></i> <li>info@itarrow.us</li></span>
                        </ul>

                        <ul className="flex gap-2 text-[20px]">
                            <li>
                                <i className="fab fa-facebook text-[#ff6637]"></i>
                            </li>
                            <li>
                                <i className="fab fa-instagram text-[#ff6637]"></i>
                            </li>
                            <li>
                                <i className="fab fa-linkedin text-[#ff6637]"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" w-full flex justify-center items-center p-2">
                    <div className="flex w-[1190px] justify-between align-middle items-center">
                        <div>
                            <img className="h-20" src="./logo.webp" alt="" />
                        </div>
                        <div>
                            <ul className="flex gap-5 text-xl font-500  items-center ">
                                <li className="text-xl font-monospace! ">Home</li>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>Make a Payment </li>
                                <li>Contact Us </li>
                                <li ><CallButton /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}