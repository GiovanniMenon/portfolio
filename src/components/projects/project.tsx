"use client";
import ProjectInterface from "@/interfaces/project";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Project({
  isGridView,
  project,
}: {
  isGridView: boolean;
  project: ProjectInterface;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
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
    <>
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <Link
          href={`/projects/${project.title.toLowerCase().replaceAll(" ", "-")}`}
          className={"h-full"}
        >
          <Card
            className={
              `bg-card/30 border-white border-opacity-5 rounded p-1 group hover:bg-card/90 hover:cursor-pointer ` +
              `transition-all ease-linear h-full ${isGridView ? "" : ""} `
            }
          >
            <CardContent
              className={`p-0 w-full h-full flex items-stretch ${isGridView ? "flex-col gap-y-3.5" : "flex-col md:flex-row"}`}
            >
              <Image
                src={project.imgPath}
                alt={"logo ARCANE oraclae"}
                width={1920}
                height={1080}
                className={`w-full rounded object-cover ${isGridView ? "h-[300px]" : " aspect-video md:w-[480px] h-[330px] md:h-full"} `}
              />

              <div
                className={`flex-1 flex flex-col items-stretch justify-start p-2.5 pb-1 w-full gap-1.5 `}
              >
                <div className={"flex justify-between items-center w-full"}>
                  <h1
                    className={
                      "text-3xl tracking-tight font-black group-hover:text-tiolet/90 transition-all ease-linear "
                    }
                  >
                    {project.title}
                  </h1>
                  <p className={"text-muted-foreground font-medium text-xs"}>
                    {project.year}
                  </p>
                </div>

                <p
                  className={`text-muted-foreground font-light text-sm  ${isGridView ? "mb-3" : " "}`}
                >
                  {project.shortDescription}
                </p>
                <div className={`flex flex-wrap gap-1 mt-auto `}>
                  {project.tag?.slice(0, 5).map((tag, index) => (
                    <Badge
                      key={index}
                      className={"w-fit p-1.5"}
                      variant={"secondary"}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        {/* <Card
          className={
            `bg-card/30 border-white border-opacity-5 rounded p-1 group hover:bg-card/90 hover:cursor-pointer ` +
            `transition-all ease-linear  md:h-full  block lg:hidden`
          }
        >
          <CardContent
            className={`p-0 w-full h-full flex flex-col ${isGridView ? " gap-y-3.5" : " md:flex-row"} relative`}
          >
            <Image
              src={project.imgPath}
              alt={"logo ARCANE oraclae"}
              width={1920}
              height={1080}
              className={`w-full rounded object-cover ${isGridView ? "h-[300px]" : " aspect-video md:w-[480px] h-[330px] md:h-full"} `}
            />
            <div
              className={`flex flex-col items-start justify-between p-2.5 w-full gap-2 `}
            >
              <div className={"flex justify-between items-center w-full"}>
                <h1
                  className={
                    "text-3xl tracking-tight font-black group-hover:text-tiolet/90 transition-all ease-linear "
                  }
                >
                  {project.title}
                </h1>
                <p className={"text-muted-foreground font-medium text-xs"}>
                  {project.year}
                </p>
              </div>

              <p className={"text-muted-foreground font-light text-sm"}>
                {project.shortDescription}
              </p>
              <Link
                className={`mx-auto block  ${isGridView ? "mt-3" : "mt-auto"} `}
                href={`/projects/${project.title.toLowerCase().replaceAll(" ", "-")}`}
              >
                <Button>Explore Project</Button>
              </Link>
            </div>
          </CardContent>
        </Card> */}
      </motion.div>
    </>
  );
}
