import Link from "next/link";
import { MailsIcon } from "lucide-react";

import React from "react";

export default function ContactMe() {
  return (
    <div className={"flex flex-col justify-start w-full h-fit"}>
      <Link
        className="animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded flex space-x-2.5 items-center justify-center"
        href="#experiences"
      >
        <MailsIcon className={"size-5 text-tiolet"} />
        <span className="text-xs">Contact Me</span>
      </Link>
      <div className={"mt-10 flex flex-col gap-10 relative"}>
        <div className={"space-y-2"}>
          <h1 className={"text-3xl font-bold tracking-tight text-primary"}>
            Contact Me
          </h1>
          <p className={"text-white text-opacity-80 font-[200] text-xs"}>
            Explore my educational background and work experiences that have
            shaped my skills.
          </p>
        </div>
      </div>
    </div>
  );
}
