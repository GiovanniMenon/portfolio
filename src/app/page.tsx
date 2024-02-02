"use client"


import NavBarComponent from "@/components/navBarComponent";
import HeroComponent from "@/components/heroComponent";

export default function Home() {
  return (
      <main>
          <NavBarComponent></NavBarComponent>
          <HeroComponent></HeroComponent>
          <div className=" bg-red-500 h-[100vh] text-center ">
              lorem ipsum   asdasd
          </div>
      </main>
  );
}
