"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BracesIcon,
  CopyIcon,
  Gamepad,
  MailIcon,
  MapPinIcon,
  Music4,
  University,
} from "lucide-react";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

function MyBio() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };
  const githubLink = "https://github.com/GiovanniMenon";
  const instagramLink = "https://www.instagram.com/menon.giovanni";
  const linkedinLink = "https://www.linkedin.com/in/giovanni-menon/";
  return (
    <Card
      className={
        "hidden lg:block h-fit sticky top-5 w-full lg:w-[350px] px-4 py-0 bg-card/30 " +
        " rounded border-white border-opacity-5"
      }
    >
      <CardContent
        className={"flex flex-col items-start justify-center p-0 py-3 gap-4"}
      >
        <div
          className={"flex flex-row items-center justify-between w-full pt-2 "}
        >
          <Avatar className={"size-28"}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className={"text-xl font-bold text-neutral-300"}>
            Giovanni Menon
          </h1>
        </div>
        <div
          className={"flex flex-col gap-y-1.5 pt-2 tracking-tight opacity-70"}
        >
          <Link
            className={
              "flex items-center justify-start gap-2 text-xs font-medium "
            }
            href={"mailto:giovanni.menon.dev@gmail.com"}
          >
            <MailIcon className={"size-5 scale-90 text-primary"} />
            <span className={"text-white hover:underline"}>
              giovanni.menon.dev@gmail.com
            </span>
          </Link>
          <Link
            className={
              "flex items-center justify-start gap-2 text-xs font-medium "
            }
            href={"https://github.com/GiovanniMenon"}
          >
            <GitHubLogoIcon className={"size-5 scale-90  text-primary"} />
            <span className={"text-white hover:underline"}>
              github.com/GiovanniMenon
            </span>
          </Link>
          <Link
            className={
              "flex items-center justify-start gap-2 text-xs font-medium "
            }
            href={"https://www.unipd.it/en/"}
          >
            <University className={"size-5 scale-90 text-primary"} />
            <span className={"text-white hover:underline"}>
              University of Padua
            </span>
          </Link>
          <div
            className={
              "flex items-center justify-start gap-2 text-xs font-medium "
            }
          >
            <MapPinIcon className={"size-5 scale-90 text-primary"} />
            <span className={"text-white"}>Italy</span>
          </div>
        </div>
        <div className={"flex flex-col justify-start pt-3.5"}>
          <h1 className={"justify-start text-xl font-bold text-neutral-300"}>
            Me
          </h1>
          <p className={"text-sm text-white text-opacity-80"}>
            lorem ipsum etc etc etc lorem ipsum etc etc etc lorem ipsum etc etc
            etc
          </p>
          <div
            className={
              "flex flex-row items-center justify-between text-xs tracking-tight pt-3.5 pb-3 opacity-70"
            }
          >
            <div className={"flex items-start justify-center gap-2"}>
              <Music4 className={"size-4 "} />
              <p>230 Hours on Spotify</p>
            </div>
            <div className={"flex items-end justify-center gap-2"}>
              <Gamepad className={"size-4 "} />
              <p>53 Hours Playing</p>
            </div>
          </div>
          <Link href={"/projects#home"}>
            <Button
              variant={"default"}
              className={
                "flex p-0 text-sm justify-center items-center gap-2 rounded w-full"
              }
            >
              <BracesIcon className={"size-5 "} />
              <p>See all projects</p>
            </Button>
          </Link>
        </div>
      </CardContent>
      <Separator className={"h-[2px] rounded opacity-75"} />
      <CardFooter className={"flex justify-center items-center h-full py-3.5"}>
        <div className={"flex gap-x-3"}>
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
            <Tooltip>
              <TooltipTrigger
                onClick={(event) => {
                  event.preventDefault();
                }}
                asChild
              >
                <Button
                  variant={"secondary"}
                  className={"rounded-full "}
                  size={"icon"}
                  onClick={handleCopy}
                >
                  <DiscordLogoIcon className={"size-5"} />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                onPointerDownOutside={(event) => {
                  event.preventDefault();
                }}
              >
                <span className={"transition-all"}>
                  {!copied ? (
                    <div
                      className={
                        "flex flex-row items-center justify-center gap-2"
                      }
                    >
                      menny9762 <CopyIcon className={"size-3"} />
                    </div>
                  ) : (
                    "Copied !!"
                  )}
                </span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}

export default MyBio;
