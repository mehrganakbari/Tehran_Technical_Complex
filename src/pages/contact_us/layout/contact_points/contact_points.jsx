import React from "react";
import ContactTable from "../contact_table/contact_table";

function ContactPoints() {
  return (
    <div className="mx-auto container max-w-[1440px] text-center">
      <p className="font-bold text-lg mb-10 px-2">
        به مجتمع فنی تهران سعادت آباد{" "}
        <span className="text-indigo-500">(واحد مرکزی)</span> خوش آمدید
      </p>
      <p href="" className="font-bold text-lg text-orange-500">
        شماره های داخلی مربوط به دپارتمان های مجتمع فنی تهران
      </p>
      <p className="font-bold text-lg my-10">
        *شما میتوانید با شماره گیری شماره های 2729 یا 22090001 داخلی مورد نظر
        خود را وارد نمایید و به دپارتمان مورد نظر متصل شوید
      </p>
    </div>
  );
}

export default ContactPoints;
