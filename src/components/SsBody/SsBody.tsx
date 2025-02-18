import React from "react";
import {SsBodyProps} from "./SsBody.types";


const SsBody: React.FC<SsBodyProps> = (props: SsBodyProps) => (
   <div className={`body ${props.className}`}>{props.children}</div>
);

export default SsBody;
