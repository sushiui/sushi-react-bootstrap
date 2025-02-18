import React from "react";
import {SsCardProps} from "./SsCard.types";
import SsHeader from "../SsHeader";


const SsCard = ({title, children}: SsCardProps) => {
    if (title) {
        return (
            <div className='ss-card'>
                <SsHeader>
                    <span className='label'>{title}</span>
                </SsHeader>
                {children}
            </div>
        );
    }
    return <div className='ss-card'>{children}</div>;
};

export default SsCard;
