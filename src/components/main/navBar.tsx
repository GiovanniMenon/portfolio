import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { BookOpenCheck, Code, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header
      className={
        "sticky top-5 px-3 md:border w-fit z-50 md:rounded flex items-center rounded-none justify-center p-2 overflow-hidden bg-card/30" +
        "backdrop-filter backdrop-blur-xl border-white border-opacity-5 "
      }
    >
      <div className="flex items-center justify-center gap-2 ">
        <Link href={"/"}>
          <Button
            className={
              "rounded flex flex-row justify-center items-center text-xs gap-x-2 bg-accent text-accent-foreground font-bold tracking-wide"
            }
            size={"sm"}
            variant={"outlineBorderNo"}
          >
            <Home className={"size-4"} />
            <p className={""}>Home</p>
          </Button>
        </Link>
        <Link href={"/"}>
          <Button
            className={
              "rounded flex flex-row justify-center items-center text-xs gap-x-2 bg-accent text-accent-foreground font-bold tracking-wide"
            }
            size={"sm"}
            variant={"outlineBorderNo"}
          >
            <BookOpenCheck className={"size-5"} />
            <p className={""}>Experiences</p>
          </Button>
        </Link>
        <Link href={"/"}>
          <Button
            className={
              "rounded flex flex-row justify-center items-center text-xs gap-x-2 bg-accent text-accent-foreground font-bold tracking-wide"
            }
            size={"sm"}
            variant={"outlineBorderNo"}
          >
            <Code className={"size-[14px]"} />
            <p className={""}>Projects</p>
          </Button>
        </Link>
      </div>
    </header>
  );
}
