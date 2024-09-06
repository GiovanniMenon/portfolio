"use client";
import ProjectInterface from "@/interfaces/project";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Project(Project: ProjectInterface) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1", "1.33 0"],
  });

  // Scala da 0.8 a 1 mentre entra, rimane 1, e poi torna a 0 quando esce
  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 0.85, 1],
    [0.8, 1, 1, 0.8],
  );

  // L'opacità passa da 0 a 1 mentre entra, rimane 1, e poi torna a 0 mentre esce
  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 0.85, 1],
    [0, 1, 1, 0],
  );
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <Card
        className={
          "bg-card/30 border-white border-opacity-5 rounded p-1 group hover:bg-card/80 hover:cursor-pointer " +
          "transition-all ease-linear"
        }
      >
        <CardContent className={"p-0 w-full flex relative"}>
          <div className={"w-3/5 h-[150px] bg-secondary min-h-full rounded"}>
            {Project.imgPath}
          </div>
          <div
            className={
              "flex flex-col items-start justify-start pl-2 pr-1 w-full"
            }
          >
            <div className={"flex justify-between w-full items-center"}>
              <h1
                className={
                  "text-2xl tracking-tight font-black group-hover:text-tiolet transition-all ease-linear "
                }
              >
                {Project.title}
              </h1>
              <p className={"text-white text-opacity-80 font-bold text-xs"}>
                {Project.year}
              </p>
            </div>

            <p className={"text-white text-opacity-80 font-light text-sm"}>
              {Project.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
