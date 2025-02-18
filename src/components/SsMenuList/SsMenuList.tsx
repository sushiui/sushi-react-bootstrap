import React, {ReactNode, useState} from "react";
import {IMenuConfig} from "../SsMenu/SsMenu.types";
import SsMenuItem from "../SsMenuItem";
import SsIcon from "../SsIcon";
import {SsMenuListProps} from "./SsMenuList.types";
import DotIcon from "../SsMenuItem/DotIcon";
import {useSsPermissions} from "../SsProvider";
import {evaluateCondition} from "../SsProvider/SsPermission.types";
import {useSsCurrentEnv} from "../SsProvider/SsMenuPermissionProvider";

const isActive = (path: string, cPath: string, matchRoute?: RegExp, appPrefix?: string): boolean => {
    if (matchRoute) return matchRoute.test(cPath);
    if (appPrefix) cPath = cPath.replace(appPrefix, '');
    return path === cPath || `/${path}` === cPath;
};

const defaultRenderIcon = (icon: ReactNode) => icon;

const defaultRenderExpandIcon = (expand: boolean) => (
    <SsIcon name={expand ? "Minimize-arrow" : "Maximize-arrow"}/>
);

const SsMenuList = <T, >({
                             menu,
                             expanded: controlledExpand,
                             onExpandChange,
                             renderIcon = defaultRenderIcon,
                             renderExpandIcon = defaultRenderExpandIcon,
                             menuItemClassName = "",
                             currentPath = '',
                             defaultExpand = false,
                             onNavigate,
                             appPrefix = '',
                         }: SsMenuListProps<T>) => {

    const [internalExpand, setInternalExpand] = useState(defaultExpand);
    const expand = controlledExpand !== undefined ? controlledExpand : internalExpand;

    const menuPermission = useSsPermissions();
    const envProfile = useSsCurrentEnv();

    const toggleExpand = () => {
        const newExpand = !expand;
        setInternalExpand(newExpand);
        if (onExpandChange) onExpandChange(newExpand);
    };

    // Add generic type T to menuItem
    const renderMenuItem = (menuItem: IMenuConfig<T>, isChild = false) => {
        const hasPermission = menuItem.containsField
            ? evaluateCondition(menuPermission, menuItem.containsField)
            : true;

        if (!hasPermission) {
            return null;
        }
        if (menuItem.envs && !menuItem.envs.includes(envProfile)) {
            return null;
        }

        return (
            <SsMenuItem
                path={menuItem.link}
                key={`menu-item-${menuItem.id}`}
                className={menuItemClassName}
                onClick={isChild ? undefined : toggleExpand}
                active={isActive(menuItem.link, currentPath, menuItem.matchRoute, appPrefix)}
                onNavigate={onNavigate}
            >
                {isChild ? <DotIcon/> : renderIcon(menuItem.icon)}
                <span className={'label'} style={{fontSize: '13px', fontWeight: '500'}}>
                    {menuItem.display || "\u00A0"}
                </span>
                {menuItem.child && renderExpandIcon(expand)}
            </SsMenuItem>
        );
    };

    const renderChildMenus = (children: IMenuConfig<T>[]) =>
        expand && children.map((child) => renderMenuItem(child, true));

    return (
        <>
            {renderMenuItem(menu)}
            {menu.child && renderChildMenus(menu.child)}
        </>
    );
};

export default SsMenuList;
