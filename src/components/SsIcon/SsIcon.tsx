import React from "react";
import {SsIconProps} from "./SsIcon.types";

const SsIcon: React.FC<SsIconProps> = ({ className, name, size = 24 }: SsIconProps) => {
  return (
      <span
          className={`ss-icon-${name} ${className ? className : ''}`}
          style={{ fontSize: `${size}px` }} // Applying size via inline style
      ></span>
  );
};

export default SsIcon;
