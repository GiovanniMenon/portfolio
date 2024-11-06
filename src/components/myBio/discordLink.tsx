"use client";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { CopyIcon } from "lucide-react";

export function DiscordLink() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText("menny9762").then(() => {
      setCopied(true); // Mostra il feedback di copia riuscita
      setTimeout(() => setCopied(false), 4000); // Rimuove il feedback dopo 4 secondi
    });
  };
  return (
    <Tooltip>
      <TooltipTrigger
        onClick={(event) => {
          event.preventDefault();
        }}
        asChild
      >
        <Button
          variant={"secondary"}
          className={"rounded-full "}
          size={"icon"}
          onClick={handleCopy}
        >
          <DiscordLogoIcon className={"size-5"} />
        </Button>
      </TooltipTrigger>
      <TooltipContent
        onPointerDownOutside={(event) => {
          event.preventDefault();
        }}
      >
        <span className={"transition-all"}>
          {!copied ? (
            <div className={"flex flex-row items-center justify-center gap-2"}>
              menny9762 <CopyIcon className={"size-3"} />
            </div>
          ) : (
            "Copied !!"
          )}
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
