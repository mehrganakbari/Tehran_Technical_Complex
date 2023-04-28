import React, { useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "/src/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import facebookIcon from "/src/assets/images/footer/icons/facebook.png";
import instagramIcon from "/src/assets/images/footer/icons/instagram.png";
import telegramIcon from "/src/assets/images/footer/icons/telegram.png";
import twitterIcon from "/src/assets/images/footer/icons/twitter.png";
import whatsappIcon from "/src/assets/images/footer/icons/whatsapp.png";
import youtubeIcon from "/src/assets/images/footer/icons/youtube.png";
import picOne from "/src/assets/images/footer/FooterOne.png";
import picTwo from "/src/assets/images/footer/FooterTwo.png";
import picThree from "/src/assets/images/footer/FooterThree.png";
import picFour from "/src/assets/images/footer/FooterFour.png";
import picFive from "/src/assets/images/footer/FooterFive.png";
import picSix from "/src/assets/images/footer/FooterSix.png";
import picSeven from "/src/assets/images/footer/FooterSeven.png";
import picEight from "/src/assets/images/footer/FooterEight.png";
import picNine from "/src/assets/images/footer/FooterNine.png";

function Footer() {
  return (
    <footer>
      {/* top section footer */}
      <div className="bg-[#ECEFF1] py-10 text-center">
        <p className="text-xl font-bold">نیاز به مشاوره دارید؟</p>
        <p className="my-5 px-5">همکاران ما آماده پاسخگویی به سوالات شما می باشند</p>
        <select
          name="departments_informations"
          id="departments_informations"
          className="mx-auto bg-white py-2 pr-2 pl-7 rounded-3xl">
          <option>رشت ← ۳۴۳۱ - ۰۱۳</option>
          <option>پیروزی ← ۷۷۴۱۹۱۹۸ - ۰۲۱</option>
          <option>نیاوران ← ۲۲۸۳۸۲۸۸ - ۰۲۱</option>
          <option>ساوه ← ۴۲۲۰۰۱۰۶ - ۰۸۶</option>
          <option>اصفهان ← ۳۴۴۴۴۰۳۰ - ۰۳۱</option>
          <option>سیدخندان ← ۲۲۸۶۸۶۷۰ - ۰۲۱</option>
          <option>انقلاب ← ۶۶۹۳۳۳۷۹ - ۰۲۱</option>
          <option>تهرانپارس ← ۷۷۸۸۹۹۳۷ - ۰۲۱</option>
          <option>میرداماد ← ۲۲۲۲۲۸۱۶ - ۰۲۱</option>
          <option>ونک ← ۸۸۸۸۹۷۹۶ - ۰۲۱</option>
          <option>نارمک ← ۷۷۲۰۳۰۶۰ - ۰۲۱</option>
          <option>البرز ← ۳۴۱۲۷ - ۰۲۶</option>
          <option>قیطریه ← ۲۲۷۶۸۹۸۰ - ۰۲۱</option>
          <option>رودهن ← ۷۶۵۰۸۵۶۲ - ۰۲۱</option>
          <option>پرند ← ۵۶۷۹۳۷۱۶ - ۰۲۱</option>
          <option>شهریار ← ۶۵۲۵۰۱۶۰ - ۰۲۱</option>
          <option>ورامین ← ۳۶۲۸۳۱۹۱ - ۰۲۱</option>
          <option>یزد ← ۰۳۵-۳۷۲۸۲۳۹۸</option>
          <option>اراک ← ۳۲۲۳۶۵۶۲ - ۰۸۶</option>
          <option>بروجرد ← ۴۲۵۰۰۶۹۴ - ۰۶۶</option>
          <option>سمنان ← ۳۳۴۴۱۴۵۵-۷ - ۰۲۳</option>
          <option>بابل ← ۳۲۲۵۱۸۰۰ - ۰۱۱</option>
        </select>
      </div>
      {/* bottom section footer */}
      <div className="bg-[#263238] py-20">
        <div className="mx-auto container max-w-[1440px] grid lg:grid-cols-2 xl:grid-cols-5 px-5">
          <div className="col-span-1 xl:col-span-2 px-5 mb-10 text-center lg:text-start">
            <p className="text-white font-bold text-2xl mb-10">
              مجتمع فنی تهران
            </p>
            <p className="text-white font-bold text-lg my-3">آدرس دفتر مرکزی</p>
            <p className="text-white">
              سعادت آباد، بالاتر از ميدان كاج، خيابان دوم (شهيد عبقری)، بلوار
              بهزاد شمالی، نبش باغستان
              <br />
              شماره ۱۲ | ۶-۲۲۰۹۰۰۰۱ ۰۲۱
            </p>
            {/* icons */}
            <div className="flex justify-center lg:justify-start gap-5 mt-10">
              <a href="">
                <img src={facebookIcon} alt="" className="w-7 h-7" />
              </a>
              <a href="">
                <img src={instagramIcon} alt="" className="w-7 h-7" />
              </a>
              <a href="">
                <img src={telegramIcon} alt="" className="w-7 h-7" />
              </a>
              <a href="">
                <img src={twitterIcon} alt="" className="w-7 h-7" />
              </a>
              <a href="">
                <img src={whatsappIcon} alt="" className="w-7 h-7" />
              </a>
              <a href="">
                <img src={youtubeIcon} alt="" className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="col-span-1 text-white px-5 text-center lg:text-start">
            <p className="text-lg font-bold">بخش ها</p>
            <ul className="my-10">
              <a href="">
                <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">انتشارات</span>
                </li>
              </a>
              <a href="">
              <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">وبلاگ دکتر سعادت</span>
                </li>
              </a>
              <a href="">
              <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">استعلام گواهینامه</span>
                </li>
              </a>
              <a href="">
              <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">کاریابی آنلاین (کارتلنت)</span>
                </li>
              </a>
              <a href="">
              <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">واحد سرمایه های انسانی</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="col-span-1 text-white px-5 text-center lg:text-start">
          <p className="text-lg font-bold">درباره ما</p>
            <ul className="my-10">
              <a href="">
                <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">انتقادات ،پیشنهادات و اعتراضات</span>
                </li>
              </a>
              <a href="">
                <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">قوانین و مقررات</span>
                </li>
              </a>
              <a href="">
                <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">تماس با ما</span>
                </li>
              </a>
              <a href="">
                <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">راهنمای سامانه مجازی</span>
                </li>
              </a>
              <a href="">
                <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">معرفی مجتمع فنی تهران</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="col-span-1 text-white px-5 text-center lg:text-start">
          <p className="text-lg font-bold">آموزش ها</p>
            <ul className="my-10">
            <a href="">
                <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">آموزش های سازمانی</span>
                </li>
              </a>
              <a href="">
                <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">امور بین الملل</span>
                </li>
              </a>
              <a href="">
                <li className="flex gap-2 items-center my-1 py-1 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span className="text-sm">امور نمایندگی ها</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="mx-auto container max-w-[1440px] mt-16">
          <div className="hidden xl:grid grid-cols-9 gap-8 py-5 px-10">
            <div className="bg-gradiat px-2 py-3 rounded-xl">
              <img src={picOne} alt="" />
            </div>
            <div className="bg-gradiat px-2 py-3 rounded-xl">
              <img src={picTwo} alt="" />
            </div>
            <div className="bg-gradiat px-2 py-3 rounded-xl">
              <img src={picThree} alt="" />
            </div>
            <div className="bg-gradiat px-2 py-3 rounded-xl">
              <img src={picFour} alt="" />
            </div>
            <div className="bg-gradiat px-2 py-3 rounded-xl">
              <img src={picFive} alt="" />
            </div>
            <div className="bg-gradiat px-2 py-3 rounded-xl">
              <img src={picSix} alt="" />
            </div>
            <div className="bg-gradiat px-2 py-3 rounded-xl">
              <img src={picSeven} alt="" />
            </div>
            <div className="bg-gradiat px-2 py-3 rounded-xl">
              <img src={picEight} alt="" />
            </div>
            <div className="bg-gradiat px-2 py-3 rounded-xl">
              <img src={picNine} alt="" />
            </div>
          </div>
          <div className="px-10 pb-5 hidden sm:block xl:hidden">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={5}
              navigation={true}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picOne} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picTwo} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picThree} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picFour} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picFive} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picSix} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picSeven} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picEight} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picNine} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="px-10 pb-5 sm:hidden">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picOne} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picTwo} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picThree} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picFour} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picFive} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picSix} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picSeven} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picEight} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradiat px-2 py-3 rounded-xl">
                  <img src={picNine} alt="" className="mx-auto" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="text-white text-center px-10">
            استفاده از مطالب سایت مجتمع فنی فقط برای مقاصد غیرتجاری و با ذکر
            منبع بلامانع است. کلیه حقوق این سایت متعلق به مجتمع فنی تهران می
            باشد.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
