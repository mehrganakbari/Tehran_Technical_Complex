import React from 'react'
import Navbar from "../../layout/navbar/navbar"
import Slider from "./layout/slider/slider"
import AboutCards from './layout/aboutCards/about_cards'


function  Home() {
  return (
    <body>
      <header><Navbar /></header>
      <section><Slider /></section>
      <section><AboutCards /></section>
    </body>
  )
}

export default Home