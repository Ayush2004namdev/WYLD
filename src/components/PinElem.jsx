import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import '../index.css'

const PinElem = () => {

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to('#mainpin',{
            scrollTrigger:{
                trigger:'#mainpin',
                pin:true,
                scrub:1,
                end:'+=600%',
                start:'top top'
            },
            x:'-=400%'
        })
    })

  return (
    <>
        <div className="flex no-scrollbar min-w-full h-screen relative bg-[url('https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6206bbbdc9d687f5ae805597_WYLD%20patterns-2.PNG')] bg-cover bg-center w-full" id='mainpin'>
            <div className="h-screen min-w-[100vw] bg-black text-white px-32 py-20"> 
                <h1 className='text-[10vw] font-bold'> SWIPE TO </h1>
                <h1 className='text-[8vw]  stroke-zinc-200' style={{WebkitTextStroke:'F8F6E3', WebkitTextStrokeWidth:'0.5px',WebkitTextFillColor:'black',fontFamily:'gilroy'}}> THE WYLD LIFE </h1>
            </div>
            <div className="bg-[url('https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6217c5ecc834aa7345109b52_Option-3.png')] min-w-[100vw] h-screen flex justify-end">
                <div className="bg-[url('https://images.unsplash.com/photo-1604342427523-189b17048839?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center w-1/2 h-screen flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://assets-global.website-files.com/61fd17e773e51667344c6e7e/65b8c48db17b93790ef43fa6_playcard_mokap_1-%5BConverted%5D%201.png" alt="" />
                        <h1 className='text-white text-[8vh]'>Ready to get wyld?</h1>
                    </div>
                </div>
            </div>
            <div className="h-screen min-w-[100vw] bg-[url('https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6206bbbdc9d687f5ae805597_WYLD%20patterns-2.PNG')] bg-blue-100 w-full bg-cover bg-no-repeat bg-center">

            </div>
            <div className="min-w-[100vw] flex">
                <div className="w-1/3 bg-zinc-800 px-10 py-40">
                    <h6 className='text-[4vw] text-zinc-50'>WYLD HOUSE</h6>
                    <span className=' text-zinc-50'>Contact us</span>
                    <div className="mt-4 flex gap-16  text-zinc-50 ">
                    <h4  className=" text-zinc-400 ">OFFICE</h4>
                    <h4>Raheja Excelsior <br />Tardeo, Mumbai</h4>
                    </div>
                    <div className="mt-4 flex gap-16   text-zinc-50 ">
                    <h4  className=" text-zinc-400 ">INFO</h4>
                    <h4>+91-843373964 <br />hello@getwyld.in</h4>
                    </div>
                </div> 
                <div className="bg-[url('https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6217c5ecc834aa7345109b52_Option-3.png')] h-screen w-full"></div>
            </div>
            
            <div className=' flex items-center justify-center bg-[url("https://assets-global.website-files.com/61fd17e773e51667344c6e7e/61fd17e773e5166f164c6e86_about-us3.jpg")] h-screen min-w-[100vw] bg-center'>
               <div className='w-1/3 py-4'>  
                <h1 className='text-[6vw] text-white text-center'>WHY WYLD</h1>
               <div className='w-full h-full border-2 border-white bg-transparent'>
                <p className=' text-white text-[1.2vw] text-center pt-5'>Are you a square peg in a round <br /> hole?<br />
Are you extra in a world of basic?<br />
Do you plandid+candid and tag those who planned it?</p>

<p className='mb-8 text-white text-[1.2vw] text-center pt-5'>For those who love shopping.  <br />
For those who love tagging brands <br /> they shopped from.</p>
               </div>
               <p className='text-white text-[1.2vw] text-center mt-11'>The world will always ask Why.</p>
               <p  className='text-white text-[1.2vw] text-center mt-3'>WYLD is for those who ask <br /><span className='text-[1.4vw] font-semibold'>WHY NOT?!</span></p>
               </div>
               

            </div>
        </div>
    </>
  )
}

export default PinElem