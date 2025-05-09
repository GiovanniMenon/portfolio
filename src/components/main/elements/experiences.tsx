"use client";
import Link from "next/link";
import { ChartBarIcon } from "lucide-react";
import MarqueeStacks from "@/components/main/elements/marquee-stacks";
import TimeExperience from "@/components/main/elements/timeExperience";
import { motion } from "framer-motion";
import React from "react";
export default function Experiences() {
  return (
    <div className={"flex flex-col justify-start w-full h-fit"}>
      <Link
        className="animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded flex space-x-2.5 items-center justify-center"
        href="#experiences"
      >
        <ChartBarIcon className={"size-5 text-tiolet"} />
        <span className="text-xs">Experiences</span>
      </Link>
      <div className={"mt-10 flex flex-col gap-10 relative"}>
        <div className={"space-y-2"}>
          <h1 className={"text-3xl font-bold tracking-tight text-primary"}>
            Experiences
          </h1>
          <p className={"text-muted-foreground font-[200] text-sm"}>
            Explore my educational background and work experiences that have
            shaped my skills.
          </p>
        </div>
        <TimeExperience />
        <MarqueeStacks />
      </div>
    </div>
  );
}
