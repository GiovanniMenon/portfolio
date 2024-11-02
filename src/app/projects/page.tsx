"use client";
import ProjectsList from "@/config/project";
import Project from "@/components/projects/project";
import { FilterIcon, Grid2X2Icon, ListIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect, useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { definedTags, Tag } from "@/interfaces/project";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [isGridView, setIsGridView] = useState(false);
  const [selectedTag, setSelectedTag] = useState<Tag | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const allTags = useMemo(() => {
    const tags = new Set<Tag>();
    ProjectsList.forEach((project) => {
      project.tag?.forEach((tag) => {
        if (definedTags.includes(tag as Tag)) {
          tags.add(tag as Tag);
        }
      });
    });
    return ["All", ...Array.from(tags)] as const;
  }, []);
  const filteredProjects = useMemo(() => {
    return ProjectsList.filter((project) => {
      const matchesTag =
        selectedTag === "All" || project.tag?.includes(selectedTag as Tag);
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.tag?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery]);
  return (
    <main
      className={
        "w-full flex-col flex justify-center items-center p-4 gap-5 mb-8"
      }
    >
      <div className={"flex flex-row justify-between items-center w-full "}>
        <h1 className={"hidden md:block text-xl tracking-tight w-full"}>
          <span className={"text-tiolet font-bold"}>{selectedTag} </span>
          <span className={"font-light"}>
            {" "}
            projects: {filteredProjects.length}
          </span>
        </h1>

        <div
          className={
            "flex flex-col md:flex-row justify-between items-center gap-2.5 w-full "
          }
        >
          <Input
            type={"text"}
            name={"searchInput"}
            className={"w-full md:w-[300px] border rounded"}
            placeholder={"Search"}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
          <Select
            onValueChange={(value) => setSelectedTag(value as Tag | "All")}
          >
            <SelectTrigger>
              <div
                className={
                  "flex flex-row justify-between items-center gap-2 pr-2 "
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

          <div
            className={
              "lg:flex justify-between items-center hidden rounded border p-1 h-9"
            }
          >
            <Button
              variant={!isGridView ? "secondary" : "ghostNoHover"}
              size={"sm"}
              className={"h-fit w-fit p-1 rounded"}
              onClick={() => setIsGridView(false)}
            >
              <ListIcon className={"size-5"} />
            </Button>
            <Button
              variant={isGridView ? "secondary" : "ghostNoHover"}
              size={"sm"}
              className={"h-fit w-fit p-1 rounded"}
              onClick={() => setIsGridView(true)}
            >
              <Grid2X2Icon className={"size-5"} />
            </Button>
          </div>
        </div>
      </div>
      <Separator className={"h-[2px] rounded opacity-75"} />
      <div
        className={`gap-2 ${isGridView ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col"} w-full`}
      >
        {filteredProjects.map((project, index) => (
          <Project key={index} project={project} isGridView={isGridView} />
        ))}
        {filteredProjects.length === 0 && (
          <p className={"col-span-2"}>
            No Projects found matching your criteria.{" "}
          </p>
        )}
      </div>
    </main>
  );
}
