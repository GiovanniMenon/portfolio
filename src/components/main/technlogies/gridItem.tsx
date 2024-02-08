import Image from "next/image";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const variants = cva(
  "bg-[rgba(114,114,114,.2)] rounded-md flex flex-col justify-center p-2 col-span-1 row-span-1 hover:scale-[1.03npm]",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 md:row-span-2",
        "2x1": "md:col-span-2 md:row-span-1",
        "2x2": "md:col-span-2 md:row-span-2",
        "1x1": "md:col-span-1 md:row-span-1",
        "3x3": "md:col-span-3 md:row-span-3",
      },
    },
    defaultVariants: {
      size: "1x1",
    },
  },
);

type GridItemProps = {
  title: string;
  icon?: string;
  height?: number;
  width?: number;
  color?: string;
} & VariantProps<typeof variants>;

function GridItem({ size, icon, title, width, height, color }: GridItemProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={cn(
            variants({
              size,
              className: `content-center items-center duration-300 ease-in-out `,
            }),
          )}
        >
          <div className="relative w-full h-full flex flex-col content-center items-center justify-center">
            {icon ? (
              <Image
                src={icon}
                width={width}
                height={height}
                alt={`${title} Logo`}
              />
            ) : (
              ""
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default GridItem;
