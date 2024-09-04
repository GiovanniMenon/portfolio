type Tag = "Python" | "Typescript" | "Go" | "C" | "C++" | "React" | "Sql";

interface ProjectInterface {
  title: string;
  url: string;
  description: string;
  year: string;
  imgPath: string;
  linkPreview?: string;
  tag?: Tag[];
}

export type { Tag };
export default ProjectInterface;
