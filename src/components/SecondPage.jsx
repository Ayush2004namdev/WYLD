import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const SecondPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {

    const tl = gsap.timeline()
    tl.from(['#text1','#text2','#text3'] , {
      x:'-=100%',
      opacity:0,
      duration:2,
      scrollTrigger:{
        trigger:'#page1',
        start:'top 80%',
        end:'bottom bottom',
        scrub:2,
      }
    })

   
  })

  return (
    <>
        <div  className="bg-black h-screen w-full pl-[25%] pt-40 text-white" id='page1'>
            <h1 className='tracking-widest text-[11vw] font-bold px-20 leading-none' id='text1'>BUY</h1>
            <h1 className='tracking-tight text-[11vw] font-bold px-52 leading-none' id='text2'><span className='pr-3'>PO</span><span>ST</span></h1>
            <h1 className='tracking-tight text-[11vw] font-bold -px-2 leading-none' id='text3'><span className='pr-3'>EA</span><span>RN</span></h1>

        </div>
    </>
  )
}

export default SecondPage