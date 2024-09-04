"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

import { motion } from "framer-motion";
import ProjectsList from "@/config/project";
import Project from "@/components/projects/project";

export default function ProjectsMain() {
  // @ts-ignore
  return (
    <div className={"flex flex-col justify-start w-full h-fit"}>
      <Link
        className="animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded flex space-x-2.5 items-center justify-center"
        href="#projects"
      >
        <Code className={"size-5"} />
        <span className="text-xs">Projects</span>
      </Link>
      <div className={"mt-10 flex flex-col gap-10 relative"}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className={"space-y-2"}
        >
          <div className={"flex justify-between"}>
            <h1 className={"text-3xl font-bold tracking-tight text-primary"}>
              Projects
            </h1>
            <Button
              className={"flex justify-center items-center gap-1.5"}
              variant={"secondary"}
              size={"sm"}
            >
              <Code className={"size-5"} />
              Explore all
            </Button>
          </div>

          <p className={"text-white text-opacity-80 font-[200] text-xs"}>
            Here is a selection of my best projects.
          </p>
        </motion.div>

        <div className={"flex flex-col justify-start w-full h-fit gap-y-1.5"}>
          {ProjectsList.slice(0, 3).map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
