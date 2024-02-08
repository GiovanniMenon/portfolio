import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  "bg-accent rounded-[10px] flex flex-col justify-center p-2 col-span-1 row-span-1",
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
  children: ReactNode;
} & VariantProps<typeof variants>;

function GridItem({ size, children }: GridItemProps) {
  return (
    <div
      className={cn(
        variants({
          size,
          className: "content-center items-center",
        }),
      )}
    >
      {children}
    </div>
  );
}

export default GridItem;
