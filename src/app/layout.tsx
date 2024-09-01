import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import MyBio from "@/components/myBio/myBio";
import NavBar from "@/components/main/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giovanni Menon",
  description: "Giovanni Menon personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"dark"}>
      <body
        className={`bg-card dark:bg-gradient-to-br from-primary-foreground via-card/55 to-primary-foreground relative ${inter.className}`}
      >
        <div
          className={
            "max-w-[1500px] flex item-start justify-center mx-auto min-h-screen"
          }
        >
          <div className={"gap-4 flex flex-col md:flex-row md:mt-5 w-full"}>
            <div>
              <MyBio />
            </div>
            <main className={"w-full flex flex-col items-center justify-start"}>
              <NavBar />
              <div className={"w-full mt-3.5"}>{children}</div>
              <Analytics />
            </main>

            <div className={"hidden lg:block w-full lg:w-fit"}>
              <MyBio />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
