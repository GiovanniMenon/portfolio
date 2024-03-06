"use client";

import NavBar from "@/components/navBar";
import Hero from "@/components/hero/hero";
import Main from "@/components/main/main";
import Chat from "@/components/chat/chat";
import { useState } from "react";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <main className="overflow-x-hidden ">
      <NavBar></NavBar>
      <Hero></Hero>
      <Main></Main>
      <Chat isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}></Chat>
    </main>
  );
}
