"use client";
import ProjectInterface from "@/interfaces/project";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Project({
  isGridView,
  project,
}: {
  isGridView: boolean;
  project: ProjectInterface;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1", "1.33 0"],
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 0.85, 1],
    isGridView ? [1, 1, 1, 1] : [0.8, 1, 1, 0.8],
  );

  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 0.85, 1],
    isGridView ? [1, 1, 1, 1] : [0, 1, 1, 0],
  );
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <Card
        className={
          `bg-card/30 border-white border-opacity-5 rounded p-1 group hover:bg-card/90 hover:cursor-pointer ` +
          `transition-all ease-linear  ${isGridView ? "md:h-full" : "md:h-full"} `
        }
      >
        <CardContent
          className={`p-0 w-full h-full flex ${isGridView ? "flex-col gap-y-3.5" : "flex-row"}`}
        >
          <Image
            src={"/arcaneOracle.jpg"}
            alt={"logo ARCANE oraclae"}
            width={1200}
            height={800}
            className={`w-full h-[330px] rounded object-cover ${isGridView ? "" : "md:[380px] md:h-full"} `}
            style={{
              color: "transparent",
              objectFit: "cover",
            }}
            loading={"lazy"}
            decoding={"async"}
          />

          <div
            className={`flex flex-col items-start justify-start  ${isGridView ? "p-2.5" : "pl-2 pr-1"} w-full gap-1.5`}
          >
            <div className={"flex justify-between items-center w-full"}>
              <h1
                className={
                  "text-3xl tracking-tight font-black group-hover:text-tiolet/90 transition-all ease-linear "
                }
              >
                {project.title}
              </h1>
              <p className={"text-white text-opacity-80 font-bold text-xs"}>
                {project.year}
              </p>
            </div>

            <p className={"text-white text-opacity-80 font-light text-sm"}>
              {project.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
