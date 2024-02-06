import { ProjectItemInterface } from "@/config/site-config";

function ProjectItem({ title, link, desc }: ProjectItemInterface) {
  return (
    <div className="flex relative flex-col bg-[rgba(114,114,114,.2)] backdrop-blur-lg rounded-md p-4 gap-4 h-[15vh] transition border border-transparent hover:border-[#bbbb] ">
      <div className="flex flex-row justify-between content-center items-center">
        <h1 className="font-medium text-xl">{title}</h1>
        <a href={link}>
          <svg
            className="with-icon_icon__MHUeb"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
            style={{
              color: "var(--geist-foreground)",
              width: "22px",
              height: "22px",
            }}
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44
                         5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09
                          1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009
                           18.13V22"
            />
          </svg>
        </a>
      </div>
      <div className="text-center text-base text-[#bbbbbb]">{desc} </div>
    </div>
  );
}

export default ProjectItem;