import Link from "next/link";
import { BookOpenCheck } from "lucide-react";

export default function Experiences() {
  return (
    <div className={"flex flex-col justify-start w-full h-fit"}>
      <Link
        className="animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded flex space-x-2.5"
        href="#experiences"
        id={"experiences"}
      >
        <BookOpenCheck className={"size-5"} />
        <span className="text-xs">Experiences</span>
      </Link>
      <div className={"mt-10 flex flex-col gap-10"}></div>
    </div>
  );
}
