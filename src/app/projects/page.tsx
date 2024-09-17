"use client";
import ProjectsList from "@/config/project";
import Project from "@/components/projects/project";
import { FilterIcon, Grid2X2Icon, ListIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tag } from "@/interfaces/project";

export default function Home() {
  const [isGridView, setIsGridView] = useState(false);
  const [selectedTag, setSelectedTag] = useState<Tag | "All">("All");
  const allTags = useMemo(() => {
    const tags = new Set<Tag>();
    ProjectsList.forEach((project) => {
      project.tag?.forEach((tag) => tags.add(tag));
    });
    return ["All", ...Array.from(tags)] as const;
  }, []);
  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") {
      return ProjectsList;
    }
    return ProjectsList.filter((project) =>
      project.tag?.includes(selectedTag as Tag),
    );
  }, [selectedTag]);
  return (
    <main
      className={
        "w-full flex-col flex justify-center items-center p-4 gap-5 mb-8"
      }
    >
      <div className={"flex flex-row justify-between items-center w-full"}>
        <h1 className={"text-lg tracking-tight font-bold"}>
          <span className={"text-tiolet"}>{selectedTag}</span> Projects:{" "}
          {filteredProjects.length}
        </h1>
        <div className={"flex justify-between items-center gap-5 "}>
          <Select
            onValueChange={(value) => setSelectedTag(value as Tag | "All")}
          >
            <SelectTrigger>
              <div
                className={
                  "flex flex-row justify-between items-center gap-2 pr-2"
                }
              >
                <FilterIcon className={"size-4"} />
                <span className={"font-bold tracking-wide"}>
                  {selectedTag == "All" ? "Filter" : selectedTag}
                </span>
              </div>
            </SelectTrigger>
            <SelectContent>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className={"md:flex justify-between items-center hidden  "}>
            <Button
              variant={!isGridView ? "secondary" : "ghostNoHover"}
              size={"sm"}
              className={"h-fit w-fit p-2"}
              onClick={() => setIsGridView(false)}
            >
              <ListIcon className={"size-4"} />
            </Button>
            <Button
              variant={isGridView ? "secondary" : "ghostNoHover"}
              size={"sm"}
              className={"h-fit w-fit p-2"}
              onClick={() => setIsGridView(true)}
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
        {filteredProjects.slice(0, 3).map((project, index) => (
          <Project key={index} project={project} isGridView={isGridView} />
        ))}
      </div>
    </main>
  );
}
