"use client";
import Link from "next/link";
import { BookOpenCheck } from "lucide-react";

import Marquee from "react-fast-marquee";

import {
  SiCloudflare,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";

export default function Experiences() {
  return (
    <div className={"flex flex-col justify-start w-full h-fit"}>
      <Link
        className="animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded flex space-x-2.5"
        href="#experiences"
        id={"experiences"}
      >
        <BookOpenCheck className={"size-5"} />
        <span className="text-xs">Experiences</span>
      </Link>
      <div className={"mt-10 flex flex-col gap-10 relative"}>
        <div className={"space-y-4"}>
          <h1 className={"text-4xl font-bold tracking-tight text-primary"}>
            Experiences
          </h1>
          <p className={"text-white text-opacity-80 font-[200] text-xs"}>
            Explore my educational background and work experiences that have
            shaped my skills.
          </p>
        </div>
        <div>
          <div className={"w-[600px]"}>
            <Marquee
              pauseOnHover={true}
              direction={"left"}
              style={{ width: "100%", maxWidth: "100%", overflow: "" }}
              autoFill
            >
              <div className={"flex gap-4 ml-4"}>
                <SiHtml5 className="size-10" />
                <SiCss3 className="size-10" />
                <SiJavascript className="size-10" />
                <SiTypescript className="size-10" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
