"use client";
import ProjectsList from "@/config/project";
import Project from "@/components/projects/project";
import { FilterIcon, Grid2X2Icon, ListIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Home() {
  const [isGridView, setIsGridView] = useState(false);
  const setView = (isGrid: boolean) => {
    setIsGridView(isGrid);
  };
  return (
    <main
      className={
        "w-full flex-col flex justify-center items-center p-4 gap-5 mb-8"
      }
    >
      <div className={"flex flex-row justify-between items-center w-full"}>
        <h1 className={"text-lg tracking-tight font-bold"}>
          <span className={"text-tiolet"}>All</span> Projects:{" "}
          {ProjectsList.length}
        </h1>
        <div className={"flex justify-between items-center gap-5 "}>
          <Button
            variant={"outline"}
            size={"sm"}
            className={"flex flex-row justify-between items-center gap-2"}
          >
            <FilterIcon className={"size-4"} />
            <span className={"font-bold tracking-wide"}>Filter </span>
          </Button>

          <div className={"md:flex justify-between items-center hidden  "}>
            <Button
              variant={!isGridView ? "secondary" : "ghostNoHover"}
              size={"sm"}
              className={"h-fit w-fit p-2"}
              onClick={() => setView(false)}
            >
              <ListIcon className={"size-4"} />
            </Button>
            <Button
              variant={isGridView ? "secondary" : "ghostNoHover"}
              size={"sm"}
              className={"h-fit w-fit p-2"}
              onClick={() => setView(true)}
            >
              <Grid2X2Icon className={"size-4"} />
            </Button>
          </div>
        </div>
      </div>
      <Separator className={"h-[2px] rounded opacity-75"} />
      <div
        className={`gap-2 ${isGridView ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col"}`}
      >
        {ProjectsList.slice(0, 3).map((project, index) => (
          <Project key={index} project={project} isGridView={isGridView} />
        ))}
      </div>
    </main>
  );
}
