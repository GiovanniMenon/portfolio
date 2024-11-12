import ProjectsList from "@/config/project";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Book, UsersIcon } from "lucide-react";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

export async function generateMetadata({
  params,
}: {
  params: { projectName: string };
}) {
  const project = ProjectsList.find(
    (item) => item.title.toLowerCase() === params.projectName.replaceAll("-", " "),
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
    (item) => item.title.toLowerCase() === params.projectName.replaceAll("-", " "),
  );

  if (!project) {
    notFound();
  }
  return (
    <main
      className={
        "w-full flex-col flex justify-center items-center p-4  gap-7 mb-20"
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
          alt={`Screen of ${project.title}`}
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
        <div className={"text-muted-foreground text-base"}>
          {project.longDescription}
        </div>
        <div className={"flex flex-col w-full gap-5"}>
          <div className={"flex flex-wrap w-full gap-4"}>
            {project.download && (
              <Link
                className=""
                href={project.download}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  className={
                    "flex flex-row gap-2 items-center justify-center h-12 rounded border w-[200px]"
                  }
                  variant={"outlineBorderNo"}
                >
                  <Book className={"size-5 text-tiolet"} />
                  <Separator
                    orientation={"vertical"}
                    className={"w-[2px] rounded"}
                  />
                  <p className={"text-sm font-bold"}>Research Document</p>
                </Button>
              </Link>
            )}
            {project.contributorGithub && project.contributorName && (
              <Link
                className=""
                href={project.contributorGithub}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  className={
                    "flex flex-row gap-2 items-center justify-center h-12 rounded border"
                  }
                  variant={"outlineBorderNo"}
                >
                  <UsersIcon className={"size-5 text-tiolet"} />
                  <Separator
                    orientation={"vertical"}
                    className={"w-[2px] rounded"}
                  />
                  <p className={"text-sm font-bold"}>
                    {project.contributorName}
                  </p>
                </Button>
              </Link>
            )}
            <Link
              className=""
              href={project.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button
                className={
                  "flex flex-row gap-2 items-center justify-center h-12 rounded border"
                }
                variant={"outlineBorderNo"}
              >
                <GitHubLogoIcon className={"size-5 text-tiolet"} />
                <Separator
                  orientation={"vertical"}
                  className={"w-[2px] rounded"}
                />
                <p className={"text-sm font-bold"}>GitHub page</p>
              </Button>
            </Link>

            {project.linkPreview && (
              <Link
                className=""
                href={project.linkPreview}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  className={
                    "flex flex-row gap-2 items-center justify-center h-12 rounded border"
                  }
                  variant={"outlineBorderNo"}
                >
                  <GlobeIcon className={"size-5 text-tiolet"} />
                  <Separator
                    orientation={"vertical"}
                    className={"w-[2px] rounded"}
                  />
                  <p className={"text-sm font-bold"}>Website</p>
                </Button>
              </Link>
            )}
          </div>
        </div>
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
              className={"w-fit p-2 font-bold text-sm"}
              variant={"secondary"}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Separator className={"h-[2px] rounded opacity-75"} />
    </main>
  );
}
