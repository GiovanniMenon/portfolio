import MainItemComponent from "@/components/main/mainItem/mainItemComponent";
import React from 'react';
import Footer from "@/components/footer/footer";
import SkillComponent from "@/components/main/mainItem/skillComponent";

function MainComponent(){

    const text = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec pulvinar massa in odio iaculis lacinia.
        Etiam rutrum ligula non elit faucibus imperdiet non eu tortor.
        Nam vel mi eleifend urna vestibulum tristique vitae id arcu.
        In non turpis facilisis, semper urna et, facilisis nibh.
        Mauris ornare ex at purus laoreet, et varius nisl rhoncus. 
        Nullam scelerisque purus ac porta maximus. Duis ultrices velit sit amet tincidunt eleifend.
        Suspendisse ultricies dolor sit amet elit varius porttitor. `

    return(
        <div className="max-w-[1300px] mx-auto p-[25px] flex flex-col gap-20">

            <MainItemComponent id="aboutMe" header="About Me">
                                <p className="text-[#bbbbbb]">{text}</p>
                                <SkillComponent></SkillComponent>
            </MainItemComponent>
            <MainItemComponent id="experience" header="Experience">
                                <p>{text}</p>
            </MainItemComponent>
            <MainItemComponent id="project" header="Project">
                                <p>{text}</p>
            </MainItemComponent>
            <Footer></Footer>
        </div>
    )
}

export default MainComponent