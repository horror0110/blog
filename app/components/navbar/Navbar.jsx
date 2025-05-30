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

  const socialLinks = [
    { icon: AiFillTwitterCircle, href: "#", label: "Twitter" },
    {
      icon: AiOutlineInstagram,
      href: "https://www.instagram.com/ganaasgram/",
      label: "Instagram",
    },
    {
      icon: BiLogoFacebook,
      href: "https://www.facebook.com/profile.php?id=100018811390896",
      label: "Facebook",
    },
    { icon: BiLogoGmail, href: "mailto:your.email@gmail.com", label: "Email" },
  ];

  const navigationItems = [
    { icon: AiOutlineHome, href: "/", label: "Home" },
    { icon: RxResume, href: "/resume", label: "Resume" },
    { icon: BiLogoBlogger, href: "/blog", label: "Blog" },
  ];

  if (session.status === "authenticated") {
    navigationItems.push({
      icon: AiFillContacts,
      href: "/write",
      label: "Write Blog",
    });
  }

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 p-6 fixed top-0 left-0 md:w-[280px] w-full h-[80px] md:h-full z-[100] backdrop-blur-xl">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full border-2 border-gradient-to-r from-purple-400 to-cyan-400 overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-white font-semibold text-lg">Gan-Erdene</h2>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-200"
        >
          <GiHamburgerMenu color="white" size={24} />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col h-full">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative w-28 h-28 rounded-full border-4 border-slate-600 overflow-hidden bg-slate-700">
              <Image
                src="/profile.jpg"
                alt="Profile Image"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-white font-bold text-xl mb-1">
              Gan-Erdene Ganbat
            </h1>
            <p className="text-slate-400 text-sm font-medium">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3 mb-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className="group relative p-2 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg transition-all duration-300 hover:scale-110"
                title={social.label}
              >
                <IconComponent
                  color="white"
                  size={20}
                  className="group-hover:text-cyan-400 transition-colors duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            );
          })}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-2">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = currentUrl === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-white border-l-4 border-cyan-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <IconComponent
                  size={20}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-400 group-hover:text-cyan-400"
                  }`}
                />
                <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                  {item.label}
                </span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-slate-700/50">
          <div className="text-center">
            <p className="text-slate-500 text-xs font-medium">
              © {currentYear} Gan-Erdene Ganbat
            </p>
            <p className="text-slate-600 text-xs mt-1">
              Built with ❤️ & Next.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
