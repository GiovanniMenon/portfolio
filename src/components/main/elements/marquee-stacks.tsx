import Marquee from "react-fast-marquee";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiOpenai,
  SiGo,
  SiPython,
  SiC,
  SiCplusplus,
  SiJira,
  SiMinio,
  SiAmazons3,
  SiOllama,
  SiFlask,
  SiLangchain,
  SiRedis,
  SiMysql,
  SiGit,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiWireshark,
  SiVirtualbox,
} from "@icons-pack/react-simple-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BlocksIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function MarqueeStacks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1", "1.33 0"],
  });

  // Scala da 0.8 a 1 mentre entra, rimane 1, e poi torna a 0 quando esce
  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0.8, 1, 1, 0.8],
  );

  // L'opacità passa da 0 a 1 mentre entra, rimane 1, e poi torna a 0 mentre esce
  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9, 1],
    [0, 1, 1, 0],
  );

  return (
    <div className={"flex justify-center items-center w-full overflow-hidden"}>
      <div className={""}>
        <motion.div
          ref={ref}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
          <Card
            className={
              "p-3 bg-card/30 border-white border-opacity-5 rounded w-[300px] md:w-[700px]"
            }
          >
            <CardTitle className={"flex flex-row justify-between "}>
              <div
                className={
                  "flex justify-between items-center gap-2 text-tiolet"
                }
              >
                <BlocksIcon size={"16 "} />
                <h1 className={"text-md font-bold tracking-tight text-primary"}>
                  Stack
                </h1>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"secondary"} size={"sm"}>
                    View All
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className={
                    "w-[90vw] md:max-w-screen-sm max-h-[60vh] md:max-h-screen overflow-auto"
                  }
                  aria-describedby={"Experiences Stack"}
                >
                  <DialogTitle className={""}>
                    <div className={"flex justify-start items-center gap-2"}>
                      <BlocksIcon size={"16"} />
                      <h1
                        className={
                          "text-md font-bold tracking-tight text-primary"
                        }
                      >
                        Stack
                      </h1>
                    </div>
                  </DialogTitle>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiHtml5 className="text-4xl text-orange-600" />
                      <span className={"opacity-80"}>HTML5</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiCss3 className="text-4xl text-blue-600" />
                      <span className={"opacity-80"}>CSS3</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiJavascript className="text-4xl text-yellow-500" />
                      <span className={"opacity-80"}>JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiTypescript className="text-4xl text-blue-500" />
                      <span className={"opacity-80"}>TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiGithub className="text-4xl text-gray-300" />
                      <span className={"opacity-80"}>GitHub</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiOpenai className="text-4xl text-white" />
                      <span className={"opacity-80"}>OpenAI</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiGo className="text-4xl text-blue-400" />
                      <span className={"opacity-80"}>Go</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiPython className="text-4xl text-yellow-400" />
                      <span className={"opacity-80"}>Python</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiC className="text-4xl text-blue-600" />
                      <span className={"opacity-80"}>C</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiCplusplus className="text-4xl text-blue-600" />
                      <span className={"opacity-80"}>C++</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiJira className="text-4xl text-blue-600" />
                      <span className={"opacity-80"}>Jira</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiMinio className="text-4xl text-red-500" />
                      <span className={"opacity-80"}>MinIO</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiAmazons3 className="text-4xl text-orange-600" />
                      <span className={"opacity-80"}>Amazon S3</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiOllama className="text-4xl text-white" />
                      <span className={"opacity-80"}>Ollama</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiFlask className="text-4xl text-white" />
                      <span className={"opacity-80"}>Flask</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiLangchain className="text-4xl text-blue-600" />
                      <span className={"opacity-80"}>LangChain</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiRedis className="text-4xl text-red-500" />
                      <span className={"opacity-80"}>Redis</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiMysql className="text-4xl text-blue-600" />
                      <span className={"opacity-80"}>MySQL</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiGit className="text-4xl text-orange-600" />
                      <span className={"opacity-80"}>Git</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiTailwindcss className="text-4xl text-blue-400" />
                      <span className={"opacity-80"}>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiReact className="text-4xl text-blue-500" />
                      <span className={"opacity-80"}>React</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiNextdotjs className="text-4xl text-white" />
                      <span className={"opacity-80"}>Next.js</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiFlutter className="text-4xl text-blue-400" />
                      <span className={"opacity-80"}>Flutter</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiDart className="text-4xl text-blue-600" />
                      <span className={"opacity-80"}>Dart</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiPostgresql className="text-4xl text-blue-600" />
                      <span className={"opacity-80"}>PostgreSQL</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiWireshark className="text-4xl text-blue-600" />
                      <span className={"opacity-80"}>Wireshark</span>
                    </div>
                    <div className="flex items-center space-x-2 py-0.5 text-xs tracking-tight">
                      <SiVirtualbox className="text-4xl text-gray-300" />
                      <span className={"opacity-80"}>VirtualBox</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardTitle>
            <CardContent className={"px-0 py-3 mt-8 flex flex-col gap-5"}>
              <Marquee
                pauseOnHover={true}
                direction={"left"}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  overflow: "",
                }}
                speed={35}
                autoFill
              >
                <div className={"flex space-x-5 ml-4.5 px-2 py-1"}>
                  <SiHtml5 className="size-9" />
                  <SiCss3 className="size-9" />
                  <SiJavascript className="size-9" />
                  <SiTypescript className="size-9" />
                  <SiGo className=" size-9 " />
                  <SiC className="size-9" />
                  <SiCplusplus className="size-9" />
                  <SiDart className="size-9" />
                  <SiPython className="size-9" />
                </div>
              </Marquee>
              <Marquee
                pauseOnHover={true}
                direction={"right"}
                style={{ width: "100%", maxWidth: "100%", overflow: "" }}
                speed={35}
              >
                <div className={"flex space-x-5 ml-4.5 px-2 py-1"}>
                  <SiFlask className="size-9" />
                  <SiMysql className="size-9" />
                  <SiPostgresql className="size-9" />
                  <SiRedis className="size-9" />
                  <SiGithub className="size-9" />
                  <SiGit className="size-9" />
                  <SiJira className="size-9" />
                  <SiAmazons3 className="size-9" />
                  <SiMinio className="size-9" />
                  <SiOpenai className="size-9" />
                  <SiOllama className="size-9" />
                  <SiLangchain className="size-9" />
                  <SiWireshark className="size-9" />
                  <SiVirtualbox className="size-9" />
                  <SiTailwindcss className="size-9" />
                  <SiReact className="size-9" />
                  <SiNextdotjs className="size-9" />
                  <SiFlutter className="size-9" />
                </div>
              </Marquee>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
