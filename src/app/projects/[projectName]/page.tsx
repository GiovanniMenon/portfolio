import ProjectsList from "@/config/project";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Project from "@/components/projects/project";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { projectName: string };
}) {
  const project = ProjectsList.find(
    (item) => item.title === params.projectName.replaceAll("_", " "),
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
  };
}

export default function Page({ params }: { params: { projectName: string } }) {
  const project = ProjectsList.find(
    (item) => item.title === params.projectName.replaceAll("_", " "),
  );

  if (!project) {
    notFound();
  }
  return (
    <main
      className={
        "w-full flex-col flex justify-center items-center p-4 gap-7 mb-20"
      }
    >
      <div className={"flex w-full justify-between items-center mt-2"}>
        <h1 className={"leading-none text-4xl font-bold"}>{project?.title}</h1>
        <p className={"leading-none text-sm text-muted-foreground font-bold"}>
          {project?.year}
        </p>
      </div>
      <Separator className={"h-[2px] rounded opacity-75"} />
      <div className={"overflow-hidden rounded"}>
        <Image
          src={"/arcaneOracle.jpg"}
          alt={"logo ARCANE oraclae"}
          width={1500}
          height={1500}
          className={`w-full h-[400px] rounded object-contain `}
          style={{
            color: "transparent",

            objectFit: "contain",
          }}
          loading={"lazy"}
          decoding={"async"}
        />
      </div>
      <Separator className={"h-[2px] rounded opacity-75"} />
      <div className={"flex flex-col w-full gap-5"}>
        <h1 className={"leading-none text-2xl font-bold"}>Description</h1>
        <p className={"text-muted-foreground text-sm"}>{project.description}</p>
      </div>
      <Separator className={"h-[2px] rounded opacity-75"} />
      <div className={"flex flex-col w-full gap-5"}>
        <h1 className={"leading-none text-2xl font-bold rounded"}>
          Technologies used
        </h1>
        <div className={"flex flex-row gap-2"}>
          {project.tag?.map((tag, index) => (
            <Badge
              key={index}
              className={"w-fit p-2 font-bold"}
              variant={"secondary"}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Separator className={"h-[2px] rounded opacity-75"} />
      <div className={"flex flex-col w-full gap-5"}>
        <h1 className={"leading-none text-2xl font-bold rounded"}>Links</h1>
        {project.linkPreview && (
          <Link href={project.linkPreview}>
            <Button className={"bg-tiolet"} />
          </Link>
        )}
      </div>
    </main>
  );
}
