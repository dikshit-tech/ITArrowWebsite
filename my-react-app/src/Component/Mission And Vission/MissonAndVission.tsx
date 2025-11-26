export default function MissonAndVission() {
    return (
        <div className="outer bg-[#f9f9f9] " >
                <div className="inner overflow-hidden " >
                        <div className=" w-full  flex flex-col gap-5">
                                <p className="slogan">Mission And Vission</p>
                                <h2 className="title">Driving Digital Growth & Shaping the Future</h2>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="border flex flex-col gap-4 rounded-lg p-2 border-[#ff6637]">
                                    <h2 className="headertwo text-[#727272]!">Our Mission</h2>
                                    <p className="description md:text-center!">At IT Arrow, our mission is to empower businesses in the USA and around the world with reliable, cutting-edge digital solutions.
                                         We aim to help brands make the most of the internet by improving visibility, enhancing engagement, and driving measurable growth.</p>
                                         <p className="description md:text-center!">Through our expertise in web development, managed VPS hosting, SEO, SMM, and digital strategy, we deliver solutions that create long-term success and transform the way our clients connect with their audience.</p>
                                </div>
                               <div className="border flex flex-col gap-4 rounded-lg p-2 border-[#ff6637]">
                                    <h2 className="headertwo text-[#727272]!">Our Vission</h2>
                                    <p className="description md:text-center!">Our vision is to become a leading and trusted web development and digital marketing company in the United States—recognized for our innovation, creativity, exceptional quality, and unmatched customer support.</p>
                                         <p className="description md:text-center!">We strive to build a digital ecosystem where businesses grow faster, engage better, and communicate more effectively through seamless, meaningful online experiences.</p>
                                </div>
                               </div>
                                
                        </div>
                        <div>
                            <img src="../missionandvission.png" alt="" />
                        </div>
                </div>
        </div>
    );
}