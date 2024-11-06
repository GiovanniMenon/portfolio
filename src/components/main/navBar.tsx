"use client";
import Link from "next/link";
import {
  ArrowLeftIcon,
  BookOpenCheck,
  BracesIcon,
  Home,
  MailsIcon,
  MenuIcon,
  SquareUserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { DiscordLink } from "@/components/myBio/discordLink";
export default function NavBar() {
  const pathname = usePathname();
  const githubLink = "https://github.com/GiovanniMenon";
  const instagramLink = "https://www.instagram.com/menon.giovanni";
  const linkedinLink = "https://www.linkedin.com/in/giovanni-menon/";

  const router = useRouter();
  return (
    <header
      className={
        "relative md:sticky top-5 mr-auto md:mr-0 px-3 md:border md:w-full z-50 flex md:items-center rounded justify-start p-2 overflow-hidden " +
        "backdrop-filter backdrop-blur-xl border-white border-opacity-5 mb-3.5 md:mb-0"
      }
    >
      <Sheet>
        <SheetTrigger className={"block md:hidden"}>
          <Button
            className={
              "rounded flex flex-row justify-center items-center text-xs font-bold tracking-wide "
            }
            size={"sm"}
            variant={"link"}
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className={"px-1 h-full"}>
          <div
            className={
              "flex flex-col gap-y-3.5 pt-12 w-full items-center justify-center h-full  "
            }
          >
            <Link href={"/"} className={"w-full"}>
              <Button
                className={
                  "rounded flex flex-row justify-between items-center text-base gap-x-12 text-accent-foreground font-bold tracking-wide"
                }
                size={"lg"}
                variant={"outlineBorderNo"}
              >
                <Home className={"size-6 "} />
                <p className={""}>Home</p>
              </Button>
            </Link>
            <Link href={"/contact"} className={"w-full"}>
              <Button
                className={
                  "rounded flex flex-row justify-between items-center text-base gap-x-12 text-accent-foreground font-bold tracking-wide"
                }
                size={"lg"}
                variant={"outlineBorderNo"}
              >
                <MailsIcon className={"size-6"} />
                <p className={""}>Get in Contect</p>
              </Button>
            </Link>
            <Link href={"/about"} className={"w-full"}>
              <Button
                className={
                  "rounded flex flex-row justify-between items-center text-base gap-x-12 text-accent-foreground font-bold tracking-wide"
                }
                size={"lg"}
                variant={"outlineBorderNo"}
              >
                <SquareUserIcon className={"size-6"} />
                <p className={""}>About Me</p>
              </Button>
            </Link>
            <Link href={"/projects"} className={"w-full"}>
              <Button
                className={
                  "rounded flex flex-row justify-between items-center text-base gap-x-12  text-accent-foreground font-bold tracking-wide"
                }
                size={"lg"}
                variant={"outlineBorderNo"}
              >
                <BookOpenCheck className={"size-6"} />
                <p className={""}>Projects</p>
              </Button>
            </Link>

            <div className={"flex gap-x-3 mt-auto"}>
              <TooltipProvider delayDuration={100} skipDelayDuration={1000}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={githubLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button
                        variant={"secondary"}
                        className={"rounded-full"}
                        size={"icon"}
                      >
                        <GitHubLogoIcon className={"size-5"} />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={linkedinLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button
                        variant={"secondary"}
                        className={"rounded-full"}
                        size={"icon"}
                      >
                        <LinkedInLogoIcon className={"size-5"} />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Linkedin</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={instagramLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button
                        variant={"secondary"}
                        className={"rounded-full"}
                        size={"icon"}
                      >
                        <InstagramLogoIcon className={"size-5"} />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
                <DiscordLink />
              </TooltipProvider>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex items-center justify-center gap-2">
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
