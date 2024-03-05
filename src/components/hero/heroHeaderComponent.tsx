import { TypeAnimation } from "react-type-animation";

function HeroHeader() {
  return (
    <div className="z-20 flex flex-col justify-center items-center content-center w-full h-[10vh] md:h-[60vh] text-4xl lg:text-6xl font-extrabold">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className="max-w-[1300px] flex flex-col text-center md:text-left gap-5 ">
        <span className={"text-secondary-foreground"}>
          Hello there,{" "}
          <span className="bg-gradient-to-b from-cyan-500 to-blue-500  text-transparent bg-clip-text ">
            I am Giovanni.
          </span>
        </span>
        <span className="text-base md:text-lg text-zinc-400">
          {" "}
          An Italian student passionate about
          <TypeAnimation
            sequence={[
              " Cybersecurity.",
              2000,
              " Programming.",
              2000,
              " Virtual Reality.",
              2000,
            ]}
            wrapper="span"
            className="font-bold text-secondary-foreground"
            speed={25}
            repeat={Infinity}
          />
        </span>
      </div>
    </div>
  );
}

export default HeroHeader;
