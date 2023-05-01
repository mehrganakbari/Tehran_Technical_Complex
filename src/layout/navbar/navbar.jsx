import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "/src/index.css";
import logo from "/src/assets/images/mftlogo.png";

function Navbar() {
  const handleclick = () => {
    const mobileMenu = document.querySelector(".mobileMenu");
    mobileMenu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-white py-3 px-5 border-b border-slate-200 shadow">
      <div className="mx-auto container max-w-[1440px]">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="">
            <img src={logo} alt="logoImage" className="w-28" />
          </a>
          {/* links */}
          <ul className="hidden sm:flex">
            <Link to="/">
              <li className="py-4 px-5 text-slate-500 transition-all duration-300 hover:bg-slate-50 hover:shadow hover:border-b hover:border-slate-400">
                خانه
              </li>
            </Link>
            <Link to="/shop">
              <li className="py-4 px-5 text-slate-500 transition-all duration-300 hover:bg-slate-50 hover:shadow hover:border-b hover:border-slate-400">
                محصولات
              </li>
            </Link>
            <Link to="/about-us">
              <li className="py-4 px-5 text-slate-500 transition-all duration-300 hover:bg-slate-50 hover:shadow hover:border-b hover:border-slate-400">
                درباره ما
              </li>
            </Link>
            <Link to="contact-us">
              <li className="py-4 px-5 text-slate-500 transition-all duration-300 hover:bg-slate-50 hover:shadow hover:border-b hover:border-slate-400">
                تماس با ما
              </li>
            </Link>
          </ul>
          {/* search Box -> desktop */}
          <div className="w-1/3 bg-Stone-100 px-3 py-2 rounded-lg border border-Gray-200 items-center hidden lg2:flex gap-2">
            <button className="searchSubmitBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none">
                <path
                  stroke="#222F5D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.417 24.5c6.12 0 11.083-4.962 11.083-11.083S19.538 2.333 13.417 2.333 2.333 7.296 2.333 13.417c0 6.121 4.963 11.083 11.084 11.083ZM25.667 25.667l-2.334-2.334"
                />
              </svg>
            </button>
            <input
              type="text"
              id="searchInput"
              placeholder="جستجوی  نام رشته، درس و..."
              className="w-full py-2 bg-Stone-100 text-xs text-Slate-700 placeholder:text-xs placeholder:text-Gray-300 focus:outline-none"
            />
          </div>
          {/* hamburger menu */}
          <button onClick={handleclick} id="menuBtn" className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* search Box -> tablet */}
        <div className="w-full mt-3 bg-Stone-100 px-3 py-2 rounded-lg border border-Gray-200 items-center hidden sm:flex lg2:hidden gap-2">
          <button className="searchSubmitBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none">
              <path
                stroke="#222F5D"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13.417 24.5c6.12 0 11.083-4.962 11.083-11.083S19.538 2.333 13.417 2.333 2.333 7.296 2.333 13.417c0 6.121 4.963 11.083 11.084 11.083ZM25.667 25.667l-2.334-2.334"
              />
            </svg>
          </button>
          <input
            type="text"
            id="searchInput"
            placeholder="جستجوی  نام رشته، درس و..."
            className="w-full py-2 bg-Stone-100 text-xs text-Slate-700 placeholder:text-xs placeholder:text-Gray-300 focus:outline-none"
          />
        </div>
        <div className="mobileMenu hidden">
          <ul className="text-center">
            <a href="">
              <li className="py-4 px-5 text-slate-500 transition-all duration-300 hover:bg-slate-50 hover:shadow hover:border-b hover:border-slate-400">
                خانه
              </li>
            </a>
            <a href="">
              <li className="py-4 px-5 text-slate-500 transition-all duration-300 hover:bg-slate-50 hover:shadow hover:border-b hover:border-slate-400">
                محصولات
              </li>
            </a>
            <a href="">
              <li className="py-4 px-5 text-slate-500 transition-all duration-300 hover:bg-slate-50 hover:shadow hover:border-b hover:border-slate-400">
                درباره ما
              </li>
            </a>
            <a href="">
              <li className="py-4 px-5 text-slate-500 transition-all duration-300 hover:bg-slate-50 hover:shadow hover:border-b hover:border-slate-400">
                تماس با ما
              </li>
            </a>
          </ul>
          {/* search Box -> tablet */}
          <div className="w-full mt-3 bg-Stone-100 px-3 py-2 rounded-lg border border-Gray-200 items-center flex gap-2">
            <button className="searchSubmitBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none">
                <path
                  stroke="#222F5D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.417 24.5c6.12 0 11.083-4.962 11.083-11.083S19.538 2.333 13.417 2.333 2.333 7.296 2.333 13.417c0 6.121 4.963 11.083 11.084 11.083ZM25.667 25.667l-2.334-2.334"
                />
              </svg>
            </button>
            <input
              type="text"
              id="searchInput"
              placeholder="جستجوی  نام رشته، درس و..."
              className="w-full py-2 bg-Stone-100 text-xs text-Slate-700 placeholder:text-xs placeholder:text-Gray-300 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
