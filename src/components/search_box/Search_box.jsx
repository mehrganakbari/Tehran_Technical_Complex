import React, { useEffect } from "react";
import "/src/index.css";

function SearchBox() {
  return (
    <div className="flex gap-5">
      <div className="flex gap-2 items-center border border-indigo-500 rounded-full px-4 w-full">
        <button id="searchBoxBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 m-2 text-indigo-500">
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <input
          id="searchBoxInput"
          type="text"
          placeholder="جستجوی  نام رشته، درس و..."
          className="w-full py-2 text-sm placeholder:text-sm rounded-full px-2 placeholder:px-2 focus:outline-none"
        />
      </div>
      <button id="filterBtn" className="border border-indigo-500 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 m-2 text-indigo-500">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBox;
