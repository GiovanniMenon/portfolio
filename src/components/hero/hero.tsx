import HeroHeader from "@/components/hero/heroHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: any;
}) {
  return (
    <div className="flex flex-col justify-around items-center content-center w-full h-[60vh] bg-background  relative  ">
      <div
        className=" h-[60vh] w-full absolute pointer-events-none inset-0 flex items-center justify-center bg-background
        [mask-image:linear-gradient(to_bottom,white_15%,transparent_100%)] bg-grid-black/[0.2] dark:bg-grid-white/[0.1] "
      ></div>

      <HeroHeader />
      <div
        className={
          "z-40 max-w-[1300px] pl-[25px]  w-full absolute top-[85%] lg:top-[80%] flex flex-col md:flex-row justify-center items-center lg:justify-center gap-2.5"
        }
      >
        <Button
          variant={"outline"}
          size={"lg"}
          className={"text-lg font-medium tracking-wide pt-2    "}
        >
          <Link href={"resumee.pdf"} rel="noopener noreferrer" target="_blank">
            Download My Resumee
          </Link>
        </Button>
        <Button
          variant={"outline"}
          size={"lg"}
          className={"text-lg font-medium tracking-wide pt-2  "}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default Hero;
