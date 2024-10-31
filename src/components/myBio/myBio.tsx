import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BracesIcon,
  KeyboardIcon,
  MailIcon,
  MapPinIcon,
  Music4,
  University,
} from "lucide-react";
import {
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
import { DiscordLink } from "@/components/myBio/discordLink";

async function MyBio() {
  const data = await fetch(
    "https://wakatime.com/api/v1/users/current/all_time_since_today",
    {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API!).toString("base64")}`,
      },
    },
  );
  let hours = null;
  if (data.ok) {
    hours = (await data.json()).data.text;
  }
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
        <div className={"flex flex-col gap-y-1.5 pt-2 tracking-tight "}>
          <Link
            className={
              "flex items-center justify-start gap-2 text-xs font-medium "
            }
            href={"mailto:giovanni.menon.dev@gmail.com"}
          >
            <MailIcon className={"size-5 scale-90 text-tiolet"} />
            <span className={"text-muted-foreground hover:underline"}>
              giovanni.menon.dev@gmail.com
            </span>
          </Link>
          <Link
            className={
              "flex items-center justify-start gap-2 text-xs font-medium "
            }
            href={"https://github.com/GiovanniMenon"}
          >
            <GitHubLogoIcon className={"size-5 scale-90  text-tiolet"} />
            <span className={"text-muted-foreground hover:underline"}>
              github.com/GiovanniMenon
            </span>
          </Link>
          <Link
            className={
              "flex items-center justify-start gap-2 text-xs font-medium "
            }
            href={"https://www.unipd.it/en/"}
          >
            <University className={"size-5 scale-90 text-tiolet"} />
            <span className={"text-muted-foreground hover:underline"}>
              University of Granada
            </span>
          </Link>
          <div
            className={
              "flex items-center justify-start gap-2 text-xs font-medium "
            }
          >
            <MapPinIcon className={"size-5 scale-90 text-tiolet"} />
            <span className={"text-muted-foreground"}>Italy</span>
          </div>
        </div>
        <div className={"flex flex-col justify-start pt-3.5"}>
          <h1 className={"justify-start text-xl font-bold"}>Me</h1>
          <p className={"text-muted-foreground font-light text-sm"}>
            I graduated in Computer Science from the University of Padua, and
            I&apos;m now pursuing a{" "}
            <span className={"text-white "}>
              Joint Master&apos;s Degree in International Cybersecurity and
              Cyberintelligence{" "}
            </span>
            across four European universities.{" "}
          </p>
          <div
            className={
              "flex flex-row items-center justify-between text-xs tracking-tight pt-3.5 pb-3 text-muted-foreground"
            }
          >
            <div className={"flex items-start justify-center gap-2"}>
              <Music4 className={"size-4 "} />
              <p>230 Hours on Spotify</p>
            </div>
            <div className={"flex items-end justify-center gap-2"}>
              <KeyboardIcon className={"size-4 "} />
              <p>{hours || ""} Coding</p>
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
            <DiscordLink />
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}

export default MyBio;
