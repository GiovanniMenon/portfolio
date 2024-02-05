import React, { ReactNode } from 'react';

function MainItemComponent({header, children} : {header : string , children : ReactNode}){
    return(
        <div>
            <h1 className="font-bold text-xl">{header}</h1>
            {children}
        </div>
    )
}

export default MainItemComponent;