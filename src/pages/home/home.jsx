import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../../layout/navbar/navbar";
import AboutCards from "./layout/aboutCards/about_cards";
import Departments from "./layout/Departments/Departments";
import Footer from "../../layout/footer/footer";
import ImageOne from "/src/assets/images/one.jpeg";
import ImageTwo from "/src/assets/images/two.jpeg";
import ImageThree from "/src/assets/images/three.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  return (
    <body>
      <Navbar />
      <div className="container mx-auto max-w-[1440px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
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
      <Footer />
    </body>
  );
}

export default Home;
