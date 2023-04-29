import React from "react";
import AwardsPic from "/src/assets/images/about_us/awards.png"

function Awards() {
  return (
    <div className="text-center pb-10 px-5">
      <p className="text-xl font-medium text-indigo-900">افتخارات مجتمع فنی تهران</p>
      <ul className="">
        <li className="font-bold mt-5 mb-10">دارنده جایزه نوبل کارآفرینی از موسسه نوبل اروپا</li>
        <li className="font-bold mt-5 mb-10">دارنده گواهی مدیریت شایسته از مرکز*EBCL اتحادیه اروپا</li>
        <li className="font-bold mt-5 mb-10">ممتاز ترین موسسه آموزشی طی دو دوره با ارزیابی اداره کل فنی و حرفه ای استان تهران</li>
        <li className="font-bold mt-5 mb-10">برترین و اثر گذار ترین مرکز آموزشی کشور طی 3 دوره با ارزیابی دبیرخانه جایزه ملی آموزش و توسعه منابع انسانی کشور</li>
        <li className="font-bold mt-5 mb-10">برترين مؤسسه آموزشي كشور در جشنواره فاوای دولت (سازمان ارتباطات و فناوری اطلاعات)</li>
        <li className="font-bold mt-5 mb-10">دارنده گواهینامه حمایت از حقوق مصرف کنندگان</li>
        <li className="font-bold mt-5 mb-10">برترين مؤسسه آموزشي كشور در جشنواره ايتا</li>
        <li className="font-bold mt-5 mb-10">برترين برند آموزشي در بخش همايش برترين برندهاي آموزشی</li>
        <li className="font-bold mt-5 mb-10">شركت برتر آموزشي در همايش ملي TOPEX</li>
        <li className="font-bold mt-5 mb-10">مؤسسه آموزشي خلاق و نوآور در جشنواره ملي ايران خلاق</li>
        <li className="font-bold mt-5 mb-10">برترين مؤسسه آموزشی كارآفرينی در جشنواره ملي مديريت در كارآفرينی و فناوری اطلاعات</li>
        <li className="font-bold mt-5 mb-10">برگزيده سه دوره در جشنواره ستاره های فناوری</li>
        <li className="font-bold mt-5 mb-10">دارنده گواهينامه بين المللی برترين كيفيت مديريت از اروپا گرید A</li>
        <li className="font-bold mt-5 mb-10">برگزيده جشنواره های ملی طرح سپاس</li>
        <li className="font-bold mt-5 mb-10">برگزيده چهارمين اجلاس سران و مديران عالی رتبه كشور</li>
        <li className="font-bold mt-5 mb-10">برگزيده جشنواره رسانه هاي ديجيتال</li>
        <li className="font-bold mt-5 mb-10">برگزيده سه دوره جشنواره روابط عمومي های برتر</li>
        <li className="font-bold mt-5 mb-10">برگزيده سومين جشنواره دو سالانه جايزه ملی فناوری (ايتا)</li>
      </ul>
    <img src={AwardsPic} alt="" className="mx-auto w-full" />
    </div>
  );
}

export default Awards;
