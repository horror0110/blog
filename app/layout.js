"use client";
import { GlobalProvider } from "@/context/GlobalContext";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Sidebar from "./components/Sidebar/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Personal Portfolio",
  description: "Personal Portfolio 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalProvider>
          <AuthProvider>
            {/* Container with full responsive behavior */}
            <div className="flex flex-col md:flex-row min-h-screen w-full">
              {/* Header/Navbar - Responsive across all devices */}
              <header className="w-full md:w-60 lg:w-64 xl:w-76 md:min-h-screen md:sticky md:top-0 md:left-0 z-50">
                <Navbar />
              </header>

              {/* Main Content Area - Fully responsive */}
              <main className="flex-1 w-full min-h-screen overflow-x-hidden">
                {/* Mobile Sidebar - Hidden on tablets and desktop */}
                <div className="md:hidden sticky top-0 z-40 bg-white shadow-md">
                  <Sidebar />
                </div>

                {/* Content Container with responsive padding */}
                <div className="w-full ">{children}</div>
              </main>
            </div>
          </AuthProvider>
        </GlobalProvider>

        {/* Custom Responsive Styles */}
        <style jsx global>{`
          /* Mobile First - Base styles (320px - 639px) */
          @media (max-width: 639px) {
            body {
              font-size: 14px;
            }
          }

          /* Small tablets (640px - 767px) */
          @media (min-width: 640px) and (max-width: 767px) {
            body {
              font-size: 15px;
            }
          }

          /* Tablets/iPad (768px - 1023px) */
          @media (min-width: 768px) and (max-width: 1023px) {
            body {
              font-size: 16px;
            }
          }

          /* Small Laptops/Mini Laptops (1024px - 1279px) */
          @media (min-width: 1024px) and (max-width: 1279px) {
            body {
              font-size: 16px;
            }
          }

          /* Standard Laptops (1280px - 1535px) */
          @media (min-width: 1280px) and (max-width: 1535px) {
            body {
              font-size: 16px;
            }
          }

          /* Large Desktops (1536px+) */
          @media (min-width: 1536px) {
            body {
              font-size: 18px;
            }
          }

          /* Smooth transitions for responsive changes */
          * {
            transition: padding 0.3s ease, margin 0.3s ease;
          }

          /* Prevent horizontal scroll */
          html,
          body {
            overflow-x: hidden;
            max-width: 100vw;
          }
        `}</style>
      </body>
    </html>
  );
}
