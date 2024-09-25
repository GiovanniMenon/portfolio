import ProjectsList from "@/config/project";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Project from "@/components/projects/project";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Book,
  BookAIcon,
  BookOpenIcon,
  DownloadIcon,
  GithubIcon,
} from "lucide-react";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

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
          src={project.imgPath}
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
        <p className={"text-muted-foreground text-base"}>
          {project.description}
        </p>
        {project.download && (
          <Link
            className=""
            href={project.download}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              className={
                "flex flex-row gap-2 items-center justify-center h-12 rounded border"
              }
              variant={"outlineBorderNo"}
            >
              <Book className={"size-5 "} />
              <Separator
                orientation={"vertical"}
                className={"w-[2px] rounded"}
              />
              <p className={"text-sm font-bold"}>Research Document</p>
            </Button>
          </Link>
        )}
        {project.contributorGithub && (
          <Link
            className=""
            href={project.contributorGithub}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              className={
                "flex flex-row gap-2 items-center justify-center h-14 rounded border"
              }
              variant={"outline"}
            >
              <Book className={"size-5 "} />
              <Separator
                orientation={"vertical"}
                className={"w-[2px] rounded"}
              />
              <p className={"text-sm font-bold"}>{project.contributorName}</p>
            </Button>
          </Link>
        )}
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
        <div className={"flex w-full gap-4"}>
          <Link href={project.url} className={""}>
            <Button className={"bg-tiolet "}>
              <GitHubLogoIcon className={"size-5"} />
            </Button>
          </Link>

          {project.linkPreview && (
            <Link href={project.linkPreview} className={""}>
              <Button className={"bg-tiolet flex gap-4"}>
                <GlobeIcon className={"size-5"} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
