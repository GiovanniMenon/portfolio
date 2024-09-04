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
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BlocksIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function MarqueeStacks() {
  return (
    <div className={"flex justify-center items-center w-full overflow-hidden"}>
      <div className={""}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className={"flex flex-col gap-5"}
        >
          <Card
            className={
              "p-3 bg-card/20 border-white border-opacity-5 rounded w-[600px]"
            }
          >
            <CardTitle className={"flex flex-row justify-between"}>
              <div className={"flex justify-between items-center gap-2"}>
                <BlocksIcon size={"16"} />
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
                <DialogContent></DialogContent>
              </Dialog>
            </CardTitle>
            <CardContent className={"p-0 mt-8 flex flex-col gap-5"}>
              <Marquee
                pauseOnHover={true}
                direction={"left"}
                style={{ width: "100%", maxWidth: "100%", overflow: "" }}
                speed={40}
                autoFill
              >
                <div className={"flex gap-4 ml-4"}>
                  <SiHtml5 className="size-10" />
                  <SiCss3 className="size-10" />
                  <SiJavascript className="size-10" />
                  <SiTypescript className="size-10" />
                  <SiGo className="size-10" />
                  <SiC className="size-10" />
                  <SiCplusplus className="size-10" />
                  <SiDart className="size-10" />
                  <SiPython className="size-10" />
                </div>
              </Marquee>
              <Marquee
                pauseOnHover={true}
                direction={"right"}
                style={{ width: "100%", maxWidth: "100%", overflow: "" }}
                speed={40}
              >
                <div className={"flex gap-4 ml-4"}>
                  <SiFlask className="size-10" />
                  <SiMysql className="size-10" />
                  <SiPostgresql className="size-10" />
                  <SiRedis className="size-10" />
                  <SiGithub className="size-10" />
                  <SiGit className="size-10" />
                  <SiJira className="size-10" />
                  <SiAmazons3 className="size-10" />
                  <SiMinio className="size-10" />
                  <SiOpenai className="size-10" />
                  <SiOllama className="size-10" />
                  <SiLangchain className="size-10" />
                  <SiWireshark className="size-10" />
                  <SiVirtualbox className="size-10" />
                  <SiTailwindcss className="size-10" />
                  <SiReact className="size-10" />
                  <SiNextdotjs className="size-10" />
                  <SiFlutter className="size-10" />
                </div>
              </Marquee>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
