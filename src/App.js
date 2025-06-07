import React from 'react'
import Navbar from './components/nav/Navbar'
import Intro from './components/intro/Intro'
import Steps from './components/steps/Steps'
import Location from './components/location/Location'
import Video from "./components/startnow/video/Video"
import Start from './components/startnow/Start'
import About from './components/about/About'
import Test from './components/test/Test'
import Social from './components/social/Social'
import Footer from './components/footer/Footer'
export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Steps />
      <Location />
      {/* <Video/> */}
      <Start />
      <About/>
      <Test/>
      <Social/>
      <Footer/>
    </>
  )
}
