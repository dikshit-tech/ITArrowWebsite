import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
export function ClientSlider() {
    return (
        <div className="md:w-full max-w-[1160px] p-2">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}        // 5 items per slide
                spaceBetween={30}        // gap between slides
                loop={true}              // infinite loop
                autoplay={{ delay: 3000 }} // auto-play every 3 seconds
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../bestastrologer.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../fivestardschool.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../fivestars.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../huview.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../liddlebites.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../openwindows.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../raingutters.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../shestyl.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../takeaseat.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../temmytop.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-100 border border-[#ff6637] rounded-lg overflow-hidden">
                        <img src="../thegametruck.png" className="h-40 object-contain " alt="" />
                    </div>
                </SwiperSlide>


                {/* here we are adding the image */}


            </Swiper>

        </div>
    );
}