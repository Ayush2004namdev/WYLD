import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const ThirdPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(['#img1' , '#img2' , '#img3'] , {
        scale:0.9,
        scrollTrigger:{
          trigger:'#secpage',
          start:'top 50%',
          end:'bottom bottom',
          scrub:1,
        }
    })

    tl.to('.thousand' , {
      scrollTrigger:{
        trigger:'#th',
        start:'top 50%',
        pin:true,
        end:'bottom -10%',
        scrub:1,
      },
      scale:10,
      opacity:0,
      duration:2,
    })

  })  
  return (

    <>
        <div  className="min-h-screen bg-black w-full pb-20 no-scrollbar overflow-x-hidden" id='secpage'>
            <div className="bg-[url('/pt1.png')] bg-cover bg-center mx-auto w-[38%] h-screen text-white hover:scale-75 transition-all" id='img1'></div>
            <div className="bg-[url('/pt2.png')] bg-cover bg-center mx-auto w-[38%] h-screen text-white hover:scale-75 transition-all " id='img2'></div>
            <div className="bg-[url('/pt3.png')] bg-cover bg-center mx-auto w-[38%] h-screen text-white hover:scale-75 transition-all" id='img3'></div>
            <div className="text-white max-w-[50vw] mx-auto mt-10 text-center" id='th'>
              <h1 className='text-[10vw] thousand tracking-widest font-bold'>1000</h1>
              <div className="mt-[20vh]" id='te'>
                <h1 className='text-[2vw] leading-none ' id='text1'>1000+ Followers no Instagram</h1>
                <h1 className='text-[5vw] leading-none font-bold' id='text2'>IS ALL YOU NEED</h1>
                <h1 className='text-[5vw] leading-none font-bold' id='text3'>TO #GETWYLD</h1>
              </div>
            </div>
        </div>
        
    </>
  )
}

export default ThirdPage