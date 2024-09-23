type Tag =
  | "Python"
  | "Typescript"
  | "Go"
  | "C"
  | "C++"
  | "React"
  | "Sql"
  | string;

interface ProjectInterface {
  title: string;
  url: string;
  description: string;
  year: string;
  imgPath: string;
  linkPreview?: string;
  tag?: Tag[];
  download?: string;
  contributorGithub?: string;
  contributorName?: string;
}

export type { Tag };
export default ProjectInterface;
