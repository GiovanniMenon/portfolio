"use client";

import NavBarComponent from "@/components/navBarComponent";
import HeroComponent from "@/components/hero/heroComponent";
import MainComponent from "@/components/main/mainComponent";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <NavBarComponent></NavBarComponent>
      <HeroComponent></HeroComponent>
      <MainComponent></MainComponent>
    </main>
  );
}
