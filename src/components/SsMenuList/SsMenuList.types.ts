import {IMenuConfig, SsItemBaseProps} from "../SsMenu/SsMenu.types";
import React, {ReactNode} from "react";

export interface SsMenuListProps<T> extends SsItemBaseProps, BaseMenuItemProps {
    menu: IMenuConfig<T>;
    expanded?: boolean;
    onExpandChange?: (expanded: boolean) => void;
    renderIcon?: (icon: ReactNode) => React.ReactNode;
    renderExpandIcon?: (expand: boolean) => React.ReactNode;
    menuItemClassName?: string;
    currentPath?: string;
    defaultExpand?: boolean;
}
export interface BaseMenuItemProps {
    appPrefix?: string;
    testid?: string,

}
