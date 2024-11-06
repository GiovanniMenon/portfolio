import ProjectInterface from "@/interfaces/project";
import { Tag } from "@/interfaces/project";

const ProjectsList: ProjectInterface[] = [
  {
    title: "Portfolio",
    url: "https://github.com/GiovanniMenon/portfolio",
    shortDescription:
      "A personal portfolio website developed using Next.js, React, and TypeScript. This website presents an overview of my journey in web development, featuring some of the projects I've worked on.",
    longDescription: (
      <>
        A personal portfolio website developed using Next.js, React, and
        TypeScript. This responsive site presents an overview of my journey in
        web development, featuring some of the projects I&apos;ve worked on.
        <br />
        <br />
        It includes information about my educational background and the
        programming languages and tools I&apos;ve been learning. The site also
        provides ways to get in touch with me and links to my professional
        social media profiles. Through this portfolio, I aim to share my
        progress as a developer and connect with others.
      </>
    ),
    year: "Sept 2024",
    imgPath: "/portfolio.png",
    tag: ["NextJs", "React", "Typescript"],
    linkPreview: "https://giovanni-menon.vercel.app/",
  },
  {
    title: "Evaluating Quic Resilience",
    url: "https://github.com/GiovanniMenon/Evaluating-Quic-Resilience-Selective-Traffic-Manipulation-",
    shortDescription:
      "A research internship project conducted at the University of Padua, focusing on evaluating the resilience of the QUIC (Quick UDP Internet Connections) protocol in modern networks. ",
    longDescription: (
      <>
        <p>
          A research internship project conducted at the University of Padua,
          focusing on evaluating the resilience of the{" "}
          <span className="text-white">
            QUIC (Quick UDP Internet Connections) protocol{" "}
          </span>{" "}
          in modern networks. The study, supervised by{" "}
          <span className="text-white"> Prof. Alessandro Galeazzi </span>
          and in collaboration with{" "}
          <span className="text-white"> Dr. Enrico Bassetti </span>,
          investigated potential vulnerabilities in QUIC, particularly in the
          context of mobile data traffic billing.
          <br />
          <br />
          The project involved an in-depth analysis of the QUIC protocol,
          examining its current state-of-the-art, associated technologies, and
          intrinsic logic. This was followed by the design and implementation of
          experiments to test identified strategies that could potentially be
          exploited to artificially manipulate mobile traffic.
          <br />
          <br />
          The research findings suggest that certain manipulation strategies
          could lead to increased data traffic for targeted users, potentially
          resulting in higher data consumption and associated costs. This work
          contributes to the ongoing discussion on network protocol security and
          its implications for end-users. Technologies used included Go for
          implementation, VirtualBox for creating controlled testing
          environments, and Wireshark for network traffic analysis.
        </p>
      </>
    ),
    year: "May 2024",
    imgPath: "/Evaluating_QUIC.png",
    tag: ["Go", "VirtualBox", "Wireshark", "Caddy"],
    linkPreview: "https://hdl.handle.net/20.500.12608/70974",
    download: "/Menon_Giovanni.pdf",
  },
  {
    title: "Knowledge Management AI",
    url: "https://github.com/CodingCowboys10/kmai",
    shortDescription:
      "Knowledge Management AI is a web application developed using Next.js, React, and TypeScript. This innovative project allows users to interact with a local Language Model (LLM) through chats and conversations based on pre-loaded documents.",
    longDescription: (
      <>
        Knowledge Management AI is a web application developed using{" "}
        <span className="text-white">Next.js</span>,{" "}
        <span className="text-white">React</span>, and{" "}
        <span className="text-white">TypeScript</span>. This project allows
        users to interact with a local Language Model (LLM) through chats and
        conversations based on pre-loaded documents. The application supports a
        variety of file formats, including PDF, DOCX, and MP3, and at the same
        time offers a flexible document management.
        <br />
        <br />
        Use <span className="text-white">ChromaDB</span> for efficient vector
        database management and <span className="text-white">Ollama</span> for
        local AI model execution. Users can upload and organize documents with a
        tagging system, with the option for data obscuration in the vector
        database to ensure privacy. A key feature is the ability to initiate
        multiple chat sessions on uploaded documents, with the flexibility to
        change AI models for in the middle of a conversations. The user
        interface is customizable with various themes, and users have full
        control over session management, including the option to delete them.
        <br />
        <br />
        Working on Knowledge Management AI taught me how to{" "}
        <span className="text-white">integrate complex AI models </span> into a
        web application and manage large amounts of data with{" "}
        <span className="text-white">database solutions</span>. It improve my
        understanding of{" "}
        <span className="text-white">software architecture patterns </span>.
        Additionally, I gained hands-on experience in implementing file
        management systems and building customizable user interfaces with modern
        web technologies.
        <br />
        <br />
        <em>
          Full details on system requirements and build instructions are
          available on the project’s GitHub page.
        </em>
      </>
    ),
    year: "Oct 2023",
    imgPath: "/kmai1.png",
    tag: [
      "NextJs",
      "React",
      "Typescript",
      "ChromaDB",
      "MinHo",
      "Amazon S3",
      "Ollama",
      "OpenAI API",
    ],
  },
  {
    title: "Arcane Oracle",
    url: "https://github.com/GiovanniMenon/Arcane-Oracle",
    shortDescription:
      "A desktop application for creating and managing AI-Generated playing cards and decks, developed for the Object-Oriented Programming course of the University of Padua.",
    longDescription: (
      <>
        Arcane Oracle is a desktop application developed for the{" "}
        <span className="text-white">Object-Oriented Programming</span> course
        at the University of Padua in the 2022/2023 academic year, created in
        collaboration with{" "}
        <a
          href="https://github.com/EndyXVIII"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          Endy Hysa
        </a>
        . This project allows users to create, delete, and edit playing cards
        and manage their corresponding decks, using custom images generated by
        the <span className="text-white">DALL·E 2 API</span>
        , with a default image available if no API key is provided.
        <br />
        <br />
        Working on Arcane Oracle taught me essential skills in{" "}
        <span className="text-white">problem-solving </span>
        and <span className="text-white">adapting to new challenges</span>. It
        helped me deepen my understanding of object-oriented programming
        principles, particularly in managing complex data structures, and gave
        me a valuable experience with AI-integrated applications and API use.
        <br />
        <br />
        <em>
          Full details on system requirements and build instructions are
          available on the project’s GitHub page.
        </em>
      </>
    ),

    year: "Mar 2023",
    imgPath: "/arcaneOracle.jpg",
    tag: ["C++", "Qt", "DALL·E 2"],
    contributorName: "Endy Hysa",
    contributorGithub: "https://github.com/EndyXVIII",
  },
];

export default ProjectsList;
