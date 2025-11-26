import CallButton from "../../small component/CallButton";

export default function ExtendAboutUs() {
    return (
        <div className="outer">
            <div className="inner">
                <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
                    <div className="w-full  md:w-[50%]">
                        <img src="../banner1.jpg" className="  md:h-[500px] md:w-[500px] object-cover border-10 rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%] border-[#ff6637] shadow-[#727272] shadow-lg" alt="" />
                        <div className="flex flex-col md:flex-row m-5 p-5 justify-start items-center">
                            <p className="slogan">Do You Want to Learn More ? </p>
                            <CallButton/>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:w-[50%] gap-3">
                        <p className="slogan">Our Story</p>
                        <h2 className="title">We Have More Than 5 Years of Experience</h2>
                        <p className="description">At IT Arrow Technologies LLC, we specialize in delivering high-impact website designs and result-driven SEO strategies. 
                            Our team combines creative design, modern technology, and proven digital marketing techniques to strengthen your online presence. 
                            From intuitive websites to powerful optimization solutions, we ensure your brand stands out in today’s competitive digital marketplace.
                            With a commitment to innovation, transparency, and client satisfaction, we help businesses across the USA unlock their full online potential.</p>
                            <div className="border-t border-[#ff6637] w-full grid grid-cols-1 md:grid-cols-3 pt-5 mt-5! md:gap-2 gap-3">
                                <div className=" rounded-lg shadow-xs shadow-[#ff6637]  text-center p-2 flex flex-col justify-center items-center">
                                    <p className="title">5+</p>
                                    <p className="headertwo leading-none!">Years of Experience</p>
                                </div>
                                 <div className=" rounded-lg shadow-xs shadow-[#ff6637]  text-center p-2 flex flex-col justify-center items-center">
                                    <p className="title">150+</p>
                                    <p className="headertwo leading-none!">Project Deliveries </p>
                                </div>
                              <div className=" rounded-lg shadow-xs shadow-[#ff6637]  text-center p-2 flex flex-col justify-center items-center">
                                    <p className="title">100+</p>
                                    <p className="headertwo leading-none!">Clients Served</p>
                                </div>
                                

                            </div>
                    </div>

                </div>
            </div>
        </div>
    );
}