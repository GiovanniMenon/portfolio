import {ReactNode} from "react";

function FooterIcon({ link , children} : { link: string , children : ReactNode}){
    return(
            <div>
                <a href={link}>
                    {children}
                </a>
            </div>
        )
}

export default FooterIcon