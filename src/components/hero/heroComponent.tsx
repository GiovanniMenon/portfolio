import HeroHeader from "@/components/hero/heroHeaderComponent";

function HeroComponent() {
  return (
    <div className="flex flex-col justify-around items-center content-center w-full h-[60vh] bg-background  relative  ">
      <div
        className=" h-[60vh] w-full absolute pointer-events-none inset-0 flex items-center justify-center bg-background
        [mask-image:linear-gradient(to_bottom,white_15%,transparent_100%)] bg-grid-black/[0.2] dark:bg-grid-white/[0.1] "
      ></div>
      <HeroHeader />
    </div>
  );
}

export default HeroComponent;
