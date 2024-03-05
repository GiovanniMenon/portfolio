import MainItemComponent from "@/components/main/mainItem/mainItemComponent";
import React from "react";
import Footer from "@/components/footer/footer";
import GridSkill from "@/components/main/technlogies/gridSkill";
import ProjectGrid from "@/components/main/project/projectGridCompoment";
import ExperienceGrid from "@/components/main/experience/experienceGrid";
import { TracingBeam } from "@/components/ui/tracing-beam";
function MainComponent() {
  const text = `
        I am a 21-year-old Italian student deeply passionate about technology and innovation. Currently, I am in my third year pursuing a Bachelor's degree in Computer Science (Department of Mathematics) at the University of Padua. After graduation, I plan to continue my studies in the field of cyber security, which has always been the branch of computer science I am most passionate about.`;

  return (
    <TracingBeam className="">
      <div className=" max-w-[1300px] mx-auto  p-[25px] flex flex-col md:gap-20 antialiased relative">
        <MainItemComponent id="aboutMe" header="About Me">
          <p className="text-secondary-foreground opacity-70">{text}</p>
          <GridSkill></GridSkill>
        </MainItemComponent>
        <MainItemComponent id="experience" header="Experience">
          <ExperienceGrid></ExperienceGrid>
        </MainItemComponent>
        <MainItemComponent id="project" header="Project">
          <ProjectGrid />
        </MainItemComponent>
        <Footer></Footer>
      </div>
    </TracingBeam>
  );
}

export default MainComponent;
