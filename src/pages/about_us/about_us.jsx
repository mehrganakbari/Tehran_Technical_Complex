import React from "react";
import Navbar from "../../layout/navbar/navbar";
import History from "./layout/history/history";
import Honors from "./layout/honors/honors";
import Ideals from "./layout/ideals/ideals";

function AboutUs() {
  return (
    <body>
      <Navbar />
      <div className="px-5 mx-auto container max-w-[1440px]">
        <div className="flex gap-3 mt-10 mb-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
          <span className="font-medium text-xl">معرفی مجتمع فنی تهران</span>
        </div>
        <video controls poster="" className="w-full mb-10">
          <source src="https://www.aparat.com/v/O7G8f" />
        </video>
        <History />
        <Honors />
        <Ideals />
      </div>
    </body>
  );
}

export default AboutUs;
