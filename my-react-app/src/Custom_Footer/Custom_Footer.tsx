export default function Custom_Footer() {
    return (
        <footer className="bg-[#5f5a5a] text-white flex justify-center align-items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col space-y-4">
                        <img src="../logo.webp" alt="" className="w-32 md:w-40 object-contain" />
                        <p className="text-sm sm:text-sm md:text-sm leading-relaxed">
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
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-home w-4"></i> Home</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-globe w-4"></i> Website Design</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-search w-4"></i> Search Engine Optimization</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-dollar w-4"></i>Paid Advertisements</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-book w-4"></i>Booking</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center">  <i className="fas fa-blog w-4"></i> Blog</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-link w-4"></i> Project Links</li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-3">Usefull Links</h2>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-user-shield w-4"></i> Privacy Policy</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-exclamation-triangle w-4"></i> Disclaimer</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-money-check-alt w-4"></i> Payment & Refund Policy</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-file-contract w-4"></i>Terms & Condition</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-headset w-4"></i>Support</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center">  <i className="fas fa-sitemap w-4"></i> Sitemap</li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-start"> <i className="fas fa-map-marker-alt w-4 mt-0.5"></i>30N Gould St Ste Sheridan Wyoming 82801</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-phone w-4"></i> +1 307-222-7899</li>
                            <li className="hover:cursor-pointer hover:text-[#ff6637] flex gap-3 items-center"> <i className="fas fa-envelope w-4"></i> info@itarrow.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-amber-50 mt-8 pt-4">
                    <p className="text-center text-sm">© 2025 IT Arrow Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
