import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../../../assets/images/img1.png";
import banner2 from "../../../assets/images/img.png";
import banner3 from "../../../assets/images/img2.png";

function Banner() {
  return (
    <div>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="w-[20px]">
            <img src={banner3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img src={banner1} alt="" />
          </SwiperSlide>
        </Swiper>
          <div className="absolute text-center top-16 md:top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] ">
            <h1 className="font-rancho font-bold text-white text-center md:text-[48px]">One Of the Finest Collection is Here</h1>
            <button className="md:text-3xl bg-[#92929297] text-[#FF6D60] border-2 px-4 py-1 md:px-6 md:py-2 mt-6 duration-500 hover:text-[#F7D060] hover:border-blue-500">Learn More</button>
          </div>
      </div>
    </div>
  );
}

export default Banner;
