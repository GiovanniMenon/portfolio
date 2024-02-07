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
      <div className="flex flex-row w-full md:w-3/12 ">
        {start} - {end}
      </div>
      <div className="flex flex-col gap-2.5">
        <h1 className="font-medium text-lg text-[--titleColor]">
          {title}
          {!isStudy ? (
            <span className="text-[--textColor] text-lg"> - {role}</span>
          ) : (
            ""
          )}
        </h1>
        {!isStudy ? (
          <div className="text-[--textColor]">{description}</div>
        ) : (
          <div className="flex flex-col gap-2.5 md:flex-row justify-between">
            <h2 className="text-[--textColor]">{location} </h2>
            {vote ? (
              <span className="text-[--textColor]">
                Final Evaluation:{" "}
                <span className="text-white"> {vote}/100 </span>
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
