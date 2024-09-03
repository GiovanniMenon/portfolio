import Marquee from "react-fast-marquee";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export default function MarqueeStacks() {
  return (
    <div className={" w-[400px]"}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className={"text-xl font-bold tracking-tight text-primary"}>
          Technologies
        </h1>
        <Marquee
          pauseOnHover={true}
          direction={"left"}
          style={{ width: "100%", maxWidth: "100%", overflow: "" }}
          autoFill
        >
          <div className={"flex gap-4 ml-4"}>
            <SiHtml5 className="size-10" />
            <SiCss3 className="size-10" />
            <SiJavascript className="size-10" />
            <SiTypescript className="size-10" />
          </div>
        </Marquee>
      </motion.div>
    </div>
  );
}
