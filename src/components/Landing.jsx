import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Timeline } from 'gsap/gsap-core'

const Landing = () => {
useGSAP(() => {
    const tl = new Timeline();

    tl.from('.box' , {
        y:'-100%',
        stagger:0.1,
        duration:0.5,
    })

    tl.to('.box' , {
        y:'-100%',
        stagger:0.2,
        delay:0.5,
        duration:0.8,
    })

    tl.to('.d', {
        y:'-=100%'
    })

})

  return (
    <>
        <div className="d absolute z-20 flex">
            <div className="box h-screen w-[calc(100vw/4)] bg-white"></div>
            <div className="box h-screen w-[calc(100vw/4)] bg-white"></div>
            <div className="box h-screen w-[calc(100vw/4)] bg-white"></div>
            <div className="box h-screen w-[calc(100vw/4)] bg-white"></div> 
        </div>
            
    </>
  )
}

export default Landing