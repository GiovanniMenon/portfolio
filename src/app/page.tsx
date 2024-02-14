"use client";

import NavBarComponent from "@/components/navBarComponent";
import HeroComponent from "@/components/hero/heroComponent";
import MainComponent from "@/components/main/mainComponent";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <NavBarComponent></NavBarComponent>
      <HeroComponent></HeroComponent>
      <MainComponent></MainComponent>
    </main>
  );
}
