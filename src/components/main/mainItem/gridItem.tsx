import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  "bg-blue-500 rounded-2xl flex flex-col justify-center p-2",
  {
    variants: {
      size: {
        "1x2": "col-span-1 row-span-2",
        "2x1": "col-span-2 row-span-1",
        "2x2": "col-span-2 row-span-2",
        "1x1": "col-span-1 row-span-1",
        "3x2": "col-span-3 row-span-2",
        "2x3": "col-span-2 row-span-3",
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
          className: "bg-blue-500 content-center items-center",
        }),
      )}
    >
      {children}
    </div>
  );
}

export default GridItem;
