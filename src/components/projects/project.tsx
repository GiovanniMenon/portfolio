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
        className={"hidden lg:block"}
      >
        <Link href={`/projects/${project.title.replaceAll(" ", "_")}`}>
          <Card
            className={
              `bg-card/30 border-white border-opacity-5 rounded p-1 group hover:bg-card/90 hover:cursor-pointer ` +
              `transition-all ease-linear  ${isGridView ? "md:h-full" : "md:h-full"} `
            }
          >
            <CardContent
              className={`p-0 w-full h-full flex ${isGridView ? "flex-col gap-y-3.5" : "flex-col md:flex-row"}`}
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
                className={`flex flex-col items-start justify-start p-2.5 pb-1 w-full gap-1.5`}
              >
                <div className={"flex justify-between items-center w-full"}>
                  <h1
                    className={
                      "text-3xl tracking-tight font-black group-hover:text-tiolet/90 transition-all ease-linear "
                    }
                  >
                    {project.title}
                  </h1>
                  <p className={"text-muted-foreground font-bold text-xs"}>
                    {project.year}
                  </p>
                </div>

                <p className={"text-muted-foreground font-light text-sm"}>
                  {project.description.slice(0, 300) + "..."}
                </p>
                <div
                  className={`flex flex-row gap-2  ${isGridView ? "mt-3" : "mt-auto"}`}
                >
                  {project.tag?.slice(0, 5).map((tag, index) => (
                    <Badge
                      key={index}
                      className={"w-fit p-1.5 font-bold"}
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
      </motion.div>
      <Card
        className={
          `bg-card/30 border-white border-opacity-5 rounded p-1 group hover:bg-card/90 hover:cursor-pointer ` +
          `transition-all ease-linear  md:h-full  block lg:hidden`
        }
      >
        <CardContent
          className={`p-0 w-full h-full flex flex-col${isGridView ? " gap-y-3.5" : " md:flex-row"} relative`}
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
              <p className={"text-muted-foreground font-bold text-xs"}>
                {project.year}
              </p>
            </div>

            <p className={"text-muted-foreground font-light text-sm"}>
              {project.description.slice(0, 300) + "..."}
            </p>
            <Link
              className={`mx-auto mt-auto ${isGridView ? "hidden" : "block"} `}
              href={`/projects/${project.title.replaceAll(" ", "_")}`}
            >
              <Button>Explore Project</Button>
            </Link>
          </div>
        </CardContent>
        <CardFooter className={` ${isGridView ? "block" : "hidden"}`}>
          <Link
            className={`mx-auto mt-auto ${isGridView ? "" : ""} `}
            href={`/projects/${project.title.replaceAll(" ", "_")}`}
          >
            <Button>Explore Project</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
