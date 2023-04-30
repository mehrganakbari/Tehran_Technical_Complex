import React from "react";
import Navbar from "../../layout/navbar/navbar";
import DepartmentInfos from "./layout/department_infos/departmet_infos";
import Video from "../../components/video/video";
import ContactPoints from "./layout/contact_points/contact_points";

function ContactUs() {
  return (
    <body>
      <Navbar />
      <DepartmentInfos />
      <div className="px-3"><Video /></div>
      <ContactPoints />
    </body>
  );
}

export default ContactUs;
