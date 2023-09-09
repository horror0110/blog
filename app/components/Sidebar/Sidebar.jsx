"use client";
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useContext } from 'react'
import {AiFillTwitterCircle , AiOutlineInstagram , AiOutlineHome , AiFillContacts} from "react-icons/ai";
import {BiLogoFacebook , BiLogoGmail , BiLogoBlogger} from "react-icons/bi";
import {RxResume} from "react-icons/rx";
import {usePathname} from "next/navigation"
import { GlobalContext } from '@/context/GlobalContext';



const Sidebar = () => {

    const currentUrl = usePathname();

    const d= new Date();

    const currentYear = d.getFullYear();

    const session = useSession();

    const {openSidebar , toggleSidebar} = useContext(GlobalContext);
  return (
    <div className={openSidebar ?  `bg-[#000310] p-4 fixed top-0 left-0 w-[65%] h-full translate-x-0 transition-all duration-500 z-50` : "bg-[#000310] p-4 fixed top-0 left-0 w-[65%] h-full transition-all duration-500 -translate-x-full z-50 "} >

        <div className='flex flex-col items-center'>
          <div className='relative w-[120px] h-[120px] rounded-full border-[5px] border-gray-800 overflow-hidden'> 
          <Image src="/profile.jpg" alt="Profile Image" layout="fill" objectFit="cover"  />
          </div>
          <div className='my-4'>
              <h1 className='text-white font-bold text-xl'>Gan-Erdene Ganbat</h1>
          </div>

          <div className='flex items-center gap-3'>
              <AiFillTwitterCircle color='white' size={30} className='bg-gray-800 p-1 rounded-full'/>
              <AiOutlineInstagram color='white' size={30} className='bg-gray-800 p-1 rounded-full'/>
              <BiLogoFacebook color='white' size={30} className='bg-gray-800 p-1 rounded-full'/>
              <BiLogoGmail color='white' size={30} className='bg-gray-800 p-1 rounded-full'/>
          </div>

          </div>

          <div className='flex text-gray-500 font-bold flex-col mt-10 ml-10 gap-4'>
            <div className='flex items-center gap-2'>
                <AiOutlineHome color={currentUrl === "/" ? "teal" : null} size={20}/>
            <Link onClick={toggleSidebar} href="/">Home</Link>
            </div>
            <div className='flex items-center gap-2'>
                <RxResume size={20} color={currentUrl === "/resume" ? "teal" : null}/>
            <Link onClick={toggleSidebar} href="/resume">Resume</Link>
            </div>

            <div className='flex items-center gap-2'>
                <BiLogoBlogger color={currentUrl === "/blog" ? "teal" : null} size={20}/>
            <Link onClick={toggleSidebar} href="/blog">Blog</Link>
            </div>
             {session.status === "authenticated" && 
                <div className='flex items-center gap-2'>
                <AiFillContacts color={currentUrl === "/write" ? "teal" : null} size={20}/>
                <Link onClick={toggleSidebar} href="/write">WRITE BLOG</Link>
                </div>}
         
          </div>

          <div className=' text-gray-500 text-center absolute bottom-0 left-20 mb-2'>
             <p>© Copyright {currentYear}</p>
          </div>
    </div>
  )
}

export default Sidebar