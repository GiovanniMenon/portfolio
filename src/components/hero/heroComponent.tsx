import HeroHeader from "@/components/hero/heroHeaderComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HeroComponent() {
  return (
    <div className="flex flex-col justify-around items-center content-center w-full h-[60vh] bg-background  relative  ">
      <div
        className=" h-[60vh] w-full absolute pointer-events-none inset-0 flex items-center justify-center bg-background
        [mask-image:linear-gradient(to_bottom,white_15%,transparent_100%)] bg-grid-black/[0.2] dark:bg-grid-white/[0.1] "
      ></div>

      <HeroHeader />
      <div
        className={
          "max-w-[1200px] mx-auto w-full absolute top-full md:top-[85%] lg:top-[80%] flex flex-row justify-center lg:justify-end z-20"
        }
      >
        <Button variant={"default"} className={" font-bold pt-3 text-lg   "}>
          <Link href={"resumee.pdf"} rel="noopener noreferrer" target="_blank">
            Download My Resumee
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroComponent;
