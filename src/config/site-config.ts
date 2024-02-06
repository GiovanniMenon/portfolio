export type GridItemLayout = "1x1" | "1x2" | "2x1" | "2x2" | "3x2" | "2x3";
export type GridItemType = "Icon";

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  color?: string;
}

export const GridItems: GridItemInterface[] = [
  {
    layout: "1x1",
    type: "Icon",
    title: "Javascript",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "TypeScript",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Next",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "React",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "C",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "C++",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Dart",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Python",
  },

  {
    layout: "1x1",
    type: "Icon",
    title: "Flutter",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Qt",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "flask",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Ollama",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Langchain",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "OpenAi",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Git",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Github",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Jira",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "MySql",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Redis",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "ChromaDB",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "MinIO",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "AmazonS3",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "PostreSQL",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Nmap",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "WireShark",
  },
];
