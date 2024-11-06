import { ReactNode } from "react";

type Tag = "Python" | "Typescript" | "Go" | "C" | "C++" | "React" | "Sql";

export const definedTags: Tag[] = [
  "Python",
  "Typescript",
  "Go",
  "C",
  "C++",
  "React",
  "Sql",
];
interface ProjectInterface {
  title: string;
  url: string;
  longDescription: ReactNode;
  shortDescription: string;
  year: string;
  imgPath: string;
  linkPreview?: string;
  tag?: string[];
  download?: string;
  contributorGithub?: string;
  contributorName?: string;
}

export type { Tag };
export default ProjectInterface;
