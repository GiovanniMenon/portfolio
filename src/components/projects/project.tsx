import ProjectInterface from "@/interfaces/project";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export default function Project(Project: ProjectInterface) {
  return (
    <Card
      className={
        "bg-card/30 border-white border-opacity-5 rounded p-1 group hover:bg-card/80 hover:cursor-pointer " +
        "transition-all ease-linear"
      }
    >
      <CardContent className={"p-0 w-full flex relative"}>
        <div
          className={"min-w-[40%] h-[150px] bg-secondary min-h-full rounded"}
        >
          {Project.imgPath}
        </div>
        <div
          className={"flex flex-col items-start justify-start pl-2 pr-1 w-full"}
        >
          <div className={"flex justify-between w-full items-center"}>
            <h1
              className={
                "text-2xl tracking-tight font-black group-hover:text-tiolet transition-all ease-linear "
              }
            >
              {Project.title}
            </h1>
            <p className={"text-white text-opacity-80 font-bold text-xs"}>
              {Project.year}
            </p>
          </div>

          <p className={"text-white text-opacity-80 font-light text-sm"}>
            {Project.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
