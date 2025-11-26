import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";

export default function Caurosel() {
    return (
       
         <div className="md:w-[1160px] carousel p-2 overflow-hidden">
            <Swiper className=""
                // modules={[Autoplay]}
                slidesPerView={1}        // 3 items per slide
                spaceBetween={20}        // gap between slides
                loop={true}              // infinite loop
                autoplay={{ delay: 3000 }} // auto-play every 3 seconds
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
              
                <SwiperSlide >
                    <div className="bg-gray-100 border border-[#ff6637] p-4 rounded-lg  text-center flex flex-col justify-between gap-7 items-center w-full md:h-100">
                        <div className="flex justify-center items-center ">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star-half text-yellow-400"></i>
                        </div>
                        <p className="description text-center!">"We partnered with IT Arrow Technologies for a complete website overhaul.
                            The team was fantastic to work with, delivering a stunning website that is not only visually appealing but also highly functional.
                            We highly recommend their services to any business looking to enhance their online presence."</p>
                        <div className="flex flex-col justify-center gap-4 items-center">
                            <img src="../user1.png" className="h-16" alt="" />
                            <p className="slogan">John Tylin</p>
                        </div>
                    </div>
                </SwiperSlide>

               
                 
                <SwiperSlide>
                    <div className="bg-gray-100 p-4 border border-[#ff6637] rounded-lg text-center flex flex-col justify-between gap-7 items-center md:h-100">
                        <div className="flex justify-center items-center ">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                        </div>
                        <p className="description text-center!">"Working with IT Arrow Technologies has been a game-changer for our business. Our website now looks amazing and functions flawlessly, and our search engine rankings have improved dramatically. They are professional, responsive, and truly experts in their field."</p>
                        <div className="flex flex-col justify-center gap-4 items-center">
                            <img src="../user2.png" className="h-16" alt="" />
                            <p className="slogan">Ema Imli</p>
                        </div>
                    </div>
                </SwiperSlide>

               
                <SwiperSlide>
                    <div className="bg-gray-100 p-4 border border-[#ff6637] rounded-lg text-center flex flex-col justify-between gap-7 items-center md:h-100">
                        <div className="flex justify-center items-center ">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star-half text-yellow-400"></i>
                        </div>
                        <p className="description text-center!">"IT Arrow Technologies exceeded our expectations in every way. Their website development team built a beautiful, intuitive site that has received great feedback from our customers. The SEO services have significantly boosted our visibility online, leading to increased leads and sales."</p>
                        <div className="flex flex-col justify-center gap-4 items-center">
                            <img src="../user3.png" className="h-16" alt="" />
                            <p className="slogan">Daniel Banton</p>
                        </div>
                    </div>
                </SwiperSlide>

               
                <SwiperSlide>
                    <div className="bg-gray-100 p-4 border border-[#ff6637] rounded-lg text-center flex flex-col justify-between gap-7 items-center md:h-100">
                        <div className="flex justify-center items-center ">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                        </div>
                        <p className="description text-center!">"IT Arrow Technologies transformed our online presence! Their website development team created a sleek, user-friendly site that perfectly represents our brand. Plus, their SEO services have significantly increased our organic traffic. We couldn't be happier with the results and highly recommend their services."</p>
                        <div className="flex flex-col justify-center gap-4 items-center">
                            <img src="../user4.png" className="h-16" alt="" />
                            <p className="slogan">Jack Paul</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );




}
