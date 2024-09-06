import Hero from "@/components/main/elements/hero";
import { Separator } from "@/components/ui/separator";
import Experiences from "@/components/main/elements/experiences";
import ProjectsMain from "@/components/main/elements/projectsMain";
import React from "react";
import ContactMe from "@/components/main/elements/contactMe";

export function Main() {
  return (
    <main
      className={
        "w-full flex-col flex justify-center items-center p-4 gap-14 mb-8"
      }
      id={"home"}
    >
      <Hero />
      <Separator className={"h-[2px] rounded opacity-75"} id={"experiences"} />
      <Experiences />
      <Separator className={"h-[2px] rounded opacity-75"} id={"projects"} />
      <ProjectsMain />
      <Separator className={"h-[2px] rounded opacity-75 "} id={"contact"} />
      <ContactMe />
      <Separator className={"h-[2px] rounded opacity-75 "} />
    </main>
  );
}
