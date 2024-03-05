import { ExperienceItemInterface } from "@/config/site-config";

function ExperienceItem({
  isStudy,
  title,
  start,
  end,
  role,
  location,
  description,
  vote,
}: ExperienceItemInterface) {
  return (
    <div className="flex flex-col md:flex-row gap-2.5">
      <div className="flex flex-row w-full md:w-3/12 text-secondary-foreground opacity-75 ">
        {start} - {end}
      </div>
      <div className="flex flex-col w-full gap-2.5">
        <h1 className="font-medium text-lg text-blue-500">
          {title}
          {!isStudy ? (
            <span className="text-secondary-foreground opacity-80 text-lg">
              {" "}
              - {role}
            </span>
          ) : (
            ""
          )}
        </h1>
        {!isStudy ? (
          <div className="text-secondary-foreground opacity-70">
            {description}
          </div>
        ) : (
          <div className="flex flex-col gap-2.5 md:flex-row justify-between">
            <h2 className="text-secondary-foreground opacity-70">
              {location}{" "}
            </h2>
            {vote ? (
              <div className={"flex flex-row"}>
                <span className="text-secondary-foreground opacity-70">
                  Final Evaluation: &nbsp;
                </span>
                <span className="text-secondary-foreground opacity-85">
                  {" "}
                  {vote}/100{" "}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;
