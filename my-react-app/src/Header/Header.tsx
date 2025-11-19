export default function Header() {
    return (
        <>
            <div className=" w-full flex flex-col  p-1">

                <div className="w-full flex justify-between items-center flex-row p-2">
                    <div className="flex justify-between align-middle items-center w-[1190px]">
                        <ul className="flex flex-row gap-4">
                            <li>30N Gould St Ste Sheridan Wyoming 82801</li>
                            <li>info@itarrow.us</li>
                        </ul>

                        <ul className="flex gap-2">
                            <li>
                                <i className="fab fa-facebook"></i>
                            </li>
                            <li>
                                <i className="fab fa-instagram"></i>
                            </li>
                            <li>
                                <i className="fab fa-linkedin"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" w-full flex justify-between items-center bg-[#727272]">
                    <div className="flex w-[1190px] align-middle">
                        <div>
                            <img className="h-20" src="./logo.webp" alt="" />
                        </div>
                        <div>
                            <ul className="flex gap-5  items-center ">
                                <li>Home</li>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>Make a Payment </li>
                                <li>Contact Us </li>
                                <li>(307) 429 5622</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}