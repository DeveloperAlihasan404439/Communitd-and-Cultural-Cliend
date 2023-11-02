import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[80vh] w-full"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/djKcfPm/banner.jpg"
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Tk7TPgv/banner-6.jpg"
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/kG0k2rb/bannge-3.jpg"
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/fQ7qnJx/banner-4.jpg"
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/LkTqg4W/banner-5.jpg"
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute z-20 top-0 left-0 bg-[#31536d63] w-full h-full flex justify-center items-center">
        <div>
          <h1 className="text-orange-600 text-center text-3xl lg:text-5xl pb-7 font-semibold">
            Eventbrite is a education <br />{" "}
            <span className="text-white">in website</span>
          </h1>
          <p className="w-11/12 lg:w-9/12 mx-auto text-white text-center text-sm md:text-lg lg:text-xl">
            Eventbrite Education is your gateway to a world of learning.
            Discover workshops, courses, <br /> seminars, and more. Enhance your
            skills, explore interests, or delve into academics. Find, register,
            and customize your learning journey with ease. Join a community of
            lifelong learners and embark <br /> on a path of growth with
            Eventbrite Education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
