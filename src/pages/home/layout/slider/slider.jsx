import React, { useEffect } from "react";
import "/src/index.css";

function Slider() {
  const rightArrowClick = () => {
    const sliderSect = document.querySelector(".sliderSect");
    sliderSect.scrollLeft += 1250;
  };
  const leftArrowClick = () => {
    const sliderSect = document.querySelector(".sliderSect");
    sliderSect.scrollLeft -= 1250;
  };

  return (
    <section className="relative container mx-auto max-w-[1250px] my-10">
      <div className="sliderSect flex scrollbar-none overflow-x-scroll scroll-smooth rounded-xl">
        <img
          src="https://mftcdn.ir/files//website/sliders//rNgsqa9njjOpI2s1.jpeg"
          alt=""
          className="w-[1300px] h-[550px] rounded-xl"
        />
        <img
          src="https://mftcdn.ir/files//website/sliders//wY3mPO7H9P9bhlFP.jpeg"
          alt=""
          className="w-[1300px] h-[550px] rounded-xl"
        />
        <img
          src="https://mftcdn.ir/files//website/sliders//NY5DL55vV9fNed5a.jpeg"
          alt=""
          className="w-[1300px] h-[550px] rounded-xl"
        />
      </div>
      {/* right Arrow */}
      <button
        onClick={rightArrowClick}
        className="bg-white shadow-lg p-2 absolute right-5 top-[251px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-Slate-600">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      {/* left Arrow */}
      <button
        onClick={leftArrowClick}
        className="bg-white shadow-lg p-2 absolute left-5 top-[251px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-Slate-700">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </section>
  );
}

export default Slider;
