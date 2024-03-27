import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
const Navbar = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

  return (
    <>
        <div className='bg-black bg-opacity-20 h-screen text-white  w-[7vw] fixed z-10 top-0 right-0 '>
            <div className="h-full w-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-x-[0.5px] border-zinc-300 border-opacity-25 flex flex-col justify-between">
                <div className="flex justify-center py-10">
                    <CiMenuFries color='white' size={32} className='cursor-pointer'/>
                </div>
                <div className="">
                    <div className="flex flex-col gap-10 items-center">
                        <FaInstagram size={26} className='cursor-pointer'/>
                        <CiLinkedin size={26} className='cursor-pointer'/>
                        <IoLogoYoutube size={26} className='cursor-pointer'/>
                    </div>
                    <button onClick={toTop} className=' border-t-[1px] border-zinc-200 w-full h-40 mt-20 cursor-pointer hover:bg-white hover:bg-opacity-5'> Scroll </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar