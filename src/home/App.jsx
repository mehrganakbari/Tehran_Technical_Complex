import React from 'react'
import '/src/index.css'
import Navbar from '../global_components/navbar/navbar'
import Slider from './layout/slider/slider'


export default function  App() {
  return (
    <body>
      <header><Navbar /></header>
      <section><Slider /></section>
    </body>
  )
}
