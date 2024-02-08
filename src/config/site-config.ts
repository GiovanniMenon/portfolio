// Skills List and interface

export type GridItemLayout = "1x1" | "1x2" | "2x1" | "2x2" | "3x3";
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
    title: "C",
    icon: "/c.png",
  },
  {
    layout: "1x2",
    type: "Icon",
    title: "Qt",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Dart",
  },
  {
    layout: "2x1",
    type: "Icon",
    title: "Flutter",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "JavaScript",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Html",
  },
  {
    layout: "2x1",
    type: "Icon",
    title: "TypeScript",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "C++",
  },

  {
    layout: "1x1",
    type: "Icon",
    title: "WireShark",
  },
  {
    layout: "3x3",
    type: "Icon",
    title: "Next.js",
  },
  {
    layout: "2x2",
    type: "Icon",
    title: "React",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Tailwind",
  },
  {
    layout: "2x2",
    type: "Icon",
    title: "Python",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "OpenAi",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Css",
  },
  {
    layout: "1x2",
    type: "Icon",
    title: "LangChain",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "PostreSQL",
  },
  {
    layout: "1x2",
    type: "Icon",
    title: "Github",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Git",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Flask",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Ollama",
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
    title: "Redis",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "MySql",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Jira",
  },
];

// Project List and interface
export interface ProjectItemInterface {
  title: string;
  link: string;
  desc: string;
  demo?: string;
}
export const Projects: ProjectItemInterface[] = [
  {
    title: "Arcane Oracle",
    link: "https://github.com/GiovanniMenon/Arcane-Oracle",
    desc: "A desktop application designed for the Object-Oriented Programming course, allowing the management of a card deck generated via the DALL·E 2 API",
  },
  {
    title: "Open Blue",
    link: "https://github.com/GiovanniMenon/OpenBlue",
    desc: "A Flask-based web interface facilitating user interaction with the OpenAI API, enabling requests and responses powered by GPT-3.5 and GPT-4 models.",
  },
];

// Experience List and interface

export interface ExperienceItemInterface {
  isStudy: boolean;
  title: string;
  start: string;
  end: string;
  role?: string;
  description?: string;
  //Study
  location?: string;
  vote?: number;
}

export const Experiences: ExperienceItemInterface[] = [
  {
    isStudy: false,
    title: "GDS SPA",
    role: "Intern as Software Developer",
    start: "Aug 2023",
    end: "Oct 2023",
    description: "Descrizione Experiences",
  },
];

export const Studies: ExperienceItemInterface[] = [
  {
    isStudy: true,
    title: "Computer Science Degree",
    location: "University of Padua",
    start: "Sept 2021",
    end: "Present",
  },
  {
    isStudy: true,
    title: "High School Diploma in Administration, Finance and Marketing",
    location: "ITET Einaudi",
    start: "Sept 2015",
    end: "Jun 2021",
    vote: 100,
  },
];
