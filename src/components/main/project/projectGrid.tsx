import { Projects } from "@/config/site-config";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProjectGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {Projects.map(({ desc, link, technologies, title }, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle className={"text-xl opacity-90"}>{title}</CardTitle>
              <CardDescription>
                {technologies.map((technology, index) => (
                  <span key={index}>{technology} </span>
                ))}
              </CardDescription>
            </CardHeader>
            <CardContent className={"text-base opacity-70"}>{desc}</CardContent>
            <CardFooter>
              <div className="flex flex-row w-full justify-end">
                <Button variant={"link"} size={"icon"}>
                  <Link href={link} rel="noopener noreferrer" target="_blank">
                    <svg
                      className="with-icon_icon__MHUeb "
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      style={{
                        color: "var(--geist-foreground)",
                        width: "22px",
                        height: "22px",
                      }}
                    >
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44
                         5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09
                          1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009
                           18.13V22"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default ProjectGrid;
