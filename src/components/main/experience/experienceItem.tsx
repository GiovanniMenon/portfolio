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
      <div className="flex flex-row w-full md:w-3/12 text-zinc-400 ">
        {start} - {end}
      </div>
      <div className="flex flex-col w-full gap-2.5">
        <h1 className="font-medium text-lg text-blue-500">
          {title}
          {!isStudy ? (
            <span className="text-zinc-300 text-lg"> - {role}</span>
          ) : (
            ""
          )}
        </h1>
        {!isStudy ? (
          <div className="text-zinc-400">{description}</div>
        ) : (
          <div className="flex flex-col gap-2.5 md:flex-row justify-between">
            <h2 className="text-zinc-400">{location} </h2>
            {vote ? (
              <span className="text-zinc-400">
                Final Evaluation:{" "}
                <span className="text-zinc-200"> {vote}/100 </span>
              </span>
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
