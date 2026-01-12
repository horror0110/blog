"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { downloadResumeAsPdf, loadPdfLibrary } from "@/utils/pdfDownload";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoGmail } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxResume } from "react-icons/rx";

const Navbar = () => {
  const currentUrl = usePathname();
  const d = new Date();
  const currentYear = d.getFullYear();
  const { toggleSidebar } = useContext(GlobalContext);
  const router = useRouter();

  // PDF library-г урьдчилан ачаалах
  useEffect(() => {
    loadPdfLibrary();
  }, []);

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
    { icon: BiLogoGmail, href: "mailto:ganaa.12396@yahoo.com", label: "Email" },
  ];

  const navigationItems = [
    { icon: RxResume, href: "/resume", label: "Resume" },
  ];

  const handleDownloadCV = async () => {
    // Хэрэв resume хуудсанд байгаа бол шууд татах
    if (currentUrl === "/resume") {
      await downloadResumeAsPdf();
      toast.success("CV амжилттай татагдлаа");
    } else {
      // Үгүй бол resume руу шилжүүлэх
      router.push("/resume");
      // Хуудас ачаалагдах хүртэл хүлээх
      setTimeout(async () => {
        await downloadResumeAsPdf();
        toast.success("CV амжилттай татагдлаа");
      }, 1500);
    }
  };

  return (
    <div className="bg-gradient-to-b p-5 from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 fixed top-0 left-0 md:w-[280px] w-full h-[80px] md:h-full z-[100] backdrop-blur-xl">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full border-2 border-gradient-to-r from-purple-400 to-cyan-400 overflow-hidden">
            <Image
              src="/user.jpg"
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

            {/* Orbiting Tech Icons */}
            <div className="absolute inset-0 animate-spin-slow top-10">
              {[
                { icon: "/html.png", color: "text-yellow-400", angle: 0 },
                { icon: "/css.jpg", color: "text-blue-400", angle: 60 },
                { icon: "/js.png", color: "text-green-400", angle: 120 },
                { icon: "/ts.png", color: "text-cyan-400", angle: 180 },
                { icon: "/dart.png", color: "text-purple-400", angle: 240 },
                { icon: "/python.png", color: "text-blue-300", angle: 300 },
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

          <div className="mt-20 text-center">
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

        {/* Quick Actions - Download CV Button */}
        <div className="mb-6">
          <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 px-2">
            Quick Actions
          </div>
          <button
            onClick={handleDownloadCV}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Download CV</span>
            <RxResume size={18} />
          </button>
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
    </div>
  );
};

export default Navbar;
