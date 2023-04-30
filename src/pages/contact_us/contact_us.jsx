import React from "react";
import Navbar from "../../layout/navbar/navbar";
import DepartmentInfos from "./layout/department_infos/departmet_infos";
import Video from "../../components/video/video";
import ContactPoints from "./layout/contact_points/contact_points";
import Footer from "../../layout/footer/footer";

function ContactUs() {
  return (
    <body>
      <Navbar />
      <DepartmentInfos />
      <ContactPoints />
      <Footer />
    </body>
  );
}

export default ContactUs;
