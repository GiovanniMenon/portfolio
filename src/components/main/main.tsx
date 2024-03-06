import MainItem from "@/components/main/mainItem/mainItem";
import React from "react";
import Footer from "@/components/footer/footer";
import TechnologiesSkill from "@/components/main/technologies/technologiesSkill";
import ProjectGrid from "@/components/main/project/projectGrid";
import ExperienceGrid from "@/components/main/experience/experienceGrid";
import { TracingBeam } from "@/components/ui/tracing-beam";
function Main() {
  const text = `
        I am a 21-year-old Italian student deeply passionate about technology and innovation. Currently, I am in my third year pursuing a Bachelor's degree in Computer Science (Department of Mathematics) at the University of Padua. After graduation, I plan to continue my studies in the field of cyber security, which has always been the branch of computer science I am most passionate about.`;

  return (
    <TracingBeam className="">
      <div className=" max-w-[1300px] mx-auto  p-[25px] flex flex-col md:gap-20 antialiased relative">
        <MainItem id="aboutMe" header="About Me">
          <p className="text-secondary-foreground opacity-70">{text}</p>
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
