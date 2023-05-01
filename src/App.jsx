import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/home";
import AboutUs from "./pages/about_us/about_us";
import ContactUs from "./pages/contact_us/contact_us";
import Shop from "./pages/shop/shop";
import Navbar from "./layout/navbar/navbar";

// => Home => "./pages/home/home"
// => AboutUs => "./pages/about_us/about_us"
// => ContactUs => "./pages/contact_us/contact_us"
// => Shop => "./pages/shop/shop"
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" Component={Home} />
      <Route path="/about-us" Component={AboutUs} />
      <Route path="/contact-us" Component={ContactUs} />
      <Route path="/shop" Component={Shop} />
    </BrowserRouter>
  );
}
