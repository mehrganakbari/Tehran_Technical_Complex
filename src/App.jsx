import React from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
  ]);
  return (
    <RouterProvider router={router} >
      <Navbar />
    </RouterProvider>
  );
}
