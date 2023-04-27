import React, { useEffect } from "react";
import "/src/index.css";
import ImplementationMethods from "/src/assets/images/p3.svg";
import RequestDocuments from "/src/assets/images/p2.svg";
import ActiveAgencies from "/src/assets/images/p4.svg";
import educationalCalendar from "/src/assets/images/p1.svg";

function AboutCards() {
  return (
    <div className="bg-[#FAFAFA] py-10 px-5">
      <div className="container mx-auto max-w-[1250px] grid grid-cols-4 gap-5">
        <div className="">
          <div className="mx-auto w-72 py-5 px-3 bg-white border border-slate-500 rounded-xl">
            <img src={educationalCalendar} alt=""  className="mx-auto"/>
            <p className="text-center py-2 font-bold text-xl">تقویم آموزشی</p>
            <p className="text-center px-2">اولین و برترین آموزشگاه خصوصی در کشور ایران</p>
          </div>
        </div>
        <div className="">
        <div className="mx-auto w-72 py-5 px-3 bg-white border border-slate-500 rounded-xl">
            <img src={ActiveAgencies} alt=""  className="mx-auto"/>
            <p className="text-center py-2 font-bold text-xl">نمایندگی های فعال</p>
            <p className="text-center px-2">با بیش از 50 نمایندگی معتبر در سرتاسر ایران و کشورهای همسایه</p>
          </div>
        </div>
        <div className="">
        <div className="mx-auto w-72 py-5 px-3 bg-white border border-slate-500 rounded-xl">
            <img src={RequestDocuments} alt=""  className="mx-auto"/>
            <p className="text-center pt-3 pb-2 font-bold text-xl">استعلام مدارک</p>
            <p className="text-center px-2 mb-2">استعلام آنلاین کلیه مدارک به صورت تاییدی و الکترونیکی</p>
          </div>
        </div>
        <div className="">
        <div className="mx-auto w-72 py-5 px-3 bg-white border border-slate-500 rounded-xl">
            <img src={ImplementationMethods} alt=""  className="mx-auto"/>
            <p className="text-center py-2 font-bold text-xl">شیوه های اجرا</p>
            <p className="text-center py-1 px-2">4 شیوه برگزاری دوره ها در مجتمع فنی تهران</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCards;
