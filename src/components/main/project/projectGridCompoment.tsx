import ProjectItem from "@/components/main/project/projectItem";
import { Projects } from "@/config/site-config";
import React from "react";
function ProjectGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      {Projects.map((item, index) => {
        return (
          <ProjectItem
            title={item.title}
            link={item.link}
            desc={item.desc}
            key={index}
          ></ProjectItem>
        );
      })}
    </div>
  );
}

export default ProjectGrid;
