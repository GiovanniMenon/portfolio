import type { Metadata } from "next";
import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import MyBio from "@/components/myBio/myBio";
import NavBar from "@/components/main/navBar";
import Footer from "@/components/main/footer";

import Shapes from "@/components/shapes";
const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

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
        className={`bg-card dark:bg-gradient-to-br from-primary-foreground via-card/55 to-primary-foreground relative ${roboto.className}`}
      >
        <div
          className={
            "max-w-[1500px] flex item-start justify-center mx-auto min-h-screen"
          }
        >
          <div
            className={
              "gap-4 flex flex-col md:flex-row md:mt-5 w-full relative"
            }
          >
            <div>
              <MyBio />
            </div>
            <main className={"w-full flex flex-col items-center justify-start"}>
              <NavBar />
              {children}
              <Analytics />
              <Footer />
            </main>
            <div className={"hidden lg:block w-fit "}>
              <Shapes />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
