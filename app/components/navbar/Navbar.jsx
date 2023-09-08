"use client";
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {AiFillTwitterCircle , AiOutlineInstagram , AiOutlineHome , AiFillContacts} from "react-icons/ai";
import {BiLogoFacebook , BiLogoGmail , BiLogoBlogger} from "react-icons/bi";
import {RxResume} from "react-icons/rx";


const Navbar = () => {

    const d= new Date();

    const currentYear = d.getFullYear();

    const session = useSession();
  return (
    <div className='bg-[#000310] p-4 fixed top-0 left-0 w-[25%] h-full ' >
        <div className=' flex flex-col items-center'>
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

          <div className='text-gray-500 font-bold flex flex-col mt-10 ml-10 gap-4'>
            <div className='flex items-center gap-2'>
                <AiOutlineHome size={20}/>
            <Link href="/">Home</Link>
            </div>
            <div className='flex items-center gap-2'>
                <RxResume size={20}/>
            <Link href="/resume">Resume</Link>
            </div>

            <div className='flex items-center gap-2'>
                <BiLogoBlogger size={20}/>
            <Link href="/blog">Blog</Link>
            </div>
             {session.status === "authenticated" && 
                <div className='flex items-center gap-2'>
                <AiFillContacts size={20}/>
                <Link href="/write">WRITE BLOG</Link>
                </div>}
         
            
          </div>

          <div className='text-gray-500 text-center absolute bottom-0 left-20 mb-2'>
             <p>© Copyright {currentYear}</p>
          </div>
    </div>
  )
}

export default Navbar