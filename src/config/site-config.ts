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
    color: "rgba(0,88,155,0.2)",
  },
  {
    layout: "1x2",
    type: "Icon",
    title: "Qt",
    icon: "/tecIcon/qt.png",
    color: "rgb(63,203,79 , .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Dart",
    icon: "/tecIcon/dart.png",
    color: "rgb(1,208,182, .2)",
  },
  {
    layout: "2x1",
    type: "Icon",
    title: "Flutter",
    icon: "/tecIcon/flutter.png",
    color: "rgb(64,206,250, .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "JavaScript",
    icon: "/tecIcon/javascript.png",
    color: "rgb(238,218,77, .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Html",
    icon: "/tecIcon/html.png",
    color: "rgb(239,88,26, .2)",
  },
  {
    layout: "2x1",
    type: "Icon",
    title: "TypeScript",
    icon: "/tecIcon/typescript.png",
    color: "rgb(48,119,196, .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "C++",
    icon: "/tecIcon/cpp.png",
    color: "rgb(1,89,156, .2)",
  },

  {
    layout: "1x1",
    type: "Icon",
    title: "Postman",
    icon: "/tecIcon/postman.png",
    color: "rgb(251,106,54 , .2)",
  },
  {
    layout: "3x3",
    type: "Icon",
    title: "Next.js",
    icon: "/tecIcon/nextjs.png",
    color: "rgba(0, 0, 0, 0.3)",
  },
  {
    layout: "2x2",
    type: "Icon",
    title: "React",
    icon: "/tecIcon/react.png",
    color: "rgb(95,215,247, .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Tailwind",
    icon: "/tecIcon/tailwind.svg",
    color: "rgb(56,188,246 , .2)",
  },
  {
    layout: "2x2",
    type: "Icon",
    title: "Python",
    icon: "/tecIcon/python.png",
    color: "rgb(58,118,166 , .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "OpenAi",
    icon: "/tecIcon/openai.png",
    color: "rgb(15,161,125 , .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Css",
    icon: "/tecIcon/css.png",
    color: "rgb(34,73,225, .2)",
  },
  {
    layout: "1x2",
    type: "Icon",
    title: "LangChain",
    icon: "/tecIcon/langchain.png",
    color: "rgb(147,175,69, .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "PostreSQL",
    icon: "/tecIcon/postresql.png",
    color: "rgb(34,89,134, .2)",
  },
  {
    layout: "1x2",
    type: "Icon",
    title: "Github",
    icon: "/tecIcon/github.png",
    color: "rgb(21,21,22, .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Git",
    icon: "/tecIcon/git.png",
    color: "rgb(63,45,0, .1)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Flask",
    icon: "/tecIcon/flask.png",
    color: "rgb(252,252,252 , .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Ollama",
    icon: "/tecIcon/ollama.svg",
    color: "rgb(252,252,252 , .3)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "ChromaDB",
    icon: "/tecIcon/chroma.png",
    color: "rgb(253,99,70 , .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "MinIO",
    icon: "/tecIcon/minio.png",
    color: "rgb(195,43,70,.2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Redis",
    icon: "/tecIcon/redis.png",
    color: "rgb(159,29,14, .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "MySql",
    icon: "/tecIcon/mysql.png",
    color: "rgb(170,110,18, .2)",
  },
  {
    layout: "1x1",
    type: "Icon",
    title: "Jira",
    icon: "/tecIcon/jira.svg",
    color: "rgb(38,131,253, .2)",
  },
];

// Project List and interface
export interface ProjectItemInterface {
  title: string;
  link: string;
  desc: string;
  technologies: string[];
  demo?: string;
}
export const Projects: ProjectItemInterface[] = [
  {
    title: "Research Project",
    link: "",
    desc: "Internship as researcher at the University of Padua.",
    technologies: ["Network Security" , "Bash"],
  },
  {
    title: "Knowledge Managment AI",
    link: "https://github.com/CodingCowboys10/kmai",
    desc: "Built a Web Application with Next.js that enables users to chat and have conversations with a local LLM (Language Model) about pre-loaded documents.",
    technologies: ["Next.js", "OpenAi", "TypeScript", "Js", "Shacdn/ui", "Tailwind"],
  },
  {
    title: "Arcane Oracle",
    link: "https://github.com/GiovanniMenon/Arcane-Oracle",
    desc: "A desktop application designed for the Object-Oriented Programming course, allowing the management of a card deck generated via the DALL·E 2 API",
    technologies: ["C++", "Cmake", "Qmake", "Qt"],
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
    title: "Global Display Solution",
    role: "Intern as Software Developer",
    start: "Aug 2023",
    end: "Oct 2023",
    description:
      "I worked as a Software Developer on a web interface to integrate the OpenAI API into the company's operations. My role in the project involved designing and developing the logic, interface, and backend. The primary goal of the project was to incorporate artificial intelligence into the company's activities.",
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
