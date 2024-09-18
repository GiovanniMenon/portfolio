"use client";
import Link from "next/link";
import {
  ArrowLeftIcon,
  BookOpenCheck,
  BracesIcon,
  Home,
  MoveLeft,
  MoveLeftIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header
      className={
        "sticky top-5 px-3 md:border w-full z-50 md:rounded flex items-center rounded justify-start p-2 overflow-hidden " +
        "backdrop-filter backdrop-blur-xl border-white border-opacity-5 "
      }
    >
      <div className="flex items-center justify-center gap-2">
        {pathname.search("/projects") !== 0 ? (
          <Link href={"/#home"}>
            <Button
              className={
                "rounded flex flex-row justify-center items-center text-xs gap-x-2 bg-tiolet hover:bg-tiolet/90 text-tiolet-foreground font-bold tracking-wide "
              }
              size={"sm"}
              variant={"outlineBorderNo"}
            >
              <Home className={"size-4"} />
              <p className={""}>Home</p>
            </Button>
          </Link>
        ) : (
          <Button
            className={
              "rounded flex flex-row justify-center items-center text-xs gap-x-2 bg-tiolet hover:bg-tiolet/90 text-tiolet-foreground font-bold tracking-wide "
            }
            size={"sm"}
            variant={"outlineBorderNo"}
            onClick={router.back}
          >
            <ArrowLeftIcon className={"size-4"} />
          </Button>
        )}

        {pathname.search("/projects") !== 0 && (
          <Link href={"/#experiences"}>
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
        )}
        {pathname.search("/projects") !== 0 && (
          <Link href={"/#projects"}>
            <Button
              className={
                "rounded flex flex-row justify-center items-center text-xs gap-x-2 bg-accent text-accent-foreground font-bold tracking-wide"
              }
              size={"sm"}
              variant={"outlineBorderNo"}
            >
              <BracesIcon className={"size-[14px]"} />
              <p className={""}>Projects</p>
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
