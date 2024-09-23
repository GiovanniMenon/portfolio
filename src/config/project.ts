import ProjectInterface from "@/interfaces/project";
import { Tag } from "@/interfaces/project";

const ProjectsList: ProjectInterface[] = [
  {
    title: "Portfolio",
    url: "https://github.com/GiovanniMenon/Arcane-Oracle",
    description:
      "A desktop application designed for the Object-Oriented Programming course, allowing the management of a card deck generated via the DALL·E 2 API",
    year: "Sept 2024",
    imgPath: "",
    tag: ["NextJs", "React", "Typescript"],
    contributorGithub: "Endy Hysa",
    contributorName: "Endy Hysa",
  },
  {
    title: "Research Project",
    url: "",
    description: "Internship as researcher at the University of Padua.",
    year: "May 2024",
    imgPath: "",
    tag: ["Go"],
    download: "",
  },
  {
    title: "Knowledge Managment AI",
    url: "https://github.com/CodingCowboys10/kmai",
    description:
      "Built a Web Application with Next.js that enables users to chat and have conversations with a local LLM (Language Model) about pre-loaded documents.",
    year: "Oct 2023",
    imgPath: "",
    tag: ["NextJs", "React", "Typescript"],
  },
  {
    title: "OpenBlue",
    url: "https://github.com/GiovanniMenon/Arcane-Oracle",
    description:
      "A desktop application designed for the Object-Oriented Programming course, allowing the management of a card deck generated via the DALL·E 2 API",
    year: "Aug 2023",
    imgPath: "",
    tag: ["Python", "Flask", "Javascript"],
    contributorName: "Endy Hysa",
  },
  {
    title: "Arcane Oracle",
    url: "https://github.com/GiovanniMenon/Arcane-Oracle",
    description:
      "A desktop application designed for the Object-Oriented Programming course, allowing the management of a card deck generated via the DALL·E 2 API",
    year: "Mar 2023",
    imgPath: "",
    tag: ["C++", "Qt"],
    contributorName: "Endy Hysa",
  },
];

export default ProjectsList;
