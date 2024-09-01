import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Code,
  Gamepad,
  MailIcon,
  MapPinIcon,
  Music,
  Music2,
  Music3Icon,
  Music4,
  University,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function MyBio() {
  const githubLink = "https://github.com/GiovanniMenon";
  const instagramLink = "https://www.instagram.com/menon.giovanni";
  const linkedinLink = "https://www.linkedin.com/in/giovanni-menon/";
  return (
    <Card
      className={
        "hidden lg:block h-fit sticky top-5 w-full lg:w-[350px] px-4 py-0 bg-transparent " +
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
          <Button
            variant={"default"}
            className={
              "flex p-0 text-sm justify-center items-center gap-2 rounded"
            }
          >
            <Code className={"size-5 "} />
            <p>See all projects</p>
          </Button>
        </div>
      </CardContent>
      <Separator className={"h-[2px] rounded opacity-75"} />
      <CardFooter className={"flex justify-center items-center h-full py-3.5"}>
        <div className={"flex gap-x-3"}>
          <Button
            variant={"secondary"}
            className={"rounded-full"}
            size={"icon"}
          >
            <Link href={githubLink} rel="noopener noreferrer" target="_blank">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{
                  color: "var(--geist-foreground)",
                  width: "18px",
                  height: "18px",
                }}
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44
                         5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09
                          1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009
                           18.13V22"
                />
              </svg>
            </Link>
          </Button>
          <Button
            variant={"secondary"}
            className={"rounded-full"}
            size={"icon"}
          >
            <Link href={linkedinLink} rel="noopener noreferrer" target="_blank">
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{
                  color: "var(--geist-foreground)",
                  width: "18px",
                  height: "18px",
                }}
              >
                <path
                  fill="var(--geist-fill)"
                  stroke="var(--geist-fill)"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                />
                <path
                  fill="var(--geist-fill)"
                  stroke="var(--geist-fill)"
                  d="M2 9h4v12H2z"
                />
                <circle
                  stroke="var(--geist-fill)"
                  fill="var(--geist-fill)"
                  cx="4"
                  cy="4"
                  r="2"
                />
              </svg>
            </Link>
          </Button>
          <Button
            variant={"secondary"}
            className={"rounded-full"}
            size={"icon"}
          >
            <Link
              href={instagramLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="with-icon_icon__MHUeb"
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
                style={{
                  color: "var(--geist-foreground)",
                  width: "18px",
                  height: "18px",
                }}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default MyBio;
