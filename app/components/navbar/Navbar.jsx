"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineHome,
  AiFillContacts,
} from "react-icons/ai";
import { BiLogoFacebook, BiLogoGmail, BiLogoBlogger } from "react-icons/bi";
import { RxResume } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { GlobalContext } from "@/context/GlobalContext";

const Navbar = () => {
  const currentUrl = usePathname();

  const d = new Date();

  const currentYear = d.getFullYear();

  const session = useSession();

  const { toggleSidebar } = useContext(GlobalContext);
  return (
    <div className="bg-[#000310] p-4 fixed top-0 left-0 md:w-[25%] w-full h-[70px]   md:h-full ">
      <div className="md:hidden">
        <GiHamburgerMenu onClick={toggleSidebar} color="white" size={30} />
      </div>
      <div className="hidden md:flex flex-col items-center">
        <div className="relative w-[120px] h-[120px] rounded-full border-[5px] border-gray-800 overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="my-4">
          <h1 className="text-white font-bold text-xl">Gan-Erdene Ganbat</h1>
        </div>

        <div className="flex items-center gap-3">
          <AiFillTwitterCircle
            color="white"
            size={30}
            className="bg-gray-800 p-1 rounded-full"
          />
          <Link href="https://www.instagram.com/ganaasgram/" target="_blank">
            <AiOutlineInstagram
              color="white"
              size={30}
              className="bg-gray-800 p-1 rounded-full"
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100018811390896"
            target="_blank"
          >
            <BiLogoFacebook
              color="white"
              size={30}
              className="bg-gray-800 p-1 rounded-full"
            />
          </Link>
          <BiLogoGmail
            color="white"
            size={30}
            className="bg-gray-800 p-1 rounded-full"
          />
        </div>
      </div>

      <div className="hidden md:flex text-gray-500 font-bold  flex-col mt-10 ml-10 gap-4">
        <div className="flex items-center gap-2">
          <AiOutlineHome color={currentUrl === "/" ? "teal" : null} size={20} />
          <Link href="/">Home</Link>
        </div>
        <div className="flex items-center gap-2">
          <RxResume
            size={20}
            color={currentUrl === "/resume" ? "teal" : null}
          />
          <Link href="/resume">Resume</Link>
        </div>

        <div className="flex items-center gap-2">
          <BiLogoBlogger
            color={currentUrl === "/blog" ? "teal" : null}
            size={20}
          />
          <Link href="/blog">Blog</Link>
        </div>
        {session.status === "authenticated" && (
          <div className="flex items-center gap-2">
            <AiFillContacts
              color={currentUrl === "/write" ? "teal" : null}
              size={20}
            />
            <Link href="/write">WRITE BLOG</Link>
          </div>
        )}
      </div>

      <div className="hidden md:block text-gray-500 text-center absolute bottom-0 left-20 mb-2">
        <p>© Copyright {currentYear}</p>
      </div>
    </div>
  );
};

export default Navbar;
