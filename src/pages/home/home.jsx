import React from 'react'
import Navbar from "../../layout/navbar/navbar"
import Slider from "./layout/slider/slider"


function  Home() {
  return (
    <body>
      <header><Navbar /></header>
      <section><Slider /></section>
    </body>
  )
}

export default Home