import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "./Carousal.css";
function Carousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[EffectCoverflow]}
        className="mySwiper z-50"
      >
        <SwiperSlide>
          <img src="/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
