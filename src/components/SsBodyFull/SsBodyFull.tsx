import {SsBodyFullProps} from "./SsBodyFullProps.types";
import React from "react";

 const SsBodyFull: React.FC = ({className, children}: SsBodyFullProps) => {
    return <div className={`body ${className ? className : ''}`}
                style={{maxWidth: '100%', alignSelf: 'center'}}>{children}</div>
}
export default SsBodyFull;
