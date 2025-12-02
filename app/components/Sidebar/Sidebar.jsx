"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { downloadResumeAsPdf, loadPdfLibrary } from "@/utils/pdfDownload";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import {
  AiFillTwitterCircle,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiLogoFacebook, BiLogoGmail } from "react-icons/bi";
import { RxResume } from "react-icons/rx";

const Sidebar = () => {
  const currentUrl = usePathname();
  const d = new Date();
  const currentYear = d.getFullYear();
  const { openSidebar, toggleSidebar } = useContext(GlobalContext);

  const router = useRouter();
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
  ];

  useEffect(() => {
    loadPdfLibrary();
  }, []);

  const handleDownloadCV = async () => {
    toggleSidebar(); // Sidebar-г хаах
    await downloadResumeAsPdf();
    toast.success("CV амжилттай татагдлаа");
  };

  return (
    <>
      {/* Backdrop overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[280px] z-50
          bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
          border-r border-slate-700/50 backdrop-blur-xl
          transform transition-transform duration-500 ease-out
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GE</span>
              </div>
              <span className="text-white font-semibold">Menu</span>
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-200"
            >
              <AiOutlineClose color="white" size={20} />
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

              {/* Orbiting Tech Icons */}
              <div className="absolute inset-0 animate-spin-slow">
                {[
                  { icon: "/html.png", angle: 0 },
                  { icon: "/css.jpg", angle: 60 },
                  { icon: "/js.png", angle: 120 },
                  { icon: "/ts.png", angle: 180 },
                  { icon: "/dart.png", angle: 240 },
                  { icon: "/python.png", angle: 300 },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="absolute w-8 h-8 bg-slate-800/90 rounded-lg flex items-center justify-center text-xs font-bold border border-slate-600 shadow-lg overflow-hidden"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${tech.angle}deg) translateY(-70px) rotate(-${tech.angle}deg)`,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={tech.icon}
                        fill
                        alt="tech icon"
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative w-24 h-24 rounded-full border-4 border-slate-600 overflow-hidden bg-slate-700 z-10">
                <Image
                  src="/user.jpg"
                  alt="Profile Image"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="mt-10 text-center">
              <h1 className="text-white font-bold text-lg mb-1">
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
                  onClick={social.href !== "#" ? toggleSidebar : undefined}
                  className="group relative p-2 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  <IconComponent
                    color="white"
                    size={18}
                    className="group-hover:text-cyan-400 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              );
            })}
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 space-y-2">
            <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4 px-2">
              Navigation
            </div>
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = currentUrl === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={toggleSidebar}
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

          {/* Quick Actions */}
          <div className="mb-6">
            <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4 px-2">
              Quick Actions
            </div>
            <div className="space-y-2">
              <button
                onClick={handleDownloadCV}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium hover:scale-105 transition-transform duration-200"
              >
                <span>Download CV</span>
                <RxResume size={16} />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-slate-700/50">
            <div className="text-center">
              <p className="text-slate-500 text-xs font-medium">
                © {currentYear} Gan-Erdene Ganbat
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
