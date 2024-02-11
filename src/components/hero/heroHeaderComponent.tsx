function HeroHeader() {
  return (
    <div className="flex flex-col justify-center items-center content-center w-full h-[60vh] text-4xl">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className="max-w-[1300px] flex flex-col ">
        <span>
          <span className="font-bold">$</span> Hello there,{" "}
          <span>I am Giovanni.</span>
        </span>
        <span className="text-xl">
          {" "}
          A student passionate about Cybersecurity and Programming.
        </span>
      </div>

      {/* Possibile uso di una animazione*/}
    </div>
  );
}

export default HeroHeader;
