import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutCards from "./layout/aboutCards/about_cards";
import Departments from "./layout/Departments/Departments";
import ImageOne from "/src/assets/images/one.jpeg";
import ImageTwo from "/src/assets/images/two.jpeg";
import ImageThree from "/src/assets/images/three.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

function Home() {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          <SwiperSlide>
            <img src={ImageOne} alt="" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageTwo} alt="" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageThree} alt="" className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
      <AboutCards />
      <Departments />
    </>
  );
}

export default Home;
