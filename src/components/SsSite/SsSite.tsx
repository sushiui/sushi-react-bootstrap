import React from "react";
import {SsSiteProps} from "./SsSite.types";

const SsSite:React.FC<SsSiteProps> = ({ className, children }:SsSiteProps) => (
    <div className={`ss-site ${className ? className : ''}`}>{children}</div>
);

export default SsSite;
