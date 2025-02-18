import {PropsWithChildren} from "react";
import {ButtonProps} from "react-bootstrap";

export interface SsButtonProps extends PropsWithChildren<ButtonProps> {
    bgGradient?: boolean;
}
