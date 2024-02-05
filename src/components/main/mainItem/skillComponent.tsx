import React, { ReactNode } from 'react';

function SkillComponent(){
    const GridItems = new Array(40).fill(0)

    return(
        <div className="flex flex-col gap-5">
            <h2 className="font-bold text-xl">Technologies</h2>
            {/* Bento Grid*/}
            <div className="grid mx-auto w-[80%] h-full grid-cols-10 auto-rows-[70px] gap-2.5 ">
                {GridItems.map((item,index) =>
                    {
                        return <div key={index} className="shadow-xl rounded-xl bg-blue-500"></div>
                    }
                )}
            </div>

        </div>
    )
}

export default SkillComponent;