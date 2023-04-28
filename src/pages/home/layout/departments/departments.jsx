import React, { useEffect } from "react";
import "/src/index.css";
import iconOne from "/src/assets/images/departments_icons/1.png";
import iconTwo from "/src/assets/images/departments_icons/2.png";
import iconThree from "/src/assets/images/departments_icons/3.png";
import iconFour from "/src/assets/images/departments_icons/4.png";
import iconFive from "/src/assets/images/departments_icons/5.png";
import iconSix from "/src/assets/images/departments_icons/6.png";
import iconSeven from "/src/assets/images/departments_icons/7.png";
import iconEight from "/src/assets/images/departments_icons/8.png";
import iconNine from "/src/assets/images/departments_icons/9.png";
import iconTen from "/src/assets/images/departments_icons/10.png";
import iconEleven from "/src/assets/images/departments_icons/11.png";
import iconTwelve from "/src/assets/images/departments_icons/12.png";
import iconThirteen from "/src/assets/images/departments_icons/13.png";
import iconFourteen from "/src/assets/images/departments_icons/14.png";
import iconFifteen from "/src/assets/images/departments_icons/15.png";

function Departments() {
  return (
    <div className="py-10 px-5 container mx-auto max-w-[1440px]">
      <div className="flex gap-3 px-10">
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
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>
        <p className="font-bold">دپارتمان ها</p>
      </div>
      <div className="grid xl:grid-cols-3">
        <div className="">
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img src={iconOne} alt="" className="w-13 h-12 mx-auto xs2:mx-0" />
            <div className="text-center xs2:text-start">
              <p>فناوری اطلاعات و ارتباطات</p>
              <p className="text-xs">
                با طی دوره های تخصصی و مهارتی در مرکز آموزشهای ICT مجتمع فنی
                تهران با دنیای IT همگام باشید.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img src={iconTwo} alt="" className="w-13 h-12 mx-auto xs2:mx-0" />
            <div className="text-center xs2:text-start">
              <p>کودک و نوجوان</p>
              <p className="text-xs">
                آموزش مفاهیم کاربردی و مهارتی،مطابق با استانداردهای روز دنیا
                برای کودکان و نوجوانان تا رسیدن به موفقیت
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img
              src={iconThree}
              alt=""
              className="w-13 h-12 mx-auto xs2:mx-0"
            />
            <div className="text-center xs2:text-start">
              <p>معماری</p>
              <p className="text-xs">
                مجری دوره های تخصصی دکوراسیون داخلی و معماری، نرم افزارهای تخصصی
                معماری باهدف بازارکار داخلی وبین المللی
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img src={iconFour} alt="" className="w-13 h-12 mx-auto xs2:mx-0" />
            <div className="text-center xs2:text-start">
              <p>مرکز همکاری های بین الملل</p>
              <p className="text-xs">
                اعطای مدارک معتبر بین المللی، مشاوره و اعزام تحصیلی، تورهای
                آموزشی بین المللی، ترجمه رسمی گواهی نامه های مجتمع فنی تهران و
                ...
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 mt-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img src={iconFive} alt="" className="w-13 h-12 mx-auto xs2:mx-0" />
            <div className="text-center xs2:text-start">
              <p>صنایع دریایی</p>
              <p className="text-xs">
                تربیت نیروی متخصص در زمینه غواصی صنعتی و امور دریایی مطابق با
                استاندارد جهانی
              </p>
            </div>
          </a>
        </div>
        <div className="">
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img src={iconSix} alt="" className="w-13 h-12 mx-auto xs2:mx-0" />
            <div className="text-center xs2:text-start">
              <p>علوم مهندسی</p>
              <p className="text-xs">
                پیشرو در اجرای آموزشهای تخصصی فنی-مهندسی
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img
              src={iconSeven}
              alt=""
              className="w-13 h-12 mx-auto xs2:mx-0"
            />
            <div className="text-center xs2:text-start">
              <p>زبانهای خارجی</p>
              <p className="text-xs">
                برگزاری دوره های زبان طبق استاندارد CEFR، دوره های آمادگی آزمون
                های بین المللی زبان، آنلاین و حضوری
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img
              src={iconEight}
              alt=""
              className="w-13 h-12 mx-auto xs2:mx-0"
            />
            <div className="text-center xs2:text-start">
              <p>فناوری مد و پوشاک</p>
              <p className="text-xs">
                پیشرو در ارائه دوره های آموزشی در صنعت مد و پوشاک همگام با نیاز
                های جامعه
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img src={iconNine} alt="" className="w-13 h-12 mx-auto xs2:mx-0" />
            <div className="text-center xs2:text-start">
              <p>تشریفات و گردشگری</p>
              <p className="text-xs">
                مجری برتر دوره های مدیریت کافی شاپ،آشپزی ملل،هتلداری و ... طبق
                بروزترین استانداردهای آموزشی و مهارتی
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 mt-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img src={iconTen} alt="" className="w-13 h-12 mx-auto xs2:mx-0" />
            <div className="text-center xs2:text-start">
              <p>تولید محتوا</p>
              <p className="text-xs">
                تولید محتوا را از مبتدی تا پیشرفته با ما بیاموزید تا به
                بازاریابی و برندسازی کسب و کارتان کمک نمایید
              </p>
            </div>
          </a>
        </div>
        <div className="">
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img
              src={iconEleven}
              alt=""
              className="w-13 h-12 mx-auto xs2:mx-0"
            />
            <div className="text-center xs2:text-start">
              <p>برق و الکترونیک</p>
              <p className="text-xs">
                پیشگام در آموزش دوره های تخصصی برق، الکترونیک و اتوماسیون صنعتی
                با بیش از چهار دهه تجربه
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img
              src={iconTwelve}
              alt=""
              className="w-13 h-12 mx-auto xs2:mx-0"
            />
            <div className="text-center xs2:text-start">
              <p>دانش سلامت</p>
              <p className="text-xs">
                پيشرو در آموزش دوره هاي تخصصي و مهارتي سلامت و زيبايي همراه با
                مدارك معتبر و بين المللي ، جهت ورود به بازار كار در ايران و خارج
                از كشور
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img
              src={iconThirteen}
              alt=""
              className="w-13 h-12 mx-auto xs2:mx-0"
            />
            <div className="text-center xs2:text-start">
              <p>هنر و سینما</p>
              <p className="text-xs">
                برگزاری دوره های تخصصی: طراحی و نقاشی، سینما، گویندگی،
                هنردکوراتیو، گرافیک دو بعدی و سه بعدی، موشن و ...
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img
              src={iconFourteen}
              alt=""
              className="w-13 h-12 mx-auto xs2:mx-0"
            />
            <div className="text-center xs2:text-start">
              <p>علوم مالی و حسابداری</p>
              <p className="text-xs">
                {" "}
                حسابداری، مالی، بورس، سرمایه گذاری و ارزهای دیجیتال کاربردی،
                بامنتور وهدف کارآفرینی و اشتغال
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-full py-2 px-5 my-5 xs2:m-5 block xs2:flex gap-2 bg-slate-100 xs2:bg-transparent border xs2:border-none rounded-lg transition-all duration-300 hover:bg-slate-200 hover:border-slate-400 hover:shadow-inner items-center">
            <img
              src={iconFifteen}
              alt=""
              className="w-13 h-12 mx-auto xs2:mx-0"
            />
            <div className="text-center xs2:text-start">
              <p>مدیریت و کسب و کار</p>
              <p className="text-xs">
                برگزارکننده دوره های آموزشی تخصصی مدیریت و مجری تحصیلات تکمیلی
                MBA و DBA
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Departments;
