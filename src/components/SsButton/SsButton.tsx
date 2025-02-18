import { Button } from "react-bootstrap";
import React from "react";
import { SsButtonProps } from "./SsButton.types";

const SsButton: React.FC<SsButtonProps> = ({ variant, ...props }) => {
  return (
    <Button variant={variant} 
            className={`${props.className || ""}`}
            {...props} >
      {props.children}
    </Button>
  );
};

export default SsButton;
