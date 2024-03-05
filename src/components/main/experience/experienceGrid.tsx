import ExperienceItem from "@/components/main/experience/experienceItem";

import { Experiences, Studies } from "@/config/site-config";
import React from "react";
import { Separator } from "@/components/ui/separator";

function ExperienceGrid() {
  return (
    <div className="flex flex-col w-full gap-16">
      <Separator />
      <div className="flex flex-col gap-10">
        <h1 className="w-full font-extrabold text-xl text-secondary-foreground opacity-85 ">
          Works
        </h1>
        {Experiences.map((item, index) => {
          return (
            <ExperienceItem
              isStudy={false}
              key={index}
              title={item.title}
              start={item.start}
              role={item.role}
              end={item.end}
              description={item.description}
            ></ExperienceItem>
          );
        })}
      </div>
      <Separator />
      <div className="flex flex-col gap-10">
        <h1 className="w-full font-bold text-xl text-secondary-foreground opacity-85 ">
          Studies
        </h1>
        {Studies.map((item, index) => {
          return (
            <ExperienceItem
              isStudy={true}
              title={item.title}
              start={item.start}
              end={item.end}
              location={item.location}
              vote={item.vote}
              key={index}
            ></ExperienceItem>
          );
        })}
      </div>
      <Separator />
    </div>
  );
}

export default ExperienceGrid;
