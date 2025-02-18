import {MenuItemProps} from "../SsMenu/SsMenu.types";
import React from "react";

const SsMenuItem: React.FC<MenuItemProps> = ({
                                                 testid,
                                                 children,
                                                 className,
                                                 onClick,
                                                 active = false,
                                                 path,
                                                 onNavigate,
                                             }: MenuItemProps) => {

    if (path === '' || path == null) {
        return <li data-testid={testid}>
            <div className="header">{children}</div>
        </li>;
    }

    return (
        <li data-testid={testid} className={`${active ? `selected` : ''} ${className}`} onClick={onClick}>
            <a onClick={() => {
                onNavigate && onNavigate(path)
            }}>
                {children}
            </a>
        </li>
    );
};
export default SsMenuItem;
