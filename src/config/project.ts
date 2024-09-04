import ProjectInterface from "@/interfaces/project";
import { Tag } from "@/interfaces/project";

const ProjectsList: ProjectInterface[] = [
  {
    title: "Research Project",
    url: "",
    description: "Internship as researcher at the University of Padua.",
    year: "2021",
    imgPath: "",
  },
  {
    title: "Knowledge Managment AI",
    url: "https://github.com/CodingCowboys10/kmai",
    description:
      "Built a Web Application with Next.js that enables users to chat and have conversations with a local LLM (Language Model) about pre-loaded documents.",
    year: "",
    imgPath: "",
  },
  {
    title: "Arcane Oracle",
    url: "https://github.com/GiovanniMenon/Arcane-Oracle",
    description:
      "A desktop application designed for the Object-Oriented Programming course, allowing the management of a card deck generated via the DALL·E 2 API",
    year: "",
    imgPath: "",
  },
];

export default ProjectsList;
