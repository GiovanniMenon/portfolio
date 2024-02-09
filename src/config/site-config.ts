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
    icon: "/tecIcon/c.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x2",
    type: "Icon",
    title: "Qt",
    icon: "/tecIcon/qt.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Dart",
    icon: "/tecIcon/dart.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "2x1",
    type: "Icon",
    title: "Flutter",
    icon: "/tecIcon/flutter.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "JavaScript",
    icon: "/tecIcon/javascript.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Html",
    icon: "/tecIcon/html.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "2x1",
    type: "Icon",
    title: "TypeScript",
    icon: "/tecIcon/typescript.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "C++",
    icon: "/tecIcon/cpp.png",
    color: "rgba(114,114,114,.1)",
  },

  {
    layout: "1x1",
    type: "Icon",
    title: "Postman",
    icon: "/tecIcon/postman.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "3x3",
    type: "Icon",
    title: "Next.js",
    icon: "/tecIcon/nextjs.png",
    color: "rgba(64, 207, 142, 0.4)",
  },
  {
    layout: "2x2",
    type: "Icon",
    title: "React",
    icon: "/tecIcon/react.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Tailwind",
    icon: "/tecIcon/tailwind.svg",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "2x2",
    type: "Icon",
    title: "Python",
    icon: "/tecIcon/python.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "OpenAi",
    icon: "/tecIcon/openai.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Css",
    icon: "/tecIcon/css.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x2",
    type: "Icon",
    title: "LangChain",
    icon: "/tecIcon/langchain.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "PostreSQL",
    icon: "/tecIcon/postresql.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x2",
    type: "Icon",
    title: "Github",
    icon: "/tecIcon/github.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Git",
    icon: "/tecIcon/git.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Flask",
    icon: "/tecIcon/flask.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Ollama",
    icon: "/tecIcon/ollama.svg",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "ChromaDB",
    icon: "/tecIcon/chroma.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "MinIO",
    icon: "/tecIcon/minio.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Redis",
    icon: "/tecIcon/redis.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "MySql",
    icon: "/tecIcon/mysql.png",
    color: "rgba(114,114,114,.1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Jira",
    icon: "/tecIcon/jira.svg",
    color: "rgba(114,114,114,.1)",
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
