import Marquee from "react-fast-marquee";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

export default function MarqueeStacks() {
  return (
    <div className={"w-[600px]"}>
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
    </div>
  );
}
