import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google'
import "./globals.css";
import React from "react";

const jetBrains = JetBrains_Mono({
  weight: '300',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Giovanni Menon Portfolio Websiste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={` ${jetBrains.className}`}>{children}</body>
    </html>
  );
}
