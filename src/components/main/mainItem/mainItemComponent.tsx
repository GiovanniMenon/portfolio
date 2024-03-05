import React, { ReactNode } from "react";

function MainItemComponent({
  id,
  header,
  children,
}: {
  id: string;
  header: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="flex flex-col gap-8">
      <h1 className="font-bold text-2xl pt-20 md:pt-0 text-secondary-foreground">
        {header}
      </h1>
      {children}
    </div>
  );
}

export default MainItemComponent;
