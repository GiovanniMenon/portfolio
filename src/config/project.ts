import ProjectInterface from "@/interfaces/project";
import { Tag } from "@/interfaces/project";

const ProjectsList: ProjectInterface[] = [
  {
    title: "Portfolio",
    url: "https://github.com/GiovanniMenon/portfolio",
    description:
      "A personal portfolio website developed using Next.js, React, and TypeScript. This responsive site presents an overview of my journey in web development, featuring some of the projects I've worked on. It includes information about my educational background and the programming languages and tools I've been learning. The site also provides ways to get in touch with me and links to my professional social media profiles. " +
      "Through this portfolio, I aim to share my progress as a developer and connect with others in the field.",
    year: "Sept 2024",
    imgPath: "",
    tag: ["NextJs", "React", "Typescript"],
    linkPreview: "https://giovanni-menon.vercel.app/",
  },
  {
    title: "Evaluating Quic Resilience",
    url: "https://github.com/GiovanniMenon/Evaluating-Quic-Resilience-Selective-Traffic-Manipulation-",
    description:
      "A research internship project conducted at the University of Padua, focusing on evaluating the resilience of the QUIC (Quick UDP Internet Connections) protocol in modern networks. The study, supervised by Prof. Alessandro Galeazzi and in collaboration with Dr. Enrico Bassetti, investigated potential vulnerabilities in QUIC, particularly in the context of mobile data traffic billing. The project involved an in-depth analysis of the QUIC protocol, examining its current state-of-the-art, associated technologies, and intrinsic logic. This was followed by the design and implementation of experiments to test identified strategies that could potentially be exploited to artificially manipulate mobile traffic. The research findings suggest that certain manipulation strategies could lead to increased data traffic for targeted users, potentially resulting in higher data consumption and associated costs." +
      " This work contributes to the ongoing discussion on network protocol security and its implications for end-users. " +
      "Technologies used included Go for implementation, VirtualBox for creating controlled testing environments, and Wireshark for network traffic analysis.",
    year: "May 2024",
    imgPath: "/Evaluating_QUIC.png",
    tag: ["Go", "VirtualBox", "Wireshark"],
    linkPreview: "https://giovanni-menon.vercel.app/",
    download: "/Menon_Giovanni.pdf",
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
