import React from "react";
import {IMenuConfig, SsMenuProps,} from "./SsMenu.types";
import SsMenuList from "../SsMenuList";

const SsMenu = <T,>({testid, menus, ...rest}: SsMenuProps<T>) => {
    const matchChildrenActivePath = (children: IMenuConfig<T>[] | undefined, currentPath: string | undefined) => {
        if (!currentPath) return false;
        if (!children) return false;
        return !!children.map((child) => child.link).find((link) => link === currentPath);
    }
    const menuList = menus.map((menu) => <SsMenuList
        defaultExpand={matchChildrenActivePath(menu.child, rest.currentPath)}
        menu={menu} {...rest}
        key={'ss-menu' + menu.id}/>
    );
    return (
        <ul data-testid={testid ? testid : 'ss-menu'} className='ss-menu'>
            {menuList}
        </ul>
    );
};

export default SsMenu;
