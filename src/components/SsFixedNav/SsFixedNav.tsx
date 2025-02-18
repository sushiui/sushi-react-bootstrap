import SsHeader from "../SsHeader";
import React from "react";
import {SsFixedNavProps} from "./SsFixedNav.types";

const SsFixedNav: React.FC<SsFixedNavProps> = ({children}) => {
    return <div className={'ss-site'}>
        <SsHeader className={'ss-fixed-header'}>{children}</SsHeader>
    </div>
}
export default SsFixedNav;
