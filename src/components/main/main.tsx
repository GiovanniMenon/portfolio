import Hero from "@/components/main/elements/hero";
import { Separator } from "@/components/ui/separator";
import Experiences from "@/components/main/elements/experiences";

export function Main() {
  return (
    <main
      className={"w-full flex-col flex justify-center items-center p-4 gap-14"}
    >
      <Hero></Hero>
      <Separator className={"h-[2px] rounded opacity-75"} />
      <Experiences />
    </main>
  );
}
