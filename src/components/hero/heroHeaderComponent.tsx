

function HeroHeader() {
    return (
        <div className="flex flex-col justify-center items-center content-center w-full my-auto text-lg text-left gap-10">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <div className="max-w-[1300px] flex flex-col h-full text-left">
                <span>Hello there &#128075;,</span>
                <span className="text-7xl font-bold">I am <span className="text-blue-600">Giovanni.</span></span>
                <span className=" font-medium">I&apos;m hard at work creating my personal website,</span>
                <span>but it&apos;s currently under development.</span>
                <span> In the meantime, feel free to connect with me on <a className="underline text-blue-600" href="https://www.linkedin.com/in/giovanni-menon/">LinkedIn</a> and explore my projects on <a className="underline text-blue-600" href="https://github.com/GiovanniMenon">GitHub</a>.</span>
            </div>


            {/* Possibile uso di una animazione*/}
        </div>
    )

}

export default HeroHeader;