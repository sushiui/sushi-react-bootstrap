import React, {PropsWithChildren} from "react";
import {SsPageProps} from "./SsPage.types";

const SsPage:React.FC<SsPageProps> = ({ className, children }:SsPageProps) => (
  <div className={`ss-page ${className ? className : ''}`}>{children}</div>
);

export default SsPage;
