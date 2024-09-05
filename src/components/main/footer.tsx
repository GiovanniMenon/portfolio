import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <div
      className={
        "bottom-0 w-full flex-row flex justify-center items-center pt-0.5 pb-2 opacity-70 space-x-1 absolute"
      }
    >
      <Copyright className={"size-3.5"} />
      <h1 className={"text-sm font-bold tracking-tight text-primary"}>
        {" "}
        2024 Giovanni Menon. No rights reserved.
      </h1>
    </div>
  );
}
