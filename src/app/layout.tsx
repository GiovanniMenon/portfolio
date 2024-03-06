import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import type { Viewport } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
const calSans = localFont({ src: "./font/CalSans-SemiBold.woff2" });
import { Toaster } from "@/components/ui/sonner";

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
      <body className={` ${calSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position={"top-left"} richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
