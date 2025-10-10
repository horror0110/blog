// app/layout.js (Server Component)
import "./globals.css";
import { Poppins } from "next/font/google";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Gan-Erdene Ganbat",
  description: "Personal Portfolio 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
