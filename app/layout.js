
import { GlobalProvider } from "@/context/GlobalContext";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import AuthProvider from "./components/AuthProvider/AuthProvider";

const poppins = Poppins({ subsets: ["latin"] , weight: '300'});

export const metadata = {
  title: "Personal Blog",
  description: "Personal blog 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalProvider>
         <AuthProvider>

         <div className="flex">
        <header className=" w-[25%]">
          <Navbar />
        </header>

        <main className="w-[75%]"> {children}</main>
        </div>

         </AuthProvider>
       

        </GlobalProvider>
       
      
      </body>
    </html>
  );
}
