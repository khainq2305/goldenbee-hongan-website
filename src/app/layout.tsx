import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Header from "@/components/layout/Header/Header"
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import Footer from '@/components/layout/Footer'
export const metadata = {
  title: "Nhà sách Hồng Ân",
  description: "Trang chính",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="flex flex-col justify-center">
        <Header /> 
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
