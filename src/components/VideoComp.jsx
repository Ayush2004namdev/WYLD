import { motion } from 'framer-motion'
import gsap from 'gsap'
import React from 'react'

const VideoComp = () => {
  
  return (
  <>
    <div id='vd' className="h-screen w-full">
        <video src="https://assets-global.website-files.com/61fd17e773e51667344c6e7e/65b6adf413bba4915a3f9aae_grid (3) (1)-transcode.mp4" className='object-cover w-full h-full object-center' autoPlay loop muted></video>
    </div>
    <div className="h-[40vh] w-full pt-20 bg-black">
      <div className="firstCont flex pr-10 whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{duration:20,repeat:Infinity,ease:'linear'}} className='text-[4vw] font-bold' style={{WebkitTextStrokeColor:'white',WebkitTextFillColor:'transparent',WebkitTextStrokeWidth:'2px'}}>Build Wyld Go Wyld Load Wyld Show Wyld Tap Wyld Swipe Wyld Live Wyld  Write Wyld</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{duration:20,repeat:Infinity,ease:'linear'}} className='text-[4vw] font-bold' style={{WebkitTextStrokeColor:'white',WebkitTextFillColor:'transparent',WebkitTextStrokeWidth:'2px'}}>Build Wyld Go Wyld Load Wyld Show Wyld Tap Wyld Swipe Wyld Live Wyld  Write Wyld</motion.h1>
      </div>
      <div className="firstCont flex pr-10 whitespace-nowrap">
        <motion.h1 initial={{x:'-100%'}} animate={{x:'0%'}} transition={{duration:20,repeat:Infinity,ease:'linear'}} className='text-[4vw] font-bold' style={{WebkitTextStrokeColor:'white',WebkitTextFillColor:'transparent',WebkitTextStrokeWidth:'2px'}}>Build Wyld Go Wyld Load Wyld Show Wyld Tap Wyld Swipe Wyld Live Wyld  Write Wyld</motion.h1>
        <motion.h1 initial={{x:'-100%'}} animate={{x:'0%'}} transition={{duration:20,repeat:Infinity,ease:'linear'}} className='text-[4vw] font-bold' style={{WebkitTextStrokeColor:'white',WebkitTextFillColor:'transparent',WebkitTextStrokeWidth:'2px'}}>Build Wyld Go Wyld Load Wyld Show Wyld Tap Wyld Swipe Wyld Live Wyld  Write Wyld</motion.h1>
      </div>
    </div>
  </>
  )
}

export default VideoComp