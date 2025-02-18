import React, {ReactNode} from "react";
import {BaseMenuItemProps} from "../SsMenuList/SsMenuList.types";
import {MenuPermission} from "../SsProvider/SsPermission.types";

export interface IMenuConfig<T> extends MenuPermission<T>{
    display: string;
    breadcrumbTitle?: string;
    id: string;
    icon?: ReactNode;
    link: string;
    strong?: boolean;
    eventTrainingBread?: boolean;
    matchRoute?: RegExp;
    child?: IMenuConfig<T>[];
    envs?: string[]
}

export interface MenuItemProps extends SsItemBaseProps {
    onClick?: () => void,
    path?: string,
    children?: React.ReactNode,
    className?: string,
    active?: boolean;
}


export interface SsItemBaseProps {
    onNavigate?: (link: string) => void;
    testid?: string,
}

export interface SsMenuProps<T> extends SsItemBaseProps, BaseMenuItemProps {
    menus: IMenuConfig<T>[],
    currentPath?: string,
    appPrefix?: string,
    defaultExpand?: boolean,
}
