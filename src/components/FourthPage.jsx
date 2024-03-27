import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const FourthPage = () => {

 useGSAP(() => {
  gsap.from('#text' , {
    scrollTrigger:{
      trigger:'#page4',
      start:'top 50%',
      end:'bottom 80%',
      scrub:2,
    },
    y:'-=100%',
    stagger:1,
    opacity:0,
    duration:1,
  }) 
 })


  return (
    <>
        <div className="h-screen w-full relative bg-black pl-[25%] pt-[10vh] text-white pr-[8vw]" id='page4'>
            <h1 className='text-[10vw] font-bold' id='text'>WYLD?</h1>
            <p className='mt-8 text-[1.8vw] font-semibold' id='text'>Influence is for everyone! Creator? A regular Instagrammer? You just need 1000 followers, and WYLD will help ENCASH YOUR INFLUENCE.</p>
            <p className='mt-8 text-[1.8vw] font-semibold' id='text'>Shop your favorite brands with the WYLD card → Give the brand a shout out on your Instagram → Earn upto 100% cashback on your purchase! </p>
            <p className='mt-10 text-[1.8vw] font-semibold' id='text'>Is this illegal? No. <br />Does it feel like it should be illegal? You bet. </p>
        </div>
        <div className="bg-black">
          <div className='bg-[url("https://assets-global.website-files.com/61fd17e773e51667344c6e7e/61fd17e773e516f3614c6ea9_ourteam%20(2).jpg")] bg-clip-text'> 
            <h1 className='text-[11vw] font-extrabold bg-clip-text bg-[] text-center text-bold tracking-wider text-transparent'> WYLDTEAM</h1>
          </div>
        </div>
    </>
  )
}

export default FourthPage