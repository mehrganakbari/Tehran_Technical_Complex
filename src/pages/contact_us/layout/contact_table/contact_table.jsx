import React from "react";

function ContactTable() {
  return (
    <div className="container mx-auto mb-10 w-full px-2">
      <div className="text-sm rounded-lg shadow-md">
        <div className="bg-indigo-500 h-10 rounded-t-lg shadow-md">
          <p className="p-2 text-white">شماره های داخلی دپارتمان ها</p>
        </div>

        <div>
          <table className="w-full">
            <thead>
              <tr className="bg-white">
                <th className="pl-2 py-2 border border-indigo-300">
                  شماره داخلی
                </th>
                <th className="pl-2 py-2 border border-indigo-300">
                  عنوان دپارتمان
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2048</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان برق و الکترونیک
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">
                  2017-2018
                </td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان برون سازمانی
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2043</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان تشریفات
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2031</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان تولید محتوا
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2041</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان دانش و سلامت
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">
                  2032-2034-2036
                </td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان زبان های خارجی
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2004</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان علوم مهندسی
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">
                  1002-1004-1006
                </td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان فناوری اطلاعات ICT
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2051</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان فناوری مد و پوشاک
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">
                  2014-2015
                </td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان کودک و نوجوان
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2022</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان گل وگیاه
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2046</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان مالی و حسابداری
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2007</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان مدیریت
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2082</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان صنایع دریایی وغواصی
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">
                  2010-2011-2012-2013
                </td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان معماری
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">2028</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دپارتمان هنر و سینما
                </td>
              </tr>
              <tr className="bg-white">
                <td className="pl-2 py-2 border border-indigo-300">1020</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  دفتر امور نمایندگی ها
                </td>
              </tr>
              <tr className="bg-white rounded-b-lg">
                <td className="pl-2 py-2 border border-indigo-300">2038</td>
                <td className="pl-2 py-2 border border-indigo-300">
                  واحد امور بین الملل
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-indigo-500 h-10 rounded-b-lg shadow-md">
          <p class="p-2 text-white">مجتمع فنی تهران</p>
        </div>
      </div>
    </div>
  );
}

export default ContactTable;
