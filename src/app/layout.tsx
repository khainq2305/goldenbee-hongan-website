import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Header from "@/components/layout/Header/Header"


export const metadata = {
  title: "Nhà sách Hồng Ân",
  description: "Trang chính",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Header /> 
        {children}
      </body>
    </html>
  )
}