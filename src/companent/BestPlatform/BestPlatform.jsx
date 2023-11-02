import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

const BestPlatform = () => {
  return (
    <div className="absolute -bottom-[20%] z-20 hidden lg:flex justify-center w-full">
      <div className="w-6/12 mx-auto  bg-[#112E45] p-10 rounded-2xl shadow-xl flex justify-between items-center gap-10">
        <h1 className="text-4xl text-orange-500 font-bold">
          Best platform to learn eventbrite
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper w-[300px] mx-auto "
        >
          <SwiperSlide>
            <div className="py-6 px-16 rounded-xl bg-[#4886FF] w-full flex flex-col justify-center">
              <h1 className="flex justify-center">
              <img
                src="https://i.ibb.co/BzKCmmW/ctg-1.png"
                alt=""
                className="w-[100px]"
              />
              </h1>
              <h1 className="pt-4 text-white text-2xl font-bold text-center">Lenguage</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-6 px-16 rounded-xl bg-[#B5D56A] w-full flex flex-col justify-center">
            <h1 className="flex justify-center">
            <img
                src="https://i.ibb.co/KX4SdLf/ctg-2.png"
                alt=""
                className="w-[100px]"
              />
              </h1>
              
              <h1 className="pt-4 text-white text-2xl font-bold text-center">Business</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-6 px-16 rounded-xl bg-[#FF6F6F] w-full flex flex-col justify-center">
            <h1 className="flex justify-center">
            <img
                src="https://i.ibb.co/BqXL30j/ctg-3.png"
                alt=""
                className="w-[100px]"
              />
              </h1>
              <h1 className="pt-4 text-white text-2xl font-bold text-center">Literature</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestPlatform;
