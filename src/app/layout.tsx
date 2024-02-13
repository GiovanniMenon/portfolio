import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const jetBrains = JetBrains_Mono({
  weight: "300",
  subsets: ["latin"],
});
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
