import React from 'react'
import '/src/index.css'

function Slider() {
  const sliderSect = document.querySelector('.sliderSect')
  const rightArrow = document.querySelector('#rightArrow')
  const leftArrow = document.querySelector('#leftArrow')

  rightArrow.addEventListener('click', function () {
      sliderSect.scrollLeft += 1250
  })

  leftArrow.addEventListener('click', function () {
      sliderSect.scrollLeft -= 1250
  })
    return (
      <section class="relative container mx-auto max-w-[1250px] my-10">
        <div class="sliderSect flex overflow-x-scroll scrollbar-none scroll-smooth rounded-xl">
            <img src="https://mftcdn.ir/files//website/sliders//rNgsqa9njjOpI2s1.jpeg" alt=""
                class="w-[1300px] h-[550px] rounded-xl" />
            <img src="https://mftcdn.ir/files//website/sliders//wY3mPO7H9P9bhlFP.jpeg" alt=""
                class="w-[1300px] h-[550px] rounded-xl" />
            <img src="https://mftcdn.ir/files//website/sliders//NY5DL55vV9fNed5a.jpeg" alt=""
                class="w-[1300px] h-[550px] rounded-xl" />
        </div>
        {/* right Arrow */}
        <button id="rightArrow"
            class="bg-white bg-opacity-50 rounded-full border border-slate-500 p-2 absolute right-5 top-[251px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-10 h-10 text-Slate-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
        {/* left Arrow */}
        <button id="leftArrow"
            class="bg-white bg-opacity-50 rounded-full border border-slate-500 p-2 absolute left-5 top-[251px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-10 h-10 text-Slate-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
      </section>
    )
  }
  
export default Slider  