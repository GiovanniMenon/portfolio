import Hero from "@/components/main/elements/hero";
import { Separator } from "@/components/ui/separator";
import Experiences from "@/components/main/elements/experiences";
import ProjectsMain from "@/components/main/elements/projectsMain";
import React from "react";
import ContactMe from "@/components/main/elements/contactMe";
import {Toaster} from "@/components/ui/sonner"

export function Main() {
  return (
    <main
      className={
        "w-full flex-col flex justify-center items-center p-4 gap-20 mb-8"
      }
    >
      <Toaster position="top-center"/>

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
