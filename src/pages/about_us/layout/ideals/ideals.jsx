import React from "react";
import Mission from "/src/assets/images/about_us/mis.jpg";
import Values from "/src/assets/images/about_us/value.jpg";
import Vision from "/src/assets/images/about_us/vision.jpg";
function Ideals() {
  return (
    <div className="pb-10 px-5 text-center">
      <div className="w-full">
        <div className="w-full flex justify-center gap-2 items-center">
          <img src={Vision} alt="" className="w-12 h-12 rounded-full" />
          <p className="text-xl font-medium text-indigo-900">چشم انداز</p>
        </div>
        <p className="font-bold mt-5 mb-10">
          مجتمع فنی تهران، پیشرو در حوزه مهارت آموزی و توسعه اشتغال مولد، به
          روزی می اندیشد که هر خانواده ایرانی از تجربه عالی خدمات و محصولات آن
          برخوردار شود.
        </p>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-center gap-2 items-center">
          <img src={Mission} alt="" className="w-12 h-12 rounded-full" />
          <p className="text-xl font-medium text-indigo-900">مأموریت</p>
        </div>
        <p className="font-bold mt-5 mb-10">
          مجتمع فنی تهران ماموریت خود را توسعه اشتغال و کار آفرینی از طریق آموزش
          های مهارت محور می داند.
        </p>
      </div>
      <div className="">
        <div className="w-full flex justify-center gap-2 items-center">
          <img src={Values} alt="" className="w-12 h-12 rounded-full" />
          <p className="text-xl font-medium text-indigo-900">
            ارزشهای بنیادین مجتمع فنی تهران
          </p>
        </div>
        <ul className="">
          <li className="font-bold mt-5 mb-10">اتکال به خداوند متعال</li>
          <li className="font-bold mt-5 mb-10">اصالت کار و کرامت کارکنان</li>
          <li className="font-bold mt-5 mb-10">خلق تجربه عالی ذینفعان</li>
          <li className="font-bold mt-5 mb-10">توسعه اشتغال و کارآفرینی</li>
          <li className="font-bold mt-5 mb-10">مسولیت های اجتماعی</li>
          <li className="font-bold mt-5 mb-10">شایسته سالاری</li>
          <li className="font-bold mt-5 mb-10">
            توسعه و بالندگی کشورمان ایران
          </li>
          <li className="font-bold mt-5 mb-10">یادگیری مستمر</li>
          <li className="font-bold mt-5 mb-10">خلاقیت و نو آوری</li>
        </ul>
      </div>
      <img src="" alt="" />
    </div>
  );
}

export default Ideals;
