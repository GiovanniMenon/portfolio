import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import type { Viewport } from "next";

const calSans = localFont({ src: "./font/CalSans-SemiBold.woff2" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Giovanni Menon",
  description: "Giovanni Menon Portfolio website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={` ${calSans.className}`}>{children}</body>
    </html>
  );
}
