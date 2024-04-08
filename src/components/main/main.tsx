import MainItem from "@/components/main/mainItem/mainItem";
import React from "react";
import Footer from "@/components/footer/footer";
import TechnologiesSkill from "@/components/main/technologies/technologiesSkill";
import ProjectGrid from "@/components/main/project/projectGrid";
import ExperienceGrid from "@/components/main/experience/experienceGrid";
import { TracingBeam } from "@/components/ui/tracing-beam";
function Main() {
  const text = `
        I am a 21-year-old Italian student deeply passionate about technology and innovation.
        Currently, I am in my third year pursuing a Bachelor's degree in Computer Science (Department of Mathematics) at the University of Padua.`;

  return (
    <TracingBeam className="">
      <div className=" max-w-[1300px] mx-auto  p-[25px] flex flex-col md:gap-20 antialiased relative">
        <MainItem id="aboutMe" header="About Me">
          <p className="text-secondary-foreground opacity-70 flex flex-col">
          <span>{text}</span>
          <span>Simultaneously, I am actively engaged in preparing a Research Project in the field of Cyber Security, which will serve as
          centerpiece of my Bachelor's thesis. My primary interests lie in the realm of Information Security, with a particular focus on
          Network Security. After graduation, I plan to continue my studies in this field.</span>
          </p>
          <TechnologiesSkill></TechnologiesSkill>
        </MainItem>
        <MainItem id="experience" header="Experience">
          <ExperienceGrid></ExperienceGrid>
        </MainItem>
        <MainItem id="project" header="Project">
          <ProjectGrid />
        </MainItem>
        <Footer></Footer>
      </div>
    </TracingBeam>
  );
}

export default Main;
