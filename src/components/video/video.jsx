import React from "react";
import VideoPoster from "/src/assets/images/poster.jpg";

function Video() {
  return (
    <div className="mx-auto container max-w-[1440px]">
      <video controls poster={VideoPoster} className="w-full mb-10 rounded-xl">
        <source src="https://www.aparat.com/v/O7G8f" />
      </video>
    </div>
  );
}

export default Video;
