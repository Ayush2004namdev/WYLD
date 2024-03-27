import React from 'react'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import VideoComp from './components/VideoComp'
import Marquee from './components/Marquee'
import FourthPage from './components/FourthPage'
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import PinElem from './components/PinElem'



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger);
  return (
    <> 
    <div className="w-[100vw] overflow-x-hidden no-scrollbar" style={{msScrollbarBaseColor:'transparent'}}>

     <Landing/>
     <div className="bg-[url('/heroImg.jpg')] bg-cover bg-center h-screen w-full">
        <div className='w-40 mx-10 py-10'>
          <img src="https://assets-global.website-files.com/61fd17e773e51667344c6e7e/620271f8a886985f02c2dd21_WYLD%20Final%20Logo-01%20(2).png" className='object-cover object-center' alt="" />
        </div>
        <div className="headings mx-20 mt-24">
          <h1 className='text-white text-[2.7vw] font-bold leading-tight'>THE WORLD'S 1ST SOCIAL </h1>
          <h1 className='text-white text-[2.7vw] font-bold  leading-none pb-2'>CURRENCY CARD</h1>
          <h2 className='text-zinc-400 text-[2.3vw] font-bold leading-none py-2'>FUELLED BY LIKES & SHARE</h2>
        </div>
     </div> 
        <Navbar/>
        <SecondPage/>
        <ThirdPage/>
        <VideoComp/>
        {/* <Marquee/> */}
        <FourthPage/>
        <div className="relative">
          <PinElem/>
        </div>
    </div>
    </>
  )
}

export default App