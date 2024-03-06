import React, { ReactNode } from "react";
import { GridItems } from "@/config/site-config";
import TechnologiesItem from "@/components/main/technologies/technologiesItem";

function TechnologiesSkill() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-bold text-lg">Technologies</h2>
      {/* Bento Grid*/}
      <div className="grid mx-auto w-full md:w-[98%] h-full grid-cols-2 md:grid-cols-9 auto-rows-[80px] gap-2.5 ">
        {GridItems.map((item, index) => {
          return (
            <TechnologiesItem
              icon={item.icon}
              title={item.title}
              size={item.layout}
              color={item.color}
              key={index}
            ></TechnologiesItem>
          );
        })}
      </div>
    </div>
  );
}

export default TechnologiesSkill;
