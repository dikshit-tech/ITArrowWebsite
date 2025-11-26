import { Link } from "react-router-dom";

export default function Custom_Footer() {
    return (
        <footer className="bg-[#474d51] text-white flex justify-center align-items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <img src="../logo2.png" alt="" className="w-32 md:w-full object-contain" />
                        <p className="text-sm sm:text-sm md:text-lg leading-relaxed">
                            IT Arrow is one of the best IT company providing you reliable Website development services,
                            SEO Services and VPS management Services.
                        </p>
                        <div className="flex gap-3 mt-1">
                            <i className="fab fa-facebook text-[#ff6637] font-bold text-2xl"></i>
                            <i className="fab fa-instagram text-[#ff6637] font-bold text-2xl"></i>
                            <i className="fab fa-linkedin text-[#ff6637] font-bold text-2xl"></i>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
                        <ul className="flex flex-col gap-2 text-sm md:text-lg">
                            <Link to={""} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-home w-4 text-[#ff6637]"></i> Home</Link>
                            <Link to={""} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-globe w-4 text-[#ff6637]"></i> Website Design</Link>
                            <Link to={""} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-search w-4 text-[#ff6637]"></i> Search Engine Optimization</Link>
                            <Link to={""} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-dollar w-4 text-[#ff6637]"></i>Paid Advertisements</Link>
                            <Link to={""} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-book w-4 text-[#ff6637]"></i>Booking</Link>
                            <Link to={""} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center">  <i className="fas fa-blog w-4 text-[#ff6637]"></i> Blog</Link>
                            <Link to={""} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-link w-4 text-[#ff6637]" ></i> Project Links</Link>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-3">Usefull Links</h2>
                        <ul className="flex flex-col gap-2 text-sm md:text-lg">
                            <Link to={"/"} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-user-shield w-4 text-[#ff6637]"></i> Privacy Policy</Link>
                            <Link to={"/"} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-exclamation-triangle w-4 text-[#ff6637]"></i> Disclaimer</Link>
                            <Link to={"/"} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-money-check-alt w-4 text-[#ff6637]"></i> Payment & Refund Policy</Link>
                            <Link to={"/"} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-file-contract w-4 text-[#ff6637]"></i>Terms & Condition</Link>
                            <Link to={"/"} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-headset w-4 text-[#ff6637]"></i>Support</Link>
                            <Link to={"/"} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center">  <i className="fas fa-sitemap w-4 text-[#ff6637]"></i> Sitemap</Link>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
                        <ul className="flex flex-col gap-2 text-sm md:text-lg">
                            <Link to={"/"} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-start"> <i className="fas fa-map-marker-alt w-4 mt-0.5 text-[#ff6637]"></i>30N Gould St Ste Sheridan Wyoming 82801</Link>
                            <Link to={"tel:+13074295622"} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-phone w-4 text-[#ff6637]"></i> +1 307-222-7899</Link>
                            <Link to={"mailto:info@itarrow.com"} className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-envelope w-4 text-[#ff6637]"></i> info@itarrow.com</Link>
                        </ul>
                    </div>
                </div>

                <div className="border-t  flex justify-center items-center border-amber-50 md:mt-3! pt-4">
                    <Link to={""} className="text-center text-sm md:text-lg">© 2025 <span className="text-[#ff6637]">IT Arrow Technologies</span>. All rights reserved.</Link>
                </div>
            </div>
        </footer>
    );
}
