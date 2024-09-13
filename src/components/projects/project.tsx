"use client";
import ProjectInterface from "@/interfaces/project";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Project(Project: ProjectInterface) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1", "1.33 0"],
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 0.85, 1],
    [0.8, 1, 1, 0.8],
  );

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
          "transition-all ease-linear md:h-[250px] "
        }
      >
        <CardContent className={"p-0 w-full h-full flex flex-row"}>
          <Image
            src={"/arcaneOracle.jpg"}
            alt={"logo ARCANE oraclae"}
            width={1200}
            height={800}
            className={
              "w-full md:h-full rounded object-cover md:w-[380px] h-[330px]"
            }
            style={{
              color: "transparent",
              objectFit: "cover",
              width: "380px",
            }}
            loading={"lazy"}
            decoding={"async"}
          />

          <div className={"flex flex-col items-start justify-start pl-2 pr-1"}>
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
