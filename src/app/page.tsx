import MyBio from "@/components/myBio/myBio";

export default function Home() {
  return (
    <div className={"max-w-[1500px] flex item-start justify-center mx-auto"}>
      <div className={"gap-4 flex flex-col md:flex-row md:mt-5 w-full"}>
        <div>
          <MyBio />
        </div>

        <main
          className={"w-full flex flex-col items-center justify-start bg-card "}
        >
          Menu 2
        </main>
        <div className={"hidden lg:block w-full lg:w-fit bg-card"}>Menu 3</div>
      </div>
    </div>
  );
}
