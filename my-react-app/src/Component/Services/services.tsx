export default function Services() {
    return (
        <div className="outer bg-[#f5f5f5]">
            <div className="inner flex flex-col! gap-5   ">
                <div>
                    <h2 className="title">Our <span className="text-[#ff6637]">Top Notch </span> Services
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-3  w-full   justify-between">
                    <div className="w-full p-6 shadow-gray-500 bg-white shadow-md justify-between * rounded-2xl overflow-hidden hover:cursor-pointer flex flex-col items-center gap-3" >
                        <img className="h-[250px] object-cover hover:scale-102 rounded-2xl transition-transform duration-300" src="../web.jpg" alt="" />
                        <h2 className="headertwo">Website Development</h2>
                        <p className="description  text-center! w-[90%] ">We are one of the best website development agency in USA. Our premium design justifies
                             every single penny you invest on your website.</p>
                        <button className="buttonstyle hover:scale-105 transition-transform duration-300">Learn More</button>
                    </div>
                    <div className="w-full p-3 shadow-gray-500 bg-white shadow-md justify-between * rounded-2xl overflow-hidden hover:cursor-pointer flex flex-col items-center gap-3" >
                        <img className="h-[250px] object-cover hover:scale-102 rounded-2xl transition-transform duration-300" src="../seo.jpg" alt="" />
                        <h2 className="headertwo">Search Engine Optimization (SEO)</h2>
                        <p className="description  text-center!  w-[90%] ">We are one of the top SEO agencies in the USA. Our premium SEO strategies ensure your
                             investment boosts visibility and delivers sustainable growth.</p>
                        <button className="buttonstyle hover:scale-105 transition-transform duration-300">Learn More</button>
                    </div>
                    <div className="w-full p-3 shadow-gray-500 bg-white shadow-md justify-between * rounded-2xl overflow-hidden hover:cursor-pointer flex flex-col items-center gap-3" >
                        <img className="h-[250px] object-cover hover:scale-102 rounded-2xl transition-transform duration-300" src="../ads.jpg" alt="" />
                        <h2 className="headertwo">Paid Advertisements</h2>
                        <p className="description  text-center!  w-[90%] ">We are one of the top Paid Advertisement agencies in the USA.
                             Our strategies ensure your investment delivers maximum visibility and results.</p>
                        <button className="buttonstyle hover:scale-105 transition-transform duration-300">Learn More</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );

}