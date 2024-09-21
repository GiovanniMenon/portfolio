"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowRightIcon,
  DoorClosedIcon,
  PenIcon,
  DownloadIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  // @ts-ignore
  return (
    <div className={"flex flex-col justify-start w-full h-fit"}>
      <Link
        className="animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded flex space-x-2.5 items-center justify-center"
        href="#"
      >
        <DoorClosedIcon className={"size-5 text-tiolet"} />
        <span className="text-xs">Presentation</span>
      </Link>

      <div className={"mt-10 flex flex-col gap-10"}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.5,
            bounce: 0.6,
            // velocity: 8,
            // mass: 0.9,
          }} // Aggiunto effetto "spring"
        >
          <h1 className={"text-5xl font-black tracking-tighter text-primary"}>
            <span className={"text-tiolet"}>Cybersecurity</span> Enthusiast and
            Tech Explorer
          </h1>
        </motion.div>
        <p className={"text-muted-foreground font-light "}>
          Hello there, I&apos;m a 22-year-old Italian student passionate about
          Programming, Virtual Reality, and Cybersecurity. I recently graduated
          with a degree in Computer Science from the University of Padua and am
          now pursuing a Joint Master&apos;s Degree in International
          Cybersecurity and Cyberintelligence across four European universities.
          <br />
          <br />
          My primary focus is on Information and Network Security. I&apos;m open
          to <span className={"text-tiolet"}>research</span> projects and{" "}
          <span className={"text-tiolet"}>collaborations</span> where I can
          contribute, learn, and grow. If you have an opportunity that matches
          my skills and interests, feel free to reach out!
        </p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.5,
            bounce: 0.6,
            // velocity: 8,
            // mass: 0.9,
          }}
        >
          <div className={"flex flex-row space-x-2"}>
            <Link className="" href="#contact">
              <Button
                className={"flex flex-row gap-2 items-center justify-center"}
              >
                Contact Me
                <ArrowRight className={"size-4 "} />
              </Button>
            </Link>

            <Link
              className=""
              href="/cv.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button
                className={"flex flex-row gap-2 items-center justify-center"}
                variant={"secondary"}
              >
                Download my Cv
                <DownloadIcon className={"size-4 "} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
