import React, { ReactNode } from "react";
import { GridItems } from "@/config/site-config";
import GridItem from "@/components/main/technlogies/gridItem";
function GridSkill() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-bold text-lg">Technologies</h2>
      {/* Bento Grid*/}
      <div className="grid mx-auto w-[80%] h-full grid-cols-10 auto-rows-[70px] gap-2.5 ">
        {GridItems.map((item, index) => {
          return (
            <GridItem size={item.layout} key={index}>
              {item.title}
            </GridItem>
          );
        })}
      </div>
    </div>
  );
}

export default GridSkill;