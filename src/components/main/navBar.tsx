import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { Home } from "lucide-react";

export default function NavBar() {
  return (
    <header
      className={
        "sticky top-5 px-3 md:border w-full z-50 md:rounded flex items-center rounded-none justify-between p-2 overflow-hidden bg-red-600" +
        "backdrop-filter backdrop-blur-xl border-white border-opacity-5 "
      }
    >
      <div className="flex items-center justify-center gap-2 ">
        <Link
          href={"/"}
          className={
            "flex flex-row justify-center items-center text-xs gap-x-2"
          }
        >
          <Home className={"size-5"} />
          <p className={""}>Home</p>
        </Link>
      </div>
    </header>
  );
}
